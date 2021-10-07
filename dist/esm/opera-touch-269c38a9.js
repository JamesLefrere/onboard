function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import { e as extensionInstallMessage } from './content-612bd04b.js';
var img = "data:image/png;base64,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";
var img$1 = "data:image/png;base64,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";

function operaTouch(options) {
  var preferred = options.preferred,
      label = options.label,
      iconSrc = options.iconSrc,
      svg = options.svg;
  return {
    name: label || 'Opera Touch',
    iconSrc: iconSrc || img,
    iconSrcSet: iconSrc || img$1,
    svg: svg,
    wallet: function () {
      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(helpers) {
        var getProviderName, getAddress, getBalance, getNetwork, provider, enabled;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                getProviderName = helpers.getProviderName, getAddress = helpers.getAddress, getBalance = helpers.getBalance, getNetwork = helpers.getNetwork;
                provider = window.ethereum || window.web3 && window.web3.currentProvider;
                enabled = false;
                return _context.abrupt("return", {
                  provider: provider,
                  "interface": provider && getProviderName(provider) === undefined ? {
                    name: 'Opera Touch',
                    connect: function connect() {
                      return provider.enable().then(function (res) {
                        enabled = true;
                        return res;
                      });
                    },
                    address: {
                      get: function get() {
                        return enabled ? getAddress(provider) : Promise.resolve(null);
                      }
                    },
                    network: {
                      get: function get() {
                        return enabled ? getNetwork(provider) : Promise.resolve(null);
                      }
                    },
                    balance: {
                      get: function get() {
                        return enabled ? getBalance(provider) : Promise.resolve(null);
                      }
                    }
                  } : null
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function wallet(_x) {
        return _wallet.apply(this, arguments);
      }

      return wallet;
    }(),
    type: 'injected',
    link: 'https://www.opera.com/mobile/touch',
    installMessage: extensionInstallMessage,
    mobile: true,
    preferred: preferred,
    osExclusions: ['Android']
  };
}

export default operaTouch;