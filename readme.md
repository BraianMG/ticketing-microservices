# Documentación

## Run microservices
- Have __Docker Desktop__ installed: [https://www.docker.com/](https://www.docker.com/)
- Enable __Kubernetes__ en las configuraciones de Docker Desktop
- Install __Nginx-Ingress__: [https://kubernetes.github.io/ingress-nginx/deploy/#quick-start](https://kubernetes.github.io/ingress-nginx/deploy/#quick-start)
- Install __Skaffold__ y agregarlo al __path__: [https://skaffold.dev/docs/install/](https://skaffold.dev/docs/install/)
- Create the necesary __secrets__: `kubectl create secret generic jwt-secret --from-literal=YOUR_CLAVE=YOUR_VALUE`
- Check the list of __secrets__: `kubectl get secrets`
- Run all the microservices of the project: `skaffold dev`
- Go to __ticketing.dev__

__Note__: If you get a security warning, we just want to bypass that because it's chrome jumping in when we really don't want it to do so. You can either click on advance at the bottom and try to bypass the security warning. Chances are, however, there will not be a bypass link inside there. So to really bypass that screen, you can type directly onto your keyboard `thisisunsafe` and it should bypass the HTTPS error.