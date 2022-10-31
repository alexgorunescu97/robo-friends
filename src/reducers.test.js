import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

import * as reducers from './reducers';

describe('search robots reducer', () => {
    const initialStateSearch = {
        searchField: ''
    };
    it('should return the initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual(initialStateSearch);
    });

    it('should handle CHANGE_SEARCHFIELD action', () => {
        expect(reducers.searchRobots(initialStateSearch, {
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({ searchField: 'abc' });
    });
});

describe('request robots reducer', () => {
    const initialStateRobots = {
        isPending: false,
        robots: [],
        error: '' 
    };

    it('should return the initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
    });

    it('should handle REQUEST_ROBOTS_PENDING action', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_PENDING
        })).toEqual({
            ...initialStateRobots,
            isPending: true
        });
    });

    it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: '123',
                name: 'Test',
                email: 'test@gmail.com'
            }]
        })).toEqual({
            ...initialStateRobots,
            robots: [{
                id: '123',
                name: 'Test',
                email: 'test@gmail.com'
            }],
            isPending: false
        });
    });

    it('should handle REQUEST_ROBOTS_FAILED action', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'An error occured'
        })).toEqual({
            ...initialStateRobots,
            error: 'An error occured',
            isPending: false
        });
    });
})