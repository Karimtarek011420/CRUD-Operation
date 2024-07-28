var productNameInput= document.getElementById("exampleFormControlInput1")
var productPriceInput= document.getElementById("exampleFormControlInput2")
var productCategoryInput= document.getElementById("exampleFormControlInput3")
var productDescriptionInput= document.getElementById("exampleFormControlTextarea1")
var Allproducts=[];
var addBtn =  document.getElementById("addBtn");
var uploadBtn = document.getElementById("uploadBtn");
if (localStorage.getItem("allproducts") != null) {
    Allproducts = JSON.parse(localStorage.getItem("allproducts"));
    displayProducts();
}

function getProducts() {
    var errreagex= valideProduct()
    if (errreagex==true) {
        
        var product ={
            name:productNameInput.value,
            price:productPriceInput.value,
            Category:productCategoryInput.value,
            Description:productDescriptionInput.value
        };
        Allproducts.push(product);
        console.log(Allproducts);
        localStorage.setItem("allproducts",JSON.stringify(Allproducts)) ;
        displayProducts();
        // addBtn.classList.replace("d-none","d-block");
        // uploadBtn.classList.replace("d-block","d-none")
        clearProducts();
    } else {
        alert(errreagex)
    }

} 
function clearProducts() {
    productNameInput.value="";
    productPriceInput.value= "";
    productCategoryInput.value="";
    productDescriptionInput.value="";  
}
function displayProducts() {
    var box = "";
    for (let i = 0; i <Allproducts.length; i++) {
        box = box +`<tr>
        <td data-title="Name">${Allproducts[i].name}</td>
        <td data-title="Price">${Allproducts[i].price}</td>
        <td data-title="Category">${Allproducts[i].Category}</td>
        <td data-title="Description">${Allproducts[i].Description}</td>
        <td data-title="Delete">
        <button onclick="deleteProduct(${i})" type="button" class="btn btn-outline-danger">Delete</button>
        </td>
        <td data-title="UPload">
        <button onclick="uploadProduct(${i})" type="button" class="btn btn-outline-info">Upload</button>
        </td>
        </tr>`  
    } 
    document.getElementById("bodyproduct").innerHTML=box;
}
function deleteProduct(index) {
    Allproducts.splice(index,1);
    localStorage.setItem("allproducts",JSON.stringify(Allproducts)) ; 
    displayProducts();
}
function uploadProduct(i) {
    addBtn.classList.replace("d-block","d-none");
    uploadBtn.classList.remove("d-none")
    productNameInput.value= Allproducts[i].name;
    productPriceInput.value= Allproducts[i].price;
    productCategoryInput.value= Allproducts[i].Category;
    productDescriptionInput.value= Allproducts[i].Description;
    
}

function bottun() {
    uploadBtn.classList.add("d-none")
    addBtn.classList.replace("d-none","d-block");
    getProducts( )
}
function searchProducts(trem) {
    var box ="";
    for (let i = 0; i < Allproducts.length; i++) {
        if (Allproducts[i].name.toLowerCase().includes(trem.toLowerCase())== true) {
          box  = box + `<tr>
        <td data-title="Name">${Allproducts[i].name}</td>
        <td data-title="Price">${Allproducts[i].price}</td>
        <td data-title="Category">${Allproducts[i].Category}</td>
        <td data-title="Description">${Allproducts[i].Description}</td>
        <td data-title="Delete">
        <button onclick="deleteProduct(${i})" type="button" class="btn btn-outline-danger">Delete</button>
        </td>
        <td data-title="UPload">
        <button onclick="uploadProduct(${i})" type="button" class="btn btn-outline-info">Upload</button>
        </td>
        </tr>`  
               
        }   
    }
    document.getElementById("bodyproduct").innerHTML=box;
    
}

function valideProduct() {
    var regexname= /^[A-Z][a-z]{4,7}$/;
    var regexprice= /^[0-9]{1,4}$/;
    var regexcategory= /^[A-Z][a-z]{4,7}$/;
    var regexdescription= /^[A-Z][a-z]{4,7}$/;
if (!regexname.test(productNameInput.value)== true) {
            return "Name must be the first capital letter and seven letters after it";

}else if (!regexprice.test(productPriceInput.value)==true) {
    return "price isnot Valid";

    
}else if (!regexcategory.test(productCategoryInput.value) == true) {
    return "category must be the first capital letter and seven letters after it";

    
} else if (!regexdescription.test(productDescriptionInput.value)== true) {
    return "description must be the first capital letter and seven letters after it";
} 
return true;
}




