// Variable কী?

// Variable হলো প্রোগ্রামিং-এ এমন একটি নামযুক্ত জায়গা (container), যেখানে আমরা data বা মান (value) সংরক্ষণ করি, যাতে পরে তা ব্যবহার বা পরিবর্তন করা যায়।

// expamle:
// let name  = 'javascript'

// var  ==>must avoid
// let ===>do not  re-declare

// const ===> not changeable

let a = "Global";

function outer() {
  let b = "Function (outer)";

  function inner() {
    let c = "Function (inner)";

    if (true) {
      let d = "Block Scope";

      console.log(a); // ✔️ Global
      console.log(b); // ✔️ Function (outer)
      console.log(c); // ✔️ Function (inner)
      console.log(d); // ✔️ Block
    }
  }

  inner();
}

outer();
