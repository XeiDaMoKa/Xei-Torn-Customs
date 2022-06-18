


// Vault iFrame

$('body').prepend(

    " <iframe "
        +
            " id='irefill' class='iframes' scrolling='no' src= 'https://www.torn.com/pmarket.php' "
            +
            " style='display:none ; position:fixed ; width:825px ; height:180px ; left:34% ; top:14% ; z-index:9999 ; outline:2px solid #f50' "
        +
    " </iframe> "
);
checkiRefillLoaded()
;



// Show & Hide iFrame

$('p.point-block___to3YE.tt-points-value > span.value___h3QSJ').mouseover(function(){

    $('#irefill').show();

})
;

$('.tt-points-value .value___h3QSJ').mouseout(function(){

    $('#irefill').hide();
})
;

$('#irefill').mouseover(function(){

    $('#irefill').show();

})
;

$('#irefill').mouseout(function(){

    $('#irefill').hide();
})
;



// Hide inside iframe if its loaded

function checkiRefillLoaded() {

    let a = $("#irefill").contents().find(" body ");                                                  // Background color
    let b = $("#irefill").contents().find(" #header-root , #sidebarroot , #chatRoot ");               // Header , Sideber &
    let c = $("#irefill").contents().find(" .m-bottom10 ");                                           // Title

        if ($(a).length) $(a).css('background-color', '#1c0028');
        if ($(b).length) $(b).hide();
        if ($(c).length) $(c).hide();

            if (!$(a).length || !$(b).length || !$(c).length) {

                setTimeout(checkiRefillLoaded, 250);

            }

}
;