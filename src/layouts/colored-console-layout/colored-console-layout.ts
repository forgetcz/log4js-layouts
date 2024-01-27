import lodash from 'lodash';
import { ILoggingEvent } from 'log4js-node-next';
import { addLayout } from 'log4js-node-next/dist';
import { ILayoutConfig, IOutputMessage } from '../../types/types';
import { commonMessageFormatter } from '../libs/common-message-formatter';
import { defaultLayoutConfig } from '../libs/default-config';
import { coloredConsoleFormatter } from './colored-console-formatter';

/**
 * @description Function for format input to required (JSON) layout
 *
 * @export
 * @param {ILayoutConfig} config Json options setting
 * @return {(data: ILoggingEvent) => any}
 */
export function coloredConsoleLayout(
    config: ILayoutConfig, // eslint-disable-next-line @typescript-eslint/no-explicit-any
): (data: ILoggingEvent) => any {
    // merge config with default
    const currentConfig: ILayoutConfig = lodash.merge(
        {},
        defaultLayoutConfig,
        config,
    );

    /** @description Layout function, called from log4js core method to format output message */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function layout(loggingEvent: ILoggingEvent): any {
        const jsonOutput: IOutputMessage = commonMessageFormatter(
            loggingEvent,
            currentConfig,
        );

        const result: string = coloredConsoleFormatter(
            currentConfig,
            jsonOutput,
            loggingEvent,
        );

        return result;
    };
}

export function coloredConsoleLayoutNew(
    config: ILayoutConfig, // eslint-disable-next-line @typescript-eslint/no-explicit-any
): (loggingEvent: ILoggingEvent) => unknown {
    // merge config with default
    const currentConfig: ILayoutConfig = lodash.merge(
        {},
        defaultLayoutConfig,
        config,
    );

    /** @description Layout function, called from log4js core method to format output message */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function layout(loggingEvent: ILoggingEvent): unknown {
        const jsonOutput: IOutputMessage = commonMessageFormatter(
            loggingEvent,
            currentConfig,
        );

        const result: string = coloredConsoleFormatter(
            currentConfig,
            jsonOutput,
            loggingEvent,
        );

        return result;
    };
}

if (require.main === module) {
    // configure();
    addLayout('', coloredConsoleLayoutNew);
}
