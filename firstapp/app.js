Ext.application({
    name: 'myWebSite',
    appFolder: 'app',
    requires:['myWebSite.view.Main'],
    launch: function()
    {
        console.log('App is launched');
        Ext.create('myWebSite.view.Main');
    }
})