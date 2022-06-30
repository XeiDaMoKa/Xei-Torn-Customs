


// Vault iFrame
$('body').prepend(
    " <iframe "
        +
            " id='icrime' class='iframes' scrolling='no' src= 'https://www.torn.com/crimes.php' "
            +
            " style='display:none ; position:fixed ; height:535px ; width:825px ; left:34% ; top:14% ; z-index:9999 ; outline:2px solid #f50' "
        +
    " </iframe> "
)
;
checkiCrimeLoaded()
;



// Hide inside iframe if its loaded

function checkiCrimeLoaded() {

    let ca = $("#icrime").contents().find(" body ");                                                     // Background color
    let cb = $("#icrime").contents().find(" #header-root , #sidebarroot , #chatRoot ");                // Header , Sideber &
    let cc = $("#icrime").contents().find(" .d .m-bottom10 ");                                          // Dividers


        if ($(ca).length) $(ca).css('background-color', '#1c0028');
        if ($(cb).length) $(cb).hide();
        if ($(cc).length) $(cc).hide();

            if (!$(ca).length || !$(cb).length || !$(cc).length) {

                setTimeout(checkiCrimeLoaded, 250);
            }
}
;



// MoueOver Money Value to show iRefill

let crimetimeout;

    $(".area-row___gyBSo").mouseover(function() {

        crimetimeout = setTimeout(function() {

            $("#icrime").show();

        },1000);

    })

    .mouseout(function() {

        clearTimeout(crimetimeout);

    })
;




// click body to hide iFrame

$('body').click(function() {

    $('#icrime').hide();

})
;

