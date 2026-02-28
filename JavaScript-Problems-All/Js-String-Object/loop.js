const mobile = {
  brand: "samsung",
  price: 25000,
  color: "black",
  camera: "12mp",
};

// for (let i in mobile) {
//   console.log(i);
//   console.log(mobile[i]);
// }

const keys = Object.keys(mobile);

for (const key of keys) {
  console.log(key, mobile[key]);
}
