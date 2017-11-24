$( document ).ready(function() {
        var datetimeNow = new Date();
    
        console.log("Data" , datetimeNow);
    $('#border-wait-form').submit(function(event) {

        event.preventDefault();
        // Hyrje ne Minuta 
        var pikaKufitare = $('#pika-kufitare').val();
        var date = $('#datetime-now').val();
        var hyrjeminMinuta = $('#hyrje-min').val();
        var hyrjemaxMinuta = $('#hyrje-max').val();
        var daljeinMetra = $('#dalje-min').val();
        var daljemaxMetra = $('#dalje-max').val();    

        var dataJson = {};

        dataJson["pikakufitare"] = pikaKufitare; 
        dataJson["hyrjeminMinuta"] = parseFloat(hyrjeminMinuta); 
        dataJson["hyrjemaxMinuta"] = parseInt(hyrjemaxMinuta); 
        dataJson["daljeinMetra"] = parseInt(daljeinMetra); 
        dataJson["daljeinMetra"] = parseInt(daljeinMetra); 

        console.log(dataJson);    

        // console.log(pikaKufitare);
        // console.log("Hyrje per Min" , hyrjeminMinuta);
        // console.log("Hyrje per Max" ,hyrjemaxMinuta);
        // console.log("Dalje per Min" ,  daljeinMetra);
        // console.log("Dylje per Min" , daljemaxMetra);
        // console.log(datetimeNow);

    });
});