import { IsInt, Min, IsString, MaxLength, MinLength } from 'class-validator';

export class RejeitarSolicitacaoDto {
  @IsInt()
  @Min(1)
  versao!: number;

  @IsString()
  @MaxLength(200)
  @MinLength(10)
  justificativa!: string;
}