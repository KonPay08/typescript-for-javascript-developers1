export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number, 
  weight: number,
  printable?: boolean
): number => {
  const bmi = weight / (height * height); 
  if(printable) {
    console.log(bmi);
  }
  return bmi;
}

bmi(1.80, 62, true);