console.log("Promice 5 : OK")

const delay = (ms) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => resolve({name: "Eminem"}), ms)
    })
}

const fetchALotOfThings = async () => {
    // await delay(3000);
    // await delay(1000);
    // await delay(2000);
    // console.log("fetchALotOfThings - OK")

    await Promise.all([
        delay(3000),
        delay(1000),
        delay(2000)
    ]);
    console.log("fetchALotOfThings - OK")
}

fetchALotOfThings()