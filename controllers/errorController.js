const handleDuplicateFieldsDB = err => {

    const duplicateFields = [];

    const regex = /index: (.+) dup key: { : "(.*?)" }/g;
    let match;

    while ((match = regex.exec(err.message)) !== null) {
        const field = match[1].split('_')[0];
        duplicateFields.push(field);
    }
    const message = `Duplicate field value(s) found. Please use another value.`;

    return {
        statusCode: 400,
        status: 'error',
        message,
        error: {
            ...err,
            name: "ValidationError",
            errors: duplicateFields.reduce((acc, field) => {
                acc[field] = 'Value already exists';
                return acc;
            }, {})
        }
    };
};

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    err = handleDuplicateFieldsDB(err);

    res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack
    });

};