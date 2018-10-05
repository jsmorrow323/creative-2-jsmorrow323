function synonymSearch(e) {
    $("#search").show();
    var value = document.getElementById("synonym").value;
    var myurl =  "https://wordsapiv1.p.mashape.com/words/" + value + "/synonyms"
    
    $.ajax({
        url: myurl,
        dataType: "json",
        cache: false,
        beforeSend: function(xhr) {
            xhr.setRequestHeader("X-Mashape-Key", "UNadWDxFEcmshuJMJAABzA8mGoS8p1FP2mUjsnlaCBpcgmGUgd")
            xhr.setRequestHeader("X-Mashape-Host", "wordsapiv1.p.mashape.com")
        } ,
        success: function(parsed_json) {
            var everything = "Results: ";
            for (var i = 0; i < parsed_json.synonyms.length; ++i) {
                var synonym = parsed_json.synonyms[i];
                if (!synonym.indexOf(synonym)) {
                    everything += "<ul>"
                    everything += "<li  onclick='showDefinition()'>" + synonym; + "</li>"
                    everything += "</ul>";
                }
            }
            $("#search").html(everything);
        }
    });
}

function buttonClick(e) {
    if (event.keyCode == 13) {
    $("#search").show();
    document.getElementById('button').click()
    event.returnValue=false;
    event.cancel=true;
    }
}

function showDefinition() {
    $("#definition").show();
    var listItems = document.querySelectorAll("ul li");
    var word = "";
    listItems.forEach(function(item) {
        item.onclick = function(e) {
        word = (this.innerText);
        
    var myurl =  "https://wordsapiv1.p.mashape.com/words/" + word + "/definitions"
    
    $.ajax({
        url: myurl,
        dataType: "json",
        cache: false,
        beforeSend: function(xhr) {
            xhr.setRequestHeader("X-Mashape-Key", "UNadWDxFEcmshuJMJAABzA8mGoS8p1FP2mUjsnlaCBpcgmGUgd")
            xhr.setRequestHeader("X-Mashape-Host", "wordsapiv1.p.mashape.com")
        } ,
        success: function(parsed_json) {
            var everything = "Definitions: ";
            for (var i = 0; i < parsed_json.definitions.length; ++i) {
                var definition = parsed_json.definitions[i].definition;
                
                everything += "<ul>"
                everything += "<ul>" + [i + 1] + ". "  + definition + "." + "</ul>"
                everything += "</ul>";
            }
            $("#definition").html(everything);
        }
    });    
        
  }
});
}

function fieldClear() {
    if ($('#search').is(':empty') == false){
        $("#definition").hide();
        $("#search").hide();
    }
}

function clear() {
    $("#definition").hide();
    $("#search").hide();
}