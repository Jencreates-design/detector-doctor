/* ------------------------------
   STICKY NAV SHADOW ON SCROLL
------------------------------ */

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 10) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


/* ------------------------------
   FORMSPREE: AUTO SUBJECT LINE
------------------------------ */

const inquirySelect = document.getElementById("inquiry_type");
const subjectField = document.getElementById("subjectField");

function updateSubject() {
    if (inquirySelect && subjectField) {
        subjectField.value = "New " + inquirySelect.value + " Submission";
    }
}

if (inquirySelect) {
    inquirySelect.addEventListener("change", updateSubject);
    updateSubject();
}
