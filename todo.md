## TO DO TDD

### Regras de Negócio

- [x] Criar Usuario.ts
- [x] Adicionar attr nome
- [ ] Adicionar attr e-mail
- [x] O Throw new Error não parece estar certo.
- - - [ ] E se falhar em mais de uma validação? qual deveria dar throw antes?
- [x] Nome precisa ser valido
- - [x] Não pode ser null, NaN, undefined ou vazio ex: ( '', '    ')
- - [x] Não pode conter números ex: ( 'Beppe123', '123', etc)
- - [x] Não pode começar nem terminar com espaços em branco ex: ( '  beppe ')
- - [x] Pode conter espaços no meio? ('Giuseppe Matheus')
- - - [x] Sim mas somente um exp: ('Giuseppe[  ]Matheus')
- - [x] Não pode conter simbolos! ex: (beppe@mp)
- - [x] Quantos caracteres mínimos? 3?

### Melhorias Tech/Conf/Arch

- [ ] Adicionar framework de mutation TypeScript
- [ ] Verificar coverage tests
- [ ] Adicionar algum linter
- [ ] Explorar as opções mais avançadas do Jest

### Estudos/Pesquisa/Praticar Coding

* Regex
* Constructors
* PLS (Principle least surprise)
* read-only properties
* Pomodoros (tempo de cada sessão) 15min ~ 30min.
    ** Oportunidade de passar teclado pro copiloto.
    ** Fazer descanso mental do que você tá trabalhando.
