## **PROJECT: Credit Card Validator**

In this project you'll write a script that validates whether or not a credit card number is valid.

Here are the rules for a valid number:

- Number must be 16 digits, all of them must be numbers.
- You must have at least two different digits represented (all of the digits cannot be the same).
- The final digit must be even.
- The sum of all the digits must be greater than 16.

For example, the following credit card numbers are valid:

```markdown
9999777788880000
6666666666661666
```

And the following credit card numbers are invalid:

```markdown
a92332119c011112 (invalid characters)
4444444444444444 (only one type of number)
1111111111111110 (sum less than 16)
6666666666666661 (odd final number)
```

These are the requirements your project needs to fulfill:

- Make a JavaScript file with a name that describes its contents.
- Create a function with a descriptive name which makes it clear what the function does. The function should take one argument, the credit card number to validate.
- Write at least 2 comments that explain to others what a line of code is meant to do.
- Return a boolean from the function to indicate whether the credit card number is valid.
- Use `node` from the command line to test if your code works as expected.

Good luck!

function validateCreditCard(creditCardNumber){
if(creditCardNumber.length !==16){
return false;
}
}

<!-- All of the digits must be numbers -->

for(var i = 0;i < creditCardNumber.length;i++){
if(!Number.isInteger){
return false;
}
}

<!-- credit card number must have at least two different digits -->

var element = {};
for(var i = 0;i< creditCardNumber.length;i++){
element[creditCardNumber[i]] = true;
}
if(element.length<2){
return false;
}

<!-- final digit of credit card must be even -->

if(creditCardNumber[creditCardNumber.length - 1]% 2 !==0){  
 return false;
}

<!-- The sum of all the digits must be greater than 16 -->

var = 0;
for(var i =0;i <creditCardNumber.length;i++){
sum +=Number(creditCardNumber[i]);
}
if(sum <= 16){
return false;
}
return true;
};
console.log(validateCreditCard("9999777788880000))