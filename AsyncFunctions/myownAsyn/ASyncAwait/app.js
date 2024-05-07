function makerRequest(location){
    return new Promise((resolve,reject) => 
{
    console.log(`Making Request to ${location}`)
    if (location == 'Google')
    {
        resolve('Google Say hi')
    }
    else{
        reject ('We can only talk to Google')
    }
})
}
function processrequest(response)
{
    return new Promise ((resolve , reject) => {
        console.log("processising response")
        resolve(`Extra Information   + ${response}`)
    })
}
// makerRequest("Facebook").then(response =>
// {
//     console.log('Response Recieved')
//     return processrequest(response)
// }).then(processResponse =>
// {
//     console.log(processResponse)
// }).catch(error => {
//     console.log(error)
// })

// so when one promise is finshed the other one is continuing so 
// when this happen we write .then .then to much times so we can fix
// this using Asyc Await 
async function dowork()
{
    try{
        const response  = await makerRequest("Google");
        console.log('Response Recieved')
        const processResponse = await processrequest(response);
        console.log(processResponse)
    }
    catch(error)
    {
     console.log(error)
    }
}

dowork() //  this one .then mintekem bihon noro call ayderegn