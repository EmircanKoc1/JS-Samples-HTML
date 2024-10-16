const promise = new Promise((resolve, reject) => {

    const success = true;

    if (success) {
        resolve("İşlem başarılı");
    }
    else {
        reject("İşlem başarısız");
    }


});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("promise bitti");
    })


const apiUrl = "https://pokeapi.co/api/v2/pokemon/ditto";

fetch(apiUrl, {
    method: "GET"
})
    .then((response) => {
        console.log(response);
    })
    .catch(error => {
        console.log(error)
    });

