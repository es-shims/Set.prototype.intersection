# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v1.1.7](https://github.com/es-shims/Set.prototype.intersection/compare/v1.1.6...v1.1.7) - 2024-09-10

### Commits

- [Fix] polyfill: also detect Chrome/v8 bug with setlike size of 2**31 [`6344598`](https://github.com/es-shims/Set.prototype.intersection/commit/6344598b478752ba0359eaa61c454fcf11fc9b43)

## [v1.1.6](https://github.com/es-shims/Set.prototype.intersection/compare/v1.1.5...v1.1.6) - 2024-09-09

### Commits

- [Fix] `node` `v22` and equivalent Chrome versions have a bug [`2024f8c`](https://github.com/es-shims/Set.prototype.intersection/commit/2024f8c63ce84973353e78e192de01c305e9234a)
- [Dev Deps] update `@es-shims/api`, `@ljharb/eslint-config`, `object-inspect`, `tape` [`d50a71b`](https://github.com/es-shims/Set.prototype.intersection/commit/d50a71b1c1dd9881d2ce6fed56ba1834b9880ead)
- [Refactor] change internal slot name [`f3eea84`](https://github.com/es-shims/Set.prototype.intersection/commit/f3eea843706163313c63351e7b148a738ec08af4)
- [Tests] replace `aud` with `npm audit` [`fba1b9c`](https://github.com/es-shims/Set.prototype.intersection/commit/fba1b9c6646607e5278fda134fe9443136e4a2d9)
- [Dev Deps] add missing peer dep [`047c8e0`](https://github.com/es-shims/Set.prototype.intersection/commit/047c8e0896b214f25a6c7037657435f95cd340ff)

## [v1.1.5](https://github.com/es-shims/Set.prototype.intersection/compare/v1.1.4...v1.1.5) - 2024-04-06

### Commits

- [Refactor] update spec from https://github.com/tc39/ecma262/pull/3306 [`a1454f4`](https://github.com/es-shims/Set.prototype.intersection/commit/a1454f46d8e5a0a48878cfa25b8ec48712fb32d0)
- [Deps] update `es-abstract` [`8be383a`](https://github.com/es-shims/Set.prototype.intersection/commit/8be383a1cb3ce9e2442a501cc3f4d6cf8fa68017)
- [Dev Deps] update `@es-shims/api` [`76cd036`](https://github.com/es-shims/Set.prototype.intersection/commit/76cd03610b0692e665394173faad03733785bda8)

## [v1.1.4](https://github.com/es-shims/Set.prototype.intersection/compare/v1.1.3...v1.1.4) - 2024-03-19

### Commits

- [Refactor] add `SetDataSize` [`714b7a1`](https://github.com/es-shims/Set.prototype.intersection/commit/714b7a1b25b3f403ec1415ba4b3eb1ee5ae6ea64)
- [meta] remove useless ESM [`766bf7a`](https://github.com/es-shims/Set.prototype.intersection/commit/766bf7a7f0a3406f95b2338dcc69d4e584889bad)
- [Deps] update `call-bind`, `es-abstract`, `es-errors`, `is-set` [`72b2a56`](https://github.com/es-shims/Set.prototype.intersection/commit/72b2a567d899e20239889de0a4876e6acbb6e575)
- [actions] remove redundant finisher [`ba66d24`](https://github.com/es-shims/Set.prototype.intersection/commit/ba66d249c62aa8797ec28e3e69d85a067f787bce)
- [Dev Deps] update `tape` [`4bc40ee`](https://github.com/es-shims/Set.prototype.intersection/commit/4bc40eebcf57ae9342f0095d7e86b397a52ce7d0)

## [v1.1.3](https://github.com/es-shims/Set.prototype.intersection/compare/v1.1.2...v1.1.3) - 2024-02-04

### Commits

- [Refactor] use `es-errors` where possible, so things that only need those do not need `get-intrinsic` [`91d23b2`](https://github.com/es-shims/Set.prototype.intersection/commit/91d23b2797233204058de003778250f5e429efdd)
- [Tests] ensure test mocks return iterators [`c6af839`](https://github.com/es-shims/Set.prototype.intersection/commit/c6af839a2f1d6fa12e97bb04444533481586ed68)
- [Tests] for some reason the glob does not include index.js [`d75a861`](https://github.com/es-shims/Set.prototype.intersection/commit/d75a86156b0128ad26596ec374c99525ada45bd1)
- [Dev Deps] update `tape` [`9ed3594`](https://github.com/es-shims/Set.prototype.intersection/commit/9ed35949d79f79b52b078323c3ef6a04f25b1f70)

## [v1.1.2](https://github.com/es-shims/Set.prototype.intersection/compare/v1.1.1...v1.1.2) - 2023-12-18

### Commits

- [Fix] properly implement algorithm [`2d27685`](https://github.com/es-shims/Set.prototype.intersection/commit/2d276854d284bdbbf3b4917f70a02479b414ba35)

## [v1.1.1](https://github.com/es-shims/Set.prototype.intersection/compare/v1.1.0...v1.1.1) - 2023-12-17

### Commits

- [Tests] increase coverage [`0b2a5ae`](https://github.com/es-shims/Set.prototype.intersection/commit/0b2a5ae1f061b732dc125894d6824b4f13d921e1)
- [Fix] properly handle negative zero [`d381180`](https://github.com/es-shims/Set.prototype.intersection/commit/d381180c1efda6071dcaf24639fe58daf30088b1)
- [Deps] update `call-bind`, `define-properties`, `es-abstract`, `get-intrinsic`, `stop-iteration-iterator` [`1a24a62`](https://github.com/es-shims/Set.prototype.intersection/commit/1a24a62bfb714480f294c3ef226bed45cf438624)
- [Dev Deps] update `aud`, `npmignore`, `object-inspect`, `tape` [`6bf9ab5`](https://github.com/es-shims/Set.prototype.intersection/commit/6bf9ab59f196640bac490f45a790d5b0be066228)
- [Tests] oops, skip native tests [`95bd850`](https://github.com/es-shims/Set.prototype.intersection/commit/95bd850c33ee743c39398b5c1e48f7a1974cab07)
- [Deps] update `es-set` [`a166dfc`](https://github.com/es-shims/Set.prototype.intersection/commit/a166dfccfeac07e2427e1834608184dd6b5f4bdb)
- [Dev Deps] update `tape` [`5b3b8ae`](https://github.com/es-shims/Set.prototype.intersection/commit/5b3b8ae3190ab3297043d955d93941dd4a2de060)

## [v1.1.0](https://github.com/es-shims/Set.prototype.intersection/compare/v1.0.2...v1.1.0) - 2023-07-18

### Commits

- [patch] remove GetKeysIterator and its callable check [`9f1b932`](https://github.com/es-shims/Set.prototype.intersection/commit/9f1b9325d37f922af37490e018e620a2b5dd1ac9)
- [Deps] update `es-abstract`, `get-intrinsic` [`b73c04e`](https://github.com/es-shims/Set.prototype.intersection/commit/b73c04ed265fa1c25539b98cf3be6c4a0cb382c4)
- [Tests] remove unused shimmed tests [`1114fb6`](https://github.com/es-shims/Set.prototype.intersection/commit/1114fb66fe826291efe11b7329273f90ef101361)
- [patch] throw on negative set sizes [`b4e7b5f`](https://github.com/es-shims/Set.prototype.intersection/commit/b4e7b5f5304e4b61588fdb8faa0d60bf1dfd8e06)
- [Dev Deps] update `@es-shims/api`, `@ljharb/eslint-config`, `aud`, `es6-shim`, `tape` [`681bb9f`](https://github.com/es-shims/Set.prototype.intersection/commit/681bb9fc33547046bbaf06f60482718be6b7a685)
- [Deps] update `define-properties`, `es-abstract`, `get-intrinsic` [`8361911`](https://github.com/es-shims/Set.prototype.intersection/commit/83619113246b312108e2c1bec52474823b54a767)
- [Dev Deps] update `@es-shims/api`, `tape` [`b25ffae`](https://github.com/es-shims/Set.prototype.intersection/commit/b25ffaec177f277b280a21a71884705624881d29)

## [v1.0.2](https://github.com/es-shims/Set.prototype.intersection/compare/v1.0.1...v1.0.2) - 2023-01-14

### Commits

- [Refactor] update `es-set`; use `es-set/tools` [`f2a2f98`](https://github.com/es-shims/Set.prototype.intersection/commit/f2a2f98c744155c672275a02d607bf2673edbca8)

## [v1.0.1](https://github.com/es-shims/Set.prototype.intersection/compare/v1.0.0...v1.0.1) - 2023-01-13

### Commits

- [Fix] properly handle StopIteration envs, like FF 42 [`9b57a86`](https://github.com/es-shims/Set.prototype.intersection/commit/9b57a86507bcaa8c3c35a5d644a94d47e803c885)
- [Tests] add test case [`fca4503`](https://github.com/es-shims/Set.prototype.intersection/commit/fca4503f74f2ef9629d633858f000bbd7893e005)
- [patch] adjust spec steps for latest PR [`66c558e`](https://github.com/es-shims/Set.prototype.intersection/commit/66c558ea809edebc3c6a50492d3d3c0b4e4b541c)
- [Dev Deps] update `@ljharb/eslint-config`, `aud`, `es6-shim` [`ab0dbf2`](https://github.com/es-shims/Set.prototype.intersection/commit/ab0dbf2b3d6adc45611d6b79addc13df5a9b6ec4)
- [Dev Deps] update `object-inspect` [`0d1eb8f`](https://github.com/es-shims/Set.prototype.intersection/commit/0d1eb8f9ee1a3c390e13e31f0d1cb541be72e33d)
- [Deps] update `es-abstract`, `es-set` [`de002aa`](https://github.com/es-shims/Set.prototype.intersection/commit/de002aa58086f0fbd249c76f4b6986d542c4ed0f)
- [Deps] update `es-set` [`fef0d04`](https://github.com/es-shims/Set.prototype.intersection/commit/fef0d046709f1379becf9c4ed5a2d2d051943a32)

## v1.0.0 - 2022-12-04

### Commits

- Initial implementation, tests, readme [`f2f6c1f`](https://github.com/es-shims/Set.prototype.intersection/commit/f2f6c1fabda832013b24746315fcf7e9c175c5c6)
- Initial commit [`dd75619`](https://github.com/es-shims/Set.prototype.intersection/commit/dd756198f69b3b82a8fba0c4815723061b154dc2)
- npm init [`299e860`](https://github.com/es-shims/Set.prototype.intersection/commit/299e8605d45cace7997c798015df1855b605d99b)
- Only apps should have lockfiles [`ad6d0c6`](https://github.com/es-shims/Set.prototype.intersection/commit/ad6d0c685b9bc13178a19645e508c47177ba0045)
