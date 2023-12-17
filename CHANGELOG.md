# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
