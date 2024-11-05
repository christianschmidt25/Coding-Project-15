// Task 2: Create portfolio module with calculatePortfolioValue and getPortfolioAllocation functions.

// Import the assets array from asset.js file
import { assets } from './asset.js';

// Create a function to calculate the portfolio value by multiplying all of the asset prices and quantities and adding them up after 
export function calculatePortfolioValue(assets) {
    return assets.reduce((total, asset) => {
        return total + (asset.price * asset.quantity);
    }, 0);
}

// Create the total porfolio value as a variable
const portfolioValue = calculatePortfolioValue();

// Create a function to see what percentage each asset makes out of our total portfolio
export function getPortfolioAllocation(assets) {
    return assets.map(value => (value / portfolioValue) * 100);
};