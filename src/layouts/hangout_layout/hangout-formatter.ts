import * as lodash from 'lodash';
import { LoggingEvent } from 'log4js-node-next';
import { EOL } from 'os';
import { ILayoutConfig, IOutputMessage } from '../../types/types';
import { getMaxLengthMessage } from './get-max-len-message';

/** @description this is max message length for google hangouts chat, bigger message is not permitted  messageLengthLeft */
export const maxGoogleHangoutMessageLength = 4069;

/**
 * @description APPLICATION: : commonJsonOutput.appName} (tyre-services/is-adapter)
 *
 * @param {IOutputMessage} commonJsonOutput Common JSON output structure
 * @return {string}
 */
function getAppName(commonJsonOutput: IOutputMessage): string {
    const appName = `APPLICATION: ${EOL}*${commonJsonOutput.appName}*`;
    return appName;
}

/**
 * @description get Environment message
 *
 * @param {ILayoutConfig} currentConfig
 * @param {number} messageLengthLeft
 * @return {string}  {string}
 */
function getEnv(
    currentConfig: ILayoutConfig,
    messageLengthLeft: number,
): string {
    let envMessage = '';
    if (currentConfig.static?.env) {
        envMessage = getMaxLengthMessage(
            currentConfig.static.env,
            messageLengthLeft,
        );

        if (envMessage?.length) {
            envMessage = `ENV :${EOL}\`\`\`${envMessage}\`\`\``;
        }
    }

    return envMessage;
}

/**
 * @description
 *
 * @param {string} message
 * @param {number} maxLen
 * @return {string}  {string}
 */
function getMainMessage(
    message: string,
    level: string,
    maxLen: number,
): string {
    const innerPart = getMaxLengthMessage(`${message} - ${level}`, maxLen);

    if (innerPart?.length) {
        const resultMessage = `Message:\`\`\`${innerPart}\`\`\``;
        return resultMessage;
    } else {
        return '';
    }
}

/**
 * https://stackoverflow.com/questions/7033639/split-large-string-in-n-size-chunks-in-javascript
 *
 * @param {string} str
 * @param {number} size
 * @return {string[]}
 */
function chunkSubstr(str: string, size: number): string[] {
    const numChunks = Math.ceil(str.length / size);
    const chunks = new Array(numChunks);

    for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
        chunks[i] = str.substring(o, size);
    }

    return chunks;
}

/**
 * @description Function for format input message event to google hangout format
 * @param {ILayoutConfig} currentConfig Current config for appender
 * @param {ILayoutConfig} commonJsonOutput Common data fot all messages
 * @param {LoggingEvent} rawLoggerData Raw data about event
 * @returns {string[]}
 * @see https://developers.google.com/chat/api/guides/message-formats/basic
 */
export function hangoutFormatter(
    currentConfig: ILayoutConfig,
    commonJsonOutput: IOutputMessage,
    _rawLoggerData: LoggingEvent,
    maxMessageLen: number = maxGoogleHangoutMessageLength,
): string[] {
    let messageLengthLeft: number = maxMessageLen;

    const appName = getAppName(commonJsonOutput);
    messageLengthLeft = messageLengthLeft - appName.length;

    const envMessage = getEnv(currentConfig, messageLengthLeft);
    messageLengthLeft = messageLengthLeft - envMessage.length;

    // #region mainMessage = commonJsonOutput.content?.message || commonJsonOutput?.content?.error?.message || commonJsonOutput?.content || ''
    const message = commonJsonOutput.content?.message?.length
        ? commonJsonOutput.content.message
        : commonJsonOutput?.content?.error?.message?.length
          ? commonJsonOutput.content.error.message
          : commonJsonOutput?.content
            ? commonJsonOutput.content
            : '';

    const mainMessage = getMainMessage(message, commonJsonOutput.level, 80);
    messageLengthLeft = messageLengthLeft - mainMessage.length;
    // #endregion

    // #region Rest of message
    const restOfMessage: string = lodash.isObject(commonJsonOutput.content)
        ? JSON.stringify(commonJsonOutput.content, undefined, 2)
        : commonJsonOutput.content;

    const splitMacSize =
        messageLengthLeft - 50 > 0 ? messageLengthLeft - 50 : messageLengthLeft;
    const arrRestOfMessage = chunkSubstr(restOfMessage, splitMacSize);

    const messageType = arrRestOfMessage.length > 1 ? 'Part ' : 'Full';

    arrRestOfMessage.forEach((value, index) => {
        const item = getMaxLengthMessage(value, splitMacSize);
        arrRestOfMessage[index] =
            `${messageType} message (${index}):${EOL}\`\`\`${item}\`\`\``;
    });

    // #endregion

    const finalResult: string[] = [];
    arrRestOfMessage.forEach((oneMessage) => {
        const oneMessageResult =
            appName +
            EOL +
            EOL +
            mainMessage +
            EOL +
            envMessage +
            EOL +
            oneMessage +
            EOL;

        finalResult.push(oneMessageResult);
    });

    return finalResult;
}
