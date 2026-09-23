import {
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
  IsNumber,
  IsBoolean,
} from 'class-validator';

export class CentroCustoSolicitacaoDto {
  @IsInt()
  codigo!: number;

  @IsBoolean() 
  saldo!: boolean;

  @IsInt() 
  versao!: number;
}