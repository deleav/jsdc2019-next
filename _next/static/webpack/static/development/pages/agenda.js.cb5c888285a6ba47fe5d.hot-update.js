webpackHotUpdate("static/development/pages/agenda.js",{

/***/ "./module/agenda/shared/AgendaRow.js":
/*!*******************************************!*\
  !*** ./module/agenda/shared/AgendaRow.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AgendaRow; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2-react-content */ "./node_modules/sweetalert2-react-content/dist/sweetalert2-react-content.umd.js");
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_speaker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../data/speaker */ "./data/speaker.js");
/* harmony import */ var _AgendaModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AgendaModal */ "./module/agenda/shared/AgendaModal.js");
/* harmony import */ var _data_languages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../data/languages */ "./data/languages.js");

var _jsxFileName = "/Users/DMOON/SideProject/jsdc2019-next/module/agenda/shared/AgendaRow.js";


function _templateObject10() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex: 1;\n  font-size: 20px;\n  font-family: 'Oswald', sans-serif;\n  letter-spacing: 1.5px;\n  font-weight: 100;\n  line-height: 30px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 8px 0px 2px;\n  font-size: 18px;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  line-height: 27px;\n  text-decoration-line: underline;\n  cursor: pointer;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-color: #5bc0de;\n  font-size:12px;\n  margin-left: 5px;\n  font-weight: bold;\n  width: auto;\n  color: #fff;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ", ";\n  border-radius: 5px;\n  color: black;\n  height: 25px;\n  width: 25px;\n  padding: 3px 7px;\n  margin: 10px 0px;\n  font-size: 12px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 20px;\n  font-weight: 100;\n  line-height: 30px;\n  letter-spacing: 1.5px;\n  font-family: Oswald, sans-serif;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex: 8;\n  font-size: 18px;\n  line-height: 27px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex: 2;\n  font-size: 18px;\n  line-height: 23px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex: 1;\n  align-items: center;\n  padding: 25px 1%;\n  border-bottom: 1px solid #fff;\n  font-weight: 500;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var speakers = _data_speaker__WEBPACK_IMPORTED_MODULE_5__["default"].speakers;
var SweetAlert = sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_4___default()(sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a);

var showModal = function showModal(_ref) {
  var image = _ref.image,
      name = _ref.name,
      agenda = _ref.agenda;
  console.log('showModal', image, name, agenda);
  return function () {
    return SweetAlert.fire({
      title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AgendaModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
        image: "/static/images/speaker/".concat(image),
        name: name,
        subject: agenda.title,
        outline: agenda.outline,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }),
      showCloseButton: true,
      showConfirmButton: false,
      showCancelButton: false
    });
  };
};

function AgendaRow(props) {
  var agenda = props.agenda,
      time = props.time;
  var event = agenda.all;
  var agenda101 = agenda['101'];
  if (agenda101) agenda101.speakerInfo = speakers[agenda101.speaker];
  var agenda102 = agenda['102'];
  if (agenda102) agenda102.speakerInfo = speakers[agenda102.speaker];
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TimeColumn, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, time), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubjectColumn, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, event && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(EventColumn, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, event.name), agenda101 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubjectBox, {
    speaker: agenda101.speakerInfo.name,
    subject: agenda101.name,
    language: _data_languages__WEBPACK_IMPORTED_MODULE_7__["default"][agenda101.speakerInfo.agenda.lang],
    showModal: showModal(agenda101.speakerInfo),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), agenda102 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubjectBox, {
    speaker: agenda102.speakerInfo.name,
    subject: agenda102.name,
    language: _data_languages__WEBPACK_IMPORTED_MODULE_7__["default"][agenda102.speakerInfo.agenda.lang],
    showModal: showModal(agenda102.speakerInfo),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })));
}

var SubjectBox = function SubjectBox(props) {
  var speaker = props.speaker,
      subject = props.subject,
      language = props.language,
      slide = props.slide;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubjectContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Speaker, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, speaker), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LanguageTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, language), slide && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    target: "_blank",
    href: slide,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SlideTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Slide"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Subject, {
    onClick: props.showModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, subject));
};

var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var TimeColumn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
var SubjectColumn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3());
var SubjectContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject4());
var Speaker = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span(_templateObject5());
var Row = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject6());
var LanguageTag = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject7(), function (props) {
  return props.theme.colors.primary;
});
var SlideTag = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(LanguageTag)(_templateObject8());
var Subject = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a(_templateObject9());
var EventColumn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject10());

/***/ })

})
//# sourceMappingURL=agenda.js.cb5c888285a6ba47fe5d.hot-update.js.map