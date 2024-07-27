//  1 misol

// let n = 50;
// let arr = [];
// for(let i = 1; i <=n; i++){
//  arr.push(i)

// }
// console.log(arr);

//  2 misol

// let sum = [1,2,3,4,5,6,7,8,9,10];
// let arr = [];
// let arr1 = [];
// sum.forEach(num => {
//     if(num % 2 == 0){
//       arr1 += num;

//     }else{
//       arr += num;
//     }

// });

// let result = [arr,arr1];
// console.log(result);

//  3 misol
// let arr = [1,2,3,4,5];
// let arr1 = [6,7,8,9,10];
// let sum = 0;
// let sum1 = 0;
// let  res = 0;
// for(let i = 0; i < arr.length; i++){
//  sum += arr[i];
// }
// console.log(sum);
// for(let i = 0; i < arr.length; i++){
//     sum1 += arr1[i];
//    }
//    res = sum + sum1;
//    console.log(res);

//  4 misol

// let arr = [2,4,6,8,10];
//  let res= [];
// for(let  i = arr.length-1; i>= 0 ; i--){
//    res.push(arr[i]);

// }
// console.log(res);

//  5 misol

// 1 misol

// 2 misol

// let arr = ['sadaf','gwsdxchh',1,2,3,'fsdjhsj'];
// let res = [];
// for (const iterator of arr) {
//     if(typeof iterator =='string'){
//     res.push(iterator)

//     }

// }
// console.log(res);

// 3 misol

// let arr = [3,7,4,5,6];
// arr.splice(2,1,5);
// arr.splice(4,1,7);
// console.log(arr);

// 4 misol

// let arr = [2,99,6,5,10];
//  let res= [];
// for(let  i = arr.length-1; i>= 0 ; i--){
//     if(arr[i] % 2==1){
//       arr[i] = 0
//     }
//    res.push(arr[i]);

// }
// console.log(res);

// 5 misol

// let arr = [3,7,4];
// arr.splice(0,1,0);
// arr.splice(1,1,1);
// arr.splice(2,1,2);
// console.log(arr);

// 6 misol

// let arr = [3,99,6,5,10];
//  let res= [];
//  for (const iterator of arr) {
//     if(iterator % 3 == 0){
//        res.push(iterator);
//     }

//  }
//  console.log(res);

// 7 misol

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;

// for (const iterator of arr) {
//   sum += iterator;
// }

// for (let i = 0; i < arr.length; i++) {
//    let natija = arr[i] / sum

//    console.log(natija);
// }

// console.log(sum);
// 8 misol

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = arr.length - 1; i >= 0; i--) {
//     arr[i] = arr[i - 1];

//     arr[0] = 1

// }

// console.log(arr);

// 9 misol

// let arr= [-1,2,3,-8,-7];
// let res = [];
// for (let i = 0; i < arr.length; i++){
//     if (arr[i]>0) {
//         res.push(arr[i]);
//      }
//  }
//  console.log(res.length);

// 10 misol

// let arr = [1,2,3,-4,-7];
// let res=[];
// let res1=0;
// for(let i=0;i<arr.length;i++){
//     if (arr[i]>0) {
//        res.push(arr[i]);
//        res1+=arr[i];
//     }
// }
// console.log(res1);

// 11 misol

// let arr = ['jdfhd','afwgw'];
// let res = []
// for(let i = 0; i < arr.length; i++){
// res.push(arr[i].at(0))

// }
// console.log(res);

// 12 misol

// let arr=[1,2,4,5,7,-9,-4];
// let newArr = []

// for (const iterator of arr) {
//     if (iterator > 0) {
//         newArr.push(iterator * iterator)
//     }
// }

// console.log(newArr);

// 13-savol

// let arr = ["alik", "salom "];

// let kottasi = arr[0];
// let kichkinasi = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].length > kottasi.length) {
//     kottasi = arr[i]
//   }
//   if (arr[i].length < kichkinasi.length) {
//     kichkinasi = arr[i]
//   }
// }

// console.log(`kottasi ${kottasi}`);
// console.log(`kichkinasi ${kichkinasi}`);
