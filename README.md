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

<!-- prettier-ignore -->
| App        | Tab 1 | Tab 2 |
| -------- | ----- | ----- |
| Screen 1 | <img width="443" alt="image" src="https://user-images.githubusercontent.com/40902940/177872608-d1c323a0-f2d8-4777-9a0e-79509f0d6a46.png"> | <img width="443" alt="image" src="https://user-images.githubusercontent.com/40902940/177872639-b388ebe8-95a2-4e91-b842-654013355bcd.png"> |
| Screen 2 | <img width="443" alt="image" src="https://user-images.githubusercontent.com/40902940/177872691-363e7085-a315-4bef-8b3a-2a9e4ef576c4.png"> | - |

## Measures

- [Test performance improvements with react-freeze](docs/performances/react-freeze.md)

## Results

Freezing doesn't seem to improve performance. However when we look on the profiler, all renders are cancelled...

<!-- prettier-ignore -->
| Home | Tab 2 | Screen 2 |
| ---- | ----- | -------- |
| <img width="763" alt="image" src="https://user-images.githubusercontent.com/40902940/177874304-ceceacfe-73b1-4742-aa05-99c744839679.png"> | <img width="775" alt="image" src="https://user-images.githubusercontent.com/40902940/177874348-a1f15b99-e78a-4221-aa28-d06dd3cdaf7c.png"> | <img width="765" alt="image" src="https://user-images.githubusercontent.com/40902940/177874409-b393d790-370f-4f9c-929a-e798140cc336.png"> |
