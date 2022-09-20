const { ethers } = require("hardhat");

async function main() {
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so whitelistContract  here is a factory for  instances of our Whitelist contract.
  */

  const whitelistContract = await ethers.getContractFactory("Whitelist");

  //deploy the contract
  //50 is the maximum number of whitelisted address allowed
  const deployedWhitelistContract = await whitelistContract.deploy(50);
  //wait for it to finish deploying
  await deployedWhitelistContract.deployed();

  //print the address of the deployed contract on the console
  console.log(
    "Whitelist Contract Address:",
    deployedWhitelistContract.address
  );

}

 //call the main function to catch if there is any error
  main()
    .then(() => process.exit(0))
      .catch((error) =>{
        console.error(error);
        process.exit(1);
      });