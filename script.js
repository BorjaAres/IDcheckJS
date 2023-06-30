// Program Description:
// This program validates and verifies the Spanish ID number and letter combination provided by the user.

// Array of letters used for Spanish ID validation
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

// Prompt the user to input the Spanish ID number and letter
let DNI = prompt("Introduce the number and letter of your Spanish ID", "45809046s");

// Extract the numeric part of the input by removing all non-digit characters
let numero = DNI.replace(/\D/g, '');

// Check if the numeric part is within the valid range
if (numero > 99999999 || numero < 11111111) {
    document.getElementById('myDiv1').innerHTML = "That's not a valid ID number";
    throw new Error("Invalid ID number. Please refresh the page and try again");
}

// Get the provided letter from the input
let letraAportada = DNI[8];

// Calculate the correct letter based on the numeric part
let letraCorrecta = letras[numero % 23];

// Compare the provided letter with the correct letter and display the result
if (letraAportada && letraAportada.toUpperCase() === letraCorrecta) {
    document.getElementById('myDiv1').innerHTML = "The number and letter of your ID are correct";
} else if (!letraAportada) {
    letraAportada = letraCorrecta;
    document.getElementById('myDiv1').innerHTML = "The number of your ID is correct. The calculated letter is: " + letraCorrecta;
} else {
    document.getElementById('myDiv2').innerHTML = "The letter you've introduced is not correct, the correct letter is: " + letraCorrecta;
}
