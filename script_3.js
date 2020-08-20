/* 2.2.2
Ah la pyramide de Mario du pré-parcours. Que de bons souvenirs. Tu vas écrire un script appelé script_3.js

Voici ce que devra afficher la console :

"Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"
// Utilisateur rentre un nombre (par ex 5)*/
console.log("### Exo 2.2.2 ###")
console.log("### Pyramid Regular ###")

etages = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")

if (etages > 25 || etages < 1) {
  console.log("I need a number between 1 and 25. Please try again.")
} else {
  let i = 1
  while(etages > 0){
    console.log("#".repeat(i))
    i += 1
    etages -= 1
  }
}
