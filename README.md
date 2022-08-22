# Frontend Mentor - Interactive rating component solution

## Índice

- [Visão Geral](#visão)
- [O desafio](#desafio)
- [Meu processo](#processo)
- [Screenshot](#screenshot)
- [Links](#links)
- [Ferramentas](#ferramentas)
- [Autora](#author)

### Visão Geral

Essa é uma solução para o desafio do site [Front End Mentor](#ttps://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). O objetivo geral desse desafio é criar um Card Interativo para Avaliação, que além de pedir uma nota de 1 a 5 do usuário, também exiba uma mensagem de agradecimento após o envio.

### Desafio

Para esse desafio, o usuário deve ser capaz de:

- Ver o layout otimizado de acordo com o tamanho da sua tela;
- Ver estados de hover para todos os elementos interativos da página;
- Selecionar e enviar uma avaliação de 1 a 5;
- Ver uma mensagem de agradecimento depois de enviar sua avaliação.

### Processo

Comecei estruturando o projeto com HTML5, dando atenção à disposição do conteúdo dentro de divs e à criação de classes mais gerais.
Em seguida, usei o SASS para criar variáveis para todas as cores da minha página, facilitando assim a manutenção do código. Criei então os estilos para todos os elementos da página usando SCSS, incluindo os estilos de hover e focus para os botões.
Com todos os elementos visuais criados, usei JavaScript para capturar o input numérico da avaliação e exibí-lo no card de agradecimento.
Nesse ponto, criei uma validação para que o usuário receba uma mensagem de alerta ao tentar enviar uma avaliação nula.
Finalmente, criei uma classe com a propriedade 'display: hidden' e usei o método Toggle para exibir apenas um card por vez.

### Screenshot

![](/images/screenshot.png)

### Links

- Site: [Clique Aqui!](https://interactive-rating-component-i47fabqjx-a-almeida10.vercel.app/)

### Ferramentas

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- SASS
- SCSS

## Author

- Frontend Mentor - [@a-almeida10](https://www.frontendmentor.io/profile/a-almeida10)
- Linkedin - [Ághata Almeida](https://www.linkedin.com/in/aghata-almeida/)

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.
