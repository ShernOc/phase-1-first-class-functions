/*take a callback function as an argument
call the callback function
it doesn't matter what this function returns, so long as it calls the callback function*/

 const callback = name => console.log("Sherlyne")

function receivesAFunction(callback){ // passing a name as 
  return callback(); // call the callback function
  }
receivesAFunction(callback); // sherlyne 

// returnsANamedFunction();
function returnsANamedFunction(callback){
  return function Named(){
    const name = receivesAFunction(callback) 
    console.log(`${name} is my first name and  Ochieng is my second name`)}; 
};

const fina = returnsANamedFunction("sherlyne"); 

console.log(fina());

// returnsAnAnonymousFunction

function returnsAnAnonymousFunction(){
  return function(){console.log("return an anonymous function")};
}
  const anony = (returnsAnAnonymousFunction());

  anony(); 