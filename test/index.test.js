import pegaArquivo from "../index";

test('deve ser uma função', () => {
    expect(pegaArquivo(1, 2)).toBe(3);
  });