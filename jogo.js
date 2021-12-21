
	var altura = 0
	var largura = 0
	var vidas = 1
	var tempo = 15

	var criaMoscaTempo = 1500

	var nivel = window.location.search
	nivel = nivel.replace('?', '')

    if(nivel === 'normal') {
    	//1500
    	var criaMoscaTempo = 1500
    } else if(nivel === 'dificil') {
    	//1000
    	var criaMoscaTempo = 1000
    } else if (nivel === 'chucknorris') {
    	//750
    	var criaMoscaTempo = 750
    }


	function ajustaTamanhoPalcoJogo() {
	     altura = window.innerHeight
	     largura = window.innerWidth

	     console.log(altura, largura)
	}

	ajustaTamanhoPalcoJogo()

	var cronometro = setInterval(function() {

         tempo -=1

         if (tempo < 0) {
         	 clearInterval(cronometro)
         	 clearInterval(criarMosca)
             alert('Vitória')
             window.location.href = 'vitoria.html'  
         } else {

             document.getElementById('cronometro').innerHTML = tempo
		}

     } , 1000)
