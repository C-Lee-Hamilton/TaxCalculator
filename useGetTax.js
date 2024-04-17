export const useGetTax = (amount, stateOrProvince) => {
  const location = stateOrProvince.toUpperCase();
  let rate = 0;
  switch (location) {
    case "CA":
      rate = 7.5;
      break;
    case "NJ":
    case "TN":
    case "RI":
    case "MS":
    case "IN":
      rate = 7;
      break;
    case "MN":
      rate = 6.88;
      break;
    case "NV":
      rate = 6.85;
      break;

    case "AR":
    case "KS":
    case "WA":
      rate = 6.5;
      break;
    case "CT":
      rate = 6.35;
      break;
    case "MA":
    case "IL":
    case "TX":
      rate = 6.25;
      break;
    case "MD":
    case "ID":
    case "IA":
    case "FL":
    case "WV":
    case "VT":
    case "MI":
    case "PA":
    case "PR":
    case "SC":
    case "KY":
      rate = 6;
      break;
    case "UT":
      rate = 5.95;
      break;
    case "OH":
    case "DC":
      rate = 5.75;
    case "AZ":
      rate = 5.6;
      break;
    case "NE":
    case "ME":
      rate = 5.5;
      break;
    case "NM":
      rate = 5.13;
      break;
    case "VA":
      rate = 5.3;
      break;
    case "WI":
    case "ND":
      rate = 5;
      break;
    case "NC":
      rate = 4.75;
      break;
    case "OK":
      rate = 4.5;
      break;
    case "MO":
      rate = 4.23;
      break;
    case "NY":
    case "AL":
    case "WY":
    case "SD":
    case "HI":
    case "GA":
    case "LA":
      rate = 4;
      break;
    case "CO":
      rate = 2.9;
      break;
    case "OR":
    case "MT":
    case "NH":
    case "AK":
    case "DE":
      rate = "No Sales Tax";
      break;

    //Canada
    case "NB":
    case "NL":
    case "NS":
    case "PE":
      rate = 15;
      break;
    case "QC":
      rate = 14.975;
      break;
    case "ON":
      rate = 13;
      break;
    case "BC":
    case "MB":
      rate = 12;
      break;
    case "SK":
      rate = 11;
      break;
    case "AB":
    case "NT":
    case "NU":
    case "YT":
      rate = 5;
      break;

    default:
      rate = "No Sales Tax";
  }

  const totalTax =
    rate === "No Sales Tax" ? 0 : (amount * rate * 0.01).toFixed(2);

  return { totalTax };
};
