/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length < 1) {
        return [];
    } else if (numbers.length === 1) {
        return [...numbers, ...numbers];
    } else {
        const result = [numbers[0], numbers[numbers.length - 1]];
        return result;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const result = numbers.map((number: number): number => number * 3);
    return result;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const result = numbers.map((number: string): number =>
        Number(number) ? Number(number) : 0,
    );
    return result;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const result = amounts.map((number: string): number => {
        if (Number(number)) {
            return Number(number);
        } else if (number.includes("$")) {
            if (Number(number.replace("$", ""))) {
                return Number(number.replace("$", ""));
            } else {
                return 0;
            }
        } else {
            return 0;
        }
    });
    if (amounts.length === 0) {
        return [];
    } else {
        return result;
    }
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const result = messages
        .filter((message: string) => !message.includes("?"))
        .map((message: string) =>
            message.includes("!") ? message.toUpperCase() : message,
        );

    return result;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.reduce(
        (currentTotal: number, word: string) =>
            word.length < 4 ? currentTotal + 1 : currentTotal,
        0,
    );
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green",
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce(
        (currentSum: number, number: number) => currentSum + number,
        0,
    );

    return addends.length === 0 ?
            sum.toString() + "=" + "0"
        :   sum.toString() + "=" + addends.join("+");
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let index = values.findIndex((value: number): boolean => value < 0);
    const sum = values
        .slice(0, index === -1 ? values.length : index)
        .reduce(
            (currentTotal: number, value: number) => currentTotal + value,
            0,
        );
    return index === -1 ?
            [...values, sum]
        :   [...values.slice(0, index + 1), sum, ...values.slice(index + 1)];
}
