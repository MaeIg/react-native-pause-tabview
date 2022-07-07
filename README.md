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

| App        | Tab 1 | Tab 2 |
| -------- | ----- | ----- |
| Screen 1 | <img width="443" alt="image" src="https://user-images.githubusercontent.com/40902940/177872608-d1c323a0-f2d8-4777-9a0e-79509f0d6a46.png"> | <img width="443" alt="image" src="https://user-images.githubusercontent.com/40902940/177872639-b388ebe8-95a2-4e91-b842-654013355bcd.png"> |
| Screen 2 | <img width="443" alt="image" src="https://user-images.githubusercontent.com/40902940/177872691-363e7085-a315-4bef-8b3a-2a9e4ef576c4.png"> | - |

## Measures

| Without freeze | Timer only | Timer + Animation |
| -------------- | ---------- | ----------------- |
| Home           | <img width="759" alt="Home_1" src="https://user-images.githubusercontent.com/40902940/177872771-69ca5164-5432-43cd-ac7e-1c43c8036edc.png"> <img width="758" alt="Home_2" src="https://user-images.githubusercontent.com/40902940/177872787-19938723-e0fd-4769-a6b0-00d102073bc7.png"> | <img width="763" alt="Home_1" src="https://user-images.githubusercontent.com/40902940/177872927-b97232d0-5b12-42ff-8a9d-a7f28d81240a.png"> <img width="755" alt="Home_2" src="https://user-images.githubusercontent.com/40902940/177872940-286958b8-5dc4-480f-89d3-e6f0e7001684.png"> |
| Tab 2          | <img width="756" alt="tab2_1" src="https://user-images.githubusercontent.com/40902940/177872856-53bafe8d-4539-41ba-89f4-7c3107da7301.png"> <img width="761" alt="tab2_2" src="https://user-images.githubusercontent.com/40902940/177872873-2c66b556-6ad8-4dfc-87d9-63549acf2fcd.png"> | <img width="772" alt="tab2_1" src="https://user-images.githubusercontent.com/40902940/177872958-c128eb30-524b-44ac-9a57-666e6affd47d.png"> <img width="749" alt="tab2_2" src="https://user-images.githubusercontent.com/40902940/177872970-e6aebfa4-1a63-44f7-8b19-b7ac4210bd8f.png"> |
| Screen 2       | <img width="759" alt="screen2_1" src="https://user-images.githubusercontent.com/40902940/177872896-1b5a0420-6f4d-4e06-a269-3075780e4a37.png"> <img width="757" alt="screen2_2" src="https://user-images.githubusercontent.com/40902940/177872908-74cdf89a-82bf-4139-9004-b04425c948f0.png"> | <img width="763" alt="screen2_1" src="https://user-images.githubusercontent.com/40902940/177872990-811eb91b-4a9e-422d-a0cf-8eac39c25c04.png"> <img width="756" alt="screen2_2" src="https://user-images.githubusercontent.com/40902940/177873015-002b7887-9c05-42dc-b72d-16fc568d5474.png"> |

