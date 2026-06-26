export function validateDepositWithdraw(Id, amount, cust) {
  if (typeof cust === "undefined") {
    console.log("Customer not found");
    return;
  }
  if (cust.isActive === false) {
    console.log("Account not active");
    return;
  }
  if (isNaN(amount)) {
    console.log("Amount must be number");
    return;
  }
  if (amount < 0) {
    console.log("Cannot deposit negative amount");
    return;
  }
  return "Success";
}
