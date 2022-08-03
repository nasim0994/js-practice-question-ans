//২৩. তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে।

// var money = 000;
// if (money > 80000) {
//   console.log("i want to buy mac book pro Laptop");
// } else if (money > 60000) {
//   console.log("i want to buy Gaming Laptop");
// } else if (money > 40000) {
//   console.log("i want to buy Lenovo Yoga Laptop");
// } else if (money > 20000) {
//   console.log("i want to Used Laptop");
// } else {
//   console.log("i want to buy mobile");
// }

//আসকে আমার মন ভালো নেই
// Foor Loop
// var monValoNei = "আসকে আমার মন ভালো নেই";
// for (var i = 0; i < 10; i++) {
//   //console.log(monValoNei);
// }

// //While Loop
// var monValoNei = "আসকে আমার মন ভালো নেই";
// var i = 0;
// while (i < 10) {
//   console.log(monValoNei);
//   i++;
// }

//২৮.একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও
//Foor Loop
// for (var i = 58; i <= 98; i++) {
//   console.log(i);
// }
// //While Loop
// var start = 58;
// while (start <= 98) {
//   console.log(start);
//   start++;
// }

//২৯.একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও
// for (i = 412; i <= 456; i += 2) {
//   console.log(i);
// }
// ৩০.একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও
// for (var i = 581; i <= 623; i += 2) {
//   console.log(i);
// }
//৩২.তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও।
// var learned = [
//   "variable",
//   "operators",
//   "data type",
//   "array",
//   "condition",
//   "loop",
// ];

// for (let i = 0; i < learned.length; i++) {
//   const learn = learned[i];
//   console.log(learn);
// }

// var mobiles = ["Walton", "LG", "Moto", "Iphone", "Redmi", "Tecno"];
// var i = 0;
// while (i < mobiles.length) {
//   var mobile = mobiles[i];
//   console.log(mobile);
//   i++;
// }

// ৩৫. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও

// for (var i = 30; i <= 86; i++) {
//   if (i > 44) {
//     break;
//   }
//   console.log(i);
// }

// ৩৫. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা।

// var myBooksPrice = [100, 155, 200, 250, 99, 299, 500, 199];
// for (var i = 0; i < myBooksPrice.length; i++) {
//   var singleBookPrice = myBooksPrice[i];
//   if (singleBookPrice > 200) {
//     continue;
//   }
//   console.log(singleBookPrice);
// }
