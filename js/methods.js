
var el_load = $("body > div.loading");

var el_app = $("body > div.app");
var el_app_title = $("body > div.app > div#title");
var el_app_page = $("body > div.app > div#page");
var el_menu = $("body > div.menu");
var el_menu_btns = $("body > div.menu > div.btns");
var el_menu_btns_logo = $("body > div.menu > div.btns > span#logo");
var el_menu_page = $("body > div.menu > div.page");


var part_pixabay = el_menu_page.children("#pixabay");


var loading = {
	hide: function(){
		el_load.hide();
	}
};
/* Desktop / App part */
var desktop = {
	w: $(window).width(),
	h: $(window).height(),
	mwidth: 200,
	resize: function(){
		var w = $(window).width();
		var h = $(window).height();
		
		
		if(w <= 500){
			el_app.css({width: w-150});
			el_menu.css({width: 150});
			el_menu_page.css({width: 110});
			el_menu_btns.css({width: 40});
			el_menu_btns_logo.css({width:35, height:35, margin:2.5});
		}else if(w <= 700){
			el_app.css({width: w-200});
			el_menu.css({width: 200});
			el_menu_page.css({width: 150});
		}else{
			el_app.css({width: w-300});
			el_menu.css({width: 300});
			el_menu_page.css({width: 250});
		}
		
		el_app_page.css({height:h-20});
		desktop.w = $(window).width();
		desktop.h = $(window).height();
		desktop.mwidth = el_menu.css("width").split("px")[0];
	}
};

/* menu part */
var menu = {
	status: true,
	title: function(t){
		el_menu_page_title.html(t);
	},
	hide: function(){
		menu.status = false;
		el_menu.css({width: 50});
		el_app.css({width: desktop.w-50});
		
	},
	show(page=false){
		
		
		
		if(menu.status == false){
			menu.status = true;
			
			el_menu.css({width: desktop.mwidth});
			el_app.css({width: desktop.w - desktop.mwidth});
		}
		
		if(page != false){
			el_menu_btns.children(".glyphicon").removeClass("in");
			el_menu_page.children("div").hide();
			
			el_menu_btns.children("#"+page).addClass("in");
			
			
			
			switch(page){
				case "pixabay":
					el_menu_page.children("#"+page).show();
					part_pixabay.children("input").val("ewrwer");
					break;
				case "cmd":
					el_menu_page.children("#"+page).show();
					
					break;
				case "info":
					el_menu_page.children("#load").show();
					menu.load("info.html");
					break;
			}
			
			
			
		}
			
	},
	load: function(url){
		el_menu_page.children("#load").load(url);
	}
};
