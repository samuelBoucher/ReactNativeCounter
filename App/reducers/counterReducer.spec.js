import { counterReducer } from '../reducers/counterReducer.js';
import * as actions from '../actions/actions.js';

describe('reducers', () => {
    describe('counterReducer', () => {
        let initialState = {};
        beforeEach(() => {
            initialState = {
                count: 0,
                incrementationNumber: 1,
                decrementationNumber: 1
            };
        });

        it('should provide the initial state', () => {
            expect(counterReducer(undefined, {})).toEqual(initialState);
        });

        it('should handle INCREMENT action with default incrementation number', () => {
            const expectedCount = 1;
            const action = actions.increment();

            let newState = counterReducer(initialState, action);
            let count = newState.count;

            expect(count).toBe(expectedCount);
        });

        it('should handle INCREMENT action when setting new incrementation number', () => {
            const expectedCount = 2;
            const newIncrementationNumber = 2;
            const changeIncrementationNumberAction = actions.changeIncrementationNumber(newIncrementationNumber);
            let changedIncrementationNumberState = counterReducer(initialState, changeIncrementationNumberAction);
            const incrementAction = actions.increment();

            let newState = counterReducer(changedIncrementationNumberState, incrementAction);
            let count = newState.count;

            expect(count).toBe(expectedCount);
        });

        it('should handle DECREMENT action with default incrementation number', () => {
            const expectedCount = -1;
            const action = actions.decrement();

            let newState = counterReducer(initialState, action);
            let count = newState.count;

            expect(count).toBe(expectedCount);
        });

        it('should handle DECREMENT action when setting new decrementation number', () => {
            const expectedCount = -2;
            const newDecrementationNumber = 2;
            const changeDecrementationNumberAction = actions.changeDecrementationNumber(newDecrementationNumber);
            let changedDecrementationNumberState = counterReducer(initialState, changeDecrementationNumberAction);
            const decrementAction = actions.decrement();

            let newState = counterReducer(changedDecrementationNumberState, decrementAction);
            let count = newState.count;

            expect(count).toBe(expectedCount);
        });

        it('should handle RESET action', () => {
            expect(counterReducer(99, { type: 'RESET' })).toBe(0)
        });

        it('should ignore unknown actions', () => {
            expect(counterReducer(9, { type: 'unknown' })).toBe(9)
        })
    })
});