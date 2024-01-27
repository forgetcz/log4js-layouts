import { formatErrorLogData } from '../../libs/format-error-log-data';
import { mockJsonLayoutConfig } from '../__mocks__/mock-config';
import content from '../__mocks__/mock-format-error-log';

describe('Test serialize errors and format', () => {
    const result = formatErrorLogData(content);

    it('Typeof result should be object', () => {
        expect(typeof result[0]).toBe('object');
        expect(typeof result[1]).toBe('object');
        expect(typeof result[1].error).toBe('object');
        expect(typeof result[1].detailInfo.anotherErr).toBe('object');
    });
    it('Names should be Error', () => {
        expect(result[0].name).toBe('Error');
        expect(result[1].error.name).toBe('Error');
        expect(result[1].detailInfo.anotherErr.name).toBe('Error');
    });
    it('Values of messages should be typeof string', () => {
        expect(typeof result[0].message).toBe('string');
        expect(typeof result[1].error.message).toBe('string');
        expect(typeof result[1].detailInfo.anotherErr.message).toBe('string');
    });
    it('Values of detailInfo should be typeof their declaration', () => {
        expect(typeof result[1].detailInfo.parameter1).toBe('number');
        expect(typeof result[1].detailInfo.parameter2).toBe('object');
    });
});
