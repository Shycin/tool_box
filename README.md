# tool_box

auteur : JACQUES Antony

Description : Utiliser tool_box.js pour inclure dans vos projets un editeur WYSIWYG

Utilisation : Pour inclure l'éditeur ajouter un id unique à la "div", puis une class "div_modif_text"<br> 
example : [div id="id_unique" class="div_modif_text autre_class"][/div] le bloc "id_unique" pourra contenir du texte rédiger par l'utilisateur
  
  
Inclure le fichier dans votre projet par le biais d'un script<br> 
<BQ> <script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script><br> 
<BQ> <script type="text/javascript"><br> 
<BQ> <BQ> $(document).ready(function()<br> 
<BQ> <BQ> <BQ> {<br> 
<BQ> <BQ> <BQ> <BQ> $.get( "https://raw.githubusercontent.com/Shycin/tool_box/master/tool_box.js", function( data ) {<br> 
<BQ> <BQ> <BQ> <BQ> <BQ> $("body").prepend("<script>"+data+"<\/script>");<br> 
<BQ> <BQ> <BQ> <BQ> });<br> 
<BQ> <BQ> <BQ> });<br> 
<BQ> </script><br> 
