import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
import 'jquery-mapael';
// import html2pdf from 'html2pdf.js';
import 'jquery-mapael/js/maps/world_countries.js';
import { empty } from 'rxjs';
// import dfCountries from '../../../assets/dfCountries.json';
import dfByRecords from '../../assets/dfByRecords.json';
import dfCountries from '../../assets/dfCountries.json';


declare var $: any;
declare let html2pdf: any;

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.css']
})
export class PrincipalPageComponent implements OnInit {


  plots: any = [];


  // THIS VARIABLE NEED TO BE IN FALSE TO CAN BE ABLE TO GET INTO CONTENT
  dentroDelContenido: any = true;
  
  monumentosDataRecords: any;
  dataCountries: any;

  constructor() { 
    this.monumentosDataRecords = dfByRecords;
    this.dataCountries = dfCountries;
  }

  ngOnInit(): void {
    
   this.dataToPlots(this.monumentosDataRecords);

  uniqueUsageToChangeInfoContries: '↓↓↓↓↓↓↓'
   areas(this.dataCountries);
  uniqueUsageToChangeInfoContries: '↑↑↑↑↑↑↑'


  useThisToWhenPortraitIsAvoided: ''
  this.entrarAlContenidoByClick();
  }

  // mapa(){
  //   $(".container").mapael({
  //     map : {
  //         name : "world_countries"
  //     }
  // });
  // }

  entrarAlContenidoByClick(){
    this.dentroDelContenido = true;
    setTimeout(() => {
      mapaGrande(this.plots,this.plots);
    }, 5);
  }

  public openPDF(): void {
    
    var element = document.getElementById('modal-body');

    var options = {
      filename: 'Monumento.pdf', 
      margin: [10,10,10,10],
      // enableLinks: true,
      
      // image: {type: 'jpeg', quality: 0.95}
      jsPDF: {


        // encryption: {userPassword: 123,ownerPassword: 234}
      }
    };
  
    // var exporter = new
    html2pdf(element, options);
  
    // exporter.getPdf(true);

    // exporter.getPdf(true);
  
    // options.source = element
    // options.download = false;
  
    // html2pdf.getPdf(options).then((pdf))
  
  
  
    }
  
    openMenu(){
      let toggleDiv = <HTMLDivElement>document.getElementById('toggleDiv');
      let navigationDiv = <HTMLDivElement>document.getElementById('navigationDiv');
      let CursorToMoveDiceDiv = <HTMLDivElement>document.getElementById('CursorToMoveDice');

      // console.log(CursorToMoveDiceDiv.getBoundingClientRect());
      
      setTimeout(() => {
        let x = CursorToMoveDiceDiv.getBoundingClientRect();
        let xx = navigationDiv.getBoundingClientRect();
        
        var w = window.innerWidth;
        var h = window.innerHeight;

        console.log(x, w, h);

// console.log(x,w,h);

if(x.right > w+20 || xx.bottom > h){
  // console.log('c salió');
  // navigationDiv.click();
  CursorToMoveDiceDiv.click();

}
        
      }, 2000);

      

      // console.log(toggleDiv.classList);
      // let toggleOpenClose = <HTMLDivElement>document.getElementById('toggleOpenClose');
      let toggleStatus = toggleDiv.classList.value;
      
      if(toggleStatus === 'cdk-drag-handle toggle'){
        
        toggleDiv.classList.add('active');
        navigationDiv.classList.add('active');
        CursorToMoveDiceDiv.classList.add('active');
        // toggleOpenClose.classList.add('active');
      }else {
        toggleDiv.classList.remove('active');      
        navigationDiv.classList.remove('active');      
        CursorToMoveDiceDiv.classList.remove('active');      
        // toggleOpenClose.classList.remove('active');      
      }
    }

  dataToPlots(monumentos: any){

    // console.log(monumentos);

    formula: 'CONCATENAR("<li>",Y2,"</li>","<li>",Z2,"</li>","<li>",AA2,"</li>","<li>",AB2,"</li>","<li>",AC2,"</li>","<li>",AD2,"</li>","<li>",AE2,"</li>")'
    // console.log(monumentos);


Alpha_code_2: "EC"
Area_hec: 14066514
CatByDanger: 1
Category_short: "N"
Criterio: "vii,viii,ix,x"
DangerState: 0
Pais: "Ecuador"
Region_Es: "América Latina y El Caribe"
category: "Natural"
criteri_1_txt: "para contener fenómenos naturales superlativos o áreas de excepcional belleza natural e importancia estética."
criteri_2_txt: "ser ejemplos sobresalientes que representen etapas importantes de la historia de la tierra, incluido el registro de la vida, procesos geológicos, terrestres, geomórficos o fisiográficos significativos."
criteri_3_txt: "ser ejemplos destacados que representen importantes procesos ecológicos y biológicos en curso en la evolución y el desarrollo de ecosistemas terrestres, de agua dulce, costeros y marinos y comunidades de plantas y animales."
criteri_4_txt: "Contiene los hábitats naturales más importantes para la conservación in situ de la diversidad biológica, incluidas las especias amenazadas con valor universal excepcional para la ciencia o conservación."
criteri_5_txt: null
criteri_6_txt: null
criteri_7_txt: null
criterio_1: "vii"
criterio_2: "viii"
criterio_3: "ix"
criterio_4: "x"
criterio_5: null
criterio_6: null
criterio_7: empty
criterio_concat: "<li>para contener fenómenos naturales superlativos o áreas de excepcional belleza natural e importancia estética.</li><li>ser ejemplos sobresalientes que representen etapas importantes de la historia de la tierra, incluido el registro de la vida, procesos geológicos, terrestres, geomórficos o fisiográficos significativos.</li><li>ser ejemplos destacados que representen importantes procesos ecológicos y biológicos en curso en la evolución y el desarrollo de ecosistemas terrestres, de agua dulce, costeros y marinos y comunidades de plantas y animales.</li><li>Contiene los hábitats naturales más importantes para la conservación in situ de la diversidad biológica, incluidas las especias amenazadas con valor universal excepcional para la ciencia o conservación.</li>"
danger: "P 2007-2010"
id_number: 1
iso_code: "EC"
latitude: -0.68986
longitude: -90.501319
short_description: "Situadas en el Pacífico, a unos mil kilómetros del subcontinente sudamericano, estas diecinueve islas de origen volcánico y su reserva marina circundante son un museo y un laboratorio vivientes de la evolución, únicos en el mundo. Las Galápagos están situadas en la confluencia de tres corrientes oceánicas y concentran una gran variedad de especies marinas. Su actividad sísmica y volcánica ilustra los procesos de su formación geológica. Estos procesos, sumados al extremo aislamiento del archipiélago, han originado el desarrollo de una fauna singular con especies como la iguana terrestre, la tortuga gigante y numerosas especies de pinzones, cuyo estudio inspiró a Darwin la teoría de la evolución por selección natural, tras su viaje a estas islas en 1835."
site: "Islas Galápagos"
unique_number: 4





criteria: `
Selection criteria
(i)
to represent a masterpiece of human creative genius;
Es la representación de una obra maestra creada por un genio.

(ii)
to exhibit an important interchange of human values, over a span of time or within a cultural area of the world, on developments in architecture or technology, monumental arts, town-planning or landscape design;
para exhibir un intercambio importante de valores humanos, en un lapso o dentro de un área cultural del mundo, sobre desarrollos en arquitectura o tecnología, artes monumentales, urbanismo o diseño paisajístico

(iii)
to bear a unique or at least exceptional testimony to a cultural tradition or to a civilization which is living or which has disappeared;
Dar un testimonio único o al menos excepcional de una tradición cultural o de una civilización viva o desaparecida.

(iv)
to be an outstanding example of a type of building, architectural or technological ensemble or landscape which illustrates (a) significant stage(s) in human history;
ser un ejemplo sobresaliente de un tipo de edificio, conjunto arquitectónico o tecnológico o paisaje que ilustre (a) etapa(s) significativa(s) en la historia humana;

(v)
to be an outstanding example of a traditional human settlement, land-use, or sea-use which is representative of a culture (or cultures), or human interaction with the environment especially when it has become vulnerable under the impact of irreversible change;
ser un ejemplo sobresaliente de un asentamiento humano tradicional, uso de la tierra o uso del mar que sea representativo de una cultura (o culturas), o interacción humana con el medio ambiente, especialmente cuando se ha vuelto vulnerable bajo el impacto de un cambio irreversible;

(vi)
to be directly or tangibly associated with events or living traditions, with ideas, or with beliefs, with artistic and literary works of outstanding universal significance. (The Committee considers that this criterion should preferably be used in conjunction with other criteria);
estar directa o tangiblemente asociado con eventos o tradiciones vivas, con ideas o creencias, con obras artísticas y literarias de significado universal excepcional. (El Comité considera que este criterio debería utilizarse preferentemente junto con otros criterios)

(vii)
to contain superlative natural phenomena or areas of exceptional natural beauty and aesthetic importance;
para contener fenómenos naturales superlativos o áreas de excepcional belleza natural e importancia estética.

(viii)
to be outstanding examples representing major stages of earth's history, including the record of life, significant on-going geological processes in the development of landforms, or significant geomorphic or physiographic features;
ser ejemplos sobresalientes que representen etapas importantes de la historia de la tierra, incluido el registro de la vida, procesos geológicos significativos en curso en el desarrollo de formas terrestres o características geomórficas o fisiográficas significativas;

(ix)
to be outstanding examples representing significant on-going ecological and biological processes in the evolution and development of terrestrial, fresh water, coastal and marine ecosystems and communities of plants and animals;
ser ejemplos destacados que representen importantes procesos ecológicos y biológicos en curso en la evolución y el desarrollo de ecosistemas terrestres, de agua dulce, costeros y marinos y comunidades de plantas y animales;

(x)
to contain the most important and significant natural habitats for in-situ conservation of biological diversity, including those containing threatened species of outstanding universal value from the point of view of science or conservation.
contener los hábitats naturales más importantes y significativos para la conservación in situ de la diversidad biológica, incluidos aquellos que contienen especies amenazadas de valor universal excepcional desde el punto de vista de la ciencia o la conservación.
`



    
    // console.log(monumentos);
    for(let monumento of monumentos){


      let criterioConcatendoAlv: any = [];



      if(
        monumento.criteri_1_txt != null
        ){
          criterioConcatendoAlv.push(`<br/>• ${monumento.criteri_1_txt}`);
        }
      if(
        monumento.criteri_2_txt != null
        ){
          criterioConcatendoAlv.push(`<br/>• ${monumento.criteri_2_txt}`);
        }
      if(
        monumento.criteri_3_txt != null
        ){
          criterioConcatendoAlv.push(`<br/>• ${monumento.criteri_3_txt}`);
        }
      if(
        monumento.criteri_4_txt != null
        ){
          criterioConcatendoAlv.push(`<br/>• ${monumento.criteri_4_txt}`);
        }
      if(
        monumento.criteri_5_txt != null
        ){
          criterioConcatendoAlv.push(`<br/>• ${monumento.criteri_5_txt}`);
        }
      if(
        monumento.criteri_6_txt != null
        ){
          criterioConcatendoAlv.push(`<br/>• ${monumento.criteri_6_txt}`);
        }
      if(
        monumento.criteri_7_txt != null
        ){
          criterioConcatendoAlv.push(`<br/>• ${monumento.criteri_7_txt}`);
        }
        

      let plot: any = {};

      let dateDanger: any;

      if(monumento.danger){
        dateDanger = `<b style="color: red">En peligro desde ${monumento.danger}</b>`
      }else{
        dateDanger = "";
      }
      
      plot.tooltip = {
        content: 
          `
        <h3>${monumento.site} (${monumento.Pais})</h3>
        <img src = ".././../assets/all_images/site_${monumento.id_number}.jpg" class="imagenTooltip">
        `
      };

      
      // style="background: blue;
      // <b>Descripción:</b> 
      // <span style="font-size: 25px;">Monumento:</span>
      // style="background: #E6E8F4"
      // p-2 b-2 m-2
      plot.Descripcion = 
      `
      <div class="" style="">
        <span style="font-size: 20px;  font-family: Goldplay_Black;">${monumento.site}</span>
        <span style="font-size: 20px; font-family: Goldplay_Bold;">(${monumento.Pais})</span>
        <br/>
        <span style="font-family: Goldplay_SemiBold;"> Tipo: <b style="font-family: Goldplay_Black;"> ${monumento.category}</b> </span>
        <br/>
        <img src = ".././../assets/all_images/site_${monumento.id_number}.jpg" class="responsive">
        <br/>
        ${dateDanger}
        <br/>
        <span style="font-size: 15px; font-family: Goldplay_Regular;">${monumento.short_description}</span>
        <br/><br/>
        <b style="font-family: Goldplay_Black;">Criterios:</b> 
        <span style="font-size: 15px; font-family: Goldplay_Regular;">${criterioConcatendoAlv}</span>
        </div>
      `;
    
      
      // <ul>${monumento.criterio_concat}</ul>
      plot.site = monumento.site;
      plot.longitude = monumento.longitude;
      plot.latitude = monumento.latitude;   
      plot.value = `${monumento.CatByDanger}`;
      plot.CountryCode = monumento.Alpha_code_2;
      plot.id = monumento.id_number;
      plot.Region = monumento.Region_Es;
      
      this.plots.push(plot);
    }
  }
}


