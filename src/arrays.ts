import { PassThrough } from "stream";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let nums: number[] = [];
    let len: number = numbers.length;
    if (len === 0) {
        return nums;
    } else if (len === 1) {
        nums[0] = numbers[0];
        nums[1] = numbers[0];
        return nums;
    } else {
        nums[0] = numbers[0];
        nums[1] = numbers[len - 1];
        return nums;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const triple = numbers.map((numbers: number): number => numbers * 3);

    return triple;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const nums = numbers.map((numbers: string): number => Number(numbers));
    const adj = nums.map((i: number): number => (Number.isNaN(i) ? 0 : i));
    return adj;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const remDollar = amounts.map((i: string): string =>
        i.includes("$") ? i.replace("$", "") : i,
    );
    const nums = remDollar.map((i: string): number => Number(i));
    const adj = nums.map((i: number): number => (Number.isNaN(i) ? 0 : i));
    return adj;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQue = messages.filter((i: string): Boolean => !i.includes("?"));
    const screeeeeee = noQue.map((i: string): string =>
        i.includes("!") ? i.toUpperCase() : i,
    );
    return screeeeeee;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortle = words.filter((i: string): Boolean => i.length < 4);
    let len: number = shortle.length;
    return len;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const check = colors.every(
        (i: string): boolean => i === "red" || i === "blue" || i === "green",
    );
    return check;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0,
    );
    let theReturn: string = sum.toString();

    const stringy = addends.map((i: number): string => i.toString());
    theReturn = theReturn + "=";
    let addative: string = stringy.join("+");
    theReturn = theReturn + addative;
    return theReturn;
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
    const theCheck = values.some((i: number): Boolean => i < 0);
    if (theCheck) {
        const negLocation = values.findIndex(
            (price: number): boolean => price < 0,
        );
        let beforeNeg: number[] = values.slice(0, negLocation);
        const sum = beforeNeg.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0,
        );
        const tempHolder = [...values];
        tempHolder.splice(negLocation + 1, 0, sum);
        return tempHolder;
    } else {
        const sum = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0,
        );
        const result = [...values, sum];
        return result;
    }
}
