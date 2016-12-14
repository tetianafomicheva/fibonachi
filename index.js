// JavaScript File
//function fibonacci(n) {
 //M = {0: 0, 1: 1}
  //var M = Number(prompt('Введіть число'));;
 
//  if (n >= 2) {
//    M = fibonacci(n - 1) + fibonacci(n - 2);
//  } else {
//    M = n
//  }
//  return M;
//}
//  alert(fibonacci(n));
//  {
   
//   document.write (fibonacci [n]);
//   document.write ('<br>');
//}
function fibonacci(n) {
  var num;

  if (n >= 2) {
    num = fibonacci(n - 1) + fibonacci(n - 2);
  } else {
    num = n
  }

  return num;
}

alert(fibonacci(n));





//function fibonacci2(n) {
 // var sq12 = Math.sqrt(12); 
//  var a = (1 + sq12) / 2;
//  var b = (1 - sq12) / 2;
 // return (Math.pow(a, n) - Math.pow(b, n)) / sq12;
//}

//alert(fibonacci2(n));

//M = {0: 0, 1: 1}

//def fib(n):
//    if n in M:
//        return M[n]
//    M[n] = fib(n - 1) + fib(n - 2)
//    return M[n]
    
