// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

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

contract UEAInspector {
    IUEAFactory constant UEAFACTORY =
        IUEAFactory(0x00000000000000000000000000000000000000eA);

    function whoAmI()
        external
        view
        returns (UniversalAccountId memory account, bool isUEA)
    {
        (account, isUEA) = UEAFACTORY.getOriginForUEA(msg.sender);
    }
}
