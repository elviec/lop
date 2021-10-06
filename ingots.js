function calculate() {
  const kunningkong =
    parseInt(document.querySelector("#kunningkong").value) | 0;
  const marriage = document.querySelector("#marriage").value;
  const chapter = document.querySelector("#chapter").value;
  const monthly = document.querySelector("#monthly").checked;
  const lifetime = document.querySelector("#lifetime").checked;
  const labour = document.querySelector("input[name=labour]:checked").value;
  const building = parseInt(document.querySelector("#building").value);
  const palace = document.querySelector("#palace").checked;
  const guildtoken = document.querySelector(
    "input[name=guildtoken]:checked"
  ).value;
  const edutokens = parseInt(
    document.querySelector("input[name=edutokens]:checked").value
  );
  const slots = parseInt(document.querySelector("#academyslots").value);
  const pigeontokens = parseInt(
    document.querySelector("input[name=pigeontokens]:checked").value
  );
  const pigeonSlots = parseInt(document.querySelector("#pigeonslots").value);
  const whiteroses = parseInt(
    document.querySelector("input[name=whiteroses]:checked").value
  );
  const beastHuntTurns = parseInt(
    document.querySelector("#beastHuntTurns").value
  );
  const fieldTurns = parseInt(document.querySelector("#fieldTurns").value);
  const smallBanquet = document.querySelector("#smallBanquet").value;
  const largeBanquet = document.querySelector("#largeBanquet").value;
  const abalone = document.querySelector("input[name=abalone]:checked");
  const scallop = document.querySelector("input[name=scallop]:checked");
  const seaCucumber = document.querySelector("input[name=seacucumber]:checked");

  //daily income
  const worship = 70;
  const timedLogin = 100;
  const labourIncome = labour === "1" ? 30 : 15;
  const monthlyPass = monthly ? 100 : 0;
  const lifetimePass = lifetime ? 120 : 0;
  const dailyQuests = 30;

  //dailyExpenses
  const dailyBuild = building ? building : 0;
  const dailyGuildTokenCost = guildtoken === "1" ? 100 : 0;
  const dailyEduTokensCost = edutokens && slots ? slots * edutokens * 10 : 0;
  const dailyPigeonTokensCost =
    pigeontokens && pigeonSlots ? pigeontokens * pigeonSlots * 10 : 0;
  const dailyWhiteRosesCost = whiteroses ? whiteroses * 10 : 0;
  const dailyBeastHuntCost = beastHuntTurns
    ? getDailyBeastHuntCost(beastHuntTurns)
    : 0;

  //weekly income
  const weeklySalary = 50;
  const weeklyShare = 50;
  const weeklyPerk = 100;

  //weekly expenses
  const weeklyFieldCost = fieldTurns > 0 ? getWeeklyFieldCost(fieldTurns) : 0;
  const abaloneCost = abalone ? 150 : 0;
  const scallopCost = scallop ? 150 : 0;
  const seaCucumberCost = seaCucumber ? 150 : 0;
  const weeklySeafoodCost = abaloneCost + scallopCost + seaCucumberCost;

  //cycle income
  const marriageIncome = marriage ? getMarriagesIncome(marriage) : 0;
  const chapterIncome = chapter * 100;

  //cycle expenses
  const palaceBuild = palace ? getAdditionalPalaceBuildCost(building) : 0;
  const smallBanquetCost = smallBanquet ? smallBanquet * 100 : 0;
  const largeBanquetCost = largeBanquet ? largeBanquet * 500 : 0;
  const banquetTotalCost = smallBanquetCost + largeBanquetCost;

  const dailyIncome =
    kunningkong +
    worship +
    timedLogin +
    dailyQuests +
    labourIncome +
    monthlyPass +
    lifetimePass;
  const minDailyExpenses =
    dailyBuild +
    dailyGuildTokenCost +
    dailyEduTokensCost +
    dailyWhiteRosesCost +
    dailyBeastHuntCost;
  const weeklyIncome =
    dailyIncome * 7 + weeklySalary + weeklyShare + weeklyPerk;
  const minWeeklyExpenses =
    7 * minDailyExpenses + weeklyFieldCost + weeklySeafoodCost;
  const cycleIncome =
    weeklyIncome * 3 +
    weeklySalary +
    weeklyShare +
    weeklyPerk +
    dailyIncome * 3 +
    marriageIncome +
    chapterIncome;
  const minCycleExpenses =
    minWeeklyExpenses * 3 +
    minDailyExpenses * 3 +
    palaceBuild +
    banquetTotalCost;
  const cycleBuildingCost = 24 * dailyBuild + palaceBuild;

  const result = {
    dailyIncome,
    minDailyExpenses,
    weeklyIncome,
    minWeeklyExpenses,
    cycleIncome,
    minCycleExpenses,
  };

  print(result);
  displayExpenses(
    dailyEduTokensCost,
    dailyPigeonTokensCost,
    dailyWhiteRosesCost,
    dailyBeastHuntCost,
    weeklyFieldCost,
    weeklySeafoodCost,
    banquetTotalCost,
    cycleBuildingCost
  );

  toggleModal();
}

