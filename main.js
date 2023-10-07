document.addEventListener("DOMContentLoaded", () => {
  let navbar = document.querySelector(".header .navbar");
  document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle("active");
  };

  document
    .querySelector(".about .video-container .controls .control-btn")
    .forEach((btn) => {
      btn.onclick = () => {
        let src = btn.getAttribute("data-src");
        document.querySelector(".about .video-container .video").src = src;
      };
    });

  //login page script _______________________________________
  // _________________________________________________________
  // ______________________________________________________________
});
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    console.log("Captured username:", username);
    console.log("Captured password:", password);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setTimeout(() => {
            alert(`Welcome To Himaal mr ${username}🙌`);

            window.location.href = "file/index.html"; // Redirect on success
          }, 2000);
        } else {
          alert("Invalid login credentials. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });

//to hide the login button
// Check if the user is logged in by sending a request to the server
// fetch("/check-login-status", {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => {
//     if (data.isLoggedIn) {
//       const loginButton = document.getElementById("loginx");
//       if (loginButton) {
//         loginButton.style.display = "none";
//       }
//     }
//   });

function goToSignUp() {
  window.location.href = "/signup.html";
}
