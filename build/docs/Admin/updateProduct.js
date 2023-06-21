"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var updateProduct = {
  tags: ['Admin'],
  description: 'update a product in database',
  operationId: 'updateProduct',
  // PARAMETERS
  parameters: [{
    name: 'id',
    "in": 'path',
    schema: {
      $ref: '#/components/schemas/id'
    },
    required: true,
    description: 'ID of the product to be updated'
  }],
  // REQUEST BODY
  requestBody: {
    description: 'Product attributes',
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/updateProduct'
        }
      }
    }
  },
  // RESPONSES
  responses: {
    // SUCCESS
    200: {
      description: 'Product edited successfully',
      content: {
        'application/json': {
          schema: {
            message: 'Product was succesfully edited'
          }
        }
      }
    },
    // BAD REQUEST
    400: {
      description: 'User submits invalid information',
      content: {
        'application/json': {
          schema: {
            message: 'Please provide all required information'
          }
        }
      }
    },
    404: {
      description: 'User update product not in collection',
      content: {
        'application/json': {
          schema: {
            message: 'The product does not exists in your collection!'
          }
        }
      }
    },
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
var _default = updateProduct;
exports["default"] = _default;