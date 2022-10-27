function getSum(...numbers: number[]) : number {
  // if (!numbers.length) return 0;
  return numbers.reduce((total, num) => total + num, 0);
}

export default getSum;