function areas(dfAreas: any){
  console.log(dfAreas);
  AC_2: "AF"
  Area: 647500
  Capital: "Kabul"
  CapitalLatitude: 34.5166666667
  CapitalLongitude: 69.183333
  Country: "Afghanistan"
  CurrencyUnit: "Afghan afghani"
  Language: "Dari Persian, Pashtu (both official), other Turkic and minor languages"
  Population: 31056997
  Region: "Asia"
  
  // regiones: 
  let America = '#43BBCC';
  let Asia = '#F76624';
  let Europe = '#B9D516';
  let Africa = '#E9A713';
  let Oceania = '#E93546';
  
  // America	#43BBCC
  // Asia	#F76624
  // Europe	#B9D516
  // Africa	#E9A713
  // Oceania	#E93546
  
  
  
  
  
  
  
  
  for(let country of dfAreas){
    // console.log(country);
    console.log(
      `
      "${country.AC_2}" : {
        "tooltip": {
          "content": "<span style=\\"font-weight:bold;\\">${country.Country}<\\/span><br\\/>Población : ${country.Population}<br\\/>Área: ${country.Area} Km² <br\\/> Capital: ${country.Capital} <br\\/> Moneda: ${country.Moneda}"
        },
        'attrs':
        {
          'fill': "${country.color}"
        }
      },
      `
    );
    }
  }

  function mapaGrande(plots:any, newplots?:any) {
    // console.log(plots);
    // console.log(newplots);
    
      // console.log(plots, newplots);
    // let x = <HTMLDivElement>document.getElementById('map');
    // x.appendChild(btn);
    // x.appendChild(btn);
    
      $(".mapcontainer").mapael({
        map : {
          name : "world_countries",
          zoom: {
            enabled: true,
            mousewheel: true,
            touch: true,
          },
          defaultArea: {
            attrs:
            {
              // fill: "#4199B2",
              stroke: "#030233",
              "stroke-width": 1
            },
            attrsHover:
            {
              fill: "#a4e100",
              animDuration: 0
            },
            eventHandlers: {
              click: function(e: any, id: any, mapElem: any, textElem: any, elemOptions: any){
                // console.log(id);
                var newPlots: any =[];
                for(let plotByCountry of plots){
                  // console.log(plotByCountry.CountryCode);
                  if( plotByCountry.CountryCode == id ){
                    newPlots.push(plotByCountry);
                  }
                }
                mapaChico(plots,newPlots);
                // var opt:any = {
                  // mapOptions: {
                    // 'areas' : {},
                    // 'plots' : newPlots,
                    
                  // },
    
                  // replaceOptions: true,
                  // newPlots: newPlots,
                  // deletePlotKeys : 'all',
                  // afterUpdate : function(container:any, paper:any, areas:any, options:any) {
                  // }
                // }
                
                // $(".mapcontainer").trigger('update', [opt]);
    
                if(id === 'US'){
                  $(".mapcontainer").trigger('zoom', {level: 10, latitude: 36.43889, longitude: -105.54167});
                }
                else{
                  $(".mapcontainer").trigger('zoom', {area: id});
                }
              }
            },
          },
          defaultPlot: {
            size: 3,
            eventHandlers: {
              
              click: function(e: any, id: any, mapElem: any, textElem: any, elemOptions: any)
              {
                // console.log(elemOptions);
                // console.log(elemOptions.tooltip);
                // console.log('working shit');
                openModal();
                if (typeof elemOptions.Descripcion != 'undefined')
                {
                  $('.Descripcion').html(elemOptions.Descripcion).css(
                  {
                    display: 'none'
                  }).fadeIn('slow');
                  // $('.titleDescripcion').html(elemOptions.site).css(
                  // {
                  //   display: 'none'
                  // }).fadeIn('slow');
                  
                }
                
              }
            }
          }
        },
        legend: {
          redrawOnResize: false,
          plot: {
            hideElemsOnClick:
            {
              enabled: true,
              opacity: 0
            },
            mode : "vertical",
            title: "Tipo de monumento",
            titleAttrs:
            {
              // 'font-family': "Comic Sans MS",
              'font-family': "Goldplay_Black",
              'font-size':  20,
              // fill-opacity: "",
              fill: "#907BFF"
            },
            labelAttrs: {
              'font-family': "Goldplay_SemiBold",
              fill: "#001D54"
            },
            slices:
            [{
                label: "Natural",
                sliceValue: "1",
              
                type: "svg",
                path: "M 55.513 72.889 c 6.368 0 11.662 -4.466 12.963 -10.435 c 6.338 -1.01 11.194 -6.447 11.194 -13.072 c 0 -2.738 -0.832 -5.284 -2.263 -7.4 c 0.746 -1.651 1.171 -3.474 1.171 -5.4 c 0 -5.701 -3.607 -10.526 -8.662 -12.412 c 1.058 -1.903 1.711 -4.062 1.711 -6.393 c 0 -7.33 -5.943 -13.276 -13.284 -13.276 c -2.614 0 -5.048 0.787 -7.108 2.094 C 48.928 2.667 44.71 0 39.822 0 c -6.283 0 -11.51 4.374 -12.898 10.229 c -5.713 0.887 -10.402 5.407 -11.151 11.432 c -0.39 3.164 0.406 6.167 1.987 8.668 c -2.736 2.437 -4.504 5.944 -4.504 9.897 c 0 4.702 2.461 8.807 6.148 11.168 c -0.561 1.469 -0.905 3.053 -0.905 4.716 c 0 5.729 3.645 10.568 8.73 12.43 c 2.431 2.655 5.889 4.35 9.77 4.35 c 2.334 0 4.492 -0.654 6.398 -1.701 v 19.391 h -25.42 v 2.347 h 55.136 v -2.347 h -25.44 V 70.277 C 49.876 71.899 52.576 72.889 55.513 72.889 Z",
                width: 10,
                height: 10,
                attrs:
                  {
                    fill: "#00B706"
                  },
                clicked: false
              },
              {
                label: "Cultural",
                sliceValue: "2",
                // type: "svg",
                // path: "M 38.654 15.571 H 7.728 C 7.728 6.971 14.651 0 23.191 0 S 38.654 6.971 38.654 15.571 Z M 43.52 43.382 H 2.861 c -0.828 0 -1.5 0.671 -1.5 1.5 c 0 0.829 0.672 1.5 1.5 1.5 H 43.52 c 0.828 0 1.5 -0.671 1.5 -1.5 C 45.02 44.053 44.349 43.382 43.52 43.382 Z M 9.147 39.345 V 19.42 H 6.574 c -0.828 0 -1.5 -0.671 -1.5 -1.5 c 0 -0.829 0.672 -1.5 1.5 -1.5 h 33.233 c 0.828 0 1.5 0.671 1.5 1.5 c 0 0.829 -0.672 1.5 -1.5 1.5 h -2.573 v 19.925 h 2.573 c 0.828 0 1.5 0.671 1.5 1.5 c 0 0.829 -0.672 1.5 -1.5 1.5 H 6.574 c -0.828 0 -1.5 -0.671 -1.5 -1.5 c 0 -0.829 0.672 -1.5 1.5 -1.5 H 9.147 Z M 25.872 39.345 V 19.42 H 20.51 v 19.925 H 25.872 Z M 34.234 19.42 h -5.362 v 19.925 h 5.362 V 19.42 Z M 12.147 39.345 h 5.362 V 19.42 h -5.362 V 39.345 Z",
                type: 'image',
                url: '/assets/BlueMuseum.png',
                width: 10,
                height: 10,
                attrs:
                  {
                    fill: "#0083FF"
                  },
                // clicked: true
              },
              {
                label: "Cultural / Natural",
                sliceValue: "3",
                type: 'image',
                url: '/assets/culturaNa.png',
                // type: "svg",
                // path: "M 21 5 c -1.802 0 -3.499 0.442 -5 1.21 C 14.499 5.442 12.802 5 11 5 C 4.925 5 0 9.925 0 16 s 4.925 11 11 11 c 1.802 0 3.499 -0.442 5 -1.21 c 1.501 0.768 3.198 1.21 5 1.21 c 6.075 0 11 -4.925 11 -11 S 27.075 5 21 5 Z M 15.426 8.941 c 0.342 -0.269 0.84 -0.267 1.18 0.004 c 0.735 0.587 1.36 1.285 1.873 2.055 h -4.95 C 14.047 10.228 14.679 9.528 15.426 8.941 Z M 12.514 13 h 6.974 c 0.226 0.642 0.379 1.312 0.455 2 h -7.886 C 12.133 14.312 12.287 13.642 12.514 13 Z M 12.057 17 h 7.886 c -0.076 0.688 -0.23 1.358 -0.457 2 h -6.973 C 12.287 18.358 12.133 17.688 12.057 17 Z M 16.589 23.047 c -0.341 0.269 -0.838 0.269 -1.178 0 c -0.74 -0.585 -1.367 -1.28 -1.881 -2.047 h 4.941 C 17.956 21.766 17.329 22.462 16.589 23.047 Z M 21 25 c -1.05 0 -2.054 -0.191 -2.991 -0.523 C 20.446 22.46 22 19.412 22 16 c 0 -3.413 -1.555 -6.462 -3.994 -8.48 C 18.944 7.188 19.95 7 21 7 c 4.963 0 9 4.037 9 9 C 30 20.963 25.963 25 21 25 Z",
                width: 10,
                height: 10,
                attrs:
                  {
                    fill: "#4200FF"
                  },
                // clicked: true
              },
              {
                label: "Natural (Peligro)",
                sliceValue: "4",
                type: "svg",
                path: "M 55.513 72.889 c 6.368 0 11.662 -4.466 12.963 -10.435 c 6.338 -1.01 11.194 -6.447 11.194 -13.072 c 0 -2.738 -0.832 -5.284 -2.263 -7.4 c 0.746 -1.651 1.171 -3.474 1.171 -5.4 c 0 -5.701 -3.607 -10.526 -8.662 -12.412 c 1.058 -1.903 1.711 -4.062 1.711 -6.393 c 0 -7.33 -5.943 -13.276 -13.284 -13.276 c -2.614 0 -5.048 0.787 -7.108 2.094 C 48.928 2.667 44.71 0 39.822 0 c -6.283 0 -11.51 4.374 -12.898 10.229 c -5.713 0.887 -10.402 5.407 -11.151 11.432 c -0.39 3.164 0.406 6.167 1.987 8.668 c -2.736 2.437 -4.504 5.944 -4.504 9.897 c 0 4.702 2.461 8.807 6.148 11.168 c -0.561 1.469 -0.905 3.053 -0.905 4.716 c 0 5.729 3.645 10.568 8.73 12.43 c 2.431 2.655 5.889 4.35 9.77 4.35 c 2.334 0 4.492 -0.654 6.398 -1.701 v 19.391 h -25.42 v 2.347 h 55.136 v -2.347 h -25.44 V 70.277 C 49.876 71.899 52.576 72.889 55.513 72.889 Z",
                width: 10,
                height: 10,
                attrs:
                  {
                    fill: "#FF0000"
                  },
                // clicked: true
              },
              {
                label: "Cultural (Peligro)",
                sliceValue: "5",
                // type: "svg",
                // path: "M 38.654 15.571 H 7.728 C 7.728 6.971 14.651 0 23.191 0 S 38.654 6.971 38.654 15.571 Z M 43.52 43.382 H 2.861 c -0.828 0 -1.5 0.671 -1.5 1.5 c 0 0.829 0.672 1.5 1.5 1.5 H 43.52 c 0.828 0 1.5 -0.671 1.5 -1.5 C 45.02 44.053 44.349 43.382 43.52 43.382 Z M 9.147 39.345 V 19.42 H 6.574 c -0.828 0 -1.5 -0.671 -1.5 -1.5 c 0 -0.829 0.672 -1.5 1.5 -1.5 h 33.233 c 0.828 0 1.5 0.671 1.5 1.5 c 0 0.829 -0.672 1.5 -1.5 1.5 h -2.573 v 19.925 h 2.573 c 0.828 0 1.5 0.671 1.5 1.5 c 0 0.829 -0.672 1.5 -1.5 1.5 H 6.574 c -0.828 0 -1.5 -0.671 -1.5 -1.5 c 0 -0.829 0.672 -1.5 1.5 -1.5 H 9.147 Z M 25.872 39.345 V 19.42 H 20.51 v 19.925 H 25.872 Z M 34.234 19.42 h -5.362 v 19.925 h 5.362 V 19.42 Z M 12.147 39.345 h 5.362 V 19.42 h -5.362 V 39.345 Z",
                type: 'image',
                url: '/assets/RedMuseum.png',
                width: 10,
                height: 10,
                attrs:
                  {
                    fill: "#FF0000"
                  },
                // clicked: true v
            }]
        }
      },
        plots: newplots,
        areas: {
          //// CLEAN FROM HERE
          "AF" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Afganistán<\/span><br\/>Población : 38928346<br\/>Área: 647500 Km² <br\/> Capital: Kabul <br\/> Moneda: Afgani afgano"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "AL" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Albania<\/span><br\/>Población : 2877797<br\/>Área: 28748 Km² <br\/> Capital: Tirana <br\/> Moneda: Lek albanés"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "DZ" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Argelia<\/span><br\/>Población : 43851044<br\/>Área: 2381740 Km² <br\/> Capital: Algiers [El Djazaïr] <br\/> Moneda: Naira nigeriana"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "AS" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Samoa Americana<\/span><br\/>Población : 55191<br\/>Área: 199 Km² <br\/> Capital: Pago Pago <br\/> Moneda: Tālā"
            },
            'attrs':
            {
              'fill': "#E93546"
            }
          },
          "AD" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Andorra<\/span><br\/>Población : 77265<br\/>Área: 468 Km² <br\/> Capital: Andorra La Vieja <br\/> Moneda: Euro"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "AO" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Angola<\/span><br\/>Población : 32866272<br\/>Área: 1246700 Km² <br\/> Capital: Luanda <br\/> Moneda: Kwanza angoleño"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "AI" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Anguilla<\/span><br\/>Población : 15003<br\/>Área: 102 Km² <br\/> Capital: El Valle <br\/> Moneda: Dólar del Caribe Oriental"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "AG" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Antigua y Barbuda<\/span><br\/>Población : 97929<br\/>Área: 443 Km² <br\/> Capital: Saint John'S <br\/> Moneda: Dólar del Caribe Oriental"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "AR" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Argentina<\/span><br\/>Población : 45195774<br\/>Área: 2766890 Km² <br\/> Capital: Buenos Aires <br\/> Moneda: Peso"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "AM" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Armenia<\/span><br\/>Población : 2963243<br\/>Área: 29800 Km² <br\/> Capital: Ereván <br\/> Moneda: Dram armenio"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "AW" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Aruba<\/span><br\/>Población : 106766<br\/>Área: 193 Km² <br\/> Capital: Oranjestad <br\/> Moneda: florín"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "AU" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Australia<\/span><br\/>Población : 25499884<br\/>Área: 7686850 Km² <br\/> Capital: Canberra <br\/> Moneda: Dólar australiano"
            },
            'attrs':
            {
              'fill': "#E93546"
            }
          },
          "AT" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Austria<\/span><br\/>Población : 9006398<br\/>Área: 83870 Km² <br\/> Capital: Viena <br\/> Moneda: Euro"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "AZ" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Azerbaiyán<\/span><br\/>Población : 10139177<br\/>Área: 86600 Km² <br\/> Capital: Bakú <br\/> Moneda: Manat azerí"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "BS" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Bahamas<\/span><br\/>Población : 393244<br\/>Área: 13940 Km² <br\/> Capital: Nassau <br\/> Moneda: Dólar bahameño"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "BH" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Baréin<\/span><br\/>Población : 1701575<br\/>Área: 665 Km² <br\/> Capital: Manamá <br\/> Moneda: Dinar bahreiní"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "BD" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Bangladés<\/span><br\/>Población : 164689383<br\/>Área: 144000 Km² <br\/> Capital: Daca <br\/> Moneda: Taka bangladeshí"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "BB" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Barbados<\/span><br\/>Población : 287375<br\/>Área: 431 Km² <br\/> Capital: Bridgetown <br\/> Moneda: Dólar de Barbados"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "BY" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Bielorrusia<\/span><br\/>Población : 9449323<br\/>Área: 207600 Km² <br\/> Capital: Minsk <br\/> Moneda: Rublo bielorruso"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "BE" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Bélgica<\/span><br\/>Población : 11589623<br\/>Área: 30528 Km² <br\/> Capital: Bruselas <br\/> Moneda: Euro"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "BZ" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Belice<\/span><br\/>Población : 397628<br\/>Área: 22966 Km² <br\/> Capital: Belmopán <br\/> Moneda: Dólar beliceño"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "BJ" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Benín<\/span><br\/>Población : 12123200<br\/>Área: 112620 Km² <br\/> Capital: Porto Novo  <br\/> Moneda: Franco CFA de África Occidental"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "BM" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">islas Bermudas<\/span><br\/>Población : 62278<br\/>Área: 53 Km² <br\/> Capital: Hamilton <br\/> Moneda: dólar bermudeño"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "BT" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Bután<\/span><br\/>Población : 771608<br\/>Área: 47000 Km² <br\/> Capital: Timbu <br\/> Moneda: Ngultrum butanés"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "BO" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Bolivia<\/span><br\/>Población : 11673021<br\/>Área: 1098580 Km² <br\/> Capital: Sucre, La Paz <br\/> Moneda: Boliviano"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "BA" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Bosnia y Herzegovina<\/span><br\/>Población : 3280819<br\/>Área: 51129 Km² <br\/> Capital: Sarajevo <br\/> Moneda: Marco bosnioherzegovino"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "BW" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Botsuana<\/span><br\/>Población : 2351627<br\/>Área: 600370 Km² <br\/> Capital: Gaberones <br\/> Moneda: Pula"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "BR" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Brasil<\/span><br\/>Población : 212559417<br\/>Área: 8511965 Km² <br\/> Capital: Brasilia <br\/> Moneda: Real brasileño"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "VG" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Islas Vírgenes Británicas<\/span><br\/>Población : 30231<br\/>Área: 153 Km² <br\/> Capital: Road Town <br\/> Moneda:  Dólar estadounidense"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "BN" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Brunéi<\/span><br\/>Población : 437479<br\/>Área: 5770 Km² <br\/> Capital: Sultanato Islámico De Brunei <br\/> Moneda: Dólar de Brunéi"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "BG" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Bulgaria<\/span><br\/>Población : 6948445<br\/>Área: 110910 Km² <br\/> Capital: Sofía <br\/> Moneda: Lev búlgaro"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "BF" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Burkina Faso<\/span><br\/>Población : 20903273<br\/>Área: 274200 Km² <br\/> Capital: Uagadugú <br\/> Moneda: Franco CFA de África Occidental"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "MM" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Birmania<\/span><br\/>Población : 54409800<br\/>Área: 678500 Km² <br\/> Capital: Naypidó <br\/> Moneda: Kyat birmano"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "BI" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Burundi<\/span><br\/>Población : 11890784<br\/>Área: 27830 Km² <br\/> Capital: Buyumbura <br\/> Moneda: Franco de Burundi"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "KH" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Camboya<\/span><br\/>Población : 16718965<br\/>Área: 181040 Km² <br\/> Capital: Pnon Pehn <br\/> Moneda: Riel camboyano"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "CM" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Camerún<\/span><br\/>Población : 26545863<br\/>Área: 475440 Km² <br\/> Capital: Yaundé <br\/> Moneda: Franco CFA de África Central"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "CA" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Canadá<\/span><br\/>Población : 37742154<br\/>Área: 9984670 Km² <br\/> Capital: Ottawa <br\/> Moneda: Dólar canadiense"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "CV" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Cabo Verde<\/span><br\/>Población : 555987<br\/>Área: 4033 Km² <br\/> Capital: Praia <br\/> Moneda: Escudo caboverdiano"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "KY" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Islas Caimán<\/span><br\/>Población : 65722<br\/>Área: 262 Km² <br\/> Capital: George Town <br\/> Moneda: Dólar De Las Islas Caimán"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "CF" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">República Centroafricana<\/span><br\/>Población : 4829767<br\/>Área: 622984 Km² <br\/> Capital: Bangui <br\/> Moneda: Franco CFA de África Central"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "TD" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">República del Chad<\/span><br\/>Población : 16425864<br\/>Área: 1284000 Km² <br\/> Capital: Yamena  <br\/> Moneda: Franco CFA"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "CL" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Chile<\/span><br\/>Población : 19116201<br\/>Área: 756950 Km² <br\/> Capital: Santiago De Chile <br\/> Moneda: Peso chileno"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "CN" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">China<\/span><br\/>Población : 1439323776<br\/>Área: 9596960 Km² <br\/> Capital: Pekín <br\/> Moneda: Yuan chino"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "CO" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Colombia<\/span><br\/>Población : 50882891<br\/>Área: 1138910 Km² <br\/> Capital: Bogotá <br\/> Moneda: Peso colombiano"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "KM" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Comoras<\/span><br\/>Población : 869601<br\/>Área: 2170 Km² <br\/> Capital: Moroni <br\/> Moneda: Franco comorano"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "CD" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">República Democrática del Congo<\/span><br\/>Población : 89561403<br\/>Área: 2345410 Km² <br\/> Capital: Kinshasa <br\/> Moneda: Franco congoleño"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "CG" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">República Del Congo<\/span><br\/>Población : 5518087<br\/>Área: 342000 Km² <br\/> Capital: Brazzaville <br\/> Moneda: Franco congoleño"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "CK" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Islas Cook<\/span><br\/>Población : 17564<br\/>Área: 240 Km² <br\/> Capital: Avarua <br\/> Moneda: dólar de la Islas Cook"
            },
            'attrs':
            {
              'fill': "#E93546"
            }
          },
          "CR" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Costa Rica<\/span><br\/>Población : 5094118<br\/>Área: 51100 Km² <br\/> Capital: San José <br\/> Moneda: Colón costarricense"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "CI" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Costa de marfil<\/span><br\/>Población : 26378274<br\/>Área: 322460 Km² <br\/> Capital: Yamusukro, Abiyán <br\/> Moneda: Franco CFA de África Occidental"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "HR" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Croacia<\/span><br\/>Población : 4105267<br\/>Área: 56542 Km² <br\/> Capital: Zagreb <br\/> Moneda: Kuna croata"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "CU" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Cuba<\/span><br\/>Población : 11326616<br\/>Área: 110860 Km² <br\/> Capital: La Habana <br\/> Moneda: Peso cubano"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "CY" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Chipre<\/span><br\/>Población : 1207359<br\/>Área: 9250 Km² <br\/> Capital: Nicosia <br\/> Moneda: Euro"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "CZ" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">República Checa (Chequia)<\/span><br\/>Población : 10708981<br\/>Área: 78866 Km² <br\/> Capital: Praga <br\/> Moneda: Corona Checa"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "DK" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Dinamarca<\/span><br\/>Población : 5792202<br\/>Área: 43094 Km² <br\/> Capital: Copenhague <br\/> Moneda: Corona danesa"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "DJ" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Yibuti<\/span><br\/>Población : 988000<br\/>Área: 23000 Km² <br\/> Capital: Yibuti <br\/> Moneda: Franco yibutiano"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "DM" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Dominica<\/span><br\/>Población : 71986<br\/>Área: 754 Km² <br\/> Capital: Roseau <br\/> Moneda: Dólar del Caribe Oriental"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "DO" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">República Dominicana<\/span><br\/>Población : 10847910<br\/>Área: 48730 Km² <br\/> Capital: Santo Domingo <br\/> Moneda: Peso dominicano"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "TL" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Timor Oriental<\/span><br\/>Población : 1318445<br\/>Área: 15007 Km² <br\/> Capital: Dili <br\/> Moneda: Dólar estadounidense"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "EC" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Ecuador<\/span><br\/>Población : 17643054<br\/>Área: 283560 Km² <br\/> Capital: Quito <br\/> Moneda: Dólar estadounidense"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "EG" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Egipto<\/span><br\/>Población : 102334404<br\/>Área: 1001450 Km² <br\/> Capital: El Cairo <br\/> Moneda: Libra egipcia"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "SV" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">El Salvador<\/span><br\/>Población : 6486205<br\/>Área: 21040 Km² <br\/> Capital: San Salvador <br\/> Moneda: Dólar estadounidense"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "GQ" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Guinea Ecuatorial<\/span><br\/>Población : 1402985<br\/>Área: 28051 Km² <br\/> Capital: Malabo <br\/> Moneda: Franco CFA de África Central"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "ER" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Eritrea<\/span><br\/>Población : 3546421<br\/>Área: 121320 Km² <br\/> Capital: Asmara <br\/> Moneda: Nakfa"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "EE" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Estonia<\/span><br\/>Población : 1326535<br\/>Área: 45226 Km² <br\/> Capital: Tallín <br\/> Moneda: Euro"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "ET" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Etiopía<\/span><br\/>Población : 114963588<br\/>Área: 1127127 Km² <br\/> Capital: Adís Abeba <br\/> Moneda: Birr etíope"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "FO" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Islas Faroe<\/span><br\/>Población : 49053<br\/>Área: 1399 Km² <br\/> Capital: Tórshavn <br\/> Moneda: Corona Feroesa"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "FJ" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Fiyi<\/span><br\/>Población : 896445<br\/>Área: 18270 Km² <br\/> Capital: Suva <br\/> Moneda: Dólar fiyiano"
            },
            'attrs':
            {
              'fill': "#E93546"
            }
          },
          "FI" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Finlandia<\/span><br\/>Población : 5540720<br\/>Área: 338145 Km² <br\/> Capital: Helsinki <br\/> Moneda: Euro"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "FR" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Francia<\/span><br\/>Población : 65273511<br\/>Área: 547030 Km² <br\/> Capital: París <br\/> Moneda: Euro"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "GF" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Guayana Francesa<\/span><br\/>Población : 298682<br\/>Área: 91000 Km² <br\/> Capital: Cayena <br\/> Moneda: Euro "
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "PF" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Polinesia francesa<\/span><br\/>Población : 280908<br\/>Área: 4167 Km² <br\/> Capital:  Papeete <br\/> Moneda: franco del Pacífico"
            },
            'attrs':
            {
              'fill': "#E93546"
            }
          },
          "GA" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Gabón<\/span><br\/>Población : 2225734<br\/>Área: 267667 Km² <br\/> Capital: Libreville <br\/> Moneda: Franco CFA de África Central"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "GM" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Gambia<\/span><br\/>Población : 2416668<br\/>Área: 11300 Km² <br\/> Capital: Banjul <br\/> Moneda: Dalasi"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "PS" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Franja de Gaza<\/span><br\/>Población : 2048000<br\/>Área: 360 Km² <br\/> Capital: Gaza <br\/> Moneda: sheqel israelí"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "GE" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Georgia<\/span><br\/>Población : 3989167<br\/>Área: 69700 Km² <br\/> Capital: Tiflis <br\/> Moneda: Lari georgiano"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "DE" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Alemania<\/span><br\/>Población : 83783942<br\/>Área: 357021 Km² <br\/> Capital: Berlín <br\/> Moneda: Euro"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "GH" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Ghana<\/span><br\/>Población : 31072940<br\/>Área: 239460 Km² <br\/> Capital: Accra <br\/> Moneda: Cedi"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "GI" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Gibraltar<\/span><br\/>Población : 33691<br\/>Área: 7 Km² <br\/> Capital: Gibraltar <br\/> Moneda: Libra de Gibraltar"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "GR" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Grecia<\/span><br\/>Población : 10423054<br\/>Área: 131940 Km² <br\/> Capital: Atenas <br\/> Moneda: Euro"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "GL" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Groenlandia<\/span><br\/>Población : 56770<br\/>Área: 2166086 Km² <br\/> Capital: Nuuk <br\/> Moneda: corona danesa"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "GD" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Granada<\/span><br\/>Población : 112523<br\/>Área: 344 Km² <br\/> Capital: Saint George'S <br\/> Moneda: Dólar del Caribe Oriental"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "GP" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Guadalupe<\/span><br\/>Población : 400124<br\/>Área: 1780 Km² <br\/> Capital:  Basse-Terre <br\/> Moneda: Euro"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "GU" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Guam<\/span><br\/>Población : 168775<br\/>Área: 541 Km² <br\/> Capital: Agaña <br\/> Moneda: dólar estadounidense"
            },
            'attrs':
            {
              'fill': "#E93546"
            }
          },
          "GT" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Guatemala<\/span><br\/>Población : 17915568<br\/>Área: 108890 Km² <br\/> Capital: Ciudad De Guatemala <br\/> Moneda: Quetzal guatemalteco"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "GG" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Guernsey<\/span><br\/>Población : 62792<br\/>Área: 78 Km² <br\/> Capital: Saint Peter Port <br\/> Moneda: Libra de Guernsey"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "GN" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Guinea<\/span><br\/>Población : 13132795<br\/>Área: 245857 Km² <br\/> Capital: Conakry <br\/> Moneda: Franco guineano"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "GW" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Guinea-Bisáu<\/span><br\/>Población : 1968001<br\/>Área: 36120 Km² <br\/> Capital: Bissau <br\/> Moneda: Franco CFA de África Occidental"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "GY" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Guyana<\/span><br\/>Población : 786552<br\/>Área: 214970 Km² <br\/> Capital: Georgetown <br\/> Moneda: Dólar guyanés"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "HT" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Haití<\/span><br\/>Población : 11402528<br\/>Área: 27750 Km² <br\/> Capital: Puerto Príncipe <br\/> Moneda: Gourde haitiano"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "HN" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Honduras<\/span><br\/>Población : 9904607<br\/>Área: 112090 Km² <br\/> Capital: Tegucigalpa <br\/> Moneda: Lempira hondureño"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "HU" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Hungría<\/span><br\/>Población : 9660351<br\/>Área: 93030 Km² <br\/> Capital: Budapest <br\/> Moneda: Forinto húngaro"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "IS" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Islandia<\/span><br\/>Población : 341243<br\/>Área: 103000 Km² <br\/> Capital: Reikiavik <br\/> Moneda: Corona islandes"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "IN" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">India<\/span><br\/>Población : 1380004385<br\/>Área: 3287590 Km² <br\/> Capital: Nueva Delhi <br\/> Moneda: Rupia india"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "ID" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Indonesia<\/span><br\/>Población : 273523615<br\/>Área: 1919440 Km² <br\/> Capital: Yakarta <br\/> Moneda: Rupia indonesia"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "IR" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Irán<\/span><br\/>Población : 83992949<br\/>Área: 1648000 Km² <br\/> Capital: Teherán <br\/> Moneda: Rial iraní"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "IQ" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Irak<\/span><br\/>Población : 40222493<br\/>Área: 437072 Km² <br\/> Capital: Bagdad <br\/> Moneda: Dinar iraquí"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "IE" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Irlanda<\/span><br\/>Población : 4937786<br\/>Área: 70280 Km² <br\/> Capital: Dublín <br\/> Moneda: Euro"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "IM" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Isla del hombre<\/span><br\/>Población : 85033<br\/>Área: 572 Km² <br\/> Capital:  Douglas <br\/> Moneda: Libra manesa"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "IL" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Israel<\/span><br\/>Población : 8655535<br\/>Área: 20770 Km² <br\/> Capital: Jerusalén <br\/> Moneda: Nuevo shéquel"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "IT" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Italia<\/span><br\/>Población : 60461826<br\/>Área: 301230 Km² <br\/> Capital: Roma <br\/> Moneda: Euro"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "JM" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Jamaica<\/span><br\/>Población : 2961167<br\/>Área: 10991 Km² <br\/> Capital: Kingston <br\/> Moneda: Dólar jamaiquino"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "JP" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Japón<\/span><br\/>Población : 126476461<br\/>Área: 377835 Km² <br\/> Capital: Tokio <br\/> Moneda: Yen"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "JE" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Jersey<\/span><br\/>Población : ​115800<br\/>Área: 116 Km² <br\/> Capital: Saint Helier <br\/> Moneda:  Libra de Jersey"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "JO" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Jordán<\/span><br\/>Población : 10203134<br\/>Área: 92300 Km² <br\/> Capital: Amán <br\/> Moneda: Dinar jordano"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "KZ" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Kazajstán<\/span><br\/>Población : 18776707<br\/>Área: 2717300 Km² <br\/> Capital: Nursultán <br\/> Moneda: Tenge kazajo"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "KE" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Kenia<\/span><br\/>Población : 53771296<br\/>Área: 582650 Km² <br\/> Capital: Nairobi <br\/> Moneda: Chelín keniano"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "KI" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Kiribati<\/span><br\/>Población : 119449<br\/>Área: 811 Km² <br\/> Capital: Tarawa <br\/> Moneda: Dólar australiano"
            },
            'attrs':
            {
              'fill': "#E93546"
            }
          },
          "KP" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Corea del Norte<\/span><br\/>Población : 25778816<br\/>Área: 120540 Km² <br\/> Capital: Pyongyang <br\/> Moneda: Won norcoreano"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "KR" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Corea del Sur<\/span><br\/>Población : 51269185<br\/>Área: 98480 Km² <br\/> Capital: Seúl <br\/> Moneda: Won surcoreano"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "KW" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Kuwait<\/span><br\/>Población : 4270571<br\/>Área: 17820 Km² <br\/> Capital: Ciudad De Kuwait <br\/> Moneda: Dinar kuwaití"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "KG" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Kirguistán<\/span><br\/>Población : 6524195<br\/>Área: 198500 Km² <br\/> Capital: Biskek <br\/> Moneda: Som kirguís"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "LA" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Laos<\/span><br\/>Población : 7275560<br\/>Área: 236800 Km² <br\/> Capital: Vientián <br\/> Moneda: Kip laosiano"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "LV" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">letonia<\/span><br\/>Población : 1886198<br\/>Área: 64589 Km² <br\/> Capital: Riga <br\/> Moneda: Euro"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "LB" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Líbano<\/span><br\/>Población : 6825445<br\/>Área: 10400 Km² <br\/> Capital: Beirut <br\/> Moneda: Libra libanesa"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "LS" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Lesoto<\/span><br\/>Población : 2142249<br\/>Área: 30355 Km² <br\/> Capital: Maseru <br\/> Moneda: Loti"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "LR" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Liberia<\/span><br\/>Población : 5057681<br\/>Área: 111370 Km² <br\/> Capital: Monrovia <br\/> Moneda: Dólar liberiano"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "LY" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Libia<\/span><br\/>Población : 6871292<br\/>Área: 1759540 Km² <br\/> Capital: Trípoli <br\/> Moneda: Dinar libio"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "LI" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Liechtenstein<\/span><br\/>Población : 38128<br\/>Área: 160 Km² <br\/> Capital: Vaduz <br\/> Moneda: Franco suizo"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "LT" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Lituania<\/span><br\/>Población : 2722289<br\/>Área: 65200 Km² <br\/> Capital: Vilna <br\/> Moneda: Euro"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "LU" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">luxemburgo<\/span><br\/>Población : 625978<br\/>Área: 2586 Km² <br\/> Capital: Luxemburgo <br\/> Moneda: Euro"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "MO" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Macao<\/span><br\/>Población : 658391<br\/>Área: 28 Km² <br\/> Capital: Ciudad De Macao <br\/> Moneda: Pataca macaense"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "MK" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Macedonia<\/span><br\/>Población : 2065000<br\/>Área: 25333 Km² <br\/> Capital: Tesalónica <br\/> Moneda: Denar macedonio"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "MG" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Madagascar<\/span><br\/>Población : 27691018<br\/>Área: 587040 Km² <br\/> Capital: Antananarivo <br\/> Moneda: Ariary malgache"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "MW" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Malaui<\/span><br\/>Población : 19129952<br\/>Área: 118480 Km² <br\/> Capital: Lilongüe <br\/> Moneda: Kwacha malauí"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "MY" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Malasia<\/span><br\/>Población : 32365999<br\/>Área: 329750 Km² <br\/> Capital: Kuala Lumpur <br\/> Moneda: Ringgit malayo"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "MV" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Maldivas<\/span><br\/>Población : 540544<br\/>Área: 300 Km² <br\/> Capital: Malé <br\/> Moneda: Rupia de Maldivas"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "ML" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Malí<\/span><br\/>Población : 20250833<br\/>Área: 1240000 Km² <br\/> Capital: Bamako <br\/> Moneda: Franco CFA de África Occidental"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "MT" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Malta<\/span><br\/>Población : 441543<br\/>Área: 316 Km² <br\/> Capital: La Valeta <br\/> Moneda: Euro"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "MH" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Islas Marshall<\/span><br\/>Población : 59190<br\/>Área: 11854 Km² <br\/> Capital: Majuro <br\/> Moneda: Dólar estadounidense"
            },
            'attrs':
            {
              'fill': "#E93546"
            }
          },
          "MQ" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Martinica<\/span><br\/>Población : 375265<br\/>Área: 1100 Km² <br\/> Capital: Fort-De-France <br\/> Moneda: Euro"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "MR" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Mauritania<\/span><br\/>Población : 4649658<br\/>Área: 1030700 Km² <br\/> Capital: Nuakchot <br\/> Moneda: Uguiya"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "MU" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Mauricio<\/span><br\/>Población : 1271768<br\/>Área: 2040 Km² <br\/> Capital: Port Louis <br\/> Moneda: Rupia de Mauricio"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "YT" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Mayotte<\/span><br\/>Población : 272815<br\/>Área: 374 Km² <br\/> Capital: Mamoudzou <br\/> Moneda: Europa"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "MX" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">México<\/span><br\/>Población : 128932753<br\/>Área: 1972550 Km² <br\/> Capital: México D. F. <br\/> Moneda: Peso mexicano"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "FM" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Micronesia<\/span><br\/>Población : 548914<br\/>Área: 702 Km² <br\/> Capital: Palikir <br\/> Moneda: Dólar estadounidense"
            },
            'attrs':
            {
              'fill': "#E93546"
            }
          },
          "MD" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Moldavia<\/span><br\/>Población : 4033963<br\/>Área: 33843 Km² <br\/> Capital: Chisinau <br\/> Moneda: Leu moldavo"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "MC" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Mónaco<\/span><br\/>Población : 39242<br\/>Área: 2 Km² <br\/> Capital: Mónaco <br\/> Moneda: Euro"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "MN" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Mongolia<\/span><br\/>Población : 3278290<br\/>Área: 1564116 Km² <br\/> Capital: Ulan Bator <br\/> Moneda: Tugrik mongol"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "MS" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Montserrat<\/span><br\/>Población : 4992<br\/>Área: 102 Km² <br\/> Capital: Plymouth <br\/> Moneda: Dólar del Caribe Oriental"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "MA" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Marruecos<\/span><br\/>Población : 36910560<br\/>Área: 446550 Km² <br\/> Capital: Rabat <br\/> Moneda: Dirham marroquí"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "MZ" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Mozambique<\/span><br\/>Población : 31255435<br\/>Área: 801590 Km² <br\/> Capital: Maputo <br\/> Moneda: Metical mozambiqueño"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "null" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Namibia<\/span><br\/>Población : 2540905<br\/>Área: 825418 Km² <br\/> Capital: Windhoek <br\/> Moneda: Dólar namibio"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "NR" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Nauru<\/span><br\/>Población : 10824<br\/>Área: 21 Km² <br\/> Capital: Yaren <br\/> Moneda: Dólar australiano"
            },
            'attrs':
            {
              'fill': "#E93546"
            }
          },
          "NP" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Nepal<\/span><br\/>Población : 29136808<br\/>Área: 147181 Km² <br\/> Capital: Katmandú <br\/> Moneda: Rupia nepalí"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "NL" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Países Bajos<\/span><br\/>Población : 17134872<br\/>Área: 41526 Km² <br\/> Capital: Amsterdam <br\/> Moneda: Euro"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "AN" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Antillas Holandesas<\/span><br\/>Población : 17134872<br\/>Área: 960 Km² <br\/> Capital: Willemstad <br\/> Moneda: Florín"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "NC" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Nueva Caledonia<\/span><br\/>Población : 285498<br\/>Área: 19060 Km² <br\/> Capital: Numea <br\/> Moneda: Franco del Pacífico"
            },
            'attrs':
            {
              'fill': "#E93546"
            }
          },
          "NZ" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Nueva Zelanda<\/span><br\/>Población : 4822233<br\/>Área: 268680 Km² <br\/> Capital: Wellington <br\/> Moneda: Dólar neozelandés"
            },
            'attrs':
            {
              'fill': "#E93546"
            }
          },
          "NI" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Nicaragua<\/span><br\/>Población : 6624554<br\/>Área: 129494 Km² <br\/> Capital: Managua <br\/> Moneda: Córdoba nicaragüense"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "NE" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Níger<\/span><br\/>Población : 24206644<br\/>Área: 1267000 Km² <br\/> Capital: Niamey <br\/> Moneda: Franco CFA de África Occidental"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "NG" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Nigeria<\/span><br\/>Población : 206139589<br\/>Área: 923768 Km² <br\/> Capital: Abuya <br\/> Moneda: Naira"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "MP" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Islas Marianas del Norte<\/span><br\/>Población : 57559<br\/>Área: 477 Km² <br\/> Capital: Saipán <br\/> Moneda: Dólar estadounidense"
            },
            'attrs':
            {
              'fill': "#E93546"
            }
          },
          "NO" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Noruega<\/span><br\/>Población : 5421241<br\/>Área: 323802 Km² <br\/> Capital: Oslo <br\/> Moneda: Corona noruega"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "OM" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Omán<\/span><br\/>Población : 5106626<br\/>Área: 212460 Km² <br\/> Capital: Mascate <br\/> Moneda: Rial omaní"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "PK" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Pakistán<\/span><br\/>Población : 220892340<br\/>Área: 803940 Km² <br\/> Capital: Islamabad <br\/> Moneda: Rupia pakistaní"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "PW" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Palaos<\/span><br\/>Población : 18094<br\/>Área: 458 Km² <br\/> Capital: Melekeok <br\/> Moneda: Dólar estadounidense"
            },
            'attrs':
            {
              'fill': "#E93546"
            }
          },
          "PA" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Panamá<\/span><br\/>Población : 4314767<br\/>Área: 78200 Km² <br\/> Capital: Ciudad De Panamá <br\/> Moneda: Balboa panameño"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "PG" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Papúa Nueva Guinea<\/span><br\/>Población : 8947024<br\/>Área: 462840 Km² <br\/> Capital: Port Moresby <br\/> Moneda: Kina"
            },
            'attrs':
            {
              'fill': "#E93546"
            }
          },
          "PY" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Paraguay<\/span><br\/>Población : 7132538<br\/>Área: 406750 Km² <br\/> Capital: Asunción <br\/> Moneda: Guaraní"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "PE" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Perú<\/span><br\/>Población : 32971854<br\/>Área: 1285220 Km² <br\/> Capital: Lima <br\/> Moneda: Nuevo sol"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "PH" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Filipinas<\/span><br\/>Población : 109581078<br\/>Área: 300000 Km² <br\/> Capital: Manila <br\/> Moneda: Peso filipino"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "PL" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Polonia<\/span><br\/>Población : 37846611<br\/>Área: 312685 Km² <br\/> Capital: Varsovia <br\/> Moneda: Zloty"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "PT" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Portugal<\/span><br\/>Población : 10196709<br\/>Área: 92391 Km² <br\/> Capital: Lisboa <br\/> Moneda: Euro"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "PR" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Puerto Rico<\/span><br\/>Población : 2860853<br\/>Área: 13790 Km² <br\/> Capital: San Juan <br\/> Moneda: Dólar estadounidense"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "QA" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Katar<\/span><br\/>Población : 2881053<br\/>Área: 11437 Km² <br\/> Capital: Doha <br\/> Moneda: Riyal catarí"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "RE" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Réunion<\/span><br\/>Población : 895312<br\/>Área: 2517 Km² <br\/> Capital: Saint-Denis <br\/> Moneda: Euro"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "RO" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Rumania<\/span><br\/>Población : 19237691<br\/>Área: 237500 Km² <br\/> Capital: Bucarest <br\/> Moneda: Leu rumano"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "RU" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Rusia<\/span><br\/>Población : 145934462<br\/>Área: 17075200 Km² <br\/> Capital: Moscú <br\/> Moneda: Rublo ruso"
            },
            'attrs':
            {
              'fill': "0-#B9D516-#F76624"
            }
          },
          "RW" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Ruanda<\/span><br\/>Población : 12952218<br\/>Área: 26338 Km² <br\/> Capital: Kigali <br\/> Moneda: Franco ruandés"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "SH" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Santa Elena<\/span><br\/>Población : 6077<br\/>Área: 413 Km² <br\/> Capital: Jamestown <br\/> Moneda: Libra de Santa Elena"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "KN" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">San Cristóbal y Nieves<\/span><br\/>Población : 53199<br\/>Área: 261 Km² <br\/> Capital: Basseterre <br\/> Moneda: Dólar del Caribe Oriental"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "LC" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Santa Lucía<\/span><br\/>Población : 183627<br\/>Área: 616 Km² <br\/> Capital: Castries <br\/> Moneda: Dólar del Caribe Oriental"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "PM" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">San Pedro y Miquelón<\/span><br\/>Población : 5794<br\/>Área: 242 Km² <br\/> Capital: Saint-Pierre <br\/> Moneda: Euro"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "VC" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">San Vicente y las Granadinas<\/span><br\/>Población : 110940<br\/>Área: 389 Km² <br\/> Capital: Kingstown <br\/> Moneda: Dólar del Caribe Oriental"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "WS" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Samoa<\/span><br\/>Población : 198414<br\/>Área: 2944 Km² <br\/> Capital: Apia <br\/> Moneda: Tala"
            },
            'attrs':
            {
              'fill': "#E93546"
            }
          },
          "SM" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">San Marino<\/span><br\/>Población : 33931<br\/>Área: 61 Km² <br\/> Capital: Ciudad De San Marino <br\/> Moneda: Euro"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "ST" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Santo Tomé y Príncipe<\/span><br\/>Población : 219159<br\/>Área: 1001 Km² <br\/> Capital: Santo Tomé <br\/> Moneda: Dobra"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "SA" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Arabia Saudita<\/span><br\/>Población : 34813871<br\/>Área: 1960582 Km² <br\/> Capital: Riad <br\/> Moneda: Riyal saudí"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "SN" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Senegal<\/span><br\/>Población : 16743927<br\/>Área: 196190 Km² <br\/> Capital: Dakar <br\/> Moneda: Franco CFA de África Occidental"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "RS" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Serbia<\/span><br\/>Población : 8737371<br\/>Área: 88361 Km² <br\/> Capital: Belgrado <br\/> Moneda: Dinar serbio"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "SC" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Seychelles<\/span><br\/>Población : 98347<br\/>Área: 455 Km² <br\/> Capital: Victoria <br\/> Moneda: Rupia de Seychelles"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "SL" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Sierra Leona<\/span><br\/>Población : 7976983<br\/>Área: 71740 Km² <br\/> Capital: Freetown <br\/> Moneda: Leone"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "SG" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Singapur<\/span><br\/>Población : 5850342<br\/>Área: 693 Km² <br\/> Capital: Singapur <br\/> Moneda: Dólar de Singapur"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "SK" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Eslovaquia<\/span><br\/>Población : 5459642<br\/>Área: 48845 Km² <br\/> Capital: Bratislava <br\/> Moneda: Euro"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "SI" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Eslovenia<\/span><br\/>Población : 2078938<br\/>Área: 20273 Km² <br\/> Capital: Lublijana <br\/> Moneda: Euro"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "SB" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Islas Salomón<\/span><br\/>Población : 686884<br\/>Área: 28450 Km² <br\/> Capital: Honiara <br\/> Moneda: Dólar de las Islas Salomón"
            },
            'attrs':
            {
              'fill': "#E93546"
            }
          },
          "SO" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Somalia<\/span><br\/>Población : 15893222<br\/>Área: 637657 Km² <br\/> Capital: Mogadiscio <br\/> Moneda: Chelín somalí"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "ZA" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Sudáfrica<\/span><br\/>Población : 59308690<br\/>Área: 1219912 Km² <br\/> Capital: Pretoria, Ciudad Del Cabo, Bloemfontein <br\/> Moneda: Rand sudafricano"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "ES" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">España<\/span><br\/>Población : 46754778<br\/>Área: 504782 Km² <br\/> Capital: Madrid <br\/> Moneda: Euro"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "LK" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Sri Lanka<\/span><br\/>Población : 21413249<br\/>Área: 65610 Km² <br\/> Capital: Colombo <br\/> Moneda: Rupia de Sri Lanka"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "SD" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Sudán<\/span><br\/>Población : 43849260<br\/>Área: 2505810 Km² <br\/> Capital: Jartum <br\/> Moneda: Libra sudanesa"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "SS" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Sudán del Sur<\/span><br\/>Población : 11193725<br\/>Área: 644329 Km² <br\/> Capital: Yuba <br\/> Moneda: Libra sursudanesa"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "SR" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Surinam<\/span><br\/>Población : 586632<br\/>Área: 163270 Km² <br\/> Capital: Paramaribo <br\/> Moneda: Dólar surinamés"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "SZ" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Suazilandia<\/span><br\/>Población : 1172000<br\/>Área: 17363 Km² <br\/> Capital: Mbabane <br\/> Moneda: Lilangeni"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "SE" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Suecia<\/span><br\/>Población : 10099265<br\/>Área: 449964 Km² <br\/> Capital: Estocolmo <br\/> Moneda: Corona sueca"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "CH" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Suiza<\/span><br\/>Población : 8654622<br\/>Área: 41290 Km² <br\/> Capital: Berna <br\/> Moneda: Franco suizo"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "SY" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Siria<\/span><br\/>Población : 17500658<br\/>Área: 185180 Km² <br\/> Capital: Damasco <br\/> Moneda: Libra siria"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "TW" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Taiwán<\/span><br\/>Población : 23816775<br\/>Área: 35980 Km² <br\/> Capital: Taipéi <br\/> Moneda: Nuevo dólar taiwanés"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "TJ" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Tayikistán<\/span><br\/>Población : 9537645<br\/>Área: 143100 Km² <br\/> Capital: Dusambé <br\/> Moneda: Somoni tayiko"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "TZ" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Tanzania<\/span><br\/>Población : 59734218<br\/>Área: 945087 Km² <br\/> Capital: Dodoma <br\/> Moneda: Chelín tanzano"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "TH" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Tailandia<\/span><br\/>Población : 69799978<br\/>Área: 514000 Km² <br\/> Capital: Bangkok <br\/> Moneda: Baht tailandés"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "TG" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Togo<\/span><br\/>Población : 8278724<br\/>Área: 56785 Km² <br\/> Capital: Lomé <br\/> Moneda: Franco CFA de África Occidental"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "TO" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Tonga<\/span><br\/>Población : 105695<br\/>Área: 748 Km² <br\/> Capital: Nuku'Alofa <br\/> Moneda: Pa'anga"
            },
            'attrs':
            {
              'fill': "#E93546"
            }
          },
          "TT" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Trinidad y Tobago<\/span><br\/>Población : 1399488<br\/>Área: 5128 Km² <br\/> Capital: Puerto España <br\/> Moneda: Dólar trinitense"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "TN" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Túnez<\/span><br\/>Población : 11818619<br\/>Área: 163610 Km² <br\/> Capital: Túnez <br\/> Moneda: Dinar tunecino"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "TR" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Turquía <\/span><br\/>Población : 84339067<br\/>Área: 780580 Km² <br\/> Capital: Estambul <br\/> Moneda: Lira turca"
            },
            'attrs':
            {
              'fill': "0-#B9D516-#F76624"
            }
          },
          "TM" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Turkmenistán<\/span><br\/>Población : 6031200<br\/>Área: 488100 Km² <br\/> Capital: Asjabad <br\/> Moneda: Manat turcomano"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "TC" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Las Islas Turcas y Caicos​<\/span><br\/>Población : 38717<br\/>Área: 430 Km² <br\/> Capital: Cockburn Town <br\/> Moneda: Dólar estadounidense"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "TV" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Tuvalu <\/span><br\/>Población : 11792<br\/>Área: 26 Km² <br\/> Capital: Funafuti <br\/> Moneda: Dólar estadounidense"
            },
            'attrs':
            {
              'fill': "#E93546"
            }
          },
          "UG" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Uganda<\/span><br\/>Población : 45741007<br\/>Área: 236040 Km² <br\/> Capital: Kampala <br\/> Moneda: Chelín ugandés"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "UA" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Ucrania<\/span><br\/>Población : 43733762<br\/>Área: 603700 Km² <br\/> Capital: Kiev <br\/> Moneda: Grivna"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "AE" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Emiratos Árabes Unidos<\/span><br\/>Población : 9890402<br\/>Área: 82880 Km² <br\/> Capital: Abu Dhabi <br\/> Moneda: Dirham de los Emiratos Árabes Unidos"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "GB" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Reino Unido<\/span><br\/>Población : 67886011<br\/>Área: 244820 Km² <br\/> Capital: Londres <br\/> Moneda: Libra británica"
            },
            'attrs':
            {
              'fill': "#B9D516"
            }
          },
          "US" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Estados Unidos<\/span><br\/>Población : 331002651<br\/>Área: 9631420 Km² <br\/> Capital: Washington D. C. <br\/> Moneda: Dólar estadounidense"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "UY" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Uruguay<\/span><br\/>Población : 3473730<br\/>Área: 176220 Km² <br\/> Capital: Montevideo <br\/> Moneda: Peso uruguayo"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "UZ" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Uzbekistán<\/span><br\/>Población : 33469203<br\/>Área: 447400 Km² <br\/> Capital: Tashkent <br\/> Moneda: Som uzbeko"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "VU" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Vanuatu<\/span><br\/>Población : 307145<br\/>Área: 12200 Km² <br\/> Capital: Port Vila <br\/> Moneda: Vatu"
            },
            'attrs':
            {
              'fill': "#E93546"
            }
          },
          "VE" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Venezuela<\/span><br\/>Población : 28435940<br\/>Área: 912050 Km² <br\/> Capital: Caracas <br\/> Moneda: Bolívar fuerte"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "VN" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Vietnam<\/span><br\/>Población : 97338579<br\/>Área: 329560 Km² <br\/> Capital: Hanoi <br\/> Moneda: Dong vietnamita"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "VI" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Islas Vírgenes de EE.UU<\/span><br\/>Población : 104425<br\/>Área: 1910 Km² <br\/> Capital: Charlotte Amalie <br\/> Moneda: Dólar estadounidense"
            },
            'attrs':
            {
              'fill': "#43BBCC"
            }
          },
          "WF" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Wallis y Futuna<\/span><br\/>Población : 11239<br\/>Área: 274 Km² <br\/> Capital: Matā'Utu <br\/> Moneda: Franco del Pacífico"
            },
            'attrs':
            {
              'fill': "#E93546"
            }
          },
          "EH" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Sahara Occidental<\/span><br\/>Población : 597339<br\/>Área: 266000 Km² <br\/> Capital: Laayoune <br\/> Moneda: Dirham marroquí"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "YE" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Yemen<\/span><br\/>Población : 29825964<br\/>Área: 527970 Km² <br\/> Capital: Saná <br\/> Moneda: Rial yemení"
            },
            'attrs':
            {
              'fill': "#F76624"
            }
          },
          "ZM" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Zambia<\/span><br\/>Población : 18383955<br\/>Área: 752614 Km² <br\/> Capital: Lusaka <br\/> Moneda: Kwacha zambiano"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
          "ZW" : {
            "tooltip": {
              "content": "<span style=\"font-weight:bold;\">Zimbabue<\/span><br\/>Población : 14862924<br\/>Área: 390580 Km² <br\/> Capital: Harare <br\/> Moneda: Dólar estadounidense"
            },
            'attrs':
            {
              'fill': "#E9A713"
            }
          },
              //  TO HERE
        }
      });
    
    
      const modal:any = document.querySelector('#my-modal');
      const modalBtn:any = document.querySelector('#modal-btn');
      const closeBtn:any = document.querySelector('.btnCloseDescripcion');
      let x = document.querySelectorAll('svg')[1];
      let xy = document.querySelectorAll('svg')[0];
      xy.setAttribute('style','width: 220px');
      x.setAttribute('style','height: 100vh');
    
      modalBtn.addEventListener('click', openModal);
      closeBtn.addEventListener('click', closeModal);
      // window.addEventListener('click', outsideClick);
      window.addEventListener('resize',shittt);
      
    
      // const navigation = document.querySelector('.navigation');
      // const toggleDiv: any = document.querySelector('.toggle');
    
      // toggleDiv.addEventListener('click',openMenu);
      
      // function openMenu(){
    
      //   // let navigationState: any = navigation?.classList; 
    
      //   // console.warn(navigationState);
      //   console.log('si');
        
      //   toggleDiv.classList.toggle('active');
      //   console.log('si2');
      //   navigation?.classList.toggle('active');
    
    
      // }
    
      // let toggle = <HTMLDivElement>document.getElementById('toggle');
      
      // toggle.onclick();
    
      // toggle.addEventListener('click', openMenu);
    
      
    
    
    
    
    
    
    
    
      function shittt() {
        // console.log('simón');
        x.setAttribute('height','100vh');
      }
      function openModal() {
        modal.style.display = 'block';
      }
      
      // Close
      function closeModal() {
        modal.style.display = 'none';
      }
      
      // Close If Outside Click
      function outsideClick(e:any) {
        if (e.target == modal) {
          modal.style.display = 'none';
        }
      }
    
    
      // x?.addEventListener('click',this.shit);
      // x.setAttribute('id','svgMap');
          // x.setAttribute('height','100vh');
      // console.log(`this shit is woorking 2`);
    
      
    
    }


    
