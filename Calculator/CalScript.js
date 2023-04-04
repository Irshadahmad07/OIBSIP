const myCal = document.querySelector(".cal");
const myKeys = [
    ["1", "2", "3", "+"],
    ["4", "5", "6", "-"],
    ["7", "8", "9", "*"],
    ["C", "0", "=", "/"],
];
const myOperators = [["+", "-", "*", "/"]];

let displayOutput;
document.addEventListener("DOMContentLoaded", function () {
    displayOutput = document.createElement("div");
    displayOutput.innerHTML = "0";
    displayOutput.classList.add("output");
    myCal.appendChild(displayOutput);
    // console.log(displayOutput);

    for (let x = 0; x < myKeys.length; x++) {
        let div = document.createElement("div");
        div.classList.add("row");

        for (let y = 0; y < myKeys[x].length; y++) {
            let btn = document.createElement("div");
            btn.classList.add("btn");
            // console.log(myKeys[x][y]);
            btn.innerText = myKeys[x][y];
            btn.addEventListener("click", btnHit);
            div.appendChild(btn);
        }
        myCal.appendChild(div);
    }
});

function btnHit(e) {
    let btnValue = this.innerText;
    let displayValue = displayOutput.innerText;

    if (displayValue == "0") {
        displayValue = "";
    }

    if (btnValue == "=") {
        displayValue = eval(displayValue);
    }
    else if (btnValue == "C") {
        // displayValue = displayValue.substring(0, displayValue.length - 1);
        displayValue = "";
    }
    else {
        displayValue = displayValue + btnValue;
    }
    displayOutput.innerText = displayValue;
}