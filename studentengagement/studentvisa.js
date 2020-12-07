$(document).ready( function () {
    //console.log("init DataTable");
    $('#DataTable').DataTable({
        "pageLength": 25,
        "order": [[ 3, 'des' ], [ 2, 'asc' ]],
        "dom": '<"filters"f><"controls"ip>t<"controlsbottom"ip>',   /* ie display filter, table, info, pagination */
        "language": { search: 'Filter' },
        "columnDefs": [ { "targets": [ 0,  1 ],  "visible": false  }]
      });

      // initial filter; active + visa
      $('#DataTable').DataTable()
          .column( 0 ).search( 'active' )
          .column( 1 ).search( 'visa' )
          .draw();


      // add search action to the Studentvisa toggle   .column( 1 ).search( 'visa' ) / dash
      $('#StudentVisaToggle').on( 'click', function () {
          //console.log ("toggle for visa");
          if ($(this).is(":checked")) {
            //console.log ("  toggle changed to ACTIVE -> filter for visa");
            $('#DataTable').DataTable().column( 1 ).search( 'visa' ).draw();
          } else {
            //console.log ("  toggle changed to INACTIVE -> filter for dash");
            $('#DataTable').DataTable().column( 1 ).search( '-' ).draw();
          }

      } );


      // add search action to the ActiveToggle toggle   .column( 0 ).search( 'active' ) / no
      $('#ActiveToggle').on( 'click', function () {
          //console.log ("toggle for active");
          if ($(this).is(":checked")) {
            //console.log ("  toggle changed to ACTIVE -> filter for ACTIVE");
            $('#DataTable').DataTable().column( 0 ).search( 'active' ).draw();
          } else {
            //console.log ("  toggle changed to INACTIVE -> filter for NO");
            $('#DataTable').DataTable().column( 0 ).search( 'no' ).draw();
          }

      } );




} );