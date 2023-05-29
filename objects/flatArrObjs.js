//one-dimensional array is a data structure that contains a set of elements of the same data type.

/* 
  * Takes an object containing arrays of objects and places all the nested objects into a new one-dim array that only contains id & type.
  * Bonus: Write a 2nd solution focusing on functional programming using built in methods.
*/

const object1 = {
    closedCreditMemos: [
        { id: 106, type: "credited" },
        { id: 108, type: "credited" },
    ],

    closedDeliveryOrders: [
        { id: 110, type: "delivered" },
        { id: 115, type: "delivered" },
    ],

    closedPickupOrders: [
        { id: 112, type: "pickup" },
        { id: 117, type: "pickup" },
    ],

    openCreditMemos: [],

    openDeliveryOrders: [
        {
        id: 123,
        type: "delivery",
        gateCode: "#2552",
        },
        {
        id: 153,
        type: "delivery",
        instructions: "Place in secure delivery box.",
        },
    ],

    openPickupOrders: [
        {
        id: 163,
        type: "pickup",
        },
    ],

    returnPickupOrders: [],
};
const expected1 = [
    { id: 112, type: "pickup" },
    { id: 117, type: "pickup" },
    { id: 123, type: "delivery" },
    { id: 153, type: "delivery" },
    { id: 123, type: "pickup" },
  ];
// const expected1 = [
//     { id: 106, type: "credited" },
//     { id: 108, type: "credited" },
//     { id: 110, type: "delivered" },
//     { id: 115, type: "delivered" },
//     { id: 112, type: "pickup" },
//     { id: 117, type: "pickup" },
//     { id: 123, type: "delivery" },
//     { id: 153, type: "delivery" },
//     { id: 163, type: "pickup" },
// ];



function find(obj) {
    const found = Object.values(obj).flat().map(({id, type }) => ({ id, type } ))
    return found
}

console.log(find(object1))