function estimateTransactionFee(amountToSend) {
  const percentageFee = 0.015; // 1.5%
  const minFee = 10;           // Minimum fee: KES 10
  const maxFee = 70;           // Maximum fee: KES 70

  // Calculate the raw fee (1.5% of the amount)
  let fee = amountToSend * percentageFee;

  // Apply minimum and maximum fee constraints
  if (fee < minFee) {
    fee = minFee;
  } else if (fee > maxFee) {
    fee = maxFee;
  }

  // Calculate total amount to be debited
  const totalDebit = amountToSend + fee;

  // Log results
  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${fee}`);
  console.log(`Total amount to be debited: KES ${totalDebit}`);
  console.log("Send Money Securely!");
}

// Prompt the user for the amount and validate input
const input = prompt("Unatuma Ngapi? (KES):");
const amountToSend = Number(input);

if (isNaN(amountToSend) || amountToSend <= 0) {
  console.error("Tafadhali ingiza kiasi sahihi (KES).");
} else {
  estimateTransactionFee(amountToSend);
}
