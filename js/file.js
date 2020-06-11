

class File {
	constructor(el){
		var cont = $(el);
		
		var file = $("<div>");
		cont.append(file);
		file.summernote({
			width: "100%",
			height: "100%"
			});
		
		this.cont = cont;
		this.file = file;
		
		
	}
	
	
	p(para){
		var node = document.createElement('p');
		node.innerHTML = para;
		this.file.summernote('insertNode', node);
		
	}
	
	img(src){
		this.file.summernote('insertImage', src);
	}
	
	hr(){
		this.file.summernote("editor.insertHorizontalRule");
	}
	
};
