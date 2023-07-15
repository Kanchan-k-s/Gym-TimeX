<template>
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th v-for="(header, index) in tableHeaders" :key="index">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in tableData" :key="rowIndex">
            <td>{{ rowIndex + 1 }}</td>
            <td v-for="(cell, columnIndex) in row" :key="columnIndex">
              <input type="text" v-model="tableData[rowIndex][columnIndex]" />
            </td>
          </tr>
        </tbody>
      </table>
      <button @click="updateData">Update</button>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        tableHeaders: ['Column 1', 'Column 2', 'Column 3'], // Replace with your table headers
        tableData: [ // Replace with your table data
          ['Row 1 Cell 1', 'Row 1 Cell 2', 'Row 1 Cell 3'],
          ['Row 2 Cell 1', 'Row 2 Cell 2', 'Row 2 Cell 3'],
          ['Row 3 Cell 1', 'Row 3 Cell 2', 'Row 3 Cell 3']
        ]
      };
    },
    methods: {
      updateData() {
        // Perform the update logic here
        const updatedValue = 'New Value'; // Replace with the new value you want to set
        // Assuming you have the fixed row and column indices
        const rowIndex = 1; // Replace with your fixed row index
        const columnIndex = 2; // Replace with your fixed column index
        // Update the data in the table
        this.tableData[rowIndex][columnIndex] = updatedValue;
      }
    }
  };
  </script>
  