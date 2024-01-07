/* eslint-disable */
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) =>
  function __require() {
    return (
      mod ||
        (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod),
      mod.exports
    );
  };
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === 'object') || typeof from === 'function') {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule
      ? __defProp(target, 'default', { value: mod, enumerable: true })
      : target,
    mod
  )
);

// src/tasks/data/validators.js
var require_validators = __commonJS({
  'src/tasks/data/validators.js'(exports) {
    'use strict';
    exports['#/definitions/text-classification'] = validate10;
    function validate10(
      data,
      {
        instancePath = '',
        parentData,
        parentDataProperty,
        rootData = data
      } = {}
    ) {
      let vErrors = null;
      let errors = 0;
      if (errors === 0) {
        if (data && typeof data == 'object' && !Array.isArray(data)) {
          let missing0;
          if (data.text === void 0 && (missing0 = 'text')) {
            validate10.errors = [
              {
                instancePath,
                schemaPath: '#/required',
                keyword: 'required',
                params: { missingProperty: missing0 },
                message: "must have required property '" + missing0 + "'"
              }
            ];
            return false;
          } else {
            if (data.text !== void 0) {
              if (typeof data.text !== 'string') {
                validate10.errors = [
                  {
                    instancePath: instancePath + '/text',
                    schemaPath: '#/properties/text/type',
                    keyword: 'type',
                    params: { type: 'string' },
                    message: 'must be string'
                  }
                ];
                return false;
              }
            }
          }
        } else {
          validate10.errors = [
            {
              instancePath,
              schemaPath: '#/type',
              keyword: 'type',
              params: { type: 'object' },
              message: 'must be object'
            }
          ];
          return false;
        }
      }
      validate10.errors = vErrors;
      return errors === 0;
    }
    exports['#/definitions/text-to-image'] = validate11;
    function validate11(
      data,
      {
        instancePath = '',
        parentData,
        parentDataProperty,
        rootData = data
      } = {}
    ) {
      let vErrors = null;
      let errors = 0;
      if (errors === 0) {
        if (data && typeof data == 'object' && !Array.isArray(data)) {
          if (data.num_steps === void 0) {
            data.num_steps = 20;
          }
          let missing0;
          if (data.prompt === void 0 && (missing0 = 'prompt')) {
            validate11.errors = [
              {
                instancePath,
                schemaPath: '#/required',
                keyword: 'required',
                params: { missingProperty: missing0 },
                message: "must have required property '" + missing0 + "'"
              }
            ];
            return false;
          } else {
            if (data.prompt !== void 0) {
              const _errs1 = errors;
              if (typeof data.prompt !== 'string') {
                validate11.errors = [
                  {
                    instancePath: instancePath + '/prompt',
                    schemaPath: '#/properties/prompt/type',
                    keyword: 'type',
                    params: { type: 'string' },
                    message: 'must be string'
                  }
                ];
                return false;
              }
              var valid0 = _errs1 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              let data1 = data.num_steps;
              const _errs3 = errors;
              if (
                !(typeof data1 == 'number' && !(data1 % 1) && !isNaN(data1))
              ) {
                validate11.errors = [
                  {
                    instancePath: instancePath + '/num_steps',
                    schemaPath: '#/properties/num_steps/type',
                    keyword: 'type',
                    params: { type: 'integer' },
                    message: 'must be integer'
                  }
                ];
                return false;
              }
              if (errors === _errs3) {
                if (typeof data1 == 'number') {
                  if (data1 > 20 || isNaN(data1)) {
                    validate11.errors = [
                      {
                        instancePath: instancePath + '/num_steps',
                        schemaPath: '#/properties/num_steps/maximum',
                        keyword: 'maximum',
                        params: { comparison: '<=', limit: 20 },
                        message: 'must be <= 20'
                      }
                    ];
                    return false;
                  }
                }
              }
              var valid0 = _errs3 === errors;
            }
          }
        } else {
          validate11.errors = [
            {
              instancePath,
              schemaPath: '#/type',
              keyword: 'type',
              params: { type: 'object' },
              message: 'must be object'
            }
          ];
          return false;
        }
      }
      validate11.errors = vErrors;
      return errors === 0;
    }
    exports['#/definitions/text-embeddings'] = validate12;
    function validate12(
      data,
      {
        instancePath = '',
        parentData,
        parentDataProperty,
        rootData = data
      } = {}
    ) {
      let vErrors = null;
      let errors = 0;
      if (errors === 0) {
        if (data && typeof data == 'object' && !Array.isArray(data)) {
          let missing0;
          if (data.text === void 0 && (missing0 = 'text')) {
            validate12.errors = [
              {
                instancePath,
                schemaPath: '#/required',
                keyword: 'required',
                params: { missingProperty: missing0 },
                message: "must have required property '" + missing0 + "'"
              }
            ];
            return false;
          } else {
            if (data.text !== void 0) {
              let data0 = data.text;
              const _errs2 = errors;
              let valid1 = false;
              let passing0 = null;
              const _errs3 = errors;
              if (typeof data0 !== 'string') {
                const err0 = {
                  instancePath: instancePath + '/text',
                  schemaPath: '#/properties/text/oneOf/0/type',
                  keyword: 'type',
                  params: { type: 'string' },
                  message: 'must be string'
                };
                if (vErrors === null) {
                  vErrors = [err0];
                } else {
                  vErrors.push(err0);
                }
                errors++;
              }
              var _valid0 = _errs3 === errors;
              if (_valid0) {
                valid1 = true;
                passing0 = 0;
              }
              const _errs5 = errors;
              if (errors === _errs5) {
                if (Array.isArray(data0)) {
                  if (data0.length > 100) {
                    const err1 = {
                      instancePath: instancePath + '/text',
                      schemaPath: '#/properties/text/oneOf/1/maxItems',
                      keyword: 'maxItems',
                      params: { limit: 100 },
                      message: 'must NOT have more than 100 items'
                    };
                    if (vErrors === null) {
                      vErrors = [err1];
                    } else {
                      vErrors.push(err1);
                    }
                    errors++;
                  } else {
                    var valid2 = true;
                    const len0 = data0.length;
                    for (let i0 = 0; i0 < len0; i0++) {
                      const _errs7 = errors;
                      if (typeof data0[i0] !== 'string') {
                        const err2 = {
                          instancePath: instancePath + '/text/' + i0,
                          schemaPath: '#/properties/text/oneOf/1/items/type',
                          keyword: 'type',
                          params: { type: 'string' },
                          message: 'must be string'
                        };
                        if (vErrors === null) {
                          vErrors = [err2];
                        } else {
                          vErrors.push(err2);
                        }
                        errors++;
                      }
                      var valid2 = _errs7 === errors;
                      if (!valid2) {
                        break;
                      }
                    }
                  }
                } else {
                  const err3 = {
                    instancePath: instancePath + '/text',
                    schemaPath: '#/properties/text/oneOf/1/type',
                    keyword: 'type',
                    params: { type: 'array' },
                    message: 'must be array'
                  };
                  if (vErrors === null) {
                    vErrors = [err3];
                  } else {
                    vErrors.push(err3);
                  }
                  errors++;
                }
              }
              var _valid0 = _errs5 === errors;
              if (_valid0 && valid1) {
                valid1 = false;
                passing0 = [passing0, 1];
              } else {
                if (_valid0) {
                  valid1 = true;
                  passing0 = 1;
                }
              }
              if (!valid1) {
                const err4 = {
                  instancePath: instancePath + '/text',
                  schemaPath: '#/properties/text/oneOf',
                  keyword: 'oneOf',
                  params: { passingSchemas: passing0 },
                  message: 'must match exactly one schema in oneOf'
                };
                if (vErrors === null) {
                  vErrors = [err4];
                } else {
                  vErrors.push(err4);
                }
                errors++;
                validate12.errors = vErrors;
                return false;
              } else {
                errors = _errs2;
                if (vErrors !== null) {
                  if (_errs2) {
                    vErrors.length = _errs2;
                  } else {
                    vErrors = null;
                  }
                }
              }
            }
          }
        } else {
          validate12.errors = [
            {
              instancePath,
              schemaPath: '#/type',
              keyword: 'type',
              params: { type: 'object' },
              message: 'must be object'
            }
          ];
          return false;
        }
      }
      validate12.errors = vErrors;
      return errors === 0;
    }
    exports['#/definitions/speech-recognition'] = validate13;
    function validate13(
      data,
      {
        instancePath = '',
        parentData,
        parentDataProperty,
        rootData = data
      } = {}
    ) {
      let vErrors = null;
      let errors = 0;
      const _errs0 = errors;
      let valid0 = false;
      let passing0 = null;
      const _errs1 = errors;
      if (errors === _errs1) {
        if (errors === _errs1) {
          if (!(typeof data === 'string')) {
            const err0 = {
              instancePath,
              schemaPath: '#/oneOf/0/type',
              keyword: 'type',
              params: { type: 'string' },
              message: 'must be string'
            };
            if (vErrors === null) {
              vErrors = [err0];
            } else {
              vErrors.push(err0);
            }
            errors++;
          }
        }
      }
      var _valid0 = _errs1 === errors;
      if (_valid0) {
        valid0 = true;
        passing0 = 0;
      }
      const _errs3 = errors;
      if (errors === _errs3) {
        if (data && typeof data == 'object' && !Array.isArray(data)) {
          if (data.audio !== void 0) {
            let data0 = data.audio;
            const _errs5 = errors;
            if (errors === _errs5) {
              if (Array.isArray(data0)) {
                var valid2 = true;
                const len0 = data0.length;
                for (let i0 = 0; i0 < len0; i0++) {
                  const _errs7 = errors;
                  if (!(typeof data0[i0] == 'number')) {
                    const err1 = {
                      instancePath: instancePath + '/audio/' + i0,
                      schemaPath: '#/oneOf/1/properties/audio/items/type',
                      keyword: 'type',
                      params: { type: 'number' },
                      message: 'must be number'
                    };
                    if (vErrors === null) {
                      vErrors = [err1];
                    } else {
                      vErrors.push(err1);
                    }
                    errors++;
                  }
                  var valid2 = _errs7 === errors;
                  if (!valid2) {
                    break;
                  }
                }
              } else {
                const err2 = {
                  instancePath: instancePath + '/audio',
                  schemaPath: '#/oneOf/1/properties/audio/type',
                  keyword: 'type',
                  params: { type: 'array' },
                  message: 'must be array'
                };
                if (vErrors === null) {
                  vErrors = [err2];
                } else {
                  vErrors.push(err2);
                }
                errors++;
              }
            }
          }
        } else {
          const err3 = {
            instancePath,
            schemaPath: '#/oneOf/1/type',
            keyword: 'type',
            params: { type: 'object' },
            message: 'must be object'
          };
          if (vErrors === null) {
            vErrors = [err3];
          } else {
            vErrors.push(err3);
          }
          errors++;
        }
      }
      var _valid0 = _errs3 === errors;
      if (_valid0 && valid0) {
        valid0 = false;
        passing0 = [passing0, 1];
      } else {
        if (_valid0) {
          valid0 = true;
          passing0 = 1;
        }
      }
      if (!valid0) {
        const err4 = {
          instancePath,
          schemaPath: '#/oneOf',
          keyword: 'oneOf',
          params: { passingSchemas: passing0 },
          message: 'must match exactly one schema in oneOf'
        };
        if (vErrors === null) {
          vErrors = [err4];
        } else {
          vErrors.push(err4);
        }
        errors++;
        validate13.errors = vErrors;
        return false;
      } else {
        errors = _errs0;
        if (vErrors !== null) {
          if (_errs0) {
            vErrors.length = _errs0;
          } else {
            vErrors = null;
          }
        }
      }
      validate13.errors = vErrors;
      return errors === 0;
    }
    exports['#/definitions/image-classification'] = validate14;
    function validate14(
      data,
      {
        instancePath = '',
        parentData,
        parentDataProperty,
        rootData = data
      } = {}
    ) {
      let vErrors = null;
      let errors = 0;
      const _errs0 = errors;
      let valid0 = false;
      let passing0 = null;
      const _errs1 = errors;
      if (errors === _errs1) {
        if (errors === _errs1) {
          if (!(typeof data === 'string')) {
            const err0 = {
              instancePath,
              schemaPath: '#/oneOf/0/type',
              keyword: 'type',
              params: { type: 'string' },
              message: 'must be string'
            };
            if (vErrors === null) {
              vErrors = [err0];
            } else {
              vErrors.push(err0);
            }
            errors++;
          }
        }
      }
      var _valid0 = _errs1 === errors;
      if (_valid0) {
        valid0 = true;
        passing0 = 0;
      }
      const _errs3 = errors;
      if (errors === _errs3) {
        if (data && typeof data == 'object' && !Array.isArray(data)) {
          if (data.image !== void 0) {
            let data0 = data.image;
            const _errs5 = errors;
            if (errors === _errs5) {
              if (Array.isArray(data0)) {
                var valid2 = true;
                const len0 = data0.length;
                for (let i0 = 0; i0 < len0; i0++) {
                  const _errs7 = errors;
                  if (!(typeof data0[i0] == 'number')) {
                    const err1 = {
                      instancePath: instancePath + '/image/' + i0,
                      schemaPath: '#/oneOf/1/properties/image/items/type',
                      keyword: 'type',
                      params: { type: 'number' },
                      message: 'must be number'
                    };
                    if (vErrors === null) {
                      vErrors = [err1];
                    } else {
                      vErrors.push(err1);
                    }
                    errors++;
                  }
                  var valid2 = _errs7 === errors;
                  if (!valid2) {
                    break;
                  }
                }
              } else {
                const err2 = {
                  instancePath: instancePath + '/image',
                  schemaPath: '#/oneOf/1/properties/image/type',
                  keyword: 'type',
                  params: { type: 'array' },
                  message: 'must be array'
                };
                if (vErrors === null) {
                  vErrors = [err2];
                } else {
                  vErrors.push(err2);
                }
                errors++;
              }
            }
          }
        } else {
          const err3 = {
            instancePath,
            schemaPath: '#/oneOf/1/type',
            keyword: 'type',
            params: { type: 'object' },
            message: 'must be object'
          };
          if (vErrors === null) {
            vErrors = [err3];
          } else {
            vErrors.push(err3);
          }
          errors++;
        }
      }
      var _valid0 = _errs3 === errors;
      if (_valid0 && valid0) {
        valid0 = false;
        passing0 = [passing0, 1];
      } else {
        if (_valid0) {
          valid0 = true;
          passing0 = 1;
        }
      }
      if (!valid0) {
        const err4 = {
          instancePath,
          schemaPath: '#/oneOf',
          keyword: 'oneOf',
          params: { passingSchemas: passing0 },
          message: 'must match exactly one schema in oneOf'
        };
        if (vErrors === null) {
          vErrors = [err4];
        } else {
          vErrors.push(err4);
        }
        errors++;
        validate14.errors = vErrors;
        return false;
      } else {
        errors = _errs0;
        if (vErrors !== null) {
          if (_errs0) {
            vErrors.length = _errs0;
          } else {
            vErrors = null;
          }
        }
      }
      validate14.errors = vErrors;
      return errors === 0;
    }
    exports['#/definitions/text-generation'] = validate15;
    var func2 = function ucs2length(str) {
      const len = str.length;
      let length = 0;
      let pos = 0;
      let value;
      while (pos < len) {
        length++;
        value = str.charCodeAt(pos++);
        if (value >= 55296 && value <= 56319 && pos < len) {
          value = str.charCodeAt(pos);
          if ((value & 64512) === 56320) pos++;
        }
      }
      return length;
    };
    function validate15(
      data,
      {
        instancePath = '',
        parentData,
        parentDataProperty,
        rootData = data
      } = {}
    ) {
      let vErrors = null;
      let errors = 0;
      if (!(data && typeof data == 'object' && !Array.isArray(data))) {
        validate15.errors = [
          {
            instancePath,
            schemaPath: '#/type',
            keyword: 'type',
            params: { type: 'object' },
            message: 'must be object'
          }
        ];
        return false;
      }
      const _errs1 = errors;
      let valid0 = false;
      let passing0 = null;
      const _errs2 = errors;
      if (data && typeof data == 'object' && !Array.isArray(data)) {
        let missing0;
        if (data.prompt === void 0 && (missing0 = 'prompt')) {
          const err0 = {
            instancePath,
            schemaPath: '#/oneOf/0/required',
            keyword: 'required',
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'"
          };
          if (vErrors === null) {
            vErrors = [err0];
          } else {
            vErrors.push(err0);
          }
          errors++;
        } else {
          if (data.prompt !== void 0) {
            let data0 = data.prompt;
            const _errs3 = errors;
            if (errors === _errs3) {
              if (typeof data0 === 'string') {
                if (func2(data0) > 4096) {
                  const err1 = {
                    instancePath: instancePath + '/prompt',
                    schemaPath: '#/oneOf/0/properties/prompt/maxLength',
                    keyword: 'maxLength',
                    params: { limit: 4096 },
                    message: 'must NOT have more than 4096 characters'
                  };
                  if (vErrors === null) {
                    vErrors = [err1];
                  } else {
                    vErrors.push(err1);
                  }
                  errors++;
                }
              } else {
                const err2 = {
                  instancePath: instancePath + '/prompt',
                  schemaPath: '#/oneOf/0/properties/prompt/type',
                  keyword: 'type',
                  params: { type: 'string' },
                  message: 'must be string'
                };
                if (vErrors === null) {
                  vErrors = [err2];
                } else {
                  vErrors.push(err2);
                }
                errors++;
              }
            }
            var valid1 = _errs3 === errors;
          } else {
            var valid1 = true;
          }
          if (valid1) {
            if (data.stream !== void 0) {
              const _errs5 = errors;
              if (typeof data.stream !== 'boolean') {
                const err3 = {
                  instancePath: instancePath + '/stream',
                  schemaPath: '#/oneOf/0/properties/stream/type',
                  keyword: 'type',
                  params: { type: 'boolean' },
                  message: 'must be boolean'
                };
                if (vErrors === null) {
                  vErrors = [err3];
                } else {
                  vErrors.push(err3);
                }
                errors++;
              }
              var valid1 = _errs5 === errors;
            } else {
              var valid1 = true;
            }
            if (valid1) {
              if (data.max_tokens !== void 0) {
                let data2 = data.max_tokens;
                const _errs7 = errors;
                if (
                  !(typeof data2 == 'number' && !(data2 % 1) && !isNaN(data2))
                ) {
                  const err4 = {
                    instancePath: instancePath + '/max_tokens',
                    schemaPath: '#/oneOf/0/properties/max_tokens/type',
                    keyword: 'type',
                    params: { type: 'integer' },
                    message: 'must be integer'
                  };
                  if (vErrors === null) {
                    vErrors = [err4];
                  } else {
                    vErrors.push(err4);
                  }
                  errors++;
                }
                var valid1 = _errs7 === errors;
              } else {
                var valid1 = true;
              }
            }
          }
        }
      }
      var _valid0 = _errs2 === errors;
      if (_valid0) {
        valid0 = true;
        passing0 = 0;
      }
      const _errs9 = errors;
      if (data && typeof data == 'object' && !Array.isArray(data)) {
        let missing1;
        if (data.messages === void 0 && (missing1 = 'messages')) {
          const err5 = {
            instancePath,
            schemaPath: '#/oneOf/1/required',
            keyword: 'required',
            params: { missingProperty: missing1 },
            message: "must have required property '" + missing1 + "'"
          };
          if (vErrors === null) {
            vErrors = [err5];
          } else {
            vErrors.push(err5);
          }
          errors++;
        } else {
          if (data.messages !== void 0) {
            let data3 = data.messages;
            const _errs10 = errors;
            if (errors === _errs10) {
              if (Array.isArray(data3)) {
                var valid3 = true;
                const len0 = data3.length;
                for (let i0 = 0; i0 < len0; i0++) {
                  let data4 = data3[i0];
                  const _errs12 = errors;
                  if (errors === _errs12) {
                    if (
                      data4 &&
                      typeof data4 == 'object' &&
                      !Array.isArray(data4)
                    ) {
                      let missing2;
                      if (
                        (data4.role === void 0 && (missing2 = 'role')) ||
                        (data4.content === void 0 && (missing2 = 'content'))
                      ) {
                        const err6 = {
                          instancePath: instancePath + '/messages/' + i0,
                          schemaPath:
                            '#/oneOf/1/properties/messages/items/required',
                          keyword: 'required',
                          params: { missingProperty: missing2 },
                          message:
                            "must have required property '" + missing2 + "'"
                        };
                        if (vErrors === null) {
                          vErrors = [err6];
                        } else {
                          vErrors.push(err6);
                        }
                        errors++;
                      } else {
                        if (data4.role !== void 0) {
                          const _errs14 = errors;
                          if (typeof data4.role !== 'string') {
                            const err7 = {
                              instancePath:
                                instancePath + '/messages/' + i0 + '/role',
                              schemaPath:
                                '#/oneOf/1/properties/messages/items/properties/role/type',
                              keyword: 'type',
                              params: { type: 'string' },
                              message: 'must be string'
                            };
                            if (vErrors === null) {
                              vErrors = [err7];
                            } else {
                              vErrors.push(err7);
                            }
                            errors++;
                          }
                          var valid4 = _errs14 === errors;
                        } else {
                          var valid4 = true;
                        }
                        if (valid4) {
                          if (data4.content !== void 0) {
                            let data6 = data4.content;
                            const _errs16 = errors;
                            if (errors === _errs16) {
                              if (typeof data6 === 'string') {
                                if (func2(data6) > 4096) {
                                  const err8 = {
                                    instancePath:
                                      instancePath +
                                      '/messages/' +
                                      i0 +
                                      '/content',
                                    schemaPath:
                                      '#/oneOf/1/properties/messages/items/properties/content/maxLength',
                                    keyword: 'maxLength',
                                    params: { limit: 4096 },
                                    message:
                                      'must NOT have more than 4096 characters'
                                  };
                                  if (vErrors === null) {
                                    vErrors = [err8];
                                  } else {
                                    vErrors.push(err8);
                                  }
                                  errors++;
                                }
                              } else {
                                const err9 = {
                                  instancePath:
                                    instancePath +
                                    '/messages/' +
                                    i0 +
                                    '/content',
                                  schemaPath:
                                    '#/oneOf/1/properties/messages/items/properties/content/type',
                                  keyword: 'type',
                                  params: { type: 'string' },
                                  message: 'must be string'
                                };
                                if (vErrors === null) {
                                  vErrors = [err9];
                                } else {
                                  vErrors.push(err9);
                                }
                                errors++;
                              }
                            }
                            var valid4 = _errs16 === errors;
                          } else {
                            var valid4 = true;
                          }
                        }
                      }
                    } else {
                      const err10 = {
                        instancePath: instancePath + '/messages/' + i0,
                        schemaPath: '#/oneOf/1/properties/messages/items/type',
                        keyword: 'type',
                        params: { type: 'object' },
                        message: 'must be object'
                      };
                      if (vErrors === null) {
                        vErrors = [err10];
                      } else {
                        vErrors.push(err10);
                      }
                      errors++;
                    }
                  }
                  var valid3 = _errs12 === errors;
                  if (!valid3) {
                    break;
                  }
                }
              } else {
                const err11 = {
                  instancePath: instancePath + '/messages',
                  schemaPath: '#/oneOf/1/properties/messages/type',
                  keyword: 'type',
                  params: { type: 'array' },
                  message: 'must be array'
                };
                if (vErrors === null) {
                  vErrors = [err11];
                } else {
                  vErrors.push(err11);
                }
                errors++;
              }
            }
            var valid2 = _errs10 === errors;
          } else {
            var valid2 = true;
          }
          if (valid2) {
            if (data.stream !== void 0) {
              const _errs18 = errors;
              if (typeof data.stream !== 'boolean') {
                const err12 = {
                  instancePath: instancePath + '/stream',
                  schemaPath: '#/oneOf/1/properties/stream/type',
                  keyword: 'type',
                  params: { type: 'boolean' },
                  message: 'must be boolean'
                };
                if (vErrors === null) {
                  vErrors = [err12];
                } else {
                  vErrors.push(err12);
                }
                errors++;
              }
              var valid2 = _errs18 === errors;
            } else {
              var valid2 = true;
            }
            if (valid2) {
              if (data.max_tokens !== void 0) {
                let data8 = data.max_tokens;
                const _errs20 = errors;
                if (
                  !(typeof data8 == 'number' && !(data8 % 1) && !isNaN(data8))
                ) {
                  const err13 = {
                    instancePath: instancePath + '/max_tokens',
                    schemaPath: '#/oneOf/1/properties/max_tokens/type',
                    keyword: 'type',
                    params: { type: 'integer' },
                    message: 'must be integer'
                  };
                  if (vErrors === null) {
                    vErrors = [err13];
                  } else {
                    vErrors.push(err13);
                  }
                  errors++;
                }
                var valid2 = _errs20 === errors;
              } else {
                var valid2 = true;
              }
            }
          }
        }
      }
      var _valid0 = _errs9 === errors;
      if (_valid0 && valid0) {
        valid0 = false;
        passing0 = [passing0, 1];
      } else {
        if (_valid0) {
          valid0 = true;
          passing0 = 1;
        }
      }
      if (!valid0) {
        const err14 = {
          instancePath,
          schemaPath: '#/oneOf',
          keyword: 'oneOf',
          params: { passingSchemas: passing0 },
          message: 'must match exactly one schema in oneOf'
        };
        if (vErrors === null) {
          vErrors = [err14];
        } else {
          vErrors.push(err14);
        }
        errors++;
        validate15.errors = vErrors;
        return false;
      } else {
        errors = _errs1;
        if (vErrors !== null) {
          if (_errs1) {
            vErrors.length = _errs1;
          } else {
            vErrors = null;
          }
        }
      }
      validate15.errors = vErrors;
      return errors === 0;
    }
    exports['#/definitions/translation'] = validate16;
    function validate16(
      data,
      {
        instancePath = '',
        parentData,
        parentDataProperty,
        rootData = data
      } = {}
    ) {
      let vErrors = null;
      let errors = 0;
      if (errors === 0) {
        if (data && typeof data == 'object' && !Array.isArray(data)) {
          if (data.source_lang === void 0) {
            data.source_lang = 'en';
          }
          let missing0;
          if (
            (data.text === void 0 && (missing0 = 'text')) ||
            (data.target_lang === void 0 && (missing0 = 'target_lang'))
          ) {
            validate16.errors = [
              {
                instancePath,
                schemaPath: '#/required',
                keyword: 'required',
                params: { missingProperty: missing0 },
                message: "must have required property '" + missing0 + "'"
              }
            ];
            return false;
          } else {
            if (data.text !== void 0) {
              const _errs1 = errors;
              if (typeof data.text !== 'string') {
                validate16.errors = [
                  {
                    instancePath: instancePath + '/text',
                    schemaPath: '#/properties/text/type',
                    keyword: 'type',
                    params: { type: 'string' },
                    message: 'must be string'
                  }
                ];
                return false;
              }
              var valid0 = _errs1 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              const _errs3 = errors;
              if (typeof data.source_lang !== 'string') {
                validate16.errors = [
                  {
                    instancePath: instancePath + '/source_lang',
                    schemaPath: '#/properties/source_lang/type',
                    keyword: 'type',
                    params: { type: 'string' },
                    message: 'must be string'
                  }
                ];
                return false;
              }
              var valid0 = _errs3 === errors;
              if (valid0) {
                if (data.target_lang !== void 0) {
                  const _errs5 = errors;
                  if (typeof data.target_lang !== 'string') {
                    validate16.errors = [
                      {
                        instancePath: instancePath + '/target_lang',
                        schemaPath: '#/properties/target_lang/type',
                        keyword: 'type',
                        params: { type: 'string' },
                        message: 'must be string'
                      }
                    ];
                    return false;
                  }
                  var valid0 = _errs5 === errors;
                } else {
                  var valid0 = true;
                }
              }
            }
          }
        } else {
          validate16.errors = [
            {
              instancePath,
              schemaPath: '#/type',
              keyword: 'type',
              params: { type: 'object' },
              message: 'must be object'
            }
          ];
          return false;
        }
      }
      validate16.errors = vErrors;
      return errors === 0;
    }
  }
});

