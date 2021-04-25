"use strict";

export const confirm = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message:
        "Confirm User Sign Up lambda called with following event:\n" + event,
    }),
  };
};
