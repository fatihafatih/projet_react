// create-order.dto.ts
import { IsString, IsEmail, IsInt, Min, IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  street: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsInt()
  @Min(10000)
  zipCode: number;

  @IsString()
  @IsNotEmpty()
  country: string;

  @IsInt()
  @IsNotEmpty()
  phone: number;

  @IsInt()
  @Min(1)
  totalAmount: number;  // Le montant total pour vérifier si la commande est valide
}
