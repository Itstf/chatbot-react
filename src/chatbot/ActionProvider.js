class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    greet = () => {
      const message = this.createChatBotMessage(
        'Em que podemos ajudar?',
        {
          widget: "options",
        }
      );
      this.addMessageToState(message);
    };
  
    Contacts = () => {
      const message = this.createChatBotMessage(
        "Vias de Contato",
      );
      const message2 = this.createChatBotMessage(
        "Instagram: @OpenMind.Connect",
      );
      const message3 = this.createChatBotMessage(
        "Tel: (19) 99423-8412",
      );
      const message4 = this.createChatBotMessage(
        "Email: openConnect@gmail.com",
      );

      this.addMessageToState(message);
      this.addMessageToState(message2);
      this.addMessageToState(message3);
      this.addMessageToState(message4);
    };

    Doubts = () => {
      const message = this.createChatBotMessage(
        "Selecione a pergunta",
        {
          widget: "duvidasQuiz",
        }
      );
  
      this.addMessageToState(message);
    };
      Doubt1 = () => {
        const message = this.createChatBotMessage(
          "x",
        );
    
        this.addMessageToState(message);
      };

      Doubt2 = () => {
        const message = this.createChatBotMessage(
          "y",
        );
    
        this.addMessageToState(message);
      };

      Doubt3 = () => {
        const message = this.createChatBotMessage(
          "z",
        );
    
        this.addMessageToState(message);
      };

      Doubt4 = () => {
        const message = this.createChatBotMessage(
          "xyz",
        );
    
        this.addMessageToState(message);
      };

    about = () => {
      const message = this.createChatBotMessage(
        'aaaa',
        {
          widget: "javascriptQuiz",
        }
      );
      this.addMessageToState(message);
    };

    addMessageToState = (message) => {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    };
  }
  
  export default ActionProvider;