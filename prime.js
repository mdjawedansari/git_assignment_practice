function prime(num){
let count=0;
for(let i=1;i<=num;i++){
    if(num%i===0){
	count++;
    }
}
if(count){
    console.log("Prime");
}else{
    console.log("Not Prime");
}
}
prime(11);