// src/tensor.ts
var TensorType = /* @__PURE__ */ (TensorType2 => {
  TensorType2['String'] = 'str';
  TensorType2['Bool'] = 'bool';
  TensorType2['Float16'] = 'float16';
  TensorType2['Float32'] = 'float32';
  TensorType2['Int16'] = 'int16';
  TensorType2['Int32'] = 'int32';
  TensorType2['Int64'] = 'int64';
  TensorType2['Int8'] = 'int8';
  TensorType2['Uint16'] = 'uint16';
  TensorType2['Uint32'] = 'uint32';
  TensorType2['Uint64'] = 'uint64';
  TensorType2['Uint8'] = 'uint8';
  return TensorType2;
})(TensorType || {});
var TypedArrayProto = Object.getPrototypeOf(Uint8Array);
function isArray(value) {
  return Array.isArray(value) || value instanceof TypedArrayProto;
}
function arrLength(obj) {
  return obj instanceof TypedArrayProto
    ? obj.length
    : obj
        .flat(Infinity)
        .reduce(
          (acc, cur) => acc + (cur instanceof TypedArrayProto ? cur.length : 1),
          0
        );
}
function ensureShape(shape, value) {
  if (shape.length === 0 && !isArray(value)) {
    return;
  }
  const count = shape.reduce((acc, v) => {
    if (!Number.isInteger(v)) {
      throw new Error(
        `expected shape to be array-like of integers but found non-integer element "${v}"`
      );
    }
    return acc * v;
  }, 1);
  if (count != arrLength(value)) {
    throw new Error(
      `invalid shape: expected ${count} elements for shape ${shape} but value array has length ${value.length}`
    );
  }
}
function ensureType(type, value) {
  if (isArray(value)) {
    value.forEach(v => ensureType(type, v));
    return;
  }
  switch (type) {
    case 'bool' /* Bool */: {
      if (typeof value === 'boolean') {
        return;
      }
      break;
    }
    case 'float16' /* Float16 */:
    case 'float32' /* Float32 */: {
      if (typeof value === 'number') {
        return;
      }
      break;
    }
    case 'int8' /* Int8 */:
    case 'uint8' /* Uint8 */:
    case 'int16' /* Int16 */:
    case 'uint16' /* Uint16 */:
    case 'int32' /* Int32 */:
    case 'uint32' /* Uint32 */: {
      if (Number.isInteger(value)) {
        return;
      }
      break;
    }
    case 'int64' /* Int64 */:
    case 'uint64' /* Uint64 */: {
      if (typeof value === 'bigint') {
        return;
      }
      break;
    }
    case 'str' /* String */: {
      if (typeof value === 'string') {
        return;
      }
      break;
    }
  }
  throw new Error(`unexpected type "${type}" with value "${value}".`);
}
function serializeType(type, value) {
  if (isArray(value)) {
    return [...value].map(v => serializeType(type, v));
  }
  switch (type) {
    case 'str' /* String */:
    case 'bool' /* Bool */:
    case 'float16' /* Float16 */:
    case 'float32' /* Float32 */:
    case 'int8' /* Int8 */:
    case 'uint8' /* Uint8 */:
    case 'int16' /* Int16 */:
    case 'uint16' /* Uint16 */:
    case 'uint32' /* Uint32 */:
    case 'int32' /* Int32 */: {
      return value;
    }
    case 'int64' /* Int64 */:
    case 'uint64' /* Uint64 */: {
      return value.toString();
    }
  }
  throw new Error(`unexpected type "${type}" with value "${value}".`);
}
function deserializeType(type, value) {
  if (isArray(value)) {
    return value.map(v => deserializeType(type, v));
  }
  switch (type) {
    case 'str' /* String */:
    case 'bool' /* Bool */:
    case 'float16' /* Float16 */:
    case 'float32' /* Float32 */:
    case 'int8' /* Int8 */:
    case 'uint8' /* Uint8 */:
    case 'int16' /* Int16 */:
    case 'uint16' /* Uint16 */:
    case 'uint32' /* Uint32 */:
    case 'int32' /* Int32 */: {
      return value;
    }
    case 'int64' /* Int64 */:
    case 'uint64' /* Uint64 */: {
      return BigInt(value);
    }
  }
  throw new Error(`unexpected type "${type}" with value "${value}".`);
}
var Tensor = class _Tensor {
  constructor(type, value, opts = {}) {
    this.type = type;
    this.value = value;
    ensureType(type, this.value);
    if (opts.shape === void 0) {
      if (isArray(this.value)) {
        this.shape = [arrLength(value)];
      } else {
        this.shape = [];
      }
    } else {
      this.shape = opts.shape;
    }
    ensureShape(this.shape, this.value);
    this.name = opts.name || null;
  }
  static fromJSON(obj) {
    const { type, shape, value, b64Value, name } = obj;
    const opts = { shape, name };
    if (b64Value !== void 0) {
      const value2 = b64ToArray(b64Value, type)[0];
      return new _Tensor(type, value2, opts);
    } else {
      return new _Tensor(type, deserializeType(type, value), opts);
    }
  }
  toJSON() {
    return {
      type: this.type,
      shape: this.shape,
      name: this.name,
      value: serializeType(this.type, this.value)
    };
  }
};
function b64ToArray(base64, type) {
  const byteString = atob(base64);
  const bytes = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) {
    bytes[i] = byteString.charCodeAt(i);
  }
  const arrBuffer = new DataView(bytes.buffer).buffer;
  switch (type) {
    case 'float32':
      return new Float32Array(arrBuffer);
    case 'float64':
      return new Float64Array(arrBuffer);
    case 'int32':
      return new Int32Array(arrBuffer);
    case 'int64':
      return new BigInt64Array(arrBuffer);
    default:
      throw Error(`invalid data type for base64 input: ${type}`);
  }
}

