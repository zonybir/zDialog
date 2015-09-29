(function(window){
	var d=document,
	cover=d.createElement('div'),
	dialog={
		coverStyle:{
		 	position:'fixed',
			width:'100%',
			height:'100%',
			zIndex:999,
			backgroundColor:'rgba(0,0,0,.6)',
			top:'0px'
			},
		boxStyle:{
			width:'200px',
			backgroundColor:'#fff',
			margin:'0 auto',
			top:'10%',
			position:'relative',
			minWidth:'220px'
			},
		titleStyle:{
			fontSize:'16px',
			color:'#fff',
			borderBottom:'1px solid #ccc',
			backgroundColor:'#8593B7',
			textAlign:'center',
			padding:'5px 10px'
			},
		zStyle:{
			fontSize:'14px',
			textAlign:'left',
			color:'#666',
			backgroundColor:'#fff',
			padding:'10px 15px',
			maxHeight:'221px',
			overflow:'auto',
			minHeight:'50px'
			},
		footerStyle:{
			padding:'5px 5px',
			backgroundColor:'#D2D2D2',
			color:'#333',
			fontSize:'16px',
			textAlign:'right'
		},
		btnCancelStyle:{
			width:'40px',
			padding:'2px 10px',
			color:'#fff',
			backgroundColor:'#8593B7',
			textAlign:'center',
			cursor:'pointer',
			fontSize:'14px',
			borderRadius:'5px',
			marginRight:'10px'
			},
		btnSureStyle:{
			width:'40px',
			padding:'2px 10px',
			color:'#fff',
			backgroundColor:'#8593B7',
			textAlign:'center',
			cursor:'pointer',
			fontSize:'14px',
			borderRadius:'5px',
			marginRight:'5px'
			}
	};	
	function addEvent(target,type,handler){
		if(target.addEventListener) target.addEventListener(type,handler,false);
		else if (target.attachEvent) target.attachEvent('on'+type,function(evet){return handler.call(target,event);})
		else {z.innerHTML='浏览器版本过低，请升级你的浏览器方可正常使用。谢谢！';}
	}
	function stop(event){
		var e=event || window.event;
		if (e.stopPropagation) e.stopPropagation();
		else if(window.event) window.event.cancelBubble = true;
	}
	function show(options){
		this.options=options;
		this.init();		 
	};
	show.prototype={
		cloneAndApeendNode:function(){
			this.box=cover.cloneNode(true),
			this.title=cover.cloneNode(true),
			this.z=cover.cloneNode(true),
			this.footer=cover.cloneNode(true),
			this.btnSure=d.createElement('span'),
			this.btnCancel=this.btnSure.cloneNode(true),
			this.box.appendChild(this.title);
			this.box.appendChild(this.z);
			this.box.appendChild(this.footer);
			this.cover=cover.cloneNode(true);
		},
		setT:function(){
			var _t=this;
			if (_t.options.t == false || _t.options.t == 'false') _t.title.parentNode.removeChild(_t.title);
			else {
				if( typeof _t.options.tStyle === 'object')_t.setStyle(_t.title,_t.options.tStyle);
				if(_t.options.tText) _t.title.innerHTML=_t.options.tText;
				else _t.title.innerHTML='提示';
			}
		},
		setZ:function(){
			var _t=this;
			if(typeof _t.options.z !== 'string') throw new Error('thr dialog\'s content don\'t allow empty.please add the prototype of z.');
			else{
				if (typeof _t.options.zStyle === 'object') _t.setStyle(_t.z,_t.options.zStyle);
				_t.z.innerHTML=_t.options.z;
			}
		},
		setBtn:function(){
			var _t=this;
			if (typeof _t.options.type !== 'undefined'){
				switch (_t.options.type){
					case 0:{
						_t.footer.parentNode.removeChild(_t.footer);
						addEvent(_t.cover,'click',function(){_t.close();});
						break;
					}
					case 1:{
						_t.footer.appendChild(_t.btnSure);
						if(_t.options.btnSureText) _t.btnSure.innerHTML=_t.options.btnSureText;
						else _t.btnSure.innerHTML='确定';
						if(_t.checkCallback('sureFun')) addEvent(_t.btnSure,'click',function(){_t.sureFun();});
						addEvent(_t.btnSure,'click',function(){_t.close();});
						_t.clickCoverHide();
						break;
					}
					case 2:{
						_t.footer.appendChild(_t.btnCancel);
						if(_t.options.btnCancelText) _t.btnCancel.innerHTML=_t.options.btnCancelText;
						else _t.btnCancel.innerHTML='取消';
						_t.footer.appendChild(_t.btnSure);
						if(_t.options.btnSureText) _t.btnSure.innerHTML=_t.options.btnSureText;
						else _t.btnSure.innerHTML='确定';
						addEvent(_t.btnSure,'click',function(){_t.close();});
						if(_t.checkCallback('sureFun')) addEvent(_t.btnSure,'click',function(){_t.sureFun();});
						addEvent(_t.btnCancel,'click',function(){_t.close();});
						if(_t.checkCallback('cancelFun')) addEvent(_t.btnCancel,'click',function(){_t.cancelFun();});
						break;
					}
					default:
						break;
				}
			}else {	//无type属性时 的默认类型
				if(_t.options.btnSureText) _t.btnSure.innerHTML=_t.options.btnSureText;
				else _t.btnSure.innerHTML='确定';
				_t.footer.appendChild(_t.btnSure);
				if(_t.checkCallback('sureFun')) addEvent(_t.btnSure,'click',function(){_t.sureFun();});
				addEvent(_t.btnSure,'click',function(){_t.close();});
				_t.clickCoverHide();
			}
		},
		overallStyle:function(){
			this.setStyle(this.cover,dialog.coverStyle);
			this.setStyle(this.box,dialog.boxStyle);
			this.setStyle(this.title,dialog.titleStyle);
			this.setStyle(this.z,dialog.zStyle);
			this.setStyle(this.footer,dialog.footerStyle);
			this.setStyle(this.btnSure,dialog.btnSureStyle);
			this.setStyle(this.btnCancel,dialog.btnCancelStyle);
		},
		clickCoverHide:function(){
			var _t=this;
			if (this.options.clickCoverHide == true || this.options.clickCoverHide == 'true') addEvent(this.cover,'click',function(){_t.close();})
		},
		checkCallback:function(str){
			if(typeof this.options[str] === 'function') return true;
			else return false;
		},
		sureFun:function(){this.options.sureFun();},
		cancelFun:function(){this.options.cancelFun();},
		close:function(){this.cover.parentNode.removeChild(this.cover);	},
		setStyle:function(ele,obj){for(var i in obj)ele.style[i]=obj[i];},
		init:function(){
			this.cloneAndApeendNode();
			this.overallStyle();
			this.setT();
			this.setZ();
			this.setBtn();
			addEvent(this.box,'click',stop);
			this.cover.appendChild(this.box);
			d.querySelectorAll('body')[0].appendChild(this.cover);
		}
	}	
	function zDialog(str,options){zDialog.prototype.start(str,options);};
	zDialog.prototype.start=function(str,options){
		if(typeof str !== 'string') throw new Error("typeError:understard the type of '"+ typeof str +"' in zDialog('type str,type object');");
		else{
			var obj=document.querySelectorAll(str);
			if (typeof options !== 'undefined') for(var i=0,len=obj.length;i<len;i++) addEvent(obj[i],'click',function(){new show(options);});	
			else throw new Error("typeError:understard the type of '"+ typeof options +"' in zDialog('type str,type object');");
		}
	}
	zDialog.prototype.initStyle=function(options){
		if (options.coverStyle) for(var i in options.coverStyle) dialog.coverStyle[i]=options.coverStyle[i];
		if (options.boxStyle) for(var i in options.boxStyle) dialog.boxStyle[i]=options.boxStyle[i];
		if (options.titleStyle) for(var i in options.titleStyle) dialog.titleStyle[i]=options.titleStyle[i];
		if (options.zStyle) for(var i in options.zStyle) dialog.zStyle[i]=options.zStyle[i];
		if (options.footerStyle) for(var i in options.footerStyle) dialog.footerStyle[i]=options.footerStyle[i];
		if(options.btnSureStyle) for(var i in options.btnSureStyle) dialog.btnSureStyle[i]=options.btnSureStyle[i];
		if(options.btnCancelStyle) for(var i in options.btnCancelStyle) dialog.btnCancelStyle[i]=options.btnCancelStyle[i];
		return this;
	};
	zDialog.init=zDialog.prototype.initStyle;
	zDialog.start=zDialog.prototype.start;
	window.$z=zDialog;
}(window));