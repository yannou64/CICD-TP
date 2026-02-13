# Image officielle Nginx
FROM nginx:alpine

# Supprimer la config par défaut
RUN rm /etc/nginx/conf.d/default.conf

# Copier notre config
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Copier le frontend
COPY frontend /usr/share/nginx/html
