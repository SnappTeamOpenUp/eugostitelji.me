'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Confirm User Sign Up lambda called',
      },
    ),
  };
};
