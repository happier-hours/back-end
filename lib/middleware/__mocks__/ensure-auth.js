const ensureAuth = () => (req, res, next) => {
  req.user = {
    sub: 'd.cornelius4444@gmail.com',

  };
  next();
};

module.exports = ensureAuth;
