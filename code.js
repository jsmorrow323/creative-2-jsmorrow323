function synonymSearch(e) {
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
                    everything += "<li  onclick='showDefinition(synonym)'>" + synonym; + "</li>"
                    everything += "</ul>";
                }
            }
            $("#search").html(everything);
        }
    });
}

function buttonClick(e) {
    if (event.keyCode == 13) {
    document.getElementById('button').click()
    event.returnValue=false;
    event.cancel=true;
    }
}

function showDefinition(synonym) {
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
                everything += "<li>" + [i + 1] + ". "  + definition + "." + "</li>"
                everything += "</ul>";
            }
            $("#definition").html(everything);
        }
    });    
        
  }
});
}