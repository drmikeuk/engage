$(document).ready( function () {
    //console.log("init DataTable");
    $('#DataTable').DataTable({
        "pageLength": 25,
        "order": [[ 3, 'des' ], [ 2, 'asc' ]],
        "dom": '<"filters"f><"controls"ip>t<"controlsbottom"ip>',   /* ie display filter, table, info, pagination */
        "language": { search: 'Filter' },
        "columnDefs": [ { "targets": [ 0,  1 ],  "visible": false  }]
      });

      // initial filter = active + visa
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


      // add search action to new, custom, search box
      $('#Filter').on('keyup change', function () {
          $('#DataTable').DataTable().search(this.value).draw();
      });


      // add cutom range filter for days inactive
      // https://datatables.net/examples/plug-ins/range_filtering.html
      $.fn.dataTable.ext.search.push(
          function( settings, data, dataIndex ) {
              // grab active radio button value  eg '0-7'
              range =  $("input[name=days]").filter(":checked").val();

              if (range == "All") {
                min = 0;
                max = '1000';
                console.log ("  reset search ");
              } else if (range == ">30") {
                min = 30;
                max = '1000';
                console.log ("  search > 30 ");
              } else {
                parts = range.split("-");
                min = parts[0];
                max = parts[1];
                console.log ("  search " + min + " to " + max);
              }

              var days = parseFloat( data[3] ) || 0;    // use data for the days column
              if ( ( isNaN( min ) && isNaN( max ) ) ||
                   ( isNaN( min ) && age <= max ) ||
                   ( min <= days  && isNaN( max ) ) ||
                   ( min <= days  && days <= max ) )
              {
                  return true;
              }
              return false;
          }
      );


      // add search action to days filters
      // btngroup = #daysfilters; input ids = range (eg '1-7') or 'All'
      $('#daysfilters').on('click', 'label', function() {
        range = $(this).attr('for');        // eg 1-7
        if (range != "All"){
          parts = range.split("-");
          min = parts[0];
          max = parts[1];

          console.log ("Click filter days..." + min + " to " + max);
        }
        else {
          console.log ("Click filter days reset (ie all)");
        }

        // min max logic is in custom search - just call table redraw here
        $('#DataTable').DataTable().draw();
      });


} );
