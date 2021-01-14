$(function() {
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has("low")) {
        $("header").addClass("low");
    }
});