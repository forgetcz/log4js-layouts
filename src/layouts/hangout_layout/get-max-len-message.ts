import * as lodash from 'lodash';

/**
 * @description Returns message as string with max defined length
 *
 * @param {any} inputMessage Input message (object or what ever)
 * @param {number} maxMessageLength max message length to return
 * @returns {string}
 */
export function getMaxLengthMessage(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    inputMessage: any,
    maxMessageLength: number,
): string {
    if (maxMessageLength < 1) {
        return '';
    } else {
        const postFix = ' ...'; // bold is not possible to use in code block :()
        let messageResult = '';
        let message = '';

        if (inputMessage?.length || lodash.isObject(inputMessage)) {
            message = inputMessage;
        }

        if (lodash.isObject(message)) {
            message = JSON.stringify(inputMessage, undefined, 2); // 2 = Prettify (two spaces as separator)
        }

        if (message.length > maxMessageLength + postFix.length) {
            const leftMessage = maxMessageLength - postFix.length - 50; // We need some spaces... like for :Message :${EOL}...
            if (leftMessage > 0) {
                messageResult = `${message.substring(
                    0,
                    leftMessage,
                )}${postFix}`;
            }
        } else {
            messageResult = message;
        }

        return messageResult;
    }
}
