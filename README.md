# Sesame Coding Assignment

### Build a Discord Questing Platform

**Product Requirements**

- The user should be able to sign in on the webpage with their MetaMask wallet
- Once they have connected their wallet, they will see a Quest which asks them to join a certain Discord server to win a
  coupon code. There will be a Join Discord button (that triggers the Discord joining flow) and a Verify button (that
  verifies if the user has successfully joined the specified Discord server).
- Once the user successfully verifies that they have joined the Discord they should see a coupon code. For the purposes
  of this project, the coupon code can be a random 10 digit alphanumeric string.
- The user’s state (whether they have verified, which coupon code they have received, etc) should be stored in a DB so
  that it persists if the user signs in with their wallet again or even on server restart. Multiple different users
  should be able to use this product at the same time.
- The Quest details (title, description, cover image uri, discord server name, etc) and any API keys (discord, etc)
  should be easily settable in a .config OR .env file
- The UI is not the primary focus of this assignment however it needs to be good enough and fully functional. Here is
  roughly how it should look like: [https://bit.ly/sesame-coding](https://bit.ly/sesame-coding)

## Getting Started

Requirements

- PSQL

### Instructions

- Run `npm run db` to launch db server
- Run `npm run db:migrate` to update schema
- Run `npm run dev` to launch dev server

**Technical Considerations**

- Leverage 3rd party libraries as much as possible without sacrificing security or quality

**Future Improvements**

- Testing
- Config management
- Secure handling of secrets (via deployment pipelines)
- React component decomposition
- React state management
- CSS structure and styling
- Git commit history
- Code styling and linting
- Documentation
- Productionize
