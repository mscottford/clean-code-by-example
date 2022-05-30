const { isMainThread } = require('worker_threads');
if (!isMainThread) {
    var talkback = require("talkback");

    const opts = {
        host: "https://api.github.com",
        record: talkback.Options.RecordMode.NEW,
        port: 5544,
        path: __dirname + '/tapes'
    };
    const server = talkback(opts);

    server.start();
}
