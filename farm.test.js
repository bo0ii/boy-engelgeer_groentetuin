const {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
    getYieldForPlantWithEnvironmentFactors,
    getYieldForCropWithEnvironmentFactor,
    getTotalYieldwithEnvironmentFactor,
    getCostForCropWithEnvironmentFactor,
    getRevenueForCropWithEnvironmentFactor,
    getProfitForCropWithEnvironmentFactor,
    getTotalProfitWithEnvironmentFactors
} = require("./farm.js");

// All test without envirionmental factors
describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input)).toBe(30);
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield(crops)).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield(crops)).toBe(0);
    });
});

describe("getCostForCrop", () => {
    test("Calculate cost for a crop", () => {
        const corn = {
            name: "corn",
            yield: 5,
            price: 1,
        };
        const input = {
            crop: corn,
            numCrops: 50,
        };
        expect(getCostForCrop(input)).toBe(250);
    });
});

describe("getRevenueForCrop", () => {
    test("Calculate revenue for a crop", () => {
        const corn = {
            name: "corn",
            yield: 5,
            salePrice: 2,
        };
        const input = {
            crop: corn,
            numCrops: 50,
        };
        expect(getRevenueForCrop(input)).toBe(500);
    });
});

describe("getProfitForCrop", () => {
    test("Calculate profit for a crop", () => {
        const corn = {
            name: "corn",
            yield: 5,
            price: 1,
            salePrice: 2,
        };
        const input = {
            crop: corn,
            numCrops: 50,
        };
        expect(getProfitForCrop(input)).toBe(250);
    });
});

describe("getTotalProfit", () => {
    test("Calculate profit for multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 5,
            price: 1,
            salePrice: 2,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 5,
            price: 2,
            salePrice: 4,
        };
        const crops = [
            { crop: corn, numCrops: 10 },
            { crop: pumpkin, numCrops: 5 },
        ];
        expect(getTotalProfit(crops)).toBe(100);
    });
});

// All test with environmental factors
describe("getYieldForPlantWithEnvironmentFactor", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factor: {
            sun: {
                low: -20,
            },
        },
    };

    const environmentFactors = {
        sun: "low",
    };

    test("Get yield for plant sun low", () => {
        expect(
            getYieldForPlantWithEnvironmentFactors(corn, environmentFactors)
        ).toBe(24);
    });
});

describe("getYieldForPlantWithEnvironmentFactor", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factor: {
            sun: {
                low: -20,
                medium: 100,
            },
        },
    };

    const environmentFactors = {
        sun: "medium",
    };

    test("Get yield for plant sun medium", () => {
        expect(
            getYieldForPlantWithEnvironmentFactors(corn, environmentFactors)
        ).toBe(30);
    });
});

describe("getYieldForPlantWithEnvironmentFactor", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factor: {
            sun: {
                low: -20,
                medium: 100,
                high: +50,
            },
        },
    };

    const environmentFactors = {
        sun: "high",
    };

    test("Get yield for plant sun high", () => {
        expect(
            getYieldForPlantWithEnvironmentFactors(corn, environmentFactors)
        ).toBe(45);
    });
});

describe("getYieldForPlantWithEnvironmentFactor", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factor: {
            sun: {
                low: -20,
                medium: 100,
                high: +50,
                wind: {
                    low: -60,
                },
            },
        },
    };

    const environmentFactors = {
        wind: "low",
    };

    test("Get yield for plant wind low", () => {
        expect(
            getYieldForPlantWithEnvironmentFactors(corn, environmentFactors)
        ).toBe(12);
    });
});

describe("getYieldForPlantWithEnvironmentFactor", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factor: {
            sun: {
                low: -20,
                medium: 100,
                high: +50,
                wind: {
                    low: -60,
                    medium: 30,
                },
            },
        },
    };

    const environmentFactors = {
        wind: "medium",
    };

    test("Get yield for plant wind medium", () => {
        expect(
            getYieldForPlantWithEnvironmentFactors(corn, environmentFactors)
        ).toBe(21);
    });
});

