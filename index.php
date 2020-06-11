<html>
<head>
	<meta charset="UTF-8"/>
	<title><?php echo $title; ?></title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	<!-- include libraries(jQuery, bootstrap) -->
	<link href="bootstrap-3.3.7-dist/css/bootstrap.min.css" rel="stylesheet">
	<script src="jquery-3.5.1.min.js"></script>
	<script src="bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
	<!-- include summernote css/js -->
	<link href="summernote/summernote.min.css" rel="stylesheet">
	<script src="summernote/summernote.min.js"></script>
	<link rel="stylesheet" href="css/main.css"/>
</head>
<body>
	
	
	<div class="loading"></div>
	
	<div class="app">
		<div id="title">Hello</div>
		<div id="page">Hell</div>
	</div>
	
	<div class="menu">
		
		<div class="btns">
			<span id="logo"></span>
			<span id="save" class="glyphicon glyphicon-floppy-disk"></span>
			<span id="open" class="glyphicon glyphicon-folder-open"></span>
			<span id="image" class="glyphicon glyphicon-picture"></span>
			<span id="pixabay" class="glyphicon glyphicon-search"></span>
			<span id="cmd" onclick="desktop.resize();" class="glyphicon glyphicon-console"></span>
			<span id="info" class="glyphicon glyphicon-info-sign"></span>
		</div>
		
		<div class="page">
			
			<div id="load">
			
			</div>
			
			<div id="pixabay">
				<form onsubmit="return false;">
					<input type="text" placeholder="pixabay.." autofocus="autofocus" />
					<input type="submit"/>
				</form>
				<div class="result">
					<img src="img/add.svg" width="50px"/>
				</div>
			</div>
			
			<div id="cmd">
				<form onsubmit="$('#cmd .result').append('<p>'+eval($('#m').val())+'</p>'); return false;">
					<input type="text" id="m" value="menu.hide()" placeholder="desktop"/>
					<input type="submit"/>
				</form>
				<div class="result">
					<img src="img/add.svg" width="50px"/>
				</div>
			</div>
			
			
		</div>
	
	</div>
	
	
	<script src="js/methods.js"></script>
	<script src="js/file.js"></script>
	<script src="js/main.js"></script>
</body>
</html>
