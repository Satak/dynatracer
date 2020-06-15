/**
 * @desc  Get help, will cause an error
 * @route GET /api/v1/misc/help
 * @access Public
 */
exports.getHelp = (req, res, next) => {
  getHelpError;
  return res.status(200).json({
    message: "This is a help message",
  });
};

/**
 * @desc  Get long running route, 3 sec
 * @route GET /api/v1/misc/info
 * @access Public
 */
exports.getInfo = (req, res, next) => {
  setTimeout(() => {
    return res.status(200).json({
      message: "This is information",
    });
  }, 3000);
};

/**
 * @desc  Get message, will cause an error and it's captured
 * @route GET /api/v1/misc/message
 * @access Public
 */
exports.getMessage = (req, res, next) => {
  try {
    someErrorHere;
    return res.status(200).json({
      message: "This is a help message",
    });
  } catch (err) {
    console.log(`getMessage error: ${err}`);
    return res.status(500).json({
      message: "Server error",
    });
  }
};
