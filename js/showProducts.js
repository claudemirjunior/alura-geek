import { connectApi } from "./connectApi.js";
import { deleteProduct } from "./deleteProduct.js";

const products = document.querySelector("[data-products]");

function buildCard(name, price, image, id) {
    const card = document.createElement("div");
    card.className = "product__card";
    card.innerHTML = `
        <div class="product__card__top">
            <img src="${image}" alt="${name}">
            <h3>${name}</h3>
        </div>
        <div class="product__card__bottom">
            <p>R$ ${price}</p>
            <button class="product__card__delete" data-product-id="${id}"><img src="/trash.svg" alt="icone de lixeira"></button>
        </div>
    `;

    card.querySelector(".product__card__delete").addEventListener("click", () => deleteProduct(id));

    return card;
}

async function listProducts() {
    try {
        const listApi = await connectApi.listProducts();

        if (listApi.length > 0) {
            listApi.forEach(element => {
                products.appendChild(buildCard(element.nome, element.preco, element.imagem, element.id));
            });
        } else {
            products.innerHTML = `<h1 class="no__product">Nenhum produto cadastrado</h1>`;
        }
    } catch (error) {
        products.innerHTML = `<h1 class="no__product">Não foi possível carregar os produtos</h1>`;
        console.error("Erro ao listar produtos:", error);
    }
}

listProducts();