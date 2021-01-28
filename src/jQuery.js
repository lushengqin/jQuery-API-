console.log('你好 我是jQuery')
// window.jQuery = function(selector){
//     const elements = document.querySelectorAll(selector)
//     //api 可以操作elements
//     const api = {
//         addClass(className){
//             for(let i=0;i<elements.length;i++){
//                 elements[i].classList.add(className)
//             }
//             // return null
//             // return api  //返回API可以链接式操作
//             // console.log(this)
//             return this //this === api
//         }
//     }
//     return api
// }

window.$ = window.jQuery = function(selectorOrArray){ //selectorOrArray是对象可以数组
    let elements
    if(typeof selectorOrArray ==='string'){ //如果它是字符串
        elements = document.querySelectorAll(selectorOrArray);
    }else if(selectorOrArray instanceof Array) {//如果它是数组
        elements = selectorOrArray
    }

    
    //返回一个对象
    return {
        addClass(className){
            //循环化遍历elements
            for(let i=0;i<elements.length ;i++){
                console.log(elements.length)
                elements[i].classList.add(className)  //函数访问外部的变量叫闭包            
            }
            console.log(2)
            return this   //链式  api.('.test').('margin20')
        },
        oldApi : selectorOrArray.oldApi, //获取数组的oldApi
        find(selector){
            let array =[] //空数组
            for(let i=0;i<elements.length;i++){
                const elements2 = Array.from(elements[i].querySelectorAll(selector))
                array = array.concat(elements2)
                console.log(array[i])
                // array = array.concat(Array.from(elements[i].querySelectorAll(selector)))
                // console.log(array[i])
            }
            // const newApi = jQuery(array)
            // return this
            array.oldApi = this //this是旧的api
            return jQuery(array)  //相当于上面两行  const newApi = jQuery(array) return this
        },
        end(){
            return this.oldApi  //this是新的api
        },
        each(fn){
            for(let i=0;i<elements.length;i++){
                fn.call(null,elements[i],i)
            }
            return this 
        },
        parent(){
            const array =[]
            this.each((node)=>{
                if(array.indexOf(node.parentNode) === -1){
                    //遍历的时候如果它的爸爸没有的话 那就等于-1  如果没有就打印出它的父元素 如果不写这行 会打印出四个body
                    array.push(node.parentNode)
                }
            })
            return jQuery(array)
        },
        print(){
            console.log(elements)
        },
        children(){
            const array =[]
            this.each((node)=>{
                if(array.indexOf(node.parentNode )=== -1){
                    array.push(... node.children)  //... 等价于 node.children[0],node.children[1],node.children[2]
                }
            })
            return jQuery(array)
        }

    }

}
// window.$ = window.jQuery  //这句话调用 以后用$就相当于jQuery