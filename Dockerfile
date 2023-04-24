# Define a imagem base
FROM node:14

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos necessários para o contêiner
COPY package*.json ./
COPY yarn.lock ./
COPY src/ ./src/

# Instala as dependências
RUN yarn install

# Executa o comando de build
RUN yarn build

# Expose a porta da aplicação
EXPOSE 4050

# Comando para iniciar a aplicação
CMD [ "yarn", "start" ]
