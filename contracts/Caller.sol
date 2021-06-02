// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./Sender.sol";

contract Caller {
    Sender private _sender;

    constructor(address senderAddress) {
        _sender = Sender(senderAddress);
    }

    function callWhoAmI() public view returns (address) {
        return _sender.whoAmI();
    }
}
