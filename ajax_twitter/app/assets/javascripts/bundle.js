/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/api_util.js":
/*!******************************!*\
  !*** ./frontend/api_util.js ***!
  \******************************/
/***/ ((module) => {

const APIUtil = {
    followUser: id => {
        return $.ajax({
            url: `/users/${id}/follow`,
            method: 'POST',
            dataType: 'JSON'
        })
    },

    unfollowUser: id => {
        return $.ajax({
            url: `/users/${id}/follow`,
            method: "DELETE",
            dataType: 'JSON'
        })
    }
};

module.exports = APIUtil;

/***/ }),

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const APIUtil = __webpack_require__(/*! ./api_util */ "./frontend/api_util.js")

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
        APIUtil.followUser(this.userId).then(() => {
            let boundRender = this.render.bind(this);
            boundRender();
        });
    } else {
        debugger
        this.followState = 'unfollowed';
        APIUtil.unfollowUser(this.userId).then(() => {
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