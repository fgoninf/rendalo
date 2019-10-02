import {IsString, IsInt} from "class-validator"

export class DriverModel {
    @IsString()
    readonly name: string;
    @IsString()
    readonly lastName: string;
    @IsInt()
    readonly categoryId: number;
}