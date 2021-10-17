function craftSteward() {
  const servantHat = document.getElementById("servantHat").value;
  const servantRobe = document.getElementById("servantRobe").value;
  const servantBelt = document.getElementById("servantBelt").value;

  const craftedStewardHat = Math.trunc(servantHat / 3);
  const craftedStewardRobe = Math.trunc(servantRobe / 3);
  const craftedStewardBelt = Math.trunc(servantBelt / 3);

  const stewardHat = Number(document.getElementById("stewardHat").value);
  const stewardRobe = Number(document.getElementById("stewardRobe").value);
  const stewardBelt = Number(document.getElementById("stewardBelt").value);

  document.getElementById("servantHat").value = servantHat % 3;
  document.getElementById("servantRobe").value = servantRobe % 3;
  document.getElementById("servantBelt").value = servantBelt % 3;

  document.getElementById("stewardHat").value = stewardHat + craftedStewardHat;
  document.getElementById("stewardRobe").value =
    stewardRobe + craftedStewardRobe;
  document.getElementById("stewardBelt").value =
    stewardBelt + craftedStewardBelt;
}

function craftCurator() {
  const stewardHat = document.getElementById("stewardHat").value;
  const stewardRobe = document.getElementById("stewardRobe").value;
  const stewardBelt = document.getElementById("stewardBelt").value;

  const craftedCuratorHat = Math.trunc(stewardHat / 3);
  const craftedCuratorRobe = Math.trunc(stewardRobe / 3);
  const craftedCuratorBelt = Math.trunc(stewardBelt / 3);

  const curatorHat = Number(document.getElementById("curatorHat").value);
  const curatorRobe = Number(document.getElementById("curatorRobe").value);
  const curatorBelt = Number(document.getElementById("curatorBelt").value);

  document.getElementById("stewardHat").value = stewardHat % 3;
  document.getElementById("stewardRobe").value = stewardRobe % 3;
  document.getElementById("stewardBelt").value = stewardBelt % 3;

  document.getElementById("curatorHat").value = curatorHat + craftedCuratorHat;
  document.getElementById("curatorRobe").value =
    curatorRobe + craftedCuratorRobe;
  document.getElementById("curatorBelt").value =
    curatorBelt + craftedCuratorBelt;
}

function craftDeputy() {
  const curatorHat = document.getElementById("curatorHat").value;
  const curatorRobe = document.getElementById("curatorRobe").value;
  const curatorBelt = document.getElementById("curatorBelt").value;

  const craftedDeputyHat = Math.trunc(curatorHat / 4);
  const craftedDeputyRobe = Math.trunc(curatorRobe / 4);
  const craftedDeputyBelt = Math.trunc(curatorBelt / 4);

  const deputyHat = Number(document.getElementById("deputyHat").value);
  const deputyRobe = Number(document.getElementById("deputyRobe").value);
  const deputyBelt = Number(document.getElementById("deputyBelt").value);

  document.getElementById("curatorHat").value = curatorHat % 4;
  document.getElementById("curatorRobe").value = curatorRobe % 4;
  document.getElementById("curatorBelt").value = curatorBelt % 4;

  document.getElementById("deputyHat").value = deputyHat + craftedDeputyHat;
  document.getElementById("deputyRobe").value = deputyRobe + craftedDeputyRobe;
  document.getElementById("deputyBelt").value = deputyBelt + craftedDeputyBelt;
}

function craftChief() {
  const deputyHat = document.getElementById("deputyHat").value;
  const deputyRobe = document.getElementById("deputyRobe").value;
  const deputyBelt = document.getElementById("deputyBelt").value;

  const craftedChiefHat = Math.trunc(deputyHat / 5);
  const craftedChiefRobe = Math.trunc(deputyRobe / 5);
  const craftedChiefBelt = Math.trunc(deputyBelt / 5);

  const chiefHat = Number(document.getElementById("chiefHat").value);
  const chiefRobe = Number(document.getElementById("chiefRobe").value);
  const chiefBelt = Number(document.getElementById("chiefBelt").value);

  document.getElementById("deputyHat").value = deputyHat % 5;
  document.getElementById("deputyRobe").value = deputyRobe % 5;
  document.getElementById("deputyBelt").value = deputyBelt % 5;

  document.getElementById("chiefHat").value = chiefHat + craftedChiefHat;
  document.getElementById("chiefRobe").value = chiefRobe + craftedChiefRobe;
  document.getElementById("chiefBelt").value = chiefBelt + craftedChiefBelt;
}

