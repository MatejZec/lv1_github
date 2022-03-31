/*function Dodaj()
{

	var nazivPredmeta = document.getElementById('inptNazivPredemta').value;
	var godinaSemestar = document.getElementById('inptGodinaSemestar').value;
	var ectsBodovi  = document.getElementById('inptECTS').value;

	var tbodyRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];

	// Insert a row at the end of table
	var newRow = tbodyRef.insertRow();

	// Insert a cell at the end of the row
	var newCell1 = newRow.insertCell();
	var newCell2 = newRow.insertCell();
	var newCell3 = newRow.insertCell();

	// Append a text node to the cell
	var newTextNP = document.createTextNode(nazivPredmeta);
	newCell1.appendChild(newTextNP);
	var newTextGS = document.createTextNode(godinaSemestar);
	newCell2.appendChild(newTextGS);
	var newTextECTS = document.createTextNode(ectsBodovi);
	newCell3.appendChild(newTextECTS);
}*/

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