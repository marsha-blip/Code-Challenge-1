const prompt=require("prompt-sync")({sigint:true});
function calculateChaiIngredients(numberOfCups) {
  const waterPerCup = 200;
  const milkPerCup = 50;
  const teaLeavesPerCup = 1;
  const sugarPerCup = 2;

  const totalWater = waterPerCup * numberOfCups;
  const totalMilk = milkPerCup * numberOfCups;
  const totalTeaLeaves = teaLeavesPerCup * numberOfCups;
  const totalSugar = sugarPerCup * numberOfCups;

  console.log(
    `To make ${numberOfCups} cup${
      numberOfCups !== 1 ? "s" : ""
    } of Kenyan Chai, you will need:`
  );
  console.log(`Water: ${totalWater} ml`);
  console.log(`Milk: ${totalMilk} ml`);
  console.log(
    `Tea Leaves (Majani): ${totalTeaLeaves} tablespoon${
      totalTeaLeaves !== 1 ? "s" : ""
    }`
  );
  console.log(
    `Sugar (Sukari): ${totalSugar} teaspoon${totalSugar !== 1 ? "s" : ""}`
  );
  console.log("\nEnjoy your Chai Bora!");
}

function calculateChaiIngredientsPrompt() {
  const input = prompt(
    "Karibu! How many cups of Chai Bora would you like to make?"
  );
  const numberOfCups = Number(input);

  if (isNaN(numberOfCups) || numberOfCups <= 0) {
    console.error("Please enter a valid positive number.");
    return;
  }

  calculateChaiIngredients(numberOfCups);
}
calculateChaiIngredientsPrompt();
