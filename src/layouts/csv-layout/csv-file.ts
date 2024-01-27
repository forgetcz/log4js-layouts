import lodash from 'lodash';
import { ILoggingEvent } from 'log4js-node-next';
// import { EOL } from 'os';
import { ILayoutConfig, IOutputMessage } from '../../types/types';
import { commonMessageFormatter } from '../libs/common-message-formatter';
import { defaultLayoutConfig } from '../libs/default-config';

function jsonToCsv(items: any[]): string {
    const header = Object.keys(items[0]);
    const headerString = header.join(',');
    // handle null or undefined values here
    const replacer = (_key: string, value: string): string => value ?? '';

    const rowItems = items.map((row) =>
        header
            .map((fieldName) => JSON.stringify(row[fieldName], replacer))
            .join(','),
    );
    // join header and body, and break into separate lines
    const csv = [headerString, ...rowItems].join('\r\n');
    return csv;
}
/**
 * @description Function for format input to required (CSV) layout
 *
 * @export
 * @param {ILayoutConfig} config Json options setting
 * @return {(data: ILoggingEvent) => any }
 */
export function csvLayout(
    config: ILayoutConfig,
): (loggingEvent: ILoggingEvent) => any {
    // merge config with default
    const currentConfig: ILayoutConfig = lodash.merge(
        {},
        defaultLayoutConfig,
        config,
    );

    /** @description Layout function, called from log4js core method to format output message */
    return function layout(loggingEvent: ILoggingEvent): any {
        const result: IOutputMessage = commonMessageFormatter(
            loggingEvent,
            currentConfig,
        );

        // const strData = loggingEvent.data.join(EOL);
        const fileFormat = jsonToCsv([result]);
        //                  [2023-09-22T04:57:28.627] [INFO]         default                     -  Server is running: ..
        // const fileFormat = `[${result.timeStamp}] [${result.level}] ${loggingEvent.categoryName} - ${strData}`;

        return fileFormat;
    };
}
