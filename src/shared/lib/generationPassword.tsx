export const MIN_PASSWORD_LENGTH = 6;
export const MAX_PASSWORD_LENGTH = 64;

const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const SYMBOLS = '%*)?@#$~';

function getRandomIndex(max: number): number {
    const range = 2 ** 32;
    const limit = range - (range % max);
    const values = new Uint32Array(1);
    let value: number;

    do {
        crypto.getRandomValues(values);
        value = values[0];
    } while (value >= limit);

    return value % max;
}

function getRandomCharacter(characterSet: string): string {
    return characterSet[getRandomIndex(characterSet.length)];
}

function shuffle(characters: string[]): string {
    for (let index = characters.length - 1; index > 0; index -= 1) {
        const target = getRandomIndex(index + 1);
        [characters[index], characters[target]] = [characters[target], characters[index]];
    }

    return characters.join('');
}

export default function generatePasswords(
    length: number,
    useUpperCase: boolean,
    useLowerCase: boolean,
    useNumbers: boolean,
    useSymbols: boolean,
): string[] {
    if (!Number.isInteger(length) || length < MIN_PASSWORD_LENGTH || length > MAX_PASSWORD_LENGTH) {
        throw new RangeError(`Password length must be between ${MIN_PASSWORD_LENGTH} and ${MAX_PASSWORD_LENGTH}`);
    }

    const selectedSets = [
        useUpperCase ? UPPERCASE : '',
        useLowerCase ? LOWERCASE : '',
        useNumbers ? NUMBERS : '',
        useSymbols ? SYMBOLS : '',
    ].filter(Boolean);

    if (selectedSets.length === 0) {
        selectedSets.push(LOWERCASE);
    }

    const allCharacters = selectedSets.join('');

    return Array.from({ length: 10 }, () => {
        const characters = selectedSets.map(getRandomCharacter);

        while (characters.length < length) {
            characters.push(getRandomCharacter(allCharacters));
        }

        return shuffle(characters);
    });
}
