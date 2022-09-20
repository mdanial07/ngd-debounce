[![npm version](https://badge.fury.io/js/ngd-debounce.svg)](https://www.npmjs.com/package/ngd-debounce)

# ngd-debounce

***ngd-debounce*** is an Angular directive that adds a debounce (delay time) to your input fields.

It delays(debounce) the start of a function call after every keyup event.

## Installation:

```bash
npm i ngd-debounce --save
```

## Use Example:

Add the declaration to your @NgModule:

```typescript
import {NgdDebounceModule} from 'ngd-debounce';
...
@NgModule({
  ...
  Imports: [
    NgdDebounceModule
  ]
  ...
})
```

Use ngd-debounce directive like this in your html.

```
<input debounce (debounce)="myFunction($event)" [time]="1000" name="Your input">
```

## Author

[Muhammad Danial](https://mdanial.firebaseapp.com/contact)

<!-- ## Licence

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info. -->