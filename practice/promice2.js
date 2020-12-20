console.log("Promise 2")

const p = new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log(".....")

        const externalData = {
            server: "My server",
            port: 1234,
            status: "working",
        };

        resolve(externalData);
        //reject(externalData);
    }, 3000);
})
    .then((data) => {
        data.isModidied = true;
        return data
    })
    .then((data) => {
        data.isModidiedAgain = "yes";
        return data
    })
    .catch(err => console.log("EEEEEEEE: ", err))
    .then((finalData) => {
        console.log("Final Data:", finalData);

        throw new Error("@@@@")
    }).catch(err => {
        console.log("Eroooor: ", err)
        throw new Error("$$$$$$$")
    }).catch(console.error)
    .finally(() => console.log("Finaly"))
