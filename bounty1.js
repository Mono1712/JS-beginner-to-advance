let sum = 0;

for ( let i = 0 ; i < 1000000000000 ; i++){
    sum = sum + i ;
}

console.log(sum);

//Question - 1 core should be fully utilized , why it is not ?
//Answer - IOS htop makes it nearly 99% utilized .