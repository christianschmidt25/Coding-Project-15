// Task 1: Create asset module with asset list and getAssetById function.

// Create variable for our assets list
export const assets = [
    {id: 1, name: 'Microsoft', type: 'stock', price: 400, quantity: 10},
    {id: 2, name: 'Nvidia', type: 'stock', price: 150, quantity: 30},
    {id: 3, name: 'Apple', type: 'stock', price: 1000, quantity: 5},
    {id: 4, name: 'Google', type: 'stock', price: 300, quantity: 15},
    {id: 5, name: 'UnitedHealth Group', type: 'stock', price: 500, quantity: 20}
];

//Create function to identify assets by typing in their unique ID
export function getAssetById(id) {
    return assets.find(asset => asset.id === id);
};