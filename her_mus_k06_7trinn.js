/////////////////////////////////////////////////////////////////////////////////
//  Her kaller jeg funksjonen som lager en aside til målene, se nederst

// Burde jeg laste ned XMLHttpRequest her allerede før alt og sørge for en egen variabel (var xmlhttpinnlastet = true;) og sende xml med som parameter (makeAside(xml));




loadDoc("aside", 0); // Og vent på klikk





//////////////////////////////////////////////////////////////////////////////////
// Her er en EventListener koblet til alle punktene, altså alle-punkt-button-id='K06_07_[0-15]'

	document.getElementById('K06_07_M1').addEventListener('click', function(){
		
		
		loadDoc("maal", 0); // arrays start på 0

	});

	document.getElementById('K06_07_M2').addEventListener('click', function(){
		
		loadDoc("maal", 1);
		
	});

	document.getElementById('K06_07_M3').addEventListener('click', function(){
		
		loadDoc("maal", 2);
		
	});

	document.getElementById('K06_07_M4').addEventListener('click', function(){
		
		loadDoc("maal", 3);
		
	});

	document.getElementById('K06_07_M5').addEventListener('click', function(){
		
		loadDoc("maal", 4);
		
	});

	document.getElementById('K06_07_M6').addEventListener('click', function(){
		
		loadDoc("maal", 5);

	});

	document.getElementById('K06_07_K1').addEventListener('click', function(){
		
		loadDoc("maal", 6);

	});

	document.getElementById('K06_07_K2').addEventListener('click', function(){
		
		loadDoc("maal", 7);

	});

	document.getElementById('K06_07_K3').addEventListener('click', function(){
		
		loadDoc("maal", 8);

	});

	document.getElementById('K06_07_K4').addEventListener('click', function(){
		
		loadDoc("maal", 9);

	});

	document.getElementById('K06_07_L1').addEventListener('click', function(){
		
		loadDoc("maal", 10);

	});

	document.getElementById('K06_07_L2').addEventListener('click', function(){
		
		loadDoc("maal", 11);

	});

	document.getElementById('K06_07_L3').addEventListener('click', function(){
		
		loadDoc("maal", 12);

	});

	document.getElementById('K06_07_L4').addEventListener('click', function(){
		
		loadDoc("maal", 13);

	});

	document.getElementById('K06_07_L5').addEventListener('click', function(){
		
		loadDoc("maal", 14);

	});

	document.getElementById('K06_07_L6').addEventListener('click', function(){
		
		loadDoc("maal", 15);

	});


// En av EventListener'ne over kaller denne funksjonen som henter informasjon fra xml-fila

	function loadDoc( whoCalls, num ){
		
		var xhttp = new XMLHttpRequest();
		
		xhttp.onreadystatechange = function(){
			
			if(this.readyState == 4 && this.status == 200){
				
				if(whoCalls == "aside"){
					makeAside(this);
				}else{
					visDelMaal(this, num);
				}
			}
		}

	  xhttp.open("GET", "K-06ElevensMaal/maalTrinn7incTasks.xml", true);
	  xhttp.send();

	}

