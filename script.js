const apiKey = 'a60fa55cb3d341dd95d140431240303';



const query = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=London` ;



fetch(query).then((response) => {
    return response.json()
}).then((data) => {
    console.log (data);
})