function mapaChico(plots:any, newplots?:any) {
  // let x = <HTMLDivElement>document.getElementById('map');
  // x.appendChild(btn);
  // x.appendChild(btn);
  
    $(".mapcontainer").mapael({
      map : {
        name : "world_countries",
        zoom: {
          enabled: true,
          mousewheel: true,
          touch: true,
        },
        defaultArea: {
          attrs:
          {
            // fill: "#4199B2",
            stroke: "#030233",
            "stroke-width": 1
          },
          attrsHover:
          {
            fill: "#a4e100",
            animDuration: 0
          },
          eventHandlers: {
            click: function(e: any, id: any, mapElem: any, textElem: any, elemOptions: any){
              
              var newPlots: any =[];
              for(let plotByCountry of plots){
                // console.log(plotByCountry.CountryCode);
                if( plotByCountry.CountryCode == id ){
                  newPlots.push(plotByCountry);
                }
              }
              mapaChico(plots,newPlots);
              // var opt:any = {
                // mapOptions: {
                  // 'areas' : {},
                  // 'plots' : newPlots,
                  
                // },
  
                // replaceOptions: true,
                // newPlots: newPlots,
                // deletePlotKeys : 'all',
                // afterUpdate : function(container:any, paper:any, areas:any, options:any) {
                // }
              // }
              
              // $(".mapcontainer").trigger('update', [opt]);
  
              if(id === 'US'){
                $(".mapcontainer").trigger('zoom', {level: 10, latitude: 36.43889, longitude: -105.54167});
              }
              else{
                $(".mapcontainer").trigger('zoom', {area: id});
              }
            }
          },
        },
        defaultPlot: {
          size: 3,
          eventHandlers: {
            
            click: function(e: any, id: any, mapElem: any, textElem: any, elemOptions: any)
            {
              // console.log('working shit');
              openModal();
              if (typeof elemOptions.Descripcion != 'undefined')
              {
                $('.Descripcion').html(elemOptions.Descripcion).css(
                  {
                    display: 'none'
                  }).fadeIn('slow');
                  $('.titleDescripcion').html(elemOptions.site).css(
                  {
                    display: 'none'
                  }).fadeIn('slow');
              }
            }
          }
        }
      },
      legend: {
        redrawOnResize: false,
        plot: {
          hideElemsOnClick:
                {
                enabled: true,
                opacity: 0
                },
          mode : "vertical",
          title: "Tipo de monumento",
          titleAttrs:
          {
            // 'font-family': "Comic Sans MS",
            'font-family': "Goldplay_Black",
            'font-size':  20,
            // fill-opacity: "",
            fill: "#907BFF"
          },
          labelAttrs: {
            'font-family': "Goldplay_SemiBold",
            fill: "#001D54"
          },
          slices:
          [{
              label: "Natural",
              sliceValue: "1",
              type: "svg",
              path: "M 55.513 72.889 c 6.368 0 11.662 -4.466 12.963 -10.435 c 6.338 -1.01 11.194 -6.447 11.194 -13.072 c 0 -2.738 -0.832 -5.284 -2.263 -7.4 c 0.746 -1.651 1.171 -3.474 1.171 -5.4 c 0 -5.701 -3.607 -10.526 -8.662 -12.412 c 1.058 -1.903 1.711 -4.062 1.711 -6.393 c 0 -7.33 -5.943 -13.276 -13.284 -13.276 c -2.614 0 -5.048 0.787 -7.108 2.094 C 48.928 2.667 44.71 0 39.822 0 c -6.283 0 -11.51 4.374 -12.898 10.229 c -5.713 0.887 -10.402 5.407 -11.151 11.432 c -0.39 3.164 0.406 6.167 1.987 8.668 c -2.736 2.437 -4.504 5.944 -4.504 9.897 c 0 4.702 2.461 8.807 6.148 11.168 c -0.561 1.469 -0.905 3.053 -0.905 4.716 c 0 5.729 3.645 10.568 8.73 12.43 c 2.431 2.655 5.889 4.35 9.77 4.35 c 2.334 0 4.492 -0.654 6.398 -1.701 v 19.391 h -25.42 v 2.347 h 55.136 v -2.347 h -25.44 V 70.277 C 49.876 71.899 52.576 72.889 55.513 72.889 Z",
              width: 3,
              height: 3,
              attrs:
                {
                  fill: "#00B706"
                },
              clicked: false
            },
            {
              label: "Cultural",
              sliceValue: "2",
              type: "svg",
              path: "M 38.654 15.571 H 7.728 C 7.728 6.971 14.651 0 23.191 0 S 38.654 6.971 38.654 15.571 Z M 43.52 43.382 H 2.861 c -0.828 0 -1.5 0.671 -1.5 1.5 c 0 0.829 0.672 1.5 1.5 1.5 H 43.52 c 0.828 0 1.5 -0.671 1.5 -1.5 C 45.02 44.053 44.349 43.382 43.52 43.382 Z M 9.147 39.345 V 19.42 H 6.574 c -0.828 0 -1.5 -0.671 -1.5 -1.5 c 0 -0.829 0.672 -1.5 1.5 -1.5 h 33.233 c 0.828 0 1.5 0.671 1.5 1.5 c 0 0.829 -0.672 1.5 -1.5 1.5 h -2.573 v 19.925 h 2.573 c 0.828 0 1.5 0.671 1.5 1.5 c 0 0.829 -0.672 1.5 -1.5 1.5 H 6.574 c -0.828 0 -1.5 -0.671 -1.5 -1.5 c 0 -0.829 0.672 -1.5 1.5 -1.5 H 9.147 Z M 25.872 39.345 V 19.42 H 20.51 v 19.925 H 25.872 Z M 34.234 19.42 h -5.362 v 19.925 h 5.362 V 19.42 Z M 12.147 39.345 h 5.362 V 19.42 h -5.362 V 39.345 Z",
              width: 3,
              height: 3,
              attrs:
                {
                  fill: "#0083FF"
                },
              // clicked: true
            },
            {
              label: "Cultural / Natural",
              sliceValue: "3",
              type: "svg",
              path: "M 21 5 c -1.802 0 -3.499 0.442 -5 1.21 C 14.499 5.442 12.802 5 11 5 C 4.925 5 0 9.925 0 16 s 4.925 11 11 11 c 1.802 0 3.499 -0.442 5 -1.21 c 1.501 0.768 3.198 1.21 5 1.21 c 6.075 0 11 -4.925 11 -11 S 27.075 5 21 5 Z M 15.426 8.941 c 0.342 -0.269 0.84 -0.267 1.18 0.004 c 0.735 0.587 1.36 1.285 1.873 2.055 h -4.95 C 14.047 10.228 14.679 9.528 15.426 8.941 Z M 12.514 13 h 6.974 c 0.226 0.642 0.379 1.312 0.455 2 h -7.886 C 12.133 14.312 12.287 13.642 12.514 13 Z M 12.057 17 h 7.886 c -0.076 0.688 -0.23 1.358 -0.457 2 h -6.973 C 12.287 18.358 12.133 17.688 12.057 17 Z M 16.589 23.047 c -0.341 0.269 -0.838 0.269 -1.178 0 c -0.74 -0.585 -1.367 -1.28 -1.881 -2.047 h 4.941 C 17.956 21.766 17.329 22.462 16.589 23.047 Z M 21 25 c -1.05 0 -2.054 -0.191 -2.991 -0.523 C 20.446 22.46 22 19.412 22 16 c 0 -3.413 -1.555 -6.462 -3.994 -8.48 C 18.944 7.188 19.95 7 21 7 c 4.963 0 9 4.037 9 9 C 30 20.963 25.963 25 21 25 Z",
              width: 3,
              height: 3,
              attrs:
                {
                  fill: "#4200FF"
                },
              // clicked: true
            },
            {
              label: "Natural (Peligro)",
              sliceValue: "4",
              type: "svg",
              path: "M 55.513 72.889 c 6.368 0 11.662 -4.466 12.963 -10.435 c 6.338 -1.01 11.194 -6.447 11.194 -13.072 c 0 -2.738 -0.832 -5.284 -2.263 -7.4 c 0.746 -1.651 1.171 -3.474 1.171 -5.4 c 0 -5.701 -3.607 -10.526 -8.662 -12.412 c 1.058 -1.903 1.711 -4.062 1.711 -6.393 c 0 -7.33 -5.943 -13.276 -13.284 -13.276 c -2.614 0 -5.048 0.787 -7.108 2.094 C 48.928 2.667 44.71 0 39.822 0 c -6.283 0 -11.51 4.374 -12.898 10.229 c -5.713 0.887 -10.402 5.407 -11.151 11.432 c -0.39 3.164 0.406 6.167 1.987 8.668 c -2.736 2.437 -4.504 5.944 -4.504 9.897 c 0 4.702 2.461 8.807 6.148 11.168 c -0.561 1.469 -0.905 3.053 -0.905 4.716 c 0 5.729 3.645 10.568 8.73 12.43 c 2.431 2.655 5.889 4.35 9.77 4.35 c 2.334 0 4.492 -0.654 6.398 -1.701 v 19.391 h -25.42 v 2.347 h 55.136 v -2.347 h -25.44 V 70.277 C 49.876 71.899 52.576 72.889 55.513 72.889 Z",
              width: 3,
              height: 3,
              attrs:
                {
                  fill: "#FF0000"
                },
              // clicked: true
            },
            {
              label: "Cultural (Peligro)",
              sliceValue: "5",
              type: "svg",
              path: "M 38.654 15.571 H 7.728 C 7.728 6.971 14.651 0 23.191 0 S 38.654 6.971 38.654 15.571 Z M 43.52 43.382 H 2.861 c -0.828 0 -1.5 0.671 -1.5 1.5 c 0 0.829 0.672 1.5 1.5 1.5 H 43.52 c 0.828 0 1.5 -0.671 1.5 -1.5 C 45.02 44.053 44.349 43.382 43.52 43.382 Z M 9.147 39.345 V 19.42 H 6.574 c -0.828 0 -1.5 -0.671 -1.5 -1.5 c 0 -0.829 0.672 -1.5 1.5 -1.5 h 33.233 c 0.828 0 1.5 0.671 1.5 1.5 c 0 0.829 -0.672 1.5 -1.5 1.5 h -2.573 v 19.925 h 2.573 c 0.828 0 1.5 0.671 1.5 1.5 c 0 0.829 -0.672 1.5 -1.5 1.5 H 6.574 c -0.828 0 -1.5 -0.671 -1.5 -1.5 c 0 -0.829 0.672 -1.5 1.5 -1.5 H 9.147 Z M 25.872 39.345 V 19.42 H 20.51 v 19.925 H 25.872 Z M 34.234 19.42 h -5.362 v 19.925 h 5.362 V 19.42 Z M 12.147 39.345 h 5.362 V 19.42 h -5.362 V 39.345 Z",
              width: 3,
              height: 3,
              attrs:
                {
                  fill: "#FF0000"
                },
              // clicked: true v
          }]
      }
    },
      plots: newplots,
      areas: {
        //// CLEAN FROM HERE
        "AF" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Afghanistan<\/span><br\/>Población : 38928346<br\/>Área: 647500 Km² <br\/> Capital: Kabul <br\/> Moneda: Afghan afghani"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "AL" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Albania<\/span><br\/>Población : 2877797<br\/>Área: 28748 Km² <br\/> Capital: Tirana <br\/> Moneda: Albanian lek"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "DZ" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Algeria<\/span><br\/>Población : 43851044<br\/>Área: 2381740 Km² <br\/> Capital: Algiers <br\/> Moneda: Algerian dinar"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "AS" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">American Samoa<\/span><br\/>Población : 55191<br\/>Área: 199 Km² <br\/> Capital: Pago Pago <br\/> Moneda: U.S. dollar"
          },
          'attrs':
          {
            'fill': "#E93546"
          }
        },
        "AD" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Andorra<\/span><br\/>Población : 77265<br\/>Área: 468 Km² <br\/> Capital: Andorra la Vella <br\/> Moneda: Euro"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "AO" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Angola<\/span><br\/>Población : 32866272<br\/>Área: 1246700 Km² <br\/> Capital: Luanda <br\/> Moneda: Angolan kwanza"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "AI" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Anguilla<\/span><br\/>Población : 15003<br\/>Área: 102 Km² <br\/> Capital: The Valley <br\/> Moneda: null"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "AG" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Antigua & Barbuda<\/span><br\/>Población : 97929<br\/>Área: 443 Km² <br\/> Capital: Saint John's <br\/> Moneda: East Caribbean dollar"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "AR" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Argentina<\/span><br\/>Población : 45195774<br\/>Área: 2766890 Km² <br\/> Capital: Buenos Aires <br\/> Moneda: Argentine peso"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "AM" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Armenia<\/span><br\/>Población : 2963243<br\/>Área: 29800 Km² <br\/> Capital: Yerevan <br\/> Moneda: Armenian dram"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "AW" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Aruba<\/span><br\/>Población : 106766<br\/>Área: 193 Km² <br\/> Capital: Oranjestad <br\/> Moneda: Aruban florin"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "AU" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Australia<\/span><br\/>Población : 25499884<br\/>Área: 7686850 Km² <br\/> Capital: Canberra <br\/> Moneda: Australian dollar"
          },
          'attrs':
          {
            'fill': "#E93546"
          }
        },
        "AT" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Austria<\/span><br\/>Población : 9006398<br\/>Área: 83870 Km² <br\/> Capital: Vienna <br\/> Moneda: Euro"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "AZ" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Azerbaijan<\/span><br\/>Población : 10139177<br\/>Área: 86600 Km² <br\/> Capital: Baku <br\/> Moneda: New Azeri manat"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "BS" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Bahamas<\/span><br\/>Población : 393244<br\/>Área: 13940 Km² <br\/> Capital: Nassau <br\/> Moneda: Bahamian dollar"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "BH" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Bahrain<\/span><br\/>Población : 1701575<br\/>Área: 665 Km² <br\/> Capital: Manama <br\/> Moneda: Bahraini dinar"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "BD" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Bangladesh<\/span><br\/>Población : 164689383<br\/>Área: 144000 Km² <br\/> Capital: Dhaka <br\/> Moneda: Bangladeshi taka"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "BB" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Barbados<\/span><br\/>Población : 287375<br\/>Área: 431 Km² <br\/> Capital: Bridgetown <br\/> Moneda: Barbados dollar"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "BY" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Belarus<\/span><br\/>Población : 9449323<br\/>Área: 207600 Km² <br\/> Capital: Minsk <br\/> Moneda: Belarusian rubel"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "BE" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Belgium<\/span><br\/>Población : 11589623<br\/>Área: 30528 Km² <br\/> Capital: Brussels <br\/> Moneda: Euro"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "BZ" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Belize<\/span><br\/>Población : 397628<br\/>Área: 22966 Km² <br\/> Capital: Belmopan <br\/> Moneda: Belize dollar"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "BJ" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Benin<\/span><br\/>Población : 12123200<br\/>Área: 112620 Km² <br\/> Capital: Porto-Novo <br\/> Moneda: West African CFA franc"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "BM" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Bermuda<\/span><br\/>Población : 62278<br\/>Área: 53 Km² <br\/> Capital: Hamilton <br\/> Moneda: Bermuda dollar"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "BT" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Bhutan<\/span><br\/>Población : 771608<br\/>Área: 47000 Km² <br\/> Capital: Thimphu <br\/> Moneda: Bhutanese ngultrum"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "BO" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Bolivia<\/span><br\/>Población : 11673021<br\/>Área: 1098580 Km² <br\/> Capital: La Paz <br\/> Moneda: Bolivian Boliviano"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "BA" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Bosnia and Herzegovina<\/span><br\/>Población : 3280819<br\/>Área: 51129 Km² <br\/> Capital: Sarajevo <br\/> Moneda: Bosnia and Herzegovina convertible mark"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "BW" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Botswana<\/span><br\/>Población : 2351627<br\/>Área: 600370 Km² <br\/> Capital: Gaborone <br\/> Moneda: Botswana pula"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "BR" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Brazil<\/span><br\/>Población : 212559417<br\/>Área: 8511965 Km² <br\/> Capital: Brasilia <br\/> Moneda: Brazilian real"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "VG" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">British Virgin Islands<\/span><br\/>Población : 30231<br\/>Área: 153 Km² <br\/> Capital: Road Town <br\/> Moneda: null"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "BN" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Brunei<\/span><br\/>Población : 437479<br\/>Área: 5770 Km² <br\/> Capital: Bandar Seri Begawan <br\/> Moneda: Brunei dollar"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "BG" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Bulgaria<\/span><br\/>Población : 6948445<br\/>Área: 110910 Km² <br\/> Capital: Sofia <br\/> Moneda: Bulgarian lev"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "BF" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Burkina Faso<\/span><br\/>Población : 20903273<br\/>Área: 274200 Km² <br\/> Capital: Ouagadougou <br\/> Moneda: West African CFA franc"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "MM" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Burma<\/span><br\/>Población : 54409800<br\/>Área: 678500 Km² <br\/> Capital: null <br\/> Moneda: null"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "BI" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Burundi<\/span><br\/>Población : 11890784<br\/>Área: 27830 Km² <br\/> Capital: Bujumbura <br\/> Moneda: Burundi franc"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "KH" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Cambodia<\/span><br\/>Población : 16718965<br\/>Área: 181040 Km² <br\/> Capital: Phnom Penh <br\/> Moneda: Cambodian riel"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "CM" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Cameroon<\/span><br\/>Población : 26545863<br\/>Área: 475440 Km² <br\/> Capital: Yaounde <br\/> Moneda: Central African CFA franc"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "CA" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Canada<\/span><br\/>Población : 37742154<br\/>Área: 9984670 Km² <br\/> Capital: Ottawa <br\/> Moneda: Canadian dollar"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "CV" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Cabo Verde<\/span><br\/>Población : 555987<br\/>Área: 4033 Km² <br\/> Capital: Praia <br\/> Moneda: Cabo Verde escudo"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "KY" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Cayman Islands<\/span><br\/>Población : 65722<br\/>Área: 262 Km² <br\/> Capital: George Town <br\/> Moneda: Cayman Islands dollar"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "CF" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Central African Republic<\/span><br\/>Población : 4829767<br\/>Área: 622984 Km² <br\/> Capital: Bangui <br\/> Moneda: Central African CFA franc"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "TD" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Chad<\/span><br\/>Población : 16425864<br\/>Área: 1284000 Km² <br\/> Capital: N'Djamena <br\/> Moneda: Central African CFA franc"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "CL" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Chile<\/span><br\/>Población : 19116201<br\/>Área: 756950 Km² <br\/> Capital: Santiago <br\/> Moneda: Chilean peso"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "CN" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">China<\/span><br\/>Población : 1439323776<br\/>Área: 9596960 Km² <br\/> Capital: Beijing <br\/> Moneda: Chinese yuan"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "CO" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Colombia<\/span><br\/>Población : 50882891<br\/>Área: 1138910 Km² <br\/> Capital: Bogota <br\/> Moneda: Colombian peso"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "KM" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Comoros<\/span><br\/>Población : 869601<br\/>Área: 2170 Km² <br\/> Capital: Moroni <br\/> Moneda: Comorian franc"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "CD" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Congo, Dem. Rep.<\/span><br\/>Población : 89561403<br\/>Área: 2345410 Km² <br\/> Capital: Kinshasa <br\/> Moneda: Congolese franc"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "CG" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Congo, Repub. of the<\/span><br\/>Población : 5518087<br\/>Área: 342000 Km² <br\/> Capital: Brazzaville <br\/> Moneda: Central African CFA franc"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "CK" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Cook Islands<\/span><br\/>Población : 17564<br\/>Área: 240 Km² <br\/> Capital: Avarua <br\/> Moneda: null"
          },
          'attrs':
          {
            'fill': "#E93546"
          }
        },
        "CR" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Costa Rica<\/span><br\/>Población : 5094118<br\/>Área: 51100 Km² <br\/> Capital: San Jose <br\/> Moneda: Costa Rican colon"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "CI" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Côte d'Ivoire<\/span><br\/>Población : 26378274<br\/>Área: 322460 Km² <br\/> Capital: Yamoussoukro <br\/> Moneda: West African CFA franc"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "HR" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Croatia<\/span><br\/>Población : 4105267<br\/>Área: 56542 Km² <br\/> Capital: Zagreb <br\/> Moneda: Croatian kuna"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "CU" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Cuba<\/span><br\/>Población : 11326616<br\/>Área: 110860 Km² <br\/> Capital: Havana <br\/> Moneda: Cuban peso"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "CY" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Cyprus<\/span><br\/>Población : 1207359<br\/>Área: 9250 Km² <br\/> Capital: Nicosia <br\/> Moneda: Euro"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "CZ" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Czech Republic (Czechia)<\/span><br\/>Población : 10708981<br\/>Área: 78866 Km² <br\/> Capital: Prague <br\/> Moneda: Czech koruna"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "DK" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Denmark<\/span><br\/>Población : 5792202<br\/>Área: 43094 Km² <br\/> Capital: Copenhagen <br\/> Moneda: Danish krone"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "DJ" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Djibouti<\/span><br\/>Población : 988000<br\/>Área: 23000 Km² <br\/> Capital: Djibouti <br\/> Moneda: Djibouti franc"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "DM" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Dominica<\/span><br\/>Población : 71986<br\/>Área: 754 Km² <br\/> Capital: Roseau <br\/> Moneda: East Caribbean dollar"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "DO" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Dominican Republic<\/span><br\/>Población : 10847910<br\/>Área: 48730 Km² <br\/> Capital: Santo Domingo <br\/> Moneda: Dominican peso"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "TL" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Timor-Leste<\/span><br\/>Población : 1318445<br\/>Área: 15007 Km² <br\/> Capital: Dili <br\/> Moneda: U.S. dollar"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "EC" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Ecuador<\/span><br\/>Población : 17643054<br\/>Área: 283560 Km² <br\/> Capital: Quito <br\/> Moneda: U.S. dollar"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "EG" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Egypt<\/span><br\/>Población : 102334404<br\/>Área: 1001450 Km² <br\/> Capital: Cairo <br\/> Moneda: Egyptian pound"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "SV" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">El Salvador<\/span><br\/>Población : 6486205<br\/>Área: 21040 Km² <br\/> Capital: San Salvador <br\/> Moneda: U.S. dollar"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "GQ" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Equatorial Guinea<\/span><br\/>Población : 1402985<br\/>Área: 28051 Km² <br\/> Capital: Malabo <br\/> Moneda: Central African CFA franc"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "ER" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Eritrea<\/span><br\/>Población : 3546421<br\/>Área: 121320 Km² <br\/> Capital: Asmara <br\/> Moneda: Eritrean nakfa"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "EE" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Estonia<\/span><br\/>Población : 1326535<br\/>Área: 45226 Km² <br\/> Capital: Tallinn <br\/> Moneda: Euro"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "ET" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Ethiopia<\/span><br\/>Población : 114963588<br\/>Área: 1127127 Km² <br\/> Capital: Addis Ababa <br\/> Moneda: Ethiopian birr"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "FO" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Faroe Islands<\/span><br\/>Población : 49053<br\/>Área: 1399 Km² <br\/> Capital: Torshavn <br\/> Moneda: Danish krone"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "FJ" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Fiji<\/span><br\/>Población : 896445<br\/>Área: 18270 Km² <br\/> Capital: Suva <br\/> Moneda: Fijian dollar"
          },
          'attrs':
          {
            'fill': "#E93546"
          }
        },
        "FI" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Finland<\/span><br\/>Población : 5540720<br\/>Área: 338145 Km² <br\/> Capital: Helsinki <br\/> Moneda: Euro"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "FR" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">France<\/span><br\/>Población : 65273511<br\/>Área: 547030 Km² <br\/> Capital: Paris <br\/> Moneda: Euro"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "GF" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">French Guiana<\/span><br\/>Población : 298682<br\/>Área: 91000 Km² <br\/> Capital: null <br\/> Moneda: null"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "PF" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">French Polynesia<\/span><br\/>Población : 280908<br\/>Área: 4167 Km² <br\/> Capital: Papeete <br\/> Moneda: CFP franc"
          },
          'attrs':
          {
            'fill': "#E93546"
          }
        },
        "GA" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Gabon<\/span><br\/>Población : 2225734<br\/>Área: 267667 Km² <br\/> Capital: Libreville <br\/> Moneda: Central African CFA franc"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "GM" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Gambia<\/span><br\/>Población : 2416668<br\/>Área: 11300 Km² <br\/> Capital: Banjul <br\/> Moneda: Gambian dalasi"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "PS" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Gaza Strip<\/span><br\/>Población : 2048000<br\/>Área: 360 Km² <br\/> Capital: Jerusalem <br\/> Moneda: Israeli new shekel"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "GE" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Georgia<\/span><br\/>Población : 3989167<br\/>Área: 69700 Km² <br\/> Capital: Tbilisi <br\/> Moneda: Georgian lari"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "DE" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Germany<\/span><br\/>Población : 83783942<br\/>Área: 357021 Km² <br\/> Capital: Berlin <br\/> Moneda: Euro"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "GH" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Ghana<\/span><br\/>Población : 31072940<br\/>Área: 239460 Km² <br\/> Capital: Accra <br\/> Moneda: New Ghanaian cedi"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "GI" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Gibraltar<\/span><br\/>Población : 33691<br\/>Área: 7 Km² <br\/> Capital: Gibraltar <br\/> Moneda: null"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "GR" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Greece<\/span><br\/>Población : 10423054<br\/>Área: 131940 Km² <br\/> Capital: Athens <br\/> Moneda: Euro"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "GL" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Greenland<\/span><br\/>Población : 56770<br\/>Área: 2166086 Km² <br\/> Capital: Nuuk <br\/> Moneda: Danish krone"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "GD" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Grenada<\/span><br\/>Población : 112523<br\/>Área: 344 Km² <br\/> Capital: Saint George's <br\/> Moneda: East Caribbean dollar"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "GP" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Guadeloupe<\/span><br\/>Población : 400124<br\/>Área: 1780 Km² <br\/> Capital: null <br\/> Moneda: null"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "GU" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Guam<\/span><br\/>Población : 168775<br\/>Área: 541 Km² <br\/> Capital: Hagatna <br\/> Moneda: U.S. dollar"
          },
          'attrs':
          {
            'fill': "#E93546"
          }
        },
        "GT" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Guatemala<\/span><br\/>Población : 17915568<br\/>Área: 108890 Km² <br\/> Capital: Guatemala City <br\/> Moneda: Guatemalan quetzal"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "GG" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Guernsey<\/span><br\/>Población : 62792<br\/>Área: 78 Km² <br\/> Capital: Saint Peter Port <br\/> Moneda: null"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "GN" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Guinea<\/span><br\/>Población : 13132795<br\/>Área: 245857 Km² <br\/> Capital: Conakry <br\/> Moneda: Guinean franc"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "GW" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Guinea-Bissau<\/span><br\/>Población : 1968001<br\/>Área: 36120 Km² <br\/> Capital: Bissau <br\/> Moneda: West African CFA franc"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "GY" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Guyana<\/span><br\/>Población : 786552<br\/>Área: 214970 Km² <br\/> Capital: Georgetown <br\/> Moneda: Guyana dollar"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "HT" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Haiti<\/span><br\/>Población : 11402528<br\/>Área: 27750 Km² <br\/> Capital: Port-au-Prince <br\/> Moneda: Haitian gourde"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "HN" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Honduras<\/span><br\/>Población : 9904607<br\/>Área: 112090 Km² <br\/> Capital: Tegucigalpa <br\/> Moneda: Honduran lempira"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "HK" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Hong Kong<\/span><br\/>Población : 7496981<br\/>Área: 1092 Km² <br\/> Capital: null <br\/> Moneda: Hong Kong dollar"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "HU" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Hungary<\/span><br\/>Población : 9660351<br\/>Área: 93030 Km² <br\/> Capital: Budapest <br\/> Moneda: Hungarian forint"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "IS" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Iceland<\/span><br\/>Población : 341243<br\/>Área: 103000 Km² <br\/> Capital: Reykjavik <br\/> Moneda: Iceland krona"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "IN" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">India<\/span><br\/>Población : 1380004385<br\/>Área: 3287590 Km² <br\/> Capital: New Delhi <br\/> Moneda: Indian rupee"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "ID" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Indonesia<\/span><br\/>Población : 273523615<br\/>Área: 1919440 Km² <br\/> Capital: Jakarta <br\/> Moneda: Indonesian rupiah"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "IR" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Iran<\/span><br\/>Población : 83992949<br\/>Área: 1648000 Km² <br\/> Capital: Tehran <br\/> Moneda: Iranian rial"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "IQ" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Iraq<\/span><br\/>Población : 40222493<br\/>Área: 437072 Km² <br\/> Capital: Baghdad <br\/> Moneda: Iraqi dinar"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "IE" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Ireland<\/span><br\/>Población : 4937786<br\/>Área: 70280 Km² <br\/> Capital: Dublin <br\/> Moneda: Euro"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "IM" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Isle of Man<\/span><br\/>Población : 85033<br\/>Área: 572 Km² <br\/> Capital: Douglas <br\/> Moneda: Pound sterling"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "IL" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Israel<\/span><br\/>Población : 8655535<br\/>Área: 20770 Km² <br\/> Capital: Jerusalem <br\/> Moneda: Israeli new shekel"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "IT" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Italy<\/span><br\/>Población : 60461826<br\/>Área: 301230 Km² <br\/> Capital: Rome <br\/> Moneda: Euro"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "JM" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Jamaica<\/span><br\/>Población : 2961167<br\/>Área: 10991 Km² <br\/> Capital: Kingston <br\/> Moneda: Jamaican dollar"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "JP" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Japan<\/span><br\/>Población : 126476461<br\/>Área: 377835 Km² <br\/> Capital: Tokyo <br\/> Moneda: Japanese yen"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "JE" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Jersey<\/span><br\/>Población : ​115800<br\/>Área: 116 Km² <br\/> Capital: Saint Helier <br\/> Moneda: null"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "JO" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Jordan<\/span><br\/>Población : 10203134<br\/>Área: 92300 Km² <br\/> Capital: Amman <br\/> Moneda: Jordanian dinar"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "KZ" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Kazakhstan<\/span><br\/>Población : 18776707<br\/>Área: 2717300 Km² <br\/> Capital: Astana <br\/> Moneda: Kazakh tenge"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "KE" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Kenya<\/span><br\/>Población : 53771296<br\/>Área: 582650 Km² <br\/> Capital: Nairobi <br\/> Moneda: Kenyan shilling"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "KI" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Kiribati<\/span><br\/>Población : 119449<br\/>Área: 811 Km² <br\/> Capital: Tarawa <br\/> Moneda: Australian dollar"
          },
          'attrs':
          {
            'fill': "#E93546"
          }
        },
        "KP" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">North Korea<\/span><br\/>Población : 25778816<br\/>Área: 120540 Km² <br\/> Capital: Pyongyang <br\/> Moneda: Democratic People's Republic of Korean won"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "KR" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">South Korea<\/span><br\/>Población : 51269185<br\/>Área: 98480 Km² <br\/> Capital: Seoul <br\/> Moneda: Korean won"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "KW" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Kuwait<\/span><br\/>Población : 4270571<br\/>Área: 17820 Km² <br\/> Capital: Kuwait City <br\/> Moneda: Kuwaiti dinar"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "KG" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Kyrgyzstan<\/span><br\/>Población : 6524195<br\/>Área: 198500 Km² <br\/> Capital: Bishkek <br\/> Moneda: Kyrgyz som"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "LA" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Laos<\/span><br\/>Población : 7275560<br\/>Área: 236800 Km² <br\/> Capital: Vientiane <br\/> Moneda: Lao kip"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "LV" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Latvia<\/span><br\/>Población : 1886198<br\/>Área: 64589 Km² <br\/> Capital: Riga <br\/> Moneda: Euro"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "LB" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Lebanon<\/span><br\/>Población : 6825445<br\/>Área: 10400 Km² <br\/> Capital: Beirut <br\/> Moneda: Lebanese pound"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "LS" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Lesotho<\/span><br\/>Población : 2142249<br\/>Área: 30355 Km² <br\/> Capital: Maseru <br\/> Moneda: Lesotho loti"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "LR" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Liberia<\/span><br\/>Población : 5057681<br\/>Área: 111370 Km² <br\/> Capital: Monrovia <br\/> Moneda: U.S. dollar"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "LY" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Libya<\/span><br\/>Población : 6871292<br\/>Área: 1759540 Km² <br\/> Capital: Tripoli <br\/> Moneda: Libyan dinar"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "LI" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Liechtenstein<\/span><br\/>Población : 38128<br\/>Área: 160 Km² <br\/> Capital: Vaduz <br\/> Moneda: Swiss franc"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "LT" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Lithuania<\/span><br\/>Población : 2722289<br\/>Área: 65200 Km² <br\/> Capital: Vilnius <br\/> Moneda: Euro"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "LU" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Luxembourg<\/span><br\/>Población : 625978<br\/>Área: 2586 Km² <br\/> Capital: Luxembourg <br\/> Moneda: Euro"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "MO" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Macao<\/span><br\/>Población : 658391<br\/>Área: 28 Km² <br\/> Capital: null <br\/> Moneda: Macao pataca"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "MK" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Macedonia<\/span><br\/>Población : 2065000<br\/>Área: 25333 Km² <br\/> Capital: Skopje <br\/> Moneda: Macedonian denar"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "MG" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Madagascar<\/span><br\/>Población : 27691018<br\/>Área: 587040 Km² <br\/> Capital: Antananarivo <br\/> Moneda: Malagasy ariary"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "MW" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Malawi<\/span><br\/>Población : 19129952<br\/>Área: 118480 Km² <br\/> Capital: Lilongwe <br\/> Moneda: Malawi kwacha"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "MY" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Malaysia<\/span><br\/>Población : 32365999<br\/>Área: 329750 Km² <br\/> Capital: Kuala Lumpur <br\/> Moneda: Malaysian ringgit"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "MV" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Maldives<\/span><br\/>Población : 540544<br\/>Área: 300 Km² <br\/> Capital: Male <br\/> Moneda: Maldivian rufiyaa"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "ML" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Mali<\/span><br\/>Población : 20250833<br\/>Área: 1240000 Km² <br\/> Capital: Bamako <br\/> Moneda: West African CFA franc"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "MT" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Malta<\/span><br\/>Población : 441543<br\/>Área: 316 Km² <br\/> Capital: Valletta <br\/> Moneda: Euro"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "MH" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Marshall Islands<\/span><br\/>Población : 59190<br\/>Área: 11854 Km² <br\/> Capital: Majuro <br\/> Moneda: U.S. dollar"
          },
          'attrs':
          {
            'fill': "#E93546"
          }
        },
        "MQ" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Martinique<\/span><br\/>Población : 375265<br\/>Área: 1100 Km² <br\/> Capital: null <br\/> Moneda: null"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "MR" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Mauritania<\/span><br\/>Población : 4649658<br\/>Área: 1030700 Km² <br\/> Capital: Nouakchott <br\/> Moneda: Mauritanian ouguiya"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "MU" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Mauritius<\/span><br\/>Población : 1271768<br\/>Área: 2040 Km² <br\/> Capital: Port Louis <br\/> Moneda: Mauritian rupee"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "YT" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Mayotte<\/span><br\/>Población : 272815<br\/>Área: 374 Km² <br\/> Capital: null <br\/> Moneda: null"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "MX" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Mexico<\/span><br\/>Población : 128932753<br\/>Área: 1972550 Km² <br\/> Capital: Mexico City <br\/> Moneda: Mexican peso"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "FM" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Micronesia<\/span><br\/>Población : 548914<br\/>Área: 702 Km² <br\/> Capital: Palikir <br\/> Moneda: U.S. dollar"
          },
          'attrs':
          {
            'fill': "#E93546"
          }
        },
        "MD" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Moldova<\/span><br\/>Población : 4033963<br\/>Área: 33843 Km² <br\/> Capital: Chisinau <br\/> Moneda: Moldovan leu"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "MC" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Monaco<\/span><br\/>Población : 39242<br\/>Área: 2 Km² <br\/> Capital: Monaco <br\/> Moneda: Euro"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "MN" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Mongolia<\/span><br\/>Población : 3278290<br\/>Área: 1564116 Km² <br\/> Capital: Ulaanbaatar <br\/> Moneda: Mongolian tugrik"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "MS" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Montserrat<\/span><br\/>Población : 4992<br\/>Área: 102 Km² <br\/> Capital: Plymouth <br\/> Moneda: null"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "MA" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Morocco<\/span><br\/>Población : 36910560<br\/>Área: 446550 Km² <br\/> Capital: Rabat <br\/> Moneda: Moroccan dirham"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "MZ" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Mozambique<\/span><br\/>Población : 31255435<br\/>Área: 801590 Km² <br\/> Capital: Maputo <br\/> Moneda: New Mozambican metical"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "NA" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Namibia<\/span><br\/>Población : 2540905<br\/>Área: 825418 Km² <br\/> Capital: Windhoek <br\/> Moneda: null"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "NR" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Nauru<\/span><br\/>Población : 10824<br\/>Área: 21 Km² <br\/> Capital: Yaren <br\/> Moneda: null"
          },
          'attrs':
          {
            'fill': "#E93546"
          }
        },
        "NP" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Nepal<\/span><br\/>Población : 29136808<br\/>Área: 147181 Km² <br\/> Capital: Kathmandu <br\/> Moneda: Nepalese rupee"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "NL" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Netherlands<\/span><br\/>Población : 17134872<br\/>Área: 41526 Km² <br\/> Capital: Amsterdam <br\/> Moneda: Euro"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "AN" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Netherlands Antilles<\/span><br\/>Población : 17134872<br\/>Área: 960 Km² <br\/> Capital: null <br\/> Moneda: null"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "NC" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">New Caledonia<\/span><br\/>Población : 285498<br\/>Área: 19060 Km² <br\/> Capital: Noumea <br\/> Moneda: CFP franc"
          },
          'attrs':
          {
            'fill': "#E93546"
          }
        },
        "NZ" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">New Zealand<\/span><br\/>Población : 4822233<br\/>Área: 268680 Km² <br\/> Capital: Wellington <br\/> Moneda: New Zealand dollar"
          },
          'attrs':
          {
            'fill': "#E93546"
          }
        },
        "NI" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Nicaragua<\/span><br\/>Población : 6624554<br\/>Área: 129494 Km² <br\/> Capital: Managua <br\/> Moneda: Nicaraguan gold cordoba"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "NE" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Niger<\/span><br\/>Población : 24206644<br\/>Área: 1267000 Km² <br\/> Capital: Niamey <br\/> Moneda: West African CFA franc"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "NG" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Nigeria<\/span><br\/>Población : 206139589<br\/>Área: 923768 Km² <br\/> Capital: Abuja <br\/> Moneda: Nigerian naira"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "MP" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Northern Mariana Islands<\/span><br\/>Población : 57559<br\/>Área: 477 Km² <br\/> Capital: Saipan <br\/> Moneda: U.S. dollar"
          },
          'attrs':
          {
            'fill': "#E93546"
          }
        },
        "NO" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Norway<\/span><br\/>Población : 5421241<br\/>Área: 323802 Km² <br\/> Capital: Oslo <br\/> Moneda: Norwegian krone"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "OM" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Oman<\/span><br\/>Población : 5106626<br\/>Área: 212460 Km² <br\/> Capital: Muscat <br\/> Moneda: Rial Omani"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "PK" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Pakistan<\/span><br\/>Población : 220892340<br\/>Área: 803940 Km² <br\/> Capital: Islamabad <br\/> Moneda: Pakistani rupee"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "PW" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Palau<\/span><br\/>Población : 18094<br\/>Área: 458 Km² <br\/> Capital: Melekeok <br\/> Moneda: U.S. dollar"
          },
          'attrs':
          {
            'fill': "#E93546"
          }
        },
        "PA" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Panama<\/span><br\/>Población : 4314767<br\/>Área: 78200 Km² <br\/> Capital: Panama City <br\/> Moneda: Panamanian balboa"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "PG" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Papua New Guinea<\/span><br\/>Población : 8947024<br\/>Área: 462840 Km² <br\/> Capital: Port Moresby <br\/> Moneda: Papua New Guinea kina"
          },
          'attrs':
          {
            'fill': "#E93546"
          }
        },
        "PY" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Paraguay<\/span><br\/>Población : 7132538<br\/>Área: 406750 Km² <br\/> Capital: Asuncion <br\/> Moneda: Paraguayan guarani"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "PE" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Peru<\/span><br\/>Población : 32971854<br\/>Área: 1285220 Km² <br\/> Capital: Lima <br\/> Moneda: Peruvian new sol"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "PH" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Philippines<\/span><br\/>Población : 109581078<br\/>Área: 300000 Km² <br\/> Capital: Manila <br\/> Moneda: Philippine peso"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "PL" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Poland<\/span><br\/>Población : 37846611<br\/>Área: 312685 Km² <br\/> Capital: Warsaw <br\/> Moneda: Polish zloty"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "PT" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Portugal<\/span><br\/>Población : 10196709<br\/>Área: 92391 Km² <br\/> Capital: Lisbon <br\/> Moneda: Euro"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "PR" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Puerto Rico<\/span><br\/>Población : 2860853<br\/>Área: 13790 Km² <br\/> Capital: San Juan <br\/> Moneda: U.S. dollar"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "QA" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Qatar<\/span><br\/>Población : 2881053<br\/>Área: 11437 Km² <br\/> Capital: Doha <br\/> Moneda: Qatari riyal"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "RE" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Réunion<\/span><br\/>Población : 895312<br\/>Área: 2517 Km² <br\/> Capital: null <br\/> Moneda: null"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "RO" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Romania<\/span><br\/>Población : 19237691<br\/>Área: 237500 Km² <br\/> Capital: Bucharest <br\/> Moneda: New Romanian leu"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "RU" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Russia<\/span><br\/>Población : 145934462<br\/>Área: 17075200 Km² <br\/> Capital: Moscow <br\/> Moneda: Russian ruble"
          },
          'attrs':
          {
            'fill': "0-#B9D516-#F76624"
          }
        },
        "RW" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Rwanda<\/span><br\/>Población : 12952218<br\/>Área: 26338 Km² <br\/> Capital: Kigali <br\/> Moneda: Rwandan franc"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "SH" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Saint Helena<\/span><br\/>Población : 6077<br\/>Área: 413 Km² <br\/> Capital: Jamestown <br\/> Moneda: null"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "KN" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Saint Kitts & Nevis<\/span><br\/>Población : 53199<br\/>Área: 261 Km² <br\/> Capital: Basseterre <br\/> Moneda: East Caribbean dollar"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "LC" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Saint Lucia<\/span><br\/>Población : 183627<br\/>Área: 616 Km² <br\/> Capital: Castries <br\/> Moneda: East Caribbean dollar"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "PM" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Saint Pierre & Miquelon<\/span><br\/>Población : 5794<br\/>Área: 242 Km² <br\/> Capital: Saint-Pierre <br\/> Moneda: null"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "VC" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Saint Vincent and the Grenadines<\/span><br\/>Población : 110940<br\/>Área: 389 Km² <br\/> Capital: Kingstown <br\/> Moneda: East Caribbean dollar"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "WS" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Samoa<\/span><br\/>Población : 198414<br\/>Área: 2944 Km² <br\/> Capital: Apia <br\/> Moneda: Samoan tala"
          },
          'attrs':
          {
            'fill': "#E93546"
          }
        },
        "SM" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">San Marino<\/span><br\/>Población : 33931<br\/>Área: 61 Km² <br\/> Capital: San Marino <br\/> Moneda: Euro"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "ST" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Sao Tome & Principe<\/span><br\/>Población : 219159<br\/>Área: 1001 Km² <br\/> Capital: Sao Tome <br\/> Moneda: SÃ£o TomÃ© and Principe dobra"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "SA" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Saudi Arabia<\/span><br\/>Población : 34813871<br\/>Área: 1960582 Km² <br\/> Capital: Riyadh <br\/> Moneda: Saudi Arabian riyal"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "SN" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Senegal<\/span><br\/>Población : 16743927<br\/>Área: 196190 Km² <br\/> Capital: Dakar <br\/> Moneda: West African CFA franc"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "RS" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Serbia<\/span><br\/>Población : 8737371<br\/>Área: 88361 Km² <br\/> Capital: Belgrade <br\/> Moneda: New Serbian dinar"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "SC" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Seychelles<\/span><br\/>Población : 98347<br\/>Área: 455 Km² <br\/> Capital: Victoria <br\/> Moneda: Seychelles rupee"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "SL" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Sierra Leone<\/span><br\/>Población : 7976983<br\/>Área: 71740 Km² <br\/> Capital: Freetown <br\/> Moneda: Sierra Leonean leone"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "SG" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Singapore<\/span><br\/>Población : 5850342<br\/>Área: 693 Km² <br\/> Capital: Singapore <br\/> Moneda: Singapore dollar"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "SK" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Slovakia<\/span><br\/>Población : 5459642<br\/>Área: 48845 Km² <br\/> Capital: Bratislava <br\/> Moneda: Euro"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "SI" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Slovenia<\/span><br\/>Población : 2078938<br\/>Área: 20273 Km² <br\/> Capital: Ljubljana <br\/> Moneda: Euro"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "SB" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Solomon Islands<\/span><br\/>Población : 686884<br\/>Área: 28450 Km² <br\/> Capital: Honiara <br\/> Moneda: Solomon Islands dollar"
          },
          'attrs':
          {
            'fill': "#E93546"
          }
        },
        "SO" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Somalia<\/span><br\/>Población : 15893222<br\/>Área: 637657 Km² <br\/> Capital: Mogadishu <br\/> Moneda: Somali shilling"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "ZA" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">South Africa<\/span><br\/>Población : 59308690<br\/>Área: 1219912 Km² <br\/> Capital: Pretoria <br\/> Moneda: South African rand"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "ES" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Spain<\/span><br\/>Población : 46754778<br\/>Área: 504782 Km² <br\/> Capital: Madrid <br\/> Moneda: Euro"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "LK" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Sri Lanka<\/span><br\/>Población : 21413249<br\/>Área: 65610 Km² <br\/> Capital: Colombo <br\/> Moneda: Sri Lankan rupee"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "SD" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Sudan<\/span><br\/>Población : 43849260<br\/>Área: 2505810 Km² <br\/> Capital: Khartoum <br\/> Moneda: Sudanese pound"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "SS" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">South Sudan<\/span><br\/>Población : 11193725<br\/>Área: 644329 Km² <br\/> Capital: Juba <br\/> Moneda: South Sudanese pound"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "SR" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Suriname<\/span><br\/>Población : 586632<br\/>Área: 163270 Km² <br\/> Capital: Paramaribo <br\/> Moneda: Suriname dollar"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "SZ" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Swaziland<\/span><br\/>Población : 1172000<br\/>Área: 17363 Km² <br\/> Capital: Mbabane <br\/> Moneda: Swaziland lilangeni"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "SE" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Sweden<\/span><br\/>Población : 10099265<br\/>Área: 449964 Km² <br\/> Capital: Stockholm <br\/> Moneda: Swedish krona"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "CH" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Switzerland<\/span><br\/>Población : 8654622<br\/>Área: 41290 Km² <br\/> Capital: Bern <br\/> Moneda: Swiss franc"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "SY" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Syria<\/span><br\/>Población : 17500658<br\/>Área: 185180 Km² <br\/> Capital: Damascus <br\/> Moneda: Syrian pound"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "TW" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Taiwan<\/span><br\/>Población : 23816775<br\/>Área: 35980 Km² <br\/> Capital: Taipei <br\/> Moneda: null"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "TJ" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Tajikistan<\/span><br\/>Población : 9537645<br\/>Área: 143100 Km² <br\/> Capital: Dushanbe <br\/> Moneda: Tajik somoni"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "TZ" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Tanzania<\/span><br\/>Población : 59734218<br\/>Área: 945087 Km² <br\/> Capital: Dar es Salaam <br\/> Moneda: Tanzanian shilling"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "TH" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Thailand<\/span><br\/>Población : 69799978<br\/>Área: 514000 Km² <br\/> Capital: Bangkok <br\/> Moneda: Thai baht"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "TG" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Togo<\/span><br\/>Población : 8278724<br\/>Área: 56785 Km² <br\/> Capital: Lome <br\/> Moneda: West African CFA franc"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "TO" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Tonga<\/span><br\/>Población : 105695<br\/>Área: 748 Km² <br\/> Capital: Nuku'alofa <br\/> Moneda: Tongan pa'anga"
          },
          'attrs':
          {
            'fill': "#E93546"
          }
        },
        "TT" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Trinidad and Tobago<\/span><br\/>Población : 1399488<br\/>Área: 5128 Km² <br\/> Capital: Port of Spain <br\/> Moneda: Trinidad and Tobago dollar"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "TN" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Tunisia<\/span><br\/>Población : 11818619<br\/>Área: 163610 Km² <br\/> Capital: Tunis <br\/> Moneda: Tunisian dinar"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "TR" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Turkey<\/span><br\/>Población : 84339067<br\/>Área: 780580 Km² <br\/> Capital: Ankara <br\/> Moneda: New Turkish lira"
          },
          'attrs':
          {
            'fill': "0-#B9D516-#F76624"
          }
        },
        "TM" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Turkmenistan<\/span><br\/>Población : 6031200<br\/>Área: 488100 Km² <br\/> Capital: Ashgabat <br\/> Moneda: New Turkmen manat"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "TC" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Turks and Caicos<\/span><br\/>Población : 38717<br\/>Área: 430 Km² <br\/> Capital: Grand Turk <br\/> Moneda: U.S. dollar"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "TV" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Tuvalu<\/span><br\/>Población : 11792<br\/>Área: 26 Km² <br\/> Capital: Funafuti <br\/> Moneda: Australian dollar"
          },
          'attrs':
          {
            'fill': "#E93546"
          }
        },
        "UG" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Uganda<\/span><br\/>Población : 45741007<br\/>Área: 236040 Km² <br\/> Capital: Kampala <br\/> Moneda: Ugandan shilling"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "UA" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Ukraine<\/span><br\/>Población : 43733762<br\/>Área: 603700 Km² <br\/> Capital: Kyiv <br\/> Moneda: Ukrainian hryvnia"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "AE" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">United Arab Emirates<\/span><br\/>Población : 9890402<br\/>Área: 82880 Km² <br\/> Capital: Abu Dhabi <br\/> Moneda: U.A.E. dirham"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "GB" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">United Kingdom<\/span><br\/>Población : 67886011<br\/>Área: 244820 Km² <br\/> Capital: London <br\/> Moneda: Pound sterling"
          },
          'attrs':
          {
            'fill': "#B9D516"
          }
        },
        "US" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">United States<\/span><br\/>Población : 331002651<br\/>Área: 9631420 Km² <br\/> Capital: Washington <br\/> Moneda: U.S. dollar"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "UY" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Uruguay<\/span><br\/>Población : 3473730<br\/>Área: 176220 Km² <br\/> Capital: Montevideo <br\/> Moneda: Uruguayan peso"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "UZ" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Uzbekistan<\/span><br\/>Población : 33469203<br\/>Área: 447400 Km² <br\/> Capital: Tashkent <br\/> Moneda: Uzbek sum"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "VU" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Vanuatu<\/span><br\/>Población : 307145<br\/>Área: 12200 Km² <br\/> Capital: Port-Vila <br\/> Moneda: Vanuatu vatu"
          },
          'attrs':
          {
            'fill': "#E93546"
          }
        },
        "VE" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Venezuela<\/span><br\/>Población : 28435940<br\/>Área: 912050 Km² <br\/> Capital: Caracas <br\/> Moneda: Venezuelan bolivar fuerte"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "VN" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Vietnam<\/span><br\/>Población : 97338579<br\/>Área: 329560 Km² <br\/> Capital: Hanoi <br\/> Moneda: Vietnamese dong"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "VI" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">U.S. Virgin Islands<\/span><br\/>Población : 104425<br\/>Área: 1910 Km² <br\/> Capital: Charlotte Amalie <br\/> Moneda: U.S. dollar"
          },
          'attrs':
          {
            'fill': "#43BBCC"
          }
        },
        "WF" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Wallis and Futuna<\/span><br\/>Población : 11239<br\/>Área: 274 Km² <br\/> Capital: Mata-Utu <br\/> Moneda: null"
          },
          'attrs':
          {
            'fill': "#E93546"
          }
        },
        "EH" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Western Sahara<\/span><br\/>Población : 597339<br\/>Área: 266000 Km² <br\/> Capital: El-AaiÃºn <br\/> Moneda: null"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "YE" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Yemen<\/span><br\/>Población : 29825964<br\/>Área: 527970 Km² <br\/> Capital: Sanaa <br\/> Moneda: Yemeni rial"
          },
          'attrs':
          {
            'fill': "#F76624"
          }
        },
        "ZM" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Zambia<\/span><br\/>Población : 18383955<br\/>Área: 752614 Km² <br\/> Capital: Lusaka <br\/> Moneda: New Zambian kwacha"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },
        "ZW" : {
          "tooltip": {
            "content": "<span style=\"font-weight:bold;\">Zimbabwe<\/span><br\/>Población : 14862924<br\/>Área: 390580 Km² <br\/> Capital: Harare <br\/> Moneda: U.S. dollar"
          },
          'attrs':
          {
            'fill': "#E9A713"
          }
        },      //  TO HERE
      }
    });
  
  
    const modal:any = document.querySelector('#my-modal');
    const modalBtn:any = document.querySelector('#modal-btn');
    const closeBtn:any = document.querySelector('.btnCloseDescripcion');
    
    modalBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    // window.addEventListener('click', outsideClick);
    window.addEventListener('resize',changeHeightOnResize);
  
    
    
    function openModal() {
      modal.style.display = 'block';
    }
    
    // Close
    function closeModal() {
      modal.style.display = 'none';
      respuestas = [];
    }
    
    // Close If Outside Click
    function outsideClick(e:any) {
      if (e.target == modal) {
        modal.style.display = 'none';
      }
    }  
  
    
    function changeHeightOnResize(){
      // console.log('simón');
      x.setAttribute('style','height: 100vh');
    }
  
    let x = document.querySelectorAll('svg')[1];

    let xy = document.querySelectorAll('svg')[0];
    xy.setAttribute('style','width: 220px');

    // x?.addEventListener('click',this.shit);
    
    ojo: 'this shit is working setting the height to 100 vh'
    x.setAttribute('id','svgMap');
    x.setAttribute('style','height: 100vh');
  
  
  
  
  
  
    // let x = document.querySelectorAll('svg')[1];
  
    let respuestas: any = [];
    let respuesta: any;
  
    let pathAreas = document.querySelectorAll('path');
    // let pathPlots = document.querySelectorAll('path.plot');
  
  
    // x.setAttribute('style','height: 100vh');
    // console.log(x);
    // console.log(pathAreas);
    // console.log(pathPlots);
  
    x?.addEventListener('click', (e) => {
      
  // console.log(respuestas);
  
      for(let pathArea in pathAreas){
        
        if(e.target == pathAreas[pathArea]){
          // console.log('si');
          respuestas.push('si');
        }
        else {
          respuestas.push('no');
          // console.log('no');
        }
      }
  
      if(respuestas.includes('si')){
        respuesta = 'si';
        // mapaChico(plots, plots);
      } else {
        respuesta = 'no';
        mapaGrande(plots, plots)
      }
  
      // console.log(e);
  // console.log(respuesta);
    });
  }
  

