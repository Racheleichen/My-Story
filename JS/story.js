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
        currentSeason.food="watermelon";
        currentSeason.weather="hot and sunny";
    }
    if (season === "Au"){
        currentSeason.activity="playing with leaves";
        currentSeason.food="turkey";
        currentSeason.weather="crisp, breezy";
    }
    if (season === "winter"){
        currentSeason.activity="making a snowman";
        currentSeason.food="soup";
        currentSeason.weather="cold and snowy";
    }
    
      if (season === "spring"){
        currentSeason.activity="planting flowers in the garden";
        currentSeason.food="strawberries";
        currentSeason.weather="airy and cheerful";
    }
    
    var para = document.createElement("p");
    var node = document.createTextNode("It was a " + weather + " morning " + " when " + nameValue + " enjoyed " + currentSeason.activityactivity "");
    para.appendChild(node);

