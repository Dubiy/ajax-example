var url = 'http://localhost/server.php';



function run_get() {
    jQuery.get(url, {
        mode: 'give me json'
    },  function(data) {
        $("#result").html( data );
        console.log("Load was performed ", data);
    }, 'json');

    // console.log('hello');

    // jQuery.get(url, {
    //     name: "John",
    //     time: "2pm"
    // }, function (data, mode, result) {
    //     console.log(data);
    //     console.log(arguments);
    // });
    //
    // jQuery.get(url, {
    //     name: "John",
    //     time: "2pm"
    // })
    //     .done(function() {
    //         console.log('done', arguments);
    //     })
    //     .fail(function() {
    //         console.log('fail', arguments);
    //     })
    //     .always(function () {
    //         console.log('always ', arguments);
    //     })
    //     .done(function() {
    //         console.log('done', arguments);
    //     })
    //     .done(function() {
    //         console.log('done', arguments);
    //     })
    //     .done(function() {
    //         console.log('done', arguments);
    //     })
    //     .done(function() {
    //         console.log('done', arguments);
    //     });
}

function run_post() {
    jQuery.post(url, {
        user: {
            firstname: 'John',
            lastname: 'Doe'
        },
        homepage: 'http://google.com'
    }, function(data) {
        $("#result").html( data );
        console.log("Load was performed ", data);
    });
}


function run_ajax() {
    //https://api.jquery.com/jQuery.ajax/
    $.ajax({
        method: "GET",
        url: url,
        data: {
            mode: 'give me json'
        },
        headers: {
            apikey: 'llhgldkgkasdjvlkdhvnlkeht4oith23lktk'
        },
        accepts: {
            mycustomtype: 'application/x-some-custom-type'
        },
        dataType: 'json',
        success: function(result){
            console.log('ajax', arguments);
            $("#result").html( result );
        },
        error: function () {
            console.log('ERROR', arguments);
        }

    });
}

function run_json() {
    jQuery.get(url, {
        user: {
            firstname: 'John',
            lastname: 'Doe'
        },
        time: "2pm",
        mode: 'give me json'
    }, function (result) {
        console.log('json', arguments);
    }, 'json')
        .done(function() {
            console.log('done', arguments);
        })
        .fail(function() {
            console.log('fail', arguments);
        })
        .always(function () {
            console.log('who cares? ', arguments);
        });
}


function run_XMLHttpRequest() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("result").innerHTML = this.responseText;

        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}


var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http:///%7B%7Bserver%7D%7D/api/patients/me",
    "method": "PUT",
    "headers": {
        "content-type": "application/x-www-form-urlencoded",
        "apikey": "{{apikey_patient}}",
        "cache-control": "no-cache",
        "postman-token": "7c95c572-d048-fa19-c132-341ad271d192"
    },
    "data": {
        "sdfdsf": "dsfdfdff"
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);
});