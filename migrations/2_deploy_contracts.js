const UniswapV2Factory = artifacts.require('UniswapV2Factory')
// const UniswapV2ERC20 = artifacts.require('UniswapV2ERC20')
// const UniswapV2Pair = artifacts.require('UniswapV2Pair')

module.exports = async function(deployer) {
  const accounts = await web3.eth.getAccounts()
  // use deploy address as the address to collect protocol fee if
  // enabled
  const feeToSetter = accounts[0]
  console.log(`feeToSetter = ${feeToSetter}`)
  await deployer.deploy(UniswapV2Factory, ...[feeToSetter])
}
