import React from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link, useHistory } from 'react-router-dom'
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos'

function CadastroVideo() {
  const history = useHistory();
  const { handleChange, values } = useForm({
    titulo: 'Video Padrão',
    url: 'https://www.youtube.com/watch?v=tPOMG0D57S0&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=2&t=0s',
    categoria:'Front-End'
  });

  return (
    <PageDefault>
      <h1>Cadastro de Vídeos</h1>
      <form onSubmit={(event) => {
          event.preventDefault();         
           videosRepository.create({
            titulo: values.titulo,
            url: values.url,
            categoriaId: 1,
          })
              .then(() => {
              console.log('Cadastrou com sucesso!');
              history.push('/');
            });
  
        
      }}>
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="calegoria"
          value={values.categoria}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar
          </Button>
      </form>
      <Link to="/cadastro/categoria">
        Cadastrar Categoria
          </Link>
    </PageDefault>
  );
}

export default CadastroVideo;