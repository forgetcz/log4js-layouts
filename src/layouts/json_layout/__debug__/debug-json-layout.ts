import * as fs from 'fs';
import { mockJsonLayoutConfig } from '../__mocks__/mock-config';
import { loggerEvent } from '../__mocks__/mock-logger-event';
import { jsonLayout } from '../json-layout';

if (require.main === module) {
    const jsonLayoutFnc = jsonLayout(mockJsonLayoutConfig);

    let outputLogMessage = jsonLayoutFnc(loggerEvent);

    console.log(outputLogMessage);

    /*if (mockJsonLayoutConfig.msgOutputType === messageOutputType.JSON) {
        outputLogMessage = JSON.stringify(outputLogMessage, undefined, 4);
    } else {
        console.log(outputLogMessage);
    }*/

    fs.writeFile('outputLogMessage.txt', outputLogMessage, (err) => {
        if (err) {
            console.error(err);
        }
    });
}
