const searchForm = document.getElementById('search-form')
const inputSearch = document.getElementById('input-search')
const container = document.getElementById('container')

searchForm.addEventListener('submit', submitSearch)

function submitSearch(e) { // The form was submitted
    e.preventDefault()
    const query = inputSearch.value // Get the value input in the search input
    fetchData(query)
}

function fetchData(search = 'cats') {
    const api = 'JnsKtXv2tqTzPqf7fbqC07uixMeecLxo'
    const path = `https://api.giphy.com/v1/gifs/search?api_key=${api}&q=${search}`
    console.log(path)
    fetch(path)
        .then(function(res) { return res.json() })
        .then(function(json) { handleData(json) }) //json data
        .catch(function(err) { console.log(err.message) })
} 

function handleData(json) { // get the data array
    console.log(json) //test
    const data = json.data
    let htmlStr = '' // Define a string to hold some html
    for (let i = 0; i < data.length; i += 1) { // Loop over the array
        const image = data[i].images.fixed_height_small // get the url to an image - we'll use the fixed_width_small
        const src = image.url // Get the src, width, and height
        const width = image.width // Get the src, width, and height
        const height = image.height // Get the src, width, and height
        htmlStr += `<img src="${src}" width="${width}" height="${height}">` // add img tags to the htmlStr
    }

    // Set the innHTML of ID #container
    container.innerHTML = htmlStr
}