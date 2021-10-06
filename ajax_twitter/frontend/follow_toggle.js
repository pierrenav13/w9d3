function FollowToggle(el){
    this.userId = $(el).data("userId");
    this.followState = $(el).data("initialFollowState");
    this.el = $(el);
    this.el.text('Follow!')
    this.render();
    this.handleClick();
}

FollowToggle.prototype.render = function(){
    if (this.followState === false){
        this.el.text('Follow!');
        this.el.data('initialFollowState', true);
    } else {
        this.el.text('Unfollow!');
        this.followState = false;
        this.el.data('initialFollowState', false);
    };
}

FollowToggle.prototype.handleClick = function(){
    //e.preventDefault();
    debugger
    if(this.followState === false){
        return $.ajax({
            url: `/users/${this.userId}/follow`,
            method: 'POST',
            data: {
                user_id: this.userId
            },
            dataType: 'JSON'
        }).then(this.render);
    } else {
        return $.ajax({
            url: `/users/${this.userId}/follow`,
            method: "DELETE",
            data: {
                user_id: this.userId
            },
            dataType: 'JSON'
        }).then(this.render);
    };
    
};


module.exports = FollowToggle;