/*!
 * Adrian Wilhelm, Jeffrey Smith, Lucien Gygli
 * Copyright 2017 Adrian Wilhelm, Jeffrey Smith, Lucien Gygli
 * Lösung ...
 */

$(document).ready(function () {
	//Log zum bestätigen das Jquery funktioniert
	console.log("Jquery initialisiert");
	calculate();
	write();

	var i_familie
	var i_ahv_iv_eo
	var i_alv
	var i_bvg_obligatorium
	var i_alv_val
	var i_ahv_iv_eo_val
	var i_bvg_val
	var i_nbu_val
	var i_deductions
	var i_nehmer_lohn_netto
	var i_nehmer_lohn_real
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

	var i_nehmer_unter16
	var i_nehmer_ueber16

	//JS Funktionen
	function calculate() {
		//AHV IV EO
		i_ahv_iv_eo = 5.125;
		i_ahv_iv_eo_val = localStorage.getItem("i_nehmer_lohn") * (i_ahv_iv_eo / 100.0);

		//ALV
		if (parseFloat(localStorage.getItem("i_nehmer_lohn")) * 12.0 < 148200.0) {
			i_alv = 1.1;
		} else { i_alv = 0.5; }
		i_alv_val = localStorage.getItem("i_nehmer_lohn") * (i_alv / 100.0);


		if (localStorage.getItem("i_nehmer_lohn") * 12.0 < 21150) {
			i_bvg_obligatorium = 0;
		} else if (localStorage.getItem("i_nehmer_lohn") * 12.0 < 24675) {
			i_bvg_obligatorium = 3525;
		} else if (localStorage.getItem("i_nehmer_lohn") * 12.0 < 84600) {
			i_bvg_obligatorium = localStorage.getItem("i_nehmer_lohn") - 21150;
		} else { i_bvg_obligatorium = 59925; }

		//BVG
		i_bvg_val = i_bvg_obligatorium * (localStorage.getItem("i_nehmer_bvg") / 100);

		//NBU
		i_nbu_val = localStorage.getItem("i_nehmer_lohn") * (localStorage.getItem("i_nehmer_nbu") / 100);

		//Abzüge Total
		i_deductions = i_ahv_iv_eo_val + i_alv_val + i_bvg_val + i_nbu_val;

		//Nettolohn
		console.log(localStorage.getItem("i_nehmer_lohn"));
		console.log(localStorage.getItem("i_familie"));
		console.log(i_deductions);
		i_nehmer_lohn_netto = parseFloat(localStorage.getItem("i_nehmer_lohn")) + parseFloat(localStorage.getItem("i_familie")) - parseFloat(i_deductions);
		console.log("nettolohn: " + i_nehmer_lohn_netto);
		//Reallohn
		i_nehmer_lohn_real = i_nehmer_lohn_netto - localStorage.getItem("i_nehmer_spesen");

	}

	function write() {
		document.getElementById("o_geber_name").innerHTML = localStorage.getItem("i_geber_name");
		document.getElementById("o_geber_street").innerHTML = localStorage.getItem("i_geber_strasse");
		document.getElementById("o_geber_plzort").innerHTML = localStorage.getItem("i_geber_plz") + " " + localStorage.getItem("i_geber_ort");

		document.getElementById("o_nehmer_name").innerHTML = localStorage.getItem("i_nehmer_vorname") + " " + localStorage.getItem("i_nehmer_name");

		document.getElementById("o_date").innerHTML = localStorage.getItem("i_datum");
		document.getElementById("o_nehmer_street").innerHTML = localStorage.getItem("i_nehmer_strasse");
		document.getElementById("o_nehmer_plzort").innerHTML = localStorage.getItem("i_nehmer_plz") + " " + localStorage.getItem("i_nehmer_ort");
		document.getElementById("o_ahv_number").innerHTML = localStorage.getItem("i_nehmer_ahv");

		document.getElementById("o_ortdate").innerHTML = localStorage.getItem("i_nehmer_ort") + ", " + localStorage.getItem("i_date_bezahlung");

		document.getElementById("o_lohn").innerHTML = Number(localStorage.getItem("i_nehmer_lohn")).toFixed(2);
		document.getElementById("o_familie").innerHTML = Number(localStorage.getItem("i_familie")).toFixed(2);

		document.getElementById("o_ahv_perc").innerHTML = i_ahv_iv_eo.toFixed(3);
		document.getElementById("o_ahv_from").innerHTML = Number(localStorage.getItem("i_nehmer_lohn")).toFixed(2);
		document.getElementById("o_ahv_val").innerHTML = Number(i_ahv_iv_eo_val).toFixed(2)

		document.getElementById("o_alv_perc").innerHTML = i_alv.toFixed(3);
		document.getElementById("o_alv_from").innerHTML = Number(localStorage.getItem("i_nehmer_lohn")).toFixed(2);
		document.getElementById("o_alv_val").innerHTML = Number(i_alv_val).toFixed(2);

		document.getElementById("o_bvg_perc").innerHTML = localStorage.getItem("i_nehmer_bvg").toFixed(3);
		document.getElementById("o_bvg_from").innerHTML = Number(i_bvg_obligatorium).toFixed(2);
		document.getElementById("o_bvg_val").innerHTML = Number(i_bvg_val).toFixed(2);
		//TODO!
		document.getElementById("o_nbu_perc").innerHTML = localStorage.getItem("i_nehmer_nbu").toFixed(3);
		document.getElementById("o_nbu_from").innerHTML = Number(localStorage.getItem("i_nehmer_lohn")).toFixed(2);
		document.getElementById("o_nbu_val").innerHTML = Number(i_nbu_val).toFixed(2);

		document.getElementById("o_deductions").innerHTML = Number(i_deductions).toFixed(2);

		document.getElementById("o_lohn_netto").innerHTML = Number(i_nehmer_lohn_netto).toFixed(2);

		document.getElementById("o_spesen").innerHTML = Number(localStorage.getItem("i_nehmer_spesen")).toFixed(2);

		document.getElementById("o_lohn_real").innerHTML = Number(i_nehmer_lohn_real).toFixed(2);

		document.getElementById("o_date_transaction").innerHTML = localStorage.getItem("i_date_bezahlung");
		document.getElementById("o_nehmer_iban").innerHTML = localStorage.getItem("i_nehmer_iban");
		document.getElementById("o_geber_iban").innerHTML = localStorage.getItem("i_geber_iban");

	}

});