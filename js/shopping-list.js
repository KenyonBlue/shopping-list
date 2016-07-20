/*window.onload = function () {

    alert("welcome");

};
$(document).ready(function () {
    $('.things').mouseenter()
    console.log('working')
});
*/
// everything above this line was a jq test
/*$(document).ready(function() {
    var max_fields      = 10; //maximum input boxes allowed
    var wrapper         = $(".input_fields_wrap"); //Fields wrapper
    var add_button      = $(".add_field_button"); //Add button ID

    var x = 1; //initlal text box count
    $(add_button).click(function(e){ //on add input button click
        e.preventDefault();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div><input type="text" name="mytext[]"/><a href="#" class="remove_field">Remove</a></div>'); //add input box
        }
    });

    $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })
});*/
// everything above this line works



/*******************************************
STEP 1
before document ready we are defining all the functions and we explain what they should be doing when used
********************************************/

/* function for adding items to the shopping list using the add to list button and enter key */
function addItem() {
    //check if the targeting is working
    //alert("I've just activated the addItem() function");

    //get the value of the input box
    var itemValue = $('#addItemValue').val();

    //check if the logic makes sense
    //alert(itemValue);

    //validate input
    if (itemValue.length === 0) {
        alert('You have to add something!!!');
    }

    //if the input is valid ....
    else {

        //dynamicaly create one row inside the shopping list
        var row = $('<li><button class="checkbox">✓</button><span class="list">' + itemValue + '</span><button class="delete">x</button></li>');

        //add each row to the previous ones
        $('.shopping-list').append(row);

        //empty the input box after submit by resetting the value
        $('#addItemValue').val('');
    }

}

/*function to select an item to cross out
    Note: create the 'ticked' class in CSS file first! You don't need to use it in the index.html because the JS will be adding it automatically to the index
*/
function tickItem() {
    //check if the targeting is working
    //alert("I've just activated the tickItem() function");

    //$(this) means that on WHATEVER you just clicked (the checkbox button), go to the parent of it (in our case the LI above the it) and add / remove the "ticked" class to it
    $(this).parent().toggleClass('ticked');
}

/*function to remove an item from the list clicking on the 'x' */
function deleteItem() {
    //check if the targeting is working
    //alert("I've just activated the deleteItem() function");

    //$(this) means that on WHATEVER you just clicked (the delete one item button), go to the parent of it (in our case the LI above it) and remove the parent and everything inside it
    $(this).parent().remove();
}

/*function to reset and clear the list */
function deleteAll() {
    //check if the targeting is working
    //alert("I've just activated the deleteAll() function");

    //find the UL container (in our case having the class shopping-list) which contains all the LIs and delete all the children inside it
    $('.shopping-list').empty();
}




/********************************************
STEP 2
Inside document ready we are calling all the functions (we used them) and connect them with the containers in HTML (for example the #add-button from HTML will be connected with the addItem function)
********************************************/

$(document).ready(function () {

    /*on click on the "#addItem" button activate function called addItem()*/
    $('#addItem').on('click', function () {
        addItem();
    });

    /*on click on the ".delete-all" button activate function called deleteAll()*/
    $('.delete-all').on('click', function () {
        deleteAll();
    });

});


/*on click on the ".checkbox" button activate function called tickItem()*/
$(document).on('click', '.checkbox', tickItem);

/*on click on the ".delete" button activate function called deleteItem()*/
$(document).on('click', '.delete', deleteItem);


/*add item on enter*/
$(document).on('keypress', function (key) {
    //keyCode == 13 is the ENTER key
    if (key.keyCode == 13) {
        addItem();
    }
});
