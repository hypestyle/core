const AsciiTable = require('ascii-table')

const Table = new AsciiTable('Commands')
Table.setHeading('Command', 'Description')
Table.addRow('help', 'Show this help')
Table.addRow('init', 'Initialize a new confif file')
Table.addRow('build', 'Build your config file')
Table.addRow('watch', 'Watch the config file and rebuild it when it changes')
Table.addRow('version', 'Show the version')

console.log(Table.toString())
