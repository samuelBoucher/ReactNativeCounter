export const INCREMENT = 'INCREMENT';
export const CHANGE_INCREMENTATION_NUMBER = 'CHANGE_INCREMENTATION_NUMBER';
export const DECREMENT = 'DECREMENT';
export const CHANGE_DECREMENTATION_NUMBER = 'CHANGE_DECREMENTATION_NUMBER';
export const RESET = 'RESET';

export function increment() {
    return { type: INCREMENT }
}

export function changeIncrementationNumber(number) {
    return {
        type: CHANGE_INCREMENTATION_NUMBER,
        number
    }
}

export function decrement() {
    return { type: DECREMENT }
}

export function changeDecrementationNumber(number) {
    return {
        type: CHANGE_DECREMENTATION_NUMBER,
        number
    }
}

export function reset() {
    return { type: RESET }
}