var namez = document.querySelector(".inputname");
var lastname = document.querySelector(".inputlastname");
var marka = document.querySelector(".marka");
var model = document.querySelector(".model");
var motor = document.querySelector('.motor');
var chas= document.querySelector('.sasija');
var pow=document.querySelector('.kw');
var sav= document.querySelector(".save");
var list= document.querySelector('.list');
var datum= document.querySelector('.date');
var text=document.querySelector('.text');
var right= document.querySelector('.right');
var warn= document.querySelector('.warn');
var okbutton= document.querySelector('.oki');
var yearz=document.querySelector('.year');
var cubez=document.querySelector('.cubes');
var lit=document.querySelector('.litres');
var trazi= document.querySelector('.trazi');
var more=document.querySelector('.moreright');
var okbutton2= document.querySelector('.oki2');
var warn2=document.querySelector('.warn2');



marka.addEventListener('click', tip);
sav.addEventListener('click', saveData);
list.addEventListener('click', addList);
okbutton.addEventListener('click', okfunc);
trazi.addEventListener('click', pretraga);
okbutton2.addEventListener('click', ok2func);


function initmemory(){
    if(Boolean(localStorage.getItem("arr"))){
        break;
    }else {
        localStorage.setItem('arr', 0);
    }
}

function okfunc(){
  var visi=document.querySelector('.visib');  
visi.setAttribute('class', 'warn');
}
function ok2func(){
    var visi2=document.querySelector('.visib2');  
  visi2.setAttribute('class', 'warn2');
  }


function Data (namez, lastname, marka, model, engine, chasis, power, year, cubes, oil, date, info){
this.namez=namez;
this.lastname=lastname;
this.marka=marka;
this.model=model;
this.engine=engine;
this.chasis=chasis;
this.power=power;
this.year=year;
this.cubes=cubes;
this.oil=oil;
this.date=date;
this.info=info;

}
function saveData(){

   if(namez.value===""){
       warn.setAttribute('class', 'visib')


   }else{

     var nameval=namez.value;
    var lastval=lastname.value;
    var markaval=marka.value;
    var modelval=model.value;
    var motorval=motor.value;
    var chasval= chas.value;
    var powval=pow.value;
    var dateval=datum.value;
    var infoval=text.value;
    var yearval=yearz.value;
    var cubezval=cubez.value
    var litval=lit.value;

    var newData= new Data(nameval, lastval, markaval, modelval, motorval, chasval, powval, yearval, cubezval, litval, dateval, infoval);
    var store=[];
    store=(JSON.parse(localStorage.getItem('arr')));
    console.log(newData);
    store.push(newData);
    window.localStorage.setItem('arr', JSON.stringify(store));
    console.log(store);
    console.log(JSON.parse(localStorage.getItem('arr')));
   }
  

   

}

function addList(){
    var temp2= JSON.parse(window.localStorage.getItem('arr'));
   
    
    
    console.log(JSON.parse(localStorage.getItem('arr')));
    for(i=1; i<temp2.length; i++){

        var blok= document.createElement('div');

        blok.setAttribute("class", "users")
        var ids= document.createElement('p');
        ids.textContent="Redni broj :"+i;
        blok.appendChild(ids);
        var list1= document.createElement('p');
        list1.textContent="Ime : "+temp2[i].namez;
        blok.appendChild(list1);
        var list2= document.createElement('p');
        list2.textContent="Prezime: "+temp2[i].lastname;
        blok.appendChild(list2);
        var list3= document.createElement('p');
        list3.textContent="Marka: "+temp2[i].marka;
        blok.appendChild(list3);
        var list4= document.createElement('p');
        list4.textContent="Model: "+temp2[i].model;
        blok.appendChild(list4);
        var list5= document.createElement('p');
        list5.textContent="Broj motora: "+temp2[i].engine;
        blok.appendChild(list5);
        var list6= document.createElement('p');
        list6.textContent="Broj sasije: "+temp2[i].chasis;
        blok.appendChild(list6);
        var list7= document.createElement('p');
        list7.textContent="Snaga motora: "+temp2[i].power+"kw"+"/"+temp2[i].power*1.36+"KS";
        blok.appendChild(list7);
        var list8= document.createElement('p');
        list8.textContent="Godina proizvodnje: "+temp2[i].year;
        blok.appendChild(list8);
        var list9= document.createElement('p');
        list9.textContent="Kubikaza : "+temp2[i].cubes;
        blok.appendChild(list9);
        var list10= document.createElement('p');
        list10.textContent="Ulje litara : "+temp2[i].oil;
        blok.appendChild(list10);
        var list11= document.createElement('p');
        list11.textContent="Datum servisa: "+temp2[i].date;
        blok.appendChild(list11);
        var list12= document.createElement('p');
        list12.textContent="Sta je servisirano: "+temp2[i].info;
        blok.appendChild(list12);
        right.appendChild(blok)

    }
}

function pretraga(){
    var par=document.createElement("p");
    par.textContent="Pretraga je nasla:";
    more.appendChild(par);
    var searc= document.querySelector('.search');
    var sercval= searc.value;
   var temp3=JSON.parse(window.localStorage.getItem('arr')); 
   console.log(temp3);
   for(var i =1; i<temp3.length; i++){
if(temp3[i].namez.includes(sercval.toLowerCase()) || temp3[i].lastname.includes(sercval.toLowerCase()) || temp3[i].marka.toLowerCase().includes(sercval.toLowerCase())){
    var blok= document.createElement('div');
    blok.setAttribute("class", "users2")
    var ids1= document.createElement('p');
        ids1.textContent="Redni broj :"+i;
        blok.appendChild(ids1);
    var listz= document.createElement('p');
        listz.textContent="Ime: "+temp3[i].namez;
        blok.appendChild(listz);
        var listz1= document.createElement('p');
        listz1.textContent="Prezime: "+temp3[i].lastname;
        blok.appendChild(listz1);
        var listz2= document.createElement('p');
        listz2.textContent="Marka: "+temp3[i].marka;
        blok.appendChild(listz2);
        var listz3= document.createElement('p');
        listz3.textContent="Model: "+temp3[i].model;
        blok.appendChild(listz3);
        var listz4= document.createElement('p');
        listz4.textContent="Broj motora:"+temp3[i].engine;
        blok.appendChild(listz4);
        var listz5= document.createElement('p');
        listz5.textContent="Broj sasije: "+temp3[i].chasis;
        blok.appendChild(listz5);
        
        var listz7= document.createElement('p');
        listz7.textContent="Snaga motora: "+temp3[i].power+"kw"+"/"+temp3[i].power*1.36+"KS";
        blok.appendChild(listz7);
        var listz8= document.createElement('p');
        listz8.textContent="Godina proizvodnje: "+temp3[i].year;
        blok.appendChild(listz8);
        var listz9= document.createElement('p');
        listz9.textContent="Kubikaza : "+temp3[i].cubes;
        blok.appendChild(listz9);
        var listz10= document.createElement('p');
        listz10.textContent="Ulje litara : "+temp3[i].oil;
        blok.appendChild(listz10);
        var listz10= document.createElement('p');
        listz10.textContent="Datum servisa: "+temp3[i].date;
        blok.appendChild(listz10);
        var listz10= document.createElement('p');
        listz10.textContent="Sta je servisirano: "+temp3[i].info;
        blok.appendChild(listz10);
        more.appendChild(blok)



    }
    
  
    

   }
    
}

if(model.hasChildNodes()){
    for(var i=0; i<model.childNodes.length; i++){
        model.removeChild(model.childNodes[i]);
    }
}
function tip(){
if(marka.value==="Audi"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
            
        }
    }
