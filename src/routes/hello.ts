
import express from 'express';
import handler from '../handlers/hello';
const router = express.Router();

router.get('/:name', handler.hello);

export = router;