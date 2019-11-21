function tooManyFish() {
  // Set population limit of aquarium to 10
  var popLimit = 10;

  // Start off with 0 fish
  var fish = 0;

  // Initiate the while loop to run until fish reaches population limit for the bowl.
  while (fish < popLimit) {
    // Add one fish for each iteration
    fish++;
    console.log("There's room for " + (popLimit - fish) + " more fish.");
  }
};

tooManyFish();