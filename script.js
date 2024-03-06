let money = prompt("How much money do you want to get?");
let count = confirm("Do you want any definite money");
let one = 0;
let ten = 0;
let fifty = 0;
let hundred = 0;
let twoHundred = 0;
let cash = prompt("Enter the banknote:");
let countInput = prompt("Enter the count of banknotes:");
let cashAmount = cash * countInput;

if (money != cashAmount) {
    money -= cashAmount;
}

for (i = 0; i < countInput; i++) {
    if (cash == 1) {
        one++
    } else if (cash == 10) {
        ten++
    } else if (cash == 50) {
        fifty++
    } else if (cash == 100) {
        hundred++
    } else if (cash == 200) {
        twoHundred++
    }
}
while (money >= 200) {
    money -= 200;
    twoHundred++;
}

while (money >= 100) {
    money -= 100;
    hundred++;
}

while (money >= 50) {
    money -= 50;
    fifty++;
}

while (money >= 10) {
    money -= 10;
    ten++;
}

while (money >= 1) {
    money -= 1;
    one++;
}

let message = "";

if (twoHundred > 0) {
    message += `200x${twoHundred}, `;
}
if (hundred > 0) {
    message += `100x${hundred}, `;
}
if (fifty > 0) {
    message += `50x${fifty}, `;
}
if (ten > 0) {
    message += `10x${ten}, `;
}
if (one > 0) {
    message += `1x${one}`;
}

alert(message);
