const curiosidades = [
    "O céu é azul.",                                                                                 
    "Sabia que a maioria dos salgadinhos vem cheia de gás (nitrogênio) pra manter a crocância e não esmagar?",
    "O RPG de mesa moderno nasceu com Dungeons & Dragons, em 1974.",                                   
    "O dado de 20 lados (d20) é o símbolo do D&D.",                                                   
    "Sabia que Domina, em latim, significa senhora, a dona da casa?",                             
    "Bananas são levemente radioativas (e totalmente inofensivas).",                                   
    "Os dados mais antigos conhecidos têm mais de  2 mil anos.",                                        
    "A luz do Sol leva cerca de 8 minutos pra chegar até a Terra.",                                    
    "Polvos têm três corações.",                                                                       
    "Se você colocar sal, óleo e água em copos diferentes, cada um terá uma densidade diferente.", 
    "Os tubarões existem há mais tempo que as árvores.",                                               
    "Um dia em Vênus é mais longo que um ano em Vênus.",                                               
    "O mel nunca estraga: já acharam mel comestível em tumbas egípcias.",                              
    "Existem mais estrelas no universo do que grãos de areia na Terra.",                              
    "Existem cores que você nunca vai ver: nossos olhos enxergam só uma faixa pequena da luz, e as abelhas veem cores que não existem pra nós.", 
    "Você nunca viu a sua própria cara de verdade, só reflexos e fotos.",                             
    "Todo átomo de carbono do seu corpo foi forjado dentro de uma estrela.",                           
    "Cada pessoa que você encontra está lutando uma batalha que você não vê.",                         
    "A felicidade não tem resposta pronta. Se tivesse, seria só mais uma tarefa mecânica que tentaríamos cumprir, em vez de buscar a nossa própria.", 
    "O mundo não é belo a não ser que vejas ele com suas próprias percepções e ações. Nem sempre o mundo é ideal, mas sempre terá nele algo que para ti será real."
];
const botao = document.createElement("button");
botao.id = "dado";
botao.textContent = "🎲";
botao.title = "rolar o dado!";
document.body.appendChild(botao);

botao.addEventListener("click", function () {
    botao.classList.add("rolando");
    setTimeout(function () {
        botao.classList.remove("rolando");
        const numero = Math.floor(Math.random() * 20) + 1; 
        alert(" Você tirou " + numero + "!\n\n" + curiosidades[numero - 1]);
    }, 600);
});