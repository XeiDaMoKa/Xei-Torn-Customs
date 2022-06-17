

// Vault iFrame

    $('body').prepend(

        " <iframe "
            +
            " id='ivault' class='iframes' scrolling='no' " +
            " style='display:none ; position:fixed ; width:850px ; height:326px ; left:34% ; top:13% ; z-index:99 ; border:10px solid #1a0029 ; outline:1px solid #f50' " +
            " src= 'https://www.torn.com/properties.php#/p=options&tab=vault' "
            +
        " </iframe> "
    )
;
    checkIframeLoaded()
;



// MouseHover Money Value 1 second (needs fix to cancel if mouseleave within the 1 second)

    $('#user-money').mouseenter(function(){

        setTimeout(function() {

            $('#ivault').show();

        }, 1000)

    })
;



// Click OutSide to Hide iFrame

    $('body').click(function() {

        $('#ivault').hide()

    })
;



// Hide if Loaded

    function checkIframeLoaded() {

        let a = $("#ivault").contents().find("#header-root , #sidebarroot , #chatRoot , .property-info-cont ");

            if ($(a).length)

                $(a).hide();

            if (!$(a).length) {

                window.setTimeout(checkIframeLoaded, 250);

            }

    }
;