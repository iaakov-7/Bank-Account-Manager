import { createCustomerFactory } from "./customer_factory.js";

export function manageBank() {
  const customers = [];
  const createCustomer = createCustomerFactory();
  return {
    createCustomer: function ({ fullName, accountType, balance }) {
      const newC = createCustomer({ fullName, accountType, balance });
      console.log(newC);
      if (typeof newC === "object") {
        customers.push(newC);
      }
    },
    showCustomers: function () {
      for (const cust of customers) {
        console.log("==========");
        for (const item of Object.entries(cust)) {
          console.log(`${item[0]}: ${item[1]}`);
        }
      }
    },
    deposit: function (Id, amount) {
      const cust = customers.find((customer) => customer.customerId === Id);
      if (typeof cust === "undefined") {
        return "Customer not found";
      }
      if (cust.isActive === false) {
        return "Account not active";
      }
      if (isNaN(amount)) {
        return "Amount must be number";
      }
      if (amount < 0) {
        return "Cannot deposit negative amount";
      }
      cust.balance += amount;
      return "The money was deposited successfully";
    },
    withdraw: function (Id, amount) {
      const cust = customers.find((customer) => customer.customerId === Id);
      if (typeof cust === "undefined") {
        return "Customer not found";
      }
      if (cust.isActive === false) {
        return "Account not active";
      }
      if (isNaN(amount)) {
        return "Amount must be number";
      }
      if (amount < 0) {
        return "Amount cannot be negative";
      }
      if (cust.balance < amount) {
        return "There is not enough money.";
      }
      cust.balance -= amount;
      return "The withdraw was successfully";
    },
    searchCoustomer: function (key) {
      if (typeof key === "number") {
        return customers.find((customer) => customer.customerId === key);
      }
      if (typeof key === "string") {
        return customers.filter(
          (customer) => customer.fullName.toLowerCase() === key.toLowerCase(),
        )[0];
      }
    },
    closeAccount: function (Id) {
      const cust = customers.find((customer) => customer.customerId === Id);
      if (typeof cust === "undefined") {
        return "Customer not found";
      }
      cust.isActive = false;
      return "Account closed successfully";
    },
    showStatistics: function () {
      const totalCustomers = customers.length;
      const activeAccounts = customers.filter(
        (customer) => customer.isActive === true,
      ).length;
      const totalMoney = customers.reduce(
        (acc, customer) => acc + customer.balance,
        0,
      );
      const averageBalance = totalMoney / totalCustomers;
      const highestBalance = customers.reduce((maxBalance, customer) => {
        if (customer.balance > maxBalance) {
          return customer.balance;
        } else return maxBalance;
      }, customers[0].balance);
      const statistics = {
        "Total Customers": totalCustomers,
        "Active Accounts": activeAccounts,
        "Total Money": totalMoney,
        "Average Balance": averageBalance,
        "Highest Balance": highestBalance,
      };
      for (const stat of Object.entries(statistics)) {
        console.log(stat[0] + ": " + stat[1]);
      }
    },
  };
}
