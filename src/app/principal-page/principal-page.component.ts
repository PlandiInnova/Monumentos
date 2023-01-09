import { Component, OnInit } from '@angular/core';
import 'jquery-mapael';
import 'jquery-mapael/js/maps/world_countries.js';
import dfByRecords from '../../assets/dfByRecords.json';
import dfCountries from '../../assets/dfCountries.json';

// ----------------------------------------------------
// THESE VARIABLES WORK'S AS ENVIRONMENT
// THIS VARIABLE IS USED TO BE ABLE TO WORK WITH JQUERY
declare var $: any;
// THIS VARIABLE IS USED TO BE ABLE TO WORK WITH html2pdf
declare let html2pdf: any;
// THESE VARIABLES WORK'S AS ENVIRONMENT
// ----------------------------------------------------

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.css']
})
export class PrincipalPageComponent implements OnInit {

  // HERE WILL BE ALL THE PLOTS THAT WILL BE PLOTTED IN MAP
  plots: any = [];


  // THIS VARIABLE NEED TO BE IN FALSE TO CAN BE ABLE TO GET INTO CONTENT
  dentroDelContenido: any = false;

  // IN THIS VARIABLE IS LOCATED ALL THE MONUMENTS FROM THE JSON FILE
  monumentosDataRecords: any;
  // IN THIS VARIABLE IS LOCATED ALL THE COUNTRYS FROM THE JSON FILE
  dataCountries: any;

  constructor() {
    // SET THE VALUES OF THE JSON FILES TO OUR VARIABLES PREVIOUSLY DECLARETED ↑
    this.monumentosDataRecords = dfByRecords;
    this.dataCountries = dfCountries;
  }

  ngOnInit(): void {
    // dataToPlots JUST CREATE THE PLOTS AS WE NEEDED AND WITH THE CORRECT FORM
    this.dataToPlots(this.monumentosDataRecords);

    // THIS FUNC IS USED TO CREATE THE CORRECT FORMAT OF EACH COUNTRY FROM THE JSON FILE
    uniqueUsageToChangeInfoContries: '↓↓↓↓↓↓↓'
    //  areas(this.dataCountries);
    uniqueUsageToChangeInfoContries: '↑↑↑↑↑↑↑'


    // THIS FUNCT IS USED TO JUMP THE FRONT PAGE (NEED TO CHANGE THE VARIABLE OF LINE 28 dentroDelContenido TO 'true')
    useThisToWhenPortraitIsAvoided: ''
    // this.entrarAlContenidoByClick();
  }

  // THIS FUNCT IS USED TO JUMP THE FRONT PAGE
  entrarAlContenidoByClick() {
    this.dentroDelContenido = true;
    setTimeout(() => {
      mapaGrande(this.plots, this.plots);
    }, 5);
  }


