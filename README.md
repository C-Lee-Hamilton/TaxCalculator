# State and Province tax calculator for the US and Canada. Intended for e-commerce.

## Usage

Enter amount and state/province,
totalTax will provide the full amount of tax to add to your total.

### Run u

```javascript
import { useGetTax } from "@the_grid/get-tax";

const MyComponent = () => {
  const { totalTax } = useGetTax(amount, "2-letter State Or Province");

  // const {totalTax} = useGetTax(10,"TX")
};
```
