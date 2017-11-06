//GET news sources & description of site from News API
$.ajax('/sources', {
    method: "GET",

    success: function(data){
        var myData = JSON.parse(data);
        console.log(myData);

        //create <ul> element which will be expanded below with links and attributes
        var newsSource = '<ul>';

        for (i = 0; i < myData.sources.length; i++) {

          //<a> tag get custom 'data-source' attribute, which will be used in second AJAX call. Because the user story does not require link to source, the href remains #
          newsSource += '<li class="sourceLink"><a href="#" data-source="' + myData.sources[i].id +'">'+ myData.sources[i].name + '</a>';
          newsSource += '<p>' + myData.sources[i].description + '</p>';

        }

        //close <ul> element and append to container div
        newsSource += '</ul>';
        $("#newsContainer").append(newsSource);




    },
    error:function(error){
        console.log('error: ' + error)
    }
});

// GET top 10 articles from selected source AJAX
$('body').on('click', '.sourceLink a', function() {
    $.ajax('/articles/' + $(this).attr('data-source'), {
        method: "GET",

        success: function(data){

            var articleData = JSON.parse(data);
            var articleTitle = '<h3>'+ articleData.source +' Top Stories</h3>';

            for (var j = 0; j < articleData.articles.length; j++) {

                articleTitle += '<h4><a href="'+articleData.articles[j].url +'" >' + articleData.articles[j].title + '</a></h4>';
                articleTitle += '<p>' + articleData.articles[j].description + '</p>';
                
            }
            $('#articlesContainer').append(articleTitle);
        },
        error: function(error){
            console.log('error: ' + error)
        }
    });

});