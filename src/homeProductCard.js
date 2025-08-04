const productContainer = document.querySelector("#productContainer")
const porductTemplate = document.querySelector("#productTemplate")


export const showProductContainer = (products) =>{
    if(!products){
        return false;
    }

    products.forEach((curProd)=>{

        // destructuring the element
        const {brand, category,id, image,name, price, stock, description } = 
        curProd;

        // completely clone the html content of the template
        const productClone = document.importNode(porductTemplate.content, true);

        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productImage").alt = name;
        productClone.querySelector(".productStock").textContent = stock;
        productClone.querySelector(".productDescription").textContent = description;
        productClone.querySelector(".productPrice").textContent=`₹${price}`;
        productClone.querySelector(".productActualPrice").textContent=`₹${price}`;

        productContainer.append(productClone);

    })
}