import React from "react";
import ControlledCarousel from "../../components/ControlledCarousel/ControlledCarouselNew";
import SportIcon from "../Sports/SportIcons";
import CardContainer from "../../components/CardContainer";
import ArticleComponent from "../../components/ControlledArticle/ArticleComponent";
import NewsArticle from "../../ControlledNotices/NewArticle";
import "./News.css";


const carouselInfo = {
    title4: "Valiente escalada",
    text4: "Egan Bernal, protagonista de una 'valiente escalada': así resaltan su etapa 5 del Tour de Suiza",
    title5: "Tiger Woods",
    text5: "Tiger Woods sigue haciendo historia en el golf: firmó un nuevo récord en el Masters de Augusta",
    title6: "Campeonato del abierto femenino de Nueva Gales del Sur",
    text6: "María José Uribe, campeona del abierto femenino de Nueva Gales del Sur: 'Es un sueño hecho realidad'",
};


const sports = [
    { name: 'Fútbol', icon: '⚽' },
    { name: 'Tenis', icon: '🎾' },
    { name: 'F1', icon: '🏎️' },
    { name: 'MotoGP', icon: '🏍️' },
    { name: 'Baloncesto', icon: '🏀' },
];


const newsCardsData1 = [
    {
        cardImage: "https://img.redbull.com/images/c_crop,x_0,y_0,h_2731,w_5462/c_fill,w_1350,h_675/q_auto,f_auto/redbullcom/2024/6/9/duvmmbyokxfnsopclojl/canadain-grand-prix-2024",
        cardSubtitle: "Fórmula 1",
        cardTitle: "Accidente en la Fórmula 1 estuvo cerca de terminar en tragedia: impresionantes reflejos",
        cardText: "Las duras condiciones climáticas, en el Gran Premio de Canadá, de Fórmula 1, hicieron que se presentara una situación, que, por poco, causa algo más grave.",
        cardButton: "Compartir",
    },
    {
        cardImage: "https://caracoltv.brightspotcdn.com/dims4/default/027b57e/2147483647/strip/true/crop/1078x536+0+0/resize/840x418!/format/webp/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.us-west-2.amazonaws.com%2F97%2Fbd%2Fe2fd7c5a4b9ab5caba37f1e7ec6d%2Ftatiana-renteria-campeona-hungria-2024.jpg",
        cardSubtitle: "Deportes",
        cardTitle: "Tatiana Rentería, campeona en Hungría 2024: 'Es un sueño hecho realidad'",
        cardText: "La colombiana Tatiana Rentería se coronó campeona en la Copa del Mundo de Tiro con Arco en Hungría, ganando el oro de la categoria de 76 kilogramos, asegurandole un cupo en los juegos Olimpicos de París 2024.",
        cardButton: "Compartir",
    },
    {
        cardImage: "https://imagenes.eltiempo.com/files/image_1200_600/uploads/2024/06/09/6665e72c11141.jpeg",
        cardSubtitle: "Tenis",
        cardTitle: "Carlos Alcaraz no pierde tiempo: definió sus próximos torneos, tras ganar Roland Garros",
        cardText: "Atrás quedó el segundo Grand Slam de la temporada y también las celebraciones del título; ahora, el español Carlos Alcaraz se centra en lo que se avecina.",
        cardButton: "Compartir",
    },
    {
        cardImage: "https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/v2/I3ABXFZZ3RFLFMAT45DEMHJE5A.jpg?auth=2bf655047dfb93ff204028de5d42c6c63d452d5f16e5164c7835610e64f20b89&height=553&width=830&smart=true&quality=40",
        cardSubtitle: "Baloncesto",
        cardTitle: "Los Dallas Mavericks ganaron el campeonato de la conferencia Oeste de la NBA",
        cardText: "Los Dallas Mavericks ganaron el campeonato de la conferencia Oeste de la NBA, tras vencer a los Golden State Warriors en el séptimo partido de la serie.",
        cardButton: "Compartir",
    },
    {
        cardImage: "https://canalshowsport.com.ar/wp-content/uploads/2023/09/GettyImages-1437772518.jpg",
        cardSubtitle: "Fórmula 1",
        cardTitle: "Max Verstappen gana en Canadá",
        cardText: "El piloto neerlandés Max Verstappen fue el más rápido en el Gran Premio de Emilia-Romaña, en Imola, y consiguió un registro que solo tenía Ayrton Senna. El tricampeón del mundo pasó sobre la línea de meta con un tiempo de 1 minuto, 14 segundos.",
        cardButton: "Compartir",
    },
    {
        cardImage: "https://i.dailymail.co.uk/1s/2024/06/06/01/85771555-0-image-a-44_1717632038956.jpg",
        cardSubtitle: "Deportes",
        cardTitle: "Oleksandr Usyk le quitó la corona a Tyson Fury y es el nuevo campeón absoluto de peso pesado",
        cardText: "El ucraniano Oleksandr Usyk superó a Tyson Fury y se quedó con los títulos unificados de los pesos pesados en el boxeo mundial, en Riad, Arabia Saudita.",
        cardButton: "Compartir",
    },

];


  const Titulo = () => {
      return (
          <div className="banner">
              <div className="image-container">
              <img src="./images/image.jpg" alt="Flecha-Titulos" />
              </div>
              <div className="text-container">
              <h1>Fútbol</h1>
              </div>
          </div>
      );
  }

    const Titulo2 = () => {
      return (
          <div className="banner">
              <div className="image-container">
              <img src="./images/image.jpg" alt="Flecha-Titulos" />
              </div>
              <div className="text-container">
              <h1>Tenis</h1>
              </div>
          </div>
      );
    }

    const Titulo3 = () => {
      return (
          <div className="banner">
              <div className="image-container">
              <img src="./images/image.jpg" alt="Flecha-Titulos" />
              </div>
              <div className="text-container">
              <h1>Automovilismo</h1>
              </div>
          </div>
      );
    }

    const Titulo4 = () => {
      return (
          <div className="banner">
              <div className="image-container">
              <img src="./images/image.jpg" alt="Flecha-Titulos" />
              </div>
              <div className="text-container">
              <h1>Moto GP</h1>
              </div>
          </div>
      );
    }

    const Titulo5 = () => {
      return (
          <div className="banner">
              <div className="image-container">
              <img src="./images/image.jpg" alt="Flecha-Titulos" />
              </div>
              <div className="text-container">
              <h1>Baloncesto</h1>
              </div>
          </div>
      );
    }


    const MainContent = () => (
        <main>
        <div className="main-article">
          <ArticleComponent 
            image="https://www.elespectador.com/resizer/aOSU9HJkZhMNj6clHPeGzDIHmb4=/952x637/filters:quality(80):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/VDMDVWYTNJDILNOIV3TI4AH4MQ.jpg"
            title="Noticias del fútbol profesional colombiano, resultados, posiciones y más contenidos."
            date="1 min de Lectura"
            category="FÚTBOL"
          />
        </div>
      </main>
    );

    const MainContent2 = () => (
      <main>
      <div className="main-article">
        <ArticleComponent 
          image="https://caracoltv.brightspotcdn.com/dims4/default/3565561/2147483647/strip/true/crop/1000x486+0+71/resize/1440x700!/format/webp/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.us-west-2.amazonaws.com%2Fbd%2Ff5%2F3b44e7234e77ae772c84dde1baa5%2Frafael-nadal-tenista-espanol-wimbledon-retiro.jpg"
          title="Rafael Nodal definió su proximo torneo y será uno donde ha tenido grandes triunfos"
          date="2 min de Lectura"
          category="TENIS"
        />
      </div>
    </main>
    );

    const MainContent3 = () => (
      <main>
      <div className="main-article">
        <ArticleComponent 
          image="https://caracoltv.brightspotcdn.com/dims4/default/f794b9e/2147483647/strip/true/crop/1000x486+0+126/resize/1440x700!/format/webp/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.us-west-2.amazonaws.com%2F88%2F43%2Fd0233bd24dca8d48f528d1d3deee%2Fsergio-checo-perez-piloto-mexico-formula-1-red-bull.jpg"
          title="Sergio 'Checo' Pérez no se salvó: le impusieron un duro castigo económico y deportivo"
          date="1 min de Lectura"
          category="Automovilismo"
        />
      </div>
    </main>
    );

    const NewArticle2 = [

      {
        title: 'Jannik Sinner, todo un héroe en Italia: así fue recibido, tras convertirse en número uno',
        date: 'Jun 12',
        image: 'https://caracoltv.brightspotcdn.com/dims4/default/2c85807/2147483647/strip/true/crop/1000x498+0+0/resize/840x418!/format/webp/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.us-west-2.amazonaws.com%2F2e%2Ff9%2Fb16a361b49dbaad36e1d1488c86e%2Fjannik-sinner-tenista-italiano-numero-uno-del-mundo.jpg', 
        category: 'TENIS',
        live: false
    },
    {
        title: 'Rafael Nadal y Carlos Alcaraz confirmaron la noticia más esperada por el mundo del deporte',
        date: 'Jun 9',
        image: 'https://caracoltv.brightspotcdn.com/dims4/default/d6762f3/2147483647/strip/true/crop/1000x498+0+0/resize/840x418!/format/webp/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.us-west-2.amazonaws.com%2F5c%2F7c%2Ffb5a5f444779b01c7e83098ce5a2%2Frafael-nadal-carlos-alcaraz-tenistas-espana-juegos-olimpicos-paris-2024.jpg', 
        category: 'TENIS',
        live: false
    },
    {
        title: 'Naomi Osaka, la exnúmero uno que volvió con toda: acabó con una larga racha negativa',
        date: 'May 7',
        image: 'https://caracoltv.brightspotcdn.com/dims4/default/3fd0bf2/2147483647/strip/true/crop/592x666+289+0/resize/137x154!/format/webp/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.us-west-2.amazonaws.com%2F0b%2Fff%2F39b1415047caabd9989a8ba6ac4d%2Fnaomi-osaka-celebra-victoria-cesped.jpg', 
        category: 'TENIS',
        live: false
    },
    {
        title: 'Jannik Sinner, el mejor del mundo: exnúmeros uno del ranking ATP felicitaron al italiano',
        date: 'Abr 24',
        image: 'https://caracoltv.brightspotcdn.com/dims4/default/1ede74d/2147483647/strip/true/crop/608x683+225+0/resize/137x154!/format/webp/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.us-west-2.amazonaws.com%2F40%2F58%2Fae81e42b48c8a466fac2adb0cb9d%2Fgettyimages-2155434095.jpg',
        category: 'TENIS',
        live: false
    }

    ];

    const Newarticles = [
      {
          title: 'Usaint Bolt sufrió grave lesión en partido benéfico de fútbol',
          date: 'Jun 10',
          image: 'https://caracoltv.brightspotcdn.com/dims4/default/521537c/2147483647/strip/true/crop/942x683+0+0/resize/320x232!/format/webp/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.us-west-2.amazonaws.com%2Fda%2F91%2Ffcdda3ca4252a06f5b2e8d7060e0%2Fgettyimages-2156817039.jpg', 
          category: 'FÚTBOL',
          live: false
      },
      {
          title: 'Luis Díaz, el héroe de Colombia en la Copa América 2024: golazo y asistencia en el debut ante Ecuador',
          date: 'Jun 9',
          image: 'https://caracoltv.brightspotcdn.com/dims4/default/a1d22fd/2147483647/strip/true/crop/1469x1065+0+0/resize/320x232!/format/webp/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.us-west-2.amazonaws.com%2F0e%2F85%2F296d88694b599518374d6ddfd7e8%2Fwhatsapp-image-2024-05-23-at-9-40-37-am.jpeg', 
          category: 'FÚTBOL',
          live: false
      },
      {
          title: 'Jorge "Polilla" Da Silva es el nuevo técnico del América de Cali ',
          date: 'May 7',
          image: 'https://caracoltv.brightspotcdn.com/dims4/default/11f3adc/2147483647/strip/true/crop/590x428+0+0/resize/320x232!/format/webp/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.us-west-2.amazonaws.com%2Fa0%2F66%2Fcd1bd5974642a93298c551edf274%2Fwhatsapp-image-2024-05-07-at-4.59.57%20PM.jpeg', 
          category: 'FÚTBOL',
          live: false
      },
      {
          title: 'Así quedó el Liverpool en la Premier League, tras perder 2-0 con el Everton',
          date: 'Abr 24',
          image: 'https://caracoltv.brightspotcdn.com/dims4/default/cd35150/2147483647/strip/true/crop/832x603+59+0/resize/320x232!/format/webp/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.us-west-2.amazonaws.com%2Fc7%2Fb7%2F1e50ab5c45c8ba1768ff70fcbd79%2F000-34q62rt.jpg',
          category: 'FÚTBOL',
          live: true
      }
    ];

    const NewArticle3 = [

      {
        title: 'Insólito lo que pasó en el GP de Canadá, de Fórmula 1: tres accidentes en la misma curva',
        date: 'Jun 09',
        image: 'https://caracoltv.brightspotcdn.com/dims4/default/2bdd6db/2147483647/strip/true/crop/1000x498+0+168/resize/840x418!/format/webp/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.us-west-2.amazonaws.com%2Fad%2F8c%2F6ab212b14ce79f2f0a473f59b8c1%2Fcarlos-sainz-sergio-checo-perez-formula-1.jpg', 
        category: 'F1',
        live: false
    },
    {
        title: 'Estrella de la Fórmula 1 y un anuncio sorprendente: cambiará de equipo para la próxima temporada',
        date: 'Jun 9',
        image: 'https://caracoltv.brightspotcdn.com/dims4/default/96a3b02/2147483647/strip/true/crop/1000x498+0+158/resize/840x418!/format/webp/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.us-west-2.amazonaws.com%2F97%2F62%2F0037c2ec4524bca60aacc230cc6b%2Fformula-1-gran-premio-abu-dabi-largada.jpg', 
        category: 'F1',
        live: false
    },
    {
        title: 'Ferrari sigue en modo contratación: anunció llegada de dos nuevos integrantes',
        date: 'May 7',
        image: 'https://caracoltv.brightspotcdn.com/dims4/default/c769140/2147483647/strip/true/crop/1024x510+0+150/resize/840x418!/format/webp/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.us-west-2.amazonaws.com%2F32%2Ffc%2Fed5d79f7430687fc01deee8d6815%2Fgettyimages-2060772992.jpg', 
        category: 'F1',
        live: false
    },
    {
        title: 'Fórmula 1: 30 años de la muerte de Ayrton Senna, la leyenda brasileña',
        date: 'Abr 24',
        image: 'https://caracoltv.brightspotcdn.com/dims4/default/c90604a/2147483647/strip/true/crop/1024x510+0+67/resize/840x418!/format/webp/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.us-west-2.amazonaws.com%2Ff5%2F9d%2F8851e28e41da9b14b11ff79b52f2%2Fgettyimages-811314182.jpg',
        category: 'F1',
        live: false
    }

    ];

    
function News() {
    return (
        <div>
            {/* Carrusel */}
            <ControlledCarousel
                title4={carouselInfo.title4}
                title5={carouselInfo.title5}
                title6={carouselInfo.title6}
                text4={carouselInfo.text4}
                text5={carouselInfo.text5}
                text6={carouselInfo.text6}
            />
            {/* Iconos */}
            <div className="sports-container">
                {sports.map((sport, index) => (
                    <SportIcon key={index} name={sport.name} icon={sport.icon} />
                ))}
            </div>
            {/* Tarjetas */}
            <br />
            <CardContainer cardsData={newsCardsData1} />
            {/* Titulo Futbol */}
            <Titulo />
            {/* Fútbol */}
            <MainContent />
            {/* Noticias de futbol */}
            <NewsArticle articles={Newarticles} />
            {/* Titulo Tenis */}
            <Titulo2 />
            {/* Tenis */}
            <MainContent2 />
            {/* Noticias de tenis */}
            <NewsArticle articles={NewArticle2} />
            {/* Titulo F1 */}
            <Titulo3 />
            {/* F1 */}
            <MainContent3 />
            {/* Noticias de F1 */}
            <NewsArticle articles={NewArticle3} />    
            
        </div>
    );
}

export default News;
