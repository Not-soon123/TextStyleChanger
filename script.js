function change(){
    const input = document.getElementsByTagName('input').value.trim()
    const p = document.getElementsByTagName('p')
    if(input.toLowerCase() === "bold"){
      p.style.fontWeight = 'bold';
      
    }
    else{
        p.innerText = 'Nothing changed';
    }
}