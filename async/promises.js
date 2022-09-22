//promises
// .then()
const myPromise = newPromise((resolve, reject) => {
    const random = Math.floor(Math.random() * 2);
    if (random ===0) {
        resolve()
    } else {
        reject()
    }
});

myPromise
    .then(() => console.log('success'))
    .catch((error) => console.log(error))

//fetch API
//fetch(url)
    //.then((data => data.json()))
    //get the JSON out of the promise which returns a promise
    //.then(data => console.log(data))
    //.catch(err => console.log(err))


//Async / await
async function getData() {
    try {
        const response = await fetch('url')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