| enableFreeze on react-navigation | Timer only | Timer + Animation |
| -------------------------------- | ---------- | ----------------- |
| Home                             | <img width="762" alt="Home_1" src="https://user-images.githubusercontent.com/40902940/177873094-b8c50b24-0b9b-42b4-82e9-1b543ac0f4d1.png"> <img width="759" alt="Home_2" src="https://user-images.githubusercontent.com/40902940/177873104-5ae2668c-a1e2-4899-8186-7cc6bf1de4a2.png"> | <img width="766" alt="Home_1" src="https://user-images.githubusercontent.com/40902940/177873221-a40a7240-4cd4-4e41-94eb-d04ce5b6b89a.png"> <img width="763" alt="Home_2" src="https://user-images.githubusercontent.com/40902940/177873236-085d67d8-7cff-4b30-9924-5044699cfeed.png"> |
| Tab 2                            | <img width="760" alt="tab2_1" src="https://user-images.githubusercontent.com/40902940/177873124-95ffe7b7-0e45-4aeb-b239-d24ab82161de.png"> <img width="755" alt="tab2_2" src="https://user-images.githubusercontent.com/40902940/177873147-cae18ae9-b1ff-47fa-9d11-3af79b794ff1.png"> | <img width="761" alt="tab2_1" src="https://user-images.githubusercontent.com/40902940/177873256-b981ce65-738e-42b7-a7ca-4c7556ce7dda.png"> <img width="758" alt="tab2_2" src="https://user-images.githubusercontent.com/40902940/177873275-8943145a-21f6-4c26-95d7-40278fd200b6.png"> |
| Screen 2                         | <img width="759" alt="screen2_1" src="https://user-images.githubusercontent.com/40902940/177873173-bdcba022-d3ad-4543-b225-8ed24b96c1d6.png"> <img width="763" alt="screen2_2" src="https://user-images.githubusercontent.com/40902940/177873183-c401cf83-4a77-4bb7-b6e8-66f4c152f6d7.png"> | <img width="760" alt="screen2_1" src="https://user-images.githubusercontent.com/40902940/177873298-00ac6fee-5939-4eb1-998e-ffec8e699b3b.png"> <img width="758" alt="screen2_2" src="https://user-images.githubusercontent.com/40902940/177873308-af7aa345-1111-48d5-b206-7545c55bdeda.png"> |

| enableFreeze on react-navigation + react-freeze on Home | Timer only | Timer + Animation |
| ------------------------------------------------------- | ---------- | ----------------- |
| Home                                                    | <img width="760" alt="Home_1" src="https://user-images.githubusercontent.com/40902940/177873361-84e9b7e7-effc-47bd-b09e-beee3217e865.png"> <img width="759" alt="Home_2" src="https://user-images.githubusercontent.com/40902940/177873377-2ac48ffa-fb4f-4390-87e3-4dc76158e256.png"> | <img width="760" alt="Home_1" src="https://user-images.githubusercontent.com/40902940/177873516-43d35ff2-706f-4bee-9135-dc644e868d45.png"> <img width="754" alt="Home_2" src="https://user-images.githubusercontent.com/40902940/177873524-062b7640-33fd-4944-b995-1519a9f5fdc9.png"> |
| Tab 2                                                   | <img width="761" alt="tab2_1" src="https://user-images.githubusercontent.com/40902940/177873406-0043c52e-49c9-4ea6-b232-e90b3551f8bb.png"> <img width="761" alt="tab2_2" src="https://user-images.githubusercontent.com/40902940/177873424-fe7d18f6-1f9f-47d5-a9ea-9a0466c4adc0.png"> | <img width="762" alt="tab2_1" src="https://user-images.githubusercontent.com/40902940/177873558-f01e1211-e090-4a05-af29-5d76f6bc137a.png"> <img width="758" alt="tab2_2" src="https://user-images.githubusercontent.com/40902940/177873573-7441f341-e8d5-4a39-93da-304dc8cfc12d.png"> |
| Screen 2                                                | <img width="753" alt="screen2_1" src="https://user-images.githubusercontent.com/40902940/177873450-777a742a-eb2a-4ab0-b1ed-323c7f1baf6e.png"> <img width="757" alt="screen2_2" src="https://user-images.githubusercontent.com/40902940/177873473-81c2fb56-fd36-4943-aa4d-d5f381e4a2fb.png"> | <img width="760" alt="screen2_1" src="https://user-images.githubusercontent.com/40902940/177873617-ef803b40-db76-432c-8642-ce7fd4bd74d6.png"> <img width="763" alt="screen2_2" src="https://user-images.githubusercontent.com/40902940/177873628-0f9a5d7e-0379-4f8b-9e10-669fc27ecf13.png"> |
