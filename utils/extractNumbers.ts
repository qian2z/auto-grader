export function extractNumbersFromString(inputString: string): number[] {
  const numberMatches = inputString.match(/(\d+(\.\d+)?)/g);

  if (numberMatches) {
    return numberMatches.map((match) =>
      match.includes(".") ? parseFloat(match) : parseInt(match, 10)
    );
  }

  return [];
}
