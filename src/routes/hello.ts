
import express from 'express';
import handler from '../handlers/hello';
const router = express.Router();

router.get('/', handler.hello);

export = router;