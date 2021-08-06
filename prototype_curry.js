Function.prototype.curry = function (numArgs){// numArgs -> 4
    let args = [];
    let that = this;//this -> long.says
    return function _curry(arg){
        args.push(arg);
        if(args.length == numArgs){
            // return that.apply(args)
            return that(...args)
        }
        return _curry;
    }
}

long.say
long.say("hello")

class Cat {
    constructor(name) {
        this.name = name;
    }
  
    says(...args) {
        let sound = args.join(" & ");
        // let currentname = this.name;
        console.log(`says ${sound}!`);
      return true;
    }
}

const long = new Cat("Long");
long.says.curry(4)("A")("B")("C")("D");
// long.says(["A", "B", "C", "D", "E"]).curry(3);
// long.says(["A", "B", "C", "D", "E"]).curry(4);
// long.says(["A", "B", "C", "D", "E"]).curry(5);

// const currytest = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56


myfunc.apply(cxt, args)
myfunc.apply(null, args)
myfunc.call(null, ...args)