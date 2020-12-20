const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

sleep(2000).then(() => console.log("After 2 sec"))
sleep(3000).then(() => console.log("After 3 sec"))
sleep(1000).then(() => console.log("After 1 sec"))
console.log("qqqq")

// після всіх промісів
Promise.all([sleep(3000), sleep(2000),sleep(1000)])
    .then(() => console.log("Finished"))

// після 1 промісу
Promise.race([sleep(3000), Promise.reject(), sleep(2000),sleep(1000)])
    .then(() => console.log("FFF"))