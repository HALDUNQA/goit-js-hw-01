 function getShippingMessage(country, price, deliveryFee){

     let totalPrice=price + deliveryFee;
   return `Shipping to ${country} will cost ${totalPrice} credits`;

 }

const country="Australia";
const price= 120;
const deliveryFee= 50;

console.log(getShippingMessage(country, price, deliveryFee));







 