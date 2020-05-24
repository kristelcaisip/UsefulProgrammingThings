# Docker Useful commands 
* https://linuxize.com/post/how-to-remove-docker-images-containers-volumes-and-networks/
```bash
# run zipkin (distributed tracing system)
$ docker run -p 9411:9411 --name zipkin openzipkin/zipkin

# run mongodb
$ docker run -p 27017-27019:27017-27019 --name mongodb mongo

# clean dangling images/containers
$ docker system prune 

# remove docker images 
$ docker rmi [IMAGE_NAME]

# remove docker container 

# access the mongodb 
$ docker exec -it [MONGO_CONTAINER_NAME] mongo

```
