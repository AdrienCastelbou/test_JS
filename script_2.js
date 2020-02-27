let number = prompt("De quel nombre veux tu calculer la factorielle ?")
let result = number
for(count = 1; count < number; count ++) {
  result = result * count;
  console.log(result)
}

console.log(`le resultat de ta factorielle est ${result}`)