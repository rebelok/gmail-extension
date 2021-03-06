'use strict';

var ChromeApp = function () {

    var React = require('react/addons'),
        ReactTransitionGroup = React.addons.TransitionGroup,
        SearchBar = require('./SearchBar'),
        SideBar = require('./SideBar'),
        strings = require('./Strings')(),
        $ = require('../vendor/jquery.js'),
        gMail = require('../vendor/gmail.js')($),
        log = console.log.bind(console, strings.get('app_name') + ': '),
        sideBarTemplate = '<div class="b-side-bar"></div>';

    function init() {
        $(startApp);

    }

    function startApp() {
        log('Hello, ', gMail.get.user_email());

        initObservations();
        initSearchDetection();
        initDefaultState();
        initInviteButton();
    }

    function initObservations() {
        observeEmailView();
        observeEmailHover();
    }

    function observeEmailView() {
        gMail.observe.on('view_thread', function () {
        });
        gMail.observe.on('view_email', viewEmail);
    }

    function viewEmail(obj) {
        log('Email opened: ', obj);
        if (!obj)return;
        drawSidebar(getEmail(obj.id));
    }

    function observeEmailHover() {
        $('body').on('mouseenter', '[email]', onEmailHover);
    }

    function onEmailHover() {
        var email = $(this).attr('email');
        if (!email) return;
        log('Email hovered: ', email);
        drawSidebar(email);
    }

    function initSearchDetection() {
        window.onhashchange = onHashChange;
    }

    function onHashChange() {
        log('hash changed');
        drawSearchBar();
    }

    function initInviteButton() {
        gMail.observe.on("http_event", addToolbarInvite);
    }

    function addToolbarInvite() {
        if (!$('[id=":5"]').children(':visible').find('.G-Ni:contains("' + strings.get('app_name') + '")').length) {
            gMail.tools.add_toolbar_button(strings.get('invite_button'), function () {
                window.open(strings.get('link__invite_people__url'), '_blank');
            });
        }
    }

    function sendInvite(email) {
        $.ajax({
            url      : strings.get('link__invite_person__url'),
            type     : 'POST',
            data     : {email: email},
            xhrFields: {withCredentials: true}
        })
            .done(function () {
                log('invite ok');
            })
            .fail(function (data, a, b, c) {
                log('invite failed');
                log(data);
            });
    }

    function initDefaultState() {
        var page = gMail.get.current_page();
        log('page', page);
        if (page == null) {
            if (gMail.check.is_google_apps_user() && !(gMail.get.displayed_email_data() && gMail.get.displayed_email_data().thread_id)) {
                drawSearchBar()
            } else {
                var currentEmailId = gMail.get.email_id();
                log(currentEmailId);
                if (currentEmailId) {
                    var email = getEmail(currentEmailId);
                    if (email) {
                        drawSidebar(email);
                    }
                }
            }
        } else {
            if (page.indexOf('search') == 0) {
                drawSearchBar();
            }
        }
    }

    function drawSearchBar() {
        var searchQuery = gMail.get.search_query();
        if (!searchQuery) {
            log('no search query detected');
            return;
        }
        log('Search: ', searchQuery);
        var searchTerm = gMail.tools.extract_email_address(searchQuery) || searchQuery;
        if (!searchTerm)return;
        log('searching: ', searchTerm);
        initSearchBar();
        React.render(
            <SearchBar searchTerm={searchTerm} />,
            document.querySelector('.b-search-bar')
        );
    }

    function initSearchBar() {
        $('.b-search-bar').remove();
        var target = $('div[role="main"]');
        var googleSearchBar = target.find('.bX');
        if (googleSearchBar.length > 0) {
            target = googleSearchBar;
        }
        else {
            target = target.children().first();
        }
        log(target);
        target.after('<div class="b-search-bar"></div>');
    }

    function drawSidebar(email) {
        if (!email)return;
        log('Drawing Sidebar for Email: ', email);
        var target = getSideBarTarget();
        if(target){
            React.render(<SideBar email={email} onInvite={sendInvite}/>, target);
        }
    }

    function getSideBarTarget() {
        //if (IsRapportiveInstalled) {
        //    $('#rapportive-sidebar').after(sideBarTemplate);
        //    return;
        //}
        var sideBarContainer = $('.adC[role="complementary"]').children().first();
        var target = sideBarContainer.find('.b-side-bar');
        log(target);

        if (!target.length) {
            target = sideBarContainer.prepend(sideBarTemplate).find('.b-side-bar');
            log(target);
        }
        return target[0];
    }

    // Helpers

    function getEmail(emailId) {
        if (!emailId)return null;
        var email = new gMail.dom.email(emailId);
        log('Email = ', email);
        if (!email)return null;
        var from = email.from();
        log('Email is from: ', from);
        return from.email;
    }

    return {Init: init};
}

var chromeApp = new ChromeApp();
chromeApp.Init();

module.exports = ChromeApp;
