webpackJsonp([257],{1895:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(9),r=n(2445),o=n(10),s=function(e){return{canAdmin:Object(o.getAppState)(e).canAdmin}};t.default=Object(a.connect)(s)(r.a)},1952:function(e,t,n){"use strict";function a(e){var t=e.className,n=e.color,a=e.size;return r.createElement("i",{className:o("status-indicator",n,{"small-status-indicator":"small"===a,"big-status-indicator":"big"===a},t)})}t.a=a;var r=n(0),o=(n.n(r),n(8)),s=(n.n(o),n(1953));n.n(s)},1953:function(e,t,n){var a=n(1954);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0};r.transform=void 0;n(1861)(a,r);a.locals&&(e.exports=a.locals)},1954:function(e,t,n){t=e.exports=n(1860)(void 0),t.push([e.i,".status-indicator{display:inline-block;box-sizing:border-box;width:16px;height:16px;border-radius:16px;margin:4px}.status-indicator.small-status-indicator{width:8px;height:8px;border-radius:8px;margin:8px}.status-indicator.big-status-indicator{width:24px;height:24px;border-radius:24px;margin:0}.status-indicator.red{background-color:#d4333f}.status-indicator.yellow{background-color:#eabe06}.status-indicator.green{background-color:#0a0}",""])},1968:function(e,t,n){"use strict";function a(e){return Object(s.getJSON)("/api/project_branches/list",{project:e}).then(function(e){return e.branches},i.a)}function r(e,t){return Object(s.post)("/api/project_branches/delete",{project:e,branch:t}).catch(i.a)}function o(e,t){return Object(s.post)("/api/project_branches/rename",{project:e,name:t}).catch(i.a)}t.b=a,t.a=r,t.c=o;var s=n(14),i=n(31)},1969:function(e,t,n){"use strict";function a(e){var t=e.branch,n=e.concise,a=void 0!==n&&n;if(Object(u.c)(t)){if(!t.status)return null;var p=t.status.bugs+t.status.vulnerabilities+t.status.codeSmells,m=p>0?"red":"green";return a?r.createElement("ul",{className:"branch-status"},r.createElement("li",null,p),r.createElement("li",{className:"spacer-left"},r.createElement(c.a,{color:m,size:"small"}))):r.createElement("ul",{className:"branch-status"},r.createElement("li",{className:"spacer-right"},r.createElement(c.a,{color:m,size:"small"})),r.createElement("li",{className:"spacer-left"},t.status.bugs,r.createElement(s.a,null)),r.createElement("li",{className:"spacer-left"},t.status.vulnerabilities,r.createElement(l.a,null)),r.createElement("li",{className:"spacer-left"},t.status.codeSmells,r.createElement(i.a,null)))}return t.status?r.createElement(o.a,{level:t.status.qualityGateStatus,small:!0}):null}t.a=a;var r=n(0),o=(n.n(r),n(580)),s=n(325),i=n(326),c=n(1952),l=n(327),u=n(322),p=n(2002);n.n(p)},2002:function(e,t,n){var a=n(2003);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0};r.transform=void 0;n(1861)(a,r);a.locals&&(e.exports=a.locals)},2003:function(e,t,n){t=e.exports=n(1860)(void 0),t.push([e.i,".branch-status{display:flex;align-items:center;min-width:64px;line-height:16px;text-align:right}.branch-status .status-indicator{margin:0}",""])},2042:function(e,t,n){"use strict";var a=n(0),r=(n.n(a),n(329)),o=n(2),s=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),i=function(e){function t(t){var n=e.call(this,t)||this;return n.handleSubmit=function(e){e.preventDefault();var t=n.state.value;t&&(n.setState({submitting:!0}),Object(r.i)({branch:n.props.branch,component:n.props.project,key:n.props.setting.key,value:t}).then(n.props.onChange,function(){n.mounted&&n.setState({submitting:!1})}))},n.handleValueChange=function(e){n.setState({value:e.currentTarget.value})},n.handleResetClick=function(e){e.preventDefault(),e.currentTarget.blur(),n.setState({submitting:!0}),Object(r.f)(n.props.setting.key,n.props.project,n.props.branch).then(n.props.onChange,function(){n.mounted&&n.setState({submitting:!1})})},n.handleCancelClick=function(e){e.preventDefault(),n.props.onClose()},n.state={submitting:!1,value:t.setting.value},n}return s(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.setting,t=this.state.submitting||this.state.value===e.value;return a.createElement("form",{onSubmit:this.handleSubmit},a.createElement("div",{className:"modal-body"},a.createElement("div",{className:"big-spacer-bottom markdown",dangerouslySetInnerHTML:{__html:Object(o.translate)("property."+e.key+".description")}}),a.createElement("div",{className:"big-spacer-bottom"},a.createElement("input",{autoFocus:!0,className:"input-super-large",onChange:this.handleValueChange,required:!0,type:"text",value:this.state.value}),e.inherited&&a.createElement("div",{className:"note spacer-top"},Object(o.translate)("settings._default")),!e.inherited&&e.parentValue&&a.createElement("div",{className:"note spacer-top"},Object(o.translateWithParameters)("settings.default_x",e.parentValue)))),a.createElement("footer",{className:"modal-foot"},!e.inherited&&e.parentValue&&a.createElement("button",{className:"pull-left",disabled:this.state.submitting,onClick:this.handleResetClick,type:"reset"},Object(o.translate)("reset_to_default")),this.state.submitting&&a.createElement("i",{className:"spinner spacer-right"}),a.createElement("button",{disabled:t,type:"submit"},Object(o.translate)("save")),a.createElement("a",{href:"#",onClick:this.handleCancelClick},Object(o.translate)("cancel"))))},t}(a.PureComponent);t.a=i},2445:function(e,t,n){"use strict";var a=n(0),r=(n.n(a),n(52)),o=n(13),s=n(2446),i=n(2450),c=n(322),l=n(2),u=n(329),p=n(44),m=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={loading:!0},t}return m(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchPurgeSetting()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.fetchPurgeSetting=function(){var e=this;this.setState({loading:!0}),Object(u.e)("sonar.dbcleaner.daysBeforeDeletingInactiveShortLivingBranches").then(function(t){e.mounted&&e.setState({loading:!1,branchLifeTime:t.length>0?t[0].value:void 0})},function(){e.setState({loading:!1})})},t.prototype.renderBranchLifeTime=function(){if(!this.state.branchLifeTime)return null;var e=this.props.canAdmin?"project_branches.page.life_time.admin":"project_branches.page.life_time";return a.createElement("p",{className:"page-description"},a.createElement(r.b,{defaultMessage:Object(l.translate)(e),id:e,values:{days:Object(p.formatMeasure)(this.state.branchLifeTime,"INT"),settings:a.createElement(o.Link,{to:"/admin/settings"},Object(l.translate)("settings.page"))}}))},t.prototype.render=function(){var e=this.props,t=e.branches,n=e.component,r=e.onBranchesChange;return this.state.loading?a.createElement("div",{className:"page page-limited"},a.createElement("header",{className:"page-header"},a.createElement("h1",{className:"page-title"},Object(l.translate)("project_branches.page"))),a.createElement("i",{className:"spinner"})):a.createElement("div",{className:"page page-limited"},a.createElement("header",{className:"page-header"},a.createElement("h1",{className:"page-title"},Object(l.translate)("project_branches.page")),a.createElement(i.a,{project:n.key}),a.createElement("p",{className:"page-description"},Object(l.translate)("project_branches.page.description")),this.renderBranchLifeTime()),a.createElement("div",{className:"boxed-group boxed-group-inner"},a.createElement("table",{className:"data zebra zebra-hover"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,Object(l.translate)("branch")),a.createElement("th",{className:"thin nowrap text-right"},Object(l.translate)("status")),a.createElement("th",{className:"thin nowrap text-right"},Object(l.translate)("branches.last_analysis_date")),a.createElement("th",{className:"thin nowrap text-right"},Object(l.translate)("actions")))),a.createElement("tbody",null,Object(c.d)(t).map(function(e){return a.createElement(s.a,{branch:e,component:n.key,key:e.name,onChange:r})})))))},t}(a.PureComponent);t.a=h},2446:function(e,t,n){"use strict";var a=n(0),r=(n.n(a),n(8)),o=(n.n(r),n(2447)),s=n(2448),i=n(1969),c=n(591),l=n(322),u=n(2),p=n(2449),m=n(216),h=n(137),d=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={changingLeak:!1,deleting:!1,renaming:!1},t.handleDeleteClick=function(){t.setState({deleting:!0})},t.handleDeletingStop=function(){t.setState({deleting:!1})},t.handleRenameClick=function(){t.setState({renaming:!0})},t.handleChange=function(){t.mounted&&(t.setState({deleting:!1,renaming:!1}),t.props.onChange())},t.handleRenamingStop=function(){t.setState({renaming:!1})},t.handleChangeLeakClick=function(){t.setState({changingLeak:!0})},t.handleChangingLeakStop=function(){t.mounted&&t.setState({changingLeak:!1})},t}return d(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.renderActions=function(){var e=this.props,t=e.branch,n=e.component;return a.createElement("td",{className:"thin nowrap text-right"},a.createElement(h.c,{className:"ig-spacer-left"},Object(l.b)(t)&&a.createElement(h.b,{className:"js-change-leak-period",onClick:this.handleChangeLeakClick},Object(u.translate)("branches.set_leak_period")),Object(l.b)(t)&&!t.isMain&&a.createElement(h.a,null),t.isMain?a.createElement(h.b,{className:"js-rename",onClick:this.handleRenameClick},Object(u.translate)("branches.rename")):a.createElement(h.b,{className:"js-delete",destructive:!0,onClick:this.handleDeleteClick},Object(u.translate)("branches.delete"))),this.state.deleting&&a.createElement(o.a,{branch:t,component:n,onClose:this.handleDeletingStop,onDelete:this.handleChange}),this.state.renaming&&a.createElement(p.a,{branch:t,component:n,onClose:this.handleRenamingStop,onRename:this.handleChange}),this.state.changingLeak&&a.createElement(s.a,{branch:t.name,onClose:this.handleChangingLeakStop,project:n}))},t.prototype.render=function(){var e=this.props.branch;return a.createElement("tr",null,a.createElement("td",null,a.createElement(c.a,{branch:e,className:r("little-spacer-right",{"big-spacer-left":Object(l.c)(e)&&!e.isOrphan})}),e.name,e.isMain&&a.createElement("div",{className:"outline-badge spacer-left"},Object(u.translate)("branches.main_branch"))),a.createElement("td",{className:"thin nowrap text-right"},a.createElement(i.a,{branch:e})),a.createElement("td",{className:"thin nowrap text-right"},e.analysisDate&&a.createElement(m.a,{date:e.analysisDate})),this.renderActions())},t}(a.PureComponent);t.a=f},2447:function(e,t,n){"use strict";var a=n(0),r=(n.n(a),n(1968)),o=n(27),s=n(2),i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={loading:!1},t.handleSubmit=function(e){e.preventDefault(),t.setState({loading:!0}),Object(r.a)(t.props.component,t.props.branch.name).then(function(){t.mounted&&(t.setState({loading:!1}),t.props.onDelete())},function(){t.mounted&&t.setState({loading:!1})})},t.handleCancelClick=function(e){e.preventDefault(),t.props.onClose()},t}return i(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.branch,t=Object(s.translate)("branches.delete");return a.createElement(o.a,{contentLabel:t,onRequestClose:this.props.onClose},a.createElement("header",{className:"modal-head"},a.createElement("h2",null,t)),a.createElement("form",{onSubmit:this.handleSubmit},a.createElement("div",{className:"modal-body"},Object(s.translateWithParameters)("branches.delete.are_you_sure",e.name)),a.createElement("footer",{className:"modal-foot"},this.state.loading&&a.createElement("i",{className:"spinner spacer-right"}),a.createElement("button",{className:"button-red",disabled:this.state.loading,type:"submit"},Object(s.translate)("delete")),a.createElement("a",{href:"#",onClick:this.handleCancelClick},Object(s.translate)("cancel")))))},t}(a.PureComponent);t.a=c},2448:function(e,t,n){"use strict";var a=n(0),r=(n.n(a),n(2042)),o=n(2),s=n(329),i=n(27),c=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={loading:!0,submitting:!1},t.handleCancelClick=function(e){e.preventDefault(),t.props.onClose()},t}return c(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchSetting()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.fetchSetting=function(){var e=this;this.setState({loading:!0}),Object(s.e)("sonar.leak.period",this.props.project,this.props.branch).then(function(t){e.mounted&&e.setState({loading:!1,setting:t[0]})},function(){e.mounted&&e.setState({loading:!1})})},t.prototype.render=function(){var e=this.state.setting,t=Object(o.translate)("branches.set_leak_period");return a.createElement(i.a,{contentLabel:t,onRequestClose:this.props.onClose},a.createElement("header",{className:"modal-head"},a.createElement("h2",null,t)),this.state.loading&&a.createElement("div",{className:"modal-body"},a.createElement("i",{className:"spinner"})),e&&a.createElement(r.a,{branch:this.props.branch,onChange:this.props.onClose,onClose:this.props.onClose,project:this.props.project,setting:e}))},t}(a.PureComponent);t.a=l},2449:function(e,t,n){"use strict";var a=n(0),r=(n.n(a),n(1968)),o=n(2),s=n(27),i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={loading:!1},t.handleSubmit=function(e){e.preventDefault(),t.state.name&&(t.setState({loading:!0}),Object(r.c)(t.props.component,t.state.name).then(function(){t.mounted&&(t.setState({loading:!1}),t.props.onRename())},function(){t.mounted&&t.setState({loading:!1})}))},t.handleCancelClick=function(e){e.preventDefault(),t.props.onClose()},t.handleNameChange=function(e){t.setState({name:e.currentTarget.value})},t}return i(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.branch,t=Object(o.translate)("branches.rename"),n=this.state.loading||!this.state.name||this.state.name===e.name;return a.createElement(s.a,{contentLabel:t,onRequestClose:this.props.onClose},a.createElement("header",{className:"modal-head"},a.createElement("h2",null,t)),a.createElement("form",{onSubmit:this.handleSubmit},a.createElement("div",{className:"modal-body"},a.createElement("div",{className:"modal-field"},a.createElement("label",{htmlFor:"rename-branch-name"},Object(o.translate)("new_name"),a.createElement("em",{className:"mandatory"},"*")),a.createElement("input",{autoFocus:!0,id:"rename-branch-name",maxLength:100,name:"name",onChange:this.handleNameChange,required:!0,size:50,type:"text",value:void 0!==this.state.name?this.state.name:e.name}))),a.createElement("footer",{className:"modal-foot"},this.state.loading&&a.createElement("i",{className:"spinner spacer-right"}),a.createElement("button",{disabled:n,type:"submit"},Object(o.translate)("rename")),a.createElement("a",{href:"#",onClick:this.handleCancelClick},Object(o.translate)("cancel")))))},t}(a.PureComponent);t.a=c},2450:function(e,t,n){"use strict";var a=n(0),r=(n.n(a),n(2451)),o=n(329),s=n(79),i=n(2),c=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={formOpen:!1},t.closeForm=function(){t.mounted&&t.setState({formOpen:!1})},t.handleChangeClick=function(){t.setState({formOpen:!0})},t.handleChange=function(){t.mounted&&t.fetchSetting().then(t.closeForm,t.closeForm)},t}return c(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchSetting()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.fetchSetting=function(){var e=this;return Object(o.e)("sonar.branch.longLivedBranches.regex",this.props.project).then(function(t){e.mounted&&e.setState({setting:t[0]})},function(){})},t.prototype.render=function(){var e=this.state.setting;return e?a.createElement("div",{className:"pull-right text-right"},Object(i.translate)("branches.long_living_branches_pattern"),": ",a.createElement("strong",null,e.value),a.createElement(s.c,{className:"button-small spacer-left",onClick:this.handleChangeClick}),this.state.formOpen&&a.createElement(r.a,{onClose:this.closeForm,onChange:this.handleChange,project:this.props.project,setting:e})):null},t}(a.PureComponent);t.a=l},2451:function(e,t,n){"use strict";function a(e){var t=Object(s.translate)("branches.detection_of_long_living_branches");return r.createElement(i.a,{contentLabel:t,onRequestClose:e.onClose},r.createElement("header",{className:"modal-head"},r.createElement("h2",null,t)),r.createElement(o.a,c({},e)))}t.a=a;var r=n(0),o=(n.n(r),n(2042)),s=n(2),i=n(27),c=this&&this.__assign||Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}}});
//# sourceMappingURL=257.419e1092.chunk.js.map