function makeGraph( data, resize ) {

	console.log( "data", data );

	let graph = d3.select( "#graph" );
	let svg = graph.select( "svg" );

	if ( ! svg.empty() && ! resize )
		return;

	if ( resize )
		svg.remove();

	svg = graph.append( "svg" );

	console.log( "b" );
	
	let margin = { top: 20, right: 20, bottom: 30, left: 40 },
		width = ( parseInt( svg.style( "width" ) ) - margin.left - margin.right ),
		height = ( parseInt( svg.style( "height" ) ) - margin.top - margin.bottom );

	let x = d3.scale.ordinal().rangeRoundBands( [ 0, width ], 0.1 );
		y = d3.scale.linear().range( [ height, 0 ] );

	let g = svg.append( "g" )
				.attr( "transform", "translate(" + margin.left + "," + margin.top + ")" );

	x.domain( data.map( function( d ) { return d.day; } ) );
	y.domain( [ 0, d3.max( data, function( d ) { return d.stop; } ) ] );

	let xAxis = d3.svg.axis()
					.scale( x )
					.orient( "bottom" )
					//.tickFormat( d3.time.format( "%Y-%m" ) );

	let yAxis = d3.svg.axis()
					.scale( y )
					.orient( "left" )
					.ticks( 10 );

	g.append( "g" )
		.attr( "class", "axis axis--x" )
		.attr( "transform", "translate( 0," + height + " )" )
		.call( yAxis );

	g.append( "g" )
			.attr( "class", "axis axis--y" )
			.call( xAxis )
		.append( "text" )
			.attr( "transform", "rotate( -90 )" )
			.attr( "y", 6 )
			.attr( "dy", "0.71em" )
			.attr( "text-anchor", "end" )
			.text( "Frequency" );

	g.selectAll( ".bar" )
		.data( data )
		.enter().append( "rect" )
			.attr( "class", "bar" )
			.attr( "data-type", function( d ) { return d.type; } )
			.attr( "x", function( d ) {
				if ( d.type === "classes" )
					return x( d.day );
				else
					return ( x( d.day ) + ( x.rangeBand() / 2 ) );
			} )
			.attr( "y", function( d ) { return y( d.stop ); } )
			.attr( "width", ( x.rangeBand() / 2 ) )
			.attr( "height", function( d ) {
				let end = ( d.type === "classes" ) ? d.stop : ( d.start + 10 );
				return y( d.start ) - y( end );
			} );

}

d3.json( "data.json", function( raw_data ) {

	let data = [];

	Object.keys( raw_data ).forEach( ( type ) => {
		let a = raw_data[ type ];
		Object.keys( a ).forEach( ( day ) => {
			let b = a[ day ];
			b.forEach( ( item ) => {
				data.push( {
					day: day,
					type: type,
					start: item.start,
					stop: item.end,
				});
			});
		});
	});

	makeGraph( data );

});