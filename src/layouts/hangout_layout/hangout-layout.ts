import * as lodash from 'lodash';
import { LoggingEvent } from 'log4js';
import { IJsonLayoutConfig, IOutputMessage } from '../../../types/types';
import { commonMessageFormatter } from '../libs/common-message-formatter';
import { defaultJsonLayoutConfig } from '../libs/default-config';
import { hangoutFormatter } from './hangout-formatter';

/**
 * @description Function for format input to required (HANGOUTS max 4000 characters) layout
 *          returns .
 * @export
 * @param {IJsonLayoutConfig} config Json options setting
 * @return {string | string[]}
 */
export function hangoutLayout(
    config: IJsonLayoutConfig
): (data: LoggingEvent) => any {
    // merge config with default
    const currentConfig: IJsonLayoutConfig = lodash.merge(
        {},
        defaultJsonLayoutConfig,
        config
    );

    /** @description Layout function, called from log4js core method to format output message */
    return function layout(data: LoggingEvent): any {
        const commonJsonOutput: IOutputMessage = commonMessageFormatter(
            data,
            currentConfig
        );

        const hangOutMessages = hangoutFormatter(
            currentConfig,
            commonJsonOutput,
            data
        );

        // return type can be string or array of string, some as result {string|string[]} it is for backward compatibility
        // where expected result is string only
        if (!hangOutMessages.length) {
            return '';
        } else if (hangOutMessages.length === 1) {
            return hangOutMessages[0];
        } else {
            return hangOutMessages;
        }
    };
}
