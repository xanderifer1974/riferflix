import React from 'react'
import Menu from '../../components/Menu'
import DadosIniciais from '../../data/dados_iniciais.json'
import Carousel from '../../components/Carousel'
import BannerMain from '../../components/BannerMain'
import Footer from '../../components/Footer'

function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={DadosIniciais.categorias[0].videos[0].titulo}
        url={DadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-End? Trabalhando na área"}
      />

      <Carousel
        ignoreFirstVideo
        category={DadosIniciais.categorias[0]}
      />

      <Carousel
        category={DadosIniciais.categorias[1]}
      />

      <Carousel
        category={DadosIniciais.categorias[2]}
      />

      <Carousel
        category={DadosIniciais.categorias[3]}
      />

      <Carousel
        category={DadosIniciais.categorias[4]}
      />

      <Footer />
    </div>


  );
}

export default Home;
