function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    
    liftoffButton.addEventListener('click', event => {
       statusReport.innerHTML = 'Houston! We have liftoff!';
    });
    abortMission.addEventListener("mouseover", function( event ) {
event.target.style.backgroundColor = "red";
});   
abortMission.addEventListener("mouseout", function( event ) {
    event.target.style.backgroundColor = "";       
});
abortMission.addEventListener('click', function (){
    let text = "Are you sure you want to abort the mission?";
    if (confirm(text) == true) {
      statusReport.innerHTML = "Mission aborted! Space shuttle returning home";
    
    }
    
  });

}

window.addEventListener("load", init);
