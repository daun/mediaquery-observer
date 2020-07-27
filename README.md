# Media Query Observer

Simple media query observer.

Wraps the wonderful
[enquire.js](https://github.com/WickyNilliams/enquire.js),
with a few additions:

- Use named queries
- Add default queries: `landscape`, `portrait`, `dark`
- Allow number-only queries like `1024` or `60em`

## Installation

```bash
npm install mq-observer
```

## Usage

```js
import observer from 'mq-observer'
```

### Adding queries

```js
observer.add({
  'multi-col-content': 768,
  'floating-nav': 1024
})
```

### Observing queries

See the [enquire.js docs](https://wicky.nillia.ms/enquire.js/) for details on
registering handlers.

```js
observer.register('multi-col-content', {
  match() {
    /* Init */
  },
  unmatch() {
    /* Teardown */
  }
})
```

### Killing observers

Registering an observer returns a handle that can be used to unregister it
later.

```js
// Register handler
const unregister = observer.register('query', {})

// Kill handler
unregister()
```

### Default queries

- landscape: `orientation: landscape`
- portrait: `orientation: portrait`
- dark: `prefers-color-scheme: dark`

### Supported query formats

- Fully qualified: `screen and (min-width: 1000px)`
- Condition only: `(min-width: 1000px)`
- Width only: `1000px`, `1000`

### Sharing media queries between SCSS & JS

See [icss-js](https://github.com/daun/icss-js) for a possible solution to
importing named media queries from SCSS.

## License

[MIT License](https://opensource.org/licenses/MIT) © Philipp Daun
