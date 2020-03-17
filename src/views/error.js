module.exports = {
  bad_request: (err) => {
    return {message: err.message}
  },
  not_found: (entity) => {
    return {message: `${entity} not found`}
  },
  generic: (res) => (err) => {
    return res
      .status(400)
      .json({message: err.message})
  }
}
