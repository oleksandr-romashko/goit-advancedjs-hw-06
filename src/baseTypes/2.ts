// Який тип ви надаєте змінній anything в TypeScript, щоб зберегти її гнучкість?

// Варіант 1:
// "unknown type is the type-safe counterpart of the any type"

let anything: unknown = -20;
anything = 'Text';
anything = {};

export {};

// Варіант 2:
// (якщо не прив'язуватись до назви змінної 
//  та ми знаємо що будуть лише ці два конкретні типи
//  i ніякі інші, якщо це має сенс...)

let alternativeAnything: (number | {}) = -20;
alternativeAnything = 'Text';
alternativeAnything = {};


// Варіант 3:
// Мені здається це найгіршим варіантом, 
// так як фактично вимикає строгу типізацію.

let anyAnything: any = -20;
anyAnything = 'Text';
anyAnything = {};