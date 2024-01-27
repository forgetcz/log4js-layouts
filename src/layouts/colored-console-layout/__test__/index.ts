import {
    ILoggingFunctionResponse,
    IPromiseResult,
    addLayout,
    configureLogger,
    getLogger,
    logLevels,
} from 'log4js-node-next';
import { coloredConsoleLayout } from '../colored-console-layout';
// import { coloredConsoleLayout } from '../colored-console-layout';

async function runIt(): Promise<void> {
    addLayout(`json`, coloredConsoleLayout);

    await configureLogger({
        appenders: {
            consoleAppender: {
                type: `console`,
                layout: {
                    type: `json`,
                },
            },
            consoleAppenderByLevel: {
                type: `logLevelFilter`,
                appender: `consoleAppender`,
                minLevel: logLevels.ALL,
                maxLevel: logLevels.ERROR,
            },
        },
        categories: {
            default: {
                appenders: [`consoleAppenderByLevel`],
            },
        },
    });
    const logger = getLogger(``);

    Promise.allSettled(logger.debug(`xxxxx`)).then((res) => {
        console.debug(res);
    });

    const promisesRes = (await Promise.allSettled(
        logger.debug(`xxxxx`),
    )) as IPromiseResult<ILoggingFunctionResponse>[];

    promisesRes
        .filter((f) => f.status === 'fulfilled')
        .forEach((fe) => {
            console.debug(fe.status, fe.value);
        });

    promisesRes
        .filter((f) => f.status === 'rejected')
        .forEach((fe) => {
            console.debug(fe.status, fe.reason);
        });
}

if (require.main === module) {
    runIt();
}
