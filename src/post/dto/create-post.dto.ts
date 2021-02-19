import { IsArray, IsBoolean, IsEnum, IsString } from "class-validator"
import { EnumToString } from "src/helpers"
import { PostCategory } from "../enums"

export class CreatePostDto {
    @IsString()
    title: string

    @IsString()
    slug: string

    @IsString()
    excerpt: string

    @IsString()
    content: string

    @IsEnum(PostCategory ,{
        message: `Opción invalida. Las categorias correctas son ${EnumToString(PostCategory)}`
    })
    category: PostCategory

    @IsArray()
    @IsString({ each: true })
    tags: string[]

    @IsBoolean()
    status: boolean
}