function print(result) {
  const dailyIncomeResult = document.querySelector("#dailyMaxIncome");
  const dailyMinSpendResult = document.querySelector("#dailyMinSpending");
  const weeklyIncomeResult = document.querySelector("#weeklyMaxIncome");
  const weeklyMinSpendResult = document.querySelector("#weeklyMinSpending");
  const cycleIncomeResult = document.querySelector("#cycleMaxIncome");
  const cycleMinSpendResult = document.querySelector("#cycleMinSpending");
  const cycleSaving = document.querySelector("#cycleSaving");
  const totalSaving = result.cycleIncome - result.minCycleExpenses;
  const status = document.querySelector("#status");

  dailyIncomeResult.innerText = result.dailyIncome;
  dailyMinSpendResult.innerText = result.minDailyExpenses;
  weeklyIncomeResult.innerText = result.weeklyIncome;
  weeklyMinSpendResult.innerText = result.minWeeklyExpenses;
  cycleIncomeResult.innerText = result.cycleIncome;
  cycleMinSpendResult.innerText = result.minCycleExpenses;

  if (totalSaving < 0) {
    cycleSaving.classList.add("has-text-danger");
    status.innerText = "Uh oh! You should watch your spending!";
  } else {
    cycleSaving.classList.remove("has-text-danger");
    cycleSaving.classList.add("has-text-success");
    status.innerText = "You are doing great by having a positive income!";
  }
  cycleSaving.innerText = totalSaving;
}

function toggleModal() {
  const modal = document.querySelector(".modal");
  modal.classList.toggle("is-active");
}

function getAdditionalPalaceBuildCost(building) {
  const buildCost = 200 - building;
  if (buildCost > 0) {
    return buildCost * 5;
  } else {
    return 0;
  }
}

function getWeeklyFieldCost(fieldTurns) {
  const fieldCost = [10, 10, 20, 20, 40, 40, 80, 80, 160, 160, 320, 320];
  const arr = fieldCost.slice(0, fieldTurns);
  const dailyFieldCost = arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );

  return dailyFieldCost * 5;
}

function getDailyBeastHuntCost(beastHuntTurns) {
  const beastHuntCost = [20, 40, 80, 160, 320];
  const arr = beastHuntCost.slice(0, beastHuntTurns);
  const dailyBeastHuntCost = arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );

  return dailyBeastHuntCost;
}

function getMarriagesIncome(marriagesCount) {
  if (marriagesCount <= 10) {
    return marriagesCount * 20;
  } else {
    return 200 + parseInt((marriagesCount - 10) / 5) * 100;
  }
}

function displayExpenses(
  dailyEduTokensCost,
  dailyPigeonTokensCost,
  dailyWhiteRosesCost,
  dailyBeastHuntCost,
  weeklyFieldCost,
  weeklySeafoodCost,
  banquetTotalCost,
  cycleBuildingCost
) {
  const edutokens = document.querySelector("#edutokens");
  const pigeontokens = document.querySelector("#pigeontokens");
  const whiteroses = document.querySelector("#whiteroses");
  const fieldturns = document.querySelector("#fields");
  const seafoodCost = document.querySelector("#seafoodcost");
  const beasthunt = document.querySelector("#beasthunt");
  const banquetHostingCost = document.querySelector("#banquethostingcost");
  const guildBuildingCost = document.querySelector("#guildbuildingCost");

  edutokens.innerText = dailyEduTokensCost * 7;
  pigeontokens.innerText = dailyPigeonTokensCost * 7;
  whiteroses.innerText = dailyWhiteRosesCost * 7;
  fieldturns.innerText = weeklyFieldCost;
  seafoodCost.innerText = weeklySeafoodCost;
  beasthunt.innerText = dailyBeastHuntCost * 7;
  banquetHostingCost.innerText = banquetTotalCost;
  guildBuildingCost.innerText = cycleBuildingCost;
}
