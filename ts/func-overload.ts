interface Coordinate {
	x: number;
	y: number;
}

function parseCoordinate(obj: Coordinate): Coordinate {
	return {
		...obj,
	};
}

function parseCoordinateFromNums(x: number, y: number): Coordinate {
	return {
		x,
		y,
	};
}

function parseCoords(obj: Coordinate): Coordinate;
function parseCoords(x: number, y: number): Coordinate;
//unknown is any but where you cast before you use it
function parseCoords(arg1: unknown, arg2?: unknown): Coordinate {
	let cord: Coordinate = {
		x: 0,
		y: 0,
	};

	if (typeof arg1 === "object") {
		cord = {
			...(arg1 as Coordinate),
		};
	} else {
		cord = {
			x: arg1 as number,
			y: arg2 as number,
		};
	}

	return cord;
}

console.log(parseCoords(1, 2));
console.log(parseCoords({ x: 1, y: 2 }));
