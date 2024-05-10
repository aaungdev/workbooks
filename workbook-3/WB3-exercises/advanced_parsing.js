function parseAndDisplayName(name) {
    const firstSpace = name.indexOf(' ');
    const lastSpace = name.lastIndexOf(' ');

    console.log(`Name: ${name}`);

    if (firstSpace === -1) { 
        console.log(`Only name: ${name}`);
    } else if (firstSpace === lastSpace) { 
        console.log(`First name: ${name.substring(0, firstSpace)}`);
        console.log(`Last name: ${name.substring(firstSpace + 1)}`);
    } else { // More than one space found
        console.log(`First name: ${name.substring(0, firstSpace)}`);
        console.log(`Middle name: ${name.substring(firstSpace + 1, lastSpace)}`);
        console.log(`Last name: ${name.substring(lastSpace + 1)}`);
    }
}

parseAndDisplayName("Cher");
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Dana Lynn Wyatt");
