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
| Home     | <img width="776" alt="Home_1" src="https://user-images.githubusercontent.com/40902940/178151384-61e4fac2-fb2a-45e8-88b8-bf091c1c13fa.png"><img width="774" alt="Home_2" src="https://user-images.githubusercontent.com/40902940/178151386-56c06337-59bf-41c3-8f5a-fed48f2b0553.png"> | <img width="779" alt="Home_1" src="https://user-images.githubusercontent.com/40902940/178151430-8063f87b-d9b0-45ce-bcd7-34f77b123113.png"><img width="773" alt="Home_2" src="https://user-images.githubusercontent.com/40902940/178151432-5543dc92-0939-41ac-842a-a6c61c2247b6.png"> |
| Tab 2    | <img width="779" alt="tab2_1" src="https://user-images.githubusercontent.com/40902940/178151390-d5d6ee92-ff9c-4dc6-bbcd-6ed1b95cafef.png"><img width="773" alt="tab2_2" src="https://user-images.githubusercontent.com/40902940/178151391-55458472-c243-4b47-99f1-1ffeb5601e93.png"> | <img width="779" alt="tab2_1" src="https://user-images.githubusercontent.com/40902940/178151437-40071ab7-948b-45e6-92f5-ec48f72d37de.png"><img width="776" alt="tab2_2" src="https://user-images.githubusercontent.com/40902940/178151438-bc78a3fa-8c40-4924-b0fc-ea4fc77186c7.png"> |
| Screen 2 | <img width="782" alt="screen2_1" src="https://user-images.githubusercontent.com/40902940/178151387-52e54a0f-7087-44af-9180-0463b3a36c21.png"><img width="779" alt="screen2_2" src="https://user-images.githubusercontent.com/40902940/178151389-94feeac1-33b8-4776-9b01-f49c75a6f082.png"> | <img width="775" alt="screen2_1" src="https://user-images.githubusercontent.com/40902940/178151433-f5293616-7a96-48b3-b642-3770b34fd3e2.png"><img width="775" alt="screen2_2" src="https://user-images.githubusercontent.com/40902940/178151435-cd723ea8-618b-4489-9a35-cbf2db7ea513.png"> |
