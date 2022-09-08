var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//answer 1
//a
function getNumberFromServer() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            //some api call to return a number from a remote server
            return [2 /*return*/, 3];
        });
    });
}
function myFunc() {
    return __awaiter(this, void 0, void 0, function () {
        var x1, x2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getNumberFromServer()];
                case 1:
                    x1 = x2 = _a.sent();
                    return [2 /*return*/, x1 + x2];
            }
        });
    });
}
console.log(myFunc());
var Inode = {
    name: 'a',
    children: [
        {
            name: 'b',
            children: []
        },
        {
            name: 'c',
            children: [{
                    name: 'd',
                    children: []
                },]
        },
        {
            name: 'e',
            children: []
        },
    ]
};
var getAllNamesByRecursion = function (Inode) {
    console.log(Inode.name);
    Inode.children.forEach(function (child) {
        if (Inode.children) {
            return getAllNamesByRecursion(child);
        }
    });
};
//b
function collectWithRecursion(fn, node) {
    var _a;
    return __spreadArray([
        fn(node)
    ], ((_a = node.children) !== null && _a !== void 0 ? _a : []).flatMap(function (node) { return collectWithRecursion(fn, node); }), true);
}
function collectWithoutRecursion(fn, node) {
    // start with the top node in the stack
    var stack = [node];
    var result = [];
    // repeat until the whole stack is processed
    while (stack.length) {
        // get the next node from the stack and process it
        var node_1 = stack.pop();
        result.push(fn(node_1));
        // if the node has children, add them to the stack
        if (node_1.children) {
            stack.push.apply(stack, node_1.children.reverse());
        }
    }
    return result;
}
console.log("without recursion:", collectWithoutRecursion((function (node) { return node.name; }), Inode));
//3
var regex = function () {
    var test = '<div class="my-class" id="my-id">';
    var rExp = /<([^> ]+)([^>]*)>/;
    console.log(test.match(rExp));
    var result = test.match(rExp);
    console.log(result[2]);
};
regex();
