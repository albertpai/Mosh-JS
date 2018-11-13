// Show the properties of an object where values are strings.

const movie = {
    title: 'Lion King',
    year: 2018,
    rate: 5,
    location: 'London'
}

function showProperties(obj) {
    for (let key in obj)
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
}

showProperties(movie);