const abrirTermos = document.getElementById("abrir_termos");
const fecharTermos = document.getElementById("fechar_termos");
const janelaTermos = document.getElementById("janela_termos");

abrirTermos.addEventListener("click", function() {
    janelaTermos.showModal();
});

fecharTermos.addEventListener("click", function() {
    janelaTermos.close();
});