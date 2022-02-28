webpackJsonp([269],{1902:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9),a=n(2487),o=n(622),c=n(10);t.default=Object(r.connect)(function(e){return Object(c.getSettingsAppEncryptionState)(e)},{checkSecretKey:o.b,generateSecretKey:o.d,encryptValue:o.c,startGeneration:o.e})(a.a)},2487:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(0),i=n.n(c),s=n(6),l=n.n(s),u=n(24),p=n.n(u),y=n(2488),f=n(2489),m=n(2),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=i.a.createElement("i",{className:"spinner"}),h=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),b(t,[{key:"componentDidMount",value:function(){this.props.checkSecretKey()}},{key:"render",value:function(){return i.a.createElement("div",{id:"encryption-page",className:"page page-limited"},i.a.createElement(p.a,{title:Object(m.translate)("property.category.security.encryption")}),i.a.createElement("header",{className:"page-header"},i.a.createElement("h1",{className:"page-title"},Object(m.translate)("property.category.security.encryption")),this.props.loading&&d),!this.props.loading&&!this.props.secretKeyAvailable&&i.a.createElement(y.a,{secretKey:this.props.secretKey,generateSecretKey:this.props.generateSecretKey}),this.props.secretKeyAvailable&&i.a.createElement(f.a,{encryptedValue:this.props.encryptedValue,encryptValue:this.props.encryptValue,generateSecretKey:this.props.startGeneration}))}}]),t}(i.a.PureComponent);h.propTypes={loading:l.a.bool.isRequired,secretKeyAvailable:l.a.bool,secretKey:l.a.string,encryptedValue:l.a.string,checkSecretKey:l.a.func.isRequired,generateSecretKey:l.a.func.isRequired,encryptValue:l.a.func.isRequired,startGeneration:l.a.func.isRequired},t.a=h},2488:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(0),i=n.n(c),s=n(6),l=n.n(s),u=n(2),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),y=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),p(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.generateSecretKey()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{id:"generate-secret-key-form-container"},null!=this.props.secretKey?i.a.createElement("div",null,i.a.createElement("div",{className:"big-spacer-bottom"},i.a.createElement("h3",{className:"spacer-bottom"},Object(u.translate)("encryption.secret_key")),i.a.createElement("input",{id:"secret-key",className:"input-large",type:"text",readOnly:!0,value:this.props.secretKey})),i.a.createElement("h3",{className:"spacer-bottom"},Object(u.translate)("encryption.how_to_use")),i.a.createElement("div",{className:"markdown",dangerouslySetInnerHTML:{__html:Object(u.translate)("encryption.how_to_use.content")}})):i.a.createElement("div",null,i.a.createElement("p",{className:"spacer-bottom",dangerouslySetInnerHTML:{__html:Object(u.translate)("ecryption.secret_key_description")}}),i.a.createElement("form",{id:"generate-secret-key-form",onSubmit:function(t){return e.handleSubmit(t)}},i.a.createElement("button",null,Object(u.translate)("encryption.generate_secret_key"),"s"))))}}]),t}(i.a.PureComponent);y.propTypes={secretKey:l.a.string,generateSecretKey:l.a.func.isRequired},t.a=y},2489:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(0),i=n.n(c),s=n(6),l=n.n(s),u=n(2),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),y=function(e){function t(){var e,n,o,c;r(this,t);for(var i=arguments.length,s=Array(i),l=0;l<i;l++)s[l]=arguments[l];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),o.state={value:""},c=n,a(o,c)}return o(t,e),p(t,[{key:"handleEncrypt",value:function(e){e.preventDefault(),this.props.encryptValue(this.state.value)}},{key:"handleGenerateNewKey",value:function(e){e.preventDefault(),this.props.generateSecretKey()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{id:"encryption-form-container"},i.a.createElement("div",{className:"spacer-bottom"},Object(u.translate)("encryption.form_intro")),i.a.createElement("form",{id:"encryption-form",className:"big-spacer-bottom",onSubmit:function(t){return e.handleEncrypt(t)}},i.a.createElement("textarea",{autoFocus:!0,className:"input-super-large",id:"encryption-form-value",onChange:function(t){return e.setState({value:t.target.value})},required:!0,rows:3,value:this.state.value}),i.a.createElement("div",{className:"spacer-top"},i.a.createElement("button",null,Object(u.translate)("encryption.encrypt")))),null!=this.props.encryptedValue&&i.a.createElement("div",null,Object(u.translate)("encryption.encrypted_value"),": ",i.a.createElement("input",{id:"encrypted-value",className:"input-clear input-code input-super-large",type:"text",readOnly:!0,value:this.props.encryptedValue})),i.a.createElement("div",{className:"huge-spacer-top bordered-top"},i.a.createElement("div",{className:"big-spacer-top spacer-bottom",dangerouslySetInnerHTML:{__html:Object(u.translate)("encryption.form_note")}}),i.a.createElement("form",{id:"encryption-new-key-form",onSubmit:function(t){return e.handleGenerateNewKey(t)}},i.a.createElement("button",null,Object(u.translate)("encryption.generate_new_secret_key")))))}}]),t}(i.a.PureComponent);y.propTypes={encryptedValue:l.a.string,encryptValue:l.a.func.isRequired,generateSecretKey:l.a.func.isRequired},t.a=y}});
//# sourceMappingURL=269.968c028e.chunk.js.map