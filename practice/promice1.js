console.log("JS: OK")

const p = new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log(".....")

        const externalData = {
            server: "My server",
            port: 1234,
            status: "working",
        };

        resolve(externalData);
    }, 3000);
});

p.then(data => console.log(data))
console.log("123123")

p.then(data => {
    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            data.players = 42;

            resolve(data);
        }, 3000);
    });
    // p2.then((data) => {
    //     console.log("Server info received:", data);
    // })
    return p2;

})
    .then((data) => console.log("Server info received:", data))
    .then(() => console.log("DONE!"))
    .then(() => console.log("DONE!"))
    .then(() => console.log("DONE!"))