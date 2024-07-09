import { connectApi } from "./connectApi.js";

const form = document.querySelector("[data-form]");
const message = document.querySelector(".message"); 

async function createProduct(event) {
    event.preventDefault();

    const name = document.querySelector("[data-form-name]").value;
    const price = document.querySelector("[data-form-price]").value;
    const image = document.querySelector("[data-form-image]").value;
    try {
        await connectApi.buildProduct(name, price, image);
        message.textContent = "Produto criado com sucesso!";
        setTimeout(() => {
            message.textContent = "";
        }, 3000);
    } catch (error) {
        console.error("Erro ao criar produto:", error);
        message.textContent = "Erro ao criar produto. Verifique o console para mais detalhes.";
    }

    window.location.reload(true);
}

form.addEventListener("submit", event => createProduct(event));