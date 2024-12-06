import User from '../models/User.js';
import ErrorResponse from '../utils/errorResponse.js';
import crypto from 'crypto';
import { sendAccessToken, sendRefreshToken } from '../utils/sendTokens.js';
import jwt from 'jsonwebtoken';

export default class AuthController {
  //sending new refresh and accessToken
  static async getRefreshToken(req, res, next) {
    const token = req.cookies.jid;
    if (!token) {
      return next(new ErrorResponse('Error authenticating', 401));
    }

    let payload = null;
    try {
      payload = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
    } catch (err) {
      console.log(err);
      return next(new ErrorResponse('Error authenticating', 401));
    }

    const user = await User.findById(payload.id);

    if (!user) {
      return next(new ErrorResponse('Error authenticating', 401));
    }
    if (user.tokenVersion !== payload.version) {
      return next(new ErrorResponse('Error authenticating', 401));
    }

    sendRefreshToken(res, user.createRefreshToken());

    sendAccessToken(res, user);
  }
  //revoking the refresh token (if account is hacked)

  static async revokeRefreshToken(req, res, next) {
    try {
      const id = req.id;
      const user = await User.findByIdAndUpdate(
        id,
        { $inc: { tokenVersion: 1 } },
        { new: true }
      );
      if (user) {
        res.status(200).send({ success: true });
      } else {
        return next(new ErrorResponse('Forbidden action', 403));
      }
    } catch (err) {
      next(err);
    }
  }

  static async register(req, res, next) {
    const { firstName, lastName, email, password } = req.body;
    console.log(req.body)
    //joi validation
    try {
      const user = await User.create({
        firstName,
        lastName,
        email,
        password
      });
      console.log(user);
      sendRefreshToken(res, user.createRefreshToken());
      sendAccessToken(res, user);
      //created successfully
    } catch (error) {
      console.log(error)
      next(error);
    }
  }

  static async login(req, res, next) {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(
        new ErrorResponse('Please provide an email and a password', 400)
      );
      //bad request
    }
    try {
      const user = await User.findOne({ email }).select('+password');
      console.log(user);
      if (!user) {
        const error = new ErrorResponse('Invalid Credentials', 401);
        return next(error);
      }
      const AreMatched = await user.matchPassword(password);
      if (AreMatched) {
        sendRefreshToken(res, user.createRefreshToken());
        sendAccessToken(res, user);
      } else {
        return next(new ErrorResponse('Invalid Credentials', 401));
      }
    } catch (error) {
      next(error);
    }
  }

  static async logout(req, res, next) {
    try {
      res.cookie('jid', '', {
        httpOnly: true,
        path: '/api/v1/auth/refresh-token'
      });

      res.status(200).json({ success: true });
    } catch (err) {
      next(err);
    }
  }
}
