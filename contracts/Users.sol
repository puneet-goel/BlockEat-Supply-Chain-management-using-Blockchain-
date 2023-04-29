// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.21 <0.9.0;

/**
 * @title Users
 * @dev Stores user addresses for different types of users.
 */
library Users {
    struct Info {
        string name;
        string location;
    }

    struct User {
        mapping(address => bool) userAddresses;
        mapping(address => Info) userDetails;
    }

    function addUser(
        User storage user,
        address userAddress,
        string memory name,
        string memory location
    ) internal {
        user.userAddresses[userAddress] = true;
        user.userDetails[userAddress] = Info({name: name, location: location});
    }

    function removeUser(User storage user, address userAddress) internal {
        user.userAddresses[userAddress] = false;
    }

    function isExistingUser(
        User storage user,
        address userAddress
    ) internal view returns (bool) {
        return user.userAddresses[userAddress];
    }

    function getUser(
        User storage user,
        address userAddress
    ) internal view returns (Info memory temp) {
        if (user.userAddresses[userAddress]) {
            return user.userDetails[userAddress];
        } else {
            return Info({name: "", location: ""});
        }
    }
}
