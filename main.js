mapboxgl.accessToken ="pk.eyJ1IjoiYWFhbGV4eiIsImEiOiJjbDA0ZWZoemEwZ2t3M2RwZGY3NjliZW85In0.4HgWBp3aAJy-3SJ4HsrAjA";
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/aaalexz/cl05540ea001v14ro1vs3s8u7',
    center: [31, 48], // start pos [lng, lat]
    zoom: 6
  });




  function clockUpdate(){

    var datum = new Date();
    
    var dname = datum.getDay(),
        mo = datum.getMonth(),
        dnum = datum.getDate(),
        yr = datum.getFullYear(),
        hou = datum.getHours(),
        min = datum.getMinutes(),
        sec = datum.getSeconds();

        if(hou == 24){
            hou=0;
        }
    
        Number.prototype.pad = function(digits){
            for(var n= this.toString(); n.length < digits; n = 0 + n);
            return n;
        }
        
    var months = ["January", "February","March", "April", "May", "June", "July","August", "September", "October", "November", "December"];
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ids = ["veckodag", "manad", "dag", "ar", "timme", "minut", "sekund"];
    var values = [weekday[dname], months[mo], dnum, yr, hou.pad(2), min.pad(2), sec.pad(2)];
    for(var i=0; i< ids.length; i++)       
    document.getElementById(ids[i]).firstChild.nodeValue= values[i];
  

}


  function clockInitialize(){
      clockUpdate();
      window.setInterval("clockUpdate()",1);
    }

    function toggleBtn(){
        var btn = document.getElementById("btn")
        btn.classList.toggle("active");
        document.body.classList.toggle("dark-theme");
    }

    const menuBtn = document.querySelector(".menu-btn");
    let menuOpen = false;

    menuBtn.addEventListener("click", ()=>{

        if(!menuOpen){
            menuBtn.classList.add("open");
            menuOpen = true;
        }else {
            menuBtn.classList.remove("open");
            menuOpen= false;
        }

    })



