const axios = require('axios');
const config = require('../constants/config');
const { formatSearch, formatSearchById } = require('../utils/helpers');

const api = axios.create({ baseURL: config.API_BASE_URL });

exports.getProducts = async (req, res, next) => {
  try {
    const query = req.query.q;
    const results = await api.get(
      `sites/MLA/search?q=${query}&limit=${config.LIMIT_SEARCH}`
    );
    const categories = results.data.filters.find(
      (filter) => filter.id === 'category'
    );
    const response = formatSearch(results.data.results, categories);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
    next(error);
  }
};

exports.getProductsByCategory = async (req, res, next) => {
  try {
    const categoryId = req.query.id;
    const results = await api.get(
      `sites/MLA/search?category=${categoryId}&limit=${config.LIMIT_SEARCH}`
    );
    const categories = results.data.filters.find(
      (filter) => filter.id === 'category'
    );
    const response = formatSearch(results.data.results, categories);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
    next(error);
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const result = await api.get(`items/${productId}`);
    const description = await api.get(`items/${productId}/description`);
    const response = formatSearchById(result.data, description.data);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json(error);
    next(error);
  }
};
