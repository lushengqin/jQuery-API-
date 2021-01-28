// const api = jQuery('.test')
// api.addClass('red').addClass('margin20') //链式操作  给它增加两个类名 重复调用api

// jQuery('.test').find('.child').addClass('red').addClass('margin20') //找到test里面的.child 然后给它添加red类名
// const api1 = jQuery('.test')

// api1.addClass('blue')

// const api2 = api1.find('.child').addClass('red')
// api1.addClass('margin20')

const api1 = jQuery('.test')
// const api2 = api1.find('.child').addClass('red')
// const oldApi = api2.end() .addClass('margin20')

api1.children().print()  //获取它的子元素 并打印出来print(调用为打印)
api1.parent().print()  //获取它的父元素 得到body
api1.each((x)=>{console.log(x)})  //获得循环的数组