// src/tools.ts
var Validators = __toESM(require_validators());

// src/tasks/text-generation.ts
var AiTextGeneration = class {
  constructor(inputs, modelSettings2) {
    // run ./scripts/gen-validators.ts if you change the schema
    this.schema = {
      input: {
        type: 'object',
        oneOf: [
          {
            properties: {
              prompt: {
                type: 'string',
                maxLength: 4096
              },
              stream: {
                type: 'boolean',
                default: false
              },
              max_tokens: {
                type: 'integer',
                default: 256
              }
            },
            required: ['prompt']
          },
          {
            properties: {
              messages: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    role: {
                      type: 'string'
                    },
                    content: {
                      type: 'string',
                      maxLength: 4096
                    }
                  },
                  required: ['role', 'content']
                }
              },
              stream: {
                type: 'boolean',
                default: false
              },
              max_tokens: {
                type: 'integer',
                default: 256
              }
            },
            required: ['messages']
          }
        ]
      },
      output: {
        oneOf: [
          {
            type: 'object',
            contentType: 'application/json',
            properties: {
              response: {
                type: 'string'
              }
            }
          },
          {
            type: 'string',
            contentType: 'text/event-stream',
            format: 'binary'
          }
        ]
      }
    };
    this.inputs = inputs;
    this.modelSettings = modelSettings2;
  }
  preProcessing() {
    if (this.inputs.stream && this.modelSettings.inputsDefaultsStream) {
      this.inputs = {
        ...this.modelSettings.inputsDefaultsStream,
        ...this.inputs
      };
    } else if (this.modelSettings.inputsDefaults) {
      this.inputs = { ...this.modelSettings.inputsDefaults, ...this.inputs };
    }
    let prompt = '';
    if (this.inputs.messages === void 0) {
      prompt = this.inputs.prompt;
    } else {
      if (this.modelSettings.preProcessingArgs.scopedPrompt) {
        const system = this.inputs.messages.map(m => m.role).indexOf('system');
        const user = this.inputs.messages.map(m => m.role).indexOf('user');
        const assistant = this.inputs.messages
          .map(m => m.role)
          .indexOf('assistant');
        const systemContent =
          system > -1 ? this.inputs.messages[system].content : '';
        const userContent = user > -1 ? this.inputs.messages[user].content : '';
        const assistantContent =
          assistant > -1 ? this.inputs.messages[assistant].content : '';
        prompt = this.modelSettings.preProcessingArgs.scopedPrompt
          .replace('$system', systemContent)
          .replace('$user', userContent)
          .replace('$assistant', assistantContent);
      }
    }
    this.preProcessedInputs = prompt;
  }
  generateTensors() {
    this.tensors = [
      new Tensor('str' /* String */, [this.preProcessedInputs], {
        shape: [1],
        name: 'INPUT_0'
      }),
      new Tensor('uint32' /* Uint32 */, [this.inputs.max_tokens], {
        // sequence length
        shape: [1],
        name: 'INPUT_1'
      })
    ];
  }
  postProcessing(response) {
    if (this.modelSettings.postProcessingFunc) {
      this.postProcessedOutputs = {
        response: this.modelSettings.postProcessingFunc(response)
      };
    } else {
      this.postProcessedOutputs = { response: response.name.value[0] };
    }
  }
  postProcessingStream(response) {
    if (this.modelSettings.postProcessingFuncStream) {
      return {
        response: this.modelSettings.postProcessingFuncStream(response)
      };
    } else {
      return { response: response.name.value[0] };
    }
  }
};

