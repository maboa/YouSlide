// PLUGIN: Footnote/Text

(function ( Popcorn ) {

  /**
   * Footnote popcorn plug-in
   * Adds text to an element on the page.
   * Options parameter will need a start, end, target and text.
   * Start is the time that you want this plug-in to execute
   * End is the time that you want this plug-in to stop executing
   * Text is the text that you want to appear in the target
   * Target is the id of the document element that the text needs to be
   * attached to, this target element must exist on the DOM
   *
   * @param {Object} options
   *
   * Example:
     var p = Popcorn('#video')
        .footnote({
          start: 5, // seconds
          end: 15, // seconds
          text: 'This video made exclusively for drumbeat.org',
          target: 'footnotediv'
        } )
   *
   */





  Popcorn.forEach( [ "slider", "text" ], function( name ) {

    Popcorn.plugin( name , {

      manifest: {
        about: {
          name: "Popcorn " + name + " Plugin",
          version: "0.1",
          author: "@maboa",
          website: "happyworm.com"
        },
        options: {
          start: {
            elem: "input",
            type: "img",
            label: "In"
          },
          end: {
            elem: "input",
            type: "img",
            label: "Out"
          },
          text: {
            elem: "input",
            type: "img",
            label: "Image"
          },
          target: name + "-container"
        }
      },
        _setup: function( options ) {

      var target = document.getElementById( options.target );

      options._container = document.createElement( "img" );
      //options._container.id = "slide-container";
      options._container.style.display = "none";
      options._container.style.width = "320px";
      options._container.src = options.img;
      //options._container.innerHTML  = '<img style="width: 100%" src="'+options.img+'" />';

      if ( !target && Popcorn.plugin.debug ) {
        throw new Error( "target container doesn't exist" );
      }
      target && target.appendChild( options._container );
    },
    /**
     * @member footnote
     * The start function will be executed when the currentTime
     * of the video  reaches the start time provided by the
     * options variable
     */
    start: function( event, options ){
      options._container.style.display = "inline";
      options._container.className = "active";

      //console.log('about to fade');
      //this.fade( options._container.id );
    },
    /**
     * @member footnote
     * The end function will be executed when the currentTime
     * of the video  reaches the end time provided by the
     * options variable
     */
    end: function( event, options ){
      options._container.style.display = "none";
      options._container.className = "displayed";
    },
    _teardown: function( options ) {
      document.getElementById( options.target ) && document.getElementById( options.target ).removeChild( options._container );
    }
  });
});

})( Popcorn );
