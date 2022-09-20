//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Whitelist {

    //max number of whitelisted address allowed
    uint8 public maxWhiteListedAddress;
        // Create a mapping of whitelistedAddresses
    // if an address is whitelisted, we would set it to true, it is false by default for all other addresses.
    mapping(address => bool) public whitelistedAddresses;

       // numAddressesWhitelisted would be used to keep track of how many addresses have been whitelisted
    // NOTE: Don't change this variable name, as it will be part of verification
    uint8 public numAddressesWhitelisted;


    constructor(uint8 _maxWhiteListedAddress) {
        maxWhiteListedAddress = _maxWhiteListedAddress;
        
    }
 
        // addAddressToWhitelist - This function adds the address of the sender to the
        // whitelist
     

    function addAddressToWhitelist() public {
        //chceck if the use is already in the whitelist 
        require(!whitelistedAddresses[msg.sender], "Address as already been whitelisted" );
        //check if th number of whitelisted address is lesser than maxwhitelisted, if not then trow an error
        require(numAddressesWhitelisted < maxWhiteListedAddress, "Limit Reached, More address can't be added");
        // Add the address which called the function to the whitelistedAddress array
        whitelistedAddresses[msg.sender] = true;
        //Increase the number of whitelisted address
        numAddressesWhitelisted += 1;



        
    }
}