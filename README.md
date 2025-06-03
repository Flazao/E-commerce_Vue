## Gabriel Flazão - 1990590
## José Fujii - 1994006

Este projeto é uma loja virtual desenvolvida em Vue.js, com o objetivo de demonstrar as principais funcionalidades de um e-commerce moderno de forma clara, organizada e fácil de usar. O site foi construído utilizando apenas logica, sem necessidade de autenticação, banco de dados, garantindo uma experiência fluida e rápida para o usuário.

Ao acessar o site, o usuário encontra uma listagem de produtos obtidos via API (DummyJSON), podendo navegar entre páginas de produtos com paginação dinâmica. É possível filtrar os produtos por categoria através de um seletor expansível, facilitando a busca por itens específicos. Além disso, há um campo de busca que permite pesquisar produtos pelo nome, tornando a navegação ainda mais eficiente.

Cada produto pode ser visualizado em detalhes em uma página dedicada, onde o usuário encontra informações completas, como nome, preço, categoria, imagem e descrição. Tanto na listagem quanto na página de detalhes, existe um botão para adicionar o produto ao carrinho de compras.

O carrinho de compras é acessível em uma tela própria, onde o usuário pode visualizar todos os itens adicionados, alterar a quantidade de cada produto ou removê-los do carrinho. O valor total é atualizado automaticamente conforme as alterações são feitas. O carrinho é persistente durante toda a navegação, pois utiliza o localStorage do navegador para armazenar os itens temporariamente, garantindo que o usuário não perca seus produtos ao navegar entre as páginas.

A interface foi desenvolvida com foco na experiencia do usuario, utilizando Tailwind CSS para facilitar a criação de layouts modernos. Toda a comunicação com a API é feita por meio do Axios, que simplifica as requisições HTTP e o tratamento dos dados recebidos.

### Dependências principais utilizadas:
- **Vue.js 3**: Framework principal para construção da interface e gerenciamento dos estados.
- **Vue Router**: Gerencia as rotas e a navegação entre as páginas de produtos, detalhes e carrinho.
- **Axios**: Realiza as chamadas HTTP para a API DummyJSON de forma simples e eficiente.
- **Tailwind CSS**: Responsável pelo design responsivo, estilização dos componentes e padronização visual.

Para rodar a aplicação localmente, basta instalar as dependências com `npm install` e iniciar o servidor de desenvolvimento com `npm run dev`. Não é necessário configurar banco de dados ou autenticação, pois todo o funcionamento ocorre no lado do cliente, aproveitando recursos modernos do navegador.

O projeto foi desenvolvido priorizando clareza, simplicidade e facilidade de manutenção, sendo ideal para estudos, demonstrações ou como base para projetos mais avançados de e-commerce.

## Link yt: https://youtu.be/d-a7MUkEYa4

### obs: O video foi feito sem audio por conta da falta do microfone, entao é um video mostrando somente o site.

## Imagens:

![tela_inicial](./src/assets/prints/WhatsApp%20Image%202025-06-03%20at%2018.24.52%20(1).jpeg)

![tela_produtos](./src/assets/prints/WhatsApp%20Image%202025-06-03%20at%2018.24.52.jpeg)

![tela_detalhe_produto](./src/assets/prints/WhatsApp%20Image%202025-06-03%20at%2018.24.51%20(2).jpeg)

![tela_carrinho](./src/assets/prints/WhatsApp%20Image%202025-06-03%20at%2018.49.48.jpeg)

![categoria](./src/assets/prints/WhatsApp%20Image%202025-06-03%20at%2018.24.51.jpeg)