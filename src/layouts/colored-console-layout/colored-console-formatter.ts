import * as colors from 'colors';
import * as lodash from 'lodash';
import { LoggingEvent } from 'log4js';
import * as util from 'util';
import { IJsonLayoutConfig, IOutputMessage } from '../../../types/types';
import { defaultLevelColors } from '../../../types/json-constants';

/**
 * @description Function for format input to colored console
 * @param {IJsonLayoutConfig} currentConfig Current config for appender
 * @param {IOutputMessage} commonEventData Common data fot all messages
 * @param {LoggingEvent} data Logging data
 * @returns
 */
export function coloredConsoleFormatter(
    currentConfig: IJsonLayoutConfig,
    commonEventData: IOutputMessage,
    data: LoggingEvent
): string {
    // clone of string format config
    const utilFormatOptions = { ...currentConfig.stringFormat };

    // force colors to false here => be processed by separated tool after
    utilFormatOptions.colors = false;

    let stringOutput = util
        .formatWithOptions(utilFormatOptions, commonEventData)
        .replace(/\\n+/g, '\r\n');

    if (currentConfig.stringFormat?.colors) {
        if (lodash.has(defaultLevelColors, data.level.levelStr)) {
            const color = defaultLevelColors[
                data.level.levelStr as keyof typeof defaultLevelColors
            ] as keyof colors.Color;
            stringOutput = colors[color](stringOutput);
        }
    }

    return stringOutput;
}
