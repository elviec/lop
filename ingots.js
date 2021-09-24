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
  let dailyBuild = 0;
  const palaceBuild = palace ? getPalaceBuildCost(building) : 0;

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
    switch (building) {
      case "10":
        dailyBuild = 10 * daysPerCycle;
        break;
      case "50":
        dailyBuild = 50 * daysPerCycle;
        break;
      case "200":
        dailyBuild = 200 * daysPerCycle;
        break;
    }
  }

  grandTotal =
    greetingsTotal +
    marriageTotal +
    chapterTotal +
    worshipTotal +
    perksTotal +
    monthlyTotal +
    lifetimeTotal +
    labourTotal +
    weeklySalary +
    weeklyShare -
    dailyBuild -
    palaceBuild;

  print(grandTotal);
  toggleModal();
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

function getPalaceBuildCost(building) {
  const buildCost = 200 - building;
  if (buildCost > 0) {
    return buildCost * 5;
  } else {
    return 0;
  }
}
