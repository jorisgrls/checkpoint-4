export default function getGes(kWh) {
  let label;
  let color;

  if (kWh <= 5) {
    label = "A";
    color = "#A2EA94";
  } else if (kWh <= 10) {
    label = "B";
    color = "#F4DB3D";
  } else if (kWh <= 20) {
    label = "C";
    color = "#F4AE50";
  } else if (kWh <= 35) {
    label = "D";
    color = "#F47550";
  } else {
    label = "E";
    color = "#F45050";
  }

  return { label, color };
}
