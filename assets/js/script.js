let ingredientes = [];
let campo = document.getElementById('campo');
let botao = document.querySelector('.botao');

botao.addEventListener('click', addIngredientes, deleteitem);

// Gera id aleatório.
function idGenerator() {
  let timestamp = new Date;
  id = timestamp.getHours().toString() +
  timestamp.getMinutes().toString() +
  timestamp.getSeconds().toString() +
  timestamp.getMilliseconds().toString();
  return id  
}

// Adiciona ingrediente se não tiver na lista
function addIngredientes() {
  let ingredientdescription = campo.value;

  let ingrediente = {
    id: idGenerator(),
    data: {
      description: ingredientdescription.toLowerCase() 
    }
  }
  
  if(ingredientdescription != "") {
    
    for (let i in ingredientes) {
      if (ingredientes[i].data.description == ingredientdescription.toLowerCase()) {
        alert('Este ingrediente já existe na lista!');
        ingredientes.pop();
        atualizarLista();
      }     
    }    
    ingredientes.push(ingrediente);
    atualizarLista();
    campo.value = "";   
  } else {
    alert('Adicione um ingrediente!');  
  }
   
}

function atualizarLista() {
  var list = '<ul>'
  ingredientes.forEach((ingrediente) => {
    list += '<li id-data=' + ingrediente.id + '>' + ingrediente.data.description + ' ' + '<button onclick = deleteitem(this) id-data= ' + ingrediente.id + '>' + 'Apagar</button>' + '</li>' + "<br/>"
  })
  list += '<ul>'

  document.querySelector('.lista').innerHTML = list;
}

function deleteitem(element) {
  ingredientes = ingredientes.filter(ingrediente => ingrediente.id != element.getAttribute('id-data'));
  atualizarLista();
}