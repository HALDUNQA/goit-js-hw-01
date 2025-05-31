
console.log (`hello`);


function makeTransaction( quantity, pricePerDroid){

     const totalPrice= quantity*pricePerDroid;
     console.log(`You ordered ${quantity} droids worth ${totalPrice} credits!`);
}
const quantity=5;
const pricePerDroid=8;
console.log(makeTransaction(quantity, pricePerDroid));
