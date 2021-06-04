// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Sender {
    function whoAmI() public view returns (address) {
        return msg.sender;
    }

    // do not use tx.origin
    function whoAmIOrigin() public view returns (address) {
        return tx.origin;
    }
}
