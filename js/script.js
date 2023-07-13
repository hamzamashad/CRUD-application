var pNameTag = document.getElementById('pNameId'),
pPriceTag = document.getElementById('pPriceId'),
pCatTag = document.getElementById('pCatId'),
pDescTag = document.getElementById('pDescId');
var products; // array to store products


function addProduct() {
    if (pNameTag.value == "") {
        window.alert("Please insert product name.")
    } else {
        var newProduct = {
            pName: pNameTag.value,
            pPrice: pPriceTag.value,
            pCat: pCatTag.value,
            pDesc: pDescTag.value,
        }
        products.push(newProduct);
        localStorage.setItem('ourItems', JSON.stringify(products));  // push array to browser's local storage
        displayProducts();
        clearInputs();
    }
}

function displayProducts() {
    var dispText = ``;
    for (var i=0; i < products.length; i++) {
        var product = products[i];
        dispText += `
            <tr>
                <td>${i}</td>
                <td>${product.pName}</td>
                <td>${product.pPrice}</td>
                <td>${product.pCat}</td>
                <td>${product.pDesc}</td>
                <td>
                    <button class="btn btn-outline-warning">Update</button>
                </td>
                <td>
                    <button onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button>
                </td>
            </tr>
        `
    }
    document.getElementById('productsArea').innerHTML = dispText;
}

function deleteProduct(i) {
    products.splice(i, 1);
    localStorage.setItem('ourItems', JSON.stringify(products));  // push array to browser's local storage
    displayProducts();
}

function clearInputs() {
    pNameTag.value = '';
    pPriceTag.value = '';
    pCatTag.value = '';
    pDescTag.value = '';
}


if (localStorage.getItem('ourItems') == null) {
    products = [];
} else {
    products = JSON.parse(localStorage.getItem('ourItems'));  // pull array from browser's local sotrage
    displayProducts();
}