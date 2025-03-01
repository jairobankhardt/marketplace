class primeNumbersSelect {

  static getPrimes(maxPrimes) {
    let currentNumber = 1;
    let primeCount = 1;
    let isPrime = false;
    let currentOrder = 2;
    let square = 9;
    let maxOrder = 30;
    const primeNumbers = Array(maxPrimes + 1).fill(0);
    const multiples = Array(maxOrder + 1).fill(0);

    primeNumbers[1] = 2;

    while (primeCount < maxPrimes) {
      do {
        currentNumber += 2;
        if (currentNumber == square) {
          currentOrder++;
          square = primeNumbers[currentOrder] * primeNumbers[currentOrder];
          multiples[currentOrder - 1] = currentNumber;
        }
        isPrime = true;
        for (let n = 2; n < currentOrder && isPrime; n++) {
          while (multiples[n] < currentNumber) {
            multiples[n] += primeNumbers[n] + primeNumbers[n];
          }
          if (multiples[n] == currentNumber) {
            isPrime = false;
          }
        }
      } while (!isPrime);
      primeCount++;
      primeNumbers[primeCount] = currentNumber;
    }
    return primeNumbers;
  }

  static displayPrimeNumbers(primeNumbers, rowsPerPage, colomnsPerPage) {
    let pageNumber = 1;
    let pageOffset = 1;
    let rowOffset = 0;
    const totalPrimeNumbers = primeNumbers.length -1;

    while (pageOffset <= totalPrimeNumbers) {
      console.log("Page ", pageNumber);
      for (
        rowOffset = pageOffset;
        rowOffset <= pageOffset + rowsPerPage - 1;
        rowOffset++
      ) {
        let aux = [];
        for (let column = 0; column <= colomnsPerPage - 1; column++) {
          if (rowOffset + column * rowsPerPage <= totalPrimeNumbers) {
              aux.push(primeNumbers[rowOffset + column * rowsPerPage]);
          }
        }
        console.log(aux.join('|'));
      }
      pageNumber++;
      pageOffset += rowsPerPage * colomnsPerPage;
    }
  }

  static main() {
    const QUANTITY_OF_PRIME_NUMBERS_TO_SHOW = 1000;
    const ROWS_PER_PAGE = 50;
    const COLUMNS_PER_PAGE = 4;

    const primes = this.getPrimes(QUANTITY_OF_PRIME_NUMBERS_TO_SHOW);
    this.displayPrimeNumbers(primes, ROWS_PER_PAGE, COLUMNS_PER_PAGE);
  }
}

primeNumbersSelect.main();
