$(document).ready(function() {
	
	
	
	
	$('.dp_sidebar .cont_row  p a , .contact_col p a ').each(function () {
  const text = $(this).text().trim();
  if (text.includes('@')) {
    $(this).html(text.replace('@', '<wbr>@<wbr>'));
  }
});
    $('.center-grp .wp-block-table').each(function() {
        $(this).wrap('<div class="table-wrapper"></div>');
    });
    $('.dropdown-menu a').on('mouseenter', function() {
        $('.dropdown-menu a:focus').blur();
    });
    $(".search_txt")
        .attr("tabindex", "0") // Make it focusable if it's not already
        .attr("role", "button") // Optional: helps screen readers know it's interactive
        .attr("aria-expanded", "false") // For accessibility
        .on("click keydown", function(e) {
            if (e.type === "click" || (e.type === "keydown" && (e.key === "Enter" || e.key === " "))) {
                e.preventDefault(); // Prevent spacebar scrolling

                const $this = $(this);
                const $container = $this.parent().find(".asp_w_container");
                const isOpen = $container.is(":visible");

                $container.stop(true, true).slideToggle();
                $this.attr("aria-expanded", String(!isOpen));
            }
        });

    $('.wp-block-group,.wp-block-columns ,.wp-block-column').removeClass('is-layout-flow');

    $('.main_wrapper').attr('role', 'main');


  $('.owl-general').each(function () {

        var $wrapper = $(this);
        var $carousel = $wrapper.find('.owl-carousel');
        var $navContainer = $wrapper.find('.custom-nav');

        $carousel.owlCarousel({
            loop: true,
            dots: true,
            autoplay: true,
            margin: 10,
            nav: true,
            autoWidth: false,
            items: 1,
            navText: [
                '<span class="sr-only">Previous slide</span><img src="./img/arrow-right-b.svg" alt="">',
                '<span class="sr-only">Next slide</span><img src="./img/arrow-right-b.svg" alt="">'
            ],
            navContainer: $navContainer
        });

    });
    // Function to activate the tab based on URL fragment
    var hash = window.location.hash;
    if (hash) {
        $('.nav-link[href="' + hash + '"]').tab('show');
    }

    // Update URL when tab is clicked
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        history.pushState(null, null, e.target.hash);
    });

    //Navbar
    if (jQuery(window).width() < 1200) {
        $('.navbar-nav  > li.menu-item-has-children, .navbar-nav  > li.megamenu_item   ').append('<div class="plusMinus"></div>');
        jQuery(".navbar-nav  > li.menu-item-has-children  > .plusMinus , .navbar-nav  > li.megamenu_item  > .plusMinus").click(function() {
            //jQuery(".show-mobile").slideToggle('fast');
            //jQuery(this).parent().siblings('li').find('ul.sub-menu').slideUp("fast");
            //jQuery(this).parent().siblings('li').find('.plus-minus').removeClass("minusIcon");
            $(this).parent().find('.dropdown-menu ,.megamenu_drop,.megamenu').slideToggle("fast");
            $(this).parent().toggleClass('activeBlue');
            $(this).toggleClass("minsicon");
        });
        //$(".select_language ").insertBefore('.navbar-toggler  ');
        // $(".soc_nav_wrap ").insertAfter('.nav_bottom');
        // $(".social_media ").insertAfter('.nav_bottom  ');
        $('.megamenu_drop  li.menu-item-has-children  ').append('<div class="pls_minus"></div>');

        jQuery(".megamenu_drop  li.menu-item-has-children  .pls_minus").click(function() {
            $(this).parent().find('.sub-menu').slideToggle("fast");
            $(this).parent().toggleClass('active-item');
            $(this).toggleClass("minus-info");
        });
        $('.wp-block-advgb-table').each(function() {
            $(this).wrap('<div class="table-wrap"></div>');
        });
        $('.wp-block-group > table').wrap('<div class="table-wrapper"></div>');

    }
	jQuery(function ($) {
    function moveTopHeader() {
        if ($(window).width() < 1200) {
            // Below 1200px
            $('.top_header').insertBefore('.nav_bottom');
        } else {
            // 1200px and above
            $('.top_header').insertBefore('.navbar-expand-xl');
        }
    }
    // Run on page load
    moveTopHeader();
    // Run on window resize
    $(window).on('resize', function () {
        moveTopHeader();
    });

});

    /*if (jQuery(window).width() < 992 ) {
            $('.navbar-nav  > li.megamenu_item   ').append('<div class="plusMinus"></div>');
            jQuery(".navbar-nav  > li.megamenu_item   > .plusMinus").click( function () {
            $(this).parent().find('.megamenu').slideToggle("fast");
            $(this).parent().toggleClass('activeBlue');
            $(this).toggleClass("minsicon");
            });
            }
            */
    $(".navbar-toggler").on("click", function() {
        $(this).toggleClass("active");
        $('.main_header').toggleClass("headerActive");
    });
    // Add a focusable toggle div
    $('.dropdown-menu > li.menu-item-has-children').prepend('<div class="plus-minus" tabindex="0" aria-expanded="false" role="button" aria-label="Toggle submenu"></div>');

    $('.dropdown-menu').on('click keydown', '.plus-minus', function(e) {
        // Handle click or Enter/Space key
        if (e.type === 'click' || (e.type === 'keydown' && (e.key === 'Enter' || e.key === ' '))) {
            e.preventDefault(); // Prevent scrolling on Space

            const $this = $(this);
            const $submenu = $this.parent().find('> .mega-submenu');
            const isOpen = $this.attr('aria-expanded') === 'true';

            // Toggle current
            $submenu.slideToggle('fast');
            $this.toggleClass('minus-icon').attr('aria-expanded', String(!isOpen));

            // Close others
            $this.parent().siblings('li').find('> .mega-submenu').slideUp('fast');
            $this.parent().siblings('li').find('.plus-minus')
                .removeClass('minus-icon')
                .attr('aria-expanded', 'false');
        }
    });



    $('.mega-submenu  > li.menu-item-has-children').prepend('<div class="plus-minus"></div>');
    jQuery(".mega-submenu   > li.menu-item-has-children  > .plus-minus").click(function() {
        jQuery(this).parent().find('>.mega-submenu').slideToggle("fast");
        jQuery(this).parent().siblings('li').find('> ul.mega-submenu').slideUp("fast");
        jQuery(this).parent().siblings('li').find('.plus-minus').removeClass("minus-icon");
        jQuery(this).toggleClass("minus-icon");
    });
    $('.text_card_block .btn_sm  ').parents('.img_text_card_col').find('.text-img-wrap').addClass("has-button ");

    $('.advgb-accordion-body').each(function() {
        $(this).wrapInner('<div class="accordion-content"></div>');
    });
    /*
                      $('.main_content > *').wrapAll('<div class="main-wrap"></div>');*/
    if (window.location.hash) {

        var target = $(window.location.hash); // Get the element based on the hash
        if (target.length) { // Check if the element exists
            var offset = $('.advgb-tabs-panel').outerHeight() + 30; // Adjust the offset
            $('html, body').animate({
                scrollTop: target.offset().top - offset // Scroll to the element
            }, 1000);
        }
    }
    $('.rel_forms').parent(".col_right").addClass("has_forms ");
    $('.alerticon').parent(".rtTitle").addClass("p-left ");
    $('a[href$=".pdf"]').each(function() {
        // Open the PDF link in a new window
        $(this).attr('target', '_blank');
    });
    $('.carousel-inner').each(function() {
        if ($(this).children('div').length === 1) $(this).siblings('.carousel-indicators, .carousel-control-prev, .carousel-control-next').hide();

    });
    $('.img_block .img_block_descr').each(function() {
        // Check if this div contains a p tag
        if ($(this).find('p').length === 0) {
            // If no p tag is found, add the class to the closest div
            $(this).closest('.img_block').addClass('no-p-tag');
        }
    });
    $('.main_wrapper').attr('id', 'page_content');
    $(".links li .expand_det").matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
    });

    $(".img_text_card_col .text_card_block ").matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
    });
	
	 $(".dd_content h3 ").matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
    });
    $('.advgb-accordion-item .advgb-accordion-body').css('border', '0px');

    //Translate using keyboard
    setTimeout(function() {
        let $translateButton = $(".gt_selected");
        let $translateMenu = $(".gt_option");

        if ($translateButton.length && $translateMenu.length) {
            $translateButton.on("click", function() {
                setTimeout(function() {
                    let $iframe = $(".gt_option");
                    if ($iframe.length) {
                        $iframe.attr("tabindex", "-1").focus();
                    }
                }, 500);
            });
            $(document).on("keydown", function(event) {
                if (event.key === "Escape") {
                    let $iframe = $(".gt_option");
                    if ($iframe.length) {
                        $iframe.hide();
                        $translateButton.focus();
                    }
                }
            });
        }
    }, 2000);


});

