function iqTest(numbers){
    let counterE=0;
    let indexE=0;
    let indexO=0;

    numbers= numbers.split(' ');
    for (let i=0; i< numbers.length; i++){
        numbers[i] % 2===0 ? (counterE++, indexE=i): indexO=i;
    }
    return counterE ===1 ? indexE+1 : indexO+1;
  }