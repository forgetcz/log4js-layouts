import * as lodash from 'lodash';
import { IJsonLayoutConfig } from '../../../types/types';
import mapObject = require('map-obj');
import serializeError = require('serialize-error');

/**
 * @description Error object cannot be transferred through the web because cannot be serialized.
 *  Therefore we replace all error messages in the input object with the data with the some structure and data.

 * @param {any[]} content Input array object to transform Errors to json
 * @param {IJsonLayoutConfig} options options
 */
export function formatErrorLogData(
    content: any[],
    options: IJsonLayoutConfig
): any {
    if (lodash.isArray(content) && content?.length) {
        for (let i = 0; i < content.length; i++) {
            let contentItem = content[i];
            if (contentItem instanceof Error) {
                contentItem = serializeError.serializeError(
                    contentItem,
                    options.errorFormat
                );
            } else if (lodash.isObject(contentItem)) {
                const mapperFnc: mapObject.Mapper<
                    { [key: string]: any },
                    string,
                    any
                > = (key: any, value: any) => {
                    if (value instanceof Error) {
                        value = serializeError.serializeError(
                            value,
                            options.errorFormat
                        );
                    }

                    return [key, value];
                };

                contentItem = mapObject(contentItem, mapperFnc, {
                    deep: true,
                });
            }

            content[i] = contentItem;
        }
    }

    return content;
}
