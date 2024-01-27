import { mockMessage } from '../../json_layout/__mocks__/mock-message-error';
import { formatErrorLogData } from '../format-error-log-data';

if (require.main === module) {
    const message = mockMessage;
    const m = formatErrorLogData([message, message]);
    console.log(m);
}
