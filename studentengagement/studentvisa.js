$(document).ready( function () {
    //console.log("init DataTable");
    $('#DataTable').DataTable({
        "pageLength": 25,
        "order": [[ 1, 'des' ], [ 0, 'asc' ]],
        "dom": '<"filters"f><"controls"ip>t<"controlsbottom"ip>',                /* ie display filter, table, info, pagination */
        "language": {
            search: 'Filter'
          }
      });

      // initial filter; active + visa
      $('#DataTable').DataTable()
          .column( 7 ).search( 'active' )
          .column( 8 ).search( 'visa' )
          .draw();


      // add search action to the filterActive button
      //onclick="dataTable.column(7).search('active').draw();"

      $('#filterActive').on( 'click', function () {
          console.log ("filter for active");
          $('#DataTable').DataTable()
              .column( 7 )
              .search( 'active' )
              .draw();
          return false; // ie stop submission
      } );

      $('#filterNotActive').on( 'click', function () {
          console.log ("filter for not active");
          $('#DataTable').DataTable()
              .column( 7 )
              .search( 'no' )
              .draw();
          return false; // ie stop submission
      } );


      // add search action to the filterVisa button
      //onclick="dataTable.column(8).search('visa').draw();"
      $('#filterVisa').on( 'click', function () {
          console.log ("filter for visa");
          $('#DataTable').DataTable()
              .column( 8 )
              .search( 'visa' )
              .draw();
          return false; // ie stop submission
      } );

} );
