
function synonymSearch(e) {

    var myurl = "";
    
    $.ajax({
        url: myurl,
        dataType: "json",
        cache: false,
        success: function(parsed_json) {
            var everything = "";
            for (var i = 0; i < parsed_json.items.length; ++i) {
                
            }
            $("#search").html(everything);
        }
    });
}