const Networks = {
    ethereum: {
        name: "Ethereum",
        chainId: 1,
        rpc: "https://mainnet.infura.io/v3/your-infura-id",
        explorer: "https://etherscan.io/",
        symbol: "ETH",
        "wallet-type": "evm",
    },
    bsc: {
        name: "Binance Smart Chain",
        chainId: 56,
        rpc: "https://bsc-dataseed.binance.org/",
        explorer: "https://bscscan.com/",
        symbol: "BNB",
        "wallet-type": "evm",
    },
    polygon: {
        name: "Polygon",
        chainId: 137,
        rpc: "https://rpc-mainnet.maticvigil.com/",
        explorer: "https://polygonscan.com/",
        symbol: "MATIC",
        "wallet-type": "evm",
    },
    avalanche: {
        name: "Avalanche",
        chainId: 43114,
        rpc: "https://api.avax.network/ext/bc/C/rpc",
        explorer: "https://cchain.explorer.avax.network/",
        symbol: "AVAX",
        "wallet-type": "evm",
    },
    fantom: {
        name: "Fantom",
        chainId: 250,
        rpc: "https://rpcapi.fantom.network",
        explorer: "https://ftmscan.com/",
        symbol: "FTM",
        "wallet-type": "evm",
    },
    harmony: {
        name: "Harmony",
        chainId: 1666600000,
        rpc: "https://api.harmony.one",
        explorer: "https://explorer.harmony.one/",
        symbol: "ONE",
        "wallet-type": "evm",
    },
    heco: {
        name: "Huobi ECO Chain",
        chainId: 128,
        rpc: "https://http-mainnet.hecochain.com",
        explorer: "https://hecoinfo.com/",
        symbol: "HT",
        "wallet-type": "evm",
    },
    okex: {
        name: "OKExChain",
        chainId: 66,
        rpc: "https://exchainrpc.okex.org",
        explorer: "https://www.oklink.com/",
        symbol: "OKT",
        "wallet-type": "evm",
    },
    arbitrum: {
        name: "Arbitrum",
        chainId: 42161,
        rpc: "https://arb1.arbitrum.io/rpc",
        explorer: "https://arbiscan.io/",
        symbol: "ETH",
        "wallet-type": "evm",
    },
    optimism: {
        name: "Optimism",
        chainId: 10,
        rpc: "https://mainnet.optimism.io",
        explorer: "https://optimistic.etherscan.io/",
        symbol: "ETH",
        "wallet-type": "evm",
    },
    moonriver: {
        name: "Moonriver",
        chainId: 1285,
        rpc: "https://rpc.moonriver.moonbeam.network",
        explorer: "https://blockscout.moonriver.moonbeam.network/",
        symbol: "MOVR",
        "wallet-type": "evm",
    },
    celo: {
        name: "Celo",
        chainId: 42220,
        rpc: "https://forno.celo.org",
        explorer: "https://explorer.celo.org/",
        symbol: "CELO",
        "wallet-type": "evm",
    },
    tron: {
        name: "Tron",
        chainId: 195,
        rpc: "https://api.trongrid.io",
        explorer: "https://tronscan.org/",
        symbol: "TRX",
        "wallet-type": "trx",
    },
    solana: {
        name: "Solana",
        chainId: 101,
        rpc: "https://api.mainnet-beta.solana.com",
        explorer: "https://explorer.solana.com/",
        symbol: "SOL",
        "wallet-type": "sol",
    },
    near: {
        name: "NEAR",
        chainId: 1313161554,
        rpc: "https://rpc.mainnet.near.org",
        explorer: "https://explorer.near.org/",
        symbol: "NEAR",
        "wallet-type": "near",
    },
    ton: {
        name: "TON",
        chainId: 1,
        rpc: "https://main.ton.dev",
        explorer: "https://ton.live/",
        symbol: "TON",
        "wallet-type": "ton",
    },
    atom: {
        name: "Cosmos",
        chainId: 118,
        rpc: "https://rpc.cosmos.network",
        explorer: "https://www.mintscan.io/",
        symbol: "ATOM",
        "wallet-type": "atom",
    },
};