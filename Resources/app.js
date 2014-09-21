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
	// var data = [];
	// var path = Titanium.Filesystem.resourcesDirectory;
	// Ti.Database.install(path+'db/noticias.sqlite','noticias');
	// // Ti.Database.install('db/noticias.sqlite','noticias');
	// var db = Ti.Database.open('noticias');
	// var resultado = db.execute('select * from periodicos');
	// while(resultado.isValidRow()){
		// var periodico = {};
		// periodico.idPeriodico = resultado.fieldByName('idPeriodico');
		// periodico.nombrePeriodico = resultado.fieldByName('nombrePeriodico');
		// periodico.urlImg = resultado.fieldByName('urlImg');
		// periodico.idSeccionFavorita = resultado.fieldByName('idSeccionFavorita');
		// data.push(periodico);
		// resultado.next();
	// }
	// db.close();
	// return data;
	
	
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