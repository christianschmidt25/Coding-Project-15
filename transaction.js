// Task 3: Create transaction module with Transaction class

// Imports assets and getAssetByID from the asset JavaScript file
import { assets, getAssetById } from '/.asset.js';

// Create Transaction class
class Transaction {
    constructor(id, type, quantity) {
        this.id = id;
        this.type = type;
        this.quantity = quantity;
        this.asset = getAssetById(id);

        this.completeTransaction();
    }

    // Creates the function allowing user to complete a transaction
    completeTransaction() {
        if (this.type === 'sell') {
            if (this.quantity > this.asset.quantity) {
                throw new Error (`Insufficient quantity for sale of ${this.asset.name}.`);
            }
            this.asset.quantity -= this.quantity;
        } else if (this.type === 'buy') {
            this.asset.quantity += this.quantity;
        } else {
            throw new Error ('Invalid transaction type. Please type buy or sell.');
        }
    }
}