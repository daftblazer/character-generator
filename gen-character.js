// Create an array of first names
const firstNameList = ['Jordan', 'Jason', 'Michael', 'Thomas', 'Adam', 'Kevin'];
const lastNameList = ['Wood', 'Smith', 'Johnson', 'Clapp', 'Black', 'White', 'Stone'];

const generateName = (firstNames, lastNames) => {
    // Gets a random index for each name
    const randomFirst = Math.floor(Math.random() * firstNames.length);
    const randomLast = Math.floor(Math.random() * lastNames.length);

    // Combines random first and last name together to get a full name
    const fullName = firstNames[randomFirst] + ' ' + lastNames[randomLast];

    // Prints the name to the console
    return console.log(fullName);
}

generateName(firstNameList, lastNameList);
