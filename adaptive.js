
	$(function()
	{
		(function createSmallHeader() {
			var $body = $('body');
			var $responsiveHeader = $('.responsive-header');

			$('#mobile-menu').click(function() {
				$body.removeClass('login-opened');

				if ($body.hasClass('offset-opened') && !$body.hasClass('menu-opened')) {
					$body.addClass('menu-opened');
				} else {
					$body.toggleClass('offset-opened menu-opened');
					//$('div.mobile_menu_close').toggle();
				}

			});

			$('#mobile-user').click(function() {
				$body.removeClass('menu-opened');

				if ($body.hasClass('offset-opened') && !$body.hasClass('login-opened')) {
					$body.addClass('login-opened');
				} else {
					$body.toggleClass('offset-opened login-opened');
					//$('div.mobile_menu_close').toggle();
				}
			});

			/*
			$('div.mobile_menu_close').click(function() {
				$body.removeClass('offset-opened menu-opened login-opened');
				$(this).hide();
			});
			*/

		})();

		var menuHover = function() {
			$('.menu-div a.menu-link').mouseover(function(event) {
				$(this).closest('.menu-cell').addClass('opened');
			});
			$('.menu-cell').mouseleave(function(event) {
				if ($(this).hasClass('opened')) {
					$(this).removeClass('opened');
				}
			});
		};

		if ($(window).width() < 1035) {
			$('.lenta_slider_read').click(function() {
				var $this = $(this);
				var $prev = $this.prev();
				var h = 141;
				if (parseInt($prev.css('height')) == h) {
					$prev.css('height', 'auto');
					$this.text('Свернуть');
				} else {
					$prev.css('height', h);
					$this.text('Развернуть');
				}
			});
		}
		var headerMenuResponsive = function() {
			if ($(window).width() < 1035) {
				$('.menu-show-more').parent().click(function(e) {
					e.preventDefault();
					var $this = $(this);
					var $menuCell = $this.closest('.menu-cell');
					$('.menu-drop').hide();
					$this.next('.menu-drop').show();
					$this.closest('.menu-div').addClass('is-opened');
					$menuCell.siblings().hide();
					$menuCell.siblings('.search-cell').show();
				});
				$('.menu-show-less').click(function() {
					var $this = $(this);
					$('.menu-drop').hide();
					$this.closest('.menu-div').removeClass('is-opened');
					$this.closest('.menu-cell').siblings().show();
				});

			} else {
				$('.menu-cell').show();
				$('.menu-div').removeClass('is-opened');
				$('.menu-drop').hide();
				menuHover();
			}
		};
		headerMenuResponsive();

		$(window).resize(function() {
            headerMenuResponsive();
        });

		
		var sidebarMobile = function(){
			var $lentTitle = $('.section.section-general-title.title-blue');
			for (var i = 0; i < $lentTitle.length; i++) {
				var $lentTitleItem = $lentTitle.eq(i);
				if ($lentTitleItem.next('.section-news-lent').find('.lent-right').length || $lentTitleItem.next('.clr').next('.section-news-lent').find('.lent-right').length) {
					if ($(window).width() < 786) {
						$lentTitleItem.append('<span class="side-menu-button"></span>');
					}
				}
			}
		};
		sidebarMobile();
		$(window).resize(function() {
            sidebarMobile();
        });


		$('body').on('click', '.side-menu-button', function() {
			var $this = $(this);
			var $lentRight = $('.section-news-lent .lent-right');
            $this.toggleClass('opened');
			if ($this.hasClass('opened')) {
				var hTitle = $lentRight.parent().prev('.section-general-title').innerHeight();
				hTitle = hTitle ? hTitle : $lentRight.parent().prev('.clr').prev('.section-general-title').innerHeight();
				if (hTitle) {
					$lentRight.css({
						'margin-top': '50px'
					});
				}
			}
			$('.outer-click').toggleClass('active');
			$lentRight.toggle();
			$('body').toggleClass('sidebar-opened').removeClass('offset-opened login-opened');
        });
        $('body').on('click', '.outer-click', function() {
        	var $body = $('body');
        	$('.outer-click').removeClass('active');
        	$body.removeClass('sidebar-opened offset-opened login-opened');
        	$('.section-news-lent .lent-right').hide();
        });

	});