const clearBtn = document.querySelector("[data-form-clear]");

clearBtn.addEventListener("click", () => {
    const name = document.querySelector("[data-form-name]");
    const price = document.querySelector("[data-form-price]");
    const image = document.querySelector("[data-form-image]");
    const saveButton = document.querySelector(".submit__btn");
    const message = document.querySelector(".message"); // Usando const

    name.value = "";
    price.value = "";
    image.value = "";
    saveButton.disabled = true;
    message.textContent = "";
});
