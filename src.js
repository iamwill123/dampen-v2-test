const dampen = (wait, action) => {
  const run = () => {
    timeout = 0;
    disp(action(...args));
  };

  return dampened;
};

module.exports = dampen;
