// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionDestDisp = document.getElementById("missionTarget");
    missionDestDisp.innerHTML = `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">
    `;
}


function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(Number(testInput)) === true) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let pilotValidation = validateInput(pilot);
    let copilotValidation = validateInput(copilot);
    let fuelLevelValid = validateInput(fuelLevel);
    let cargoMassValid = validateInput(cargoLevel);

    const launchStatusDsp = document.getElementById("launchStatus");
    const faultyItemsDsp = document.getElementById("faultyItems");
    const pilotStatusDsp = document.getElementById("pilotStatus");
    const copilotStatusDsp = document.getElementById("copilotStatus");
    const fuelStatusDsp = document.getElementById("fuelStatus");
    const cargoStatusDsp = document.getElementById("cargoStatus");

    if (pilotValidation === "Empty" || copilotValidation === "Empty" || fuelLevelValid === "Empty" || cargoMassValid === "Empty") {
        launchStatusDsp.innerHTML = "Awaiting Information Before Launch";
        launchStatusDsp.style.color = "black";
        list.style.visibility = "hidden";
        setTimeout(function () {
            alert("All fields are required!");
        }, 50)
        
    } else if (pilotValidation === "Is a Number" || copilotValidation === "Is a Number" || fuelLevelValid === "Not a Number" || cargoMassValid === "Not a Number") {
        launchStatusDsp.innerHTML = "Awaiting Information Before Launch";
        launchStatusDsp.style.color = "black";
        list.style.visibility = "hidden";
        setTimeout(function () {
            alert("Make sure to enter valid information for each field!");
        }, 50)


    } else { // Display faultyItems status
        list.style.visibility = "visible";

        pilotStatusDsp.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatusDsp.innerHTML = `Co-pilot ${copilot} is ready for launch`;

        if (fuelLevel < 10000) {
            launchStatusDsp.innerHTML = "Shuttle Not Ready for Launch";
            launchStatusDsp.style.color = "red";
            fuelStatusDsp.innerHTML = "Fuel level too low for launch";
        } else {
            launchStatusDsp.innerHTML = "Awaiting Information Before Launch";
            launchStatusDsp.style.color = "black";
            fuelStatusDsp.innerHTML = "Fuel level high enough for launch";
        }

        if (cargoLevel > 10000) {
            launchStatusDsp.innerHTML = "Shuttle Not Ready for Launch";
            launchStatusDsp.style.color = "red";
            cargoStatusDsp.innerHTML = "Cargo mass too heavy for launch";
        } else {
            launchStatusDsp.innerHTML = "Awaiting Information Before Launch";
            launchStatusDsp.style.color = "black";
            cargoStatusDsp.innerHTML = "Cargo mass low enough for launch";
        }

        if (fuelLevel < 10000 || cargoLevel > 10000) {
            launchStatusDsp.innerHTML = "Shuttle Not Ready for Launch";
            launchStatusDsp.style.color = "red";
        } else {
            launchStatusDsp.innerHTML = "Shuttle is Ready for Launch";
            launchStatusDsp.style.color = "green";
        }
    }

}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    let data = await planetsReturned.json();

    planetsReturned = data;
    return planetsReturned;
}


function pickPlanet(planets) {
    let randomIndex;
    let thePlanet;
    randomIndex = Math.floor(Math.random() * planets.length);

    return thePlanet = planets[randomIndex];
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;