// src/tasks/text-classification.ts
var AiTextClassification = class {
  constructor(inputs, modelSettings2) {
    // run ./scripts/gen-validators.ts if you change the schema
    this.schema = {
      input: {
        type: 'object',
        properties: {
          text: {
            type: 'string'
          }
        },
        required: ['text']
      },
      output: {
        type: 'array',
        contentType: 'application/json',
        items: {
          type: 'object',
          properties: {
            score: {
              type: 'number'
            },
            label: {
              type: 'string'
            }
          }
        }
      }
    };
    this.inputs = inputs;
    this.modelSettings = modelSettings2;
  }
  preProcessing() {
    this.preProcessedInputs = this.inputs;
  }
  generateTensors() {
    this.tensors = [
      new Tensor('str' /* String */, [this.preProcessedInputs.text], {
        shape: [1],
        name: 'input_text'
      })
    ];
  }
  postProcessing(response) {
    this.postProcessedOutputs = [
      {
        label: 'NEGATIVE',
        score: response.logits.value[0][0]
      },
      {
        label: 'POSITIVE',
        score: response.logits.value[0][1]
      }
    ];
  }
};

// src/tasks/text-embeddings.ts
var AiTextEmbeddings = class {
  constructor(inputs, modelSettings2) {
    // run ./scripts/gen-validators.ts if you change the schema
    this.schema = {
      input: {
        type: 'object',
        properties: {
          text: {
            oneOf: [
              { type: 'string' },
              {
                type: 'array',
                items: {
                  type: 'string'
                },
                maxItems: 100
              }
            ]
          }
        },
        required: ['text']
      },
      output: {
        type: 'object',
        contentType: 'application/json',
        properties: {
          shape: {
            type: 'array',
            items: {
              type: 'number'
            }
          },
          data: {
            type: 'array',
            items: {
              type: 'array',
              items: {
                type: 'number'
              }
            }
          }
        }
      }
    };
    this.inputs = inputs;
    this.modelSettings = modelSettings2;
  }
  preProcessing() {
    this.preProcessedInputs = this.inputs;
  }
  generateTensors() {
    this.tensors = [
      new Tensor(
        'str' /* String */,
        Array.isArray(this.preProcessedInputs.text)
          ? this.preProcessedInputs.text
          : [this.preProcessedInputs.text],
        {
          shape: [
            Array.isArray(this.preProcessedInputs.text)
              ? this.preProcessedInputs.text.length
              : [this.preProcessedInputs.text].length
          ],
          name: 'input_text'
        }
      )
    ];
  }
  postProcessing(response) {
    this.postProcessedOutputs = {
      shape: response.embeddings.shape,
      data: response.embeddings.value
    };
  }
};

// src/tasks/translation.ts
var AiTranslation = class {
  constructor(inputs, modelSettings2) {
    // run ./scripts/gen-validators.ts if you change the schema
    this.schema = {
      input: {
        type: 'object',
        properties: {
          text: {
            type: 'string'
          },
          source_lang: {
            type: 'string',
            default: 'en'
          },
          target_lang: {
            type: 'string'
          }
        },
        required: ['text', 'target_lang']
      },
      output: {
        type: 'object',
        contentType: 'application/json',
        properties: {
          translated_text: {
            type: 'string'
          }
        }
      }
    };
    this.inputs = inputs;
    this.modelSettings = modelSettings2;
  }
  preProcessing() {
    this.preProcessedInputs = this.inputs;
  }
  generateTensors() {
    this.tensors = [
      new Tensor('str' /* String */, [this.preProcessedInputs.text], {
        shape: [1, 1],
        name: 'text'
      }),
      new Tensor(
        'str' /* String */,
        [this.preProcessedInputs.source_lang || 'en'],
        {
          shape: [1, 1],
          name: 'source_lang'
        }
      ),
      new Tensor('str' /* String */, [this.preProcessedInputs.target_lang], {
        shape: [1, 1],
        name: 'target_lang'
      })
    ];
  }
  postProcessing(response) {
    this.postProcessedOutputs = { translated_text: response.name.value[0] };
  }
};

// src/tasks/speech-recognition.ts
var AiSpeechRecognition = class {
  constructor(inputs, modelSettings2) {
    // run ./scripts/gen-validators.ts if you change the schema
    this.schema = {
      input: {
        oneOf: [
          { type: 'string', format: 'binary' },
          {
            type: 'object',
            properties: {
              audio: {
                type: 'array',
                items: {
                  type: 'number'
                }
              }
            }
          }
        ]
      },
      output: {
        type: 'object',
        contentType: 'application/json',
        properties: {
          text: {
            type: 'string'
          },
          word_count: {
            type: 'number'
          },
          words: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                word: {
                  type: 'string'
                },
                start: {
                  type: 'number'
                },
                end: {
                  type: 'number'
                }
              }
            }
          }
        },
        required: ['text']
      }
    };
    this.inputs = inputs;
    this.modelSettings = modelSettings2;
  }
  preProcessing() {
    this.preProcessedInputs = this.inputs;
  }
  generateTensors() {
    this.tensors = [
      new Tensor('uint8' /* Uint8 */, this.preProcessedInputs.audio, {
        shape: [1, this.preProcessedInputs.audio.length],
        name: 'audio'
      })
    ];
  }
  postProcessing(response) {
    if (this.modelSettings.postProcessingFunc) {
      this.postProcessedOutputs =
        this.modelSettings.postProcessingFunc(response);
    } else {
      this.postProcessedOutputs = { text: response.name.value[0].trim() };
    }
  }
};

