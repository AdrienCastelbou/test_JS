arn = ["CCGUCGUUGCGCUACAGC", "CCUCGCCGGUACUUCUCG"]
arn.forEach(element => {
  adn = element.match(/.{1,3}/g);
  for (let i = 0; i < adn.length; i++) {
    const  codon = adn[i];
    if (codon === "UCU" || codon === "UCC" || codon === "UCA" || codon === "UCG" || codon === "AGU" || codon === "AGC") {
      adn[i] = "Sérine"
    }
    if (codon === "CCU" || codon === "CCC" || codon === "CCA" || codon === "CCG" ) {
      adn[i] = "Proline"
    }
    else if (codon === "CGU" || codon === "CGC" || codon === "CGA" || codon === "CGG" || codon === "AGA" || codon === "AGG") {
      adn[i] = "Arginine"
    }
    else if (codon === "UUA" || codon === "UUG" ) {
      adn[i] = "Leucine"
    }
    else if (codon === "UUU" || codon === "UUC" ) {
      adn[i] = "Phénylalanine"
    }
    else if (codon === "UAU" || codon === "UAC" ) {
      adn[i] = "Tyrosine"
    }
    
  }
  aminés = adn.join("-")
  console.log(aminés)
});