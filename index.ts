const ALPHABET_PLEBIAN = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const ALPHABET_ROCK_DOTS = 'ÄḄĊḊЁḞĠḦЇJḲḶṀṄÖṖQṚṠṪÜṾẄẌŸŻäḅċḋëḟġḧïjḳḷṁṅöṗqṛṡẗüṿẅẍÿż';

/**
 * A wacky dev-only tool to convert all text to weird characters
 *
 * Example uses:
 * - to check if Text has been scaled properly from a provider
 * - to check if i18n text has been internationalized
 * */
export const toRockDots = (text: string) => {
  const alphabetPlebianArray = ALPHABET_PLEBIAN.split('');
  const alphabetRockDotsArray = ALPHABET_ROCK_DOTS.split('');
  // Makes a dictionary between every character in both alphabets
  // { A: Ä, B: Ḅ, C: Ċ D: Ḋ ... }
  const alphabetDict = Object.fromEntries(
    alphabetPlebianArray.map((_char, i) => [alphabetPlebianArray[i], alphabetRockDotsArray[i]]),
  );

  const convertedArray = text.split('').map((char) => {
    if (char in alphabetDict) {
      return alphabetDict[char];
    }
    return char;
  });

  return convertedArray.join('');
};
