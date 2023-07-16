const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controlls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function PageTransitions() {
  //Button click active class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += " active-btn";
    });
  }

  // Sections Active class
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      // remove selected from the other btns
      // sectBtns.forEach((btn) => {
      //   btn.classList.remove("active");
      // });

      // e.target.classList.add("active");

      // hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });

  // Toggle Theme
  const themeBtn = document.querySelector(".theme-btn");
  themeBtn.addEventListener("click", () => {
    let element = document.body;
    element.classList.toggle("light-mode");
  });
}

PageTransitions();

// // The following 2 functions i.e. downloadCV and generateUniqueID specifically were create to solve the caching issue, as CV once downloaded on clicking the button was not not getting downloaded again as it gets cache.
// Solution :- Therefore we change the unique id of the cv everytime, which then downloads the CV everytimeirrespective of whether user has downloaded cv just sometime back or Notification, as unique id name won't have been cached earlier.

function generateUniqueID() {
  // Generate unique id using timestamp
  var timestamp = new Date().getTime();
  var random = Math.floor(Math.random() * 10000);
  return timestamp + "_" + random;
}
function downloadCV() {
  var link = document.getElementById("download-link");
  var fileName = "cv_" + generateUniqueID() + ".pdf"; // Generate a unique file name
  link.setAttribute("href", "staticSAKSHAM THUKRAL CV - VISA.docx.pdf");
  link.setAttribute("download", fileName);
}

// Learnings
//1. this keyword doesn't exists in a arrow functions it only exists in a regular function
