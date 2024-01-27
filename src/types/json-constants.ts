/** @description Default level colors  */
export const defaultLevelColors = {
    ALL: 'grey',
    TRACE: 'blue',
    DEBUG: 'cyan',
    INFO: 'green',
    WARN: 'yellow',
    ERROR: 'red',
    FATAL: 'magenta',
    MARK: 'grey',
    OFF: 'grey',
};

/**
 * @description Output format type
 * @enum {number}
 */
export enum messageOutputType {
    /* eslint-disable no-unused-vars */
    JSON = 'json',
    COLORED_CONSOLE = 'colored_console',
    HANGOUT = 'hangout',
    FILE_CSV = 'file_csv',
}

/** @description Output environment type (development/production/test */
export enum environment {
    /* eslint-disable no-unused-vars */
    DEVELOPMENT = 'development',
    PRODUCTION = 'production',
    TEST = 'test',
}
