function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var latticeIcon = "\n  <svg width=\"41px\" height=\"41px\" viewBox=\"0 0 41 41\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\">\n  <!-- Generated by Pixelmator Pro 1.8 -->\n  <defs>\n    <image id=\"image\" width=\"41px\" height=\"41px\" xlink:href=\"data:image/png;base64,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\"/>\n  </defs>\n  <use id=\"image-1\" xlink:href=\"#image\" x=\"0px\" y=\"0px\" width=\"41px\" height=\"41px\"/>\n  </svg>\n";

function lattice(options) {
  var appName = options.appName,
      rpcUrl = options.rpcUrl,
      networkId = options.networkId,
      preferred = options.preferred,
      label = options.label,
      iconSrc = options.iconSrc,
      svg = options.svg;
  return {
    name: label || 'Lattice',
    svg: svg || latticeIcon,
    iconSrc: iconSrc,
    wallet: function () {
      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(helpers) {
        var BigNumber, networkName, resetWalletState, provider;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                BigNumber = helpers.BigNumber, networkName = helpers.networkName, resetWalletState = helpers.resetWalletState;
                _context4.next = 3;
                return latticeProvider({
                  appName: appName,
                  rpcUrl: rpcUrl,
                  networkId: networkId,
                  BigNumber: BigNumber,
                  networkName: networkName,
                  resetWalletState: resetWalletState
                });

              case 3:
                provider = _context4.sent;
                return _context4.abrupt("return", {
                  provider: provider,
                  "interface": {
                    name: 'Lattice',
                    connect: provider.enable,
                    disconnect: provider.disconnect,
                    address: {
                      get: function () {
                        var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  return _context.abrupt("return", provider.getPrimaryAddress());

                                case 1:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee);
                        }));

                        function get() {
                          return _get.apply(this, arguments);
                        }

                        return get;
                      }()
                    },
                    network: {
                      get: function () {
                        var _get2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  return _context2.abrupt("return", networkId);

                                case 1:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2);
                        }));

                        function get() {
                          return _get2.apply(this, arguments);
                        }

                        return get;
                      }()
                    },
                    balance: {
                      get: function () {
                        var _get3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                          var address;
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  address = provider.getPrimaryAddress();
                                  return _context3.abrupt("return", address && provider.getBalance(address));

                                case 2:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3);
                        }));

                        function get() {
                          return _get3.apply(this, arguments);
                        }

                        return get;
                      }()
                    }
                  }
                });

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function wallet(_x) {
        return _wallet.apply(this, arguments);
      }

      return wallet;
    }(),
    type: 'hardware',
    desktop: true,
    mobile: true,
    osExclusions: ['iOS'],
    preferred: preferred
  };
}

function latticeProvider(_x2) {
  return _latticeProvider.apply(this, arguments);
}

