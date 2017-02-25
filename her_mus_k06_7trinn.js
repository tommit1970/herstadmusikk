/////////////////////////////////////////////////////////////////////////////////
//  Her kaller jeg funksjonen som lager en aside til målene, se nederst

makeAside(); // Og vent på klikk


//////////////////////////////////////////////////////////////////////////////////
// Her er en EventListener koblet til alle punktene, altså alle-punkt-button-id='K06_07_[0-15]'

	document.getElementById('K06_07_M1').addEventListener('click', function(){
		
		visDelMaal(0); // arrays start på 0

	});

	document.getElementById('K06_07_M2').addEventListener('click', function(){
		
		visDelMaal(1);
		
	});

	document.getElementById('K06_07_M3').addEventListener('click', function(){
		
		visDelMaal(2);
		
	});

	document.getElementById('K06_07_M4').addEventListener('click', function(){
		
		visDelMaal(3);
		
	});

	document.getElementById('K06_07_M5').addEventListener('click', function(){
		
		visDelMaal(4);
		
	});

	document.getElementById('K06_07_M6').addEventListener('click', function(){
		
		visDelMaal(5);

	});

	document.getElementById('K06_07_K1').addEventListener('click', function(){
		
		visDelMaal(6);

	});

	document.getElementById('K06_07_K2').addEventListener('click', function(){
		
		visDelMaal(7);

	});

	document.getElementById('K06_07_K3').addEventListener('click', function(){
		
		visDelMaal(8);

	});

	document.getElementById('K06_07_K4').addEventListener('click', function(){
		
		visDelMaal(9);

	});

	document.getElementById('K06_07_L1').addEventListener('click', function(){
		
		visDelMaal(10);

	});

	document.getElementById('K06_07_L2').addEventListener('click', function(){
		
		visDelMaal(11);

	});

	document.getElementById('K06_07_L3').addEventListener('click', function(){
		
		visDelMaal(12);

	});

	document.getElementById('K06_07_L4').addEventListener('click', function(){
		
		visDelMaal(13);

	});

	document.getElementById('K06_07_L5').addEventListener('click', function(){
		
		visDelMaal(14);

	});

	document.getElementById('K06_07_L6').addEventListener('click', function(){
		
		visDelMaal(15);

	});


// En av EventListener'ne over kaller denne funksjonen som henter informasjon fra xml-fila

	function visDelMaal(num){
		
		var xhttp = new XMLHttpRequest();
		
		xhttp.onreadystatechange = function(){
			
			if(this.readyState == 4 && this.status == 200){
				myFunction(this, num);
			}
		}

	  xhttp.open("GET", "K-06ElevensMaal/maalTrinn7incTasks.xml", true);
	  xhttp.send();

	}

// som hopper inn i denne funksjonen for å fullføre jobben

	function myFunction(xml, num){
		var xmlDoc = xml.responseXML;
		var txt = '<li>';
		var x = xmlDoc.getElementsByTagName('li');
		var y = x[num].childNodes;
		
		console.log(x);
		
		var title = x[num].childNodes[1];
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
			
			// Tittel
			var txt = "<h1>" + title.firstChild.nodeValue + "</h1>";
			document.getElementById('K06_tittel').innerHTML = txt;
			// Tittel
			var txt = "<u>" + num.firstChild.nodeValue + "</u>";
			document.getElementById('K06_num').innerHTML = txt;
			// Tittel
			var txt = "<h3>" + stikkord.firstChild.nodeValue + "</h3>";
			document.getElementById('K06_stikkord').innerHTML = txt;
			// Tittel
			var txt = "<h4>" + type.firstChild.nodeValue + "</h4>";
			document.getElementById('K06_type').innerHTML = txt;
			
			console.log(title.firstChild.nodeValue);
			console.log(num.firstChild);
			console.log(stikkord.firstChild);
			console.log(type.firstChild);

				// console.log(y);
				// console.log(z);
				
					for(var i = 1; i < lenList; i+=2){
						
							console.log(i);
							
									
						if(y[i].nodeType == 1 && y[i].nodeName == 'elevMaal'){
							
							// console.log("--------elevMaal----------");
							
							var temp;
							
							for(var i2 = 1;i2 < lenElevMaalList; i2+=2){
								
								if(z[i2].nodeType == 1 && (z[i2].nodeName == 'maal' || z[i2].nodeName == 'oppgave' || z[i2].nodeName == 'kommentar') ){
							
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

	} // OBS!!! End bracket of myFunction(xml, num)

////////////////////////////////////////////////////////////////////////////	
// aside master 
//Denne funksjonen skriver ut en av maalene til K-06, musikk etter 7.trinn
	function makeAside(){	
		var xhttp = new XMLHttpRequest();
		
		console.log('Ok');
		xhttp.onreadystatechange = function (){
			if(this.readyState == 4 && this.status == 200){
				getXMLGoals(this);
			}
		}
		
		xhttp.open('GET', 'K-06ElevensMaal/maalTrinn7incTasks.xml', true);
		xhttp.send();
	}

// aside master fortsetter
	function getXMLGoals(xml){
		var xmlDoc = xml.responseXML, y;
		
		var x = xmlDoc.getElementsByTagName('tittel');

		var y = x[randomNum(x)].childNodes[0];
		
		
	// Putter det i aside-tag med id='randomGoal'	
		document.getElementById('randomGoal').textContent = y.nodeValue;

	}

	function randomNum(tabell){
		// Velger et tilfeldig tall ut fra tabellens lengde
		return Math.floor(Math.random()*tabell.length);
	}









