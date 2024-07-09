import { connectApi } from "./connectApi.js";
const message = document.querySelector(".message");

async function deleteProduct(productId) {
    try {
        await connectApi.deleteProduct(productId);
        message.textContent = "Produto excluído com sucesso!";
        setTimeout(() => {
            message.textContent = "";
        }, 3000);
    } catch (error) {
        console.error("Erro ao excluir produto:", error);
        message.textContent = "Erro ao excluir produto. Verifique o console para mais detalhes.";
    }

    window.location.reload(true);
}

export { deleteProduct };