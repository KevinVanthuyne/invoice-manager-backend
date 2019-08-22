exports.sendJsonError = ({ res, error }) => {
  res.json({
    status: 'error',
    message: error,
  });
};

exports.sendJsonSuccess = ({ res, message, data }) => {
  data
    ? res.json({
        status: 'success',
        message,
        data,
      })
    : res.json({
        status: 'success',
        message,
      });
};

exports.sendJsonResponse = ({ res, error, successMessage, data }) => {
  if (error) this.sendJsonError({ res, error });
  else {
    this.sendJsonSuccess({ res, message: successMessage, data });
  }
};
