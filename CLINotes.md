
# CLI Notes

- To run any JavaScript file:
  ```bash
  node filename.js
  ```

- To run any executable file:
  ```bash
  ./nameoffile
  ```

- An executable file:
  - Can be a **script** with a shebang line on top, which tells the CLI which shell environment or interpreter to use.
  
    Example shebang for Node.js script:
    ```bash
    #!/usr/bin/env node
    ```

  - Or can be a **binary file**.

- These script files need to have executable permission set:

  ```bash
  chmod u+x filename
  ```

- Explanation of `chmod`:

  - `chmod` changes file permissions (read, write, execute) for:
    - **u** = current user (owner)
    - **g** = group
    - **o** = others

  - Use `+` to **give** permission, or `-` to **remove** permission.

---

*Example permissions command:*

```bash
chmod u+x filename  # gives execute permission to the owner
```


---

## Importing and Processing Data Files in Node.js

### Static Imports

- Use static imports when you want to **include fixed data or configuration files** at development time.
- Example:

  ```js
  const data = require('./data.json');
  ```

- The data is bundled with your code and loaded **automatically when the program starts**.
- **Best for:** small config files or constants that rarely change and are part of your codebase.

---

### Dynamic Imports via CLI Arguments and File Reading

- Use dynamic imports when you want your program to **process different data files without changing the source code**.
- You pass the filename as a **command-line argument**, and your code **reads the file at runtime**.
- This approach uses:
  - **CLI argument parsing** (e.g., `argv.file`) to get the filename dynamically.
  - The **Node.js `fs` module** to read the file contents from disk.

- Example pattern:

  ```js
  const argv = require('optimist').argv;
  const fs = require('fs');

  const inputFile = argv.file;

  if (inputFile) {
    const fileData = fs.readFileSync(inputFile, 'utf8');
    const jsonData = JSON.parse(fileData);
    // Process jsonData here
  } else {
    console.error('No input file specified');
  }
  ```

- **Best for:** tools or applications that operate on user-supplied or frequently changing data files.

---

### Why use dynamic file reading instead of static imports?

| Static Imports                           | Dynamic CLI File Reading                          |
|----------------------------------------|--------------------------------------------------|
| Data fixed at development time          | Data can vary each run without code changes      |
| Bundled with the code                   | Files read at runtime according to user input    |
| Simpler for small, unchanging data      | More flexible and scalable for batch or varied inputs |

---


> This combination of CLI argument parsing and `fs` file access **makes your Node.js programs flexible and adaptable** to different inputs without needing to change source code.

---

### Summary:

| Component                | Role                                           |
|--------------------------|------------------------------------------------|
| CLI argument (`argv.file`) | Dynamically specifies which data file to process |
| `fs` module              | Reads/writes the content inside that file      |

---

This approach makes your program flexible, allowing it to operate on different input files provided by the user at runtime.

