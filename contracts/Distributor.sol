// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.9.0;
pragma experimental ABIEncoderV2;

import "./Users.sol";

/**
 * @title Distributor
 * @dev Handles distributor functions.
 */
contract Distributor {
    using Users for Users.User;
    using Users for Users.Info;
    Users.User private distributors;

    function addDistributor(
        address newDistributor,
        string memory name,
        string memory location
    ) public {
        require(
            !distributors.isExistingUser(newDistributor),
            "Distributor with this address already exists!"
        );
        distributors.addUser(newDistributor, name, location);
    }

    function isDistributor() public view returns (bool) {
        return distributors.isExistingUser(msg.sender);
    }

    function getDistributor(
        address user
    ) public view returns (Users.Info memory) {
        return distributors.getUser(user);
    }
}
