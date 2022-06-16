
// Vault iFrame

    $(' body ')

        .prepend(

            "<iframe id='ivault' class='iframes' scrolling='no' style='display:none ; position:fixed ; width:850px ; height:326px ; left:34% ; top:13% ; z-index:99 ; border:10px solid #1a0029 ; outline:1px solid #f50' src= 'https://www.torn.com/properties.php#/p=options&tab=vault' </iframe>"
        )
;


// MouseHover Money Value

    $(' #user-money ').mouseenter(function(){

        setTimeout(function() {

            $(' #ivault ').show()

        }, 1000)
    })
;



// Click OutSide to Hide iFrame

    $(' body ').click(function() {

        $('.iframes').hide()
    })
;



// doesnt work

    $('#ivault').contents()

        .find('#header-root')

            .hide();