function _latticeProvider() {
  _latticeProvider = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(options) {
    var _yield$import, EthLatticeKeyring, EthereumTx, _yield$import2, createProvider, BASE_PATH, networkId, appName, rpcUrl, BigNumber, networkName, params, Lattice, dPath, addressList, enabled, customPath, provider, disconnect, setPath, _setPath, isCustomPath, enable, addresses, setPrimaryAccount, getPrimaryAddress, getMoreAccounts, _getMoreAccounts, _getAccounts, _getAccounts2, getBalances, getBalance, _signTransaction, _signTransaction2, _signMessage, _signMessage2;

    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _signMessage2 = function _signMessage4() {
              _signMessage2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(message) {
                var sig;
                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        if (!(addressList.length === 0)) {
                          _context10.next = 3;
                          break;
                        }

                        _context10.next = 3;
                        return enable();

                      case 3:
                        _context10.prev = 3;
                        _context10.next = 6;
                        return Lattice.signPersonalMessage(addressList[0], message.data);

                      case 6:
                        sig = _context10.sent;
                        return _context10.abrupt("return", sig);

                      case 10:
                        _context10.prev = 10;
                        _context10.t0 = _context10["catch"](3);
                        throw _context10.t0;

                      case 13:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10, null, [[3, 10]]);
              }));
              return _signMessage2.apply(this, arguments);
            };

            _signMessage = function _signMessage3(_x7) {
              return _signMessage2.apply(this, arguments);
            };

            _signTransaction2 = function _signTransaction4() {
              _signTransaction2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(transactionData) {
                var transaction, signedTx;
                return regeneratorRuntime.wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        if (!(addressList.length === 0)) {
                          _context9.next = 3;
                          break;
                        }

                        _context9.next = 3;
                        return enable();

                      case 3:
                        transaction = new EthereumTx.Transaction(transactionData, {
                          chain: networkName(networkId)
                        });
                        _context9.prev = 4;
                        _context9.next = 7;
                        return Lattice.signTransaction(addressList[0], transaction);

                      case 7:
                        signedTx = _context9.sent;
                        return _context9.abrupt("return", "0x".concat(signedTx.serialize().toString('hex')));

                      case 11:
                        _context9.prev = 11;
                        _context9.t0 = _context9["catch"](4);
                        throw _context9.t0;

                      case 14:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee9, null, [[4, 11]]);
              }));
              return _signTransaction2.apply(this, arguments);
            };

            _signTransaction = function _signTransaction3(_x6) {
              return _signTransaction2.apply(this, arguments);
            };

            getBalance = function _getBalance(address) {
              return new Promise(function (resolve, reject) {
                provider.sendAsync({
                  jsonrpc: '2.0',
                  method: 'eth_getBalance',
                  params: [address, 'latest'],
                  id: 42
                }, function (e, res) {
                  e && reject(e);
                  var result = res && res.result;

                  if (result != null) {
                    resolve(new BigNumber(result).toString(10));
                  } else {
                    resolve(null);
                  }
                });
              });
            };

            getBalances = function _getBalances(addresses) {
              return Promise.all(addresses.map(function (address) {
                return new Promise( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(resolve) {
                    var balance;
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            _context5.next = 2;
                            return getBalance(address);

                          case 2:
                            balance = _context5.sent;
                            resolve({
                              address: address,
                              balance: balance
                            });

                          case 4:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function (_x5) {
                    return _ref.apply(this, arguments);
                  };
                }());
              }));
            };

            _getAccounts2 = function _getAccounts4() {
              _getAccounts2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(getMore) {
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        if (enabled) {
                          _context8.next = 2;
                          break;
                        }

                        return _context8.abrupt("return", []);

                      case 2:
                        if (!(addressList.length > 0 && !getMore)) {
                          _context8.next = 4;
                          break;
                        }

                        return _context8.abrupt("return", addressList);

                      case 4:
                        _context8.prev = 4;
                        _context8.next = 7;
                        return Lattice.addAccounts();

                      case 7:
                        addressList = _context8.sent;
                        _context8.next = 13;
                        break;

                      case 10:
                        _context8.prev = 10;
                        _context8.t0 = _context8["catch"](4);
                        throw _context8.t0;

                      case 13:
                        return _context8.abrupt("return", addressList);

                      case 14:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8, null, [[4, 10]]);
              }));
              return _getAccounts2.apply(this, arguments);
            };

            _getAccounts = function _getAccounts3(_x4) {
              return _getAccounts2.apply(this, arguments);
            };

            _getMoreAccounts = function _getMoreAccounts3() {
              _getMoreAccounts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                var m, accounts;
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        m = "Lattice only supports one exported account per wallet. Checking for new wallet.";
                        console.warn(m);
                        _context7.next = 4;
                        return _getAccounts(true);

                      case 4:
                        accounts = _context7.sent;
                        return _context7.abrupt("return", accounts && getBalances(accounts));

                      case 6:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7);
              }));
              return _getMoreAccounts.apply(this, arguments);
            };

            getMoreAccounts = function _getMoreAccounts2() {
              return _getMoreAccounts.apply(this, arguments);
            };

            getPrimaryAddress = function _getPrimaryAddress() {
              return enabled ? addresses()[0] : undefined;
            };

            setPrimaryAccount = function _setPrimaryAccount() {
              return;
            };

            addresses = function _addresses() {
              return addressList;
            };

            enable = function _enable() {
              enabled = true;
              return _getAccounts();
            };

            isCustomPath = function _isCustomPath() {
              return customPath;
            };

            _setPath = function _setPath3() {
              _setPath = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(path) {
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        if (!(path !== BASE_PATH)) {
                          _context6.next = 2;
                          break;
                        }

                        throw new Error("Lattice only supports standard path: m/44'/0'/0'/0/x");

                      case 2:
                        customPath = false;
                        dPath = path;
                        return _context6.abrupt("return", true);

                      case 5:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6);
              }));
              return _setPath.apply(this, arguments);
            };

            setPath = function _setPath2(_x3) {
              return _setPath.apply(this, arguments);
            };

            disconnect = function _disconnect() {
              dPath = '';
              enabled = false;
              provider.stop();
            };

            _context11.next = 20;
            return import('eth-lattice-keyring');

          case 20:
            _yield$import = _context11.sent;
            EthLatticeKeyring = _yield$import["default"];
            _context11.next = 24;
            return import('ethereumjs-tx');

          case 24:
            EthereumTx = _context11.sent;
            _context11.next = 27;
            return import('./providerEngine-22676935.js');

          case 27:
            _yield$import2 = _context11.sent;
            createProvider = _yield$import2["default"];
            BASE_PATH = "m/44'/60'/0'/0";
            networkId = options.networkId, appName = options.appName, rpcUrl = options.rpcUrl, BigNumber = options.BigNumber, networkName = options.networkName;
            params = {
              name: appName,
              network: networkName(networkId)
            };
            Lattice = new EthLatticeKeyring(params);
            dPath = '';
            addressList = Array.from([]);
            enabled = false;
            customPath = false;
            provider = createProvider({
              getAccounts: function getAccounts(callback) {
                _getAccounts().then(function (res) {
                  return callback(null, res);
                })["catch"](function (err) {
                  return callback(err, null);
                });
              },
              signTransaction: function signTransaction(transactionData, callback) {
                _signTransaction(transactionData).then(function (res) {
                  return callback(null, res);
                })["catch"](function (err) {
                  return callback(err, null);
                });
              },
              processMessage: function processMessage(messageData, callback) {
                _signMessage(messageData).then(function (res) {
                  return callback(null, res);
                })["catch"](function (err) {
                  return callback(err, null);
                });
              },
              processPersonalMessage: function processPersonalMessage(messageData, callback) {
                _signMessage(messageData).then(function (res) {
                  return callback(null, res);
                })["catch"](function (err) {
                  return callback(err, null);
                });
              },
              signMessage: function signMessage(messageData, callback) {
                _signMessage(messageData).then(function (res) {
                  return callback(null, res);
                })["catch"](function (err) {
                  return callback(err, null);
                });
              },
              signPersonalMessage: function signPersonalMessage(messageData, callback) {
                _signMessage(messageData).then(function (res) {
                  return callback(null, res);
                })["catch"](function (err) {
                  return callback(err, null);
                });
              },
              rpcUrl: rpcUrl
            });
            provider.setPath = setPath;
            provider.dPath = dPath;
            provider.enable = enable;
            provider.setPrimaryAccount = setPrimaryAccount;
            provider.getPrimaryAddress = getPrimaryAddress;
            provider.getAccounts = _getAccounts;
            provider.getMoreAccounts = getMoreAccounts;
            provider.getBalance = getBalance;
            provider.getBalances = getBalances;
            provider.send = provider.sendAsync;
            provider.disconnect = disconnect;
            provider.isCustomPath = isCustomPath;
            return _context11.abrupt("return", provider);

          case 51:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));
  return _latticeProvider.apply(this, arguments);
}

export default lattice;