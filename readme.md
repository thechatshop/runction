# Runction :tea:

Usefull ramda functions. :rocket:


## Development :computer:
```bash
$ git clone git@github.com:thechatshop/runction.git
$ cd runction
$ npm install
```

## Install :hammer:
```bash
$ npm install @thechatshop/runction
```

## Testing :bomb:
```bash
$ npm run test     # add -- --watch to monitor for changes
```

## Deploy :ship:
This app will automatically get published under `@thechatshop/runction` on npm (when new code is on master and a new tag exists with `vX.X.X` format)

:rotating_light: **Check the [config.yml](./.circleci/config.yml) for more**

Here is an example:

```bash
git checkout master
# Will generate a tag as well
npm version patch #or major, minor, patch

git push --follow-tags
```

## License
The Chat Shop proprietary license
