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

console.log('Les livres ont-ils tous été emprunté au moins une fois ?');
let allRented = true 
books.forEach(book => {
  if (book.rented === 0) {
    return allRented = false;
  }
})
console.log(allRented);

console.log("Le livre le plus emprunté :");

orderBooks = books.sort(function(a, b){
  if(a.rented < b.rented) { return -1; }
  if(a.rented > b.rented) { return 1; }
  return 0;
})
console.log(orderBooks[orderBooks.length - 1].title + " avec " + orderBooks[orderBooks.length - 1].rented + " emprunts" );

console.log("Quand au livre le moins emprunté il s'agit de : " + orderBooks[0].title + " avec " + orderBooks[0].rented + " emprunts");

const book_873495 = books.find(book => book.id === 873495);
console.log("Le livre possedant l'ID 873495 est : " + book_873495.title);

const delete_book = books.find(book => book.id === 133712);
console.log("Le livre possedant l'ID 133712 qui est à supprimer est : " + delete_book.title);
newBooks = []
books.forEach(book => {
  if (book.id !== 133712) {
    newBooks.push(book)
  }
})

console.log("Et voici la nouvelle liste triée par ordre aplhabetique :")
orderNewBooks = newBooks.sort(function(a, b){
  if(a.title < b.title) { return -1; }
  if(a.title > b.title) { return 1; }
  return 0;
})
console.log(orderNewBooks)
