function initTheme() {
    if (!isWLU()) {

        // bg - waterloo
        // $('.d2l-page-main').prepend('<div class="darklight-waterloo" style="background-image: url(' + baseURL + 'img/waterloo_background.png)"></div>');

        // logo - white
        $('.d2l-navigation-s-logo-link img').attr('src', baseURL + 'img/waterloo_learn_logo.png');

    } else {

        // for wlu learn
        $('.d2l-navigation-s-logo-link img').attr('src', baseURL + 'img/laurier_learn_logo.png');

    }

    // course home calendar
    if (currURL.match(/\/d2l\/home\/\d+/)) {
        $('.d2l-widget-header').each(function (i, e) {
            var headText = $(e).text();
            if (headText.match(/Calendar/)) {
                $(e).parents('div.d2l-widget').addClass('darklight-course-home-calendar');
            }
        });
    }
}

initTheme();