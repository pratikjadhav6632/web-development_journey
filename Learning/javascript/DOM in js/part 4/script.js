// Call satck
function one() {
    return 1;
}

function two() {
    return (one() + one());
}

function three() {
    let ans = two() + one();
    console.log(ans);
}
three();
console.log(two());
console.log(one());

//Promises

function saveDB(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("Success:Data savd ");
        } else {
            reject("Weak network connection");
        }
    });
}

console.log(saveDB("Apnna college"));

//.then()&.catch()
saveDB("apna collge2")
    .then(() => {
        console.log("promise was resolved");
    })
    .catch(() => {
        console.log("promise was rejected");
    });

//promise chaining

saveDB("DEMO data 1")
    .then(() => {
        console.log("Data 1 saved");
        return saveDB("DEMO data 2");
    })
    .then(() => {
        console.log("Data 2 saved");
        return saveDB("DEMO data 3");
    })
    .then(() => {
        console.log("Data 3 saved");
    })
    .catch(() => {
        console.log("Promise was rejected");
    });


//reject and resolve

saveDB("data 1 save")
    .then((result) => {
        console.log("Data 2 saved");
        console.log("prommises result", result);
    })
    .then((result) => {
        console.log("Data 3 saved");
        console.log("promises result:", result);
    })
    .catch((error) => {
        console.log("Weak connection ");
        console.log("Promises error:", error);
    });

    