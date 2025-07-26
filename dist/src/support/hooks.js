"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const browserManager_1 = require("./browserManager");
const fs_extra_1 = __importDefault(require("fs-extra"));
(0, cucumber_1.Before)(function () {
    return __awaiter(this, void 0, void 0, function* () {
        this.driver = yield (0, browserManager_1.getDriver)();
    });
});
(0, cucumber_1.After)(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        if (((_a = scenario.result) === null || _a === void 0 ? void 0 : _a.status) === cucumber_1.Status.FAILED && this.driver) {
            const screenshot = yield this.driver.takeScreenshot();
            const filepath = `reports/screenshots/${Date.now()}.png`;
            fs_extra_1.default.writeFileSync(filepath, screenshot, "base64");
            this.attach(screenshot, "image/png");
        }
        if (this.driver) {
            yield this.driver.quit();
            this.driver = null;
        }
    });
});
(0, cucumber_1.AfterAll)(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, browserManager_1.quitDriver)(); // safety fallback
}));
