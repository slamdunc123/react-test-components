type UserType = {
	name?: string;
	age: number;
};

const user: UserType = {
  name: 'User 1',
	age: 123,
};
type ProductType = {
	title?: string;
	inSale: boolean;
};

const product: ProductType = {
  title: 'Product 1',
  inSale: true,
};



console.log(user, product);

const ifElse = (num1: number, num2: number): number => {
  if(num1) return num1
  else if(num2) return num2
  else return 0
}

ifElse(4, 5)
