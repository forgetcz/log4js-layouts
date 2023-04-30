import { Options } from 'serialize-error';
import { InspectOptions } from 'util';
import { coloredConsoleLayout as coloredConsoleLayoutExport } from '../src/layouts/colored_console_layout/colored-console-layout';
import { hangoutLayout as hangoutLayoutExport } from '../src/layouts/hangout_layout/hangout-layout';
import { jsonLayout as jsonLayoutExport } from '../src/layouts/json_layout/json-layout';
import { environment, messageOutputType } from './json-constants';

/**
 * @deprecated use IJsonLayoutConfig instead of jsonLayoutConfig
 *
 * @export
 * @interface jsonLayoutConfig
 * @extends {IJsonLayoutConfig}
 */
export interface jsonLayoutConfig extends IJsonLayoutConfig {}

/**
 * @description Settings for layout
 *
 * @export
 * @interface jsonLayoutConfig
 */
export interface IJsonLayoutConfig {
    /** @description Log4js key for layout appender */
    type: messageOutputType;
    /** @description Application name of log */
    appName: string;
    /** @description Type of application environment */
    source: environment;
    /** @description Object, name value pairs of this object are added to output - app name for example*/
    static?: any;
    /** @description object, where each value is a no-argument function that must return a primitive type(no object no pointer to other function). The key and the function's return value are added to the output */
    dynamic?: any;
    /** @description Output format of the message */
    stringFormat?: InspectOptions;
    /** @description Format setting of errors */
    errorFormat?: Options;
    /** @description Format of the message timezone */
    dateTimeFormat?: {
        /** @description Format tokens ("yyyy-MM-dd'T'HH:mm:ss.SSSXXX") */
        format: string;
        /** @description Time zone name or offset string ('Europe/Prague',...): https://github.com/heineiuo/date-fns-format-zone/blob/master/timezone.json*/
        timeZone: string;
    };
}

/**
 * @deprecated Use IOutputMessage instead of outputMessage
 *
 * @export
 * @interface outputMessage
 * @extends {IOutputMessage}
 */
export interface outputMessage extends IOutputMessage {}

/**
 * @description Output message definition (based on setting)
 *
 * @export
 * @interface outputMessage
 */
export interface IOutputMessage {
    /** @description Application name*/
    appName: string;
    /** @description Event date/time*/
    timeStamp: string;
    /** @description Level of event */
    level: string;
    /** @description Source of message */
    source?: string | undefined;
    /** @description Event data - data in message { message : '', detailInfo : {...} } */
    content: any[] | any;
    /** @description Static variables */
    static?: any;
    /** @description object, where each value is a no-argument function that must return a primitive type(no object no pointer to other function). The key and the function's return value are added to the output */
    dynamic?: any;
}

/**
 * @deprecated  Use IDateTimeFormat instead of dateTimeFormat
 *
 * @export
 * @interface dateTimeFormat
 * @extends {IDateTimeFormat}
 */
export interface dateTimeFormat extends IDateTimeFormat {}

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
 * @description Exported version of json layout function
 * @param {IJsonLayoutConfig} config     Config for json formatting
 * @return {any}                        returned value for log4js background process
 */
export function jsonLayout(config: IJsonLayoutConfig) {
    return jsonLayoutExport(config);
}

/**
 * @description Exported version of hangout layout function
 * @param {IJsonLayoutConfig} config     Config for json formatting
 * @return {any}                        returned value for log4js background process
 */
export function hangoutLayout(config: IJsonLayoutConfig) {
    return hangoutLayoutExport(config);
}

/**
 * @description Exported version of colored console  layout function
 * @param {IJsonLayoutConfig} config     Config for json formatting
 * @return {any}                        returned value for log4js background process
 */
export function coloredConsoleLayout(config: IJsonLayoutConfig) {
    return coloredConsoleLayoutExport(config);
}
