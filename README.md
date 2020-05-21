# Simple Blockchain example with Typescript

Learning Typescript by making a Blockchain with it

## Start

### 1. Initiate project

```bash
$ yarn init
```

### 2. Install Typescript globally and init typescript project

```bash
$ yarn add typescript --dev

# creates a tsconfig.json file
$ tsc --init
```

### 3. Compiles typescript file

  This will compile `index.ts` file to normal javascript file.
  Which is `index.js`.

  ```bash
  $ tsc
  ```

### 4. Run `index.ts`

  If you run `yarn start`, `tsc` runs in advance which is same command as `prestart` in the package.json.

  ```bash
  $ yarn start

  # output
  yarn run v1.22.4
  $ tsc
  $ node index.js
  Hello Seokje, you are 40, you are a male
  ```

### 5. Watch mode

  If you want to run compilation as soon as modifying the source code, install `tsc-watch` in dev mode.

  ```bash
  $ yarn add tsc-watch --dev
  ```

  And in the package.json, modify start command as follows:

  ```json
  // AS-IS
  "start": "node index.ts",
  "prestart": "tsc"

  // TO-BE
  "start": "tsc-watch --onSuccess \"node dist/index.js\" "
  ```

  And modify `tsconfig.json` include path.

  ```json
  // AS-IS
  "include": ["index.ts"],

  // TO-BE
  "include": ["src/**/*"],
  ```

  All the above describe this:
  - When you run `yarn start`, it will watch any update from `src/` folder.
  - Any update saved, it will rebuild the files from `src/` and will export the results to the `dist/` folder.
  - If successful, `dist/index.js` will run. 

## Reference Sites/Docs

- [NomadCoder](https://academy.nomadcoders.co/courses/303219/lectures/4975930)
