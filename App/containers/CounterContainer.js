import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter.js';
import * as actions from '../actions/actions.js';

const mapStateToProps = state => ({
    count: state.count,
    incrementationNumber: state.incrementationNumber,
    decrementationNumber: state.decrementationNumber
});

const mapDispatchToProps = (dispatch) => ({
    increment: () => { dispatch(actions.increment()) },
    changeIncrementationNumber: (number) => { dispatch(actions.changeIncrementationNumber(parseInt(number.text)))},
    decrement: () => { dispatch(actions.decrement()) },
    changeDecrementationNumber: (number) => { dispatch(actions.changeDecrementationNumber(parseInt(number.text)))},
    reset: () => { dispatch(actions.reset()) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter)