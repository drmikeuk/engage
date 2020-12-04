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
} );
