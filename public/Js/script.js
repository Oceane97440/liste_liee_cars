$(document).ready(function(){
    //fonction onchange
$("#marque").on("change",function(){
    //appel a la fonction model
   model($(this).val())
    
});
function model(idmodel) {
    $.get('/'+idmodel,function(result) {
        console.log(result);
        //creaction d'un variable contenant mes option du select
        var listemodel="";
        //ajout option
        for(d in result.modeles){
            //var listemodel=<option data-marque="idmarque" value="idmodel">nom du modèle</option>
            listemodel+='<option data-marque="'+result.id+'" value="'+result.modeles[d].id+'">'+result.modeles[d].nom+'</option>'

        }
        //recup id du select et retranscit la donnée en html se qui affiche dans les option
        $('#model').html(listemodel);

        
    })

}

$("#model").on("change",function(){
    //appel la fonction info a chaque fois qu'un option est selectionner cela affiche la marque qui lui correspond
    info($(this).find(":selected").data("marque"),$(this).val())

    //(parametre)
    console.log($(this).find(":selected").data("marque"));
});

//Recup 2 parametre id du indexController.info
function info(idmarque,idmodel) {
    //route get /model/:idmarque/:idmodel
    $.get('/model/'+idmarque+'/'+idmodel,function(card){
       console.log(card);
       //retrancrit les donnée sous forme html affiche dans la front
      $('#voiture-nom').html(card.nom)
      $('#voiture-finition').html(card.finition)
      $('#voiture-prix').html(card.prix)
      $('#voiture-energie').html(card.energie)
      $('#voiture-boiteDeVitesse').html(card.boiteDeVitesse)
      $('#voiture-puissance').html(card.puissance)

   })

}

    

});
//http://www.carqueryapi.com/api/0.3/?cmd=getStats
//https://www.carqueryapi.com/api/0.3/?cmd=getMakes&year=2018

// $.getJSON(this+"0.3"+"?callback=?", {cmd:"getStats"}, function(data) {

//     //The 'data' variable contains all response data.
//     var makes = data.Makes;
//     for (var i = 0; i &lt; makes.length; i++)
//     {
//         //You can now do what you like with the response data
//         alert(makes[i].make_display);
//     }
//  });