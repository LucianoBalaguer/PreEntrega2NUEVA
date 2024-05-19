const products = [ //array de productos
    {
      id: 1,
      title: 'Musculosa',
      price: '1000',
      category: 'deportes',
      description: 'talles: XL, L, M, S, XS',
      image:
        'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/586c26aef70a4f549196aee5007932fc_9366/zapatillas-vulc-raid3r-skateboarding.jpg',
    },
    {
      id: 2,
      title: 'Short',
      price: '2000',
      category: 'deportes',
      description: 'talles: 38, 40, 42, 44, 50, 52',
      image:
        'https://modadeportiva.com.ar/wp-content/uploads/2015/10/Keywhoss-Shorts-deportivos-rustico-negro-para-mujer-2016-150x150.jpg',
    },
    {
      id: 3,
      title: 'Buzo',
      price: '3000',
      category: 'urbana',
      description: 'Colores: rojo, azul y verde',
      image:
        'https://winprom.com.ar/wp-content/uploads/2020/06/buzo-1-150x150.jpg',
    },

  ];

//Export silve para compartir cualquier cosa con el resto de componentes

export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);//aca le estamos seteando resolve (que es lo que va a usar el .then) con el array de objetos "products", funciona como el setProduct de useState
    }, 1000);
  });

 //getProducts.then  este .then va a utilizar "resolve" en su interior, y resolve es "products" que para eso antes seteamos


 export const getBooks = async (url) => { //async transforma mi funcion en una funcion asincronica
    const respuesta = await fetch(url);//fetch me resuelve la api, no tiene un then ni nada, pero la resuelve simplemente, y es guardada en una constante 
    const data = await respuesta.json();// ahora la const respuesta es pasada por un json() para que sea tangible por javascript y alojada en otra constante 
    return data; //para luego ser retornada (retornariamos una promesa que se cumplio (un array proveniente de una api o un json))
  };