function craftArchChief() {
  const chiefHat = document.getElementById("chiefHat").value;
  const chiefRobe = document.getElementById("chiefRobe").value;
  const chiefBelt = document.getElementById("chiefBelt").value;

  const craftedArchiefHat = Math.trunc(chiefHat / 5);
  const craftedArchiefRobe = Math.trunc(chiefRobe / 5);
  const craftedArchiefBelt = Math.trunc(chiefBelt / 5);

  const archiefHat = Number(document.getElementById("archiefHat").value);
  const archiefRobe = Number(document.getElementById("archiefRobe").value);
  const archiefBelt = Number(document.getElementById("archiefBelt").value);

  document.getElementById("chiefHat").value = chiefHat % 5;
  document.getElementById("chiefRobe").value = chiefRobe % 5;
  document.getElementById("chiefBelt").value = chiefBelt % 5;

  document.getElementById("archiefHat").value = archiefHat + craftedArchiefHat;
  document.getElementById("archiefRobe").value =
    archiefRobe + craftedArchiefRobe;
  document.getElementById("archiefBelt").value =
    archiefBelt + craftedArchiefBelt;
}

function craftGrandChief() {
  const archiefHat = document.getElementById("archiefHat").value;
  const archiefRobe = document.getElementById("archiefRobe").value;
  const archiefBelt = document.getElementById("archiefBelt").value;

  const craftedGrandChiefHat = Math.trunc(archiefHat / 5);
  const craftedGrandChiefRobe = Math.trunc(archiefRobe / 5);
  const craftedGrandChiefBelt = Math.trunc(archiefBelt / 5);

  const grandchiefHat = Number(document.getElementById("grandchiefHat").value);
  const grandchiefRobe = Number(
    document.getElementById("grandchiefRobe").value
  );
  const grandchiefBelt = Number(
    document.getElementById("grandchiefBelt").value
  );

  document.getElementById("archiefHat").value = archiefHat % 5;
  document.getElementById("archiefRobe").value = archiefRobe % 5;
  document.getElementById("archiefBelt").value = archiefBelt % 5;

  document.getElementById("grandchiefHat").value =
    grandchiefHat + craftedGrandChiefHat;
  document.getElementById("grandchiefRobe").value =
    grandchiefRobe + craftedGrandChiefRobe;
  document.getElementById("grandchiefBelt").value =
    grandchiefBelt + craftedGrandChiefBelt;
}

function resetServant() {
  document.getElementById("servantHat").value = "";
  document.getElementById("servantRobe").value = "";
  document.getElementById("servantBelt").value = "";
}

function resetSteward() {
  document.getElementById("stewardHat").value = "";
  document.getElementById("stewardRobe").value = "";
  document.getElementById("stewardBelt").value = "";
}

function resetCurator() {
  document.getElementById("curatorHat").value = "";
  document.getElementById("curatorRobe").value = "";
  document.getElementById("curatorBelt").value = "";
}

function resetDeputy() {
  document.getElementById("deputyHat").value = "";
  document.getElementById("deputyRobe").value = "";
  document.getElementById("deputyBelt").value = "";
}

function resetChief() {
  document.getElementById("chiefHat").value = "";
  document.getElementById("chiefRobe").value = "";
  document.getElementById("chiefBelt").value = "";
}

function resetArchief() {
  document.getElementById("archiefHat").value = "";
  document.getElementById("archiefRobe").value = "";
  document.getElementById("archiefBelt").value = "";
}

function resetGrandchief() {
  document.getElementById("grandchiefHat").value = "";
  document.getElementById("grandchiefRobe").value = "";
  document.getElementById("grandchiefBelt").value = "";
}

function resetAll() {
  resetServant();
  resetSteward();
  resetCurator();
  resetDeputy();
  resetChief();
  resetArchief();
  resetGrandchief();
}
