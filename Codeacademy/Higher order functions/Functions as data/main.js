//We can assign functions to variables, and we can reassign them to new variables.

//Below, we have an annoyingly long function name that hurts the readability of any code in which it’s used.

const announceThatIAmDoingImportantWork = () => {
  console.log("I’m doing very important work!");
};

//To rename this function without sacrificing the source code, we can re-assign the function to a variable with a suitably short name:

const busy = announceThatIAmDoingImportantWork;
 
busy(); // This function call barely takes any space!

//Notice how we assign announceThatIAmDoingImportantWork without parentheses as the value to the busy variable. We want to assign the value of the function itself, not the value it returns when invoked.

//Hmmm, if we forgot the original name of our function. Is there a way we could figure it out?

console.log(busy.name)