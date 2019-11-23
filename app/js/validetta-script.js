// JavaScript Document
$(document).ready(function(){
	


jQuery(function($){
	$.datepicker.regional['fr'] = {
		closeText: 'Fermer',
		prevText: '&#x3c;Préc',
		nextText: 'Suiv&#x3e;',
		currentText: 'Aujourd\'hui',
		monthNames: ['Janvier','Fevrier','Mars','Avril','Mai','Juin',
		'Juillet','Aout','Septembre','Octobre','Novembre','Decembre'],
		monthNamesShort: ['Jan','Fev','Mar','Avr','Mai','Jun',
		'Jul','Aou','Sep','Oct','Nov','Dec'],
		dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
		dayNamesShort: ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],
		dayNamesMin: ['Di','Lu','Ma','Me','Je','Ve','Sa'],
		weekHeader: 'Sm',
		dateFormat: 'dd-mm-yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: '',
		minDate: 0,
		maxDate: '+12M +0D',
		numberOfMonths: 1,
		showButtonPanel: true,
		showAnim:'fold',
		showOn:"button",
		};
	$.datepicker.setDefaults($.datepicker.regional['fr']);
});



  $( function() {
    $( "#datepicker" ).datepicker();
  } );




$( function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
	

$( "#tags" ).autocomplete({
  source: function( request, response ) {
          var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( request.term ), "i" );
          response( $.grep( availableTags, function( item ){
              return matcher.test( item );
          }) );
      },
});

  } );


	
$('.form').validetta({
  onValid : function( event ) {
    event.preventDefault(); // Will prevent the submission of the form
   
   //alert( 'Nice, Form is valid.' );
 
 // ici faire la requête ajax
var donnees = $(".form").serialize();	  
 $.ajax({
   	 // 1) on définit le fichier vers lequel on envoye la requête POST
       url : "form.php",
	
	// 2/ on spécifie la méthode  
       type : 'POST', // Le type de la requête HTTP, ici  POST
    
	// 3) on définit les variables POST qui sont ennvoyées au fichier .php qui les récupère sous forme de $_POST["nom"] 
	  data : donnees, // On fait passer nos variables au script coucou.php
     
	 // 4) format de retour du fichier php dans "data"
	   dataType : 'html',
	   
	   // 5) fonction à effectuer en cas de succès
	   success : function(data){ //  contient le HTML renvoyé
        
		
		$('#contenu').html(data);  
		
		 
       
	   
	   } // success
   
   
   }); // $.ajax function
 }, // valid
  onError : function( event ){
    //alert( 'Stop bro !! There are some errors.');
  
  
  }, // error
  
  
  display : 'bubble',
  errorClass : 'validetta-error',
  /** Same for valid validation */
  validClass : 'validetta-valid', // Same for valid validation
  bubblePosition: 'right', // Bubble position // right / bottom
  bubbleGapLeft: 15, // Right gap of bubble (px unit)
  bubbleGapTop: 0, // Top gap of bubble (px unit)
  /* To enable real-time form control, set this option true. */
  realTime : true
  
});
	




	
}); //ready	