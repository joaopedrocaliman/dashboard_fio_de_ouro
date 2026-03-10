// ================= MODAL OCORRÊNCIA =================
const modal = document.getElementById('modal-ocorrencia');
const btnFechar = document.getElementById('btn-fechar');
const botoesOcorrencia = document.querySelectorAll('.card-maquina button.ocorrencia');

const modalPergunta = document.getElementById('modal-pergunta');
const modalConfirmacao = document.getElementById('modal-confirmacao');

const btnSim = document.getElementById('btn-sim');
const btnNao = document.getElementById('btn-nao');

// Abrir modal de ocorrência
botoesOcorrencia.forEach(botao => {
    botao.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalPergunta.style.display = 'block';
        modalConfirmacao.style.display = 'none';
    });
});

// Botão NÃO → fecha modal
btnNao.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Botão SIM → mostra confirmação
btnSim.addEventListener('click', () => {
    modalPergunta.style.display = 'none';
    modalConfirmacao.style.display = 'block';
});

// Fechar no X
btnFechar.onclick = () => {
    modal.style.display = 'none';
};

// Fechar clicando fora
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// ================= MODAL POWER (LIGAR/DESLIGAR) =================
const modalPower = document.getElementById('modal-power');
const fecharPower = document.getElementById('fechar-power');
const powerTexto = document.getElementById('power-texto');
const powerSim = document.getElementById('power-sim');
const powerNao = document.getElementById('power-nao');

let maquinaSelecionada = null;
const botoesPower = document.querySelectorAll('.btn-power');

// Cores padronizadas
const COR_LIGADO = "#28a745";  // verde
const COR_DESLIGADO = "red";   // vermelho
const BORDA_LIGADO = "6px solid #0c9529"; // verde borda
const BORDA_DESLIGADO = "6px solid red";  // vermelho borda

// Inicializa cor do power e borda conforme status ao carregar a página
document.querySelectorAll('.card-maquina').forEach(card => {
    const statusSpan = card.querySelector('.status-texto');
    const powerIcon = card.querySelector('.btn-power');

    if (statusSpan.textContent === "Ligado") {
        powerIcon.style.color = COR_LIGADO;
        card.style.borderTop = BORDA_LIGADO;
    } else {
        powerIcon.style.color = COR_DESLIGADO;
        card.style.borderTop = BORDA_DESLIGADO;
    }
});

// Abrir modal power ao clicar no ícone
botoesPower.forEach(botao => {
    botao.addEventListener('click', (e) => {
        maquinaSelecionada = e.target.closest('.card-maquina');
        const statusTexto = maquinaSelecionada.querySelector('.status-texto').textContent;

        powerTexto.textContent = (statusTexto === "Ligado") 
            ? "Deseja desligar a máquina?" 
            : "Deseja ligar a máquina?";

        modalPower.style.display = "flex";
    });
});

// Botão NÃO → fecha modal power
powerNao.addEventListener('click', () => {
    modalPower.style.display = "none";
});

// Botão SIM → alterna status, cor do power e borda
powerSim.addEventListener('click', () => {
    const statusSpan = maquinaSelecionada.querySelector('.status-texto');
    const powerIcon = maquinaSelecionada.querySelector('.btn-power');

    if (statusSpan.textContent === "Ligado") {
        statusSpan.textContent = "Desligado";
        powerIcon.style.color = COR_DESLIGADO;
        maquinaSelecionada.style.borderTop = BORDA_DESLIGADO;
    } else {
        statusSpan.textContent = "Ligado";
        powerIcon.style.color = COR_LIGADO;
        maquinaSelecionada.style.borderTop = BORDA_LIGADO;
    }

    modalPower.style.display = "none";
});

// Fechar modal power no X
fecharPower.onclick = () => {
    modalPower.style.display = "none";
};

// Fechar modal power clicando fora
window.addEventListener('click', (event) => {
    if (event.target === modalPower) {
        modalPower.style.display = "none";
    }
});

// ================= MODAL TEMPERATURA =================
const modalTemp = document.getElementById('modal-temp');
const btnFecharTemp = document.getElementById('btn-fechar-temp');
const botoesTemp = document.querySelectorAll('.btn-temp');
let chartTemp = null;

// Exemplo de dados (atualize dinamicamente se precisar)
const exemploDados = {
    labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00'],
    datasets: [{
        label: 'Temperatura (°C)',
        data: [22, 23, 24, 25, 25.7, 26],
        fill: false,
        borderColor: 'orange',
        tension: 0.1
    }]
};

// Abrir modal e gerar gráfico
botoesTemp.forEach(botao => {
    botao.addEventListener('click', (e) => {
        modalTemp.style.display = 'flex';

        if(chartTemp) chartTemp.destroy();

        const ctx = document.getElementById('chart-temp').getContext('2d');
        chartTemp = new Chart(ctx, {
            type: 'line',
            data: exemploDados,
            options: {
                responsive: true,
                plugins: {
                    legend: { display: true }
                }
            }
        });
    });
});

// Fechar modal temperatura
btnFecharTemp.onclick = () => modalTemp.style.display = 'none';
window.addEventListener('click', (e) => {
    if(e.target === modalTemp) modalTemp.style.display = 'none';
});

// ================= MODAL SAIR =================
const btnSair = document.querySelector('a[href="./login.html"]');
const modalSair = document.getElementById('modal-sair');
const fecharSair = document.getElementById('fechar-sair');
const sairSim = document.getElementById('sair-sim');
const sairNao = document.getElementById('sair-nao');

btnSair.addEventListener('click', function(e) {
    e.preventDefault();
    modalSair.style.display = 'flex';
});

fecharSair.addEventListener('click', () => modalSair.style.display = 'none');
sairNao.addEventListener('click', () => modalSair.style.display = 'none');
sairSim.addEventListener('click', () => {
    window.location.href = './index.html';
});