// som hopper inn i denne funksjonen for å fullføre jobben

	function visDelMaal(xml, num){
		var xmlDoc = xml.responseXML;
		var txt;
		var x = xmlDoc.getElementsByTagName('li');
		var y = x[num].childNodes;
		
		console.log(x);
		
		var title = x[num].childNodes[1];
		var num = title.nextSibling.nextSibling;
		var stikkord = num.nextSibling.nextSibling;
		var type = stikkord.nextSibling.nextSibling;
		var elevMaalSamling = type.nextSibling.nextSibling;
		var z = elevMaalSamling.childNodes;

		var lenList = y.length;
		var newList = (lenList - (1 + 8) / 2);
		var lenElevMaalList = z.length;
		
			console.log('The <li> har ' + lenList + ' childNodes.');
			console.log('Each elevMaalTag has a length of: ' + lenElevMaalList);
			
//////////////////////////////////////////////////////////////////////////////////////
//					HTML - DOM - tittel, num, stikkord, type
/////////////////////////////////////////////////////////////////////////////////////
			
			// Tittel
			txt = "<h4>" + title.firstChild.nodeValue + "</h4>";
			document.getElementById('K06_tittel').innerHTML = txt;
			
			// Num
			// var txt = "<u>" + num.firstChild.nodeValue + "</u>";
			// document.getElementById('K06_num').innerHTML = txt;
			
			// Stikkord
			txt = "<h4>" + stikkord.firstChild.nodeValue + "</h4>";
			document.getElementById('K06_stikkord').innerHTML = txt;
			
			// Type
			txt = "<h4>" + type.firstChild.nodeValue + "</h4>";
			document.getElementById('K06_type').innerHTML = txt;

/////////////////////////////////////////////////////////////////////////////////
//						HTML - DOM - elevMaalSamling
/////////////////////////////////////////////////////////////////////////////////
			
			
			var temp;

			txt = "<ul>\n\t<li>";

					for(var i = 9; i < lenList; i+=2){
						
						if(y[i].nodeType == 1 && y[i].nodeName == 'elevMaal'){
							
							
							for(var i2 = 1;i2 < lenElevMaalList; i2+=2){
								
								if(z[i2].nodeType == 1 && (z[i2].nodeName == 'maal') ){
							
									temp = elevMaalSamling.childNodes[i2];
									
									if(i < lenList - 2){
										
										
										txt += temp.firstChild.nodeValue + "</li>\n\t<li>";
									
									} else {
										
										txt += temp.firstChild.nodeValue + "</li>\n</ul>";
										
									}
								}
							}
							
							elevMaalSamling = elevMaalSamling.nextSibling.nextSibling;
						}
						
						document.getElementById('maalene').innerHTML = txt;
						
					}

	}

	
//////////////////////////////////////////////////////////////////////////	
//					Utspytting av elevmaalene
//////////////////////////////////////////////////////////////////////////	
	
	function elevMaalShow(elevMaal, totalPunktAntall){
		
		
		console.log(elevMaal);
		var len = totalPunktAntall;
		var newLen = (len - (1 + 8) / 2);
		
		console.log(len);
		console.log(newLen);
		
					for(var i = 9; i < len; i+=2){
						
						if(elevMaal[i].nodeType == 1 && elevMaal[i].nodeName == 'elevMaal'){
							
							var temp = elevMaal.childNodes[1];

									console.log(temp.firstChild.nodeValue); // Erstattes med document.getElementById(id).innerHTML = txt;
		
				
							elevMaal = elevMaal.nextSibling.nextSibling;
						}

					}
		
		
	}
	
	
	
//////////////////////////////////////////////////////////////////////////
//			Utspytting av elevmaalenes maal, oppgave og kommentar
//////////////////////////////////////////////////////////////////////////

	function maalOppgaveKommentarAdskilt(xml, num, maalNum){
		

// som andre function er i denne fila skal den kalles fra functionen loadDoc
// lengden på de ulike tabellene må finnes : lenElevMaalList og lenList
		
					for(var i = 9; i < lenList; i+=2){
						
						if(y[i].nodeType == 1 && y[i].nodeName == 'elevMaal'){
							
							var temp;
							
							for(var i2 = 1;i2 < lenElevMaalList; i2+=2){
								
								if(z[i2].nodeType == 1 && (z[i2].nodeName == 'maal' || z[i2].nodeName == 'oppgave' || z[i2].nodeName == 'kommentar') ){
							
									temp = elevMaal.childNodes[i2];

									console.log(temp.firstChild.nodeValue); // Erstattes med document.getElementById(id).innerHTML = txt;
								}
							}
							
							elevMaal = elevMaal.nextSibling.nextSibling;
						}

					}
	}
	
	
	
	
	
	
////////////////////////////////////////////////////////////////////////////	
// aside master 
//Denne funksjonen skriver ut en av maalene til K-06, musikk etter 7.trinn

	function makeAside(xml){
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









