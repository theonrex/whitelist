require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY;
const MUMBAI_KEY = process.env.MUMBAI_KEY;
const MUMBAI_API_KEY = process.env.MUMBAI_API_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [GOERLI_PRIVATE_KEY],
    },
      matic: {
      url: MUMBAI_API_KEY,
      accounts: [MUMBAI_KEY],
    },
  },
};