const UniswapV2Factory = artifacts.require('UniswapV2Factory')
// const UniswapV2ERC20 = artifacts.require('UniswapV2ERC20')
// const UniswapV2Pair = artifacts.require('UniswapV2Pair')

module.exports = async function(deployer) {
  await deployer.deploy(UniswapV2Factory)
}
