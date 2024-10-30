# Projeto-Devops


# Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:
 
 .Node.js
 
 .MySQL
 
 .VsCode
 
 .Postman

 # Passos para Executar

 1.Clone o repositório:
 
 git clone https://github.com/laysafreitas/educacao-continua.git
cd Projeto-Devops

2. instale as dependencias a seguir:

.npm i mysql2

.npm install express

.npm install @types/express --save-dev
.npm install cors

npm install @types/cors --save-dev

.npm i ts-node-dev -D

.npm i typescript -D

.npm install knex @types/knex mysql

.npm i dotenv

3. Confira o package.json para que os comandos do ts.node.dev funcione corrretamente em sua maquina

4. Crie em seu MySQL uma database ,e não se esqueça de verificar a conexão com banco, isso é excencial para que a sua aplicação funcione

5. Depois da Database criada, em seu terminal escreva o comando que está no packagen,json para criar a sua tabela

6. Tabela cria, volte para o vscode e escreva o comando que abre a porta da sua aplicação

7. feito isso, vocé vai precisar entrar em seu postman e colocar a path que está no arquivo index.ts e não se esqueça de usar o rest correto para cada requisição

8. Em seu postman, clique em body e depois em raw, por favor use json para a resposta da requisição, use o padrão a seguir:

 {
    "tema": "",
   "perguntas": "",
   "A_alter": "",
   "B_alter": "",
   "C_alter": "",
   "D_alter": "",
   "resposta": ""
   }

# (caso dê algum erro em sua requisição, por favor entre em contado comigo) #

# Exemplo .env

DB_HOST = 

DB_USER = 

DB_PASSWORD = 

DB_SCHEMA = 



