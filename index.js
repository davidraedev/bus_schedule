const fs = require( "fs" );

let raw = `MTH223	1	203	 	2:30-3:45	 	2:30-3:45	 	 	20	3	hybrid	60	3.8 
MTH203	1	201	 	2:30-3:45	 	2:30-3:45	 	 	39	3	 	117	7.3
MTH203	2	201	 	4:00-5:15	 	4:00-5:15	 	 	34	3	 	102	6.4
MTH203	3	201	1:00-2:15	 	1:00-2:15	 	 	 	29	3	 	87	5.4
MTH203	4	201	2:30-3:45	 	2:30-3:45	 	 	 	23	3	 	69	4.3
MTH303	1	202	1-2:15	 	1-2:15	 	 	 	32	3	hybrid	96	6.0
MTH303	2	202	1-2:15	 	 	 	1-2:15	 	32	3	hybrid	96	6.0
MTH303	3	201	 	9:45-10:15	 	9-10:15	 	 	32	3	hybrid	96	6.0
MTH303	4	201	 	10:30-11	 	10:30-11:45	 	 	32	3	hybrid	96	6.0
PSC105	1	205A/B	10:55-12:10	 	10:55-12:10	 	10:55-12:10	 	45	4	 	180	11.2
PSC112	1	202	 	9-10:15	 	9-10:15	 	 	36	4	 	144	9.0
CHE103	1	207	815 - 920	 	815 - 920	 	815 - 920	 	23	4	 	92	5.8
NSG150	1	204A	3:30 -5:30	 	 	 	 	 	25	2	 	50	3.1
NSG150	2	204B	3:30 - 5:30	 	 	 	 	 	25	2	 	50	3.1
NSG150	3	205A	3:30 - 5:30	 	 	 	 	 	25	2	 	50	3.1
NSG150	4	205B	3:30 - 5:30 	 	 	 	 	 	25	2	 	50	3.1
NSG260	1	202	725 - 920	 	725 - 920	 	 	 	29	4	 	116	7.2
NSG260	2	203	1055 - 1250	 	1055 - 1250	 	 	 	38	4	 	152	9.5
NSG270	1	204A	 	 	 	 	1105 - 100	 	36	2	 	72	4.5
NSG270	2	202	 	 	 	 	725 - 920	 	31	2	 	62	3.9
NSG310	1	201	725 - 920	 	 	 	 	 	38	2	 	76	4.8
NSG330	1	201	 	 	725 - 920	 	 	 	38	2	 	76	4.8
NSG340	1	203	 	 	 	 	1105 - 100	 	32	2	 	64	4.0
NSG399	1	204A	 	 	1055 - 1250	 	 	 	32	2	 	64	4.0
NSG441	1	207	 	 	 	400 - 700	 	 	20	1	 	20	1.2
NSG447	1	Conference Room				130-415	 	 	10	3	 	30	1.9
NSG450	1	205B	 	 	825 - 920	 	725 - 920	 	44	3	 	132	8.2
NSG460	1	204B	725 - 920	 	725 - 820	 	 	 	44	3	 	132	8.2
NSG470	1	202	1055 - 1250	 	1055 - 1150	 	 	 	38	3	 	114	7.1
NSG480	1	202	 	 	1155 - 1250	 	 	 	38	1	 	38	2.4
KIN280	1	203	 	945 - 1125	 	 	 	 	33	2	 	66	4.1
KIN280	2	203	 	1135 - 115	 	 	 	 	30	2	 	60	3.8
KIN325	1	207	100 - 250		100 - 250	 	 	 	11	2	Quad 1	22	1.4
KIN325	2	202	300 - 450	 	300 - 450	 	 	 	19	2	Quad 1	38	2.4
KIN327	1	207	100 - 250	 	100 - 250	 	 	 	11	2	Quad 2	22	1.4
KIN327	1	202	300 - 450	 	300 - 450	 	 	 	17	2	Quad 2	34	2.1
LIT200	1	205B	 	600 - 745	 	600 - 745	 	 	43	2	Quad 1	86	5.4
LIT200	2	204B	 	 	600 - 750	 	 	 	40	2	 	80	5.0
LIT200	6	205A	 	100 - 245	 	100 - 245	 	 	40	2	Quad 2	80	5.0
LIT351	1	205A	 	600 - 845	 	 	 	 	40	3	 	120	7.5
LIT351	2	205A	 		 	600 - 845	 	 	40	3	 	120	7.5
COM100	2	205A	830-920	 	830-920	 	830-920	 	24	3	 	72	4.5
COM100	5	201	 	600 - 840	 	 	 	 	24	3	 	72	4.5
COM100	8	205A	 	830 - 945	 	830 - 945	 	 	24	3	 	72	4.5
COM100	9	204A	 	 	 	600 - 840	 	 	24	3	 	72	4.5
COM100	10	207	 	600 - 840	 	 	 	 	24	3	 	72	4.5
COM414	1	205B	 	1100-1155	 	1100-1155	 	 	 	 	 	 	 
TRE101	2	205A	 	1100 - 1155	 	1100 - 1155	 	 	40	2	 	80	5.0
TRE250	2	205A	 	1000 - 1055	 	1000 - 1055	 	 	45	2	 	90	5.6
HIS110	 	205A	 	300-415	 	300-415	 	 	36	3	 	108	6.8
HIS111	1	205B	 	730 - 845	 	730 - 845	 	 	36	3	 	108	6.8
HIS111	2	205B	 	900 - 1015	 	900 - 1015	 	 	37	3	 	111	6.9
HIS111	3	207	 	100-215	 	100-215	 	 	37	3	 	111	6.9
POL320	1	203/204A	230 - 410	 	230 - 410	 	 	 	20	4	 	80	5.0
FCS150	1	204A	730 - 850	 	730-850	 	 	 	23	3	 	69	4.3
FCS150 	2	204A	100 - 215	 	100 - 215	 	 	 	36	3	 	108	6.8
FCS385	1	202	 	100 - 250	 	 	 	 	22	2	 	44	2.8
FCS225	1	204B	1215 - 110	 	1215 - 110	 	1215 - 110	 	29	3	 	87	5.4
FCS225	2	204B	130 - 225	 	130 - 225	 	130 - 225	 	24	3	 	72	4.5
FCS425	1	207	 	800 - 915	 	800-915	 	 	14	3	 	42	2.6
CHU395	1	207	 	230 - 345	 	 	 	 	28	3	Hybrid	84	5.2
PHL201	3	207	 	930 - 1045	 	930 - 1045	 	 	41	3	 	123	7.7
BIB101	2	205B	 	230-325	 	230-325	 	 	36	2	 	72	4.5
BIB101	4	205B	 	400-455	 	400-455	 	 	36	2	 	72	4.5
BIB101	5	204B	1100-1155	 	1100-1155	 	 	 	36	2	 	72	4.5
BIB102	1	203	725 - 820	 	725 - 820	 	725 - 820	 	40	3	 	120	7.5
BIB102	2	203	825-920	 	825-920	 	825-920	 	38	3	 	114	7.1
PHL211	1	205B	200-315	 	200-315	 	 	 	44	3	 	132	8.2
THE306	1	205A	100-215	 	100-215	 	 	 	40	3	 	120	7.5
MUH100	1	202	 	1030-1125	 	1030-1125	 	 	 	 	 	0	0.0
MUH100	2	202	 	1130-1225	 	1130-1225	 	 	25	2	 	50	3.1
HON310	1	207	 	1115 - 1230	 	1115 - 1230	 	 	19	3	 	57	3.6
PSY321	1	201	 	 	400-630	 	 	 	29	3	 	87	5.4
BUS201	1	205A	 	 	300-545	 	 	 	36	3	 	108	6.8`;

