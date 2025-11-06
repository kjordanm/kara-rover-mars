import { Position } from '../core/Position';

describe('POSITION MARS ROVER', () => {
	it('position latitude or longitude can not negative', () => {
		expect(() => Position.create(-1, 0)).toThrow("Position value can not be negative");
	});

	it('position longitude or longitude can not negative', () => {
		expect(() => Position.create(0, -1)).toThrow("Position value can not be negative");
	});

	it('position latitude wraps world', () => {
		const position = Position.create(22, 1);
		expect(position).toEqual(Position.create(2, 1));
	});

	it('position longitude wraps world', () => {
		const position = Position.create(2, 24);
		expect(position).toEqual(Position.create(2, 4));
	});

	it('increase position latitude', () => {
		const position = Position.create(2, 4);
		expect(position.increaseLatitude()).toEqual(Position.create(3, 4));
	});

	it('increase position longitude', () => {
		const position = Position.create(2, 4);
		expect(position.increaseLongitude()).toEqual(Position.create(2, 5));
	});

	it('increase position latitude wraps world', () => {
		const position = Position.create(19, 4);
		expect(position.increaseLatitude()).toEqual(Position.create(0, 4));
	});

	it('increase position longitude wraps world', () => {
		const position = Position.create(2, 19);
		expect(position.increaseLongitude()).toEqual(Position.create(2, 0));
	});

	it('decrease position latitude wraps world', () => {
		const position = Position.create(0, 19);
		expect(position.decreaseLatitude()).toEqual(Position.create(19, 19));
	});

	it('decrease position longitude wraps world', () => {
		const position = Position.create(12, 0);
		expect(position.decreaseLongitude()).toEqual(Position.create(12, 19));
	});
});
