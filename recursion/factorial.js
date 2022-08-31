function factorialRecursive(n) {
    if (n === 2) {
      return 2;
    }
    return n * factorialRecursive(--n);
  }
  
  function factorialIterative(n) {
    let product = 1;
    while (n > 1) {
      product *= n--;
    }
    return product;
  }
  
  
  console.log(factorialIterative(5));
  console.log(factorialRecursive(5));