let classStartTimes = {
	monday: [],
	tuesday: [],
	wednesday: [],
	thursday: [],
	friday: [],
};
let classEndTimes = {
	monday: [],
	tuesday: [],
	wednesday: [],
	thursday: [],
	friday: [],
};
let classes = {
	monday: [],
	tuesday: [],
	wednesday: [],
	thursday: [],
	friday: [],
};

function parseTime( part, day ) {
	if ( part ) {
		let split = part.split( "-" );
		let start = parseHour( split[0], true );
		let end = parseHour( split[1], false, ( start > 1259 ) );
		classStartTimes[ day ].push( start );
		classEndTimes[ day ].push( end );
		classes[ day ].push({
			start: start,
			end: end,
		});
	}
}

function parseRaw() {

	let lines = raw.replace( / - /g, "-" ).split( /\r?\n/ );

	lines.forEach( ( line ) => {
		let part = line.split( /\t/ ).map( ( part ) => { return part.trim() } );
		let column = 3;
		days.forEach( ( day ) => {
			parseTime( part[ column++ ], day );
		});
	});

}

let startPickups = {
	monday: [],
	tuesday: [],
	wednesday: [],
	thursday: [],
	friday: [],
};
let endPickups = {
	monday: [],
	tuesday: [],
	wednesday: [],
	thursday: [],
	friday: [],
};

