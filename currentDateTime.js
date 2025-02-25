// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const date = new Date();

function getDay (day) {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  return days[day];
}

function getTimeAMPM (hours) {
  return hours < 12 ? "AM" : "PM";
}

console.log(`Today is : ${getDay(date.getDay())}\nCurrent Time is : ${date.getHours() + " " + getTimeAMPM(date.getHours())} : ${date.getMinutes()} : ${date.getSeconds()}`);