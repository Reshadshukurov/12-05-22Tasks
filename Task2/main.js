function fibonacci(num){
    let sum;
    let num1=0;
    let num2=1;
    for (let index = 0; index < num; index++) {
    sum=num1+num2;
    num1=num2;
    num2=sum;        
    }
    return num2;
}
console.log(fibonacci(7));