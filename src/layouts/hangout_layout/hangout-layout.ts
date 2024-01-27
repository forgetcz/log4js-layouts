import * as lodash from 'lodash';
import { ILoggingEvent } from 'log4js-node-next';
import { ILayoutConfig, IOutputMessage } from '../../types/types';
import { commonMessageFormatter } from '../libs/common-message-formatter';
import { defaultLayoutConfig } from '../libs/default-config';
import { hangoutFormatter } from './hangout-formatter';

/**
 * @description Function for format input to required (HANGOUTS max 4000 characters) layout
 *          returns .
 *
 * @export
 * @param {ILayoutConfig} config Json options setting
 * @return {(data: ILoggingEvent) => any}
 */
export function hangoutLayout(
    config: ILayoutConfig,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
): (data: ILoggingEvent) => any {
    // merge config with default
    const currentConfig: ILayoutConfig = lodash.merge(
        {},
        defaultLayoutConfig,
        config,
    );

    /** @description Layout function, called from log4js core method to format output message */
    return function layout(loggingEvent: ILoggingEvent): any {
        const commonJsonOutput: IOutputMessage = commonMessageFormatter(
            loggingEvent,
            currentConfig,
        );

        const hangOutMessages = hangoutFormatter(
            currentConfig,
            commonJsonOutput,
            loggingEvent,
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
