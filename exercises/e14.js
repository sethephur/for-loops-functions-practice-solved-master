
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...

  const wrongBalances = [];

  for (const e in array) {
    let deposits = 0;
    let withdrawals = 0;
    for (const dep in array[e].deposits) {
      deposits += array[e].deposits[dep];
    }
    for (const withdraw in array[e].withdrawals) {
      withdrawals += array[e].withdrawals[withdraw];
    }

    let balance = deposits - withdrawals;

    if (balance != array[e].balance) {
      wrongBalances.push(array[e]);
    }
  }

  return wrongBalances;

}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
