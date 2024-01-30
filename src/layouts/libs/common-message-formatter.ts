import lodash from 'lodash';
import { ILoggingEvent } from 'log4js-node-next';
import { ILayoutConfig, IOutputMessage } from '../../types/types';
import { formatErrorLogData } from './format-error-log-data';

/**
 * @description Add common information to message (start time, category, source, level as is set in config)
 *      replace all Error object with the some information but like as structure
 *
 * @export
 * @param {ILoggingEvent} loggingEvent logging event
 * @param {ILayoutConfig} currentConfig current config for appender (Hangout/mongo/colored console/...)
 * @return {IOutputMessage}
 */
export function commonMessageFormatter(
    loggingEvent: ILoggingEvent,
    currentConfig: ILayoutConfig,
): IOutputMessage {
    const rawData = lodash.clone(loggingEvent);

    const outputMessage: IOutputMessage = {
        appName: currentConfig.appName,
        timeStamp: rawData.startTime,
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

    outputMessage.content = formatErrorLogData(rawData.data);

    // remove array on single record
    if (
        lodash.isArray(outputMessage.content) &&
        outputMessage.content?.length === 1
    ) {
        outputMessage.content = outputMessage.content[0];
    }

    return outputMessage;
}
