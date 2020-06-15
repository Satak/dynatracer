let items = [
  {
    id: 1,
    name: "test1",
    description: "just testing",
    level: 1,
  },
  {
    id: 2,
    name: "test2",
    description: "this is a description",
    level: 2,
  },
  {
    id: 3,
    name: "test3",
    description: "level 3 item",
    level: 3,
  },
];

/**
 * @desc  Get all items
 * @route GET /api/v1/items
 * @access Public
 */
exports.getItems = async (req, res, next) => {
  try {
    // const items = await Item.find();
    return res.status(200).json({
      success: true,
      count: items.length,
      data: items,
    });
  } catch (err) {
    console.error(err);
    res.send(500).json({ error: "Server error" });
  }
};

/**
 * @desc  Get a single item by id
 * @route GET /api/v1/item/:id
 * @access Public
 */
exports.getItem = async (req, res, next) => {
  try {
    const searchId = parseInt(req.params.id, 10);
    const item = items.find((i) => i.id === searchId);

    if (!item) {
      return res.status(404).json({
        success: false,
        error: "No item found",
      });
    }

    return res.status(200).json({
      success: true,
      data: item,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

/**
 * @desc  Create an item
 * @route POST /api/v1/items
 * @access Public
 */
exports.addItem = async (req, res, next) => {
  try {
    const item = req.body;
    const lastItem = items.slice(-1)[0];

    const id = lastItem ? lastItem.id + 1 : 1;

    const newItem = {
      id: id,
      name: item.name,
      description: item.description,
      level: 1,
    };

    // const addedItem = await Item.create(newItem);
    items.push(newItem);
    return res.status(201).json({
      success: true,
      data: newItem,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

/**
 * @desc  Delete item
 * @route DELETE /api/v1/items/:id
 * @access Public
 */
exports.deleteItem = async (req, res, next) => {
  try {
    const itemId = parseInt(req.params.id, 10);
    const foundItem = items.find((item) => item.id === itemId);

    const status = foundItem ? 204 : 404;

    if (foundItem) items = items.filter((item) => item.id !== itemId);

    return res.status(status).json({});
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
