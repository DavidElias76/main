// create a class
class BankAccount {
    constructor() {
        this.balance = 0;
        this.transactions = []; // transactions array should carray object with thhe type and amount property
    }
    // deposit method
    deposit(amount){
        const amountDeposited = Number(amount);
        if(amountDeposited > 0){
            this.transactions.push({type: "deposit", amount: amountDeposited}); // create an object to deposit
            this.balance += amountDeposited; // update the balance
            return `Successfully Deposited $${amountDeposited}. New Balance: $${this.balance}`;
        }
    }
        // withdraw method
    withdraw(amount){
        const amountWithdrawn =  Number(amount);
        if(amountWithdrawn > 0  && amountWithdrawn <= this.balance){
            this.transactions.push({type: "withdraw", amount: amountWithdrawn}); // create an object to deposit
            this.balance -= amountWithdrawn; // update the balance
            return `Successfully Withdrawn $${amountWithdrawn}. New Balance: $${this.balance}`;
        }
    }
    // check the balance in the account
    checkBalance(){
        return `Current Balanace: $${this.balance}`;
    }
    // list all deposits
    listAllDeposits(){
        const deposits = this.transactions.filter(txn => txn.type === "deposit").map(txn => txn.amount);
        return "Depoists: " + deposits.join(',');
    }
    // list of all withdraws
    listAllWithdraws(){
        const withdraws = this.transactions.filter(txn => txn.type === "withdraw").map(txn => txn.amount);
        return "Withdraws: " + withdraws.join(',');
    }
}
// create an instance of bankAccount
const myAccount = new BankAccount();

// requirement: should have 3 deposits
console.log(myAccount.deposit(200));
console.log(myAccount.deposit(400));
console.log(myAccount.deposit(500));

// requirement: should have 3 withdraws
console.log(myAccount.withdraw(200));
console.log(myAccount.withdraw(200));
console.log(myAccount.withdraw(100));

// check balance
console.log(myAccount.checkBalance());

// list all deposits
console.log(myAccount.listAllDeposits());

// list all withdraws
console.log(myAccount.listAllWithdraws());

