const salary = 21000;
const isBcs = true;
const height = 61;
const hasCar = false;

// if (salary > 20000 && height > 66) {
//   console.log("su------patro");
// } else {
//   console.log("onno patro khuji");
// }

// ----------------------------------
// if(salary>25000 || height>72 ){
//     console.log('eso baba kobul');
// }else{
//     console.log('vaag tui mokbul');
// }

// --------------------------------------
// more and more conditions

// if (salary > 25000 || height > 72 || isBcs == true) {
//   console.log("eso baba kobul");
// } else {
//   console.log("vaag tui mokbul");
// }

// -------------------------

// if (salary > 25000 && height > 72 && isBcs == true) {
//   console.log("eso baba kobul");
// } else {
//   console.log("vaag tui mokbul");
// }

// ----------complex conditions-------------
// if ((salary > 25000 && hasCar == true) || isBcs == true) {
//   console.log("eso baba kobul");
// }
// if ((salary > 25000 || hasCar == true) && isBcs == true) {
//   console.log("noo");
// }

// -------------------------------------
// problem-2:
// const orderAmount = 1100;
// if(orderAmount>=1000){
//   console.log('Free Delivery');
// }else{
//   console.log('Delivery Charge 80 taka');
// }

// ------Problem-2----------------
// const balance = 7000;
// const withDraw = 700;
// if (withDraw <= balance) {
//   if (withDraw % 500 === 0) {
//     console.log("WithDraw Successful");
//   } else {
//     console.log("Enter amount multiple of 500");
//   }
// } else {
//   console.log("Insufficient Balance");
// }

// --------------------------
// const price = 10000;
// if (price >= 5000) {
//   const discount = (price * 10) / 100;
//   const payAmount = price - discount;
//   console.log(payAmount);
// } else if (price > 2500) {
//   const discount = (price * 5) / 100;
//   const payAmount = price - discount;
//   console.log(payAmount);
// } else {
//   console.log(price);
// }

// ---------------------------------------
// const age = 51;
// const price = 500;
// if (age <= 12) {
//   console.log("You can eat for free");
// } else if (age >= 60) {
//   const discount = (price * 50) / 100;
//   const payAmount = price - discount;
//   console.log(payAmount);
// } else if (age >= 50) {
//   console.log("get 25% discount");
// } else if (age >= 40) {
//   console.log("get 30% discount");
// } else {
//   console.log(price);
// }

// ---------------------------------
const money = 500;
if (money > 300) {
  console.log("bro you are rich");
} else {
  if (money > 100) {
    console.log("tui gorib o na boro lok o na");
  } else {
    if (money > 0) {
      console.log("dosto kola kha.calcium bara");
    } else {
      console.log("tui amer bondu na");
    }
  }
}
