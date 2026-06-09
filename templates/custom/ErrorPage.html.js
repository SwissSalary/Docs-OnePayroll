exports.transform = function (model) {
    model.statusCode = model.statusCode ? String(model.statusCode) : '';
    model.title = model.title || 'Error';
    model.description = model.description || '';
    model.action = model.action || {};
    model.action.text = model.action.text || 'Try Again';
    model.action.href = model.action.href || '';
    model.pageTitle = (model.statusCode ? model.statusCode + ' | ' : '') + model.title;

    return model;
};