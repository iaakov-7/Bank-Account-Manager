import { manageBank } from "./bank_management.js";
import input from "analiza-sync";

function showMenue() {
  console.log("**********************************");
  console.log("Welcome to 'Bank Accounts Manager'");
  console.log("**********************************");
  console.log("1. Create new customer ");
  console.log("2. Show all customers ");
  console.log("3. Deposit money to account ");
  console.log("4. Withdraw money from account");
  console.log("5. Close account");
  console.log("6. Search coustomer");
  console.log("7. Show statistics");
  console.log("0. Exit");
}

function main() {
  const manager = manageBank();
  let login = true;
  while (login) {
    showMenue();
    const choice = input("Enter choice: ");
    switch (choice) {
      case "1":
        const fullName = input("Enter full name: ");
        const accountType = input("Enter account type: ");
        const balance = Number(input("Enter balanc: "));
        manager.createCustomer({ fullName, accountType, balance });
        break;
      case "2":
        manager.showCustomers();
        break;
      case "3":
        const id = Number(input("Enter customer id: "));
        const amount = Number(input("Enter amount: "));
        console.log(manager.deposit(id, amount));
        break;
      case "4":
        const _id = Number(input("Enter customer id: "));
        const _amount = Number(input("Enter amount: "));
        console.log(manager.withdraw(_id, _amount));
        break;
      case "5":
        const Id = Number(input("Enter customer id: "));
        console.log(manager.closeAccount(Id));
        break;
      case "6":
        let key = input("Enter name or id: ");
        if (!/[a-zA-z]/.test(key)) {
          key = Number(key);
        }
        console.log(manager.searchCoustomer(key));
        break;
      case "7":
        manager.showStatistics();
        break;
      case "0":
        login = false;
        break;
      default:
        console.log("Enter numbers 0-7 only!");
    }
  }
}

main();
