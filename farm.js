// Get the yield from a crop
function getYieldForPlant(corn) {
    return corn.yield;
}

function getYieldForPlantWithEnvironmentFactors(corn, environmentFactors) {
    if (environmentFactors.sun === "low") {
        return (corn.yield / 100) * 80;
    }
    if (environmentFactors.sun === "medium") {
        return corn.yield;
    }
    if (environmentFactors.sun === "high") {
        return (corn.yield / 100) * 150;
    }
    if (environmentFactors.wind === "low") {
        return (corn.yield / 100) * 40;
    }
    if (environmentFactors.wind === "medium") {
        return (corn.yield / 100) * 70;
    }
    if (environmentFactors.wind === "high") {
        return corn.yield;
    }
}

// all multiply the yield with given number input
function getYieldForCrop(crop) {
    return crop.numCrops * crop.crop.yield;
}

function getYieldForCropWithEnvironmentFactor(crop, environmentFactors) {
    if (environmentFactors.sun === "low") {
        return ((crop.numCrops * crop.crop.yield) / 100) * 80;
    }
    if (environmentFactors.sun === "medium") {
        return crop.numCrops * crop.crop.yield;
    }
    if (environmentFactors.sun === "high") {
        return ((crop.numCrops * crop.crop.yield) / 100) * 150;
    }
    if (environmentFactors.wind === "low") {
        return ((crop.numCrops * crop.crop.yield) / 100) * 40;
    }
    if (environmentFactors.wind === "medium") {
        return ((crop.numCrops * crop.crop.yield) / 100) * 70;
    }
    if (environmentFactors.wind === "high") {
        return crop.numCrops * crop.crop.yield;
    }
}

// If you have more then 1 crop, use the previous multiply function and add everything together
function getTotalYield(crops) {
    return crops.reduce((total, crop) => {
        return total + getYieldForCrop(crop);
    }, 0);
}

function getTotalYieldwithEnvironmentFactor(crops, environmentFactors) {
    return crops.reduce((total, crop) => {
        return (
            total + getYieldForCropWithEnvironmentFactor(crop, environmentFactors)
        );
    }, 0);
}

// Get cost for a crop
function getCostForCrop(crop) {
    return crop.numCrops * crop.crop.yield * crop.crop.price
}

function getCostForCropWithEnvironmentFactor(crop, environmentFactors) {
    if (environmentFactors.sun === "low") {
        return ((crop.numCrops * crop.crop.yield) / 100) * 80 * crop.crop.price;
    }
    if (environmentFactors.sun === "medium") {
        return crop.numCrops * crop.crop.yield * crop.crop.price;
    }
    if (environmentFactors.sun === "high") {
        return (
            crop.numCrops * crop.crop.yield / 100 * 150 * crop.crop.price
        );
    }
    if (environmentFactors.wind === "low") {
        return crop.numCrops * crop.crop.yield / 100 * 40 * crop.crop.price
    }
    if (environmentFactors.wind === "medium") {
        return crop.numCrops * crop.crop.yield / 100 * 70 * crop.crop.price
    }
    if (environmentFactors.wind === "high") {
        return crop.numCrops * crop.crop.yield * crop.crop.price
    }
}

// Get revenue for a crop
function getRevenueForCrop(crop) {
    return crop.numCrops * crop.crop.yield * crop.crop.salePrice;
}

function getRevenueForCropWithEnvironmentFactor(crop, environmentFactors) {
    if (environmentFactors.sun === "low") {
        return ((crop.numCrops * crop.crop.yield) / 100) * 80 * crop.crop.salePrice;
    }
    if (environmentFactors.sun === "medium") {
        return crop.numCrops * crop.crop.yield * crop.crop.salePrice;
    }
    if (environmentFactors.sun === "high") {
        return (
            crop.numCrops * crop.crop.yield / 100 * 150 * crop.crop.salePrice
        );
    }
    if (environmentFactors.wind === "low") {
        return crop.numCrops * crop.crop.yield / 100 * 40 * crop.crop.salePrice
    }
    if (environmentFactors.wind === "medium") {
        return crop.numCrops * crop.crop.yield / 100 * 70 * crop.crop.salePrice
    }
    if (environmentFactors.wind === "high") {
        return crop.numCrops * crop.crop.yield * crop.crop.salePrice;
    }

}

// Get profit by reusing the previous functions
function getProfitForCrop(crop) {
    return getRevenueForCrop(crop) - getCostForCrop(crop);
};

function getProfitForCropWithEnvironmentFactor(crop, environmentFactors) {
    return getRevenueForCropWithEnvironmentFactor(crop, environmentFactors) - getCostForCropWithEnvironmentFactor(crop, environmentFactors);
}

// Get the total profit with more then one crop, using the previous profit function
function getTotalProfit(crops) {
    return crops.reduce((total, crop) => {
        return total + getProfitForCrop(crop);
    }, 0);
}

function getTotalProfitWithEnvironmentFactors(crops, environmentFactors) {
    return crops.reduce((total, crop) => {
        return total + getProfitForCropWithEnvironmentFactor(crop, environmentFactors);
    }, 0);
}

module.exports = {
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
};
