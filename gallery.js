
const gallery = document.querySelector(".gallery");
const container = document.querySelectorAll(".pics");
const pics = document.querySelectorAll(".pics img");
const picsMini = document.querySelectorAll(".picsMini img");
const lightBox = document.querySelector(".lightBox")
const closeBtn = document.querySelector(".close")
const downloadBtn = document.querySelector(".dl")
const currentImg = document.querySelector(".current")
const rightBtn = document.querySelector(".rightBtn")
const leftBtn = document.querySelector(".leftBtn")
const miniPics = document.querySelectorAll(".mini .picsMini")
const activeImg = document.querySelector(".active")
var picNumber  = document.querySelector(".position")
const startBtn = document.querySelector(".play")

//const newBtn = document.createElement(button ,class{style},"⎮⎮")

let duration = 4000
interval = setInterval(swipeRight,duration)

function autoPlay(){

}


let currentindex = 0;
let current=null;
picsMiniArr= Array.from(picsMini)
function indexDetector(arr,currentindex,current){
    index=0;
    for(let i=0;i<arr.length;i++){
        if(current===arr[i].src){
            break;
        }
        index++;
      }
      return index;
}

for ( picmini of picsMiniArr) {
    picmini.addEventListener("click",(e) => {
       
        currentImg.src= e.target.src;
        current=currentImg.src;

        currentindex=indexDetector(picsMiniArr,currentindex,current);
        picNumber.innerText= (currentindex+1) + "/" + picsArr.length
    })
}

   

let check=true;
picsArr = Array.from(pics);
for (pic of picsArr){
    
    pic.addEventListener("click", (e) => {
        currentImg.src= e.target.src;
        current=currentImg.src;
        
        currentindex=indexDetector(picsArr,currentindex,current);
        picNumber.innerText= (currentindex+1) + "/" + picsArr.length
        startBtn.innerHTML="<button style= 'font-size:30px; border:none; color:white; background: rgba(0,0,0,0)'>⎮⎮</button>"
        check=false;
       
        
    });
    pic.addEventListener("click", (e) => openoverlay(true));

    
}



//pics.addEventListener("click", () => openoverlay(true));
closeBtn.addEventListener("click", () => openoverlay(false));
lightBox.addEventListener("keyPress", () => openoverlay(false));
//lightBox.addEventListener("click", () => openoverlay(false));

function openoverlay(open) {
    if (open) {
        console.log("open");
        lightBox.classList.remove("hidden");
        
    }else {
        console.log("notopen");
        lightBox.classList.add("hidden");
    }
}

  function clearSwipe() {
    clearInterval(interval)
      for (let pic of container) {
          pic.classList.remove("active")
      }
      interval = setInterval(swipeRight,duration)
      startBtn.addEventListener("click", stBt);
      picsMiniArr[currentindex].style.border = "none";

      
  }
  

  function swipeRight() {
     clearSwipe()
      if (currentindex === container.length -1) {
        currentindex = -1;
    }
    
    currentindex++;
    
    currentImg.src= picsArr[currentindex].src; 
    
    picsMiniArr[currentindex].style.border = "3px solid grey";
    picNumber.innerText= (currentindex+1) + "/" + picsArr.length
    container[currentindex].classList.add("active")
  }

  function swipeLeft() {
      clearSwipe();
      if (currentindex === 0) {
        currentindex = container.length;
      }
      currentindex--;
      currentImg.src= picsArr[currentindex].src;
      picsMiniArr[currentindex].style.border = "3px solid white";
      picNumber.innerText= (currentindex+1) + "/" + picsArr.length
      container[currentindex].classList.add("active")
  }

  

  
  rightBtn.addEventListener("click", () => swipeRight());

  leftBtn.addEventListener("click", () => swipeLeft());
  
  pic.addEventListener("click", setInterval);

 
function stBt(){
  if(!check){
    startBtn.innerHTML="<button style= 'font-size:30px; border:none; color:white; background: rgba(0,0,0,0)'>▶︎</button>"
    clearInterval(interval)
    check=true;
  }
  else{
    startBtn.innerHTML="<button style= 'font-size:30px; border:none; color:white; background: rgba(0,0,0,0)'>⎮⎮</button>"
    clearInterval(interval)
    interval = setInterval(swipeRight,duration)
    check=false;
    

  }

}

  startBtn.addEventListener("click", stBt);