var optaudi= document.createElement('option');
optaudi.textContent="80";
model.appendChild(optaudi);
var optaudi1= document.createElement('option');
optaudi1.textContent="90";
model.appendChild(optaudi1);
var optaudi2= document.createElement('option');
optaudi2.textContent="100";
model.appendChild(optaudi2);
var optaudi3= document.createElement('option');
optaudi3.textContent="200";
model.appendChild(optaudi3);
var optaudi4= document.createElement('option');
optaudi4.textContent="A1";
model.appendChild(optaudi4);
var optaudi5= document.createElement('option');
optaudi5.textContent="A2";
model.appendChild(optaudi5);
var optaudi6= document.createElement('option');
optaudi6.textContent="A3";
model.appendChild(optaudi6);
var optaudi7= document.createElement('option');
optaudi7.textContent="A4";
model.appendChild(optaudi7);
var optaudi8= document.createElement('option');
optaudi8.textContent="A5";
model.appendChild(optaudi8);
var optaudi9= document.createElement('option');
optaudi9.textContent="A6";
model.appendChild(optaudi9);
var optaudi10= document.createElement('option');
optaudi10.textContent="A7";
model.appendChild(optaudi10);
var optaudi11= document.createElement('option');
optaudi11.textContent="A8";
model.appendChild(optaudi11);
var optaudi12= document.createElement('option');
optaudi12.textContent="coupe";
model.appendChild(optaudi12);
var optaudi13= document.createElement('option');
optaudi13.textContent="Q2";
model.appendChild(optaudi13);
var optaudi14= document.createElement('option');
optaudi14.textContent="Q3";
model.appendChild(optaudi14);
var optaudi15= document.createElement('option');
optaudi15.textContent="Q5";
model.appendChild(optaudi15);
var optaudi16= document.createElement('option');
optaudi16.textContent="Q7";
model.appendChild(optaudi16);
var optaudi17= document.createElement('option');
optaudi17.textContent="Q8";
model.appendChild(optaudi17);
var optaudi18= document.createElement('option');
optaudi18.textContent="R8";
model.appendChild(optaudi18);
var optaudi19= document.createElement('option');
optaudi19.textContent="TT";
model.appendChild(optaudi19);


}
else if(marka.value==="BMW"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var optbmw= document.createElement('option');
optbmw.textContent="114";
model.appendChild(optbmw);
var optbmw1= document.createElement('option');
optbmw1.textContent="116";
model.appendChild(optbmw1);
var optbmw2= document.createElement('option');
optbmw2.textContent="118";
model.appendChild(optbmw2);
var optbmw3= document.createElement('option');
optbmw3.textContent="120";
model.appendChild(optbmw3);
var optbmw4= document.createElement('option');
optbmw4.textContent="123";
model.appendChild(optbmw4);
var optbmw5= document.createElement('option');
optbmw5.textContent="125";
model.appendChild(optbmw5);
var optbmw6= document.createElement('option');
optbmw6.textContent="135";
model.appendChild(optbmw6);
var optbmw7= document.createElement('option');
optbmw7.textContent="216";
model.appendChild(optbmw7);
var optbmw8= document.createElement('option');
optbmw8.textContent="218";
model.appendChild(optbmw8);
var optbmw9= document.createElement('option');
optbmw9.textContent="220";
model.appendChild(optbmw9);
var optbmw10= document.createElement('option');
optbmw10.textContent="315";
model.appendChild(optbmw10);
var optbmw11= document.createElement('option');
optbmw11.textContent="316";
model.appendChild(optbmw11);
var optbmw12= document.createElement('option');
optbmw12.textContent="318";
model.appendChild(optbmw12);
var optbmw13= document.createElement('option');
optbmw13.textContent="320";
model.appendChild(optbmw13);
var optbmw14= document.createElement('option');
optbmw14.textContent="323";
model.appendChild(optbmw14);
var optbmw15= document.createElement('option');
optbmw15.textContent="324";
model.appendChild(optbmw15);
var optbmw16= document.createElement('option');
optbmw16.textContent="325";
model.appendChild(optbmw16);
var optbmw17= document.createElement('option');
optbmw17.textContent="328";
model.appendChild(optbmw17);
var optbmw18= document.createElement('option');
optbmw18.textContent="330";
model.appendChild(optbmw18);
var optbmw19= document.createElement('option');
optbmw19.textContent="335";
model.appendChild(optbmw19);
var optbmw20= document.createElement('option');
optbmw20.textContent="418";
model.appendChild(optbmw20);
var optbmw21= document.createElement('option');
optbmw21.textContent="420";
model.appendChild(optbmw21);
var optbmw22= document.createElement('option');
optbmw22.textContent="428";
model.appendChild(optbmw22);
var optbmw23= document.createElement('option');
optbmw23.textContent="430";
model.appendChild(optbmw23);
var optbmw24= document.createElement('option');
optbmw24.textContent="435";
model.appendChild(optbmw24);
var optbmw25= document.createElement('option');
optbmw25.textContent="518";
model.appendChild(optbmw25);
var optbmw26= document.createElement('option');
optbmw26.textContent="520";
model.appendChild(optbmw26);
var optbmw27= document.createElement('option');
optbmw27.textContent="523";
model.appendChild(optbmw27);
var optbmw28= document.createElement('option');
optbmw28.textContent="524";
model.appendChild(optbmw28);
var optbmw29= document.createElement('option');
optbmw29.textContent="525";
model.appendChild(optbmw29);
var optbmw30= document.createElement('option');
optbmw30.textContent="528";
model.appendChild(optbmw30);
var optbmw31= document.createElement('option');
optbmw31.textContent="530";
model.appendChild(optbmw31);
var optbmw32= document.createElement('option');
optbmw32.textContent="535";
model.appendChild(optbmw32);
var optbmw33= document.createElement('option');
optbmw33.textContent="540";
model.appendChild(optbmw33);
var optbmw34= document.createElement('option');
optbmw34.textContent="545";
model.appendChild(optbmw34);
var optbmw35= document.createElement('option');
optbmw35.textContent="630";
model.appendChild(optbmw35);
var optbmw36= document.createElement('option');
optbmw36.textContent="635";
model.appendChild(optbmw36);
var optbmw37= document.createElement('option');
optbmw37.textContent="640";
model.appendChild(optbmw37);
var optbmw38= document.createElement('option');
optbmw38.textContent="645";
model.appendChild(optbmw38);
var optbmw39= document.createElement('option');
optbmw39.textContent="650";
model.appendChild(optbmw39);
var optbmw40= document.createElement('option');
optbmw40.textContent="725";
model.appendChild(optbmw40);
var optbmw41= document.createElement('option');
optbmw41.textContent="728";
model.appendChild(optbmw41);
var optbmw42= document.createElement('option');
optbmw42.textContent="730";
model.appendChild(optbmw42);
var optbmw43= document.createElement('option');
optbmw43.textContent="735";
model.appendChild(optbmw43);
var optbmw44= document.createElement('option');
optbmw44.textContent="740";
model.appendChild(optbmw44);
var optbmw45= document.createElement('option');
optbmw45.textContent="745";
model.appendChild(optbmw45);   
 var optbmw46= document.createElement('option');
optbmw46.textContent="750";
model.appendChild(optbmw46);
var optbmw47= document.createElement('option');
optbmw47.textContent="760";
model.appendChild(optbmw47);
var optbmw48= document.createElement('option');
optbmw48.textContent="840";
model.appendChild(optbmw48);
var optbmw49= document.createElement('option');
optbmw49.textContent="X1";
model.appendChild(optbmw49);
var optbmw50= document.createElement('option');
optbmw50.textContent="X2";
model.appendChild(optbmw50);
var optbmw51= document.createElement('option');
optbmw51.textContent="X3";
model.appendChild(optbmw51);
var optbmw52= document.createElement('option');
optbmw52.textContent="X4";
model.appendChild(optbmw52);
var optbmw53= document.createElement('option');
optbmw53.textContent="X5";
model.appendChild(optbmw53);
var optbmw54= document.createElement('option');
optbmw54.textContent="X6";
model.appendChild(optbmw54);
var optbmw55= document.createElement('option');
optbmw55.textContent="X7";
model.appendChild(optbmw55);
var optbmw56= document.createElement('option');
optbmw56.textContent="I3";
model.appendChild(optbmw56);
var optbmw57= document.createElement('option');
optbmw57.textContent="Z3";
model.appendChild(optbmw57);
var optbmw58= document.createElement('option');
optbmw58.textContent="Z4";
model.appendChild(optbmw58);

}
else if(marka.value==="Mercedes"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var merc= document.createElement('option');
merc.textContent="A 140";
model.appendChild(merc);
var merc1= document.createElement('option');
merc1.textContent="A 150";
model.appendChild(merc1);
var merc2= document.createElement('option');
merc2.textContent="A 160";
model.appendChild(merc2);
var merc3= document.createElement('option');
merc3.textContent="A 170";
model.appendChild(merc3);
var merc4= document.createElement('option');
merc4.textContent="A 180";
model.appendChild(merc4);
var merc5= document.createElement('option');
merc5.textContent="A 190";
model.appendChild(merc5);
var merc6= document.createElement('option');
merc6.textContent="A 200";
model.appendChild(merc6);
var merc7= document.createElement('option');
merc7.textContent="A 220";
model.appendChild(merc7);
var merc8= document.createElement('option');
merc8.textContent="A 250";
model.appendChild(merc8);
var merc9= document.createElement('option');
merc9.textContent="A 45 AMG";
model.appendChild(merc9);
var merc10= document.createElement('option');
merc10.textContent="B 150";
model.appendChild(merc10);
var merc11= document.createElement('option');
merc11.textContent="B 160";
model.appendChild(merc11);
var merc12= document.createElement('option');
merc12.textContent="B 170";
model.appendChild(merc12);
var merc13= document.createElement('option');
merc13.textContent="B 180";
model.appendChild(merc13);
var merc14= document.createElement('option');
merc14.textContent="B 200";
model.appendChild(merc14);
var merc15= document.createElement('option');
merc15.textContent="C 180";
model.appendChild(merc15);
var merc16= document.createElement('option');
merc16.textContent="C 200";
model.appendChild(merc16);
var merc17= document.createElement('option');
merc17.textContent="C 220";
model.appendChild(merc17);
var merc18= document.createElement('option');
merc18.textContent="C 230";
model.appendChild(merc18);
var merc19= document.createElement('option');
merc19.textContent="C 240";
model.appendChild(merc19);
var merc20= document.createElement('option');
merc20.textContent="C 250";
model.appendChild(merc20);
var merc21= document.createElement('option');
merc21.textContent="C 270";
model.appendChild(merc21);
var merc22= document.createElement('option');
merc22.textContent="C 280";
model.appendChild(merc22);
var merc23= document.createElement('option');
merc23.textContent="C 320";
model.appendChild(merc23);
var merc24= document.createElement('option');
merc24.textContent="C 63 AMG";
model.appendChild(merc24);
var merc25= document.createElement('option');
merc25.textContent="CE 200";
model.appendChild(merc25);
var merc26= document.createElement('option');
merc26.textContent="CE 230";
model.appendChild(merc26);
var merc27= document.createElement('option');
merc27.textContent="CE 300";
model.appendChild(merc27);
var merc28= document.createElement('option');
merc28.textContent="CLA 180";
model.appendChild(merc28);
var merc29= document.createElement('option');
merc29.textContent="CLA 200";
model.appendChild(merc29);
var merc30= document.createElement('option');
merc30.textContent="CLA 220";
model.appendChild(merc30);
var merc31= document.createElement('option');
merc31.textContent="CL 500";
model.appendChild(merc31);
var merc32= document.createElement('option');
merc32.textContent="CLC 200";
model.appendChild(merc32);
var merc33= document.createElement('option');
merc33.textContent="CLK 200";
model.appendChild(merc33);
var merc34= document.createElement('option');
merc34.textContent="CLK 220";
model.appendChild(merc34);
var merc35= document.createElement('option');
merc35.textContent="CLK 230";
model.appendChild(merc35);
var merc36= document.createElement('option');
merc36.textContent="CLK 240";
model.appendChild(merc36);
var merc37= document.createElement('option');
merc37.textContent="CLK 270";
model.appendChild(merc37);
var merc38= document.createElement('option');
merc38.textContent="CLK 320";
model.appendChild(merc38);
var merc39= document.createElement('option');
merc39.textContent="CLK 350";
model.appendChild(merc39);
var merc40= document.createElement('option');
merc40.textContent="CLK 500";
model.appendChild(merc40);
var merc141= document.createElement('option');
merc141.textContent="CLS 220";
model.appendChild(merc141);
var merc41= document.createElement('option');
merc41.textContent="CLS 250";
model.appendChild(merc41);
var merc42= document.createElement('option');
merc42.textContent="CLS 300";
model.appendChild(merc42);
var merc43= document.createElement('option');
merc43.textContent="CLS 320";
model.appendChild(merc43);
var merc44= document.createElement('option');
merc44.textContent="CLS 350";
model.appendChild(merc44);
var merc45= document.createElement('option');
merc45.textContent="CLS 400";
model.appendChild(merc45);
var merc46= document.createElement('option');
merc46.textContent="CLS 55 AMG";
model.appendChild(merc46);
var merc47= document.createElement('option');
merc47.textContent="E 200";
model.appendChild(merc47);
var merc48= document.createElement('option');
merc48.textContent="E 220";
model.appendChild(merc48);
var merc49= document.createElement('option');
merc49.textContent="E 230";
model.appendChild(merc49);
var merc50= document.createElement('option');
merc50.textContent="E 240";
model.appendChild(merc50);
var merc51= document.createElement('option');
merc51.textContent="E 250";
model.appendChild(merc51);
var merc52= document.createElement('option');
merc52.textContent="E 260";
model.appendChild(merc52);
var merc53= document.createElement('option');
merc53.textContent="E 270";
model.appendChild(merc53);
var merc54= document.createElement('option');
merc54.textContent="E 280";
model.appendChild(merc54);
var merc55= document.createElement('option');
merc55.textContent="E 290";
model.appendChild(merc55);
var merc56= document.createElement('option');
merc56.textContent="E 300";
model.appendChild(merc56);
var merc57= document.createElement('option');
merc57.textContent="E 320";
model.appendChild(merc57);
var merc58= document.createElement('option');
merc58.textContent="E 350";
model.appendChild(merc58);
var merc59= document.createElement('option');
merc59.textContent="E 400";
model.appendChild(merc59);
var merc60= document.createElement('option');
merc60.textContent="E 43 AMG";
model.appendChild(merc60);
var merc61= document.createElement('option');
merc61.textContent="E 500";
model.appendChild(merc61);
var merc62= document.createElement('option');
merc62.textContent="G 230";
model.appendChild(merc62);
var merc63= document.createElement('option');
merc63.textContent="G 250";
model.appendChild(merc63);
var merc64= document.createElement('option');
merc64.textContent="G 270";
model.appendChild(merc64);
var merc65= document.createElement('option');
merc65.textContent="G 290";
model.appendChild(merc65);
var merc66= document.createElement('option');
merc66.textContent="G 300";
model.appendChild(merc66);
var merc67= document.createElement('option');
merc67.textContent="G 320";
model.appendChild(merc67);
var merc68= document.createElement('option');
merc68.textContent="G 350";
model.appendChild(merc68);
var merc69= document.createElement('option');
merc69.textContent="G 400";
model.appendChild(merc69);
var merc70= document.createElement('option');
merc70.textContent="G 500";
model.appendChild(merc70);
var merc71= document.createElement('option');
merc71.textContent="G 63 AMG";
model.appendChild(merc71);
var merc72= document.createElement('option');
merc72.textContent="GL 320";
model.appendChild(merc72);
var merc73= document.createElement('option');
merc73.textContent="GL 350";
model.appendChild(merc73);
var merc74= document.createElement('option');
merc74.textContent="GL 420";
model.appendChild(merc74);
var merc75= document.createElement('option');
merc75.textContent="GL 450";
model.appendChild(merc75);
var merc76= document.createElement('option');
merc76.textContent="GL 500";
model.appendChild(merc76);
var merc77= document.createElement('option');
merc77.textContent="GLA 45 AMG";
model.appendChild(merc77);
var merc78= document.createElement('option');
merc78.textContent="GLA 180";
model.appendChild(merc78);
var merc79= document.createElement('option');
merc79.textContent="GLA 200";
model.appendChild(merc79);
var merc80= document.createElement('option');
merc80.textContent="GLA 220";
model.appendChild(merc80);
var merc81= document.createElement('option');
merc81.textContent="GLC 220";
model.appendChild(merc81);
var merc82= document.createElement('option');
merc82.textContent="GLC 250";
model.appendChild(merc82);
var merc83= document.createElement('option');
merc83.textContent="GLC 350";
model.appendChild(merc83);
var merc84= document.createElement('option');
merc84.textContent="GLE 250";
model.appendChild(merc84);
var merc85= document.createElement('option');
merc85.textContent="GLE 300";
model.appendChild(merc85);
var merc86= document.createElement('option');
merc86.textContent="GLE 350";
model.appendChild(merc86);
var merc87= document.createElement('option');
merc87.textContent="GLK 200";
model.appendChild(merc87);
var merc88= document.createElement('option');
merc88.textContent="GLK 220";
model.appendChild(merc88);
var merc89= document.createElement('option');
merc89.textContent="GLK 250";
model.appendChild(merc89);
var merc90= document.createElement('option');
merc90.textContent="GLK 320";
model.appendChild(merc90);
var merc91= document.createElement('option');
merc91.textContent="GLS 350 D";
model.appendChild(merc91);
var merc92= document.createElement('option');
merc92.textContent="GLS 400";
model.appendChild(merc92);
var merc93= document.createElement('option');
merc93.textContent="MB 100";
model.appendChild(merc93);
var merc94= document.createElement('option');
merc94.textContent="ML 230";
model.appendChild(merc94);
var merc95= document.createElement('option');
merc95.textContent="ML 250";
model.appendChild(merc95);
var merc96= document.createElement('option');
merc96.textContent="ML 270";
model.appendChild(merc96);
var merc97= document.createElement('option');
merc97.textContent="ML 280";
model.appendChild(merc97);
var merc98= document.createElement('option');
merc98.textContent="ML 300";
model.appendChild(merc98);
var merc99= document.createElement('option');
merc99.textContent="ML 320";
model.appendChild(merc99);
var merc100= document.createElement('option');
merc100.textContent="ML 350";
model.appendChild(merc100);
var merc101= document.createElement('option');
merc101.textContent="ML 400";
model.appendChild(merc101);
var merc102= document.createElement('option');
merc102.textContent="ML 420";
model.appendChild(merc102);
var merc103= document.createElement('option');
merc103.textContent="ML 430";
model.appendChild(merc103);
var merc104= document.createElement('option');
merc104.textContent="ML 500";
model.appendChild(merc104);
var merc105= document.createElement('option');
merc105.textContent="ML 55 AMG";
model.appendChild(merc105);
var merc106= document.createElement('option');
merc106.textContent="ML 63 AMG";
model.appendChild(merc106);
var merc107= document.createElement('option');
merc107.textContent="R 320";
model.appendChild(merc107);
var merc108= document.createElement('option');
merc108.textContent="R 350";
model.appendChild(merc108);
var merc109= document.createElement('option');
merc109.textContent="S 250";
model.appendChild(merc109);
var merc110= document.createElement('option');
merc110.textContent="S 280";
model.appendChild(merc110);
var merc111= document.createElement('option');
merc111.textContent="S 300";
model.appendChild(merc111);
var merc112= document.createElement('option');
merc112.textContent="S 320";
model.appendChild(merc112);
var merc113= document.createElement('option');
merc113.textContent="S 350";
model.appendChild(merc113);
var merc114= document.createElement('option');
merc114.textContent="S 400";
model.appendChild(merc114);
var merc115= document.createElement('option');
merc115.textContent="S 500";
model.appendChild(merc115);
var merc116= document.createElement('option');
merc116.textContent="S 55";
model.appendChild(merc116);
var merc117= document.createElement('option');
merc117.textContent="S 550";
model.appendChild(merc117);
var merc118= document.createElement('option');
merc118.textContent="S 600";
model.appendChild(merc118);
var merc119= document.createElement('option');
merc119.textContent="S 63 AMG";
model.appendChild(merc119);
var merc120= document.createElement('option');
merc120.textContent="SL 350";
model.appendChild(merc120);
var merc121= document.createElement('option');
merc121.textContent="SL 380";
model.appendChild(merc121);
var merc122= document.createElement('option');
merc122.textContent="SL 500";
model.appendChild(merc122);
var merc123= document.createElement('option');
merc123.textContent="SL 63 AMG";
model.appendChild(merc123);
var merc124= document.createElement('option');
merc124.textContent="SLK 200";
model.appendChild(merc124);
var merc125= document.createElement('option');
merc125.textContent="SLK 230";
model.appendChild(merc125);
var merc126= document.createElement('option');
merc126.textContent="SLK 250";
model.appendChild(merc126);
var merc127= document.createElement('option');
merc127.textContent="Vaneo";
model.appendChild(merc127);
var merc128= document.createElement('option');
merc128.textContent="180";
model.appendChild(merc128);
var merc129= document.createElement('option');
merc129.textContent="190";
model.appendChild(merc129);
var merc130= document.createElement('option');
merc130.textContent="X klasa";
model.appendChild(merc130);

}


else if(marka.value==="Volkswagen"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var vag= document.createElement('option');
vag.textContent="181";
model.appendChild(vag);
var vag1= document.createElement('option');
vag1.textContent="Amarok";
model.appendChild(vag1);
var vag2= document.createElement('option');
vag2.textContent="Arteon";
model.appendChild(vag2);
var vag3= document.createElement('option');
vag3.textContent="Bora";
model.appendChild(vag3);
var vag4= document.createElement('option');
vag4.textContent="Buggy";
model.appendChild(vag4);
var vag5= document.createElement('option');
vag5.textContent="Buba";
model.appendChild(vag5);
var vag6= document.createElement('option');
vag6.textContent="Noba Buba";
model.appendChild(vag6);
var vag7= document.createElement('option');
vag7.textContent="Caddy";
model.appendChild(vag7);
var vag8= document.createElement('option');
vag8.textContent="Corrado";
model.appendChild(vag8);
var vag9= document.createElement('option');
vag9.textContent="Cross Polo";
model.appendChild(vag9);
var vag10= document.createElement('option');
vag10.textContent="EOS";
model.appendChild(vag10);
var vag11= document.createElement('option');
vag11.textContent="Fox";
model.appendChild(vag11);
var vag12= document.createElement('option');
vag12.textContent="Golf 1";
model.appendChild(vag12);
var vag13= document.createElement('option');
vag13.textContent="Golf 2";
model.appendChild(vag13);
var vag14= document.createElement('option');
vag14.textContent="Golf 3";
model.appendChild(vag14);
var vag15= document.createElement('option');
vag15.textContent="Golf 4";
model.appendChild(vag15);
var vag16= document.createElement('option');
vag16.textContent="Golf 5";
model.appendChild(vag16);
var vag17= document.createElement('option');
vag17.textContent="Golf 6";
model.appendChild(vag17);
var vag18= document.createElement('option');
vag18.textContent="Golf 7";
model.appendChild(vag18);
var vag19= document.createElement('option');
vag19.textContent="Golf Plus";
model.appendChild(vag19);
var vag20= document.createElement('option');
vag20.textContent="Golf Sportsvan";
model.appendChild(vag20);
var vag21= document.createElement('option');
vag21.textContent="Jetta";
model.appendChild(vag21);
var vag22= document.createElement('option');
vag22.textContent="Lupo";
model.appendChild(vag22);
var vag23= document.createElement('option');
vag23.textContent="Passat B1";
model.appendChild(vag23);
var vag24= document.createElement('option');
vag24.textContent="Passat B2";
model.appendChild(vag24);
var vag25= document.createElement('option');
vag25.textContent="Passat B3";
model.appendChild(vag25);
var vag26= document.createElement('option');
vag26.textContent="Passat B4";
model.appendChild(vag26);
var vag27= document.createElement('option');
vag27.textContent="Passat B5";
model.appendChild(vag27);
var vag28= document.createElement('option');
vag28.textContent="Passat B5.5";
model.appendChild(vag28);
var vag29= document.createElement('option');
vag29.textContent="Passat B6";
model.appendChild(vag29);
var vag30= document.createElement('option');
vag30.textContent="Passat B7";
model.appendChild(vag30);
var vag31= document.createElement('option');
vag31.textContent="Passat B8";
model.appendChild(vag31);
var vag32= document.createElement('option');
vag32.textContent="Passat CC";
model.appendChild(vag32);
var vag33= document.createElement('option');
vag33.textContent="Phaeton";
model.appendChild(vag33);
var vag34= document.createElement('option');
vag34.textContent="Polo";
model.appendChild(vag34);
var vag35= document.createElement('option');
vag35.textContent="Scirocco";
model.appendChild(vag35);
var vag36= document.createElement('option');
vag36.textContent="Sharan";
model.appendChild(vag36);
var vag37= document.createElement('option');
vag37.textContent="T-roc";
model.appendChild(vag37);
var vag38= document.createElement('option');
vag38.textContent="Tiguan";
model.appendChild(vag38);
var vag39= document.createElement('option');
vag39.textContent="Tuareg";
model.appendChild(vag39);
var vag40= document.createElement('option');
vag40.textContent="Touran";
model.appendChild(vag40);
var vag41= document.createElement('option');
vag41.textContent="UP";
model.appendChild(vag41);
var vag42= document.createElement('option');
vag42.textContent="Vento";
model.appendChild(vag42);

}


