//flash cards information
var numCards = 0;
var currCard = 0;
var cardFronts = [];
var cardBacks = [];

//true is front, false is back
var side = true;
//trach if a new card is being added and disables other functions
var beingAdded = false;


function readCookies() {
    let cookieString = document.cookie;

    let cards = cookieString.split("^");
    for(i = 1; i < cards.length; i++) {
        let sides = cards[i].split("+");
        cardFronts[numCards] = sides[0];
        cardBacks[numCards] = sides[1];
        numCards++;
    }
    if(numCards > 0) {
        setFront(0);
    }
}

function setCookies() {
    let cookieString = "cards=";
    for(i = 0; i < numCards; i++) {
        cookieString += "^" + cardFronts[i] + "+" + cardBacks[i];
    }
    document.cookie = cookieString;
}

function setFront(cardNum) {
    const text = document.getElementById("text");
    const element = document.querySelector('.card');
    text.innerHTML = cardFronts[cardNum];
    element.style.textAlign = 'center';
    element.style.fontSize = '40px';
    element.style.lineHeight = '51px';
}

function flipCard() {
    if(numCards > 0 && !beingAdded) {
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
    if(numCards > 0 && !beingAdded) {
        if(currCard < numCards - 1) {
            currCard++;
        } else {
            currCard = 0;
        }
        side = true;
        setFront(currCard);
    }
}

function randomizeOrder() {
    if(numCards > 0 && !beingAdded) {
        var frontSwap;
        var backSwap;
        for(i = numCards-1; i > 0; i--) {
            let swapIndex = Math.floor(Math.random() * i)
            frontSwap = cardFronts[swapIndex];
            backSwap = cardBacks[swapIndex];
            cardFronts[swapIndex] = cardFronts[i];
            cardBacks[swapIndex] = cardBacks[i];
            cardFronts[i] = frontSwap;
            cardBacks[i] = backSwap;
        }
        setFront(0);
        currCard = 0;

        setCookies();
    }
}

function openPopup() {
    if(!beingAdded) {
        document.getElementById("popupOverlay").style.display = "block";
        beingAdded = true;
    }
}

function closePopup() {
    let newFront = document.getElementById("front");
    let newBack = document.getElementById("back");
    addCard(newFront.value, newBack.value);
    newFront.value = "";
    newBack.value = "";
    document.getElementById("popupOverlay").style.display = "none";
    beingAdded = false;
}

function addCard(newFront, newBack) {
    const MAX_LENGTH = 1173;

    if(newFront != null && newBack != null && newFront != "" && newFront != "" && newFront.length < MAX_LENGTH && newBack.length < MAX_LENGTH) {
        cardFronts[numCards] = newFront;
        cardBacks[numCards] = newBack;
        numCards++;
        setCookies();
        setFront(numCards - 1);
        currCard = numCards - 1;
    }
}

function removeCard() {
    if(numCards > 0 && !beingAdded) {
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
        setCookies();
    }
}