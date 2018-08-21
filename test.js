const RoleOrder = [3, 2, 1, 4];


// const InputArray = [1, 2, 3, 4];
const InputArray = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 }
];

// const createVerb = (inputArray) => (num) => inputArray.find((element) => element.id === num);

const verb = (num) => {
  // return InputArray.find((element) => element.id === num);
  return InputArray.find((element) => element.id === num);
};

// const aaa = RoleOrder.reduce((stack, orderNumber) => {
//   const existElement = verb(orderNumber);
//   if (existElement != null) stack.push(existElement);
//   return stack;
// }, []);


const orderByOrderArray = (verb, orderArray) => {
  return orderArray.reduce((stack, orderNumber) => {
    const existElement = verb(orderNumber);
    if (existElement != null) stack.push(existElement);
    return stack;
  }, []);
}

const aaa = orderByOrderArray(verb, RoleOrder);

console.log(1, aaa, 2);
