const FollowToggle = require('./follow_toggle.js');

const setEventListeners = () => {
    $('button.follow-toggle').on('click', (e) => {
        e.preventDefault();
        $('button.follow-toggle').each(function( index, element ) {
            let el = $(element);
            let button = new FollowToggle(el);
            
        })

    })
};

$(setEventListeners);