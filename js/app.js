$(document).ready( function() {
	$('fieldset').on('click', 'button.btn', function(event) {
		$('.twitter').show();
		setTimeout(function () {
		$('.twitter').hide();
		console.log('no');
	}, 10000);
	});

});