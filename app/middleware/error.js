module.exports = function(err, req, res, next){
  if (err instanceof SyntaxError) {
    return res.status(400).json({
      url : req.url,
      type: 'AssertionError',
      message: err.message
    });
  }

  res.status(500).json({
    url : req.url,
    type: 'Server Exception (or Unhandled Promise Exception)',
    message: err.message
  });
  
}