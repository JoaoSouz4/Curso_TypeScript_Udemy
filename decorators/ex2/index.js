"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function checkIfUserPosted() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        console.log(childFunction);
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log("O usuário já Postou");
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
        console.log(target);
        console.log(key);
        console.log(descriptor);
        return descriptor;
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    Post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log("Post do usuário: " + content);
    }
}
__decorate([
    checkIfUserPosted(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean]),
    __metadata("design:returntype", void 0)
], Post.prototype, "Post", null);
const p0 = new Post();
p0.Post("Meu primeiro post", p0.alreadyPosted);
p0.Post("Meu primeiro post", p0.alreadyPosted);
