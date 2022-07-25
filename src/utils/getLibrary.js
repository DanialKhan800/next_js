import Web3 from 'web3';

export default function getLibrary(provider) {
  return new Web3(provider);
}
