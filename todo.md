## TO DO TDD

### O que estamos aplicando, repertório atual de coding?

1. Bom cidadão/Good citizen + ADTs -> 
Não podemos criar obj inválidos e não permitir que a interação com eles os tornem inválidos.
2. TDD -> Ciclos de testes e refactoring 
3. Refactoring -> Melhorias de código focadas em Design.

### Regras de Negócio

- [x] Criar Usuario.ts
- [x] Adicionar attr nome
- [ ] Adicionar attr e-mail
- [x] O Throw new Error não parece estar certo.
- - [x] E se falhar em mais de uma validação? qual deveria dar throw antes? nenhuma!
- [x] Nome precisa ser valido
- - [x] Não pode ser null, NaN, undefined ou vazio ex: ( '', '    ')
- - [x] Não pode conter números ex: ( 'Beppe123', '123', etc)
- - [x] Não pode começar nem terminar com espaços em branco ex: ( '  beppe ')
- - [x] Pode conter espaços no meio? ('Giuseppe Matheus')
- - - [x] Sim mas somente um exp: ('Giuseppe[  ]Matheus')
- - [x] Não pode conter simbolos! ex: (beppe@mp)
- - [x] Quantos caracteres mínimos? 3?
- - [ ] Quantos caracteres máximos? 3?

### Melhorias Tech/Conf/Arch

- [x] Verificar coverage tests
- [x] Adicionar framework de coverage mutation TypeScript
- [x] Adicionar comando para fazer mutação em testes especificos
- [x] Adicionar algum linter (code standard)
- [ ] Explorar as opções mais avançadas do Jest

### Estudos/Pesquisa/Praticar Coding

* Regex
* Constructors
* PLS (Principle least surprise)
* read-only properties
* Pomodoros (tempo de cada sessão) 15min ~ 30min.
    ** Oportunidade de passar teclado pro copiloto.
    ** Fazer descanso mental do que você tá trabalhando.
* TS mult constructors


## Implementando o componente Configs

- [ ] O que vai acontecer se a variavel APP_CONFIG_POSTGRESQL não estiver definida?
- [ ] O que vai acontecer se o JSON.parse falhar? (por exemplo, se o JSON estiver vazio, ou invalido)
- [ ] O que vai acontecer se alguma das propriedades estiver vazia? (por ex: user ou pass)
-
