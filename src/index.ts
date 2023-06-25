import { coloredConsoleLayout as coloredConsoleLayoutExport } from './layouts/colored-console-layout/colored-console-layout';
import { hangoutLayout as hangoutLayoutExport } from '../src/layouts/hangout_layout/hangout-layout';
import { IJsonLayoutConfig } from '../types/types';
import { jsonLayout as jsonLayoutExport } from './layouts/json_layout/json-layout';

/**
 * @description Exported version of json layout function
 * @param {IJsonLayoutConfig} config     Config for json formatting
 * @return {any}                        returned value for log4js background process
 */
export function jsonLayout(config: IJsonLayoutConfig) {
    return jsonLayoutExport(config);
}

/**
 * @description Exported version of hangout layout function
 * @param {IJsonLayoutConfig} config     Config for json formatting
 * @return {any}                        returned value for log4js background process
 */
export function hangoutLayout(config: IJsonLayoutConfig) {
    return hangoutLayoutExport(config);
}

/**
 * @description Exported version of colored console  layout function
 * @param {IJsonLayoutConfig} config     Config for json formatting
 * @return {any}                        returned value for log4js background process
 */
export function coloredConsoleLayout(config: IJsonLayoutConfig) {
    return coloredConsoleLayoutExport(config);
}
