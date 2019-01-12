(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{213:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},227:function(e,t,a){e.exports=a.p+"static/media/blue-marker.bc8cc4ea.svg"},235:function(e,t,a){e.exports=a(511)},240:function(e,t,a){},510:function(e,t,a){},511:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(9),s=a.n(r),i=(a(240),a(12)),l=a(13),c=a(15),u=a(14),m=a(16),d=a(213),g=a.n(d),p=a(25),h=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("header",{className:"App-header"},n.a.createElement("img",{src:g.a,className:"App-logo",alt:"logo"}),n.a.createElement("div",{className:"App-title"}," Around Web"),this.props.isLoggedin?n.a.createElement("a",{href:"topbar",className:"logout",onClick:this.props.handleLogout},n.a.createElement(p.a,{type:"logout"})," ","Logout"):null)}}]),t}(n.a.Component),f=a(522),b=a(516),v=a(520),E=a(133),y="https://around-75015.appspot.com/api/v1",O="TOKEN_KEY",w="Bearer",j={timeout:36e4,maximumAge:27e3},L="POST_KEY",S=.02,k=a(512),P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={confirmDirty:!1},a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFieldsAndScroll(function(e,t){e||(console.log("Received values of form: ",t),fetch("".concat(y,"/signup"),{method:"POST",body:JSON.stringify({username:t.username,password:t.password})}).then(function(e){if(e.ok)return e;throw new Error(e.statusText)}).then(function(e){f.a.success("Registration Succeed!"),a.props.history.push("/login")}).catch(function(e){return f.a.error("Registration Failed!")}))})},a.handleConfirmBlur=function(e){var t=e.target.value;a.setState({confirmDirty:a.state.confirmDirty||!!t})},a.compareToFirstPassword=function(e,t,o){var n=a.props.form;t&&t!==n.getFieldValue("password")?o("Two passwords that you enter is inconsistent!"):o()},a.validateToNextPassword=function(e,t,o){var n=a.props.form;t&&a.state.confirmDirty&&n.validateFields(["confirm"],{force:!0}),o()},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}};return n.a.createElement(b.a,{className:"register",onSubmit:this.handleSubmit},n.a.createElement(b.a.Item,Object.assign({},t,{label:"Username"}),e("username",{rules:[{required:!0,message:"Please input your Username!"}]})(n.a.createElement(v.a,null))),n.a.createElement(b.a.Item,Object.assign({},t,{label:"Password"}),e("password",{rules:[{required:!0,message:"Please input your password!"},{validator:this.validateToNextPassword}]})(n.a.createElement(v.a,{type:"password"}))),n.a.createElement(b.a.Item,Object.assign({},t,{label:"Confirm Password"}),e("confirm",{rules:[{required:!0,message:"Please confirm your password!"},{validator:this.compareToFirstPassword}]})(n.a.createElement(v.a,{type:"password",onBlur:this.handleConfirmBlur}))),n.a.createElement(b.a.Item,{wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}},n.a.createElement(E.a,{type:"primary",htmlType:"submit"},"Register"),n.a.createElement("p",null," I have an account, go back to ",n.a.createElement(k.a,{to:"/login"},"login")," ")))}}]),t}(n.a.Component),C=b.a.create({name:"register"})(P),N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){e||(console.log("Received values of form: ",t),console.log("Received values of form: ",t),fetch("".concat(y,"/login"),{method:"POST",body:JSON.stringify({username:t.username,password:t.password})}).then(function(e){if(e.ok)return e.text();throw new Error(e.statusText)}).then(function(e){f.a.success("Login Succeed!"),console.log(e),a.props.handleLogin(e)}).catch(function(e){return f.a.error("Login Failed!")}))})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return n.a.createElement(b.a,{onSubmit:this.handleSubmit,className:"login-form"},n.a.createElement(b.a.Item,null,e("username",{rules:[{required:!0,message:"Please input your username!"}]})(n.a.createElement(v.a,{prefix:n.a.createElement(p.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),n.a.createElement(b.a.Item,null,e("password",{rules:[{required:!0,message:"Please input your Password!"}]})(n.a.createElement(v.a,{prefix:n.a.createElement(p.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),n.a.createElement(b.a.Item,null,n.a.createElement(E.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Log in"),"Or ",n.a.createElement(k.a,{to:"/register"},"register now!")))}}]),t}(n.a.Component),I=b.a.create()(N),F=a(518),x=a(521),A=a(513),T=a(514),M=a(515),R=a(232),D=a(221),G=a.n(D),B=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.images.map(function(e){return Object(R.a)({},e,{customOverlay:n.a.createElement("div",{style:J},n.a.createElement("div",null,"".concat(e.user,": ").concat(e.caption)))})});return n.a.createElement("div",{style:z},n.a.createElement(G.a,{backdropClosesModal:!0,images:e,enableImageSelection:!1}))}}]),t}(o.Component),z={display:"block",minHeight:"1px",width:"100%",border:"1px solid #ddd",overflow:"auto"},J={backgroundColor:"rgba(0, 0, 0, 0.8)",maxHeight:"240px",overflow:"hidden",position:"absolute",bottom:"0",width:"100%",color:"white",padding:"2px",fontSize:"90%"},U=a(519),W=a(517),q=function(e){function t(){var e,a;Object(i.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){e||console.log("Received values of form: ",t)})},a.normFile=function(e){return console.log("Upload event:",e),Array.isArray(e)?e:e&&e.fileList},a.beforeUpload=function(){return!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t={labelCol:{span:6},wrapperCol:{span:14}};return n.a.createElement(b.a,{onSubmit:this.handleSubmit},n.a.createElement(b.a.Item,Object.assign({},t,{label:"Message"}),e("message",{rules:[{required:!0,message:"Please input your username!"}]})(n.a.createElement(v.a,{placeholder:"Input your message here"}))),n.a.createElement(b.a.Item,Object.assign({},t,{label:"Image"}),n.a.createElement("div",{className:"dropbox"},e("image",{valuePropName:"fileList",getValueFromEvent:this.normFile,rules:[{required:!0,message:"Please select a pic!"}]})(n.a.createElement(W.a.Dragger,{name:"files",action:"/upload.do",beforeUpload:this.beforeUpload},n.a.createElement("p",{className:"ant-upload-drag-icon"},n.a.createElement(p.a,{type:"inbox"})),n.a.createElement("p",{className:"ant-upload-text"},"Click or drag file to this area to upload"),n.a.createElement("p",{className:"ant-upload-hint"},"Support for a single or bulk upload."))))))}}]),t}(n.a.Component),V=b.a.create()(q),H=function(e){function t(){var e,a;Object(i.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={ModalText:"Content of the modal",visible:!1,confirmLoading:!1},a.showModal=function(){a.setState({visible:!0})},a.handleOk=function(){a.form.validateFields(function(e,t){if(!e){console.log(t);var o=JSON.parse(localStorage.getItem(L)),n=o.lat,r=o.lon,s=localStorage.getItem(O),i=new FormData;i.set("lat",n+S*Math.random()*2-S),i.set("lon",r+S*Math.random()*2-S),i.set("message",t.message),i.set("image",t.image[0].originFileObj),a.setState({confirmLoading:!0}),fetch("".concat(y,"/post"),{method:"POST",body:i,headers:{Authorization:"".concat(w," ").concat(s)}}).then(function(e){if(e.ok)return a.form.resetFields(),a.setState({visible:!1,confirmLoading:!1}),a.props.loadNearbyPosts();throw new Error(e.statusText)}).then(function(){return f.a.success("Post created successfully!")}).catch(function(e){console.log(e),a.setState({confirmLoading:!1}),f.a.error("Failed to create the post.")})}})},a.handleCancel=function(){console.log("Clicked cancel button"),a.setState({visible:!1})},a.getFormRef=function(e){console.log(e),a.form=e},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.visible,a=e.confirmLoading;return n.a.createElement("div",null,n.a.createElement(E.a,{type:"primary",onClick:this.showModal},"Create New Post"),n.a.createElement(U.a,{title:"Create New Post",visible:t,onOk:this.handleOk,okText:"Create",confirmLoading:a,onCancel:this.handleCancel},n.a.createElement(V,{ref:this.getFormRef})))}}]),t}(n.a.Component),K=a(50),Z=a(227),Y=a.n(Z),_=function(e){function t(){var e,a;Object(i.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={isOpen:!1},a.toggleOpen=function(){a.setState(function(e){return{isOpen:!e.isOpen}})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.post,t=e.user,a=e.location,o=e.message,r=e.url,s=e.type,i="image"===s,l=i?void 0:{url:Y.a,scaledSize:new window.google.maps.Size(26,41)};return n.a.createElement(K.Marker,{position:{lat:a.lat,lng:a.lon},onMouseOver:i?this.toggleOpen:void 0,onMouseOut:i?this.toggleOpen:void 0,onClick:i?void 0:this.toggleOpen,icon:l},this.state.isOpen?n.a.createElement(K.InfoWindow,{onClick:this.toggleOpen},n.a.createElement("div",null,"image"===s?n.a.createElement("img",{alt:o,src:r,className:"around-marker-image"}):n.a.createElement("video",{src:r,controls:!0,className:"around-marker-video"}),n.a.createElement("p",null,"".concat(t," : ").concat(o)))):null)}}]),t}(n.a.Component),X=function(e){function t(){var e,a;Object(i.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).reloadMarkers=function(){var e=a.getCenter(),t=a.getRadius();a.props.loadNearbyPosts(e,t)},a.getMapRef=function(e){a.map=e},a.getCenter=function(){if(a.map){var e=a.map.getCenter();return{lat:e.lat(),lon:e.lng()}}},a.getRadius=function(){var e=a.map.getCenter(),t=a.map.getBounds();if(e&&t){var o=t.getNorthEast(),n=new window.google.maps.LatLng(e.lat(),o.lng());return.001*window.google.maps.geometry.spherical.computeDistanceBetween(e,n)}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=JSON.parse(localStorage.getItem(L)),t=e.lat,a=e.lon;return n.a.createElement(K.GoogleMap,{defaultZoom:12,defaultCenter:{lat:t,lng:a},onDragEnd:this.reloadMarkers,onZoomChanged:this.reloadMarkers,ref:this.getMapRef},this.props.posts&&this.props.posts.length>0&&this.props.posts.map(function(e){return n.a.createElement(_,{post:e,key:e.url})}))}}]),t}(n.a.Component),$=Object(K.withScriptjs)(Object(K.withGoogleMap)(X)),Q=F.a.TabPane,ee=x.a.Group,te=function(e){function t(){var e,a;Object(i.a)(this,t);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isLoadingGeoLocation:!1,isLoadingPosts:!1,error:"",post:[],topic:"around"},a.onSuccessLoadGeoLocation=function(e){console.log(e);var t=e.coords,o=t.latitude,n=t.longitude;localStorage.setItem(L,JSON.stringify({lat:o,lon:n})),a.setState({isLoadingGeoLocation:!1}),a.loadNearbyPosts()},a.onFailedLoadGeoLocation=function(){a.setState({isLoadingGeoLocation:!1,error:"Failed to Load Geo-Location"})},a.loadNearbyPosts=function(e,t){var o=e||JSON.parse(localStorage.getItem(L)),n=o.lat,r=o.lon,s=t||2e3,i=localStorage.getItem(O);a.setState({isLoadingPosts:!0}),fetch("".concat(y,"/search?lat=").concat(n,"&lon=").concat(r,"&range=").concat(s),{method:"GET",headers:{Authorization:"".concat(w," ").concat(i)}}).then(function(e){if(e.ok)return e.json();throw new Error("Failed to load posts.")}).then(function(e){console.log(e),a.setState({posts:e||[],isLoadingPosts:!1})}).catch(function(e){console.log(e.message),a.setState({isLoadingPosts:!1,error:e.message})})},a.getPanelContent=function(e){var t=a.state,o=t.error,r=t.isLoadingGeoLocation,s=t.isLoadingPosts;return o?n.a.createElement("div",null,o):r?n.a.createElement(A.a,{tip:"Loading geo location..."}):s?n.a.createElement(A.a,{tip:"Loading posts..."}):a.state.posts&&a.state.posts.length>0?"image"===e?a.getImagePosts():a.getVideoPosts():"No nearby posts."},a.getImagePosts=function(){var e=a.state.posts.filter(function(e){return"image"===e.type}).map(function(e){return{user:e.user,src:e.url,thumbnail:e.url,caption:e.message,thumbnailWidth:400,thumbnailHeight:300}});return n.a.createElement(B,{images:e})},a.getVideoPosts=function(){return n.a.createElement(T.a,{gutter:32},a.state.posts.filter(function(e){return"video"===e.type}).map(function(e){return n.a.createElement(M.a,{span:6,key:e.url},n.a.createElement("video",{src:e.url,controls:!0,className:"video-block"}),n.a.createElement("p",null,"".concat(e.user,": ").concat(e.message)," "))}))},a.onTopicChange=function(e){var t=e.target.value;a.setState({topic:t}),"face"===t?a.loadFacesAroundTheWorld():a.loadNearbyPosts()},a.loadFacesAroundTheWorld=function(){a.setState({isLoadingPosts:!0});var e=localStorage.getItem(O);fetch("".concat(y,"/cluster?term=face"),{method:"GET",headers:{Authorization:"".concat(w," ").concat(e)}}).then(function(e){if(e.ok)return e.json();throw new Error("Failed to load posts.")}).then(function(e){console.log(e),a.setState({posts:e||[],isLoadingPosts:!1})}).catch(function(e){console.log(e.message),a.setState({isLoadingPosts:!1,error:e.message})})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){"geolocation"in navigator?(navigator.geolocation.getCurrentPosition(this.onSuccessLoadGeoLocation,this.onFailedLoadGeoLocation,j),this.setState({isLoadingGeoLocation:!0})):(this.setState({error:"geolocation IS NOT available"}),console.log("geolocation IS NOT available"))}},{key:"render",value:function(){console.log("state",this.state);var e=n.a.createElement(H,{loadNearbyPosts:this.loadNearbyPosts});return n.a.createElement("div",null,n.a.createElement(ee,{onChange:this.onTopicChange,value:this.state.topic},n.a.createElement(x.a,{value:"around"}," Post Around Me"),n.a.createElement(x.a,{value:"face"}," Faces Around the World")),n.a.createElement(F.a,{className:"main-tabs",tabBarExtraContent:e},n.a.createElement(Q,{tab:"Image Posts",key:"1"},this.getPanelContent("image")),n.a.createElement(Q,{tab:"Video Posts",key:"2"},this.getPanelContent("video")),n.a.createElement(Q,{tab:"Map",key:"3"},n.a.createElement($,{isMarkerShown:!0,googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyCckcZPKvejFZihOIXvYVzZKDiiV01rxbc&v=3.exp&libraries=geometry,drawing,places",loadingElement:n.a.createElement("div",{style:{height:"100%"}}),containerElement:n.a.createElement("div",{style:{height:"600px"}}),mapElement:n.a.createElement("div",{style:{height:"100%"}}),posts:this.state.posts,loadNearbyPosts:this.loadNearbyPosts}))))}}]),t}(n.a.Component),ae=a(524),oe=a(526),ne=a(525),re=function(e){function t(){var e,a;Object(i.a)(this,t);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).getRedirect=function(){return a.props.isLoggedin?n.a.createElement(ae.a,{to:"/home"}):n.a.createElement(ae.a,{to:"/login"})},a.getLogin=function(){return a.props.isLoggedin?n.a.createElement(ae.a,{to:"/home"}):n.a.createElement(I,{handleLogin:a.props.handleLogin})},a.getHome=function(){return a.props.isLoggedin?n.a.createElement(te,null):n.a.createElement(ae.a,{to:"/login"})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"main"},n.a.createElement(oe.a,null,n.a.createElement(ne.a,{exact:!0,path:"/",render:this.getRedirect}),n.a.createElement(ne.a,{path:"/login",component:this.getLogin}),n.a.createElement(ne.a,{path:"/register",component:C}),n.a.createElement(ne.a,{path:"/home",render:this.getHome}),n.a.createElement(ne.a,{render:this.getRedirect})))}}]),t}(n.a.Component),se=(a(510),function(e){function t(){var e,a;Object(i.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={isLoggedin:!!localStorage.getItem(O)},a.handleLogin=function(e){localStorage.setItem(O,e),a.setState({isLoggedin:!0})},a.handleLogout=function(){localStorage.removeItem(O),a.setState({isLoggedin:!1})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(h,{isLoggedin:this.state.isLoggedin,handleLogout:this.handleLogout}),n.a.createElement(re,{isLoggedin:this.state.isLoggedin,handleLogin:this.handleLogin}))}}]),t}(o.Component)),ie=a(523);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(ie.a,null,n.a.createElement(se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[235,2,1]]]);
//# sourceMappingURL=main.93c1752b.chunk.js.map