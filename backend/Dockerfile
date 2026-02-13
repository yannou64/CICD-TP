# Image officielle Node
FROM node:20-alpine

# Dossier de travail dans le container
WORKDIR /app

# Copier package.json et lock
COPY package*.json ./

# Installer dépendances
RUN npm install

# Copier le reste du code
COPY . .

# Exposer le port interne
EXPOSE 3000

# Commande de démarrage
CMD ["npm", "start"]
