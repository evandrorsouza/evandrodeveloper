$('body').css("background-color", "gray"); //testando o funcionamento do Jquery
$('body').css("text-align", "center");
	
var meuArray = [] //declarando array vazio

$("#botao").on("click", function (e) { //função botão criar

	let id = $('#id').val();
	let nome = $('#nome').val();
	let ocupacao = $('#ocupacao').val();

	if(id == "" || nome == "" || ocupacao == ""){
		alert("Preencha todos os campos!");
	}
	else if(meuArray.length >= 1){

		let controleLocalStorage = 0;

		for (let i = 0; i < meuArray.length; i++) {
		
			if(meuArray[i].id == id){
	
				alert("Já existe um item com esse ID!");

				controleLocalStorage++;

				return;
	
			}
			
		}			
	
		$('#tbody').append(`
		<tr>
			<td>`+ id +`</td>
			<td>`+ nome + `</td>
			<td>`+ ocupacao +`</td>
			                 
		</tr>`);

		meuArray.push({

			"id": id,
			"nome": nome,				
			"ocupacao": ocupacao

		})

		mostrarNaTabela();
		createClient(meuArray);	
		
		
		
		
	}
	else{

		$('#tbody').append(`
		<tr>
			<td>`+ id +`</td>
			<td>`+ nome + `</td>
			<td>`+ ocupacao +`</td>
			                 
		</tr>`);

		meuArray.push({

			"id": id,
			"nome": nome,				
			"ocupacao": ocupacao

		})

		createClient(meuArray);
		mostrarNaTabela();

	}
	console.log(meuArray);


	$('#id').val("");
	$('#nome').val("");
	$('#ocupacao').val("");


	

});

$("#botao2").on("click", function (e) { //função botão deletar

	let id = $('#idmd').val();	

	for (let index = 0; index < meuArray.length; index++) {

		if(id == meuArray[index].id){

			meuArray.splice(index, 1);
		}		
	}
	mostrarNaTabela()
	
	console.log(meuArray);

	$('#id').val("");
	$('#nome').val("");
	$('#ocupacao').val("");
	$('#idmd').val("");

});

$("#botao3").on("click", function (e) { //função botão editar

	let id = $('#idm').val();
	let nome = $('#nomem').val();
	let ocupacao = $('#ocupacaom').val();

	for (let i = 0; i < meuArray.length; i++) {

		if(id == meuArray[i].id){

			meuArray[i].nome = nome;
			meuArray[i].ocupacao = ocupacao;			
		}		
	}
	mostrarNaTabela()

	console.log(meuArray);

	$('#idm').val("");
	$('#nomem').val("");
	$('#ocupacaom').val("");

});

function mostrarNaTabela(){	 //função atualizar tabela com os novos valores

	$('#tbody').html(``);

	for (let i = 0; i < meuArray.length; i++) {

		let id = meuArray[i].id;
		let nome = meuArray[i].nome;
		let ocupacao = meuArray[i].ocupacao;

		$('#tbody').append(`
		<tr>
			<td>`+ id +`</td>
			<td>`+ nome + `</td>
			<td>`+ ocupacao +`</td>
			                 
		</tr>`);
	}

}

//modais
var myModal = document.getElementById('exampleModal')
myModal.addEventListener('shown.bs.modal', function () {})

var myModal2 = document.getElementById('exampleModal2')
myModal2.addEventListener('shown.bs.modal2', function () {})

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))

// CRUD - create read update delete (codigo para salvar em LocalStorage, ainda em desenvolvimento)
const deleteClient = (index) => {
    const dbClient = readClient()
    dbClient.splice(index, 1)
    setLocalStorage(dbClient)
}

const updateClient = (index, client) => {
    const dbClient = readClient()
    dbClient[index] = client
    setLocalStorage(dbClient)
}

const readClient = () => getLocalStorage()

const createClient = (client) => {
    const dbClient = getLocalStorage()
    dbClient.push (client)
    setLocalStorage(dbClient)
}







//---------------------------------------------------------------------------------------------------------
//TESTE ENVIO DE EMAIL


// var form_id = "jquery_form";
// function onSuccess() {
// 	// remove this to avoid redirect
// 	window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
// }

// function onError(error) {
// 	// remove this to avoid redirect
// 	window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
// }

// var sendButton = $("#" + form_id + " [name='send']");

// function send() {
// 	sendButton.text('Enviando...');
// 	sendButton.prop('disabled',true);

// 	var subject = "Contato atraves do site Monditech"; /* $("#" + form_id + " [name='subject']").val(); */
// 	var message = "Nome: " + $("#" + form_id + " [id='contatoNomeComercial']").val();
// 	message += "\n";
// 	message += "Email: " +  $("#" + form_id + " [id='contatoEmailComercial']").val();
// 	message += "\n";
// 	message += "Fone: " +  $("#" + form_id + " [id='contatoFoneComercial']").val();
// 	message += "\n";
// 	message += "Empresa: " +  $("#" + form_id + " [id='contatoEmpresaComercial']").val();
// 	message += "\n";
// 	message += "Interesse: " +  $("#" + form_id + " [id='contatoInteresseSuporte']").val();
// 	message += "\n";
// 	message += "Descrição: " +  $("#" + form_id + " [id='contatoAssuntoComercial']").val();
// 	data['subject'] = subject;
// 	data['text'] = message;

// 	$.post('https://postmail.invotes.com/send',
// 		data,
// 		onSuccess
// 	).fail(onError);

// 	return false;
// }

// sendButton.on('click', send);

// var $form = $("#" + form_id);
// $form.submit(function( event ) {
// 	event.preventDefault();
// });