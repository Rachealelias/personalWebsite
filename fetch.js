fetch ('http://localhost:3000/products')
.then(resp => resp.json())
.then(data => {
    //console.log(data)
    data.forEach(productToDom)   
})
