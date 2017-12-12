/*!
 * Adrian Wilhelm, Jeffrey Smith, Lucien Gygli
 * Copyright 2017 Adrian Wilhelm, Jeffrey Smith, Lucien Gygli
 */

var allowed = true;
var state = 1;

$("document").ready(function () {
    $("#contentPayroll").toggle();
    $("#children").toggle();
    allowed = true;
    state = 1;
})

function togglePayroll() {
    $("#contentSettings").toggle();
    $("#contentPayroll").toggle();

    if (state == 1) {
        state = 2;
        alert("Um ein PDF zu erhalten oder um die Datei ausdrücken, drücken sie \"Strg\"/\"Ctrl\" und die \"P\"")
    } else {
        state = 1;
    }
}

$("btn_gen").click(function () {
    if (allowed == true) {
        $("#contentPayroll").toggle();
    }
})

function toggleChildren() {
    $("#children").toggle();
}

function getPayroll() {

    getName();

    togglePayroll();

}

var name = "";

// Arbeitsnehmer

function getName() {
    str = $("#i_nehmer_vorname").val() + '\xa0' + $("#i_nehmer_name").val();
    $("#o_nehmer_name").val(str);
}

function getStrasse() {
    str = $("#i_nehmer_strasse").val();
    $("#o_nehmer_street").val(str);
}

function getStrasse() {
    str = $("#i_nehmer_plz").val() + '\xa0' + $("#i_nehmer_ort");
    $("#o_nehmer_plzort").val(str);
}

