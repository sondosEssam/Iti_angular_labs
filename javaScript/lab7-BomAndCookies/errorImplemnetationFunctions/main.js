function twoParamsOnly(a, b) {
    try {
            if (arguments.length > 2 ||arguments.length < 2 ) 
                throw new Error("exactly 2 parameters required");
    console.log(a,b);
    
    } catch (error) {
        console.log(error);
    }
}

function addNumbers(n) {
    try {
        //n is array?
    var sum = 0;
    if (arguments.length == 0)
         throw new Error("you must enter a prarmter");
    for (var i = 0; i<n.length; i++){
        if(typeof(n[i])!== "number")
            throw new Error("you must enter numbers");
        sum+= n[i];
    } 
    return sum
    } catch (error) {
     console.log(error);
    }

}

function firstReverse(...args) {
        try {
                if(args.length ==0 || arguments.length == 0)
            throw new Error("you must enter something to reveerse");
        return args.reverse();
        } catch (error) {
            console.log(error);
        }
    }

function secondReverse () {
//tradional method
try {
    var newArr = [];
    if(arguments.length ==0)
        throw new Error("you must enter something to reverse");
    for(var i = arguments.length - 1; i >= 0; i--) {
        newArr.push(arguments[i]);
    }
    return newArr;
} catch (error) {
    console.log(error);
}

}

//trying the functions
twoParamsOnly(1, 2);
twoParamsOnly(1, 2, 3);
twoParamsOnly(1);
console.log(addNumbers([1, 2, 3]));
console.log(addNumbers([1, 2, "3"]));
console.log(firstReverse(1, 2, 3));
console.log(firstReverse());
console.log(secondReverse(1, 2, 3));
console.log(secondReverse());