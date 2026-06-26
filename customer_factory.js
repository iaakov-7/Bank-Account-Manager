export function createCustomerFactory() {
  let id = 0;
  return function ({ fullName, accountType, balance }) {
    const types = ["student", "regular", "premium"];
    if (!fullName || typeof fullName !== "string" || fullName.trim() == "") {
      return "invalid full name";
    }
    if (!accountType || !types.includes(accountType.toLowerCase())) {
      return "invalid account type";
    }
    if (!balance || typeof balance !== "number" || balance < 0) {
      return "invalid balance";
    }
    id++;
    return {
      customerId: id,
      fullName,
      accountType: accountType.toLowerCase(),
      balance,
      isActive: true,
    };
  };
}
