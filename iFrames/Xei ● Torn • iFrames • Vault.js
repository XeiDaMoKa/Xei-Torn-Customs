


// Vault iFrame

    $('body').prepend(

        " <iframe "
            +
                " id='ivault' class='iframes' scrolling='no' src= 'https://www.torn.com/properties.php#/p=options&tab=vault' "
                +
                " style='display:none ; position:fixed ; width:825px ; height:180px ; left:34% ; top:13% ; z-index:9999 ; outline:2px solid #f50' "
            +
        " </iframe> "
    );
    checkiVaultLoaded()
;




 
 $('#user-money').bind(click, function() {  
    $('#ivault').show(); })
    
 $('#user-money').bind(dbclick, function() { 
    location = 'properties.php#/p=options&tab=vault'; })



$('body').click(function(){

    $('#ivault').hide();
});


 // Hide inside iframe if its loaded

    function checkiVaultLoaded() {

        let a = $("#ivault").contents().find(" body ");                                                  // Background color
        let b = $("#ivault").contents().find(" #header-root , #sidebarroot , #chatRoot ");               // Header , Sideber & Chat
        let c = $("#ivault").contents().find(" .m-bottom10 ");                                           // Title
        let d = $("#ivault").contents().find(" .info-msg ");                                             // Info
        let e = $("#ivault").contents().find(" .property-info-cont ");                                   // Property
        let f = $("#ivault").contents().find(" .d .vault-opt.owner .vault-wrap .vault-access-wrap ");    // Vault Share
        let g = $("#ivault").contents().find(" .vault-trans-wrap ");                                     // Vault History

            if ($(a).length) $(a).css('background-color', '#1c0028');
            if ($(b).length) $(b).hide();
            if ($(c).length) $(c).hide();
            if ($(d).length) $(d).hide();
            if ($(e).length) $(e).hide();
            if ($(f).length) $(f).hide();
            if ($(g).length) $(g).hide();


                if (!$(a).length || !$(b).length || !$(c).length || !$(d).length || !$(e).length || !$(f).length || !$(g).length) {

                    setTimeout(checkiVaultLoaded, 250);

                }

    }
;