else if(marka.value==="Alfa Romeo"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var alfa= document.createElement('option');
alfa.textContent="33";
model.appendChild(alfa);
var alfa1= document.createElement('option');
alfa1.textContent="75";
model.appendChild(alfa1);
var alfa2= document.createElement('option');
alfa2.textContent="145";
model.appendChild(alfa2);
var alfa3= document.createElement('option');
alfa3.textContent="146";
model.appendChild(alfa3);
var alfa4= document.createElement('option');
alfa4.textContent="147";
model.appendChild(alfa4);
var alfa5= document.createElement('option');
alfa5.textContent="155";
model.appendChild(alfa5);
var alfa18= document.createElement('option');
alfa18.textContent="156";
model.appendChild(alfa18);
var alfa6= document.createElement('option');
alfa6.textContent="156 crosswagon";
model.appendChild(alfa6);
var alfa7= document.createElement('option');
alfa7.textContent="159";
model.appendChild(alfa7);
var alfa8= document.createElement('option');
alfa8.textContent="164";
model.appendChild(alfa8);
var alfa9= document.createElement('option');
alfa9.textContent="166";
model.appendChild(alfa9);
var alfa10= document.createElement('option');
alfa10.textContent="Brera";
model.appendChild(alfa10);
var alfa11= document.createElement('option');
alfa11.textContent="Giulia";
model.appendChild(alfa11);
var alfa12= document.createElement('option');
alfa12.textContent="Giulietta";
model.appendChild(alfa12);
var alfa13= document.createElement('option');
alfa13.textContent="GT";
model.appendChild(alfa13);
var alfa13= document.createElement('option');
alfa13.textContent="GTV";
model.appendChild(alfa13);
var alfa14= document.createElement('option');
alfa14.textContent="MiTo";
model.appendChild(alfa14);
var alfa15= document.createElement('option');
alfa15.textContent="Spider";
model.appendChild(alfa15);
var alfa16= document.createElement('option');
alfa16.textContent="Sprint";
model.appendChild(alfa16);
var alfa17= document.createElement('option');
alfa17.textContent="Stelvio";
model.appendChild(alfa17);

}


else if(marka.value==="Aston Martin"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var aston= document.createElement('option');
aston.textContent="DB 2";
model.appendChild(aston);
var aston1= document.createElement('option');
aston1.textContent="DB 3";
model.appendChild(aston1);
var aston2= document.createElement('option');
aston2.textContent="DB 4";
model.appendChild(aston2);
var aston3= document.createElement('option');
aston3.textContent="DB 4 ZAGATO";
model.appendChild(aston3);
var aston4= document.createElement('option');
aston4.textContent="DB 5";
model.appendChild(aston4);
var aston5= document.createElement('option');
aston5.textContent="DB 6";
model.appendChild(aston5);
var aston6= document.createElement('option');
aston6.textContent="DBS";
model.appendChild(aston6);
var aston7= document.createElement('option');
aston7.textContent="AMV 8";
model.appendChild(aston7);
var aston8= document.createElement('option');
aston8.textContent="Lagonda";
model.appendChild(aston8);
var aston9= document.createElement('option');
aston9.textContent="V8 vintage";
model.appendChild(aston9);
var aston10= document.createElement('option');
aston10.textContent="V8 virage";
model.appendChild(aston10);
var aston11= document.createElement('option');
aston11.textContent="DB 7";
model.appendChild(aston11);
var aston12= document.createElement('option');
aston12.textContent="DB 7 vantage";
model.appendChild(aston12);
var aston13= document.createElement('option');
aston13.textContent="V12 vanquish";
model.appendChild(aston13);
var aston14= document.createElement('option');
aston14.textContent="DB 7 ZAGATO";
model.appendChild(aston14);
var aston15= document.createElement('option');
aston15.textContent="DBS coupe";
model.appendChild(aston15);
var aston16= document.createElement('option');
aston16.textContent="DBS volante";
model.appendChild(aston16);
var aston17= document.createElement('option');
aston17.textContent="ONE 77";
model.appendChild(aston17);
var aston18= document.createElement('option');
aston18.textContent="Virage";
model.appendChild(aston18);
var aston19= document.createElement('option');
aston19.textContent="V12 ZAGATO";
model.appendChild(aston19);
var aston20= document.createElement('option');
aston20.textContent="Cygnet";
model.appendChild(aston20);
var aston21= document.createElement('option');
aston21.textContent="CC100";
model.appendChild(aston21);
var aston22= document.createElement('option');
aston22.textContent="Vantage GT 4";
model.appendChild(aston22);
var aston23= document.createElement('option');
aston23.textContent="DBS superleggera";
model.appendChild(aston23);
var aston24= document.createElement('option');
aston24.textContent="DB11 AMR";
model.appendChild(aston24);
}



else if(marka.value==="Buick"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var bu= document.createElement('option');
bu.textContent="-";
model.appendChild(bu);
}



else if(marka.value==="Bentley"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var ben= document.createElement('option');
ben.textContent="Continental";
model.appendChild(ben);
var ben1= document.createElement('option');
ben1.textContent="Bentayga";
model.appendChild(ben1);
var ben2= document.createElement('option');
ben2.textContent="Flying Spur";
model.appendChild(ben2);
var ben3= document.createElement('option');
ben3.textContent="The Arnage Range";
model.appendChild(ben3);
var ben4= document.createElement('option');
ben4.textContent="Azure";
model.appendChild(ben4);
var ben5= document.createElement('option');
ben5.textContent="Brookland";
model.appendChild(ben5);
var ben6= document.createElement('option');
ben6.textContent="CONTINENTAL GT3";
model.appendChild(ben6);
var ben7= document.createElement('option');
ben7.textContent="Continental Supersports";
model.appendChild(ben7);
var ben8= document.createElement('option');
ben8.textContent="Mulsane";
model.appendChild(ben8);
}


else if(marka.value==="Chery"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var che= document.createElement('option');
che.textContent="Ego";
model.appendChild(che);
var che1= document.createElement('option');
che1.textContent="Tengo";
model.appendChild(che1);
var che2= document.createElement('option');
che2.textContent="Tiggo";
model.appendChild(che2);
}


else if(marka.value==="Cadilac"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var cadilac= document.createElement('option');
    cadilac.textContent="Calais";
model.appendChild(cadilac);
var cadilac1= document.createElement('option');
cadilac1.textContent="DeVille/Coupe de Ville ";
model.appendChild(cadilac1);
var cadilac2= document.createElement('option');
cadilac2.textContent="Fleetwood";
model.appendChild(cadilac2);
var cadilac3= document.createElement('option');
cadilac3.textContent="Eldorado ";
model.appendChild(cadilac3);
var cadilac4= document.createElement('option');
cadilac4.textContent="Cimarron";
model.appendChild(cadilac4);
var cadilac5= document.createElement('option');
cadilac5.textContent="Allanté ";
model.appendChild(cadilac5);
var cadilac6= document.createElement('option');
cadilac6.textContent="Brougham";
model.appendChild(cadilac6);
var cadilac7= document.createElement('option');
cadilac7.textContent="Escalade";
model.appendChild(cadilac7);
var cadilac8= document.createElement('option');
cadilac8.textContent="CTS";
model.appendChild(cadilac8);
var cadilac9= document.createElement('option');
cadilac9.textContent="SRX";
model.appendChild(cadilac9);
var cadilac10= document.createElement('option');
cadilac10.textContent="XLR";
model.appendChild(cadilac10);
var cadilac11= document.createElement('option');
cadilac11.textContent="CT6";
model.appendChild(cadilac11);
var cadilac12= document.createElement('option');
cadilac12.textContent="XT5";
model.appendChild(cadilac12);
var cadilac13= document.createElement('option');
cadilac13.textContent="XT4";
model.appendChild(cadilac13);
var cadilac14= document.createElement('option');
cadilac14.textContent="CT4";
model.appendChild(cadilac14);
var cadilac15= document.createElement('option');
cadilac15.textContent="CT5 ";
model.appendChild(cadilac15);
var cadilac16= document.createElement('option');
cadilac16.textContent="XT6 ";
model.appendChild(cadilac16);
var cadilac17= document.createElement('option');
cadilac17.textContent="CTS-V Coupe";
model.appendChild(cadilac17);
var cadilac18= document.createElement('option');
cadilac18.textContent="CTS-V Sport Wagon";
model.appendChild(cadilac18);

}



else if(marka.value==="Chevrolet"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Chevrolet= document.createElement('option');
    Chevrolet.textContent="Aveo";
model.appendChild(Chevrolet);   
var Chevrolet1= document.createElement('option');
Chevrolet1.textContent="Blazer";
model.appendChild(Chevrolet1);
var Chevrolet2= document.createElement('option');
Chevrolet2.textContent="Caprice";
model.appendChild(Chevrolet2);
var Chevrolet3= document.createElement('option');
Chevrolet3.textContent="Captiva";
model.appendChild(Chevrolet3);
var Chevrolet4= document.createElement('option');
Chevrolet4.textContent="Sorsica";
model.appendChild(Chevrolet4);
var Chevrolet5= document.createElement('option');
Chevrolet5.textContent="Corvette";
model.appendChild(Chevrolet5);
var Chevrolet6= document.createElement('option');
Chevrolet6.textContent="Cruze";
model.appendChild(Chevrolet6);
var Chevrolet7= document.createElement('option');
Chevrolet7.textContent="Epica";
model.appendChild(Chevrolet7);
var Chevrolet8= document.createElement('option');
Chevrolet8.textContent="Evanda";
model.appendChild(Chevrolet8);
var Chevrolet9= document.createElement('option');
Chevrolet9.textContent="Impala";
model.appendChild(Chevrolet9);
var Chevrolet10= document.createElement('option');
Chevrolet10.textContent="Kalos";
model.appendChild(Chevrolet10);
var Chevrolet11= document.createElement('option');
Chevrolet11.textContent="Lacetti";
model.appendChild(Chevrolet11);
var Chevrolet12= document.createElement('option');
Chevrolet12.textContent="Lumina";
model.appendChild(Chevrolet12);
var Chevrolet13= document.createElement('option');
Chevrolet13.textContent="Matiz";
model.appendChild(Chevrolet13);
var Chevrolet14= document.createElement('option');
Chevrolet14.textContent="Nubira";
model.appendChild(Chevrolet14);
var Chevrolet15= document.createElement('option');
Chevrolet15.textContent="Orlando";
model.appendChild(Chevrolet15);
var Chevrolet16= document.createElement('option');
Chevrolet16.textContent="Spark";
model.appendChild(Chevrolet16);
var Chevrolet17= document.createElement('option');
Chevrolet17.textContent="Tacuma";
model.appendChild(Chevrolet17);
var Chevrolet18= document.createElement('option');
Chevrolet18.textContent="Tahoe";
model.appendChild(Chevrolet18);
var Chevrolet19= document.createElement('option');
Chevrolet19.textContent="Trailblazer";
model.appendChild(Chevrolet19);
var Chevrolet20= document.createElement('option');
Chevrolet20.textContent="Trax";
model.appendChild(Chevrolet20);
}



else if(marka.value==="Chrysler"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Chrysler= document.createElement('option');
    Chrysler.textContent="300 M";
model.appendChild(Chrysler);
var Chrysler1= document.createElement('option');
Chrysler1.textContent="300 C";
model.appendChild(Chrysler1);
var Chrysler2= document.createElement('option');
Chrysler2.textContent="Crossfire";
model.appendChild(Chrysler2);
var Chrysler3= document.createElement('option');
Chrysler3.textContent="Grand Voyager";
model.appendChild(Chrysler3);
var Chrysler4= document.createElement('option');
Chrysler4.textContent="Le Baron";
model.appendChild(Chrysler4);
var Chrysler5= document.createElement('option');
Chrysler5.textContent="Neon";
model.appendChild(Chrysler5);
var Chrysler6= document.createElement('option');
Chrysler6.textContent="Pacifica";
model.appendChild(Chrysler6);
var Chrysler7= document.createElement('option');
Chrysler7.textContent="PT cruiser";
model.appendChild(Chrysler7);
var Chrysler8= document.createElement('option');
Chrysler8.textContent="Sebring";
model.appendChild(Chrysler8);
var Chrysler9= document.createElement('option');
Chrysler9.textContent="Stratus";
model.appendChild(Chrysler9);
var Chrysler10= document.createElement('option');
Chrysler10.textContent="Sunbeam";
model.appendChild(Chrysler10);
var Chrysler11= document.createElement('option');
Chrysler11.textContent="Town and Country";
model.appendChild(Chrysler11);
var Chrysler12= document.createElement('option');
Chrysler12.textContent="Voyager";
model.appendChild(Chrysler12);
}



else if(marka.value==="Citroen"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Citroen= document.createElement('option');
    Citroen.textContent="2CV";
model.appendChild(Citroen);
var Citroen1= document.createElement('option');
    Citroen1.textContent="AMI";
model.appendChild(Citroen1);
var Citroen2= document.createElement('option');
    Citroen2.textContent="AX";
model.appendChild(Citroen2);
var Citroen3= document.createElement('option');
    Citroen3.textContent="Berlingo";
model.appendChild(Citroen3);
var Citroen4= document.createElement('option');
    Citroen4.textContent="BX";
model.appendChild(Citroen4);
var Citroen5= document.createElement('option');
    Citroen5.textContent="C-crosser";
model.appendChild(Citroen5);
var Citroen6= document.createElement('option');
    Citroen6.textContent="C-Elysee";
model.appendChild(Citroen6);
var Citroen7= document.createElement('option');
    Citroen7.textContent="C1";
model.appendChild(Citroen7);
var Citroen8= document.createElement('option');
    Citroen8.textContent="C2";
model.appendChild(Citroen8);
var Citroen9= document.createElement('option');
    Citroen9.textContent="C3";
model.appendChild(Citroen9);
var Citroen10= document.createElement('option');
    Citroen10.textContent="C3 Aircross";
model.appendChild(Citroen10);
var Citroen11= document.createElement('option');
    Citroen11.textContent="C3 Picasso";
model.appendChild(Citroen11);
var Citroen12= document.createElement('option');
    Citroen12.textContent="C3 Pluriel";
model.appendChild(Citroen12);
var Citroen13= document.createElement('option');
    Citroen13.textContent="C4";
model.appendChild(Citroen13);
var Citroen14= document.createElement('option');
    Citroen14.textContent="C4 Aircross";
model.appendChild(Citroen14);
var Citroen15= document.createElement('option');
    Citroen15.textContent="C4 Cactus";
model.appendChild(Citroen15);
var Citroen16= document.createElement('option');
    Citroen16.textContent="C4 Grand Picasso";
model.appendChild(Citroen16);
var Citroen17= document.createElement('option');
    Citroen17.textContent="C4 Picasso";
model.appendChild(Citroen17);
var Citroen18= document.createElement('option');
    Citroen18.textContent="C4 Space Tourer";
model.appendChild(Citroen18);
var Citroen19= document.createElement('option');
    Citroen19.textContent="C5";
model.appendChild(Citroen19);
var Citroen20= document.createElement('option');
    Citroen20.textContent="C5 Aircross";
model.appendChild(Citroen20);
var Citroen21= document.createElement('option');
    Citroen21.textContent="C6";
model.appendChild(Citroen21);
var Citroen21= document.createElement('option');
    Citroen21.textContent="C8";
model.appendChild(Citroen21);
var Citroen22= document.createElement('option');
    Citroen22.textContent="C15";
model.appendChild(Citroen22);
var Citroen23= document.createElement('option');
    Citroen23.textContent="DS";
model.appendChild(Citroen23);
var Citroen24= document.createElement('option');
    Citroen24.textContent="DS3";
model.appendChild(Citroen24);
var Citroen25= document.createElement('option');
    Citroen25.textContent="DS4";
model.appendChild(Citroen25);
var Citroen26= document.createElement('option');
    Citroen26.textContent="DS5";
model.appendChild(Citroen26);
var Citroen27= document.createElement('option');
    Citroen27.textContent="DS7";
model.appendChild(Citroen27);
var Citroen28= document.createElement('option');
    Citroen28.textContent="Dyane";
model.appendChild(Citroen28);
var Citroen29= document.createElement('option');
    Citroen29.textContent="Evason";
model.appendChild(Citroen29);
var Citroen30= document.createElement('option');
    Citroen30.textContent="Gs";
model.appendChild(Citroen30);
var Citroen31= document.createElement('option');
    Citroen31.textContent="Jumpy";
model.appendChild(Citroen31);
var Citroen32= document.createElement('option');
    Citroen32.textContent="Nemo";
model.appendChild(Citroen32);
var Citroen33= document.createElement('option');
    Citroen33.textContent="Saxo";
model.appendChild(Citroen33);
var Citroen34= document.createElement('option');
    Citroen34.textContent="Visa";
model.appendChild(Citroen34);
var Citroen35= document.createElement('option');
    Citroen35.textContent="Xantia";
model.appendChild(Citroen35);
var Citroen36= document.createElement('option');
    Citroen36.textContent="XM";
model.appendChild(Citroen36);
var Citroen37= document.createElement('option');
    Citroen37.textContent="Xsara";
model.appendChild(Citroen37);
var Citroen38= document.createElement('option');
    Citroen38.textContent="Xsara Picaso";
model.appendChild(Citroen38);
var Citroen39= document.createElement('option');
    Citroen39.textContent="ZX";
model.appendChild(Citroen39);

}



