import { COUNTER_CHANGE } from '../constants';

const changeCount = (count) => {
    return {
        type: COUNTER_CHANGE,
        payload: count
    }
}
export default changeCount
