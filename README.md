# Layout appender for log4js-node-next

This is an optional layout appender for use with [log4js-node-next](https://www.npmjs.com/package/log4js-node-next).
Original source package is from : https://www.npmjs.com/package/log4js-json-layout

possible layouts:

-   JSON
-   formatted text for Google Hangouts

# Simple example

````bash
npm i log4js-node-next
npm i log4js-layouts
```

```TypeScript
import { configureLogger, getLogger, logLevels } from 'log4js-node-next';
import { eCoreAppenderType } from 'log4js-node-next/dist/types/enums.js';
import { jsonLayout } from 'log4js-layouts';
import os = require('os');

if (require.main === module) {
    log4js.addLayout(messageOutputType.COLORED_CONSOLE, coloredConsoleLayout);

    configureLogger({
        appenders: {
            consoleAppender: {
                type: eCoreAppenderType.console,
                layout: {
                    appName: 'your-app-name',
                    source: 'source of message - development/production/...',
                    static: {  // Static variables
                        env: {
                            host: 'your-server-name-a4',
                            type: 'system platform- os.platform()',
                            hostname: os.hostname(),
                        },
                    },
                    dynamic: {},                // Dynamic variables
                    colors: true,               // Use colors for string object
                    maxDepth: 5,                // Maximum depth of serialize error
                    type: 'json',               // formatting string as (json/string)
                    msgOutputType: 'string',    // return message type (json/string)
                    dateTimeFormat: {
                        format: "yyyy-MM-dd'T'HH:mm:ss.SSSXXX", //  Format of the message timezone
                        timeZone:'Europe/Prague',   //Time zone name or offset string https://github.com/heineiuo/date-fns-format-zone/blob/master/timezone.json*/
                    },
                },
            },
        },
        categories: {
            default: {
                appenders: [`consoleAppender`],
                minLevel: logLevels.DEBUG,
                maxLevel: logLevels.FATAL,
            },
        },
    })
        .then(() => {
            const logger = getLogger();
            const debugFunctions = logger.debug('Debug message...');

            Promise.allSettled(debugFunctions).then((res) => {
                const resErr = res.filter((f) => f.status === 'rejected');

                if (resErr.length > 0) {
                    console.error('There is a error in debugger processing');
                }
            });
        })
        .catch((err) => {
            console.error(err);
        });
}
````

# colored_console_layout

Used for color format data - from input data (any) returns JSON of all data to output - add env variables - add static or dynamic variable to output json - add colored information to debug typescript window - based on mapping in defaultLevelColors - RETURNS string looked as JSON but with colored modifications

# json_layout

Used for JSON format data - - from input data (any) returns JSON of all data to output - add env variables - add static or dynamic variable to output json - RETURNS clean JSON (used for example for mongo)

# hangout_layout

Used for JSON format data - - from input data (any) returns JSON of all data to output - add env variables - add static or dynamic variable to output json - trims data to 4000 characters - RETURNS STRING formatted for google chat

# version

    - 0.1.5 - migrate to github.com/forgetcz/
