function countUsingFor(countTo = 5) {
    console.log("For Loop - Starting to count:");
    for(let i = 1; i <= countTo; i++) {
        console.log(`Counter: ${i}`);
    }
    console.log("Counting is completed!");
}

function countUsingWhile(countTo = 5) {
    console.log("While Loop - Starting to count:");
    let i = 1;
    while(i <= countTo) {
        console.log(`Counter: ${i}`);
        i++;
    }
    console.log("Counting is completed!");
}

function countUsingDoWhile(countTo = 5) {
    console.info("Do While Loop - Starting to count:");
    let i = 1;
    do {
        console.log(`Counter: ${i}`);
        i++;
    }
    while(i <= countTo);
    console.info("Counting is completed!");
}

function funCountTo()
{
    let inputNumber = document.countingForm.countTo.value;

    if(inputNumber >= 1) {
        let rand = Math.floor(Math.random() * Math.floor(3));

        console.info(`Random Number: ${rand}`);

        switch(rand+1) {
            case 1: countUsingFor(inputNumber); break;
            case 2: countUsingWhile(inputNumber); break;
            case 3: countUsingDoWhile(inputNumber); break;
            default: countUsingFor(inputNumber); break;
        }
    }
    else {
        console.warn(`Warning: Expected input was a positive integer, but input was "${inputNumber}"`);
    }
}

function countDown() {
    let inputStart = document.countingDown.countFrom.value;
    let inputEndAt = document.countingDown.countTo.value;

    if(inputStart >= inputEndAt) {
        for(let i = inputStart; i >= inputEndAt; i--) {
            console.log(`Counter: ${i}`);
        }
    }
    else {
        console.warn(`Warning: Expected input was two integer, with the top input being higher than the second input, but got => Start: "${inputStart}" | End: "${inputEndAt}"`);
    }
}