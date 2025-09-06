var section = document.querySelector("main .offers");
var sections = document.querySelectorAll("main .offer");
var service = document.querySelector("main .services-down");
var services = document.querySelectorAll("main .service");
//window event 

window.addEventListener("scroll", function(){
    showService(section,sections);
    showService(service,services);
});

function showService(element,elements){
    var serviceTop = element.getBoundingClientRect().top;
    var triggerPoint = window.innerHeight * 0.8;

    if(serviceTop < triggerPoint){
        elements.forEach((service) => service.classList.add("show-offer"));

    }
}