## TO DO TDD

### Regras de Negócio

- [x] Criar Usuario.ts
- [x] Adicionar attr nome
- [ ] Adicionar attr e-mail
- [ ] O Throw new Error não parece estar certo.
- [x] Nome precisa ser valido
- - [x] Não pode ser null, NaN, undefined ou vazio ex: ( '', '    ')
- - [x] Não pode conter números ex: ( 'Beppe123', '123', etc)
- - [x] Não pode começar nem terminar com espaços em branco ex: ( '  beppe ')
- - [x] Pode conter espaços no meio? ('Giuseppe Matheus')
- - - [x] Sim mas somente um exp: ('Giuseppe[  ]Matheus')
- - [ ] Não pode conter simbolos! ex: (beppe@mp)
- - [ ] Quantos caracteres mínimos? 3?

### Melhorias Tech

- [ ] Adicionar framework de mutation TypeScript
- [ ] Verificar coverage tests
- [ ] Adicionar algum linter
- [ ] Explorar as opções mais avançadas do Jest
