/* NOA-Player HTML5 无广告播放插件
 * By 米开朗K罗 http://luo.today/
 * MIT Licensed.
 */
var hp_player = (function() {

	//Youku url methods begin

	function D( a ) {
		if ( !a )
			return "";
		var a = a.toString(), b, e, f, d, g, h;
		f = a.length;
		e = 0;
		for ( b = ""; e < f; ) {
			d = a.charCodeAt( e++ ) & 255;
			if ( e == f ) {
				b += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt( d >> 2 );
				b += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt( (d &
					3) << 4 );
				b += "==";
				break
			}
			g = a.charCodeAt( e++ );
			if ( e == f ) {
				b += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt( d >> 2 );
				b += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt( (d & 3) << 4 | (g & 240) >> 4 );
				b += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt( (g & 15) << 2 );
				b += "=";
				break
			}
			h = a.charCodeAt( e++ );
			b += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt( d >> 2 );
			b += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt( (d &
				3) << 4 | (g & 240) >> 4 );
			b += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt( (g & 15) << 2 | (h & 192) >> 6 );
			b += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt( h & 63 )
		}
		return b;
	}

	function E( a, c ) {
		for ( var b = [], f = 0, i, d = "", h = 0; 256 > h; h++ )
			b[h] = h;
		for ( h = 0; 256 > h; h++ )
			f = (f + b[h] + a.charCodeAt( h % a.length )) % 256, i = b[h], b[h] = b[f], b[f] = i;
		for ( var p = f = h = 0; p < c.length; p++ )
			h = (h + 1) % 256, f = (f + b[h]) % 256, i = b[h], b[h] = b[f], b[f] = i, d += String.fromCharCode( c.charCodeAt( p ) ^ b[(b[h] + b[f]) % 256] );
		return d;
	}

	function F( a, c ) {
		for ( var b = [], f = 0; f < a.length; f++ ) {
			for ( var i = 0, i = "a" <= a[f] && "z" >= a[f] ? a[f].charCodeAt( 0 ) - 97 : a[f] - 0 + 26, d = 0; 36 > d; d++ )
				if ( c[d] == i ) {
					i = d;
					break
				}
			b[f] = 25 < i ? i - 26 : String.fromCharCode( i + 97 )
		}
		return b.join( "" );
	}

	function na( a ) {
		if ( !a )
			return "";
		var a = a.toString(), c, b, f, i, d, h = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27,
			28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1];
		i = a.length;
		f = 0;
		for ( d = ""; f < i; ) {
			do
				c = h[a.charCodeAt( f++ ) & 255];
			while ( f < i && -1 == c );
			if ( -1 == c )
				break;
			do
				b = h[a.charCodeAt( f++ ) & 255];
			while ( f < i && -1 == b );
			if ( -1 == b )
				break;
			d += String.fromCharCode( c << 2 | (b & 48) >> 4 );
			do {
				c = a.charCodeAt( f++ ) & 255;
				if ( 61 == c )
					return d;
				c = h[c]
			}
			while ( f < i && -1 == c );
			if ( -1 == c )
				break;
			d += String.fromCharCode( (b & 15) << 4 | (c & 60) >> 2 );
			do {
				b = a.charCodeAt( f++ ) & 255;
				if ( 61 == b )
					return d;
				b = h[b]
			}
			while ( f < i && -1 == b );
			if ( -1 == b )
				break;
			d += String.fromCharCode( (c &
				3) << 6 | b )
		}
		return d
	}

	function n( a ) {
		var b = [], e;
		for ( e in a )
			b.push( e + "=" + a[e] );
		return b.join( "&" );
	}

	U = function( a ) {
		this._randomSeed = a;
		this.cg_hun()
	};

	U.prototype = {
		cg_hun: function() {
			this._cgStr = "";
			for ( var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ/\\:._-1234567890",
				      c = a.length, b = 0; b < c; b++ ) {
				var f = parseInt( this.ran() * a.length );
				this._cgStr += a.charAt( f );
				a = a.split( a.charAt( f ) ).join( "" )
			}
		},
		cg_fun: function( a ) {
			for ( var a = a.split( "*" ), c = "", b = 0; b < a.length - 1; b++ )
				c += this._cgStr.charAt( a[b] );
			return c
		},
		ran: function() {
			this._randomSeed = (211 * this._randomSeed + 30031) % 65536;
			return this._randomSeed / 65536
		}
	};

	//Youku url method end

	/* Simple JavaScript Inheritance
	 * By John Resig http://ejohn.org/
	 * MIT Licensed.
	 */
	// Inspired by base2 and Prototype
	//http://ejohn.org/blog/simple-javascript-inheritance/
	(function() {
		var initializing = false, fnTest = /xyz/.test( function() {
			xyz;
		} ) ? /\b_super\b/ : /.*/;

		// The base Class implementation (does nothing)
		this.Class = function() {
		};

		// Create a new Class that inherits from this class
		Class.extend = function( prop ) {
			var _super = this.prototype;

			// Instantiate a base class (but only create the instance,
			// don't run the init constructor)
			initializing = true;
			var prototype = new this();
			initializing = false;

			// Copy the properties over onto the new prototype
			for ( var name in prop ) {
				// Check if we're overwriting an existing function
				prototype[name] = typeof prop[name] == "function" &&
					typeof _super[name] == "function" && fnTest.test( prop[name] ) ?
					(function( name, fn ) {
						return function() {
							var tmp = this._super;

							// Add a new ._super() method that is the same method
							// but on the super-class
							this._super = _super[name];

							// The method only need to be bound temporarily, so we
							// remove it when we're done executing
							var ret = fn.apply( this, arguments );
							this._super = tmp;

							return ret;
						};
					})( name, prop[name] ) :
					prop[name];
			}

			// The dummy class constructor
			function Class() {
				// All construction is actually done in the init method
				if ( !initializing && this.init )
					this.init.apply( this, arguments );
			}

			// Populate our constructed prototype object
			Class.prototype = prototype;

			// Enforce the constructor to be what we expect
			Class.prototype.constructor = Class;

			// And make this class extendable
			Class.extend = arguments.callee;

			return Class;
		};
	})();

	var Config = (function() {

		var api_key = 'f351515304020cad28c92f70f002261c';
		var url = 'http://api.tv.sohu.com/v4/video/info/';
		var sh_video_list_url = 'http://pl.hd.sohu.com/videolist';
		var other_params = 'plat=17&sver=4.0&partner=78&site=1';

		var y_url = 'http://v.youku.com/player/getPlayList/VideoIDS/';

		return {
			api_key: api_key,
			url: url,
			other_params: other_params,
			y_url: y_url,
			sh_video_list_url: sh_video_list_url
		}

	})();

	//video data api caller
	var ServiceCaller = Class.extend( {
		init: function( isDancing ) {
			this.dancing = isDancing;
		},

		callSH: function( v_id ) {
			jQuery.ajax(
				{
					dataType: 'jsonp',
					type: 'GET',
					async: true,
					contentType: 'text/javascript',
					url: Config.url + v_id + '.json?callback=sh_video_json&api_key=' + Config.api_key + '&' + Config.other_params

				}
			);
		},

		callSHVideoList: function( playlist_id, v_id ) {
			jQuery.ajax(
				{
					dataType: 'jsonp',
					type: 'GET',
					async: true,
					contentType: 'text/javascript',
					url: Config.sh_video_list_url + '?playlistid=' + playlist_id + '&o_playlistId=' + playlist_id + '&vid=' + v_id + '&pianhua=0&pagesize=999&order=0&cnt=1&callback=sh_video_list'

				}
			);
		},

		callY: function( v_id ) {
			jQuery.ajax(
				{
					dataType: 'jsonp',
					type: 'GET',
					async: true,
					contentType: 'text/javascript',
					url: Config.y_url + v_id + '/pf/4/ctype/12/ev/1?__callback=y_video_json'

				}
			);
		}

	} );

	//Start

	//check if already open
	if ( document.getElementsByClassName( 'hp-video-player' ).length > 0 ) {
		return;
	}

//	var host_url = 'http://localhost:8888/noaplayer/';
	var host_url = 'http://115.28.165.154/luo/noa_player/';
	var css = document.createElement( 'link' );
	css.setAttribute( 'rel', 'stylesheet' );
	css.setAttribute( 'media', 'all' );
	css.setAttribute( 'hp_player', 'true' );
	css.setAttribute( 'href', host_url + 'style/application.css?t=' + (new Date().getTime()) );

	document.head.appendChild( css );

	init();

	function init() {

		var div = document.createElement( 'div' );
		div.setAttribute( 'class', 'hp-video-player' );

		var video_template = '<div class="noa-video-div">' +
			'<span class="noa-video-title"></span>' +
			'<video id="noa_video_1" class="video-js" poster="#000000" controls preload="metadata" ' +
			'width="800" height="480"' +
			' >' +
			'<source id="noa_video_1_source"  type="video/mp4" >' +
			'</video>' +
			'<video id="noa_video_2" style="display: none" class="video-js" poster="#000000" controls preload="metadata" ' +
			'width="800" height="480"' +
			' >' +
			'<source id="noa_video_2_source"  type="video/mp4" >' +
			'</video>' +
			'<span class="hp-loading-video">Loading...</span>' +
			'<span class="hp-close-btn">X</span>' +
			'</div>';
//			'type="application/vnd.apple.mpegurl">' +
//		var video_player = jQuery( video_template );

		div.innerHTML = video_template;

		document.body.appendChild( div );

		if ( typeof jQuery != 'undefined' ) {
			run();
		} else {
			var ready_timer = setInterval( function() {

				if ( typeof jQuery != 'undefined' ) {

					clearInterval( ready_timer );
					run();
				}

			}, 1000 );
		}

	}

	function run() {

		initKeyboardEvents()

		jQuery( '.hp-close-btn' ).click( function() {
			jQuery( '.hp-video-player' ).remove();

			jQuery( 'script[hp_player=true]' ).remove();
			jQuery( 'link[hp_player=true]' ).remove();
			jQuery( '#player' ).show();
		} );

		if ( jQuery( '#player' ).length > 0 ) {
			jQuery( '#player' ).hide();
		}

		if ( window.location.href.indexOf( 'sohu' ) >= 0 ) {
			getSHData();
		} else if ( window.location.href.indexOf( 'youku' ) >= 0 ) {
			getYData();
		}
	}

	function initKeyboardEvents() {
		jQuery( 'body' ).unbind( 'keydown' ).bind( 'keydown', function( e ) {
			if ( jQuery( '#noa_video_1' ).length > 0 ) {
				var video = jQuery( '#noa_video_1' )[0];

				//Space play/pause
				if ( e.which === 32 && video.readyState === 4 ) {
					if ( video.paused ) {
						video.play();
					} else {
						video.pause();
					}
				}

				//forward 30 secs
				if ( e.which === 39 && video.readyState === 4 ) {
					video.currentTime = video.currentTime + 30;
				}

				//back 30 secs
				if ( e.which === 37 && video.readyState === 4 ) {
					video.currentTime = video.currentTime - 30;
				}

				//up volume
				if ( e.which === 38 && video.readyState === 4 ) {
					if ( video.volume + 0.1 < 1 ) {
						video.volume += 0.1;
					} else {
						video.volume = 1;
					}

				}

				//down volume
				if ( e.which === 40 && video.readyState === 4 ) {
					if ( video.volume - 0.1 > 0 ) {
						video.volume -= 0.1;
					} else {
						video.volume = 0;
					}

				}

			}

		} );
	}

	function getSHData( v_id ) {
		var api = new ServiceCaller();

		if ( !v_id ) {
			v_id = vid;
		}

		api.callSH( v_id );

	}

	function getYData( vid ) {
		var api = new ServiceCaller();

		if ( !vid ) {
			vid = videoId;
		}
		api.callY( vid );
	}

	function stopVideo() {
		document.getElementById( 'noa_video_1' ).firstElementChild.setAttribute( 'src', '' );
//		document.getElementById( 'noa_video_2' ).firstElementChild.setAttribute( 'src', '' );

	}

	function createMp4VideoList( urlList ) {

		jQuery( '.noa-part-list' ).remove();

		var part_list_div = jQuery( '<div class="noa-part-list"></div>' );

		for ( var i = 0; i < urlList.length; i++ ) {
			var list_item = urlList[i];
			var list_item_box = jQuery( '<span class="item-box"></span>' );

			list_item_box.text( '#' + (i + 1) );
			list_item_box.attr( 'video_path', list_item );
			list_item_box.attr( 'index', i );

			list_item_box.click( function( e ) {
				var target = jQuery( e.target );
				var index = target.attr( 'index' );

				playVideoList( urlList, parseInt( index ) );

			} );

			part_list_div.append( list_item_box );
		}
		jQuery( '.noa-video-div' ).append( part_list_div );

	}

	function highlightPlayingPartBox( url ) {

		jQuery( '.selected-part-box' ).removeClass( 'selected-part-box' );

		jQuery( 'span[video_path="' + url + '"]' ).addClass( 'selected-part-box' );
	}

	function playVideoList( urlList, start_index ) {

		jQuery( '.hp-loading-video' ).show();
		var length = urlList.length;

		if ( !start_index ) {
			start_index = 0;
		}
		var current_index = start_index;

		if ( length > 1 ) {
			createMp4VideoList( urlList );
		}

		//init
		var video = jQuery( '#noa_video_1' )[0];
//		var video_2 = jQuery( '#noa_video_2' )[0];

		video.firstElementChild.setAttribute( 'src', '' );
//		video_2.firstElementChild.setAttribute( 'src', '' );

		jQuery( video ).show();
//		jQuery( video_2 ).hide();
//		var current_video = video;
//		var next_video = video_2;

		//init end

		jQuery( video ).unbind( 'playing' ).bind( 'playing', onPlaying );

		jQuery( video ).unbind( 'canplay' ).bind( 'canplay', onCanPlay );

		jQuery( video ).unbind( 'ended' ).bind( 'ended', playNext );
//		jQuery( video_2 ).unbind( 'canplay' ).bind( 'canplay', onCanPlay );
//
//		jQuery( video_2 ).unbind( 'ended' ).bind( 'ended', playNext );

		if ( SH_last_part ) {
			video.firstElementChild.setAttribute( 'src', urlList[SH_last_part] );
			SH_last_part = null;
		} else {
			video.firstElementChild.setAttribute( 'src', urlList[current_index] );
		}

//		if ( current_index + 1 < length ) {
//			video_2.firstElementChild.setAttribute( 'src', urlList[current_index + 1] );
//		}

		video.load();
//		video_2.load();

		function onPlaying() {
			jQuery( '.hp-loading-video' ).hide();
		}

		function onCanPlay( e ) {
//			if ( e.target == current_video ) {
//				e.target.play();
//				highlightPlayingPartBox( e.target.firstElementChild.getAttribute( 'src' ) );
//			} else {
//				console.log( ('next video is ready') )
//			}

			e.target.play();

			if ( SH_last_time ) {
				e.target.currentTime = SH_last_time;
				SH_last_time = null;
			}
			highlightPlayingPartBox( e.target.firstElementChild.getAttribute( 'src' ) );
		}

		function playNext() {
			current_index = current_index + 1;

			video.firstElementChild.setAttribute( 'src', urlList[current_index] );
//			if ( current_index + 1 < length ) {
//				video_2.firstElementChild.setAttribute( 'src', urlList[current_index + 1] );
//				video_2.load();
//			}

			video.load();

		}

	}

	function playVideo( url ) {

		var video = jQuery( '#noa_video_1' )[0];

		video.addEventListener( 'ended', function() {
		} );

		video.addEventListener( 'playing', function() {
			jQuery( '.hp-loading-video' ).hide();
		} );

		video.setAttribute( 'src', url + '&date=' + (new Date()).getTime() );
//		var state_ready = setInterval( function() {
//			if ( jQuery( '#noa_video_1' ).length > 0 && video.readyState == 4 ) {
//
//				clearInterval( state_ready );
//
//				jQuery( '.hp-loading-video' ).hide();
////				jQuery( '#noa_video_1' )[0].play();
//
//				var fix_time = setInterval( function() {
//					console.log( 'IM _+++!!' )
//					if ( jQuery( '#noa_video_1' ).length == 0 ) {
//						clearInterval( fix_time );
//					}
//					if ( video.readyState === 2 ) {
//						video.currentTime = video.currentTime + 1;
//					}
//				}, 1000 );
//
//			}
//		}, 1000 )

	}

	function setSHVideoList( result ) {
		if ( result.hasOwnProperty( 'videos' ) && result.videos.length > 0 && jQuery( '.video-list' ).length === 0 ) {
			var video_list_div = jQuery( '<div class="video-list"></div>' );

			for ( var i = 0; i < result.videos.length; i++ ) {
				var list_item = result.videos[i];
				var list_item_box = jQuery( '<span class="item-box"></span>' );

				list_item_box.text( list_item.showName );
				list_item_box.attr( 'videoId', list_item.vid );

				list_item_box.click( function( e ) {
					var target = jQuery( e.target );

					var videoId = target.attr( 'videoId' );
					stopVideo();
					getSHData( videoId );

				} );

				video_list_div.append( list_item_box );

			}

			jQuery( '.noa-video-div' ).append( video_list_div );
		}

		jQuery( '.selected-item-box' ).removeClass( 'selected-item-box' );

		jQuery( 'span[videoId="' + SH_video_result.data.vid + '"]' ).addClass( 'selected-item-box' );
	}

	var SH_video_result = false;
	//save last select res, use when load new video set
	var SH_last_res = 2;
	//save last select part, use when playVideoList
	var SH_last_part = null;
	//save last play time, use when playVideoList
	var SH_last_time = null;

	function setSHVideoResolutionBoxes() {

		jQuery( '.noa-res-list' ).remove();

		var resolution_box_div = jQuery( '<div class="noa-res-list"></div>' );
		var item_box;
		if ( SH_video_result.data.url_nor_mp4 ) {
			addBox( SH_video_result.data.url_nor_mp4, '标清', 1 );
		}

		if ( SH_video_result.data.url_high_mp4 ) {
			addBox( SH_video_result.data.url_high_mp4, '高清', 2 );
		}

		if ( SH_video_result.data.url_super_mp4 ) {
			addBox( SH_video_result.data.url_super_mp4, '超清', 3 );
		}

		function addBox( path, label, level ) {
			item_box = jQuery( '<span class="item-box"></span>' );
			item_box.text( label );
			item_box.attr( 'video_path', path );
			item_box.attr( 'level', level );
			var current_video_path = jQuery( '#noa_video_1_source' ).attr( 'src' );
			if ( path.indexOf( current_video_path ) >= 0 ) {
				item_box.addClass( 'selected-res-box' );
			}
			resolution_box_div.append( item_box );

			item_box.unbind( 'click' ).bind( 'click', function( e ) {

				resolution_box_div.find( '.selected-res-box' ).removeClass( 'selected-res-box' );
				var target = jQuery( e.currentTarget );

				SH_last_res = parseInt( target.attr( 'level' ) );
				SH_last_part = jQuery( '.noa-part-list' ).find( '.selected-part-box' ).attr( 'index' );
				SH_last_time = jQuery( '#noa_video_1' )[0].currentTime;

				var video_path_array = target.attr( 'video_path' ).split( ',' );
				playVideoList( video_path_array );
				target.addClass( 'selected-res-box' );

			} );

		}

		jQuery( '.noa-video-div' ).append( resolution_box_div );

	}

	function setSHVideo( result ) {

		SH_video_result = result;

		var video_path;

		if ( SH_last_res === 1 ) {
			video_path = result.data.url_nor_mp4;
		} else if ( SH_last_res === 2 ) {
			video_path = result.data.url_high_mp4;
		} else {
			video_path = result.data.url_super_mp4;
		}

		if ( !video_path ) {
			video_path = result.data.url_nor_mp4;
			if ( result.data.url_super_mp4 || !result.data.url_nor_mp4 ) {
				video_path = result.data.url_high_mp4;
			}
		}

		var video_path_array = video_path.split( ',' );
		jQuery( '.noa-video-title' ).text( result.data.video_name );

		playVideoList( video_path_array );
		setSHVideoResolutionBoxes();

		var api = new ServiceCaller();
		api.callSHVideoList( playlistId, vid );
	}

	function createYMp4Url( data, sid, token, oip ) {
		var seed = data.seed;
		var b = new U( seed );
		var _videoSegsDic = {};
		for ( var f = [], i = 0, g = 0; g < data.segs['mp4'].length; g++ ) {
			var h = data.segs['mp4'][g], p = {};
			p.no = h.no;
			p.size = h.size;
			p.seconds = h.seconds;
			h.k && (p.key = h.k);
			p.fileId = getFileId( data.streamfileids, 'mp4', parseInt( g ), b );
			p.type = 'mp4';
			p.src = getVideoSrc( h.no, data, 'mp4', p.fileId );
			f[i++] = p.src;
		}
		return f;

		function getFileId( a, c, b, f ) {
			for ( var d in a )
				if ( d == c ) {
					streamFid = a[d];
					break
				}
			if ( "" == streamFid )
				return "";
			c = f.cg_fun( streamFid );
			a = c.slice( 0, 8 );
			b = b.toString( 16 );
			1 == b.length &&
			(b = "0" + b);
			b = b.toUpperCase();
			c = c.slice( 10, c.length );
			return a + b + c
		}

		function getVideoSrc( a, c, e, f, i, g ) {
			if ( !c.videoid || !e )
				return "";
			var h = {
				flv: 0,
				flvhd: 0,
				mp4: 1,
				hd2: 2,
				"3gphd": 1,
				"3gp": 0
			}
				[e], p = {
				flv: "flv",
				mp4: "mp4",
				hd2: "flv",
				"3gphd": "mp4",
				"3gp": "flv"
			}
				[e], k = a.toString( 16 );
			1 == k.length && (k = "0" + k);
			var l = c.segs[e][a].seconds, a = c.segs[e][a].k;
			if ( "" == a || -1 == a )
				a = c.key2 + c.key1;
			e = "";
			c.show && (e = c.show.show_paid ? "&ypremium=1" : "&ymovie=1");
			var ep = encodeURIComponent( D( E( F( 'boa4' + "poz" + '1', [19, 1, 4, 7, 30, 14, 28, 8, 24, 17, 6, 35, 34, 16, 9, 10, 13, 22, 32, 29, 31, 21, 18, 3, 2, 23, 25, 27, 11, 20, 5, 15, 12, 0, 33, 26] ).toString(), sid + "_" + f + "_" + token ) ) );

			c = "/player/getFlvPath/sid/" + sid + "_" + k + "/st/" + p + "/fileid/" + f + "?K=" + a + "&hd=" +
				h + "&myp=0&ts=" + l + "&ypp=0" + e;
			c = c + ("&ep=" + ep) + "&ctype=12&ev=1" + ("&token=" + token);
			c += "&oip=" + oip;
			return "http://k.youku.com" + (c + ((i ? "/password/" + i : "") + (g ? g : "")))
		}

	}

	function setYVideo( result ) {

		var data = result.data[0];

		var c = E( F( 'b4et' + "o0b" + '4', [19, 1, 4, 7, 30, 14, 28, 8, 24, 17, 6, 35, 34, 16, 9, 10, 13, 22, 32, 29, 31, 21, 18, 3, 2, 23, 25, 27, 11, 20, 5, 15, 12, 0, 33, 26] ).toString(), na( data.ep ) );
		var sid = c.split( "_" )[0];
		var token = c.split( "_" )[1];
		var ep = encodeURIComponent( D( E( F( 'boa4' + "poz" + '1', [19, 1, 4, 7, 30, 14, 28, 8, 24, 17, 6, 35, 34, 16, 9, 10, 13, 22, 32, 29, 31, 21, 18, 3, 2, 23, 25, 27, 11, 20, 5, 15, 12, 0, 33, 26] ).toString(), sid + "_" + data.videoid + "_" + token ) ) );
		var oip = 3062571840; //any number is fine

		var video_path_array = createYMp4Url( data, sid, token, oip );

//		var video_path = 'http://pl.youku.com/playlist/m3u8?vid=' + data.videoid + '&type=mp4&ep=' + ep + '&sid=' + sid + '&token=' + token + '&ctype=12&ev=1&oip=' + oip;

		jQuery( '.noa-video-title' ).text( data.title );
		playVideoList( video_path_array );
		if ( data.hasOwnProperty( 'list' ) && jQuery( '.video-list' ).length === 0 ) {

//			if ( data.list.length < 1 || data.list[0].title.split( ' ' ).length < 2 ) {
//				return;
//			}

			var video_list_div = jQuery( '<div class="video-list"></div>' );

			for ( var i = 0; i < data.list.length; i++ ) {
				var list_item = data.list[i];
				var list_item_box = jQuery( '<span class="item-box"></span>' );

				var title_array = list_item.title.split( ' ' );
				list_item_box.text( title_array[title_array.length - 1] );
				list_item_box.attr( 'videoId', list_item.vid );

				list_item_box.click( function( e ) {
					var target = jQuery( e.target );

					var videoId = target.attr( 'videoId' );

					stopVideo();
					getYData( videoId );

				} );

				video_list_div.append( list_item_box );

			}

			jQuery( '.noa-video-div' ).append( video_list_div );

		}

		jQuery( '.selected-item-box' ).removeClass( 'selected-item-box' );

		jQuery( 'span[videoId="' + data.videoid + '"]' ).addClass( 'selected-item-box' );
	}

	return {
		setYVideo: setYVideo,
		setSHVideo: setSHVideo,
		setSHVideoList: setSHVideoList
	};

})();

function sh_video_list( result ) {
	hp_player.setSHVideoList( result );
}

function sh_video_json( result ) {
	hp_player.setSHVideo( result );

}

function y_video_json( result ) {
	hp_player.setYVideo( result );

}

//Google track codes

(function( i, s, o, g, r, a, m ) {
	i['GoogleAnalyticsObject'] = r;
	i[r] = i[r] || function() {
		(i[r].q = i[r].q || []).push( arguments )
	}, i[r].l = 1 * new Date();
	a = s.createElement( o ),
		m = s.getElementsByTagName( o )[0];
	a.async = 1;
	a.src = g;
	m.parentNode.insertBefore( a, m )
})( window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga' );

ga( 'create', 'UA-54114188-1', 'auto' );
ga( 'send', 'pageview' );