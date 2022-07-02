/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Hypll. All rights reserved.
 *  Licensed under the MIT License. Read the LICENSE file, for more information.
 *--------------------------------------------------------------------------------------------*/

const chalk = require('chalk')

class EventConfig {
    constructor(events) {
        this.events = events
        this.events.event
        this.events.error
    }

    allEvents() {
        return this.events
    }

    logEvents() {
        this.events.map((event) => {
            if (event === undefined) {
                return console.log(chalk.red('undefined event'))
            } else {
                console.log(chalk.green(event))
            }
        })
    }
}

module.exports = EventConfig
