// function continuousAdd() {
//     const args = []; //place holder to collect eles that pass in. Closure let us keep values private(we coulnt see this args array in console)
//     return function _curriedAdd(num) {
//       args.push(num);
//       console.log(args.reduce((acc, ele) => acc + ele));
//       return _curriedAdd;
//     };
//     //^^ this inner function closes over that arg array and accept a num with each invocation.
//   }


function curriedSum1(count) {
    let numbers = [];
    let sum = 0
    function _curriedSum(num) {
        numbers.push(num);
        sum += num
        if (numbers.length === count) {
        //    return numbers.reduce((a, b) => a + b, 0);
            return sum
        }
        console.log(numbers);
        return _curriedSum;
    }
    return _curriedSum;
}


function curriedSum2(count) {
    let numbers = [];
    function _curriedSum(num) {
        numbers.push(num);
        if (numbers.length === count) {
           return numbers.reduce((a, b) => a + b, 0);
        }
        console.log(numbers);
        return _curriedSum;
    }
    return _curriedSum;
}


// function curriedSum(count) {
//     let numbers = [];
//     function _curriedSum(num) {
//         numbers.push(num);
//         num += _curriedSum();
//         if (numbers.length === count) {
//             console.log(numbers.reduce((acc, ele) => acc + ele));
//             return _curriedSum 
//         }
//     }
// }

const sum1 = curriedSum1(4);
// console.log(sum(5)(30)(20)(1)); // => 56
sum1(5);
sum1(30);
sum1(20);
console.log(sum1(1));
// const sum2 = curriedSum2(4);
// console.log(sum(5)(30)(20)(1)); // => 56

const sum2 = curriedSum2(4);
sum2(5);
sum2(30);
sum2(20);
console.log(sum2(1));