const Login = require('../models/LoginModel');

exports.index = (req, res) => {
  if (req.session.user) return res.render('loginLogado');
  return res.render('login');
};

exports.register = async function (req, res) {
  try {
    const login = new Login(req.body);
    await login.register();

    if (login.errors.length > 0) {
      req.flash('errors', login.errors);
      req.session.save(function () {
        return res.redirect(req.get('Referrer') || '/login'); // Redireciona para a página anterior ou para o login
      });
      return;
    }

    req.flash('success', 'Seu usuário foi criado com sucesso.');
    req.session.save(function () {
      return res.redirect(req.get('Referrer') || '/login'); // Redireciona para a página anterior ou para o login
    });
  } catch (e) {
    console.log(e);
    return res.render('404');
  }
};

exports.login = async function (req, res) {
  try {
    const login = new Login(req.body);
    await login.login();

    if (login.errors.length > 0) {
      req.flash('errors', login.errors);
      req.session.save(function () {
        return res.redirect(req.get('Referrer') || '/login'); // Redireciona para a página anterior ou para o login
      });
      return;
    }

    req.flash('success', 'Você entrou no sistema.');
    console.log('Usuário logado:', login.user); 
    req.session.user = login.user;
    req.session.save(function () {
      return res.redirect(req.get('Referrer') || '/home'); // Redireciona para a página anterior ou para a home
    });
  } catch (e) {
    console.log(e);
    return res.render('404');
  }
};

exports.logout = function (req, res) {
  req.session.destroy();
  res.redirect('/');
};
