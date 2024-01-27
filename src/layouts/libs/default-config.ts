import * as os from 'os';
import { InspectOptions } from 'util';
import { environment, messageOutputType } from '../../types/json-constants';
import { IDateTimeFormat, ILayoutConfig } from '../../types/types';

/** @description Default configuration for string msgOutputType */
export const defaultJsonLayoutStringFormat: InspectOptions = {
    /**
     * If set to `true`, getters are going to be
     * inspected as well. If set to `'get'` only getters without setter are going
     * to be inspected. If set to `'set'` only getters having a corresponding
     * setter are going to be inspected. This might cause side effects depending on
     * the getter function.
     */
    getters: false,
    showHidden: undefined,
    depth: null,
    colors: undefined,
    customInspect: undefined,
    showProxy: undefined,
    maxArrayLength: null,
    maxStringLength: null,
    breakLength: undefined,
    /**
     * Setting this to `false` causes each object key
     * to be displayed on a new line. It will also add new lines to text that is
     * longer than `breakLength`. If set to a number, the most `n` inner elements
     * are united on a single line as long as all properties fit into
     * `breakLength`. Short array elements are also grouped together. Note that no
     * text will be reduced below 16 characters, no matter the `breakLength` size.
     * For more information, see the example below.
     */
    compact: false,
    sorted: undefined,
};

/** @deprecated Default configuration for error formatting */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const defaultJsonLayoutErrorFormat: any = {
    maxDepth: Number.POSITIVE_INFINITY,
};

/** @description Default configuration for date time output */
export const defaultDateTimeFormat: IDateTimeFormat = {
    /** @description Format tokens ("yyyy-MM-dd'T'HH:mm:ss.SSSXXX") */
    format: "yyyy-MM-dd'T'HH:mm:ss.SSSXXX",
    /** @description Time zone name or offset string ('Europe/Prague',...): https://github.com/heineiuo/date-fns-format-zone/blob/master/timezone.json*/
    timeZone: 'Europe/Prague',
};

/** @description Default configuration for json layout */
export const defaultLayoutConfig: ILayoutConfig = {
    /** @description Log4js key for layout appender */
    type: messageOutputType.JSON,
    /** @description Application name of log */
    appName: 'DEFAULT APPLICATION NAME',
    /** @description Type of application environment */
    source: environment.DEVELOPMENT,
    /** @description Object, name value pairs of this object are added to output - app name for example*/
    static: {
        env: {
            host: 'DEFAULT HOST',
            type: os.platform(),
            hostname: os.hostname(),
        },
    },
    /** @description object, where each value is a no-argument function that must return a primitive type(no object no pointer to other function). The key and the function's return value are added to the output */
    dynamic: undefined,
    /** @description Format setting for string output formatting */
    stringFormat: defaultJsonLayoutStringFormat,
    /** @description Format setting of errors */
    errorFormat: defaultJsonLayoutErrorFormat,
    /** @description Format of the message timezone */
    dateTimeFormat: defaultDateTimeFormat,
};
