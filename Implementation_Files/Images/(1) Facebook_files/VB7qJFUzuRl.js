/*!CK:2689957738!*//*1448856263,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["aekOf"]); }

__d('GroupMentionsTypeaheadView.react',['Image.react','MentionsTypeaheadViewItem.react','React','cx','fbt','ix','uniqueID'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=j.PropTypes,p=l._("No Results"),q=j.createClass({displayName:'GroupMentionsTypeaheadView',propTypes:{id:o.string,viewProps:o.object,highlightedEntry:o.object,entries:o.array.isRequired,onSelect:o.func.isRequired,onHighlight:o.func,onRenderHighlight:o.func},getInitialState:function(){return {emptyMembersHeaderID:n(),membersHeaderID:n(),nonMembersHeaderID:n()};},_renderItem:function(r,s){var t=r===this.props.highlightedEntry;return (j.createElement(i,{key:r.getUniqueID(),ariaDescribedBy:s,entry:r,highlighted:t,onSelect:this.props.onSelect,onHighlight:this.props.onHighlight,onRenderHighlight:this._onRenderHighlight}));},_renderHashtagItem:function(r){var s=r===this.props.highlightedEntry;return (j.createElement(i,{key:r.getUniqueID(),entry:r,highlighted:s,onSelect:this.props.onSelect,onHighlight:this.props.onHighlight,onRenderHighlight:this.props.onRenderHighlight}));},_renderMembers:function(r){var s=null;if(r.length){s=r.map((function(v,w){var x=w===0?this.state.membersHeaderID:null;return this._renderItem(v,x);}).bind(this));}else s=[j.createElement('li',{className:"_2ph-",key:this.state.emptyMembersHeaderID,role:'option','aria-describedby':this.state.membersHeaderID,'aria-label':p},p)];var t=null;if(this.props.viewProps.member.aux)t=j.createElement('span',{className:"_1knr"},' \u00b7 ',this.props.viewProps.member.aux);var u=[j.createElement('li',{key:this.state.membersHeaderID,className:"_1kns"},this.props.viewProps.member.title,t)];u.push.apply(u,s);return u;},_renderNonMembers:function(r){if(!r.length)return null;var s=null;if(this.props.viewProps.nonMember.aux)s=j.createElement('span',{className:"_1knr"},' \u00b7 ',this.props.viewProps.nonMember.aux);var t=[j.createElement('li',{key:this.state.nonMembersHeaderID,className:"_1kns"},j.createElement(h,{src:m('/images/groups/secret-tag.png'),className:"_1knt"}),this.props.viewProps.nonMember.title,s)];t.push.apply(t,r.map((function(u,v){var w=v===0?this.state.nonMembersHeaderID:null;return this._renderItem(u,w);}).bind(this)));return t;},render:function(){var r=[],s=[],t=[];this.props.entries.forEach(function(x){var y=x.getAuxiliaryData(),z=y.renderType;if(z==='member'){r.push(x);}else if(z==='hashtag'){t.push(x);}else s.push(x);});var u="_5u8_"+(!r.length&&!s.length&&!t.length?' '+"_5u90":''),v=r.length===0&&s.length===0&&t.length>0,w=v?this.props.entries.map(this._renderHashtagItem):this._renderMembers(r).concat(this._renderNonMembers(s));return (j.createElement('ul',{className:u,role:'listbox',id:this.props.id},w));}});f.exports=q;},null);
__d('EntStreamGroupMall',['DOM','$','ge'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k={replacePager:function(l){h.setContent(i('pagelet_group_pager'),l);},replaceFilesPager:function(l,m){h.setContent(i('group_files_pager_'+m),l);},replacePostApprovalSection:function(l){var m=j('pagelet_consolidate_posts');if(m!==null)h.setContent(m,l);}};f.exports=k;},null);
__d('GroupViewportTracking',['DOM','csx','ViewportTracking','Banzai','$'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m,n;m=babelHelpers.inherits(o,j);n=m&&m.prototype;o.prototype.getDataFromConfig=function(p){'use strict';this.timeout=p.record_delay;};o.prototype.getTimeout=function(){'use strict';return this.timeout;};o.prototype.getAllStories=function(){'use strict';return h.scry(l('pagelet_group_mall'),"._5pat");};o.prototype.getStoryID=function(p){'use strict';var q=JSON.parse(p.getAttribute('data-ft'));return q.mf_story_key;};o.prototype.getDataToLog=function(p){'use strict';return JSON.parse(p.getAttribute('data-ft'));};o.prototype.sendDataToLog=function(p,q){'use strict';if(this.useBanzai)k.post('group_feed_tracking',q);};function o(){'use strict';m.apply(this,arguments);}f.exports.init=function(p){o.instance=new o();o.instance.init(p);};f.exports.getInstance=function(){return o.instance;};},null);
__d('ReactComposerFileAttachmentSelector.react',['ReactComposerAttachmentSelectorContainer.react','ReactComposerAttachmentType','ReactComponentWithPureRenderMixin','React','fbt','ix'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n=k.PropTypes,o=k.createClass({displayName:'ReactComposerFileAttachmentSelector',mixins:[j],propTypes:{label:n.string},getDefaultProps:function(){return {label:l._("Add File")};},render:function(){return (k.createElement(h,{attachmentID:i.FILE,label:this.props.label,icon:m('/images/litestand/composer/icons/addfile.png')}));}});f.exports=o;},null);
__d("XReactComposerFileAttachmentBootstrapController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/react_composer\/file\/bootstrap\/",{composer_id:{type:"String",required:true},composer_type:{type:"Enum",required:true,enumType:1},target_id:{type:"Int",required:true}});},null);
__d('ReactComposerFileLazyAttachment.react',['ReactComposerAttachmentType','ReactComposerLoadableAttachmentBodyMixin','XReactComposerFileAttachmentBootstrapController','ActorURI','Bootloader','React'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n=m.createClass({displayName:'ReactComposerFileLazyAttachment',mixins:[i],statics:{attachmentID:h.FILE},bootload:function(o){if(this.props.bootload){this.props.bootload(o);}else l.loadModules(["ReactComposerFileAttachment.react"],o);},getBootstrapURI:function(){return k.create(j.getURIBuilder().setString('composer_id',this.context.composerID).setEnum('composer_type',this.context.composerType).setInt('target_id',this.context.targetID).getURI(),this.context.actorID);}});f.exports=n;},null);
__d('ReactComposerQuestionAttachmentSelector.react',['ReactComposerAttachmentSelectorContainer.react','ReactComposerAttachmentType','ReactComponentWithPureRenderMixin','React','fbt','ix'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n=k.PropTypes,o=k.createClass({displayName:'ReactComposerQuestionAttachmentSelector',mixins:[j],propTypes:{label:n.string},getDefaultProps:function(){return {label:l._("Create Poll")};},render:function(){return (k.createElement(h,{attachmentID:i.QUESTION,label:this.props.label,icon:m('/images/litestand/composer/icons/questions.png')}));}});f.exports=o;},null);
__d("XReactComposerQuestionAttachmentBootstrapController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/react_composer\/question\/bootstrap\/",{composer_id:{type:"String",required:true},composer_type:{type:"Enum",required:true,enumType:1},target_id:{type:"String",required:true}});},null);
__d('ReactComposerQuestionLazyAttachment.react',['ReactComposerAttachmentType','ReactComposerLoadableAttachmentBodyMixin','ReactComposerBootloaderPropTypes','XReactComposerQuestionAttachmentBootstrapController','ActorURI','Bootloader','React','invariant'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();var p=n.createClass({displayName:'ReactComposerQuestionLazyAttachment',mixins:[i],statics:{attachmentID:h.QUESTION},propTypes:{bootloader:j.isRequired},bootload:function(q){!this.props.bootloader.questionAttachment?o(0):undefined;this.props.bootloader.questionAttachment(q);},getBootstrapURI:function(){return l.create(k.getURIBuilder().setString('composer_id',this.context.composerID).setEnum('composer_type',this.context.composerType).setString('target_id',this.context.targetID).getURI(),this.context.actorID);}});f.exports=p;},null);
__d('ReactComposerSellActionType',['keyMirror'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();f.exports=h({CLEAR_LOCATION:null,POST_BUTTON_ENABLED:null,SAVE_CATEGORY:null,SAVE_LOCATION:null,SAVE_PICKUP_NOTE:null,SAVE_PRICE:null,SAVE_TITLE:null,SET_SELL_CONFIG:null,REGISTER_COMPOSER:null,POST_TO_MARKETPLACE_SEEN:null,TOGGLE_NEARBY_LOCATION_CHECKED:null,CROSS_POST_CHECKBOX_SEEN:null,TOGGLE_CROSS_POST_CHECKBOX:null,SET_CURRENCY:null,SELL_INTERCEPT:null,SELL_INTERCEPT_ATTEMPT:null});},null);
__d('ReactComposerSellStore',['ReactComposerSellActionType','ReactComposerStoreBase','fbt'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k,l,m=100,n=9;k=babelHelpers.inherits(o,i);l=k&&k.prototype;function o(){'use strict';var p;l.constructor.call(this,function(){return {categories:[],locationID:'',nearbyLocationChecked:false,nearbyLocationName:'',savedCategoryID:null,savedCategoryText:j._("Select a Category"),showPostNearby:false,showSelectableLocation:false,crossPostChecked:false,showCrossPostCheckbox:false,title:'',pickupNote:'',price:'',interceptWords:[],interceptWordsAfterNumber:[],interceptSell:false,interceptSellAttempt:false};},function(q){switch(q.type){case h.CLEAR_LOCATION:p&&p.$ReactComposerSellStore1(q);break;case h.SAVE_CATEGORY:p&&p.$ReactComposerSellStore2(q);break;case h.SAVE_LOCATION:p&&p.$ReactComposerSellStore3(q);break;case h.SAVE_PICKUP_NOTE:p&&p.$ReactComposerSellStore4(q);break;case h.SAVE_PRICE:p&&p.$ReactComposerSellStore5(q);break;case h.SAVE_TITLE:p&&p.$ReactComposerSellStore6(q);break;case h.SET_SELL_CONFIG:p&&p.$ReactComposerSellStore7(q);break;case h.TOGGLE_NEARBY_LOCATION_CHECKED:p&&p.$ReactComposerSellStore8(q);break;case h.TOGGLE_CROSS_POST_CHECKBOX:p&&p.$ReactComposerSellStore9(q);break;case h.SET_CURRENCY:p&&p.$ReactComposerSellStore10(q);break;case h.SELL_INTERCEPT:p&&p.$ReactComposerSellStore11(q);break;case h.SELL_INTERCEPT_ATTEMPT:p&&p.$ReactComposerSellStore12(q);break;}});p=this;}o.prototype.getInterceptSell=function(p){'use strict';return this.getComposerData(p).interceptSell;};o.prototype.getInterceptSellAttempt=function(p){'use strict';return this.getComposerData(p).interceptSellAttempt;};o.prototype.isPostButtonEnabled=function(p){'use strict';var q=this.getComposerData(p);return !!(q.title.length&&q.price.length&&(!q.categories.length||q.savedCategoryID));};o.prototype.getCategories=function(p){'use strict';return this.getComposerData(p).categories;};o.prototype.getCategoryID=function(p){'use strict';return this.getComposerData(p).savedCategoryID;};o.prototype.getCategoryText=function(p){'use strict';return this.getComposerData(p).savedCategoryText;};o.prototype.getCurrency=function(p){'use strict';return this.getComposerData(p).currency;};o.prototype.getCurrencySymbol=function(p){'use strict';return this.getComposerData(p).currencySymbol;};o.prototype.getLocationID=function(p){'use strict';return this.getComposerData(p).locationID;};o.prototype.getNearbyLocationName=function(p){'use strict';return this.getComposerData(p).nearbyLocationName;};o.prototype.getMaxCharactersForPrice=function(p){'use strict';return n;};o.prototype.getMaxCharactersForPickupNote=function(p){'use strict';return m;};o.prototype.getMaxCharactersForTitle=function(p){'use strict';return m;};o.prototype.getPickupNoteText=function(p){'use strict';return this.getComposerData(p).pickupNote;};o.prototype.getPrice=function(p){'use strict';return this.getComposerData(p).price;};o.prototype.getTitleText=function(p){'use strict';return this.getComposerData(p).title;};o.prototype.getInterceptWords=function(p){'use strict';return this.getComposerData(p).interceptWords;};o.prototype.getInterceptedWordsAfterNumber=function(p){'use strict';return this.getComposerData(p).interceptWordsAfterNumber;};o.prototype.isCategorySelected=function(p){'use strict';return !!this.getComposerData(p).savedCategoryID;};o.prototype.isNearbyLocationChecked=function(p){'use strict';return this.getComposerData(p).nearbyLocationChecked;};o.prototype.isPostNearbyEnabled=function(p){'use strict';return !!this.getComposerData(p).showPostNearby;};o.prototype.isCrossPostChecked=function(p){'use strict';return this.getComposerData(p).crossPostChecked;};o.prototype.isCrossPostCheckboxEnabled=function(p){'use strict';return this.getComposerData(p).showCrossPostCheckbox;};o.prototype.isSelectableLocationEnabled=function(p){'use strict';return this.getComposerData(p).showSelectableLocation;};o.prototype.$ReactComposerSellStore1=function(p){'use strict';var q=this.validateAction(p,'composerID'),r=this.getComposerData(q);r.locationID=r.pickupNote='';this.emitChange(q);};o.prototype.$ReactComposerSellStore2=function(p){'use strict';var q=this.validateAction(p,['composerID','categoryID','categoryText']),r=q[0],s=q[1],t=q[2],u=this.getComposerData(r);u.savedCategoryID=s;u.savedCategoryText=t;this.emitChange(r);};o.prototype.$ReactComposerSellStore3=function(p){'use strict';var q=this.validateAction(p,['composerID','locationID','locationText']),r=q[0],s=q[1],t=q[2],u=this.getComposerData(r);u.locationID=s;u.pickupNote=t;this.emitChange(r);};o.prototype.$ReactComposerSellStore4=function(p){'use strict';var q=this.validateAction(p,['composerID','pickupNote']),r=q[0],s=q[1],t=this.getComposerData(r);t.pickupNote=s.substring(0,m);this.emitChange(r);};o.prototype.$ReactComposerSellStore5=function(p){'use strict';var q=this.validateAction(p,['composerID','price']),r=q[0],s=q[1];if(!isNaN(s)&&/^\d*$/.test(s)&&s.length<=n){var t=this.getComposerData(r);t.price=s;this.emitChange(r);}};o.prototype.$ReactComposerSellStore6=function(p){'use strict';var q=this.validateAction(p,['composerID','title']),r=q[0],s=q[1],t=this.getComposerData(r);t.title=s.substring(0,m);this.emitChange(r);};o.prototype.$ReactComposerSellStore11=function(p){'use strict';var q=this.getComposerData(p.composerID);q.interceptSell=true;this.emitChange(p.composerID);};o.prototype.$ReactComposerSellStore12=function(p){'use strict';var q=this.getComposerData(p.composerID);q.interceptSellAttempt=true;this.emitChange(p.composerID);};o.prototype.$ReactComposerSellStore7=function(p){'use strict';var q=this.validateAction(p,['composerID','config']),r=q[0],s=q[1],t=s.nearbyLocationConfig,u=s.crossPostConfig,v=this.getComposerData(r);v.categories=s.categories;v.currency=s.currency;v.currencySymbol=s.currencySymbol;v.locationID=s.locationID;v.nearbyLocationChecked=t.nearbyLocationChecked;v.nearbyLocationName=t.nearbyLocationName;v.showPostNearby=t.showPostNearby;v.crossPostChecked=u.crossPostChecked;v.showCrossPostCheckbox=u.showCrossPostCheckbox;v.pickupNote=s.pickupNote;v.showSelectableLocation=s.showSelectableLocation;v.interceptWords=s.interceptWords;v.interceptWordsAfterNumber=s.interceptWordsAfterNumber;this.emitChange(r);};o.prototype.$ReactComposerSellStore8=function(p){'use strict';var q=this.validateAction(p,['composerID','isNearbyLocationChecked']),r=q[0],s=q[1],t=this.getComposerData(r);t.nearbyLocationChecked=s;this.emitChange(r);};o.prototype.$ReactComposerSellStore9=function(p){'use strict';var q=this.validateAction(p,['composerID','isCrossPostChecked']),r=q[0],s=q[1],t=this.getComposerData(r);t.crossPostChecked=s;this.emitChange(r);};o.prototype.$ReactComposerSellStore10=function(p){'use strict';var q=this.validateAction(p,['composerID','currency']),r=q[0],s=q[1],t=this.getComposerData(r);t.currency=s;this.emitChange(r);};f.exports=new o();},null);
__d('ReactComposerSellActions',['ReactComposerSellActionType','ReactComposerDispatcher','ReactComposerSellStore'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();c('ReactComposerSellStore');j.prototype.clearLocation=function(k){'use strict';i.dispatch({composerID:k,type:h.CLEAR_LOCATION});};j.prototype.saveCategory=function(k,l,m){'use strict';i.dispatch({composerID:k,type:h.SAVE_CATEGORY,categoryID:l,categoryText:m});};j.prototype.saveLocation=function(k,l,m){'use strict';i.dispatch({composerID:k,type:h.SAVE_LOCATION,locationID:l,locationText:m});};j.prototype.savePickupNote=function(k,l){'use strict';i.dispatch({composerID:k,type:h.SAVE_PICKUP_NOTE,pickupNote:l});};j.prototype.savePrice=function(k,l){'use strict';i.dispatch({composerID:k,type:h.SAVE_PRICE,price:l});};j.prototype.saveTitle=function(k,l){'use strict';i.dispatch({composerID:k,type:h.SAVE_TITLE,title:l});};j.prototype.setConfig=function(k,l){'use strict';i.dispatch({composerID:k,type:h.SET_SELL_CONFIG,config:l});};j.prototype.registerComposer=function(k,l){'use strict';i.dispatch({composerID:k,type:h.REGISTER_COMPOSER,groupID:l});};j.prototype.setCurrency=function(k,l){'use strict';i.dispatch({composerID:k,type:h.SET_CURRENCY,currency:l});};j.prototype.toggleNearbyLocationChecked=function(k,l){'use strict';i.dispatch({composerID:k,type:h.TOGGLE_NEARBY_LOCATION_CHECKED,isNearbyLocationChecked:l});};j.prototype.postButtonEnabled=function(k){'use strict';i.dispatch({composerID:k,type:h.POST_BUTTON_ENABLED});};j.prototype.postToMarketplaceSeen=function(k){'use strict';i.dispatch({composerID:k,type:h.POST_TO_MARKETPLACE_SEEN});};j.prototype.toggleCrossPostCheckbox=function(k,l){'use strict';i.dispatch({composerID:k,type:h.TOGGLE_CROSS_POST_CHECKBOX,isCrossPostChecked:l});};j.prototype.crossPostCheckboxSeen=function(k){'use strict';i.dispatch({composerID:k,type:h.CROSS_POST_CHECKBOX_SEEN});};j.prototype.sellIntercept=function(k){'use strict';i.dispatch({composerID:k,type:h.SELL_INTERCEPT});};j.prototype.sellInterceptAttempt=function(k){'use strict';i.dispatch({composerID:k,type:h.SELL_INTERCEPT_ATTEMPT});};function j(){'use strict';}f.exports=new j();},null);
__d('ReactComposerSellAttachmentTextCounter.react',['Layout.react','ReactComponentWithPureRenderMixin','React','XUIText.react','XUITextInput.react','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=h.Column,p=h.FillColumn,q=j.PropTypes,r=j.createClass({displayName:'ReactComposerSellAttachmentTextCounter',mixins:[i],propTypes:{focusOnMount:q.bool.isRequired,maxLength:q.number.isRequired,onFocus:q.func,onChange:q.func,placeholder:q.string.isRequired,text:q.string.isRequired},getInitialState:function(){return {numCharsRemaining:this.props.maxLength,selected:this.props.focusOnMount,value:this.props.text};},render:function(){var s=n(this.props.className,"_2t_e");return (j.createElement(h,{className:s},j.createElement(p,null,this._getTextInput()),j.createElement(o,null,this.state.selected&&this._getCounter())));},focusInput:function(){this.refs.textInput.focusInput();},_getTextInput:function(){return (j.createElement(l,{className:"_2t_f",maxLength:this.props.maxLength,onBlur:this._onBlur,onFocus:this._onFocus,onChange:this._onChange,onClick:this._onClick,placeholder:this.props.placeholder,ref:'textInput',value:this.state.value}));},_getCounter:function(){return (j.createElement(k,{className:"_2t_g",size:'small'},this.state.numCharsRemaining));},_onBlur:function(){this.setState({selected:false});},_onFocus:function(event){this.props.onFocus&&this.props.onFocus(event);},_onChange:function(event){var s=event.target.value;this.setState({value:s,numCharsRemaining:this.props.maxLength-s.length});this.props.onChange&&this.props.onChange(event);},_onClick:function(){this.setState({selected:true});}});f.exports=r;},null);
__d('ReactComposerSellAttachmentTitleContainer.react',['ReactComposerContextMixin','ReactComposerPropsAndStoreBasedStateMixin','ReactComposerSellActions','ReactComposerSellAttachmentTextCounter.react','ReactComposerSellStore','React','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=m.PropTypes,p=m.createClass({displayName:'ReactComposerSellAttachmentTitleContainer',mixins:[h,i(l)],PropTypes:{focusOnMount:o.bool},statics:{calculateState:function(q){return {titleText:l.getTitleText(q)};}},getDefaultProps:function(){return {focusOnMount:false};},componentDidMount:function(){if(this.props.focusOnMount)this.refs.title.focusInput();},render:function(){return (m.createElement(k,{onFocus:this._onFocus,onChange:this._onChange,className:this.props.className,focusOnMount:this.props.focusOnMount,placeholder:n._("What are you selling?"),text:this.state.titleText,ref:'title',maxLength:l.getMaxCharactersForTitle(this.context.composerID)}));},_onFocus:function(event){event.target.value=this.props.titleText;},_onChange:function(event){j.saveTitle(this.context.composerID,event.target.value);}});f.exports=p;},null);
__d('ReactComposerSellAttachmentPlaceholder.react',['ReactComposerAttachmentActions','ReactComposerAttachmentType','ReactComposerContextMixin','ReactComposerSellAttachmentTitleContainer.react','ReactComponentWithPureRenderMixin','React','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=m.PropTypes,p=m.createClass({displayName:'ReactComposerSellAttachmentPlaceholder',mixins:[j,l],propTypes:{init:o.func},render:function(){return (m.createElement('div',{onClick:this._onClick,onFocus:this.props.init,onMouseOver:this.props.init},m.createElement(k,{className:"_ox2"})));},_onClick:function(){this.props.init&&this.props.init();h.selectAttachment(this.context.composerID,i.SELL,true);}});f.exports=p;},null);
__d('ReactComposerSellAttachmentSelector.react',['ReactComposerAttachmentSelectorContainer.react','ReactComposerAttachmentType','ReactComponentWithPureRenderMixin','React','fbt','ix'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n=k.PropTypes,o=k.createClass({displayName:'ReactComposerSellAttachmentSelector',mixins:[j],propTypes:{label:n.string},getDefaultProps:function(){return {label:l._("Sell Something")};},render:function(){return (k.createElement(h,{ref:'sell_tab_selector',attachmentID:i.SELL,label:this.props.label,icon:m('/images/litestand/composer/icons/sell.png')}));}});f.exports=o;},null);
__d("XReactComposerSellAttachmentBootstrapController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/react_composer\/sell\/bootstrap\/",{composer_id:{type:"String",required:true},composer_type:{type:"Enum",required:true,enumType:1},target_id:{type:"Int",required:true}});},null);
__d('ReactComposerSellLazyAttachment.react',['ReactComposerAttachmentType','ReactComposerLoadableAttachmentBodyMixin','ReactComposerSellAttachmentPlaceholder.react','XReactComposerSellAttachmentBootstrapController','ActorURI','Bootloader','React'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=n.createClass({displayName:'ReactComposerSellLazyAttachment',mixins:[i],statics:{attachmentID:h.SELL},getInitialState:function(){return {shouldInitialize:false};},getPlaceholderModule:function(){return j;},shouldInitialize:function(){return this.state.shouldInitialize;},bootload:function(p){if(this.props.bootload){this.props.bootload(p);}else m.loadModules(["ReactComposerSellAttachmentContainer.react"],p);},getBootstrapURI:function(){return l.create(k.getURIBuilder().setString('composer_id',this.context.composerID).setEnum('composer_type',this.context.composerType).setInt('target_id',this.context.targetID).getURI(),this.context.actorID);},init:function(){this.setState({shouldInitialize:true});}});f.exports=o;},null);
__d('ReactComposerGroupishPeopleTaggerPresenter.react',['GroupMentionsTypeaheadView.react'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();f.exports={ViewRenderer:h,useLayer:true};},null);
__d('ReactComposerGroupBootloader',['Bootloader'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i={statusAttachment:function(j){h.loadModules(["ReactComposerStatusAttachmentContainer.react","ReactComposerGroupPostButtonContainer.react"],j);},mediaAttachment:function(j){h.loadModules(["ReactComposerMediaAttachmentContainer.react","ReactComposerGroupPostButtonContainer.react"],j);},questionAttachment:function(j){h.loadModules(["ReactComposerQuestionAttachmentContainer.react","ReactComposerGroupPostButtonContainer.react"],j);}};f.exports=i;},null);
__d('ReactGroupComposer.react',['ReactComposer.react','ReactComposerAttachmentType','ReactComposerBodyContainer.react','ReactComposerConfig','ReactComposerContextConfig','ReactComposerContextProviderMixin','ReactComposerFileAttachmentSelector.react','ReactComposerFileLazyAttachment.react','ReactComposerGroupBootloader','ReactComposerLazyHeader.react','ReactComposerMediaAttachmentSelector.react','ReactComposerMediaLazyAttachment.react','ReactComposerQuestionAttachmentSelector.react','ReactComposerQuestionLazyAttachment.react','ReactComposerStatusAttachmentSelector.react','ReactComposerStatusLazyAttachment.react','Bootloader','Link.react','LitestandComposer','React','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca){if(c.__markCompiled)c.__markCompiled();var da=aa.createClass({displayName:'ReactGroupComposer',mixins:[m],propTypes:{contextConfig:l.isRequired,config:k.isRequired},componentDidMount:function(){z.initComposer(this.props.contextConfig.composerID);},render:function(){var ea=this._getAttachmentComponents(),fa=ea[0],ga=ea[1],ha=this._getHeaderLink();return (aa.createElement(h,{className:"_4lmd",loggingConfig:this.props.config.loggingConfig},aa.createElement(q,{rightChild:ha},fa),aa.createElement(j,{hasMinHeight:false},ga)));},_getAttachmentComponents:function(){var ea=[],fa=[],ga=this.props.config.attachmentsConfig[i.SELL].enabled,ha=this.props.config.attachmentsConfig[i.MEDIA].showSelector,ia=this.props.config.attachmentsConfig[i.FILE].enabled,ja=this.props.config.attachmentsConfig[i.STATUS].enabled,ka=this.props.config.attachmentsConfig[i.QUESTION].enabled;if(ga){var la=this.props.config.attachmentsConfig[i.SELL],ma=la.attachmentSelector,na=la.lazyAttachment;ea.push(aa.createElement(ma,{key:'sell',label:la.attachmentSelectorLabel}));fa.push(aa.createElement(na,{config:this.props.config,key:'sell',selected:true,bootload:function(wa){return x.loadModules(["ReactComposerSellAttachmentContainer.react","ReactComposerGroupSellPostButtonContainer.react"],wa);}}));}if(ja){var oa=ca._("Write Post"),pa=this.props.config.attachmentsConfig[i.STATUS];if(ga){oa=ca._("Start Discussion");}else if(pa.showShortSelectorLabel)oa=ca._("Post");ea.push(aa.createElement(v,{key:'status',label:oa}));fa.push(aa.createElement(w,{config:this.props.config,key:'status',placeholder:ca._("Write something..."),selected:!ga,bootloader:p}));}if(ha){var qa=this.props.config.attachmentsConfig[i.MEDIA],ra=ca._("Add Photo\/Video");if(qa.showShortSelectorLabel)ra=ca._("Photo\/Video");ea.push(aa.createElement(r,{key:'media',label:ra}));}fa.push(aa.createElement(s,{config:this.props.config,key:'media',bootloader:p}));if(ka){var sa=this.props.config.attachmentsConfig[i.QUESTION],ta=ca._("Create poll");if(sa.showShortSelectorLabel)ta=ca._("Poll");ea.push(aa.createElement(t,{key:'question',label:ta}));fa.push(aa.createElement(u,{config:this.props.config,key:'question',bootloader:p}));}if(ia){var ua=this.props.config.attachmentsConfig[i.FILE],va=ca._("Add File");if(ua.showShortSelectorLabel)va=ca._("File");ea.push(aa.createElement(n,{key:'file',label:va}));fa.push(aa.createElement(o,{config:this.props.config,key:'file',bootload:function(wa){return x.loadModules(["ReactComposerFileAttachment.react","ReactComposerGroupFilePostButtonContainer.react"],wa);}}));}return [ea,fa];},_getHeaderLink:function(){var ea=this.props.config.attachmentsConfig[i.SELL];if(ea&&ea.headerLinkConfig&&ea.headerLinkConfig.href&&ea.headerLinkConfig.label)return (aa.createElement(y,{href:ea.headerLinkConfig.href},ea.headerLinkConfig.label));return null;}});f.exports=da;},null);