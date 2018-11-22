# Docker Commands
---


## register image to docker
```
docker build -t nodejs-hello-world-image:v1 .
```

## list images
```
docker images
```

## run image
```
docker run -d -p 2001:8080 nodejs-hello-world-image:v1
```
```
docker run -d -p <port_to_be_exposed>:<port_exposed_by_app_inside_docker> <image_name>
```