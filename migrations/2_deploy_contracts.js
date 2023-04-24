const SupplyChainLifecycle = artifacts.require('SupplyChainLifecycle');
const Consumer = artifacts.require('Consumer');
const Distributor = artifacts.require('Distributor');
const Producer = artifacts.require('Producer');
const Retailer = artifacts.require('Retailer');
const Users = artifacts.require('Users');

module.exports = function (deployer) {
	deployer.deploy(SupplyChainLifecycle);
	deployer.deploy(Consumer);
	deployer.deploy(Distributor);
	deployer.deploy(Producer);
	deployer.deploy(Retailer);
	deployer.deploy(Users);
};
