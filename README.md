# tool_box

auteur : JACQUES Antony

Description : Utiliser tool_box.js pour inclure dans vos projets un editeur WYSIWYG

Utilisation : Pour inclure l'éditeur ajouter un id unique, puis une class "div_modif_text" à la "div"<br> 
<BLOCKQUOTE> example : [div id="votre_id_unique" class="div_modif_text"][/div] </BLOCKQUOTE> <br>
le bloc "votre_id_unique" pourra contenir du texte rédiger par l'utilisateur
  
  
Inclure le fichier dans votre projet par le biais d'un script<br> 
<BLOCKQUOTE> <script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js "></script><br> 
 <script type="text/javascript"><br> 
$(document).ready(function()<br> 
{<br> 
$.get( "https://raw.githubusercontent.com/Shycin/tool_box/master/tool_box.js", function( data ) {<br> 
$("body").prepend("<script>"+data+"<\/script>");<br> 
});<br> 
});<br> 
</script><br> 
