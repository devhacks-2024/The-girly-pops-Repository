//delete list item when it is clicked
var list = document.querySelectorAll("ul");
list.forEach((element) => {
    element.addEventListener("click", function (ev) {
        ev.target.remove();
        setCookies();
    });
});


//adding a new item into a list
function newListItem() {
    var inputText = document.getElementById("userItem").value;
    if (inputText === '') {
        alert("Enter task details");
    }
    else if(checkInput(inputText) == false)
    {
        alert("Please avoid using * and ^");
    }
    else {
        var newli = document.createElement("li");
        var textNode = document.createTextNode(inputText);
        newli.appendChild(textNode);
        var dayInput = document.getElementById("taskdays").value;

        let day;
        if (dayInput === "sunday") {
            document.getElementById("sunTasks").appendChild(newli);
        }
        else if (dayInput === "monday") {
            document.getElementById("monTasks").appendChild(newli);
        }
        else if (dayInput === "tuesday") {
            document.getElementById("tuesTasks").appendChild(newli);
        }
        else if (dayInput === "wednesday") {
            document.getElementById("wedTasks").appendChild(newli);
        }
        else if (dayInput === "thursday") {
            document.getElementById("thursTasks").appendChild(newli);
        }
        else if (dayInput === "friday") {
            document.getElementById("friTasks").appendChild(newli);
        }
        else if (dayInput === "saturday") {
            document.getElementById("satTasks").appendChild(newli);
        }
        else if (dayInput === "week") {
            document.getElementById("weekTasks").appendChild(newli);
        }
    }
    document.getElementById("userItem").value = "";
    setCookies();
    var trashItems = document.querySelectorAll(".trash");
    trashItems.forEach(trash => {
        trash.onclick = function () {
            this.parentElement.remove();
        }
    });
}

//Cookies

//Set cookies
function setCookies() {
    var newCookie = "";
    var list = document.querySelectorAll("ul");
    for (let i = 0; i < list.length; i++) {
        newCookie = newCookie + "^";
        var todo = list[i].getElementsByTagName("li");
        for (let j = 0; j < todo.length; j++) {
            newCookie = newCookie + "*" + (todo[j].innerText.split('\n')[0]);
        }
    }
    document.cookie = newCookie;
}

function readCookies() {
    let cookies = document.cookie;
    let todo = cookies.split("^");
    var i;
    for (i = 1; i < todo.length; i++) {
        let list = todo[i].split("*");
        console.log(list);
        var j;
        for (j = 1; j < list.length; j++) {
            var newli = document.createElement("li");
            var textNode = document.createTextNode(list[j]);
            newli.appendChild(textNode);
            console.log(newli);

            if (i === 1) {
                document.getElementById("weekTasks").appendChild(newli);
            }
            else if (i === 2) {
                document.getElementById("monTasks").appendChild(newli);
            }
            else if (i === 3) {
                document.getElementById("tuesTasks").appendChild(newli);
            }
            else if (i === 4) {
                document.getElementById("wedTasks").appendChild(newli);
            }
            else if (i === 5) {
                document.getElementById("thursTasks").appendChild(newli);
            }
            else if (i === 6) {
                document.getElementById("friTasks").appendChild(newli);
            }
            else if (i === 7) {
                document.getElementById("satTasks").appendChild(newli);
            }
            else if (i === 8) {
                document.getElementById("weekTasks").appendChild(newli);
            }
        }
    }
}

function checkInput(input)
{
    for(var i = 0; i < input.length; i++)
    {
        if(input[i] == "^" || input[i] == "*")
        {
            return false;
        }
    }
    return true;
}

