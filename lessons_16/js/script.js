document.addEventListener("DOMContentLoaded", () => {
   const burger = document.querySelector(".burger");
   const nav = document.querySelector(".header__nav");
   const body = document.body;

   if (burger && nav) {
      burger.addEventListener("click", () => {
         burger.classList.toggle("active");
         nav.classList.toggle("active");
         body.classList.toggle("lock"); // чтобы блокировать скролл при открытом меню
      });
   }
});