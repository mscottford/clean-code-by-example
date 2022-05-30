const { isMainThread, parentPort, workerData, Worker } = require('worker_threads');

class RecordingProxy {
    constructor(proxyHost) {
        this.proxyHost = proxyHost;
    }

    start(completed) {
        console.log('start method enter');
        this.worker = new Worker(__filename, { workerData: this, stdout: false, stderr: false });
        this.worker.on('message', (message) => {
            if (message == 'started') {
                completed();
            }
        });
    }

    stop() {
        this.worker.postMessage('stop');
    }
}

if (!isMainThread) {
    const talkback = require('talkback');

    const opts = {
        host: "https://api.github.com",
        record: talkback.Options.RecordMode.NEW,
        port: 5544,
        path: __dirname + '/tapes',
        silent: true,
        summary: false
    };
    const server = talkback(opts);

    server.start(() => {
        parentPort.postMessage("started");
    });

    parentPort.on('message', (message) => {
        if (message == 'stop') {
            server.close();
            parentPort.close();
        }
    });
}

module.exports = RecordingProxy;
