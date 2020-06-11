

menu.show("pixabay");

$(document).ready(function(){
	
	
	desktop.resize();
	
	$(window).resize(function(){
		desktop.resize();
	});
	
	setTimeout(function(){
		loading.hide();
	}, 1000);
	
	
	// Toggle Menu
	$("#logo").click(function(){
	
		if(menu.status == true){
			menu.hide();
		}else{
			menu.show();
		}
	});
	
	// btns onclick
	el_menu_btns.children(".glyphicon").click(function(){
		var el = $(this);
		
		switch(el.attr("id")){
			case "pixabay":
				menu.show("pixabay");
				break;
			case "cmd":
				menu.show("cmd");
				break;
			case "info":
				menu.show("info");
				break;
		}
	});
	
});