// src/tasks/data/labels.ts
var resnetLabels = [
  'TENCH',
  'GOLDFISH',
  'WHITE SHARK',
  'TIGER SHARK',
  'HAMMERHEAD SHARK',
  'ELECTRIC RAY',
  'STINGRAY',
  'ROOSTER',
  'HEN',
  'OSTRICH',
  'BRAMBLING',
  'GOLDFINCH',
  'HOUSE FINCH',
  'SNOWBIRD',
  'INDIGO FINCH',
  'ROBIN',
  'BULBUL',
  'JAY',
  'MAGPIE',
  'CHICKADEE',
  'WATER OUZEL',
  'KITE',
  'BALD EAGLE',
  'VULTURE',
  'GREAT GREY OWL',
  'FIRE SALAMANDER',
  'NEWT',
  'EFT',
  'SPOTTED SALAMANDER',
  'AXOLOTL',
  'BULL FROG',
  'TREE FROG',
  'TAILED FROG',
  'LOGGERHEAD',
  'LEATHERBACK TURTLE',
  'MUD TURTLE',
  'TERRAPIN',
  'BOX TURTLE',
  'BANDED GECKO',
  'COMMON IGUANA',
  'AMERICAN CHAMELEON',
  'WHIPTAIL',
  'AGAMA',
  'FRILLED LIZARD',
  'ALLIGATOR LIZARD',
  'GILA MONSTER',
  'GREEN LIZARD',
  'AFRICAN CHAMELEON',
  'KOMODO DRAGON',
  'AFRICAN CROCODILE',
  'AMERICAN ALLIGATOR',
  'TRICERATOPS',
  'THUNDER SNAKE',
  'RINGNECK SNAKE',
  'HOGNOSE SNAKE',
  'GREEN SNAKE',
  'KING SNAKE',
  'GARTER SNAKE',
  'WATER SNAKE',
  'VINE SNAKE',
  'NIGHT SNAKE',
  'BOA',
  'ROCK PYTHON',
  'COBRA',
  'GREEN MAMBA',
  'SEA SNAKE',
  'HORNED VIPER',
  'DIAMONDBACK',
  'SIDEWINDER',
  'TRILOBITE',
  'HARVESTMAN',
  'SCORPION',
  'GARDEN SPIDER',
  'BARN SPIDER',
  'GARDEN SPIDER',
  'BLACK WIDOW',
  'TARANTULA',
  'WOLF SPIDER',
  'TICK',
  'CENTIPEDE',
  'GROUSE',
  'PTARMIGAN',
  'RUFFED GROUSE',
  'PRAIRIE CHICKEN',
  'PEACOCK',
  'QUAIL',
  'PARTRIDGE',
  'AFRICAN GREY',
  'MACAW',
  'COCKATOO',
  'LORIKEET',
  'COUCAL',
  'BEE EATER',
  'HORNBILL',
  'HUMMINGBIRD',
  'JACAMAR',
  'TOUCAN',
  'DRAKE',
  'MERGANSER',
  'GOOSE',
  'BLACK SWAN',
  'TUSKER',
  'ECHIDNA',
  'PLATYPUS',
  'WALLABY',
  'KOALA',
  'WOMBAT',
  'JELLYFISH',
  'SEA ANEMONE',
  'BRAIN CORAL',
  'FLATWORM',
  'NEMATODE',
  'CONCH',
  'SNAIL',
  'SLUG',
  'SEA SLUG',
  'CHITON',
  'CHAMBERED NAUTILUS',
  'DUNGENESS CRAB',
  'ROCK CRAB',
  'FIDDLER CRAB',
  'KING CRAB',
  'AMERICAN LOBSTER',
  'SPINY LOBSTER',
  'CRAYFISH',
  'HERMIT CRAB',
  'ISOPOD',
  'WHITE STORK',
  'BLACK STORK',
  'SPOONBILL',
  'FLAMINGO',
  'LITTLE BLUE HERON',
  'AMERICAN EGRET',
  'BITTERN',
  'CRANE',
  'LIMPKIN',
  'EUROPEAN GALLINULE',
  'AMERICAN COOT',
  'BUSTARD',
  'RUDDY TURNSTONE',
  'RED-BACKED SANDPIPER',
  'REDSHANK',
  'DOWITCHER',
  'OYSTERCATCHER',
  'PELICAN',
  'KING PENGUIN',
  'ALBATROSS',
  'GREY WHALE',
  'KILLER WHALE',
  'DUGONG',
  'SEA LION',
  'CHIHUAHUA',
  'JAPANESE SPANIEL',
  'MALTESE DOG',
  'PEKINESE',
  'SHIH-TZU',
  'BLENHEIM SPANIEL',
  'PAPILLON',
  'TOY TERRIER',
  'RHODESIAN RIDGEBACK',
  'AFGHAN HOUND',
  'BASSET',
  'BEAGLE',
  'BLOODHOUND',
  'BLUETICK',
  'COONHOUND',
  'WALKER HOUND',
  'ENGLISH FOXHOUND',
  'REDBONE',
  'BORZOI',
  'IRISH WOLFHOUND',
  'ITALIAN GREYHOUND',
  'WHIPPET',
  'IBIZAN HOUND',
  'NORWEGIAN ELKHOUND',
  'OTTERHOUND',
  'SALUKI',
  'SCOTTISH DEERHOUND',
  'WEIMARANER',
  'STAFFORDSHIRE BULLTERRIER',
  'STAFFORDSHIRE TERRIER',
  'BEDLINGTON TERRIER',
  'BORDER TERRIER',
  'KERRY BLUE TERRIER',
  'IRISH TERRIER',
  'NORFOLK TERRIER',
  'NORWICH TERRIER',
  'YORKSHIRE TERRIER',
  'WIRE-HAIRED FOX TERRIER',
  'LAKELAND TERRIER',
  'SEALYHAM TERRIER',
  'AIREDALE',
  'CAIRN',
  'AUSTRALIAN TERRIER',
  'DANDIE DINMONT',
  'BOSTON BULL',
  'MINIATURE SCHNAUZER',
  'GIANT SCHNAUZER',
  'STANDARD SCHNAUZER',
  'SCOTCH TERRIER',
  'TIBETAN TERRIER',
  'SILKY TERRIER',
  'WHEATEN TERRIER',
  'WHITE TERRIER',
  'LHASA',
  'RETRIEVER',
  'CURLY-COATED RETRIEVER',
  'GOLDEN RETRIEVER',
  'LABRADOR RETRIEVER',
  'CHESAPEAKE BAY RETRIEVER',
  'SHORT-HAIRED POINTER',
  'VISLA',
  'ENGLISH SETTER',
  'IRISH SETTER',
  'GORDON SETTER',
  'BRITTANY SPANIEL',
  'CLUMBER',
  'ENGLISH SPRINGER',
  'WELSH SPRINGER SPANIEL',
  'COCKER SPANIEL',
  'SUSSEX SPANIEL',
  'IRISH WATERSPANIEL',
  'KUVASZ',
  'SCHIPPERKE',
  'GROENENDAEL',
  'MALINOIS',
  'BRIARD',
  'KELPIE',
  'KOMONDOR',
  'OLD ENGLISH SHEEPDOG',
  'SHETLAND SHEEPDOG',
  'COLLIE',
  'BORDER COLLIE',
  'BOUVIER DES FLANDRES',
  'ROTTWEILER',
  'GERMAN SHEPHERD',
  'DOBERMAN',
  'MINIATURE PINSCHER',
  'GREATER SWISS MOUNTAIN DOG',
  'BERNESE MOUNTAIN DOG',
  'APPENZELLER',
  'ENTLEBUCHER',
  'BOXER',
  'BULL MASTIFF',
  'TIBETAN MASTIFF',
  'FRENCH BULLDOG',
  'GREAT DANE',
  'SAINT BERNARD',
  'ESKIMO DOG',
  'MALAMUTE',
  'SIBERIAN HUSKY',
  'DALMATIAN',
  'AFFENPINSCHER',
  'BASENJI',
  'PUG',
  'LEONBERG',
  'NEWFOUNDLAND',
  'GREAT PYRENEES',
  'SAMOYED',
  'POMERANIAN',
  'CHOW',
  'KEESHOND',
  'BRABANCON GRIFFON',
  'PEMBROKE',
  'CARDIGAN',
  'TOY POODLE',
  'MINIATURE POODLE',
  'STANDARD POODLE',
  'MEXICAN HAIRLESS',
  'TIMBER WOLF',
  'WHITE WOLF',
  'RED WOLF',
  'COYOTE',
  'DINGO',
  'DHOLE',
  'AFRICAN HUNTING DOG',
  'HYENA',
  'RED FOX',
  'KIT FOX',
  'ARCTIC FOX',
  'GREY FOX',
  'TABBY',
  'TIGER CAT',
  'PERSIAN CAT',
  'SIAMESE CAT',
  'EGYPTIAN CAT',
  'COUGAR',
  'LYNX',
  'LEOPARD',
  'SNOW LEOPARD',
  'JAGUAR',
  'LION',
  'TIGER',
  'CHEETAH',
  'BROWN BEAR',
  'AMERICAN BLACK BEAR',
  'ICE BEAR',
  'SLOTH BEAR',
  'MONGOOSE',
  'MEERKAT',
  'TIGER BEETLE',
  'LADYBUG',
  'GROUND BEETLE',
  'LONG-HORNED BEETLE',
  'LEAF BEETLE',
  'DUNG BEETLE',
  'RHINOCEROS BEETLE',
  'WEEVIL',
  'FLY',
  'BEE',
  'ANT',
  'GRASSHOPPER',
  'CRICKET',
  'WALKING STICK',
  'COCKROACH',
  'MANTIS',
  'CICADA',
  'LEAFHOPPER',
  'LACEWING',
  'DRAGONFLY',
  'DAMSELFLY',
  'ADMIRAL',
  'RINGLET',
  'MONARCH',
  'CABBAGE BUTTERFLY',
  'SULPHUR BUTTERFLY',
  'LYCAENID',
  'STARFISH',
  'SEA URCHIN',
  'SEA CUCUMBER',
  'WOOD RABBIT',
  'HARE',
  'ANGORA',
  'HAMSTER',
  'PORCUPINE',
  'FOX SQUIRREL',
  'MARMOT',
  'BEAVER',
  'GUINEA PIG',
  'SORREL',
  'ZEBRA',
  'HOG',
  'WILD BOAR',
  'WARTHOG',
  'HIPPOPOTAMUS',
  'OX',
  'WATER BUFFALO',
  'BISON',
  'RAM',
  'BIGHORN',
  'IBEX',
  'HARTEBEEST',
  'IMPALA',
  'GAZELLE',
  'ARABIAN CAMEL',
  'LLAMA',
  'WEASEL',
  'MINK',
  'POLECAT',
  'BLACK-FOOTED FERRET',
  'OTTER',
  'SKUNK',
  'BADGER',
  'ARMADILLO',
  'THREE-TOED SLOTH',
  'ORANGUTAN',
  'GORILLA',
  'CHIMPANZEE',
  'GIBBON',
  'SIAMANG',
  'GUENON',
  'PATAS',
  'BABOON',
  'MACAQUE',
  'LANGUR',
  'COLOBUS',
  'PROBOSCIS MONKEY',
  'MARMOSET',
  'CAPUCHIN',
  'HOWLER MONKEY',
  'TITI',
  'SPIDER MONKEY',
  'SQUIRREL MONKEY',
  'MADAGASCAR CAT',
  'INDRI',
  'INDIAN ELEPHANT',
  'AFRICAN ELEPHANT',
  'LESSER PANDA',
  'GIANT PANDA',
  'BARRACOUTA',
  'EEL',
  'COHO',
  'ROCK BEAUTY',
  'ANEMONE FISH',
  'STURGEON',
  'GAR',
  'LIONFISH',
  'PUFFER',
  'ABACUS',
  'ABAYA',
  'ACADEMIC GOWN',
  'ACCORDION',
  'ACOUSTIC GUITAR',
  'AIRCRAFT CARRIER',
  'AIRLINER',
  'AIRSHIP',
  'ALTAR',
  'AMBULANCE',
  'AMPHIBIAN',
  'ANALOG CLOCK',
  'APIARY',
  'APRON',
  'ASHCAN',
  'ASSAULT RIFLE',
  'BACKPACK',
  'BAKERY',
  'BALANCE BEAM',
  'BALLOON',
  'BALLPOINT',
  'BAND AID',
  'BANJO',
  'BANNISTER',
  'BARBELL',
  'BARBER CHAIR',
  'BARBERSHOP',
  'BARN',
  'BAROMETER',
  'BARREL',
  'BARROW',
  'BASEBALL',
  'BASKETBALL',
  'BASSINET',
  'BASSOON',
  'BATHING CAP',
  'BATH TOWEL',
  'BATHTUB',
  'BEACH WAGON',
  'BEACON',
  'BEAKER',
  'BEARSKIN',
  'BEER BOTTLE',
  'BEER GLASS',
  'BELL COTE',
  'BIB',
  'BICYCLE-BUILT-FOR-TWO',
  'BIKINI',
  'BINDER',
  'BINOCULARS',
  'BIRDHOUSE',
  'BOATHOUSE',
  'BOBSLED',
  'BOLO TIE',
  'BONNET',
  'BOOKCASE',
  'BOOKSHOP',
  'BOTTLECAP',
  'BOW',
  'BOW TIE',
  'BRASS',
  'BRASSIERE',
  'BREAKWATER',
  'BREASTPLATE',
  'BROOM',
  'BUCKET',
  'BUCKLE',
  'BULLETPROOF VEST',
  'BULLET TRAIN',
  'BUTCHER SHOP',
  'CAB',
  'CALDRON',
  'CANDLE',
  'CANNON',
  'CANOE',
  'CAN OPENER',
  'CARDIGAN',
  'CAR MIRROR',
  'CAROUSEL',
  'CARPENTERS KIT',
  'CARTON',
  'CAR WHEEL',
  'CASH MACHINE',
  'CASSETTE',
  'CASSETTE PLAYER',
  'CASTLE',
  'CATAMARAN',
  'CD PLAYER',
  'CELLO',
  'CELLULAR TELEPHONE',
  'CHAIN',
  'CHAINLINK FENCE',
  'CHAIN MAIL',
  'CHAIN SAW',
  'CHEST',
  'CHIFFONIER',
  'CHIME',
  'CHINA CABINET',
  'CHRISTMAS STOCKING',
  'CHURCH',
  'CINEMA',
  'CLEAVER',
  'CLIFF DWELLING',
  'CLOAK',
  'CLOG',
  'COCKTAIL SHAKER',
  'COFFEE MUG',
  'COFFEEPOT',
  'COIL',
  'COMBINATION LOCK',
  'COMPUTER KEYBOARD',
  'CONFECTIONERY',
  'CONTAINER SHIP',
  'CONVERTIBLE',
  'CORKSCREW',
  'CORNET',
  'COWBOY BOOT',
  'COWBOY HAT',
  'CRADLE',
  'CRANE',
  'CRASH HELMET',
  'CRATE',
  'CRIB',
  'CROCK POT',
  'CROQUET BALL',
  'CRUTCH',
  'CUIRASS',
  'DAM',
  'DESK',
  'DESKTOP COMPUTER',
  'DIAL TELEPHONE',
  'DIAPER',
  'DIGITAL CLOCK',
  'DIGITAL WATCH',
  'DINING TABLE',
  'DISHRAG',
  'DISHWASHER',
  'DISK BRAKE',
  'DOCK',
  'DOGSLED',
  'DOME',
  'DOORMAT',
  'DRILLING PLATFORM',
  'DRUM',
  'DRUMSTICK',
  'DUMBBELL',
  'DUTCH OVEN',
  'ELECTRIC FAN',
  'ELECTRIC GUITAR',
  'ELECTRIC LOCOMOTIVE',
  'ENTERTAINMENT CENTER',
  'ENVELOPE',
  'ESPRESSO MAKER',
  'FACE POWDER',
  'FEATHER BOA',
  'FILE',
  'FIREBOAT',
  'FIRE ENGINE',
  'FIRE SCREEN',
  'FLAGPOLE',
  'FLUTE',
  'FOLDING CHAIR',
  'FOOTBALL HELMET',
  'FORKLIFT',
  'FOUNTAIN',
  'FOUNTAIN PEN',
  'FOUR-POSTER',
  'FREIGHT CAR',
  'FRENCH HORN',
  'FRYING PAN',
  'FUR COAT',
  'GARBAGE TRUCK',
  'GASMASK',
  'GAS PUMP',
  'GOBLET',
  'GO-KART',
  'GOLF BALL',
  'GOLFCART',
  'GONDOLA',
  'GONG',
  'GOWN',
  'GRAND PIANO',
  'GREENHOUSE',
  'GRILLE',
  'GROCERY STORE',
  'GUILLOTINE',
  'HAIR SLIDE',
  'HAIR SPRAY',
  'HALF TRACK',
  'HAMMER',
  'HAMPER',
  'HAND BLOWER',
  'HAND-HELD COMPUTER',
  'HANDKERCHIEF',
  'HARD DISC',
  'HARMONICA',
  'HARP',
  'HARVESTER',
  'HATCHET',
  'HOLSTER',
  'HOME THEATER',
  'HONEYCOMB',
  'HOOK',
  'HOOPSKIRT',
  'HORIZONTAL BAR',
  'HORSE CART',
  'HOURGLASS',
  'IPOD',
  'IRON',
  'JACK-O-LANTERN',
  'JEAN',
  'JEEP',
  'JERSEY',
  'JIGSAW PUZZLE',
  'JINRIKISHA',
  'JOYSTICK',
  'KIMONO',
  'KNEE PAD',
  'KNOT',
  'LAB COAT',
  'LADLE',
  'LAMPSHADE',
  'LAPTOP',
  'LAWN MOWER',
  'LENS CAP',
  'LETTER OPENER',
  'LIBRARY',
  'LIFEBOAT',
  'LIGHTER',
  'LIMOUSINE',
  'LINER',
  'LIPSTICK',
  'LOAFER',
  'LOTION',
  'LOUDSPEAKER',
  'LOUPE',
  'LUMBERMILL',
  'MAGNETIC COMPASS',
  'MAILBAG',
  'MAILBOX',
  'MAILLOT',
  'MAILLOT',
  'MANHOLE COVER',
  'MARACA',
  'MARIMBA',
  'MASK',
  'MATCHSTICK',
  'MAYPOLE',
  'MAZE',
  'MEASURING CUP',
  'MEDICINE CHEST',
  'MEGALITH',
  'MICROPHONE',
  'MICROWAVE',
  'MILITARY UNIFORM',
  'MILK CAN',
  'MINIBUS',
  'MINISKIRT',
  'MINIVAN',
  'MISSILE',
  'MITTEN',
  'MIXING BOWL',
  'MOBILE HOME',
  'MODEL T',
  'MODEM',
  'MONASTERY',
  'MONITOR',
  'MOPED',
  'MORTAR',
  'MORTARBOARD',
  'MOSQUE',
  'MOSQUITO NET',
  'MOTOR SCOOTER',
  'MOUNTAIN BIKE',
  'MOUNTAIN TENT',
  'MOUSE',
  'MOUSETRAP',
  'MOVING VAN',
  'MUZZLE',
  'NAIL',
  'NECK BRACE',
  'NECKLACE',
  'NIPPLE',
  'NOTEBOOK',
  'OBELISK',
  'OBOE',
  'OCARINA',
  'ODOMETER',
  'OIL FILTER',
  'ORGAN',
  'OSCILLOSCOPE',
  'OVERSKIRT',
  'OXCART',
  'OXYGEN MASK',
  'PACKET',
  'PADDLE',
  'PADDLEWHEEL',
  'PADLOCK',
  'PAINTBRUSH',
  'PAJAMA',
  'PALACE',
  'PANPIPE',
  'PAPER TOWEL',
  'PARACHUTE',
  'PARALLEL BARS',
  'PARK BENCH',
  'PARKING METER',
  'PASSENGER CAR',
  'PATIO',
  'PAY-PHONE',
  'PEDESTAL',
  'PENCIL BOX',
  'PENCIL SHARPENER',
  'PERFUME',
  'PETRI DISH',
  'PHOTOCOPIER',
  'PICK',
  'PICKELHAUBE',
  'PICKET FENCE',
  'PICKUP',
  'PIER',
  'PIGGY BANK',
  'PILL BOTTLE',
  'PILLOW',
  'PING-PONG BALL',
  'PINWHEEL',
  'PIRATE',
  'PITCHER',
  'PLANE',
  'PLANETARIUM',
  'PLASTIC BAG',
  'PLATE RACK',
  'PLOW',
  'PLUNGER',
  'POLAROID CAMERA',
  'POLE',
  'POLICE VAN',
  'PONCHO',
  'POOL TABLE',
  'POP BOTTLE',
  'POT',
  'POTTERS WHEEL',
  'POWER DRILL',
  'PRAYER RUG',
  'PRINTER',
  'PRISON',
  'PROJECTILE',
  'PROJECTOR',
  'PUCK',
  'PUNCHING BAG',
  'PURSE',
  'QUILL',
  'QUILT',
  'RACER',
  'RACKET',
  'RADIATOR',
  'RADIO',
  'RADIO TELESCOPE',
  'RAIN BARREL',
  'RECREATIONAL VEHICLE',
  'REEL',
  'REFLEX CAMERA',
  'REFRIGERATOR',
  'REMOTE CONTROL',
  'RESTAURANT',
  'REVOLVER',
  'RIFLE',
  'ROCKING CHAIR',
  'ROTISSERIE',
  'RUBBER ERASER',
  'RUGBY BALL',
  'RULE',
  'RUNNING SHOE',
  'SAFE',
  'SAFETY PIN',
  'SALTSHAKER',
  'SANDAL',
  'SARONG',
  'SAX',
  'SCABBARD',
  'SCALE',
  'SCHOOL BUS',
  'SCHOONER',
  'SCOREBOARD',
  'SCREEN',
  'SCREW',
  'SCREWDRIVER',
  'SEAT BELT',
  'SEWING MACHINE',
  'SHIELD',
  'SHOE SHOP',
  'SHOJI',
  'SHOPPING BASKET',
  'SHOPPING CART',
  'SHOVEL',
  'SHOWER CAP',
  'SHOWER CURTAIN',
  'SKI',
  'SKI MASK',
  'SLEEPING BAG',
  'SLIDE RULE',
  'SLIDING DOOR',
  'SLOT',
  'SNORKEL',
  'SNOWMOBILE',
  'SNOWPLOW',
  'SOAP DISPENSER',
  'SOCCER BALL',
  'SOCK',
  'SOLAR DISH',
  'SOMBRERO',
  'SOUP BOWL',
  'SPACE BAR',
  'SPACE HEATER',
  'SPACE SHUTTLE',
  'SPATULA',
  'SPEEDBOAT',
  'SPIDER WEB',
  'SPINDLE',
  'SPORTS CAR',
  'SPOTLIGHT',
  'STAGE',
  'STEAM LOCOMOTIVE',
  'STEEL ARCH BRIDGE',
  'STEEL DRUM',
  'STETHOSCOPE',
  'STOLE',
  'STONE WALL',
  'STOPWATCH',
  'STOVE',
  'STRAINER',
  'STREETCAR',
  'STRETCHER',
  'STUDIO COUCH',
  'STUPA',
  'SUBMARINE',
  'SUIT',
  'SUNDIAL',
  'SUNGLASS',
  'SUNGLASSES',
  'SUNSCREEN',
  'SUSPENSION BRIDGE',
  'SWAB',
  'SWEATSHIRT',
  'SWIMMING TRUNKS',
  'SWING',
  'SWITCH',
  'SYRINGE',
  'TABLE LAMP',
  'TANK',
  'TAPE PLAYER',
  'TEAPOT',
  'TEDDY',
  'TELEVISION',
  'TENNIS BALL',
  'THATCH',
  'THEATER CURTAIN',
  'THIMBLE',
  'THRESHER',
  'THRONE',
  'TILE ROOF',
  'TOASTER',
  'TOBACCO SHOP',
  'TOILET SEAT',
  'TORCH',
  'TOTEM POLE',
  'TOW TRUCK',
  'TOYSHOP',
  'TRACTOR',
  'TRAILER TRUCK',
  'TRAY',
  'TRENCH COAT',
  'TRICYCLE',
  'TRIMARAN',
  'TRIPOD',
  'TRIUMPHAL ARCH',
  'TROLLEYBUS',
  'TROMBONE',
  'TUB',
  'TURNSTILE',
  'TYPEWRITER KEYBOARD',
  'UMBRELLA',
  'UNICYCLE',
  'UPRIGHT',
  'VACUUM',
  'VASE',
  'VAULT',
  'VELVET',
  'VENDING MACHINE',
  'VESTMENT',
  'VIADUCT',
  'VIOLIN',
  'VOLLEYBALL',
  'WAFFLE IRON',
  'WALL CLOCK',
  'WALLET',
  'WARDROBE',
  'WARPLANE',
  'WASHBASIN',
  'WASHER',
  'WATER BOTTLE',
  'WATER JUG',
  'WATER TOWER',
  'WHISKEY JUG',
  'WHISTLE',
  'WIG',
  'WINDOW SCREEN',
  'WINDOW SHADE',
  'WINDSOR TIE',
  'WINE BOTTLE',
  'WING',
  'WOK',
  'WOODEN SPOON',
  'WOOL',
  'WORM FENCE',
  'WRECK',
  'YAWL',
  'YURT',
  'WEB SITE',
  'COMIC BOOK',
  'CROSSWORD PUZZLE',
  'STREET SIGN',
  'TRAFFIC LIGHT',
  'BOOK JACKET',
  'MENU',
  'PLATE',
  'GUACAMOLE',
  'CONSOMME',
  'HOT POT',
  'TRIFLE',
  'ICE CREAM',
  'ICE LOLLY',
  'FRENCH LOAF',
  'BAGEL',
  'PRETZEL',
  'CHEESEBURGER',
  'HOTDOG',
  'MASHED POTATO',
  'HEAD CABBAGE',
  'BROCCOLI',
  'CAULIFLOWER',
  'ZUCCHINI',
  'SPAGHETTI SQUASH',
  'ACORN SQUASH',
  'BUTTERNUT SQUASH',
  'CUCUMBER',
  'ARTICHOKE',
  'BELL PEPPER',
  'CARDOON',
  'MUSHROOM',
  'GRANNY SMITH',
  'STRAWBERRY',
  'ORANGE',
  'LEMON',
  'FIG',
  'PINEAPPLE',
  'BANANA',
  'JACKFRUIT',
  'CUSTARD APPLE',
  'POMEGRANATE',
  'HAY',
  'CARBONARA',
  'CHOCOLATE SAUCE',
  'DOUGH',
  'MEAT LOAF',
  'PIZZA',
  'POTPIE',
  'BURRITO',
  'RED WINE',
  'ESPRESSO',
  'CUP',
  'EGGNOG',
  'ALP',
  'BUBBLE',
  'CLIFF',
  'CORAL REEF',
  'GEYSER',
  'LAKESIDE',
  'PROMONTORY',
  'SANDBAR',
  'SEASHORE',
  'VALLEY',
  'VOLCANO',
  'BALLPLAYER',
  'GROOM',
  'SCUBA DIVER',
  'RAPESEED',
  'DAISY',
  'LADY SLIPPER',
  'CORN',
  'ACORN',
  'HIP',
  'BUCKEYE',
  'CORAL FUNGUS',
  'AGARIC',
  'GYROMITRA',
  'STINKHORN',
  'EARTHSTAR',
  'HEN-OF-THE-WOODS',
  'BOLETE',
  'EAR',
  'TOILET TISSUE'
];

