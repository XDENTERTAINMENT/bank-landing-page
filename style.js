const view = document.querySelector(".hamburger");
const menu = document.querySelector(".navbar");


const views =()=>{
   menu.classList.toggle('active')
};

  view.addEventListener("click", views);

  function removed(){
    menu.classList.remove("");
    
};
view.addEventListener("click",  removed);