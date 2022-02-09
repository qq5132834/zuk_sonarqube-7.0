webpackJsonp([271],{1887:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(9),r=o(2358),n=o(10),a=o(135),l=function(t,e){return{currentUser:Object(n.getCurrentUser)(t),languages:Object(n.getLanguages)(t),organization:e.params.organizationKey?Object(n.getOrganizationByKey)(t,e.params.organizationKey):null}},p=function(t){return{onRequestFail:function(e){return Object(a.g)(t)(e)}}};e.default=Object(i.connect)(l,p)(r.a)},2358:function(t,e,o){"use strict";var i=o(0),r=(o.n(i),o(577)),n=o(323),a=o(2),l=o(615),p=o(2359),s=(o.n(p),this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function i(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(i.prototype=o.prototype,new i)}}()),u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={loading:!0},e.updateProfiles=function(){return e.fetchProfiles().then(function(t){e.mounted&&e.setState({profiles:Object(n.g)(t.profiles)})})},e}return s(e,t),e.prototype.componentDidMount=function(){this.mounted=!0,this.loadData()},e.prototype.componentWillUnmount=function(){this.mounted=!1},e.prototype.fetchProfiles=function(){var t=this.props.organization,e=t?{organization:t.key}:{};return Object(r.u)(e)},e.prototype.loadData=function(){var t=this;this.setState({loading:!0}),Promise.all([Object(r.j)(),this.fetchProfiles()]).then(function(e){if(t.mounted){var o=e[0],i=e[1];t.setState({actions:i.actions,exporters:o,profiles:Object(n.g)(i.profiles),loading:!1})}},function(){t.mounted&&t.setState({loading:!1})})},e.prototype.renderChild=function(){if(this.state.loading)return i.createElement("i",{className:"spinner"});var t=this.props.organization,e=Object.values(this.props.languages);return i.cloneElement(this.props.children,{actions:this.state.actions||{},profiles:this.state.profiles,languages:e,exporters:this.state.exporters,updateProfiles:this.updateProfiles,onRequestFail:this.props.onRequestFail,organization:t?t.key:null})},e.prototype.render=function(){return i.createElement("div",{className:"page page-limited"},i.createElement(l.a,{title:Object(a.translate)("quality_profiles.page"),organization:this.props.organization}),this.renderChild())},e}(i.PureComponent);e.a=u},2359:function(t,e,o){var i=o(2360);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0};r.transform=void 0;o(1861)(i,r);i.locals&&(t.exports=i.locals)},2360:function(t,e,o){e=t.exports=o(1860)(void 0),e.push([t.i,".quality-profiles-table{padding-top:7px}.quality-profiles-table-inheritance{width:280px}.quality-profiles-table-date,.quality-profiles-table-projects,.quality-profiles-table-rules{min-width:80px}.quality-profiles-list-header{line-height:24px;margin-bottom:20px;padding:5px 10px;border-bottom:1px solid #e6e6e6}.quality-profile-grid{display:flex;justify-content:space-between;align-items:flex-start}.quality-profile-grid-left{width:340px;flex-shrink:0}.quality-profile-grid-right{flex-grow:1;margin-left:20px}.quality-profile-rules-distribution{margin-bottom:15px;padding:7px 20px 0}.quality-profile-rules-deprecated{margin-top:20px;padding:15px 20px;background-color:#f2dede}.quality-profile-rules-sonarway-missing{margin-top:20px;padding:15px 20px;background-color:#fcf8e3}.quality-profile-not-found{padding-top:100px;text-align:center}.quality-profiles-evolution{padding-top:55px}.quality-profiles-evolution-deprecated{border-color:#ebccd1;background-color:#f2dede}.quality-profiles-evolution-stagnant{border-color:#faebcc;background-color:#fcf8e3}.quality-profile-comparison-table{table-layout:fixed}.quality-profile-changelog-rule-cell{line-height:1.5}.quality-profile-changelog-parameter{max-width:270px;word-break:break-word}",""])}});
//# sourceMappingURL=271.f3b6f7f9.chunk.js.map