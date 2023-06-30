# Spanish ID Validation

This is a JavaScript program that validates and verifies the Spanish ID number and letter combination provided by the user.

## Program Description

The program takes input from the user, which consists of a Spanish ID number and an optional letter. It performs the following steps to validate and verify the input:

1. It validates the ID number by checking if the numeric part of the ID number falls within the valid range (between 11,111,111 and 99,999,999).

2. If the letter is not provided in the input, the program calculates the correct letter based on the numeric part of the ID number using a specific algorithm.

3. The program converts the provided letter (or the calculated one) to uppercase for consistent comparison.

4. It compares the provided letter with the calculated correct letter and determines if they match.

5. Based on the comparison, the program displays an appropriate message to the user indicating whether the number and letter combination is correct or not.

## Usage


1. Open the program in a JavaScript-supported environment (such as a web browser console or a Node.js environment) o simply go to this link https://wonderful-eclair-9afd0b.netlify.app/

2. The program will prompt you to input the Spanish ID number and letter. The default input is provided as an example.

3. Enter the Spanish ID number and letter combination as prompted.

4. The program will validate and verify the input, and display a message indicating whether the number and letter combination is correct or not.

## Error Handling

- If the ID number provided is not within the valid range, an error message will be displayed, and the program will terminate.
