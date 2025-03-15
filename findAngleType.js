// Write a JavaScript program to find the types of a given angle.  

// Types of angles:
// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.
// Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle.

function findAngleType (angle) {
  return angle === 90 ? "Right Angle" : angle === 180 ? "Straight Angle" : angle >=0 && angle < 90 ? "Acute Angle" : angle > 90 && angle < 180 ? "Obtuse Angle" : "Reflex Angle";
}

console.log("90 ->", findAngleType(90));
console.log("180 ->", findAngleType(180));
console.log("9 ->", findAngleType(9));
console.log("24 ->", findAngleType(24));
console.log("100 ->", findAngleType(100));
console.log("200 ->", findAngleType(200));