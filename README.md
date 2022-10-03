# Sesame Coding Assignment

### Build a Discord Questing Platform

Welcome to Sesame’s coding challenge, in which you will build a Questing Platform ([https://bit.ly/sesame-coding](https://bit.ly/sesame-coding)) that rewards people with coupon codes for joining a Discord server.

**Product Requirements**

- The user should be able to sign in on the webpage with their MetaMask wallet
- Once they have connected their wallet, they will see a Quest which asks them to join a certain Discord server to win a coupon code. There will be a Join Discord button (that triggers the Discord joining flow) and a Verify button (that verifies if the user has successfully joined the specified Discord server).
- Once the user successfully verifies that they have joined the Discord they should see a coupon code. For the purposes of this project, the coupon code can be a random 10 digit alphanumeric string.
- The user’s state (whether they have verified, which coupon code they have received, etc) should be stored in a DB so that it persists if the user signs in with their wallet again or even on server restart. Multiple different users should be able to use this product at the same time.
- The Quest details (title, description, cover image uri, discord server name, etc) and any API keys (discord, etc) should be easily settable in a .config OR .env file
- The UI is not the primary focus of this assignment however it needs to be good enough and fully functional. Here is roughly how it should look like: [https://bit.ly/sesame-coding](https://bit.ly/sesame-coding)

**References**

- Quest3 ([https://app.quest3.xyz/quest/691059696896696692](https://app.quest3.xyz/quest/691059696896696692)) can be used for reference for how the Join Discord flow and the verification should work. Feel free to use that as reference when designing your solution.

**Directions**

- Take about 8 hours to work on this assignment. Please complete this exercise yourself, however feel free to Google and use other references.
- Please fork this repository to start working on this project. Add a detailed README that provides easily understandable instructions on how to run your code on local machine.
- This will be followed by a 45 min interview where you will be asked to explain your decisions and asked to describe about challenges and opportunities with your solution
- In addition to correctness, we will be evaluating based on code structure, readability, and extensibility. It does not need to be over-engineered, however should be solid production level code.
- Please reach out if you have any questions.
