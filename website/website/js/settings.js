/*!
 * Adrian Wilhelm, Jeffrey Smith, Lucien Gygli
 * Copyright 2017 Adrian Wilhelm, Jeffrey Smith, Lucien Gygli
 * Lösung ...
 */

$(document).ready(function() {
	//Log zum bestätigen das Jquery funktioniert
	console.log("Jquery initialisiert")

	//Eingabe-/Ausgabevariablen initialisieren
	//Info Arbeitnehmer
	var i_datum
	var i_date_bezahlung

	var i_nehmer_vorname
	var i_nehmer_name
	var i_nehmer_birthdate
	var i_nehmer_ahv

	var i_nehmer_strasse
	var i_nehmer_plz
	var i_nehmer_ort

	var i_nehmer_lohn
	var i_nehmer_iban

	var i_geber_name
	var i_geber_strasse
	var i_geber_plz
	var i_geber_ort
	var i_geber_iban

	var i_nehmer_bvg
	var i_nehmer_nbu

	var i_nehmer_spesen

	var i_nehmer_unter16 = 0;
	var i_nehmer_ueber16 = 0;
	var i_familie



	//JQuery Funktionen
	$('#btn_gen').click(function() {
		read();
		store();
		console.log("Button clicked");
		window.location = "payroll.html"; 
	});

	//JS Funktionen
	function read() {
		i_datum 					= $('#i_datum').val();
		i_date_bezahlung 			= $('#i_date_bezahlung').val();

		i_nehmer_vorname 			= $('#i_nehmer_vorname').val();
		i_nehmer_name 				= $('#i_nehmer_name').val();
		i_nehmer_birthdate 			= $('#i_nehmer_birthdate').val();
		i_nehmer_ahv 				= $('#i_nehmer_ahv').val();

		i_nehmer_strasse 			= $('#i_nehmer_strasse').val();
		i_nehmer_plz 				= $('#i_nehmer_plz').val();
		i_nehmer_ort 				= $('#i_nehmer_ort').val();

		i_nehmer_lohn 				= $('#i_nehmer_lohn').val();
		i_nehmer_iban 				= $('#i_nehmer_iban').val();

		i_geber_name 				= $('#i_geber_name').val();
		i_geber_strasse 			= $('#i_geber_strasse').val();
		i_geber_plz 				= $('#i_geber_plz').val();
		i_geber_ort 				= $('#i_geber_ort').val();
		i_geber_iban 				= $('#i_geber_iban').val();

		i_nehmer_bvg 				= $('#i_nehmer_bvg').val();		
		i_nehmer_nbu 				= $('#i_nehmer_nbu').val();

		i_nehmer_spesen 			= $('#i_nehmer_spesen').val();

		if($('#i_nehmer_unter16').val()!=""){
			i_nehmer_unter16 		= $('#i_nehmer_unter16').val();}

		if($('#i_nehmer_ueber16').val()!=""){
			i_nehmer_ueber16 		= $('#i_nehmer_ueber16').val();}

		i_familie					= parseInt(i_nehmer_unter16)*200+parseInt(i_nehmer_ueber16)*250;

		console.log(i_nehmer_unter16);
		console.log(i_nehmer_ueber16);
		console.log(i_familie);
	}

	function store() {
		localStorage.setItem("i_datum", i_datum);
		localStorage.setItem("i_date_bezahlung", i_date_bezahlung);

		localStorage.setItem("i_nehmer_vorname", i_nehmer_vorname);
		localStorage.setItem("i_nehmer_name", i_nehmer_name);
		localStorage.setItem("i_nehmer_birthdate", i_nehmer_birthdate);
		localStorage.setItem("i_nehmer_ahv", i_nehmer_ahv);

		localStorage.setItem("i_nehmer_strasse", i_nehmer_strasse);
		localStorage.setItem("i_nehmer_plz", i_nehmer_plz);
		localStorage.setItem("i_nehmer_ort", i_nehmer_ort);

		localStorage.setItem("i_nehmer_lohn", i_nehmer_lohn);
		localStorage.setItem("i_nehmer_iban", i_nehmer_iban);

		localStorage.setItem("i_geber_name", i_geber_name);
		localStorage.setItem("i_geber_strasse", i_geber_strasse);
		localStorage.setItem("i_geber_plz", i_geber_plz);
		localStorage.setItem("i_geber_ort", i_geber_ort);
		localStorage.setItem("i_geber_iban", i_geber_iban);

		localStorage.setItem("i_nehmer_bvg", i_nehmer_bvg);
		localStorage.setItem("i_nehmer_nbu", i_nehmer_nbu);

		localStorage.setItem("i_nehmer_spesen", i_nehmer_spesen);

		localStorage.setItem("i_nehmer_unter16", i_nehmer_unter16);
		localStorage.setItem("i_nehmer_ueber16", i_nehmer_ueber16);
		localStorage.setItem("i_familie", i_familie);

		console.log("Input stored");
	}
	
});