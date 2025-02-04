# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).


v4.3.0
------------------------------
*March 27, 2023*

### Changed
- New focus styles
  - These require the new colour tokens from `pie-design-tokens` which are included in `fozzie` v11+.


v4.2.0
------------------------------
*July 19, 2022*

### Added
- Node 16 support.


v4.1.0
------------------------------
*July 5, 2022*

### Changed
- Update f-wdio-utils to v1.1.0
- Update component objects / specs to use ES6 syntax.


v4.0.0
-----------------------------
*June 20, 2022*

### Changed
- Update to `@use` and `@forward` SASS syntax


v3.2.2
------------------------------
*Jun 9, 2022*

### Changed
- Bumped wdio version and fixed breaking changes.

*May 26, 2022*

### Changed
- Refactor WebDriverIO tests to use async in order to support Node 16 using `codemod` utility.


v3.2.1
------------------------------
*March 18, 2022*

### Changed
- `package` version as previous bump does not seem to pull through changes.


v3.2.0
------------------------------
*March 15, 2022*

### Changed
- Upgraded to ESLint v8

### Added
- `nav` landmark & `aria-label`.
- Tests to cover change.


v3.1.0
------------------------------
*October 27, 2021*

### Changed
- Replace `<span>` with `<template>`.
- Simplify and shuffle around styles accordingly.

### Added
- Storybook control for `hasBackground`.

### Removed
- Breadcrumb separators from accessibility tree. They were being announced by NVDA as "greater".


v3.0.0
------------------------------
*October 25, 2021*

### Added
- `hasBackground` prop which adds a layer of style to the default version.
- Unit test coverage.


v2.1.0
------------------------------
*October 21, 2021*

### Changed
- If no URL is given, render `<span>` instead of `<a>` or `<router-link>`.

### Added
- Unit test coverage


v2.0.0
------------------------------
*October 5, 2021*

### Changed
- New colour scheme and border radius from `pie-design-tokens` in line with icing phase 2.


v1.0.0
------------------------------
*September 16, 2021*

### Removed
- Normalise styles from the build. Note that now if consuming application doesn't have normalised (reset) styles, there may be some slight style differences after this update. If the consuming application uses fozzie, there shouldn't be any style differences as normalised styles should be added as part of the fozzie import.


v0.3.0
------------------------------
*May 25, 2021*

### Changed
- CSS variables to use pie design tokens instead of fozzie-colour-palette vars
- Restructured component object into page object model
- Refactored component tests


v0.2.0
------------------------------
*February 2, 2021*

### Added
- Added styles, component structure and updated story.


v0.1.0
------------------------------
*January 20, 2021*

### Added
- Added the generated output to start component