else if(marka.value==="Dacia"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Dacia= document.createElement('option');
    Dacia.textContent="Dokker";
model.appendChild(Dacia);
var Dacia1= document.createElement('option');
Dacia1.textContent="Double";
model.appendChild(Dacia1);
var Dacia2= document.createElement('option');
Dacia2.textContent="Duster";
model.appendChild(Dacia2);
var Dacia3= document.createElement('option');
Dacia3.textContent="Lodgy";
model.appendChild(Dacia3);
var Dacia4= document.createElement('option');
Dacia4.textContent="Logan";
model.appendChild(Dacia4);
var Dacia5= document.createElement('option');
Dacia5.textContent="Nova";
model.appendChild(Dacia5);
var Dacia6= document.createElement('option');
Dacia6.textContent="Pickup";
model.appendChild(Dacia6);
var Dacia7= document.createElement('option');
Dacia7.textContent="Sandero";
model.appendChild(Dacia7);
var Dacia8= document.createElement('option');
Dacia8.textContent="Solenza";
model.appendChild(Dacia8);
var Dacia9= document.createElement('option');
Dacia9.textContent="Stepway";
model.appendChild(Dacia9);
var Dacia10= document.createElement('option');
Dacia10.textContent="Super Nova";
model.appendChild(Dacia10);

}


else if(marka.value==="Daewu"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Daewu= document.createElement('option');
    Daewu.textContent="Espero";
model.appendChild(Daewu);
var Daewu1= document.createElement('option');
    Daewu1.textContent="Evanda";
model.appendChild(Daewu1);
var Daewu2= document.createElement('option');
    Daewu2.textContent="Kalos";
model.appendChild(Daewu2);
var Daewu3= document.createElement('option');
    Daewu3.textContent="Lacetti";
model.appendChild(Daewu3);
var Daewu4= document.createElement('option');
    Daewu4.textContent="lanos";
model.appendChild(Daewu4);
var Daewu5= document.createElement('option');
    Daewu5.textContent="Leganza";
model.appendChild(Daewu5);
var Daewu6= document.createElement('option');
    Daewu6.textContent="Matiz";
model.appendChild(Daewu6);
var Daewu7= document.createElement('option');
    Daewu7.textContent="Nexia";
model.appendChild(Daewu7);
var Daewu8= document.createElement('option');
    Daewu8.textContent="Nubira";
model.appendChild(Daewu8);
var Daewu9= document.createElement('option');
    Daewu9.textContent="Tacuma";
model.appendChild(Daewu9);
var Daewu10= document.createElement('option');
    Daewu10.textContent="Tico";
model.appendChild(Daewu10);
}


else if(marka.value==="Daihatsu"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Daihatsu= document.createElement('option');
    Daihatsu.textContent="Charade";
model.appendChild(Daihatsu);
var Daihatsu1= document.createElement('option');
    Daihatsu1.textContent="Cuore";
model.appendChild(Daihatsu1);
var Daihatsu2= document.createElement('option');
    Daihatsu2.textContent="Feroza";
model.appendChild(Daihatsu2);
var Daihatsu3= document.createElement('option');
    Daihatsu3.textContent="Gran Move";
model.appendChild(Daihatsu3);
var Daihatsu4= document.createElement('option');
    Daihatsu4.textContent="Materia";
model.appendChild(Daihatsu4);
var Daihatsu5= document.createElement('option');
    Daihatsu5.textContent="Move";
model.appendChild(Daihatsu5);
var Daihatsu6= document.createElement('option');
    Daihatsu6.textContent="Rocky";
model.appendChild(Daihatsu6);
var Daihatsu7= document.createElement('option');
    Daihatsu7.textContent="Sirion";
model.appendChild(Daihatsu7);
var Daihatsu8= document.createElement('option');
    Daihatsu8.textContent="Terios";
model.appendChild(Daihatsu8);
var Daihatsu9= document.createElement('option');
    Daihatsu9.textContent="Trevis";
model.appendChild(Daihatsu9);
var Daihatsu10= document.createElement('option');
    Daihatsu10.textContent="YRV";
model.appendChild(Daihatsu10);
}




else if(marka.value==="Dodge"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Dodge= document.createElement('option');
    Dodge.textContent="Avenger";
model.appendChild(Dodge);
var Dodge1= document.createElement('option');
    Dodge1.textContent="Caliber";
model.appendChild(Dodge1);
var Dodge2= document.createElement('option');
    Dodge2.textContent="Grand Caravan";
model.appendChild(Dodge2);
var Dodge3= document.createElement('option');
    Dodge3.textContent="Interpid";
model.appendChild(Dodge3);
var Dodge4= document.createElement('option');
    Dodge4.textContent="journey";
model.appendChild(Dodge4);
var Dodge5= document.createElement('option');
    Dodge5.textContent="Nitro";
model.appendChild(Dodge5);
var Dodge6= document.createElement('option');
    Dodge6.textContent="Ram";
model.appendChild(Dodge6);
var Dodge7= document.createElement('option');
    Dodge7.textContent="Stratus";
model.appendChild(Dodge7);
var Dodge8= document.createElement('option');
    Dodge8.textContent="Vyper";
model.appendChild(Dodge8);
}


else if(marka.value==="Ferrari"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Ferrar= document.createElement('option');
    Ferrar.textContent="812 Superfast";
model.appendChild(Ferrar);
var Ferrar1= document.createElement('option');
    Ferrar1.textContent="Sf90 Stradale";
model.appendChild(Ferrar1);
var Ferrar2= document.createElement('option');
    Ferrar2.textContent="F8 Tributo";
model.appendChild(Ferrar2);
var Ferrar3= document.createElement('option');
    Ferrar3.textContent="488";
model.appendChild(Ferrar3);
var Ferrar4= document.createElement('option');
    Ferrar4.textContent="599";
model.appendChild(Ferrar4);
var Ferrar5= document.createElement('option');
    Ferrar5.textContent="GTC4 lusso";
model.appendChild(Ferrar5);
var Ferrar6= document.createElement('option');
    Ferrar6.textContent="Portofino";
model.appendChild(Ferrar6);
var Ferrar7= document.createElement('option');
    Ferrar7.textContent="458";
model.appendChild(Ferrar7);
var Ferrar8= document.createElement('option');
    Ferrar8.textContent="F12";
model.appendChild(Ferrar8);
var Ferrar9= document.createElement('option');
    Ferrar9.textContent="Ferrari California T";
model.appendChild(Ferrar9);
var Ferrar10= document.createElement('option');
    Ferrar10.textContent="360";
model.appendChild(Ferrar10);

var Ferrar11= document.createElement('option');
    Ferrar11.textContent="550";
model.appendChild(Ferrar11);
var Ferrar12= document.createElement('option');
    Ferrar12.textContent="575";
model.appendChild(Ferrar12);
var Ferrar13= document.createElement('option');
    Ferrar13.textContent="612";
model.appendChild(Ferrar13);
var Ferrar14= document.createElement('option');
    Ferrar14.textContent="F430";
model.appendChild(Ferrar14);
var Ferrar15= document.createElement('option');
    Ferrar15.textContent="Scuderia Spider";
model.appendChild(Ferrar15);
var Ferrar16= document.createElement('option');
    Ferrar16.textContent="FXX";
model.appendChild(Ferrar16);
var Ferrar17= document.createElement('option');
    Ferrar17.textContent="Scuderia Spider";
model.appendChild(Ferrar17);
var Ferrar18= document.createElement('option');
    Ferrar18.textContent="512";
model.appendChild(Ferrar18);
var Ferrar19= document.createElement('option');
    Ferrar19.textContent="456";
model.appendChild(Ferrar19);
var Ferrar20= document.createElement('option');
    Ferrar20.textContent="348";
model.appendChild(Ferrar20);
var Ferrar21= document.createElement('option');
    Ferrar21.textContent="F355";
model.appendChild(Ferrar21);
var Ferrar22= document.createElement('option');
    Ferrar22.textContent="F333";
model.appendChild(Ferrar22);
var Ferrar23= document.createElement('option');
    Ferrar23.textContent="Mondial 8";
model.appendChild(Ferrar23);
var Ferrar24= document.createElement('option');
    Ferrar24.textContent="208";
model.appendChild(Ferrar24);
var Ferrar25= document.createElement('option');
    Ferrar25.textContent="308";
model.appendChild(Ferrar25);
var Ferrar26= document.createElement('option');
    Ferrar26.textContent="Testarossa";
model.appendChild(Ferrar26);
var Ferrar27= document.createElement('option');
    Ferrar27.textContent="412";
model.appendChild(Ferrar27);
var Ferrar28= document.createElement('option');
    Ferrar28.textContent="F40";
model.appendChild(Ferrar28);
var Ferrar29= document.createElement('option');
    Ferrar29.textContent="408";
model.appendChild(Ferrar29);
var Ferrar30= document.createElement('option');
    Ferrar30.textContent="348";
model.appendChild(Ferrar30);
var Ferrar31= document.createElement('option');
    Ferrar31.textContent="Dino";
model.appendChild(Ferrar31);
var Ferrar32= document.createElement('option');
    Ferrar32.textContent="400";
model.appendChild(Ferrar32);
var Ferrar33= document.createElement('option');
    Ferrar33.textContent="712";
model.appendChild(Ferrar33);
var Ferrar34= document.createElement('option');
    Ferrar34.textContent="365";
model.appendChild(Ferrar34);
var Ferrar35= document.createElement('option');
    Ferrar35.textContent="312";
model.appendChild(Ferrar35);
var Ferrar36= document.createElement('option');
    Ferrar36.textContent="250";
model.appendChild(Ferrar36);
var Ferrar37= document.createElement('option');
    Ferrar37.textContent="196";
model.appendChild(Ferrar37);
var Ferrar38= document.createElement('option');
    Ferrar38.textContent="246";
model.appendChild(Ferrar38);
var Ferrar39= document.createElement('option');
    Ferrar39.textContent="248";
model.appendChild(Ferrar39);
var Ferrar40= document.createElement('option');
    Ferrar40.textContent="268";
model.appendChild(Ferrar40);
var Ferrar41= document.createElement('option');
    Ferrar41.textContent="330";
model.appendChild(Ferrar41);
var Ferrar42= document.createElement('option');
    Ferrar42.textContent="286";
model.appendChild(Ferrar42);
var Ferrar43= document.createElement('option');
    Ferrar43.textContent="500";
model.appendChild(Ferrar43);
var Ferrar44= document.createElement('option');
    Ferrar44.textContent="275";
model.appendChild(Ferrar44);
}


else if(marka.value==="Fiat"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Fiat= document.createElement('option');
    Fiat.textContent="124";
model.appendChild(Fiat);
var Fiat1= document.createElement('option');
Fiat1.textContent="125";
model.appendChild(Fiat1);
var Fiat2= document.createElement('option');
Fiat2.textContent="126";
model.appendChild(Fiat2);
var Fiat3= document.createElement('option');
Fiat3.textContent="127";
model.appendChild(Fiat3);
var Fiat4= document.createElement('option');
Fiat4.textContent="131";
model.appendChild(Fiat4);
var Fiat5= document.createElement('option');
Fiat5.textContent="132";
model.appendChild(Fiat5);
var Fiat6= document.createElement('option');
Fiat6.textContent="500";
model.appendChild(Fiat6);
var Fiat7= document.createElement('option');
Fiat7.textContent="500C";
model.appendChild(Fiat7);
var Fiat8= document.createElement('option');
Fiat8.textContent="500L";
model.appendChild(Fiat8);
var Fiat9= document.createElement('option');
Fiat9.textContent="500X";
model.appendChild(Fiat9);
var Fiat10= document.createElement('option');
Fiat10.textContent="600";
model.appendChild(Fiat10);
var Fiat11= document.createElement('option');
Fiat11.textContent="850";
model.appendChild(Fiat11);
var Fiat12= document.createElement('option');
Fiat12.textContent="1100";
model.appendChild(Fiat12);
var Fiat13= document.createElement('option');
Fiat13.textContent="1107";
model.appendChild(Fiat13);
var Fiat14= document.createElement('option');
Fiat14.textContent="1300";
model.appendChild(Fiat14);
var Fiat15= document.createElement('option');
Fiat15.textContent="Albea";
model.appendChild(Fiat15);
var Fiat16= document.createElement('option');
Fiat16.textContent="Barchetta";
model.appendChild(Fiat16);
var Fiat17= document.createElement('option');
Fiat17.textContent="Brava";
model.appendChild(Fiat17);
var Fiat18= document.createElement('option');
Fiat18.textContent="Bravo";
model.appendChild(Fiat18);
var Fiat19= document.createElement('option');
Fiat19.textContent="Campagnola";
model.appendChild(Fiat19);
var Fiat20= document.createElement('option');
Fiat20.textContent="Cinquencento";
model.appendChild(Fiat20);
var Fiat21= document.createElement('option');
Fiat21.textContent="Coupe";
model.appendChild(Fiat21);
var Fiat22= document.createElement('option');
Fiat22.textContent="Croma";
model.appendChild(Fiat22);
var Fiat23= document.createElement('option');
Fiat23.textContent="Doblo";
model.appendChild(Fiat23);
var Fiat24= document.createElement('option');
Fiat24.textContent="EVO";
model.appendChild(Fiat24);
var Fiat25= document.createElement('option');
Fiat25.textContent="Fiorino";
model.appendChild(Fiat25);
var Fiat26= document.createElement('option');
Fiat26.textContent="Freemont";
model.appendChild(Fiat26);
var Fiat27= document.createElement('option');
Fiat27.textContent="Grande Punto";
model.appendChild(Fiat27);
var Fiat28= document.createElement('option');
Fiat28.textContent="Idea";
model.appendChild(Fiat28);
var Fiat29= document.createElement('option');
Fiat29.textContent="Linea";
model.appendChild(Fiat29);
var Fiat30= document.createElement('option');
Fiat30.textContent="Marea";
model.appendChild(Fiat30);
var Fiat31= document.createElement('option');
Fiat31.textContent="Multipla";
model.appendChild(Fiat31);
var Fiat32= document.createElement('option');
Fiat32.textContent="Palio";
model.appendChild(Fiat32);
var Fiat33= document.createElement('option');
Fiat33.textContent="Panda";
model.appendChild(Fiat33);
var Fiat34= document.createElement('option');
Fiat34.textContent="Punto";
model.appendChild(Fiat34);
var Fiat35= document.createElement('option');
Fiat35.textContent="Quobo";
model.appendChild(Fiat35);
var Fiat36= document.createElement('option');
Fiat36.textContent="Regata";
model.appendChild(Fiat36);
var Fiat37= document.createElement('option');
Fiat37.textContent="Scudo";
model.appendChild(Fiat37);
var Fiat38= document.createElement('option');
Fiat38.textContent="Seduci";
model.appendChild(Fiat38);
var Fiat39= document.createElement('option');
Fiat39.textContent="Seicento";
model.appendChild(Fiat39);
var Fiat40= document.createElement('option');
Fiat40.textContent="Spider Europa";
model.appendChild(Fiat40);
var Fiat41= document.createElement('option');
Fiat41.textContent="Stilo";
model.appendChild(Fiat41);
var Fiat42= document.createElement('option');
Fiat42.textContent="Strada";
model.appendChild(Fiat42);
var Fiat43= document.createElement('option');
Fiat43.textContent="Tempra";
model.appendChild(Fiat43);
var Fiat44= document.createElement('option');
Fiat44.textContent="Tipo";
model.appendChild(Fiat44);
var Fiat45= document.createElement('option');
Fiat45.textContent="Ulysse";
model.appendChild(Fiat45);
var Fiat46= document.createElement('option');
Fiat46.textContent="Uno";
model.appendChild(Fiat46);
var Fiat47= document.createElement('option');
Fiat47.textContent="X1/9";
model.appendChild(Fiat47);

}



