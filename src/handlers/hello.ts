import { Request, Response, NextFunction } from 'express';

const hello = async (req: Request, res: Response, next: NextFunction) => {
    return res.json({
        message: 'Hello World!'
    });
}

export default {
    hello
}