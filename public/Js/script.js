$(document).ready(function () {
  
    let selectmarque = $("#marque");
    let selectmodel = $("#model");

    selectmarque.on("change", function() {
        $("#cardinfo").hide();
        model($(this).val());
    })

    selectmodel.on("change", function() {
        info($(this).find(":selected").data("marque"), $(this).val());
    })

    function model(idmarque) {
        $.get(`/${idmarque}/model/`, function(info) {
            let modelvoiture = info.makes.Models; 
            
            let listemodel = `<option value="" selected disabled>Veuillez chosir un modèle</option>`;
            
    
            
            modelvoiture.forEach((model) => {
                listemodel += `<option value="${model.model_name}" data-marque="${model.model_make_id}">${model.model_name}</option>`
            });

            $("#model").html(listemodel);

        })
    }


    function info(idmarque, idmodel) {
        $.get(`/${idmarque}/${idmodel}/model`, function(card) {//GET:/idmarque/idmodel/model

      
            //recup les id des li de la cart et recup les donné dans le tableau trims (info.Trism[])
            $("#voiture-nom").html('<h6>Noms du model:</h6>'+card.info.Trims[0].model_name);
            $("#voiture-finition").html('<h6>Marque:</h6>'+card.info.Trims[0].model_make_id);
            $("#voiture-prix").html('<h6>Année sortie:</h6>'+card.info.Trims[0].model_year);
            $("#voiture-energie").html('<h6>Type essence:</h6>'+card.info.Trims[0].model_engine_fuel);
            $("#voiture-boiteDeVitesse").html('<h6>Transmission:</h6>'+card.info.Trims[0].model_transmission_type);
            $("#voiture-puissance").html('<h6>Poxer energie:</h6>'+card.info.Trims[0].model_engine_power_rpm);
            $("#voiture-kg").html('<h6>Nbr de kg:</h6>'+card.info.Trims[0].model_weight_kg);
            $("#voiture-speed").html('<h6>Meilleur speed</h6>'+card.info.Trims[0].model_top_speed_kph);
            $("#voiture-kph").html('<h6>Kph:</h6>'+card.info.Trims[0].model_0_to_100_kph);

            
            $("#cardinfo").show();

        })
    }

    listCars();








    
    })
    
    