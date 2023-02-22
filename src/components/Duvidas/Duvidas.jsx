import React from "react";

import '../Options/options.css';

const Duvidas = (props) => {
  const duvidas = [
    {
      text: "OpenMind Connect oferece treinamento e suporte para suas soluções?",
      handler: props.actionProvider.Doubt1,
      id: 1,
    },
    { text: "Como a OpenMind Connect garante a segurança de dados?",
      handler: props.actionProvider.Doubt2, 
      id: 2 
    },
    { text: "Quais setores a OpenMind Connect atende?", 
    handler: props.actionProvider.Doubt3, 
    id: 3
    },
    { text: "O que é a OpenMind Connect?", 
    handler: props.actionProvider.Doubt4, 
    id: 4
    },
  ];

  const buttonsMarkup = duvidas.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Duvidas;
