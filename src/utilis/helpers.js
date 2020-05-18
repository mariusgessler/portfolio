const keyProvider = () => {
  return Date.now() / Math.floor(Math.random() * 100);
};

export default keyProvider;
