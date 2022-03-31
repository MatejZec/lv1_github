

function Dodaj() {
	var nazivPredmeta = document.getElementById('inptNazivPredemta').value;
	var godinaSemestar = document.getElementById('inptGodinaSemestar').value;
	var ectsBodovi  = document.getElementById('inptECTS').value;
    // First check if a <tbody> tag exists, add one if not
    if ($("#myTable tbody").length == 0) {
        $("#myTableTable").append("<tbody></tbody>");
    }

    // Append product to the table
    $("#myTable tbody").append(
        "<tr>" +
        "<td>" + nazivPredmeta + "</td>" +
        "<td>" + godinaSemestar + "</td>" +
        "<td>" + ectsBodovi + "</td>" +
        "<td>" + "<button type='button' onclick='Obrisi(this);' class='btn btn-default'>" +
        "<span class='glyphicon glyphicon-remove' />" +
        "</button>" +
        "</td>" +
        /*"<td>" + "<button type='button' onclick='PromjeniBoju(this);' class='btn btn-default'>" +
        "<span class='glyphicon glyphicon-ok' />" +
        "</button>" +*/
        "<td>" + "<input type='checkbox' onclick='selectOrgChildRec(this)'  />" +
        "</td>" +
        "</tr>");
}

function Obrisi(ctl) 
{
    $(ctl).parents("tr").remove();
}

function selectOrgChildRec(ctrl){
    $(ctrl).closest('tr').toggleClass('aktivan');
}
/*function PromjeniBoju(ctl) 
{
    $(ctl).closest('tr').css('background-color', 'green');
}*/

$(document).ready(function(){  
    $('#search').keyup(function(){  
         search_table($(this).val());  
    });  
    function search_table(value){  
         $('#myTable tr').each(function(){  
              var found = 'false';  
              $(this).each(function(){  
                   if($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0)  
                   {  
                        found = 'true';  
                   }  
              });  
              if(found == 'true')  
              {  
                   $(this).show();  
              }  
              else  
              {  
                   $(this).hide();  
              }  
         });  
    }  
});