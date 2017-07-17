	/* C MAJOR SCALE */
		.c-major-scale .a,
		.c-major-scale .b,
		.c-major-scale .c,
		.c-major-scale .d,
		.c-major-scale .e,
		.c-major-scale .f,
		.c-major-scale .g {background-color: lightgreen;}
		.c-major-scale .c {background-color: green;}     /* <-- ROOT  */



.buscar el div .e y agregarle clase .colored

<div id="diapason" class=" ">
	<div class="string-1">
		<div class="open note e"><div class="fret1"></div></div>
		<div class="note f"><div class="frets"></div></div>
		<div class="note fs"><div class="frets"></div></div>
		<div class="note g"><div class="frets"></div></div>
		<div class="note gs"><div class="frets"></div></div>
		<div class="note a"><div class="frets"></div></div>
		<div class="note as"><div class="frets"></div></div>
		<div class="note b"><div class="frets"></div></div>
		<div class="note c"><div class="frets"></div></div>
		<div class="note cs"><div class="frets"></div></div>
		<div class="note d"><div class="frets"></div></div>
		<div class="note ds"><div class="frets"></div></div>
		<div class="note e oct"><div class="frets"></div></div>
		<div class="note f oct"><div class="frets"></div></div>
		<div class="note fs oct"><div class="frets"></div></div>
		<div class="note g oct"><div class="frets"></div></div>
		<div class="note gs oct"><div class="frets"></div></div>
		<div class="note a oct"><div class="frets"></div></div>
		<div class="note as oct"><div class="frets"></div></div>
		<div class="note b oct"><div class="frets"></div></div>
		<div class="note c oct"><div class="frets"></div></div>
		<div class="note cs oct"><div class="frets"></div></div>
		<div class="note d oct"><div class="frets"></div></div>
		<div class="note ds oct"><div class="frets"></div></div>
		<div class="note e oct"><div class="frets"></div></div>
	</div>



//formula escala Mayor (7 notas)
var majorScaleObject = {primera, segundaMayor, terceraMayor, cuarta, quinta, sextaMayor, septimaMayor}
//ar majorScaleArray = ["primera", "segunda-mayor", "tercera-mayor", "cuarta", "quinta", "sexta-mayor", "septima-mayor"]

//formula escala Menor (7 notas)
var minorScaleObject = {primera, segundaMayor, terceraMenor, cuarta, quinta, sextaMenor, septimaMenor}
//var minorScaleArray = ["primera", "segunda-mayor", "tercera-menor", "cuarta", "quinta", "sexta-menor", "septima-menor"]

//formula escala Menor Harmonica(7 notas)
var minorHarmonicScaleObject = {
	primera: "",
	segundaMayor: "",
	terceraMenor: "",
	cuarta: "",
	quinta: "",
	sextaMenor: "",
	septimaMayor: ""
}
//var minorHarmonicScaleArray = ["primera", "segunda-mayor", "tercera-menor", "cuarta", "quinta", "sexta-menor", "septima-mayor"]

armarEscala(c, majorScaleObject);


var chromaticScaleNotesArr = ["a","as","b","c","cs","d","ds","e","f","fs","g","gs"];
var chromaticScaleStructureArr = ["primera","segundaMenor","segundaMayor","terceraMenor","terceraMayor","cuarta","cuartaAumentada","quinta","sextaMenor","sextaMayor","septimaMenor", "septimaMayor"];

//var chromaticScaleNotesObj = {};
var chromaticScaleStructureObj = {
	primera: "primera",
	segundaMenor: "segundaMenor",
	segundaMayor: "segundaMayor",
	terceraMenor: "terceraMenor",
	terceraMayor: "terceraMayor",
	cuarta: "cuarta",
	cuartaAumentada: "cuartaAumentada",
	quinta: "quinta",
	sextaMenor: "sextaMenor",
	sextaMayor: "sextaMayor",
	septimaMenor: "septimaMenor",
	septimaMayor: "septimaMayor"
};
armarEscala("d", "minorHarmonicScaleObject") {}
//----------------------------------------------------------------------------------------------------------------
//formula escala Menor Harmonica(7 notas)
var minorHarmonicScaleObject = {
	primera: "",
	segundaMayor: "",
	terceraMenor: "",
	cuarta: "",
	quinta: "",
	sextaMenor: "",
	septimaMayor: ""
}

