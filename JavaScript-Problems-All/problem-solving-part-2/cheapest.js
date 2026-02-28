const phones = [
  { name: "Samsung", price: 200, camera: "12mp", color: "black" },
  { name: "xoami", price: 18000, camera: "12mp", color: "black" },
  { name: "Oppo", price: 30000, camera: "12mp", color: "black" },
  { name: "Iphone", price: 100000, camera: "12mp", color: "black" },
  { name: "Walton", price: 31000, camera: "12mp", color: "black" },
  { name: "HTC", price: 27000, camera: "12mp", color: "black" },
];

function min(array) {
  let cheapest = array[0];
  for (const i of array) {
    if (i.price < cheapest.price) {
      cheapest = i;
    }
  }
  return cheapest;
}

const minPrice = min(phones);
console.log(minPrice);
