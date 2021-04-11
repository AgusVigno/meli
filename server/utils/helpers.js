const formatCategories = (categories) => {
  const categoriesFormated = categories
    ? categories.values[0].path_from_root.map((category) => category.name)
    : [];
  return categoriesFormated;
};

const getDecimals = (value) => {
  const decimals = value.toString().split('.')[1];
  return decimals ? Number(decimals) : null;
};

const getAuthor = () => {
  return {
    name: 'Agustín',
    lastname: 'Vignolo',
  };
};

const formatItem = (item, detail = false, description = '') => {
  let formatedItem = {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: item.price,
      decimals: getDecimals(item.price),
    },
    picture: item.pictures ? item.pictures[0].url : item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
  };
  if (detail) {
    formatedItem = {
      ...formatedItem,
      sold_quantity: item.sold_quantity,
      description: description.plain_text,
      category_id: item.category_id,
    };
  } else {
    formatedItem = {
      ...formatedItem,
      location: item.address.state_name,
    };
  }
  return formatedItem;
};

exports.formatSearch = (itemsData, categoriesData) => {
  const items = itemsData.map((item) => formatItem(item));
  const categories = formatCategories(categoriesData);
  const author = getAuthor();

  return {
    author,
    categories,
    items,
  };
};

exports.formatSearchById = (itemData, description) => {
  const item = formatItem(itemData, true, description);
  const author = getAuthor();

  return {
    author,
    item,
  };
};
