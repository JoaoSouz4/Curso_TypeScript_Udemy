"use strict";
//Exemplo com property decorator;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//com o Property Decorator conseguimos verificar uma propriedade de um objero;
//validação de número de caracteres: 
function Max(limit) {
    return function (target, key) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newValue) {
            if (newValue.length > limit) {
                console.log("O valor deve ter no máximo" + limit + " caracteres");
                return;
            }
            else {
                value = newValue;
            }
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    };
}
class Admin {
    constructor(username) {
        this.username = username;
    }
}
__decorate([
    Max(5),
    __metadata("design:type", Object)
], Admin.prototype, "username", void 0);
const joao = new Admin("Joãoadmin1234");
