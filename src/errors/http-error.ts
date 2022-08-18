export class HttpExeption extends Error 
{
    mesage: string
    statusCode: number;

    constructor(message: string, statusCode: number)
    {
        super(message);
        this.statusCode = statusCode;
    }
}