import { load } from "@cashfreepayments/cashfree-js";

export const cashfree = load({
  mode: "sandbox", //or production
});
