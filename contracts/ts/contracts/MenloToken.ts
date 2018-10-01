/* GENERATED BY TYPECHAIN VER. 0.3.1 */
/* tslint:disable */

import { BigNumber } from "bignumber.js";
import {
  TypeChainContract,
  promisify,
  ITxParams,
  DeferredTransactionWrapper,
  DeferredEventWrapper
} from "./typechain-runtime";

export class MenloToken extends TypeChainContract {
  public readonly rawWeb3Contract: any;

  public constructor(web3: any, address: string | BigNumber) {
    const abi = [
      {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [{ name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "_spender", type: "address" },
          { name: "_value", type: "uint256" }
        ],
        name: "approve",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: false,
        inputs: [{ name: "_token", type: "address" }],
        name: "reclaimToken",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "_from", type: "address" },
          { name: "_to", type: "address" },
          { name: "_value", type: "uint256" }
        ],
        name: "transferFrom",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "INITIAL_SUPPLY",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "decimals",
        outputs: [{ name: "", type: "uint8" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: false,
        inputs: [],
        name: "unpause",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: false,
        inputs: [{ name: "_value", type: "uint256" }],
        name: "burn",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "teamTimelock",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "ADVISOR_SUPPLY",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "advisorTimelock",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "GROWTH_SUPPLY",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "paused",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "_spender", type: "address" },
          { name: "_subtractedValue", type: "uint256" }
        ],
        name: "decreaseApproval",
        outputs: [{ name: "success", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: true,
        inputs: [{ name: "_owner", type: "address" }],
        name: "balanceOf",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: false,
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: false,
        inputs: [],
        name: "pause",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "owner",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [{ name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "crowdsale",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "_to", type: "address" },
          { name: "_value", type: "uint256" }
        ],
        name: "transfer",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "TEAM_SUPPLY",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "PARTNER_SUPPLY",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "_spender", type: "address" },
          { name: "_addedValue", type: "uint256" }
        ],
        name: "increaseApproval",
        outputs: [{ name: "success", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: true,
        inputs: [
          { name: "_owner", type: "address" },
          { name: "_spender", type: "address" }
        ],
        name: "allowance",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "PUBLICSALE_SUPPLY",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: false,
        inputs: [{ name: "_newOwner", type: "address" }],
        name: "transferOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          { name: "_growth", type: "address" },
          { name: "_teamTimelock", type: "address" },
          { name: "_advisorTimelock", type: "address" },
          { name: "_partner", type: "address" }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor"
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "burner", type: "address" },
          { indexed: false, name: "value", type: "uint256" }
        ],
        name: "Burn",
        type: "event"
      },
      { anonymous: false, inputs: [], name: "Pause", type: "event" },
      { anonymous: false, inputs: [], name: "Unpause", type: "event" },
      {
        anonymous: false,
        inputs: [{ indexed: true, name: "previousOwner", type: "address" }],
        name: "OwnershipRenounced",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "previousOwner", type: "address" },
          { indexed: true, name: "newOwner", type: "address" }
        ],
        name: "OwnershipTransferred",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "owner", type: "address" },
          { indexed: true, name: "spender", type: "address" },
          { indexed: false, name: "value", type: "uint256" }
        ],
        name: "Approval",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "from", type: "address" },
          { indexed: true, name: "to", type: "address" },
          { indexed: false, name: "value", type: "uint256" }
        ],
        name: "Transfer",
        type: "event"
      },
      {
        constant: false,
        inputs: [{ name: "_crowdsale", type: "address" }],
        name: "initializeCrowdsale",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "_to", type: "address" },
          { name: "_value", type: "uint256" },
          { name: "_action", type: "uint256" },
          { name: "_data", type: "bytes" }
        ],
        name: "transferAndCall",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      }
    ];
    const rawBytecode =
      "0x60806040526003805460a060020a60ff02191690553480156200002157600080fd5b5060405160808062001520833981016040908152815160208301519183015160609093015160038054600160a060020a0319163317905590929060006b02165bd22bd91fa44600000090506b0124d26a73f76098a200000060058054600160a060020a03808816600160a060020a0319928316179092556006805492871692909116919091179055620000be338264010000000062000175810204565b620000de866acb7c86b8b8ec58b600000064010000000062000175810204565b620000fe856aa56fa5b99019a5c800000064010000000062000175810204565b6200011e846a52b7d2dcc80cd2e400000064010000000062000175810204565b6200013e836a52b7d2dcc80cd2e400000064010000000062000175810204565b6001546b033b2e3c9fd0803ce8000000146200015657fe5b62000169640100000000620001f5810204565b5050505050506200029c565b600160a060020a0382166000908152602081905260409020819055600154620001ad9082640100000000620011f56200028882021704565b600155604080518281529051600160a060020a038416916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b600354600160a060020a031633146200020d57600080fd5b60035474010000000000000000000000000000000000000000900460ff16156200023657600080fd5b6003805460a060020a60ff021916740100000000000000000000000000000000000000001790556040517f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62590600090a1565b818101828110156200029657fe5b92915050565b61127480620002ac6000396000f3006080604052600436106101665763ffffffff60e060020a60003504166306fdde03811461016b578063095ea7b3146101f557806317ffc3201461022d57806318160ddd1461025057806323b872dd146102775780632ff2e9dc146102a1578063313ce567146102b65780633f4ba83a146102e157806342966c68146102f65780634fed6a101461030e57806350c2e4f61461033f5780635960b74f146103545780635b52c7fb146103695780635c975abb1461037e578063661884631461039357806370a08231146103b7578063715018a6146103d85780638456cb59146103ed5780638c88512f146104025780638da5cb5b1461042357806395d89b41146104385780639c1e03a01461044d578063a9059cbb14610462578063b9c3a81814610486578063c48590e91461033f578063d1c673e91461049b578063d73dd62314610507578063dd62ed3e1461052b578063ef9f602314610552578063f2fde38b14610567575b600080fd5b34801561017757600080fd5b50610180610588565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101ba5781810151838201526020016101a2565b50505050905090810190601f1680156101e75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561020157600080fd5b50610219600160a060020a03600435166024356105ae565b604080519115158252519081900360200190f35b34801561023957600080fd5b5061024e600160a060020a03600435166105d9565b005b34801561025c57600080fd5b50610265610691565b60408051918252519081900360200190f35b34801561028357600080fd5b50610219600160a060020a0360043581169060243516604435610697565b3480156102ad57600080fd5b506102656106c4565b3480156102c257600080fd5b506102cb6106d4565b6040805160ff9092168252519081900360200190f35b3480156102ed57600080fd5b5061024e6106d9565b34801561030257600080fd5b5061024e600435610743565b34801561031a57600080fd5b50610323610750565b60408051600160a060020a039092168252519081900360200190f35b34801561034b57600080fd5b5061026561075f565b34801561036057600080fd5b5061032361076e565b34801561037557600080fd5b5061026561077d565b34801561038a57600080fd5b5061021961078c565b34801561039f57600080fd5b50610219600160a060020a036004351660243561079c565b3480156103c357600080fd5b50610265600160a060020a03600435166107c0565b3480156103e457600080fd5b5061024e6107db565b3480156103f957600080fd5b5061024e61083c565b34801561040e57600080fd5b5061024e600160a060020a03600435166108ab565b34801561042f57600080fd5b50610323610974565b34801561044457600080fd5b50610180610983565b34801561045957600080fd5b506103236109a3565b34801561046e57600080fd5b50610219600160a060020a03600435166024356109b2565b34801561049257600080fd5b506102656109d6565b3480156104a757600080fd5b50604080516020601f60643560048181013592830184900484028501840190955281845261021994600160a060020a0381351694602480359560443595369560849493019181908401838280828437509497506109e59650505050505050565b34801561051357600080fd5b50610219600160a060020a0360043516602435610b7d565b34801561053757600080fd5b50610265600160a060020a0360043581169060243516610ba1565b34801561055e57600080fd5b50610265610bcc565b34801561057357600080fd5b5061024e600160a060020a0360043516610bdc565b604080518082019091526009815260b860020a684d656e6c6f204f6e6502602082015281565b60035460009060a060020a900460ff16156105c857600080fd5b6105d28383610bfc565b9392505050565b600354600090600160a060020a031633146105f357600080fd5b6040805160e060020a6370a082310281523060048201529051600160a060020a038416916370a082319160248083019260209291908290030181600087803b15801561063e57600080fd5b505af1158015610652573d6000803e3d6000fd5b505050506040513d602081101561066857600080fd5b505160035490915061068d90600160a060020a0384811691168363ffffffff610c5016565b5050565b60015490565b60035460009060a060020a900460ff16156106b157600080fd5b6106bc848484610cef565b949350505050565b6b033b2e3c9fd0803ce800000081565b601281565b600354600160a060020a031633146106f057600080fd5b60035460a060020a900460ff16151561070857600080fd5b6003805460a060020a60ff02191690556040517f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3390600090a1565b61074d3382610e52565b50565b600554600160a060020a031681565b6a52b7d2dcc80cd2e400000081565b600654600160a060020a031681565b6acb7c86b8b8ec58b600000081565b60035460a060020a900460ff1681565b60035460009060a060020a900460ff16156107b657600080fd5b6105d28383610f41565b600160a060020a031660009081526020819052604090205490565b600354600160a060020a031633146107f257600080fd5b600354604051600160a060020a03909116907ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482090600090a260038054600160a060020a0319169055565b600354600160a060020a0316331461085357600080fd5b60035460a060020a900460ff161561086a57600080fd5b6003805460a060020a60ff02191660a060020a1790556040517f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62590600090a1565b600354600160a060020a031633146108c257600080fd5b600454600160a060020a03168015610924576040805160e560020a62461bcd02815260206004820152601b60248201527f4578706563746564206164647265737320746f206265206e756c6c0000000000604482015290519081900360640190fd5b61092c6106d9565b336000908152602081905260409020546109479083906109b2565b5060048054600160a060020a031916600160a060020a03841617905561096b61083c565b61068d82610bdc565b600354600160a060020a031681565b604080518082019091526003815260e860020a624f4e4502602082015281565b600454600160a060020a031681565b60035460009060a060020a900460ff16156109cc57600080fd5b6105d2838361101e565b6aa56fa5b99019a5c800000081565b60006109f185856109b2565b15610b725760405160e460020a630a5938410281523360048201818152602483018790526044830186905260806064840190815285516084850152855160e060020a63150b7a030294600160a060020a038b169463a59384109490938b938b938b93929160a490910190602085019080838360005b83811015610a7e578181015183820152602001610a66565b50505050905090810190601f168015610aab5780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b158015610acd57600080fd5b505af1158015610ae1573d6000803e3d6000fd5b505050506040513d6020811015610af757600080fd5b5051600160e060020a03191614610b6a576040805160e560020a62461bcd02815260206004820152602660248201527f54617267657420636f6e7472616374206f6e546f6b656e526563656976656420604482015260d260020a6519985a5b195902606482015290519081900360840190fd5b5060016106bc565b506000949350505050565b60035460009060a060020a900460ff1615610b9757600080fd5b6105d283836110eb565b600160a060020a03918216600090815260026020908152604080832093909416825291909152205490565b6b0124d26a73f76098a200000081565b600354600160a060020a03163314610bf357600080fd5b61074d81611172565b336000818152600260209081526040808320600160a060020a03871680855290835281842086905581518681529151939490939092600080516020611229833981519152928290030190a350600192915050565b82600160a060020a031663a9059cbb83836040518363ffffffff1660e060020a0281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050602060405180830381600087803b158015610cb357600080fd5b505af1158015610cc7573d6000803e3d6000fd5b505050506040513d6020811015610cdd57600080fd5b50511515610cea57600080fd5b505050565b600160a060020a038316600090815260208190526040812054821115610d1457600080fd5b600160a060020a0384166000908152600260209081526040808320338452909152902054821115610d4457600080fd5b600160a060020a0383161515610d5957600080fd5b600160a060020a038416600090815260208190526040902054610d82908363ffffffff6111e316565b600160a060020a038086166000908152602081905260408082209390935590851681522054610db7908363ffffffff6111f516565b600160a060020a03808516600090815260208181526040808320949094559187168152600282528281203382529091522054610df9908363ffffffff6111e316565b600160a060020a0380861660008181526002602090815260408083203384528252918290209490945580518681529051928716939192600080516020611209833981519152929181900390910190a35060019392505050565b600160a060020a038216600090815260208190526040902054811115610e7757600080fd5b600160a060020a038216600090815260208190526040902054610ea0908263ffffffff6111e316565b600160a060020a038316600090815260208190526040902055600154610ecc908263ffffffff6111e316565b600155604080518281529051600160a060020a038416917fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5919081900360200190a2604080518281529051600091600160a060020a038516916000805160206112098339815191529181900360200190a35050565b336000908152600260209081526040808320600160a060020a0386168452909152812054808310610f9557336000908152600260209081526040808320600160a060020a0388168452909152812055610fca565b610fa5818463ffffffff6111e316565b336000908152600260209081526040808320600160a060020a03891684529091529020555b336000818152600260209081526040808320600160a060020a038916808552908352928190205481519081529051929392600080516020611229833981519152929181900390910190a35060019392505050565b3360009081526020819052604081205482111561103a57600080fd5b600160a060020a038316151561104f57600080fd5b3360009081526020819052604090205461106f908363ffffffff6111e316565b3360009081526020819052604080822092909255600160a060020a038516815220546110a1908363ffffffff6111f516565b600160a060020a038416600081815260208181526040918290209390935580518581529051919233926000805160206112098339815191529281900390910190a350600192915050565b336000908152600260209081526040808320600160a060020a038616845290915281205461111f908363ffffffff6111f516565b336000818152600260209081526040808320600160a060020a038916808552908352928190208590558051948552519193600080516020611229833981519152929081900390910190a350600192915050565b600160a060020a038116151561118757600080fd5b600354604051600160a060020a038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a360038054600160a060020a031916600160a060020a0392909216919091179055565b6000828211156111ef57fe5b50900390565b8181018281101561120257fe5b929150505600ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925a165627a7a72305820482baec2275e749da6877edf869fcf412eb35215c47b67939cbdc119199728310029";
    super(web3, address, abi, rawBytecode);
  }

  static async createAndValidate(
    web3: any,
    address: string | BigNumber
  ): Promise<MenloToken> {
    const contract = new MenloToken(web3, address);
    const code = await promisify(web3.eth.getCode, [address]);
    if (code === "0x0") {
      throw new Error(`Contract at ${address} doesn't exist!`);
    }
    return contract;
  }

  public get name(): Promise<string> {
    return promisify(this.rawWeb3Contract.name, []);
  }
  public get totalSupply(): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.totalSupply, []);
  }
  public get INITIAL_SUPPLY(): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.INITIAL_SUPPLY, []);
  }
  public get decimals(): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.decimals, []);
  }
  public get teamTimelock(): Promise<string> {
    return promisify(this.rawWeb3Contract.teamTimelock, []);
  }
  public get ADVISOR_SUPPLY(): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.ADVISOR_SUPPLY, []);
  }
  public get advisorTimelock(): Promise<string> {
    return promisify(this.rawWeb3Contract.advisorTimelock, []);
  }
  public get GROWTH_SUPPLY(): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.GROWTH_SUPPLY, []);
  }
  public get paused(): Promise<boolean> {
    return promisify(this.rawWeb3Contract.paused, []);
  }
  public get owner(): Promise<string> {
    return promisify(this.rawWeb3Contract.owner, []);
  }
  public get symbol(): Promise<string> {
    return promisify(this.rawWeb3Contract.symbol, []);
  }
  public get crowdsale(): Promise<string> {
    return promisify(this.rawWeb3Contract.crowdsale, []);
  }
  public get TEAM_SUPPLY(): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.TEAM_SUPPLY, []);
  }
  public get PARTNER_SUPPLY(): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.PARTNER_SUPPLY, []);
  }
  public get PUBLICSALE_SUPPLY(): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.PUBLICSALE_SUPPLY, []);
  }
  public balanceOf(_owner: BigNumber | string): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.balanceOf, [_owner.toString()]);
  }
  public allowance(
    _owner: BigNumber | string,
    _spender: BigNumber | string
  ): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.allowance, [
      _owner.toString(),
      _spender.toString()
    ]);
  }

  public approveTx(
    _spender: BigNumber | string,
    _value: BigNumber | number
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, "approve", [
      _spender.toString(),
      _value.toString()
    ]);
  }
  public reclaimTokenTx(
    _token: BigNumber | string
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, "reclaimToken", [
      _token.toString()
    ]);
  }
  public transferFromTx(
    _from: BigNumber | string,
    _to: BigNumber | string,
    _value: BigNumber | number
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, "transferFrom", [
      _from.toString(),
      _to.toString(),
      _value.toString()
    ]);
  }
  public unpauseTx(): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, "unpause", []);
  }
  public burnTx(
    _value: BigNumber | number
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, "burn", [
      _value.toString()
    ]);
  }
  public decreaseApprovalTx(
    _spender: BigNumber | string,
    _subtractedValue: BigNumber | number
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, "decreaseApproval", [
      _spender.toString(),
      _subtractedValue.toString()
    ]);
  }
  public renounceOwnershipTx(): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(
      this,
      "renounceOwnership",
      []
    );
  }
  public pauseTx(): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, "pause", []);
  }
  public transferTx(
    _to: BigNumber | string,
    _value: BigNumber | number
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, "transfer", [
      _to.toString(),
      _value.toString()
    ]);
  }
  public increaseApprovalTx(
    _spender: BigNumber | string,
    _addedValue: BigNumber | number
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, "increaseApproval", [
      _spender.toString(),
      _addedValue.toString()
    ]);
  }
  public transferOwnershipTx(
    _newOwner: BigNumber | string
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(
      this,
      "transferOwnership",
      [_newOwner.toString()]
    );
  }
  public initializeCrowdsaleTx(
    _crowdsale: BigNumber | string
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(
      this,
      "initializeCrowdsale",
      [_crowdsale.toString()]
    );
  }
  public transferAndCallTx(
    _to: BigNumber | string,
    _value: BigNumber | number,
    _action: BigNumber | number,
    _data: string
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, "transferAndCall", [
      _to.toString(),
      _value.toString(),
      _action.toString(),
      _data
    ]);
  }

  public BurnEvent(eventFilter: {
    burner?: BigNumber | string | Array<BigNumber | string>;
  }): DeferredEventWrapper<
    { burner: BigNumber | string; value: BigNumber | number },
    { burner?: BigNumber | string | Array<BigNumber | string> }
  > {
    return new DeferredEventWrapper<
      { burner: BigNumber | string; value: BigNumber | number },
      { burner?: BigNumber | string | Array<BigNumber | string> }
    >(this, "Burn", eventFilter);
  }
  public PauseEvent(eventFilter: {}): DeferredEventWrapper<{}, {}> {
    return new DeferredEventWrapper<{}, {}>(this, "Pause", eventFilter);
  }
  public UnpauseEvent(eventFilter: {}): DeferredEventWrapper<{}, {}> {
    return new DeferredEventWrapper<{}, {}>(this, "Unpause", eventFilter);
  }
  public OwnershipRenouncedEvent(eventFilter: {
    previousOwner?: BigNumber | string | Array<BigNumber | string>;
  }): DeferredEventWrapper<
    { previousOwner: BigNumber | string },
    { previousOwner?: BigNumber | string | Array<BigNumber | string> }
  > {
    return new DeferredEventWrapper<
      { previousOwner: BigNumber | string },
      { previousOwner?: BigNumber | string | Array<BigNumber | string> }
    >(this, "OwnershipRenounced", eventFilter);
  }
  public OwnershipTransferredEvent(eventFilter: {
    previousOwner?: BigNumber | string | Array<BigNumber | string>;
    newOwner?: BigNumber | string | Array<BigNumber | string>;
  }): DeferredEventWrapper<
    { previousOwner: BigNumber | string; newOwner: BigNumber | string },
    {
      previousOwner?: BigNumber | string | Array<BigNumber | string>;
      newOwner?: BigNumber | string | Array<BigNumber | string>;
    }
  > {
    return new DeferredEventWrapper<
      { previousOwner: BigNumber | string; newOwner: BigNumber | string },
      {
        previousOwner?: BigNumber | string | Array<BigNumber | string>;
        newOwner?: BigNumber | string | Array<BigNumber | string>;
      }
    >(this, "OwnershipTransferred", eventFilter);
  }
  public ApprovalEvent(eventFilter: {
    owner?: BigNumber | string | Array<BigNumber | string>;
    spender?: BigNumber | string | Array<BigNumber | string>;
  }): DeferredEventWrapper<
    {
      owner: BigNumber | string;
      spender: BigNumber | string;
      value: BigNumber | number;
    },
    {
      owner?: BigNumber | string | Array<BigNumber | string>;
      spender?: BigNumber | string | Array<BigNumber | string>;
    }
  > {
    return new DeferredEventWrapper<
      {
        owner: BigNumber | string;
        spender: BigNumber | string;
        value: BigNumber | number;
      },
      {
        owner?: BigNumber | string | Array<BigNumber | string>;
        spender?: BigNumber | string | Array<BigNumber | string>;
      }
    >(this, "Approval", eventFilter);
  }
  public TransferEvent(eventFilter: {
    from?: BigNumber | string | Array<BigNumber | string>;
    to?: BigNumber | string | Array<BigNumber | string>;
  }): DeferredEventWrapper<
    {
      from: BigNumber | string;
      to: BigNumber | string;
      value: BigNumber | number;
    },
    {
      from?: BigNumber | string | Array<BigNumber | string>;
      to?: BigNumber | string | Array<BigNumber | string>;
    }
  > {
    return new DeferredEventWrapper<
      {
        from: BigNumber | string;
        to: BigNumber | string;
        value: BigNumber | number;
      },
      {
        from?: BigNumber | string | Array<BigNumber | string>;
        to?: BigNumber | string | Array<BigNumber | string>;
      }
    >(this, "Transfer", eventFilter);
  }
}

export namespace MenloTokenEventTypes {
  export type BurnEventArgs = {
    burner: BigNumber | string;
    value: BigNumber | number;
  };

  export type PauseEventArgs = {};

  export type UnpauseEventArgs = {};

  export type OwnershipRenouncedEventArgs = {
    previousOwner: BigNumber | string;
  };

  export type OwnershipTransferredEventArgs = {
    previousOwner: BigNumber | string;
    newOwner: BigNumber | string;
  };

  export type ApprovalEventArgs = {
    owner: BigNumber | string;
    spender: BigNumber | string;
    value: BigNumber | number;
  };

  export type TransferEventArgs = {
    from: BigNumber | string;
    to: BigNumber | string;
    value: BigNumber | number;
  };
}