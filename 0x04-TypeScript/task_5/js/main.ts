// Corrected MajorCredits interface with nominal typing (brand convention)
export interface MajorCredits {
  credits: number;
  brand: 'MajorCredits'; // This 'brand' property helps distinguish this type
}

// Corrected MinorCredits interface with nominal typing (brand convention)
export interface MinorCredits {
  credits: number;
  brand: 'MinorCredits'; // This 'brand' property helps distinguish this type
}

// Functions that sum the credits of two subjects
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MajorCredits', // Correctly setting the brand
  };
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MinorCredits', // Correctly setting the brand
  };
}

// Example usage:
const subject1: MajorCredits = { credits: 30, brand: 'MajorCredits' };
const subject2: MajorCredits = { credits: 25, brand: 'MajorCredits' };

const subject3: MinorCredits = { credits: 15, brand: 'MinorCredits' };
const subject4: MinorCredits = { credits: 20, brand: 'MinorCredits' };

const totalMajorCredits = sumMajorCredits(subject1, subject2);
const totalMinorCredits = sumMinorCredits(subject3, subject4);

console.log('Total Major Credits:', totalMajorCredits);
console.log('Total Minor Credits:', totalMinorCredits);
