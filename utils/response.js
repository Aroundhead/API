exports.success = (res, data, message = 'OK', status = 200) => {
    res.status(status).json({ status, message, data });
};

exports.error = (res, message = 'Error interno del servidor', status = 500) => {
    res.status(status).json({ status, message });
};