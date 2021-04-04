const Php = {
    template: /* html */
        `
        <section id="arreglos" class="mb-2">
        <h5 class="programas">ARRAY O ARREGLOS</h5>
        <section>
            <div class="texto">
                <span>Un arreglo es una estructura, es decir es un conjunto de variables que se citan y manejan con
                    un mismo nombre, y que permite además la utilización individual de sus elementos. Un arreglo es
                    en resumen un conjunto de datos finito y del mismo tipo.</span>
            </div>
            <div class="texto">
                <ul>
                    <li>ARRAY COMUNES</li>
                    <li>ASOCIATIVOS</li>
                    <li>MULTIDIMENCIONALES</li>
                </ul>
            </div>
            <pre rel="PHP">
                    <code class="language-php line-numbers">
                        &lt;?php
                        /* ARREGLOS COMUNES */
                        $semana = ["lunes", "martes", "miercoles", "jueves", "viernes"];
                        $semana2 = array("lunes", "martes", "miercoles", "jueves", "viernes");
                        echo $semana[0];
                        foreach ($semana as $value) {
                            echo $value;
                        }
                        /* ARREGLOS ASOCIATIVOS */
                        $amigo = array("nombre" => "juan", "edad" => 20, "correo" => "juan@gmail.com");
                        echo $amigo["edad"]
                        /* ARREGLOS MULTIDIMENCIONALES */
                        $amigos=array(array("juan",21), array("maria",18),array("pedro",20));
                        echo $amigos[1][0];
                        /* METODOS */
                        count($amigo)//contar valores;
                        $fruits = array("limón", "naranja", "plátano", "manzana");
                        sort($fruits)//ordena A-Z y 1-...;
                        rsort($fruits)//ordena Z-A y ...-1;
                        foreach ($fruits as $key => $val) {
                            echo "$key = $val\n";
                        }
                        ?&gt;
                    </code>
                </pre>
            <div class="texto ejercicio">
                <span>Crear un arreglo con los nombres de los estudiantes y mostrar en forma descendente
                    Z-A</span>
            </div>
            <div class="texto ejercicio">
                <span>Crear un arreglo que contenga numeros de 1-50 y mostrar en forma descendente
                    50-1</span>
            </div>


            <section>
            <div class="texto img-conexion wrapper">
                <a rel="paso 1" href="{{asset('cursos/php/crear-proyecto.png')}}" data-fancybox="gallery"
                    data-caption="paso 1: Buscamos el lenguaje PHP y seleccionamos PHP aplication">
                    <img loading="lazy" src="{{asset('cursos/php/crear-proyecto.png')}}" alt="">
                </a>
                <a rel="paso 2" href="{{asset('cursos/php/crear-proyecto2.png')}}" data-fancybox="gallery"
                    data-caption="paso 2: En esta ventana nos muestra las opciones de Nombre del proyecto, Ubicación del proyecto, Version de PHP, Formato de codificación de caracteres. * Es muy importante que nuestro proyecto guardemos en la ruta xampp->htdocs">
                    <img loading="lazy" src="{{asset('cursos/php/crear-proyecto2.png')}}" alt="">
                </a>
                <a rel="paso 3" href="{{asset('cursos/php/crear-proyecto3.png')}}" data-fancybox="gallery"
                    data-caption="paso 3: En esta ventana nos muestra las opciones de Donde se va a ejecutar nuestra aplicación(servidor local), URL de nuestro proyecto">
                    <img loading="lazy" src="{{asset('cursos/php/crear-proyecto3.png')}}" alt="">
                </a>
                <a rel="paso 4" href="{{asset('cursos/php/crear-proyecto4.png')}}" data-fancybox="gallery"
                    data-caption="paso 4: En esta ventana nos muestra algunos frameworks con los que trabaja PHP">
                    <img loading="lazy" src="{{asset('cursos/php/crear-proyecto4.png')}}" alt="">
                </a>
                <a rel="paso 5" href="{{asset('cursos/php/crear-proyecto5.png')}}" data-fancybox="gallery"
                    data-caption="paso 5: En esta ventana nos ofrece si queremos utilizar un token(acceder a un proyecto mediante un codigo de seguridad)">
                    <img loading="lazy" src="{{asset('cursos/php/crear-proyecto5.png')}}" alt="">
                </a>
            </div>
        </section>
        </section>
    </section>
    `
}