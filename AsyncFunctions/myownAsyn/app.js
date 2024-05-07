let pro = new Promise((resolve,reject) => {
    const mats = 1+1
    if (mats == 2){
        resolve("ur done")
}
else{
    reject(" failed")
}
})
pro.then((data)=>{
    console.log("u re on the then" + data);
}).catch((data)=>{
    console.log(" ur on the catch" + data)
})




