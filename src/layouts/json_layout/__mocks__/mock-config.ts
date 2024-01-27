import { environment, messageOutputType } from '../../../types/json-constants';

export const mockJsonLayoutConfig = {
    appName: 'Mock app name',
    source: environment.TEST,
    static: {
        env: {
            host: 'Mock host',
        },
    },
    type: messageOutputType.JSON,
    stringFormat: {
        //        depth: null,
        colors: true,
        maxStringLength: null,
        showHidden: false,
    },
    errorFormat: {
        maxDepth: 50,
    },
    dateTimeFormat: {
        format: 'yyyy-MM-dd HH:mm:ss',
        timeZone: 'Europe/Berlin',
    },
};
