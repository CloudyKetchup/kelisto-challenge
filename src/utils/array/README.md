## Array utils

Javascript from the box doesn't provide as developers with all tools which <br/>
we need for manipulating arrays, this module has some extra functions for help.

#
### Remove

Will remove the item from array if it matches the criteria

``` ts
import { remove } from "utils/array";

const list = [
  { id: 3, title: "Apple IPhone X" },
  { id: 5, title: "Samsung Galaxy" }
];

remove(list, ({ id }) => id === 5);

// list = [{ id: 3, title: "Apple IPhone X" }];
```