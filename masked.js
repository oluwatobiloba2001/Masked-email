function maskEmail(email){
  const atIndex = email.indexOf("@");
  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);
  const maskedUsername = username[0] + "*".repeat(username.length - 2) + username[username.length - 1];

  return maskedUsername + domain;
}
let email = "alomajatobi@gmail.com";
console.log(maskEmail(email));