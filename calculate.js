function calculate() {
  const whiteJade = document.getElementById('white').value | 0;
  const agateJade = document.getElementById('agate').value | 0;
  const hetianJade = document.getElementById('hetian').value | 0;
  const blessing = document.getElementById('blessing').value | 0;

  console.log(agateJade);
  const whiteJadeExp = 10 * whiteJade;
  const agateJadeExp = 50 * agateJade;
  const hetianJadeExp = 100 * hetianJade;
  const blessingExp = 125 * blessing;

  const estimatedPoints = document.getElementById('estimated');
  document.getElementById('title').style.display = "block";

  estimatedPoints.innerText = whiteJadeExp + agateJadeExp + hetianJadeExp + blessingExp;
}
