/**
 * Adds an option for lower
 * bandwidth users
 */


$(function() {
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has("low")) {
        $("header").addClass("low");
    }
});