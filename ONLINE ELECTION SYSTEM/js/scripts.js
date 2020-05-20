(function() {
    "use strict";

    // custom scrollbar

    $("html").niceScroll({styler:"fb",cursorcolor:"#b52e31", cursorwidth: '5', cursorborderradius: '10px', background: '#252525', spacebarenabled:false, cursorborder: '0',  zindex: '1000'});

    $(".left-side").niceScroll({styler:"fb",cursorcolor:"#00C6D7", cursorwidth: '3', cursorborderradius: '10px', background: '#252525', spacebarenabled:false, cursorborder: '0'});


    $(".left-side").getNiceScroll();
    if ($('body').hasClass('left-side-colla                 desc: "Analysis",
                    values: [{
                        from: "/Date(1320192000000)/",
                        to: "/Date(1322401600000)/",
                        label: "Requirement Gathering",
                        customClass: "ganttRed"
                    }]
                }, {
                    name: " ",
                    desc: "Scoping",
                    values: [{
                        from: "/Date(1322611200000)/",
                        to: "/Date(1323302400000)/",
                        label: "Scoping",
                        customClass: "ganttRed"
                    }]
                }, {
                    name: "Sprint 1",
                    desc: "Development",
                    values: [{
                        from: "/Date(1323802400000)/",
                        to: "/Date(1325685200000)/",
                        label: "Development",
                        customClass: "ganttGreen"
                    }]
                }, {
                    name: " ",
                    desc: "Showcasing",
                    values: [{
                        from: "/Date(1325685200000)/",
                        to: "/Date(1325695200000)/",
                        label: "Showcasing",
                        customClass: "ganttBlue"
                    }]
                }, {
                    name: "Sprint 2",
                    desc: "Development",
                    values: [{
                        from: "/Date(1326785200000)/",
                        to: "/Date(1325785200000)/",
                        label: "Development",
                        customClass: "ganttGreen"
                    }]
                }, {
                    name: " ",
                    desc: "Showcasing",
                    values: [{
                        from: "/Date(1328785200000)/",
                        to: "/Date(1328905200000)/",
                        label: "Showcasing",
                        customClass: "ganttBlue"
                    }]
                }, {
                    name: "Release Stage",
                    desc: "Training",
                    values: [{
                        from: "/Date(1330011200000)/",
                        to: "/Date(1336611200000)/",
                        label: "Training",
                        customClass: "ganttOrange"
                    }]
                }, {
                    name: " ",
                    desc: "Deployment",
                    values: [{
                        from: "/Date(1336611200000)/",
                        to: "/Date(1338711200000)/",
                        label: "Deployment",
                        customClass: "ganttOrange"
                    }]
                }, {
                    name: " ",
                    desc: "Warranty Period",
                    values: [{
                        from: "/Date(1336611200000)/",
                        to: "/Date(1349711200000)/",
                        label: "Warranty Period",
                        customClass: "ganttOrange"
                    }]
                }],
                navigate: "scroll",
                scale: "weeks",
                maxScale: "months",
                minScale: "days",
                itemsPerPage: 10,
                onItemClick: function (data) {
                    alert("Item clicked - show some details");
                },
                onAddClick: function (dt, rowId) {
  {
	        box.toggle();
	        button.toggleClass('active');
	    });
	    form.mouseup(function() { 
	        return false;
	    });
	    $(this).mouseup(function(login) {
	        if(!($(login.target).parent('#loginButton').length > 0)) {
	            button.removeClass('active');
	            box.hide();
	        }
	    });
	});
	