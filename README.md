# wordcop

Is your naming convention correct? The naming you think is correct may not be correct for the code you have built so far.This is a tool that automatically diagnoses your naming according to the rules. This tool dedicated to TypeScript projects, Diagnose rules followed based on variable type inference.The target of diagnosis is the source code included in "rootDir" described in tsconfig.json. Typical primitives (boolean, number, string) and arrays are targeted. Regular expressions can be edited freely.

## usage

First, set up `wordcop.config.js`. Write the regular expression in the configuration file as follows.

```js
module.exports = {
  targetDir: ".", // Project path where sconfig.json is located
  regExpChecker: { // Regular expression rules to apply to variables
    boolean: /^(is|has|should)/i,
    number: /.*(count|size|length)$/i,
    string: /.*(label|str)$/i,
    array: /.*(s|es|ies|list|items)$/i
  }
}
```

All you have to do is run `npx wordcop`.

```terminal
$ npx wordcop
/~/example-app/index.ts:5:7 👮‍♂️ <  /.*(count|size|length)$/i
```
