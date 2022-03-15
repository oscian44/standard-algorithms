//Text Area
var output = document.getElementById("output")

//Divs
var menuDiv = document.getElementById("mainMenu");
var outputDiv = document.getElementById("outputDiv")
var linearDiv = document.getElementById("linearDiv")
var minmaxDiv = document.getElementById("minmaxDiv")
var binaryDiv = document.getElementById("binaryDiv")
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
        "theta"
    ]



}

function findMaxandMin() {
    hideDivs()
    outputDiv.style.display = "Block"
    minmaxDiv.style.display = "Block"
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
        11
    ]
    
    output.value = "Input Array: [" + myArray + "]" + "\n"

    let theMin
    let theMax

    output.value = output.value + "Finding Minimum Value" + "\n"

    for (i = 1; i < myArray.length; i++) {
        if (myArray[i] < myArray[i - 1]) {
            theMin = myArray[i]
            output.value = output.value + "Position in array: " + i + " Minimum value as of now: " + theMin + "\n"
        }
    }

    output.value = output.value + "Final Minimum Value: " + theMin
    

}

function binarySearch(){
    hideDivs()
    outputDiv.style.display = "Block"
    binaryDiv.style.display = "Block"
    output.value = ""
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

function selectionSort(){
    hideDivs()
    outputDiv.style.display = "Block"
    selectionDiv.style.display = "Block"
    output.value = ""
}

function bubbleSort(){
    hideDivs()
    outputDiv.style.display = "Block"
    bubbleDiv.style.display = "Block"
    output.value = ""
}

function processStrings(){
    hideDivs()
    outputDiv.style.display = "Block"
    processDiv.style.display = "Block"
    output.value = ""
}

function uniqueRandoms(){
    hideDivs()
    outputDiv.style.display = "Block"
    uniqueDiv.style.display = "Block"
    output.value = ""
}