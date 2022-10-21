let num=5;
let isPrime="Yes";
for(let i=2;i<num;i++){
	if(num%i==0){
		isPrime="No";
	}
}
console.log(isPrime);