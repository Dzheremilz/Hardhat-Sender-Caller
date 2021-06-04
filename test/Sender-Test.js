const { expect } = require('chai');

describe('Sender & Caller', function () {
  let Sender, sender, Caller, caller, dev, tester;
  beforeEach(async function () {
    [dev, tester] = await ethers.getSigners();
    Sender = await ethers.getContractFactory('Sender');
    sender = await Sender.deploy();
    await sender.deployed();
    Caller = await ethers.getContractFactory('Caller');
    caller = await Caller.deploy(sender.address);
    await caller.deployed();
  });
  describe('Sender', function () {
    it('Who am i: dev', async function () {
      expect(await sender.whoAmI()).to.equal(dev.address);
    });
    it('Who am i: tester', async function () {
      expect(await sender.connect(tester).whoAmI()).to.equal(tester.address);
    });
  });
  describe('Caller', function () {
    it('Who am i: dev', async function () {
      expect(await caller.callWhoAmI()).to.equal(caller.address);
    });
    it('Who am i: tester', async function () {
      expect(await caller.connect(tester).callWhoAmI()).to.equal(caller.address);
    });
  });
  describe('Tx.origin', function () {
    it('Who am i: dev', async function () {
      expect(await caller.callWhoAmIOrigin()).to.equal(dev.address);
    });
    it('Who am i: tester', async function () {
      expect(await caller.connect(tester).callWhoAmIOrigin()).to.equal(tester.address);
    });
  });
});