jQuery(document).ready(function ($) {

    var $language = $(".select_language");
    var $originalParent = $language.parent();
    var originalIndex = $language.index();

    function moveLanguage() {
        if ($(window).width() < 1200) {
            $language.insertAfter('.nav_bottom');
        } else {
            // Move back to original position
            if ($language.parent()[0] !== $originalParent[0]) {
                if (originalIndex === 0) {
                    $originalParent.prepend($language);
                } else {
                    $originalParent
                        .children()
                        .eq(originalIndex - 1)
                        .after($language);
                }
            }
        }
    }

    // Run on load
    moveLanguage();

    // Run on resize
    $(window).on('resize', function () {
        moveLanguage();
    });

});


//Url in window target
(function($, window) {
    var adjustAnchor = function() {

        var $anchor = $(':target'),
            fixedElementHeight = 150;

        if ($anchor.length > 0) {

            $('html, body')
                .stop()
                .animate({
                    scrollTop: $anchor.offset().top - fixedElementHeight
                }, 200);
            window.scrollTo(0, $anchor.offset().top - fixedElementHeight);

        }

    };

    $(window).on('hashchange load', function() {
        adjustAnchor();
    });

})(jQuery, window);



//Header shrink on scroll
$(document).on("scroll ", function() {
    if ($(document).scrollTop() > 0) {
        $(".main_header ").addClass("shrink ");

    } else {
        $(".main_header ").removeClass("shrink ");

    }
});

