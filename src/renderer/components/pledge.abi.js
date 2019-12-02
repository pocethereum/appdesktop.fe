let pledgeAbi = [{
	"constant": true,
	"inputs": [{
		"name": "owner",
		"type": "address"
	}],
	"name": "mortgageOf",
	"outputs": [{
		"name": "",
		"type": "uint256"
	}],
	"payable": false,
	"type": "function",
	"stateMutability": "view"
}, {
	"constant": false,
	"inputs": [{
		"name": "to",
		"type": "address"
	}, {
		"name": "value",
		"type": "uint256"
	}],
	"name": "mortgage",
	"outputs": [{
		"name": "",
		"type": "bool"
	}],
	"payable": true,
	"type": "function",
	"stateMutability": "payable"
}, {
	"constant": true,
	"inputs": [],
	"name": "totalMortgage",
	"outputs": [{
		"name": "",
		"type": "uint256"
	}],
	"payable": false,
	"type": "function",
	"stateMutability": "view"
}, {
	"constant": false,
	"inputs": [{
		"name": "value",
		"type": "uint256"
	}],
	"name": "redeem",
	"outputs": [{
		"name": "",
		"type": "bool"
	}],
	"payable": false,
	"type": "function",
	"stateMutability": "nonpayable"
}, {
	"inputs": [],
	"payable": false,
	"type": "constructor",
	"stateMutability": "nonpayable"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"name": "to",
		"type": "address"
	}, {
		"indexed": false,
		"name": "value",
		"type": "uint256"
	}],
	"name": "Mortgage",
	"type": "event"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"name": "owner",
		"type": "address"
	}, {
		"indexed": false,
		"name": "value",
		"type": "uint256"
	}],
	"name": "Redeem",
	"type": "event"
}];

export {
	pledgeAbi
}