const container = document.querySelector('.container');
fetch ('http://localhost:3000/products')
.then(resp => resp.json())
.then(data => {
    //console.log(data)
    data.forEach(product)   
})

function product(data){
    const productContainer = document.createElement('div')
    productContainer.className = 'product-container'
    const image = document.createElement('img')
    const titles = document.createElement('p')
    titles.className = 'product-title'
    titles.innerText = data.title
    const categories = document.createElement('p')
    categories.innerText = data.category
    categories.className= 'product-cat'
    const likeButton = document.createElement('button')

    const like = '👍'
    const dislike = '👎'
    likeButton.innerHTML = data.like ? like : dislike

    image.src = data.image

    likeButton.addEventListener('click', (evt) => {
        likeButton.innerHTML = likeButton.innerHTML === like ? dislike : like
    })
    productContainer.append(image, titles, categories, likeButton)
    container.append(productContainer)

    image.style.height = 400
    image.style.width = 200
}