# Layout appender for log4js-node

Targeted as "ESNext" module
This is used for formatting [log] events. This is an optional [layout] appender for use with [log4js](https://log4js-node.github.io/log4js-node/).
Original source package is from : https://www.npmjs.com/package/log4js-json-layout

possible layouts:

-   JSON
-   formatted text for Google Hangouts

## Configuration

```bash
npm install log4js-layouts
```

## Example

```javascript
import * as log4js from 'log4js';
import { jsonLayout } from 'log4js-layouts';
import os = require('os');

const loggers: { [key: string]: log4js.Logger } = {};

/**
 * @description Get logger with configuration
 */
export default function getLogger(category?: string): log4js.Logger {
    if (!category) {
        category = '';
    }
    if (loggers[category] === undefined) {
        configureLog4js();
        loggers[category] = log4js.getLogger(category);
    }
    return loggers[category];
}

/**
 * @description Log4js configuration
 */
function configureLog4js(): void {
    log4js.addLayout(messageOutputType.JSON, jsonLayout);
    log4js.addLayout(messageOutputType.HANGOUT, hangoutLayout);
    log4js.addLayout(messageOutputType.COLORED_CONSOLE, coloredConsoleLayout);

    const currentAppenders: Array<string> = [];
    currentAppender.push('consoleAppender');

    log4js.addLayout('json', jsonLayout); // here is a requested

    log4js.configure({
        appenders: {
            consoleAppender: {
                type: 'console',
                messageParam: 'msg',
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
                appenders: currentAppenders,
                level: config.logging.logLevel.toString(),
            },
        },
    });
}

const logger = getLogger();
logger.warn('App start');

```

# colored_console_layout

Used for color format data - from input data (any) returns JSON of all data to output - add env variables - add static or dynamic variable to output json - add colored information to debug typescript window - based on mapping in defaultLevelColors - RETURNS string looked as JSON but with colored modifications

# json_layout

Used for JSON format data - - from input data (any) returns JSON of all data to output - add env variables - add static or dynamic variable to output json - RETURNS clean JSON (used for example for mongo)

# hangout_layout

Used for JSON format data - - from input data (any) returns JSON of all data to output - add env variables - add static or dynamic variable to output json - trims data to 4000 characters - RETURNS STRING formatted for google chat

# version

    - 0.1.5 - migrate to github.com/forgetcz/
