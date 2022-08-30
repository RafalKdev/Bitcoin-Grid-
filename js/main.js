const navMobile = document.querySelector(".nav__mobile");
const navBtn = document.querySelector(".hamburger");
const footerYear = document.querySelector(".footer__year");
const handleCurrentYear = () => {
  const year = new Date().getFullYear();
  footerYear.textContent = year;
};

const handleNav = () => {
  navBtn.classList.toggle("is-active");
  navMobile.classList.toggle("nav__mobile--active");
};
navBtn.addEventListener("click", handleNav);
handleCurrentYear();
