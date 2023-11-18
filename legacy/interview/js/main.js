// $(document).ready(function () {
//   // Add smooth scrolling to all links
//   $("a").on("click", function (event) {
//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//       // Prevent default anchor click behavior
//       event.preventDefault();

//       // Store hash
//       var hash = this.hash;

//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $("html, body").animate(
//         {
//           scrollTop: $(hash).offset().top,
//         },
//         1600,
//         function () {
//           // Add hash (#) to URL when done scrolling (default click behavior)
//           window.location.hash = hash;
//         }
//       );
//     } // End if
//   });
// });

const sample = document.getElementById("home");
// sample.onclick = async () => {
//   const hell = document.getElementsByTagName("h1");
//   console.log(hell[0].className);
//   console.log(sample.className);
//   sample.classList.add("example");
//   localStorage.setItem("name", "faheem");
//   console.log(localStorage.getItem("name"));
//   // fetching data using javascript
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//   console.log(await res.json());
//   // sample.setAttribute(
//   //   "style",
//   //   `
//   //     // background: black !important;
//   //     // padding: 200px;
//   //   `
//   // );
// };

let emailText;
let passwordText;

const email = document.getElementsByName("email");
const password = document.getElementsByName("password");

email[0].onchange = () => {
  emailText = email[0].value;
};

password[0].onchange = () => {
  passwordText = password[0].value;
};

const form = document.getElementById("form");
form.onsubmit = (e) => {
  e.preventDefault();
  console.log(emailText);
  console.log(passwordText);

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
  xhr.responseType = "json";

  xhr.onload = function () {
    console.log(xhr.response);
  };
  xhr.send();
};
