// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// Minimal types and interface for interacting with the Push Chain UEA Factory
struct UniversalAccountId {
    string chainNamespace;
    string chainId;
    bytes owner;
}

interface IUEAFactory {
    function getOriginForUEA(
        address addr
    ) external view returns (UniversalAccountId memory account, bool isUEA);

    function getUEAForOrigin(
        UniversalAccountId memory _id
    ) external view returns (address uea, bool isDeployed);
}

/// Demonstrates how to call getOriginForUEA() and getUEAForOrigin() from a contract
contract UEAFactoryDemo {
    IUEAFactory constant UEAFACTORY =
        IUEAFactory(0x00000000000000000000000000000000000000eA);

    // Example function name different from "increment"
    function discoverOrigin()
        external
        view
        returns (UniversalAccountId memory originAccount, bool isUEA)
    {
        address caller = msg.sender;
        (originAccount, isUEA) = UEAFACTORY.getOriginForUEA(caller);
    }

    // Demonstrates how to call getUEAForOrigin() from a contract
    function getUEAForOrigin(
        UniversalAccountId memory account
    ) external view returns (address uea, bool isDeployed) {
        (uea, isDeployed) = UEAFACTORY.getUEAForOrigin(account);
    }
}
