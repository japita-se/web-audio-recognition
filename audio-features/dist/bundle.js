/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
var KissFFT = __webpack_require__(10);
var DCT = __webpack_require__(6);
var SR = 44100;
var melFilterbank = null;
var context = null;
var AudioUtils = /** @class */ (function () {
    function AudioUtils() {
    }
    AudioUtils.loadExampleBuffer = function () {
        return AudioUtils.loadBuffer('assets/spoken_command_example.wav');
    };
    AudioUtils.loadSineBuffer = function () {
        return AudioUtils.loadBuffer('assets/sine_100ms_example.wav');
    };
    AudioUtils.loadBuffer = function (url) {
        if (!context) {
            context = new AudioContext();
        }
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            // Load an example of speech being spoken.
            xhr.open('GET', url);
            xhr.onload = function () {
                context.decodeAudioData(xhr.response, function (buffer) {
                    resolve(buffer);
                });
            };
            xhr.responseType = 'arraybuffer';
            xhr.onerror = function (err) { return reject(err); };
            xhr.send();
        });
    };
    AudioUtils.loadBufferOffline = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var offlineCtx;
            return __generator(this, function (_a) {
                offlineCtx = new OfflineAudioContext(1, 16000, 16000);
                return [2 /*return*/, fetch(url).then(function (body) { return body.arrayBuffer(); })
                        .then(function (buffer) { return offlineCtx.decodeAudioData(buffer); })];
            });
        });
    };
    /**
     * Calculates the FFT for an array buffer. Output is an array.
     */
    AudioUtils.fft = function (y) {
        var fftr = new KissFFT.FFTR(y.length);
        var transform = fftr.forward(y);
        fftr.dispose();
        return transform;
    };
    AudioUtils.dct = function (y) {
        return DCT(y);
    };
    /**
     * Calculates the STFT, given a fft size, and a hop size. For example, if fft
     * size is 2048 and hop size is 1024, there will be 50% overlap. Given those
     * params, if the input sample has 4096 values, there would be 3 analysis
     * frames: [0, 2048], [1024, 3072], [2048, 4096].
     */
    AudioUtils.stft = function (y, fftSize, hopSize) {
        if (fftSize === void 0) { fftSize = 2048; }
        if (hopSize === void 0) { hopSize = fftSize; }
        // Split the input buffer into sub-buffers of size fftSize.
        var bufferCount = Math.floor((y.length - fftSize) / hopSize) + 1;
        var matrix = range(bufferCount).map(function (x) { return new Float32Array(fftSize); });
        for (var i = 0; i < bufferCount; i++) {
            var ind = i * hopSize;
            var buffer = y.slice(ind, ind + fftSize);
            // In the end, we will likely have an incomplete buffer, which we should
            // just ignore.
            if (buffer.length != fftSize) {
                continue;
            }
            var win = AudioUtils.hannWindow(buffer.length);
            var winBuffer = AudioUtils.applyWindow(buffer, win);
            var fft = AudioUtils.fft(winBuffer);
            // TODO: Understand why fft output is 2 larger than expected (eg. 1026
            // rather than 1024).
            matrix[i].set(fft.slice(0, fftSize));
        }
        return matrix;
    };
    /**
     * Given STFT energies, calculates the mel spectrogram.
     */
    AudioUtils.melSpectrogram = function (stftEnergies, melCount, lowHz, highHz, sr) {
        if (melCount === void 0) { melCount = 20; }
        if (lowHz === void 0) { lowHz = 300; }
        if (highHz === void 0) { highHz = 8000; }
        if (sr === void 0) { sr = SR; }
        this.lazyCreateMelFilterbank(stftEnergies[0].length, melCount, lowHz, highHz, sr);
        // For each fft slice, calculate the corresponding mel values.
        var out = [];
        for (var i = 0; i < stftEnergies.length; i++) {
            out[i] = AudioUtils.applyFilterbank(stftEnergies[i], melFilterbank);
        }
        return out;
    };
    /**
     * Given STFT energies, calculates the MFCC spectrogram.
     */
    AudioUtils.mfccSpectrogram = function (stftEnergies, melCount) {
        if (melCount === void 0) { melCount = 20; }
        // For each fft slice, calculate the corresponding MFCC values.
        var out = [];
        for (var i = 0; i < stftEnergies.length; i++) {
            out[i] = this.mfcc(stftEnergies[i], melCount);
        }
        return out;
    };
    AudioUtils.lazyCreateMelFilterbank = function (length, melCount, lowHz, highHz, sr) {
        if (melCount === void 0) { melCount = 20; }
        if (lowHz === void 0) { lowHz = 300; }
        if (highHz === void 0) { highHz = 8000; }
        if (sr === void 0) { sr = SR; }
        // Lazy-create a Mel filterbank.
        if (!melFilterbank || melFilterbank.length != length) {
            melFilterbank = this.createMelFilterbank(length, melCount, lowHz, highHz, sr);
        }
    };
    /**
     * Given an interlaced complex array (y_i is real, y_(i+1) is imaginary),
     * calculates the magnitudes. Output is half the size.
     */
    AudioUtils.fftMags = function (y) {
        var out = new Float32Array(y.length / 2);
        for (var i = 0; i < y.length / 2; i++) {
            out[i] = Math.hypot(y[i * 2], y[i * 2 + 1]);
        }
        return out;
    };
    /**
     * Given an interlaced complex array (y_i is real, y_(i+1) is imaginary),
     * calculates the energies. Output is half the size.
     */
    AudioUtils.fftEnergies = function (y) {
        var out = new Float32Array(y.length / 2);
        for (var i = 0; i < y.length / 2; i++) {
            out[i] = y[i * 2] * y[i * 2] + y[i * 2 + 1] * y[i * 2 + 1];
        }
        return out;
    };
    /**
     * Generates a Hann window of a given length.
     */
    AudioUtils.hannWindow = function (length) {
        var win = new Float32Array(length);
        for (var i = 0; i < length; i++) {
            win[i] = 0.5 * (1 - Math.cos(2 * Math.PI * i / (length - 1)));
        }
        return win;
    };
    /**
     * Applies a window to a buffer (point-wise multiplication).
     */
    AudioUtils.applyWindow = function (buffer, win) {
        if (buffer.length != win.length) {
            console.error("Buffer length " + buffer.length + " != window length\n        " + win.length + ".");
            return;
        }
        var out = new Float32Array(buffer.length);
        for (var i = 0; i < buffer.length; i++) {
            out[i] = win[i] * buffer[i];
        }
        return out;
    };
    AudioUtils.pointWiseMultiply = function (out, array1, array2) {
        if (out.length != array1.length || array1.length != array2.length) {
            console.error("Output length " + out.length + " != array1 length\n        " + array1.length + " != array2 length " + array2.length + ".");
            return;
        }
        for (var i = 0; i < out.length; i++) {
            out[i] = array1[i] * array2[i];
        }
        return out;
    };
    AudioUtils.createMelFilterbank = function (fftSize, melCount, lowHz, highHz, sr) {
        var _this = this;
        if (melCount === void 0) { melCount = 20; }
        if (lowHz === void 0) { lowHz = 300; }
        if (highHz === void 0) { highHz = 8000; }
        if (sr === void 0) { sr = SR; }
        var lowMel = this.hzToMel(lowHz);
        var highMel = this.hzToMel(highHz);
        // Construct linearly spaced array of melCount intervals, between lowMel and
        // highMel.
        var mels = linearSpace(lowMel, highMel, melCount + 2);
        // Convert from mels to hz.
        var hzs = mels.map(function (mel) { return _this.melToHz(mel); });
        // Go from hz to the corresponding bin in the FFT.
        var bins = hzs.map(function (hz) { return _this.freqToBin(hz, fftSize); });
        // Now that we have the start and end frequencies, create each triangular
        // window (each value in [0, 1]) that we will apply to an FFT later. These
        // are mostly sparse, except for the values of the triangle
        var length = bins.length - 2;
        var filters = [];
        for (var i = 0; i < length; i++) {
            // Now generate the triangles themselves.
            filters[i] = this.triangleWindow(fftSize, bins[i], bins[i + 1], bins[i + 2]);
        }
        return filters;
    };
    /**
     * Given an array of FFT magnitudes, apply a filterbank. Output should be an
     * array with size |filterbank|.
     */
    AudioUtils.applyFilterbank = function (fftEnergies, filterbank) {
        if (fftEnergies.length != filterbank[0].length) {
            console.error("Each entry in filterbank should have dimensions matching\n        FFT. |FFT| = " + fftEnergies.length + ", |filterbank[0]| = " + filterbank[0].length + ".");
            return;
        }
        // Apply each filter to the whole FFT signal to get one value.
        var out = new Float32Array(filterbank.length);
        for (var i = 0; i < filterbank.length; i++) {
            // To calculate filterbank energies we multiply each filterbank with the
            // power spectrum.
            var win = AudioUtils.applyWindow(fftEnergies, filterbank[i]);
            // Then add up the coefficents, and take the log.
            out[i] = logGtZero(sum(win));
        }
        return out;
    };
    AudioUtils.hzToMel = function (hz) {
        return 1125 * Math.log(1 + hz / 700);
    };
    AudioUtils.melToHz = function (mel) {
        return 700 * (Math.exp(mel / 1125) - 1);
    };
    AudioUtils.freqToBin = function (freq, fftSize, sr) {
        if (sr === void 0) { sr = SR; }
        return Math.floor((fftSize + 1) * freq / (sr / 2));
    };
    /**
     * Creates a triangular window.
     */
    AudioUtils.triangleWindow = function (length, startIndex, peakIndex, endIndex) {
        var win = new Float32Array(length);
        var deltaUp = 1.0 / (peakIndex - startIndex);
        for (var i = startIndex; i < peakIndex; i++) {
            // Linear ramp up between start and peak index (values from 0 to 1).
            win[i] = (i - startIndex) * deltaUp;
        }
        var deltaDown = 1.0 / (endIndex - peakIndex);
        for (var i = peakIndex; i < endIndex; i++) {
            // Linear ramp down between peak and end index (values from 1 to 0).
            win[i] = 1 - (i - peakIndex) * deltaDown;
        }
        return win;
    };
    AudioUtils.cepstrumFromEnergySpectrum = function (melEnergies) {
        return this.dct(melEnergies);
    };
    /**
     * Calculate MFC coefficients from FFT energies.
     */
    AudioUtils.mfcc = function (fftEnergies, melCount, lowHz, highHz, sr) {
        if (melCount === void 0) { melCount = 20; }
        if (lowHz === void 0) { lowHz = 300; }
        if (highHz === void 0) { highHz = 8000; }
        if (sr === void 0) { sr = SR; }
        this.lazyCreateMelFilterbank(fftEnergies.length, melCount, lowHz, highHz, sr);
        // Apply the mel filterbank to the FFT magnitudes.
        var melEnergies = this.applyFilterbank(fftEnergies, melFilterbank);
        // Go from mel coefficients to MFCC.
        return this.cepstrumFromEnergySpectrum(melEnergies);
    };
    AudioUtils.normalizeSpecInPlace = function (spec, normMin, normMax) {
        if (normMin === void 0) { normMin = 0; }
        if (normMax === void 0) { normMax = 1; }
        var min = Infinity;
        var max = -Infinity;
        var times = spec.length;
        var freqs = spec[0].length;
        for (var i = 0; i < times; i++) {
            for (var j = 0; j < freqs; j++) {
                var val = spec[i][j];
                if (val < min) {
                    min = val;
                }
                if (val > max) {
                    max = val;
                }
            }
        }
        var scale = (normMax - normMin) / (max - min);
        var offset = normMin - min;
        for (var i = 0; i < times; i++) {
            for (var j = 0; j < freqs; j++) {
                // Get a normalized value in [0, 1].
                var norm = (spec[i][j] - min) / (max - min);
                // Then convert it to the desired range.
                spec[i][j] = normMin + norm * (normMax - normMin);
            }
        }
    };
    AudioUtils.playbackArrayBuffer = function (buffer, sampleRate) {
        if (!context) {
            context = new AudioContext();
        }
        if (!sampleRate) {
            sampleRate = context.sampleRate;
        }
        var audioBuffer = context.createBuffer(1, buffer.length, sampleRate);
        var audioBufferData = audioBuffer.getChannelData(0);
        audioBufferData.set(buffer);
        var source = context.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(context.destination);
        source.start();
    };
    return AudioUtils;
}());
exports.default = AudioUtils;
function linearSpace(start, end, count) {
    var delta = (end - start) / (count + 1);
    var out = [];
    for (var i = 0; i < count; i++) {
        out[i] = start + delta * i;
    }
    return out;
}
function sum(array) {
    return array.reduce(function (a, b) { return a + b; });
}
function range(count) {
    var out = [];
    for (var i = 0; i < count; i++) {
        out.push(i);
    }
    return out;
}
// Use a lower minimum value for energy.
var MIN_VAL = -10;
function logGtZero(val) {
    // Ensure that the log argument is nonnegative.
    var offset = Math.exp(MIN_VAL);
    return Math.log(val + offset);
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var sr = 44100;
var nyquist = sr / 2;
function plotAudio(y, layout) {
    var t = y.map(function (value, index) { return (index / sr); });
    return plotXY(t, y, layout);
}
exports.plotAudio = plotAudio;
function plotCoeffs(y, layout) {
    var ind = y.map(function (value, index) { return index; });
    return plotXY(ind, y, layout);
}
exports.plotCoeffs = plotCoeffs;
function plotFFT(fftMags, layout) {
    // Convert magnitudes to dB.
    var dbs = fftMags.map(function (val) { return 20 * Math.log10(val); });
    var times = fftMags.map(function (value, index) { return index / fftMags.length * nyquist; });
    return plotXY(times, fftMags, layout);
}
exports.plotFFT = plotFFT;
function plotFilterbank(filterbank, layout) {
    var filter = filterbank[0];
    var inds = filter.map(function (value, index) { return index; });
    return plotXYs(inds, filterbank, layout, 8000);
}
exports.plotFilterbank = plotFilterbank;
function plotSpectrogram(spec, samplesPerSlice, layout) {
    // The STFT as given is an Float32Array[]. We need to render that matrix as an
    // image.
    return plotImage(spec, samplesPerSlice, layout);
}
exports.plotSpectrogram = plotSpectrogram;
function downloadSpectrogramImage(spec) {
    // Render the spectrogram into a 2D canvas.
    var canvas = document.createElement('canvas');
    var times = spec.length;
    var freqs = spec[0].length;
    canvas.width = times;
    canvas.height = freqs;
    var ctx = canvas.getContext('2d');
    for (var i = 0; i < times; i++) {
        for (var j = 0; j < freqs; j++) {
            var val = Math.floor(spec[i][j] * 255);
            ctx.fillStyle = "rgb(" + val + ", " + val + ", " + val + ")";
            ctx.strokeStyle = null;
            ctx.fillRect(i, j, 1, 1);
        }
    }
    // Download the canvas.
    var link = document.createElement('a');
    link.setAttribute('download', 'spec.png');
    link.setAttribute('href', canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream'));
    link.click();
}
exports.downloadSpectrogramImage = downloadSpectrogramImage;
function plotImage(stft, samplesPerSlice, layout) {
    var out = document.createElement('div');
    out.className = 'plot';
    // Transpose the spectrogram we pass in.
    var zArr = [];
    for (var i = 0; i < stft.length; i++) {
        for (var j = 0; j < stft[0].length; j++) {
            if (zArr[j] == undefined) {
                zArr[j] = [];
            }
            zArr[j][i] = stft[i][j];
        }
    }
    // Calculate the X values (times) from the stft params.
    var xArr = stft.map(function (value, index) { return index * samplesPerSlice / sr; });
    // Calculate Y values (frequencies) from stft.
    var fft = Array.prototype.slice.call(stft[0]);
    var yArr = fft.map(function (value, index) { return (index / fft.length) * nyquist; });
    var data = [
        {
            x: xArr,
            y: yArr,
            z: zArr,
            type: 'heatmap'
        }
    ];
    Plotly.newPlot(out, data, layout);
    return out;
}
function plotXY(x, y, layout) {
    var out = document.createElement('div');
    out.className = 'plot';
    var xArr = Array.prototype.slice.call(x);
    var yArr = Array.prototype.slice.call(y);
    var data = [{
            x: xArr,
            y: yArr,
        }];
    Plotly.plot(out, data, layout);
    return out;
}
function plotXYs(x, y, layout, maxFreq) {
    var out = document.createElement('div');
    out.className = 'plot';
    var xArr = Array.prototype.slice.call(x);
    var data = y.map(function (y_i) {
        var yArr = Array.prototype.slice.call(y_i);
        return {
            x: xArr.slice(0, maxFreq),
            y: yArr.slice(0, maxFreq),
        };
    });
    Plotly.plot(out, data, layout);
    return out;
}
function createLayout(title, xTitle, yTitle, params) {
    if (params === void 0) { params = {}; }
    var logY = (params.logY == true);
    var logX = (params.logX == true);
    return {
        title: title,
        xaxis: {
            title: xTitle,
            type: logX ? 'log' : null,
        },
        yaxis: {
            title: yTitle,
            type: logY ? 'log' : null,
        }
    };
}
exports.createLayout = createLayout;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AudioUtils_1 = __webpack_require__(0);
var CircularAudioBuffer_1 = __webpack_require__(4);
var eventemitter3_1 = __webpack_require__(8);
var INPUT_BUFFER_LENGTH = 16384;
var audioCtx = new AudioContext();
/**
 * Extracts various kinds of features from an input buffer. Designed for
 * extracting features from a live-running audio input stream.
 *
 * This class gets audio from an audio input stream, feeds it into a
 * ScriptProcessorNode, gets audio sampled at the input sample rate
 * (audioCtx.sampleRate).
 *
 * Once complete, we downsample it to EXAMPLE_SR, and then keep track of the
 * last hop index. Once we have enough data for a buffer of BUFFER_LENGTH,
 * process that buffer and add it to the spectrogram.
 */
var StreamingFeatureExtractor = /** @class */ (function (_super) {
    __extends(StreamingFeatureExtractor, _super);
    function StreamingFeatureExtractor(params) {
        var _this = _super.call(this) || this;
        var bufferLength = params.bufferLength, duration = params.duration, hopLength = params.hopLength, isMfccEnabled = params.isMfccEnabled, melCount = params.melCount, targetSr = params.targetSr, inputBufferLength = params.inputBufferLength;
        _this.bufferLength = bufferLength;
        _this.inputBufferLength = inputBufferLength || INPUT_BUFFER_LENGTH;
        _this.hopLength = hopLength;
        _this.melCount = melCount;
        _this.isMfccEnabled = isMfccEnabled;
        _this.targetSr = targetSr;
        _this.duration = duration;
        _this.bufferCount = Math.floor((duration * targetSr - bufferLength) / hopLength) + 1;
        if (hopLength > bufferLength) {
            console.error('Hop length must be smaller than buffer length.');
        }
        // The mel filterbank is actually half of the size of the number of samples,
        // since the FFT array is complex valued.
        _this.melFilterbank = AudioUtils_1.default.createMelFilterbank(_this.bufferLength / 2 + 1, _this.melCount);
        _this.spectrogram = [];
        _this.isStreaming = false;
        var nativeSr = audioCtx.sampleRate;
        // Allocate the size of the circular analysis buffer.
        var resampledBufferLength = Math.max(bufferLength, _this.inputBufferLength) *
            (targetSr / nativeSr) * 4;
        _this.circularBuffer = new CircularAudioBuffer_1.default(resampledBufferLength);
        // Calculate how many buffers will be enough to keep around to playback.
        var playbackLength = nativeSr * _this.duration * 2;
        _this.playbackBuffer = new CircularAudioBuffer_1.default(playbackLength);
        return _this;
    }
    StreamingFeatureExtractor.prototype.getSpectrogram = function () {
        return this.spectrogram;
    };
    StreamingFeatureExtractor.prototype.start = function () {
        var _this = this;
        // Clear all buffers.
        this.circularBuffer.clear();
        this.playbackBuffer.clear();
        // Reset start time and sample count for ScriptProcessorNode watching.
        this.processStartTime = new Date();
        this.processSampleCount = 0;
        var constraints = { audio: {
                "mandatory": {
                    "googEchoCancellation": "false",
                    "googAutoGainControl": "false",
                    "googNoiseSuppression": "false",
                    "googHighpassFilter": "false"
                },
            }, video: false };
        navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
            _this.stream = stream;
            _this.scriptNode = audioCtx.createScriptProcessor(_this.inputBufferLength, 1, 1);
            var source = audioCtx.createMediaStreamSource(stream);
            source.connect(_this.scriptNode);
            _this.scriptNode.connect(audioCtx.destination);
            _this.scriptNode.onaudioprocess = _this.onAudioProcess.bind(_this);
            _this.isStreaming = true;
        });
    };
    StreamingFeatureExtractor.prototype.stop = function () {
        for (var _i = 0, _a = this.stream.getTracks(); _i < _a.length; _i++) {
            var track = _a[_i];
            track.stop();
        }
        this.scriptNode.disconnect(audioCtx.destination);
        this.stream = null;
        this.isStreaming = false;
    };
    StreamingFeatureExtractor.prototype.getEnergyLevel = function () {
        return this.lastEnergyLevel;
    };
    /**
     * Debug only: for listening to what was most recently recorded.
     */
    StreamingFeatureExtractor.prototype.getLastPlaybackBuffer = function () {
        return this.playbackBuffer.getBuffer();
    };
    StreamingFeatureExtractor.prototype.onAudioProcess = function (audioProcessingEvent) {
        var _this = this;
        var audioBuffer = audioProcessingEvent.inputBuffer;
        // Add to the playback buffers, but make sure we have enough room.
        var remaining = this.playbackBuffer.getRemainingLength();
        var arrayBuffer = audioBuffer.getChannelData(0);
        this.processSampleCount += arrayBuffer.length;
        if (remaining < arrayBuffer.length) {
            this.playbackBuffer.popBuffer(arrayBuffer.length);
            //console.log(`Freed up ${arrayBuffer.length} in the playback buffer.`);
        }
        this.playbackBuffer.addBuffer(arrayBuffer);
        // Resample the buffer into targetSr.
        //console.log(`Resampling from ${audioCtx.sampleRate} to ${this.targetSr}.`);
        resampleWebAudio(audioBuffer, this.targetSr).then(function (audioBufferRes) {
            var bufferRes = audioBufferRes.getChannelData(0);
            // Write in a buffer of ~700 samples.
            _this.circularBuffer.addBuffer(bufferRes);
        });
        // Get buffer(s) out of the circular buffer. Note that there may be multiple
        // available, and if there are, we should get them all.
        var buffers = this.getFullBuffers();
        if (buffers.length > 0) {
            //console.log(`Got ${buffers.length} buffers of audio input data.`);
        }
        for (var _i = 0, buffers_1 = buffers; _i < buffers_1.length; _i++) {
            var buffer = buffers_1[_i];
            //console.log(`Got buffer of length ${buffer.length}.`);
            // Extract the mel values for this new frame of audio data.
            var fft = AudioUtils_1.default.fft(buffer);
            var fftEnergies = AudioUtils_1.default.fftEnergies(fft);
            var melEnergies = AudioUtils_1.default.applyFilterbank(fftEnergies, this.melFilterbank);
            var mfccs = AudioUtils_1.default.cepstrumFromEnergySpectrum(melEnergies);
            if (this.isMfccEnabled) {
                this.spectrogram.push(mfccs);
            }
            else {
                this.spectrogram.push(melEnergies);
            }
            if (this.spectrogram.length > this.bufferCount) {
                // Remove the first element in the array.
                this.spectrogram.splice(0, 1);
            }
            if (this.spectrogram.length == this.bufferCount) {
                // Notify that we have an updated spectrogram.
                this.emit('update');
            }
            var totalEnergy = melEnergies.reduce(function (total, num) { return total + num; });
            this.lastEnergyLevel = totalEnergy / melEnergies.length;
        }
        var elapsed = (new Date().valueOf() - this.processStartTime.valueOf()) / 1000;
        var expectedSampleCount = (audioCtx.sampleRate * elapsed);
        var percentError = Math.abs(expectedSampleCount - this.processSampleCount) /
            this.processSampleCount;
        if (percentError > 0.1) {
            console.warn("ScriptProcessorNode may be dropping samples. Percent error is " + percentError + ".");
        }
    };
    /**
     * Get as many full buffers as are available in the circular buffer.
     */
    StreamingFeatureExtractor.prototype.getFullBuffers = function () {
        var out = [];
        // While we have enough data in the buffer.
        while (this.circularBuffer.getLength() > this.bufferLength) {
            // Get a buffer of desired size.
            var buffer = this.circularBuffer.getBuffer(this.bufferLength);
            // Remove a hop's worth of data from the buffer.
            this.circularBuffer.popBuffer(this.hopLength);
            out.push(buffer);
        }
        return out;
    };
    return StreamingFeatureExtractor;
}(eventemitter3_1.EventEmitter));
exports.default = StreamingFeatureExtractor;
function resampleWebAudio(audioBuffer, targetSr) {
    var sourceSr = audioBuffer.sampleRate;
    var lengthRes = audioBuffer.length * targetSr / sourceSr;
    var offlineCtx = new OfflineAudioContext(1, lengthRes, targetSr);
    return new Promise(function (resolve, reject) {
        var bufferSource = offlineCtx.createBufferSource();
        bufferSource.buffer = audioBuffer;
        offlineCtx.oncomplete = function (event) {
            var bufferRes = event.renderedBuffer;
            var len = bufferRes.length;
            //console.log(`Resampled buffer from ${audioBuffer.length} to ${len}.`);
            resolve(bufferRes);
        };
        bufferSource.connect(offlineCtx.destination);
        bufferSource.start();
        offlineCtx.startRendering();
    });
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Save Float32Array in arbitrarily sized chunks.
 * Load Float32Array in arbitrarily sized chunks.
 * Determine if there's enough data to grab a certain amount.
 */
var CircularAudioBuffer = /** @class */ (function () {
    function CircularAudioBuffer(maxLength) {
        this.buffer = new Float32Array(maxLength);
        this.currentIndex = 0;
    }
    /**
     * Add a new buffer of data. Called when we get new audio input samples.
     */
    CircularAudioBuffer.prototype.addBuffer = function (newBuffer) {
        // Do we have enough data in this buffer?
        var remaining = this.buffer.length - this.currentIndex;
        if (this.currentIndex + newBuffer.length > this.buffer.length) {
            console.error("Not enough space to write " + newBuffer.length +
                (" to this circular buffer with " + remaining + " left."));
            return;
        }
        this.buffer.set(newBuffer, this.currentIndex);
        //console.log(`Wrote ${newBuffer.length} entries to index ${this.currentIndex}.`);
        this.currentIndex += newBuffer.length;
    };
    /**
     * How many samples are stored currently?
     */
    CircularAudioBuffer.prototype.getLength = function () {
        return this.currentIndex;
    };
    /**
     * How much space remains?
     */
    CircularAudioBuffer.prototype.getRemainingLength = function () {
        return this.buffer.length - this.currentIndex;
    };
    /**
     * Return the first N samples of the buffer, and remove them. Called when we
     * want to get a buffer of audio data of a fixed size.
     */
    CircularAudioBuffer.prototype.popBuffer = function (length) {
        // Do we have enough data to read back?
        if (this.currentIndex < length) {
            console.error("This circular buffer doesn't have " + length + " entries in it.");
            return;
        }
        if (length == 0) {
            console.warn("Calling popBuffer(0) does nothing.");
            return;
        }
        var popped = this.buffer.slice(0, length);
        var remaining = this.buffer.slice(length, this.buffer.length);
        // Remove the popped entries from the buffer.
        this.buffer.fill(0);
        this.buffer.set(remaining, 0);
        // Send the currentIndex back.
        this.currentIndex -= length;
        return popped;
    };
    /**
     * Get the the first part of the buffer without mutating it.
     */
    CircularAudioBuffer.prototype.getBuffer = function (length) {
        if (!length) {
            length = this.getLength();
        }
        // Do we have enough data to read back?
        if (this.currentIndex < length) {
            console.error("This circular buffer doesn't have " + length + " entries in it.");
            return;
        }
        return this.buffer.slice(0, length);
    };
    CircularAudioBuffer.prototype.clear = function () {
        this.currentIndex = 0;
        this.buffer.fill(0);
    };
    return CircularAudioBuffer;
}());
exports.default = CircularAudioBuffer;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var AudioUtils_1 = __webpack_require__(0);
var StreamingFeatureExtractor_1 = __webpack_require__(3);
var PlotGraphs_1 = __webpack_require__(2);
var bufferLength = 1024;
var hopLength = 512;
var melCount = 40;
var arrayBuffer;
var mfccSpec;
var outEl = document.querySelector('#out');
var streamEl = document.querySelector('#stream');
var loadEl = document.querySelector('#load');
var downloadEl = document.querySelector('#download');
var playEl = document.querySelector('#play');
function analyzeAudioBuffer(audioBuffer) {
    analyzeArrayBuffer(audioBuffer.getChannelData(0));
}
function analyzeArrayBuffer(buffer) {
    //const start = 0.2 * 44100;
    //arrayBuffer = buffer.slice(start, start + 1024);
    arrayBuffer = buffer;
    // Clear the output element.
    outEl.innerHTML = '';
    var audioEl = PlotGraphs_1.plotAudio(arrayBuffer, PlotGraphs_1.createLayout('Time domain', 'time (s)', 'pressure'));
    outEl.appendChild(audioEl);
    // Calculate FFT from ArrayBuffer.
    var fft = AudioUtils_1.default.fft(arrayBuffer);
    var fftEnergies = AudioUtils_1.default.fftEnergies(fft);
    var fftEl = PlotGraphs_1.plotFFT(fftEnergies, PlotGraphs_1.createLayout('Frequency domain', 'frequency (Hz)', 'power (dB)', { logX: false }));
    outEl.appendChild(fftEl);
    // Calculate a Mel filterbank.
    var melFilterbank = AudioUtils_1.default.createMelFilterbank(fftEnergies.length, melCount);
    var melEl = PlotGraphs_1.plotFilterbank(melFilterbank, PlotGraphs_1.createLayout('Mel filterbank', 'frequency (Hz)', 'percent'));
    outEl.appendChild(melEl);
    // Apply the Mel filterbank to that FFT output.
    var melEnergies = AudioUtils_1.default.applyFilterbank(fftEnergies, melFilterbank);
    var melCoeffEl = PlotGraphs_1.plotCoeffs(melEnergies, PlotGraphs_1.createLayout('Mel coefficients', 'mel filter number', 'energy'));
    outEl.appendChild(melCoeffEl);
    // Calculate the MFCC from the Mel coefficients.
    var mfcc = AudioUtils_1.default.cepstrumFromEnergySpectrum(melEnergies);
    var mfccEl = PlotGraphs_1.plotCoeffs(mfcc.slice(0, 13), PlotGraphs_1.createLayout('Mel Frequency Cepstral ' +
        'Coefficients (MFCC)', 'mel filter number', 'energy'));
    outEl.appendChild(mfccEl);
    // Calculate STFT from the ArrayBuffer.
    var stft = AudioUtils_1.default.stft(arrayBuffer, bufferLength, hopLength);
    // Each STFT column is an FFT array which is interleaved complex. For STFT
    // rendering, we want to show only the magnitudes.
    var stftEnergies = stft.map(function (fft) { return AudioUtils_1.default.fftEnergies(fft); });
    var specEl = PlotGraphs_1.plotSpectrogram(stftEnergies, hopLength, PlotGraphs_1.createLayout('STFT energy spectrogram', 'time (s)', 'frequency (Hz)', { logY: true }));
    outEl.appendChild(specEl);
    // Calculate mel energy spectrogram from STFT.
    var melSpec = AudioUtils_1.default.melSpectrogram(stftEnergies, melCount);
    var melSpecEl = PlotGraphs_1.plotSpectrogram(melSpec, hopLength, PlotGraphs_1.createLayout('Mel energy spectrogram', 'time (s)', 'mel bin'));
    outEl.appendChild(melSpecEl);
    // Calculate the MFCC spectrogram from the STFT.
    mfccSpec = AudioUtils_1.default.mfccSpectrogram(stftEnergies, 13);
    var mfccSpecEl = PlotGraphs_1.plotSpectrogram(mfccSpec, hopLength, PlotGraphs_1.createLayout('MFCC spectrogram', 'time (s)', 'mfcc bin'));
    outEl.appendChild(mfccSpecEl);
}
function main() {
    // Load a short sine buffer.
    AudioUtils_1.default.loadExampleBuffer().then(analyzeAudioBuffer);
}
function min(arr) {
    return arr.reduce(function (a, b) { return Math.min(a, b); });
}
function max(arr) {
    return arr.reduce(function (a, b) { return Math.max(a, b); });
}
window.addEventListener('load', main);
var streamFeature = new StreamingFeatureExtractor_1.default({
    bufferLength: 1024,
    hopLength: 512,
    duration: 1,
    targetSr: 16000,
    melCount: melCount,
    isMfccEnabled: true,
});
streamEl.addEventListener('click', function (e) {
    if (streamFeature.isStreaming) {
        streamFeature.stop();
        var buffer = streamFeature.getLastPlaybackBuffer();
        console.log("Got a stream buffer of length " + buffer.length + ".");
        analyzeArrayBuffer(buffer);
        streamEl.innerHTML = 'Stream';
    }
    else {
        streamFeature.start();
        streamEl.innerHTML = 'Stop streaming';
    }
});
downloadEl.addEventListener('click', function (e) {
    // Download the mel spectrogram.
    AudioUtils_1.default.normalizeSpecInPlace(mfccSpec);
    PlotGraphs_1.downloadSpectrogramImage(mfccSpec);
});
loadEl.addEventListener('change', function (e) {
    var files = this.files;
    var fileUrl = URL.createObjectURL(files[0]);
    AudioUtils_1.default.loadBuffer(fileUrl).then(analyzeAudioBuffer);
});
playEl.addEventListener('click', function (e) {
    AudioUtils_1.default.playbackArrayBuffer(arrayBuffer);
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*===========================================================================*\
 * Discrete Cosine Transform
 *
 * (c) Vail Systems. Joshua Jung and Ben Bryan. 2015
 *
 * This code is not designed to be highly optimized but as an educational
 * tool to understand the Mel-scale and its related coefficients used in
 * human speech analysis.
\*===========================================================================*/
cosMap = null;

// Builds a cosine map for the given input size. This allows multiple input sizes to be memoized automagically
// if you want to run the DCT over and over.
var memoizeCosines = function(N) {
  cosMap = cosMap || {};
  cosMap[N] = new Array(N*N);

  var PI_N = Math.PI / N;

  for (var k = 0; k < N; k++) {
    for (var n = 0; n < N; n++) {
      cosMap[N][n + (k * N)] = Math.cos(PI_N * (n + 0.5) * k);
    }
  }
};

function dct(signal, scale) {
  var L = signal.length;
  scale = scale || 2;

  if (!cosMap || !cosMap[L]) memoizeCosines(L);

  var coefficients = signal.map(function () {return 0;});

  return coefficients.map(function (__, ix) {
    return scale * signal.reduce(function (prev, cur, ix_, arr) {
      return prev + (cur * cosMap[L][ix_ + (ix * L)]);
    }, 0);
  });
};

module.exports = dct;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @api private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {Mixed} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @api private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @api public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @api public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Boolean} exists Only check if there are listeners.
 * @returns {Array|Boolean}
 * @api public
 */
EventEmitter.prototype.listeners = function listeners(event, exists) {
  var evt = prefix ? prefix + event : event
    , available = this._events[evt];

  if (exists) return !!available;
  if (!available) return [];
  if (available.fn) return [available.fn];

  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
    ee[i] = available[i].fn;
  }

  return ee;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @api public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  var listener = new EE(fn, context || this)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  var listener = new EE(fn, context || this, true)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Remove the listeners of a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {Mixed} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
         listeners.fn === fn
      && (!once || listeners.once)
      && (!context || listeners.context === context)
    ) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
           listeners[i].fn !== fn
        || (once && !listeners[i].once)
        || (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {String|Symbol} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// This function doesn't apply anymore.
//
EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
  return this;
};

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, __dirname) {var KissFFTModule = function(Module) {
  Module = Module || {};

var Module;if(!Module)Module=(typeof KissFFTModule!=="undefined"?KissFFTModule:null)||{};var moduleOverrides={};for(var key in Module){if(Module.hasOwnProperty(key)){moduleOverrides[key]=Module[key]}}var ENVIRONMENT_IS_WEB=typeof window==="object";var ENVIRONMENT_IS_WORKER=typeof importScripts==="function";var ENVIRONMENT_IS_NODE=typeof process==="object"&&"function"==="function"&&!ENVIRONMENT_IS_WEB&&!ENVIRONMENT_IS_WORKER;var ENVIRONMENT_IS_SHELL=!ENVIRONMENT_IS_WEB&&!ENVIRONMENT_IS_NODE&&!ENVIRONMENT_IS_WORKER;if(ENVIRONMENT_IS_NODE){if(!Module["print"])Module["print"]=function print(x){process["stdout"].write(x+"\n")};if(!Module["printErr"])Module["printErr"]=function printErr(x){process["stderr"].write(x+"\n")};var nodeFS=__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"fs\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));var nodePath=__webpack_require__(11);Module["read"]=function read(filename,binary){filename=nodePath["normalize"](filename);var ret=nodeFS["readFileSync"](filename);if(!ret&&filename!=nodePath["resolve"](filename)){filename=path.join(__dirname,"..","src",filename);ret=nodeFS["readFileSync"](filename)}if(ret&&!binary)ret=ret.toString();return ret};Module["readBinary"]=function readBinary(filename){var ret=Module["read"](filename,true);if(!ret.buffer){ret=new Uint8Array(ret)}assert(ret.buffer);return ret};Module["load"]=function load(f){globalEval(read(f))};if(!Module["thisProgram"]){if(process["argv"].length>1){Module["thisProgram"]=process["argv"][1].replace(/\\/g,"/")}else{Module["thisProgram"]="unknown-program"}}Module["arguments"]=process["argv"].slice(2);if(true){module["exports"]=Module}process["on"]("uncaughtException",(function(ex){if(!(ex instanceof ExitStatus)){throw ex}}));Module["inspect"]=(function(){return"[Emscripten Module object]"})}else if(ENVIRONMENT_IS_SHELL){if(!Module["print"])Module["print"]=print;if(typeof printErr!="undefined")Module["printErr"]=printErr;if(typeof read!="undefined"){Module["read"]=read}else{Module["read"]=function read(){throw"no read() available (jsc?)"}}Module["readBinary"]=function readBinary(f){if(typeof readbuffer==="function"){return new Uint8Array(readbuffer(f))}var data=read(f,"binary");assert(typeof data==="object");return data};if(typeof scriptArgs!="undefined"){Module["arguments"]=scriptArgs}else if(typeof arguments!="undefined"){Module["arguments"]=arguments}}else if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){Module["read"]=function read(url){var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.send(null);return xhr.responseText};if(typeof arguments!="undefined"){Module["arguments"]=arguments}if(typeof console!=="undefined"){if(!Module["print"])Module["print"]=function print(x){console.log(x)};if(!Module["printErr"])Module["printErr"]=function printErr(x){console.log(x)}}else{var TRY_USE_DUMP=false;if(!Module["print"])Module["print"]=TRY_USE_DUMP&&typeof dump!=="undefined"?(function(x){dump(x)}):(function(x){})}if(ENVIRONMENT_IS_WORKER){Module["load"]=importScripts}if(typeof Module["setWindowTitle"]==="undefined"){Module["setWindowTitle"]=(function(title){document.title=title})}}else{throw"Unknown runtime environment. Where are we?"}function globalEval(x){eval.call(null,x)}if(!Module["load"]&&Module["read"]){Module["load"]=function load(f){globalEval(Module["read"](f))}}if(!Module["print"]){Module["print"]=(function(){})}if(!Module["printErr"]){Module["printErr"]=Module["print"]}if(!Module["arguments"]){Module["arguments"]=[]}if(!Module["thisProgram"]){Module["thisProgram"]="./this.program"}Module.print=Module["print"];Module.printErr=Module["printErr"];Module["preRun"]=[];Module["postRun"]=[];for(var key in moduleOverrides){if(moduleOverrides.hasOwnProperty(key)){Module[key]=moduleOverrides[key]}}var Runtime={setTempRet0:(function(value){tempRet0=value}),getTempRet0:(function(){return tempRet0}),stackSave:(function(){return STACKTOP}),stackRestore:(function(stackTop){STACKTOP=stackTop}),getNativeTypeSize:(function(type){switch(type){case"i1":case"i8":return 1;case"i16":return 2;case"i32":return 4;case"i64":return 8;case"float":return 4;case"double":return 8;default:{if(type[type.length-1]==="*"){return Runtime.QUANTUM_SIZE}else if(type[0]==="i"){var bits=parseInt(type.substr(1));assert(bits%8===0);return bits/8}else{return 0}}}}),getNativeFieldSize:(function(type){return Math.max(Runtime.getNativeTypeSize(type),Runtime.QUANTUM_SIZE)}),STACK_ALIGN:16,prepVararg:(function(ptr,type){if(type==="double"||type==="i64"){if(ptr&7){assert((ptr&7)===4);ptr+=4}}else{assert((ptr&3)===0)}return ptr}),getAlignSize:(function(type,size,vararg){if(!vararg&&(type=="i64"||type=="double"))return 8;if(!type)return Math.min(size,8);return Math.min(size||(type?Runtime.getNativeFieldSize(type):0),Runtime.QUANTUM_SIZE)}),dynCall:(function(sig,ptr,args){if(args&&args.length){if(!args.splice)args=Array.prototype.slice.call(args);args.splice(0,0,ptr);return Module["dynCall_"+sig].apply(null,args)}else{return Module["dynCall_"+sig].call(null,ptr)}}),functionPointers:[],addFunction:(function(func){for(var i=0;i<Runtime.functionPointers.length;i++){if(!Runtime.functionPointers[i]){Runtime.functionPointers[i]=func;return 2*(1+i)}}throw"Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS."}),removeFunction:(function(index){Runtime.functionPointers[(index-2)/2]=null}),warnOnce:(function(text){if(!Runtime.warnOnce.shown)Runtime.warnOnce.shown={};if(!Runtime.warnOnce.shown[text]){Runtime.warnOnce.shown[text]=1;Module.printErr(text)}}),funcWrappers:{},getFuncWrapper:(function(func,sig){assert(sig);if(!Runtime.funcWrappers[sig]){Runtime.funcWrappers[sig]={}}var sigCache=Runtime.funcWrappers[sig];if(!sigCache[func]){sigCache[func]=function dynCall_wrapper(){return Runtime.dynCall(sig,func,arguments)}}return sigCache[func]}),getCompilerSetting:(function(name){throw"You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work"}),stackAlloc:(function(size){var ret=STACKTOP;STACKTOP=STACKTOP+size|0;STACKTOP=STACKTOP+15&-16;return ret}),staticAlloc:(function(size){var ret=STATICTOP;STATICTOP=STATICTOP+size|0;STATICTOP=STATICTOP+15&-16;return ret}),dynamicAlloc:(function(size){var ret=DYNAMICTOP;DYNAMICTOP=DYNAMICTOP+size|0;DYNAMICTOP=DYNAMICTOP+15&-16;if(DYNAMICTOP>=TOTAL_MEMORY){var success=enlargeMemory();if(!success){DYNAMICTOP=ret;return 0}}return ret}),alignMemory:(function(size,quantum){var ret=size=Math.ceil(size/(quantum?quantum:16))*(quantum?quantum:16);return ret}),makeBigInt:(function(low,high,unsigned){var ret=unsigned?+(low>>>0)+ +(high>>>0)*+4294967296:+(low>>>0)+ +(high|0)*+4294967296;return ret}),GLOBAL_BASE:8,QUANTUM_SIZE:4,__dummy__:0};Module["Runtime"]=Runtime;var __THREW__=0;var ABORT=false;var EXITSTATUS=0;var undef=0;var tempValue,tempInt,tempBigInt,tempInt2,tempBigInt2,tempPair,tempBigIntI,tempBigIntR,tempBigIntS,tempBigIntP,tempBigIntD,tempDouble,tempFloat;var tempI64,tempI64b;var tempRet0,tempRet1,tempRet2,tempRet3,tempRet4,tempRet5,tempRet6,tempRet7,tempRet8,tempRet9;function assert(condition,text){if(!condition){abort("Assertion failed: "+text)}}var globalScope=this;function getCFunc(ident){var func=Module["_"+ident];if(!func){try{func=eval("_"+ident)}catch(e){}}assert(func,"Cannot call unknown function "+ident+" (perhaps LLVM optimizations or closure removed it?)");return func}var cwrap,ccall;((function(){var JSfuncs={"stackSave":(function(){Runtime.stackSave()}),"stackRestore":(function(){Runtime.stackRestore()}),"arrayToC":(function(arr){var ret=Runtime.stackAlloc(arr.length);writeArrayToMemory(arr,ret);return ret}),"stringToC":(function(str){var ret=0;if(str!==null&&str!==undefined&&str!==0){ret=Runtime.stackAlloc((str.length<<2)+1);writeStringToMemory(str,ret)}return ret})};var toC={"string":JSfuncs["stringToC"],"array":JSfuncs["arrayToC"]};ccall=function ccallFunc(ident,returnType,argTypes,args,opts){var func=getCFunc(ident);var cArgs=[];var stack=0;if(args){for(var i=0;i<args.length;i++){var converter=toC[argTypes[i]];if(converter){if(stack===0)stack=Runtime.stackSave();cArgs[i]=converter(args[i])}else{cArgs[i]=args[i]}}}var ret=func.apply(null,cArgs);if(returnType==="string")ret=Pointer_stringify(ret);if(stack!==0){if(opts&&opts.async){EmterpreterAsync.asyncFinalizers.push((function(){Runtime.stackRestore(stack)}));return}Runtime.stackRestore(stack)}return ret};var sourceRegex=/^function\s*\(([^)]*)\)\s*{\s*([^*]*?)[\s;]*(?:return\s*(.*?)[;\s]*)?}$/;function parseJSFunc(jsfunc){var parsed=jsfunc.toString().match(sourceRegex).slice(1);return{arguments:parsed[0],body:parsed[1],returnValue:parsed[2]}}var JSsource={};for(var fun in JSfuncs){if(JSfuncs.hasOwnProperty(fun)){JSsource[fun]=parseJSFunc(JSfuncs[fun])}}cwrap=function cwrap(ident,returnType,argTypes){argTypes=argTypes||[];var cfunc=getCFunc(ident);var numericArgs=argTypes.every((function(type){return type==="number"}));var numericRet=returnType!=="string";if(numericRet&&numericArgs){return cfunc}var argNames=argTypes.map((function(x,i){return"$"+i}));var funcstr="(function("+argNames.join(",")+") {";var nargs=argTypes.length;if(!numericArgs){funcstr+="var stack = "+JSsource["stackSave"].body+";";for(var i=0;i<nargs;i++){var arg=argNames[i],type=argTypes[i];if(type==="number")continue;var convertCode=JSsource[type+"ToC"];funcstr+="var "+convertCode.arguments+" = "+arg+";";funcstr+=convertCode.body+";";funcstr+=arg+"="+convertCode.returnValue+";"}}var cfuncname=parseJSFunc((function(){return cfunc})).returnValue;funcstr+="var ret = "+cfuncname+"("+argNames.join(",")+");";if(!numericRet){var strgfy=parseJSFunc((function(){return Pointer_stringify})).returnValue;funcstr+="ret = "+strgfy+"(ret);"}if(!numericArgs){funcstr+=JSsource["stackRestore"].body.replace("()","(stack)")+";"}funcstr+="return ret})";return eval(funcstr)}}))();Module["ccall"]=ccall;Module["cwrap"]=cwrap;function setValue(ptr,value,type,noSafe){type=type||"i8";if(type.charAt(type.length-1)==="*")type="i32";switch(type){case"i1":HEAP8[ptr>>0]=value;break;case"i8":HEAP8[ptr>>0]=value;break;case"i16":HEAP16[ptr>>1]=value;break;case"i32":HEAP32[ptr>>2]=value;break;case"i64":tempI64=[value>>>0,(tempDouble=value,+Math_abs(tempDouble)>=+1?tempDouble>+0?(Math_min(+Math_floor(tempDouble/+4294967296),+4294967295)|0)>>>0:~~+Math_ceil((tempDouble- +(~~tempDouble>>>0))/+4294967296)>>>0:0)],HEAP32[ptr>>2]=tempI64[0],HEAP32[ptr+4>>2]=tempI64[1];break;case"float":HEAPF32[ptr>>2]=value;break;case"double":HEAPF64[ptr>>3]=value;break;default:abort("invalid type for setValue: "+type)}}Module["setValue"]=setValue;function getValue(ptr,type,noSafe){type=type||"i8";if(type.charAt(type.length-1)==="*")type="i32";switch(type){case"i1":return HEAP8[ptr>>0];case"i8":return HEAP8[ptr>>0];case"i16":return HEAP16[ptr>>1];case"i32":return HEAP32[ptr>>2];case"i64":return HEAP32[ptr>>2];case"float":return HEAPF32[ptr>>2];case"double":return HEAPF64[ptr>>3];default:abort("invalid type for setValue: "+type)}return null}Module["getValue"]=getValue;var ALLOC_NORMAL=0;var ALLOC_STACK=1;var ALLOC_STATIC=2;var ALLOC_DYNAMIC=3;var ALLOC_NONE=4;Module["ALLOC_NORMAL"]=ALLOC_NORMAL;Module["ALLOC_STACK"]=ALLOC_STACK;Module["ALLOC_STATIC"]=ALLOC_STATIC;Module["ALLOC_DYNAMIC"]=ALLOC_DYNAMIC;Module["ALLOC_NONE"]=ALLOC_NONE;function allocate(slab,types,allocator,ptr){var zeroinit,size;if(typeof slab==="number"){zeroinit=true;size=slab}else{zeroinit=false;size=slab.length}var singleType=typeof types==="string"?types:null;var ret;if(allocator==ALLOC_NONE){ret=ptr}else{ret=[_malloc,Runtime.stackAlloc,Runtime.staticAlloc,Runtime.dynamicAlloc][allocator===undefined?ALLOC_STATIC:allocator](Math.max(size,singleType?1:types.length))}if(zeroinit){var ptr=ret,stop;assert((ret&3)==0);stop=ret+(size&~3);for(;ptr<stop;ptr+=4){HEAP32[ptr>>2]=0}stop=ret+size;while(ptr<stop){HEAP8[ptr++>>0]=0}return ret}if(singleType==="i8"){if(slab.subarray||slab.slice){HEAPU8.set(slab,ret)}else{HEAPU8.set(new Uint8Array(slab),ret)}return ret}var i=0,type,typeSize,previousType;while(i<size){var curr=slab[i];if(typeof curr==="function"){curr=Runtime.getFunctionIndex(curr)}type=singleType||types[i];if(type===0){i++;continue}if(type=="i64")type="i32";setValue(ret+i,curr,type);if(previousType!==type){typeSize=Runtime.getNativeTypeSize(type);previousType=type}i+=typeSize}return ret}Module["allocate"]=allocate;function getMemory(size){if(!staticSealed)return Runtime.staticAlloc(size);if(typeof _sbrk!=="undefined"&&!_sbrk.called||!runtimeInitialized)return Runtime.dynamicAlloc(size);return _malloc(size)}Module["getMemory"]=getMemory;function Pointer_stringify(ptr,length){if(length===0||!ptr)return"";var hasUtf=0;var t;var i=0;while(1){t=HEAPU8[ptr+i>>0];hasUtf|=t;if(t==0&&!length)break;i++;if(length&&i==length)break}if(!length)length=i;var ret="";if(hasUtf<128){var MAX_CHUNK=1024;var curr;while(length>0){curr=String.fromCharCode.apply(String,HEAPU8.subarray(ptr,ptr+Math.min(length,MAX_CHUNK)));ret=ret?ret+curr:curr;ptr+=MAX_CHUNK;length-=MAX_CHUNK}return ret}return Module["UTF8ToString"](ptr)}Module["Pointer_stringify"]=Pointer_stringify;function AsciiToString(ptr){var str="";while(1){var ch=HEAP8[ptr++>>0];if(!ch)return str;str+=String.fromCharCode(ch)}}Module["AsciiToString"]=AsciiToString;function stringToAscii(str,outPtr){return writeAsciiToMemory(str,outPtr,false)}Module["stringToAscii"]=stringToAscii;function UTF8ArrayToString(u8Array,idx){var u0,u1,u2,u3,u4,u5;var str="";while(1){u0=u8Array[idx++];if(!u0)return str;if(!(u0&128)){str+=String.fromCharCode(u0);continue}u1=u8Array[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}u2=u8Array[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{u3=u8Array[idx++]&63;if((u0&248)==240){u0=(u0&7)<<18|u1<<12|u2<<6|u3}else{u4=u8Array[idx++]&63;if((u0&252)==248){u0=(u0&3)<<24|u1<<18|u2<<12|u3<<6|u4}else{u5=u8Array[idx++]&63;u0=(u0&1)<<30|u1<<24|u2<<18|u3<<12|u4<<6|u5}}}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}}Module["UTF8ArrayToString"]=UTF8ArrayToString;function UTF8ToString(ptr){return UTF8ArrayToString(HEAPU8,ptr)}Module["UTF8ToString"]=UTF8ToString;function stringToUTF8Array(str,outU8Array,outIdx,maxBytesToWrite){if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343)u=65536+((u&1023)<<10)|str.charCodeAt(++i)&1023;if(u<=127){if(outIdx>=endIdx)break;outU8Array[outIdx++]=u}else if(u<=2047){if(outIdx+1>=endIdx)break;outU8Array[outIdx++]=192|u>>6;outU8Array[outIdx++]=128|u&63}else if(u<=65535){if(outIdx+2>=endIdx)break;outU8Array[outIdx++]=224|u>>12;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}else if(u<=2097151){if(outIdx+3>=endIdx)break;outU8Array[outIdx++]=240|u>>18;outU8Array[outIdx++]=128|u>>12&63;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}else if(u<=67108863){if(outIdx+4>=endIdx)break;outU8Array[outIdx++]=248|u>>24;outU8Array[outIdx++]=128|u>>18&63;outU8Array[outIdx++]=128|u>>12&63;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}else{if(outIdx+5>=endIdx)break;outU8Array[outIdx++]=252|u>>30;outU8Array[outIdx++]=128|u>>24&63;outU8Array[outIdx++]=128|u>>18&63;outU8Array[outIdx++]=128|u>>12&63;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}}outU8Array[outIdx]=0;return outIdx-startIdx}Module["stringToUTF8Array"]=stringToUTF8Array;function stringToUTF8(str,outPtr,maxBytesToWrite){return stringToUTF8Array(str,HEAPU8,outPtr,maxBytesToWrite)}Module["stringToUTF8"]=stringToUTF8;function lengthBytesUTF8(str){var len=0;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343)u=65536+((u&1023)<<10)|str.charCodeAt(++i)&1023;if(u<=127){++len}else if(u<=2047){len+=2}else if(u<=65535){len+=3}else if(u<=2097151){len+=4}else if(u<=67108863){len+=5}else{len+=6}}return len}Module["lengthBytesUTF8"]=lengthBytesUTF8;function UTF16ToString(ptr){var i=0;var str="";while(1){var codeUnit=HEAP16[ptr+i*2>>1];if(codeUnit==0)return str;++i;str+=String.fromCharCode(codeUnit)}}Module["UTF16ToString"]=UTF16ToString;function stringToUTF16(str,outPtr,maxBytesToWrite){if(maxBytesToWrite===undefined){maxBytesToWrite=2147483647}if(maxBytesToWrite<2)return 0;maxBytesToWrite-=2;var startPtr=outPtr;var numCharsToWrite=maxBytesToWrite<str.length*2?maxBytesToWrite/2:str.length;for(var i=0;i<numCharsToWrite;++i){var codeUnit=str.charCodeAt(i);HEAP16[outPtr>>1]=codeUnit;outPtr+=2}HEAP16[outPtr>>1]=0;return outPtr-startPtr}Module["stringToUTF16"]=stringToUTF16;function lengthBytesUTF16(str){return str.length*2}Module["lengthBytesUTF16"]=lengthBytesUTF16;function UTF32ToString(ptr){var i=0;var str="";while(1){var utf32=HEAP32[ptr+i*4>>2];if(utf32==0)return str;++i;if(utf32>=65536){var ch=utf32-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}else{str+=String.fromCharCode(utf32)}}}Module["UTF32ToString"]=UTF32ToString;function stringToUTF32(str,outPtr,maxBytesToWrite){if(maxBytesToWrite===undefined){maxBytesToWrite=2147483647}if(maxBytesToWrite<4)return 0;var startPtr=outPtr;var endPtr=startPtr+maxBytesToWrite-4;for(var i=0;i<str.length;++i){var codeUnit=str.charCodeAt(i);if(codeUnit>=55296&&codeUnit<=57343){var trailSurrogate=str.charCodeAt(++i);codeUnit=65536+((codeUnit&1023)<<10)|trailSurrogate&1023}HEAP32[outPtr>>2]=codeUnit;outPtr+=4;if(outPtr+4>endPtr)break}HEAP32[outPtr>>2]=0;return outPtr-startPtr}Module["stringToUTF32"]=stringToUTF32;function lengthBytesUTF32(str){var len=0;for(var i=0;i<str.length;++i){var codeUnit=str.charCodeAt(i);if(codeUnit>=55296&&codeUnit<=57343)++i;len+=4}return len}Module["lengthBytesUTF32"]=lengthBytesUTF32;function demangle(func){var hasLibcxxabi=!!Module["___cxa_demangle"];if(hasLibcxxabi){try{var buf=_malloc(func.length);writeStringToMemory(func.substr(1),buf);var status=_malloc(4);var ret=Module["___cxa_demangle"](buf,0,0,status);if(getValue(status,"i32")===0&&ret){return Pointer_stringify(ret)}}catch(e){}finally{if(buf)_free(buf);if(status)_free(status);if(ret)_free(ret)}}var i=3;var basicTypes={"v":"void","b":"bool","c":"char","s":"short","i":"int","l":"long","f":"float","d":"double","w":"wchar_t","a":"signed char","h":"unsigned char","t":"unsigned short","j":"unsigned int","m":"unsigned long","x":"long long","y":"unsigned long long","z":"..."};var subs=[];var first=true;function dump(x){if(x)Module.print(x);Module.print(func);var pre="";for(var a=0;a<i;a++)pre+=" ";Module.print(pre+"^")}function parseNested(){i++;if(func[i]==="K")i++;var parts=[];while(func[i]!=="E"){if(func[i]==="S"){i++;var next=func.indexOf("_",i);var num=func.substring(i,next)||0;parts.push(subs[num]||"?");i=next+1;continue}if(func[i]==="C"){parts.push(parts[parts.length-1]);i+=2;continue}var size=parseInt(func.substr(i));var pre=size.toString().length;if(!size||!pre){i--;break}var curr=func.substr(i+pre,size);parts.push(curr);subs.push(curr);i+=pre+size}i++;return parts}function parse(rawList,limit,allowVoid){limit=limit||Infinity;var ret="",list=[];function flushList(){return"("+list.join(", ")+")"}var name;if(func[i]==="N"){name=parseNested().join("::");limit--;if(limit===0)return rawList?[name]:name}else{if(func[i]==="K"||first&&func[i]==="L")i++;var size=parseInt(func.substr(i));if(size){var pre=size.toString().length;name=func.substr(i+pre,size);i+=pre+size}}first=false;if(func[i]==="I"){i++;var iList=parse(true);var iRet=parse(true,1,true);ret+=iRet[0]+" "+name+"<"+iList.join(", ")+">"}else{ret=name}paramLoop:while(i<func.length&&limit-->0){var c=func[i++];if(c in basicTypes){list.push(basicTypes[c])}else{switch(c){case"P":list.push(parse(true,1,true)[0]+"*");break;case"R":list.push(parse(true,1,true)[0]+"&");break;case"L":{i++;var end=func.indexOf("E",i);var size=end-i;list.push(func.substr(i,size));i+=size+2;break};case"A":{var size=parseInt(func.substr(i));i+=size.toString().length;if(func[i]!=="_")throw"?";i++;list.push(parse(true,1,true)[0]+" ["+size+"]");break};case"E":break paramLoop;default:ret+="?"+c;break paramLoop}}}if(!allowVoid&&list.length===1&&list[0]==="void")list=[];if(rawList){if(ret){list.push(ret+"?")}return list}else{return ret+flushList()}}var parsed=func;try{if(func=="Object._main"||func=="_main"){return"main()"}if(typeof func==="number")func=Pointer_stringify(func);if(func[0]!=="_")return func;if(func[1]!=="_")return func;if(func[2]!=="Z")return func;switch(func[3]){case"n":return"operator new()";case"d":return"operator delete()"}parsed=parse()}catch(e){parsed+="?"}if(parsed.indexOf("?")>=0&&!hasLibcxxabi){Runtime.warnOnce("warning: a problem occurred in builtin C++ name demangling; build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling")}return parsed}function demangleAll(text){return text.replace(/__Z[\w\d_]+/g,(function(x){var y=demangle(x);return x===y?x:x+" ["+y+"]"}))}function jsStackTrace(){var err=new Error;if(!err.stack){try{throw new Error(0)}catch(e){err=e}if(!err.stack){return"(no stack trace available)"}}return err.stack.toString()}function stackTrace(){return demangleAll(jsStackTrace())}Module["stackTrace"]=stackTrace;var PAGE_SIZE=4096;function alignMemoryPage(x){if(x%4096>0){x+=4096-x%4096}return x}var HEAP;var HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;var STATIC_BASE=0,STATICTOP=0,staticSealed=false;var STACK_BASE=0,STACKTOP=0,STACK_MAX=0;var DYNAMIC_BASE=0,DYNAMICTOP=0;function abortOnCannotGrowMemory(){abort("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+TOTAL_MEMORY+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which adjusts the size at runtime but prevents some optimizations, (3) set Module.TOTAL_MEMORY to a higher value before the program runs, or if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")}function enlargeMemory(){abortOnCannotGrowMemory()}var TOTAL_STACK=Module["TOTAL_STACK"]||5242880;var TOTAL_MEMORY=Module["TOTAL_MEMORY"]||16777216;var totalMemory=64*1024;while(totalMemory<TOTAL_MEMORY||totalMemory<2*TOTAL_STACK){if(totalMemory<16*1024*1024){totalMemory*=2}else{totalMemory+=16*1024*1024}}if(totalMemory!==TOTAL_MEMORY){TOTAL_MEMORY=totalMemory}assert(typeof Int32Array!=="undefined"&&typeof Float64Array!=="undefined"&&!!(new Int32Array(1))["subarray"]&&!!(new Int32Array(1))["set"],"JS engine does not provide full typed array support");var buffer;buffer=new ArrayBuffer(TOTAL_MEMORY);HEAP8=new Int8Array(buffer);HEAP16=new Int16Array(buffer);HEAP32=new Int32Array(buffer);HEAPU8=new Uint8Array(buffer);HEAPU16=new Uint16Array(buffer);HEAPU32=new Uint32Array(buffer);HEAPF32=new Float32Array(buffer);HEAPF64=new Float64Array(buffer);HEAP32[0]=255;assert(HEAPU8[0]===255&&HEAPU8[3]===0,"Typed arrays 2 must be run on a little-endian system");Module["HEAP"]=HEAP;Module["buffer"]=buffer;Module["HEAP8"]=HEAP8;Module["HEAP16"]=HEAP16;Module["HEAP32"]=HEAP32;Module["HEAPU8"]=HEAPU8;Module["HEAPU16"]=HEAPU16;Module["HEAPU32"]=HEAPU32;Module["HEAPF32"]=HEAPF32;Module["HEAPF64"]=HEAPF64;function callRuntimeCallbacks(callbacks){while(callbacks.length>0){var callback=callbacks.shift();if(typeof callback=="function"){callback();continue}var func=callback.func;if(typeof func==="number"){if(callback.arg===undefined){Runtime.dynCall("v",func)}else{Runtime.dynCall("vi",func,[callback.arg])}}else{func(callback.arg===undefined?null:callback.arg)}}}var __ATPRERUN__=[];var __ATINIT__=[];var __ATMAIN__=[];var __ATEXIT__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;var runtimeExited=false;function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(__ATPRERUN__)}function ensureInitRuntime(){if(runtimeInitialized)return;runtimeInitialized=true;callRuntimeCallbacks(__ATINIT__)}function preMain(){callRuntimeCallbacks(__ATMAIN__)}function exitRuntime(){callRuntimeCallbacks(__ATEXIT__);runtimeExited=true}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}Module["addOnPreRun"]=addOnPreRun;function addOnInit(cb){__ATINIT__.unshift(cb)}Module["addOnInit"]=addOnInit;function addOnPreMain(cb){__ATMAIN__.unshift(cb)}Module["addOnPreMain"]=addOnPreMain;function addOnExit(cb){__ATEXIT__.unshift(cb)}Module["addOnExit"]=addOnExit;function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}Module["addOnPostRun"]=addOnPostRun;function intArrayFromString(stringy,dontAddNull,length){var len=length>0?length:lengthBytesUTF8(stringy)+1;var u8array=new Array(len);var numBytesWritten=stringToUTF8Array(stringy,u8array,0,u8array.length);if(dontAddNull)u8array.length=numBytesWritten;return u8array}Module["intArrayFromString"]=intArrayFromString;function intArrayToString(array){var ret=[];for(var i=0;i<array.length;i++){var chr=array[i];if(chr>255){chr&=255}ret.push(String.fromCharCode(chr))}return ret.join("")}Module["intArrayToString"]=intArrayToString;function writeStringToMemory(string,buffer,dontAddNull){var array=intArrayFromString(string,dontAddNull);var i=0;while(i<array.length){var chr=array[i];HEAP8[buffer+i>>0]=chr;i=i+1}}Module["writeStringToMemory"]=writeStringToMemory;function writeArrayToMemory(array,buffer){for(var i=0;i<array.length;i++){HEAP8[buffer++>>0]=array[i]}}Module["writeArrayToMemory"]=writeArrayToMemory;function writeAsciiToMemory(str,buffer,dontAddNull){for(var i=0;i<str.length;++i){HEAP8[buffer++>>0]=str.charCodeAt(i)}if(!dontAddNull)HEAP8[buffer>>0]=0}Module["writeAsciiToMemory"]=writeAsciiToMemory;function unSign(value,bits,ignore){if(value>=0){return value}return bits<=32?2*Math.abs(1<<bits-1)+value:Math.pow(2,bits)+value}function reSign(value,bits,ignore){if(value<=0){return value}var half=bits<=32?Math.abs(1<<bits-1):Math.pow(2,bits-1);if(value>=half&&(bits<=32||value>half)){value=-2*half+value}return value}if(!Math["imul"]||Math["imul"](4294967295,5)!==-5)Math["imul"]=function imul(a,b){var ah=a>>>16;var al=a&65535;var bh=b>>>16;var bl=b&65535;return al*bl+(ah*bl+al*bh<<16)|0};Math.imul=Math["imul"];if(!Math["clz32"])Math["clz32"]=(function(x){x=x>>>0;for(var i=0;i<32;i++){if(x&1<<31-i)return i}return 32});Math.clz32=Math["clz32"];var Math_abs=Math.abs;var Math_cos=Math.cos;var Math_sin=Math.sin;var Math_tan=Math.tan;var Math_acos=Math.acos;var Math_asin=Math.asin;var Math_atan=Math.atan;var Math_atan2=Math.atan2;var Math_exp=Math.exp;var Math_log=Math.log;var Math_sqrt=Math.sqrt;var Math_ceil=Math.ceil;var Math_floor=Math.floor;var Math_pow=Math.pow;var Math_imul=Math.imul;var Math_fround=Math.fround;var Math_min=Math.min;var Math_clz32=Math.clz32;var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;function getUniqueRunDependency(id){return id}function addRunDependency(id){runDependencies++;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}}Module["addRunDependency"]=addRunDependency;function removeRunDependency(id){runDependencies--;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}Module["removeRunDependency"]=removeRunDependency;Module["preloadedImages"]={};Module["preloadedAudios"]={};var memoryInitializer=null;var ASM_CONSTS=[];STATIC_BASE=8;STATICTOP=STATIC_BASE+752;__ATINIT__.push();allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,60,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,2,0,0,0,239,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,82,101,97,108,32,70,70,84,32,111,112,116,105,109,105,122,97,116,105,111,110,32,109,117,115,116,32,98,101,32,101,118,101,110,46,10,0,107,105,115,115,32,102,102,116,32,117,115,97,103,101,32,101,114,114,111,114,58,32,105,109,112,114,111,112,101,114,32,97,108,108,111,99,10,0,0,0,0,0,0,0,0,0],"i8",ALLOC_NONE,Runtime.GLOBAL_BASE);var tempDoublePtr=Runtime.alignMemory(allocate(12,"i8",ALLOC_STATIC),8);assert(tempDoublePtr%8==0);function copyTempFloat(ptr){HEAP8[tempDoublePtr]=HEAP8[ptr];HEAP8[tempDoublePtr+1]=HEAP8[ptr+1];HEAP8[tempDoublePtr+2]=HEAP8[ptr+2];HEAP8[tempDoublePtr+3]=HEAP8[ptr+3]}function copyTempDouble(ptr){HEAP8[tempDoublePtr]=HEAP8[ptr];HEAP8[tempDoublePtr+1]=HEAP8[ptr+1];HEAP8[tempDoublePtr+2]=HEAP8[ptr+2];HEAP8[tempDoublePtr+3]=HEAP8[ptr+3];HEAP8[tempDoublePtr+4]=HEAP8[ptr+4];HEAP8[tempDoublePtr+5]=HEAP8[ptr+5];HEAP8[tempDoublePtr+6]=HEAP8[ptr+6];HEAP8[tempDoublePtr+7]=HEAP8[ptr+7]}function __exit(status){Module["exit"](status)}function _exit(status){__exit(status)}function ___setErrNo(value){if(Module["___errno_location"])HEAP32[Module["___errno_location"]()>>2]=value;return value}var ERRNO_CODES={EPERM:1,ENOENT:2,ESRCH:3,EINTR:4,EIO:5,ENXIO:6,E2BIG:7,ENOEXEC:8,EBADF:9,ECHILD:10,EAGAIN:11,EWOULDBLOCK:11,ENOMEM:12,EACCES:13,EFAULT:14,ENOTBLK:15,EBUSY:16,EEXIST:17,EXDEV:18,ENODEV:19,ENOTDIR:20,EISDIR:21,EINVAL:22,ENFILE:23,EMFILE:24,ENOTTY:25,ETXTBSY:26,EFBIG:27,ENOSPC:28,ESPIPE:29,EROFS:30,EMLINK:31,EPIPE:32,EDOM:33,ERANGE:34,ENOMSG:42,EIDRM:43,ECHRNG:44,EL2NSYNC:45,EL3HLT:46,EL3RST:47,ELNRNG:48,EUNATCH:49,ENOCSI:50,EL2HLT:51,EDEADLK:35,ENOLCK:37,EBADE:52,EBADR:53,EXFULL:54,ENOANO:55,EBADRQC:56,EBADSLT:57,EDEADLOCK:35,EBFONT:59,ENOSTR:60,ENODATA:61,ETIME:62,ENOSR:63,ENONET:64,ENOPKG:65,EREMOTE:66,ENOLINK:67,EADV:68,ESRMNT:69,ECOMM:70,EPROTO:71,EMULTIHOP:72,EDOTDOT:73,EBADMSG:74,ENOTUNIQ:76,EBADFD:77,EREMCHG:78,ELIBACC:79,ELIBBAD:80,ELIBSCN:81,ELIBMAX:82,ELIBEXEC:83,ENOSYS:38,ENOTEMPTY:39,ENAMETOOLONG:36,ELOOP:40,EOPNOTSUPP:95,EPFNOSUPPORT:96,ECONNRESET:104,ENOBUFS:105,EAFNOSUPPORT:97,EPROTOTYPE:91,ENOTSOCK:88,ENOPROTOOPT:92,ESHUTDOWN:108,ECONNREFUSED:111,EADDRINUSE:98,ECONNABORTED:103,ENETUNREACH:101,ENETDOWN:100,ETIMEDOUT:110,EHOSTDOWN:112,EHOSTUNREACH:113,EINPROGRESS:115,EALREADY:114,EDESTADDRREQ:89,EMSGSIZE:90,EPROTONOSUPPORT:93,ESOCKTNOSUPPORT:94,EADDRNOTAVAIL:99,ENETRESET:102,EISCONN:106,ENOTCONN:107,ETOOMANYREFS:109,EUSERS:87,EDQUOT:122,ESTALE:116,ENOTSUP:95,ENOMEDIUM:123,EILSEQ:84,EOVERFLOW:75,ECANCELED:125,ENOTRECOVERABLE:131,EOWNERDEAD:130,ESTRPIPE:86};function _sysconf(name){switch(name){case 30:return PAGE_SIZE;case 85:return totalMemory/PAGE_SIZE;case 132:case 133:case 12:case 137:case 138:case 15:case 235:case 16:case 17:case 18:case 19:case 20:case 149:case 13:case 10:case 236:case 153:case 9:case 21:case 22:case 159:case 154:case 14:case 77:case 78:case 139:case 80:case 81:case 82:case 68:case 67:case 164:case 11:case 29:case 47:case 48:case 95:case 52:case 51:case 46:return 200809;case 79:return 0;case 27:case 246:case 127:case 128:case 23:case 24:case 160:case 161:case 181:case 182:case 242:case 183:case 184:case 243:case 244:case 245:case 165:case 178:case 179:case 49:case 50:case 168:case 169:case 175:case 170:case 171:case 172:case 97:case 76:case 32:case 173:case 35:return-1;case 176:case 177:case 7:case 155:case 8:case 157:case 125:case 126:case 92:case 93:case 129:case 130:case 131:case 94:case 91:return 1;case 74:case 60:case 69:case 70:case 4:return 1024;case 31:case 42:case 72:return 32;case 87:case 26:case 33:return 2147483647;case 34:case 1:return 47839;case 38:case 36:return 99;case 43:case 37:return 2048;case 0:return 2097152;case 3:return 65536;case 28:return 32768;case 44:return 32767;case 75:return 16384;case 39:return 1e3;case 89:return 700;case 71:return 256;case 40:return 255;case 2:return 100;case 180:return 64;case 25:return 20;case 5:return 16;case 6:return 6;case 73:return 4;case 84:{if(typeof navigator==="object")return navigator["hardwareConcurrency"]||1;return 1}}___setErrNo(ERRNO_CODES.EINVAL);return-1}Module["_memset"]=_memset;function _pthread_cleanup_push(routine,arg){__ATEXIT__.push((function(){Runtime.dynCall("vi",routine,[arg])}));_pthread_cleanup_push.level=__ATEXIT__.length}function _pthread_cleanup_pop(){assert(_pthread_cleanup_push.level==__ATEXIT__.length,"cannot pop if something else added meanwhile!");__ATEXIT__.pop();_pthread_cleanup_push.level=__ATEXIT__.length}function _abort(){Module["abort"]()}function _emscripten_memcpy_big(dest,src,num){HEAPU8.set(HEAPU8.subarray(src,src+num),dest);return dest}Module["_memcpy"]=_memcpy;var SYSCALLS={varargs:0,get:(function(varargs){SYSCALLS.varargs+=4;var ret=HEAP32[SYSCALLS.varargs-4>>2];return ret}),getStr:(function(){var ret=Pointer_stringify(SYSCALLS.get());return ret}),get64:(function(){var low=SYSCALLS.get(),high=SYSCALLS.get();if(low>=0)assert(high===0);else assert(high===-1);return low}),getZero:(function(){assert(SYSCALLS.get()===0)})};function ___syscall6(which,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD();FS.close(stream);return 0}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}var _cos=Math_cos;function _sbrk(bytes){var self=_sbrk;if(!self.called){DYNAMICTOP=alignMemoryPage(DYNAMICTOP);self.called=true;assert(Runtime.dynamicAlloc);self.alloc=Runtime.dynamicAlloc;Runtime.dynamicAlloc=(function(){abort("cannot dynamically allocate, sbrk now has control")})}var ret=DYNAMICTOP;if(bytes!=0){var success=self.alloc(bytes);if(!success)return-1>>>0}return ret}var _floor=Math_floor;var _sqrt=Math_sqrt;function _time(ptr){var ret=Date.now()/1e3|0;if(ptr){HEAP32[ptr>>2]=ret}return ret}function _pthread_self(){return 0}function ___syscall140(which,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD(),offset_high=SYSCALLS.get(),offset_low=SYSCALLS.get(),result=SYSCALLS.get(),whence=SYSCALLS.get();var offset=offset_low;assert(offset_high===0);FS.llseek(stream,offset,whence);HEAP32[result>>2]=stream.position;if(stream.getdents&&offset===0&&whence===0)stream.getdents=null;return 0}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}function ___syscall146(which,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.get(),iov=SYSCALLS.get(),iovcnt=SYSCALLS.get();var ret=0;if(!___syscall146.buffer)___syscall146.buffer=[];var buffer=___syscall146.buffer;for(var i=0;i<iovcnt;i++){var ptr=HEAP32[iov+i*8>>2];var len=HEAP32[iov+(i*8+4)>>2];for(var j=0;j<len;j++){var curr=HEAPU8[ptr+j];if(curr===0||curr===10){Module["print"](UTF8ArrayToString(buffer,0));buffer.length=0}else{buffer.push(curr)}}ret+=len}return ret}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}var _sin=Math_sin;STACK_BASE=STACKTOP=Runtime.alignMemory(STATICTOP);staticSealed=true;STACK_MAX=STACK_BASE+TOTAL_STACK;DYNAMIC_BASE=DYNAMICTOP=Runtime.alignMemory(STACK_MAX);assert(DYNAMIC_BASE<TOTAL_MEMORY,"TOTAL_MEMORY not big enough for stack");function invoke_ii(index,a1){try{return Module["dynCall_ii"](index,a1)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;asm["setThrew"](1,0)}}function invoke_iiii(index,a1,a2,a3){try{return Module["dynCall_iiii"](index,a1,a2,a3)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;asm["setThrew"](1,0)}}function invoke_vi(index,a1){try{Module["dynCall_vi"](index,a1)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;asm["setThrew"](1,0)}}Module.asmGlobalArg={"Math":Math,"Int8Array":Int8Array,"Int16Array":Int16Array,"Int32Array":Int32Array,"Uint8Array":Uint8Array,"Uint16Array":Uint16Array,"Uint32Array":Uint32Array,"Float32Array":Float32Array,"Float64Array":Float64Array,"NaN":NaN,"Infinity":Infinity};Module.asmLibraryArg={"abort":abort,"assert":assert,"invoke_ii":invoke_ii,"invoke_iiii":invoke_iiii,"invoke_vi":invoke_vi,"_pthread_cleanup_pop":_pthread_cleanup_pop,"_floor":_floor,"_sin":_sin,"_cos":_cos,"_sysconf":_sysconf,"_pthread_self":_pthread_self,"___syscall6":___syscall6,"___setErrNo":___setErrNo,"_abort":_abort,"_sbrk":_sbrk,"_time":_time,"_pthread_cleanup_push":_pthread_cleanup_push,"_emscripten_memcpy_big":_emscripten_memcpy_big,"_sqrt":_sqrt,"___syscall140":___syscall140,"_exit":_exit,"__exit":__exit,"___syscall146":___syscall146,"STACKTOP":STACKTOP,"STACK_MAX":STACK_MAX,"tempDoublePtr":tempDoublePtr,"ABORT":ABORT};// EMSCRIPTEN_START_ASM
var asm=(function(global,env,buffer) {
"use asm";var a=new global.Int8Array(buffer);var b=new global.Int16Array(buffer);var c=new global.Int32Array(buffer);var d=new global.Uint8Array(buffer);var e=new global.Uint16Array(buffer);var f=new global.Uint32Array(buffer);var g=new global.Float32Array(buffer);var h=new global.Float64Array(buffer);var i=env.STACKTOP|0;var j=env.STACK_MAX|0;var k=env.tempDoublePtr|0;var l=env.ABORT|0;var m=0;var n=0;var o=0;var p=0;var q=global.NaN,r=global.Infinity;var s=0,t=0,u=0,v=0,w=0.0,x=0,y=0,z=0,A=0.0;var B=0;var C=0;var D=0;var E=0;var F=0;var G=0;var H=0;var I=0;var J=0;var K=0;var L=global.Math.floor;var M=global.Math.abs;var N=global.Math.sqrt;var O=global.Math.pow;var P=global.Math.cos;var Q=global.Math.sin;var R=global.Math.tan;var S=global.Math.acos;var T=global.Math.asin;var U=global.Math.atan;var V=global.Math.atan2;var W=global.Math.exp;var X=global.Math.log;var Y=global.Math.ceil;var Z=global.Math.imul;var _=global.Math.min;var $=global.Math.clz32;var aa=env.abort;var ba=env.assert;var ca=env.invoke_ii;var da=env.invoke_iiii;var ea=env.invoke_vi;var fa=env._pthread_cleanup_pop;var ga=env._floor;var ha=env._sin;var ia=env._cos;var ja=env._sysconf;var ka=env._pthread_self;var la=env.___syscall6;var ma=env.___setErrNo;var na=env._abort;var oa=env._sbrk;var pa=env._time;var qa=env._pthread_cleanup_push;var ra=env._emscripten_memcpy_big;var sa=env._sqrt;var ta=env.___syscall140;var ua=env._exit;var va=env.__exit;var wa=env.___syscall146;var xa=0.0;
// EMSCRIPTEN_START_FUNCS
function Ba(a){a=a|0;var b=0;b=i;i=i+a|0;i=i+15&-16;return b|0}function Ca(){return i|0}function Da(a){a=a|0;i=a}function Ea(a,b){a=a|0;b=b|0;i=a;j=b}function Fa(a,b){a=a|0;b=b|0;if(!m){m=a;n=b}}function Ga(b){b=b|0;a[k>>0]=a[b>>0];a[k+1>>0]=a[b+1>>0];a[k+2>>0]=a[b+2>>0];a[k+3>>0]=a[b+3>>0]}function Ha(b){b=b|0;a[k>>0]=a[b>>0];a[k+1>>0]=a[b+1>>0];a[k+2>>0]=a[b+2>>0];a[k+3>>0]=a[b+3>>0];a[k+4>>0]=a[b+4>>0];a[k+5>>0]=a[b+5>>0];a[k+6>>0]=a[b+6>>0];a[k+7>>0]=a[b+7>>0]}function Ia(a){a=a|0;B=a}function Ja(){return B|0}function Ka(a){a=a|0;cb(a);return}function La(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,h=0.0,i=0,j=0.0;f=(a<<3)+264|0;if(!e)i=bb(f)|0;else{if(!d)d=0;else d=(c[e>>2]|0)>>>0<f>>>0?0:d;c[e>>2]=f;i=d}if(!i)return i|0;c[i>>2]=a;e=i+4|0;c[e>>2]=b;h=+(a|0);a:do if((a|0)>0){f=b;d=0;while(1){j=+(d|0)*-6.283185307179586/h;j=(f|0)==0?j:-j;g[i+264+(d<<3)>>2]=+P(+j);g[i+264+(d<<3)+4>>2]=+Q(+j);d=d+1|0;if((d|0)==(a|0))break a;f=c[e>>2]|0}}while(0);h=+L(+(+N(+h)));f=a;e=i+8|0;d=4;while(1){b:do if((f|0)%(d|0)|0)while(1){switch(d|0){case 4:{d=2;break}case 2:{d=3;break}default:d=d+2|0}d=+(d|0)>h?f:d;if(!((f|0)%(d|0)|0))break b}while(0);f=(f|0)/(d|0)|0;c[e>>2]=d;c[e+4>>2]=f;if((f|0)<=1)break;else e=e+8|0}return i|0}function Ma(a,b,d,e,f,h){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;h=h|0;var i=0,j=0,l=0,m=0,n=0.0,o=0.0,p=0.0,q=0.0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0.0,z=0.0,A=0.0,B=0.0,C=0,D=0.0,E=0.0,F=0.0,G=0.0,H=0.0,I=0.0,J=0.0,K=0.0,L=0.0,M=0.0;w=c[f>>2]|0;m=f+8|0;x=c[f+4>>2]|0;r=a+((Z(x,w)|0)<<3)|0;if((x|0)==1){j=Z(e,d)|0;i=a;f=b;while(1){t=f;u=c[t+4>>2]|0;v=i;c[v>>2]=c[t>>2];c[v+4>>2]=u;i=i+8|0;if((i|0)==(r|0))break;else f=f+(j<<3)|0}}else{j=Z(w,d)|0;l=Z(e,d)|0;i=a;f=b;while(1){Ma(i,f,j,e,m,h);i=i+(x<<3)|0;if((i|0)==(r|0))break;else f=f+(l<<3)|0}}switch(w|0){case 2:{j=a;l=x;i=a+(x<<3)|0;f=h+264|0;while(1){o=+g[i>>2];y=+g[f>>2];a=i+4|0;n=+g[a>>2];q=+g[f+4>>2];p=o*y-n*q;q=y*n+o*q;g[i>>2]=+g[j>>2]-p;x=j+4|0;g[a>>2]=+g[x>>2]-q;g[j>>2]=p+ +g[j>>2];g[x>>2]=q+ +g[x>>2];l=l+-1|0;if(!l)break;else{j=j+8|0;i=i+8|0;f=f+(d<<3)|0}}return}case 3:{e=x<<1;n=+g[h+264+((Z(x,d)|0)<<3)+4>>2];l=h+264|0;m=d<<1;f=a;i=x;j=l;while(1){h=f+(x<<3)|0;o=+g[h>>2];p=+g[j>>2];a=f+(x<<3)+4|0;B=+g[a>>2];z=+g[j+4>>2];A=o*p-B*z;z=p*B+o*z;v=f+(e<<3)|0;o=+g[v>>2];B=+g[l>>2];w=f+(e<<3)+4|0;p=+g[w>>2];q=+g[l+4>>2];y=o*B-p*q;q=B*p+o*q;o=A+y;p=z+q;g[h>>2]=+g[f>>2]-o*.5;u=f+4|0;g[a>>2]=+g[u>>2]-p*.5;y=n*(A-y);q=n*(z-q);g[f>>2]=+g[f>>2]+o;g[u>>2]=p+ +g[u>>2];g[v>>2]=q+ +g[h>>2];g[w>>2]=+g[a>>2]-y;g[h>>2]=+g[h>>2]-q;g[a>>2]=y+ +g[a>>2];i=i+-1|0;if(!i)break;else{f=f+8|0;j=j+(d<<3)|0;l=l+(m<<3)|0}}return}case 4:{e=x<<1;b=x*3|0;f=h+264|0;r=d<<1;s=d*3|0;if(!(c[h+4>>2]|0)){i=a;j=x;l=f;m=f;while(1){v=i+(x<<3)|0;n=+g[v>>2];o=+g[l>>2];w=i+(x<<3)+4|0;y=+g[w>>2];D=+g[l+4>>2];E=n*o-y*D;D=o*y+n*D;C=i+(e<<3)|0;n=+g[C>>2];y=+g[m>>2];t=i+(e<<3)+4|0;o=+g[t>>2];p=+g[m+4>>2];q=n*y-o*p;p=y*o+n*p;h=i+(b<<3)|0;n=+g[h>>2];o=+g[f>>2];a=i+(b<<3)+4|0;y=+g[a>>2];z=+g[f+4>>2];B=n*o-y*z;z=o*y+n*z;n=+g[i>>2];y=n-q;u=i+4|0;o=+g[u>>2];A=o-p;n=q+n;g[i>>2]=n;o=p+o;g[u>>2]=o;p=E+B;q=D+z;B=E-B;z=D-z;g[C>>2]=n-p;g[t>>2]=o-q;g[i>>2]=p+ +g[i>>2];g[u>>2]=q+ +g[u>>2];g[v>>2]=y+z;g[w>>2]=A-B;g[h>>2]=y-z;g[a>>2]=A+B;j=j+-1|0;if(!j)break;else{i=i+8|0;l=l+(d<<3)|0;m=m+(r<<3)|0;f=f+(s<<3)|0}}return}else{i=a;j=x;l=f;m=f;while(1){w=i+(x<<3)|0;p=+g[w>>2];q=+g[l>>2];h=i+(x<<3)+4|0;A=+g[h>>2];o=+g[l+4>>2];n=p*q-A*o;o=q*A+p*o;t=i+(e<<3)|0;p=+g[t>>2];A=+g[m>>2];u=i+(e<<3)+4|0;q=+g[u>>2];y=+g[m+4>>2];z=p*A-q*y;y=A*q+p*y;a=i+(b<<3)|0;p=+g[a>>2];q=+g[f>>2];C=i+(b<<3)+4|0;A=+g[C>>2];B=+g[f+4>>2];E=p*q-A*B;B=q*A+p*B;p=+g[i>>2];A=p-z;v=i+4|0;q=+g[v>>2];D=q-y;p=z+p;g[i>>2]=p;q=y+q;g[v>>2]=q;y=n+E;z=o+B;E=n-E;B=o-B;g[t>>2]=p-y;g[u>>2]=q-z;g[i>>2]=y+ +g[i>>2];g[v>>2]=z+ +g[v>>2];g[w>>2]=A-B;g[h>>2]=D+E;g[a>>2]=A+B;g[C>>2]=D-E;j=j+-1|0;if(!j)break;else{i=i+8|0;l=l+(d<<3)|0;m=m+(r<<3)|0;f=f+(s<<3)|0}}return}}case 5:{C=Z(x,d)|0;n=+g[h+264+(C<<3)>>2];o=+g[h+264+(C<<3)+4>>2];C=Z(x,d<<1)|0;p=+g[h+264+(C<<3)>>2];q=+g[h+264+(C<<3)+4>>2];if((x|0)<=0)return;j=d*3|0;l=a;m=a+(x<<3)|0;e=a+(x<<1<<3)|0;b=a+(x*3<<3)|0;f=a+(x<<2<<3)|0;i=0;while(1){H=+g[l>>2];u=l+4|0;F=+g[u>>2];A=+g[m>>2];t=Z(i,d)|0;D=+g[h+264+(t<<3)>>2];v=m+4|0;M=+g[v>>2];I=+g[h+264+(t<<3)+4>>2];G=A*D-M*I;I=D*M+A*I;A=+g[e>>2];t=Z(i<<1,d)|0;M=+g[h+264+(t<<3)>>2];a=e+4|0;D=+g[a>>2];L=+g[h+264+(t<<3)+4>>2];J=A*M-D*L;L=M*D+A*L;A=+g[b>>2];t=Z(j,i)|0;D=+g[h+264+(t<<3)>>2];C=b+4|0;M=+g[C>>2];y=+g[h+264+(t<<3)+4>>2];E=A*D-M*y;y=D*M+A*y;A=+g[f>>2];t=Z(i<<2,d)|0;M=+g[h+264+(t<<3)>>2];w=f+4|0;D=+g[w>>2];B=+g[h+264+(t<<3)+4>>2];z=A*M-D*B;B=M*D+A*B;A=G+z;D=I+B;z=G-z;B=I-B;I=J+E;G=L+y;E=J-E;y=L-y;g[l>>2]=H+(I+A);g[u>>2]=F+(G+D);L=p*I+(H+n*A);J=p*G+(F+n*D);M=q*y+o*B;K=-(o*z)-q*E;g[m>>2]=L-M;g[v>>2]=J-K;g[f>>2]=M+L;g[w>>2]=K+J;A=n*I+(H+p*A);D=n*G+(F+p*D);B=o*y-q*B;E=q*z-o*E;g[e>>2]=B+A;g[a>>2]=E+D;g[b>>2]=A-B;g[C>>2]=D-E;i=i+1|0;if((i|0)==(x|0))break;else{l=l+8|0;m=m+8|0;e=e+8|0;b=b+8|0;f=f+8|0}}return}default:{t=c[h>>2]|0;v=bb(w<<3)|0;a:do if((x|0)>0?(w|0)>0:0){if((w|0)>1)u=0;else{m=0;while(1){f=m;i=0;while(1){h=a+(f<<3)|0;d=c[h+4>>2]|0;C=v+(i<<3)|0;c[C>>2]=c[h>>2];c[C+4>>2]=d;i=i+1|0;if((i|0)==(w|0))break;else f=f+x|0}i=v;f=c[i>>2]|0;i=c[i+4>>2]|0;j=m;l=0;while(1){C=a+(j<<3)|0;c[C>>2]=f;c[C+4>>2]=i;l=l+1|0;if((l|0)==(w|0))break;else j=j+x|0}m=m+1|0;if((m|0)==(x|0))break a}}do{f=u;i=0;while(1){r=a+(f<<3)|0;s=c[r+4>>2]|0;C=v+(i<<3)|0;c[C>>2]=c[r>>2];c[C+4>>2]=s;i=i+1|0;if((i|0)==(w|0))break;else f=f+x|0}i=v;f=c[i>>2]|0;i=c[i+4>>2]|0;n=(c[k>>2]=f,+g[k>>2]);e=u;r=0;while(1){j=a+(e<<3)|0;l=j;c[l>>2]=f;c[l+4>>2]=i;l=Z(e,d)|0;m=a+(e<<3)+4|0;o=n;p=+g[m>>2];b=1;s=0;do{C=s+l|0;s=C-((C|0)<(t|0)?0:t)|0;L=+g[v+(b<<3)>>2];J=+g[h+264+(s<<3)>>2];K=+g[v+(b<<3)+4>>2];M=+g[h+264+(s<<3)+4>>2];o=o+(L*J-K*M);g[j>>2]=o;p=p+(J*K+L*M);g[m>>2]=p;b=b+1|0}while((b|0)!=(w|0));r=r+1|0;if((r|0)==(w|0))break;else e=e+x|0}u=u+1|0}while((u|0)!=(x|0))}while(0);cb(v);return}}}function Na(a,b,d){a=a|0;b=b|0;d=d|0;if((b|0)==(d|0)){d=bb(c[a>>2]<<3)|0;Ma(d,b,1,1,a+8|0,a);fb(b|0,d|0,c[a>>2]<<3|0)|0;cb(d);return}else{Ma(d,b,1,1,a+8|0,a);return}}function Oa(a){a=a|0;cb(a);return}function Pa(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,h=0.0,j=0,k=0,l=0,m=0,n=0.0;l=i;i=i+16|0;k=l;if(a&1){Za(668,36,1,c[13]|0)|0;b=0;i=l;return b|0}j=a>>1;La(j,b,0,k)|0;f=c[k>>2]|0;a=f+12+(((j*3|0)/2|0)<<3)|0;if(e){m=(c[e>>2]|0)>>>0<a>>>0;c[e>>2]=a;if(m){m=0;i=l;return m|0}}else d=bb(a)|0;if(!d){m=0;i=l;return m|0}e=d+12|0;c[d>>2]=e;m=e+f|0;c[d+4>>2]=m;a=d+8|0;c[a>>2]=m+(j<<3);La(j,b,e,k)|0;e=(j|0)/2|0;if((j|0)<=1){m=d;i=l;return m|0}h=+(j|0);f=c[a>>2]|0;if(!b){a=0;do{m=a;a=a+1|0;n=(+(a|0)/h+.5)*-3.141592653589793;g[f+(m<<3)>>2]=+P(+n);g[f+(m<<3)+4>>2]=+Q(+n)}while((a|0)<(e|0));i=l;return d|0}else{a=0;do{m=a;a=a+1|0;n=(+(a|0)/h+.5)*-3.141592653589793;g[f+(m<<3)>>2]=+P(+n);g[f+(m<<3)+4>>2]=+Q(+-n)}while((a|0)<(e|0));i=l;return d|0}return 0}function Qa(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,h=0,i=0,j=0.0,k=0.0,l=0.0,m=0.0,n=0.0,o=0.0,p=0.0,q=0;e=c[a>>2]|0;if(c[e+4>>2]|0){Za(705,37,1,c[13]|0)|0;ua(1)}i=c[e>>2]|0;h=a+4|0;Na(e,b,c[h>>2]|0);h=c[h>>2]|0;k=+g[h>>2];j=+g[h+4>>2];g[d>>2]=k+j;g[d+(i<<3)>>2]=k-j;g[d+4>>2]=0.0;g[d+(i<<3)+4>>2]=0.0;f=(i|0)/2|0;if((i|0)<2)return;e=c[a+8>>2]|0;b=1;while(1){j=+g[h+(b<<3)>>2];o=+g[h+(b<<3)+4>>2];a=i-b|0;n=+g[h+(a<<3)>>2];p=+g[h+(a<<3)+4>>2];m=j+n;k=o-p;n=j-n;p=o+p;q=b+-1|0;o=+g[e+(q<<3)>>2];j=+g[e+(q<<3)+4>>2];l=n*o-p*j;j=p*o+n*j;g[d+(b<<3)>>2]=(m+l)*.5;g[d+(b<<3)+4>>2]=(k+j)*.5;g[d+(a<<3)>>2]=(m-l)*.5;g[d+(a<<3)+4>>2]=(j-k)*.5;if((b|0)<(f|0))b=b+1|0;else break}return}function Ra(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,h=0,i=0,j=0,k=0,l=0.0,m=0.0,n=0.0,o=0.0,p=0.0,q=0.0,r=0.0,s=0;f=c[a>>2]|0;if(!(c[f+4>>2]|0)){Za(705,37,1,c[13]|0)|0;ua(1)}j=c[f>>2]|0;i=b+(j<<3)|0;h=c[a+4>>2]|0;g[h>>2]=+g[b>>2]+ +g[i>>2];g[h+4>>2]=+g[b>>2]-+g[i>>2];i=(j|0)/2|0;if((j|0)<2){Na(f,h,d);return}a=c[a+8>>2]|0;e=1;while(1){l=+g[b+(e<<3)>>2];q=+g[b+(e<<3)+4>>2];k=j-e|0;p=+g[b+(k<<3)>>2];r=+g[b+(k<<3)+4>>2];o=l+p;m=q-r;p=l-p;r=q+r;s=e+-1|0;q=+g[a+(s<<3)>>2];l=+g[a+(s<<3)+4>>2];n=p*q-r*l;l=r*q+p*l;g[h+(e<<3)>>2]=o+n;g[h+(e<<3)+4>>2]=m+l;g[h+(k<<3)>>2]=o-n;g[h+(k<<3)+4>>2]=-(m-l);if((e|0)<(i|0))e=e+1|0;else break}Na(f,h,d);return}function Sa(){var a=0;if(!(c[2]|0))a=56;else a=c[(ka()|0)+60>>2]|0;return a|0}function Ta(a){a=a|0;if(a>>>0>4294963200){c[(Sa()|0)>>2]=0-a;a=-1}return a|0}function Ua(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0;q=i;i=i+48|0;n=q+16|0;m=q;e=q+32|0;o=a+28|0;f=c[o>>2]|0;c[e>>2]=f;p=a+20|0;f=(c[p>>2]|0)-f|0;c[e+4>>2]=f;c[e+8>>2]=b;c[e+12>>2]=d;k=a+60|0;l=a+44|0;b=2;f=f+d|0;while(1){if(!(c[2]|0)){c[n>>2]=c[k>>2];c[n+4>>2]=e;c[n+8>>2]=b;h=Ta(wa(146,n|0)|0)|0}else{qa(1,a|0);c[m>>2]=c[k>>2];c[m+4>>2]=e;c[m+8>>2]=b;h=Ta(wa(146,m|0)|0)|0;fa(0)}if((f|0)==(h|0)){f=6;break}if((h|0)<0){f=8;break}f=f-h|0;g=c[e+4>>2]|0;if(h>>>0<=g>>>0)if((b|0)==2){c[o>>2]=(c[o>>2]|0)+h;j=g;b=2}else j=g;else{j=c[l>>2]|0;c[o>>2]=j;c[p>>2]=j;j=c[e+12>>2]|0;h=h-g|0;e=e+8|0;b=b+-1|0}c[e>>2]=(c[e>>2]|0)+h;c[e+4>>2]=j-h}if((f|0)==6){n=c[l>>2]|0;c[a+16>>2]=n+(c[a+48>>2]|0);a=n;c[o>>2]=a;c[p>>2]=a}else if((f|0)==8){c[a+16>>2]=0;c[o>>2]=0;c[p>>2]=0;c[a>>2]=c[a>>2]|32;if((b|0)==2)d=0;else d=d-(c[e+4>>2]|0)|0}i=q;return d|0}function Va(a){a=a|0;var b=0,d=0;b=i;i=i+16|0;d=b;c[d>>2]=c[a+60>>2];a=Ta(la(6,d|0)|0)|0;i=b;return a|0}function Wa(b){b=b|0;var d=0,e=0;d=b+74|0;e=a[d>>0]|0;a[d>>0]=e+255|e;d=c[b>>2]|0;if(!(d&8)){c[b+8>>2]=0;c[b+4>>2]=0;d=c[b+44>>2]|0;c[b+28>>2]=d;c[b+20>>2]=d;c[b+16>>2]=d+(c[b+48>>2]|0);d=0}else{c[b>>2]=d|32;d=-1}return d|0}function Xa(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0;f=i;i=i+32|0;g=f;e=f+20|0;c[g>>2]=c[a+60>>2];c[g+4>>2]=0;c[g+8>>2]=b;c[g+12>>2]=e;c[g+16>>2]=d;if((Ta(ta(140,g|0)|0)|0)<0){c[e>>2]=-1;a=-1}else a=c[e>>2]|0;i=f;return a|0}function Ya(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0;f=e+16|0;g=c[f>>2]|0;if(!g)if(!(Wa(e)|0)){g=c[f>>2]|0;h=5}else f=0;else h=5;a:do if((h|0)==5){i=e+20|0;f=c[i>>2]|0;h=f;if((g-f|0)>>>0<d>>>0){f=za[c[e+36>>2]&3](e,b,d)|0;break}b:do if((a[e+75>>0]|0)>-1){f=d;while(1){if(!f){g=h;f=0;break b}g=f+-1|0;if((a[b+g>>0]|0)==10)break;else f=g}if((za[c[e+36>>2]&3](e,b,f)|0)>>>0<f>>>0)break a;d=d-f|0;b=b+f|0;g=c[i>>2]|0}else{g=h;f=0}while(0);fb(g|0,b|0,d|0)|0;c[i>>2]=(c[i>>2]|0)+d;f=f+d|0}while(0);return f|0}function Za(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;f=Z(d,b)|0;if((c[e+76>>2]|0)>-1){g=(_a(e)|0)==0;a=Ya(a,f,e)|0;if(!g)$a(e)}else a=Ya(a,f,e)|0;if((a|0)!=(f|0))d=(a>>>0)/(b>>>0)|0;return d|0}function _a(a){a=a|0;return 0}function $a(a){a=a|0;return}function ab(a){a=a|0;if(!(c[a+68>>2]|0))$a(a);return}function bb(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0;do if(a>>>0<245){o=a>>>0<11?16:a+11&-8;a=o>>>3;j=c[43]|0;b=j>>>a;if(b&3){b=(b&1^1)+a|0;d=212+(b<<1<<2)|0;e=d+8|0;f=c[e>>2]|0;g=f+8|0;h=c[g>>2]|0;do if((d|0)!=(h|0)){if(h>>>0<(c[47]|0)>>>0)na();a=h+12|0;if((c[a>>2]|0)==(f|0)){c[a>>2]=d;c[e>>2]=h;break}else na()}else c[43]=j&~(1<<b);while(0);L=b<<3;c[f+4>>2]=L|3;L=f+L+4|0;c[L>>2]=c[L>>2]|1;L=g;return L|0}h=c[45]|0;if(o>>>0>h>>>0){if(b){d=2<<a;d=b<<a&(d|0-d);d=(d&0-d)+-1|0;i=d>>>12&16;d=d>>>i;f=d>>>5&8;d=d>>>f;g=d>>>2&4;d=d>>>g;e=d>>>1&2;d=d>>>e;b=d>>>1&1;b=(f|i|g|e|b)+(d>>>b)|0;d=212+(b<<1<<2)|0;e=d+8|0;g=c[e>>2]|0;i=g+8|0;f=c[i>>2]|0;do if((d|0)!=(f|0)){if(f>>>0<(c[47]|0)>>>0)na();a=f+12|0;if((c[a>>2]|0)==(g|0)){c[a>>2]=d;c[e>>2]=f;k=c[45]|0;break}else na()}else{c[43]=j&~(1<<b);k=h}while(0);h=(b<<3)-o|0;c[g+4>>2]=o|3;e=g+o|0;c[e+4>>2]=h|1;c[e+h>>2]=h;if(k){f=c[48]|0;b=k>>>3;d=212+(b<<1<<2)|0;a=c[43]|0;b=1<<b;if(a&b){a=d+8|0;b=c[a>>2]|0;if(b>>>0<(c[47]|0)>>>0)na();else{l=a;m=b}}else{c[43]=a|b;l=d+8|0;m=d}c[l>>2]=f;c[m+12>>2]=f;c[f+8>>2]=m;c[f+12>>2]=d}c[45]=h;c[48]=e;L=i;return L|0}a=c[44]|0;if(a){d=(a&0-a)+-1|0;K=d>>>12&16;d=d>>>K;J=d>>>5&8;d=d>>>J;L=d>>>2&4;d=d>>>L;b=d>>>1&2;d=d>>>b;e=d>>>1&1;e=c[476+((J|K|L|b|e)+(d>>>e)<<2)>>2]|0;d=(c[e+4>>2]&-8)-o|0;b=e;while(1){a=c[b+16>>2]|0;if(!a){a=c[b+20>>2]|0;if(!a){j=e;break}}b=(c[a+4>>2]&-8)-o|0;L=b>>>0<d>>>0;d=L?b:d;b=a;e=L?a:e}g=c[47]|0;if(j>>>0<g>>>0)na();i=j+o|0;if(j>>>0>=i>>>0)na();h=c[j+24>>2]|0;e=c[j+12>>2]|0;do if((e|0)==(j|0)){b=j+20|0;a=c[b>>2]|0;if(!a){b=j+16|0;a=c[b>>2]|0;if(!a){n=0;break}}while(1){e=a+20|0;f=c[e>>2]|0;if(f){a=f;b=e;continue}e=a+16|0;f=c[e>>2]|0;if(!f)break;else{a=f;b=e}}if(b>>>0<g>>>0)na();else{c[b>>2]=0;n=a;break}}else{f=c[j+8>>2]|0;if(f>>>0<g>>>0)na();a=f+12|0;if((c[a>>2]|0)!=(j|0))na();b=e+8|0;if((c[b>>2]|0)==(j|0)){c[a>>2]=e;c[b>>2]=f;n=e;break}else na()}while(0);do if(h){a=c[j+28>>2]|0;b=476+(a<<2)|0;if((j|0)==(c[b>>2]|0)){c[b>>2]=n;if(!n){c[44]=c[44]&~(1<<a);break}}else{if(h>>>0<(c[47]|0)>>>0)na();a=h+16|0;if((c[a>>2]|0)==(j|0))c[a>>2]=n;else c[h+20>>2]=n;if(!n)break}b=c[47]|0;if(n>>>0<b>>>0)na();c[n+24>>2]=h;a=c[j+16>>2]|0;do if(a)if(a>>>0<b>>>0)na();else{c[n+16>>2]=a;c[a+24>>2]=n;break}while(0);a=c[j+20>>2]|0;if(a)if(a>>>0<(c[47]|0)>>>0)na();else{c[n+20>>2]=a;c[a+24>>2]=n;break}}while(0);if(d>>>0<16){L=d+o|0;c[j+4>>2]=L|3;L=j+L+4|0;c[L>>2]=c[L>>2]|1}else{c[j+4>>2]=o|3;c[i+4>>2]=d|1;c[i+d>>2]=d;a=c[45]|0;if(a){f=c[48]|0;b=a>>>3;e=212+(b<<1<<2)|0;a=c[43]|0;b=1<<b;if(a&b){a=e+8|0;b=c[a>>2]|0;if(b>>>0<(c[47]|0)>>>0)na();else{p=a;q=b}}else{c[43]=a|b;p=e+8|0;q=e}c[p>>2]=f;c[q+12>>2]=f;c[f+8>>2]=q;c[f+12>>2]=e}c[45]=d;c[48]=i}L=j+8|0;return L|0}}}else if(a>>>0<=4294967231){a=a+11|0;o=a&-8;j=c[44]|0;if(j){d=0-o|0;a=a>>>8;if(a)if(o>>>0>16777215)i=31;else{q=(a+1048320|0)>>>16&8;E=a<<q;p=(E+520192|0)>>>16&4;E=E<<p;i=(E+245760|0)>>>16&2;i=14-(p|q|i)+(E<<i>>>15)|0;i=o>>>(i+7|0)&1|i<<1}else i=0;b=c[476+(i<<2)>>2]|0;a:do if(!b){a=0;b=0;E=86}else{f=d;a=0;g=o<<((i|0)==31?0:25-(i>>>1)|0);h=b;b=0;while(1){e=c[h+4>>2]&-8;d=e-o|0;if(d>>>0<f>>>0)if((e|0)==(o|0)){a=h;b=h;E=90;break a}else b=h;else d=f;e=c[h+20>>2]|0;h=c[h+16+(g>>>31<<2)>>2]|0;a=(e|0)==0|(e|0)==(h|0)?a:e;e=(h|0)==0;if(e){E=86;break}else{f=d;g=g<<(e&1^1)}}}while(0);if((E|0)==86){if((a|0)==0&(b|0)==0){a=2<<i;a=j&(a|0-a);if(!a)break;q=(a&0-a)+-1|0;m=q>>>12&16;q=q>>>m;l=q>>>5&8;q=q>>>l;n=q>>>2&4;q=q>>>n;p=q>>>1&2;q=q>>>p;a=q>>>1&1;a=c[476+((l|m|n|p|a)+(q>>>a)<<2)>>2]|0}if(!a){i=d;j=b}else E=90}if((E|0)==90)while(1){E=0;q=(c[a+4>>2]&-8)-o|0;e=q>>>0<d>>>0;d=e?q:d;b=e?a:b;e=c[a+16>>2]|0;if(e){a=e;E=90;continue}a=c[a+20>>2]|0;if(!a){i=d;j=b;break}else E=90}if((j|0)!=0?i>>>0<((c[45]|0)-o|0)>>>0:0){f=c[47]|0;if(j>>>0<f>>>0)na();h=j+o|0;if(j>>>0>=h>>>0)na();g=c[j+24>>2]|0;d=c[j+12>>2]|0;do if((d|0)==(j|0)){b=j+20|0;a=c[b>>2]|0;if(!a){b=j+16|0;a=c[b>>2]|0;if(!a){s=0;break}}while(1){d=a+20|0;e=c[d>>2]|0;if(e){a=e;b=d;continue}d=a+16|0;e=c[d>>2]|0;if(!e)break;else{a=e;b=d}}if(b>>>0<f>>>0)na();else{c[b>>2]=0;s=a;break}}else{e=c[j+8>>2]|0;if(e>>>0<f>>>0)na();a=e+12|0;if((c[a>>2]|0)!=(j|0))na();b=d+8|0;if((c[b>>2]|0)==(j|0)){c[a>>2]=d;c[b>>2]=e;s=d;break}else na()}while(0);do if(g){a=c[j+28>>2]|0;b=476+(a<<2)|0;if((j|0)==(c[b>>2]|0)){c[b>>2]=s;if(!s){c[44]=c[44]&~(1<<a);break}}else{if(g>>>0<(c[47]|0)>>>0)na();a=g+16|0;if((c[a>>2]|0)==(j|0))c[a>>2]=s;else c[g+20>>2]=s;if(!s)break}b=c[47]|0;if(s>>>0<b>>>0)na();c[s+24>>2]=g;a=c[j+16>>2]|0;do if(a)if(a>>>0<b>>>0)na();else{c[s+16>>2]=a;c[a+24>>2]=s;break}while(0);a=c[j+20>>2]|0;if(a)if(a>>>0<(c[47]|0)>>>0)na();else{c[s+20>>2]=a;c[a+24>>2]=s;break}}while(0);do if(i>>>0>=16){c[j+4>>2]=o|3;c[h+4>>2]=i|1;c[h+i>>2]=i;a=i>>>3;if(i>>>0<256){d=212+(a<<1<<2)|0;b=c[43]|0;a=1<<a;if(b&a){a=d+8|0;b=c[a>>2]|0;if(b>>>0<(c[47]|0)>>>0)na();else{u=a;v=b}}else{c[43]=b|a;u=d+8|0;v=d}c[u>>2]=h;c[v+12>>2]=h;c[h+8>>2]=v;c[h+12>>2]=d;break}a=i>>>8;if(a)if(i>>>0>16777215)d=31;else{K=(a+1048320|0)>>>16&8;L=a<<K;J=(L+520192|0)>>>16&4;L=L<<J;d=(L+245760|0)>>>16&2;d=14-(J|K|d)+(L<<d>>>15)|0;d=i>>>(d+7|0)&1|d<<1}else d=0;e=476+(d<<2)|0;c[h+28>>2]=d;a=h+16|0;c[a+4>>2]=0;c[a>>2]=0;a=c[44]|0;b=1<<d;if(!(a&b)){c[44]=a|b;c[e>>2]=h;c[h+24>>2]=e;c[h+12>>2]=h;c[h+8>>2]=h;break}f=i<<((d|0)==31?0:25-(d>>>1)|0);a=c[e>>2]|0;while(1){if((c[a+4>>2]&-8|0)==(i|0)){d=a;E=148;break}b=a+16+(f>>>31<<2)|0;d=c[b>>2]|0;if(!d){E=145;break}else{f=f<<1;a=d}}if((E|0)==145)if(b>>>0<(c[47]|0)>>>0)na();else{c[b>>2]=h;c[h+24>>2]=a;c[h+12>>2]=h;c[h+8>>2]=h;break}else if((E|0)==148){a=d+8|0;b=c[a>>2]|0;L=c[47]|0;if(b>>>0>=L>>>0&d>>>0>=L>>>0){c[b+12>>2]=h;c[a>>2]=h;c[h+8>>2]=b;c[h+12>>2]=d;c[h+24>>2]=0;break}else na()}}else{L=i+o|0;c[j+4>>2]=L|3;L=j+L+4|0;c[L>>2]=c[L>>2]|1}while(0);L=j+8|0;return L|0}}}else o=-1;while(0);d=c[45]|0;if(d>>>0>=o>>>0){a=d-o|0;b=c[48]|0;if(a>>>0>15){L=b+o|0;c[48]=L;c[45]=a;c[L+4>>2]=a|1;c[L+a>>2]=a;c[b+4>>2]=o|3}else{c[45]=0;c[48]=0;c[b+4>>2]=d|3;L=b+d+4|0;c[L>>2]=c[L>>2]|1}L=b+8|0;return L|0}a=c[46]|0;if(a>>>0>o>>>0){J=a-o|0;c[46]=J;L=c[49]|0;K=L+o|0;c[49]=K;c[K+4>>2]=J|1;c[L+4>>2]=o|3;L=L+8|0;return L|0}do if(!(c[161]|0)){a=ja(30)|0;if(!(a+-1&a)){c[163]=a;c[162]=a;c[164]=-1;c[165]=-1;c[166]=0;c[154]=0;c[161]=(pa(0)|0)&-16^1431655768;break}else na()}while(0);h=o+48|0;g=c[163]|0;i=o+47|0;f=g+i|0;g=0-g|0;j=f&g;if(j>>>0<=o>>>0){L=0;return L|0}a=c[153]|0;if((a|0)!=0?(u=c[151]|0,v=u+j|0,v>>>0<=u>>>0|v>>>0>a>>>0):0){L=0;return L|0}b:do if(!(c[154]&4)){a=c[49]|0;c:do if(a){d=620;while(1){b=c[d>>2]|0;if(b>>>0<=a>>>0?(r=d+4|0,(b+(c[r>>2]|0)|0)>>>0>a>>>0):0){e=d;d=r;break}d=c[d+8>>2]|0;if(!d){E=173;break c}}a=f-(c[46]|0)&g;if(a>>>0<2147483647){b=oa(a|0)|0;if((b|0)==((c[e>>2]|0)+(c[d>>2]|0)|0)){if((b|0)!=(-1|0)){h=b;f=a;E=193;break b}}else E=183}}else E=173;while(0);do if((E|0)==173?(t=oa(0)|0,(t|0)!=(-1|0)):0){a=t;b=c[162]|0;d=b+-1|0;if(!(d&a))a=j;else a=j-a+(d+a&0-b)|0;b=c[151]|0;d=b+a|0;if(a>>>0>o>>>0&a>>>0<2147483647){v=c[153]|0;if((v|0)!=0?d>>>0<=b>>>0|d>>>0>v>>>0:0)break;b=oa(a|0)|0;if((b|0)==(t|0)){h=t;f=a;E=193;break b}else E=183}}while(0);d:do if((E|0)==183){d=0-a|0;do if(h>>>0>a>>>0&(a>>>0<2147483647&(b|0)!=(-1|0))?(w=c[163]|0,w=i-a+w&0-w,w>>>0<2147483647):0)if((oa(w|0)|0)==(-1|0)){oa(d|0)|0;break d}else{a=w+a|0;break}while(0);if((b|0)!=(-1|0)){h=b;f=a;E=193;break b}}while(0);c[154]=c[154]|4;E=190}else E=190;while(0);if((((E|0)==190?j>>>0<2147483647:0)?(x=oa(j|0)|0,y=oa(0)|0,x>>>0<y>>>0&((x|0)!=(-1|0)&(y|0)!=(-1|0))):0)?(z=y-x|0,z>>>0>(o+40|0)>>>0):0){h=x;f=z;E=193}if((E|0)==193){a=(c[151]|0)+f|0;c[151]=a;if(a>>>0>(c[152]|0)>>>0)c[152]=a;i=c[49]|0;do if(i){e=620;do{a=c[e>>2]|0;b=e+4|0;d=c[b>>2]|0;if((h|0)==(a+d|0)){A=a;B=b;C=d;D=e;E=203;break}e=c[e+8>>2]|0}while((e|0)!=0);if(((E|0)==203?(c[D+12>>2]&8|0)==0:0)?i>>>0<h>>>0&i>>>0>=A>>>0:0){c[B>>2]=C+f;L=i+8|0;L=(L&7|0)==0?0:0-L&7;K=i+L|0;L=f-L+(c[46]|0)|0;c[49]=K;c[46]=L;c[K+4>>2]=L|1;c[K+L+4>>2]=40;c[50]=c[165];break}a=c[47]|0;if(h>>>0<a>>>0){c[47]=h;j=h}else j=a;d=h+f|0;a=620;while(1){if((c[a>>2]|0)==(d|0)){b=a;E=211;break}a=c[a+8>>2]|0;if(!a){b=620;break}}if((E|0)==211)if(!(c[a+12>>2]&8)){c[b>>2]=h;l=a+4|0;c[l>>2]=(c[l>>2]|0)+f;l=h+8|0;l=h+((l&7|0)==0?0:0-l&7)|0;a=d+8|0;a=d+((a&7|0)==0?0:0-a&7)|0;k=l+o|0;g=a-l-o|0;c[l+4>>2]=o|3;do if((a|0)!=(i|0)){if((a|0)==(c[48]|0)){L=(c[45]|0)+g|0;c[45]=L;c[48]=k;c[k+4>>2]=L|1;c[k+L>>2]=L;break}b=c[a+4>>2]|0;if((b&3|0)==1){i=b&-8;f=b>>>3;e:do if(b>>>0>=256){h=c[a+24>>2]|0;e=c[a+12>>2]|0;do if((e|0)==(a|0)){d=a+16|0;e=d+4|0;b=c[e>>2]|0;if(!b){b=c[d>>2]|0;if(!b){J=0;break}}else d=e;while(1){e=b+20|0;f=c[e>>2]|0;if(f){b=f;d=e;continue}e=b+16|0;f=c[e>>2]|0;if(!f)break;else{b=f;d=e}}if(d>>>0<j>>>0)na();else{c[d>>2]=0;J=b;break}}else{f=c[a+8>>2]|0;if(f>>>0<j>>>0)na();b=f+12|0;if((c[b>>2]|0)!=(a|0))na();d=e+8|0;if((c[d>>2]|0)==(a|0)){c[b>>2]=e;c[d>>2]=f;J=e;break}else na()}while(0);if(!h)break;b=c[a+28>>2]|0;d=476+(b<<2)|0;do if((a|0)!=(c[d>>2]|0)){if(h>>>0<(c[47]|0)>>>0)na();b=h+16|0;if((c[b>>2]|0)==(a|0))c[b>>2]=J;else c[h+20>>2]=J;if(!J)break e}else{c[d>>2]=J;if(J)break;c[44]=c[44]&~(1<<b);break e}while(0);e=c[47]|0;if(J>>>0<e>>>0)na();c[J+24>>2]=h;b=a+16|0;d=c[b>>2]|0;do if(d)if(d>>>0<e>>>0)na();else{c[J+16>>2]=d;c[d+24>>2]=J;break}while(0);b=c[b+4>>2]|0;if(!b)break;if(b>>>0<(c[47]|0)>>>0)na();else{c[J+20>>2]=b;c[b+24>>2]=J;break}}else{d=c[a+8>>2]|0;e=c[a+12>>2]|0;b=212+(f<<1<<2)|0;do if((d|0)!=(b|0)){if(d>>>0<j>>>0)na();if((c[d+12>>2]|0)==(a|0))break;na()}while(0);if((e|0)==(d|0)){c[43]=c[43]&~(1<<f);break}do if((e|0)==(b|0))G=e+8|0;else{if(e>>>0<j>>>0)na();b=e+8|0;if((c[b>>2]|0)==(a|0)){G=b;break}na()}while(0);c[d+12>>2]=e;c[G>>2]=d}while(0);a=a+i|0;g=i+g|0}a=a+4|0;c[a>>2]=c[a>>2]&-2;c[k+4>>2]=g|1;c[k+g>>2]=g;a=g>>>3;if(g>>>0<256){d=212+(a<<1<<2)|0;b=c[43]|0;a=1<<a;do if(!(b&a)){c[43]=b|a;K=d+8|0;L=d}else{a=d+8|0;b=c[a>>2]|0;if(b>>>0>=(c[47]|0)>>>0){K=a;L=b;break}na()}while(0);c[K>>2]=k;c[L+12>>2]=k;c[k+8>>2]=L;c[k+12>>2]=d;break}a=g>>>8;do if(!a)d=0;else{if(g>>>0>16777215){d=31;break}K=(a+1048320|0)>>>16&8;L=a<<K;J=(L+520192|0)>>>16&4;L=L<<J;d=(L+245760|0)>>>16&2;d=14-(J|K|d)+(L<<d>>>15)|0;d=g>>>(d+7|0)&1|d<<1}while(0);e=476+(d<<2)|0;c[k+28>>2]=d;a=k+16|0;c[a+4>>2]=0;c[a>>2]=0;a=c[44]|0;b=1<<d;if(!(a&b)){c[44]=a|b;c[e>>2]=k;c[k+24>>2]=e;c[k+12>>2]=k;c[k+8>>2]=k;break}f=g<<((d|0)==31?0:25-(d>>>1)|0);a=c[e>>2]|0;while(1){if((c[a+4>>2]&-8|0)==(g|0)){d=a;E=281;break}b=a+16+(f>>>31<<2)|0;d=c[b>>2]|0;if(!d){E=278;break}else{f=f<<1;a=d}}if((E|0)==278)if(b>>>0<(c[47]|0)>>>0)na();else{c[b>>2]=k;c[k+24>>2]=a;c[k+12>>2]=k;c[k+8>>2]=k;break}else if((E|0)==281){a=d+8|0;b=c[a>>2]|0;L=c[47]|0;if(b>>>0>=L>>>0&d>>>0>=L>>>0){c[b+12>>2]=k;c[a>>2]=k;c[k+8>>2]=b;c[k+12>>2]=d;c[k+24>>2]=0;break}else na()}}else{L=(c[46]|0)+g|0;c[46]=L;c[49]=k;c[k+4>>2]=L|1}while(0);L=l+8|0;return L|0}else b=620;while(1){a=c[b>>2]|0;if(a>>>0<=i>>>0?(F=a+(c[b+4>>2]|0)|0,F>>>0>i>>>0):0){b=F;break}b=c[b+8>>2]|0}g=b+-47|0;d=g+8|0;d=g+((d&7|0)==0?0:0-d&7)|0;g=i+16|0;d=d>>>0<g>>>0?i:d;a=d+8|0;e=h+8|0;e=(e&7|0)==0?0:0-e&7;L=h+e|0;e=f+-40-e|0;c[49]=L;c[46]=e;c[L+4>>2]=e|1;c[L+e+4>>2]=40;c[50]=c[165];e=d+4|0;c[e>>2]=27;c[a>>2]=c[155];c[a+4>>2]=c[156];c[a+8>>2]=c[157];c[a+12>>2]=c[158];c[155]=h;c[156]=f;c[158]=0;c[157]=a;a=d+24|0;do{a=a+4|0;c[a>>2]=7}while((a+4|0)>>>0<b>>>0);if((d|0)!=(i|0)){h=d-i|0;c[e>>2]=c[e>>2]&-2;c[i+4>>2]=h|1;c[d>>2]=h;a=h>>>3;if(h>>>0<256){d=212+(a<<1<<2)|0;b=c[43]|0;a=1<<a;if(b&a){a=d+8|0;b=c[a>>2]|0;if(b>>>0<(c[47]|0)>>>0)na();else{H=a;I=b}}else{c[43]=b|a;H=d+8|0;I=d}c[H>>2]=i;c[I+12>>2]=i;c[i+8>>2]=I;c[i+12>>2]=d;break}a=h>>>8;if(a)if(h>>>0>16777215)d=31;else{K=(a+1048320|0)>>>16&8;L=a<<K;J=(L+520192|0)>>>16&4;L=L<<J;d=(L+245760|0)>>>16&2;d=14-(J|K|d)+(L<<d>>>15)|0;d=h>>>(d+7|0)&1|d<<1}else d=0;f=476+(d<<2)|0;c[i+28>>2]=d;c[i+20>>2]=0;c[g>>2]=0;a=c[44]|0;b=1<<d;if(!(a&b)){c[44]=a|b;c[f>>2]=i;c[i+24>>2]=f;c[i+12>>2]=i;c[i+8>>2]=i;break}e=h<<((d|0)==31?0:25-(d>>>1)|0);a=c[f>>2]|0;while(1){if((c[a+4>>2]&-8|0)==(h|0)){d=a;E=307;break}b=a+16+(e>>>31<<2)|0;d=c[b>>2]|0;if(!d){E=304;break}else{e=e<<1;a=d}}if((E|0)==304)if(b>>>0<(c[47]|0)>>>0)na();else{c[b>>2]=i;c[i+24>>2]=a;c[i+12>>2]=i;c[i+8>>2]=i;break}else if((E|0)==307){a=d+8|0;b=c[a>>2]|0;L=c[47]|0;if(b>>>0>=L>>>0&d>>>0>=L>>>0){c[b+12>>2]=i;c[a>>2]=i;c[i+8>>2]=b;c[i+12>>2]=d;c[i+24>>2]=0;break}else na()}}}else{L=c[47]|0;if((L|0)==0|h>>>0<L>>>0)c[47]=h;c[155]=h;c[156]=f;c[158]=0;c[52]=c[161];c[51]=-1;a=0;do{L=212+(a<<1<<2)|0;c[L+12>>2]=L;c[L+8>>2]=L;a=a+1|0}while((a|0)!=32);L=h+8|0;L=(L&7|0)==0?0:0-L&7;K=h+L|0;L=f+-40-L|0;c[49]=K;c[46]=L;c[K+4>>2]=L|1;c[K+L+4>>2]=40;c[50]=c[165]}while(0);a=c[46]|0;if(a>>>0>o>>>0){J=a-o|0;c[46]=J;L=c[49]|0;K=L+o|0;c[49]=K;c[K+4>>2]=J|1;c[L+4>>2]=o|3;L=L+8|0;return L|0}}c[(Sa()|0)>>2]=12;L=0;return L|0}function cb(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0;if(!a)return;d=a+-8|0;h=c[47]|0;if(d>>>0<h>>>0)na();a=c[a+-4>>2]|0;b=a&3;if((b|0)==1)na();e=a&-8;m=d+e|0;do if(!(a&1)){a=c[d>>2]|0;if(!b)return;k=d+(0-a)|0;j=a+e|0;if(k>>>0<h>>>0)na();if((k|0)==(c[48]|0)){a=m+4|0;b=c[a>>2]|0;if((b&3|0)!=3){q=k;g=j;break}c[45]=j;c[a>>2]=b&-2;c[k+4>>2]=j|1;c[k+j>>2]=j;return}e=a>>>3;if(a>>>0<256){b=c[k+8>>2]|0;d=c[k+12>>2]|0;a=212+(e<<1<<2)|0;if((b|0)!=(a|0)){if(b>>>0<h>>>0)na();if((c[b+12>>2]|0)!=(k|0))na()}if((d|0)==(b|0)){c[43]=c[43]&~(1<<e);q=k;g=j;break}if((d|0)!=(a|0)){if(d>>>0<h>>>0)na();a=d+8|0;if((c[a>>2]|0)==(k|0))f=a;else na()}else f=d+8|0;c[b+12>>2]=d;c[f>>2]=b;q=k;g=j;break}f=c[k+24>>2]|0;d=c[k+12>>2]|0;do if((d|0)==(k|0)){b=k+16|0;d=b+4|0;a=c[d>>2]|0;if(!a){a=c[b>>2]|0;if(!a){i=0;break}}else b=d;while(1){d=a+20|0;e=c[d>>2]|0;if(e){a=e;b=d;continue}d=a+16|0;e=c[d>>2]|0;if(!e)break;else{a=e;b=d}}if(b>>>0<h>>>0)na();else{c[b>>2]=0;i=a;break}}else{e=c[k+8>>2]|0;if(e>>>0<h>>>0)na();a=e+12|0;if((c[a>>2]|0)!=(k|0))na();b=d+8|0;if((c[b>>2]|0)==(k|0)){c[a>>2]=d;c[b>>2]=e;i=d;break}else na()}while(0);if(f){a=c[k+28>>2]|0;b=476+(a<<2)|0;if((k|0)==(c[b>>2]|0)){c[b>>2]=i;if(!i){c[44]=c[44]&~(1<<a);q=k;g=j;break}}else{if(f>>>0<(c[47]|0)>>>0)na();a=f+16|0;if((c[a>>2]|0)==(k|0))c[a>>2]=i;else c[f+20>>2]=i;if(!i){q=k;g=j;break}}d=c[47]|0;if(i>>>0<d>>>0)na();c[i+24>>2]=f;a=k+16|0;b=c[a>>2]|0;do if(b)if(b>>>0<d>>>0)na();else{c[i+16>>2]=b;c[b+24>>2]=i;break}while(0);a=c[a+4>>2]|0;if(a)if(a>>>0<(c[47]|0)>>>0)na();else{c[i+20>>2]=a;c[a+24>>2]=i;q=k;g=j;break}else{q=k;g=j}}else{q=k;g=j}}else{q=d;g=e}while(0);if(q>>>0>=m>>>0)na();a=m+4|0;b=c[a>>2]|0;if(!(b&1))na();if(!(b&2)){if((m|0)==(c[49]|0)){p=(c[46]|0)+g|0;c[46]=p;c[49]=q;c[q+4>>2]=p|1;if((q|0)!=(c[48]|0))return;c[48]=0;c[45]=0;return}if((m|0)==(c[48]|0)){p=(c[45]|0)+g|0;c[45]=p;c[48]=q;c[q+4>>2]=p|1;c[q+p>>2]=p;return}g=(b&-8)+g|0;e=b>>>3;do if(b>>>0>=256){f=c[m+24>>2]|0;a=c[m+12>>2]|0;do if((a|0)==(m|0)){b=m+16|0;d=b+4|0;a=c[d>>2]|0;if(!a){a=c[b>>2]|0;if(!a){n=0;break}}else b=d;while(1){d=a+20|0;e=c[d>>2]|0;if(e){a=e;b=d;continue}d=a+16|0;e=c[d>>2]|0;if(!e)break;else{a=e;b=d}}if(b>>>0<(c[47]|0)>>>0)na();else{c[b>>2]=0;n=a;break}}else{b=c[m+8>>2]|0;if(b>>>0<(c[47]|0)>>>0)na();d=b+12|0;if((c[d>>2]|0)!=(m|0))na();e=a+8|0;if((c[e>>2]|0)==(m|0)){c[d>>2]=a;c[e>>2]=b;n=a;break}else na()}while(0);if(f){a=c[m+28>>2]|0;b=476+(a<<2)|0;if((m|0)==(c[b>>2]|0)){c[b>>2]=n;if(!n){c[44]=c[44]&~(1<<a);break}}else{if(f>>>0<(c[47]|0)>>>0)na();a=f+16|0;if((c[a>>2]|0)==(m|0))c[a>>2]=n;else c[f+20>>2]=n;if(!n)break}d=c[47]|0;if(n>>>0<d>>>0)na();c[n+24>>2]=f;a=m+16|0;b=c[a>>2]|0;do if(b)if(b>>>0<d>>>0)na();else{c[n+16>>2]=b;c[b+24>>2]=n;break}while(0);a=c[a+4>>2]|0;if(a)if(a>>>0<(c[47]|0)>>>0)na();else{c[n+20>>2]=a;c[a+24>>2]=n;break}}}else{b=c[m+8>>2]|0;d=c[m+12>>2]|0;a=212+(e<<1<<2)|0;if((b|0)!=(a|0)){if(b>>>0<(c[47]|0)>>>0)na();if((c[b+12>>2]|0)!=(m|0))na()}if((d|0)==(b|0)){c[43]=c[43]&~(1<<e);break}if((d|0)!=(a|0)){if(d>>>0<(c[47]|0)>>>0)na();a=d+8|0;if((c[a>>2]|0)==(m|0))l=a;else na()}else l=d+8|0;c[b+12>>2]=d;c[l>>2]=b}while(0);c[q+4>>2]=g|1;c[q+g>>2]=g;if((q|0)==(c[48]|0)){c[45]=g;return}}else{c[a>>2]=b&-2;c[q+4>>2]=g|1;c[q+g>>2]=g}a=g>>>3;if(g>>>0<256){d=212+(a<<1<<2)|0;b=c[43]|0;a=1<<a;if(b&a){a=d+8|0;b=c[a>>2]|0;if(b>>>0<(c[47]|0)>>>0)na();else{o=a;p=b}}else{c[43]=b|a;o=d+8|0;p=d}c[o>>2]=q;c[p+12>>2]=q;c[q+8>>2]=p;c[q+12>>2]=d;return}a=g>>>8;if(a)if(g>>>0>16777215)d=31;else{o=(a+1048320|0)>>>16&8;p=a<<o;n=(p+520192|0)>>>16&4;p=p<<n;d=(p+245760|0)>>>16&2;d=14-(n|o|d)+(p<<d>>>15)|0;d=g>>>(d+7|0)&1|d<<1}else d=0;e=476+(d<<2)|0;c[q+28>>2]=d;c[q+20>>2]=0;c[q+16>>2]=0;a=c[44]|0;b=1<<d;do if(a&b){f=g<<((d|0)==31?0:25-(d>>>1)|0);a=c[e>>2]|0;while(1){if((c[a+4>>2]&-8|0)==(g|0)){d=a;e=130;break}b=a+16+(f>>>31<<2)|0;d=c[b>>2]|0;if(!d){e=127;break}else{f=f<<1;a=d}}if((e|0)==127)if(b>>>0<(c[47]|0)>>>0)na();else{c[b>>2]=q;c[q+24>>2]=a;c[q+12>>2]=q;c[q+8>>2]=q;break}else if((e|0)==130){a=d+8|0;b=c[a>>2]|0;p=c[47]|0;if(b>>>0>=p>>>0&d>>>0>=p>>>0){c[b+12>>2]=q;c[a>>2]=q;c[q+8>>2]=b;c[q+12>>2]=d;c[q+24>>2]=0;break}else na()}}else{c[44]=a|b;c[e>>2]=q;c[q+24>>2]=e;c[q+12>>2]=q;c[q+8>>2]=q}while(0);q=(c[51]|0)+-1|0;c[51]=q;if(!q)a=628;else return;while(1){a=c[a>>2]|0;if(!a)break;else a=a+8|0}c[51]=-1;return}function db(){}function eb(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0;f=b+e|0;if((e|0)>=20){d=d&255;h=b&3;i=d|d<<8|d<<16|d<<24;g=f&~3;if(h){h=b+4-h|0;while((b|0)<(h|0)){a[b>>0]=d;b=b+1|0}}while((b|0)<(g|0)){c[b>>2]=i;b=b+4|0}}while((b|0)<(f|0)){a[b>>0]=d;b=b+1|0}return b-e|0}function fb(b,d,e){b=b|0;d=d|0;e=e|0;var f=0;if((e|0)>=4096)return ra(b|0,d|0,e|0)|0;f=b|0;if((b&3)==(d&3)){while(b&3){if(!e)return f|0;a[b>>0]=a[d>>0]|0;b=b+1|0;d=d+1|0;e=e-1|0}while((e|0)>=4){c[b>>2]=c[d>>2];b=b+4|0;d=d+4|0;e=e-4|0}}while((e|0)>0){a[b>>0]=a[d>>0]|0;b=b+1|0;d=d+1|0;e=e-1|0}return f|0}function gb(a,b){a=a|0;b=b|0;return ya[a&1](b|0)|0}function hb(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return za[a&3](b|0,c|0,d|0)|0}function ib(a,b){a=a|0;b=b|0;Aa[a&1](b|0)}function jb(a){a=a|0;aa(0);return 0}function kb(a,b,c){a=a|0;b=b|0;c=c|0;aa(1);return 0}function lb(a){a=a|0;aa(2)}

// EMSCRIPTEN_END_FUNCS
var ya=[jb,Va];var za=[kb,Ua,Xa,kb];var Aa=[lb,ab];return{_malloc:bb,_free:cb,_kiss_fftr_alloc:Pa,_kiss_fftri:Ra,_kiss_fftr_free:Oa,_kiss_fft_alloc:La,_memset:eb,_kiss_fftr:Qa,_kiss_fft:Na,_memcpy:fb,_kiss_fft_free:Ka,runPostSets:db,stackAlloc:Ba,stackSave:Ca,stackRestore:Da,establishStackSpace:Ea,setThrew:Fa,setTempRet0:Ia,getTempRet0:Ja,dynCall_ii:gb,dynCall_iiii:hb,dynCall_vi:ib}})


// EMSCRIPTEN_END_ASM
(Module.asmGlobalArg,Module.asmLibraryArg,buffer);var _kiss_fftr=Module["_kiss_fftr"]=asm["_kiss_fftr"];var _free=Module["_free"]=asm["_free"];var runPostSets=Module["runPostSets"]=asm["runPostSets"];var _kiss_fftr_alloc=Module["_kiss_fftr_alloc"]=asm["_kiss_fftr_alloc"];var _kiss_fftr_free=Module["_kiss_fftr_free"]=asm["_kiss_fftr_free"];var _kiss_fftri=Module["_kiss_fftri"]=asm["_kiss_fftri"];var _kiss_fft_alloc=Module["_kiss_fft_alloc"]=asm["_kiss_fft_alloc"];var _memset=Module["_memset"]=asm["_memset"];var _malloc=Module["_malloc"]=asm["_malloc"];var _kiss_fft=Module["_kiss_fft"]=asm["_kiss_fft"];var _memcpy=Module["_memcpy"]=asm["_memcpy"];var _kiss_fft_free=Module["_kiss_fft_free"]=asm["_kiss_fft_free"];var dynCall_ii=Module["dynCall_ii"]=asm["dynCall_ii"];var dynCall_iiii=Module["dynCall_iiii"]=asm["dynCall_iiii"];var dynCall_vi=Module["dynCall_vi"]=asm["dynCall_vi"];Runtime.stackAlloc=asm["stackAlloc"];Runtime.stackSave=asm["stackSave"];Runtime.stackRestore=asm["stackRestore"];Runtime.establishStackSpace=asm["establishStackSpace"];Runtime.setTempRet0=asm["setTempRet0"];Runtime.getTempRet0=asm["getTempRet0"];function ExitStatus(status){this.name="ExitStatus";this.message="Program terminated with exit("+status+")";this.status=status}ExitStatus.prototype=new Error;ExitStatus.prototype.constructor=ExitStatus;var initialStackTop;var preloadStartTime=null;var calledMain=false;dependenciesFulfilled=function runCaller(){if(!Module["calledRun"])run();if(!Module["calledRun"])dependenciesFulfilled=runCaller};Module["callMain"]=Module.callMain=function callMain(args){assert(runDependencies==0,"cannot call main when async dependencies remain! (listen on __ATMAIN__)");assert(__ATPRERUN__.length==0,"cannot call main when preRun functions remain to be called");args=args||[];ensureInitRuntime();var argc=args.length+1;function pad(){for(var i=0;i<4-1;i++){argv.push(0)}}var argv=[allocate(intArrayFromString(Module["thisProgram"]),"i8",ALLOC_NORMAL)];pad();for(var i=0;i<argc-1;i=i+1){argv.push(allocate(intArrayFromString(args[i]),"i8",ALLOC_NORMAL));pad()}argv.push(0);argv=allocate(argv,"i32",ALLOC_NORMAL);try{var ret=Module["_main"](argc,argv,0);exit(ret,true)}catch(e){if(e instanceof ExitStatus){return}else if(e=="SimulateInfiniteLoop"){Module["noExitRuntime"]=true;return}else{if(e&&typeof e==="object"&&e.stack)Module.printErr("exception thrown: "+[e,e.stack]);throw e}}finally{calledMain=true}};function run(args){args=args||Module["arguments"];if(preloadStartTime===null)preloadStartTime=Date.now();if(runDependencies>0){return}preRun();if(runDependencies>0)return;if(Module["calledRun"])return;function doRun(){if(Module["calledRun"])return;Module["calledRun"]=true;if(ABORT)return;ensureInitRuntime();preMain();if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();if(Module["_main"]&&shouldRunNow)Module["callMain"](args);postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout((function(){setTimeout((function(){Module["setStatus"]("")}),1);doRun()}),1)}else{doRun()}}Module["run"]=Module.run=run;function exit(status,implicit){if(implicit&&Module["noExitRuntime"]){return}if(Module["noExitRuntime"]){}else{ABORT=true;EXITSTATUS=status;STACKTOP=initialStackTop;exitRuntime();if(Module["onExit"])Module["onExit"](status)}if(ENVIRONMENT_IS_NODE){process["stdout"]["once"]("drain",(function(){process["exit"](status)}));console.log(" ");setTimeout((function(){process["exit"](status)}),500)}else if(ENVIRONMENT_IS_SHELL&&typeof quit==="function"){quit(status)}throw new ExitStatus(status)}Module["exit"]=Module.exit=exit;var abortDecorators=[];function abort(what){if(what!==undefined){Module.print(what);Module.printErr(what);what=JSON.stringify(what)}else{what=""}ABORT=true;EXITSTATUS=1;var extra="\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.";var output="abort("+what+") at "+stackTrace()+extra;if(abortDecorators){abortDecorators.forEach((function(decorator){output=decorator(output,what)}))}throw output}Module["abort"]=Module.abort=abort;if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()()}}var shouldRunNow=true;if(Module["noInitialRun"]){shouldRunNow=false}run()


  return Module;
};