  // FUNCTION USED TO PRINT THE DIV 'modal-body' AS PDF
  public openPDF(): void {
    var element = document.getElementById('modal-body');
    var options = {
      filename: 'Monumento.pdf',
      margin: [10, 10, 10, 10],
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


  // FUNC USED TO TOGGLE THE MENU, BE ABLE TO DRAG THE MENU AND OPEN IT
  openMenu() {
    let toggleDiv = <HTMLDivElement>document.getElementById('toggleDiv');
    let navigationDiv = <HTMLDivElement>document.getElementById('navigationDiv');
    let CursorToMoveDiceDiv = <HTMLDivElement>document.getElementById('CursorToMoveDice');
    // console.log(CursorToMoveDiceDiv.getBoundingClientRect());

    setTimeout(() => {
      let x = CursorToMoveDiceDiv.getBoundingClientRect();
      let xx = navigationDiv.getBoundingClientRect();
      var w = window.innerWidth;
      var h = window.innerHeight;
      // console.log(x, w, h);
      // console.log(x,w,h);
      if (x.right > w + 20 || xx.bottom > h) {
        // console.log('c salió');
        // navigationDiv.click();
        CursorToMoveDiceDiv.click();
      }
    }, 2000);

    // console.log(toggleDiv.classList);
    // let toggleOpenClose = <HTMLDivElement>document.getElementById('toggleOpenClose');
    let toggleStatus = toggleDiv.classList.value;
    if (toggleStatus === 'cdk-drag-handle toggle') {
      toggleDiv.classList.add('active');
      navigationDiv.classList.add('active');
      CursorToMoveDiceDiv.classList.add('active');
      // toggleOpenClose.classList.add('active');
    } else {
      toggleDiv.classList.remove('active');
      navigationDiv.classList.remove('active');
      CursorToMoveDiceDiv.classList.remove('active');
      // toggleOpenClose.classList.remove('active');
    }
  }


  // WITH THIS FUNC WE CREATE THE FORMAT OF EACH PLOT, HIS TOOLTIP AND HIS DESCRIPTION
  dataToPlots(monumentos: any) {
    console.log("🚀 ~ file: principal-page.component.ts:127 ~ PrincipalPageComponent ~ dataToPlots ~ monumentos", monumentos)
    console.log("🚀 ~ file: principal-page.component.ts:128 ~ PrincipalPageComponent ~ dataToPlots ~ console", console)

console.assert(console)
console.count();
console.debug();
console

    formula: 'CONCATENAR("<li>",Y2,"</li>","<li>",Z2,"</li>","<li>",AA2,"</li>","<li>",AB2,"</li>","<li>",AC2,"</li>","<li>",AD2,"</li>","<li>",AE2,"</li>")'

    Alpha_code_2: "EC"
    Area_hec: 14066514
    CatByDanger: 1
    Category_short: "N"
    Criterio: "vii,viii,ix,x"
    DangerState: 0
    Pais: "Ecuador"
    Region_Es: "América Latina y El Caribe"
    category: "Natural"
    criteri_1_txt: "Para contener fenómenos naturales superlativos o áreas de excepcional belleza natural e importancia estética."
    criteri_2_txt: "Ser ejemplos sobresalientes que representen etapas importantes de la historia de la tierra, incluido el registro de la vida, procesos geológicos, terrestres, geomórficos o fisiográficos significativos."
    criteri_3_txt: "Ser ejemplos destacados que representen importantes procesos ecológicos y biológicos en curso en la evolución y el desarrollo de ecosistemas terrestres, de agua dulce, costeros y marinos y comunidades de plantas y animales."
    criteri_4_txt: "Contiene los hábitats naturales más importantes para la conservación in situ de la diversidad biológica, incluidas las especias amenazadas con valor universal excepcional para la ciencia o conservación."
    criteri_5_txt: nullcriteri_6_txt: nullcriteri_7_txt: nullcriterio_1: "vii"
    criterio_2: "viii"
    criterio_3: "ix"
    criterio_4: "x"
    criterio_5: nullcriterio_6: nullcriterio_7: null
    criterio_concat: "<li>Para contener fenómenos naturales superlativos o áreas de excepcional belleza natural e importancia estética.</li><li>Ser ejemplos sobresalientes que representen etapas importantes de la historia de la tierra, incluido el registro de la vida, procesos geológicos, terrestres, geomórficos o fisiográficos significativos.</li><li>Ser ejemplos destacados que representen importantes procesos ecológicos y biológicos en curso en la evolución y el desarrollo de ecosistemas terrestres, de agua dulce, costeros y marinos y comunidades de plantas y animales.</li><li>Contiene los hábitats naturales más importantes para la conservación in situ de la diversidad biológica, incluidas las especias amenazadas con valor universal excepcional para la ciencia o conservación.</li>"
    danger: "2007-2010"
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
    for (let monumento of monumentos) {

      let criterioConcatendoAlv: any = [];

      if (monumento.criteri_1_txt != null) { criterioConcatendoAlv.push(`<br/>• ${monumento.criteri_1_txt}`); }
      if (monumento.criteri_2_txt != null) { criterioConcatendoAlv.push(`<br/>• ${monumento.criteri_2_txt}`); }
      if (monumento.criteri_3_txt != null) { criterioConcatendoAlv.push(`<br/>• ${monumento.criteri_3_txt}`); }
      if (monumento.criteri_4_txt != null) { criterioConcatendoAlv.push(`<br/>• ${monumento.criteri_4_txt}`); }
      if (monumento.criteri_5_txt != null) { criterioConcatendoAlv.push(`<br/>• ${monumento.criteri_5_txt}`); }
      if (monumento.criteri_6_txt != null) { criterioConcatendoAlv.push(`<br/>• ${monumento.criteri_6_txt}`); }
      if (monumento.criteri_7_txt != null) { criterioConcatendoAlv.push(`<br/>• ${monumento.criteri_7_txt}`); }

      let plot: any = {};
      let dateDanger: any;

      if (monumento.DangerState === 1) {
        dateDanger = `<b style="color: red">En peligro desde ${monumento.danger}</b>`
      } else if (monumento.danger) {
        dateDanger = `<b style="color: blue">En peligro entre ${monumento.danger}</b>`
      } else {
        dateDanger = ``
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

// WITH THIS FUNC WE CREATE THE FORMAT OF EACH COUNTRIE, HIS TOOLTIP WHICH HAS ALL INF ABOUT IT
function areas(dfAreas: any) {
  // console.log(dfAreas);
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

  for (let country of dfAreas) {
    // console.log(country);
    console.log(
      `
      "${country.AC_2}" : {
        "tooltip": {
          "content": "<span style=\\"font-family:Goldplay_Black;\\">${country.Country}<\\/span><br\\/><span style=\\"font-family:Goldplay_Black;\\">Población: <\\/span>${country.Population}<br\\/><span style=\\"font-family:Goldplay_Black;\\">Área: <\\/span>${country.Area} Km² <br\\/> <span style=\\"font-family:Goldplay_Black;\\">Capital: <\\/span>${country.Capital}<br\\/> <span style=\\"font-family:Goldplay_Black;\\">Moneda: <\\/span>${country.Moneda}<br\\/><span style=\\"font-family:Goldplay_Black;\\">Lenguaje: <\\/span>${country.Language}"},'attrs':
          {
            'fill': "${country.color}"
          }
        },
        `
    );
  }
}



// HERE WE DRAW THE MAP WITH JQUERY-MAPAEL WITH THE SVG LARGE SIZE (10)
function mapaGrande(plots: any, newplots?: any) {
  // console.log(plots);
  // console.log(newplots);
  // console.log(plots, newplots);
  // let x = <HTMLDivElement>document.getElementById('map');
  // x.appendChild(btn);
  // x.appendChild(btn);

  $(".mapcontainer").mapael({
    map: {
      name: "world_countries",
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
          click: function (e: any, id: any, mapElem: any, textElem: any, elemOptions: any) {
            // console.log(id);
            var newPlots: any = [];
            for (let plotByCountry of plots) {
              // console.log(plotByCountry.CountryCode);
              if (plotByCountry.CountryCode == id) {
                newPlots.push(plotByCountry);
              }
            }
            mapaChico(plots, newPlots);
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

            if (id === 'US') {
              $(".mapcontainer").trigger('zoom', { level: 10, latitude: 36.43889, longitude: -105.54167 });
            }
            else {
              $(".mapcontainer").trigger('zoom', { area: id });
            }
          }
        },
      },
      defaultPlot: {
        size: 3,
        eventHandlers: {
          click: function (e: any, id: any, mapElem: any, textElem: any, elemOptions: any) {
            // console.log(elemOptions);
            // console.log(elemOptions.tooltip);
            // console.log('working shit');
            openModal();
            if (typeof elemOptions.Descripcion != 'undefined') {
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
        mode: "vertical",
        title: "Tipo de monumento",
        titleAttrs:
        {
          // 'font-family': "Comic Sans MS",
          'font-family': "Goldplay_Black",
          'font-size': 20,
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
      "JE": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Jersey<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>​115,800<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>116 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Saint Helier<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span> Libra de Jersey<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés y jerseyés"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "CN": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">China<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>1,439,323,776<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>9,596,960 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Pekín<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Yuan chino<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Mandarín"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "IN": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">India<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>1,380,004,385<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>3,287,590 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Nueva Delhi<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Rupia india<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Hindi, Inglés"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "US": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Estados Unidos<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>331,002,651<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>9,631,420 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Washington D. C.<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar estadounidense<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "ID": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Indonesia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>273,523,615<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,919,440 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Yakarta<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Rupia indonesia<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Indonesio"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "PK": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Pakistán<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>220,892,340<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>803,940 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Islamabad<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Rupia pakistaní<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Urdu e inglés"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "BR": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Brasil<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>212,559,417<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>8,511,965 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Brasilia<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Real brasileño<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Portugués"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "NG": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Nigeria<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>206,139,589<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>923,768 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Abuya<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Naira<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "BD": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Bangladés<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>164,689,383<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>144,000 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Daca<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Taka bangladeshí<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Bengalí"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "RU": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Rusia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>145,934,462<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>17,075,200 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Moscú<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Rublo ruso<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Ruso"
        }, 'attrs':
        {
          'fill': "0-#B9D516-#F76624"
        }
      },
      "MX": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">México<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>128,932,753<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,972,550 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>México D. F.<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Peso mexicano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "JP": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Japón<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>126,476,461<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>377,835 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Tokio<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Yen<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Japonés"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "ET": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Etiopía<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>114,963,588<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,127,127 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Adís Abeba<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Birr etíope<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Amhárico"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "PH": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Filipinas<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>109,581,078<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>300,000 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Manila<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Peso filipino<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Filipino e inglés"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "EG": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Egipto<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>102,334,404<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,001,450 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>El Cairo<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Libra egipcia<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "VN": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Vietnam<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>97,338,579<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>329,560 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Hanoi<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dong vietnamita<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Vietnamita"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "CD": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">República Democrática del Congo<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>89,561,403<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>2,345,410 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Kinshasa<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco congoleño<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "TR": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Turquía <\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>84,339,067<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>780,580 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Estambul<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Lira turca<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Turquía, Español"
        }, 'attrs':
        {
          'fill': "0-#B9D516-#F76624"
        }
      },
      "IR": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Irán<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>83,992,949<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,648,000 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Teherán<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Rial iraní<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Persa"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "DE": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Alemania<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>83,783,942<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>357,021 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Berlín<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Alemán"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "TH": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Tailandia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>69,799,978<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>514,000 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Bangkok<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Baht tailandés<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Tailandés"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "GB": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Reino Unido<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>67,886,011<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>244,820 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Londres<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Libra británica<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "FR": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Francia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>65,273,511<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>547,030 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>París<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "IT": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Italia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>60,461,826<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>301,230 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Roma<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Italiano, localmente: francés, ladino, alemán, sardo y esloveno"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "TZ": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Tanzania<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>59,734,218<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>945,087 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Dodoma<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Chelín tanzano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés y suajili"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "ZA": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Sudáfrica<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>59,308,690<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,219,912 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Pretoria, Ciudad Del Cabo, Bloemfontein<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Rand sudafricano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Zulú"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "MM": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Birmania<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>54,409,800<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>678,500 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Naypidó<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Kyat birmano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Birmano"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "KE": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Kenia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>53,771,296<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>582,650 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Nairobi<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Chelín keniano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Suajili e inglés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "KR": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Corea del Sur<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>51,269,185<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>98,480 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Seúl<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Won surcoreano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Coreano, lenguaje de signos coreano"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "CO": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Colombia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>50,882,891<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,138,910 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Bogotá<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Peso colombiano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "ES": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">España<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>46,754,778<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>504,782 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Madrid<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español, localmente: catalán, gallego y euskera"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "UG": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Uganda<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>45,741,007<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>236,040 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Kampala<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Chelín ugandés<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés y suajili"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "AR": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Argentina<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>45,195,774<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>2,766,890 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Buenos Aires<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Peso<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "DZ": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Argelia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>43,851,044<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>2,381,740 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Algiers [El Djazaïr]<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Naira nigeriana<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe moderno estandarizado"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "SD": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Sudán<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>43,849,260<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>2,505,810 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Jartum<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Libra sudanesa<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe e inglés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "UA": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Ucrania<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>43,733,762<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>603,700 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Kiev<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Grivna<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Ucraniano"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "IQ": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Irak<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>40,222,493<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>437,072 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Bagdad<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dinar iraquí<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>árabe (oficial) y kurdo (oficial en la Región del Kurdistán Iraquí"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "AF": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Afganistán<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>38,928,346<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>647,500 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Kabul<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Afgani afgano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Darí y pastún"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "PL": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Polonia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>37,846,611<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>312,685 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Varsovia<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Zloty<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Polaco"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "CA": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Canadá<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>37,742,154<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>9,984,670 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Ottawa<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar canadiense<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés y francés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "MA": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Marruecos<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>36,910,560<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>446,550 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Rabat<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dirham marroquí<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe y tamazight"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "SA": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Arabia Saudita<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>34,813,871<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,960,582 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Riad<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Riyal saudí<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "UZ": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Uzbekistán<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>33,469,203<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>447,400 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Tashkent<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Som uzbeko<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Uzbeko"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "PE": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Perú<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>32,971,854<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,285,220 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Lima<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Nuevo sol<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español, quechua y aymara"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "AO": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Angola<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>32,866,272<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,246,700 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Luanda<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Kwanza angoleño<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Portugués"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "MY": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Malasia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>32,365,999<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>329,750 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Kuala Lumpur<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Ringgit malayo<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Malayo"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "MZ": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Mozambique<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>31,255,435<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>801,590 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Maputo<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Metical mozambiqueño<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Portugués"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "GH": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Ghana<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>31,072,940<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>239,460 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Accra<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Cedi<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "YE": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Yemen<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>29,825,964<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>527,970 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Saná<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Rial yemení<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "NP": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Nepal<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>29,136,808<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>147,181 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Katmandú<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Rupia nepalí<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Nepalí"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "VE": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Venezuela<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>28,435,940<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>912,050 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Caracas<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Bolívar fuerte<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "MG": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Madagascar<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>27,691,018<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>587,040 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Antananarivo<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Ariary malgache<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Malgache y francés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "CM": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Camerún<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>26,545,863<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>475,440 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Yaundé<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco CFA de África Central<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés y francés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "CI": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Costa de marfil<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>26,378,274<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>322,460 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Yamusukro, Abiyán<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco CFA de África Occidental<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "KP": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Corea del Norte<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>25,778,816<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>120,540 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Pyongyang<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Won norcoreano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Coreano"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "AU": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Australia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>25,499,884<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>7,686,850 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Canberra<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar australiano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "NE": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Níger<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>24,206,644<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,267,000 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Niamey<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco CFA de África Occidental<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "TW": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Taiwán<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>23,816,775<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>35,980 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Taipéi<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Nuevo dólar taiwanés<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Mandarín"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "LK": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Sri Lanka<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>21,413,249<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>65,610 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Colombo<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Rupia de Sri Lanka<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Cingalés, tamil e inglés"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "BF": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Burkina Faso<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>20,903,273<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>274,200 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Uagadugú<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco CFA de África Occidental<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "ML": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Malí<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>20,250,833<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,240,000 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Bamako<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco CFA de África Occidental<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "RO": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Rumania<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>19,237,691<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>237,500 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Bucarest<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Leu rumano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Rumano"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "MW": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Malaui<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>19,129,952<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>118,480 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Lilongüe<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Kwacha malauí<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés y chichewa"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "CL": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Chile<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>19,116,201<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>756,950 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Santiago De Chile<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Peso chileno<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "KZ": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Kazajstán<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>18,776,707<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>2,717,300 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Nursultán<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Tenge kazajo<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Kazajo"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "ZM": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Zambia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>18,383,955<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>752,614 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Lusaka<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Kwacha zambiano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "GT": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Guatemala<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>17,915,568<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>108,890 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Ciudad De Guatemala<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Quetzal guatemalteco<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "EC": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Ecuador<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>17,643,054<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>283,560 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Quito<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar estadounidense<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "SY": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Siria<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>17,500,658<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>185,180 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Damasco<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Libra siria<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "NL": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Países Bajos<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>17,134,872<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>41,526 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Amsterdam<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Holandés, localmente: frisón"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "AN": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Antillas Holandesas<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>17,134,872<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>960 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Willemstad<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Florín<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Neerlandés"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "SN": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Senegal<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>16,743,927<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>196,190 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Dakar<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco CFA de África Occidental<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "KH": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Camboya<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>16,718,965<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>181,040 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Pnon Pehn<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Riel camboyano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Camboyano"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "TD": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">República del Chad<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>16,425,864<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,284,000 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Yamena <br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco CFA<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés, Árabe moderno"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "SO": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Somalia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>15,893,222<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>637,657 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Mogadiscio<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Chelín somalí<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Somalí y árabe"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "ZW": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Zimbabue<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>14,862,924<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>390,580 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Harare<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar estadounidense<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "GN": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Guinea<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>13,132,795<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>245,857 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Conakry<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco guineano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "RW": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Ruanda<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>12,952,218<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>26,338 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Kigali<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco ruandés<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Ruanda, francés e inglés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "BJ": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Benín<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>12,123,200<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>112,620 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Porto Novo <br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco CFA de África Occidental<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "BI": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Burundi<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>11,890,784<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>27,830 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Buyumbura<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco de Burundi<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Kirundi, francés e inglés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "TN": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Túnez<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>11,818,619<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>163,610 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Túnez<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dinar tunecino<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "BO": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Bolivia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>11,673,021<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,098,580 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Sucre, La Paz<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Boliviano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "BE": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Bélgica<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>11,589,623<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>30,528 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Bruselas<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés, holandés y alemán"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "HT": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Haití<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>11,402,528<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>27,750 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Puerto Príncipe<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Gourde haitiano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Haitiano y francés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "CU": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Cuba<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>11,326,616<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>110,860 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>La Habana<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Peso cubano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "SS": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Sudán del Sur<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>11,193,725<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>644,329 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Yuba<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Libra sursudanesa<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "DO": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">República Dominicana<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>10,847,910<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>48,730 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Santo Domingo<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Peso dominicano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "CZ": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">República Checa (Chequia)<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>10,708,981<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>78,866 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Praga<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Corona Checa<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Checo"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "GR": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Grecia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>10,423,054<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>131,940 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Atenas<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Griego moderno"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "JO": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Jordán<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>10,203,134<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>92,300 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Amán<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dinar jordano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe jordano"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "PT": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Portugal<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>10,196,709<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>92,391 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Lisboa<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Portugués"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "AZ": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Azerbaiyán<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>10,139,177<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>86,600 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Bakú<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Manat azerí<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Azerí"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "SE": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Suecia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>10,099,265<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>449,964 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Estocolmo<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Corona sueca<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Sueco"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "HN": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Honduras<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>9,904,607<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>112,090 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Tegucigalpa<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Lempira hondureño<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "AE": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Emiratos Árabes Unidos<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>9,890,402<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>82,880 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Abu Dhabi<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dirham de los Emiratos Árabes Unidos<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "HU": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Hungría<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>9,660,351<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>93,030 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Budapest<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Forinto húngaro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Húngaro"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "TJ": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Tayikistán<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>9,537,645<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>143,100 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Dusambé<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Somoni tayiko<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Tayiko"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "BY": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Bielorrusia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>9,449,323<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>207,600 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Minsk<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Rublo bielorruso<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Bielorruso y ruso"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "AT": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Austria<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>9,006,398<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>83,870 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Viena<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Alemán, localmente: Burgenland - croata y esloveno"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "PG": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Papúa Nueva Guinea<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>8,947,024<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>462,840 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Port Moresby<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Kina<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés, tok pisin y hiri motu"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "RS": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Serbia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>8,737,371<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>88,361 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Belgrado<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dinar serbio<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Serbio"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "IL": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Israel<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>8,655,535<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>20,770 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Jerusalén<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Nuevo shéquel<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Hebreo"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "CH": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Suiza<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>8,654,622<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>41,290 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Berna<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco suizo<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Alemán, francés, italiano y romanche"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "TG": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Togo<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>8,278,724<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>56,785 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Lomé<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco CFA de África Occidental<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "SL": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Sierra Leona<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>7,976,983<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>71,740 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Freetown<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Leone<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "LA": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Laos<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>7,275,560<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>236,800 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Vientián<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Kip laosiano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Laosiano"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "PY": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Paraguay<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>7,132,538<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>406,750 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Asunción<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Guaraní<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español y guaraní"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "BG": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Bulgaria<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>6,948,445<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>110,910 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Sofía<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Lev búlgaro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Búlgaro"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "LY": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Libia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>6,871,292<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,759,540 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Trípoli<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dinar libio<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "LB": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Líbano<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>6,825,445<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>10,400 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Beirut<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Libra libanesa<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "NI": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Nicaragua<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>6,624,554<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>129,494 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Managua<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Córdoba nicaragüense<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "KG": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Kirguistán<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>6,524,195<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>198,500 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Biskek<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Som kirguís<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Kirguís y ruso"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "SV": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">El Salvador<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>6,486,205<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>21,040 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>San Salvador<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar estadounidense<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "TM": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Turkmenistán<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>6,031,200<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>488,100 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Asjabad<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Manat turcomano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Turcomano"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "SG": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Singapur<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>5,850,342<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>693 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Singapur<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar de Singapur<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés, mandarín, malayo y tamil"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "DK": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Dinamarca<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>5,792,202<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>43,094 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Copenhague<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Corona danesa<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Danés"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "FI": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Finlandia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>5,540,720<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>338,145 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Helsinki<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Finlandés y sueco"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "CG": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">República Del Congo<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>5,518,087<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>342,000 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Brazzaville<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco congoleño<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés, lingala, swahili"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "SK": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Eslovaquia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>5,459,642<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>48,845 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Bratislava<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Eslovaco"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "NO": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Noruega<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>5,421,241<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>323,802 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Oslo<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Corona noruega<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Noruego"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "OM": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Omán<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>5,106,626<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>212,460 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Mascate<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Rial omaní<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "CR": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Costa Rica<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>5,094,118<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>51,100 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>San José<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Colón costarricense<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "LR": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Liberia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>5,057,681<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>111,370 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Monrovia<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar liberiano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "IE": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Irlanda<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>4,937,786<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>70,280 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Dublín<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés e irlandés"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "CF": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">República Centroafricana<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>4,829,767<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>622,984 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Bangui<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco CFA de África Central<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés y sango"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "NZ": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Nueva Zelanda<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>4,822,233<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>268,680 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Wellington<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar neozelandés<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés, maorí y lengua de signos neozelandesa"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "MR": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Mauritania<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>4,649,658<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,030,700 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Nuakchot<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Uguiya<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "PA": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Panamá<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>4,314,767<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>78,200 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Ciudad De Panamá<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Balboa panameño<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "KW": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Kuwait<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>4,270,571<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>17,820 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Ciudad De Kuwait<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dinar kuwaití<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "HR": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Croacia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>4,105,267<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>56,542 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Zagreb<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Kuna croata<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Croata"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "MD": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Moldavia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>4,033,963<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>33,843 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Chisinau<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Leu moldavo<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Rumano, localmente: gagaúzo, ruso y ucraniano"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "GE": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Georgia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>3,989,167<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>69,700 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Tiflis<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Lari georgiano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Georgiano"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "ER": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Eritrea<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>3,546,421<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>121,320 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Asmara<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Nakfa<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe, inglés y tigriña"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "UY": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Uruguay<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>3,473,730<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>176,220 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Montevideo<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Peso uruguayo<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "BA": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Bosnia y Herzegovina<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>3,280,819<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>51,129 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Sarajevo<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Marco bosnioherzegovino<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Bosnio, croata y serbio"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "MN": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Mongolia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>3,278,290<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,564,116 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Ulan Bator<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Tugrik mongol<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Mongol"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "AM": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Armenia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>2,963,243<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>29,800 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Ereván<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dram armenio<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Armenio"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "JM": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Jamaica<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>2,961,167<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>10,991 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Kingston<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar jamaiquino<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés y jamaicano"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "QA": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Katar<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>2,881,053<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>11,437 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Doha<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Riyal catarí<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "AL": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Albania<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>2,877,797<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>28,748 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Tirana<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Lek albanés<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Albanés"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "PR": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Puerto Rico<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>2,860,853<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>13,790 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>San Juan<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar estadounidense<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español e inglés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "LT": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Lituania<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>2,722,289<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>65,200 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Vilna<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Lituano"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "NA": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Namibia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>2,540,905<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>825,418 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Windhoek<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar namibio<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "GM": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Gambia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>2,416,668<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>11,300 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Banjul<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dalasi<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe e inglés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "BW": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Botsuana<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>2,351,627<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>600,370 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Gaberones<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Pula<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés y setsuana"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "GA": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Gabón<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>2,225,734<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>267,667 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Libreville<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco CFA de África Central<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "LS": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Lesoto<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>2,142,249<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>30,355 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Maseru<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Loti<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Sesoto, Inglés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "SI": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Eslovenia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>2,078,938<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>20,273 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Lublijana<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Esloveno, localmente: húngaro e italiano"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "MK": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Macedonia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>2,065,000<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>25,333 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Tesalónica<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Denar macedonio<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Macedonio"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "PS": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Franja de Gaza<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>2,048,000<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>360 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Gaza<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>sheqel israelí<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe moderno estandarizado"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "GW": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Guinea-Bisáu<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>1,968,001<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>36,120 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Bissau<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco CFA de África Occidental<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Portugués"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "LV": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">letonia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>1,886,198<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>64,589 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Riga<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Letón"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "BH": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Baréin<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>1,701,575<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>665 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Manamá<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dinar bahreiní<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe moderno estandarizado"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "GQ": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Guinea Ecuatorial<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>1,402,985<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>28,051 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Malabo<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco CFA de África Central<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español, francés y portugués"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "TT": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Trinidad y Tobago<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>1,399,488<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>5,128 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Puerto España<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar trinitense<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "EE": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Estonia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>1,326,535<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>45,226 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Tallín<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Estonio"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "TL": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Timor Oriental<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>1,318,445<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>15,007 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Dili<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar estadounidense<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Tetun y portugués"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "MU": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Mauricio<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>1,271,768<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>2,040 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Port Louis<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Rupia de Mauricio<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés y francés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "CY": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Chipre<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>1,207,359<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>9,250 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Nicosia<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Griego moderno y turco"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "SZ": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Suazilandia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>1,172,000<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>17,363 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Mbabane<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Lilangeni<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Suazi, Inglés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "DJ": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Yibuti<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>988,000<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>23,000 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Yibuti<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco yibutiano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe y francés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "FJ": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Fiyi<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>896,445<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>18,270 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Suva<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar fiyiano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés y fiyiano"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "RE": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Réunion<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>895,312<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>2,517 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Saint-Denis<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "KM": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Comoras<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>869,601<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>2,170 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Moroni<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco comorano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe, francés y comorense"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "GY": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Guyana<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>786,552<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>214,970 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Georgetown<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar guyanés<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "BT": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Bután<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>771,608<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>47,000 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Timbu<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Ngultrum butanés<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Dzongkha"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "SB": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Islas Salomón<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>686,884<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>28,450 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Honiara<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar de las Islas Salomón<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "MO": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Macao<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>658,391<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>28 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Ciudad De Macao<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Pataca macaense<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Portugués, Chino"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "LU": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">luxemburgo<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>625,978<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>2,586 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Luxemburgo<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Luxemburgués, francés y alemán"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "EH": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Sahara Occidental<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>597,339<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>266,000 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Laayoune<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dirham marroquí<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Castellano"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "SR": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Surinam<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>586,632<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>163,270 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Paramaribo<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar surinamés<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Holandés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "CV": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Cabo Verde<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>555,987<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>4,033 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Praia<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Escudo caboverdiano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Portugués"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "FM": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Micronesia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>548,914<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>702 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Palikir<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar estadounidense<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "MV": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Maldivas<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>540,544<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>300 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Malé<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Rupia de Maldivas<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Maldivo"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "MT": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Malta<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>441,543<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>316 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>La Valeta<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Maltés e inglés"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "BN": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Brunéi<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>437,479<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>5,770 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Sultanato Islámico De Brunei<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar de Brunéi<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Dzongkha"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "GP": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Guadalupe<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>400,124<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,780 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span> Basse-Terre<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "BZ": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Belice<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>397,628<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>22,966 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Belmopán<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar beliceño<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "BS": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Bahamas<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>393,244<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>13,940 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Nassau<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar bahameño<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "MQ": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Martinica<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>375,265<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,100 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Fort-De-France<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "IS": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Islandia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>341,243<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>103,000 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Reikiavik<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Corona islandes<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Islandés"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "VU": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Vanuatu<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>307,145<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>12,200 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Port Vila<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Vatu<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Bislama, inglés y francés"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "GF": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Guayana Francesa<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>298,682<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>91,000 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Cayena<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro <br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "BB": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Barbados<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>287,375<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>431 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Bridgetown<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar de Barbados<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "NC": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Nueva Caledonia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>285,498<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>19,060 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Numea<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco del Pacífico<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "PF": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Polinesia francesa<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>280,908<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>4,167 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span> Papeete<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>franco del Pacífico<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "YT": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Mayotte<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>272,815<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>374 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Mamoudzou<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Europa<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "ST": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Santo Tomé y Príncipe<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>219,159<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,001 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Santo Tomé<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dobra<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Portugués"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "WS": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Samoa<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>198,414<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>2,944 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Apia<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Tala<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Samoano e inglés"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "LC": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Santa Lucía<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>183,627<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>616 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Castries<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar del Caribe Oriental<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "GU": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Guam<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>168,775<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>541 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Agaña<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>dólar estadounidense<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés y chamorro"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "KI": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Kiribati<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>119,449<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>811 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Tarawa<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar australiano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés y gilbertés"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "GD": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Granada<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>112,523<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>344 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Saint George'S<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar del Caribe Oriental<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "VC": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">San Vicente y las Granadinas<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>110,940<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>389 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Kingstown<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar del Caribe Oriental<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "AW": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Aruba<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>106,766<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>193 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Oranjestad<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>florín<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Holandés y papiamento"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "TO": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Tonga<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>105,695<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>748 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Nuku'Alofa<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Pa'anga<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Tongano e inglés"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "VI": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Islas Vírgenes de EE.UU<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>104,425<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,910 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Charlotte Amalie<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar estadounidense<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "SC": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Seychelles<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>98,347<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>455 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Victoria<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Rupia de Seychelles<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Criollo seychelense, francés e inglés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "AG": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Antigua y Barbuda<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>97,929<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>443 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Saint John'S<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar del Caribe Oriental<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "IM": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Isla del hombre<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>85,033<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>572 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span> Douglas<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Libra manesa<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés, manés"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "AD": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Andorra<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>77,265<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>468 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Andorra La Vieja<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Catalán"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "DM": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Dominica<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>71,986<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>754 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Roseau<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar del Caribe Oriental<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "KY": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Islas Caimán<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>65,722<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>262 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>George Town<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar De Las Islas Caimán<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "GG": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Guernsey<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>62,792<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>78 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Saint Peter Port<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Libra de Guernsey<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "BM": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">islas Bermudas<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>62,278<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>53 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Hamilton<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>dólar bermudeño<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "MH": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Islas Marshall<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>59,190<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>11,854 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Majuro<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar estadounidense<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Marshalés e inglés"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "MP": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Islas Marianas del Norte<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>57,559<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>477 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Saipán<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar estadounidense<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés, chamorro y carolinio"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "GL": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Groenlandia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>56,770<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>2,166,086 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Nuuk<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>corona danesa<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Danés y groenlandés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "AS": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Samoa Americana<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>55,191<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>199 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Pago Pago<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Tālā<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés y samoano"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "KN": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">San Cristóbal y Nieves<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>53,199<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>261 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Basseterre<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar del Caribe Oriental<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés y criollo"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "FO": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Islas Faroe<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>49,053<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,399 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Tórshavn<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Corona Feroesa<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Faroese"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "MC": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Mónaco<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>39,242<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>2 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Mónaco<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "TC": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Las Islas Turcas y Caicos​<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>38,717<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>430 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Cockburn Town<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar estadounidense<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "LI": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Liechtenstein<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>38,128<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>160 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Vaduz<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco suizo<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Alemán"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "SM": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">San Marino<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>33,931<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>61 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Ciudad De San Marino<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Italiano"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "GI": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Gibraltar<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>33,691<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>7 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Gibraltar<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Libra de Gibraltar<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "VG": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Islas Vírgenes Británicas<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>30,231<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>153 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Road Town<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span> Dólar estadounidense<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "PW": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Palaos<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>18,094<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>458 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Melekeok<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar estadounidense<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés, palauano y japonés"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "CK": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Islas Cook<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>17,564<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>240 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Avarua<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>dólar de la Islas Cook<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés y maorí"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "AI": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Anguilla<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>15,003<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>102 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>El Valle<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar del Caribe Oriental<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "TV": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Tuvalu <\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>11,792<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>26 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Funafuti<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar estadounidense<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>tuvaluano"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "WF": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Wallis y Futuna<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>11,239<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>274 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Matā'Utu<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco del Pacífico<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "NR": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Nauru<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>10,824<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>21 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Yaren<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar australiano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés y nauruano"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "SH": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Santa Elena<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>6,077<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>413 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Jamestown<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Libra de Santa Elena<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "PM": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">San Pedro y Miquelón<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>5,794<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>242 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Saint-Pierre<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "MS": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Montserrat<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>4,992<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>102 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Plymouth<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar del Caribe Oriental<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
    }
  });

  const modal: any = document.querySelector('#my-modal');
  const modalBtn: any = document.querySelector('#modal-btn');
  const closeBtn: any = document.querySelector('.btnCloseDescripcion');
  let x = document.querySelectorAll('svg')[1];
  let toggleSVG = document.querySelectorAll('svg')[0];
  toggleSVG.setAttribute('style', 'width: 220px');
  x.setAttribute('style', 'height: 100vh');

  modalBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  // window.addEventListener('click', outsideClick);
  window.addEventListener('resize', shittt);

  // const navigation = document.querySelector('.navigation');
  // const toggleDiv: any = document.querySelector('.toggle');
  // toggleDiv.addEventListener('click',openMenu);
  // function openMenu(){
  // let navigationState: any = navigation?.classList;
  // console.warn(navigationState);
  // console.log('si');
  // toggleDiv.classList.toggle('active');
  // console.log('si2');
  // navigation?.classList.toggle('active');
  // }
  // let toggle = <HTMLDivElement>document.getElementById('toggle');
  // toggle.onclick();
  // toggle.addEventListener('click', openMenu);

  function shittt() {
    // console.log('simón');
    x.setAttribute('height', '100vh');
  }
  function openModal() {
    modal.style.display = 'block';
  }
  // Close
  function closeModal() {
    modal.style.display = 'none';
  }
  // Close If Outside Click
  function outsideClick(e: any) {
    if (e.target == modal) {
      modal.style.display = 'none';
    }
  }
}
// x?.addEventListener('click',this.shit);
// x.setAttribute('id','svgMap');
// x.setAttribute('height','100vh');
// console.log(`this shit is woorking 2`);

function mapaChico(plots: any, newplots?: any) {
  // let x = <HTMLDivElement>document.getElementById('map');
  // x.appendChild(btn);
  // x.appendChild(btn);

  $(".mapcontainer").mapael({
    map: {
      name: "world_countries",
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
          click: function (e: any, id: any, mapElem: any, textElem: any, elemOptions: any) {
            var newPlots: any = [];
            for (let plotByCountry of plots) {
              // console.log(plotByCountry.CountryCode);
              if (plotByCountry.CountryCode == id) {
                newPlots.push(plotByCountry);
              }
            }
            // console.log(newPlots);
            if (newPlots < 1) {
              // console.log('no hay nada cainal');
            }
            mapaChico(plots, newPlots);
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

            if (id === 'US') {
              $(".mapcontainer").trigger('zoom', { level: 10, latitude: 36.43889, longitude: -105.54167 });
            }
            else {
              $(".mapcontainer").trigger('zoom', { area: id });
            }
          }
        },
      },
      defaultPlot: {
        size: 3,
        eventHandlers: {

          click: function (e: any, id: any, mapElem: any, textElem: any, elemOptions: any) {
            // console.log('working shit');
            openModal();
            if (typeof elemOptions.Descripcion != 'undefined') {
              $('.Descripcion').html(elemOptions.Descripcion).css(
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
        mode: "vertical",
        title: "Tipo de monumento",
        titleAttrs:
        {
          // 'font-family': "Comic Sans MS",
          'font-family': "Goldplay_Black",
          'font-size': 20,
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
            // type: "svg",
            // path: "M 38.654 15.571 H 7.728 C 7.728 6.971 14.651 0 23.191 0 S 38.654 6.971 38.654 15.571 Z M 43.52 43.382 H 2.861 c -0.828 0 -1.5 0.671 -1.5 1.5 c 0 0.829 0.672 1.5 1.5 1.5 H 43.52 c 0.828 0 1.5 -0.671 1.5 -1.5 C 45.02 44.053 44.349 43.382 43.52 43.382 Z M 9.147 39.345 V 19.42 H 6.574 c -0.828 0 -1.5 -0.671 -1.5 -1.5 c 0 -0.829 0.672 -1.5 1.5 -1.5 h 33.233 c 0.828 0 1.5 0.671 1.5 1.5 c 0 0.829 -0.672 1.5 -1.5 1.5 h -2.573 v 19.925 h 2.573 c 0.828 0 1.5 0.671 1.5 1.5 c 0 0.829 -0.672 1.5 -1.5 1.5 H 6.574 c -0.828 0 -1.5 -0.671 -1.5 -1.5 c 0 -0.829 0.672 -1.5 1.5 -1.5 H 9.147 Z M 25.872 39.345 V 19.42 H 20.51 v 19.925 H 25.872 Z M 34.234 19.42 h -5.362 v 19.925 h 5.362 V 19.42 Z M 12.147 39.345 h 5.362 V 19.42 h -5.362 V 39.345 Z",
            type: 'image',
            url: '/assets/BlueMuseum.png',
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
            type: 'image',
            url: '/assets/culturaNa.png',
            // type: "svg",
            // path: "M 21 5 c -1.802 0 -3.499 0.442 -5 1.21 C 14.499 5.442 12.802 5 11 5 C 4.925 5 0 9.925 0 16 s 4.925 11 11 11 c 1.802 0 3.499 -0.442 5 -1.21 c 1.501 0.768 3.198 1.21 5 1.21 c 6.075 0 11 -4.925 11 -11 S 27.075 5 21 5 Z M 15.426 8.941 c 0.342 -0.269 0.84 -0.267 1.18 0.004 c 0.735 0.587 1.36 1.285 1.873 2.055 h -4.95 C 14.047 10.228 14.679 9.528 15.426 8.941 Z M 12.514 13 h 6.974 c 0.226 0.642 0.379 1.312 0.455 2 h -7.886 C 12.133 14.312 12.287 13.642 12.514 13 Z M 12.057 17 h 7.886 c -0.076 0.688 -0.23 1.358 -0.457 2 h -6.973 C 12.287 18.358 12.133 17.688 12.057 17 Z M 16.589 23.047 c -0.341 0.269 -0.838 0.269 -1.178 0 c -0.74 -0.585 -1.367 -1.28 -1.881 -2.047 h 4.941 C 17.956 21.766 17.329 22.462 16.589 23.047 Z M 21 25 c -1.05 0 -2.054 -0.191 -2.991 -0.523 C 20.446 22.46 22 19.412 22 16 c 0 -3.413 -1.555 -6.462 -3.994 -8.48 C 18.944 7.188 19.95 7 21 7 c 4.963 0 9 4.037 9 9 C 30 20.963 25.963 25 21 25 Z",
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
            // type: "svg",
            // path: "M 38.654 15.571 H 7.728 C 7.728 6.971 14.651 0 23.191 0 S 38.654 6.971 38.654 15.571 Z M 43.52 43.382 H 2.861 c -0.828 0 -1.5 0.671 -1.5 1.5 c 0 0.829 0.672 1.5 1.5 1.5 H 43.52 c 0.828 0 1.5 -0.671 1.5 -1.5 C 45.02 44.053 44.349 43.382 43.52 43.382 Z M 9.147 39.345 V 19.42 H 6.574 c -0.828 0 -1.5 -0.671 -1.5 -1.5 c 0 -0.829 0.672 -1.5 1.5 -1.5 h 33.233 c 0.828 0 1.5 0.671 1.5 1.5 c 0 0.829 -0.672 1.5 -1.5 1.5 h -2.573 v 19.925 h 2.573 c 0.828 0 1.5 0.671 1.5 1.5 c 0 0.829 -0.672 1.5 -1.5 1.5 H 6.574 c -0.828 0 -1.5 -0.671 -1.5 -1.5 c 0 -0.829 0.672 -1.5 1.5 -1.5 H 9.147 Z M 25.872 39.345 V 19.42 H 20.51 v 19.925 H 25.872 Z M 34.234 19.42 h -5.362 v 19.925 h 5.362 V 19.42 Z M 12.147 39.345 h 5.362 V 19.42 h -5.362 V 39.345 Z",
            type: 'image',
            url: '/assets/RedMuseum.png',
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
      "JE": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Jersey<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>​115,800<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>116 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Saint Helier<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span> Libra de Jersey<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés y jerseyés"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "CN": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">China<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>1,439,323,776<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>9,596,960 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Pekín<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Yuan chino<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Mandarín"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "IN": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">India<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>1,380,004,385<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>3,287,590 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Nueva Delhi<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Rupia india<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Hindi, Inglés"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "US": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Estados Unidos<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>331,002,651<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>9,631,420 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Washington D. C.<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar estadounidense<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "ID": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Indonesia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>273,523,615<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,919,440 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Yakarta<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Rupia indonesia<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Indonesio"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "PK": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Pakistán<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>220,892,340<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>803,940 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Islamabad<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Rupia pakistaní<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Urdu e inglés"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "BR": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Brasil<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>212,559,417<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>8,511,965 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Brasilia<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Real brasileño<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Portugués"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "NG": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Nigeria<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>206,139,589<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>923,768 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Abuya<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Naira<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "BD": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Bangladés<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>164,689,383<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>144,000 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Daca<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Taka bangladeshí<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Bengalí"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "RU": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Rusia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>145,934,462<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>17,075,200 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Moscú<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Rublo ruso<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Ruso"
        }, 'attrs':
        {
          'fill': "0-#B9D516-#F76624"
        }
      },
      "MX": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">México<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>128,932,753<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,972,550 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>México D. F.<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Peso mexicano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "JP": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Japón<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>126,476,461<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>377,835 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Tokio<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Yen<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Japonés"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "ET": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Etiopía<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>114,963,588<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,127,127 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Adís Abeba<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Birr etíope<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Amhárico"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "PH": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Filipinas<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>109,581,078<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>300,000 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Manila<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Peso filipino<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Filipino e inglés"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "EG": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Egipto<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>102,334,404<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,001,450 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>El Cairo<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Libra egipcia<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "VN": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Vietnam<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>97,338,579<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>329,560 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Hanoi<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dong vietnamita<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Vietnamita"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "CD": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">República Democrática del Congo<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>89,561,403<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>2,345,410 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Kinshasa<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco congoleño<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "TR": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Turquía <\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>84,339,067<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>780,580 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Estambul<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Lira turca<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Turquía, Español"
        }, 'attrs':
        {
          'fill': "0-#B9D516-#F76624"
        }
      },
      "IR": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Irán<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>83,992,949<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,648,000 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Teherán<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Rial iraní<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Persa"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "DE": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Alemania<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>83,783,942<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>357,021 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Berlín<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Alemán"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "TH": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Tailandia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>69,799,978<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>514,000 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Bangkok<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Baht tailandés<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Tailandés"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "GB": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Reino Unido<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>67,886,011<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>244,820 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Londres<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Libra británica<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "FR": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Francia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>65,273,511<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>547,030 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>París<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "IT": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Italia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>60,461,826<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>301,230 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Roma<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Italiano, localmente: francés, ladino, alemán, sardo y esloveno"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "TZ": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Tanzania<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>59,734,218<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>945,087 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Dodoma<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Chelín tanzano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés y suajili"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "ZA": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Sudáfrica<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>59,308,690<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,219,912 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Pretoria, Ciudad Del Cabo, Bloemfontein<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Rand sudafricano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Zulú"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "MM": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Birmania<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>54,409,800<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>678,500 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Naypidó<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Kyat birmano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Birmano"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "KE": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Kenia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>53,771,296<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>582,650 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Nairobi<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Chelín keniano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Suajili e inglés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "KR": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Corea del Sur<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>51,269,185<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>98,480 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Seúl<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Won surcoreano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Coreano, lenguaje de signos coreano"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "CO": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Colombia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>50,882,891<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,138,910 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Bogotá<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Peso colombiano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "ES": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">España<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>46,754,778<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>504,782 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Madrid<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español, localmente: catalán, gallego y euskera"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "UG": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Uganda<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>45,741,007<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>236,040 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Kampala<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Chelín ugandés<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés y suajili"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "AR": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Argentina<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>45,195,774<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>2,766,890 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Buenos Aires<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Peso<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "DZ": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Argelia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>43,851,044<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>2,381,740 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Algiers [El Djazaïr]<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Naira nigeriana<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe moderno estandarizado"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "SD": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Sudán<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>43,849,260<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>2,505,810 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Jartum<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Libra sudanesa<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe e inglés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "UA": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Ucrania<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>43,733,762<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>603,700 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Kiev<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Grivna<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Ucraniano"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "IQ": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Irak<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>40,222,493<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>437,072 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Bagdad<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dinar iraquí<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>árabe (oficial) y kurdo (oficial en la Región del Kurdistán Iraquí"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "AF": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Afganistán<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>38,928,346<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>647,500 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Kabul<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Afgani afgano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Darí y pastún"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "PL": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Polonia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>37,846,611<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>312,685 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Varsovia<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Zloty<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Polaco"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "CA": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Canadá<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>37,742,154<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>9,984,670 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Ottawa<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar canadiense<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés y francés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "MA": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Marruecos<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>36,910,560<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>446,550 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Rabat<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dirham marroquí<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe y tamazight"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "SA": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Arabia Saudita<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>34,813,871<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,960,582 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Riad<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Riyal saudí<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "UZ": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Uzbekistán<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>33,469,203<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>447,400 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Tashkent<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Som uzbeko<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Uzbeko"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "PE": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Perú<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>32,971,854<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,285,220 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Lima<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Nuevo sol<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español, quechua y aymara"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "AO": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Angola<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>32,866,272<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,246,700 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Luanda<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Kwanza angoleño<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Portugués"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "MY": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Malasia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>32,365,999<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>329,750 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Kuala Lumpur<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Ringgit malayo<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Malayo"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "MZ": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Mozambique<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>31,255,435<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>801,590 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Maputo<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Metical mozambiqueño<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Portugués"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "GH": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Ghana<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>31,072,940<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>239,460 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Accra<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Cedi<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "YE": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Yemen<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>29,825,964<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>527,970 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Saná<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Rial yemení<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "NP": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Nepal<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>29,136,808<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>147,181 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Katmandú<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Rupia nepalí<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Nepalí"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "VE": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Venezuela<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>28,435,940<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>912,050 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Caracas<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Bolívar fuerte<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "MG": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Madagascar<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>27,691,018<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>587,040 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Antananarivo<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Ariary malgache<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Malgache y francés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "CM": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Camerún<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>26,545,863<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>475,440 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Yaundé<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco CFA de África Central<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés y francés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "CI": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Costa de marfil<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>26,378,274<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>322,460 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Yamusukro, Abiyán<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco CFA de África Occidental<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "KP": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Corea del Norte<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>25,778,816<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>120,540 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Pyongyang<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Won norcoreano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Coreano"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "AU": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Australia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>25,499,884<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>7,686,850 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Canberra<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar australiano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "NE": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Níger<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>24,206,644<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,267,000 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Niamey<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco CFA de África Occidental<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "TW": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Taiwán<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>23,816,775<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>35,980 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Taipéi<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Nuevo dólar taiwanés<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Mandarín"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "LK": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Sri Lanka<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>21,413,249<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>65,610 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Colombo<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Rupia de Sri Lanka<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Cingalés, tamil e inglés"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "BF": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Burkina Faso<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>20,903,273<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>274,200 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Uagadugú<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco CFA de África Occidental<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "ML": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Malí<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>20,250,833<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,240,000 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Bamako<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco CFA de África Occidental<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "RO": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Rumania<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>19,237,691<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>237,500 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Bucarest<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Leu rumano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Rumano"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "MW": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Malaui<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>19,129,952<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>118,480 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Lilongüe<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Kwacha malauí<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés y chichewa"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "CL": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Chile<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>19,116,201<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>756,950 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Santiago De Chile<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Peso chileno<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "KZ": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Kazajstán<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>18,776,707<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>2,717,300 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Nursultán<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Tenge kazajo<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Kazajo"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "ZM": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Zambia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>18,383,955<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>752,614 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Lusaka<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Kwacha zambiano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "GT": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Guatemala<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>17,915,568<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>108,890 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Ciudad De Guatemala<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Quetzal guatemalteco<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "EC": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Ecuador<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>17,643,054<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>283,560 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Quito<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar estadounidense<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "SY": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Siria<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>17,500,658<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>185,180 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Damasco<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Libra siria<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "NL": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Países Bajos<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>17,134,872<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>41,526 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Amsterdam<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Holandés, localmente: frisón"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "AN": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Antillas Holandesas<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>17,134,872<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>960 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Willemstad<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Florín<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Neerlandés"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "SN": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Senegal<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>16,743,927<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>196,190 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Dakar<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco CFA de África Occidental<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "KH": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Camboya<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>16,718,965<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>181,040 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Pnon Pehn<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Riel camboyano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Camboyano"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "TD": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">República del Chad<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>16,425,864<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,284,000 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Yamena <br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco CFA<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés, Árabe moderno"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "SO": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Somalia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>15,893,222<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>637,657 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Mogadiscio<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Chelín somalí<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Somalí y árabe"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "ZW": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Zimbabue<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>14,862,924<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>390,580 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Harare<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar estadounidense<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "GN": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Guinea<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>13,132,795<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>245,857 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Conakry<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco guineano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "RW": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Ruanda<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>12,952,218<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>26,338 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Kigali<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco ruandés<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Ruanda, francés e inglés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "BJ": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Benín<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>12,123,200<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>112,620 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Porto Novo <br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco CFA de África Occidental<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "BI": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Burundi<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>11,890,784<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>27,830 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Buyumbura<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco de Burundi<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Kirundi, francés e inglés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "TN": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Túnez<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>11,818,619<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>163,610 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Túnez<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dinar tunecino<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "BO": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Bolivia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>11,673,021<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,098,580 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Sucre, La Paz<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Boliviano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "BE": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Bélgica<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>11,589,623<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>30,528 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Bruselas<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés, holandés y alemán"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "HT": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Haití<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>11,402,528<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>27,750 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Puerto Príncipe<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Gourde haitiano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Haitiano y francés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "CU": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Cuba<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>11,326,616<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>110,860 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>La Habana<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Peso cubano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "SS": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Sudán del Sur<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>11,193,725<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>644,329 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Yuba<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Libra sursudanesa<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "DO": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">República Dominicana<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>10,847,910<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>48,730 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Santo Domingo<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Peso dominicano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "CZ": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">República Checa (Chequia)<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>10,708,981<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>78,866 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Praga<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Corona Checa<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Checo"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "GR": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Grecia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>10,423,054<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>131,940 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Atenas<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Griego moderno"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "JO": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Jordán<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>10,203,134<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>92,300 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Amán<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dinar jordano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe jordano"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "PT": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Portugal<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>10,196,709<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>92,391 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Lisboa<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Portugués"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "AZ": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Azerbaiyán<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>10,139,177<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>86,600 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Bakú<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Manat azerí<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Azerí"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "SE": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Suecia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>10,099,265<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>449,964 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Estocolmo<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Corona sueca<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Sueco"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "HN": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Honduras<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>9,904,607<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>112,090 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Tegucigalpa<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Lempira hondureño<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "AE": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Emiratos Árabes Unidos<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>9,890,402<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>82,880 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Abu Dhabi<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dirham de los Emiratos Árabes Unidos<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "HU": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Hungría<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>9,660,351<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>93,030 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Budapest<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Forinto húngaro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Húngaro"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "TJ": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Tayikistán<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>9,537,645<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>143,100 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Dusambé<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Somoni tayiko<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Tayiko"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "BY": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Bielorrusia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>9,449,323<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>207,600 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Minsk<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Rublo bielorruso<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Bielorruso y ruso"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "AT": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Austria<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>9,006,398<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>83,870 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Viena<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Alemán, localmente: Burgenland - croata y esloveno"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "PG": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Papúa Nueva Guinea<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>8,947,024<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>462,840 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Port Moresby<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Kina<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés, tok pisin y hiri motu"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "RS": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Serbia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>8,737,371<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>88,361 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Belgrado<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dinar serbio<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Serbio"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "IL": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Israel<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>8,655,535<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>20,770 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Jerusalén<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Nuevo shéquel<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Hebreo"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "CH": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Suiza<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>8,654,622<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>41,290 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Berna<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco suizo<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Alemán, francés, italiano y romanche"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "TG": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Togo<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>8,278,724<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>56,785 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Lomé<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco CFA de África Occidental<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "SL": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Sierra Leona<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>7,976,983<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>71,740 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Freetown<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Leone<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "LA": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Laos<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>7,275,560<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>236,800 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Vientián<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Kip laosiano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Laosiano"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "PY": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Paraguay<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>7,132,538<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>406,750 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Asunción<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Guaraní<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español y guaraní"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "BG": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Bulgaria<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>6,948,445<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>110,910 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Sofía<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Lev búlgaro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Búlgaro"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "LY": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Libia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>6,871,292<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,759,540 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Trípoli<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dinar libio<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "LB": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Líbano<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>6,825,445<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>10,400 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Beirut<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Libra libanesa<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "NI": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Nicaragua<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>6,624,554<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>129,494 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Managua<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Córdoba nicaragüense<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "KG": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Kirguistán<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>6,524,195<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>198,500 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Biskek<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Som kirguís<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Kirguís y ruso"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "SV": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">El Salvador<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>6,486,205<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>21,040 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>San Salvador<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar estadounidense<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "TM": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Turkmenistán<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>6,031,200<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>488,100 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Asjabad<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Manat turcomano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Turcomano"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "SG": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Singapur<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>5,850,342<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>693 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Singapur<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar de Singapur<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés, mandarín, malayo y tamil"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "DK": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Dinamarca<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>5,792,202<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>43,094 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Copenhague<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Corona danesa<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Danés"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "FI": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Finlandia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>5,540,720<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>338,145 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Helsinki<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Finlandés y sueco"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "CG": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">República Del Congo<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>5,518,087<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>342,000 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Brazzaville<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco congoleño<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés, lingala, swahili"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "SK": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Eslovaquia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>5,459,642<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>48,845 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Bratislava<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Eslovaco"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "NO": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Noruega<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>5,421,241<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>323,802 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Oslo<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Corona noruega<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Noruego"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "OM": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Omán<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>5,106,626<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>212,460 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Mascate<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Rial omaní<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "CR": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Costa Rica<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>5,094,118<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>51,100 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>San José<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Colón costarricense<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "LR": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Liberia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>5,057,681<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>111,370 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Monrovia<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar liberiano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "IE": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Irlanda<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>4,937,786<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>70,280 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Dublín<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés e irlandés"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "CF": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">República Centroafricana<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>4,829,767<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>622,984 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Bangui<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco CFA de África Central<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés y sango"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "NZ": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Nueva Zelanda<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>4,822,233<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>268,680 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Wellington<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar neozelandés<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés, maorí y lengua de signos neozelandesa"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "MR": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Mauritania<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>4,649,658<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,030,700 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Nuakchot<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Uguiya<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "PA": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Panamá<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>4,314,767<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>78,200 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Ciudad De Panamá<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Balboa panameño<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "KW": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Kuwait<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>4,270,571<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>17,820 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Ciudad De Kuwait<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dinar kuwaití<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "HR": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Croacia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>4,105,267<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>56,542 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Zagreb<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Kuna croata<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Croata"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "MD": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Moldavia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>4,033,963<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>33,843 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Chisinau<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Leu moldavo<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Rumano, localmente: gagaúzo, ruso y ucraniano"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "GE": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Georgia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>3,989,167<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>69,700 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Tiflis<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Lari georgiano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Georgiano"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "ER": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Eritrea<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>3,546,421<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>121,320 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Asmara<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Nakfa<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe, inglés y tigriña"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "UY": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Uruguay<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>3,473,730<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>176,220 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Montevideo<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Peso uruguayo<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "BA": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Bosnia y Herzegovina<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>3,280,819<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>51,129 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Sarajevo<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Marco bosnioherzegovino<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Bosnio, croata y serbio"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "MN": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Mongolia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>3,278,290<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,564,116 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Ulan Bator<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Tugrik mongol<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Mongol"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "AM": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Armenia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>2,963,243<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>29,800 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Ereván<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dram armenio<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Armenio"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "JM": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Jamaica<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>2,961,167<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>10,991 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Kingston<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar jamaiquino<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés y jamaicano"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "QA": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Katar<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>2,881,053<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>11,437 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Doha<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Riyal catarí<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "AL": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Albania<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>2,877,797<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>28,748 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Tirana<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Lek albanés<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Albanés"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "PR": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Puerto Rico<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>2,860,853<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>13,790 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>San Juan<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar estadounidense<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español e inglés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "LT": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Lituania<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>2,722,289<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>65,200 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Vilna<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Lituano"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "NA": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Namibia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>2,540,905<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>825,418 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Windhoek<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar namibio<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "GM": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Gambia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>2,416,668<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>11,300 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Banjul<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dalasi<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe e inglés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "BW": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Botsuana<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>2,351,627<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>600,370 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Gaberones<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Pula<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés y setsuana"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "GA": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Gabón<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>2,225,734<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>267,667 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Libreville<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco CFA de África Central<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "LS": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Lesoto<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>2,142,249<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>30,355 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Maseru<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Loti<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Sesoto, Inglés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "SI": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Eslovenia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>2,078,938<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>20,273 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Lublijana<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Esloveno, localmente: húngaro e italiano"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "MK": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Macedonia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>2,065,000<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>25,333 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Tesalónica<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Denar macedonio<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Macedonio"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "PS": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Franja de Gaza<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>2,048,000<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>360 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Gaza<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>sheqel israelí<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe moderno estandarizado"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "GW": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Guinea-Bisáu<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>1,968,001<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>36,120 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Bissau<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco CFA de África Occidental<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Portugués"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "LV": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">letonia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>1,886,198<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>64,589 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Riga<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Letón"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "BH": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Baréin<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>1,701,575<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>665 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Manamá<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dinar bahreiní<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe moderno estandarizado"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "GQ": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Guinea Ecuatorial<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>1,402,985<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>28,051 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Malabo<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco CFA de África Central<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español, francés y portugués"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "TT": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Trinidad y Tobago<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>1,399,488<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>5,128 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Puerto España<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar trinitense<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "EE": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Estonia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>1,326,535<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>45,226 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Tallín<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Estonio"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "TL": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Timor Oriental<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>1,318,445<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>15,007 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Dili<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar estadounidense<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Tetun y portugués"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "MU": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Mauricio<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>1,271,768<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>2,040 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Port Louis<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Rupia de Mauricio<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés y francés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "CY": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Chipre<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>1,207,359<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>9,250 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Nicosia<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Griego moderno y turco"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "SZ": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Suazilandia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>1,172,000<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>17,363 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Mbabane<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Lilangeni<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Suazi, Inglés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "DJ": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Yibuti<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>988,000<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>23,000 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Yibuti<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco yibutiano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe y francés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "FJ": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Fiyi<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>896,445<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>18,270 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Suva<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar fiyiano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés y fiyiano"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "RE": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Réunion<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>895,312<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>2,517 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Saint-Denis<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "KM": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Comoras<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>869,601<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>2,170 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Moroni<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco comorano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Árabe, francés y comorense"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "GY": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Guyana<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>786,552<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>214,970 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Georgetown<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar guyanés<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "BT": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Bután<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>771,608<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>47,000 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Timbu<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Ngultrum butanés<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Dzongkha"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "SB": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Islas Salomón<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>686,884<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>28,450 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Honiara<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar de las Islas Salomón<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "MO": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Macao<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>658,391<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>28 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Ciudad De Macao<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Pataca macaense<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Portugués, Chino"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "LU": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">luxemburgo<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>625,978<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>2,586 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Luxemburgo<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Luxemburgués, francés y alemán"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "EH": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Sahara Occidental<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>597,339<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>266,000 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Laayoune<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dirham marroquí<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Castellano"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "SR": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Surinam<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>586,632<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>163,270 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Paramaribo<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar surinamés<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Holandés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "CV": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Cabo Verde<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>555,987<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>4,033 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Praia<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Escudo caboverdiano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Portugués"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "FM": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Micronesia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>548,914<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>702 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Palikir<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar estadounidense<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "MV": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Maldivas<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>540,544<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>300 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Malé<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Rupia de Maldivas<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Maldivo"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "MT": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Malta<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>441,543<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>316 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>La Valeta<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Maltés e inglés"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "BN": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Brunéi<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>437,479<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>5,770 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Sultanato Islámico De Brunei<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar de Brunéi<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Dzongkha"
        }, 'attrs':
        {
          'fill': "#F76624"
        }
      },
      "GP": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Guadalupe<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>400,124<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,780 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span> Basse-Terre<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "BZ": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Belice<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>397,628<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>22,966 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Belmopán<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar beliceño<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "BS": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Bahamas<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>393,244<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>13,940 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Nassau<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar bahameño<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "MQ": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Martinica<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>375,265<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,100 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Fort-De-France<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "IS": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Islandia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>341,243<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>103,000 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Reikiavik<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Corona islandes<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Islandés"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "VU": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Vanuatu<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>307,145<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>12,200 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Port Vila<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Vatu<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Bislama, inglés y francés"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "GF": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Guayana Francesa<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>298,682<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>91,000 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Cayena<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro <br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "BB": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Barbados<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>287,375<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>431 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Bridgetown<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar de Barbados<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "NC": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Nueva Caledonia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>285,498<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>19,060 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Numea<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco del Pacífico<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "PF": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Polinesia francesa<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>280,908<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>4,167 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span> Papeete<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>franco del Pacífico<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "YT": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Mayotte<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>272,815<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>374 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Mamoudzou<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Europa<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "ST": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Santo Tomé y Príncipe<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>219,159<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,001 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Santo Tomé<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dobra<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Portugués"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "WS": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Samoa<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>198,414<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>2,944 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Apia<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Tala<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Samoano e inglés"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "LC": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Santa Lucía<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>183,627<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>616 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Castries<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar del Caribe Oriental<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "GU": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Guam<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>168,775<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>541 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Agaña<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>dólar estadounidense<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés y chamorro"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "KI": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Kiribati<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>119,449<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>811 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Tarawa<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar australiano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés y gilbertés"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "GD": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Granada<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>112,523<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>344 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Saint George'S<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar del Caribe Oriental<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "VC": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">San Vicente y las Granadinas<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>110,940<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>389 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Kingstown<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar del Caribe Oriental<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "AW": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Aruba<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>106,766<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>193 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Oranjestad<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>florín<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Holandés y papiamento"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "TO": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Tonga<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>105,695<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>748 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Nuku'Alofa<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Pa'anga<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Tongano e inglés"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "VI": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Islas Vírgenes de EE.UU<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>104,425<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,910 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Charlotte Amalie<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar estadounidense<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "SC": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Seychelles<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>98,347<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>455 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Victoria<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Rupia de Seychelles<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Criollo seychelense, francés e inglés"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "AG": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Antigua y Barbuda<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>97,929<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>443 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Saint John'S<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar del Caribe Oriental<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "IM": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Isla del hombre<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>85,033<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>572 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span> Douglas<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Libra manesa<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés, manés"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "AD": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Andorra<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>77,265<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>468 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Andorra La Vieja<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Catalán"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "DM": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Dominica<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>71,986<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>754 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Roseau<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar del Caribe Oriental<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "KY": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Islas Caimán<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>65,722<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>262 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>George Town<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar De Las Islas Caimán<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "GG": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Guernsey<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>62,792<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>78 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Saint Peter Port<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Libra de Guernsey<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "BM": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">islas Bermudas<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>62,278<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>53 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Hamilton<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>dólar bermudeño<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "MH": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Islas Marshall<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>59,190<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>11,854 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Majuro<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar estadounidense<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Marshalés e inglés"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "MP": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Islas Marianas del Norte<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>57,559<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>477 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Saipán<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar estadounidense<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés, chamorro y carolinio"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "GL": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Groenlandia<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>56,770<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>2,166,086 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Nuuk<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>corona danesa<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Danés y groenlandés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "AS": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Samoa Americana<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>55,191<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>199 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Pago Pago<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Tālā<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés y samoano"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "KN": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">San Cristóbal y Nieves<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>53,199<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>261 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Basseterre<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar del Caribe Oriental<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés y criollo"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "FO": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Islas Faroe<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>49,053<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>1,399 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Tórshavn<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Corona Feroesa<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Faroese"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "MC": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Mónaco<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>39,242<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>2 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Mónaco<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "TC": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Las Islas Turcas y Caicos​<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>38,717<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>430 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Cockburn Town<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar estadounidense<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "LI": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Liechtenstein<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>38,128<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>160 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Vaduz<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco suizo<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Alemán"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "SM": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">San Marino<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>33,931<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>61 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Ciudad De San Marino<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Italiano"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "GI": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Gibraltar<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>33,691<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>7 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Gibraltar<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Libra de Gibraltar<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#B9D516"
        }
      },
      "VG": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Islas Vírgenes Británicas<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>30,231<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>153 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Road Town<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span> Dólar estadounidense<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "PW": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Palaos<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>18,094<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>458 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Melekeok<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar estadounidense<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés, palauano y japonés"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "CK": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Islas Cook<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>17,564<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>240 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Avarua<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>dólar de la Islas Cook<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés y maorí"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "AI": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Anguilla<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>15,003<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>102 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>El Valle<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar del Caribe Oriental<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "TV": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Tuvalu <\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>11,792<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>26 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Funafuti<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar estadounidense<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>tuvaluano"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "WF": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Wallis y Futuna<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>11,239<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>274 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Matā'Utu<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Franco del Pacífico<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "NR": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Nauru<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>10,824<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>21 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Yaren<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar australiano<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés y nauruano"
        }, 'attrs':
        {
          'fill': "#E93546"
        }
      },
      "SH": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Santa Elena<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>6,077<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>413 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Jamestown<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Libra de Santa Elena<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Español"
        }, 'attrs':
        {
          'fill': "#E9A713"
        }
      },
      "PM": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">San Pedro y Miquelón<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>5,794<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>242 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Saint-Pierre<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Euro<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Francés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
      "MS": {
        "tooltip": {
          "content": "<span style=\"font-family:Goldplay_Black;\">Montserrat<\/span><br\/><span style=\"font-family:Goldplay_Black;\">Población: <\/span>4,992<br\/><span style=\"font-family:Goldplay_Black;\">Área: <\/span>102 Km² <br\/> <span style=\"font-family:Goldplay_Black;\">Capital: <\/span>Plymouth<br\/> <span style=\"font-family:Goldplay_Black;\">Moneda: <\/span>Dólar del Caribe Oriental<br\/><span style=\"font-family:Goldplay_Black;\">Lenguaje: <\/span>Inglés"
        }, 'attrs':
        {
          'fill': "#43BBCC"
        }
      },
    }
  });


  const modal: any = document.querySelector('#my-modal');
  const modalBtn: any = document.querySelector('#modal-btn');
  const closeBtn: any = document.querySelector('.btnCloseDescripcion');

  modalBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  // window.addEventListener('click', outsideClick);
  window.addEventListener('resize', changeHeightOnResize);

  function openModal() { modal.style.display = 'block'; }

  function closeModal() { modal.style.display = 'none'; respuestas = []; }

  // Close If Outside Click
  function outsideClick(e: any) { if (e.target == modal) { modal.style.display = 'none'; } }

  function changeHeightOnResize() { mapSVG.setAttribute('style', 'height: 100vh'); }

  let mapSVG = document.querySelectorAll('svg')[1];

  let toggleSVG = document.querySelectorAll('svg')[0];
  toggleSVG.setAttribute('style', 'width: 220px');

  // mapSVG?.addEventListener('click',this.shit);

  ojo: 'this shit is working setting the height to 100 vh';

  mapSVG.setAttribute('id', 'svgMap');
  mapSVG.setAttribute('style', 'height: 100vh');

  // let x = document.querySelectorAll('svg')[1];

  let respuestas: any = [];
  let respuesta: any;

  let pathAreas = document.querySelectorAll('path');
  let pathPlots = document.querySelectorAll('path.plot');
  let imagePlots = document.querySelectorAll('image.plot');


  // x.setAttribute('style','height: 100vh');
  // console.log(x);
  // console.log(pathAreas);
  // console.log(pathPlots);
  // console.log(imagePlots);

  mapSVG?.addEventListener('click', (e) => {
    for (let pathArea in pathAreas) {
      if (e.target == pathAreas[pathArea]) {
        respuestas.push('si');
      }
      else {
        respuestas.push('no');
        // console.log('no');
      }
    }
    for (let imagePlot in imagePlots) {
      if (e.target == imagePlots[imagePlot]) {
        // console.log('si');
        respuestas.push('si');
      }
      else {
        respuestas.push('no');
        // console.log('no');
      }
    }

    if (respuestas.includes('si')) {
      respuesta = 'si';
      // mapaChico(plots, plots);
    } else {
      respuesta = 'no';
      mapaGrande(plots, plots);
    }
  });
}
