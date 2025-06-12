const addBtn = document.getElementById("addBtn");
const formArea = document.getElementById("formArea");

addBtn.addEventListener("click", () => {
    // Se o formulário já está visível, não faz nada
    if (formArea.style.display === "block") return;
    
    // Criação do formulário
    formArea.innerHTML = `
        <p>Como está se sentindo?</p>
        <input type="text" class="input-form" placeholder="Pressione Enter para salvar">
    `;
    
    formArea.style.display = "block";
    const input = formArea.querySelector('input');
    input.focus();
    
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && input.value.trim() !== "") {
            // Aqui você pode adicionar a lógica para salvar o texto se necessário
            console.log("Texto salvo:", input.value);
            
            // Limpa e esconde o formulário
            input.value = "";
            formArea.style.display = "none";
        }
    });
});