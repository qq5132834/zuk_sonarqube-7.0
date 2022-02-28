webpackJsonp([268],{1896:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),o=(n.n(a),n(24)),i=n.n(o),r=n(2452),c=n(2453),u=n(1915),s=n(1955),l=n(222),p=n(2),f=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function a(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={loading:!0},e.handleChangeGate=function(t,n){var a=e.state.allGates;if(!t&&!n||!a)return Promise.resolve();var o=e.props.component,i={gateId:n||t,organization:o.organization,projectKey:o.key};return(n?Object(u.a)(i):Object(u.g)(i)).then(function(){if(e.mounted)if(Object(s.a)(Object(p.translate)("project_quality_gate.successfully_updated")),n){var t=a.find(function(t){return t.id===n});t&&(e.setState({gate:t}),e.props.onComponentChange({qualityGate:t}))}else e.setState({gate:void 0})})},e}return f(e,t),e.prototype.componentDidMount=function(){this.mounted=!0,this.checkPermissions()?this.fetchQualityGates():Object(l.default)()},e.prototype.componentWillUnmount=function(){this.mounted=!1},e.prototype.checkPermissions=function(){var t=this.props.component.configuration;return!(!t||!t.showQualityGates)},e.prototype.fetchQualityGates=function(){var t=this,e=this.props.component;this.setState({loading:!0}),Promise.all([Object(u.i)({organization:e.organization}),Object(u.k)({organization:e.organization,project:e.key})]).then(function(e){var n=e[0].qualitygates,a=e[1];t.mounted&&t.setState({allGates:n,gate:a,loading:!1})},function(){t.mounted&&t.setState({loading:!1})})},e.prototype.render=function(){if(!this.checkPermissions())return null;var t=this.state,e=t.allGates,n=t.gate,o=t.loading;return a.createElement("div",{id:"project-quality-gate",className:"page page-limited"},a.createElement(i.a,{title:Object(p.translate)("project_quality_gate.page")}),a.createElement(r.a,null),o?a.createElement("i",{className:"spinner"}):e&&a.createElement(c.a,{allGates:e,gate:n,onChange:this.handleChangeGate}))},e}(a.PureComponent);e.default=d},1915:function(t,e,n){"use strict";function a(t){return Object(m.getJSON)("/api/qualitygates/list",t).catch(O.a)}function o(t){return Object(m.getJSON)("/api/qualitygates/show",t).catch(O.a)}function i(t){return Object(m.postJSON)("/api/qualitygates/create",t).catch(O.a)}function r(t){return Object(m.post)("/api/qualitygates/destroy",t).catch(O.a)}function c(t){return Object(m.post)("/api/qualitygates/rename",t).catch(O.a)}function u(t){return Object(m.postJSON)("/api/qualitygates/copy",t).catch(O.a)}function s(t){return Object(m.post)("/api/qualitygates/set_as_default",t).catch(O.a)}function l(t){return Object(m.postJSON)("/api/qualitygates/create_condition",t)}function p(t){return Object(m.postJSON)("/api/qualitygates/update_condition",t)}function f(t){return Object(m.post)("/api/qualitygates/delete_condition",t)}function d(t){return Object(m.getJSON)("/api/qualitygates/get_by_project",t).then(function(t){var e=t.qualityGate;return e&&b({},e,{isDefault:e.default})},O.a)}function g(t){return Object(m.post)("/api/qualitygates/select",t).catch(O.a)}function h(t){return Object(m.post)("/api/qualitygates/deselect",t).catch(O.a)}function y(t){return Object(m.getJSON)("/api/qualitygates/application_status",t).catch(O.a)}e.i=a,e.h=o,e.d=i,e.f=r,e.l=c,e.b=u,e.m=s,e.c=l,e.n=p,e.e=f,e.k=d,e.a=g,e.g=h,e.j=y;var m=n(14),O=n(31),b=this&&this.__assign||Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}},1955:function(t,e,n){"use strict";function a(t){Object(o.default)().dispatch(i.d(t))}e.a=a;var o=n(69),i=n(32)},2452:function(t,e,n){"use strict";function a(){return o.createElement("header",{className:"page-header"},o.createElement("h1",{className:"page-title"},Object(i.translate)("project_quality_gate.page")),o.createElement("div",{className:"page-description"},Object(i.translate)("project_quality_gate.page.description")))}e.a=a;var o=n(0),i=(n.n(o),n(2))},2453:function(t,e,n){"use strict";var a=n(0),o=(n.n(a),n(175)),i=n(2),r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function a(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={loading:!1},e.stopLoading=function(){e.mounted&&e.setState({loading:!1})},e.handleChange=function(t){var n=e.props.gate,a=null==n&&null!=t.value,o=null!=n&&null==t.value,i=null!=n&&n.id!==Number(t.value);(a||o||i)&&(e.setState({loading:!0}),e.props.onChange(n&&n.id,Number(t.value)).then(e.stopLoading,e.stopLoading))},e.renderGateName=function(t){return t.isDefault?a.createElement("span",null,a.createElement("strong",null,Object(i.translate)("default")),": ",t.label):a.createElement("span",null,t.label)},e}return r(e,t),e.prototype.componentDidMount=function(){this.mounted=!0},e.prototype.componentWillUnmount=function(){this.mounted=!1},e.prototype.renderSelect=function(){var t=this.props,e=t.gate,n=t.allGates,i=n.map(function(t){return{value:String(t.id),label:t.name,isDefault:t.isDefault}});return a.createElement(o.c,{clearable:!1,disabled:this.state.loading,onChange:this.handleChange,optionRenderer:this.renderGateName,options:i,style:{width:300},value:e&&String(e.id),valueRenderer:this.renderGateName})},e.prototype.render=function(){return a.createElement("div",null,this.renderSelect(),this.state.loading&&a.createElement("i",{className:"spinner spacer-left"}))},e}(a.PureComponent);e.a=c}});
//# sourceMappingURL=268.38697766.chunk.js.map