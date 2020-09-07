Développement du FRONT END à l'aide de l'outil vue.js : VUE CLI ...
Pour l'installer ouvreze un terminal et executez :
npm install -g @vue/cli
on utilisera la VUE CREATE pour créer un nouveau projet vue.js :
vue create customer-list-app-frontend
le choix des préréglages adopté:
please pick a preset => manually sselected features
check the features needed for your project => babel, router, linter
use history mode for router => yes
pick a linter/formatter config => basic
pick additional lint features => lint on save
where do you prefer placing config for Babel, PostCSS, ESlint, etc.? => in dedicated config files
Save this as a preset for future projects => yes
save preset as => vuescotch
on vient de créer l'application vue.js dans le répertoire Utilisateur-list-app-frontend
Pour l'executer il suffit de démarrer l'application avec les commandes:
cd utilisateur-list-app-frontend
npm run serve 
De base l'application est maintenant visible sur votre machine sur le localhost 8080 => http: // localhost: 8080

Installation Axios:(Rien de plus basique!!)
npm install axios --save
