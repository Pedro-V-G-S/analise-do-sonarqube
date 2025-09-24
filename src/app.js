// src/DemoSonarIssues.js

// Função usada corretamente
function usedFunction() {
    let x = 10;
    let y = 20; // Agora y é usado
    return x + y;
}

// Função única, sem duplicação
function uniqueFunction() {
    let a = 1;
    let b = 2;
    return a + b;
}

// Função de debug removida ou convertida em comentário
// function debugFunction() {
//     const message = "Debugging";
//     console.log(message); // removido para evitar problema de manutenção
// }

// Função com todos os parâmetros usados
function paramsUsed(a, b, c) {
    return a + b + c;
}

// Rotas corrigidas, sem duplicação
app.get('/test-route', (req, res) => {
    res.send('Rota única e funcional');
});
