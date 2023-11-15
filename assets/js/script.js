const name = prompt("Qual'è il tuo Nome?");

const surname = prompt("Qual'è il tuo Cognome?");

const colorPrefer = prompt("Qual'è il tuo Colore preferito?");

const passwordGenerator = name + surname + colorPrefer + 23;

console.log(passwordGenerator);

const password = document.getElementById("password");

password.innerHTML = `La tua password è: ${passwordGenerator}`;