var primera="",
	segundaMenor="",
	segundaMayor="",
	terceraMenor="",
	terceraMayor="",
	cuarta="",
	cuartaAumentada="",
	quinta="",
	sextaMenor="",
	sextaMayor="",
	septimaMenor="",
	septimaMayor="";

function armarEscala(root, scale) { 
	if (root == "c") {//escala cromatica empezando en C
		primera = "c",
		segundaMenor: "cs",
		segundaMayor: "d",
		terceraMenor: "ds",
		terceraMayor: "e",
		cuarta: "f",
		cuartaAumentada: "fs",
		quinta: "g",
		sextaMenor: "gs",
		sextaMayor: "a",
		septimaMenor: "as",
		septimaMayor: "b"
	}
	else if (root == "cs"){//escala cromatica empezando en CS 
		primera = "cs",
		segundaMenor: "d",
		segundaMayor: "ds",
		terceraMenor: "e",
		terceraMayor: "f",
		cuarta: "fs",
		cuartaAumentada: "g",
		quinta: "gs",
		sextaMenor: "a",
		sextaMayor: "as",
		septimaMenor: "b",
		septimaMayor: "c"
	} 
	else if (root == "d"){//escala cromatica empezando en D
		primera = "d",
		segundaMenor: "ds",
		segundaMayor: "e",
		terceraMenor: "f",
		terceraMayor: "fs",
		cuarta: "g",
		cuartaAumentada: "gs",
		quinta: "a",
		sextaMenor: "as",
		sextaMayor: "b",
		septimaMenor: "c",
		septimaMayor: "cs"
	}
	else if (root == "ds"){//escala cromatica empezando en DS
		primera = "ds",
		segundaMenor: "e",
		segundaMayor: "f",
		terceraMenor: "fs",
		terceraMayor: "g",
		cuarta: "gs",
		cuartaAumentada: "a",
		quinta: "as",
		sextaMenor: "b",
		sextaMayor: "c",
		septimaMenor: "cs",
		septimaMayor: "d"
	} 
	else if (root == "e"){//escala cromatica empezando en E
		primera = "e",
		segundaMenor: "f",
		segundaMayor: "fs",
		terceraMenor: "g",
		terceraMayor: "gs",
		cuarta: "a",
		cuartaAumentada: "as",
		quinta: "b",
		sextaMenor: "c",
		sextaMayor: "cs",
		septimaMenor: "d",
		septimaMayor: "ds"
	} 
	else if (root == "f"){//escala cromatica empezando en F
		primera = "f",
		segundaMenor: "fs",
		segundaMayor: "g",
		terceraMenor: "gs",
		terceraMayor: "a",
		cuarta: "as",
		cuartaAumentada: "b",
		quinta: "c",
		sextaMenor: "cs",
		sextaMayor: "d",
		septimaMenor: "ds",
		septimaMayor: "e"
	} 
	else if (root == "fs"){//escala cromatica empezando en FS
		primera = "fs",
		segundaMenor: "g",
		segundaMayor: "gs",
		terceraMenor: "a",
		terceraMayor: "as",
		cuarta: "b",
		cuartaAumentada: "c",
		quinta: "cs",
		sextaMenor: "d",
		sextaMayor: "ds",
		septimaMenor: "e",
		septimaMayor: "f"
	} 
	else if (root == "g"){//escala cromatica empezando en G
		primera = "g",
		segundaMenor: "gs",
		segundaMayor: "a",
		terceraMenor: "as",
		terceraMayor: "b",
		cuarta: "c",
		cuartaAumentada: "cs",
		quinta: "d",
		sextaMenor: "ds",
		sextaMayor: "e",
		septimaMenor: "f",
		septimaMayor: "fs"
	} 
	else if (root == "gs"){//escala cromatica empezando en GS
		primera = "gs",
		segundaMenor: "a",
		segundaMayor: "as",
		terceraMenor: "b",
		terceraMayor: "c",
		cuarta: "cs",
		cuartaAumentada: "d",
		quinta: "ds",
		sextaMenor: "e",
		sextaMayor: "f",
		septimaMenor: "fs",
		septimaMayor: "g"
	} 
	else if (root == "a"){//escala cromatica empezando en A
		primera = "a",
		segundaMenor: "as",
		segundaMayor: "b",
		terceraMenor: "c",
		terceraMayor: "cs",
		cuarta: "d",
		cuartaAumentada: "ds",
		quinta: "e",
		sextaMenor: "f",
		sextaMayor: "fs",
		septimaMenor: "g",
		septimaMayor: "gs"
	} 
	else if (root == "as"){//escala cromatica empezando en AS
		primera = "as",
		segundaMenor: "b",
		segundaMayor: "c",
		terceraMenor: "cs",
		terceraMayor: "d",
		cuarta: "ds",
		cuartaAumentada: "e",
		quinta: "f",
		sextaMenor: "fs",
		sextaMayor: "g",
		septimaMenor: "gs",
		septimaMayor: "a"
	} 
	else (root == "b"){//escala cromatica empezando en B
		primera = "b",
		segundaMenor: "c",
		segundaMayor: "cs",
		terceraMenor: "d",
		terceraMayor: "ds",
		cuarta: "e",
		cuartaAumentada: "f",
		quinta: "fs",
		sextaMenor: "g",
		sextaMayor: "gs",
		septimaMenor: "a",
		septimaMayor: "as"
	}

	if(scale == "minor-harmonic-scale") {
		//var mhso = minorHarmonicScaleObject;
		minorHarmonicScaleObject.primera = root;
		minorHarmonicScaleObject.segundaMayor = segundaMayor;
		minorHarmonicScaleObject.terceraMenor = terceraMenor;
		minorHarmonicScaleObject.cuarta = cuarta;
		minorHarmonicScaleObject.quinta = quinta;
		minorHarmonicScaleObject.sextaMenor = sextaMenor;
		minorHarmonicScaleObject.septimaMayor = septimaMayor;
	}
	return minorHarmonicScaleObject.primera, minorHarmonicScaleObject.segundaMayor, minorHarmonicScaleObject.terceraMenor, minorHarmonicScaleObject.cuarta, minorHarmonicScaleObject.quinta, minorHarmonicScaleObject.sextaMenor, minorHarmonicScaleObject.septimaMayor; 
}
























