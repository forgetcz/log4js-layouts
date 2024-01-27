export const mockMessage = {
    error: new Error('Mock error object.'),
    code: 'GThKc3TA',
    name: 'PN-CZ, Metzeler Block 4/- -18 64 P sportovní/cestovní',
    language: 'cs',
    version: { code: 'GThKc3TA_V1', name: 'V1' },
    type: {
        code: 'TYPE_TIRE_PRODUCT_OFFERING',
        name: 'Prodejní nabídka',
        description: 'Prodejní nabídka',
        behaviorModifiers: [
            { code: 'PRODUCT_OFFERING', groupCode: 'ITEM_TYPE_CATEGORY' },
        ],
    },
    state: { code: 'IN_SALE_OFFERED_108' },
    categorizations: [
        {
            hierarchy: {
                code: 'HIER_TIRE_OFFERING',
                name: 'Prodejní nabídky Pneu',
                description: 'Prodejní nabídky Pneu',
                primary: true,
            },
            path: 'CAT_TIRE_OFFERING_1.CAT_TIRE_OFFERING_7.CAT_TIRE_OFFERING_149055_PN-CZ',
            ancestors: [
                {
                    code: 'CAT_TIRE_OFFERING_1',
                    name: 'Všechny prodejní nabídky',
                    description: 'Všechny prodejní nabídky',
                },
                {
                    code: 'CAT_TIRE_OFFERING_7',
                    name: 'Prodejní nabídky pro PN-CZ',
                    description: 'Prodejní nabídky pro PN-CZ',
                },
                {
                    code: 'CAT_TIRE_OFFERING_149055_PN-CZ',
                    name: 'PN-CZ, Block',
                },
            ],
        },
    ],
    parameters: [
        {
            code: 'salesPromo',
            name: 'Akce a štítky',
            description: 'Akce a štítky',
            isCollection: false,
            elements: [
                {
                    code: 'salesPromo',
                    name: 'Akce a štítky',
                    description: 'Akce a štítky',
                    attributes: [
                        {
                            definition: {
                                code: 'salesPromo',
                                name: 'Akce',
                                description: 'Akce',
                                baseDataType: 'STRING',
                                path: 'tireSalesPromo.salesPromo',
                                multiValued: true,
                            },
                            values: [{ value: 'testingPromo' }],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                enumeration: {},
                                globalConstraints: [
                                    {
                                        constraintCode: {
                                            value: 'TYPE_TIRE_SALES_PROMO',
                                        },
                                    },
                                ],
                            },
                        },
                        {
                            definition: {
                                code: 'labels',
                                name: 'Štítky',
                                description: 'Štítky',
                                baseDataType: 'STRING',
                                path: 'tireSalesPromo.labels',
                                multiValued: true,
                            },
                            values: [],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                enumeration: {},
                                globalConstraints: [
                                    {
                                        constraintCode: {
                                            value: 'TYPE_TIRE_LABEL',
                                        },
                                    },
                                ],
                            },
                        },
                    ],
                },
            ],
            dataType: {
                code: 'tireSalesPromo',
                name: 'Akce',
                description: 'Akce',
                behaviorModifiers: [],
                simple: false,
            },
        },
        {
            code: 'salesPrice',
            name: 'salesPrice',
            isCollection: false,
            elements: [
                {
                    code: 'salesPrice',
                    name: 'salesPrice',
                    attributes: [
                        {
                            definition: {
                                code: 'manualSalesPriceWoVAT',
                                name: 'Ruční cena bez DPH',
                                description: 'Ruční cena bez DPH',
                                baseDataType: 'NUMERIC',
                                path: 'tireSalesPrice.manualSalesPriceWoVAT',
                                multiValued: false,
                            },
                            values: [{ valueUnit: 'CZK' }],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                numeric: {},
                                enumeration: {},
                                valueType: {
                                    valueTypeCode: { value: 'CURRENCY' },
                                    defaultUnit: { value: 'CZK' },
                                },
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'taxRate',
                                name: 'Daňová sazba',
                                description: 'Daňová sazba',
                                baseDataType: 'STRING',
                                path: 'tireSalesPrice.taxRate',
                                multiValued: false,
                            },
                            values: [{ value: 'TAX_1' }],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                enumeration: {},
                                globalConstraints: [
                                    {
                                        constraintCode: {
                                            value: 'ENUM_TIRE_PERCENTAGE_TAX',
                                        },
                                    },
                                ],
                            },
                        },
                        {
                            definition: {
                                code: 'automaticPriceCZKWoVAT',
                                name: 'Prod. cena automat., bez DPH',
                                description: 'Prod. cena automatická, bez DPH',
                                baseDataType: 'NUMERIC',
                                path: 'tireSalesPrice.automaticPriceCZKWoVAT',
                                multiValued: false,
                            },
                            values: [
                                { numericValue: 2590.108299, valueUnit: 'CZK' },
                            ],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                numeric: {},
                                enumeration: {},
                                valueType: {
                                    valueTypeCode: { value: 'CURRENCY' },
                                    defaultUnit: { value: 'CZK' },
                                },
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'calculationBasePrice',
                                name: 'Kalkulační cena bez DPH',
                                description: 'Kalkulační cena bez DPH',
                                baseDataType: 'NUMERIC',
                                path: 'tireSalesPrice.calculationBasePrice',
                                multiValued: false,
                            },
                            values: [
                                { numericValue: 2333.4309, valueUnit: 'CZK' },
                            ],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                numeric: {},
                                enumeration: {},
                                valueType: {
                                    valueTypeCode: { value: 'CURRENCY' },
                                    defaultUnit: { value: 'CZK' },
                                },
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'finalSalesPriceCurrencyWVAT',
                                name: 'Fin. prod. cena, měna s DPH',
                                description:
                                    'Finální prodejní cena, měna s DPH',
                                baseDataType: 'NUMERIC',
                                path: 'tireSalesPrice.finalSalesPriceCurrencyWVAT',
                                multiValued: false,
                            },
                            values: [
                                { numericValue: 3134.031, valueUnit: 'CZK' },
                            ],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                numeric: {},
                                enumeration: {},
                                valueType: {
                                    valueTypeCode: { value: 'CURRENCY' },
                                    defaultUnit: { value: 'CZK' },
                                },
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'stockNotice',
                                name: 'Dostupnost',
                                baseDataType: 'STRING',
                                path: 'tireSalesPrice.stockNotice',
                                multiValued: false,
                            },
                            values: [{ value: 'inStock' }],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                enumeration: {},
                                globalConstraints: [
                                    {
                                        constraintCode: {
                                            value: 'ENUM_TIRE_MARKET_STATE',
                                        },
                                    },
                                ],
                            },
                        },
                        {
                            definition: {
                                code: 'subGroupName',
                                name: 'DISIVO, sub group name',
                                baseDataType: 'STRING',
                                path: 'tireSalesPrice.subGroupName',
                                multiValued: false,
                            },
                            values: [],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                enumeration: {},
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'minimumMarginSalesPriceWoVAT',
                                name: 'Výchozí prod. cena bez DPH',
                                description: 'Výchozí prodejní cena bez DPH',
                                baseDataType: 'NUMERIC',
                                path: 'tireSalesPrice.minimumMarginSalesPriceWoVAT',
                                multiValued: false,
                            },
                            values: [
                                { numericValue: 2590.108299, valueUnit: 'CZK' },
                            ],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                numeric: {},
                                enumeration: {},
                                valueType: {
                                    valueTypeCode: { value: 'CURRENCY' },
                                    defaultUnit: { value: 'CZK' },
                                },
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'changeRule',
                                name: 'Disivo změnové pravidlo',
                                description: 'Disivo změnové pravidlo',
                                baseDataType: 'STRING',
                                path: 'tireSalesPrice.changeRule',
                                multiValued: false,
                            },
                            values: [],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                enumeration: {},
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'finalSalesPriceCZKWoVAT',
                                name: 'Fin. prod. cena, CZK bez DPH',
                                description:
                                    'Finální prodejní cena, CZK bez DPH',
                                baseDataType: 'NUMERIC',
                                path: 'tireSalesPrice.finalSalesPriceCZKWoVAT',
                                multiValued: false,
                            },
                            values: [
                                { numericValue: 2590.108299, valueUnit: 'CZK' },
                            ],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                numeric: {},
                                enumeration: {},
                                valueType: {
                                    valueTypeCode: { value: 'CURRENCY' },
                                    defaultUnit: { value: 'CZK' },
                                },
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'priceWVatDisivo',
                                name: 'Disivo cena s DPH',
                                description: 'Disivo cena s DPH',
                                baseDataType: 'NUMERIC',
                                path: 'tireSalesPrice.priceWVatDisivo',
                                multiValued: false,
                            },
                            values: [{ valueUnit: 'CZK' }],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                numeric: {},
                                enumeration: {},
                                valueType: {
                                    valueTypeCode: { value: 'CURRENCY' },
                                    defaultUnit: { value: 'CZK' },
                                },
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'promoSalesPriceWoVAT',
                                name: 'Akční cena bez DPH',
                                description: 'Akční cena bez DPH',
                                baseDataType: 'NUMERIC',
                                path: 'tireSalesPrice.promoSalesPriceWoVAT',
                                multiValued: false,
                            },
                            values: [{ valueUnit: 'CZK' }],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                numeric: {},
                                enumeration: {},
                                valueType: {
                                    valueTypeCode: { value: 'CURRENCY' },
                                    defaultUnit: { value: 'CZK' },
                                },
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'finalSalesPriceCZKWVAT',
                                name: 'Fin. prod. cena, CZK s DPH',
                                description: 'Finální prodejní cena, CZK s DPH',
                                baseDataType: 'NUMERIC',
                                path: 'tireSalesPrice.finalSalesPriceCZKWVAT',
                                multiValued: false,
                            },
                            values: [
                                { numericValue: 3134.031, valueUnit: 'CZK' },
                            ],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                numeric: {},
                                enumeration: {},
                                valueType: {
                                    valueTypeCode: { value: 'CURRENCY' },
                                    defaultUnit: { value: 'CZK' },
                                },
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'stockType',
                                name: 'Typ skladu',
                                description: 'Typ skladu',
                                baseDataType: 'STRING',
                                path: 'tireSalesPrice.stockType',
                                multiValued: false,
                            },
                            values: [{ value: 'TSTOCKOWN_2' }],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                enumeration: {},
                                globalConstraints: [
                                    {
                                        constraintCode: {
                                            value: 'ENUM_TIRE_STOCK_OWNERSHIP',
                                        },
                                    },
                                ],
                            },
                        },
                        {
                            definition: {
                                code: 'stock',
                                name: 'Sklad',
                                description: 'Sklad',
                                baseDataType: 'STRING',
                                path: 'tireSalesPrice.stock',
                                multiValued: false,
                            },
                            values: [{ value: 'PNEUFORCE-CZ-D10' }],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                enumeration: {},
                                globalConstraints: [
                                    {
                                        constraintCode: {
                                            value: 'TYPE_TIRE_EXTERNAL_STOCK',
                                        },
                                    },
                                ],
                            },
                        },
                        {
                            definition: {
                                code: 'totalSalesMargin',
                                name: 'Marže absolutně',
                                description: 'Marže absolutně',
                                baseDataType: 'NUMERIC',
                                path: 'tireSalesPrice.totalSalesMargin',
                                multiValued: false,
                            },
                            values: [
                                { numericValue: 487.918299, valueUnit: 'CZK' },
                            ],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                numeric: {},
                                enumeration: {},
                                valueType: {
                                    valueTypeCode: { value: 'CURRENCY' },
                                    defaultUnit: { value: 'CZK' },
                                },
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'priceWoVatDisivo',
                                name: 'Disivo cena bez DPH',
                                description: 'Disivo cena bez DPH',
                                baseDataType: 'NUMERIC',
                                path: 'tireSalesPrice.priceWoVatDisivo',
                                multiValued: false,
                            },
                            values: [{ valueUnit: 'CZK' }],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                numeric: {},
                                enumeration: {},
                                valueType: {
                                    valueTypeCode: { value: 'CURRENCY' },
                                    defaultUnit: { value: 'CZK' },
                                },
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'groupName',
                                name: 'DISIVO, group name',
                                baseDataType: 'STRING',
                                path: 'tireSalesPrice.groupName',
                                multiValued: false,
                            },
                            values: [],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                enumeration: {},
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'finalSalesPriceCurrencyWoVAT',
                                name: 'Fin. prod. cena, měna bez DPH',
                                description:
                                    'Finální prodejní cena, měna bez DPH',
                                baseDataType: 'NUMERIC',
                                path: 'tireSalesPrice.finalSalesPriceCurrencyWoVAT',
                                multiValued: false,
                            },
                            values: [
                                { numericValue: 2590.108299, valueUnit: 'CZK' },
                            ],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                numeric: {},
                                enumeration: {},
                                valueType: {
                                    valueTypeCode: { value: 'CURRENCY' },
                                    defaultUnit: { value: 'CZK' },
                                },
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'minimumMarginSalesPriceWVAT',
                                name: 'Výchozí prodejní cena s DPH',
                                description: 'Výchozí prodejní cena s DPH',
                                baseDataType: 'NUMERIC',
                                path: 'tireSalesPrice.minimumMarginSalesPriceWVAT',
                                multiValued: false,
                            },
                            values: [
                                {
                                    numericValue: 3134.03104179,
                                    valueUnit: 'CZK',
                                },
                            ],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                numeric: {},
                                enumeration: {},
                                valueType: {
                                    valueTypeCode: { value: 'CURRENCY' },
                                    defaultUnit: { value: 'CZK' },
                                },
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'stockAmountDisponible',
                                name: 'Počet kusů skladem',
                                baseDataType: 'NUMERIC',
                                path: 'tireSalesPrice.stockAmountDisponible',
                                multiValued: false,
                            },
                            values: [{ numericValue: 20.0 }],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                numeric: {},
                                enumeration: {},
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'deliveryTime',
                                name: 'Doba dodání',
                                description: 'Doba dodání',
                                baseDataType: 'NUMERIC',
                                path: 'tireSalesPrice.deliveryTime',
                                multiValued: false,
                            },
                            values: [{ numericValue: 2.0, valueUnit: 'D' }],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                numeric: {},
                                enumeration: {},
                                valueType: {
                                    valueTypeCode: { value: 'TIME' },
                                    defaultUnit: { value: 'D' },
                                },
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'procentualSalesMargin',
                                name: 'Marže procentuálně',
                                description: 'Marže procentuálně',
                                baseDataType: 'NUMERIC',
                                path: 'tireSalesPrice.procentualSalesMargin',
                                multiValued: false,
                            },
                            values: [
                                { numericValue: 18.83776, valueUnit: '%' },
                            ],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                numeric: {},
                                enumeration: {},
                                valueType: {
                                    valueTypeCode: { value: 'PERCENTAGE' },
                                    defaultUnit: { value: '%' },
                                },
                                globalConstraints: [],
                            },
                        },
                    ],
                },
            ],
            dataType: {
                code: 'tireSalesPrice',
                name: 'Prodejní cena',
                behaviorModifiers: [],
                simple: false,
            },
        },
        {
            code: 'productSKUParams',
            name: 'productSKUParams',
            isCollection: false,
            elements: [
                {
                    code: 'productSKUParams',
                    name: 'productSKUParams',
                    attributes: [
                        {
                            definition: {
                                code: 'manufacturer',
                                name: 'Výrobce',
                                description: 'Výrobce',
                                baseDataType: 'STRING',
                                path: 'productSKUParamsInOffering.manufacturer',
                                multiValued: false,
                            },
                            values: [{ value: 'MANU_1197' }],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                enumeration: {},
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'threeDimensional',
                                name: 'Trojrozměr',
                                description: 'Trojrozměr',
                                baseDataType: 'STRING',
                                path: 'productSKUParamsInOffering.threeDimensional',
                                multiValued: false,
                            },
                            values: [{ value: '10/- R18' }],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                enumeration: {},
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'dot',
                                name: 'DOT',
                                description: 'DOT',
                                baseDataType: 'STRING',
                                path: 'productSKUParamsInOffering.dot',
                                multiValued: false,
                            },
                            values: [{ value: '2020/2019' }],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                enumeration: {},
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'ean',
                                name: 'EAN',
                                description: 'EAN',
                                baseDataType: 'STRING',
                                path: 'productSKUParamsInOffering.ean',
                                multiValued: false,
                            },
                            values: [{ value: '8019227010978' }],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                enumeration: {},
                                globalConstraints: [],
                            },
                        },
                    ],
                },
            ],
            dataType: {
                code: 'productSKUParamsInOffering',
                name: 'Parametry produktu na nabídce (Pneu)',
                description: 'Parametry produktu na nabídce',
                behaviorModifiers: [],
                simple: false,
            },
        },
        {
            code: 'priceLevels',
            name: 'priceLevels',
            isCollection: false,
            elements: [
                {
                    code: 'priceLevels',
                    name: 'priceLevels',
                    attributes: [
                        {
                            definition: {
                                code: 'automaticPriceWoVAT',
                                name: 'Prod. cena automatická bez DPH',
                                description: 'Prod. cena automatická bez DPH',
                                baseDataType: 'NUMERIC',
                                path: 'tirePriceLevel.automaticPriceWoVAT',
                                multiValued: false,
                            },
                            values: [
                                { numericValue: 2590.108299, valueUnit: 'CZK' },
                            ],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                numeric: {},
                                enumeration: {},
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'marginPerc',
                                name: 'Marže %',
                                description: 'Marže %',
                                baseDataType: 'NUMERIC',
                                path: 'tirePriceLevel.marginPerc',
                                multiValued: false,
                            },
                            values: [
                                { numericValue: 18.83776, valueUnit: '%' },
                            ],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                numeric: {},
                                enumeration: {},
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'calculationPriceWoVAT',
                                name: 'Kalkulační cena bez DPH',
                                description: 'Kalkulační cena bez DPH',
                                baseDataType: 'NUMERIC',
                                path: 'tirePriceLevel.calculationPriceWoVAT',
                                multiValued: false,
                            },
                            values: [
                                { numericValue: 2333.4309, valueUnit: 'CZK' },
                            ],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                numeric: {},
                                enumeration: {},
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'disivoPriceWVAT',
                                name: 'DISIVO cena s DPH',
                                description: 'DISIVO cena s DPH',
                                baseDataType: 'NUMERIC',
                                path: 'tirePriceLevel.disivoPriceWVAT',
                                multiValued: false,
                            },
                            values: [],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                numeric: {},
                                enumeration: {},
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'disivoGroupName',
                                name: 'DISIVO, group name',
                                description: 'DISIVO, group name',
                                baseDataType: 'STRING',
                                path: 'tirePriceLevel.disivoGroupName',
                                multiValued: false,
                            },
                            values: [],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                enumeration: {},
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'disivoPriceWoVAT',
                                name: 'DISIVO cena bez DPH',
                                description: 'DISIVO cena bez DPH',
                                baseDataType: 'NUMERIC',
                                path: 'tirePriceLevel.disivoPriceWoVAT',
                                multiValued: false,
                            },
                            values: [],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                numeric: {},
                                enumeration: {},
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'finalPriceCurrencyWVAT',
                                name: 'Finální cena v měně s DPH',
                                description: 'Finální cena v měně s DPH',
                                baseDataType: 'NUMERIC',
                                path: 'tirePriceLevel.finalPriceCurrencyWVAT',
                                multiValued: false,
                            },
                            values: [
                                { numericValue: 3134.031, valueUnit: 'CZK' },
                            ],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                numeric: {},
                                enumeration: {},
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'minimumMarginSalesPriceWVAT',
                                name: 'Výchozí prodejní cena s DPH',
                                description: 'Výchozí prodejní cena s DPH',
                                baseDataType: 'NUMERIC',
                                path: 'tirePriceLevel.minimumMarginSalesPriceWVAT',
                                multiValued: false,
                            },
                            values: [
                                {
                                    numericValue: 3134.03104179,
                                    valueUnit: 'CZK',
                                },
                            ],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                numeric: {},
                                enumeration: {},
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'finalPriceCZKWoVAT',
                                name: 'Finální cena v Kč bez DPH',
                                description: 'Finální cena v Kč bez DPH',
                                baseDataType: 'NUMERIC',
                                path: 'tirePriceLevel.finalPriceCZKWoVAT',
                                multiValued: false,
                            },
                            values: [
                                { numericValue: 2590.108299, valueUnit: 'CZK' },
                            ],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                numeric: {},
                                enumeration: {},
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'marginAbs',
                                name: 'Marže abs.',
                                description: 'Marže abs.',
                                baseDataType: 'NUMERIC',
                                path: 'tirePriceLevel.marginAbs',
                                multiValued: false,
                            },
                            values: [
                                { numericValue: 487.918299, valueUnit: 'CZK' },
                            ],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                numeric: {},
                                enumeration: {},
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'manualPriceWoVAT',
                                name: 'Ruční cena bez DPH',
                                description: 'Ruční cena bez DPH',
                                baseDataType: 'NUMERIC',
                                path: 'tirePriceLevel.manualPriceWoVAT',
                                multiValued: false,
                            },
                            values: [],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                numeric: {},
                                enumeration: {},
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'finalPriceCurrencyWoVAT',
                                name: 'Finální cena v měně bez DPH',
                                description: 'Finální cena v měně bez DPH',
                                baseDataType: 'NUMERIC',
                                path: 'tirePriceLevel.finalPriceCurrencyWoVAT',
                                multiValued: false,
                            },
                            values: [
                                { numericValue: 2590.108299, valueUnit: 'CZK' },
                            ],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                numeric: {},
                                enumeration: {},
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'disivoChangeRule',
                                name: 'DISIVO změnové pravidlo',
                                description: 'DISIVO změnové pravidlo',
                                baseDataType: 'STRING',
                                path: 'tirePriceLevel.disivoChangeRule',
                                multiValued: false,
                            },
                            values: [],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                enumeration: {},
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'disivoSubGroupName',
                                name: 'DISIVO, subgroup name',
                                description: 'DISIVO, subgroup name',
                                baseDataType: 'STRING',
                                path: 'tirePriceLevel.disivoSubGroupName',
                                multiValued: false,
                            },
                            values: [],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                enumeration: {},
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'finalPriceCZKWVAT',
                                name: 'Finální cena v Kč s DPH',
                                description: 'Finální cena v Kč s DPH',
                                baseDataType: 'NUMERIC',
                                path: 'tirePriceLevel.finalPriceCZKWVAT',
                                multiValued: false,
                            },
                            values: [
                                { numericValue: 3134.031, valueUnit: 'CZK' },
                            ],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                numeric: {},
                                enumeration: {},
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'priceLevelCode',
                                name: 'Kód cenové hladiny',
                                description: 'Kód cenové hladiny',
                                baseDataType: 'STRING',
                                path: 'tirePriceLevel.priceLevelCode',
                                multiValued: true,
                            },
                            values: [{ value: 'PLVL_VO_PN-CZ' }],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                enumeration: {},
                                globalConstraints: [
                                    {
                                        constraintCode: {
                                            value: 'ENUM_PRICE_LEVEL',
                                        },
                                    },
                                ],
                            },
                        },
                        {
                            definition: {
                                code: 'promoPriceWoVAT',
                                name: 'Akční cena bez DPH',
                                description: 'Akční cena bez DPH',
                                baseDataType: 'NUMERIC',
                                path: 'tirePriceLevel.promoPriceWoVAT',
                                multiValued: false,
                            },
                            values: [{ valueUnit: 'CZK' }],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                numeric: {},
                                enumeration: {},
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'minimumMarginSalesPriceWoVAT',
                                name: 'Výchozí prod. cena bez DPH',
                                description: 'Výchozí prod. cena bez DPH',
                                baseDataType: 'NUMERIC',
                                path: 'tirePriceLevel.minimumMarginSalesPriceWoVAT',
                                multiValued: false,
                            },
                            values: [
                                { numericValue: 2590.108299, valueUnit: 'CZK' },
                            ],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                numeric: {},
                                enumeration: {},
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'taxRate',
                                name: 'Daňová sazba',
                                description: 'Daňová sazba',
                                baseDataType: 'STRING',
                                path: 'tirePriceLevel.taxRate',
                                multiValued: false,
                            },
                            values: [{ value: 'TAX_1' }],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                enumeration: {},
                                globalConstraints: [
                                    {
                                        constraintCode: {
                                            value: 'ENUM_TIRE_PERCENTAGE_TAX',
                                        },
                                    },
                                ],
                            },
                        },
                    ],
                },
            ],
            dataType: {
                code: 'tirePriceLevel',
                name: 'Cenová hladina',
                description: 'Cenová hladina',
                behaviorModifiers: [],
                simple: false,
            },
        },
        {
            code: 'webOrder',
            name: 'Řazení na webu',
            description: 'Řazení na webu',
            isCollection: false,
            elements: [
                {
                    code: 'webOrder',
                    name: 'Řazení na webu',
                    description: 'Řazení na webu',
                    attributes: [
                        {
                            definition: {
                                code: 'topIndex',
                                name: 'TOP3 index',
                                baseDataType: 'STRING',
                                path: 'tireSorting.topIndex',
                                multiValued: false,
                            },
                            values: [{ value: '2' }],
                            constraints: {
                                enumeration: {},
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'priority',
                                name: 'Priority',
                                baseDataType: 'STRING',
                                path: 'tireSorting.priority',
                                multiValued: false,
                            },
                            values: [{ value: '0' }],
                            constraints: {
                                enumeration: {},
                                globalConstraints: [],
                            },
                        },
                    ],
                },
            ],
            dataType: {
                code: 'tireSorting',
                name: 'Řazení na webu',
                behaviorModifiers: [],
                simple: false,
            },
        },
        {
            code: 'serviceParam',
            name: 'Servisní parametr',
            isCollection: false,
            elements: [
                {
                    code: 'serviceParam',
                    name: 'Servisní parametr',
                    attributes: [
                        {
                            definition: {
                                code: 'import',
                                name: 'Běh importu',
                                baseDataType: 'STRING',
                                path: 'serviceParamType.import',
                                multiValued: false,
                            },
                            values: [{ value: 'false' }],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                enumeration: {},
                                globalConstraints: [],
                            },
                        },
                    ],
                },
            ],
            dataType: {
                code: 'serviceParamType',
                name: 'Servisní parametr',
                behaviorModifiers: [],
                simple: false,
            },
        },
        {
            code: 'webCategoryParams',
            name: 'Parametry kategorie',
            description: 'Parametry kategorie',
            isCollection: false,
            elements: [
                {
                    code: 'webCategoryParams',
                    name: 'Parametry kategorie',
                    description: 'Parametry kategorie',
                    attributes: [
                        {
                            definition: {
                                code: 'categoryType',
                                name: 'Typ kategorie',
                                description: 'Typ kategorie',
                                baseDataType: 'STRING',
                                path: 'webCategoryParams.categoryType',
                                multiValued: false,
                            },
                            values: [{ value: 'CATTYPO_2' }],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                enumeration: {},
                                globalConstraints: [
                                    {
                                        constraintCode: {
                                            value: 'ENUM_TIRE_CATEGORY_TYPE_OFFERING',
                                        },
                                    },
                                ],
                            },
                        },
                        {
                            definition: {
                                code: 'order',
                                name: 'Pořadí',
                                description: 'Pořadí',
                                baseDataType: 'NUMERIC',
                                path: 'webCategoryParams.order',
                                multiValued: false,
                            },
                            values: [{ numericValue: 1.0 }],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                numeric: {},
                                enumeration: {},
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'externalId',
                                name: 'Externí ID',
                                description: 'Externí ID',
                                baseDataType: 'STRING',
                                path: 'webCategoryParams.externalId',
                                multiValued: false,
                            },
                            values: [{ value: 'PN-CZ, Block' }],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                enumeration: {},
                                globalConstraints: [],
                            },
                        },
                    ],
                },
            ],
            dataType: {
                code: 'webCategoryParams',
                name: 'Parametry kategorie ve stromě',
                description: 'Parametry kategorie ve stromě',
                behaviorModifiers: [],
                simple: false,
            },
        },
        {
            code: 'externalId',
            name: 'Externí ID kategorie',
            description: 'Externí ID kategorie',
            isCollection: false,
            elements: [
                {
                    code: 'externalId',
                    name: 'Externí ID kategorie',
                    description: 'Externí ID kategorie',
                    attributes: [
                        {
                            definition: {
                                code: 'tireExternalId',
                                name: 'Externí ID pro integraci',
                                baseDataType: 'STRING',
                                path: 'tireExternalId.tireExternalId',
                                multiValued: false,
                            },
                            values: [
                                { value: 'PN-CZ, Block ext Id integrace' },
                            ],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                enumeration: {},
                                globalConstraints: [],
                            },
                        },
                        {
                            definition: {
                                code: 'ruleCode',
                                name: 'Kód pro pravidla',
                                description: 'Kód pro pravidla',
                                baseDataType: 'STRING',
                                path: 'tireExternalId.ruleCode',
                                multiValued: false,
                            },
                            values: [
                                { value: 'PN-CZ, Block ext Id kod pravidla' },
                            ],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                enumeration: {},
                                globalConstraints: [],
                            },
                        },
                    ],
                },
            ],
            dataType: {
                code: 'tireExternalId',
                name: 'Externí ID',
                behaviorModifiers: [],
                simple: false,
            },
        },
        {
            code: 'statusReasonDetail',
            name: 'Důvody stavu',
            isCollection: false,
            elements: [
                {
                    code: 'statusReasonDetail',
                    name: 'Důvody stavu',
                    attributes: [
                        {
                            definition: {
                                code: 'exception',
                                name: 'Vyjímka',
                                baseDataType: 'STRING',
                                path: 'statusReasonDetails.price.exception',
                                multiValued: true,
                            },
                            values: [],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                enumeration: {},
                                globalConstraints: [
                                    {
                                        constraintCode: {
                                            value: 'ENUM_TIRE_PRICE_ERROR',
                                        },
                                    },
                                ],
                            },
                        },
                        {
                            definition: {
                                code: 'exception',
                                name: 'Vyjímka',
                                baseDataType: 'STRING',
                                path: 'statusReasonDetails.exception',
                                multiValued: true,
                            },
                            values: [],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                enumeration: {},
                                globalConstraints: [
                                    {
                                        constraintCode: {
                                            value: 'ENUM_TIRE_STATUS_REASON',
                                        },
                                    },
                                ],
                            },
                        },
                        {
                            definition: {
                                code: 'exception',
                                name: 'Vyjímka',
                                baseDataType: 'STRING',
                                path: 'statusReasonDetails.param.exception',
                                multiValued: true,
                            },
                            values: [],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                enumeration: {},
                                globalConstraints: [
                                    {
                                        constraintCode: {
                                            value: 'ENUM_TIRE_PARAM_ERROR',
                                        },
                                    },
                                ],
                            },
                        },
                        {
                            definition: {
                                code: 'error',
                                name: 'Chyba',
                                baseDataType: 'STRING',
                                path: 'statusReasonDetails.param.error',
                                multiValued: true,
                            },
                            values: [],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                enumeration: {},
                                globalConstraints: [
                                    {
                                        constraintCode: {
                                            value: 'ENUM_TIRE_PARAM_ERROR',
                                        },
                                    },
                                ],
                            },
                        },
                        {
                            definition: {
                                code: 'statusReason',
                                name: 'Důvod stavu',
                                description: 'Důvod stavu',
                                baseDataType: 'STRING',
                                path: 'statusReasonDetails.statusReason',
                                multiValued: true,
                            },
                            values: [],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                enumeration: {},
                                globalConstraints: [
                                    {
                                        constraintCode: {
                                            value: 'ENUM_TIRE_STATUS_REASON',
                                        },
                                    },
                                ],
                            },
                        },
                        {
                            definition: {
                                code: 'error',
                                name: 'Chyba',
                                baseDataType: 'STRING',
                                path: 'statusReasonDetails.price.error',
                                multiValued: true,
                            },
                            values: [],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                enumeration: {},
                                globalConstraints: [
                                    {
                                        constraintCode: {
                                            value: 'ENUM_TIRE_PRICE_ERROR',
                                        },
                                    },
                                ],
                            },
                        },
                    ],
                },
            ],
            dataType: {
                code: 'statusReasonDetails',
                name: 'Důvody stavu',
                description: 'Důvody stavu položky',
                behaviorModifiers: [],
                simple: false,
            },
        },
        {
            code: 'salesChannel',
            name: 'Prodejní kanál',
            description: 'Prodejní kanál',
            isCollection: false,
            elements: [
                {
                    code: 'salesChannel',
                    name: 'Prodejní kanál',
                    description: 'Prodejní kanál',
                    attributes: [
                        {
                            definition: {
                                code: 'country',
                                name: 'Země prodeje',
                                description: 'Země prodeje',
                                baseDataType: 'STRING',
                                path: 'eligibility.country',
                                multiValued: true,
                            },
                            values: [{ value: 'COUNTRY_1' }],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                enumeration: {},
                                globalConstraints: [
                                    {
                                        constraintCode: {
                                            value: 'ENUM_TIRE_COUNTRY',
                                        },
                                    },
                                ],
                            },
                        },
                        {
                            definition: {
                                code: 'salesChannel',
                                name: 'Prodejní kanál',
                                description: 'Prodejní kanál',
                                baseDataType: 'STRING',
                                path: 'eligibility.salesChannel',
                                multiValued: true,
                            },
                            values: [{ value: 'PN-CZ' }],
                            constraints: {
                                mandatory: { mandatory: { value: false } },
                                enumeration: {},
                                globalConstraints: [
                                    {
                                        constraintCode: {
                                            value: 'TYPE_TIRE_SALES_CHANNEL',
                                        },
                                    },
                                ],
                            },
                        },
                    ],
                },
            ],
            dataType: {
                code: 'eligibility',
                name: 'Dostupnost',
                description: 'Dostupnost',
                behaviorModifiers: [],
                simple: false,
            },
        },
    ],
    relationshipMemberships: [
        {
            code: 'lbOw4nzq',
            definition: {
                code: 'RT_TIRE_PRODUCT_SKU_PRODUCT_OFFERING',
                name: 'Produkt SKU - Produktová nabídka',
                description: 'Produkt SKU - Produktová nabídka',
                behaviorModifiers: [],
            },
            parameters: [],
            selfRole: {
                definition: {
                    code: 'PRODUCT_OFFERING',
                    name: 'Produktová nabídka',
                    description: 'Produktová nabídka',
                    behaviorModifiers: [],
                },
                parameters: [],
                memberItems: [
                    {
                        code: 'GThKc3TA',
                        name: 'PN-CZ, Metzeler Block 4/- -18 64 P sportovní/cestovní',
                        version: { code: 'GThKc3TA_V1', name: 'V1' },
                    },
                ],
            },
            otherRoles: [
                {
                    definition: {
                        code: 'PRODUCT_SKU',
                        name: 'Produkt',
                        description: 'Produkt',
                        behaviorModifiers: [],
                    },
                    parameters: [],
                    memberItems: [
                        {
                            code: 'TIRE_0109700',
                            name: 'Metzeler Block 4/- -18 64 P sportovní/cestovní',
                            description:
                                'Nezmeškejte slevu na sportovní/cestovní pneu Metzeler Block 4/- -18 64 P. Záruka 10 let! Expedujeme do 24 hod! Doporučuje nás 94 % zákazníků.',
                            version: { code: 'TIRE_0109700_V1', name: 'V1' },
                        },
                    ],
                },
            ],
        },
    ],
    businessEntityComponentLinks: [
        {
            code: 'Ysl2uCFl',
            definition: {
                code: 'RT_TIRE_CATEGORY_SALES_ATTACHMENT_PDF',
                name: 'Prodejní příloha k dezénu - pdf',
                description: 'Prodejní příloha k dezénu - pdf',
                behaviorModifiers: [],
            },
            parameters: [],
            ownerRole: {
                definition: {
                    code: 'PRODUCT',
                    name: 'Produkt',
                    description: 'Produkt',
                    behaviorModifiers: [],
                },
                parameters: [],
            },
            componentRoles: [
                {
                    definition: {
                        code: 'PDF',
                        name: 'Pdf',
                        description: 'Pdf',
                        behaviorModifiers: [],
                    },
                    parameters: [],
                    memberItems: [
                        {
                            code: 'X7ehZqw8_V1',
                            name: 'PDF  PN-CZ Dezen',
                            type: {
                                code: 'TYPE_TIRE_SALES_ATTACHMENT',
                                name: 'Prodejní příloha (pneu)',
                                behaviorModifiers: [],
                            },
                            parameters: [
                                {
                                    code: 'attachmentParam',
                                    name: 'Příloha',
                                    isCollection: false,
                                    elements: [
                                        {
                                            code: 'attachmentParam',
                                            name: 'Příloha',
                                            attributes: [
                                                {
                                                    definition: {
                                                        code: 'url',
                                                        name: 'URL',
                                                        baseDataType: 'STRING',
                                                        path: 'tireAttachmentParam.url',
                                                        multiValued: false,
                                                    },
                                                    values: [
                                                        {
                                                            value: 'https://www.youtube.com/watch?v=BDwsbQYqyKY',
                                                        },
                                                    ],
                                                    constraints: {
                                                        mandatory: {
                                                            mandatory: {
                                                                value: false,
                                                            },
                                                        },
                                                        enumeration: {},
                                                        globalConstraints: [],
                                                    },
                                                },
                                                {
                                                    definition: {
                                                        code: 'attachmentType',
                                                        name: 'Typ přílohy',
                                                        baseDataType: 'STRING',
                                                        path: 'tireAttachmentParam.attachmentType',
                                                        multiValued: false,
                                                    },
                                                    values: [
                                                        { value: 'document' },
                                                    ],
                                                    constraints: {
                                                        mandatory: {
                                                            mandatory: {
                                                                value: false,
                                                            },
                                                        },
                                                        enumeration: {},
                                                        globalConstraints: [
                                                            {
                                                                constraintCode:
                                                                    {
                                                                        value: 'ENUM_TIRE_TYPE_ATTACHMENT',
                                                                    },
                                                            },
                                                        ],
                                                    },
                                                },
                                                {
                                                    definition: {
                                                        code: 'tooltip',
                                                        name: 'Tooltip',
                                                        baseDataType: 'STRING',
                                                        path: 'tireAttachmentParam.tooltip',
                                                        multiValued: false,
                                                    },
                                                    values: [],
                                                    constraints: {
                                                        mandatory: {
                                                            mandatory: {
                                                                value: false,
                                                            },
                                                        },
                                                        enumeration: {},
                                                        globalConstraints: [],
                                                    },
                                                },
                                            ],
                                        },
                                    ],
                                    dataType: {
                                        code: 'tireAttachmentParam',
                                        name: 'Parametry přílohy',
                                        behaviorModifiers: [],
                                        simple: false,
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
            otherMemberRoles: [
                {
                    definition: {
                        code: 'CATEGORY',
                        name: 'Dezén',
                        description: 'Dezén',
                        behaviorModifiers: [],
                    },
                    parameters: [],
                    memberItems: [{ code: 'CAT_TIRE_OFFERING_149055_PN-CZ' }],
                },
            ],
        },
        {
            code: 'TwZL3coZ',
            definition: {
                code: 'RT_TIRE_CATEGORY_SALES_ATTACHMENT_PICTURE',
                name: 'Prodejní příloha k dezénu - obrázek s náhledem',
                description: 'Prodejní příloha k dezénu - obrázek s náhledem',
                behaviorModifiers: [],
            },
            parameters: [],
            ownerRole: {
                definition: {
                    code: 'PRODUCT',
                    name: 'Produkt',
                    description: 'Produkt',
                    behaviorModifiers: [],
                },
                parameters: [],
            },
            componentRoles: [
                {
                    definition: {
                        code: 'PICTURE',
                        name: 'Obrázek',
                        description: 'Obrázek',
                        behaviorModifiers: [],
                    },
                    parameters: [],
                    memberItems: [
                        {
                            code: '09xeGFzF_V1',
                            name: 'URL PN-CZ Dezen',
                            type: {
                                code: 'TYPE_TIRE_SALES_ATTACHMENT',
                                name: 'Prodejní příloha (pneu)',
                                behaviorModifiers: [],
                            },
                            parameters: [
                                {
                                    code: 'attachmentParam',
                                    name: 'Příloha',
                                    isCollection: false,
                                    elements: [
                                        {
                                            code: 'attachmentParam',
                                            name: 'Příloha',
                                            attributes: [
                                                {
                                                    definition: {
                                                        code: 'url',
                                                        name: 'URL',
                                                        baseDataType: 'STRING',
                                                        path: 'tireAttachmentParam.url',
                                                        multiValued: false,
                                                    },
                                                    values: [
                                                        {
                                                            value: 'https://www.youtube.com/watch?v=BDwsbQYqyKY',
                                                        },
                                                    ],
                                                    constraints: {
                                                        mandatory: {
                                                            mandatory: {
                                                                value: false,
                                                            },
                                                        },
                                                        enumeration: {},
                                                        globalConstraints: [],
                                                    },
                                                },
                                                {
                                                    definition: {
                                                        code: 'attachmentType',
                                                        name: 'Typ přílohy',
                                                        baseDataType: 'STRING',
                                                        path: 'tireAttachmentParam.attachmentType',
                                                        multiValued: false,
                                                    },
                                                    values: [
                                                        { value: 'video' },
                                                    ],
                                                    constraints: {
                                                        mandatory: {
                                                            mandatory: {
                                                                value: false,
                                                            },
                                                        },
                                                        enumeration: {},
                                                        globalConstraints: [
                                                            {
                                                                constraintCode:
                                                                    {
                                                                        value: 'ENUM_TIRE_TYPE_ATTACHMENT',
                                                                    },
                                                            },
                                                        ],
                                                    },
                                                },
                                                {
                                                    definition: {
                                                        code: 'tooltip',
                                                        name: 'Tooltip',
                                                        baseDataType: 'STRING',
                                                        path: 'tireAttachmentParam.tooltip',
                                                        multiValued: false,
                                                    },
                                                    values: [],
                                                    constraints: {
                                                        mandatory: {
                                                            mandatory: {
                                                                value: false,
                                                            },
                                                        },
                                                        enumeration: {},
                                                        globalConstraints: [],
                                                    },
                                                },
                                            ],
                                        },
                                    ],
                                    dataType: {
                                        code: 'tireAttachmentParam',
                                        name: 'Parametry přílohy',
                                        behaviorModifiers: [],
                                        simple: false,
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
            otherMemberRoles: [
                {
                    definition: {
                        code: 'CATEGORY',
                        name: 'Dezén',
                        description: 'Dezén',
                        behaviorModifiers: [],
                    },
                    parameters: [],
                    memberItems: [{ code: 'CAT_TIRE_OFFERING_149055_PN-CZ' }],
                },
            ],
        },
        {
            code: 'qwr4BoQC',
            definition: {
                code: 'RT_TIRE_CATEGORY_CONTENT',
                name: 'Prodejní text k dezénu',
                description: 'Prodejní text k dezénu',
                behaviorModifiers: [],
            },
            parameters: [],
            ownerRole: {
                definition: {
                    code: 'PRODUCT',
                    name: 'Produkt',
                    description: 'Produkt',
                    behaviorModifiers: [],
                },
                parameters: [],
            },
            componentRoles: [
                {
                    definition: {
                        code: 'CONTENT',
                        name: 'Prodejní text',
                        description: 'Prodejní text',
                        behaviorModifiers: [],
                    },
                    parameters: [],
                    memberItems: [
                        {
                            code: 'WOfeMXw7_V1',
                            type: {
                                code: 'TYPE_TIRE_CONTENT',
                                name: 'Prodejní text (pneu)',
                                behaviorModifiers: [],
                            },
                            parameters: [
                                {
                                    code: 'tireContent',
                                    name: 'Prodejní text',
                                    isCollection: false,
                                    elements: [
                                        {
                                            code: 'tireContent',
                                            name: 'Prodejní text',
                                            attributes: [
                                                {
                                                    definition: {
                                                        code: 'tireContent',
                                                        name: 'Prodejní text',
                                                        baseDataType:
                                                            'MULTILANG',
                                                        path: 'tireContent.tireContent',
                                                        multiValued: false,
                                                    },
                                                    values: [
                                                        {
                                                            multiLangValue: {
                                                                cs: 'Metzeler Block - sportovní/cestovní pneu levně',
                                                            },
                                                        },
                                                    ],
                                                    constraints: {
                                                        mandatory: {
                                                            mandatory: {
                                                                value: false,
                                                            },
                                                        },
                                                        enumeration: {},
                                                        globalConstraints: [],
                                                    },
                                                },
                                                {
                                                    definition: {
                                                        code: 'type',
                                                        name: 'Typ textu',
                                                        description:
                                                            'Typ textu',
                                                        baseDataType: 'STRING',
                                                        path: 'tireContent.type',
                                                        multiValued: false,
                                                    },
                                                    values: [
                                                        { value: 'SCTYPE_1' },
                                                    ],
                                                    constraints: {
                                                        mandatory: {
                                                            mandatory: {
                                                                value: false,
                                                            },
                                                        },
                                                        enumeration: {},
                                                        globalConstraints: [
                                                            {
                                                                constraintCode:
                                                                    {
                                                                        value: 'ENUM_TIRE_CONTENT_TYPE',
                                                                    },
                                                            },
                                                        ],
                                                    },
                                                },
                                            ],
                                        },
                                    ],
                                    dataType: {
                                        code: 'tireContent',
                                        name: 'Prodejní text',
                                        behaviorModifiers: [],
                                        simple: false,
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
            otherMemberRoles: [
                {
                    definition: {
                        code: 'CATEGORY',
                        name: 'Dezén',
                        description: 'Dezén',
                        behaviorModifiers: [],
                    },
                    parameters: [],
                    memberItems: [{ code: 'CAT_TIRE_OFFERING_149055_PN-CZ' }],
                },
            ],
        },
        {
            code: 'HBMACpof',
            definition: {
                code: 'RT_TIRE_CATEGORY_SALES_ATTACHMENT_YOUTUBE',
                name: 'Prodejní příloha k dezénu - youtube video',
                description: 'Prodejní příloha k dezénu - youtube video',
                behaviorModifiers: [],
            },
            parameters: [],
            ownerRole: {
                definition: {
                    code: 'PRODUCT',
                    name: 'Produkt',
                    description: 'Produkt',
                    behaviorModifiers: [],
                },
                parameters: [],
            },
            componentRoles: [
                {
                    definition: {
                        code: 'YOUTUBE',
                        name: 'Youtube video',
                        description: 'Youtube video',
                        behaviorModifiers: [],
                    },
                    parameters: [],
                    memberItems: [
                        {
                            code: 'iZTKHKGa_V1',
                            name: 'Youtube PN-CZ Dezen',
                            type: {
                                code: 'TYPE_TIRE_SALES_ATTACHMENT',
                                name: 'Prodejní příloha (pneu)',
                                behaviorModifiers: [],
                            },
                            parameters: [
                                {
                                    code: 'attachmentParam',
                                    name: 'Příloha',
                                    isCollection: false,
                                    elements: [
                                        {
                                            code: 'attachmentParam',
                                            name: 'Příloha',
                                            attributes: [
                                                {
                                                    definition: {
                                                        code: 'url',
                                                        name: 'URL',
                                                        baseDataType: 'STRING',
                                                        path: 'tireAttachmentParam.url',
                                                        multiValued: false,
                                                    },
                                                    values: [
                                                        {
                                                            value: 'https://www.youtube.com/watch?v=BDwsbQYqyKY',
                                                        },
                                                    ],
                                                    constraints: {
                                                        mandatory: {
                                                            mandatory: {
                                                                value: false,
                                                            },
                                                        },
                                                        enumeration: {},
                                                        globalConstraints: [],
                                                    },
                                                },
                                                {
                                                    definition: {
                                                        code: 'attachmentType',
                                                        name: 'Typ přílohy',
                                                        baseDataType: 'STRING',
                                                        path: 'tireAttachmentParam.attachmentType',
                                                        multiValued: false,
                                                    },
                                                    values: [
                                                        { value: 'video' },
                                                    ],
                                                    constraints: {
                                                        mandatory: {
                                                            mandatory: {
                                                                value: false,
                                                            },
                                                        },
                                                        enumeration: {},
                                                        globalConstraints: [
                                                            {
                                                                constraintCode:
                                                                    {
                                                                        value: 'ENUM_TIRE_TYPE_ATTACHMENT',
                                                                    },
                                                            },
                                                        ],
                                                    },
                                                },
                                                {
                                                    definition: {
                                                        code: 'tooltip',
                                                        name: 'Tooltip',
                                                        baseDataType: 'STRING',
                                                        path: 'tireAttachmentParam.tooltip',
                                                        multiValued: false,
                                                    },
                                                    values: [],
                                                    constraints: {
                                                        mandatory: {
                                                            mandatory: {
                                                                value: false,
                                                            },
                                                        },
                                                        enumeration: {},
                                                        globalConstraints: [],
                                                    },
                                                },
                                            ],
                                        },
                                    ],
                                    dataType: {
                                        code: 'tireAttachmentParam',
                                        name: 'Parametry přílohy',
                                        behaviorModifiers: [],
                                        simple: false,
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
            otherMemberRoles: [
                {
                    definition: {
                        code: 'CATEGORY',
                        name: 'Dezén',
                        description: 'Dezén',
                        behaviorModifiers: [],
                    },
                    parameters: [],
                    memberItems: [{ code: 'CAT_TIRE_OFFERING_149055_PN-CZ' }],
                },
            ],
        },
    ],
};
