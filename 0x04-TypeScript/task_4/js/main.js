/// <reference path="./crud.d.ts" />  // Reference to type definitions for CRUD operations
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as CRUD from "./crud";
// Create a new row element with initial data
var row = {
    firstName: "Guillaume",
    lastName: "Salva", // Last name of the row element
};
// Insert the row into the data source and store its unique ID
var newRowID = CRUD.insertRow(row);
// Update the row by adding a new property `age` and keeping existing data
var UpdatedRow = __assign({ age: 23 }, row);
CRUD.updateRow(newRowID, UpdatedRow); // Update the row in the data source
// Delete the row using its unique ID
CRUD.deleteRow(newRowID);