// src/tasks/image-classification.ts
var AiImageClassification = class {
  constructor(inputs, modelSettings2) {
    // run ./scripts/gen-validators.ts if you change the schema
    this.schema = {
      input: {
        oneOf: [
          { type: 'string', format: 'binary' },
          {
            type: 'object',
            properties: {
              image: {
                type: 'array',
                items: {
                  type: 'number'
                }
              }
            }
          }
        ]
      },
      output: {
        type: 'array',
        contentType: 'application/json',
        items: {
          type: 'object',
          properties: {
            score: {
              type: 'number'
            },
            label: {
              type: 'string'
            }
          }
        }
      }
    };
    this.inputs = inputs;
    this.modelSettings = modelSettings2;
  }
  preProcessing() {
    this.preProcessedInputs = this.inputs;
  }
  generateTensors() {
    this.tensors = [
      new Tensor('uint8' /* Uint8 */, this.preProcessedInputs.image, {
        shape: [1, this.preProcessedInputs.image.length],
        name: 'input'
      })
    ];
  }
  postProcessing(response) {
    const labels = [];
    const scores = response.output.value[0];
    for (var s in scores)
      labels.push({ label: resnetLabels[s], score: scores[s] });
    labels.sort((a, b) => {
      return b.score - a.score;
    });
    this.postProcessedOutputs = labels.slice(0, 5);
  }
};

