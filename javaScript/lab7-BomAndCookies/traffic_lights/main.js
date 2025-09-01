var lights = document.getElementsByClassName('circle');
var h1 = document.getElementById('h1');



var timer = null;
var current_indx = 0;


function clearLights(current_indx){
for(var i = 0; i< lights.length; i++){
    if(i != current_indx)
        lights[i].style.backgroundColor = 'grey';
}
}
function trafficLights(){
    switch(current_indx)
    {
        case 0:
            lights[current_indx].style.backgroundColor = 'red';
            console.log("happened");
            
            break;
        case 1:
            lights[current_indx].style.backgroundColor = 'yellow';
            break;
        case 2:
            lights[current_indx].style.backgroundColor= 'green';
            break;
    }
    clearLights(current_indx);
    current_indx == 2? current_indx = 0: current_indx++;
}

function halt(){
clearInterval(timer);
 timer = null;
}


timer = setInterval(trafficLights, 2000);
function addEventOnMouseEnter(){
    for(var i =0; i<lights.length; i++){
        lights[i].addEventListener('mouseenter',halt);
    }
}
addEventOnMouseEnter();
function addEventOnMouseLeave(){
    for(var i =0; i<lights.length; i++){
        lights[i].addEventListener('mouseleave',function(){
            timer =  setInterval(trafficLights, 2000);
        });

    }
}
addEventOnMouseLeave();