function displaySelectedScaleVal() {
  var selectedScaleValue = $( "#scaleSelector" ).val();
  $( "#scale-name" ).html( selectedScaleValue );
}
 
$( "scaleSelector" ).change( displaySelectedScaleVal );
displaySelectedScaleVal();
//------------------------
// 1  primera
// 2  segunda-menor
// 3  segunda-mayor
// 4  tercera-menor
// 5  tercera-mayor
// 6  cuarta
// 7  cuarta-aumentada / quinta-disminuida
// 8  quinta
// 9  sexta-menor
// 10 sexta-mayor
// 11 septima-menor
// 12 septima-mayor
// ------------------------
// 13 octava
// -----------------------------
//estructura escala cromatica (todas las 12 notas)
//var structure = {
//	primera: "firstNote",
//	segundaMenor: "secondNote",
//	segundaMayor: "thirdNote",
//	terceraMenor: "fourthNote",
//	terceraMayor: "fifthNote",
//	cuarta: "sixthNote",
//	cuartaAumentada: "seventhNote",
//	quinta: "eighthNote",
//	sextaMenor: "ninthNote",
//	sextaMayor: "tenthNote",
//	septimaMenor: "eleventhNote",
//	septimaMayor: "twelfthNote"
//}



    <script>
        function keyhandler(obj, e, max) {
            e = e || event;
            max = max || 50;
            console.log(e.keyCode);
            if (e.keyCode === 13) {
                return document.forms[0].submit();
            }
            if (obj.value.length >= max && e.keyCode > 46) {
                return false;
            }
            return true;
        }
    </script>




            <div class="col-xs-12 col-md-2 form-group">
            	
            </div>

            <div class="col-xs-12 col-md-2 form-group">
                <!--<timeselector [class]="'form-control'" [(ngModel)]="startTime"></timeselector>-->
            </div><!-- [config]="{'format' :'hh:mm A', 'iconCls':'time-icon'}"-->

            <div class="col-xs-12 col-md-2 form-group">
                <input type="text" class="timepicker" /><!--[options]="{disableTextInput: false, 'timeFormat': 'h:i A', showDuration: false}"-->
            </div>

            <div class="col-xs-12 col-md-2 form-group">
                <input type="text" (changeTime)="doSomething();"
                       class="form-control timepicker" [ngClass]="custom-cls" />
                [ngModel]="time"
                <!-- [options]="{disableTextInput: false,'timeFormat':'HH:mm',showDuration:false}"-->
            </div>