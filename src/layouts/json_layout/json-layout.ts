import * as lodash from 'lodash';
import { LoggingEvent } from 'log4js';
import { IJsonLayoutConfig, IOutputMessage } from '../../../types/types';
import { commonMessageFormatter } from '../libs/common-message-formatter';
import { defaultJsonLayoutConfig } from '../libs/default-config';

/**
 * @description Function for format input to required (JSON) layout
 *
 * @export
 * @param {IJsonLayoutConfig} config Json options setting
 * @return {(data: LoggingEvent) => any }  {*}
 */
export function jsonLayout(
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
        const result: IOutputMessage = commonMessageFormatter(
            data,
            currentConfig
        );
        return result;
    };
}
