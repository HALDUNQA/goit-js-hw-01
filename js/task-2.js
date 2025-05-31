 function getShippingMessage(country, price, deliveryFee){

     let totalPrice=price + deliveryFee;
     console.log(`Shipping to ${country} will cost ${totalPrice} credits`);

 }

const country="Australia";
const price= 120;
const deliveryFee= 50;

getShippingMessage(country, price, deliveryFee);







 