//main accordion

(function($) {

    // Make .acctitle focusable & accessible
    $('.acctitle')
        .attr('tabindex', '0')          // allow keyboard focus
        .attr('role', 'button')         // announce as button
        .attr('aria-expanded', 'false'); // default collapsed

    function toggleAccordion(elem, event) {
        var dropDown = elem.closest('.acccard').find('.accpanel');
        elem.closest('.accmain').find('.accpanel').not(dropDown).slideUp();

        // Reset others
        elem.closest('.accmain').find('.acctitle.active')
            .removeClass('active')
            .attr('aria-expanded', 'false');

        // Toggle current
        if (elem.hasClass('active')) {
            elem.removeClass('active').attr('aria-expanded', 'false');
        } else {
            elem.addClass('active').attr('aria-expanded', 'true');
        }

        dropDown.stop(false, true).slideToggle();

        event.preventDefault();
    }

    // Mouse Click
    $('.accmain .acctitle').on('click', function(e) {
        toggleAccordion($(this), e);
    });

    // Keyboard Access: ENTER or SPACE
    $('.accmain .acctitle').on('keydown', function(e) {
        if (e.key === "Enter" || e.key === " " || e.keyCode === 13 || e.keyCode === 32) {
            toggleAccordion($(this), e);
        }
    });

})(jQuery);

(function($) {
            function toggleAccordion($title) {
                var dropDown = $title.closest('.acc__card').find('.acc__panel');

                $title.closest('.acc__main').find('.acc__panel').not(dropDown).slideUp();

                if ($title.hasClass('active')) {
                    $title.removeClass('active');
                } else {
                    $title.closest('.acc__main').find('.acc__title.active').removeClass('active');
                    $title.addClass('active');
                }

                dropDown.stop(false, true).slideToggle();
            }

            $('.acc__main .acc__title')
                .attr('tabindex', '0') // Make focusable
                .attr('role', 'button') // Assistive tech support
                .attr('aria-expanded', 'false') // Initial state
                .on('click', function(e) {
                    toggleAccordion($(this));
                    e.preventDefault();
                })
                .on('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ' || e.keyCode === 13 || e.keyCode === 32) {
                        e.preventDefault();
                        toggleAccordion($(this));
                    }
                });
        })(jQuery);

$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

$(window).on('load', function() {
    $('.wp-block-image.alignleft,  .wp-block-image.alignright').wrap('<div class="left_right_wraper"></div>');
});







function checkOverflow() {
    $('.kt-tabs-wrap').each(function() {
        var $tabs = $(this).find('.kt-tabs-title-list');
        if ($tabs.length && $tabs[0].scrollWidth > $tabs[0].clientWidth) {
            $(this).addClass('overflowing');
        } else {
            $(this).removeClass('overflowing');
        }
    });
}

