altoDispositivo = Ti.Platform.displayCaps.platformHeight,
anchoDispositivo = Ti.Platform.displayCaps.platformWidth;

console.log('alto '+altoDispositivo+' ancho '+anchoDispositivo);

var miTabGroup = Ti.UI.createTabGroup();

var ventana1 = Ti.UI.createWindow({
	title: 'ventana 1',
	layout: 'vertical',
	backgroundColor: '#F2F7FC',
});

var pestana1 = Ti.UI.createTab({
	title: 'Sentencia SQL',
	window: ventana1,
});

var etSQL = Ti.UI.createLabel({
	color: '#545861',
  	font: { fontSize:12 },
  	text: 'Arme su sentencia SQL',
  	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  	// top: 30,
  	width: Ti.UI.SIZE,
  	height: '10%'
});

ventana1.add(etSQL);

var btnConsultar = Titanium.UI.createButton({
   title: 'Consultar',
   top: 10,
});

ventana1.add(btnConsultar);

var ventana2 = Ti.UI.createWindow({
	title: 'ventana 2',
	backgroundColor: '#F2F7FC',
});

var pestana2 = Ti.UI.createTab({
	title: 'Resultado SQL',
	window: ventana2,
});

miTabGroup.addTab(pestana1);
miTabGroup.addTab(pestana2);

miTabGroup.open();

btnConsultar.addEventListener('click', function(e) {
	var data = [];
	var path = Titanium.Filesystem.resourcesDirectory;
	Ti.Database.install(path+'db/usuarios.sqlite','usuarios');
	// Ti.Database.install('db/noticias.sqlite','noticias');
	var db = Ti.Database.open('usuarios');
	var resultado = db.execute('select * from usuario');
	while(resultado.isValidRow()){
		var usuario = {};
		usuario.id_usuario = resultado.fieldByName('id_usuario');
		usuario.nombre = resultado.fieldByName('nombre');
		usuario.ap_paterno = resultado.fieldByName('ap_paterno');
		usuario.edad = resultado.fieldByName('edad');
		data.push(usuario);
		resultado.next();
	}
	db.close();
	
	console.log('RESULTADO ==== ' + data);
	
	var etprueba = Ti.UI.createLabel({
		color: '#545861',
	  	font: { fontSize:12 },
	  	text: 'prueba',
	  	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	  	top: 30,
	  	width: Ti.UI.SIZE, height: '10%'
	});
	ventana2.add(etprueba);
	var tabAdministrados = miTabGroup.getTabs();
	miTabGroup.setActiveTab(tabAdministrados[1]);
});