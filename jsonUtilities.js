exports.error = (res, error) => {
  res.json({
    status: 'error',
    message: error,
  });
};

exports.success = ({ res, message, data }) => {
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
