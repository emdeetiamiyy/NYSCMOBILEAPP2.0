
	
	////////////////////////////// News Loading  ///////////////
	$(function () {
		var $page = $('#news');
		mypath = 'fntx=news';
		$.ajax({
			type: "POST",
			url: urllink,
			data:mypath,
			dataType: "json",
			cache: false,
			success: function(data) {
				$sections = $page.find('#result');
				// 3.1 Delete the existing content, if any
				$sections.empty();
				for(var i in data){
					var rows = data[i];
					var id = rows[0];
					var year = rows[1];
					// 3.2 Append a new collapsible and store it into a JQuery object
					$sections.append('<div id="collapsible" data-role="collapsible" data-collapsed="true" data-theme="c" data-content-theme="c"> <h3>' + id + '</h3> <p>' + year + '</p>' + '</div>');
					$collapsible = $page.find('#collapsible');
				}
				$collapsible.collapsible();
			},
			error: function() {
				alert("Connection Failed! Please Check your  Mobile Internet Connection or Network Settings");
			} 
			
		});
	});
	
	
	$("#campsec").change(function() {	
		var selectedvalue = $('#campstate').val();	
		$("#statemap").html('<img src='+ selectedvalue +' class="ui-li-icon ui-corner-none" style="width:100%" id="imgsrc">' );		 
    });
	

	
	///////// SECRETARIAT ADDRESSES   
		
	$("#statesec").change(function() {
		var selectedvalue = $('#statesec').val();
		if(selectedvalue == "AB"){				
	$("#stateadd").html('<p> NYSC Secretariat Abia State </p>')
		}
		
	});
	
	
	$("#langstate").change(function() {	
		var selectedvalue = $('#langstate').val();	
		if(selectedvalue == "igbo"){
			$.mobile.changePage("#igbo", { transition: "slideup" });
		}
		else if(selectedvalue == "hausa"){
			$.mobile.changePage("#hausa", { transition: "slideup" });
		}
		else if(selectedvalue == "yoruba"){
			$.mobile.changePage("#yoruba", { transition: "slideup" });		
		}
    });
	
	
	    // Audio player Module  /////////////////////////////////////////////////
        //
        var my_media = null;
        var mediaTimer = null;

        // Play audio
        //
        function playAudio(src) {
            // Create Media object from src
            my_media = new Media(src, onSuccess, onError);

            // Play audio
            my_media.play();

            // Update my_media position every second
            if (mediaTimer == null) {
                mediaTimer = setInterval(function() {
                    // get my_media position
                    my_media.getCurrentPosition(
                        // success callback
                        function(position) {
                            if (position > -1) {
                                setAudioPosition((position) + " sec");
                            }
                        },
                        // error callback
                        function(e) {
                            console.log("Error getting pos=" + e);
                            setAudioPosition("Error: " + e);
                        }
                    );
                }, 1000);
            }
        }

        // Pause audio
        // 
        function pauseAudio() {
            if (my_media) {
                my_media.pause();
            }
        }

        // Stop audio
        // 
        function stopAudio() {
            if (my_media) {
                my_media.stop();
            }
            clearInterval(mediaTimer);
            mediaTimer = null;
        }

        // onSuccess Callback
        //
        function onSuccess() {
            console.log("playAudio():Audio Success");
        }

        // onError Callback 
        //
        function onError(error) {
            alert('code: '    + error.code    + '\n' + 
                  'message: ' + error.message + '\n');
        }

        // Set audio position
        // 
        function setAudioPosition(position) {
            document.getElementById('audio_position').innerHTML = position;
        }
	