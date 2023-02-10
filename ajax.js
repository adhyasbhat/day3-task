$(document).ready(function(){
    $("button").click(function(){
      $.ajax({url: "text.txt", success: function(result){
        $("#div1").html(result);
      }});
    });
  });
// on click of button function is called ..... ajax is method which has two parameters url is the src or file name 
// the content which is stored in demo_test.txt is stored in result and further it will be displayed by using html(result) in a div container