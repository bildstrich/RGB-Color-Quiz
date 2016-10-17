var colors = [];
var numSquares = 6;
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode")


init();


function init() {

    setUpModeButtons();
    setUpSquares();
    reset();

}


function setUpModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected")
            modeButtons[1].classList.remove("selected")
            modeButtons[2].classList.remove("selected")
            this.classList.add("selected");

            if (this.textContent === "Leicht") {
                numSquares = 3;
            } else if (this.textContent === "Mittel") {
                numSquares = 6;
            } else {
            	numSquares = 9;
            }

            reset();
        })

    }
}

function setUpSquares() {

    for (var i = 0; i < squares.length; i++) {


        // add click listeners to squares

        squares[i].addEventListener("click", function() {
            // grab color of picked square
            var clickedColor = (this.style.background);
            console.log(clickedColor, pickedColor)
                // compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Richtig!";
                resetButton.textContent = "Nochmal?";
                changeColors(pickedColor);
            } else {
                this.style.background = "white";
                messageDisplay.textContent = "Falsch!";
            }
        });
    }
}


function reset() {

    colors = generateRandomColors(numSquares);
    //pick an new random color
    pickedColor = pickColor();
    //change color Display
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "Neue Farben"
    h1.style.background = "#333";
    messageDisplay.textContent = "";
    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }

}

resetButton.addEventListener("click", function() {
    reset();
})





function changeColors(color) {
    // loop through all squares
    for (var i = 0; i < squares.length; i++)

    // change each color to match given color
        squares[i].style.background = color;

    //change h1 background to given color
    h1.style.background = color;
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // make an array
    var arr = [];

    // add num random colors to array
    for (var i = 0; i < num; i++) {

        // get random color and push into array
        arr.push(randomColor());
    }

    // return that array
    return arr;
}

function randomColor() {
    // pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);

    // pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);

    // pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";

}