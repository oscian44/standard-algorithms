//Text Area
var output = document.getElementById("output")

//Divs
var menuDiv = document.getElementById("mainMenu");
var outputDiv = document.getElementById("outputDiv")
var linearDiv = document.getElementById("linearDiv")
var minmaxDiv = document.getElementById("minmaxDiv")
var binaryDiv = document.getElementById("binaryDiv")
var binTextdiv = document.getElementById("binText")
var binNumdiv = document.getElementById("binNum")
var insertionDiv = document.getElementById("insertionDiv")
var selectionDiv = document.getElementById("selectionDiv")
var bubbleDiv = document.getElementById("bubbleDiv")
var processDiv = document.getElementById("processDiv")
var uniqueDiv = document.getElementById("uniqueDiv")


//Hides All Divs
function hideDivs() {
    menuDiv.style.display = "none"
    linearDiv.style.display = "none"
    minmaxDiv.style.display = "none"
    binaryDiv.style.display = "none"
    binTextdiv.style.display = "none"
    binNumdiv.style.display = "none"
    insertionDiv.style.display = "none"
    selectionDiv.style.display = "none"
    bubbleDiv.style.display = "none"
    processDiv.style.display = "none"
    uniqueDiv.style.display = "none"
    outputDiv.style.display = "none"
    
}

//Displays Start Page Divs
function startDiv() {
    hideDivs()
    menuDiv.style.display = "block"

}

//Resets Divs
window.onload = startDiv()


//Linear Search

function linearSearch() {
    hideDivs()
    outputDiv.style.display = "Block"
    linearDiv.style.display = "Block"
    output.value = ""
    let myArray = [
        "alpha",
        "beta",
        "gamma",
        "delta",
        "epsilon",
        "zeta",
        "eta",
        "theta",
        "iota",
        "kappa",
        "lambda",
        "mu",
        "nu",
        "xi",
        "omicron",
        "pi",
        "rho",
        "sigma",
        "tau",
        "upsilon",
        "phi",
        "chi",
        "psi",
        "omega"
    ]

    output.value = "Search terms: " + myArray + "\n" + "\n"

}

function linearProcess() {
    linearSearch()
    let inputArray = [
        "alpha",
        "beta",
        "gamma",
        "delta",
        "epsilon",
        "zeta",
        "eta",
        "theta",
        "iota",
        "kappa",
        "lambda",
        "mu",
        "nu",
        "xi",
        "omicron",
        "pi",
        "rho",
        "sigma",
        "tau",
        "upsilon",
        "phi",
        "chi",
        "psi",
        "omega"
    ]
    let term = document.getElementById("linearInput").value
    let found = 0



    for (i = 0; i < inputArray.length; i++) {
        output.value = output.value + "Current array position: " + i + "\n"
        if (inputArray[i] == term) {
            output.value = output.value + "Item " + inputArray[i] + " found at array location: " + i
            found = 1
            return
        }
    }

    if (found != 1) {
        output.value = output.value + "Item not found"
    }
}

function binarySearch() {
    hideDivs()
    outputDiv.style.display = "Block"
    binaryDiv.style.display = "Block"
    output.value = ""
}

function binText() {
    binTextdiv.style.display = "Block"
    binNumdiv.style.display = "none"
    output.value = ""
    let inputArray = [
        "alpha",
        "beta",
        "gamma",
        "delta",
        "epsilon",
        "zeta",
        "eta",
        "theta",
        "iota",
        "kappa",
        "lambda",
        "mu",
        "nu",
        "xi",
        "omicron",
        "pi",
        "rho",
        "sigma",
        "tau",
        "upsilon",
        "phi",
        "chi",
        "psi",
        "omega"
    ]

    output.value = "Search terms: " + myArray + "\n" + "\n"


}

function binTProcess(){
    output.value = ""
}

function binNum() {
    binNumdiv.style.display = "Block"
    binTextdiv.style.display = "none"
    output.value = ""
    let myArray = [
        123,
        2523,
        39034,
        27,
        394,
        56,
        98,
        12455,
        1111,
        239,
        100,
        43,
        11,
        1,
        9,
        3,
        77,
        27,
        83
    ]

    output.value = "Starting array: " + "[" + myArray + "]" + "\n"
}

function binNProcess() {
    output.value = ""
}

function findMaxandMin() {
    hideDivs()
    outputDiv.style.display = "Block"
    minmaxDiv.style.display = "Block"
    output.value = ""
}


function findMin() {
    output.value = ""
    let myArray = [
        123,
        2523,
        39034,
        27,
        394,
        56,
        11,
        98,
        12455,
        1111,
        239,
        100,
        43

    ]

    output.value = "Input Array: [" + myArray + "]" + "\n"

    let theMin = myArray[0]


    output.value = output.value + "Finding Minimum Value" + "\n"

    for (i = 1; i < myArray.length; i++) {
        if (myArray[i] < theMin) {
            theMin = myArray[i]
        }

        output.value = output.value + "Position in array: " + i + "\n" + "Minimum value as of now: " + theMin + "\n" + "\n"
    }

    output.value = output.value + "Final Minimum Value: " + theMin


}

function findMax() {
    output.value = ""
    let myArray = [
        123,
        2523,
        39034,
        27,
        394,
        56,
        11,
        98,
        12455,
        1111,
        239,
        100,
        43

    ]

    let theMax = myArray[0]

    output.value = "Input Array: [" + myArray + "]" + "\n"

    output.value = output.value + "Finding Maximum Value" + "\n"

    for (i = 1; i < myArray.length; i++) {
        if (myArray[i] > theMax) {
            theMax = myArray[i]
        }

        output.value = output.value + "Position in array: " + i + "\n" + "Maximum value as of now: " + theMax + "\n" + "\n"
    }

    output.value = output.value + "Final Maximum Value: " + theMax



}


function insertionSort() {
    hideDivs()
    outputDiv.style.display = "Block"
    insertionDiv.style.display = "Block"
    output.value = ""

    let myArray = [
        123,
        2523,
        39034,
        27,
        394,
        56,
        98,
        12455,
        1111,
        239,
        100,
        43,
        11,
        1,
        9,
        3,
        77,
        27,
        83
    ]

    output.value = "Starting array: " + "[" + myArray + "]" + "\n"

    let n = myArray.length;
    for (let i = 1; i < n; i++) {

        // Selects the first item in the unsorted section of the array
        let current = myArray[i];

        // Selects the largest item in the sorted section of the array
        let l = i - 1;

        while ((l > -1) && (current < myArray[l])) {
            myArray[l + 1] = myArray[l];
            l--;
        }
        myArray[l + 1] = current;

        output.value = output.value + "Sorting array: " + "[" + myArray + "]" + "\n"
    }

    output.value = output.value + "Sorted array: " + "[" + myArray + "]" + "\n"


}

function selectionSort() {
    hideDivs()
    outputDiv.style.display = "Block"
    selectionDiv.style.display = "Block"
    output.value = ""
}

function bubbleSort() {
    hideDivs()
    outputDiv.style.display = "Block"
    bubbleDiv.style.display = "Block"
    output.value = ""
}

function processStrings() {
    hideDivs()
    outputDiv.style.display = "Block"
    processDiv.style.display = "Block"
    output.value = ""
}

function uniqueRandoms() {
    hideDivs()
    outputDiv.style.display = "Block"
    uniqueDiv.style.display = "Block"
    output.value = ""
}