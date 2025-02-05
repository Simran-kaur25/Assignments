// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("myForm").addEventListener("submit", function (event) {
//         event.preventDefault(); // Prevent default submission
//         let confirmation = confirm("Would you like to proceed with the submit action?");
//         if (confirmation) {
//             this.submit(); // Submit if confirmed
//         } else {
//             this.reset(); // Reset form if canceled
//         }
//     });
// });

// document.getElementById("myForm").addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent form submission
//     document.getElementById("popup").style.display = "flex"; // Show popup
// });

// document.getElementById("yesBtn").addEventListener("click", function () {
//     document.getElementById("popup").style.display = "none";
//     document.getElementById("myForm").submit(); // Submit form
// });

// document.getElementById("noBtn").addEventListener("click", function () {
//     document.getElementById("popup").style.display = "none";
//     document.getElementById("myForm").reset(); // Reset form
// });

document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    document.querySelector(".popup-wrapper").classList.add("active"); // Show popup
});

document.getElementById("yesBtn").addEventListener("click", function () {
    document.querySelector(".popup-wrapper").classList.remove("active");
    document.getElementById("myForm").submit(); // Submit form
});

document.getElementById("noBtn").addEventListener("click", function () {
    document.querySelector(".popup-wrapper").classList.remove("active");
    document.getElementById("myForm").reset(); // Reset form
});
