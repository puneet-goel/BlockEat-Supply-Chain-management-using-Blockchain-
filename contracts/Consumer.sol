// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.9.0;
pragma experimental ABIEncoderV2;

import "./Users.sol";

/**
 * @title Consumer
 * @dev Handles consumer functions.
 */
contract Consumer {
    using Users for Users.User;
    using Users for Users.Info;
    Users.User private consumers;

    function addConsumer(
        address newConsumer,
        string memory name,
        string memory location
    ) public {
        require(
            !consumers.isExistingUser(newConsumer),
            "Consumer with this address already exists!"
        );
        consumers.addUser(newConsumer, name, location);
    }

    function isConsumer() public view returns (bool) {
        return consumers.isExistingUser(msg.sender);
    }

    function getConsumer(address user) public view returns (Users.Info memory) {
        return consumers.getUser(user);
    }
}
