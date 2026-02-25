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

// Inicializa cor do power conforme status ao carregar a página
document.querySelectorAll('.card-maquina').forEach(card => {
    const statusSpan = card.querySelector('.status-texto');
    const powerIcon = card.querySelector('.btn-power');

    if (statusSpan.textContent === "Ligado") {
        powerIcon.style.color = "#0bac30";  // Ligado = verde
    } else {
        powerIcon.style.color = "red";    // Desligado = vermelho
    }
});

// Abrir modal power ao clicar no ícone
botoesPower.forEach(botao => {
    botao.addEventListener('click', (e) => {
        maquinaSelecionada = e.target.closest('.card-maquina');
        const statusTexto = maquinaSelecionada.querySelector('.status-texto').textContent;

        if (statusTexto === "Ligado") {
            powerTexto.textContent = "Deseja desligar a máquina?";
        } else {
            powerTexto.textContent = "Deseja ligar a máquina?";
        }

        modalPower.style.display = "flex";
    });
});

// Botão NÃO → fecha modal power
powerNao.addEventListener('click', () => {
    modalPower.style.display = "none";
});

// Botão SIM → alterna status e cor do power
powerSim.addEventListener('click', () => {

    const statusSpan = maquinaSelecionada.querySelector('.status-texto');
    const powerIcon = maquinaSelecionada.querySelector('.btn-power');

    if (statusSpan.textContent === "Ligado") {
        statusSpan.textContent = "Desligado";
        powerIcon.style.color = "red";    // Desligado = vermelho
    } else {
        statusSpan.textContent = "Ligado";
        powerIcon.style.color = "green";  // Ligado = verde
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
// Modal de temperatura
const modalTemp = document.getElementById('modal-temp');
const btnFecharTemp = document.getElementById('btn-fechar-temp');
const botoesTemp = document.querySelectorAll('.btn-temp');
let chartTemp = null;

// Exemplo de dados (você pode atualizar dinamicamente)
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

        // Se já existir um gráfico anterior, destrói
        if(chartTemp) chartTemp.destroy();

        // Cria novo gráfico
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

// Fechar modal
btnFecharTemp.onclick = () => modalTemp.style.display = 'none';
window.addEventListener('click', (e) => {
    if(e.target === modalTemp) modalTemp.style.display = 'none';
});
// Seleciona o botão SAIR
const btnSair = document.querySelector('a[href="./login.html"]');
const modalSair = document.getElementById('modal-sair');
const fecharSair = document.getElementById('fechar-sair');
const sairSim = document.getElementById('sair-sim');
const sairNao = document.getElementById('sair-nao');

// Abrir modal ao clicar
btnSair.addEventListener('click', function(e) {
    e.preventDefault(); // evita ir direto para login
    modalSair.style.display = 'flex';
});

// Fechar modal
fecharSair.addEventListener('click', () => modalSair.style.display = 'none');
sairNao.addEventListener('click', () => modalSair.style.display = 'none');

// Confirmar saída
sairSim.addEventListener('click', () => {
    window.location.href = './index.html'; // redireciona para login
});