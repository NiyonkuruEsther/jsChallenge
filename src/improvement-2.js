/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 2
export default function filterProcessedProducts(products) {
  if (!Array.isArray(products)) {
    throw new Error("Invalid input! Please retry with an array input");
  }
  const foodItems = products.filter((product) => product.type === "Food");

  return foodItems;
}
