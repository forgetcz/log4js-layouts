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
        parameters: [
            {
                anotherErr: new Error('Mock inner error object.'),
                code: 'CAT_TIRE_OFFERING_1',
                name: 'Všechny prodejní nabídky',
                description: 'Všechny prodejní nabídky',
            },
            {
                anotherErr: new Error('Mock inner error object.'),
                code: 'CAT_TIRE_OFFERING_7',
                name: 'Prodejní nabídky pro PN-CZ',
                description: 'Prodejní nabídky pro PN-CZ',
            },
        ],
    },
};
