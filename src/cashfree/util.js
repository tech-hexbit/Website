import { load } from "@cashfreepayments/cashfree-js";

async function initializeCashfree() {
  const cashfree = await load({
    mode: "sandbox", //or production
  });

  // You can use the 'cashfree' object here
  return cashfree;
}

initializeCashfree()
  .then((cashfree) => {
    // Use 'cashfree' object here if needed
  })
  .catch((error) => {
    console.error("Error initializing Cashfree:", error);
  });
