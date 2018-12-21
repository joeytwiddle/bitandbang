It's me, Joey!

I forked https://github.com/bnb/bitandbang

# Usage
If you have `npm` installed, you can display this card by running:
```
npx joeytwiddle
```

# Make your own

1. Fork and clone
2. Rename the repo (under settings on Github)
2. Edit `bin/card.js` and put your details
3. Open `package.json` and change `name`, `description`, `bin`, `repository` and `author` fields
4. Commit your changes
5. Run `npm version minor` to bump the version number, and create a new release commit
6. Push your changes
7. Run `npm pack` to build a tarball of what you are about to publish
8. Run `tar tfz <tarball>` to check it has the right files inside it
9. Run `npm publish` to publish
