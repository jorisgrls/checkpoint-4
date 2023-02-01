export default function getDPE(kWh) {
  let label;
  let color;
  if (kWh <= 50) {
    label = "A";
    color = "#A2EA94";
  } else if (kWh <= 90) {
    label = "B";
    color = "#F4DB3D";
  } else if (kWh <= 150) {
    label = "C";
    color = "#F4AE50";
  } else if (kWh <= 230) {
    label = "D";
    color = "#F47550";
  } else {
    label = "E";
    color = "#F45050";
  }

  return { label, color };
}
