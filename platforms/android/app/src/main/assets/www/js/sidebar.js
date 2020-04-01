

function showSidebar(){
	document.getElementById('sidebar-toggle').addEventListener('click', function () {
		document.getElementById("rightSidebar").style.right = "0";
		console.log("sidebarPressed");
});
}
