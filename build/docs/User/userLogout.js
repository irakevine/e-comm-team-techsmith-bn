"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var logoutUser = {
  tags: ['User'],
  description: 'Logout a user',
  operationId: 'logoutUser',
  // PARAMETERS
  parameters: [],
  // RESPONSES
  responses: {
    // SUCCESS
    200: {
      description: 'User can have access to logout',
      content: {
        'application/json': {
          schema: {
            message: 'User logged out successfully'
          }
        }
      }
    },
    401: {
      description: 'User they not logged in',
      content: {
        'application/json': {
          schema: {
            message: 'You are not logged in.'
          }
        }
      }
    },
    // SERVER ERROR
    500: {
      description: 'Server error',
      content: {
        'application/json': {
          schema: {
            message: 'Internal server error'
          }
        }
      }
    }
  }
};
var _default = logoutUser;
exports["default"] = _default;