module.exports = KissFFTModule;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), "/"))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KissFFTModule = __webpack_require__(9);


var kissFFTModule = KissFFTModule({});

var kiss_fftr_alloc = kissFFTModule.cwrap(
    'kiss_fftr_alloc', 'number', ['number', 'number', 'number', 'number' ]
);

var kiss_fftr = kissFFTModule.cwrap(
    'kiss_fftr', 'void', ['number', 'number', 'number' ]
);

var kiss_fftri = kissFFTModule.cwrap(
    'kiss_fftri', 'void', ['number', 'number', 'number' ]
);

var kiss_fftr_free = kissFFTModule.cwrap(
    'kiss_fftr_free', 'void', ['number']
);

var kiss_fft_alloc = kissFFTModule.cwrap(
    'kiss_fft_alloc', 'number', ['number', 'number', 'number', 'number' ]
);

var kiss_fft = kissFFTModule.cwrap(
    'kiss_fft', 'void', ['number', 'number', 'number' ]
);

var kiss_fft_free = kissFFTModule.cwrap(
    'kiss_fft_free', 'void', ['number']
);

var FFT = function (size) {

    this.size = size;
    this.fcfg = kiss_fft_alloc(size, false);
    this.icfg = kiss_fft_alloc(size, true);
    
    this.inptr = kissFFTModule._malloc(size*8 + size*8);
    this.outptr = this.inptr + size*8;
    
    this.cin = new Float32Array(kissFFTModule.HEAPU8.buffer, this.inptr, size*2);
    this.cout = new Float32Array(kissFFTModule.HEAPU8.buffer, this.outptr, size*2);
    
    this.forward = function(cin) {
	this.cin.set(cin);
	kiss_fft(this.fcfg, this.inptr, this.outptr);
	return new Float32Array(kissFFTModule.HEAPU8.buffer,
				this.outptr, this.size * 2);
    };
    
    this.inverse = function(cin) {
	this.cin.set(cpx);
	kiss_fft(this.icfg, this.inptr, this.outptr);
	return new Float32Array(kissFFTModule.HEAPU8.buffer,
				this.outptr, this.size * 2);
    };
    
    this.dispose = function() {
	kissFFTModule._free(this.inptr);
	kiss_fft_free(this.fcfg);
	kiss_fft_free(this.icfg);
    }
};

