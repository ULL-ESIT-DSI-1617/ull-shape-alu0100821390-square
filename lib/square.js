'use strict';

let Shape = require('@alu0100821390/ull-shape');

/**
* Clase que representa figuras con formas cuadradas
* @class Square
* @param {hash} options Alto y Ancho
*/
class Square extends Shape {
	/**
	* Constructor de la clase Square
	* @construct Square
	* @param {hash} options Alto y Ancho
	*/
    constructor(options) {
      super(options)
    }
	/**
	* Función que calcula y devuelve el área de la figura
	* @function area
	* @return {number} Área de la figura
	*/
    area() {
      return  Math.pow(this.width,2) 
    }
}

Shape.Shapes.Square = Square;

module.exports = Square;
