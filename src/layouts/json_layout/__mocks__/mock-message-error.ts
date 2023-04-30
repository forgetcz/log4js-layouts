export const mockMessage = {
    error: new Error('Mock error object.'),
    detailInfo: {
        logPrefix: 'mockMessage',
        parameter1: 10,
        parameter2: {
            key1: '5',
            key2: new Date(),
            key3: 555,
        },
        anotherErr: new Error('Mock inner error object.'),
    },
};
