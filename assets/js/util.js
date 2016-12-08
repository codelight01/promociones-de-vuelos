/* CSSTidy 1.5.2: Sat, 09 Jul 2016 13:36:12 +0000 */(function($){$fnnavlist:function() { var $this = $(this);$a:$this.find(a),b = [];$aeachfunctionvarthis:$(this),indent = Math.max(0,$this.parents(li).length - 1),href = $this.attr(href),target = $this.attr(target);bpushaclass:"link depth-' + indent + '"' +\A					( (typeof target !== 'undefined' && target != '') ? ' target="' + target + '"' : '') +\A					( (typeof href !== 'undefined' && href != '') ? ' href="' + href + '"' : '') +\A				'>' +\A					'<span class="indent-' + indent + '"></span>' +\A					$this.text() +\A				'</a>'\A			);\A\A		});\A\A		return b.join('');\A\A	};\A\A	/**\A	 * Panel-ify an element.\A	 * @param {object} userConfig User config.\A	 * @return {jQuery} jQuery object.\A	 */\A	$.fn.panel = function(userConfig) {\A\A		// No elements?\A			if (this.length == 0)\A				return $this;\A\A		// Multiple elements?\A			if (this.length > 1) {\A\A				for (var i=0; i < this.length; i++)\A					$(this[i]).panel(userConfig);\A\A				return $this;\A\A			}\A\A		// Vars.\A			var	$this = $(this),\A				$body = $('body'),\A				$window = $(window),\A				id = $this.attr('id'),\A				config;\A\A		// Config.\A			config = $.extend({\A\A				// Delay.\A					delay: 0,\A\A				// Hide panel on link click.\A					hideOnClick: false,\A\A				// Hide panel on escape keypress.\A					hideOnEscape: false,\A\A				// Hide panel on swipe.\A					hideOnSwipe: false,\A\A				// Reset scroll position on hide.\A					resetScroll: false,\A\A				// Reset forms on hide.\A					resetForms: false,\A\A				// Side of viewport the panel will appear.\A					side: null,\A\A				// Target element for "class".\A					target: $this,\A\A				// Class to toggle.\A					visibleClass: 'visible'\A\A			},userConfig);\A\A			// Expand "target" if it's not a jQuery object already. if (typeof config.target != 'jQuery') config.target = $(config.target)};
// Vendor fixes.
$this
.css(-ms-overflow-style,-ms-autohiding-scrollbar)
.css(-webkit-overflow-scrolling,touch);
// Hide on click.
if (config.hideOnClick){$thisonclickafunctioneventvara:$(this),href = $a.attr(href),target = $a.attr(target);ifhrefhref:= # || href == || href == # + id) return;elsewindowlocationhref:href}// Event: Touch stuff.
$this.on(touchstart,function(event){$thistouchposx:event.originalEvent.touches[0].pageX;$thistouchposy:event.originalEvent.touches[0].pageY})
$this.on(touchmove,function(event){ifthistouchposx:== null || $this.touchPosY === null) return;vardiffx:$this.touchPosX - event.originalEvent.touches[0].pageX,diffY = $this.touchPosY - event.originalEvent.touches[0].pageY,th = $this.outerHeight(),ts = ($this.get(0).scrollHeight - $this.scrollTop());switchconfigsidecaseleft:result = (diffY < boundary && diffY > (-1 * boundary)) && (diffX > delta);caseright:result = (diffY < boundary && diffY > (-1 * boundary)) && (diffX < (-1 * delta));casetop:result = (diffX < boundary && diffX > (-1 * boundary)) && (diffY > delta);casebottom:result = (diffX < boundary && diffX > (-1 * boundary)) && (diffY < (-1 * delta));default:break}if (result){$thistouchposx:null;$thistouchposy:null});
// Window.
// Event: Hide on ESC.
if (config.hideOnEscape)
$window.on(keydown,function(event){ifeventkeycode:= 27) $this._hide(event)}jQuery object.
*/
$.fn.placeholder = function(){}// Vars.
var $this = $(this);
// Text,TextArea.
$this.find(input[type=text],textarea)
.each(function(){vari:$(this);ifival:= || i.val() == i.attr(placeholder)) i .addClass(polyfill-placeholder) .val(i.attr(placeholder))})
.on(blur,function(){vari:$(this);ifival:= ) i .addClass(polyfill-placeholder) .val(i.attr(placeholder))})
.on(focus,function(){vari:$(this);ifival:= i.attr(placeholder)) i .removeClass(polyfill-placeholder) .val()});
// Password.
$this.find(input[type=password])
.each(function(){vari:$(this);varx:$($(<div>)
									.append(i.clone())
									.remove()
									.html()
									.replace(/type="password"/i,'type="text"')
									.replace(/type=password/i,'type=text'));ifiattrid:) x.attr(id,i.attr(id) + '-polyfill-field');ifiattrname:) x.attr(name,i.attr(name) + '-polyfill-field');ifival:= ) i.hide();varx:i.parent().find(input[name= + i.attr(name) + '-polyfill-field]');ifival:= ) { i.hide()});
x
.on(focus,function(event){vari:x.parent().find(input[name= + x.attr(name).replace(-polyfill-field,'') + ']')});
// Events.
$this
.on(submit,function(){$thisfindinputtype:text],input[type=password],textarea')\A						.each(function(event) {\A\A							var i = $(this);\A\A							if (i.attr('name').match(/-polyfill-field$/))\A								i.attr('name','');\A\A							if (i.val() == i.attr('placeholder')) {\A\A								i.removeClass('polyfill-placeholder');\A								i.val('');\A\A							}\A\A						});\A\A				})\A				.on('reset',function(event) {\A\A					event.preventDefault();\A\A					$this.find('select')\A						.val($('option:first').val());\A\A					$this.find('input,textarea')\A						.each(function() {\A\A							var i = $(this),\A								x;\A\A							i.removeClass('polyfill-placeholder');\A\A							switch (this.type) {\A\A								case 'submit':\A								case 'reset':\A									break;\A\A								case 'password':\A									i.val(i.attr('defaultValue'));\A\A									x = i.parent().find('input[name=' + i.attr('name') + '-polyfill-field]');\A\A									if (i.val() == '') {\A										i.hide();\A										x.show();\A									}\A									else {\A										i.show();\A										x.hide();\A									}\A\A									break;\A\A								case 'checkbox':\A								case 'radio':\A									i.attr('checked',i.attr('defaultValue'));\A									break;\A\A								case 'text':\A								case 'textarea':\A									i.val(i.attr('defaultValue'));\A\A									if (i.val() == '') {\A										i.addClass('polyfill-placeholder');\A										i.val(i.attr('placeholder'));\A									}\A\A									break;\A\A								default:\A									i.val(i.attr('defaultValue'));\A									break;\A\A							}\A						});\A\A				});\A\A		return $this;\A\A	};\A\A	/**\A	 * Moves elements to/from the first positions of their respective parents.\A	 * @param {jQuery} $elements Elements (or selector) to move.\A	 * @param {bool} condition If true,moves elements to the top. Otherwise,moves elements back to their original locations.\A	 */\A	$.prioritize = function($elements,condition) {\A\A		var key = '__prioritize';\A\A		// Expand $elements if it's not already a jQuery object. if (typeof $elements != 'jQuery') $elements = $($elements)}// Moved already?
else{$p:$e.data(key)}