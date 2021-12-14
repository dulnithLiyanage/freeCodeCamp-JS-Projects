const currValues = {
  PENNY: 1,
  NICKEL: 5,
  DIME: 10,
  QUARTER: 25,
  ONE: 100,
  FIVE: 500,
  TEN: 1000,
  TWENTY: 2000,
  "ONE HUNDRED": 10000,
};

function checkCashRegister(price, cash, CID) {
  let difference = cash * 100 - price * 100; // Multipled by 100 to convert floating point values to integers
  let difference_cp = difference; // Obtained a copy to later check total of the available cash in the drawer
  let change = [];
  let status = "";

  let totalOfCID = 0;
  let filteredCID = CID.filter((value) => value[1] !== 0)
    .reverse()
    .map((value) => [value[0], Math.ceil(value[1] * 100)]);

  filteredCID.forEach((value) => {
    let currName = value[0];
    let totalCurr = value[1];
    totalOfCID += totalCurr;
    let amountOfChange = 0;

    while (difference >= currValues[currName] && totalCurr > 0) {
      amountOfChange += currValues[currName];
      difference -= currValues[currName];
      totalCurr -= currValues[currName];
    }

    if (amountOfChange !== 0) {
      change.push([currName, amountOfChange / 100]); // Re-coverts integer to a floating point value;
    }
  });

  if (difference > 0) {
    status = "INSUFFICIENT_FUNDS";
    change = [];
  } else if (difference == 0 && difference_cp == totalOfCID) {
    status = "CLOSED";
    change = CID;
  } else {
    status = "OPEN";
  }
  return { status: status, change: change };
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