let days = [ "monday", "tuesday", "wednesday", "thursday", "friday" ];

function doStartTimesAll() {
	days.forEach( ( day ) => {
		doStartTimes( day );
	});
}

function doEndTimesAll() {
	days.forEach( ( day ) => {
		doEndTimes( day );
	});
}

function doStartTimes( day ) {

	classStartTimes[ day ].forEach( ( time ) => {
		let added = false;
		startPickups[ day ].some( ( pickup ) => {

			console.log( pickup.classTime, "|", time )

			if ( pickup.classTime === time ) {
				added = true;
				return true;
			}

			if ( withinFive( time, pickup.classTime, pickup.classTimeSecond ) ) {
				if ( ! pickup.classTimeSecond && pickup.classTimeSecond !== pickup.classTime )
					pickup.classTimeSecond = time;
				added = true;
				return true;
			}
			return false;
		});
		if ( added === false )
			addBusStartPickup( time, day );
	});

}


function addBusStartPickup( time, day ) {
	startPickups[ day ].push({
		classTime: time,
	});
}

function addBusEndPickup( time, day ) {
	endPickups[ day ].push({
		classTime: time,
	});
}


function withinFive( time, a, b ) {

	let minusMinutes = subtractMinutes( time, 5 );
	let plusMinutes = addMinutes( time, 5 );

	let minusDiff = ( minusMinutes - a );
	let plusDiff = ( plusMinutes - a );
	if ( ( minusDiff <= 0 && minusDiff >= -5 ) || ( plusDiff >= 0 && plusDiff <= 5 ) ) {
		// could do this better
		if ( ! b )
			return true;
		if ( ( a < b && time >= a ) || ( a > b && time <= a ) )
			return true;
	}
	return false;
}

function doEndTimes( day ) {

	classEndTimes[ day ].forEach( ( time ) => {
		let added = false;
		endPickups[ day ].some( ( pickup ) => {

			if ( pickup.classTime === time ) {
				added = true;
				return true;
			}

			if ( withinFive( time, pickup.classTime, pickup.classTimeSecond ) ) {
				if ( ! pickup.classTimeSecond )
					pickup.classTimeSecond = time;
				added = true;
				return true;
			}
			return false;
		});
		if ( added === false )
			addBusEndPickup( time, day );
	});
}

function doStartPickupsAll() {
	days.forEach( ( day ) => {
		doStartPickups( day );
	});
}


function doEndPickupsAll() {
	days.forEach( ( day ) => {
		doEndPickups( day );
	});
}

function addMinutes( time, minutes ) {
	let number;
	let remainder = ( time % 100 );
	let sum = ( remainder + minutes );
	if ( sum > 60 ) {
		number = ( Math.ceil( time / 100 ) * 100 );
		number += ( sum % 60 );
	}
	else {
		number = time + minutes;
	}
	return number;
}

function subtractMinutes( time, minutes ) {
	let number;
	let remainder = ( time % 100 );
	let difference = ( remainder - minutes );
	if ( difference < 0 ) {
		number = ( ( Math.floor( time / 100 ) * 100 ) - 100 );
		number += ( 60 + difference );
	}
	else {
		number = time - minutes;
	}
	return number;
}

function doStartPickups( day ) {
	startPickups[ day ].forEach( ( pickup ) => {
		if ( pickup.classTimeSecond )
			pickup.start = subtractMinutes( Math.min( pickup.classTime, pickup.classTimeSecond ), 20 );
		else
			pickup.start = subtractMinutes( pickup.classTime, 20 );
		pickup.end = addMinutes( pickup.start, 10 );
	});
}

function doEndPickups( day ) {
	endPickups[ day ].forEach( ( pickup ) => {
		if ( pickup.classTimeSecond )
			pickup.start = addMinutes( Math.max( pickup.classTime, pickup.classTimeSecond ), 5 );
		else
			pickup.start = addMinutes( pickup.classTime, 5 );
		pickup.end = addMinutes( pickup.start, 10 );
	});
}

function parseHour( str, isStart, isPM ) {
	let hour = parseInt( str.trim().replace( ":", "" ) );
	if ( hour < 100 )
		hour *= 100;
	if ( ( isStart && hour < 630 ) || isPM )
		hour += 1200;
	return hour;
}

parseRaw();
doStartTimesAll();
doEndTimesAll();
doStartPickupsAll();
doEndPickupsAll();

fs.writeFileSync( "data.json", JSON.stringify( { startPickups: startPickups, endPickups: endPickups, classes: classes } ) );