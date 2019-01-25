# Bracket Matcher

This is a basic function that checks the brackets contained inside a string to make sure all openers (`(`, `[`, `{`) have matched closers, and that they're in the correct order. See exmaple below, or look at the tests for more advanced examples.

```javascript
import matcher from './src';

matcher('()')
//> True

matcher(')(')
//> False

matcher('( [] {} )')
//> True

matcher('Mixed words with (example) words [.]')
// True
```