// Initial check after full page load
$(window).on('load', function() {
    checkOverflow();
});

// On resize
$(window).on('resize', function() {
    checkOverflow();
});






$(window).on('load', function() {
    // Check if the screen width is above 1200px
    if ($(window).width() > 1200) {
        // Get the height of the main_header
        var headerHeight = $('.main_header').outerHeight(true); // Include margin

        // Assign the height as padding-top to the main_wrapper
        $('.main_wrapper').css('padding-top', headerHeight + 'px');
    }
});
$('.close').on('click', function() {
    $('.main_wrapper').css('padding-top', ''); // Reset padding to default
});



$(".kb-table").each(function() {
    const $table = $(this);
    const $tbody = $table.find("tbody").first();
    if ($tbody.length === 0) return;

    const $firstRow = $tbody.find("tr").first();
    if ($firstRow.length === 0) return;

    const $thElements = $firstRow.find("th");

    if ($thElements.length > 0) {
        const $thead = $("<thead></thead>");
        $thead.append($firstRow); // Move the first row into the thead
        $table.prepend($thead); // Insert thead before tbody
    }
});


function closeAllMegaMenus() {
    $('.mega-menu.show').removeClass('show');
}
$('.mega-btn').on('click keydown', function (e) {
    if (e.type === 'keydown' && e.keyCode !== 13 && e.keyCode !== 32) {
        return;
    }
    e.preventDefault();
    e.stopPropagation();
    var $menu = $(this).next('.mega-menu');
    if ($menu.hasClass('show')) {
        $menu.removeClass('show');
    } else {
        closeAllMegaMenus();
        $menu.addClass('show');
        $menu.find('a, button').first().focus();
    }
});
$('.mega-close').on('click keydown', function (e) {
    if (e.type === 'keydown' && e.keyCode !== 13 && e.keyCode !== 32 && e.keyCode !== 27) return;
    $(this).closest('.mega-menu').removeClass('show');
    $('.mega-btn').focus(); // return focus to toggle
});
$(document).on('keydown', function (e) {
    if (e.keyCode === 27) {
        closeAllMegaMenus();
        $('.mega-btn').focus();
    }
});

$(document).on('click', function (event) {
    if (!$(event.target).closest('.mega-dropdown-wrapper').length) {
        closeAllMegaMenus();
    }
});

$(document).on('focusin', function (event) {
    if (!$(event.target).closest('.mega-dropdown-wrapper').length) {
        closeAllMegaMenus();
    }
});


