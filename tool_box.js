function commande(nom, argument){

    if (typeof argument === 'undefined') {
    	argument = '';
    }

    if(nom == "createLink") 
        argument = prompt("Quelle est l'adresse du lien ?");


    document.execCommand(nom, false, argument);
}


function getSelected()
{

	if(window.getSelection) 
	{ 
		return window.getSelection(); 
	}
	else if(document.getSelection) 
	{ 
		return document.getSelection(); 
	}
	else 
	{
		var selection = document.selection && document.selection.createRange();
		if(selection.text) 
		{ 
			return selection.text; 
		}
		return false;
	}
	return false;
}

function init()
{
	$("body").prepend(
		"<!-- Auteur : JACQUES Antony -->"+
		"<!-- Utiliser tool_box.js pour inclure dans vos projets un editeur WYSIWYG -->"+
		"<!-- Lien du github du createur https://github.com/Shycin/tool_box -->"+
		"<style type='text/css'>#edit_capsule{display: none;}#background{position: fixed;top: 0;left: 0;z-index: 10;background-color: black;opacity: 0.8;width: 100%;height: 100%;}#editeur{position: fixed;z-index: 100;border-radius: 45px;border-top-right-radius: 0px;background-color: lightgrey;width: 50%;min-width: 800px;margin-left: 25%;height: 500px;}#editeur #n_para{width: 100%;height: 10%;border-top-left-radius: 45px;background-color: grey;}#editeur #tool{width: 80%;height: 10%;margin: auto;}#editeur #tool div{margin-left: 10px;margin-right: 10px;float: left;}#editeur #write{width: 80%;height: 60%;background-color: white;margin-left: 10%;overflow-x: hidden;overflow-y: scroll;float: left;}#editeur #write>div:not(#margin){position: absolute;z-index: 10;}#editeur #margin{width: 80%;background-color: yellow;float: left;position: absolute;}#editeur .update_data{width: 80%;margin-left: 10%;height: 40px;float: left;}#editeur #close{width: 25px;float: right;cursor: pointer;}@media (max-width: 1100px) {#content{width: 80%;margin-left: 10%;}#editeur{width: 80%;margin-left: 10%;}</style>"+
		"<div id='edit_capsule'>"+
			"<div id='editeur'>"+
				"<div id='n_para'><div id='close'>&#x274C;</div></div>"+
				"<div id='tool'><p>"+
					"<div>"+
						"<input type='button' id='bold' value='G' style='font-weight:bold;'/>"+
						"<input type='button' id='italic' value='I' style='font-style:italic;'/>"+
				    	"<input type='button' id='underline' value='S' style='text-decoration:underline;'/>"+
				    	"<input type='button' id='strikethrough' value='U' style='text-decoration:line-through;'/>"+
				    "</div>"+
				    "<div>"+
				    	"<input type='button' id='justifyLeft' value='' style=' background-size: 100%;background-repeat: no-repeat;background-image: url(../image/dev/left.png);'/>"+
				    	"<input type='button' id='justifyCenter' value='' style=' background-size: 100%;background-repeat: no-repeat;background-image: url(../image/dev/center.png);'/>"+
				    	"<input type='button' id='justifyRight' value='' style=' background-size: 100%;background-repeat: no-repeat;background-image: url(../image/dev/right.png);'/>"+
				   		"<input type='button' id='justifyFull' value='' style=' background-size: 100%;background-repeat: no-repeat;background-image: url(../image/dev/justifier.png);'/>"+
				   	"</div>"+
				    "<div>"+
				    	"<input type='button' id='undo' value='' style=' background-size: 100%;background-repeat: no-repeat;background-image: url(../image/dev/fleft.png);'/>"+
				    	"<input type='button' id='redo' value='' style=' background-size: 100%;background-repeat: no-repeat;background-image: url(../image/dev/fright.png);'/>"+
				    "</div>"+
				    "<div>"+
				    	"<input type='button' id='insertorderedlist' value='' style=' background-size: 100%;background-repeat: no-repeat;background-image: url(../image/dev/pucenumero.png);'/>"+
				    	"<input type='button' id='insertunorderedlist' value='' style=' background-size: 100%;background-repeat: no-repeat;background-image: url(../image/dev/pucepoint.png);'/>"+
				    "</div>"+
				    "<div>"+
				    	"<input type='button' id='createLink' value='&#x1F517'/>"+
				    "</div>"+
				    "<div>"+
					    "<select size='1' id='fontSize'>"+
					    	"<option value='1'>8</option>"+
					    	"<option value='2'>10</option>"+
					    	"<option value='3' selected>12</option>"+
					    	"<option value='4'>14</option>"+
					    	"<option value='5'>16</option>"+
					    	"<option value='6'>18</option>"+
					    	"<option value='7'>20</option>"+
					    "</select>"+
					"</div>"+
					"<div>"+
				    	"<select id='heading'>"+
				    		"<option value='h0'>Aucun titre</option>"+
							"<option value='h1'>Titre 1</option>"+
							"<option value='h2' selected>Titre 2</option>"+
							"<option value='h3'>Titre 3</option>"+
							"<option value='h4'>Titre 4</option>"+
							"<option value='h5'>Titre 5</option>"+
							"<option value='h6'>Titre 6</option>"+
						"</select>"+
					"</div>"+
				"</p></div>"+
				"<div id='write' contentEditable = 'true'></div>"+
			"</div>"+
			"<div id='background'></div>"+
		"</div>");
}



$(document).ready(function() {

	document.execCommand("defaultParagraphSeparator", false, "div");
	init();

	$(".div_modif_text").click(function(){

		var id = $(this).attr("id");
		var content = $(this).html();
		content += "<div id='margin'>test</div>";

		$("#editeur #n_para").attr("name",id);
		$("#editeur #write").html(content);

		$("#edit_capsule").css("display","block");
	});

	var h_function_1 = function()
	{
		$(this).unbind();

		var this_ = $(this);


	    var command = $(this_).attr('id');

		var value = $(this_).val();

		commande(command,value);
		
		var node = getSelected().focusNode;
		element_focus = node;

		setTimeout(function(){
			$(this_).bind("change blur", h_function_1);
		}, 1000);
	}

	var h_function_2 = function()
	{
		$(this).unbind();

		var this_ = $(this);


	    var command = $(this_).attr('id');

		var value = $(this_).val();

		commande(command,value);
		
		var node = getSelected().focusNode;
		element_focus = node;

		setTimeout(function(){
			$(this_).bind("click blur", h_function_2);
		}, 1000);
	}

	$("#tool div select").bind("change", h_function_1);
	$("#tool div input").bind("click", h_function_2);


	var handler = function() 
	{
		var element = $(this).parents().each(function() {

			if($(this).attr("id") == "editeur")
			{
				var id = $(this).find("#n_para").attr("name");

				$("#"+id).html($("#write").html());
			}	
		});

		$(this).unbind("keyup");
		var this_ = $(this);
		
		setTimeout(function(){ 
			$(this_).bind("keyup", handler);
		}, 1000);
		
	};

	$("#write").bind("keyup blur DOMNodeInserted", handler);



	$("#background").click(function(){
		$("#edit_capsule").css("display","none");
	});

	$("#editeur #close").click(function(){
		$("#edit_capsule").css("display","none");
	});




});
