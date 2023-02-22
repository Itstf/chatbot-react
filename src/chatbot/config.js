// import { createChatBotMessage } from "react-chatbot-kit";

// const config = {
//   botName : 'BotMind',
//   initialMessages: [createChatBotMessage('Bem vindo ao suporte da OpenMind Connect. Escolha uma das opções: ')],
// }

// export default config

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
            question: "Pergunta 1",
            answer:
              "Resposta 1",
            id: 1,
          },
          // {
          //   question: "Pergunta 2",
          //   answer:
          //     "Resposta 2",
          //   id: 2,
          // },
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