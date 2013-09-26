var  express = require('express')
	,path = require('path')
	;
/*
This is a helper function that automatically configurate the express.application using information in config
*/
function AutoConfig(app,config){
  app.set('port', config.port);
  app.set('host',config.host);
  app.set('views', __dirname + '/views');
  //app.engine('.html', consolidate.swig);
  //require('swig').init({ root: path.join(__dirname, 'views'), allowErrors: true,cache:false });
  //app.set('view engine', 'html');
  app.use(express.static(path.join(__dirname, 'static')));
  /* default format logger */
  express.logger.format('devx', function(tokens, req, res){
    var status = res.statusCode
      , color = 32;

    if (status >= 500) color = 31
    else if (status >= 400) color = 33
    else if (status >= 300) color = 36;

    if(req.method == 'GET' &&
        (req.originalUrl.indexOf("/js/") == 0 ||
         req.originalUrl.indexOf("/css/") == 0||
         req.originalUrl.indexOf("/img/") == 0 || 
         req.originalUrl.indexOf("/grid/img") == 0))
      return null;

    return '\033[90m' + req.method
      + ' ' + req.originalUrl + ' '
      + '\033[' + color + 'm' + res.statusCode
      + ' \033[90m'
      + (new Date - req._startTime)
      + 'ms'
      + '\033[0m';
  });
  app.use(express.logger('devx'));
  app.use(express.bodyParser());
  app.use(express.cookieParser());

}


exports.config = AutoConfig;