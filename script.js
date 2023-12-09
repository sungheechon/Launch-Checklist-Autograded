// Write your JavaScript code here!

window.addEventListener("load", function () {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()

    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

        thePlanet = pickPlanet(listedPlanets);
        let planetName = thePlanet.name;
        let planetDiameter = thePlanet.diameter;
        let planetStar = thePlanet.star;
        let planetDistance = thePlanet.distance;
        let planetMoons = thePlanet.moons;
        let planetImageURL = thePlanet.image;

        addDestinationInfo(document, planetName, planetDiameter, planetStar, planetDistance, planetMoons, planetImageURL);

    })


    const form = document.querySelector("form");
    const list = document.getElementById("faultyItems");

    form.addEventListener("submit", function (event) {
        const pilotNameInput = document.querySelector("input[name=pilotName]").value;
        const copilotNameInput = document.querySelector("input[name=copilotName]").value;
        const fuelLevelInput = document.querySelector("input[name=fuelLevel]").value;
        const cargoMassInput = document.querySelector("input[name=cargoMass]").value;
        formSubmission(document, list, pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput);
        event.preventDefault();
    });

});