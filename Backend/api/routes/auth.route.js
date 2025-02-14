import AuthController from '../controllers/auth.controller.js';
import { Router } from 'express';
import { authenticate } from '../middleware/auth.js';
const router = Router();

router.route('/signup').post(AuthController.register);
router.route('/login').post(AuthController.login);
router.route('/logout').post(authenticate(), AuthController.logout);
router.route('/refresh-token').post(AuthController.getRefreshToken);

router
  .route('/revoke-token')
  .post(authenticate('admin'), AuthController.revokeRefreshToken);
export default router;
