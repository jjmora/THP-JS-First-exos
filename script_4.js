/* 2.3.1
Tu es en train d'écrire un livre sur les entrepreneurs américains et tu te renseignes sur leurs dates de naissance pour voir si tu ne peux pas identifier un millésime à succès.

Pendant ta recherche tu tombes sur une array contenant des entrepreneurs connus et leurs dates de naissance.
*/

const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
]
l = entrepreneurs.length



/* Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 */
console.log("### ENTREPRENEURS DES ANNÉES 70's ###")
for(i = 0; i < l; i++)
{
  if(entrepreneurs[i].year >= 1970 && entrepreneurs[i].year < 1980){
    console.log(entrepreneurs[i].first + " " + entrepreneurs[i].last + " " + entrepreneurs[i].year)
  }
}
console.log("*".repeat(60))
/* Sors une array qui contient le prénom et le nom des entrepreneurs */
/* [[first, last], [first, last]]*/
console.log("### ENTREPRENEURS ARRAY ###")
entrepreneurs_array = []

for(i = 0; i < l; i++)
{
  let arr = []
  arr[0] = entrepreneurs[i].first
  arr[1] = entrepreneurs[i].last
  entrepreneurs_array[i] = arr

}
console.log(entrepreneurs_array)
console.log("*".repeat(60))



/* Quel âge aurait chaque inventeur aujourd'hui ? */
console.log("### AGE ###")
let entrepreneur_age 
let birth_year
for(i = 0; i < l; i++){
  birth_year = entrepreneurs[i].year
  entrepreneur_age = 2020 - birth_year
  console.log(entrepreneurs[i].first + " " + entrepreneurs[i].last + " " + entrepreneurs[i].year + " => " + entrepreneur_age + " years old")
}
console.log("*".repeat(60))



/* Trie les entrepreneurs par ordre alphabétique du nom de famille. */
console.log("### LIST SORTED BY FAMILY NAME A-Z ###")
function compare(a, b){
  if(a.last < b.last){
    return -1
  }
  if(a.last > b.last){
    return 1
  }
  return 0
}
entrepreneurs.sort(compare)
console.log(entrepreneurs)
