"use strict";

// Function to calculate Social Security tax
function getSocSecTax(gross_pay) {
  let soc_sec_tax_rate = 0.062;  // Social Security tax rate
  let soc_sec_tax = gross_pay * soc_sec_tax_rate;
  return soc_sec_tax;
}

// Function to calculate Medicare tax
function getMedicareTax(gross_pay) {
  let medicare_tax_rate = 0.0145;  // Medicare tax rate
  let medicare_tax = gross_pay * medicare_tax_rate;
  return medicare_tax;
}

// Example usage:
let gross_pay = 2000;  // Example gross pay
let soc_sec_tax = getSocSecTax(gross_pay);
let medicare_tax = getMedicareTax(gross_pay);

console.log("Social Security Tax:", soc_sec_tax);
console.log("Medicare Tax:", medicare_tax);

function FederalTax(gross_pay, withholding_code) {
  let tax_rate;
  if (withholding_code === 0) {
      tax_rate = 0.23;
  } else if (withholding_code === 1) {
      tax_rate = 0.21;
  } else if (withholding_code === 2) {
      tax_rate = 0.195;
  } else if (withholding_code === 3) {
      tax_rate = 0.185;
  } else if (withholding_code >= 4) {
      tax_rate = 0.18 - (0.05 * (withholding_code - 3));
      if (tax_rate < 0.05) {
          tax_rate = 0.05;
      }
  }
  
  let federal_tax = gross_pay * tax_rate;
  return federal_tax;
}

// Calling the function for each person and displaying the results
let person1_tax = FederalTax(750, 0);
let person2_tax = FederalTax(1550, 2);
let person3_tax = FederalTax(1100, 6);

console.log("Person 1 Federal Tax:", person1_tax);
console.log("Person 2 Federal Tax:", person2_tax);
console.log("Person 3 Federal Tax:", person3_tax);
