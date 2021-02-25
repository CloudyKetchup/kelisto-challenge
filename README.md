## Kelisto challenge
#

The following scripts are available:

`yarn start` - Start the application <br>
`yarn test` - Run the tests <br>
`yarn build` - Create the production build <br>
`yarn postinstall` - Configure module aliases, more info [here](https://github.com/Rush/link-module-alias) <br>

#

To run the application inside docker, the following requirements should installed for this:

- docker
- docker-compose

To run production build inside docker run

``` bash
docker-compose up --build

# add -d at the end if you want to run in detached mode
# --build ensures that the fresh image will be build, even if old one exists
```

After this, checkout http://localhost:5000 for the running application.

## Module aliases

This project uses [link-module-aliases](https://github.com/Rush/link-module-alias), for avoiding import hell like this: <br>

``` js
import example from "../../../module";
```

``` js
import example from "module";
```

If you find some bugs or issues if it, run the `yarn` command, if this don't help, delete the `node_modules` folder and run `yarn install`.