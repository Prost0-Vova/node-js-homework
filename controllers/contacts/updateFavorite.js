const {reqError} = require('../../helpers')
const { Contact } = require('../../models/contacts')

const updateFavorite = async (req, res, next) => {
  const { id } = req.params;
  console.log(req.body)
  const result = await Contact.findByIdAndUpdate(id, req.body, {new: true})
  if (!result) {
    throw reqError(404)
  }
  res.status(200).json(result);
};

module.exports = updateFavorite;