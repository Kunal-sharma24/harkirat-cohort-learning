//this process is known as callbacks
//we use callbacks because we just not want to repeat the code again and again

function square(x) {
    return x * x;
  }
  
  function cube(x) {
    return x * x * x;
  }
  
  function quad(x) {
    return x * x * x * x;
  }
  
  function answer(a, b, fn) {
    let one = fn(a); //4
    let sec = fn(b); //9
    return one + sec;
  }
  
  let ans = answer(2, 3, quad);
  console.log(ans);
  