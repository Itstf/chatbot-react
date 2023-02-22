import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../components/Options/Options";
import Duvidas from '../components/Duvidas/Duvidas'
import Quiz from "../components/Quiz/Quiz";

const config = {
  botName: "Bot",
  initialMessages: [
    createChatBotMessage(`Bem vindo ao suporte da OpenMind Connect !`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "javascriptQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Somos uma empresa de tecnologia para te ajudar a crescer!",
            answer:
              "Fornecemos soluções inovadoras para alavancar seus negócios.",
            id: 1,
          },
          {
            question: "Nos dedicamos a uma abordagem de mente aberta e colaborativa,",
            answer:
              "especialmente para o crescimento e sucesso dos negócios.",
            id: 2,
          },
          {
            question: "Damos visibilidade ao cliente, otimização, desempenho e automação.",
            answer:
              "Vamos juntos crescer e alcançar patamares!",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "duvidasQuiz",
      widgetFunc: (props) => <Duvidas {...props} />, 
    },
  ],
};

export default config;