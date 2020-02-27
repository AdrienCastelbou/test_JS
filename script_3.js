let number = prompt("Combien d'etages veux tu dans ta pyramide ?")
for(count = 1; count <= number; count ++) {
  console.log( ' '.repeat([number - count]) + "#".repeat([count]))
}