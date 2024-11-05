// Task 4: Implement main application and log portfolio details and transactions.

// Import the functions and class from their respective files, so we can use in the main application
import { assets } from "./asset.js";
import { calculatePortfolioValue, getPortfolioAllocation } from "./portfolio.js";
import Transaction from "./transaction.js";

console.log("Assets:", assets);
console.log("Total Portfolio Value:", calculatePortfolioValue(assets));
console.log("Portfolio Allocations:", getPortfolioAllocation(assets));

// Create transactions for our assets in the portfolio
const transaction1 = new Transaction(5, "sell", 20);
transaction1.completeTransaction();
const transaction2 = new Transaction(2, "buy", 5);
transaction2.completeTransaction();

console.log("Updated Portfolio Value:", calculatePortfolioValue(assets));
