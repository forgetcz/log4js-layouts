import { coloredConsoleLayout as coloredConsoleLayoutExport } from './layouts/colored-console-layout/colored-console-layout';
import { csvLayout as csvLayoutExport } from './layouts/csv-layout/csv-file';
import { hangoutLayout as hangoutLayoutExport } from './layouts/hangout_layout/hangout-layout';
import { jsonLayout as jsonLayoutExport } from './layouts/json_layout/json-layout';
import { ILayoutConfig } from './types/types';

/**
 * @description Exported version of json layout function
 * @param {ILayoutConfig} config     Config for json formatting
 * @return {any}                        returned value for log4js background process
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
export function jsonLayout(config: ILayoutConfig): any {
    return jsonLayoutExport(config);
}

/**
 * @description Exported version of hangout layout function
 * @param {ILayoutConfig} config     Config for json formatting
 * @return {any}                        returned value for log4js background process
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
export function hangoutLayout(config: ILayoutConfig): any {
    return hangoutLayoutExport(config);
}

/**
 * @description Exported version of colored console  layout function
 * @param {ILayoutConfig} config     Config for json formatting
 * @return {any}                        returned value for log4js background process
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
export function coloredConsoleLayout(config: ILayoutConfig): any {
    return coloredConsoleLayoutExport(config);
}

/**
 * @description Exported version of csv layout function
 * @param {ILayoutConfig} config     Config for json formatting
 * @return {any}                     returned value for log4js background process
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
export function csvLayout(config: ILayoutConfig): any {
    return csvLayoutExport(config);
}
