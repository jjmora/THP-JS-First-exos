/* 2.3.2
C'est ton premier jour de stage au CDI du collège du coin. Tu dois aider la bibliothécaire à faire des statistiques dans la base de données de livres du collège et elle te donne ce jeu de données pour que tu maitrises le back-office du programme.
*/

const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("### Exo 2.3.2 ###")

/* Est-ce que tous les livres ont été au moins empruntés une fois ? */
console.log("### NOT RENTED BOOKS ###")
arr_new_list = []
for(let i = 0; i < books.length; i++){
  if(books[i].rented === 0){
    arr_new_list.push(books[i].title)
  }
}
let not_rented = arr_new_list.length
console.log("There are " + not_rented + " not rented books")
console.log("*".repeat(60))



/* Quel est le livre le moins emprunté ? */
console.log("### LESS AND MOST RENTED BOOKS ###")

function compare_max(a, b){
  if(a.rented < b.rented){
    return -1
  }
  if(a.rented > b.rented){
    return 1
  }
  return 0
}

function compare_min(a, b){
  if(a.rented < b.rented){
    return 1
  }
  if(a.rented > b.rented){
    return -1
  }
  return 0
}

books.sort(compare_max)
console.log("The less rented book is '" + books[0].title + "' with " + books[0].rented + " rents")

books.sort(compare_min)
console.log("The most rented book is '" + books[0].title + "' with " + books[0].rented + " rents")
console.log("*".repeat(60))

/* Trouve le livre avec l'ID: 873495 */
console.log("### BOOK WITH ID: 873495 ###")
console.log("### use the 'search_book(id)' function to search for a book by id ###")

function search_book(id){
  for(let i = 0; i < books.length; i++){
    if(books[i].id == id){
      return (books[i].title)
    } 
  }
}

book = search_book(873495)
console.log("The book with id 873495 is " + book)
console.log("*".repeat(60))

/* Supprime le livre avec l'ID: 133712 */
console.log("### BOOK WITH ID: 133712 ###")
console.log("### use the 'erase_by_id(id)' function to erase a book by id ###")
console.log("There are " + books.length + " books") 

function erase_by_id(book_id){
  for(let i = 0; i < books.length; i++){
    if(books[i].id != null && books[i].id === book_id){
      books.splice(i,1)
      console.log("One book has been erased")
      break
    }
  }

  
  console.log("There are " + books.length + " books")
  return books
}
erase_by_id(133712)

console.log("*".repeat(60))

/* Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il essupprimé) */
console.log("### BOOKS SORTED BY TITLE ###")

let books_sorted
books_sorted = books

function compare(a, b){
  if(a.title < b.title){
    return -1
  }
  if(a.title > b.title){
    return 1
  }
  return 0
}

books_sorted.sort(compare)

console.log(books_sorted)

console.log("*".repeat(60))