var numCards = 5;

//true is front, false is back
var side = true;
var currCard = 0;
var beingAdded = false;

var cardFronts = [];
var cardBacks = [];

// var longFront = "";
// for(i = 0; i < 272; i++) {
//     longFront += "0";
// }
// var longBack = ""
// for(i = 0; i < 1173; i++) {
//     longBack += "0";
// }
// cardFronts[0] = longFront;
// cardBacks[0] = longBack;

// //acutally initialize the arrays
// for(i = 0; i < 5; i++) {
//     cardFronts[i] = "Front " + i;
//     cardBacks[i] = "Back " + i;
// }

function setFront(cardNum) {
    const text = document.getElementById("text");
    const element = document.querySelector('.card');
    text.innerHTML = cardFronts[cardNum];
    element.style.textAlign = 'center';
    element.style.fontSize = '40px';
    element.style.lineHeight = '51px';
}

function flipCard() {
    if(!beingAdded) {
        const text = document.getElementById("text");
        const element = document.querySelector('.card');
        if(side) {
            text.innerHTML = cardBacks[currCard];
            element.style.textAlign = 'left';
            element.style.fontSize = '20px';
            element.style.lineHeight = '24px';
        } else {
            setFront(currCard);
        }
        side = !side;
    }
}

function nextCard() {
    if(!beingAdded) {
        if(currCard < numCards - 1) {
            currCard++;
        } else {
            currCard = 0;
        }
        side = true;
        var text = document.getElementById("text");
        setFront(currCard);
    }
}

function randomizeOrder() {
    if(!beingAdded) {
        var frontSwap;
        var backSwap;
        for(i = numCards-1; i > 0; i--) {
            let swapIndex = Math.floor(Math.random() * (i-1))
            frontSwap = cardFronts[swapIndex];
            backSwap = cardBacks[swapIndex];
            cardFronts[swapIndex] = cardFronts[i];
            cardBacks[swapIndex] = cardBacks[i];
            cardFronts[i] = frontSwap;
            cardBacks[i] = backSwap;
        }
        setFront(0);
        currCard = 0;
    }
}

function openPopup() {
    if(!beingAdded) {
        document.getElementById("popupOverlay").style.display = "block";
        beingAdded = true;
    }
}

function closePopup() {
    addCard(document.getElementById("front").value, document.getElementById("back").value);
    document.getElementById("popupOverlay").style.display = "none";
    beingAdded = false;
}

function addCard(newFront, newBack) {
    const MAX_LENGTH = 1173;

    if(newFront != null && newBack != null && newFront.length < MAX_LENGTH && newBack.length < MAX_LENGTH) {
        cardFronts[numCards] = newFront;
        cardBacks[numCards] = newBack;
        numCards++;
    }
}

function removeCard() {
    if(!beingAdded) {
        for(i = currCard; i < numCards - 1; i++) {
            cardFronts[i] = cardFronts[i + 1];
            cardBacks[i] = cardBacks[i + 1];
        }
        numCards--;
    
        let text = document.getElementById("text");
        //last card was deleted
        if(numCards === 0) {
            cardFronts[0] = "";
            cardBacks[0] = "";
            text.innerHTML = "";
            currCard = 0;
        //card being deleted was the last one
        } else if(currCard === numCards) {
            setFront(0);
            currCard = 0;
        } else {
            setFront(currCard);
        }
    }
}