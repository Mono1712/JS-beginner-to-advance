const allusers = [{
    firstname:"vedant",
    gender:"male"
},{
    firstname:"atharva" ,
    gender:"male"
},{
    firstname:"yash" ,
    gender:"female"
}]
for( let i = 0 ; i < allusers.length ; i++){
    if(allusers[i]["gender"]=="male"){
        console.log(allusers[i]["firstname"]);
    }
}