# Documentation

## Run microservices
- Have __Docker Desktop__ installed: [https://www.docker.com/](https://www.docker.com/)
- Enable __Kubernetes__ in Docker Desktop configurations
- Install __Nginx-Ingress__: [https://kubernetes.github.io/ingress-nginx/deploy/#quick-start](https://kubernetes.github.io/ingress-nginx/deploy/#quick-start)
- Install __Skaffold__ and add it to __path__: [https://skaffold.dev/docs/install/](https://skaffold.dev/docs/install/)
- Create the necesary __secrets__: `kubectl create secret generic SECRET_NAME --from-literal=YOUR_KEY=YOUR_VALUE`
  - JWT secret: `kubectl create secret generic jwt-secret --from-literal=JWT_KEY=d1ff1cu1t_p@55w0rd`
  - Stripe secret: `kubectl create secret generic stripe-secret --from-literal=STRIPE_KEY=pr1v@t3_k3y`
- Check the list of __secrets__: `kubectl get secrets`
- Run all the microservices of the project: `skaffold dev`
- Go to __ticketing.dev__

## Skaffold
To install Skaffold, follow the following installation guide `https://skaffold.dev/docs/install/`

If for some reason when you run `skaffold dev` you get an error that says a docker image cannot be found or cannot be pulled:
- Stop the process and try again
- If it still doesn't work, go to `skaffold.yaml` and change `push` from `false` to `true`, then try again. Don't forget to return it to `false`

__Note__: If you get a security warning, we just want to bypass that because it's chrome jumping in when we really don't want it to do so. You can either click on advance at the bottom and try to bypass the security warning. Chances are, however, there will not be a bypass link inside there. So to really bypass that screen, you can type directly onto your keyboard `thisisunsafe` and it should bypass the HTTPS error.

## Submodules with git
- Clone this repository and submodules: `git clone --recursive <repository>`
- Clone only this repository and then clone some submodule:
  - Clone only this repo: `git clone <repository>`
  - Clone some submodule: `git submodule init <path>` and then `git submodule update <path>` (If the `<path>` is not specified, all submodules will be cloned)
- Add a submodule: `git submodule add <repository> <path>`
- Update submodule: 
  - All: `git submodule update --remote`
  - Only one: `git submodule update --remote <path>`
- Delete submodules:
  - Remove submodule: `git rm auth`
  - Delete local files from submodule: `rm -rf .git/modules/<name>`
