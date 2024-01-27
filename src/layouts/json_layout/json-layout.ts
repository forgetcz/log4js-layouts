import lodash from 'lodash';
import { ILoggingEvent } from 'log4js-node-next';
import { ILayoutConfig, IOutputMessage } from '../../types/types';
import { commonMessageFormatter } from '../libs/common-message-formatter';
import { defaultLayoutConfig } from '../libs/default-config';

/**
 * @description Function for format input to required (JSON) layout
 *
 * @export
 * @param {ILayoutConfig} config Json options setting
 * @return {(data: ILoggingEvent) => any}
 */
export function jsonLayout(
    config: ILayoutConfig,
): (data: ILoggingEvent) => any {
    // merge config with default

    const currentConfig: ILayoutConfig = lodash.merge(
        {},
        defaultLayoutConfig,
        config,
    );

    return function layout(loggingEvent: ILoggingEvent): any {
        const result: IOutputMessage = commonMessageFormatter(
            loggingEvent,
            currentConfig,
        );

        return result;
    };
}
