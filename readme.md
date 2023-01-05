# Documentación

## Run microservices
- Have __Docker Desktop__ installed: [https://www.docker.com/](https://www.docker.com/)
- Enable __Kubernetes__ en las configuraciones de Docker Desktop
- Install __Nginx-Ingress__: [https://kubernetes.github.io/ingress-nginx/deploy/#quick-start](https://kubernetes.github.io/ingress-nginx/deploy/#quick-start)
- Install __Skaffold__ y agregarlo al __path__: [https://skaffold.dev/docs/install/](https://skaffold.dev/docs/install/)
- Create the necesary __secrets__: `kubectl create secret generic jwt-secret --from-literal=YOUR_CLAVE=YOUR_VALUE`
- Check the list of __secrets__: `kubectl get secrets`
- Run all the microservices of the project: `skaffold dev`
