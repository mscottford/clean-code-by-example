class Shirt {
  constructor(size, color, design) {
    if (size == 'XS' || size == 'S' || size == 'M' || size == 'L' || 
      size == 'XL' || size == 'XXL') {
      this.size = size;
    } else {
      throw `Invalid size: '${size}'`;
    }

    if (color == 'white' || color == 'red' || color == 'green' || 
      color == 'grey' || color == 'black') {
      this.color = color;
    } else {
      throw `Invalid color: '${color}'`;
    }
    
    if (design == 'stripes' || design == 'plaid' || design == 'solid' || 
      design == 'graphic') {
      this.design = design;
    } else {
      throw `Invalid design: '${design}'`;
    }
  }

  price() {
    if (this.size == 'XS' || this.size == 'XL' || this.size == 'XXL' ||
      this.color == 'red' || this.color == 'green' ||
      this.design == 'plaid' || this.design == 'graphic') {
        return 24.99;
    }

    return 19.99;
  }
}

export default Shirt;