// src/tasks/text-to-image.ts
var AiTextToImage = class {
  constructor(inputs, modelSettings2) {
    // run ./scripts/gen-validators.ts if you change the schema
    this.schema = {
      input: {
        type: 'object',
        properties: {
          prompt: {
            type: 'string'
          },
          num_steps: {
            type: 'integer',
            default: 20,
            maximum: 20
          }
        },
        required: ['prompt']
      },
      output: {
        type: 'string',
        contentType: 'image/png',
        format: 'binary'
      }
    };
    this.inputs = inputs;
    this.modelSettings = modelSettings2;
  }
  preProcessing() {
    this.preProcessedInputs = this.inputs;
  }
  generateTensors() {
    this.tensors = [
      new Tensor('str' /* String */, [this.preProcessedInputs.prompt], {
        shape: [1],
        name: 'input_text'
      }),
      new Tensor('int32' /* Int32 */, [this.preProcessedInputs.num_steps], {
        shape: [1],
        name: 'num_steps'
      })
    ];
  }
  postProcessing(response) {
    this.postProcessedOutputs = new Uint8Array(response.output_image.value);
  }
};

// src/catalog.ts
var modelMappings = {
  'text-classification': {
    models: ['@cf/huggingface/distilbert-sst-2-int8'],
    class: AiTextClassification,
    id: '19606750-23ed-4371-aab2-c20349b53a60'
  },
  'text-to-image': {
    models: ['@cf/stabilityai/stable-diffusion-xl-base-1.0'],
    class: AiTextToImage,
    id: '3d6e1f35-341b-4915-a6c8-9a7142a9033a'
  },
  'text-embeddings': {
    models: [
      '@cf/baai/bge-small-en-v1.5',
      '@cf/baai/bge-base-en-v1.5',
      '@cf/baai/bge-large-en-v1.5'
    ],
    class: AiTextEmbeddings,
    id: '0137cdcf-162a-4108-94f2-1ca59e8c65ee'
  },
  'speech-recognition': {
    models: ['@cf/openai/whisper', '@cf/openai/whisper-pipeline'],
    class: AiSpeechRecognition,
    id: 'dfce1c48-2a81-462e-a7fd-de97ce985207'
  },
  'image-classification': {
    models: ['@cf/microsoft/resnet-50'],
    class: AiImageClassification,
    id: '00cd182b-bf30-4fc4-8481-84a3ab349657'
  },
  'text-generation': {
    models: [
      '@cf/meta/llama-2-7b-chat-int8',
      '@cf/mistral/mistral-7b-instruct-v0.1',
      '@cf/meta/llama-2-7b-chat-fp16',
      '@hf/thebloke/llama-2-13b-chat-awq',
      '@hf/thebloke/zephyr-7b-beta-awq',
      '@hf/thebloke/mistral-7b-instruct-v0.1-awq',
      '@hf/thebloke/codellama-7b-instruct-awq'
    ],
    class: AiTextGeneration,
    id: 'c329a1f9-323d-4e91-b2aa-582dd4188d34'
  },
  translation: {
    models: ['@cf/meta/m2m100-1.2b'],
    class: AiTranslation,
    id: 'f57d07cb-9087-487a-bbbf-bc3e17fecc4b'
  }
};
var modelSettings = {
  '@cf/stabilityai/stable-diffusion-xl-base-1.0': {
    route: 'stable-diffusion-xl-base-1-0'
  },
  '@hf/thebloke/llama-2-13b-chat-awq': {
    route: 'thebloke-llama-2-13b-chat-awq',
    experimental: true,
    inputsDefaultsStream: {
      max_tokens: 596
    },
    inputsDefaults: {
      max_tokens: 256
    },
    preProcessingArgs: {
      scopedPrompt: '[INST]<<SYS>>$system<</SYS>>[/INST]\n[INST]$user[/INST]'
    },
    postProcessingFunc: response => {
      return response['generated_text'].value[0];
    },
    postProcessingFuncStream: response => {
      return response['generated_text'].value[0];
    }
  },
  '@hf/thebloke/zephyr-7b-beta-awq': {
    route: 'thebloke-zephyr-7b-beta-awq',
    experimental: true,
    inputsDefaultsStream: {
      max_tokens: 596
    },
    inputsDefaults: {
      max_tokens: 256
    },
    preProcessingArgs: {
      scopedPrompt: '<|system|>\n</s>\n<|user|>\n{$user}</s>\n<|assistant|>'
    },
    postProcessingFunc: response => {
      return response['generated_text'].value[0];
    },
    postProcessingFuncStream: response => {
      return response['generated_text'].value[0];
    }
  },
  '@hf/thebloke/mistral-7b-instruct-v0.1-awq': {
    route: 'thebloke-mistral-7b-instruct-v0-1-awq',
    experimental: true,
    inputsDefaultsStream: {
      max_tokens: 596
    },
    inputsDefaults: {
      max_tokens: 256
    },
    preProcessingArgs: {
      scopedPrompt: '<s>[INST]$system[/INST]</s>\n[INST]$user[/INST]'
    },
    postProcessingFunc: response => {
      return response['generated_text'].value[0];
    },
    postProcessingFuncStream: response => {
      return response['generated_text'].value[0];
    }
  },
  '@hf/thebloke/codellama-7b-instruct-awq': {
    route: 'thebloke-codellama-7b-instruct-awq',
    inputsDefaultsStream: {
      max_tokens: 596
    },
    inputsDefaults: {
      max_tokens: 256
    },
    preProcessingArgs: {
      scopedPrompt: '[INST]$system:\n$user\n[/INST]'
    },
    postProcessingFunc: response => {
      return response['generated_text'].value[0];
    },
    postProcessingFuncStream: response => {
      return response['generated_text'].value[0];
    }
  },
  '@cf/meta/llama-2-7b-chat-fp16': {
    route: 'llama-2-7b-chat-fp16',
    inputsDefaultsStream: {
      max_tokens: 2500
    },
    inputsDefaults: {
      max_tokens: 256
    },
    preProcessingArgs: {
      scopedPrompt: '[INST]<<SYS>>$system<</SYS>>[/INST]\n[INST]$user[/INST]'
    }
  },
  '@cf/meta/llama-2-7b-chat-int8': {
    route: 'llama_2_7b_chat_int8',
    inputsDefaultsStream: {
      max_tokens: 1800
    },
    inputsDefaults: {
      max_tokens: 256
    },
    preProcessingArgs: {
      scopedPrompt: '[INST]<<SYS>>$system<</SYS>>[/INST]\n[INST]$user[/INST]'
    }
  },
  '@cf/openai/whisper-pipeline': {
    experimental: true,
    postProcessingFunc: response => {
      return {
        text: response['name'].value.join('').trim(),
        word_count: parseInt(response['word_count'].value),
        words: response['name'].value.map((w, i) => {
          return {
            word: w.trim(),
            start: response['timestamps'].value[0][i][0],
            end: response['timestamps'].value[0][i][1]
          };
        })
      };
    }
  },
  '@cf/mistral/mistral-7b-instruct-v0.1': {
    route: 'mistral-7b-instruct-v0-1',
    inputsDefaultsStream: {
      max_tokens: 1800
    },
    inputsDefaults: {
      max_tokens: 256
    },
    preProcessingArgs: {
      scopedPrompt: '<s>[INST]$system[/INST]</s>\n[INST]$user[/INST]'
    }
  }
};
var addModel = (task, model, settings) => {
  modelMappings[task].models.push(model);
  modelSettings[model] = settings;
};

