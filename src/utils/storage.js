const lcstore = window.localStorage;

lcstore.prototype.reactSetItem = (key, value, callback) => {
  lcstore.setItem(key, value);
  callback();
};

lcstore.prototype.reactGetItem = (key, callback) => {
  let value = lcstore.getItem(key);
  if (value === undefined || value === null) {
    callback();
  } else {
    return value;
  }
};

export default lcstore;
