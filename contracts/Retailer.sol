// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.9.0;
pragma experimental ABIEncoderV2;

import "./Users.sol";

/**
 * @title Retailer
 * @dev Handles retailer functions.
 */
contract Retailer {
    using Users for Users.User;
    using Users for Users.Info;
    Users.User private retailers;

    function addRetailer(
        address newRetailer,
        string memory name,
        string memory location
    ) public {
        require(
            !retailers.isExistingUser(newRetailer),
            "Retailer with this address already exists!"
        );
        retailers.addUser(newRetailer, name, location);
    }

    function isRetailer() public view returns (bool) {
        return retailers.isExistingUser(msg.sender);
    }

    function getRetailer(address user) public view returns (Users.Info memory) {
        return retailers.getUser(user);
    }
}
