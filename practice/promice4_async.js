console.log("Promice 4 : OK")

const delay = (ms) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => reject({name: "Eminem"}), ms)
    })
}

const fetchSomeData = async () => {
    try {
        const data = await delay(2000);

        console.log("Your data: ", data);

        console.log("Fetching is Finished!!!");

        return {status: "Success"}
    } catch (err) {
        console.log("Error: ", err)     // --> Error:  {name: "Eminem"}
    }
}

fetchSomeData();
