var fs = require('fs');
var stat = fs.stat;
var copy = function (src, dst) {
    fs.readdir(src, function (err, paths) {
        console.log(paths)
        if (err) {
            throw err;
        }
        paths.forEach(function (path) {
            var _src = src + '/' + path;
            var _dst = dst + '/' + path;
            var readable;
            var writable;
            stat(_src, function (err, st) {
                if (err) {
                    throw err;
                }

                if (st.isFile()) {
                    readable = fs.createReadStream(_src);
                    writable = fs.createWriteStream(_dst);
                    readable.pipe(writable);
                } else if (st.isDirectory()) {
                    exists(_src, _dst, copy);
                }
            });
        });
    });
}

var exists = function (src, dst, callback) {
    fs.exists(dst, function (exists) {
        if (exists) {
            callback(src, dst);
        } else {
            fs.mkdir(dst, function () {
                callback(src, dst)
            })
        }
    })
}

exists('./build/', './backend/public/', copy)