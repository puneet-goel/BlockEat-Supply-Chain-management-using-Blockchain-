// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Product {
    uint256 stockUnit;
    uint256 productCode;
    address ownerID;
    uint256 productID;
    uint256 productDate;
    uint256 productPrice;

    mapping(uint256 => Item) items;

    function read() public view returns (uint256) {
        return value;
    }

    function write(uint256 newValue) public {
        value = newValue;
    }
}
