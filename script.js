$(window).ready(function() {
	//alert("the webpage is ready!");
	$("nav > p:first-of-type"). on("click" , function(){
		$(this).siblings().each(function(index) {
			$(this).slideToggle((index + 1) * 500);
			/*這裡的this refers to each sibling*/

		});
	});
});

		

		
		