$(document).ready(function(){
	$("#search").on("keyup", function (){
		var search = $(this).val().toLowerCase();
		$("img").filter(function(){
			if ($(this).attr("alt").toLowerCase().indexOf(search) > -1) {
				$(this).parent().show();
			} else {
				$(this).parent().hide();
			}
		});
	});
});