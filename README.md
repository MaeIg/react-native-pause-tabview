# react-native-pause-tabview

This repo was created to do some performance tests with react-navigation, react-native-tabview and react-freeze.

<!-- toc -->

## Setup

Performances are mesured with [react-native-flipper-performance-plugin](https://github.com/bamlab/react-native-flipper-performance-monitor) on a [Huawei p20 lite](https://browser.geekbench.com/search?q=huawei+p20+lite).

## App

The app contains 2 screens :

- 1 screen with a tabview of 2 tabs (using [react-native-tabview](https://github.com/satya164/react-native-tab-view)) :
  - 1 tab with _20 timers_ and _20 small animations_
  - 1 tab with a background only
- 1 screen with a text only

| x        | Tab 1 | Tab 2 |
| -------- | ----- | ----- |
| Screen 1 | -     | -     |
| Screen 2 | -     | -     |

## Measures

| Without freeze | Timer only | Timer + Animation |
| -------------- | ---------- | ----------------- |
| Home           | -          | -                 |
| Tab 2          | -          | -                 |
| Screen 2       | -          | -                 |

| enableFreeze on react-navigation | Timer only | Timer + Animation |
| -------------------------------- | ---------- | ----------------- |
| Home                             | -          | -                 |
| Tab 2                            | -          | -                 |
| Screen 2                         | -          | -                 |

| enableFreeze on react-navigation + react-freeze on Home | Timer only | Timer + Animation |
| ------------------------------------------------------- | ---------- | ----------------- |
| Home                                                    | -          | -                 |
| Tab 2                                                   | -          | -                 |
| Screen 2                                                | -          | -                 |
