# Define a imagem base
FROM node:latest

# Define o diretório de trabalho
WORKDIR /app

# Adiciona o repositório do Node.js 16.x
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -

# Instala o Node.js e o yarn
RUN apt-get update && apt-get install -y nodejs yarn

# Copia os arquivos necessários para o contêiner
COPY package*.json ./
COPY yarn.lock ./
COPY . .

# Instala as dependências
RUN yarn install

# Executa o comando de build
RUN yarn build

# Expose a porta da aplicação
EXPOSE 4050

# Comando para iniciar a aplicação
CMD [ "yarn", "start" ]
