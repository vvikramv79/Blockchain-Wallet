const Migrations = artifacts.require("Migrations");
const DaiTokenMock = artifacts.require("DaiTokenMock");

module.exports = async function(deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(DaiTokenMock);
  const tokenMock = await DaiTokenMock.deployed()
  await tokenMock.mint(
    '0xe579525003dB59357165CF68eF2f52D6D9a1757b',
    '10000000000000000000000000'
  )
};
