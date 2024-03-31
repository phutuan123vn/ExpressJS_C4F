function mongooseToObj(mongoose) {
  if (mongoose instanceof Array) {
    if (mongoose.length > 0) {
      const course = mongoose.map(mongoose => mongoose.toObject())
      return [course,true]
    }
    return [[],false];
  }
}

module.exports = { mongooseToObj };