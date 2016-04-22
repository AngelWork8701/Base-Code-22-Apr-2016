//Ext.Loader.setConfig({enabled: true});

Ext.define('myWebSite.view.Main', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.Main',
    style:{backgroundColor:'white'},
   /* requires:[
              'RRI.view.MainCtrl',
              'RRI.view.util.menu.MenuBar',
              'RRI.view.appName.dashboard.Dashboard',
              'RRI.view.appName.announcement.announcement',
              'RRI.view.appName.calendar.CalendarBuilder'
              
              /*,'RRI.view.appName.calendarIdCreation'
              ],*/
    //controller:'mainctrl',
    id: 'mainView',
	initComponent : function() {	
	    console.log("Init Main Component");
		var me = this;
		
		Ext.applyIf(me, {
			items : [{
				xtype:'panel',
        	    layout: 'border',
        	    items: [{
						//This is the top header region...
						xtype:'container',
						html: 'north region',
						region: 'north'
					},{
						// Region Kept For Adds
						region:'west',
						xtype: 'container',
						html:'west region'			  
					},{
						//Main Content Region
						region: 'center',   
						xtype: 'container',
						html: 'center region'
					}]
				}]
		});

		me.callParent(arguments);
	},
	

});





