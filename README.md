<h1>Talker Registration Application</h1>
<p>Este projeto consiste em uma aplicação de cadastro de palestrantes (talkers), onde é possível realizar as operações de criação, leitura, atualização e exclusão (CRUD) de informações, além de realizar pesquisas.</p>
<p>A aplicação foi desenvolvida em Node.js utilizando uma API para o CRUD de palestrantes e endpoints que leem e escrevem informações em um arquivo utilizando o módulo fs.</p>
<h2>Funcionalidades</h2>
<p>A aplicação conta com as seguintes funcionalidades:</p>
<ul>
  <li>Criação de palestrantes: é possível cadastrar um novo palestrante informando seu nome, idade, tipo (internacional ou nacional) e a palestra que irá apresentar.</li>
  <li>Visualização de palestrantes: é possível visualizar uma lista com todos os palestrantes cadastrados, exibindo seu nome, idade, tipo e palestra.</li>
  <li>Pesquisa de palestrantes: é possível pesquisar um palestrante por nome e visualizar suas informações.</li>
  <li>Edição de palestrantes: é possível editar as informações de um palestrante, como seu nome, idade, tipo e palestra.</li>
  <li>Exclusão de palestrantes: é possível excluir um palestrante cadastrado.</li>
</ul>
<h2>API</h2>
<p>A API para o CRUD de palestrantes conta com os seguintes endpoints:</p>
<ul>
  <li>GET /talkers: retorna uma lista com todos os palestrantes cadastrados.</li>
  <li>GET /talkers/:id: retorna as informações de um palestrante específico, identificado pelo seu ID.</li>
  <li>POST /talkers: cria um novo palestrante.</li>
  <li>PUT /talkers/:id: atualiza as informações de um palestrante específico, identificado pelo seu ID.</li>
  <li>DELETE /talkers/:id: exclui um palestrante específico, identificado pelo seu ID.</li>
</ul>
<h1>Endpoints para leitura e escrita em arquivo</h1>
<p>Os seguintes endpoints foram desenvolvidos para ler e escrever informações em um arquivo utilizando o módulo fs:</p>
<ul>
  <li>GET /talker/:name: pesquisa um palestrante pelo nome e retorna suas informações.</li>
  <li>POST /login: recebe um usuário e senha e verifica se as informações são válidas. Se sim, retorna um token de acesso que deve ser utilizado nos demais endpoints.</li>
  <li>GET /logout: invalida o token de acesso do usuário logado.</li>
  <li>GET /checkToken: verifica se o token de acesso é válido.</li>
</ul>
<h2>Como executar o projeto</h2>
<p>Para executar o projeto, siga os seguintes passos:</p>
<ol>
  <li>Clone o repositório para sua máquina local.</li>
  <li>Instale as dependências do projeto utilizando o comando npm install.</li>
  <li>Execute o comando npm start para iniciar a aplicação.</li>
  <li>Utilize as rotas da API ou dos endpoints para realizar as operações desejadas.</li>
</ol>
<h2>Considerações finais</h2>
<p>Este projeto foi desenvolvido como um exercício para aplicar conhecimentos em Node.js e APIs RESTful. Sinta-se à vontade para utilizá-lo como referência ou como base para o desenvolvimento de projetos similares. Em caso de dúvidas ou sugestões, entre em contato.</p>
