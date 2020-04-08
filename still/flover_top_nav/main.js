const loginButton = document.getElementById("login");

const logOutButton = document.getElementById("logout");

performLogOutFlex();

loginButton.onclick = () => {
  const signUpMemberLink = document.getElementById("signup-member");
  const signUpSocietyLink = document.getElementById("signup-society");
  const loginLink = document.getElementById("login");
  const logOutLink = document.getElementById("logout");
  const membersLink = document.getElementById("members");

  signUpMemberLink.setAttribute(
    "style",
    `
    display: none;
  `
  );
  signUpSocietyLink.setAttribute(
    "style",
    `
    display: none;
  `
  );
  loginLink.setAttribute(
    "style",
    `
    display: none;
  `
  );
  logOutLink.setAttribute(
    "style",
    `
    display: inline-block;
  `
  );

  membersLink.setAttribute(
    "style",
    `
    display: inline-block;
  `
  );

  // Perent element
  performLogInFlex();
};

logOutButton.onclick = () => {
  const signUpMemberLink = document.getElementById("signup-member");
  const signUpSocietyLink = document.getElementById("signup-society");
  const loginLink = document.getElementById("login");
  const logOutLink = document.getElementById("logout");
  const membersLink = document.getElementById("members");

  signUpMemberLink.setAttribute(
    "style",
    `
    display: inline-block;
  `
  );
  signUpSocietyLink.setAttribute(
    "style",
    `
    display: inline-block;
  `
  );
  loginLink.setAttribute(
    "style",
    `
    display: inline-block;
  `
  );
  logOutLink.setAttribute(
    "style",
    `
    display: none;
  `
  );
  membersLink.setAttribute(
    "style",
    `
    display: none;
  `
  );

  performLogOutFlex();
};

function performLogOutFlex() {
  const signUpMemberLink = document.getElementById("signup-member");
  const signUpSocietyLink = document.getElementById("signup-society");
  const loginLink = document.getElementById("login");
  const logOutLink = document.getElementById("logout");

  signUpMemberLink.parentElement.setAttribute(
    "style",
    `
    flex: 1;
  `
  );
  signUpSocietyLink.parentElement.setAttribute(
    "style",
    `
    flex: 1;
  `
  );
  loginLink.parentElement.setAttribute(
    "style",
    `
    flex: 1;
  `
  );
  logOutLink.parentElement.setAttribute(
    "style",
    `
    flex: 0;
  `
  );
}

function performLogInFlex() {
  const signUpMemberLink = document.getElementById("signup-member");
  const signUpSocietyLink = document.getElementById("signup-society");
  const loginLink = document.getElementById("login");
  const logOutLink = document.getElementById("logout");

  signUpMemberLink.parentElement.setAttribute(
    "style",
    `
    flex: 0;
  `
  );
  signUpSocietyLink.parentElement.setAttribute(
    "style",
    `
    flex: 0;
  `
  );
  loginLink.parentElement.setAttribute(
    "style",
    `
    flex: 0;
  `
  );
  logOutLink.parentElement.setAttribute(
    "style",
    `
    flex: 1;
  `
  );
}
