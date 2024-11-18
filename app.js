const numbers = [
    3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18,
  ];

  let primeArray=[];
//getting/storing the array of primes
  for(i=0;i<numbers.length;i++){
    if(isPrime(numbers[i])){
        primeArray.push(numbers[i]);
    }
  }console.log(primeArray);

  
// function to check for prime
  function isPrime(n){
    let count=0;
    for(j=1;j<=numbers.length;j++){
        if(n%j==0){
            count++;
        }
    }if(count==2){
        return true;
    }else{
        return false;
    }
    }
// getting the maximum, minimum and sum among the primeArray numbers
  let maximum=-1;
  let minimum=9999;
  let sum=0;

  for(k=0;k<primeArray.length;k++){
    sum+=primeArray[k];
    if(primeArray[k]>maximum){
        maximum=primeArray[k];
    }else if(primeArray[k]<minimum){
        minimum=primeArray[k];
    }
  }console.log(maximum,minimum,sum);