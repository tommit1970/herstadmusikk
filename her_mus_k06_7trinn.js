// Tenkt forbedring: Jeg skal få hentet var k06_mus-tabellen via elevmaal7.xml

makeAside_GoalArray();


// Denne funksjonen skriver ut en av maalene til K-06, musikk etter 7.trinn
function makeAside_GoalArray(){	
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function (){
		if(this.readyState == 4 && this.status == 200){
			getXMLGoals(this);
		}
	}
	
	xhttp.open('GET', 'K-06ElevensMaal/maalTrinn7.xml', true);
	xhttp.send();
}

function getXMLGoals(xml){
	var xmlDoc = xml.responseXML, y;
	
	var x = xmlDoc.getElementsByTagName('title');
//	console.log(x.length); // Skriver det ut til console

	var y = x[randomNum(x)].childNodes[0];
	
//	console.log(y.nodeValue); // Skriver det ut i console

// Putter det i aside-tag med id='randomGoal'	
	document.getElementById('randomGoal').textContent = y.nodeValue;

}

function randomNum(tabell){
	// Velger et tilfeldig tall ut fra tabellens lengde
	return Math.floor(Math.random()*tabell.length);
}




// Her er en EventListener koblet til alle punktene, altså alle-punkt-button-id='k06_07_0[1-6]'

document.getElementById('k06_07_01').addEventListener('click', function(){
	
	firstLevelFunction(0); // En mindre pga. array

});

document.getElementById('k06_07_02').addEventListener('click', function(){
	
	firstLevelFunction(1);
	
});

document.getElementById('k06_07_03').addEventListener('click', function(){
	
	firstLevelFunction(2);
	
});

document.getElementById('k06_07_04').addEventListener('click', function(){
	
	firstLevelFunction(3);
	
});

document.getElementById('k06_07_05').addEventListener('click', function(){
	
	firstLevelFunction(4);
	
});

document.getElementById('k06_07_06').addEventListener('click', function(){
	
	firstLevelFunction(5);

});

document.getElementById('k06_07_07').addEventListener('click', function(){
	
	firstLevelFunction(6);

});

document.getElementById('k06_07_08').addEventListener('click', function(){
	
	firstLevelFunction(7);

});

document.getElementById('k06_07_09').addEventListener('click', function(){
	
	firstLevelFunction(8);

});

document.getElementById('k06_07_10').addEventListener('click', function(){
	
	firstLevelFunction(9);

});

document.getElementById('k06_07_11').addEventListener('click', function(){
	
	firstLevelFunction(10);

});

document.getElementById('k06_07_12').addEventListener('click', function(){
	
	firstLevelFunction(11);

});

document.getElementById('k06_07_13').addEventListener('click', function(){
	
	firstLevelFunction(12);

});

document.getElementById('k06_07_14').addEventListener('click', function(){
	
	firstLevelFunction(13);

});

document.getElementById('k06_07_15').addEventListener('click', function(){
	
	firstLevelFunction(14);

});

document.getElementById('k06_07_16').addEventListener('click', function(){
	
	firstLevelFunction(15);

});


// Her er funksjonen som kobler til xml-fila

function firstLevelFunction(num){
	
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function(){
		
		if(this.readyState == 4 && this.status == 200){
			myFunction(this, num);
		}
	}

  xhttp.open("GET", "K-06ElevensMaal/maalTrinn7.xml", true);
  xhttp.send();
  
//  console.log('Hopp');

}





// Denne funksjonen gjør at jeg klarer å trekke ut et punkts innhold fra en xml-fil

function myFunction(xml, num){
	var xmlDoc = xml.responseXML;
	var txt = '<li>';
	var x = xmlDoc.getElementsByTagName('li')[num];
	var xlen = x.childNodes.length;
	var y = x.firstChild;
	
	for(var i = 0; i < xlen; i++){
		if(y.nodeType == 1 && y.nodeName == 'elevMaal'){
			
			if(i < xlen-3){ // 3 fordi det finnes flere siblings???? tror jeg
				txt += y.childNodes[0].nodeValue + '</li>\n<li>';
			}else{
				txt += y.childNodes[0].nodeValue + '</li>\n';
			}
		}
		y = y.nextSibling;
	}
	
	
	// console.log(txt);
	
	txt = '<h1>Oppdeling av læringsmål ' + (num+1) + '</h1><br/>\n<ul>' + txt + '</ul>';
   document.getElementById("point").innerHTML = txt; 	

}









