# react-native-pause-tabview

This repo was created to do some performance tests with react-navigation, react-native-tabview and react-freeze.

<!-- toc -->

## Setup

Performances are mesured with [react-native-flipper-performance-plugin](https://github.com/bamlab/react-native-flipper-performance-monitor) on a [Huawei p20 lite](https://browser.geekbench.com/search?q=huawei+p20+lite).

To test the different scenarii you can import the App of your choice in the `App.tsx` file from `src/apps`:

```tsx
import App from './src/apps/AppWithTimerAndAnimation';

export default App;
```

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
- [Test performance cost of setInterval](docs/performances/timer.md)
- [Test performance improvements with react-freeze when JS thread is killed](docs/performances/flatlist.md)
- [Profiling results](docs/performances/profiler.md)

## Results

- react-freeze doesn't help for UI thread (ie: animations).
- It takes some performance when active (ie: ~5 fps on a [Huawei p20 lite](https://browser.geekbench.com/search?q=huawei+p20+lite)).
- But it is really usefull on inefficient screens and it prevents threadlock by cancelling all re-renders of frozen screens.
