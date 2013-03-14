// Declare global variables
var participant_id = 0;
var tournament_id = 0;
var participants = new Array;
var participant_name_field;
var participants_table_body;
var institute_name_field;

function add_participant_ajax() {
	// Verify that the participant name field is correctly filled, or else abort
	if (!participant_name_field.val()) {
		participant_name_field.addClass('viga');
		return false;
	}
	// Add specified row from participant table
	$.post("<?=BASE_URL?>tournaments/add_participant", {
		"participant_name": participant_name_field.val(),
		"institute_name"  : institute_name_field.val(),
		"tournament_id"   : tournament_id

	})
		.done(function (data) {
			if (data == 'OK') {
				// Add new row to participants' table
				participants_table_body.append('' +
					'<tr id="participant' + participant_id + '">' +
					'<td>x</td>' +
					'<td>' + participant_name_field.val() + '</td>' +
					'<td>' + institute_name_field.val() + '</td>' +
					'<td><input type="checkbox" onclick="toggle_favorite(' + participant_id + ')"></td>' +
					'<td>' +
					'<a href="#" onclick="if (confirm(' + "'Oled kindel?'" + ')) remove_participant_ajax(' + participant_id + '); return false"><i class="icon-trash"></i></a>' +
					'</td>' +
					'</tr>');

				// Store new participant in participants array
				participants[participant_id] = {
					"participant_name"    : participant_name_field.val(),
					"institute_name"      : institute_name_field.val(),
					"participant_favorite": false
				};

				// Reset numbers
				reset_numbers();

				// Bump participants' array's next id number
				participant_id++;

				// Clear participant name and institute fields
				institute_name_field.val('');
				participant_name_field.val('');
			}
			else
				alert("Viga\n\nServer vastas: '" + data + "'.\n\nKontakteeru arendajaga.");
		});
}
function remove_participant_ajax(id) {

	// Remove specified row from participant table
	$.post("<?=BASE_URL?>tournaments/remove_participant/" + id)
		.done(function (data) {
			if (data == 'OK')
				$('table#participants-table>tbody>tr#participant' + id).remove();
			else
				alert("Viga\n\nServer vastas: '" + data + "'.\n\nKontakteeru arendajaga.");
		});

	// Reset numbers
	reset_numbers();

}

function add_participant() {

	// Verify that the participant name field is correctly filled, or else abort
	if (!participant_name_field.val()) {
		participant_name_field.addClass('viga');
		return false;
	}
	var institute_name_length = $('[name="institute_name"]').val().length;
	if(institute_name_length > 17){
		alert("Instituudi nimi on liiga pikk!");
		return false;
	}

	// Add new row to participants' table
	participants_table_body.append('' +
		'<tr id="participant' + participant_id + '">' +
		'<td>x</td>' +
		'<td>' + participant_name_field.val().trim() + '</td>' +
		'<td>' + institute_name_field.val().trim() + '</td>' +
		'<td><input type="checkbox" onclick="toggle_favorite(' + participant_id + ')"></td>' +
		'<td>' +
		'<a href="#" onclick="if (confirm(' + "'Oled kindel?'" + ')) remove_participant(' + participant_id + ')"><i class="icon-trash"></i></a>' +
		'</td>' +
		'</tr>');

	// Store new participant in participants array
	participants[participant_id] = {
		"participant_name"    : participant_name_field.val(),
		"institute_name"      : institute_name_field.val(),
		"participant_favorite": false
	};

	// Bump participants' array's next id number
	participant_id++;

	// Clear participant name and institute fields
	institute_name_field.val('');
	participant_name_field.val('');

	// Reset numbers
	reset_numbers();

	// Cancel <a>'s onclick event to prevent page reload
	return false;
}
function toggle_favorite(participant_id) {
	participants[participant_id]['participant_favorite'] = participants[participant_id]['participant_favorite'] ? false : true;
}
function reset_numbers() {

	// Initialize row counter
	var n = 1;

	// Iterate through each first cell in every row in participants table and write row number
	participants_table_body.find('>tr>td:nth-child(1)').each(function () {
		$(this).html(n++ + '.');
	});
}

function convert_table_to_json() {
	// Check that tournament_name is given
	if (!$('#tournament-name').val()) {
		$('#tournament-name').addClass('viga');
		return false;
	}

	// Check that game length is not 0
	if (!$('#game-length').val() || $('#game-length').val() == '0' || $('#game-length').val() == '00') {
		$('#game-length').addClass('viga');
		return false;
	}

// JSONize participants array
	var json_text = JSON.stringify(participants, null, 2);

	// Assign JSONized array to hidden input field
	$('#participants').val(json_text);

	$(".datepicker").datetimepicker();

	var start = $('#tournament_start').val();
	var end = $('#tournament_end').val();
		if (start > end) {
			alert("Turniiri algus peab olema varasem kui lõpp!");
			$('#tournament_start').addClass('viga');
			$('#tournament_end').addClass('viga');
			return false;
		}


	// Submit form
	$('#tournament-add-form').submit();
}
function remove_participant(id) {

	// Remove specified row from participant table
	$('table#participants-table>tbody>tr#participant' + id).remove();

	// Reset numbers
	reset_numbers();
}

function validate(evt) {
	var theEvent = evt || window.event;
	var key = theEvent.keyCode || theEvent.which;
	key = String.fromCharCode(key);
	var r1 = /[0-9]/;
	var r2 = /[\b]/;
	if (!(r1.test(key) || r2.test(key))) {
		theEvent.returnValue = false;
		if (theEvent.preventDefault) theEvent.preventDefault();
	}
}

$(function () {
	// Datepicker function for Firefox and IE

	$('.datepicker').datetimepicker({
		dateFormat: 'dd.mm.yy',
		stepMinute: 5
	});
	$('.spinner').spinner();

	// Initialize place_name combobox
	$('.makeEditable').editableSelect();

	// Cache repetitive and expensive jQuery element finding operation results to variables (makes it faster)
	institute_name_field = $('input[name="institute_name"]');
	participant_name_field = $('#participant_name');
	participants_table_body = $('table#participants-table > tbody:last');

	var keyStop = {
		8 : ":not(input:text, textarea)", // stop backspace = back
		13: "input:text", // stop enter = submit

		end: null
	};
	$(document).bind("keydown", function (event) {
		var selector = keyStop[event.which];

		if (selector !== undefined && $(event.target).is(selector)) {
			event.preventDefault(); //stop event
		}
		return true;
	});
});
