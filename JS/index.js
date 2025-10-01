//HTMLElement
var images=Array.from(document.querySelectorAll("main .main img"));
var model=document.querySelector(".model");
var modelImage=document.querySelector(".model img");
var closeBtn=document.querySelector(".model .fa-circle-xmark");
var nextBtn=document.querySelector(".model .fa-arrow-right");
var prevBtn=document.querySelector(".model .fa-arrow-left");

//Variables
var currentIndex;
//Functions 

function showModel(){
    model.classList.remove("d-none");
}

function hideModel(){
    model.classList.add("d-none");
}

function getClickedImageSrc(e){
      var currentImage=e.target;
      var ImageClickedSrc=(e.target).getAttribute("src");
      currentIndex=images.indexOf(currentImage);
      console.log(currentIndex);
      
      modelImage.setAttribute("src",ImageClickedSrc);
    
     
}

function getNextImage(){
     currentIndex++;
     if (currentIndex == images.length) { 
        currentIndex = 0;
        
        
    }
    
    console.log(currentIndex ,images.length ,images);
    
    var nextImageSrc=images[currentIndex].getAttribute("src");
    modelImage.setAttribute("src",nextImageSrc);

}

function getPreImage(){
     currentIndex--;
    if(currentIndex<0) currentIndex=images.length-1;
      console.log(currentIndex);
    var preImageSrc=images[currentIndex].getAttribute("src");
    modelImage.setAttribute("src",preImageSrc);

}


//Events

for(var i=0;i<images.length;i++){
images[i].addEventListener("click",function(e){
    showModel();
     getClickedImageSrc(e);
}
);
}

//*CLoseButton Event
closeBtn.addEventListener("click",hideModel);

//*NextButton Event
nextBtn.addEventListener("click",getNextImage);

//*PrevButton Event
prevBtn.addEventListener("click",getPreImage);

//*Keyboard Events
document.addEventListener("keydown",function(e){
    console.log(e.code);
    switch(e.code){
        case "ArrowRight":
            getNextImage();
            break;
        case "ArrowLeft":
            getPreImage();
            break;
        case "Escape":
            hideModel();
            break;
    }  
});

model.addEventListener("click",function(e){
    if(e.target===model) hideModel();
});