/*!
 * Modale v1.0.0
 * www.souza.inf.br/
 * Copyright (c) 2021, Souza Consultória Tecnologica
 */

function modalPage(create, size, sec, title, message, color, type, func){


    /** Verifica se é a criação da janela popup/modal */
    if(create === true){

        var div = '';
        var color_modal = '';
        var color_text = '';
        var icon = '';

        /** Verifica se a cor foi informada */
        if(!color){
    
          color_modal = 'bg-light';
    
        }else{
    
            switch(color) {
                
                case 'blue':
                    
                    color_modal = 'bg-primary';
                    color_text = 'text-white';
    
                  break;
    
                case 'grey':
                  
                    color_modal = 'bg-secondary';
                    color_text = 'text-white';
    
                  break;
    
                case 'green':
                                      
                    color_modal = 'bg-success';
                    color_text = 'text-white';
    
                  break; 
                  
                  
                case 'red':
                  
                    color_modal = 'bg-danger';
                    color_text = 'text-white';
    
                  break;  
                  
                  
                case 'yellow':
                  
                    color_modal = 'bg-warning';
                    color_text = 'text-white';
    
                  break; 
                  
                  
                case 'cyan':
                  
                    color_modal = 'bg-info';
                    color_text = 'text-white';
    
                  break; 
                  
                  
                case 'white':
                  
                    color_modal = 'bg-light';
    
                  break;  
                  
                  
                case 'black':
                  
                    color_modal = 'bg-dark';
                    color_text = 'text-white';
    
                  break; 
                  
                case 'random':
                  
                    /** Temas disponiveis */
                    var a = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'];
                    
                    /** Embaralha os temas */
                    var color_rand = shuffle(a);
    
                    /** Pega o primeiro item embaralhado */
                    color_modal = 'bg-'+color_rand[0];
    
                  break;                
    
    
                default:
                  
                    color_modal = 'bg-light';
              }
    
        }    
        
        /** Verifica o tipo de mensagem para carregar o icone */
        if(type){

            switch(type){


              case "alert":
                
                  icon = '<i class="fas fa-exclamation-triangle fa-3x"></i>';

                break;

              case "info":
                  
                  icon = '<i class="fas fa-info fa-3x"></i>';

                break;

              case "error":
                
                  icon = '<i class="fas fa-times fa-3x"></i>';

                break;

              case "checked":
               
                  icon = '<i class="far fa-check-square fa-3x"></i>';
                
                break;

              case "expired":

                  icon = '<i class="far fa-times-circle fa-3x"></i>';

                break;		

              case "question":
                
                  icon = '<i class="fas fa-question fa-3x"></i>';

                break;

              case "success":
                
                  icon = '<i class="fas fa-check fa-3x"></i>';

                break;	

              case "delete":
                
                  icon = '<i class="fas fa-trash-alt fa-3x"></i>';

                break;	   
                
              case "circle":

                    /** Cria a div responsável em carregar o spinner+info */
                    icon  = '<div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">';
                    icon += '   <span class="sr-only">Loading...</span>';
                    icon += '</div>';

                break;


              case "ball":

                  /** Cria a div responsável em carregar o spinner+info */
                  icon  = '<div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">';
                  icon += '   <span class="sr-only">Loading...</span>';
                  icon += '</div>';

              break;                

            }  
          
          

        }

        div += '<div id="modal-block">';      
        div += '    <div class="modal-box">';
        div += '        <div class="card '+color_text+' '+color_modal+'">';
        div += '            <h5 class="card-header">'+title;
        div += '                <button type="button" class="close" aria-label="Close" onclick="modalPage(false)">';
        div += '                    <span aria-hidden="true">&times;</span>';
        div += '                </button>';
        div += '            </h5>';
        div += '            <div class="card-body">';
        div += '              <h5 class="text-center">'+icon+'</h5>';
        div += '              <p class="text-center">'+message+'</p>';
        div += '            </div>';
        div += '            <div class="card-footer text-muted text-right">';

        /** Verifica se existe função a ser utilizada */
        if(func){

            div += '                <button class="btn btn-primary" onclick="'+func+'">Confirme</button>';
            div += '                <button class="btn btn-danger" onclick="modalPage(false)">Cancelar</button>';

        }
        
        
        div += '            </div>';
        div += '        </div>';           
        div += '    </div>';
        div += '    <div class="blackoutModal"></div>';//Background total na tela            
        div += '</div>'; 


        /** Adiciona o spinner na tela */
        $('body').append(div);         

        /** Aplica as especificações css na nova janela */
        $('.card').css({
            'position' : 'fixed',
            'width' : ( size > 0 ? size : 500)+'px',
            'left' : '50%',
            'top' : '33%',
            'margin-left' : '-'+( size > 0 ? size/2 : 250 )+'px'
        });

        /** Verifica se o tempo de execução foi definido */
        if(parseInt(sec) > 0){

            setTimeout(function() { 

                $('div').remove('#modal-block');
            }, sec);//Remove o item a partir dos segundos informados

        }           


    }else{

        $('div').remove('#modal-block');
    }

}

function show(str){

    alert(str);
}