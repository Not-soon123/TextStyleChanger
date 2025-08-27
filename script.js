function changeStyle(){
  const input = document.getElementById('styleInput');
  const p = document.getElementById('p');
  const editedInput = input.value.trim()

  p.style.fontWeight = '';
  p.style.fontStyle = '';
  p.style.textDecoration = '';
  input.value ="";
  

 if(editedInput.toLowerCase() === 'bold'){
  p.style.fontWeight = 'bold';
 }

  if(editedInput.toLowerCase() === 'italic'){
  p.style.fontStyle = 'italic';
 }

 if(editedInput.toLowerCase() === 'underline'){
  p.style.textDecoration = 'underline';
 }

}
