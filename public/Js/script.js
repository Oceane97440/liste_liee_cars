$(document).ready(function () {
  
    let selectmarque = $("#marque");
    let selectmodel = $("#model");

    selectmarque.on("change", function() {
        $("#cardinfo").hide();
        affichemodel($(this).val());
    })

    selectmodel.on("change", function() {
        afficheunmodel($(this).find(":selected").data("brand"), $(this).val());
    })

    function affichemodel(idmarque) {
        $.get(`/${idmarque}/model/`, function(info) {
            let carModels = info.makes.Models; 
            
            let models = `<option value="" selected disabled>Veuillez chosir un modèle</option>`;
            
    
            
            carModels.forEach((model) => {
                models += `<option value="${model.model_name}" data-brand="${model.model_make_id}">${model.model_name}</option>`
            });

            $("#model").html(models);

        })
    }


    function afficheunmodel(idBrand, idModel) {
        $.get(`/${idBrand}/${idModel}/model`, function(result) {//GET:/idmarque/idmodel/model

      
            //recup les id des li de la cart et recup les donné dans le tableau trims (info.Trism[])
            $("#voiture-nom").html('<h6>Noms du model:</h6>'+result.info.Trims[0].model_name);
            $("#voiture-finition").html('<h6>Marque:</h6>'+result.info.Trims[0].model_make_id);
            $("#voiture-prix").html('<h6>Année sortie:</h6>'+result.info.Trims[0].model_year);
            $("#voiture-energie").html('<h6>Type essence:</h6>'+result.info.Trims[0].model_engine_fuel);
            $("#voiture-boiteDeVitesse").html('<h6>Transmission:</h6>'+result.info.Trims[0].model_transmission_type);
            $("#voiture-puissance").html('<h6>Poxer energie:</h6>'+result.info.Trims[0].model_engine_power_rpm);
            $("#voiture-kg").html('<h6>Nbr de kg:</h6>'+result.info.Trims[0].model_weight_kg);
            $("#voiture-speed").html('<h6>Meilleur speed</h6>'+result.info.Trims[0].model_top_speed_kph);
            $("#voiture-kph").html('<h6>Kph:</h6>'+result.info.Trims[0].model_0_to_100_kph);

            
            $("#cardinfo").show();

        })
    }

    listCars();








    
    })
    
    