describe("getYieldForPlantWithEnvironmentFactor", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factor: {
            sun: {
                low: -20,
                medium: 100,
                high: +50,
                wind: {
                    low: -60,
                    medium: 30,
                    high: 100,
                },
            },
        },
    };

    const environmentFactors = {
        wind: "high",
    };

    test("Get yield for plant wind high", () => {
        expect(
            getYieldForPlantWithEnvironmentFactors(corn, environmentFactors)
        ).toBe(30);
    });
});

describe("getYieldForCropWithEnviromentFactor", () => {
    test("Get yield for crop, sun low", () => {
        const corn = {
            name: "corn",
            yield: 5,
            factor: {
                sun: {
                    low: -20,
                },
            },
        };
        const environmentFactors = {
            sun: "low",
        };

        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(
            getYieldForCropWithEnvironmentFactor(input, environmentFactors)
        ).toBe(40);
    });
});

describe("getYieldForCropWithEnviromentFactor", () => {
    test("Get yield for crop, sun medium", () => {
        const corn = {
            name: "corn",
            yield: 5,
            factor: {
                sun: {
                    low: -20,
                    medium: 100,
                },
            },
        };
        const environmentFactors = {
            sun: "medium",
        };

        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(
            getYieldForCropWithEnvironmentFactor(input, environmentFactors)
        ).toBe(50);
    });
});

describe("getYieldForCropWithEnviromentFactor", () => {
    test("Get yield for crop, sun high", () => {
        const corn = {
            name: "corn",
            yield: 6,
            factor: {
                sun: {
                    low: -20,
                    medium: 100,
                    high: +50,
                },
            },
        };
        const environmentFactors = {
            sun: "high",
        };

        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(
            getYieldForCropWithEnvironmentFactor(input, environmentFactors)
        ).toBe(90);
    });
});

describe("getYieldForCropWithEnviromentFactor", () => {
    test("Get yield for crop, wind low", () => {
        const corn = {
            name: "corn",
            yield: 5,
            factor: {
                sun: {
                    low: -20,
                    medium: 100,
                    high: +50,
                    wind: {
                        low: -60,
                    },
                },
            },
        };
        const environmentFactors = {
            wind: "low",
        };

        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(
            getYieldForCropWithEnvironmentFactor(input, environmentFactors)
        ).toBe(20);
    });
});

describe("getYieldForCropWithEnviromentFactor", () => {
    test("Get yield for crop, wind medium", () => {
        const corn = {
            name: "corn",
            yield: 5,
            factor: {
                sun: {
                    low: -20,
                    medium: 100,
                    high: +50,
                    wind: {
                        low: -60,
                        medium: -30,
                    },
                },
            },
        };
        const environmentFactors = {
            wind: "medium",
        };

        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(
            getYieldForCropWithEnvironmentFactor(input, environmentFactors)
        ).toBe(35);
    });
});

describe("getYieldForCropWithEnviromentFactor", () => {
    test("Get yield for crop, wind high", () => {
        const corn = {
            name: "corn",
            yield: 5,
            factor: {
                sun: {
                    low: -20,
                    medium: 100,
                    high: +50,
                    wind: {
                        low: -60,
                        medium: -30,
                        high: 100,
                    },
                },
            },
        };
        const environmentFactors = {
            wind: "high",
        };

        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(
            getYieldForCropWithEnvironmentFactor(input, environmentFactors)
        ).toBe(50);
    });
});

