import React from 'react';
import './App.css';

import List from './components/List/List';

function App() {
  return (
    <>
      <List 
        title="Computador" 
        products={[
          {
            img: "https://img.terabyteshop.com.br/produto/g/processador-intel-core-i5-9400f-290ghz-410ghz-max-turbo-9mb-bx80684i59400f-9-geracao-coffee-lake-lga-1151_64522.jpg",
            name: "Processador Intel Core i5 9400F",
            price: 799.99,
          },
          {
            img: "https://images0.kabum.com.br/produtos/fotos/96610/96610_1525779757_g.jpg",
            name: "Placa Mãe Gigabyte AORUS B360M GAMING 3",
            price: 609.90,
          },
          {
            img: "https://a-static.mlcdn.com.br/618x463/placa-de-video-nvidia-geforce-gtx-1650-ex-4gb-gddr5-128bits-65sqh8ds08ex-galax/sirtecnologia/9874/5691879124b32a2d4adada582713dd84.jpg",
            name: "Placa de Video Geforce Galax GTX 1650 4GB",
            price: 795,
          },
          {
            img: "https://www.ibyte.com.br/media/catalog/product/cache/1/image/375x400/9df78eab33525d08d6e5fb8d27136e95/3/6/36043-01-memoria-kingston-hyperx-fury-4gb-2400mhz-ddr4-cl15-black-series-hx424c15fb-4-min.jpg",
            name: "Memoria Kingston HyperX Fury 4GB 2400MHz CL15",
            price: 218.92,
          },
          {
            img: "https://images-americanas.b2w.io/produtos/01/00/img/54210/0/54210015_1GG.jpg",
            name: "Fonte Corsair VS450 450w 80 Plus",
            price: 240,
          },
          {
            img: "https://a-static.mlcdn.com.br/618x463/ssd-480gb-kingston-a400/kampinformatica/503/3ace609a62e1deec1f99f189bd4a8b1f.jpg",
            name: "SSD Kingston A400 480GB",
            price: 379.90,
          },
          {
            img: "https://img.terabyteshop.com.br/produto/g/gabinete-gamer-redragon-ramhorn-mid-tower-s-fan-vidro-temperado-black-s-fonte_88574.jpg",
            name: "Gabinete Gamer Redragon Ramhorn",
            price: 249.90,
          },
          {
            img: "https://img.terabyteshop.com.br/produto/g/cooler-para-gabinete-rise-mode-galaxy-rgb-12v-120mm-rm-mb-01-12v_86665.jpg",
            name: "Cooler Rise Mode Galaxy 120mm RGB ",
            price: 59.98,
          },
          // {
          //   img: "",
          //   name: "",
          //   price: 0,
          // },
        ]}
      />

      <List
        title="Periféricos"
        products={[
          {
            img: "https://img.olx.com.br/images/73/734926014011799.jpg",
            name: "Monitor LG LED 23.8″ Full HD",
            price: 769,
          },
          {
            img: "https://images9.kabum.com.br/produtos/fotos/91099/91099_index_gg.jpg",
            name: "Headset Gamer HyperX Cloud Silver",
            price: 350,
          },
          {
            img: "https://images0.kabum.com.br/produtos/fotos/96290/96290_1524239309_index_gg.jpg",
            name: "Teclado Mecânico Gamer Logitech G513 Carbon",
            price: 450,
          },
          {
            img: "https://images9.kabum.com.br/produtos/fotos/102649/mouse-gamer-logitech-g403-hero-16k-rgb-lightsync-16000-dpi_mouse-gamer-logitech-g403-hero-16k-rgb-lightsync-16000-dpi_1563479684_gg.jpg",
            name: "Mouse Gamer Logitech G403 Hero 16k",
            price: 230,
          },
          {
            img: "https://http2.mlstatic.com/mousepad-gamer-havit-hv-mp830-large-90x30cm-control-grande-D_NQ_NP_742833-MLB29748134715_032019-F.webp",
            name: "Mousepad Gamer Havit Hv-mp830 Large 90x30cm",
            price: 40,
          },
        ]}
      />

      <List
        title="Outros"
        products={[
          {
            img: "https://i.pinimg.com/originals/db/af/68/dbaf683627b9eb72a3ed985b9223d101.jpg",
            name: "Mesa de escritório qualquer",
            price: 350,
          },
          {
            img: "https://images-na.ssl-images-amazon.com/images/I/613kTHJ4g7L._AC_SX425_.jpg",
            name: "Kindle",
            price: 350,
          },
          {
            img: "https://images-na.ssl-images-amazon.com/images/I/51BhFrquZkL._AC_SL1000_.jpg",
            name: "2x Yeelight",
            price: 270,
          },
        ]}
      />
    </>
  );
}

export default App;
