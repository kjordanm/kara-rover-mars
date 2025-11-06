import { Navigator } from '../core/Navigator';
import { Position } from '../core/Position';

describe('NAVIGATOR MARS ROVER', () => {
	let translator: Navigator;

	beforeEach(() => {
		translator = new Navigator();
	});

	test('should create an instance of Translator', () => {
		expect(translator).toBeInstanceOf(Navigator);
	});

	describe('orientation changes', () => {
		test.each([
			['N', 'E'],
			['E', 'S'],
			['S', 'W'],
			['W', 'N']
		] as const)('moveOrientationRight from %s -> %s', (input, expected) => {
			expect(translator.moveOrientationRight(input)).toEqual(expected);
		});

		test.each([
			['N', 'W'],
			['W', 'S'],
			['S', 'E'],
			['E', 'N']
		] as const)('moveOrientationLeft from %s -> %s', (input, expected) => {
			expect(translator.moveOrientationLeft(input)).toEqual(expected);
		});
	});

	describe('moving forward', () => {
		test.each([
			['N', Position.create(0, 0), Position.create(0, 1)],
			['E', Position.create(0, 0), Position.create(1, 0)],
			['S', Position.create(1, 1), Position.create(1, 0)],
			['W', Position.create(1, 1), Position.create(0, 1)],
			['N', Position.create(10, 20), Position.create(10, 0)],
			['S', Position.create(10, 0), Position.create(10, 20)],
			['W', Position.create(0, 14), Position.create(20, 14)],
			['E', Position.create(20, 14), Position.create(0, 14)],
		] as const)('moveForward when facing %s from %o -> %o', (orientation, start, expected) => {
			const move = translator.moveForward(orientation);
			expect(move(start)).toEqual(expected);
		});
	});

	describe('moving backward', () => {
		test.each([
			['N', Position.create(1, 1), Position.create(1, 0)],
			['E', Position.create(1, 1), Position.create(0, 1)],
			['S', Position.create(1, 1), Position.create(1, 2)],
			['W', Position.create(1, 1), Position.create(2, 1)],
		] as const)('moveBackward when facing %s from %o -> %o', (orientation, start, expected) => {
			const move = translator.moveBackward(orientation);
			expect(move(start)).toEqual(expected);
		});
	});

});
