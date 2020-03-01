module.exports = {
  targetDir: "../example-app",
  regExpChecker: {
    boolean: /^(is|has|should)/i,
    number: /.*(count|size|length)$/i,
    string: /.*(label|str)$/i,
    array: /.*(s|es|ies|list|items)$/i
  }
}
