import { environment, messageOutputType } from '../../../types/json-constants';
import { ILayoutConfig, IOutputMessage } from '../../../types/types';
import { hangoutFormatter } from '../hangout-formatter';

if (require.main === module) {
    const currentConfig: ILayoutConfig = {
        type: messageOutputType.HANGOUT,
        appName: 'is-adapter',
        source: environment.DEVELOPMENT,
        static: {
            env: {
                host: 'localhost',
                type: 'win32',
                hostname: 'NB-VRABEC3',
            },
        },
        dynamic: undefined,
        stringFormat: {
            getters: false,
            showHidden: undefined,
            depth: null,
            colors: undefined,
            customInspect: undefined,
            showProxy: undefined,
            maxArrayLength: null,
            maxStringLength: null,
            breakLength: undefined,
            compact: false,
            sorted: undefined,
        },
        errorFormat: {
            maxDepth: Infinity,
        },
        dateTimeFormat: {
            format: "yyyy-MM-dd'T'HH:mm:ss.SSSXXX",
            timeZone: 'Europe/Prague',
        },
    };
    const commonEventData: IOutputMessage = {
        appName: 'is-adapter',
        timeStamp: '2022-08-04T12:03:39.691+02:00',
        level: 'WARN',
        source: 'development',
        content: {
            error: {
                name: 'Error',
                message: 'Pokus 1',
                stack: 'Error: Pokus 1\n    at Object.<anonymous> (c:\\Users\\jiriv\\source\\repos\\is-adapter\\dist\\config\\__mocks__\\log4jsconfig.js:9:12)\n    at Module._compile (node:internal/modules/cjs/loader:1105:14)\n    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)\n    at Module.load (node:internal/modules/cjs/loader:981:32)\n    at Function.Module._load (node:internal/modules/cjs/loader:822:12)\n    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)\n    at node:internal/main/run_main_module:17:47',
            },
            detailInfo: {
                logPrefix: '',
                body: '{\n    "body": {}\n}',
            },
        },
        /* env: {
            host: 'localhost',
            type: 'win32',
            hostname: 'NB-VRABEC3',
        },*/
    };
    const raw = {
        startTime: {},
        categoryName: 'default',
        data: [
            {
                error: {
                    name: 'Error',
                    message: 'Pokus 1',
                    stack: 'Error: Pokus 1\n    at Object.<anonymous> (c:\\Users\\jiriv\\source\\repos\\is-adapter\\dist\\config\\__mocks__\\log4jsconfig.js:9:12)\n    at Module._compile (node:internal/modules/cjs/loader:1105:14)\n    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)\n    at Module.load (node:internal/modules/cjs/loader:981:32)\n    at Function.Module._load (node:internal/modules/cjs/loader:822:12)\n    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)\n    at node:internal/main/run_main_module:17:47',
                },
                detailInfo: {
                    logPrefix: '',
                    body: '{\n    "body": {}\n}',
                },
            },
        ],
        level: {
            level: 30000,
            levelStr: 'WARN',
            colour: 'yellow',
        },
        context: {},
        pid: 23800,
    };

    hangoutFormatter(currentConfig, commonEventData, raw as any);
}
