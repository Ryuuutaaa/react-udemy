class Context {
  constructor(value) {
    this.value = value;
  }

  Provider = ({ children, value }) => {
    this.value = value;
    return children;
  };

  Consumer = ({ children }) => children(this.value);
}

function createContext(value = null) {
  const contex = new Context(value);

  return {
    Provider: contex.Provider,
    Consumer: contex.Consumer,
  };
}

export default createContext;
