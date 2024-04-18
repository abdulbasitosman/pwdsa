// window.addEventListener("DOMContentLoaded", () => {
//   const header = document.querySelector(".header");
//   const donateLink = document.createElement("a");
//   donateLink.href = "#";
//   donateLink.innerHTML = "Donate";
//   donateLink.classList.add("donate", "mr-auto");

// Function to dynamically position the Donate link
//   const positionDonateLink = () => {
//     if (window.innerWidth < 992) {
// Small screen size - place before navbar toggler
//       const navbarToggler = header.querySelector(".navbar-toggler");
//       header.insertBefore(donateLink, navbarToggler);
//     } else {
// Large screen size - place after navbar list
//       const navbarNav = header.querySelector(".navbar-nav");
//       navbarNav.appendChild(donateLink);
//     }
//   };

// Initial positioning
//   positionDonateLink();

// Re-position Donate link on window resize
//   window.addEventListener("resize", positionDonateLink);
// });
