function setup() {
  const wis = document.querySelector("#wis-s").value;
  const pol = document.querySelector("#pol-s").value;
  const cha = document.querySelector("#cha-s").value;
  const auth = document.querySelector("#auth-s").value;

  localStorage.setItem("wis-s", wis);
  localStorage.setItem("pol-s", pol);
  localStorage.setItem("cha-s", cha);
  localStorage.setItem("auth-s", auth);

  loadBasicPrestige();
}

function loadBasicPrestige() {
  const wisBasic = localStorage.getItem("wis-s");
  const wisData = getBasicPrestige(wisBasic);

  document.querySelector("#wisBasic").value = wisBasic;
  document.querySelector("#wisEffect").innerText = wisData.bonus;
  document.querySelector("#wisPoints").value = wisData.points;

  document.querySelector("#polBasic").value = localStorage.getItem("pol-s");
  document.querySelector("#chaBasic").value = localStorage.getItem("cha-s");
  document.querySelector("#authBasic").value = localStorage.getItem("auth-s");
}

function upgradeWisdom() {
  const wisLevel = +document.querySelector("#wisBasic").value + 1;
  const wisSpent = +document.querySelector("#wisPoints").value;
  const wisData = getBasicPrestige(wisLevel);

  deductBalance(wisSpent);

  document.querySelector("#wisBasic").value = wisLevel;
  document.querySelector("#wisEffect").innerText = wisData.bonus;
  document.querySelector("#wisPoints").value = wisData.points;
}

function getBasicPrestige(level) {
  return basicPrestige[level];
}

function deductBalance(points) {
  const balance = +document.querySelector("#balance").value - points;
  document.querySelector("#balance").value = balance;
}

