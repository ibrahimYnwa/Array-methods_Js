  //1-ci task

// const strReverse = str => str.split('').reverse().join('');
// console.log(strReverse('salam necesen'));

// 2-ci task

// foreach iteration

// const list= [1,2,3]

// Array.prototype.customForeach=function (callback) {
//  if (!callback || typeof callback !='function') {
//      throw Error ('The callback provided is not a function')
//  }
//  if (!this) {
//      throw Error ('Cannot call foreach on null or undefined');
//  }
//  for (let i= 0 ; i<this.length; i++) {
//      callback(this[i], i ,this) ;
//  }
// }
// list.customForeach((elem, i, arr) => console.log(elem, i , arr));



//map function

// const list=[1,2,4];

// Array.prototype.customMap= function(cb) {
//     const newArr=[]
//     for(let i=0; i<this.length; i++) {
//        const newValue = cb(this[i], i , this);
//        newArr.push(newValue);
//     }
//     return newArr;
// }
// const squaredList = list.customMap((elem)=> elem*elem);
// console.log(squaredList); 


// filter methods
// const list = [1,2,3] ;
// Array.prototype.customFilter= function(callback){
//     const newArr=[];
//     for(let i=0; i<this.length; i++) {
//         const passesTest = callback(this[i],i,this) ;
//         if (passesTest) {
//             newArr.push(this[i]);
//         }
//     }
//     return newArr;
// }
// const evenNumbers = list.customFilter((elem)=>elem %2 ==0);
// console.log(evenNumbers);

//reduce methods
// const list=[1,2,3]
// Array.prototype.customReduce= function (callback, initial){
//     let accumulator=initial || this[0];
//     for (let i=0;i<this.length;i++){
//         if (i!=0 && !initial) {
//             continue;
//         }
//         const newValue=callback(accumulator,this[i],i,this);
//         accumulator=newValue;

//     }
//     return accumulator;
// }
// const sum=list.customReduce((acc,elem)=>acc+elem);
// console.log(sum);

//find methods

//  const list=[1,2,3];
// Array.prototype.myFind = function(callback){
//     let result
//     for (let i = 0; i < this.length; i++) {
//       let isFound = callback(this[i], i, this)
//       if(isFound){
//         result = this[i]
//         break ;
//       }
//     }
//     return result
//   }
//   list.myFind((elem,i,arr) => console.log(elem,i,arr));


//every methods

// function every(array, callback) {
//     const { length } = array;
   
//     for (let index = 0; index < length; index += 1) {
//       const value = array[index];
   
//       if (!callback(value, index, array)) {
//         return false;
//       }
//     }
   
//     return true;
//    }

//reverse method

// function reverse(array) {
//     const result = [];
   
//     const lastIndex = array.length - 1;
   
//     for (let index = lastIndex; index > -1; index -= 1) {
//       const value = array[index];
//       result[lastIndex - index] = value;
//     }
   
//     return result;
//    }

//last index of

// function lastIndexOf(array, searchedValue) {
//     for (let index = array.length - 1; index > -1; index -= 1) {
//       const value = array[index];
   
//       if (value === searchedValue) {
//         return index;
//       }
//     }
   
//     return -1;
//    }







