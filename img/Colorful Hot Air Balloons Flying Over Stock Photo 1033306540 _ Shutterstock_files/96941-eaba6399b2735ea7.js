"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[96941],{26255:function(n,e,t){t.d(e,{P:function(){return f}});var i=t(70865),r=t(96670),a=t(26297),o=t(52322),s=t(90751),c=t(51852),u=t(80710),d=t(97024),l=t(49427),f=function(n){var e=n.assetOverlayProps,t=(0,a.Z)(n,["assetOverlayProps"]),f=t.assets,v=t.hideAddToCart,g=t.hideSimilarAction,m=t.onAddToCollectionsComplete,p=t.listId,h=(0,d.JI)().assetType,w=(0,c.t)(),x=w.AddToCartViews,I=w.addToCartViewsHandler,C=w.addToCartViewsProps,A=(0,u.VL)({initialAssetType:h}),y=A.AddToCollectionViews,T=A.addToCollectionViewsHandler,P=A.addToCollectionViewsProps,b=(0,s.R)({addToCartViewsHandler:I,addToCollectionViewsHandler:T,assets:f,compLicensingHandler:null,licensingAssetId:null,withGoToPageAction:!0,withNavigationArrows:!0,listId:p}),L=b.PreviewModal,k=b.previewModalProps,Z=b.onAssetModalHandler;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.J,(0,i.Z)({assetOverlayProps:(0,i.Z)({listId:p,addToCartViewsHandler:I,addToCollectionViewsHandler:T,onAssetModalHandler:Z},e)},t)),(0,o.jsx)(x,(0,i.Z)({},C)),(0,o.jsx)(y,(0,i.Z)({onAddToCollectionsComplete:m},P)),(0,o.jsx)(L,(0,r.Z)((0,i.Z)({},k),{hideAddToCart:v,hideSimilarAction:g,showActionIcons:!0}))]})}},72837:function(n,e,t){t.d(e,{C:function(){return v}});var i=t(70865),r=t(96670),a=t(26297),o=t(52322),s=t(90751),c=t(51852),u=t(80710),d=t(71728),l=t(97024),f=t(49427),v=function(n){var e=n.assetOverlayProps,t=(0,a.Z)(n,["assetOverlayProps"]),v=t.assets,g=t.hideAddToCart,m=t.onAddToCollectionsComplete,p=t.listId,h=(0,l.JI)().assetType,w=(0,d.r)(),x=w.CompLicensingViews,I=w.licensingAssetId,C=w.compLicensingProps,A=w.compLicensingHandler,y=(0,c.t)(),T=y.AddToCartViews,P=y.addToCartViewsHandler,b=y.addToCartViewsProps,L=(0,u.VL)({initialAssetType:h}),k=L.AddToCollectionViews,Z=L.addToCollectionViewsHandler,S=L.addToCollectionViewsProps,V=(0,s.R)({addToCartViewsHandler:P,addToCollectionViewsHandler:Z,assets:v,compLicensingHandler:A,licensingAssetId:I,withGoToPageAction:!0,withNavigationArrows:!0,listId:p}),H=V.PreviewModal,R=V.previewModalProps,j=V.onAssetModalHandler;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(f.J,(0,i.Z)({assetOverlayProps:(0,i.Z)({listId:p,addToCartViewsHandler:P,addToCollectionViewsHandler:Z,compLicensingHandler:A,licensingAssetId:I,onAssetModalHandler:j},e)},t)),(0,o.jsx)(T,(0,i.Z)({},b)),(0,o.jsx)(k,(0,i.Z)({onAddToCollectionsComplete:m},S)),(0,o.jsx)(H,(0,r.Z)((0,i.Z)({},R),{hideAddToCart:g,showActionIcons:!0})),(0,o.jsx)(x,(0,i.Z)({},C))]})}},64618:function(n,e,t){t.r(e),t.d(e,{MosaicAssetGridWithViews:function(){return c}});var i=t(70865),r=t(52322),a=t(9823),o=t(26255),s=t(72837),c=function(n){return(0,a.D)().isBrandEnterprise?(0,r.jsx)(s.C,(0,i.Z)({},n)):(0,r.jsx)(o.P,(0,i.Z)({},n))}},81205:function(n,e,t){t.d(e,{N:function(){return d}});var i=t(47842),r=t(52322),a=t(41075),o=t(84038),s=t(13011),c=t(68138),u=t(14749),d=function(n){var e,t=n.xs,s=n.sm,d=n.md,l=n.lg,f=n.xl,v=n.numOfSkeletonRows,g=n.maxRows,m=n.cardAspectRatio,p=n.spacing,h=n.withContainerSpacing,w=(0,c.rr)(),x=w.classes,I=w.cx,C=(0,o.ub)({xs:t,sm:s,md:d,lg:l,xl:f,numOfSkeletonRows:v,maxRows:g,withLoadingSkeletons:!0}),A=C.itemsPerBreakpoint,y=C.gridItems,T=(0,c.eD)({itemsPerBreakpoint:A}).classes.container;return(0,r.jsx)(a.ZP,{className:I((e={},(0,i.Z)(e,x.gridContainer,h),(0,i.Z)(e,T,A),e)),style:{"--customGridSpacing":"".concat(p,"px")},container:!0,children:y.map(function(n,e){return(0,r.jsx)(a.ZP,{className:I(!h&&x.gridItem),style:{"--customGridSpacing":"".concat(p,"px")},xs:t,sm:s,md:d,lg:l,xl:f,item:!0,children:(0,r.jsx)(u.H,{cardAspectRatio:m})},"skeleton_grid_".concat(e))})})};d.defaultProps={cardAspectRatio:s.Th,numOfSkeletonRows:2,spacing:c.gP,xs:12,sm:6,md:4,lg:3,xl:2,withContainerSpacing:!1}},14749:function(n,e,t){t.d(e,{H:function(){return s}});var i=t(52322),r=t(21647),a=t(13011),o=(0,t(8740).ZL)()(function(n,e){var t=e.cardAspectRatio;return{skeleton:{paddingTop:"".concat(100*t,"%"),width:"100%"}}}),s=function(n){var e=o({cardAspectRatio:n.cardAspectRatio}).classes;return(0,i.jsx)(r.Z,{variant:"rectangular",className:e.skeleton,"data-automation":"SkeletonGridItem"})};s.defaultProps={cardAspectRatio:a.Th}},84038:function(n,e,t){t.d(e,{ub:function(){return c}});var i=t(50930),r=t(2784),a=t(83303),o=function(n){var e=n.xs,t=n.sm,i=n.md,o=n.lg,s=n.xl,c=n.maxRows;return(0,r.useMemo)(function(){return c?{xs:(0,a.Vr)(e,c),sm:(0,a.Vr)(t,c),md:(0,a.Vr)(i,c),lg:(0,a.Vr)(o,c),xl:(0,a.Vr)(s,c)}:null},[e,t,i,o,s,c])},s=function(n){var e=n.assets,t=void 0===e?[]:e,o=n.maxItems,s=n.fillCemetery,c=n.showSkeletonsOnLoad,u=n.isGridLoading,d=o&&(u&&c||s);return(0,r.useMemo)(function(){if(!d)return t;var n=(0,a.yt)({assets:t,maxItems:o}),e=o?t.slice(0,o):t;return n?(0,i.Z)(e).concat((0,i.Z)(n)):e},[t,d,o])},c=function(n){var e=n.assets,t=n.xs,i=n.sm,r=n.md,c=n.lg,u=n.xl,d=n.numOfSkeletonRows,l=n.maxRows,f=n.fillCemetery,v=n.withLoadingSkeletons,g=(0,a.pb)(e).isGridLoading,m=g&&d||l,p=o({xs:t,sm:i,md:r,lg:c,xl:u,maxRows:m}),h=m?p.xl:null;return{itemsPerBreakpoint:p,gridItems:s({assets:e,fillCemetery:f,isGridLoading:g,maxItems:h,showSkeletonsOnLoad:!!v||!!d})}}},83303:function(n,e,t){t.d(e,{UP:function(){return o},V$:function(){return d},Vr:function(){return u},XQ:function(){return v},fL:function(){return a},o1:function(){return s},pb:function(){return c},yl:function(){return f},yt:function(){return l}});var i=t(50930),r="skeleton",a=function(n){return n.height*n.aspect},o=function(n){return n.width/n.aspect},s=function(n){return n.width/n.height},c=function(n){var e=!n,t=n&&!n.length;return{isGridLoading:e,isGridEmpty:t,isGridReady:!e&&!t}},u=function(n,e){return 12/n*e},d=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n.type===r},l=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.assets,t=n.maxItems-(void 0===e?[]:e).length;return t>0?(0,i.Z)(Array(t)).map(function(n,e){return{id:e,type:r}}):null},f=function(n){var e=n.defaultHeight,t=n.gridSizingOptions,i=n.spacing,r=n.width,a=null==t?void 0:t.find(function(n){return r>=n.containerWidth});return((null==a?void 0:a.height)||e)-2*i},v=function(n){var e,t=n.activeExpansionRow,i=n.asset;return(null==i?void 0:i.id)===(null==t?void 0:null===(e=t.asset)||void 0===e?void 0:e.id)}},53572:function(n,e,t){t.d(e,{k:function(){return p}});var i=t(70865),r=t(52322),a=t(39232),o=t(32456),s=t(44297),c=t(52131),u=t(25237),d=t.n(u),l=d()(function(){return t.e(91794).then(t.bind(t,91794)).then(function(n){return n.BlankTemplateAssetItem})},{loadableGenerated:{webpack:function(){return[91794]}},ssr:!0,loading:c.S}),f=t(58647),v=d()(function(){return Promise.all([t.e(31373),t.e(68416),t.e(79637),t.e(55882)]).then(t.bind(t,8948)).then(function(n){return n.MusicGridItem})},{loadableGenerated:{webpack:function(){return[8948]}},ssr:!0,loading:c.S}),g=d()(function(){return t.e(39730).then(t.bind(t,39730)).then(function(n){return n.TemplateGridItem})},{loadableGenerated:{webpack:function(){return[39730]}},ssr:!0,loading:c.S}),m=t(21030),p=function(n){var e=n.asset;switch((0,s.Tp)(e)){case a.pX:case a.A7:return(0,r.jsx)(m.x,(0,i.Z)({},n));case a.xF:case a.tn:return(0,r.jsx)(v,(0,i.Z)({},n));case a.k4:case o.du:case a.oI:case a.nX:case a.Nk:case a.zo:return(0,r.jsx)(f.N,(0,i.Z)({},n));case a.C_:return(0,r.jsx)(l,(0,i.Z)({},n));case a.hv:return(0,r.jsx)(g,(0,i.Z)({},n));default:return(0,r.jsx)(c.S,{})}}},52131:function(n,e,t){t.d(e,{S:function(){return o}});var i=t(52322),r=t(21647),a=(0,t(8740).ZL)()(function(n){return{skeleton:{width:"100%",height:"100%",position:"absolute",top:0,right:0,zIndex:-1,backgroundColor:n.palette.background.default}}}),o=function(){var n=a().classes;return(0,i.jsx)("div",{className:n.skeleton,children:(0,i.jsx)(r.Z,{variant:"rectangular",height:"100%",width:"100%","data-automation":"ThumbnailSkeleton"})})}},58647:function(n,e,t){t.d(e,{N:function(){return o}});var i=t(25237),r=t.n(i),a=t(52131),o=r()(function(){return t.e(16354).then(t.bind(t,16354)).then(function(n){return n.ImageGridItem})},{loadableGenerated:{webpack:function(){return[16354]}},ssr:!0,loading:a.S})},21030:function(n,e,t){t.d(e,{x:function(){return o}});var i=t(25237),r=t.n(i),a=t(52131),o=r()(function(){return Promise.all([t.e(27310),t.e(55843)]).then(t.bind(t,13417)).then(function(n){return n.VideoGridItem})},{loadableGenerated:{webpack:function(){return[13417]}},ssr:!0,loading:a.S})},90751:function(n,e,t){t.d(e,{R:function(){return x}});var i=t(70865),r=t(87394),a=t(52322),o=t(66358),s=t(80578),c=t(57048),u=t(39232),d=t(31666),l=t(776),f=t(2784),v=function(n){var e=n.assetType;return e===u.k4?o.eSS:e===u.pX?o.AtB:null},g=function(){var n=(0,l.yh)().analytics,e=(0,d.d)().assetType;return(0,f.useCallback)(function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).pageSection,i=v({assetType:e});return t&&i&&n.click({pageSection:t,eventLabel:i})},[n,e])},m=t(52309),p=t(25237),h=t.n(p)()(function(){return Promise.all([t.e(31373),t.e(27310),t.e(81503),t.e(97993),t.e(39115),t.e(80710),t.e(59586),t.e(64359),t.e(3745)]).then(t.bind(t,64920)).then(function(n){return n.PreviewModalEcomm})},{loadableGenerated:{webpack:function(){return[64920]}},ssr:!1}),w=function(n){var e=n.isModalOpen;return(0,m.B)(e)?(0,a.jsx)(h,(0,i.Z)({},n)):null},x=function(n){var e=n.addToCartViewsHandler,t=n.addToCollectionViewsHandler,i=n.assets,a=void 0===i?[]:i,u=n.compLicensingHandler,d=n.licensingAssetId,v=n.withGoToPageAction,m=n.withNavigationArrows,p=n.withProductClickWhereYouLeftOffTracking,h=void 0!==p&&p,x=n.listId,I=n.assetActionsProps,C=n.SecondaryActionsComponent,A=(0,l.wU)(),y=(0,s.T)(),T=(0,c.D)(),P=g(),b=(0,r.Z)((0,f.useState)(a[0]),2),L=b[0],k=b[1],Z=(0,r.Z)((0,f.useState)(!1),2),S=Z[0],V=Z[1],H=(0,f.useCallback)(function(n){var e=n.assetId,t=n.eventLabel,i=a.find(function(n){var t=n.id,i=n.mediaItem,r=(void 0===i?{}:i).id;return r?r===e:t===e});k(i),i&&(V(!0),P({pageSection:A}),y({eventLabel:t,asset:i,gridItems:a,isPreview:!0,pageSection:A,listId:x})),h&&T({eventLabel:o.e3M})},[a,h,P,A,y,x,T]);return{previewModalProps:{addToCartViewsHandler:e,addToCollectionViewsHandler:t,asset:L,closeModal:(0,f.useCallback)(function(){V(!1)},[]),compLicensingHandler:u,gridItems:a,isModalOpen:S,licensingAssetId:d,setAsset:k,withGoToPageAction:v,withNavigationArrows:m,showActionIcons:!0,assetActionsProps:void 0===I?{}:I,SecondaryActionsComponent:void 0===C?void 0:C},onAssetModalHandler:H,PreviewModal:w}}},88351:function(n,e,t){t.d(e,{k:function(){return p}});var i=t(87394),r=t(2784),a=t(98788),o=t(5163),s=["B","C","D","E","F","G","H","I","J","K","L","M","N","O"],c=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16"],u=["B","C","D","E","F","G","H","I"],d=function(n){var e=n.imageIndex,t=n.canvasRef,i=n.onLoad,r=n.imagePath,a=t.current,o=a.getContext("2d"),s="".concat(r).concat(e,".jpg"),c=new Image;c.src=s,c.onload=function(){i(e),o.drawImage(c,0,0,a.width,a.height)}},l=function(n){var e,t=n.imageIndexes,i=n.setLoading,r=n.imagePath,s=0;t.forEach((e=(0,a.Z)(function(n){var e;return(0,o.__generator)(this,function(a){return(e=new Image).src="".concat(r).concat(n,".jpg"),e.onload=function(){i(Math.round(100*(s+=1)/t.length))},[2]})}),function(n){return e.apply(this,arguments)}))},f=function(n){var e=n.latitudes,t=n.longitudes,i=[];return e.forEach(function(n){t.forEach(function(e){i.push(n+e)})}),{imageIndexes:i}},v=function(n){var e=n.latitudes,t=n.longitudes,i=n.currentImageIndex,r=n.vertical,a=n.horizontal,o=i.substring(0,1),s=i.substring(1),c=e.indexOf(o),u=t.indexOf(s);return c-=r,u-=a,c<0?c=0:c>=e.length&&(c=e.length-1),u<0?u+=t.length:u>=t.length&&(u-=t.length),e[c]+t[u]},g=function(n){var e=n.asset,t=e.validLatitudes,i=e.cameraType;return t||("top_half"===i||"half_spinner"===i?u:s)},m=function(n){var e=n.imageSrc;return(null==e?void 0:e.split("jpeg-600/")[1].split(".jpg")[0])||"H01"},p=function(n){var e=n.asset,t=n.canvasRef,a=n.autoRotate,o=(0,r.useMemo)(function(){return g({asset:e})},[e]),s=e.validLongitudes||c,u=(0,i.Z)((0,r.useState)(0),2),p=u[0],h=u[1],w=(0,i.Z)((0,r.useState)(),2),x=w[0],I=w[1],C=e.displays["600W"].src,A=null==C?void 0:C.substring(0,C.lastIndexOf("/")+1),y=m({imageSrc:C}),T=(0,r.useRef)(),P=(0,r.useRef)(),b=(0,r.useMemo)(function(){return f({latitudes:o,longitudes:s})},[o,s]).imageIndexes,L=(0,r.useCallback)(function(n){var e=n.horizontal,i=n.vertical,r=T.current,a=null==P?void 0:P.current;if(!a||r===a){var c=v({latitudes:o,longitudes:s,currentImageIndex:r,horizontal:e,vertical:i});r!==c&&(P.current=c,d({imageIndex:c,canvasRef:t,imagePath:A,onLoad:function(){T.current=c}}))}},[t,A,o,s]),k=function(n){var e=n.currentPosition,t=n.previousPosition;return e>t?1:e<t?-1:0};return(0,r.useEffect)(function(){d({imageIndex:y,canvasRef:t,imagePath:A,onLoad:function(){T.current=y}});var n=t.current;if(a){var e,i=function(){L({horizontal:1,vertical:0})};n.addEventListener("mouseover",function(){l({imageIndexes:b,setLoading:h,imagePath:A}),e=setInterval(i,100)}),n.addEventListener("mouseout",function(){clearInterval(e),d({imageIndex:y,canvasRef:t,imagePath:A,onLoad:function(){T.current=y,P.current=null}})})}else{l({imageIndexes:b,setLoading:h,imagePath:A});var r=!1,o={x:null,y:null},s=function(n){var e=n.e,t=n.x,i=n.y;I(T.current),e.preventDefault(),r=!0,o={x:t,y:i}},c=function(n){var e=n.e,t=n.x,i=n.y;if(e.preventDefault(),r){var a=k({currentPosition:t,previousPosition:o.x});L({vertical:k({currentPosition:i,previousPosition:o.y}),horizontal:a}),o={x:t,y:i}}},u=function(n){I(T.current),n.preventDefault(),r=!1};n.addEventListener("mousedown",function(n){return s({e:n,x:n.clientX,y:n.clientY})}),n.addEventListener("mousemove",function(n){return c({e:n,x:n.clientX,y:n.clientY})}),n.addEventListener("mouseup",u),n.addEventListener("touchstart",function(n){var e=n.touches[0];s({e:n,x:e.clientX,y:e.clientY})}),n.addEventListener("touchmove",function(n){var e=n.touches[0];c({e:n,x:e.clientX,y:e.clientY})}),n.addEventListener("touchend",u)}},[b,t,L,A,y,a,h]),{loading:p,angle:x}}},84866:function(n,e,t){t.d(e,{bI:function(){return o},n_:function(){return s}});var i=t(70314),r=t.n(i),a=function(n){var e=n.name,t=r()().publicRuntimeConfig.campaign;return(null==t?void 0:t[e])||null},o=function(n){var e=r()().publicRuntimeConfig.assets.cdnHostURL;if(e&&n.id)return"".concat(e,"/").concat("dream/photos","/").concat(n.id,".jpg")},s=function(n){var e,t=n.contributorId,i=null===(e=a({name:"dream"}))||void 0===e?void 0:e.contributorId;return!!i&&(Array.isArray(i)||(i=[i]),!!t&&i.includes(Number(t)))}},91876:function(n,e,t){t.d(e,{s:function(){return a}});var i=t(37546),r=function(n){var e;return(null===(e=n.coverItem)||void 0===e?void 0:e.mediaItem)?n.coverItem:n.mediaItem?n:{mediaItem:n}},a=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,t=n.length>0&&void 0!==(0,i.id)({asset:r(n[0])})?n.slice(0,e?5:10).sort(function(n,e){return(0,i.id)({asset:r(e)})-(0,i.id)({asset:r(n)})}).slice(0,3):[];return n.slice(0,1).forEach(function(n){var e=r(n).mediaItem;-1>=t.findIndex(function(n){return r(n).mediaItem.id===e.id})&&t.push(n)}),{highPriorityPrefetch:t}}},57048:function(n,e,t){t.d(e,{D:function(){return s}});var i=t(66358),r=t(29292),a=t(776),o=t(2784),s=function(){var n=(0,a.yh)().analytics;return(0,o.useCallback)(function(e){var t=e.eventLabel;n.inlineClick((0,r.SO)({trackAnalytics:{label:void 0===t?"":t,section:i._Ad}}))},[n])}},80578:function(n,e,t){t.d(e,{T:function(){return u}});var i=t(70865),r=t(29292),a=t(44297),o=t(776),s=t(2784),c=t(68533),u=function(){var n=(0,o.yh)().analytics,e=(0,c.Y)().getSearchContext;return(0,s.useCallback)(function(t){var o=t.asset,s=t.eventLabel,c=t.gridItems,u=t.isPreview,d=t.listId,l=t.pageSection,f=(0,r.qI)(o),v=(0,r.f_)(o),g=(0,r.Rz)(o);n.productViewed((0,i.Z)({eventLabel:s,list_id:null!=d?d:"",page_section:l,asset_type:(0,a.ZZ)(o),category:(0,r.CP)(o),channels:(0,r.Ky)(o),is_preview:u,name:(0,r.LJ)(o),product_id:f,search_context:e(o),sku:f},c&&(null==c?void 0:c.length)>1?(0,r.mq)({gridItems:c,item:o}):{},v&&{brand:v},g&&{product_line:g}))},[n,e])}},33967:function(n,e,t){t.d(e,{a:function(){return d}});var i=t(58435),r=t(84866),a=t(43110),o=t(92405),s=t(2784),c=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.isLoading,t=n.withinCampaign,i=void 0!==t&&t;return{isLoading:void 0!==e&&e,isAssetFreeToDownload:i,canPreview:!i,canShare:!i,canEdit:!i,canTry:!i,canSaveToCollection:!i,canSeeDetailsModal:!i}},u=function(){var n=(0,o.p)(i.NV);return{data:{isDreamCampaignEnabled:n},isValidating:void 0===n}},d=function(n){var e=(n||{}).contributor,t=u(),i=t.data,o=t.isValidating,d=(0,a.B)(),l=null==e?void 0:e.id;return(0,s.useMemo)(function(){var n=d&&o;return!n&&i.isDreamCampaignEnabled&&d&&(0,r.n_)({contributorId:null!=l?l:""})?c({withinCampaign:!0}):c({isLoading:n})},[o,i,l,d])}},11800:function(n,e,t){t.d(e,{L:function(){return a}});var i=t(72075),r=t(2784),a=i.j?r.useLayoutEffect:r.useEffect},84853:function(n,e,t){t.d(e,{$T:function(){return a},FT:function(){return r},IA:function(){return o}});var i=t(50930),r=function(n){return void 0===n?[]:Array.isArray(n)?n:[n]},a=function(n,e){for(var t=arguments.length,r=Array(t>2?t-2:0),a=2;a<t;a++)r[a-2]=arguments[a];return(0,i.Z)(n.slice(0,e)).concat((0,i.Z)(r),(0,i.Z)(n.slice(e)))},o=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=e-n.length,a=r>0?Array(r).fill(t):[];return(0,i.Z)(n).concat((0,i.Z)(a))}}}]);
//# sourceMappingURL=96941-eaba6399b2735ea7.js.map