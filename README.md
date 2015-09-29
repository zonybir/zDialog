position:  left   top  right bottom center  {left:X,top:X}
fixed:true  false 默认true
t: 若有此属性且值为false  则不带标题 此时tStyle属性无效
tStyle:无t属性或者t属性为true 时 生效   设置标题样式 eg  tStyle{coloe:red,fontSize:'18px',backgroundColor:#fff}
z:弹框内容  必有属性
zStyle:弹框 文字 box 的样式。    eg  zStyle{coloe:red,fontSize:'18px',backgroundColor:#fff}
type: 1 带确认按钮 （重要性提示） 2带确定与取消 返回true false(用户选择性用)   3无任何按钮 空白点击隐藏（不重要提示性用）

btnSureText:弹出框 确定按钮文字      type取值  1   、2 时生效
btnCancelText:取消按钮文字	         type取值  2  时生效
