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
];

console.log("Quels sont les entrepreneurs nés dans les années 70 ?");
entrepreneurs.forEach(entrepreneur => {
  if(entrepreneur.year < 1980 && entrepreneur.year >= 1970) {
    console.log(entrepreneur.first + " "  + entrepreneur.last + " est des 70', étant né en " + entrepreneur.year);
  }
}) 

console.log("Voici un array contenant le nom et prénom de chaque entrepreneur :");
let entrepreneursNameArray = []
entrepreneurs.forEach(entrepreneur => {
  let name = entrepreneur.first + " " + entrepreneur.last;
  entrepreneursNameArray.push(name);
}) 
console.log(entrepreneursNameArray);

console.log("Voci l'age qu'aurait chaque entrepreneur aujourd'hui: ")

entrepreneurs.forEach(entrepreneur => {
  age = 2020 - entrepreneur.year
  console.log(entrepreneur.first + " " + entrepreneur.last + " aurait potentiellement " + age + " ans")
})

console.log("Voci la liste triée par ordre alphabetique :")
orderEntrepreneurs = entrepreneurs.sort(function(a, b){
  if(a.last < b.last) { return -1; }
  if(a.last > b.last) { return 1; }
  return 0;
})
orderEntrepreneurs.forEach(entrepreneur => {
  console.log(entrepreneur.last + " " + entrepreneur.first)
})