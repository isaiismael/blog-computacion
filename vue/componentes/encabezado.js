app.component("encabezado", {
    template: /* html */
        `        
    <header id="header" class="encabezado">
            <div class="logo-group">
                <i id="mode" class="fas fa-toggle-on off"></i>
            </div>
            <nav class="menu-nav" id="menu-nav">

                <ul class="menu-ul" style="margin-bottom: 0">
                    <div class="div-cursos">
                        <h2 class="mis-cursos">Mis Cursos</h2>
                    </div>
                    <li class="lista">
                        <a class="slideContent item" href="#"><i class="fas fa-globe"></i>&nbsp;&nbsp;DESARROLLO
                            WEB&nbsp;<i class="fas fa-angle-down"></i></a>
                        <ul class="slide">
                            <li><a class="slideContent" href="#"><span><i style="color: rgb(0, 143, 43);"
                                            class="fas fa-code"></i>&nbsp;Back-End&nbsp;<i
                                            class="fas fa-angle-down"></i></span></a>
                                <ul class="slide">
                                    <li>
                                    <a href="php.html"><span><img style="width: 15px;margin-bottom: 0px;"
                                                    src="public/principal/img/php.svg" alt="">&nbsp;Php</span></a>
                                    <!--<router-link to="/cursos/php"><span><img style="width: 15px;margin-bottom: 0px;"
                                    src="public/principal/img/php.svg" alt="">&nbsp;Php</span></router-link>-->
                                    </li>
                                    <li><a href="laravel.html"><span><img style="width: 15px;margin-bottom: 0px;"
                                                    src="public/principal/img/laravel.png"
                                                    alt="">&nbsp;Laravel</span></a>
                                    </li>
                                    <li><a href="java.html"><span><img style="width: 15px;margin-bottom: 0px;"
                                                    src="public/principal/img/java.svg" alt="">&nbsp;Java</span></a>
                                    </li>
                                </ul>
                            </li>
                            <li><a class="slideContent" href="#"><span><i style="color:rgb(255, 196, 0);"
                                            class="fas fa-laptop-code"></i>&nbsp;Front-End&nbsp;<i
                                            class="fas fa-angle-down"></i></span></a>
                                <ul class="slide">
                                    <li><a href="html.html"><span><img style="width: 15px;margin-bottom: 0px;"
                                                    src="public/principal/img/html-5.svg" alt="">&nbsp;Html</span></a>
                                    </li>
                                    <li><a href="css.html"><span><img style="width: 15px;margin-bottom: 0px;"
                                                    src="public/principal/img/css-3.svg" alt="">&nbsp;Css</span></a>
                                    </li>
                                    <li><a href="js.html"><span><img style="width: 15px;margin-bottom: 0px;"
                                                    src="public/principal/img/javascript.svg"
                                                    alt="">&nbsp;JavaScript</span></a></li>
                                    <li><a href="sass.html"><span><img style="width: 15px;margin-bottom: 0px;"
                                                    src="public/principal/img/sass.svg" alt="">&nbsp;Sass
                                                </span></a></li>
                                    <li><a href="vue.html"><span><img style="width: 15px;margin-bottom: 0px;"
                                                    src="public/principal/img/vue.svg" alt="">&nbsp;Vue
                                                JS</span></a></li>
                                </ul>
                            </li>
                            <li><a class="slideContent" href="git.html"><span><img style="width: 15px;margin-bottom: 0px;"
                                            src="public/principal/img/git.svg" alt="">&nbsp;Git-Github</span></a>
                            </li>
                            <li><a class="slideContent" href="plugin.html"><span><img style="width: 15px;margin-bottom: 0px;"
                                            src="public/principal/img/plugin.svg" alt="">&nbsp;Plugin y Librerías
                                        JS</span></a>
                            </li>
                        </ul>
                    </li>

                    <li class="lista">
                        <a class="slideContent item" href="#"><i class="fas fa-network-wired"></i>&nbsp;&nbsp;BASE DE
                            DATOS&nbsp;<i class="fas fa-angle-down"></i></a>
                        <ul class="slide">
                            <li><a href="mysql.html"><span><img style="width: 15px;margin-bottom: 0px;"
                                            src="public/principal/img/mysql.svg" alt="">&nbsp;Mysql</span></a>
                            </li>
                            <li><a href="cursos/base-de-datos/postgree/inicio.html"><span><img
                                            style="width: 15px;margin-bottom: 0px;"
                                            src="public/principal/img/ganesha.svg" alt="">&nbsp;PostGreeSql</span></a>
                            </li>
                            <li><a href="cursos/base-de-datos/sql-server/inicio.html"><span><img
                                            style="width: 15px;margin-bottom: 0px;"
                                            src="public/principal/img/sql-server.svg" alt="">&nbsp;SqlServer</span></a>
                            </li>
                            <li><a href="disenioBd.html"><span><img style="width: 15px;margin-bottom: 0px;"
                                            src="public/principal/img/modelo-bd.svg" alt="">&nbsp;Diseño de
                                        BD</span></a></li>
                        </ul>
                    </li>
                    <li class="lista">
                        <a class="slideContent item" href="#"><i class="fab fa-sketch"></i>&nbsp;&nbsp;DISEÑO
                            GRAFICO&nbsp;<i class="fas fa-angle-down"></i></a>
                        <ul class="slide">
                            <li><a href="photoshop.html"><span><img style="width: 15px;margin-bottom: 0px;"
                                            src="public/principal/img/photoshop.svg" alt="">&nbsp;Photoshop</span></a>
                            </li>
                            <li><a href="corel.html"><span><img style="width: 15px;margin-bottom: 0px;"
                                            src="public/principal/img/corel.svg" alt="">&nbsp;Corel
                                        Draw</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="lista"><a class="slideContent item" href="#"><i
                                class="fas fa-file-powerpoint"></i>&nbsp;&nbsp;OFIMATICA&nbsp;<i
                                class="fas fa-angle-down"></i></a>
                        <ul class="slide">
                            <li><a href="word.html"><span><img style="width: 15px;margin-bottom: 0px;"
                                            src="public/principal/img/word.svg" alt="">&nbsp;Word</span></a>
                            </li>
                            <li><a href="excel.html"><span><img style="width: 15px;margin-bottom: 0px;"
                                            src="public/principal/img/excel.svg" alt="">&nbsp;Excel</span>
                                </a>
                            </li>
                            <li><a href="power.html"><span><img
                                            style="width: 15px;margin-bottom: 0px;"
                                            src="public/principal/img/powerpoint.svg" alt="">&nbsp;Power
                                        Point</span>
                                </a>
                            </li>
                        </ul>

                    </li>
                    <li class="lista"><a class="slideContent item" href="#"><i
                                class="fas fa-plus-circle"></i>&nbsp;&nbsp;OTROS&nbsp;<i
                                class="fas fa-angle-down"></i></a>
                        <ul class="slide">
                            <li><a href="flutter.html"><span><img style="width: 15px;margin-bottom: 0px;"
                                            src="public/principal/img/flutter.svg" alt="">&nbsp;Flutter</span></a>
                            </li>
                            <li><a href="cursos/otros/servidores/inicio.html"><span><img
                                            style="width: 15px;margin-bottom: 0px;"
                                            src="public/principal/img/data-server.svg"
                                            alt="">&nbsp;Servidores</span></a>
                            </li>
                            <li><a href="redes.html"><span><img style="width: 15px;margin-bottom: 0px;"
                                            src="public/principal/img/base-de-datos.svg" alt="">&nbsp;Redes</span></a>
                            </li>
                            <li><a href=""><span><img style="width: 15px;margin-bottom: 0px;"
                                            src="public/principal/img/edicion-de-pelicula.svg" alt="">&nbsp;Edición
                                        Video</span></a>
                            </li>
                            <li><a href="trucos.html"><span><img style="width: 15px;margin-bottom: 0px;"
                                            src="public/principal/img/computer-settings.svg" alt="">&nbsp;Trucos
                                        Informáticos</span></a></li>
                            <li><a href="cursos/otros/edicion-video/inicio.html"><span><img
                                            style="width: 15px;margin-bottom: 0px;"
                                            src="public/principal/img/programas.svg" alt="">&nbsp;Programas
                                        Informáticos</span></a>
                            </li>
                            <li><a href="extensiones.html"><span><img style="width: 15px;margin-bottom: 0px;"
                                            src="public/principal/img/extensiones.svg"
                                            alt="">&nbsp;Extensiones</span></a>
                            </li>
                            <li>
                            <a href="paginas.html"><span><img style="width: 15px;margin-bottom: 0px;"
                                            src="public/principal/img/paginas.svg" alt="">&nbsp;Páginas</span></a>
                                            
                            </li>
                            <li>
                            <a href="mas.html"><span><img style="width: 15px;margin-bottom: 0px;"
                                            src="public/principal/img/mas.png" alt="">&nbsp;Más</span></a>
                                            
                            </li>

                        </ul>
                    </li>

                </ul>
            </nav>
            <h2 class="name"><a target="_blank" href="https://isaiismael.github.io/portafolio/">Isai Ismael Sandoval
                    Ccaccro</a>
            </h2>
            <div class="div-dark-menu">                
                <a href="index.html"><img class="logo" src="public/principal/img/logo.jpg" alt=""></a>
                <!--<router-link to="/"><img class="logo" src="public/principal/img/logo.jpg" alt=""></router-link>-->
                <i id="menu-icon" class="fas fa-bars menu-icon"></i>
            </div>
        </header>
    `
})

/*
laravel
vue
*/