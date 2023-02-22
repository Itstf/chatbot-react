// class MessageParser {
//     constructor(actionProvider, state) {
//       this.actionProvider = actionProvider;
//       this.state = state;
//     }
  
//     parse(message) {
//       console.log(message);
//       const lowercase = message.toLowerCase();

//       if (lowercase.includes('')) {
//         this.actionProvider.greet();
//       }
//       if (lowercase.includes('tchau')) {
//         this.actionProvider.bye();
//       }
//     }
//   }
  
//   export default MessageParser;

class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      console.log(message);
      const lowercase = message.toLowerCase();
  
      if (lowercase.includes("")) {
        this.actionProvider.greet();
      }
  
      if (lowercase.includes("contatos") || lowercase.includes("ctt")) {
        this.actionProvider.Contacts();
      }
    }
  }
  
  export default MessageParser;