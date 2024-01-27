/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @description Error object cannot be transferred through the web because cannot be serialized.
 *   Therefore we replace all error messages in the input object with the data with the some structure and data.
 *
 * @export
 * @param {(any | any[])} content
 * @return {*}
 */
export function formatErrorLogData(content: any | any[]): any {
    if (content instanceof Error) {
        content = {
            name: content?.name,
            message: content?.message,
            stack: content?.stack,
        };
    } else if (Array.isArray(content)) {
        for (let i = 0; i < content.length; i++) {
            content[i] = formatErrorLogData(content[i]);
        }
    } else if (content instanceof Object) {
        const objectKeys = Object.keys(content);
        for (let i = 0; i < objectKeys.length; i++) {
            content[objectKeys[i]] = formatErrorLogData(content[objectKeys[i]]);
        }
    }

    return content;
}
