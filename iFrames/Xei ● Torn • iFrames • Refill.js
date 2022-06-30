


// Vault iFrame
    $('body').prepend(
        " <iframe "
            +
                " id='irefill' class='iframes' scrolling='no' src= 'https://www.torn.com/points.php' "
                +
                " style='display:none ; position:fixed ; height:888px ; width:825px ; left:34% ; top:14% ; z-index:9999 ; outline:2px solid #f50' "
            +
        " </iframe> "
    )
;
    checkiRefillLoaded()
;



// Hide inside iframe if its loaded

    function checkiRefillLoaded() {

        let ra = $("#irefill").contents().find(" body ");                                                  // Background color
        let rb = $("#irefill").contents().find(" #header-root , #sidebarroot , #chatRoot ");               // Header , Sideber &
        let rc = $("#irefill").contents().find(" .m-bottom10 ");                                           // Title
        let rd = $("#irefill").contents().find(" .points-list li:gt(2) ");                                 // hide all but refills


            if ($(ra).length) $(ra).css('background-color', '#1c0028');
            if ($(rb).length) $(rb).hide();
            if ($(rc).length) $(rc).hide();
            if ($(rd).length) $(rd).hide();

                if (!$(ra).length || !$(rb).length || !$(rc).length || !$(rd).length) {

                    setTimeout(checkiRefillLoaded, 250);
                }
    }
;



    let refilltimeout;

        $(".tt-points-value .value___h3QSJ ").mouseover(function() {

            refilltimeout = setTimeout(function() {

                $("#irefill").show();

            },1000);

                checkiVaultLoaded();

        })

        .mouseout(function() {

            clearTimeout(refilltimeout);

        })
;



// click body to hide iFrame

    $('body').click(function() {

        $('#irefill').hide();

    })
;







