function getSizePrice(sizePizza) {
    var pizaPrice = {
        "extralarge": 1200,
        "large": 1000,
        "medium": 800,
        "small": 600
    }
    return pizaPrice[sizePizza];
}
// CRUST
function getCrustPrice(crustName,size){
    var stuffPrice = {
        "extralarge": 250,
        "large": 200,
        "medium": 150,
        "small": 100
    };
    var cheesyPrice = {
        "extralarge": 200,
        "large": 150,
        "medium": 100,
        "small": 50
    };
    var cauliflowerPrice = {
        "extralarge": 200,
        "large": 100,
        "medium": 100,
        "small": 50
    };
    var thincrustPrice = {
        "extralarge": 200,
        "large": 100,
        "medium": 100,
        "small": 50
    };
    if(crustName == 'stuffed'){
        return stuffPrice[size];
    }
    if(crustName == 'cheesy'){
        return cheesyPrice[size];
    }
    if(crustName == 'cauliflower'){
        return cauliflowerPrice[size];
    }
    if(crustName == 'thincrust'){
        return thincrustPrice[size];
    }
}


// TOPPINS
function getTopingsPrice(toping, size) {
    var pepperoni = {
        "extralarge": 250,
        "large": 200,
        "medium": 150,
        "small": 100
    };
    var hawaiianPrice = {
        "extralarge": 200,
        "large": 100,
        "medium": 100,
        "small": 50
    };
    var periperiPrice = {
        "extralarge": 200,
        "large": 100,
        "medium": 100,
        "small": 50
    };
    if(toping == 'peperoni'){
        return pepperoni[size];
    }
    if(toping == 'hawaiian'){
        return hawaiianPrice[size];
    }
    if(toping == 'periperi'){
        return periperiPrice[size];
    }
}

$(function () {

    $("#crustPick").change(function () {
        var crustValue = $(this).children("option:selected").val();
        // console.log(crustValue)
        $('#crustPre').val(crustValue);
        $('#pre-crust').empty();
        $('#pre-crust').append(crustValue);

    });

    $("#sizePick").change(function () {
        var sizeValue = $(this).children("option:selected").val();
        $('#sizePre').val(sizeValue);
        $('#pre-size').empty();
        $('#pre-size').append(sizeValue);
    });

    $("#topsPick").change(function () {
        var topsValue = $(this).children("option:selected").val();
        $('#topPre').val(topsValue);
        $('#pre-tops').empty();
        $('#pre-tops').append(topsValue);
    });
    
    var NoCart =0;
    $("#preCart").click(function () {
        var cartTop = $("#topPre").val().toLowerCase();
        var cartSize = $("#sizePre").val().toLowerCase();
        var cartCrust = $("#crustPre").val().toLowerCase();
        var cartQuantity = $("#pre-quantity").val();
        
        NoCart = NoCart + 1;
        var sizeValue = getSizePrice(cartSize);
        var topsValue = getTopingsPrice(cartTop,cartSize);
        var crustValue = getCrustPrice(cartCrust,cartSize);
        console.log(sizeValue + ', ' + topsValue + ', ' + crustValue)
        var totalOnePizza = (sizeValue + topsValue + crustValue) * cartQuantity;
        var addD
        $('#cart-table-body').append(`
            <tr>
                <td>${cartSize}</td>
                <td>${cartCrust}</td>
                <td>${cartTop}</td>
                <td>${cartQuantity}</td>
                <td>${totalOnePizza} <input type="hidden" value=${totalOnePizza} class="totalOnePizza"></td>
            </tr>
        `);
        $('#pre-crust').empty();
        $('#pre-tops').empty();
        $('#pre-size').empty();
        $('#shopNo').empty();
        var totalPizza = 0;
        $('.totalOnePizza').each(function(i,e){
            totalPizza = parseInt(totalPizza) + parseInt($(this).val()) ;
            
        })
        $('#shopNo').append(NoCart);
        $('#TotalPrice').empty();
        $('#TotalPrice').append(totalPizza)

        
        $('#pre-delivery').click(function(){
            var cartDelivery = 150;
            ('#pre-delivery').val();
            ('#pre-delivery').append (cartDelivery);
            $('#TotalPrice').append(totalPizza) + cartDelivery;
        });
        // console.log(cartPre + ', '+cartSize + ', ' + cartTops)
 
    });

});
$(function () {
    $("#cart").change(function () {
        var cartsValue = $(this).children("option:selected").html();
        $("#preCart").append(cartsValue)
        console.log(cartsValue);
    })
})