else if(marka.value==="Ford"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Ford= document.createElement('option');
    Ford.textContent="Aerostar";
model.appendChild(Ford);
var Ford1= document.createElement('option');
Ford1.textContent="B-MAX";
model.appendChild(Ford1);
var Ford2= document.createElement('option');
Ford2.textContent="C-MAX";
model.appendChild(Ford2);
var Ford3= document.createElement('option');
Ford3.textContent="Capri";
model.appendChild(Ford3);
var Ford4= document.createElement('option');
Ford4.textContent="Courier";
model.appendChild(Ford4);
var Ford5= document.createElement('option');
Ford5.textContent="Eco Sport";
model.appendChild(Ford5);
var Ford6= document.createElement('option');
Ford6.textContent="Edge";
model.appendChild(Ford6);
var Ford7= document.createElement('option');
Ford7.textContent="Escort";
model.appendChild(Ford7);
var Ford8= document.createElement('option');
Ford8.textContent="Excursion";
model.appendChild(Ford8);
var Ford9= document.createElement('option');
Ford9.textContent="Expedition";
model.appendChild(Ford9);
var Ford10= document.createElement('option');
Ford10.textContent="Explorer";
model.appendChild(Ford10);
var Ford11= document.createElement('option');
Ford11.textContent="F 150";
model.appendChild(Ford11);
var Ford12= document.createElement('option');
Ford12.textContent="Festiva";
model.appendChild(Ford12);
var Ford13= document.createElement('option');
Ford13.textContent="Fiesta";
model.appendChild(Ford13);
var Ford14= document.createElement('option');
Ford14.textContent="Focus";
model.appendChild(Ford14);
var Ford15= document.createElement('option');
Ford15.textContent="Fusion";
model.appendChild(Ford15);
var Ford16= document.createElement('option');
Ford16.textContent="Galaxy";
model.appendChild(Ford16);
var Ford17= document.createElement('option');
Ford17.textContent="Grand C-max";
model.appendChild(Ford17);
var Ford18= document.createElement('option');
Ford18.textContent="Ka";
model.appendChild(Ford18);
var Ford19= document.createElement('option');
Ford19.textContent="Kuga";
model.appendChild(Ford19);
var Ford20= document.createElement('option');
Ford20.textContent="Maverick";
model.appendChild(Ford20);
var Ford21= document.createElement('option');
Ford21.textContent="Mondeo";
model.appendChild(Ford21);
var Ford22= document.createElement('option');
Ford22.textContent="Mustang";
model.appendChild(Ford22);
var Ford23= document.createElement('option');
Ford23.textContent="Orion";
model.appendChild(Ford23);
var Ford24= document.createElement('option');
Ford24.textContent="Probe";
model.appendChild(Ford24);
var Ford25= document.createElement('option');
Ford25.textContent="Puma";
model.appendChild(Ford25);
var Ford26= document.createElement('option');
Ford26.textContent="Ranger";
model.appendChild(Ford26);
var Ford27= document.createElement('option');
Ford27.textContent="S-max";
model.appendChild(Ford27);
var Ford28= document.createElement('option');
Ford28.textContent="Scorpio";
model.appendChild(Ford28);
var Ford29= document.createElement('option');
Ford29.textContent="Sierra";
model.appendChild(Ford29);
var Ford30= document.createElement('option');
Ford30.textContent="Street Ka";
model.appendChild(Ford30);
var Ford31= document.createElement('option');
Ford31.textContent="Taunus";
model.appendChild(Ford31);
var Ford32= document.createElement('option');
Ford32.textContent="Taurus";
model.appendChild(Ford32);
var Ford33= document.createElement('option');
Ford33.textContent="Tourneo";
model.appendChild(Ford33);
var Ford34= document.createElement('option');
Ford34.textContent="Tourneo Connect";
model.appendChild(Ford34);
var Ford35= document.createElement('option');
Ford35.textContent="Tourneo Courier";
model.appendChild(Ford35);
}





else if(marka.value==="Gaz"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Gaz= document.createElement('option');
    Gaz.textContent="-";
model.appendChild(Gaz);
}



else if(marka.value==="Great Wall"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var GreatWall= document.createElement('option');
    GreatWall.textContent="h6";
model.appendChild(GreatWall);
var GreatWall1= document.createElement('option');
GreatWall1.textContent="Steed";
model.appendChild(GreatWall1);
var GreatWall2= document.createElement('option');
GreatWall2.textContent="Steed 5";
model.appendChild(GreatWall2);
}



else if(marka.value==="GMC"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var gmc= document.createElement('option');
gmc.textContent="Terrain";
model.appendChild(gmc);
var gmc1= document.createElement('option');
gmc1.textContent="Acadia";
model.appendChild(gmc1);
var gmc2= document.createElement('option');
gmc2.textContent="Yukon";
model.appendChild(gmc2);
var gmc3= document.createElement('option');
gmc3.textContent="Canyon";
model.appendChild(gmc3);
var gmc4= document.createElement('option');
gmc4.textContent="Sierra";
model.appendChild(gmc4);
}



else if(marka.value==="Honda"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Honda= document.createElement('option');
    Honda.textContent="Accord";
model.appendChild(Honda);
var Honda1= document.createElement('option');
    Honda1.textContent="Civic";
model.appendChild(Honda1);
var Honda2= document.createElement('option');
    Honda2.textContent="Concerto";
model.appendChild(Honda2);
var Honda3= document.createElement('option');
    Honda3.textContent="CR-V";
model.appendChild(Honda3);
var Honda4= document.createElement('option');
    Honda4.textContent="CR-Z";
model.appendChild(Honda4);
var Honda5= document.createElement('option');
    Honda5.textContent="CRX";
model.appendChild(Honda5);
var Honda6= document.createElement('option');
    Honda6.textContent="FR-V";
model.appendChild(Honda6);
var Honda7= document.createElement('option');
    Honda7.textContent="HR-V";
model.appendChild(Honda7);
var Honda8= document.createElement('option');
    Honda8.textContent="Insight";
model.appendChild(Honda8);
var Honda9= document.createElement('option');
    Honda9.textContent="Integra";
model.appendChild(Honda9);
var Honda10= document.createElement('option');
    Honda10.textContent="Jazz";
model.appendChild(Honda10);
var Honda11= document.createElement('option');
    Honda11.textContent="Legend";
model.appendChild(Honda11);
var Honda12= document.createElement('option');
    Honda12.textContent="Prelude";
model.appendChild(Honda12);
var Honda13= document.createElement('option');
    Honda13.textContent="Shuttle";
model.appendChild(Honda13);
var Honda14= document.createElement('option');
    Honda14.textContent="Stream";
model.appendChild(Honda14);

}
else if(marka.value==="Hummer"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Hummer= document.createElement('option');
    Hummer.textContent="H1";
model.appendChild(Hummer);
var Hummer1= document.createElement('option');
    Hummer1.textContent="H2";
model.appendChild(Hummer1);
var Hummer2= document.createElement('option');
    Hummer2.textContent="H3";
model.appendChild(Hummer2);
}



else if(marka.value==="Hyundai"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Hyundai= document.createElement('option');
    Hyundai.textContent="Accent";
model.appendChild(Hyundai);
var Hyundai1= document.createElement('option');
Hyundai1.textContent="Atos";
model.appendChild(Hyundai1);
var Hyundai2= document.createElement('option');
    Hyundai2.textContent="Coupe";
model.appendChild(Hyundai2);
var Hyundai3= document.createElement('option');
    Hyundai3.textContent="Elantra";
model.appendChild(Hyundai3);
var Hyundai4= document.createElement('option');
    Hyundai4.textContent="Galloper";
model.appendChild(Hyundai4);
var Hyundai5= document.createElement('option');
    Hyundai5.textContent="Genesis";
model.appendChild(Hyundai5);
var Hyundai6= document.createElement('option');
    Hyundai6.textContent="Getz";
model.appendChild(Hyundai6);
var Hyundai7= document.createElement('option');
    Hyundai7.textContent="H1";
model.appendChild(Hyundai7);
var Hyundai8= document.createElement('option');
    Hyundai8.textContent="H100";
model.appendChild(Hyundai8);
var Hyundai9= document.createElement('option');
    Hyundai9.textContent="I10";
model.appendChild(Hyundai9);
var Hyundai10= document.createElement('option');
    Hyundai10.textContent="I20";
model.appendChild(Hyundai10);
var Hyundai11= document.createElement('option');
    Hyundai11.textContent="I30";
model.appendChild(Hyundai11);
var Hyundai12= document.createElement('option');
    Hyundai12.textContent="I40";
model.appendChild(Hyundai12);
var Hyundai13= document.createElement('option');
    Hyundai13.textContent="Ix20";
model.appendChild(Hyundai13);
var Hyundai14= document.createElement('option');
    Hyundai14.textContent="Ix35";
model.appendChild(Hyundai14);
var Hyundai15= document.createElement('option');
    Hyundai15.textContent="Kona";
model.appendChild(Hyundai15);
var Hyundai16= document.createElement('option');
    Hyundai16.textContent="Lantra";
model.appendChild(Hyundai16);
var Hyundai17= document.createElement('option');
    Hyundai17.textContent="matrix";
model.appendChild(Hyundai17);
var Hyundai18= document.createElement('option');
    Hyundai18.textContent="Pony";
model.appendChild(Hyundai18);
var Hyundai19= document.createElement('option');
    Hyundai19.textContent="S-coupe";
model.appendChild(Hyundai19);
var Hyundai20= document.createElement('option');
    Hyundai20.textContent="Santa fe";
model.appendChild(Hyundai20);
var Hyundai21= document.createElement('option');
    Hyundai21.textContent="Santamo";
model.appendChild(Hyundai21);
var Hyundai22= document.createElement('option');
    Hyundai22.textContent="Sonata";
model.appendChild(Hyundai22);
var Hyundai23= document.createElement('option');
    Hyundai23.textContent="Sonica";
model.appendChild(Hyundai23);
var Hyundai24= document.createElement('option');
    Hyundai24.textContent="Terracan";
model.appendChild(Hyundai24);
var Hyundai25= document.createElement('option');
    Hyundai25.textContent="Trajet";
model.appendChild(Hyundai25);
var Hyundai26= document.createElement('option');
    Hyundai26.textContent="Tucson";
model.appendChild(Hyundai26);
var Hyundai27= document.createElement('option');
    Hyundai27.textContent="Veloster";
model.appendChild(Hyundai27);

}




else if(marka.value==="Infiniti"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Infiniti= document.createElement('option');
    Infiniti.textContent="EX30";
model.appendChild(Infiniti);
var Infiniti1= document.createElement('option');
    Infiniti1.textContent="Fx35";
model.appendChild(Infiniti1);
var Infiniti2= document.createElement('option');
    Infiniti2.textContent="Q30";
model.appendChild(Infiniti2);
var Infiniti3= document.createElement('option');
    Infiniti3.textContent="Q50";
model.appendChild(Infiniti3);
var Infiniti4= document.createElement('option');
    Infiniti4.textContent="Q60";
model.appendChild(Infiniti4);
var Infiniti5= document.createElement('option');
    Infiniti5.textContent="Q70";
model.appendChild(Infiniti5);
var Infiniti6= document.createElement('option');
    Infiniti6.textContent="QX30";
model.appendChild(Infiniti6);
var Infiniti7= document.createElement('option');
    Infiniti7.textContent="Qx50";
model.appendChild(Infiniti7);
}




else if(marka.value==="Isuzu"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Isuzu= document.createElement('option');
    Isuzu.textContent="D-max";
model.appendChild(Isuzu);
var Isuzu1= document.createElement('option');
    Isuzu1.textContent="Trooper";
model.appendChild(Isuzu1);
}


else if(marka.value==="Jaguar"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Jaguar= document.createElement('option');
    Jaguar.textContent="E-Pace";
model.appendChild(Jaguar);
var Jaguar1= document.createElement('option');
    Jaguar1.textContent="S-type";
model.appendChild(Jaguar1);
var Jaguar2= document.createElement('option');
    Jaguar2.textContent="X-type";
model.appendChild(Jaguar2);
var Jaguar3= document.createElement('option');
    Jaguar3.textContent="XE";
model.appendChild(Jaguar3);
var Jaguar4= document.createElement('option');
    Jaguar4.textContent="XF";
model.appendChild(Jaguar4);
var Jaguar5= document.createElement('option');
    Jaguar5.textContent="XJ";
model.appendChild(Jaguar5);
var Jaguar6= document.createElement('option');
    Jaguar6.textContent="Xj6";
model.appendChild(Jaguar6);
var Jaguar7= document.createElement('option');
    Jaguar7.textContent="XK";
model.appendChild(Jaguar7);

}


else if(marka.value==="Jeep"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Jeep= document.createElement('option');
    Jeep.textContent="Cherokee";
model.appendChild(Jeep);
var Jeep1= document.createElement('option');
Jeep1.textContent="CJ";
model.appendChild(Jeep1);
var Jeep2= document.createElement('option');
Jeep2.textContent="Commander";
model.appendChild(Jeep2);
var Jeep3= document.createElement('option');
Jeep3.textContent="Compass";
model.appendChild(Jeep3);
var Jeep4= document.createElement('option');
Jeep4.textContent="Grand Cherokee";
model.appendChild(Jeep4);
var Jeep5= document.createElement('option');
Jeep5.textContent="Liberty";
model.appendChild(Jeep5);
var Jeep6= document.createElement('option');
Jeep6.textContent="Patriot";
model.appendChild(Jeep6);
var Jeep7= document.createElement('option');
Jeep7.textContent="Renegade";
model.appendChild(Jeep7);
var Jeep8= document.createElement('option');
Jeep8.textContent="Wagoneer";
model.appendChild(Jeep8);
var Jeep9= document.createElement('option');
Jeep9.textContent="Willys";
model.appendChild(Jeep9);
var Jeep10= document.createElement('option');
Jeep10.textContent="Wrangler";
model.appendChild(Jeep10);
}




else if(marka.value==="Kia"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Kia= document.createElement('option');
    Kia.textContent="Carens";
model.appendChild(Kia);
var Kia1= document.createElement('option');
    Kia1.textContent="Carnival";
model.appendChild(Kia1);
var Kia2= document.createElement('option');
    Kia2.textContent="Ceed";
model.appendChild(Kia2);
var Kia3= document.createElement('option');
    Kia3.textContent="Ceed Sw";
model.appendChild(Kia3);
var Kia4= document.createElement('option');
    Kia4.textContent="Cerato";
model.appendChild(Kia4);
var Kia5= document.createElement('option');
    Kia5.textContent="Clarus";
model.appendChild(Kia5);
var Kia6= document.createElement('option');
    Kia6.textContent="Joice";
model.appendChild(Kia6);
var Kia7= document.createElement('option');
    Kia7.textContent="Magentis";
model.appendChild(Kia7);
var Kia8= document.createElement('option');
    Kia8.textContent="Optima";
model.appendChild(Kia8);
var Kia9= document.createElement('option');
    Kia9.textContent="Picanto";
model.appendChild(Kia9);
var Kia10= document.createElement('option');
    Kia10.textContent="Pride";
model.appendChild(Kia10);
var Kia11= document.createElement('option');
    Kia11.textContent="Pro Ceed";
model.appendChild(Kia11);
var Kia12= document.createElement('option');
    Kia12.textContent="Rio";
model.appendChild(Kia12);
var Kia13= document.createElement('option');
    Kia13.textContent="Rocsta";
model.appendChild(Kia13);
var Kia14= document.createElement('option');
    Kia14.textContent="Sephia";
model.appendChild(Kia14);
var Kia15= document.createElement('option');
    Kia15.textContent="Shuma";
model.appendChild(Kia15);
var Kia16= document.createElement('option');
    Kia16.textContent="Sorento";
model.appendChild(Kia16);
var Kia17= document.createElement('option');
    Kia17.textContent="Soul";
model.appendChild(Kia17);
var Kia18= document.createElement('option');
    Kia18.textContent="Spectra";
model.appendChild(Kia18);
var Kia19= document.createElement('option');
    Kia19.textContent="Sportage";
model.appendChild(Kia19);
var Kia20= document.createElement('option');
    Kia20.textContent="Stonic";
model.appendChild(Kia20);
}



else if(marka.value==="Lada"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Lada= document.createElement('option');
    Lada.textContent="110";
model.appendChild(Lada);
var Lada1= document.createElement('option');
    Lada1.textContent="111";
model.appendChild(Lada1);
var Lada2= document.createElement('option');
    Lada2.textContent="112";
model.appendChild(Lada2);
var Lada3= document.createElement('option');
    Lada3.textContent="1200";
model.appendChild(Lada3);
var Lada4= document.createElement('option');
    Lada4.textContent="1300";
model.appendChild(Lada4);
var Lada5= document.createElement('option');
    Lada5.textContent="1500";
model.appendChild(Lada5);
var Lada6= document.createElement('option');
    Lada6.textContent="1600";
model.appendChild(Lada6);
var Lada7= document.createElement('option');
    Lada7.textContent="2101";
model.appendChild(Lada7);
var Lada8= document.createElement('option');
    Lada8.textContent="2103";
model.appendChild(Lada8);
var Lada9= document.createElement('option');
    Lada9.textContent="2105";
model.appendChild(Lada9);
var Lada10= document.createElement('option');
    Lada10.textContent="2107";
model.appendChild(Lada10);
var Lada11= document.createElement('option');
    Lada11.textContent="Aleko";
model.appendChild(Lada11);
var Lada12= document.createElement('option');
    Lada12.textContent="Granta";
model.appendChild(Lada12);
var Lada13= document.createElement('option');
    Lada13.textContent="kalina";
model.appendChild(Lada13);
var Lada14= document.createElement('option');
    Lada14.textContent="Niva";
model.appendChild(Lada14);
var Lada15= document.createElement('option');
    Lada15.textContent="Riva";
model.appendChild(Lada15);
var Lada16= document.createElement('option');
    Lada16.textContent="Samara";
model.appendChild(Lada16);
var Lada17= document.createElement('option');
    Lada17.textContent="Vesta";
model.appendChild(Lada17);


}


