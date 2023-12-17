// const nextBtn=document.querySelector(".next");
// console.log(nextBtn);
// const prevBtn=document.querySelector(".prev");
// const featuredImgFirst=document.querySelector(".first");
// nextBtn.addEventListener("click", function(){
//   featuredImgFirst.style.zIndex="-3";
//   featuredImgFirst.style.left="20%"
// })  
hamBurger=document.querySelector(".hamburger"); 
navList=document.querySelector(".nav_lists") 
hamBurger.addEventListener("click",function(){
  hamBurger.classList.toggle("actives");
  navList.classList.toggle("actives");
}) ;            