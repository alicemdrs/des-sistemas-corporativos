import { Injectable } from '@nestjs/common';

export type Papel = 'solicitante' | 'gestor' | 'auditor';

export type Usuario = {
  id: number;
  nome: string;
  email: string;
  senhaHash: string;
  papel: Papel;
  ativo: boolean;
};

export type UsuarioAutenticado = Omit<Usuario, 'senhaHash'>;

@Injectable()
export class UsuariosService {
  private readonly usuarios: Usuario[] = [
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
      senhaHash:
        '$2b$12$5S9LDbR3FznMAsZY5P..2OKE932dOHeVvGrmlfklgquClbkKgUidC',
      papel: 'solicitante',
      ativo: true,
    },
    {
      id: 3,
      nome: 'Carla',
      email: 'carla@empresa.com',
      senhaHash:
        '$2b$12$gS/DXI3nfwdn8IL/XOxtPuOtwridIUakwhghB5WOknkkldYehfoxW',
      papel: 'auditor',
      ativo: true,
    },
    {
      id: 3,
      nome: 'Maria',
      email: 'maria@empresa.com',
      senhaHash:
        '$2b$12$bSz.zxN6a0izxIQTKrXBnuyRsvnvllZwQ/QDVp0pcYaEcp1V62l2u',
      papel: 'gestor',
      ativo: true,
    },
    {
      id: 3,
      nome: 'Silva',
      email: 'silva@empresa.com',
      senhaHash:
        '$2b$12$ryi7cLgp2SoQo3kfVzCGyeIVGP/alDxr/ZgKcm29uYLYxbuBM6eRG',
      papel: 'auditor',
      ativo: true,
    },
  ];

  buscarPorEmail(email: string) {
    return this.usuarios.find((usuario) => usuario.email === email);
  }
}