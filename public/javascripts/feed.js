var myFeed = [];

//GET news sources & description of site from News API
$.ajax('/sources', {
    method: "GET",

    success: function(data){
        var myData = JSON.parse(data);
        console.log(myData);

        //create <ul> element which will be expanded below with links and attributes
        var newsFeed = '<div>';

        for (i = 0; i < myData.sources.length; i++) {

            //<a> tag get custom 'data-source' attribute, which will be used in second AJAX call. Because the user story does not require link to source, the href remains #
            newsFeed += '<p id="source" data-sourceID="' + myData.sources[i].id +'">'+ myData.sources[i].name + '</p>';
        }

        //close <form> element, add submit button and append to container div
        newsFeed += '</div>';
        $("#feedContainer").append(newsFeed);
    },
    error:function(error){
        console.log('error: ' + error)
    }
});

//push the selected feeds to an array
$( 'body' ).on( 'click', 'p', function() {
    myFeed.push($(this).attr('data-sourceID'));
    console.log( myFeed );
});