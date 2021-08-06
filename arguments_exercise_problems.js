// test
function sum1(arguments){
    let summation = 0;
    for(let i = 0; i < arguments.length; i ++){
        summation += arguments[i];
    }
    return summation;
}

// console.log(sum1([1,2,3,4]));

function sum2(...other_args){
    let summation = 0;
    for(let i = 0; i < other_args.length; i ++){
        summation += other_args[i];
    }
    return summation;
}

console.log(sum2(1,2,3,4));

