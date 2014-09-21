
height = Ti.Platform.displayCaps.platformHeight,
width = Ti.Platform.displayCaps.platformWidth;

console.log('alto '+height+' ancho '+width);

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
  	top: 30,
  	width: Ti.UI.SIZE, height: '10%'
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
	var tabAdministrados = miTabGroup.getTabs();
	Ti.API.info(miTabGroup.getActiveTab());
	Ti.API.info(tabAdministrados[1]);
	Ti.API.info(tabAdministrados[0]);
	miTabGroup.setActiveTab(tabAdministrados[1]);
});