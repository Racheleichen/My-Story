var currentSeason={
    activity: "going to the beach",
    food: "ice cream",
    weather: "bright, sunny"
}


function getNameAndPlace(){
    var nameValue = document.getElementById("name").value;
    var placeValue = document.getElementById("location").value;
    var season = document.getElementById("season").value;
    var time= document.getElementById("time").value;

    if (season === "summer"){
        currentSeason.activity="going to the beach";
        currentSeason.food="going to the beach";
        currentSeason.weather="going to the beach";
    }
    if (season === "Au"){
        currentSeason.activity="playing with leaves";
        currentSeason.food="turkey";
        currentSeason.weather="crisp, breazy";
    }
    if (season === "winter"){
    
    }
    var para = document.createElement("p");
    var node = document.createTextNode("It was a " + weather + " morning " + " when " + nameValue + " enjoyed " + currentSeason.activityactivity "");
    para.appendChild(node);
}

