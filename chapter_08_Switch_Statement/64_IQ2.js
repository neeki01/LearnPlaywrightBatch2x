let testscore = 85;

switch ( true ) {

    case ( testscore >= 95 ):
        console.log( "Outstanding" );
        break;
    case ( testscore >= 85 ):
        console.log( "Excellent" );
        break;
    case ( testscore >= 75 ):
        console.log( "Good" );
        break;
    case ( testscore >= 50 ):
        console.log( "Need improvement" );
        break;

    default:
        console.log( "Unstaisfactory" );
}