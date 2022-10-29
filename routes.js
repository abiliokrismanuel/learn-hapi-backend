const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses menggunakan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method';
        },
    },
    
    //Path Parameter
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const { name = "stranger" } = request.params;
            //add query param
            const { lang } = request.query;
            if(lang === 'id') {
                return `Hai, ${name}!`;
            }
            return `Hello, ${name}!`;

            //write this if you want try query param
            //curl -X GET http://localhost:5000/hello/abilio?lang=id
        },
    },
    
    {
        method: 'POST',
        path: '/login',
        handler: (request, h) => {
            const { username, password} = request.payload;
            return `welcome ${username}!`;
        }
    },

    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        },
    },
];
 
module.exports = routes;