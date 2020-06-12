// @desc  Get all items
// @route GET /api/v1/items
// @access Public
exports.getItems = async (req, res, next) => {
  try {
    const items = [
      {
        id: 1,
        name: "test",
      },
      {
        id: 2,
        name: "test2",
      },
    ];

    return res.status(200).json({
      success: true,
      count: items.length,
      data: items,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
