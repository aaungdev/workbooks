function parseAndDisplayName(name) {
  const spaceIndex = name.indexOf(" ");
  const firstName = name.substring(0, spaceIndex);
  const lastName = name.substring(spaceIndex + 1);

  console.log(`Name: ${name}`);
  console.log(`First name: ${firstName}`);
  console.log(`Last name: ${lastName}\n`);
}

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Tan Auston");
parseAndDisplayName("Siddalee Grace");
