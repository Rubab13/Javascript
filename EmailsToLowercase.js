// Make emails lowercase

let emails = ["User@Gmail.com", "Admin@Yahoo.com"];

let result = emails.map(
  (element) => {
    return element.toLowerCase();
  }
);

console.log(emails, "->", result);