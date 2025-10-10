import { Translator } from '../core/Translator';
import { Position } from '../core/Position';

describe('TRANSLATOR MARS ROVER', () => {
	it('should create an instance of Translator', () => {
		const translator = new Translator();
		expect(translator).toBeInstanceOf(Translator);
	});

	it('should move orientation right from N', () => {
		const translator = new Translator();
		expect(translator.moveOrientationRight('N')).toEqual('E');
	});

	it('should move orientation right from E', () => {
		const translator = new Translator();
		expect(translator.moveOrientationRight('E')).toEqual('S');
	});

	it('should move orientation right from S', () => {
		const translator = new Translator();
		expect(translator.moveOrientationRight('S')).toEqual('W');
	});

	it('should move orientation left from N', () => {
		const translator = new Translator();
		expect(translator.moveOrientationLeft('N')).toEqual('W');
	});

	it('should move orientation left from W', () => {
		const translator = new Translator();
		expect(translator.moveOrientationLeft('W')).toEqual('S');
	});
	it('should move orientation left from S', () => {
		const translator = new Translator();
		expect(translator.moveOrientationLeft('S')).toEqual('E');
	});
	it('should move orientation left from E', () => {
		const translator = new Translator();
		expect(translator.moveOrientationLeft('E')).toEqual('N');
	});

	it('should move forward when orientation is N when position is 0,0', () => {
		const translator = new Translator();
		const move = translator.moveForward('N');
		const newPosition = move(new Position(0, 0));

		expect(newPosition).toEqual(new Position(0, 1));
	});

	it('should move forward when orientation is E when position is 0,0', () => {
		const translator = new Translator();
		const move = translator.moveForward('E');
		const newPosition = move(new Position(0, 0));

		expect(newPosition).toEqual(new Position(1, 0));
	});

	it('should move forward when orientation is S when position is 1,1', () => {
		const translator = new Translator();
		const move = translator.moveForward('S');
		const newPosition = move(new Position(1, 1));

		expect(newPosition).toEqual(new Position(1, 0));
	});

	it('should move forward when orientation is W when position is 1,1', () => {
		const translator = new Translator();
		const move = translator.moveForward('W');
		const newPosition = move(new Position(1, 1));

		expect(newPosition).toEqual(new Position(0, 1));
	});

	it('should move backward when orientation is N when position is 1,1', () => {
		const translator = new Translator();
		const move = translator.moveBackward('N');
		const newPosition = move(new Position(1, 1));

		expect(newPosition).toEqual(new Position(1, 0));
	});

	it('should move backward when orientation is E when position is 1,1', () => {
		const translator = new Translator();
		const move = translator.moveBackward('E');
		const newPosition = move(new Position(1, 1));

		expect(newPosition).toEqual(new Position(0, 1));
	});

	it('should move backward when orientation is S when position is 1,1', () => {
		const translator = new Translator();
		const move = translator.moveBackward('S');
		const newPosition = move(new Position(1, 1));

		expect(newPosition).toEqual(new Position(1, 2));
	});

	it('should move backward when orientation is W when position is 1,1', () => {
		const translator = new Translator();
		const move = translator.moveBackward('W');
		const newPosition = move(new Position(1, 1));

		expect(newPosition).toEqual(new Position(2, 1));
	});

	it('should move forward when orientation is N when position is 10,20', () => {
		const translator = new Translator();
		const move = translator.moveForward('N');
		const newPosition = move(new Position(10, 20));

		expect(newPosition).toEqual(new Position(10, 0));
	});

	it('should move forward when orientation is S when position is 10,0', () => {
		const translator = new Translator();
		const move = translator.moveForward('S');
		const newPosition = move(new Position(10, 0));

		expect(newPosition).toEqual(new Position(10, 20));
	});

	it('should move forward when orientation is W when position is 0,14', () => {
		const translator = new Translator();
		const move = translator.moveForward('W');
		const newPosition = move(new Position(0, 14));

		expect(newPosition).toEqual(new Position(20, 14));
	});

	it('should move forward when orientation is W when position is 20,14', () => {
		const translator = new Translator();
		const move = translator.moveForward('E');
		const newPosition = move(new Position(20, 14));

		expect(newPosition).toEqual(new Position(0, 14));
	});
});
