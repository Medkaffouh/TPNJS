//en utilisant la syntax classique de JavaScript
//et aussi sans utilisation de la frameword Express
var http = require("http");
var url=require("url");
var queryString=require("querystring");
var httpServer=http.createServer(function (req, resp) {
    console.log(url.parse(req.url).path);
    query=url.parse(req.url).query;
    params=queryString.parse(query);
    nom =params['nom'];
    resp.writeHead(200,{'content-type':'text/html'});
    resp.end("<h2>Bonjour Mr "+nom+"</h2>");

});
httpServer.listen(8889,function (){
    console.log("Node server started");
});

// Si vous voulez faire crée une grand application comme ça peut etre assez lourd
// alors c'est la raison pour la quel on besoin d'utilisée un framework node js
// et parmi ses framework il y'a Express