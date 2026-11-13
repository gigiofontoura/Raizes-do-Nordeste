const botao = document.getElementById("fidelidade_botao");
const beneficios = document.getElementById("beneficios");
 
botao.addEventListener("click", function() {
    beneficios.classList.toggle("mostrar");
});