const basicPrestige = {
  0: { bonus: 0, points: 51 },
  1: { bonus: 0.5, points: 52 },
  2: { bonus: 1, points: 53 },
  3: { bonus: 1.5, points: 54 },
  4: { bonus: 2, points: 55 },
  5: { bonus: 2.5, points: 56 },
  6: { bonus: 3, points: 57 },
  7: { bonus: 3.5, points: 58 },
  8: { bonus: 4, points: 59 },
  9: { bonus: 4.5, points: 60 },
  10: { bonus: 5, points: 61 },
  11: { bonus: 5.5, points: 62 },
  12: { bonus: 6, points: 63 },
  13: { bonus: 6.5, points: 64 },
  14: { bonus: 7, points: 65 },
  15: { bonus: 7.5, points: 66 },
  16: { bonus: 8, points: 67 },
  17: { bonus: 8.5, points: 68 },
  18: { bonus: 9, points: 69 },
  19: { bonus: 9.5, points: 70 },
  20: { bonus: 10, points: 72 },
  21: { bonus: 10.5, points: 74 },
  22: { bonus: 11, points: 76 },
  23: { bonus: 11.5, points: 78 },
  24: { bonus: 12, points: 80 },
  25: { bonus: 12.5, points: 82 },
  26: { bonus: 13, points: 84 },
  27: { bonus: 13.5, points: 86 },
  28: { bonus: 14, points: 88 },
  29: { bonus: 14.5, points: 90 },
  30: { bonus: 15, points: 92 },
  31: { bonus: 15.5, points: 94 },
  32: { bonus: 16, points: 96 },
  33: { bonus: 16.5, points: 98 },
  34: { bonus: 17, points: 100 },
  35: { bonus: 17.5, points: 102 },
  36: { bonus: 18, points: 104 },
  37: { bonus: 18.5, points: 106 },
  38: { bonus: 19, points: 108 },
  39: { bonus: 19.5, points: 110 },
  40: { bonus: 20, points: 113 },
  41: { bonus: 20.5, points: 116 },
  42: { bonus: 21, points: 119 },
  43: { bonus: 21.5, points: 122 },
  44: { bonus: 22, points: 125 },
  45: { bonus: 22.5, points: 128 },
  46: { bonus: 23, points: 131 },
  47: { bonus: 23.5, points: 134 },
  48: { bonus: 24, points: 137 },
  49: { bonus: 24.5, points: 140 },
  50: { bonus: 25, points: 143 },
  51: { bonus: 25.5, points: 146 },
  52: { bonus: 26, points: 149 },
  53: { bonus: 26.5, points: 152 },
  54: { bonus: 27, points: 155 },
  55: { bonus: 27.5, points: 158 },
  56: { bonus: 28, points: 161 },
  57: { bonus: 28.5, points: 164 },
  58: { bonus: 29, points: 167 },
  59: { bonus: 29.5, points: 170 },
  60: { bonus: 30, points: 174 },
  61: { bonus: 30.5, points: 178 },
  62: { bonus: 31, points: 182 },
  63: { bonus: 31.5, points: 186 },
  64: { bonus: 32, points: 190 },
  65: { bonus: 32.5, points: 194 },
  66: { bonus: 33, points: 198 },
  67: { bonus: 33.5, points: 202 },
  68: { bonus: 34, points: 206 },
  69: { bonus: 34.5, points: 210 },
  70: { bonus: 35, points: 214 },
  71: { bonus: 35.5, points: 218 },
  72: { bonus: 36, points: 222 },
  73: { bonus: 36.5, points: 226 },
  74: { bonus: 37, points: 230 },
  75: { bonus: 37.5, points: 234 },
  76: { bonus: 38, points: 238 },
  77: { bonus: 38.5, points: 242 },
  78: { bonus: 39, points: 246 },
  79: { bonus: 39.5, points: 250 },
  80: { bonus: 40, points: 255 },
  81: { bonus: 40.5, points: 260 },
  82: { bonus: 41, points: 265 },
  83: { bonus: 41.5, points: 270 },
  84: { bonus: 42, points: 275 },
  85: { bonus: 42.5, points: 280 },
  86: { bonus: 43, points: 285 },
  87: { bonus: 43.5, points: 290 },
  88: { bonus: 44, points: 295 },
  89: { bonus: 44.5, points: 300 },
  90: { bonus: 45, points: 305 },
  91: { bonus: 45.5, points: 310 },
  92: { bonus: 46, points: 315 },
  93: { bonus: 46.5, points: 320 },
  94: { bonus: 47, points: 325 },
  95: { bonus: 47.5, points: 330 },
  96: { bonus: 48, points: 335 },
  97: { bonus: 48.5, points: 340 },
  98: { bonus: 49, points: 345 },
  99: { bonus: 49.5, points: 350 },
  100: { bonus: 50, points: 356 },
  101: { bonus: 50.5, points: 362 },
  102: { bonus: 51, points: 368 },
  103: { bonus: 51.5, points: 374 },
  104: { bonus: 52, points: 380 },
  105: { bonus: 52.5, points: 386 },
  106: { bonus: 53, points: 392 },
  107: { bonus: 53.5, points: 398 },
  108: { bonus: 54, points: 404 },
  109: { bonus: 54.5, points: 410 },
  110: { bonus: 55, points: 416 },
  111: { bonus: 55.5, points: 422 },
  112: { bonus: 56, points: 428 },
  113: { bonus: 56.5, points: 434 },
  114: { bonus: 57, points: 440 },
  115: { bonus: 57.5, points: 446 },
  116: { bonus: 58, points: 452 },
  117: { bonus: 58.5, points: 458 },
  118: { bonus: 59, points: 464 },
  119: { bonus: 59.5, points: 470 },
  120: { bonus: 60, points: 477 },
  121: { bonus: 60.5, points: 484 },
  122: { bonus: 61, points: 491 },
  123: { bonus: 61.5, points: 498 },
  124: { bonus: 62, points: 505 },
  125: { bonus: 62.5, points: 512 },
  126: { bonus: 63, points: 519 },
  127: { bonus: 63.5, points: 526 },
  128: { bonus: 64, points: 533 },
  129: { bonus: 64.5, points: 540 },
  130: { bonus: 65, points: 547 },
  131: { bonus: 65.5, points: 554 },
  132: { bonus: 66, points: 561 },
  133: { bonus: 66.5, points: 568 },
  134: { bonus: 67, points: 575 },
  135: { bonus: 67.5, points: 582 },
  136: { bonus: 68, points: 589 },
  137: { bonus: 68.5, points: 596 },
  138: { bonus: 69, points: 603 },
  139: { bonus: 69.5, points: 610 },
  140: { bonus: 70, points: 618 },
  141: { bonus: 70.5, points: 626 },
  142: { bonus: 71, points: 634 },
  143: { bonus: 71.5, points: 642 },
  144: { bonus: 72, points: 650 },
  145: { bonus: 72.5, points: 658 },
  146: { bonus: 73, points: 666 },
  147: { bonus: 73.5, points: 674 },
  148: { bonus: 74, points: 682 },
  149: { bonus: 74.5, points: 690 },
  150: { bonus: 75, points: 698 },
  151: { bonus: 75.5, points: 706 },
  152: { bonus: 76, points: 714 },
  153: { bonus: 76.5, points: 722 },
  154: { bonus: 77, points: 730 },
  155: { bonus: 77.5, points: 738 },
  156: { bonus: 78, points: 746 },
  157: { bonus: 78.5, points: 754 },
  158: { bonus: 79, points: 762 },
  159: { bonus: 79.5, points: 770 },
  160: { bonus: 80, points: 779 },
  161: { bonus: 80.5, points: 788 },
  162: { bonus: 81, points: 797 },
  163: { bonus: 81.5, points: 806 },
  164: { bonus: 82, points: 815 },
  165: { bonus: 82.5, points: 824 },
  166: { bonus: 83, points: 833 },
  167: { bonus: 83.5, points: 842 },
  168: { bonus: 84, points: 851 },
  169: { bonus: 84.5, points: 860 },
  170: { bonus: 85, points: 869 },
  171: { bonus: 85.5, points: 878 },
  172: { bonus: 86, points: 887 },
  173: { bonus: 86.5, points: 896 },
  174: { bonus: 87, points: 905 },
  175: { bonus: 87.5, points: 914 },
  176: { bonus: 88, points: 923 },
  177: { bonus: 88.5, points: 932 },
  178: { bonus: 89, points: 941 },
  179: { bonus: 89.5, points: 950 },
  180: { bonus: 90, points: 960 },
  181: { bonus: 90.5, points: 970 },
  182: { bonus: 91, points: 980 },
  183: { bonus: 91.5, points: 990 },
  184: { bonus: 92, points: 1000 },
  185: { bonus: 92.5, points: 1010 },
  186: { bonus: 93, points: 1020 },
  187: { bonus: 93.5, points: 1030 },
  188: { bonus: 94, points: 1040 },
  189: { bonus: 94.5, points: 1050 },
  190: { bonus: 95, points: 1060 },
  191: { bonus: 95.5, points: 1070 },
  192: { bonus: 96, points: 1025 },
  193: { bonus: 96.5, points: 1035 },
  194: { bonus: 97, points: 1045 },
  195: { bonus: 97.5, points: 1055 },
  196: { bonus: 98, points: 1065 },
  197: { bonus: 98.5, points: 1075 },
  198: { bonus: 99, points: 1085 },
  199: { bonus: 99.5, points: 1095 },
  200: { bonus: 100, points: 1106 },
};
