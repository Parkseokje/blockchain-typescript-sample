# Simple Blockchain example with Typescript

Learning Typescript by making a Blockchain with it

## Start

### 1. Initiate project

```bash
$ yarn init
```

### 2. Install Typescript globally and init typescript project

```bash
$ yarn global add typescript

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

## Reference Sites/Docs

- [NomadCoder](https://academy.nomadcoders.co/courses/303219/lectures/4975930)
