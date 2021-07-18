/**
 * Animate function
 */
function animateScale(element, scale, duration, elasticity) {
    anime.remove(element);
    anime({
        targets: element,
        scale: scale,
        duration: duration,
        elasticity: elasticity
    });
}


/**
 * Calls on page load
 */
$(function() {

    /* Load Programs */
    $.when($.ajax({
        dataType: "json",
        url: "https://raw.githubusercontent.com/Supercolbat/Supercolbat/master/data/programs.json",
        success: function(data) {
            return data;
        }
    })).done(function(data) {
        var html = "";
        var unfinished = 0;
        var chunk;

        for (var i = 0; i < data.length; i+=3) {
            chunk = data.slice(i, i+3);

            html = `<div class="row">`;
            for (var k = 0; k < chunk.length; k++) {
                html = html + `<div class="col"><h3>${data[i+k].url ? `<a href="${data[i+k].url}" target="_blank">${data[i+k].name}</a>` : data[i+k].name} ${data[i+k].tags.includes("wip") ? ` <span class="badge badge-warning">WIP</span>` : ""}</h3><p>${data[i+k].description}</p></div>`;
                
                if (data[i+k].tags.includes("wip")) {
                    unfinished++;
                }
            }
            $("#projects").append(html + "</div>");
        }

        $("#counter").text(unfinished);
        $(".delete").remove();
    });

    /* Implement animations */
    $(".icon").hover(
        function() {
            animateScale(this, 1.25, 800, 400);
        },
        function() {
            animateScale(this, 1, 600, 300);
        }
    );

})