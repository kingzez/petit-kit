# petit-kit
![](https://flat.badgen.net/bundlephobia/minzip/petit-kit)
![](https://img.shields.io/npm/v/petit-kit.svg)
![](https://img.shields.io/npm/l/petit-kit.svg)

A tiny tool kit library. *[keep adding]*

## Installation

```bash
npm install petit-kit -S
# or with yarn
yarn add petit-kit
```

## Usage
Just import what you need and use it.


  - [debounce](#debounce)
  - [pick](#pick)
  - [throttle](#throttle)

### debounce
```js
import { debounce } from 'petit-kit'

window.addEventListener(
  'resize',
  debounce(() => {
    console.log(window.innerWidth)
    console.log(window.innerHeight)
  }, 500)
)
```

### pick

```js
import { pick } from 'petit-kit'

pick({ a: 1, b: '2', c: 3 }, ['a', 'c'])
// { 'a': 1, 'c': 3 }
```

### throttle

```js
import { throttle } from 'petit-kit'

setInterval(
  throttle(() => {
    console.log(Date.now())
  }, 1000),
  1
)
```
