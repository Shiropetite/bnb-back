Coucou c'est le back de bnb :p

docker build -t bnb-back:latest .
docker run -p 3000:3000 bnb-back:latest
docker tag bnb-back:latest titeshi/bnb-back:latest
docker login
docker push titeshi/bnb-back:latest