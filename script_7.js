str = prompt(" Teste notre bot !")
if (str.charAt(str.length - 1) === "?") {
  console.log("Ouais ouais ...")
}
else if (str === str.toUpperCase() && str !== "" && str !== " ".repeat([str.length])) {
  console.log("Arrete de crier !")
}
else if (str.includes('Fortnite')) {
  console.log("On se fait une partie ?")
}
else if (str === "") {
  console.log("T'es en pls ?")
}
else {
  console.log("balek")
}