![Tests Passing](https://github.com/NicolaWealth/entries_ordered_by_key/actions/workflows/auto_test_main_badge.yml/badge.svg)
![Code Cov](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2Fnicolawealth%2Fentries_ordered_by_key%2Fraw%2Fmain%2Fcodecov/badge.json&query=%24.message&label=Code%20Coverage&color=%24.color)

# Introduction
The `entries_ordered_by_key` package sorts an array of key-value pair objects with string keys, in lexicographical or reverse lexicographical order.

# Installation
This package should be installed via npm. You must have npm installed first. The following can be run on the commandline to install the `entries_ordered_by_key` package with npm:

`npm install @nicolawealth/entries_ordered_by_key`

# Interface
The package exports two functions, `entitiesOrderedByKey(entries)` and `entitiesOrderedByKeyReversed(entries)` where `entries` is of the type `[key, value][]` i.e. is an array of key-value pair objects.
Here `key` is a string value. `entitiesOrderedByKey(entries)` will sort `entries` by lexicographical ordering and `entitiesOrderedByKeyReversed(entries)` will sort `entries` by reverse lexicographical ordering.

# Testing
Tests can be found in `entries_ordered_by_key.test.ts` located in `entries_ordered_by_key/src` and should be run with sinon, mocha and nyc.