describe("getTotalYieldWithEnvironmentFactor", () => {
    test("Calculate total yield with multiple crops, sun low", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factor: {
                sun: {
                    low: -20,
                    medium: 100,
                    high: +50,
                    wind: {
                        low: -60,
                        medium: -30,
                        high: 100,
                    },
                },
            },
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            factor: {
                sun: {
                    low: -20,
                    medium: 100,
                    high: +50,
                    wind: {
                        low: -60,
                        medium: -30,
                        high: 100,
                    },
                },
            },
        };

        const environmentFactors = {
            sun: "low",
        };

        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 5 },
        ];

        expect(getTotalYieldwithEnvironmentFactor(crops, environmentFactors)).toBe(
            28
        );
    });
});

describe("getCostForCropWithEnvironmentFactor", () => {
    test("Calculate cost for a crop with low sun", () => {
        const corn = {
            name: "corn",
            yield: 5,
            price: 1,
            factor: {
                sun: {
                    low: -20,
                    medium: 100,
                    high: +50,
                    wind: {
                        low: -60,
                        medium: -30,
                        high: 100,
                    },
                },
            },
        };
        const environmentFactors = {
            sun: "low",
        };

        const input = {
            crop: corn,
            numCrops: 50,
        };
        expect(getCostForCropWithEnvironmentFactor(input, environmentFactors)).toBe(200);
    });
});

describe("getRevenueForCropWithEnvironmentFactor", () => {
    test("Calculate revenue for a crop with low sun", () => {
        const corn = {
            name: "corn",
            yield: 5,
            salePrice: 2,
            factor: {
                sun: {
                    low: -20,
                    medium: 100,
                    high: +50,
                    wind: {
                        low: -60,
                        medium: -30,
                        high: 100,
                    },
                },
            },
        };
        const input = {
            crop: corn,
            numCrops: 50,
        };

        const environmentFactors = {
            sun: "low",
        };
        expect(
            getRevenueForCropWithEnvironmentFactor(input, environmentFactors)
        ).toBe(400);
    });
});

describe("getRevenueForCropWithEnvironmentFactor", () => {
    test("Calculate revenue for a crop with medium sun", () => {
        const corn = {
            name: "corn",
            yield: 5,
            salePrice: 2,
            factor: {
                sun: {
                    low: -20,
                    medium: 100,
                    high: +50,
                    wind: {
                        low: -60,
                        medium: -30,
                        high: 100,
                    },
                },
            },
        };
        const input = {
            crop: corn,
            numCrops: 50,
        };

        const environmentFactors = {
            sun: "medium",
        };
        expect(
            getRevenueForCropWithEnvironmentFactor(input, environmentFactors)
        ).toBe(500);
    });
});

describe("getRevenueForCropWithEnvironmentFactor", () => {
    test("Calculate revenue for a crop with high sun", () => {
        const corn = {
            name: "corn",
            yield: 5,
            salePrice: 2,
            factor: {
                sun: {
                    low: -20,
                    medium: 100,
                    high: +50,
                    wind: {
                        low: -60,
                        medium: -30,
                        high: 100,
                    },
                },
            },
        };
        const input = {
            crop: corn,
            numCrops: 50,
        };

        const environmentFactors = {
            sun: "high",
        };
        expect(
            getRevenueForCropWithEnvironmentFactor(input, environmentFactors)
        ).toBe(750);
    });
});

describe("getRevenueForCropWithEnvironmentFactor", () => {
    test("Calculate revenue for a crop with low wind", () => {
        const corn = {
            name: "corn",
            yield: 5,
            salePrice: 2,
            factor: {
                sun: {
                    low: -20,
                    medium: 100,
                    high: +50,
                    wind: {
                        low: -60,
                        medium: -30,
                        high: 100,
                    },
                },
            },
        };
        const input = {
            crop: corn,
            numCrops: 50,
        };

        const environmentFactors = {
            wind: "low",
        };
        expect(
            getRevenueForCropWithEnvironmentFactor(input, environmentFactors)
        ).toBe(200);
    });
});

