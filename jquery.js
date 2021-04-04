<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">
//-------------------------------------------------------------------------------------------------- function replace by ()=>{}

//------------------------------------------------------------------------------------------------checking element presence
 $(), an object is always returned, and objects always evaluate to true.
if ( $( "div.foo" ).length ) {
    ...
}


$( "form :checked" );	//checking atribute in form


// The .html() method sets all the h1 elements' html to be "hello world":
$( "#myDiv p:first" ).html( "New <strong>first</strong> paragraph!" );
// .html() – Get or set the HTML contents.
// .text() – Get or set the text contents; HTML will be stripped.
// .attr() – Get or set the value of the provided attribute.
// .width() – Get or set the width in pixels of the first element in the selection as an integer.
// .height() – Get or set the height in pixels of the first element in the selection as an integer.
// .position() – Get an object with position information for the first element in the selection, relative to its first positioned ancestor. This is a getter only.
// .val() – Get or set the value of form elements.


//---------------------------------------------------------------------------------------------insert, update, remove
// -------------[.insertAfter(), .insertBefore()] [.appendTo(), and .prependTo()]

$("button").click(function(){
	$("p").after($("button"));			// button after <p>
});

$("p").on({								// MULTIPLE
  mouseenter: function(){
    $(this).css("background-color", "lightgray");
  },
  mouseleave: function(){
    $(this).css("background-color", "lightblue");
  },
  click: function(){
    $(this).css("background-color", "yellow");
  }
});


//-------CREATE
$( "<a/>", {
    html: "This is a <strong>new</strong> link",
    "class": "new",
    href: "foo.html"
});







//-----------------------------------------------------------------------------------------------------	
$(document).ready(function() {}				// wait for document to load
//	or	
$(function() {								// short form of document.ready(()=>{})

    $("button").click(function(){
    document.write( "ready!" );
    });
})
<button>Click me to hide paragraphs</button>



//--------------------------------------------------------------------------------------------------- //add elem

var txt1 = "<b>I </b>";                    // Create element with HTML

var txt2 = $("<i></i>").text("love ");     // Create with jquery ---
var txt3 = document.createElement("b");    // Create with DOM
txt3.innerHTML = "jQuery!";

$("img").after(txt1, txt2, txt3);          // Insert new elements after <img>
$("#test").hide();	//id
$(".test").hide();	//class											------------[hide,show]  = [toggle]

$("p").hide(200);		// ANIMATION AUTO
//$(selector).show(speed,callback);

$("p.intro")		//Selects all <p> elements with class="intro"	
$("p:first")		//Selects the first <p> element	
$("ul li:first")	//Selects the first <li> element of the first <ul>	
$("ul li:first-child")		//Selects the first <li> element of every <ul>	
$("[href]")		//Selects all elements with an href attribute
$(":button")	//Selects all <button> elements and <input> elements of type="button"	
$("tr:even")	//Selects all even <tr> elements	
$("tr:odd")		//Selects all odd <tr> elements

$("p").prepend("yres") //beggining of tag
$("p").append("yres")  // last of tag


//--------------------------------------- avoid $ conflict from other
var $j = jQuery.noConflict();
 
$j(document).ready(function() {
    $j( "div" ).hide();
});
 
window.onload = function() {
    var mainDiv = $( "main" );
}

//-------------------------------------------setting attribute
$( "a" ).attr({
    title: "all titles are the same too!",
    href: "somethingNew.html"
});

//----get attr
$( "a" ).attr( "href" ); // Returns the href for the first a element in the document



//-------------------------------------------------------------------------------------------- [EVENTS]
//	Mouse Events	Keyboard Events		Form Events		Document/Window Events
//	click			keypress			submit			load
//	dblclick		keydown				change			resize
//	mouseenter		keyup				focus			scroll
//	mouseleave	 	blur				unload

$("p").click(function(){
  // action goes here!!
});

//-------------------------------------------------------------------------------------------- events mouse
$(document).ready(function(){
  $("#p1").mouseenter(function(){								//-----manual HOVER()	("background-color", "") clear css
    $("#p1").css({"background-color":"orange","color":"white"})
  });
  $("#p1").mouseleave(function(){
    $("#p1").css({"background-color":"white","color":"black"})
  });
  $("#p1").click(function(){
  	$("#p1").remove();
  });
});


// --------------------------------------------------------------------form focus/unfocus
$(document).ready(function(){
  $("input").focus(function(){
    $(this).css("background-color", "yellow");
  });
  $("input").blur(function(){
    $(this).css("background-color", "grey");
  });
});


//--------------------------------------------------------------------------------- scroll to element (scrollTop)
$(document).ready(function (){
    $("#click").click(function (){
        $('html, body').animate({
            scrollTop: $("#div1").offset().top
        }, 1000);
    });
});

//------------------------------------------------------------------------------------multiple event on singletag (ON)
$("p").on({
  mouseenter: function(){
    $(this).css("background-color", "lightgray");
  },
  mouseleave: function(){
    $(this).css("background-color", "lightblue");
  },
  click: function(){
    $(this).css("background-color", "yellow");
  }
});

//------------------------------------------------------------------------------------ 	LIST TO HTML
$(function(){
	$("button").click(()=>{
        var myItems = [];
        for ( var i = 0; i < 100; i++ ) {
          myItems.push( "<li>item " + i + "</li>" );
        }
		$("#p1").append( myItems.join( "" ) );				// inside <p1> at end	[or prepend for top of <p1> in p1]
		//or $("#p1").after( myItems.join( "" ) );			// after <p1>
		//or $("#p1").html( myItems.join( "" ) );			// HTML replace #p1 with content
    })
})


//-------------------------------------------------------------------------LOOP
var supercarObject = {"brand": "Lamborghini", "model" : "Huracan", "origin": "Italy"};

$.each(supercarObject, function(key, value){
    $("#result").append(key + ": " + value + '<br>');
});

