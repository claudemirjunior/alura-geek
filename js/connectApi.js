async function listProducts() {
    try {
        const response = await fetch("http://localhost:3000/produtos");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erro ao listar produtos:", error);
        throw error;
    }
}

async function buildProduct(name, price, image) {
    try {
        const formattedPrice = formatPrice(price);
        const response = await fetch("http://localhost:3000/products", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                nome: name,
                preco: formattedPrice,
                imagem: image
            })
        });
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erro ao construir produto:", error);
        throw error;
    }
}

async function deleteProduct(productId) {
    try {
        const response = await fetch(`http://localhost:3000/products/${productId}`, {
            method: "DELETE",
        });
        console.log(response.status); 
    } catch (error) {
        console.error("Erro ao deletar produto:", error);
        throw error;
    }
}

function formatPrice(price) {
    const floatPrice = parseFloat(price).toFixed(2);
    return floatPrice.toString().replace('.', ',');
}

export const connectApi = {
    listProducts,
    buildProduct,
    deleteProduct
}