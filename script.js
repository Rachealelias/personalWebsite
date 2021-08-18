const container = document.querySelector('.container');

function productToDom(data){
    const productContainer = document.createElement('div')
    productContainer.className = 'product-container'
    const image = document.createElement('img')

    const titles = document.createElement('p')
    titles.className = 'product-title'
   
    const categories = document.createElement('p')
    categories.className= 'product-cat'
    
   const likeButton = document.createElement('button')
   const like = '👍'
   const dislike = '👎'
   likeButton.innerHTML = data.like ? like : dislike
   
   const removeButton = document.createElement('button')
    removeButton.innerText = 'remove'
    

    image.src = data.image
    image.style.height = 400
    image.style.width = 200
    
    titles.innerText = data.title
    categories.innerText = data.category
    

    likeButton.addEventListener('click', (evt) => {
        evt.stopPropagation()
        likeButton.innerHTML = likeButton.innerHTML === like ? dislike : like
    })

    removeButton.addEventListener('click', (e) =>{
        e.stopPropagation()
        productContainer.remove()
    })

   productContainer.append(image, titles, categories, likeButton, removeButton)
    container.append(productContainer)

   

    productContainer.addEventListener('click', () =>{  
     container.innerHTML = ''
     const div = document.createElement('div')
     div.className = 'display'
     const img = document.createElement('img')
     const descriptions = document.createElement('p')
        
     img.src = data.image
     descriptions.innerHTML = data.description
     descriptions.className = 'product desp'
     div.append(img, descriptions)
     container.append(div)
        
    })


}