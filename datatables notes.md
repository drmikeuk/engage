## custom filter button:
https://datatables.net/forums/discussion/25137/custom-filter-buttons

$('ul').on( 'click', 'a', function () {
  table.column( 1 ).search( $(this).text() );
} );

nb $(this).text() -> grabs search term off button


## toggles...
need to check state



## ranges...
https://datatables.net/plug-ins/filtering/row-based/range_numbers
nb force column numeric? - sorts OK by default so prob oK


## hide columns
https://datatables.net/examples/basic_init/hidden_columns.html

nb need to l;eave them searchable so can filter on them

$(document).ready(function() {
    $('#example').DataTable( {
"columnDefs": [
            {
                "targets": [ 2 ],
                "visible": false,
                "searchable": false
            },
            {
                "targets": [ 3 ],
                "visible": false
            }
        ]

  \




          "columnDefs": [ {
                          "targets": [ 0 ],
                          "visible": false,
                          "searchable": false } ]



                                                                                                                                                                                                                                                              .
