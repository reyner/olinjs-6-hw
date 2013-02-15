
/*
 * GET home page.
 */

exports.index = function(req, res){
  req.facebook.api('/2014182723480/photos', function(err, data){
    // res.send(data);
    res.render('index', { title: 'Cover Photos', data: data.data });
  });
};