//selectors 
var next = document.querySelector('.direction.next');
var prev = document.querySelector('.direction.prevouis');
var play = document.querySelector('.btn.play');
var stop = document.querySelector('.btn.stop');
var currentimg = document.querySelector('.Slider img');
var hiddenimg = document.querySelector('.Slider img.hidden'); 

//images path
const images = [
    {
        "path": "./assests/necklace3.webp",
        "alt":"necklace 1"
    },
    {
        "path": "./assests/necklace4.webp",
        "alt":"necklace 2"
    },
    {
        "path": "./assests/necklace5.webp",
        "alt":"necklace 3"
    },
    {
        "path": "./assests/ring.webp",
        "alt":"necklace 4"
} ]

//var to indicate current image 
var currentindex = 0;
var hiddenindex = 1;

var timer = null;
var isplay = null;
//logic




//general fucntions 
function nextDirection()
{
    if(currentindex==images.length-1)
    {
        currentindex = 0;
    }
    else{
        currentindex++
    }
    hiddenindex = (currentindex+1)%images.length;
    currentimg.src=images[currentindex].path;
    hiddenimg.src=images[hiddenindex].path;
}


function nextAnimation()
{
    AnimateOut(currentimg);//old image

    setTimeout(function(){AnimateIn(hiddenimg)},500);//new image


}

function nextAction()
{
    nextDirection();
    nextAnimation();
    hiddenimg.classList.add('hidden');
    currentimg.classList.remove('hidden');
}



function prevDirection(){
        if(currentindex==0)
        {
            currentindex = images.length-1;
        }
        else{
            currentindex--
        }
        hiddenindex = (currentindex-1 + images.length)%images.length;

        currentimg.src=images[currentindex].path;
        hiddenimg.src=images[hiddenindex].path;
    }

function prevAnimation()

{
    console.log("came here");
    
    AnimateOut(currentimg,"prev");//old image

    setTimeout(function(){AnimateIn(hiddenimg,"prev")},500);//new image

}

function prevAction(){
    prevDirection();
    prevAnimation();
    hiddenimg.classList.remove('hidden');
    currentimg.classList.add('hidden');
}






//play
function playAction(direction)

{
    direction == "next"?nextAction(): direction == "prev"? prevAction():isplay=null;
    

}






//Animation
function AnimateOut(element,dir="next")
{
    if(dir=="prev")
        {
            element.classList.add('slide-out','prev');
            function remove(){element.classList.remove('slide-out','prev')}
                    setTimeout(function(){
                    remove();
                    element.classList.add('hidden');
                },500);
        return;
        }   
        element.classList.add('slide-out');
        function remove(){element.classList.remove('slide-out')}
        setTimeout(function(){
            remove();
            element.classList.add('hidden');
        },500);


}









function AnimateIn(element,dir){
    element.classList.remove('hidden');

    if(dir=="prev")
        {
            element.classList.add('slide-in','prev');
            function remove(){element.classList.remove('slide-in','prev')}
                    setTimeout(function(){
                    remove();
                },500);
        return;
        }
    element.classList.add('slide-in');
    function remove(){element.classList.remove('slide-in')}
    setTimeout
    (function()
        {
            remove();
        },500);

}






//stop

function stopAction(){
    if(timer!=null)
    {
        console.log("happened");
        
        clearInterval(timer);
        timer=null;
        console.log(timer);
        
        isplay = null
    }
}

//event listeners
play.addEventListener('click',function()

{
    if(timer ===null){

       timer = setInterval(function(){
        playAction("next");
       },4000);
isplay = true;}
})
stop.addEventListener('click',stopAction);

next.addEventListener('click',function(){
if(isplay==null)
{
    playAction("next");
}
})
prev.addEventListener('click',function(){
if(isplay==null)
{
    playAction("prev");
}
})