var FFTR = function (size) {

    this.size = size;
    this.fcfg = kiss_fftr_alloc(size, false);
    this.icfg = kiss_fftr_alloc(size, true);
    
    this.rptr = kissFFTModule._malloc(size*4 + (size+2)*4);
    this.cptr = this.rptr + size*4;
    
    this.ri = new Float32Array(kissFFTModule.HEAPU8.buffer, this.rptr, size);
    this.ci = new Float32Array(kissFFTModule.HEAPU8.buffer, this.cptr, size+2);
    
    this.forward = function(real) {
	this.ri.set(real);
	kiss_fftr(this.fcfg, this.rptr, this.cptr);
	return new Float32Array(kissFFTModule.HEAPU8.buffer,
				this.cptr, this.size + 2);
    };
    
    this.inverse = function(cpx) {
	this.ci.set(cpx);
	kiss_fftri(this.icfg, this.cptr, this.rptr);
	return new Float32Array(kissFFTModule.HEAPU8.buffer,
				this.rptr, this.size);
    };
    
    this.dispose = function() {
	kissFFTModule._free(this.rptr);
	kiss_fftr_free(this.fcfg);
	kiss_fftr_free(this.icfg);
    }
};

module.exports = {
    FFT: FFT,
    FFTR: FFTR
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map