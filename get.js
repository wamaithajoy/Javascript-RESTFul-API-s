// const response = await fetch('/products');
// async function loadNames() {
//     const response = await fetch('/products/fruits/vegetables');
//     const names = await response.json();
//     console.log(names); 
// }

var getProducts= document.getElementById("products")
getProducts.fetch('/products',{
    method:'GET'
}
)

var getFruits= document.getElementById("fruits")
getFruits.fetch('/products/fruits',{
    method:'GET'
}
)

var getVegetable= document.getElementById("vegetables")
getVegetables.fetch('/products/vegetables',{
    method:'GET'
}
)

