/*	$(document).ready(function() {
		
		$('#sale').DataTable( {
			"processing": true,
			"serverSide": true,
	        "ajax": {
	        	"url": "http://localhost:8080/allSala",
	        	"type": "GET"
	        },
	        "columns": [
	            { "data": "id" },
	            { "data": "nomeSala" },
	            { "data": "numeroPosti" }
	        ]
	    } );
	} );*/


    $(document).ready( function () {
        $('#sale').DataTable({
               
               "type":'GET',
               "sAjaxSource": "http://localhost:8080/allSala",
               "sAjaxDataProp": "",
               "order": [[ 0, "asc" ]],
               "aoColumns": [
                     { "mData": "id" },
                     { "mData": "nomeSala" },
					 { "mData": "numeroPosti" },
					 { 
                         "mData": null,
						bSortable:false,
						"mRender":function(data,type,full){
							return '<a class="btn btn-info btn-sm" href=/findByIdSala/' + data.id + '>'+ 'visualizza' + '</a>';
							
						}

					 }
               ]
        })
   });