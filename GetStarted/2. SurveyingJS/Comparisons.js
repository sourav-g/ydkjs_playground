//nuanced differences between `equality` and `equivalence` comparison
//? === strict equality
//? ==  ?

let counter=0;
function print(x){
    if(typeof x != 'string') {
        counter++;
        console.log(`${counter}`,  x);
    }else{
        console.log(x);
    }
}

print('Basic');
print(3===3.00);
print(42==='42');
print(true===1);
print(undefined===undefined);      //true
print(null===undefined);           //false


//* Is === checking both value and type ?
//* Infact, all value comparisons in JS consider the `type` of values being compared
//* Difference is === do not allow type coercion, other comparisons do

//? But 2 lies of === 

print('Lies - Dangerous');
print(NaN===NaN);           //Hence, use Number.isNaN()
print(0===-0); // -0 ??     //Hence, use Object.is(..) // really-really-strict comparison :p


//? Non-primitive comparisons
//? === : Does not check structural equality, only identity(reference) equality

print('Non-primitives');
print([1,2,3]===[1,2,3]);   //These 2 are separate arrays hence false
print({a:2}==={a:2});


//-----------------------------------------------------------------------------//

//?Coercive Comparison  [One of the most confusing in JS]
// == loose equality (coercive equality)   [poorly designed and dangerous/bug-ridden]
//! Misconception => It performs comparisons without considering `type` 
// Both === and == consider types
// If type is same, == and === does exactly same thing

print('Coercive Equality');
print(42.1=='42.1');        //Converts non-number -> numbers, before comparison
print(1==true);             //* Imp: == prefers `primitive numeric comparisons`
print(""==0);               //true -> so "" converted to 0  :D
print(null==0);             //false -> null not converted ?
print(0==undefined);        //false
print(0==false);            //true


//?Relation operators ( >, >=, <, <=) 
//typically use numeric comparisons
//!Exception: When both values are `strings`, they use alphabetical comparisons (dictionary like)
print('Relational operators');
print("10" < "9");  //true

