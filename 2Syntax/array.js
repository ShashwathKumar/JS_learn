var phonebookEntry = {};

console.log('in array function');

phonebookEntry.name = 'Oxnard Montalvo';
phonebookEntry.number = '(555) 555-5555';
phonebookEntry.phone = function() {
    console.log('Calling ' + this.name + ' at ' + this.number + '...');
}

phonebookEntry.phone();
