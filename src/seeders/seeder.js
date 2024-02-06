const db = require("../utils/db");
const {Users,Noticias,Categories,ImagenVideo,Contactos} = require("../models");
const initModels = require("../models/initModels");


initModels();

const users = [
  {
    username:"maria",
    email: "maria@gmail.com",
    password: "1234",
  
 
  },
  {
    username:"jose01",
    email: "jose01@gmail.com",
    password: "pass1234",
  
  }
];

const contactos = [
  {
    nombre:"maria",
    email: "maria@gmail.com",
    comentario: "dsffdsdsdsdsds",
 
  },
  {
    nombre:"jose01",
    email: "jose01@gmail.com",
    comentario: "dfdsdsdsds",
  }
];

const noticias = [
        {
          titulo: 'JCE dará curso a denuncias de oposición sobre utilización de recursos del Estado en favor del PRM',
          contenido: 'A través de una comunicación, firmada por el presidente de la JCE, Román Jáquez Liranzo, el pleno señaló que en virtud de lo que establece el reglamento que crea el procedimiento administrativo sancionador electoral y pone en funcionamiento la unidad de atención, seguimiento y mecanismos de ejecución de las sanciones con ocasión de las infracciones administrativas electorales y medidas cautelares que establecen las leyes que rigen el sistema político dominicano, remitirán las respectivas denuncias ante esa unidad de atención a las infracciones electorales',
          fechaPublicacion: new Date() // Se utilizará la fecha y hora actual como valor por defecto
        },
        {
          titulo: 'Científicos buscan declarar área protegida a cordillera submarina en aguas dominicanas',
          contenido: 'Expertos internacionales y dominicanos participan en la primera expedición científica en la Cordillera Beata, con el objetivo de declarar esas cadenas de montes submarinos del Mar Caribe (al sur del país) como área protegida oceánica, informó este domingo el Ministerio de Medio Ambiente y Recursos Naturales (MMARN)',
    
          fechaPublicacion: new Date('2023-01-01') // Puedes establecer una fecha específica si lo deseas
        },
        {
          titulo: 'Científicos buscan declarar área protegida a cordillera submarina en aguas dominicanas',
          contenido: 'Expertos internacionales y dominicanos participan en la primera expedición científica en la Cordillera Beata, con el objetivo de declarar esas cadenas de montes submarinos del Mar Caribe (al sur del país) como área protegida oceánica, informó este domingo el Ministerio de Medio Ambiente y Recursos Naturales (MMARN)',
    
          fechaPublicacion: new Date('2023-01-01') // Puedes establecer una fecha específica si lo deseas
        },
        {
          titulo: 'Científicos buscan declarar área protegida a cordillera submarina en aguas dominicanas',
          contenido: 'Expertos internacionales y dominicanos participan en la primera expedición científica en la Cordillera Beata, con el objetivo de declarar esas cadenas de montes submarinos del Mar Caribe (al sur del país) como área protegida oceánica, informó este domingo el Ministerio de Medio Ambiente y Recursos Naturales (MMARN)',
    
          fechaPublicacion: new Date('2023-01-01') // Puedes establecer una fecha específica si lo deseas
        },
        {
          titulo: 'Científicos buscan declarar área protegida a cordillera submarina en aguas dominicanas',
          contenido: 'Expertos internacionales y dominicanos participan en la primera expedición científica en la Cordillera Beata, con el objetivo de declarar esas cadenas de montes submarinos del Mar Caribe (al sur del país) como área protegida oceánica, informó este domingo el Ministerio de Medio Ambiente y Recursos Naturales (MMARN)',
    
          fechaPublicacion: new Date('2023-01-01') // Puedes establecer una fecha específica si lo deseas
        },
        
        {
          titulo: 'Científicos buscan declarar área protegida a cordillera submarina en aguas dominicanas',
          contenido: 'Expertos internacionales y dominicanos participan en la primera expedición científica en la Cordillera Beata, con el objetivo de declarar esas cadenas de montes submarinos del Mar Caribe (al sur del país) como área protegida oceánica, informó este domingo el Ministerio de Medio Ambiente y Recursos Naturales (MMARN)',
    
          fechaPublicacion: new Date('2023-01-01') // Puedes establecer una fecha específica si lo deseas
        },
        
        // Puedes seguir añadiendo más objetos con la misma estructura
      
];

const categories = [
    { name: 'Deportes' },
    { name: 'Música' },
    { name: 'Política' },
    { name: 'Economía' },
    { name: 'Entretenimiento' },
    { name: 'Salud' },
    { name: 'Tecnología' },
    { name: 'Clima' }
  ];
  

  const multimediaItems = [
    {
      imagenes: 'imagen1.jpg',
      video: ''
    },
    {
      imagenes: 'imagen2.jpg',
      video: ''
    },
    {
      imagenes: 'imagen3.jpeg',
      video: ''
    },
    {
      imagenes: 'imagen3.jpg',
      video: ''
    },
    {
      imagenes: 'imagen4.jpeg',
      video: ''
    },
    {
      imagenes: 'imagen5.jpg',
      video: ''
    },
    // Puedes añadir más objetos con la misma estructura
  ];
  

db.sync({ force: true }).then(() => {
  console.log("Sinronizado");
  users.forEach(async (user) => await Users.create(user));
  setTimeout(() => {
    noticias.forEach(
      async (product) => await Noticias.create(product));
  }, 100);
  setTimeout(() => {
    categories.forEach(
      async (carts) => await Categories.create(carts)
    );
  }, 200);
  setTimeout(() => {
    multimediaItems.forEach(async (productincarts) => await ImagenVideo.create(productincarts));
  }, 300);
  
  setTimeout(() => {
    contactos.forEach(async (productincarts) => await Contactos.create(productincarts));
  }, 400);


});