setInterval(() => {
    // json request to https://api.thecatapi.com/v1/images/search
    // get the first image
    // set the favicon to the image
    
    const json = fetch("https://api.thecatapi.com/v1/images/search")
    json.then(data => {
        return data.json()
    }).then(data => {
        const img = data[0].url
        const favicon = document.querySelector("link[rel*='icon']")
        favicon.href = img
    }).catch(err => {
        console.log(err)
    });
}, 2500)