/* 2.2.1
Créé un script script_2.js qui définira la fonction factorielle et qui calculera la factorielle du nombre entré par l'utilisateur. Petit exemple rapide : factorielle(5) = 5*4*3*2*1 et factorielle(10) = 10*9*8*7*6*5*4*3*2*1
*/
console.log("### Exo 2.2.1 ###")
console.log("### function => factorial(n) ###")
let n;
n = prompt('De quel nombre veux-tu calculer la factorielle ?')

function factorial(n){
  let answer = 1;
  if (n == 0 || n == 1){
    return answer;
  }else{
    for(var i = n; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  }  
}

answer = factorial(n)
console.log("The factorial of " + n + " is " + answer);
