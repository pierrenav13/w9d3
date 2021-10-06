const APIUtil = require('./api_util')

function FollowToggle(el){
    this.userId = $(el).data("userId");
    this.followState = $(el).data("initialFollowState");
    this.el = $(el);
    this.el.text('Follow!')
    this.render();
    this.el.prop('disabled', false)

    this.el.on('click', (e) => {
        this.handleClick(e);
    });
}

FollowToggle.prototype.render = function(){
    this.el.prop('disabled', false)
    if (this.followState === 'unfollowed'){
        this.el.text('Follow!');
        this.el.data('initialFollowState', 'followed');
        
    } else if (this.followState === 'followed'){
        this.el.text('Unfollow!');
        this.el.data('initialFollowState', 'unfollowed');
        
    };
}

FollowToggle.prototype.handleClick = function(e){
    e.preventDefault();
    // debugger
    if(this.followState === 'unfollowed'){
        // debugger
        this.el.prop('disabled', true);
        this.followState = 'followed';
        APIUtil.followUser(this.userId).then(() => {
            let boundRender = this.render.bind(this);
            boundRender();
        });
    } else {
        // debugger
        this.el.prop('disabled', true);
        this.followState = 'unfollowed';
        APIUtil.unfollowUser(this.userId).then(() => {
            let boundRender = this.render.bind(this);
            boundRender();
        });
    };
    
};




module.exports = FollowToggle;