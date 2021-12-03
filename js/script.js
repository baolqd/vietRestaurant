window.addEventListener("load",function(){
   /*--------------- animation on scroll----------------*/
   AOS.init();
});
/*--------------- service-worker----------------*/
if ('serviceWorker' in navigator) {
   navigator.serviceWorker.register('service-worker.js').then(function(registration) {
   console.log('ServiceWorker registration successful with scope: ', registration.scope);
 }).catch(function(err) {
   //registration failed :(
   console.log('ServiceWorker registration failed: ', err);
 });
}else {
 console.log('No service-worker on this browser');
}/*--------------- service-worker----------------*/
/*--------------- phan menu*----------------(tham khao internet huhu)*/
const menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click", function(e){
   if(e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")){
      const target= e.target.getAttribute("data-target");   
      menuTabs.querySelector(".active").classList.remove("active");
      e.target.classList.add("active");
      const menuSection =document.querySelector(".menu-section"); 
      menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
      menuSection.querySelector(target).classList.add("active");
      AOS.init();
   }
});
/*--------------- phan menu*----------------*/



 