// Import the Building class
import Building from './5-building.js';

class SkyHighBuilding extends Building {
  // Constructor for SkyHighBuilding
  constructor(sqft, floors) {
    // Call the parent class constructor with sqft
    super(sqft);
    // Initialize the floors attribute
    this._floors = floors;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}

// Export the SkyHighBuilding class
export default SkyHighBuilding;
