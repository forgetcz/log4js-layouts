import { format } from 'date-fns-tz';
import * as lodash from 'lodash';
import { LoggingEvent } from 'log4js';
import { IJsonLayoutConfig, IOutputMessage } from '../../../types/types';
import { formatErrorLogData } from './format-error-log-data';

/**
 * @description Add common information to message (start time, category, source, level as is set in config)
 *      replace all Error object with the some information but like as structure
 *
 * @param raw Raw logging event
 * @param currentConfig current config for appender (Hangout/mongo/colored console/...)
 * @returns {IOutputMessage}
 */
export function commonMessageFormatter(
    raw: LoggingEvent,
    currentConfig: IJsonLayoutConfig
): IOutputMessage {
    const rawData = lodash.clone(raw);

    const outputMessage: IOutputMessage = {
        appName: currentConfig.appName,
        timeStamp: format(
            rawData.startTime,
            currentConfig?.dateTimeFormat?.format as string,
            {
                timeZone: currentConfig.dateTimeFormat?.timeZone,
            }
        ),
        level: rawData.level.levelStr,
        source: currentConfig.source,
        content: [],
    };

    // Emit own properties of config.static if specified
    if (lodash.has(currentConfig, 'static')) {
        outputMessage.static = {};
        Object.assign(outputMessage, currentConfig.static);
    }

    // Emit properties set by using functions defined in 'dynamic'
    if (lodash.has(currentConfig, 'dynamic')) {
        // Iterate over the 'dynamic' properties
        lodash.forIn(currentConfig.dynamic, (dynamicFunction, key) => {
            if (lodash.isFunction(dynamicFunction)) {
                try {
                    const value = dynamicFunction();
                    outputMessage[key as keyof typeof outputMessage] = value;
                } catch (err) {
                    const error = err as Error;
                    outputMessage[key as keyof typeof outputMessage] =
                        error.message;
                }
            }
        });
    }

    outputMessage.content = formatErrorLogData(rawData.data, currentConfig);

    // remove array on single record
    if (
        lodash.isArray(outputMessage.content) &&
        outputMessage.content?.length === 1
    ) {
        outputMessage.content = outputMessage.content[0];
    }

    return outputMessage;
}