else if(marka.value==="Lamborghini"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Lamborghini= document.createElement('option');
    Lamborghini.textContent="Urus";
model.appendChild(Lamborghini);
var Lamborghini1= document.createElement('option');
    Lamborghini1.textContent="Huracan";
model.appendChild(Lamborghini1);
var Lamborghini2= document.createElement('option');
    Lamborghini2.textContent="Aventador";
model.appendChild(Lamborghini2);
var Lamborghini3= document.createElement('option');
    Lamborghini3.textContent="Centenario";
model.appendChild(Lamborghini3);
var Lamborghini4= document.createElement('option');
    Lamborghini4.textContent="Galiardo";
model.appendChild(Lamborghini4);
var Lamborghini5= document.createElement('option');
    Lamborghini5.textContent="Murcielago";
model.appendChild(Lamborghini5);
var Lamborghini6= document.createElement('option');
    Lamborghini6.textContent="Diablo";
model.appendChild(Lamborghini6);
}


else if(marka.value==="Lancia"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Lancia= document.createElement('option');
    Lancia.textContent="Beta";
model.appendChild(Lancia);
var Lancia1= document.createElement('option');
    Lancia1.textContent="Dedra";
model.appendChild(Lancia1);
var Lancia2= document.createElement('option');
    Lancia2.textContent="Delta";
model.appendChild(Lancia2);
var Lancia3= document.createElement('option');
    Lancia3.textContent="Kappa";
model.appendChild(Lancia3);
var Lancia4= document.createElement('option');
    Lancia4.textContent="Lybra";
model.appendChild(Lancia4);
var Lancia5= document.createElement('option');
    Lancia5.textContent="Musa";
model.appendChild(Lancia5);
var Lancia6= document.createElement('option');
    Lancia6.textContent="Phedra";
model.appendChild(Lancia6);
var Lancia7= document.createElement('option');
    Lancia7.textContent="Thema";
model.appendChild(Lancia7);
var Lancia8= document.createElement('option');
    Lancia8.textContent="Thesis";
model.appendChild(Lancia8);
var Lancia9= document.createElement('option');
    Lancia9.textContent="Ypsilon";
model.appendChild(Lancia9);
var Lancia22= document.createElement('option');
    Lancia22.textContent="Zeta";
model.appendChild(Lancia22);

}


else if(marka.value==="Land Rover"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Land= document.createElement('option');
    Land.textContent="Defender";
model.appendChild(Land);
var Land1= document.createElement('option');
    Land1.textContent="Discovery";
model.appendChild(Land1);
var Land2= document.createElement('option');
    Land2.textContent="Freelander";
model.appendChild(Land2);
var Land3= document.createElement('option');
    Land3.textContent="Range Rover";
model.appendChild(Land3);
var Land4= document.createElement('option');
    Land4.textContent="Evoque";
model.appendChild(Land4);
var Land5= document.createElement('option');
    Land5.textContent="Range Rover Sport";
model.appendChild(Land5);
var Land6= document.createElement('option');
    Land6.textContent="Range Rover Velar";
model.appendChild(Land6);
var Land7= document.createElement('option');
    Land7.textContent="Range Rover Vogue";
model.appendChild(Land7);
var Land8= document.createElement('option');
    Land8.textContent="Serija II";
model.appendChild(Land8);
}


else if(marka.value==="Lexus"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Lexus= document.createElement('option');
    Lexus.textContent="CT 200h";
model.appendChild(Lexus);
var Lexus1= document.createElement('option');
    Lexus1.textContent="GS";
model.appendChild(Lexus1);
var Lexus2= document.createElement('option');
    Lexus2.textContent="GS 450";
model.appendChild(Lexus2);
var Lexus3= document.createElement('option');
    Lexus3.textContent="IS";
model.appendChild(Lexus3);
var Lexus4= document.createElement('option');
    Lexus4.textContent="IS 200";
model.appendChild(Lexus4);
var Lexus5= document.createElement('option');
    Lexus5.textContent="IS 220";
model.appendChild(Lexus5);
var Lexus6= document.createElement('option');
    Lexus6.textContent="IS 250";
model.appendChild(Lexus6);
var Lexus7= document.createElement('option');
    Lexus7.textContent="LS";
model.appendChild(Lexus7);
var Lexus8= document.createElement('option');
    Lexus8.textContent="LS 460";
model.appendChild(Lexus8);
var Lexus9= document.createElement('option');
    Lexus9.textContent="RX";
model.appendChild(Lexus9);
var Lexus10= document.createElement('option');
    Lexus10.textContent="RX 300";
model.appendChild(Lexus10);
var Lexus11= document.createElement('option');
    Lexus11.textContent="RX 400";
model.appendChild(Lexus11);
}


else if(marka.value==="Linkoln"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Linkoln= document.createElement('option');
    Linkoln.textContent="Town Car";
model.appendChild(Linkoln);
var Linkoln1= document.createElement('option');
    Linkoln1.textContent="Navigator";
model.appendChild(Linkoln1);
}


else if(marka.value==="Lotus"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Lotus= document.createElement('option');
    Lotus.textContent=" Elite";
model.appendChild(Lotus);
var Lotus1= document.createElement('option');
    Lotus1.textContent="Esprit";
model.appendChild(Lotus1);
var Lotus2= document.createElement('option');
    Lotus2.textContent="Europa";
model.appendChild(Lotus2);
var Lotus3= document.createElement('option');
    Lotus3.textContent="Eleven";
model.appendChild(Lotus3);
var Lotus4= document.createElement('option');
    Lotus4.textContent="Seven";
model.appendChild(Lotus4);
var Lotus5= document.createElement('option');
    Lotus5.textContent="Carlton";
model.appendChild(Lotus5);
var Lotus6= document.createElement('option');
    Lotus6.textContent="Eclat";
model.appendChild(Lotus6);
var Lotus7= document.createElement('option');
    Lotus7.textContent="Excel";
model.appendChild(Lotus7);
var Lotus8= document.createElement('option');
    Lotus8.textContent="23";
model.appendChild(Lotus8);
}


else if(marka.value==="Mahindra"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Mahindra= document.createElement('option');
    Mahindra.textContent="Goa";
model.appendChild(Mahindra);
}



else if(marka.value==="Maserati"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Maserati= document.createElement('option');
    Maserati.textContent="Ghibli";
model.appendChild(Maserati);
var Maserati1= document.createElement('option');
Maserati1.textContent="Granturismo";
model.appendChild(Maserati1);
var Maserati2= document.createElement('option');
Maserati2.textContent="Levante";
model.appendChild(Maserati2);
var Maserati3= document.createElement('option');
Maserati3.textContent="Quattroporte";
model.appendChild(Maserati3);
}



else if(marka.value==="Mazda"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Mazda= document.createElement('option');
    Mazda.textContent="2";
model.appendChild(Mazda);
var Mazda1= document.createElement('option');
    Mazda1.textContent="3";
model.appendChild(Mazda1);
var Mazda2= document.createElement('option');
    Mazda2.textContent="5";
model.appendChild(Mazda2);
var Mazda3= document.createElement('option');
    Mazda3.textContent="6";
model.appendChild(Mazda3);
var Mazda4= document.createElement('option');
    Mazda4.textContent="121";
model.appendChild(Mazda4);
var Mazda5= document.createElement('option');
    Mazda5.textContent="323";
model.appendChild(Mazda5);
var Mazda6= document.createElement('option');
    Mazda6.textContent="626";
model.appendChild(Mazda6);
var Mazda7= document.createElement('option');
    Mazda7.textContent="929";
model.appendChild(Mazda7);
var Mazda8= document.createElement('option');
    Mazda8.textContent="B 250";
model.appendChild(Mazda8);
var Mazda9= document.createElement('option');
    Mazda9.textContent="BT 50";
model.appendChild(Mazda9);
var Mazda10= document.createElement('option');
    Mazda10.textContent="CX 3";
model.appendChild(Mazda10);
var Mazda11= document.createElement('option');
    Mazda11.textContent="CX 5";
model.appendChild(Mazda11);
var Mazda12= document.createElement('option');
    Mazda12.textContent="CX 7";
model.appendChild(Mazda12);
var Mazda13= document.createElement('option');
    Mazda13.textContent="Demio";
model.appendChild(Mazda13);
var Mazda14= document.createElement('option');
    Mazda14.textContent="Mpv";
model.appendChild(Mazda14);
var Mazda15= document.createElement('option');
    Mazda15.textContent="MX 3";
model.appendChild(Mazda15);
var Mazda16= document.createElement('option');
    Mazda16.textContent="Mx 5";
model.appendChild(Mazda16);
var Mazda17= document.createElement('option');
    Mazda17.textContent="Premacy";
model.appendChild(Mazda17);
var Mazda18= document.createElement('option');
    Mazda18.textContent="Rx 8";
model.appendChild(Mazda18);
var Mazda19= document.createElement('option');
    Mazda19.textContent="Tribute";
model.appendChild(Mazda19);
var Mazda20= document.createElement('option');
    Mazda20.textContent="Xedos";
model.appendChild(Mazda20);


}



else if(marka.value==="Mini"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Mini= document.createElement('option');
    Mini.textContent="1000";
model.appendChild(Mini);
var Mini1= document.createElement('option');
    Mini1.textContent="Clubman";
model.appendChild(Mini1);
var Mini2= document.createElement('option');
    Mini2.textContent="Cooper";
model.appendChild(Mini2);
var Mini3= document.createElement('option');
    Mini3.textContent="Cooper S";
model.appendChild(Mini3);
var Mini4= document.createElement('option');
    Mini4.textContent="Countryman";
model.appendChild(Mini4);
var Mini5= document.createElement('option');
    Mini5.textContent="Paceman";
model.appendChild(Mini5);
var Mini6= document.createElement('option');
    Mini6.textContent="One";
model.appendChild(Mini6);
}



else if(marka.value==="MG"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var MG= document.createElement('option');
    MG.textContent="MGF";
model.appendChild(MG);
var MG1= document.createElement('option');
    MG1.textContent="TF";
model.appendChild(MG1);
var MG2= document.createElement('option');
    MG2.textContent="ZR";
model.appendChild(MG2);
var MG3= document.createElement('option');
    MG3.textContent="ZT";
model.appendChild(MG3);
}



else if(marka.value==="Mitsubishi"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Mitsubishi= document.createElement('option');
    Mitsubishi.textContent="ASX";
model.appendChild(Mitsubishi);
var Mitsubishi1= document.createElement('option');
    Mitsubishi1.textContent="Carisma";
model.appendChild(Mitsubishi1);
var Mitsubishi2= document.createElement('option');
    Mitsubishi2.textContent="Colt";
model.appendChild(Mitsubishi2);
var Mitsubishi3= document.createElement('option');
    Mitsubishi3.textContent="Eclipse";
model.appendChild(Mitsubishi3);
var Mitsubishi4= document.createElement('option');
    Mitsubishi4.textContent="Endevour";
model.appendChild(Mitsubishi4);
var Mitsubishi5= document.createElement('option');
    Mitsubishi5.textContent="Galant";
model.appendChild(Mitsubishi5);
var Mitsubishi6= document.createElement('option');
    Mitsubishi6.textContent="Grandis";
model.appendChild(Mitsubishi6);
var Mitsubishi7= document.createElement('option');
    Mitsubishi7.textContent="L200";
model.appendChild(Mitsubishi7);
var Mitsubishi8= document.createElement('option');
    Mitsubishi8.textContent="L300";
model.appendChild(Mitsubishi8);
var Mitsubishi9= document.createElement('option');
    Mitsubishi9.textContent="Lancer";
model.appendChild(Mitsubishi9);
var Mitsubishi10= document.createElement('option');
    Mitsubishi10.textContent="montero";
model.appendChild(Mitsubishi10);
var Mitsubishi11= document.createElement('option');
    Mitsubishi11.textContent="Outlander";
model.appendChild(Mitsubishi11);
var Mitsubishi12= document.createElement('option');
    Mitsubishi12.textContent="Pajero";
model.appendChild(Mitsubishi12);
var Mitsubishi13= document.createElement('option');
    Mitsubishi13.textContent="Pajero Pinin";
model.appendChild(Mitsubishi13);
var Mitsubishi14= document.createElement('option');
    Mitsubishi14.textContent="Space Gear";
model.appendChild(Mitsubishi14);
var Mitsubishi15= document.createElement('option');
    Mitsubishi15.textContent="Space Runner";
model.appendChild(Mitsubishi15);
var Mitsubishi16= document.createElement('option');
    Mitsubishi16.textContent="Space Star";
model.appendChild(Mitsubishi16);
var Mitsubishi17= document.createElement('option');
    Mitsubishi17.textContent="Space Wagon";
model.appendChild(Mitsubishi17);
}



else if(marka.value==="Moszkvics"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Moszkvics= document.createElement('option');
Moszkvics.textContent="2137";
model.appendChild(Moszkvics);
var Moszkvics1= document.createElement('option');
Moszkvics1.textContent="2140";
model.appendChild(Moszkvics1);
var Moszkvics2= document.createElement('option');
Moszkvics2.textContent="Aleko 2141";
model.appendChild(Moszkvics2);
}



else if(marka.value==="Nissan"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Nissan= document.createElement('option');
    Nissan.textContent="200 SX";
model.appendChild(Nissan);
var Nissan1= document.createElement('option');
Nissan1.textContent="300 ZX";
model.appendChild(Nissan1);
var Nissan2= document.createElement('option');
Nissan2.textContent="350 Z";
model.appendChild(Nissan2);
var Nissan3= document.createElement('option');
Nissan3.textContent="Almera";
model.appendChild(Nissan3);
var Nissan4= document.createElement('option');
Nissan4.textContent="Almera Tino";
model.appendChild(Nissan4);
var Nissan5= document.createElement('option');
Nissan5.textContent="Altina";
model.appendChild(Nissan5);
var Nissan6= document.createElement('option');
Nissan6.textContent="Bluebird";
model.appendChild(Nissan6);
var Nissan7= document.createElement('option');
Nissan7.textContent="Cube";
model.appendChild(Nissan7);
var Nissan8= document.createElement('option');
Nissan8.textContent="Juke";
model.appendChild(Nissan8);
var Nissan9= document.createElement('option');
Nissan9.textContent="Kubistar";
model.appendChild(Nissan9);
var Nissan10= document.createElement('option');
Nissan10.textContent="Maxima";
model.appendChild(Nissan10);
var Nissan11= document.createElement('option');
Nissan11.textContent="Micra";
model.appendChild(Nissan11);
var Nissan12= document.createElement('option');
Nissan12.textContent="Murano";
model.appendChild(Nissan12);
var Nissan13= document.createElement('option');
Nissan13.textContent="Navaro";
model.appendChild(Nissan13);
var Nissan14= document.createElement('option');
Nissan14.textContent="Note";
model.appendChild(Nissan14);
var Nissan15= document.createElement('option');
Nissan15.textContent="Pathfinder";
model.appendChild(Nissan15);
var Nissan16= document.createElement('option');
Nissan16.textContent="Patrol";
model.appendChild(Nissan16);
var Nissan17= document.createElement('option');
Nissan17.textContent="Pixo";
model.appendChild(Nissan17);
var Nissan18= document.createElement('option');
Nissan18.textContent="Praire";
model.appendChild(Nissan18);
var Nissan19= document.createElement('option');
Nissan19.textContent="Primera";
model.appendChild(Nissan19);
var Nissan20= document.createElement('option');
Nissan20.textContent="Pulsar";
model.appendChild(Nissan20);
var Nissan21= document.createElement('option');
Nissan21.textContent="Quashqai";
model.appendChild(Nissan21);
var Nissan22= document.createElement('option');
Nissan22.textContent="Sentra";
model.appendChild(Nissan22);
var Nissan23= document.createElement('option');
Nissan23.textContent="Serena";
model.appendChild(Nissan23);
var Nissan24= document.createElement('option');
Nissan24.textContent="Sunny";
model.appendChild(Nissan24);
var Nissan25= document.createElement('option');
Nissan25.textContent="Terrano";
model.appendChild(Nissan25);
var Nissan26= document.createElement('option');
Nissan26.textContent="Tilda";
model.appendChild(Nissan26);
var Nissan27= document.createElement('option');
Nissan27.textContent="Vanette";
model.appendChild(Nissan27);
var Nissan28= document.createElement('option');
Nissan28.textContent="X-trail";
model.appendChild(Nissan28);
var Nissan29= document.createElement('option');
Nissan29.textContent="Xterra";
model.appendChild(Nissan29);




}




