# Performance test - KillList

## Test

An hypothesis of why `react-freeze` doesn't improve performances on [this test](./react-freeze.md) is that `Timer` doesn't have a big impact on performances and `react-freeze` also has a small impact on performances.

So, we test to implement `react-freeze` on [a List that kill performances](../../src/apps/AppWithKillList.tsx) (ie: Average JS fps is 10).

## Results

We can see that `react-freeze` works! 🎉 Js thread is not at 60 fps with react-freeze but it avoid loosing more than 10 fps because of a screen in the background.

## Measures

<!-- prettier-ignore -->
| screen   |  With Freeze |  Without Freeze |
| -------- | ------------ | --------------- |
| Home     | -            | -               |
| Tab 2    | -            | -               |
| Screen 2 | -            | -               |
