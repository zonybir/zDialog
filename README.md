t: 若有此属性且值为false  则不带标题 此时tStyle属性无效
tStyle:无t属性或者t属性为true 时 生效   设置标题样式 eg  tStyle{coloe:red,fontSize:'18px',backgroundColor:#fff}
z:弹框内容  必有属性
zStyle:弹框 文字 box 的样式。    eg  zStyle{coloe:red,fontSize:'18px',backgroundColor:#fff}
type: 1 带确认按钮 （重要性提示） 2带确定与取消 返回true false(用户选择性用)   3无任何按钮 空白点击隐藏（不重要提示性用）

btnSureText:弹出框 确定按钮文字      type取值  1   、2 时生效
btnCancelText:取消按钮文字	         type取值  2  时生效

设置全局默认样式  

	$z.init{
		coverStyle:{  //遮罩层 的 默认全局样式

		},
		boxStyle:{//弹出框的  默认全局样式

		},
		titleStyle:{//标题的  默认全局样式

		},
		zStyle:{//文本内容的  默认全局样式

		},
		footerStyle:{  footer 即 底部的  默认全局样式

		},
		btnSureStyle:{ 确定按钮的  默认全局样式

		},
		btnCancelStyle:{取消按钮的   默认全局样式

		}
	}
//上面代码为  设置所以弹出框的 全局默认样式    全局样式会被后面单独定义的样式覆盖掉  

对于设置了全局样式   此页面的所以弹出框样式都继承于它  
你也可以  采用链式写法   设置全局样式后 再直接注册弹出框    eg
								$z.init(type object).start(type string,type object).

对于本弹出框  鄙人知道还有很多考虑不周    若有任何建议于意见或者其他需求  可通过邮件（zonybir@icloud.com）联系鄙人  且与之共讨，互勉。谢谢。
