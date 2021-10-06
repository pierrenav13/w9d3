/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module) => {

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const FollowToggle = __webpack_require__(/*! ./follow_toggle.js */ "./frontend/follow_toggle.js");

const setEventListeners = () => {
        $('button.follow-toggle').each(function (index, element) {
            let el = $(element);
            let button = new FollowToggle(el);

        })
};

$(setEventListeners);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map