<html>

    <head>
        <title>Modal</title>
        
        <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css">
        <link rel="stylesheet" href="vendor/fontawesome-free/css/all.min.css"  type="text/css">
        <link rel="stylesheet" href="css/modal.css" type="text/css">
        
        
        <script src="js/jquery.min.js"></script>
        <script src="js/modal.js"></script>

    </head>

    <body>

        <div class="btn-exemple">

            <button class="btn btn-primary"   onclick="modalPage(true, 500, 0, 'Atenção', '<b>Deseja realmente abrir essa janela?</b>', 'blue', 'alert')">Modal Blue - Alert</button>
            <button class="btn btn-danger"    onclick="modalPage(true, 500, 0, 'Atenção', '<b>Deseja realmente abrir essa janela?</b>', 'red', 'info')">Modal Red - info</button>
            <button class="btn btn-secondary" onclick="modalPage(true, 0, 0,   'Atenção', '<b>Deseja realmente abrir essa janela?</b>', '', 'alert')">Modal Default - Alert</button>
            <button class="btn btn-success"   onclick="modalPage(true, 0, 0,   'Atenção', '<b>Deseja realmente abrir essa janela?</b>', '', 'info')">Modal Default - Info</button>
            <button class="btn btn-info"      onclick="modalPage(true, 0, 0,   'Atenção', '<b>Deseja realmente abrir essa janela?</b>', '', 'error')">Modal Default - Error</button>
            <button class="btn btn-primary"   onclick="modalPage(true, 0, 0,   'Atenção', '<b>Deseja realmente abrir essa janela?</b>', '', 'checked')">Modal Default - Checked</button>
            <button class="btn btn-danger"    onclick="modalPage(true, 0, 0,   'Atenção', '<b>Deseja realmente abrir essa janela?</b>', '', 'expired')">Modal Default - Expired</button>
            <button class="btn btn-secondary" onclick="modalPage(true, 0, 0,   'Atenção', '<b>Deseja realmente abrir essa janela?</b>', '', 'question')">Modal Default - Question</button>
            <button class="btn btn-success"   onclick="modalPage(true, 0, 0,   'Atenção', '<b>Deseja realmente abrir essa janela?</b>', '', 'success')">Modal Default - Success</button>
            <button class="btn btn-info"      onclick="modalPage(true, 0, 0,   'Atenção', '<b>Deseja realmente abrir essa janela?</b>', '', 'delete')">Modal Default - Delete</button>
            <button class="btn btn-primary"   onclick="modalPage(true, 0, 0,   'Atenção', '<b>Deseja realmente abrir essa janela?</b>', '', 'circle')">Modal Default - Circle</button>
            <button class="btn btn-danger"    onclick="modalPage(true, 0, 0,   'Atenção', '<b>Deseja realmente abrir essa janela?</b>', '', 'ball')">Modal Default - Ball</button>
            <button class="btn btn-secondary" onclick="modalPage(true, 0, 0,   'Atenção', '<b>Deseja realmente abrir essa janela?</b>', 'blue', 'ball')">Modal Default - Ball Blue</button>
            <button class="btn btn-primary"   onclick="modalPage(true, 0, 0,   'Atenção', '<b>Deseja realmente abrir essa janela?</b>', 'yellow', 'circle')">Modal Default - Circle Yellow</button>
            
            <script>

                var func = "show('Olá mundo!')";

            </script>

            <button class="btn btn-info"      onclick="modalPage(true, 0, 0,   'Atenção', '<b>Deseja realmente abrir essa janela?</b>', '', 'question', func)">Modal Default - Função</button>
        
        </div>

    <body>

</html>