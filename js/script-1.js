function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
const totalPrice = pricePerDroid * orderedQuantity;

if (totalPrice > customerCredits) {
 message = "Insufficient funds!";
}
if (totalPrice < customerCredits)
 { 
   message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left.`;
}
  // Change code above this line
  return message;
  console.log(message);
}