// src/tools.ts
var debugLog = (dd, what, args) => {
  if (dd) {
    console.log(`\x1B[1m${what}`);
    if (args[0] !== false) {
      if (typeof args == 'object' || Array.isArray(args)) {
        const json = JSON.stringify(args);
        console.log(json.length > 512 ? `${json.substring(0, 512)}...` : json);
      } else {
        console.log(args);
      }
    }
  }
};
var validateInput = (schemaId, inputs) => {
  const valid = Validators[`#/definitions/${schemaId}`](inputs);
  if (!valid) {
    throw Validators[`#/definitions/${schemaId}`].errors
      .map(e => e.message)
      .join(',');
  }
};
var getModelSettings = (model, key) => {
  const models = Object.keys(modelSettings);
  for (var m in models) {
    if (models[m] == model) {
      return key ? modelSettings[models[m]][key] : modelSettings[models[m]];
    }
  }
  return false;
};
var EventSourceParserStream = class extends TransformStream {
  constructor() {
    let parser;
    super({
      start(controller) {
        parser = createParser(event => {
          if (event.type === 'event') {
            controller.enqueue(event);
          }
        });
      },
      transform(chunk) {
        parser.feed(chunk);
      }
    });
  }
};
var BOM = [239, 187, 191];
function hasBom(buffer) {
  return BOM.every((charCode, index) => buffer.charCodeAt(index) === charCode);
}
function createParser(onParse) {
  let isFirstChunk;
  let buffer;
  let startingPosition;
  let startingFieldLength;
  let eventId;
  let eventName;
  let data;
  reset();
  return { feed, reset };
  function reset() {
    isFirstChunk = true;
    buffer = '';
    startingPosition = 0;
    startingFieldLength = -1;
    eventId = void 0;
    eventName = void 0;
    data = '';
  }
  function feed(chunk) {
    buffer = buffer ? buffer + chunk : chunk;
    if (isFirstChunk && hasBom(buffer)) {
      buffer = buffer.slice(BOM.length);
    }
    isFirstChunk = false;
    const length = buffer.length;
    let position = 0;
    let discardTrailingNewline = false;
    while (position < length) {
      if (discardTrailingNewline) {
        if (buffer[position] === '\n') {
          ++position;
        }
        discardTrailingNewline = false;
      }
      let lineLength = -1;
      let fieldLength = startingFieldLength;
      let character;
      for (
        let index = startingPosition;
        lineLength < 0 && index < length;
        ++index
      ) {
        character = buffer[index];
        if (character === ':' && fieldLength < 0) {
          fieldLength = index - position;
        } else if (character === '\r') {
          discardTrailingNewline = true;
          lineLength = index - position;
        } else if (character === '\n') {
          lineLength = index - position;
        }
      }
      if (lineLength < 0) {
        startingPosition = length - position;
        startingFieldLength = fieldLength;
        break;
      } else {
        startingPosition = 0;
        startingFieldLength = -1;
      }
      parseEventStreamLine(buffer, position, fieldLength, lineLength);
      position += lineLength + 1;
    }
    if (position === length) {
      buffer = '';
    } else if (position > 0) {
      buffer = buffer.slice(position);
    }
  }
  function parseEventStreamLine(lineBuffer, index, fieldLength, lineLength) {
    if (lineLength === 0) {
      if (data.length > 0) {
        onParse({
          type: 'event',
          id: eventId,
          event: eventName || void 0,
          data: data.slice(0, -1)
          // remove trailing newline
        });
        data = '';
        eventId = void 0;
      }
      eventName = void 0;
      return;
    }
    const noValue = fieldLength < 0;
    const field = lineBuffer.slice(
      index,
      index + (noValue ? lineLength : fieldLength)
    );
    let step = 0;
    if (noValue) {
      step = lineLength;
    } else if (lineBuffer[index + fieldLength + 1] === ' ') {
      step = fieldLength + 2;
    } else {
      step = fieldLength + 1;
    }
    const position = index + step;
    const valueLength = lineLength - step;
    const value = lineBuffer.slice(position, position + valueLength).toString();
    if (field === 'data') {
      data += value
        ? `${value}
`
        : '\n';
    } else if (field === 'event') {
      eventName = value;
    } else if (field === 'id' && !value.includes('\0')) {
      eventId = value;
    } else if (field === 'retry') {
      const retry = parseInt(value, 10);
      if (!Number.isNaN(retry)) {
        onParse({ type: 'reconnect-interval', value: retry });
      }
    }
  }
}
var ResultStream = class extends TransformStream {
  constructor() {
    super({
      transform(chunk, controller) {
        if (chunk.data === '[DONE]') {
          return;
        }
        try {
          const data = JSON.parse(chunk.data);
          controller.enqueue(data);
        } catch (err) {
          console.error(
            `failed to parse incoming data (${err.stack}): ${chunk.data}`
          );
          return;
        }
      }
    });
  }
};
var getEventStream = body => {
  const { readable, writable } = new TransformStream();
  const eventStream = (body ?? new ReadableStream())
    .pipeThrough(new TextDecoderStream())
    .pipeThrough(new EventSourceParserStream())
    .pipeThrough(new ResultStream());
  const reader = eventStream.getReader();
  const writer = writable.getWriter();
  const encoder = new TextEncoder();
  const write = async data => {
    await writer.write(encoder.encode(data));
  };
  return {
    readable,
    reader,
    writer,
    write
  };
};

// src/session.ts
function parseInputs(inputs) {
  if (Array.isArray(inputs)) {
    return inputs.map(input => input.toJSON());
  }
  if (inputs !== null && typeof inputs === 'object') {
    return Object.keys(inputs).map(key => {
      let tensor = inputs[key].toJSON();
      tensor.name = key;
      return tensor;
    });
  }
  throw new Error(`invalid inputs, must be Array<Tensor<any>> | TensorsObject`);
}
function tensorByName(result) {
  const outputByName = {};
  for (let i = 0, len = result.length; i < len; i++) {
    const tensor = Tensor.fromJSON(result[i]);
    const name = tensor.name || 'output' + i;
    outputByName[name] = tensor;
  }
  return outputByName;
}
var InferenceUpstreamError = class extends Error {
  constructor(message, httpCode) {
    super(message);
    this.name = 'InferenceUpstreamError';
    this.httpCode = httpCode;
  }
};
var InferenceSession = class {
  constructor(binding, model, options = {}) {
    this.binding = binding;
    this.model = model;
    this.options = options;
  }
  async run(inputs, options) {
    const jsonInputs = parseInputs(inputs);
    const inferRequest = {
      input: jsonInputs,
      stream: false
    };
    if (options?.stream) {
      inferRequest.stream = options?.stream;
    }
    const body = JSON.stringify(inferRequest);
    const compressedReadableStream = new Response(body).body.pipeThrough(
      new CompressionStream('gzip')
    );
    const res = await this.binding.fetch('http://ai.cloudflare.com/run', {
      method: 'POST',
      body: compressedReadableStream,
      headers: {
        ...(this.options?.extraHeaders || {}),
        'content-encoding': 'gzip',
        'cf-consn-sdk-version': '1.0.34',
        'cf-consn-model-id': this.model,
        'cf-consn-routing-model':
          getModelSettings(this.model, 'route') || 'default'
      }
    });
    if (!res.ok) {
      throw new InferenceUpstreamError(await res.text(), res.status);
    }
    if (!options?.stream) {
      const { result } = await res.json();
      return tensorByName(result);
    } else {
      const { readable, reader, writer, write } = getEventStream(res.body);
      const waitUntil = this.options.ctx?.waitUntil
        ? f => this.options.ctx.waitUntil(f())
        : f => f();
      waitUntil(async () => {
        try {
          for (;;) {
            const { done, value } = await reader.read();
            if (done) {
              await write('data: [DONE]\n\n');
              break;
            }
            const output = tensorByName(value.result);
            debugLog(this.options.debug, 'stream response', output);
            await write(
              `data: ${JSON.stringify(
                options.postProcessing ? options.postProcessing(output) : output
              )}

`
            );
          }
        } catch (e) {
          console.error(e.stack);
          await write('an unknown error occurred while streaming');
        }
        await writer.close();
      });
      return readable;
    }
  }
};

// src/ai.ts
var Ai = class {
  constructor(binding, options = {}) {
    this.binding = binding;
    this.options = options;
  }
  addModel(task, model, settings) {
    addModel(task, model, settings);
  }
  async run(model, inputs) {
    const tasks = Object.keys(modelMappings);
    for (var t in tasks) {
      if (modelMappings[tasks[t]].models.indexOf(model) !== -1) {
        const settings = getModelSettings(model);
        this.task = new modelMappings[tasks[t]].class(inputs, settings);
        validateInput(tasks[t], inputs);
        debugLog(this.options.debug, 'input', inputs);
        this.task.preProcessing();
        debugLog(this.options.debug, 'pre-processed input', inputs);
        this.task.generateTensors();
        debugLog(this.options.debug, 'input tensors', this.task.tensors);
        const sessionOptions = this.options.sessionOptions || {};
        const session = new InferenceSession(this.binding, model, {
          ...{ debug: this.options.debug ? true : false },
          ...sessionOptions
        });
        if (inputs.stream) {
          debugLog(this.options.debug, 'streaming', false);
          return await session.run(this.task.tensors, {
            stream: true,
            postProcessing: r => {
              return this.task.postProcessingStream(r);
            }
          });
        } else {
          const response = await session.run(this.task.tensors);
          debugLog(this.options.debug, 'response', response);
          this.task.postProcessing(response, sessionOptions.ctx);
          debugLog(
            this.options.debug,
            'post-processed response',
            this.task.postProcessedOutputs
          );
          return this.task.postProcessedOutputs;
        }
      }
    }
    throw new Error(`No such model ${model} or task`);
  }
};
export {
  Ai,
  InferenceSession,
  Tensor,
  TensorType,
  addModel,
  modelMappings,
  modelSettings
};
