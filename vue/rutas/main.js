const misRutas = [
    { path: '/', component: Inicio },
    { path: '/cursos/php', component: Php },
    // {
    //     path: '/contacto/:id', component: Contacto,
    //     children: [
    //         {
    //             path: '/contactos/uno',
    //             components: {
    //                 b: uno  /* b es el nombre de la vista */
    //             }
    //         },
    //         {
    //             path: '/contactos/dos',
    //             components: {
    //                 b: dos  /* b es el nombre de la vista */
    //             }
    //         }
    //     ],
    // },

]


const ruta = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes:misRutas,
})