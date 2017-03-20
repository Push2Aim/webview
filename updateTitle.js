var Webflow = Webflow || [];
Webflow.push(function() {
    $('.heads').children().on('click', function(e) {
        var index = $('.heads .w-inline-block').index(this);
        console.log(index);
        $(".slider-navigation-dots").children().eq(index).trigger('tap');
    })
});