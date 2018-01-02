const fs = require( "fs" );

fs.readFile( "data.json", ( error, json ) => {
	let data = JSON.parse( json );

	toTsv( data );
});

let days = [ "monday", "tuesday", "wednesday", "thursday", "friday" ];

function toTsv( data ) {

	days.forEach( ( day ) => {
		data.startPickups[ day ].sort( ( a, b ) => {
			return ( a.classTime < b.classTime ) ? -1 : ( a.classTime > b.classTime ) ? 1 : 0;
		});
		data.endPickups[ day ].sort( ( a, b ) => {
			return ( a.classTime < b.classTime ) ? -1 : ( a.classTime > b.classTime ) ? 1 : 0;
		});
	});

	console.log( "Loma Departures" );

	days.forEach( ( day ) => {
		console.log( "\t" + day + ":" );
		let output = data.startPickups[ day ].map( ( d, i ) => {
			let meridian = ( d.start > 1159 ) ? "pm" : "am";
			if ( d.start > 1259 )
				d.start -= 1200;
			let num = d.start.toString();
			let result = ( num.length === 4 ) ? num[0] + num[1] + ":" + num[2] + num[3] : num[0] + ":" + num[1] + num[2];
			if ( i === 0 )
				result = "\t\t" + result;
			return result + " " + meridian;
		}).join( "\n\t\t" );
		console.log( output );
	});

	console.log( "\nLiberty Station Departures" );

	days.forEach( ( day ) => {
		console.log( "\t" + day + ":" );
		let output = data.endPickups[ day ].map( ( d, i ) => {
			let meridian = ( d.start > 1159 ) ? "pm" : "am";
			if ( d.start > 1259 )
				d.start -= 1200;
			let num = d.start.toString();
			let result = ( num.length === 4 ) ? num[0] + num[1] + ":" + num[2] + num[3] : num[0] + ":" + num[1] + num[2];
			if ( i === 0 )
				result = "\t\t" + result;
			return result + " " + meridian;
		}).join( "\n\t\t" );
		console.log( output );
	});

}