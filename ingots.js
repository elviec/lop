const daysPerCycle = 24;

function calculate() {
  const kunningkong = document.querySelector("#kunningkong").value;
  const marriage = document.querySelector("#marriage").value;
  const chapter = document.querySelector("#chapter").value;
  const monthly = document.querySelector("#monthly").checked;
  const lifetime = document.querySelector("#lifetime").checked;
  const labour = document.querySelector("#labour").checked;
  const building = document.querySelector("#building").value;
  const palace = document.querySelector("#palace").checked;
  const greetingsTotal = kunningkong * daysPerCycle;
  const marriageTotal = marriage * 20;
  const chapterTotal = chapter * 100;
  const worshipTotal = 70 * daysPerCycle;
  const perksTotal = 400;
  const weeklySalary = 200;
  const weeklyShare = 200;
  let grandTotal = 0;
  let labourTotal = 0;
  let monthlyTotal = 0;
  let lifetimeTotal = 0;
  let buildTotal = 0;

  if (monthly) {
    monthlyTotal = 100 * daysPerCycle;
  }

  if (lifetime) {
    lifetimeTotal = 120 * daysPerCycle;
  }

  if (labour) {
    labourTotal = 30 * daysPerCycle;
  }

  if (building > 0) {
    if (palace) {
      switch (building) {
        case "10":
          buildTotal = 10 * (daysPerCycle - 5) + 1000;
          break;
        case "50":
          buildTotal = 50 * (daysPerCycle - 5) + 1000;
          break;
        case "200":
          buildTotal = 200 * (daysPerCycle - 5) + 1000;
          break;
      }
    } else {
      switch (building) {
        case "10":
          buildTotal = 10 * daysPerCycle;
          break;
        case "50":
          buildTotal = 50 * daysPerCycle;
          break;
        case "200":
          buildTotal = 200 * daysPerCycle;
          break;
      }
    }
  }

  console.log(buildTotal);
  toggleModal();

  grandTotal =
    greetingsTotal +
    marriageTotal +
    chapterTotal +
    worshipTotal +
    perksTotal +
    labourTotal +
    weeklySalary +
    weeklyShare -
    buildTotal;

  print(grandTotal);
}

function print(grandTotal) {
  const incomePerCycle = document.querySelector("#incomePerCycle");
  const averagePerDay = document.querySelector("#averagePerDay");
  const average30 = document.querySelector("#average30");
  const average60 = document.querySelector("#average60");
  const average = parseInt(grandTotal / daysPerCycle);

  incomePerCycle.innerText =
    grandTotal + " Ingots over " + daysPerCycle + " days.";

  averagePerDay.innerText =
    "You earn an average of " + average + " ingots per day";
  average30.innerText = "Your estimated income over 30 days is " + average * 30;
  average60.innerText = "Your estimated income over 60 days is " + average * 60;
}

function toggleModal() {
  const modal = document.querySelector(".modal");
  modal.classList.toggle("is-active");
}
