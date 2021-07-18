const bill = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const people = document.getElementById("people");
const tipResult = document.getElementById("tip-result");
const total = document.getElementById("total");
const reset = document.getElementById("reset");
let tip;
const btnValues = [5, 10, 15, 25, 50];

function clickTip(value) {
  if (btnValues.indexOf(tip) !== -1)
    document.getElementById(`tip-${tip}`).style.background =
      "var(--veryDarkCyan)";
  tipInput.value = "";
  tip = value;
  document.getElementById(`tip-${value}`).style.background =
    "var(--strongCyan)";

  if (bill.value && people.value) calculate();
}

tipInput.onchange = (e) => {
  if (btnValues.indexOf(tip) !== -1)
    document.getElementById(`tip-${tip}`).style.background =
      "var(--veryDarkCyan)";
  tip = e.target.value;
  if (bill.value && people.value) calculate();
};

bill.onchange = () => {
  if (tip && people.value) calculate();
};

people.onchange = () => {
  if (bill.value && tip) calculate();
};

function calculate() {
  const tipValue = (Number(bill.value) * Number(tip)) / 100;
  total.innerHTML =
    "&dollar;" +
    ((Number(bill.value) + tipValue) / Number(people.value)).toFixed(2);
  tipResult.innerHTML =
    "&dollar;" + (tipValue / Number(people.value)).toFixed(2);
}

function resetCalculate() {
  if (btnValues.indexOf(tip) !== -1)
    document.getElementById(`tip-${tip}`).style.background =
      "var(--veryDarkCyan)";
  bill.value = "";
  tip = 0;
  people.value = "";
  total.innerHTML = "&dollar;0.00";
  tipResult.innerHTML = "&dollar;0.00";
}
