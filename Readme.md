#Toy Robot Simulator
Take home assignment done for REA group developer role.

## Running Locally

### Prerequisites

1. Node.js v12.18.2 +

### Install Dependencies

```
npm install
```

### Running The Simulator

Make sure your input txt file is in the folder 'input'. This can be changed in config.json

```
node index.js
```

### Running Unit Tests

```
npm test
```

### Checking Test Coveage

```
npm coverage
```

#Algorithm

1. Read commands from input file line by line.
2. Regex Validate each command
3. If valid execute each command
   3.1 Discard all commands till the first place command.
   3.2 After first place command start executing as per the problem statement.
   3.3 Before each move command execution, perform a geometric validation to see if it is a safe command.
   3.4 If safe, go ahead else return false.
4. If not valid discard
5. Repeat for all lines
