/*take a callback function as an argument
call the callback function
it doesn't matter what this function returns, so long as it calls the callback function*/

// const callback  = 'sherlyne'

function receivesAFunction(callback){  // argument call back
  callback(); // call the callback function
  }
receivesAFunction();

// returnsANamedFunction();
function returnsANamedFunction(){
  return function NamedFunction(){}; 
};

returnsANamedFunction(); 

// returnsAnAnonymousFunction

function returnsAnAnonymousFunction(){
  return function(){};
}
  returnsAnAnonymousFunction();