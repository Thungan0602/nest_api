import { IsNotEmpty, IsString } from "class-validator";

export class ResetPasswordDto {
    @IsNotEmpty()
    @IsString()
    password: string;   
}