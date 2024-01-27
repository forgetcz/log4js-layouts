import { InspectOptions } from 'util';
import { coloredConsoleLayout as coloredConsoleLayoutExport } from '../layouts/colored-console-layout/colored-console-layout';
import { csvLayout as csvLayoutExport } from '../layouts/csv-layout/csv-file';
import { hangoutLayout as hangoutLayoutExport } from '../layouts/hangout_layout/hangout-layout';
import { jsonLayout as jsonLayoutExport } from '../layouts/json_layout/json-layout';
import { environment } from './json-constants';

/**
 * @description Settings for layout
 *
 * @export
 * @interface jsonLayoutConfig
 */
export interface ILayoutConfig {
    /** @description Log4js key for layout appender */
    type: string;
    /** @description Application name of log */
    appName: string;
    /** @description Type of application environment (DEV/test/live/...) */
    source: environment;
    /** @description Object, name value pairs of this object are added to output - app name for example */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static?: any;
    /** @description object, where each value is a no-argument function that must return a primitive type(no object no pointer to other function). The key and the function's return value are added to the output */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dynamic?: any;
    /** @description Output format of the message */
    stringFormat?: InspectOptions;
    /** @deprecated Format setting of errors - NOT USED IN CURRENT VERSION */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    errorFormat?: any;
    /** @description Format of the message timezone */
    dateTimeFormat?: {
        /** @description Format tokens ("yyyy-MM-dd'T'HH:mm:ss.SSSXXX") */
        format: string;
        /** @description Time zone name or offset string ('Europe/Prague',...): https://github.com/heineiuo/date-fns-format-zone/blob/master/timezone.jsonv */
        timeZone: string;
    };
}

/**
 * @deprecated use IJsonLayoutConfig instead of jsonLayoutConfig
 *
 * @export
 * @interface jsonLayoutConfig
 * @extends {IJsonLayoutConfig}
 */
export type jsonLayoutConfig = ILayoutConfig;

/**
 * @description Output message definition (based on setting)
 *
 * @export
 * @interface outputMessage
 */
export interface IOutputMessage {
    /** @description Application name */
    appName: string;
    /** @description Event date/time */
    timeStamp: string;
    /** @description Level of event (DEBUG/INFO/Error) */
    level: string;
    /** @description Source of message */
    source?: string | undefined;
    /** @description Event data - data in message { message : '', detailInfo : {...} } */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content: any[] | any;
    /** @description Static variables */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static?: any;
    /** @description object, where each value is a no-argument function that must return a primitive type(no object no pointer to other function). The key and the function's return value are added to the output */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dynamic?: any;
}

/**
 * @deprecated Use IOutputMessage instead of outputMessage
 *
 * @export
 * @interface outputMessage
 * @extends {IOutputMessage}
 */
export type outputMessage = IOutputMessage;

/**
 * @description Configuration of date time format
 * @export
 * @interface dateTimeFormat
 */
export interface IDateTimeFormat {
    /** @description Format tokens ("yyyy-MM-dd'T'HH:mm:ss.SSSXXX") */
    format: string;
    /** @description Time zone name or offset string ('Europe/Prague',...): https://github.com/heineiuo/date-fns-format-zone/blob/master/timezone.json*/
    timeZone: string;
}

/**
 * @deprecated  Use IDateTimeFormat instead of dateTimeFormat
 *
 * @export
 * @interface dateTimeFormat
 * @extends {IDateTimeFormat}
 */
export type dateTimeFormat = IDateTimeFormat;

/**
 * @description Exported version of json layout function
 * @param {ILayoutConfig} config     Config for json formatting
 * @return {any}                        returned value for log4js background process
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function jsonLayout(config: ILayoutConfig): any {
    return jsonLayoutExport(config);
}

/**
 * @description Exported version of hangout layout function
 * @param {ILayoutConfig} config     Config for json formatting
 * @return {any}                        returned value for log4js background process
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function hangoutLayout(config: ILayoutConfig): any {
    return hangoutLayoutExport(config);
}

/**
 * @description Exported version of colored console layout function
 * @param {ILayoutConfig} config     Config for json formatting
 * @return {any}                        returned value for log4js background process
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function coloredConsoleLayout(config: ILayoutConfig): any {
    return coloredConsoleLayoutExport(config);
}

/**
 * @description Exported version of csv layout function
 * @param {ILayoutConfig} config     Config for json formatting
 * @return {any}                     returned value for log4js background process
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
export function csvLayout(config: ILayoutConfig): any {
    return csvLayoutExport(config);
}
