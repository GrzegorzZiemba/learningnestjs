import { Controller, Get, Post, Param } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages() {

    }
    @Post()
    createMessages() {

    }
    @Get('/:id')
    getMessage(){

    }
}
