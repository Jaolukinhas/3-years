// Parte 1
const botao = document.getElementById("botaoamor");
const efeito = document.getElementById("efeitocoracoes");

botao.addEventListener("click", () => {
  for (let i = 0; i < 30; i++) criarCoracao();

  setTimeout(() => {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("amor").style.display = "block";
  }, 3000);
});

function criarCoracao() {
  const coracao = document.createElement("div");
  coracao.classList.add("coracao");
  coracao.style.left = Math.random() * 100 + "vw";
  coracao.style.animationDuration = Math.random() * 2 + 3 + "s";
  coracao.innerText = "💜";
  efeito.appendChild(coracao);
  setTimeout(() => coracao.remove(), 5000);
}

// Parte 2 - Amorômetro
const botaoamormetro = document.getElementById("botaoamormetro");
const porcentagemTexto = document.getElementById("porcentagem-texto");
const barra = document.getElementById("barra");
let porcentagemamor = 0;

botaoamormetro.addEventListener("click", () => {
  if (porcentagemamor < 100) {
    porcentagemamor += 10;
    barra.style.width = porcentagemamor + "%";
    porcentagemTexto.textContent = porcentagemamor + "%";
  }

  // Subir corações roxos ao atingir 100%
  if (porcentagemamor >= 100) {
    for (let i = 0; i < 30; i++) criarCoracao();

    setTimeout(() => {
      document.getElementById("amor").style.display = "none";
      document.getElementById("quiz").style.display = "block";
      mostrarPergunta();
    }, 1000);
  }
});

// Parte 3 - Quiz
const perguntas = [
  {
    pergunta: "Onde nos vimos pela primeira vez?",
    respostas: ["No parque", "No cinema", "Aniversário", "No shopping"],
    correta: 2,
  },
  {
    pergunta: "Qual a nossa comida favorita juntos?",
    respostas: ["Pizza", "Sushi", "Hambúrguer", "Lasanha"],
    correta: 0,
  },
  {
    pergunta: "Qual o mês que começamos a namorar?",
    respostas: ["Janeiro", "Março", "Agosto", "Abril"],
    correta: 3,
  },
  {
    pergunta: "Qual a cor da sua blusa no nosso primeiro beijo?",
    respostas: ["Vermelha", "Rosa", "Preta", "Roxo"],
    correta: 1,
  },
  {
    pergunta: "E a cor da minha?",
    respostas: ["Vermelho", "Lilás", "Branco", "Preto"],
    correta: 2,
  },
  {
    pergunta: "O que eu mais amo em você?",
    respostas: ["Olhos", "Coxas", "Inteligência", "Tudo isso e muito +"],
    correta: 3,
  },
  {
    pergunta: "Qual foi o primeiro filme que assistimos juntos?",
    respostas: ["Homem Aranha", "Batman", "Sonic", "Uma noite de crime"],
    correta: 0,
  },
  {
    pergunta: "Quem disse 'Eu te amo' primeiro?",
    respostas: ["Lucas", "Lívia", "Nós dois", "Ninguém"],
    correta: 1,
  },
  {
    pergunta: "Qual dessas músicas é a nossa cara?",
    respostas: ["BB", "Easy", "Entre Nós", "Todas as anteriores"],
    correta: 3,
  },
];

let perguntaAtual = 0;

function mostrarPergunta() {
  const p = perguntas[perguntaAtual];
  const divPergunta = document.getElementById("pergunta");
  const divRespostas = document.getElementById("respostas");

  divPergunta.innerText = p.pergunta;
  divRespostas.innerHTML = "";

  p.respostas.forEach((resp, index) => {
    const btn = document.createElement("button");
    btn.innerText = resp;
    btn.onclick = () => verificarResposta(btn, index, p.correta);
    divRespostas.appendChild(btn);
  });
}

function verificarResposta(botao, index, correta) {
  if (index === correta) {
    botao.classList.add("correta");
    for (let i = 0; i < 10; i++) criarCoracao(); // Adiciona corações roxos após resposta correta
    setTimeout(() => {
      perguntaAtual++;
      if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
      } else {
        mostrarMensagemFinal();
      }
    }, 800);
  } else {
    botao.classList.add("errada");
  }
}

function mostrarMensagemFinal() {
  document.getElementById("quiz").innerHTML = `
    <h2>Você arrasou! 💕</h2>
    <p>Vamos para a última parte...</p>
  `;
  setTimeout(() => {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("final").style.display = "flex";
  }, 3000);
}

// Parte 4 - Contador
// Definindo a data de início do namoro (14/04/2022)
var dataInicio = new Date("2022-04-14");

// Função que calcula o tempo real e atualiza o contador
function atualizarContador() {
  var dataHoje = new Date();
  
  // Calculando a diferença em milissegundos
  var diff = dataHoje - dataInicio;

  // Calculando anos, meses e dias
  var anos = dataHoje.getFullYear() - dataInicio.getFullYear();
  var meses = dataHoje.getMonth() - dataInicio.getMonth();
  if (meses < 0) {
    anos--;
    meses += 12;
  }
  
  // Calcular os dias do mês atual
  var diasDoMes = dataHoje.getDate() - dataInicio.getDate();
  if (diasDoMes < 0) {
    diasDoMes += new Date(dataHoje.getFullYear(), dataHoje.getMonth(), 0).getDate();
  }

  var diasTotais = Math.floor(diff / (1000 * 60 * 60 * 24)); // Total de dias

  // Calculando horas, minutos e segundos
  var horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((diff % (1000 * 60)) / 1000);

  // Atualizando o contador na página
  document.getElementById("tempo").innerHTML = `
    Eu te amo há ${anos} anos, ${meses} meses, ${diasDoMes} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos
  `;
  document.getElementById("diasTotais").innerHTML = `Juntos há ${diasTotais} dias!`;
}

// Atualizando o contador de tempo real a cada 1 segundo
setInterval(atualizarContador, 1000);


// Alternando as fotos com transição
let fotos = document.querySelectorAll('.fotos img');
let indiceAtual = 0;

function alternarFotos() {
  fotos.forEach((foto, index) => {
    foto.classList.remove('ativo');
    if (index === indiceAtual) {
      foto.classList.add('ativo');
    }
  });
  indiceAtual = (indiceAtual + 1) % fotos.length; // Loop infinito de fotos
}

setInterval(alternarFotos, 3000); // Alterna as fotos a cada 3 segundos

// Efeito de Fade-in no texto ao rolar para baixo
const textos = document.querySelectorAll('.texto');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('aparecer');
    } else {
      entry.target.classList.remove('aparecer');
    }
  });
}, { threshold: 0.5 }); // A animação será ativada quando 50% do texto estiver visível

textos.forEach(texto => {
  observer.observe(texto);
});
