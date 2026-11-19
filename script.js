// Funcionalidade Interativa Extra: Simulador de Ligação
function avaliarSimulador(escolha) {
  const resposta = document.getElementById("resposta-simulador");
  
  if (escolha === "certo") {
    resposta.style.color = "#15803d";
    resposta.textContent = "✅ Parabéns! Atitude correta. Bancos nunca pedem instalação de aplicativos por telefone. Desligar e checar no app oficial evita o golpe.";
  } else if (escolha === "errado1") {
    resposta.style.color = "#dc2626";
    resposta.textContent = "❌ Cuidado! Ao instalar o aplicativo indicado, o criminoso ganha acesso remoto à sua tela ('mão fantasma') e limpa sua conta.";
  } else {
    resposta.style.color = "#d97706";
    resposta.textContent = "⚠️ Atenção! Nunca passe códigos recebidos por SMS ou aplicativo para atendentes, pois eles servem para autorizar acessos ou transações.";
  }
}

// Quiz Obrigatório com 5 Perguntas
const perguntasQuiz = [
  {
    pergunta: "1. O que caracteriza o golpe da 'mão fantasma'?",
    opcoes: [
      "Clonagem física do chip do celular na operadora",
      "Invasão por aplicativo de acesso remoto onde o golpista controla a tela à distância",
      "Envio de boleto falso impresso pelos Correios"
    ],
    correta: 1
  },
  {
    pergunta: "2. Qual é a principal abordagem usada pelos criminosos nesse golpe?",
    opcoes: [
      "Falsa central de atendimento do banco alertando sobre uma compra suspeita",
      "Oferta de emprego em redes sociais",
      "Sorteio de eletrodomésticos por e-mail"
    ],
    correta: 0
  },
  {
    pergunta: "3. O que você deve fazer se receber uma ligação dizendo que sua conta foi invadida?",
    opcoes: [
      "Instalar o aplicativo de suporte enviado por SMS pelo atendente",
      "Informar a senha do cartão para confirmar sua identidade",
      "Desligar a ligação e entrar em contato pelos canais oficiais do banco"
    ],
    correta: 2
  },
  {
    pergunta: "4. Qual cuidado de segurança da informação é obrigatório em computadores compartilhados do SENAI?",
    opcoes: [
      "Salvar suas senhas no navegador para facilitar o próximo acesso",
      "Fazer logout de todas as contas e bloquear a tela (Win+L) ao se afastar",
      "Deixar seus projetos salvos na Área de Trabalho pública"
    ],
    correta: 1
  },
  {
    pergunta: "5. Qual atitude ajuda na ergonomia e segurança física ao usar computadores?",
    opcoes: [
      "Manter garrafas abertas perto do teclado e cabos soltos no chão",
      "Ajustar cadeira e monitor na altura dos olhos e fazer pausas regulares",
      "Trabalhar inclinado para frente sem apoiar as costas"
    ],
    correta: 1
  }
];

function carregarQuiz() {
  const container = document.getElementById("quiz-container");
  perguntasQuiz.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "pergunta-item";
    
    let html = `<p>${item.pergunta}</p>`;
    item.opcoes.forEach((opcao, i) => {
      html += `
        <label>
          <input type="radio" name="pergunta${index}" value="${i}"> ${opcao}
        </label>
      `;
    });
    
    div.innerHTML = html;
    container.appendChild(div);
  });
}

function calcularResultado() {
  let acertos = 0;
  let respondidas = 0;

  perguntasQuiz.forEach((item, index) => {
    const selecionada = document.querySelector(`input[name="pergunta${index}"]:checked`);
    if (selecionada) {
      respondidas++;
      if (parseInt(selecionada.value) === item.correta) {
        acertos++;
      }
    }
  });

  const resultado = document.getElementById("resultado-quiz");
  if (respondidas < perguntasQuiz.length) {
    resultado.style.color = "#d97706";
    resultado.textContent = "⚠️ Por favor, responda todas as 5 perguntas antes de finalizar.";
    return;
  }

  resultado.style.color = acertos >= 4 ? "#15803d" : "#1e3a8a";
  resultado.textContent = `Você acertou ${acertos} de ${perguntasQuiz.length} perguntas!`;
}

carregarQuiz();