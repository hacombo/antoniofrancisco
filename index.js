  // Referências dos elementos
var modal = document.getElementById("modalEquipa");
var btn = document.getElementById("btnEquipa");
var span = document.getElementById("fecharModal");

// Abrir modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Fechar modal no X
span.onclick = function() {
    modal.style.display = "none";
}

// Fechar ao clicar fora da modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}