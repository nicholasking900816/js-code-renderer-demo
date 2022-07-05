import { CodeRenderer } from 'js-code-renderer';

let renderBtn = document.querySelector('#render'); 
let codeArea = document.querySelector('#code');
let codeSnipet = document.querySelector('#code-snipet');
let ul = null; 

renderBtn.addEventListener('click', function() {
    if (ul) {
        ul.parentNode.removeChild(ul);
        ul = null;
    }
    doRender(codeArea.value) 
})

debugger;
//展示
function doRender(code) {
    if (!code) return;

    // renderResult 为一个二元数组
    let renderResult = new CodeRenderer(code).render();
    ul = document.createElement('ul');

    renderResult.forEach(nodeRow => {
        let li = document.createElement('li');
        nodeRow.forEach(node => {
            let span = document.createElement('span');
            span.innerHTML = node.text.replace(/ /g, '&nbsp;');// 转换空格符
            if (node.style) {
                span.style.color = node.style.color;
            }
            li.appendChild(span)
        });
        ul.appendChild(li)
    }); 

    codeSnipet.appendChild(ul)
}





