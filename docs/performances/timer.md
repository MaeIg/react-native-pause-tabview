# Performance test - Timer

## Test

The goal of this test is to see what is costly between `setInterval every seconds`, `re-render without UI change` and `re-render with UI change`.

The test are done without any Freeze and with Freeze (react-native-screen + manual freeze).

It is to see if `setInterval without render` is costly to explain why react-freeze doesn't improve performances on [this test](./react-freeze.md).

## Results

There are no difference when enable freeze or not. setInterval doesn't take so much performances because the JS thread is still at 60 fps with 20 setInterval of 1 second.

## Measures

<!-- prettier-ignore -->
| Without Freeze |  setInterval every seconds |  re-render without UI change |  re-render with UI change |
| -------------- | -------------------------- | ---------------------------- | ------------------------- |
| Home           | - | - | - |
| Tab 2          | - | - | - |
| Screen 2       | - | - | - |

<!-- prettier-ignore -->
| With Freeze |  setInterval every seconds |  re-render without UI change |  re-render with UI change |
| ----------- | -------------------------- | ---------------------------- | ------------------------- |
| Home        | - | - | - |
| Tab 2       | - | - | - |
| Screen 2    | - | - | - |
