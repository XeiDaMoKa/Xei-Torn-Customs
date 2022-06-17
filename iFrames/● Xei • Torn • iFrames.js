


// Vault iFrame

    $('body').prepend(

        " <iframe "
            +
                " id='ivault' class='iframes' scrolling='no' src= 'https://www.torn.com/properties.php#/p=options&tab=vault' "
                +
                " style='display:none ; position:fixed ; width:825px ; height:180px ; left:34% ; top:13% ; z-index:99 ; border:10px solid #1a0029 ; outline:1px solid #f50' "
            +
        " </iframe> "
    )
;
    checkiFrameLoaded()
;



// MouseHover Money Value 1 second (needs fix to cancel if mouseleave within the 1 second)

    $('#user-money').mouseenter(function(){

        setTimeout(function() {

            $('#ivault').show();

        }, 1000)

    })
;



 // Hide if Loaded

    function checkiFrameLoaded() {

        let a = $("#ivault").contents().find(" #header-root , #sidebarroot , #chatRoot ");               // #id's
        let b = $("#ivault").contents().find(" .property-info-cont ");                                   // Property
        let c = $("#ivault").contents().find(" .m-bottom10 ");                                           // Title
        let d = $("#ivault").contents().find(" .info-msg ");                                             // Info
        let e = $("#ivault").contents().find(" .vault-trans-wrap ");                                     // Vault History
        let f = $("#ivault").contents().find(" .d .vault-opt.owner .vault-wrap .vault-access-wrap ");    // Vault Share
        let g = $("#ivault").contents().find(" body ");                                                  // Vault Share

            if ($(a).length) $(a).hide();
            if ($(b).length) $(b).hide();
            if ($(c).length) $(c).hide();
            if ($(d).length) $(d).hide();
            if ($(e).length) $(e).hide();
            if ($(f).length) $(f).hide();
            if ($(g).length) $(g).css('background-color', '#1c0028');

                if (!$(a).length || !$(b).length || !$(c).length || !$(d).length || !$(e).length || !$(f).length) {

                    setTimeout(checkiFrameLoaded, 250);

                }

    }
;



// Click OutSide to Hide iFrame

    $('body').click(function() {

        $('#ivault').hide()

    })
;