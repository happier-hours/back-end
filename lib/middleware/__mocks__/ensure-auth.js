const ensureAuth = () => (req, res, next) => {
  req.user = {
    sub: '123',

  };
  next();
};

module.exports = ensureAuth;