else if(marka.value==="Oldsmobile"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Oldsmobile= document.createElement('option');
Oldsmobile.textContent="-";
model.appendChild(Oldsmobile);
}





else if(marka.value==="Opel"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Opel= document.createElement('option');
    Opel.textContent="Adam";
model.appendChild(Opel);
var Opel1= document.createElement('option');
Opel1.textContent="Agila";
model.appendChild(Opel1);
var Opel2= document.createElement('option');
Opel2.textContent="Antara";
model.appendChild(Opel2);
var Opel3= document.createElement('option');
Opel3.textContent="Ascona";
model.appendChild(Opel3);
var Opel4= document.createElement('option');
Opel4.textContent="Astra";
model.appendChild(Opel4);
var Opel5= document.createElement('option');
Opel5.textContent="Astra F";
model.appendChild(Opel5);
var Opel6= document.createElement('option');
Opel6.textContent="Astra G";
model.appendChild(Opel6);
var Opel7= document.createElement('option');
Opel7.textContent="Astra H";
model.appendChild(Opel7);
var Opel8= document.createElement('option');
Opel8.textContent="Astra J";
model.appendChild(Opel8);
var Opel9= document.createElement('option');
Opel9.textContent="Astra K";
model.appendChild(Opel9);
var Opel10= document.createElement('option');
Opel10.textContent="Calibra";
model.appendChild(Opel10);
var Opel11= document.createElement('option');
Opel11.textContent="Cscada";
model.appendChild(Opel11);
var Opel12= document.createElement('option');
Opel12.textContent="Combo";
model.appendChild(Opel12);
var Opel13= document.createElement('option');
Opel13.textContent="Corsa";
model.appendChild(Opel13);
var Opel14= document.createElement('option');
Opel14.textContent="Corsa A";
model.appendChild(Opel14);
var Opel15= document.createElement('option');
Opel15.textContent="Corsa B";
model.appendChild(Opel15);
var Opel16= document.createElement('option');
Opel16.textContent="Corsa C";
model.appendChild(Opel16);
var Opel17= document.createElement('option');
Opel17.textContent="Corsa D";
model.appendChild(Opel17);
var Opel18= document.createElement('option');
Opel18.textContent="Corsa E";
model.appendChild(Opel18);
var Opel19= document.createElement('option');
Opel19.textContent="Crosland X";
model.appendChild(Opel19);
var Opel20= document.createElement('option');
Opel20.textContent="Frontera";
model.appendChild(Opel20);
var Opel21= document.createElement('option');
Opel21.textContent="GT";
model.appendChild(Opel21);
var Opel22= document.createElement('option');
Opel22.textContent="Grandland X";
model.appendChild(Opel22);
var Opel23= document.createElement('option');
Opel23.textContent="Insignia";
model.appendChild(Opel23);
var Opel24= document.createElement('option');
Opel24.textContent="Kadett";
model.appendChild(Opel24);
var Opel25= document.createElement('option');
Opel25.textContent="Manta";
model.appendChild(Opel25);
var Opel26= document.createElement('option');
Opel26.textContent="Meriva";
model.appendChild(Opel26);
var Opel27= document.createElement('option');
Opel27.textContent="Monterey";
model.appendChild(Opel27);
var Opel28= document.createElement('option');
Opel28.textContent="Mokka";
model.appendChild(Opel28);
var Opel29= document.createElement('option');
Opel29.textContent="Mokka X";
model.appendChild(Opel29);
var Opel30= document.createElement('option');
Opel30.textContent="Olympia";
model.appendChild(Opel30);
var Opel31= document.createElement('option');
Opel31.textContent="Omega";
model.appendChild(Opel31);
var Opel32= document.createElement('option');
Opel32.textContent="Rekord";
model.appendChild(Opel32);
var Opel33= document.createElement('option');
Opel33.textContent="Senator";
model.appendChild(Opel33);
var Opel34= document.createElement('option');
Opel34.textContent="Signum";
model.appendChild(Opel34);
var Opel35= document.createElement('option');
Opel35.textContent="Sintra";
model.appendChild(Opel35);
var Opel36= document.createElement('option');
Opel36.textContent="Tigra";
model.appendChild(Opel36);
var Opel37= document.createElement('option');
Opel37.textContent="Vectra";
model.appendChild(Opel37);
var Opel38= document.createElement('option');
Opel38.textContent="Vectra A";
model.appendChild(Opel38);
var Opel39= document.createElement('option');
Opel39.textContent="Vectra B";
model.appendChild(Opel39);

var Opel40= document.createElement('option');
Opel40.textContent="Vectra c";
model.appendChild(Opel40);
var Opel41= document.createElement('option');
Opel41.textContent="Zafira";
model.appendChild(Opel41);
}





else if(marka.value==="Peugeot"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Peugeot= document.createElement('option');
    Peugeot.textContent="106";
model.appendChild(Peugeot);
var Peugeot1= document.createElement('option');
Peugeot1.textContent="107";
model.appendChild(Peugeot1);
var Peugeot2= document.createElement('option');
Peugeot2.textContent="108";
model.appendChild(Peugeot2);
var Peugeot3= document.createElement('option');
Peugeot3.textContent="204";
model.appendChild(Peugeot3);
var Peugeot4= document.createElement('option');
Peugeot4.textContent="205";
model.appendChild(Peugeot4);
var Peugeot5= document.createElement('option');
Peugeot5.textContent="206";
model.appendChild(Peugeot5);
var Peugeot6= document.createElement('option');
Peugeot6.textContent="207";
model.appendChild(Peugeot6);
var Peugeot7= document.createElement('option');
Peugeot7.textContent="208";
model.appendChild(Peugeot7);
var Peugeot8= document.createElement('option');
Peugeot8.textContent="301";
model.appendChild(Peugeot8);
var Peugeot9= document.createElement('option');
Peugeot9.textContent="304";
model.appendChild(Peugeot9);
var Peugeot10= document.createElement('option');
Peugeot10.textContent="305";
model.appendChild(Peugeot10);
var Peugeot11= document.createElement('option');
Peugeot11.textContent="306";
model.appendChild(Peugeot11);
var Peugeot12= document.createElement('option');
Peugeot12.textContent="307";
model.appendChild(Peugeot12);
var Peugeot13= document.createElement('option');
Peugeot13.textContent="308";
model.appendChild(Peugeot13);
var Peugeot14= document.createElement('option');
Peugeot14.textContent="309";
model.appendChild(Peugeot14);
var Peugeot15= document.createElement('option');
Peugeot15.textContent="404";
model.appendChild(Peugeot15);
var Peugeot16= document.createElement('option');
Peugeot16.textContent="405";
model.appendChild(Peugeot16);
var Peugeot17= document.createElement('option');
Peugeot17.textContent="406";
model.appendChild(Peugeot17);
var Peugeot18= document.createElement('option');
Peugeot18.textContent="407";
model.appendChild(Peugeot18);
var Peugeot19= document.createElement('option');
Peugeot19.textContent="504";
model.appendChild(Peugeot19);
var Peugeot20= document.createElement('option');
Peugeot20.textContent="508";
model.appendChild(Peugeot20);
var Peugeot21= document.createElement('option');
Peugeot21.textContent="604";
model.appendChild(Peugeot21);
var Peugeot22= document.createElement('option');
Peugeot22.textContent="605";
model.appendChild(Peugeot22);
var Peugeot23= document.createElement('option');
Peugeot23.textContent="607";
model.appendChild(Peugeot23);
var Peugeot24= document.createElement('option');
Peugeot24.textContent="806";
model.appendChild(Peugeot24);
var Peugeot25= document.createElement('option');
Peugeot25.textContent="807";
model.appendChild(Peugeot25);
var Peugeot26= document.createElement('option');
Peugeot26.textContent="1007";
model.appendChild(Peugeot26);
var Peugeot27= document.createElement('option');
Peugeot27.textContent="2008";
model.appendChild(Peugeot27);
var Peugeot28= document.createElement('option');
Peugeot28.textContent="3008";
model.appendChild(Peugeot28);
var Peugeot29= document.createElement('option');
Peugeot29.textContent="4007";
model.appendChild(Peugeot29);
var Peugeot30= document.createElement('option');
Peugeot30.textContent="4008";
model.appendChild(Peugeot30);
var Peugeot31= document.createElement('option');
Peugeot31.textContent="5008";
model.appendChild(Peugeot31);
var Peugeot32= document.createElement('option');
Peugeot32.textContent="Bipper";
model.appendChild(Peugeot32);
var Peugeot33= document.createElement('option');
Peugeot33.textContent="Expert";
model.appendChild(Peugeot33);
var Peugeot34= document.createElement('option');
Peugeot34.textContent="Partner";
model.appendChild(Peugeot34);
var Peugeot35= document.createElement('option');
Peugeot35.textContent="Ranch";
model.appendChild(Peugeot35);
var Peugeot36= document.createElement('option');
Peugeot36.textContent="RCZ";
model.appendChild(Peugeot36);
var Peugeot37= document.createElement('option');
Peugeot37.textContent="Rifter";
model.appendChild(Peugeot37);
var Peugeot38= document.createElement('option');
Peugeot38.textContent="TePee";
model.appendChild(Peugeot38);
}



else if(marka.value==="Piaggio"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Piaggio= document.createElement('option');
    Piaggio.textContent="Ape";
model.appendChild(Piaggio);
var Piaggio1= document.createElement('option');
Piaggio1.textContent="porter";
model.appendChild(Piaggio1);
}



else if(marka.value==="Polonez"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var pol= document.createElement('option');
pol.textContent="-";
model.appendChild(pol);
}





else if(marka.value==="Pontiac"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Pontiac= document.createElement('option');
    Pontiac.textContent="Firebird";
model.appendChild(Pontiac);
var Pontiac1= document.createElement('option');
    Pontiac1.textContent="Trans Am";
model.appendChild(Pontiac1);
}




else if(marka.value==="Porsche"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Porsche= document.createElement('option');
    Porsche.textContent="911";
model.appendChild(Porsche);
var Porsche1= document.createElement('option');
    Porsche1.textContent="924";
model.appendChild(Porsche1);
var Porsche2= document.createElement('option');
    Porsche2.textContent="944";
model.appendChild(Porsche2);
var Porsche3= document.createElement('option');
    Porsche3.textContent="Boxster";
model.appendChild(Porsche3);
var Porsche4= document.createElement('option');
    Porsche4.textContent="Cayenne";
model.appendChild(Porsche4);
var Porsche5= document.createElement('option');
    Porsche5.textContent="Macan";
model.appendChild(Porsche5);
var Porsche6= document.createElement('option');
    Porsche6.textContent="Panamera";
model.appendChild(Porsche6);
}




else if(marka.value==="Proton"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Proton= document.createElement('option');
oProton.textContent="Serija 400";
model.appendChild(Proton);
}



else if(marka.value==="Renault"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Renault= document.createElement('option');
    Renault.textContent="Avantime";
model.appendChild(Renault);
var Renault1= document.createElement('option');
Renault1.textContent="Captur";
model.appendChild(Renault1);
var Renault2= document.createElement('option');
Renault2.textContent="Clio";
model.appendChild(Renault2);
var Renault3= document.createElement('option');
Renault3.textContent="Espace";
model.appendChild(Renault3);
var Renault4= document.createElement('option');
Renault4.textContent="Express";
model.appendChild(Renault4);
var Renault5= document.createElement('option');
Renault5.textContent="Fluence";
model.appendChild(Renault5);
var Renault6= document.createElement('option');
Renault6.textContent="Grand Espace";
model.appendChild(Renault6);
var Renault7= document.createElement('option');
Renault7.textContent="Grand Modus";
model.appendChild(Renault7);
var Renault8= document.createElement('option');
Renault8.textContent="Grand Scenic";
model.appendChild(Renault8);
var Renault9= document.createElement('option');
Renault9.textContent="Kadjar";
model.appendChild(Renault9);
var Renault10= document.createElement('option');
Renault10.textContent="Kangoo";
model.appendChild(Renault10);
var Renault11= document.createElement('option');
Renault11.textContent="Koleos";
model.appendChild(Renault11);
var Renault12= document.createElement('option');
Renault12.textContent="Laguna";
model.appendChild(Renault12);
var Renault13= document.createElement('option');
Renault13.textContent="Latitude";
model.appendChild(Renault13);
var Renault14= document.createElement('option');
Renault14.textContent="Megane";
model.appendChild(Renault14);
var Renault15= document.createElement('option');
Renault15.textContent="Modus";
model.appendChild(Renault15);
var Renault16= document.createElement('option');
Renault16.textContent="Nevada";
model.appendChild(Renault16);
var Renault17= document.createElement('option');
Renault17.textContent="R 4";
model.appendChild(Renault17);
var Renault18= document.createElement('option');
Renault18.textContent="R 5";
model.appendChild(Renault18);
var Renault19= document.createElement('option');
Renault19.textContent="R 9";
model.appendChild(Renault19);
var Renault20= document.createElement('option');
Renault20.textContent="R 10";
model.appendChild(Renault20);
var Renault21= document.createElement('option');
Renault21.textContent="R 11";
model.appendChild(Renault21);
var Renault22= document.createElement('option');
Renault22.textContent="R 12";
model.appendChild(Renault22);
var Renault23= document.createElement('option');
Renault23.textContent="R 18";
model.appendChild(Renault23);
var Renault24= document.createElement('option');
Renault24.textContent="R 19";
model.appendChild(Renault24);
var Renault25= document.createElement('option');
Renault25.textContent="R 20";
model.appendChild(Renault25);
var Renault26= document.createElement('option');
Renault26.textContent="R 21 ";
model.appendChild(Renault26);
var Renault27= document.createElement('option');
Renault27.textContent="R 25";
model.appendChild(Renault27);
var Renault28= document.createElement('option');
Renault28.textContent="Rapid";
model.appendChild(Renault28);
var Renault29= document.createElement('option');
Renault29.textContent="RX";
model.appendChild(Renault29);

var Renault30= document.createElement('option');
Renault30.textContent="Scenic";
model.appendChild(Renault30);
var Renault31= document.createElement('option');
Renault31.textContent="Super 5";
model.appendChild(Renault31);
var Renault32= document.createElement('option');
Renault32.textContent="Talisman";
model.appendChild(Renault32);
var Renault33= document.createElement('option');
Renault33.textContent="Thalia";
model.appendChild(Renault33);
var Renault34= document.createElement('option');
Renault34.textContent="Twingo";
model.appendChild(Renault34);
var Renault35= document.createElement('option');
Renault35.textContent="Vel satis";
model.appendChild(Renault35);
var Renault36= document.createElement('option');
Renault36.textContent="Wind";
model.appendChild(Renault36);

}




else if(marka.value==="Rolls Royce"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Rolls= document.createElement('option');
    Rolls.textContent="Flying Spur";
model.appendChild(Rolls);
}



else if(marka.value==="Rover"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var Rover= document.createElement('option');
    Rover.textContent="200";
model.appendChild(Rover);
var Rover1= document.createElement('option');
    Rover1.textContent="214";
model.appendChild(Rover1);
var Rover2= document.createElement('option');
    Rover2.textContent="216";
model.appendChild(Rover2);
var Rover3= document.createElement('option');
    Rover3.textContent="25";
model.appendChild(Rover3);
var Rover4= document.createElement('option');
    Rover4.textContent="400";
model.appendChild(Rover4);
var Rover5= document.createElement('option');
    Rover5.textContent="414";
model.appendChild(Rover5);
var Rover6= document.createElement('option');
    Rover6.textContent="416";
model.appendChild(Rover6);
var Rover7= document.createElement('option');
    Rover7.textContent="45";
model.appendChild(Rover7);
var Rover8= document.createElement('option');
    Rover8.textContent="600";
model.appendChild(Rover8);
var Rover9= document.createElement('option');
    Rover9.textContent="618";
model.appendChild(Rover9);
var Rover10= document.createElement('option');
    Rover10.textContent="620";
model.appendChild(Rover10);
var Rover11= document.createElement('option');
    Rover11.textContent="75";
model.appendChild(Rover11);
var Rover12= document.createElement('option');
    Rover12.textContent="820";
model.appendChild(Rover12);
var Rover13= document.createElement('option');
    Rover13.textContent="825";
model.appendChild(Rover13);
var Rover14= document.createElement('option');
    Rover14.textContent="Streetwise";
model.appendChild(Rover14);
}



else if(marka.value==="Saab"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var oSaab= document.createElement('option');
oSaab.textContent="900";
model.appendChild(oSaab);
var oSaab1= document.createElement('option');
oSaab1.textContent="9000";
model.appendChild(oSaab1);
var oSaab2= document.createElement('option');
oSaab2.textContent="9-3";
model.appendChild(oSaab2);
var oSaab3= document.createElement('option');
oSaab3.textContent="9-5";
model.appendChild(oSaab3);
}




