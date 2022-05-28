// QuickSort algorithm from https://github.com/trekhleb/javascript-algorithms
// Licensed under MIT. Full license is at the bottom of the file.
// Source: https://raw.githubusercontent.com/trekhleb/javascript-algorithms/master/src/algorithms/sorting/quick-sort/QuickSort.js
// Retrieved on 2019-07-01

// In this file, tabs and spaces are mixed together. If your editor is set to
// to simulate 2 spaces for each tab character, then this file will look fine.
// If your editor is set to a different number of spaces for a tab character,
// then the file is going to look drastically different.

import Sort from '../Sort';

export default class QuickSort extends Sort {
  /**
   * @param {*[]} originalArray
   * @return {*[]}
   */
  sort(originalArray) {
    // Clone original array to prevent it from modification.
  	const array = [...originalArray];

    // If array has less than or equal to one elements then it is already sorted.
  	if (array.length <= 1) {
      return array;
  	}

    // Init left and right arrays.
		const leftArray = [];
    const rightArray = [];

    // Take the first element of array as a pivot.
    const pivotElement = array.shift();
		const centerArray = [pivotElement];

    // Split all array elements between left, center and right arrays.
		while (array.length) {
      const currentElement = array.shift();

      // Call visiting callback.
      this.callbacks.visitingCallback(currentElement);

      if (this.comparator.equal(currentElement, pivotElement)) {
				centerArray.push(currentElement);
			} else if (this.comparator.lessThan(currentElement, pivotElement)) {
				leftArray.push(currentElement);
			} else {
        rightArray.push(currentElement);
			}
    }

    // Sort left and right arrays.
    const leftArraySorted = this.sort(leftArray);
    const rightArraySorted = this.sort(rightArray);

			// Let's now join sorted left array with center array and with sorted right array.
    return leftArraySorted.concat(centerArray, rightArraySorted);
  }
}

