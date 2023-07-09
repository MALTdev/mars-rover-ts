# MALT Rover

Équipe E : Mathieu NEYRET, Anaël BONNAFOUS, Logan LE SAUX, Théo NICOLAS

- [Lancement du projet](#lancement-du-projet)
- [Tâches réalisées](#tâches-réalisées)
- [Schéma d'architecture](#schéma-darchitecture)

### Lancement du projet

```sh
1. $ git clone https://github.com/MALTdev/mars-rover-ts

2. $ cd mars-rover-ts

3. $ npm install

4. $ npm run start

    > mars-rover-ts@0.0.0 start
    > concurrently "npm run ws" "npm run dev"
    
    [0]
    [0] > mars-rover-ts@0.0.0 ws
    [0] > node src/socket.js
    [0]
    [1]
    [1] > mars-rover-ts@0.0.0 dev
    [1] > vite
    [1]
    [0] listening on port 3000
    [1]
    [1]   VITE v4.3.9  ready in 359 ms
    [1]
    [1]   ➜  Local:   http://localhost:5173/
    [1]   ➜  Network: use --host to expose
```

### Tâches réalisées

- [x] Interface web avec tableau HTML
  - [x] affichage de la position et rotation du rover
  - [x] affichage de la planète et de ses obstacles
  - [x] déplacement avec les touches ZQSD et flèches
- [x] Mission control avec websocket
  - [x] connection entre serveur et client websocket
  - [x] envoi de commandes simples via boutons pressés
  - [x] envoi de commandes complexes via séquences saisie
- [ ] Interface cli avec tableau ASCII
  - [ ] affichage de la mission dans un terminal
  - [ ] déplacement avec chaînes de commandes
- [ ] Bonus : exploration automatisée de la planète

### Schéma d'architecture

Le schéma d'architecture réalisé avec draw.io est accessible via [ce lien](https://drive.google.com/file/d/11lqlY63An7D8Q0EbFbtoYkhOTV7Xb7JP/view?usp=sharing)

https://drive.google.com/file/d/11lqlY63An7D8Q0EbFbtoYkhOTV7Xb7JP/view?usp=sharing

### Stack de développement

Utilisation du framework Vue.js, Vite pour la compilation, Socket.io pour les websockets et Enquirer pour le terminal.

> Made with ❤️ and 🤖 by Mathieu, Anaël, Logan and Théo (MALTdev)
