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
    $('button.follow-toggle').on('click', (e) => {
        e.preventDefault();
        $('button.follow-toggle').each(function( index, element ) {
            let el = $(element);
            let button = new FollowToggle(el);
            
        })

    })
};

$(setEventListeners);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map