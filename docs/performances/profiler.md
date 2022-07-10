# Profiler

## Intro

It is to show re-renders with `React DevTools` profiler.

## Measures

When there are `20 timers` re-rendering each second:

<!-- prettier-ignore -->
| Home | Tab 2 | Screen 2 |
| ---- | ----- | -------- |
| <img width="763" alt="image" src="https://user-images.githubusercontent.com/40902940/177874304-ceceacfe-73b1-4742-aa05-99c744839679.png"> | <img width="775" alt="image" src="https://user-images.githubusercontent.com/40902940/177874348-a1f15b99-e78a-4221-aa28-d06dd3cdaf7c.png"> | <img width="765" alt="image" src="https://user-images.githubusercontent.com/40902940/177874409-b393d790-370f-4f9c-929a-e798140cc336.png"> |

When there are a `KillList` (100 elements unmounted and mounted each second):

<!-- prettier-ignore -->
| Home | Tab 2 | Screen 2 |
| ---- | ----- | -------- |
| - | - | - |
