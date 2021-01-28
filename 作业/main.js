window.$ = window.jQuery = function(selectorOrArray){
    let elements 
    if(typeof selectorOrArray === 'string'){
        elements = document.querySelectorAll(selectorOrArray)
    }else if(selectorOrArray instanceof Array){
        elements = selectorOrArray
    }
    // let elements = document.querySelectorAll(selectorOrArray)
    // let elements
    // if(typeof selectorOrArray ==='string'){ //如果它是字符串
    //     elements = document.querySelectorAll(selectorOrArray);
    // }else if(selectorOrArray instanceof Array) {//如果它是数组
    //     elements = selectorOrArray
    // }
    return {
        addClass(className){
            for(let i =0;i<elements.length;i++){
                elements[i].classList.add(className)
                console.log(333)
            }
            return this
        },
        find(selector){
            let arr = []
            for(let i=0;i<elements.length;i++){
                arr = arr.concat(Array.from(elements[i].querySelectorAll(selector))) //array.from 转换为数组
            }
            return jQuery(arr)
        }
    }
    
}

// $('#test').find('.child').addClass('.red')
console.log($('#test').find('.chlid').addClass('red'))