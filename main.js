// Task 4: Implement main application and log portfolio details and transactions.

// Import the functions and class from their respective files, so we can use in the main application
import { calculatePortfolioValue, getPortfolioAllocation } from "./portfolio";
import Transaction from "./transaction";

console.log("Total Portfolio Value:", calculatePortfolioValue());