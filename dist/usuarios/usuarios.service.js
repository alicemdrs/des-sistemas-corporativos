"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
let UsuariosService = class UsuariosService {
    usuarios = [
        {
            id: 1,
            nome: 'Ana Lima',
            email: 'ana@empresa.com',
            senhaHash: '$2b$12$J57O7dZNtzhOo3IwclwNKOj9Xp8n3t75A1j/8lpT7WlmvJoya0oJe',
            papel: 'gestor',
            ativo: true,
        },
        {
            id: 2,
            nome: 'Bruno Silva',
            email: 'bruno@empresa.com',
            senhaHash: '$2b$12$5S9LDbR3FznMAsZY5P..2OKE932dOHeVvGrmlfklgquClbkKgUidC',
            papel: 'solicitante',
            ativo: true,
        },
        {
            id: 3,
            nome: 'Carla',
            email: 'carla@empresa.com',
            senhaHash: '$2b$12$gS/DXI3nfwdn8IL/XOxtPuOtwridIUakwhghB5WOknkkldYehfoxW',
            papel: 'auditor',
            ativo: true,
        },
        {
            id: 3,
            nome: 'Maria',
            email: 'maria@empresa.com',
            senhaHash: '$2b$12$bSz.zxN6a0izxIQTKrXBnuyRsvnvllZwQ/QDVp0pcYaEcp1V62l2u',
            papel: 'gestor',
            ativo: true,
        },
        {
            id: 3,
            nome: 'Silva',
            email: 'silva@empresa.com',
            senhaHash: '$2b$12$ryi7cLgp2SoQo3kfVzCGyeIVGP/alDxr/ZgKcm29uYLYxbuBM6eRG',
            papel: 'auditor',
            ativo: true,
        },
    ];
    buscarPorEmail(email) {
        return this.usuarios.find((usuario) => usuario.email === email);
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)()
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map