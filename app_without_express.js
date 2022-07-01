//en utilisant la syntax classique de JavaScript
//et aussi sans utilisation de la frameword Express

// Inclure le module interne http pour la création du serveur HTTP
var http = require("http");
// Inclure le module interne url pour la récupération des informations de url
var url=require("url");
// Inclure le module interne querystring pour la récupération des paramètres de l'url
var queryString=require("querystring");
// Création du serveur HTTP
var httpServer=http.createServer(function (req, resp) {
    console.log(url.parse(req.url).path);
    // Pour récupérer les parameter de l'url
    query=url.parse(req.url).query;
    params=queryString.parse(query);
    nom =params['nom'];
    // Définir les entétes de la réponse HTTP
    resp.writeHead(200,{'content-type':'text/html'});
    // Envoyer le contenu html dans le corps de la réponse HTTP
    resp.end("<h2>Bonjour Mr "+nom+"</h2>");

});
// Démarrer le serveur HTTP en écoutant le port 8889
httpServer.listen(8889,function (){
    console.log("Node server started");
});

// Si vous voulez faire crée une grand application comme ça peut etre assez lourd
// alors c'est la raison pour la quel on besoin d'utilisée un framework node js
// et parmi ses framework il y'a Express