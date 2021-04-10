<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap 5 Crash course</title>
    <style>
        /* columns */
        [class*="col"] { 
            padding: 1rem;
            background-color: #33b5e5;
            border: 2px solid #fff;
            color: #fff;
            text-align: center;
        }
        /* containers */
        /* [class*="con"] {
            padding: 1rem;
            background-color: #9e33e5;
            border: 2px solid #fff;
            color: #fff;
            text-align: center;
        } */
    </style>

    <link rel="stylesheet" href="css/bootstrap.css">

</head>
<body>
    
    <div class"container">
        <h1>Buttons</h1>
        <button type="button" class="btn btn-primary"> Primary </button>
        <button type="button" class="btn, btn-secondary">Secondry</button>
    </div>


    <script src="https://unpkg.com/@popperjs/core@2/dist/umd/popper.js"></script> 
    <!-- < for development version, from github : https://github.com/popperjs/popper-core> -->
    <script src="js/bootstrap.js"></script>
</body>


</html>