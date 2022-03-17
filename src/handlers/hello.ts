import { Request, Response, NextFunction } from 'express';

const hello = async (req: Request, res: Response, next: NextFunction) => {

    /** Path parameters */
    const name = req.params.name! as string
   
    /** Query parameters */
    // const name = req.query.name! as string
    
    return res.status(400).send("Endpoint not found")
   
   /* return res.json({
        message: `Hello ${name}`
    });
    */
}

export default {
    hello
}