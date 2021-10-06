function FollowToggle(el){
    this.userId = $(el).data("userId");
    this.followState = $(el).data("initialFollowState");
    this.el = $(el);
    this.el.text('Follow!')
    this.render();


    this.el.on('click', (e) => {
        this.handleClick(e);

    });
}

FollowToggle.prototype.render = function(){
    if (this.followState === 'unfollowed'){
        this.el.text('Follow!');
        this.el.data('initialFollowState', 'followed');
    } else {
        this.el.text('Unfollow!');
        this.el.data('initialFollowState', 'unfollowed');
    };
}

FollowToggle.prototype.handleClick = function(e){
    e.preventDefault();
    debugger
    if(this.followState === 'unfollowed'){
        debugger
        this.followState = 'followed';
        return $.ajax({
            url: `/users/${this.userId}/follow`,
            method: 'POST',
            dataType: 'JSON'
        }).then(()=> {
            debugger
            let boundRender = this.render.bind(this)
            boundRender();
        }).fail(err => {
            console.log(err.responseText);
        });
    } else {
        debugger
        this.followState = 'unfollowed';
        return $.ajax({
            url: `/users/${this.userId}/follow`,
            method: "DELETE",
            dataType: 'JSON'
        }).then(() => {
            let boundRender = this.render.bind(this);
            boundRender();
        });
    };
    
};




module.exports = FollowToggle;