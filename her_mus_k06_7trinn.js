/////////////////////////////////////////////////////////////////////////////////
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
	
	xhttp.open('GET', 'K-06ElevensMaal/maalTrinn7incTasks.xml', true);
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


//////////////////////////////////////////////////////////////////////////////////

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

  xhttp.open("GET", "K-06ElevensMaal/maalTrinn7incTasks.xml", true);
  xhttp.send();
  
//  console.log('Hopp');

}





// Denne funksjonen gjør at jeg klarer å trekke ut et punkts innhold fra en xml-fil

function myFunction(xml, num){
	var xmlDoc = xml.responseXML;
	var txt = '<li>';
	var x = xmlDoc.getElementsByTagName('li')[num];
	var y = x.childNodes;
	
	var title = x.childNodes[1];
	var num = title.nextSibling.nextSibling;
	var stikkord = num.nextSibling.nextSibling;
	var type = stikkord.nextSibling.nextSibling;
	var elevMaal = type.nextSibling.nextSibling;
	var z = elevMaal.childNodes;

	var lenList = y.length;
	var newList = (lenList - (1 + 8) / 2);
	var lenElevMaalList = z.length;
	
	console.log('The <li> har ' + lenList + ' childNodes.');
	console.log('Each elevMaalTag has a length of: ' + lenElevMaalList);
	
	
	console.log(title.firstChild);
	console.log(num.firstChild);
	console.log(stikkord.firstChild);
	console.log(type.firstChild);

		console.log(y);
		console.log(z);
		
	for(var i = 1; i < lenList; i+=2){
		
			console.log(i);
			
					
		if(y[i].nodeType == 1 && y[i].nodeName == 'elevMaal'){
			
			console.log("--------elevMaal----------");
			
			var temp;
			
			for(var i2 = 1;i2 < lenElevMaalList; i2+=2){
				
				if(z[i2].nodeType == 1 && (z[i2].nodeName == 'name' || z[i2].nodeName == 'task' || z[i2].nodeName == 'comment') ){
			
					temp = elevMaal.childNodes[i2];

					console.log(temp.firstChild);
				}
			}
			
			elevMaal = elevMaal.nextSibling.nextSibling;
		}

	}
	
	
	
	
	/*
	// console.log(txt);
	
	txt = '<h1>Oppdeling av læringsmål ' + (num+1) + '</h1><br/>\n<ul>' + txt + '</ul>';
   document.getElementById("point").innerHTML = txt;
   
   */

}









