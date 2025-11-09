const userController = require('./userController');

test('Deve verificar se a função listUsers existe', () => {
  expect(typeof userController.listUsers).toBe('function');
});

test('Deve verificar se a função combineUserNames existe', () => {
  expect(typeof userController.combineUserNames).toBe('function');
});

test('Deve combinar nomes de usuários corretamente', () => {
  const users = [
    { id: 1, name: 'Ana' },
    { id: 2, name: 'Pedro' },
    { id: 3, name: 'Maria' }
  ];
  const result = userController.combineUserNames(users);
  // Exemplo esperado baseado na função
  expect(result).toContain('PedroMaria');
  expect(result).toContain('MariaPedro');
  // Nomes curtos como 'Ana' podem não entrar, depende da sua regra
});

