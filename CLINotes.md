
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
