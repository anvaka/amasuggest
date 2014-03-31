module.exports = function flatten(papiItem) {
  var image = 'http://images.amazon.com/images/P/' + papiItem.ASIN[0] + '.01.jpg';
  return {
    asin: papiItem.ASIN[0],
    url: papiItem.DetailPageURL[0],
    image: image,
    title: papiItem.ItemAttributes[0].Title[0],
    toString: function () {
      return this.title;
    }
  };
};
