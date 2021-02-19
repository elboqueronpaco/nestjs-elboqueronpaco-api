import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreatePostDto, EditPostDto } from './dto';

@Controller('posts')
export class PostController {
    @Get()
    getMany() {
        return 'OK'
    }
    @Get(':id')
    getOne(@Param('id', ParseIntPipe) id: number) {
        return {
            message: 'getOne'
        }
    }
    @Post()
    createOne(@Body() dto: CreatePostDto) {
        return {
            data: dto
        }
    }
    @Put(':id')
    editOne(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: EditPostDto
    ) {
        return{
            data: dto
        }
    }
    @Delete(':id')
    deleteOne(@Param('id', ParseIntPipe) id: number) {
        return {
            message: 'deleteOne'
        }
    }
}
