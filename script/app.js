
$(function() { 

	$("#temp-demo a").click(function(e) {
		$(".cards, .add").toggle(); 
		return false; 
	}); 

	$("#demo-details").click(function(e){
	
		$(e.target).closest("div").toggleClass("selected");
		
		$(".cards").find(".card").fadeTo(0, 0);
		$(".cards").slideToggle(200, function() {
			$(this).find(".card").fadeTo(200, 1);
		});
	});

	$("#profile-search").keyup(function(e) {
		var text = $(this).val();

		if(text = "") {
			$(".card-category").show();
		} else {
			$(".card-category").hide();
			$(".card-category").each(function(){
				if($(this).text().toLowerCase().indexOf(text) != -1) {
					$(this).show();
				}
			});
		}
	});

	$(".card-actions .edit, .card-actions .save").click(function(e) {
		var card = $(e.target).closest(".card"); 
		card.find(".edit-toggle").toggle(); 
		card.find(".card-actions .save:visible").css("display", "inline-block");
		return false; 
	})


});