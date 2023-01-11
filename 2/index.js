function onCllickCreateButton(){
    const titleInputElement =document.querySelector('#input-title');
    // alert('button clicked')
    
    // prompt('button clicked')

   
    console.log(titleInputElement.value);
    
    const doneListElement = document.querySelector('.done-list');
    if (confirm('Add done list?')){
        doneListElement.appendChild(createDoneItem(titleInputElement.value));
        titleInputElement.value='';
    }
    // if (confirm('Add done list?') && titleInputElement!=''){
    //     doneListElement.appendChild(createDoneItem(titleInputElement.value));
    //     titleInputElement.value='';
    // }
    
    
    // 
}

function createDoneItem(title){
    const item =document.createElement('div');
    item.className = 'item';

    const titleElement=document.createElement('div');
    const removeElement=document.createElement('div');

    titleElement.className='title';
    removeElement.className='remove';

    titleElement.innerText = title;
    item.appendChild(titleElement);
    item.appendChild(removeElement);
    removeElement.addEventListener('click', function(){
        if (confirm('delete?')){
            item.remove();
        }
        
    });

    item.addEventListener('dblclick',function(){
        // alert('clcik');
        const r= Math.floor(Math.random()*255);
        const g= Math.floor(Math.random()*255);
        const b= Math.floor(Math.random()*255);
        item.style.backgroundColor= `rgb(${r},${g},${b})`;
        // item.style.backgroundColor= 'yellow';

    })
    return item;
}

function createRemovebutton(){

}