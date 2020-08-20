/* 2.2.2
Pyramide Reversed 2
*/
console.log("### Exo 2.2.2 ###")
console.log("### Pyramid Reversed 2 ###")

etages = prompt("Reversed Pyramid: Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")

if (etages > 25 || etages < 1) {
  console.log("I need a number between 1 and 25. Please try again.")
} else {
  let i = 1
  let spaces
  let n

  spaces = etages - i
  n = etages
  while(etages > 0){
    console.log(" ".repeat(i) + "#".repeat(etages))
    etages -=1
    i += 1
  }
}
