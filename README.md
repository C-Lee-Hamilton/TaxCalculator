# State and Province Tax Calculator

### US and Canada only, does not calculate local tax. This is intended for e-commerce.

## Usage

### Enter amount and state/province, totalTax will provide the full amount of tax to add to your total.

```javascript
import { getTax } from "@the_grid/get-tax";

const MyComponent = () => {
  const totalTax = getTax(amount, "2-letter State Or Province");

  // const totalTax = useGetTax(10,"MN")
};
```