describe("getRevenueForCropWithEnvironmentFactor", () => {
    test("Calculate revenue for a crop with medium wind", () => {
        const corn = {
            name: "corn",
            yield: 5,
            salePrice: 2,
            factor: {
                sun: {
                    low: -20,
                    medium: 100,
                    high: +50,
                    wind: {
                        low: -60,
                        medium: -30,
                        high: 100,
                    },
                },
            },
        };
        const input = {
            crop: corn,
            numCrops: 50,
        };

        const environmentFactors = {
            wind: "medium",
        };
        expect(
            getRevenueForCropWithEnvironmentFactor(input, environmentFactors)
        ).toBe(350);
    });
});

describe("getRevenueForCropWithEnvironmentFactor", () => {
    test("Calculate revenue for a crop with medium wind", () => {
        const corn = {
            name: "corn",
            yield: 5,
            salePrice: 2,
            factor: {
                sun: {
                    low: -20,
                    medium: 100,
                    high: +50,
                    wind: {
                        low: -60,
                        medium: -30,
                        high: 100,
                    },
                },
            },
        };
        const input = {
            crop: corn,
            numCrops: 50,
        };

        const environmentFactors = {
            wind: "high",
        };
        expect(
            getRevenueForCropWithEnvironmentFactor(input, environmentFactors)
        ).toBe(500);
    });
});

