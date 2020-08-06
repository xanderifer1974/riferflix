import {useState} from 'react';

function useForm(valoresIniciais){

    const [values, setValues] = useState(valoresIniciais);
  
    function setValue(chave, valor) {
      setValues({
        ...values,
        [chave]: valor,
      });
    }
  
    //Função genérica de manipulação
    function handleChange(evento) {
      setValue(
        evento.target.getAttribute('name'),
        evento.target.value
        );
    }
  
    function clearForm(){
      setValue(valoresIniciais);
    }
  
    return {
      values,
      handleChange,
      clearForm
    }
  }
  
  export default useForm;