import React from 'react';
import Faq from "react-faq-component";
import './FAQ.module.css';
import {Link} from 'react-router-dom';
import Head from '../Head/Head';


const data = {
  title: "Preguntas Frecuentes",
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: "Lorem ipsum dolor sit amet, consectetur "
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
    },
    {
      title: "What is the package version",
      content: "v1.0.5"
    }]
}


const FAQ = () => {
  return (
    <div>
      <Head />
      <div>
        <Faq data={data} />
      </div>
      
<Link to='/'><button type="button" class="btn btn-info">Volver</button></Link>   
</div>
    );
};

export default FAQ;