describe("getProfitForCropWithEnvironmentFactor", () => {
    test("Calculate profit for a crop with sun high", () => {
        const corn = {
            name: "corn",
            yield: 5,
            price: 1,
            salePrice: 2,
            factor: {
                sun: {
                    low: -20,
                    medium: 100,
                    high: +50,
                    wind: {
                        low: -60,
                        medium: -30,
                        high: 100,
                    },
                },
            },
        };

        const environmentFactors = {
            sun: "low",
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(
            getProfitForCropWithEnvironmentFactor(input, environmentFactors)
        ).toBe(40);
    });
});

describe("getProfitForCropWithEnvironmentFactor", () => {
    test("Calculate profit for a crop with sun medium", () => {
        const corn = {
            name: "corn",
            yield: 5,
            price: 1,
            salePrice: 2,
            factor: {
                sun: {
                    low: -20,
                    medium: 100,
                    high: +50,
                    wind: {
                        low: -60,
                        medium: -30,
                        high: 100,
                    },
                },
            },
        };

        const environmentFactors = {
            sun: "medium",
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(
            getProfitForCropWithEnvironmentFactor(input, environmentFactors)
        ).toBe(50);
    });
});

describe("getProfitForCropWithEnvironmentFactor", () => {
    test("Calculate profit for a crop with sun high", () => {
        const corn = {
            name: "corn",
            yield: 5,
            price: 1,
            salePrice: 2,
            factor: {
                sun: {
                    low: -20,
                    medium: 100,
                    high: +50,
                    wind: {
                        low: -60,
                        medium: -30,
                        high: 100,
                    },
                },
            },
        };

        const environmentFactors = {
            sun: "high",
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(
            getProfitForCropWithEnvironmentFactor(input, environmentFactors)
        ).toBe(75);
    });
});

describe("getProfitForCropWithEnvironmentFactor", () => {
    test("Calculate profit for a crop with wind low", () => {
        const corn = {
            name: "corn",
            yield: 5,
            price: 1,
            salePrice: 2,
            factor: {
                sun: {
                    low: -20,
                    medium: 100,
                    high: +50,
                    wind: {
                        low: -60,
                        medium: -30,
                        high: 100,
                    },
                },
            },
        };

        const environmentFactors = {
            wind: "low",
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(
            getProfitForCropWithEnvironmentFactor(input, environmentFactors)
        ).toBe(20);
    });
});

describe("getProfitForCropWithEnvironmentFactor", () => {
    test("Calculate profit for a crop with wind medium", () => {
        const corn = {
            name: "corn",
            yield: 5,
            price: 1,
            salePrice: 2,
            factor: {
                sun: {
                    low: -20,
                    medium: 100,
                    high: +50,
                    wind: {
                        low: -60,
                        medium: -30,
                        high: 100,
                    },
                },
            },
        };

        const environmentFactors = {
            wind: "medium",
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(
            getProfitForCropWithEnvironmentFactor(input, environmentFactors)
        ).toBe(35);
    });
});

describe("getProfitForCropWithEnvironmentFactor", () => {
    test("Calculate profit for a crop with wind medium", () => {
        const corn = {
            name: "corn",
            yield: 5,
            price: 1,
            salePrice: 2,
            factor: {
                sun: {
                    low: -20,
                    medium: 100,
                    high: +50,
                    wind: {
                        low: -60,
                        medium: -30,
                        high: 100,
                    },
                },
            },
        };

        const environmentFactors = {
            wind: "high",
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(
            getProfitForCropWithEnvironmentFactor(input, environmentFactors)
        ).toBe(50);
    });
});

describe("getTotalProfitWithEnvironmentFactors", () => {
    test("Calculate profit for multiple crops with sun low", () => {
        const corn = {
            name: "corn",
            yield: 5,
            price: 1,
            salePrice: 2,
            factor: {
                sun: {
                    low: -20,
                    medium: 100,
                    high: +50,
                    wind: {
                        low: -60,
                        medium: -30,
                        high: 100,
                    },
                },
            },
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 5,
            price: 2,
            salePrice: 4,
            factor: {
                sun: {
                    low: -20,
                    medium: 100,
                    high: +50,
                    wind: {
                        low: -60,
                        medium: -30,
                        high: 100,
                    },
                },
            },
        };

        const environmentFactors = {
            sun: "low",
        };

        const crops = [
            { crop: corn, numCrops: 10 },
            { crop: pumpkin, numCrops: 10 },
        ];
        expect(getTotalProfitWithEnvironmentFactors(crops, environmentFactors)).toBe(120);
    });
});

describe("getTotalProfitWithEnvironmentFactors", () => {
    test("Calculate profit for multiple crops with sun medium", () => {
        const corn = {
            name: "corn",
            yield: 5,
            price: 1,
            salePrice: 2,
            factor: {
                sun: {
                    low: -20,
                    medium: 100,
                    high: +50,
                    wind: {
                        low: -60,
                        medium: -30,
                        high: 100,
                    },
                },
            },
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 5,
            price: 2,
            salePrice: 4,
            factor: {
                sun: {
                    low: -20,
                    medium: 100,
                    high: +50,
                    wind: {
                        low: -60,
                        medium: -30,
                        high: 100,
                    },
                },
            },
        };

        const environmentFactors = {
            sun: "medium",
        };

        const crops = [
            { crop: corn, numCrops: 10 },
            { crop: pumpkin, numCrops: 10 },
        ];
        expect(getTotalProfitWithEnvironmentFactors(crops, environmentFactors)).toBe(150);
    });
});

describe("getTotalProfitWithEnvironmentFactors", () => {
    test("Calculate profit for multiple crops with sun high", () => {
        const corn = {
            name: "corn",
            yield: 5,
            price: 1,
            salePrice: 2,
            factor: {
                sun: {
                    low: -20,
                    medium: 100,
                    high: +50,
                    wind: {
                        low: -60,
                        medium: -30,
                        high: 100,
                    },
                },
            },
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 5,
            price: 2,
            salePrice: 4,
            factor: {
                sun: {
                    low: -20,
                    medium: 100,
                    high: +50,
                    wind: {
                        low: -60,
                        medium: -30,
                        high: 100,
                    },
                },
            },
        };

        const environmentFactors = {
            sun: "high",
        };

        const crops = [
            { crop: corn, numCrops: 10 },
            { crop: pumpkin, numCrops: 10 },
        ];
        expect(getTotalProfitWithEnvironmentFactors(crops, environmentFactors)).toBe(225);
    });
});

describe("getTotalProfitWithEnvironmentFactors", () => {
    test("Calculate profit for multiple crops with wind low", () => {
        const corn = {
            name: "corn",
            yield: 5,
            price: 1,
            salePrice: 2,
            factor: {
                sun: {
                    low: -20,
                    medium: 100,
                    high: +50,
                    wind: {
                        low: -60,
                        medium: -30,
                        high: 100,
                    },
                },
            },
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 5,
            price: 2,
            salePrice: 4,
            factor: {
                sun: {
                    low: -20,
                    medium: 100,
                    high: +50,
                    wind: {
                        low: -60,
                        medium: -30,
                        high: 100,
                    },
                },
            },
        };

        const environmentFactors = {
            wind: "low",
        };

        const crops = [
            { crop: corn, numCrops: 10 },
            { crop: pumpkin, numCrops: 10 },
        ];
        expect(getTotalProfitWithEnvironmentFactors(crops, environmentFactors)).toBe(60);
    });
});

describe("getTotalProfitWithEnvironmentFactors", () => {
    test("Calculate profit for multiple crops with wind medium", () => {
        const corn = {
            name: "corn",
            yield: 5,
            price: 1,
            salePrice: 2,
            factor: {
                sun: {
                    low: -20,
                    medium: 100,
                    high: +50,
                    wind: {
                        low: -60,
                        medium: -30,
                        high: 100,
                    },
                },
            },
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 5,
            price: 2,
            salePrice: 4,
            factor: {
                sun: {
                    low: -20,
                    medium: 100,
                    high: +50,
                    wind: {
                        low: -60,
                        medium: -30,
                        high: 100,
                    },
                },
            },
        };

        const environmentFactors = {
            wind: "medium",
        };

        const crops = [
            { crop: corn, numCrops: 10 },
            { crop: pumpkin, numCrops: 10 },
        ];
        expect(getTotalProfitWithEnvironmentFactors(crops, environmentFactors)).toBe(105);
    });
});

describe("getTotalProfitWithEnvironmentFactors", () => {
    test("Calculate profit for multiple crops with wind high", () => {
        const corn = {
            name: "corn",
            yield: 5,
            price: 1,
            salePrice: 2,
            factor: {
                sun: {
                    low: -20,
                    medium: 100,
                    high: +50,
                    wind: {
                        low: -60,
                        medium: -30,
                        high: 100,
                    },
                },
            },
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 5,
            price: 2,
            salePrice: 4,
            factor: {
                sun: {
                    low: -20,
                    medium: 100,
                    high: +50,
                    wind: {
                        low: -60,
                        medium: -30,
                        high: 100,
                    },
                },
            },
        };

        const environmentFactors = {
            wind: "high",
        };

        const crops = [
            { crop: corn, numCrops: 10 },
            { crop: pumpkin, numCrops: 10 },
        ];
        expect(getTotalProfitWithEnvironmentFactors(crops, environmentFactors)).toBe(150);
    });
});

describe("getTotalProfitWithEnvironmentFactors", () => {
    test("Calculate profit for multiple crops with sun medium", () => {
        const corn = {
            name: "corn",
            yield: 5,
            price: 1,
            salePrice: 2,
            factor: {
                sun: {
                    low: -20,
                    medium: 100,
                    high: +50,
                    wind: {
                        low: -60,
                        medium: -30,
                        high: 100,
                    },
                },
            },
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 5,
            price: 2,
            salePrice: 4,
            factor: {
                sun: {
                    low: -20,
                    medium: 100,
                    high: +50,
                    wind: {
                        low: -60,
                        medium: -30,
                        high: 100,
                    },
                },
            },
        };

        const environmentFactors = {
            wind: "high",
        };

        const crops = [
            { crop: corn, numCrops: 10 },
            { crop: pumpkin, numCrops: 10 },
        ];
        expect(getTotalProfitWithEnvironmentFactors(crops, environmentFactors)).toBe(150);
    });
});

