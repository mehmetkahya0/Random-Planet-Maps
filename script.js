function openRandomPlanetMap() {
    var planetCodes = ["mercury", "venus", "earth", "moon", "mars", "vesta", "ceres", "io", "europa", "ganymade", "callisto", "mimas", "enceladus", "tethys", "dione", "rhea", "titan", "iapetus", "pluto", "charon"];
    var randomPlanet = planetCodes[Math.floor(Math.random() * planetCodes.length)];
    var mapUrl = "https://www.google.com/maps/space/" + randomPlanet + "/@0,0,11151001m/data=!3m1!1e3?entry=ttu";
    alert("You're going to " + randomPlanet)
    window.open(mapUrl, "_blank");
}

var mapButton = document.getElementById("map-button");
mapButton.addEventListener("click", openRandomPlanetMap);