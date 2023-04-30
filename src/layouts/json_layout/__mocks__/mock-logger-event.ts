import { levels, LoggingEvent as LoggingEventInterface } from 'log4js';
const LoggingEvent: any = require('log4js/lib/LoggingEvent');
//import { mockMessage } from './mock-message-json';
import { mockMessage } from './mock-message-error';
//import { mockMessage } from './mock-message-standard-error';
//import { mockMessage } from './mock-message-text';
//import { mockMessage } from './mock-message-undefined';

export const loggerEvent: LoggingEventInterface = new LoggingEvent(
    'default',
    levels.DEBUG,
    [mockMessage],
    '',
    '',
);