else if(marka.value==="Seat"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var oSeat= document.createElement('option');
oSeat.textContent="Alhambra";
model.appendChild(oSeat);
var oSeat1= document.createElement('option');
oSeat1.textContent="Altea";
model.appendChild(oSeat1);
var oSeat2= document.createElement('option');
oSeat2.textContent="Altea XL";
model.appendChild(oSeat2);
var oSeat3= document.createElement('option');
oSeat3.textContent="Arosa";
model.appendChild(oSeat3);
var oSeat4= document.createElement('option');
oSeat4.textContent="Cordoba";
model.appendChild(oSeat4);
var oSea5t= document.createElement('option');
oSeat5.textContent="Exeo";
model.appendChild(oSeat5);
var oSeat6= document.createElement('option');
oSeat6.textContent="Ibiza";
model.appendChild(oSeat6);
var oSeat7= document.createElement('option');
oSeat7.textContent="Inca";
model.appendChild(oSeat7);
var oSeat8= document.createElement('option');
oSeat8.textContent="Leon";
model.appendChild(oSeat8);
var oSeat9= document.createElement('option');
oSeat9.textContent="marbela";
model.appendChild(oSeat9);
var oSeat10= document.createElement('option');
oSeat10.textContent="Mii";
model.appendChild(oSeat10);
var oSeat11= document.createElement('option');
oSeat11.textContent="Terra";
model.appendChild(oSeat11);
var oSeat12= document.createElement('option');
oSeat12.textContent="Toledo";
model.appendChild(oSeat12);
}




else if(marka.value==="Shunaghuan"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var oShunaghuan= document.createElement('option');
oShunaghuantbmw.textContent="CEO";
model.appendChild(oShunaghuan);
}



else if(marka.value==="Smart"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var oSmart= document.createElement('option');
oSmart.textContent="For Two";
model.appendChild(oSmart);
var oSmart1= document.createElement('option');
oSmart1.textContent="For Four";
model.appendChild(oSmart1);
var oSmart2= document.createElement('option');
oSmart2.textContent="Roadster";
model.appendChild(oSmart2);
}




else if(marka.value==="SangYong"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var oSangYong= document.createElement('option');
oSangYong.textContent="Actyon";
model.appendChild(oSangYong);
var oSangYong1= document.createElement('option');
oSangYong1.textContent="Korando";
model.appendChild(oSangYong1);
var oSangYong2= document.createElement('option');
oSangYong2.textContent="Kyron";
model.appendChild(oSangYong2);
var oSangYong3= document.createElement('option');
oSangYong3.textContent="Musso";
model.appendChild(oSangYong3);
var oSangYong4= document.createElement('option');
oSangYong4.textContent="Rexton";
model.appendChild(oSangYong4);
var oSangYong5= document.createElement('option');
oSangYong5.textContent="Rodius";
model.appendChild(oSangYong5);
var oSangYong6= document.createElement('option');
oSangYong6.textContent="Tivoli";
model.appendChild(oSangYong6);
var oSangYong7= document.createElement('option');
oSangYong7.textContent="XLV";
model.appendChild(oSangYong7);
}



else if(marka.value==="Subaru"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var oSubaru= document.createElement('option');
oSubaru.textContent="Forester";
model.appendChild(oSubaru);
var oSubaru1= document.createElement('option');
oSubaru1.textContent="Impreza";
model.appendChild(oSubaru1);
var oSubaru2= document.createElement('option');
oSubaru2.textContent="Justy";
model.appendChild(oSubaru2);
var oSubaru3= document.createElement('option');
oSubaru3.textContent="Legacy";
model.appendChild(oSubaru3);
var oSubaru4= document.createElement('option');
oSubaru4.textContent="Leone";
model.appendChild(oSubaru4);
var oSubaru5= document.createElement('option');
oSubaru5.textContent="Outback";
model.appendChild(oSubaru5);
var oSubaru6= document.createElement('option');
oSubaru6.textContent="Tribeca";
model.appendChild(oSubaru6);
var oSubaru7= document.createElement('option');
oSubaru7.textContent="XV";
model.appendChild(oSubaru7);
var oSubaru8= document.createElement('option');
oSubaru8.textContent="Eclipse";
model.appendChild(oSubaru8);
}


else if(marka.value==="Suzuki"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var oSuzuki= document.createElement('option');
oSuzuki.textContent="Alto";
model.appendChild(oSuzuki);
var oSuzuki1= document.createElement('option');
oSuzuki1.textContent="Baleno";
model.appendChild(oSuzuki1);
var oSuzuki2= document.createElement('option');
oSuzuki2.textContent="Grand Vitara";
model.appendChild(oSuzuki2);
var oSuzuki3= document.createElement('option');
oSuzuki3.textContent="Ignis";
model.appendChild(oSuzuki3);
var oSuzuki4= document.createElement('option');
oSuzuki4.textContent="Jimny";
model.appendChild(oSuzuki4);
var oSuzuki5= document.createElement('option');
oSuzuki5.textContent="Kizashi";
model.appendChild(oSuzuki5);
var oSuzuki6= document.createElement('option');
oSuzuki6.textContent="Liana";
model.appendChild(oSuzuki6);
var oSuzuki7= document.createElement('option');
oSuzuki7.textContent="Maruti";
model.appendChild(oSuzuki7);
var oSuzuki8= document.createElement('option');
oSuzuki8.textContent="Sj Samurai";
model.appendChild(oSuzuki8);
var oSuzuki9= document.createElement('option');
oSuzuki9.textContent="Splash";
model.appendChild(oSuzuki9);
var oSuzuki10= document.createElement('option');
oSuzuki10.textContent="Swift";
model.appendChild(oSuzuki10);
var oSuzuki11= document.createElement('option');
oSuzuki11.textContent="SX4";
model.appendChild(oSuzuki11);
var oSuzuki12= document.createElement('option');
oSuzuki12.textContent="SX4 Cross";
model.appendChild(oSuzuki12);
var oSuzuki13= document.createElement('option');
oSuzuki13.textContent="Vitara";
model.appendChild(oSuzuki13);
var oSuzuki14= document.createElement('option');
oSuzuki14.textContent="Vagon R+";
model.appendChild(oSuzuki14);
}



else if(marka.value==="Skoda"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var oSkoda= document.createElement('option');
oSkoda.textContent="100";
model.appendChild(oSkoda);
var oSkoda1= document.createElement('option');
oSkoda1.textContent="105";
model.appendChild(oSkoda1);
var oSkoda2= document.createElement('option');
oSkoda2.textContent="1000 MB";
model.appendChild(oSkoda2);
var oSkoda3= document.createElement('option');
oSkoda3.textContent="Citigo";
model.appendChild(oSkoda3);
var oSkoda4= document.createElement('option');
oSkoda4.textContent="Fabia";
model.appendChild(oSkoda4);
var oSkoda5= document.createElement('option');
oSkoda5.textContent="Favorit";
model.appendChild(oSkoda5);
var oSkoda6= document.createElement('option');
oSkoda6.textContent="Felicia";
model.appendChild(oSkoda6);
var oSkoda7= document.createElement('option');
oSkoda7.textContent="Karaq";
model.appendChild(oSkoda7);
var oSkoda8= document.createElement('option');
oSkoda8.textContent="Kodiaq";
model.appendChild(oSkoda8);
var oSkoda9= document.createElement('option');
oSkoda9.textContent="Octavia";
model.appendChild(oSkoda9);
var oSkoda10= document.createElement('option');
oSkoda10.textContent="Praktik";
model.appendChild(oSkoda10);
var oSkoda11= document.createElement('option');
oSkoda11.textContent="Rapid";
model.appendChild(oSkoda11);
var oSkoda12= document.createElement('option');
oSkoda12.textContent="Roomster";
model.appendChild(oSkoda12);
var oSkoda13= document.createElement('option');
oSkoda13.textContent="Scala";
model.appendChild(oSkoda13);
var oSkoda14= document.createElement('option');
oSkoda14.textContent="Superb";
model.appendChild(oSkoda14);
var oSkoda15= document.createElement('option');
oSkoda15.textContent="Yeti";
model.appendChild(oSkoda15);
}




else if(marka.value==="Tata"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var oTata= document.createElement('option');
oTata.textContent="Indica";
model.appendChild(oTata);
var oTata1= document.createElement('option');
oTata1.textContent="Safari";
model.appendChild(oTata1);
var oTata2= document.createElement('option');
oTata2.textContent="Telco Sport";
model.appendChild(oTata2);
}


else if(marka.value==="Tavria"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var oTavria= document.createElement('option');
oTavria.textContent="1102";
model.appendChild(oTavria);
}



else if(marka.value==="Toyota"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var oToyota= document.createElement('option');
oToyota.textContent="4 Runner";
model.appendChild(oToyota);
var oToyota1= document.createElement('option');
oToyota1.textContent="Auris";
model.appendChild(oToyota1);
var oToyota2= document.createElement('option');
oToyota2.textContent="Avensis";
model.appendChild(oToyota2);
var oToyota3= document.createElement('option');
oToyota3.textContent="Avensis Verso";
model.appendChild(oToyota3);
var oToyota4= document.createElement('option');
oToyota4.textContent="Aygo";
model.appendChild(oToyota4);
var oToyota5= document.createElement('option');
oToyota5.textContent="C-HR";
model.appendChild(oToyota5);
var oToyota6= document.createElement('option');
oToyota6.textContent="Camry";
model.appendChild(oToyota6);
var oToyota7= document.createElement('option');
oToyota7.textContent="Carina";
model.appendChild(oToyota7);
var oToyota8= document.createElement('option');
oToyota8.textContent="Celica";
model.appendChild(oToyota8);
var oToyota9= document.createElement('option');
oToyota9.textContent="Corolla";
model.appendChild(oToyota9);
var oToyota10= document.createElement('option');
oToyota10.textContent="Corolla Verso";
model.appendChild(oToyota10);
var oToyota11= document.createElement('option');
oToyota11.textContent="Hiace";
model.appendChild(oToyota11);
var oToyota12= document.createElement('option');
oToyota12.textContent="Hilux";
model.appendChild(oToyota12);
var oToyota13= document.createElement('option');
oToyota13.textContent="IQ";
model.appendChild(oToyota13);
var oToyota14= document.createElement('option');
oToyota14.textContent="Land Cruiser";
model.appendChild(oToyota14);
var oToyota15= document.createElement('option');
oToyota15.textContent="Paseo";
model.appendChild(oToyota15);
var oToyota16= document.createElement('option');
oToyota16.textContent="Previa";
model.appendChild(oToyota16);
var oToyota17= document.createElement('option');
oToyota17.textContent="Prius";
model.appendChild(oToyota17);
var oToyota18= document.createElement('option');
oToyota18.textContent="Prius +";
model.appendChild(oToyota18);
var oToyota19= document.createElement('option');
oToyota19.textContent="Rav 4";
model.appendChild(oToyota19);
var oToyota20= document.createElement('option');
oToyota20.textContent="Sienna";
model.appendChild(oToyota20);
var oToyota21= document.createElement('option');
oToyota21.textContent="Starlet";
model.appendChild(oToyota21);
var oToyota22= document.createElement('option');
oToyota22.textContent="Tercel";
model.appendChild(oToyota22);
var oToyota23= document.createElement('option');
oToyota23.textContent="Urban Cruiser";
model.appendChild(oToyota23);
var oToyota24= document.createElement('option');
oToyota24.textContent="Verso";
model.appendChild(oToyota24);
var oToyota25= document.createElement('option');
oToyota25.textContent="Yaris";
model.appendChild(oToyota25);
}



else if(marka.value==="Trabant"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var oTrabant= document.createElement('option');
oTrabant.textContent="601";
model.appendChild(oTrabant);
}



else if(marka.value==="Triumph"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var oTriumph= document.createElement('option');
oTriumph.textContent="Spitfire";
model.appendChild(oTriumph);
}



else if(marka.value==="UAZ"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var oUAZ= document.createElement('option');
oUAZ.textContent="469";
model.appendChild(oUAZ);
var oUAZ= document.createElement('option');
oUAZ.textContent="31514";
model.appendChild(oUAZ);
}




else if(marka.value==="Vauxha"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var oVauxha= document.createElement('option');
oVauxha.textContent="Vectra";
model.appendChild(oVauxha);
}



else if(marka.value==="Volvo"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var oVolvo= document.createElement('option');
oVolvo.textContent="240";
model.appendChild(oVolvo);
var oVolvo= document.createElement('option');
oVolvo.textContent="340";
model.appendChild(oVolvo);
var oVolvo= document.createElement('option');
oVolvo.textContent="440";
model.appendChild(oVolvo);
var oVolvo= document.createElement('option');
oVolvo.textContent="460";
model.appendChild(oVolvo);
var oVolvo= document.createElement('option');
oVolvo.textContent="480";
model.appendChild(oVolvo);
var oVolvo= document.createElement('option');
oVolvo.textContent="740";
model.appendChild(oVolvo);
var oVolvo= document.createElement('option');
oVolvo.textContent="760";
model.appendChild(oVolvo);
var oVolvo= document.createElement('option');
oVolvo.textContent="850";
model.appendChild(oVolvo);
var oVolvo= document.createElement('option');
oVolvo.textContent="940";
model.appendChild(oVolvo);
var oVolvo= document.createElement('option');
oVolvo.textContent="945";
model.appendChild(oVolvo);
var oVolvo= document.createElement('option');
oVolvo.textContent="Amazon";
model.appendChild(oVolvo);
var oVolvo= document.createElement('option');
oVolvo.textContent="C30";
model.appendChild(oVolvo);
var oVolvo= document.createElement('option');
oVolvo.textContent="C70";
model.appendChild(oVolvo);
var oVolvo= document.createElement('option');
oVolvo.textContent="S40";
model.appendChild(oVolvo);
var oVolvo= document.createElement('option');
oVolvo.textContent="S60";
model.appendChild(oVolvo);
var oVolvo= document.createElement('option');
oVolvo.textContent="S80";
model.appendChild(oVolvo);
var oVolvo= document.createElement('option');
oVolvo.textContent="S90";
model.appendChild(oVolvo);
var oVolvo= document.createElement('option');
oVolvo.textContent="V40";
model.appendChild(oVolvo);
var oVolvo= document.createElement('option');
oVolvo.textContent="V50";
model.appendChild(oVolvo);
var oVolvo= document.createElement('option');
oVolvo.textContent="V60";
model.appendChild(oVolvo);
var oVolvo= document.createElement('option');
oVolvo.textContent="V70";
model.appendChild(oVolvo);
var oVolvo= document.createElement('option');
oVolvo.textContent="V90";
model.appendChild(oVolvo);
var oVolvo= document.createElement('option');
oVolvo.textContent="XC60";
model.appendChild(oVolvo);
var oVolvo= document.createElement('option');
oVolvo.textContent="XC70";
model.appendChild(oVolvo);
var oVolvo= document.createElement('option');
oVolvo.textContent="XC90";
model.appendChild(oVolvo);
}



else if(marka.value==="Zastava"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    
    var oZastava= document.createElement('option');
oZastava.textContent="10";
model.appendChild(oZastava);
var oZastava= document.createElement('option');
oZastava.textContent="101";
model.appendChild(oZastava);
var oZastava= document.createElement('option');
oZastava.textContent="128";
model.appendChild(oZastava);
var oZastava= document.createElement('option');
oZastava.textContent="1300";
model.appendChild(oZastava);
var oZastava= document.createElement('option');
oZastava.textContent="1500";
model.appendChild(oZastava);
var oZastava= document.createElement('option');
oZastava.textContent="750";
model.appendChild(oZastava);
var oZastava= document.createElement('option');
oZastava.textContent="850";
model.appendChild(oZastava);
var oZastava= document.createElement('option');
oZastava.textContent="AR 55";
model.appendChild(oZastava);
var oZastava= document.createElement('option');
oZastava.textContent="Florida";
model.appendChild(oZastava);
var oZastava= document.createElement('option');
oZastava.textContent="Poly";
model.appendChild(oZastava);
var oZastava= document.createElement('option');
oZastava.textContent="Yugo 45";
model.appendChild(oZastava);
var oZastava= document.createElement('option');
oZastava.textContent="Yugo 55";
model.appendChild(oZastava);
var oZastava= document.createElement('option');
oZastava.textContent="Yugo 60";
model.appendChild(oZastava);
var oZastava= document.createElement('option');
oZastava.textContent="Yugo 65";
model.appendChild(oZastava);
}
else if(marka.value==="Ostalo"){
    if(model.hasChildNodes()){
        for(var i=0; i<model.childNodes.length; i++){
            model.removeChild(model.childNodes[i]);
        }
    }
    var oZ= document.createElement('option');
    oZ.textContent="-";
    model.appendChild(oZ);

}




}