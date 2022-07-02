class Run {
    constructor(cmd) {
        this.cmd = cmd
    }

    run() {
        return new Promise((resolve, reject) => {
            this.child = require('child_process').execSync(
                this.cmd,
                (err, stdout, stderr) => {
                    if (err) {
                        reject(err)
                    }
                    resolve(stdout)
                }
            )
        })
    }

    kill() {
        this.child.kill()
    }
}

let run = new Run('pnpm run cli version')
run.run()

module.exports = Run
