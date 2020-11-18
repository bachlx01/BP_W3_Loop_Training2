function excercise1() {
    let a = 0;
    let b = 1;
    let c = 0;
    for (i = 0; i < 20; i++) {
        document.write(i + 1 + '. ' + b + '<br>')
        c = b + a;
        a = b;
        b = c;
    }
}

function excercise2() {
    let number = +prompt("This is program to get factorials of a number. Enter your number: ");
    let factorials = 1;
    for (i = 1; i <= number; i++) {
        factorials *= i;
    }
    alert(number + '! = ' + factorials);
}

function excercise3() {
    // Raw the triangle
    let height = +prompt("Enter the height of triangle: ");
    for (i = 1; i <= height; i++) {
        for (j = 1; j <= i; j++) {
            document.write("*");
        }
        document.write('<br>');
    }
    document.write('<br>');

    for (i = height; i > 0; i--) {
        for (j = 1; j <= i; j++) {
            document.write("*");
        }
        document.write('<br>');
    }
    document.write('<br>');

    for (i = height - 1; i >= 0; i--) {
        for (j = (i - 1); j >= 0; j--) {
            document.write("&nbsp&nbsp");
        }
        for (k = 1; k <= (height - i); k++) {
            document.write("*");
        }
        document.write('<br>');
    }
    document.write('<br>');

    for (i = height; i > 0; i--) {
        for (j = 0; j < (height - i); j++) {
            document.write("&nbsp&nbsp");
        }
        for (k = i; k > 0; k--) {
            document.write("*");
        }
        document.write('<br>');
    }
}

function excercise4 () {
    let width = +prompt('Enter the width of rectangle: ');
    let height = + prompt('Enter the height of rectangle: ');
    for (i=1;i<=height;i++){
        for (j=1;j<=width;j++){
            if (i==1||i==height||j==1||j==width) {
                document.write('* ');
            }
            else {
                document.write('&nbsp&nbsp ');
            }
        }
        document.write('<br>');
    }
}

function excercise5 () {
    let initialLoan = parseInt(prompt('Enter the initial loan:'));
    let interestRate = parseInt(prompt('Enter the interest rate (unit %)'));
    let count = parseInt(prompt('Enter the count of month: '));
    let interest = 0;
    if (count==1) {
        interest = initialLoan * (interestRate/100);
        alert('The total interest is: ' + interest);
    }
    else {
        for (i=1;i<count;i++) {
            initialLoan += initialLoan*(interestRate/100);
        }
        interest = initialLoan*(interestRate/100);
        alert('The total interest is: ' + interest);
    }
}
