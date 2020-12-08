$(document).ready( function () {
    //console.log("init DataTable");
    $('#DataTable').DataTable({
        "pageLength": 20,
        "order": [[ 1, 'des' ], [ 0, 'asc' ]],
        "dom": 'ftip',                /* ie display filter, table, info, pagination */
        "language": {
            search: 'Filter'
          }
      });

} );
