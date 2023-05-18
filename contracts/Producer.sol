// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.9.0;
pragma experimental ABIEncoderV2;
import "./Users.sol";

/**
 * @title Producer
 * @dev Handles producer functions.
 */
contract Producer {
    using Users for Users.User;
    using Users for Users.Info;
    Users.User private producers;

    function addProducer(
        address newProducer,
        string memory name,
        string memory location
    ) public {
        require(
            !producers.isExistingUser(newProducer),
            "Producer with this address already exists!"
        );
        producers.addUser(newProducer, name, location);
    }

    function isProducer() public view returns (bool) {
        return producers.isExistingUser(msg.sender);
    }

    function getProducer(address user) public view returns (Users.Info memory) {
        return producers.getUser(user);
    }
}
