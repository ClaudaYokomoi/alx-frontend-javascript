// Interfaces with nominal typing using brand convention

interface MajorCredits {
  credits: number;
  brand: 'MajorCredits'; // This 'brand' property helps distinguish this type
}

interface MinorCredits {
  credits: number;
  brand: 'MinorCredits'; // This 'brand' property helps distinguish this type
}

// Functions that sum the credits of two subjects
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MajorCredits' as const,
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MinorCredits' as const,
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
