const atributos = ["Força", "Destreza", "Inteligência", "Carisma"];
const form = document.getElementById("formFicha");
const resultado = document.getElementById("resultado");
form.addEventListener("submit", function (evento) {
    evento.preventDefault(); 
const nome = document.getElementById("nome").value.trim();
const classe = document.getElementById("classe").value;
    if (nome === "") {
        resultado.textContent = "digite um nome para o personagem.";
        return;
    }
    const personagem = { nome: nome, classe: classe, atributos: {} };
    for (let i = 0; i < atributos.length; i++) {
        personagem.atributos[atributos[i]] = Math.floor(Math.random() * 20) + 1;
    }
    mostrar(personagem);
});
function mostrar(p) {
    resultado.innerHTML = "";

    const titulo = document.createElement("h3");
    titulo.textContent = p.nome + " - " + p.classe;
    resultado.appendChild(titulo);

    const lista = document.createElement("ul");
    for (const chave in p.atributos) {
        const item = document.createElement("li");
        item.textContent = chave + ": " + p.atributos[chave];
        lista.appendChild(item);
    }
    resultado.appendChild(lista);
}
