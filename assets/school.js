$(document).ready( function () {
    //nb buttons extension, not just core DataTables !
    $('#DataTable').DataTable({
        "pageLength": 25,
        "order": [[ 3, 'des' ], [ 2, 'asc' ]],
        //"dom": '<"controls"ipB>t<"controlsbottom"ipB>',   /* ie display info, pagination, buttons, table */
        "dom": '<"row"<"col"i><"col right"<"activeToggle">Bp>>t<"row"<"col"i><"col right"Bp>>',
        "buttons": ['copy', 'csv'],
        "language": { "info": "Showing _START_ to _END_ of _TOTAL_ students",
                      "infoFiltered":   "(filtered from _MAX_)" },
        "columnDefs": [ { "targets": [ 0, 1, 5 , 6],  "visible": false  }]
      });

      // initial filter = active
      $('#DataTable').DataTable()
          .column( 0 ).search( 'active' )
          .draw();


      // add toggle to .activeToggle
      var toggleCode = '<div class="custom-control custom-switch"><input type="checkbox" class="custom-control-input" id="ActiveToggle" checked><label class="custom-control-label" for="ActiveToggle">Active students</label></div>';
      $('.activeToggle').append(toggleCode);



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

      // add search action to days filters
      // https://datatables.net/examples/plug-ins/range_filtering.html
      // https://stackoverflow.com/questions/18958075/add-range-filter-datatable-feature-to-button-click
      // btngroup = #daysfilters; input ids = range (eg '1-7') or 'All'
      $('#daysfilters').on('click', 'label', function() {
        range = $(this).attr('for');        // eg 1-7

        if (range == "All") {
          min = 0;
          max = '1000';
          //console.log ("Reset search (all)");
        } else if (range == ">30") {
          min = 30;
          max = '1000';
          //console.log ("Search > 30 ");
        } else {
          parts = range.split("-");
          min = parts[0];
          max = parts[1];
          //console.log ("Search " + min + " to " + max);
        }

        // push to custom filter
        $.fn.dataTable.ext.search.push(
            function( settings, data, dataIndex ) {
                var days = parseFloat( data[3] ) || 0; // use data for the days column

                if (days >= min && days <= max)
                    return true;
                return false;
            }
        );

        // redraw
        $('#DataTable').DataTable().draw();
      }); // end daysfilters



      // add search action to years filters
      // btngroup = #yearfilters; input ids = All, 1, 2, 3
      $('#yearfilters').on('click', 'label', function() {
        year = $(this).attr('for');        // eg 1

        if (year == "All") {
          //console.log ("Reset search (all)");
          // call search api and redraw table
          $('#DataTable').DataTable().column(8).search('').draw();
        } else {
          //console.log ("Search " + year);
          // call search api and redraw table
          $('#DataTable').DataTable().column(8).search(year).draw();
        }
      });



      // add search action to course select #courseSelect
      $('#courseSelect').on('change',  function() {
        var course = $(this).val();
        //console.log ("Filter for course: " + course);
        $('#DataTable').DataTable().column(9).search(course).draw();
      });


} );
