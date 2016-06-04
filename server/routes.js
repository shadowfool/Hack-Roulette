module.exports = (app, passport, handler) => {
  app.get('/auth/github',
    passport.authenticate('github', { scope: ['user:email', 'read:org'] }),
    () => {}
  );
  app.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    handler.loggedInUser
  );
  app.get('/addUser', handler.isUser, (req, res) => {
    handler.addUser(req.user.emails[0].value);
    res.redirect('/');
  });
  app.get('/', handler.isUser, () => {
    // console.log('hello world, user is logged in as: ' + req.user.username);
    // res.send('hello world, user is logged in as: ' + req.user.username);
  });
  app.get('/login', (req, res) => {
    res.send('login page');
  });
  app.post('/feedback', (req, res) => {
    // TODO: Add feedback into the server
    console.log('Got stuff from feedback!');
    console.log(req.body);
    res.status(200).json('Woo');
  });
  app.get('/logout', handler.logoutUser);
};