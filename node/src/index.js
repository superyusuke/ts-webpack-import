"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var _a = process.env.PORT, PORT = _a === void 0 ? 3000 : _a;
app.get('/', function (req, res) {
    res.send({
        message: 'hello world! aa'
    });
});
if (require.main === module) {
    app.listen(PORT, function () {
        console.log('server started at http://localhost:' + PORT);
    });
}
exports["default"] = app;
//# sourceMappingURL=index.js.map