jQuery(function ($) {

  function wrapTribe() {

    var $filter = $('.tribe-filter-bar--vertical');
    var $view   = $('.tribe-events-calendar-list, .tribe-events-calendar-month, .tribe-events-pro-photo');

    if (!$filter.length || !$view.length) {
      return;
    }

    var $layout;

    // Wrap only once
    if (!$('.tribe-events-layout .container .event_info').length) {

      $filter.add($view).wrapAll(
        '<div class="tribe-events-layout">' +
          '<div class="container">' +
            '<div class="event_info"></div>' +
          '</div>' +
        '</div>'
      );
    }

    $layout = $('.tribe-events-layout');

    // ✅ ADD / REMOVE class based on Month view
    if ($('.tribe-events-calendar-month').length) {
      $layout.addClass('is-month-view');
    } else {
      $layout.removeClass('is-month-view');
    }
  }

  // Initial load
  wrapTribe();

  // Re-run after Tribe AJAX rebuilds DOM
  var observer = new MutationObserver(function () {
    wrapTribe();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

});





jQuery(document).ready(function ($) {

  $('.tribe-events-calendar-list__event-row').each(function () {
    
    var $row = $(this);
    var mainLink = $row.find(
      '.tribe-events-calendar-list__event-title-link'
    ).attr('href');

    if (!mainLink) return;

    // Make row clickable
    $row.css('cursor', 'pointer');

    $row.on('click', function (e) {

      // If clicking on any link, let it work normally
      if ($(e.target).closest('a').length) {
        return;
      }

      window.location.href = mainLink;
    });

    // Keyboard accessibility
    $row.attr('tabindex', '0').on('keypress', function (e) {
      if (e.which === 13) { // Enter key
        window.location.href = mainLink;
      }
    });

  });

});



jQuery(document).ready(function($) {
    // Function to make the close button accessible
    function makeProCloseAccessible() {
        $('.proclose').each(function() {
            // Add attributes only if they aren't already there
            if (!$(this).attr('tabindex')) {
                $(this).attr({
                    'tabindex': '0',
                    'role': 'button',
                    'aria-label': 'Clear search'
                });
            }
        });
    }

    // 1. Run on initial page load
    makeProCloseAccessible();

    // 2. Run when Ajax Search Pro initializes (important for AJAX updates)
    $(document).on('asp_init_search_bar', function() {
        makeProCloseAccessible();
    });

    // 3. Handle Keyboard "Enter" or "Space" key
    $(document).on('keydown', '.proclose', function(e) {
        if (e.which === 13 || e.which === 32) { // 13 is Enter, 32 is Space
            e.preventDefault();
            $(this).click();
        }
    });
});


// service alert expand

   const header = document.querySelector(".alerts-header");
  const body = document.querySelector(".alerts-body");
  const chevron = document.querySelector(".chevron");

  header.addEventListener("click", () => {
    const expanded = header.getAttribute("aria-expanded") === "true";

    header.setAttribute("aria-expanded", !expanded);
    body.style.display = expanded ? "none" : "block";
    chevron.style.transform = expanded ? "rotate(0deg)" : "rotate(180deg)";
  });

document.addEventListener("DOMContentLoaded", function () {
    const table = document.querySelector(".bus-table");
    const firstRow = table.querySelector("tbody tr");

    if (firstRow) {
        const totalColumns = firstRow.children.length;
        const fixedColumns = 2; // Stop Name + Stop #
        const dynamicColumns = totalColumns - fixedColumns;

        const arrivalHeader = table.querySelector("thead th[colspan]");
        if (arrivalHeader) {
            arrivalHeader.setAttribute("colspan", dynamicColumns);
        }
    }
});

// Cart functionality
document.addEventListener("DOMContentLoaded", function () {
    const cartItems = document.querySelectorAll(".cart_item");
    const summaryTotal = document.querySelector(".summary_total");

    // Track item quantities
    const itemQuantities = {
        0: 1, // Regular Fare
        1: 1  // Regular Fare With Discount
    };

    const itemPrices = {
        0: 4.00,
        1: 2.75
    };

    // Function to update total
    function updateTotal() {
        let total = 0;
        cartItems.forEach((item, index) => {
            total += itemPrices[index] * itemQuantities[index];
        });
        if (summaryTotal) {
            summaryTotal.textContent = "$" + total.toFixed(2);
        }
    }

    // Delete button functionality
    cartItems.forEach((item, index) => {
        const deleteBtn = item.querySelector(".delete_btn");
        if (deleteBtn) {
            deleteBtn.addEventListener("click", function () {
                item.style.animation = "fadeOut 0.3s ease forwards";
                setTimeout(() => {
                    item.remove();
                    delete itemQuantities[index];
                    delete itemPrices[index];
                    
                    // Update remaining items
                    const updatedItems = document.querySelectorAll(".cart_item");
                    if (updatedItems.length === 0) {
                        const cartContent = document.querySelector(".cart_content");
                        if (cartContent) {
                            cartContent.innerHTML = '<p style="text-align: center; padding: 40px; font-size: 16px;">Your cart is empty</p>';
                        }
                    } else {
                        updateTotal();
                    }
                }, 300);
            });
        }
    });

    // Quantity buttons functionality
    cartItems.forEach((item, index) => {
        const minusBtn = item.querySelector(".qty_btn.minus");
        const plusBtn = item.querySelector(".qty_btn.plus");

        if (minusBtn) {
            minusBtn.addEventListener("click", function () {
                if (itemQuantities[index] > 1) {
                    itemQuantities[index]--;
                    updateTotal();
                }
            });
        }

        if (plusBtn) {
            plusBtn.addEventListener("click", function () {
                itemQuantities[index]++;
                updateTotal();
            });
        }
    });

    // Checkout button
    const checkoutBtn = document.querySelector(".btn_checkout");
    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", function () {
            alert("Proceeding to checkout with items worth $" + document.querySelector(".summary_total").textContent);
            // Add your checkout logic here
        });
    }
});

// Add fadeOut animation
const style = document.createElement("style");
style.textContent = `
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(-20px);
        }
    }
`;
document.head.appendChild(style);





