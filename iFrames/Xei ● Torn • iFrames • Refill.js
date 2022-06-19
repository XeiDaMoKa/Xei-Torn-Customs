


// Vault iFrame

$('body').prepend(

    " <iframe "
        +
            " id='irefill' class='iframes' scrolling='no' src= 'https://www.torn.com/points.php' "
            +
            " style='display:none ; position:fixed ; width:825px ; height:385px ; left:34% ; top:15% ; z-index:9999 ; outline:2px solid #f50' "
        +
    " </iframe> "
);
checkiRefillLoaded()
;



// Show & Hide iFrame

$('.tt-points-value .value___h3QSJ').mouseover(function(){

    $('#irefill').show();

})
;

$('#irefill').mouseover(function(){

    $('#irefill').show();

})
;

$(".tt-points-value .value___h3QSJ").mouseout(function(){

    $("#irefill").hide()

}),

$("#irefill").mouseout(function(){

    $("#irefill").hide()

});



// Hide inside iframe if its loaded

    function checkiRefillLoaded() {

        let a = $("#irefill").contents().find(" body ");                                                  // Background color
        let b = $("#irefill").contents().find(" #header-root , #sidebarroot , #chatRoot ");               // Header , Sideber & Chat
        let c = $("#irefill").contents().find(" .m-bottom10 ");                                           // Title
        let d = $("#irefill").contents().find(" .info-msg-cont ");                                        // Info msg
        let e = $("#irefill").contents().find(" .points-list li:gt(2) ");                                 // Refill containers
        let f = $("#irefill").contents().find(" .confirmation ");                                         // Confirmation length

            if ($(a).length) $(a).css( 'background-color', '#1c0028' );
            if ($(b).length) $(b).hide();
            if ($(c).length) $(c).hide();
            if ($(d).length) $(d).hide();
            if ($(e).length) $(e).hide();
            if ($(f).length) $(f).css( 'padding-right', '100px !important' );

                if (!$(a).length || !$(b).length || !$(c).length || !$(d).length || !$(e).length || !$(f).length) {

                    setTimeout(checkiRefillLoaded, 250);

                }
    }
;