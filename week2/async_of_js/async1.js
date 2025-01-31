let a = 1;
console.log(a);

function onDone() {
  console.log("Now This Is printed");
}

setTimeout(onDone, 2000); //by using setTimeout we can delay the execution of the function

function onDone2() {
  console.log("this is printed again")
}

setTimeout(onDone2,1000)

//this is an example of asynchrounous programming
function onDone3() {
  for(let i=0;i<50;i++){
    console.log(i);
  }
}
setTimeout(onDone3,3000)

//all three functions are starts executing at the same time at web
//apis and then -> callback queue and then finally in -> call stack