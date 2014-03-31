module.exports = function (transform) {
  if (typeof transform !== 'function') {
    transform = function () {}; // noop;
  }

  return function flatten(papiItem) {
    var image = 'http://images.amazon.com/images/P/' + papiItem.ASIN[0] + '.01.jpg';
    var product = {
      asin: papiItem.ASIN[0],
      url: papiItem.DetailPageURL[0],
      image: image,
      title: papiItem.ItemAttributes[0].Title[0],
      toString: function () {
        return this.title;
      }
    };

    transform(papiItem, product);

    return product;
  };
};
