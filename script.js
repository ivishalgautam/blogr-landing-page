const toggleNav = document.querySelector(".nav-toggle-mobile");
const navOpen = document.querySelector(".nav-open");
const navClose = document.querySelector(".nav-close");
const navigation = document.querySelector(".nav-container-mobile");

toggleNav.addEventListener("click", function (e) {
  //   console.log(e.target.classList);
  if (e.target.classList.contains("nav-open")) {
    // toggle open and close button
    navOpen.style.display = "none";
    navClose.style.display = "block";

    navigation.classList.add("nav-active")
  } else {
    // toggle open and close button
    navOpen.style.display = "block";
    navClose.style.display = "none";

    navigation.classList.remove("nav-active")
  }
});
