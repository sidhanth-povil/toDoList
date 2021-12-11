$(document).ready(function(){
    $('#add').click(function(){
        let newItem=$("#entryList").val();
        if(newItem.length>3){
            $('#doList').append("<li>"+newItem+"<lord-icon class='tick' src='https://cdn.lordicon.com/jvihlqtw.json' trigger='hover' colors='primary:#121331,secondary:#08a88a' style='width:25px;height:25px'></lord-icon> <lord-icon class='trash' src='https://cdn.lordicon.com/gsqxdxog.json' trigger='hover' colors='primary:#121331,secondary:#08a88a' style='width:25px;height:25px'></lord-icon></li>");
            $('#entryList').val('');
        }
    });

    $('ul').on('click','.trash',function(){
        $(this).parent('li').fadeOut(400);
    });

    $('ul').on('click','.tick',function(){
        $(this).parent('li').toggleClass('checked');
    });
});

// Get the input field
var input = document.getElementById("entryList");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("add").click();
  }
});