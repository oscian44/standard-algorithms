//Text Area
var output = document.getElementById("output").value

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
    linearDiv.style.display = "block"
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
    minmaxDiv.style.display = "block"
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
    let theMin
    let theMax

    for (i = 1; i < myArray.length; i++) {
        if (myArray[i] < myArray[i - 1]) {
            theMin = myArray[i]
        }


    }
}

function binarySearch(){

}

function insertionSort() {
    hideDivs()
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

    output = "Starting array: " + "[" + myArray + "]"

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

        output = "Sorting array: " + "[" + myArray + "]"
    }

    output = "Sorted array: " + "[" + myArray + "]"


}

function selectionSort(){
    
}

function bubbleSort(){

}

function processStrings(){

}

function uniqueRandoms(){
    
}