# Define a imagem base
FROM node:16

# Define o diretório de trabalho
WORKDIR /app

# Adiciona o repositório do Node.js 16.x
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -

# Instala o Node.js e o yarn
RUN apt-get update && apt-get install -y nodejs yarn

RUN apt-get update && apt-get install -y net-tools

# Copia os arquivos necessários para o contêiner
COPY package*.json ./
COPY yarn.lock ./
COPY . .

# Instala as dependências
RUN yarn install

# Executa o comando de build
RUN yarn build

# Instala o servidor HTTP
RUN npm install -g http-server

# Copia o diretório dist para o diretório de trabalho do contêiner
COPY dist/ ./dist/

# Expose a porta da aplicação
EXPOSE 5000

# Comando para iniciar a aplicação
CMD [ "http-server", "dist", "-p", "5000" ]