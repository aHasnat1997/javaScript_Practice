const card = [{ name: "Samsung M33", price: 10000 },{ name: "Samsung Charger", price: 500},{ name: "Haveit Speakers", price:2500}];

const totalCost = (products) => {
  let total = 0;
	for(let i = 0; i < products.length; i++){
    total += products[i].price;
  }
  return total
};

console.log(totalCost(card));