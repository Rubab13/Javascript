// Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

// THis function takes in another function
function delayedInvoke (callback) {
  setTimeout(callback, 2000); // Invoke after 2 seconds
}
function function2 () {
  console.log("Function 2 called.")
}


delayedInvoke(() => console.log("Callback invoked after 2 seconds"));
// or we can pass the reference to the function
delayedInvoke(function2);