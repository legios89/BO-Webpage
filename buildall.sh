#! /bin/bash
echo "base"
echo "--------------------"
docker build \
  --build-arg "DEVELOPER_UID=$(id -u)" \
  --build-arg "DEVELOPER_GID=$(id -g)" \
  -t birkas_orsi-base "docker/base"

echo "postgres"
echo "--------------------"
docker build -t birkas_orsi-postgres "docker/postgres"

echo "nginx"
echo "--------------------"
docker build -t birkas_orsi-nginx "docker/nginx"

echo "django-python3"
echo "--------------------"
docker build -t birkas_orsi-django-python3 "docker/django-python3"

echo "nodejs"
echo "--------------------"
docker build -t birkas_orsi-nodejs "docker/nodejs"

echo 'Start the data container'
echo "--------------------"
docker-compose --file data-docker-compose.yml up -d
