// Mock do UserModel para evitar acesso ao banco real
jest.mock('../models/UserModel', () => ({
  getAllUsers: jest.fn(() => [
    { id: 1, name: 'User Test', email: 'a@a.com', phone: '123' },
    { id: 2, name: 'Second User', email: 'b@b.com', phone: '456' }
  ]),
  saveUsers: jest.fn()
}));

const userService = require('./userService');

test('Deve retornar lista de usuários', () => {
  const result = userService.listUsers();
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
});

test('Deve retornar usuário por ID', () => {
  const user = userService.getUserById(1);
  expect(user).toEqual({ id: 1, name: 'User Test', email: 'a@a.com', phone: '123' });
});

test('Deve criar um novo usuário', () => {
  const newUser = { name: 'Novo', email: 'novo@email.com', phone: '111' };
  const created = userService.createUser(newUser);
  expect(created).toHaveProperty('id');
  expect(created.name).toBe('Novo');
});
