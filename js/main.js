// TRAVERSE DATA CYU ASSIGNMENT START CODE

// Load Data From Files
let surveyData;
fetch("data/survey-results.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (surveyData = strData.split(/\r?\n/)));

let ageData;
fetch("data/age-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (ageData = strData.split(/\r?\n/)));

let numberData;
fetch("data/number-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (numberData = strData.split(/\r?\n/)));

// Output Element Variable
let outputEl = document.getElementById("output");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "survey") {
    traverseSurveyData();
  } else if (selection === "ages") {
    traverseAgeData();
  } else if (selection === "numbers") {
    traverseNumberData();
  }
}

// Menu Option Functions
function traverseSurveyData() {
  outputEl.innerHTML = "";
  let yesCount = 0;
  let noCount = 0;
  let maybeCount = 0;
  for (let i = 0; i < surveyData.length; i++) {
    if (surveyData[i] == "Yes") {
      yesCount++;
    } else if (surveyData[i] == "No") {
      noCount++;
    } else if (surveyData[i] == "Maybe") {
      maybeCount++;
    }
  }
  outputEl.innerHTML += `<div>Yes:${yesCount}</div`;
  outputEl.innerHTML += `<div>No:${noCount}</div`;
  outputEl.innerHTML += `<div>maybe:${maybeCount}</div`;
  // Traverse the surveyData array to:
  // Count the number of "Yes" responses,
  // Count the number of "No" responses,
  // Count the number of "Maybe" responses,
  // and output the results in the outputEl.
}

function traverseAgeData() {
  outputEl.innerHTML = "";
  let count18 = 0;
  let count35 = 0;
  let count65 = 0;
  let countSenior = 0;
  for (let i = 0; i < ageData.length; i++) {
    if (ageData[i] < 18) {
      count18++;
    } else if (ageData[i] <= 35 && ageData[i] >= 18) {
      count35++;
    } else if (ageData[i] <= 65 && ageData[i] >= 35) {
      count65++;
    } else if (ageData[i] > 65) {
      countSenior++;
    }
  }
  outputEl.innerHTML += `<div>under 18: ${count18}</div`;
  outputEl.innerHTML += `<div>18 to 35: ${count35}</div`;
  outputEl.innerHTML += `<div>35 to 65: ${count65}</div`;
  outputEl.innerHTML += `<div>65+: ${countSenior}</div`;
  console.log(ageData);

  // Traverse the ageData array to:
  // Count the number of ages under 18,
  // Count the number of ages between 18 and 35, inclusive
  // Count the number of ages between 36 and 65, inclusive
  // Count the number of ages above 65,
  // and output the results in the outputEl.
}

function traverseNumberData() {
  outputEl.innerHTML = "";
  let oddNumbers = 0;
  let evenNumbers = 0;

  for (let i = 0; i < numberData.length; i++) {
    if (numberData[i] % 2 == 0) {
      evenNumbers++;
    } else if (numberData[i] % 2 != 0) {
      oddNumbers++;
    }
  }
  // Traverse the numberData array to:
  // Count the number of even numbers,
  // Count the number of odd numbers,
  // and output the results in the outputEl.

  outputEl.innerHTML += `<div>odd: ${oddNumbers}</div`;
  outputEl.innerHTML += `<div>even: ${evenNumbers}</div`;
  console.log(numberData);
}
