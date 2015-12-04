/*!CK:3413943680!*//*1448436929,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["bEmnv"]); }

__d('StarsInput.react',['React','TooltipLink.react','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=h.PropTypes,m=h.createClass({displayName:'StarsInput',propTypes:{allowMultipleSubmissions:l.bool,count:l.number,large:l.bool,onClick:l.func.isRequired,starLabels:l.array},getDefaultProps:function(){return {allowMultipleSubmissions:false,count:0,large:false,starLabels:[k._("Poor"),k._("Fair"),k._("Good"),k._("Very Good"),k._("Excellent")]};},getInitialState:function(){return {starRating:this.props.count,starsShown:this.props.count,canUpdate:true};},onMouseEnter:function(n,event){if(this.state.canUpdate)this.setState({starsShown:n});},onMouseLeave:function(n,event){if(this.state.canUpdate){var o=this.state.starRating;this.setState({starsShown:o});}},onClick:function(n,event){if(this.state.canUpdate){this.setState({starRating:n,starsShown:n,canUpdate:this.props.allowMultipleSubmissions});this.props.onClick(n);}},getStars:function(){var n=this.props.starLabels.length,o=[];for(var p=0;p<n;p++){var q=p+1;o.push(h.createElement(i,{className:"mls"+(' '+"_22mm")+(this.props.large?' '+"_1vr2":'')+(p>=this.state.starsShown?' '+"_22mn":'')+(p<this.state.starsShown?' '+"_22mo":'')+(!this.state.canUpdate?' '+"_1g87":''),key:p,tooltip:this.props.starLabels[p],onMouseEnter:this.onMouseEnter.bind(this,q),onMouseLeave:this.onMouseLeave.bind(this,q),onClick:this.onClick.bind(this,q),position:'above',alignH:'center'}));}return o;},render:function(){return (h.createElement('div',{className:this.props.className},this.getStars()));}});f.exports=m;},null);
__d('XUIOverlayButton.react',['AbstractButton.react','React','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=i.createClass({displayName:'XUIOverlayButton',render:function(){var m="_51tl selected";return (i.createElement(h,babelHelpers._extends({},this.props,{className:k(this.props.className,m)})));}});f.exports=l;},null);
__d('MessengerProfileImageWrapper.react',['ReactComponentWithPureRenderMixin','React','cssVar','cx','getViewportDimensions','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m){'use strict';if(c.__markCompiled)c.__markCompiled();var n=i.PropTypes,o=i.createClass({displayName:'MessengerProfileImageWrapper',mixins:[h],propTypes:{isMessengerUser:n.bool,showBadge:n.bool,size:n.number,tooltipContent:n.string},render:function(){var q={};if(this.props.tooltipContent){q['aria-label']=this.props.tooltipContent;q['data-hover']='tooltip';var r=l().width,s=parseInt("640px".replace('px',''),10);q['data-tooltip-position']=r<=s?'above':'left';}return (i.createElement('div',babelHelpers._extends({className:m("_4ldz",this.props.className),style:{width:this.props.size+'px',height:this.props.size+'px'}},q),i.createElement('div',{className:"_4ld-",style:{width:this.props.size+'px',height:this.props.size+'px'}},this.props.children),this._renderBadge()));},_renderBadge:function(){if(!this.props.showBadge||this.props.isMessengerUser==null)return null;return (i.createElement(p,{className:"_4ld_",isMessengerUser:this.props.isMessengerUser}));}}),p=i.createClass({displayName:'MessengerBadge',mixins:[h],propTypes:{isMessengerUser:n.bool,size:n.number},render:function(){return (i.createElement('div',{className:m(this.props.className,"_2pom")},i.createElement('div',{className:"_2pon"+(this.props.isMessengerUser?' '+"_2poo":'')+(!this.props.isMessengerUser?' '+"_2pop":'')})));}});f.exports=o;},null);
__d('MessengerButton.react',['ReactComponentWithPureRenderMixin','React','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k){'use strict';if(c.__markCompiled)c.__markCompiled();var l=i.PropTypes,m=i.createClass({displayName:'MessengerButton',mixins:[h],propTypes:{label:l.string.isRequired,type:l.oneOf(['primary','secondary']).isRequired,use:l.oneOf(['default','danger']).isRequired},getDefaultProps:function(){return {use:'default'};},handleLinkClick:function(n){if(this.props.disabled){n.preventDefault();}else if(this.props.onClick)this.props.onClick(n);},render:function(){var n=this.props,o=n.className,p=n.label,q=babelHelpers.objectWithoutProperties(n,['className','label']);return (i.createElement('a',babelHelpers._extends({className:k("_3quh"+(' '+"_30yy")+(this.props.type==='primary'?' '+"_2t_":'')+(this.props.type==='secondary'?' '+"_2u0":'')+(this.props.use==='danger'?' '+"_3ay_":'')+(this.props.disabled?' '+"_4zab":''),o),href:'#',role:'button'},q,{onClick:this.handleLinkClick}),p));}});f.exports=m;},null);
__d('MessengerDialog.react',['LayerFadeOnHide','LayerHideOnEscape','React','XUIDialog.react','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m){'use strict';if(c.__markCompiled)c.__markCompiled();var n=j.PropTypes,o=j.createClass({displayName:'MessengerDialog',propTypes:{onToggle:n.func.isRequired,repositionOnUpdate:n.bool,shown:n.bool,type:n.oneOf(['alert','default']),width:n.number},getDefaultProps:function(){return {repositionOnUpdate:false,shown:true,type:'alert',width:400};},componentDidUpdate:function(){if(this.props.repositionOnUpdate)setTimeout((function(){if(this.isMounted()&&this.refs.dialog&&this.refs.dialog.layer)this.refs.dialog.layer.updatePosition();}).bind(this),0);},render:function(){return (j.createElement(k,babelHelpers._extends({behaviors:{LayerFadeOnHide:h,LayerHideOnEscape:i}},this.props,{className:m("_4ebx",this.props.className),ref:'dialog'}),j.createElement('div',{className:"_4eby"+(this.props.type==='alert'?' '+"_2c9g":'')+(this.props.type==='default'?' '+"_2c9i":'')},this.props.children)));}});f.exports=o;},null);
__d('MessengerDialogBody.react',['React','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();var k=h.createClass({displayName:'MessengerDialogBody',render:function(){return (h.createElement('div',{className:j("_4eb-",this.props.className)},this.props.children));}});f.exports=k;},null);
__d('MessengerDialogFooter.react',['LeftRight.react','React','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k){'use strict';if(c.__markCompiled)c.__markCompiled();var l=i.PropTypes,m=i.createClass({displayName:'MessengerDialogFooter',propTypes:{leftContent:l.object},render:function(){return (i.createElement('div',{className:k("_4eb_",this.props.className)},i.createElement(h,null,i.createElement('div',{className:"_2_d1"},this.props.leftContent),i.createElement('div',null,this.props.children))));}});f.exports=m;},null);
__d('MessengerDialogHeader.react',['React','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();var k=h.createClass({displayName:'MessengerDialogHeader',render:function(){return (h.createElement('h2',{className:j("_4ebz",this.props.className),id:this.props.id},this.props.children));}});f.exports=k;},null);
__d('MessengerSpinner.react',['Image.react','ReactComponentWithPureRenderMixin','React','cx','fbt','ix','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){'use strict';if(c.__markCompiled)c.__markCompiled();var o=j.PropTypes,p=m('/images/mercury/clients/messenger/core/LoadingSpinner.png'),q=m('/images/mercury/clients/messenger/core/LoadingSpinnerGrey.png'),r=m('/images/mercury/clients/messenger/core/LoadingSpinnerExtraLarge.png'),s=24,t=32,u=j.createClass({displayName:'MessengerSpinner',mixins:[i],propTypes:{color:o.oneOf(['blue','grey']),size:o.oneOf([s,t])},getDefaultProps:function(){return {color:'blue',size:s};},render:function(){return (j.createElement(h,{'aria-label':l._("Loading..."),'aria-busy':true,className:n(this.props.className,"_3u55 _3qh2"),height:this.props.size,src:this._getSpinnerSrc(),width:this.props.size}));},_getSpinnerSrc:function(){return this.props.size===s?this.props.color==='blue'?p:q:r;}});u.Sizes={LARGE:t,MEDIUM:s};f.exports=u;},null);
__d('FBRTCDialogFooter.react',['MessengerDialogFooter.react','XUIDialogFooter.react','FBRTCConfig'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();f.exports=j.isMessengerDotCom()?h:i;},null);
__d("XVideoCallAdminMessageController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/videocall\/admin_msg\/",{});},null);