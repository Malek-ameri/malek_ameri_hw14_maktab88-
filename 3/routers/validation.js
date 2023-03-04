const isEmpty = (key) => (req, res, next) => {
  if (!req.validation) {
    req.validation = {
      isValid: true,
      message: [],
    };
  }

  const inputValue = req.body[key] ?? "";
  if (typeof inputValue === "string" && inputValue.trim() === "") {
    req.validation.isValid = false;
    req.validation.message.push(`${key} is empty`);
    next();
  }
  next();
};

const isLength = (key) => (req, res, next) => {
  if (!req.validation) {
    req.validation = {
      isValid: true,
      message: [],
    };
  }

  const inputValue = req.body[key] ?? "";
  if (!inputValue.match(/([a-zA-Z0-9)]){3,10}/g)) {
    req.validation.isValid = false;
    req.validation.message.push(`${key} must be more than 3 characters`);
    next();
  }
  next();
};

const isPassword = (key) => (req, res, next) => {
  if (!req.validation) {
    req.validation = {
      isValid: true,
      message: [],
    };
  }
  
  const inputValue = req.body[key] ?? "";
  if ( !inputValue.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g)) {
    req.validation.isValid = false;
    req.validation.message.push(`${key} minimum eight characters, at least one letter and one number`);
    next();
  }
  next();
};

module.exports = { isEmpty, isLength, isPassword };
