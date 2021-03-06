function fnCursor() {
    var e = $(".cursor"),
        t = $(".text", e),
        o = $(".inner", e),
        i = $(".outer", e),
        n = $("header.primary .menu-pane nav.menu li a"),
        a = $("header.primary .menu-pane figure.cursor-image");
    if ($(window).width() > 1024) {
        $(window).on("mousemove", function (e) {
            TweenLite.to(a, 0.6, { x: e.clientX - 145, y: e.clientY - 90 });
        }),
            $('[data-cursor="1"]').hover(
                function (e) {
                    TweenLite.to(i, 0.3, { borderWidth: 1, left: -41, opacity: 0.6, height: 80, top: -41, width: 80 });
                },
                function (e) {
                    TweenLite.to(i, 0.3, { borderWidth: 2, height: 40, left: -21, opacity: 1, top: -21, width: 40 });
                }
            ),
            $('[data-cursor="2"]').hover(
                function (n) {
                    t.text($(this).data("cursor-label")),
                        TweenLite.to(t, 0.3, { color: $(this).data("cursor-color") ? $(this).data("cursor-color") : "#1E1E1E", opacity: 1, scale: 1 }),
                        TweenLite.to(o, 0.3, { opacity: 0, scale: 0 }),
                        TweenLite.to(i, 0.3, { background: $(this).data("cursor-bg") ? $(this).data("cursor-bg") : "#fff", borderColor: $(this).data("cursor-bg") ? $(this).data("cursor-bg") : "#fff", opacity: 1, scale: 2.5 }),
                        e.addClass("-no-blend");
                },
                function (n) {
                    TweenLite.to(t, 0.3, { opacity: 0, scale: 0 }), TweenLite.to(o, 0.3, { opacity: 1, scale: 1 }), TweenLite.to(i, 0.3, { background: "transparent", borderColor: "#fff", opacity: 1, scale: 1 }), e.removeClass("-no-blend");
                }
            ),
            n.hover(
                function (e) {
                    var t = $(this).data("cursor-image");
                    $(".cursor-image_src", a).attr("src", t), TweenLite.fromTo(a, 0.3, { opacity: 0, scale: 0.75 }, { opacity: 0.5, scale: 1 }), TweenLite.fromTo($(".cursor-image_src", a), 0.3, { scale: 1.25 }, { scale: 1 });
                },
                function (e) {
                    TweenLite.to(a, 0.3, { opacity: 0, scale: 0.75 }), TweenLite.to($(".cursor-image_src", a), 0.3, { scale: 1.25 });
                }
            );
    }
}
function fnFixedTitleStats(e, t) {
    t = $(t);
    var o = $(".heading_title", t),
        i = $("aside.stats", t),
        n = $(".number", t),
        a = $(window),
        s = new ScrollMagic.Controller();
    if (a.width() > 1230) new ScrollMagic.Scene({ triggerElement: "section.fixed-title-stats aside.stats", duration: i.outerHeight() - o.outerHeight() }).setPin(".heading_title").addTo(s);
    a.on("scroll resize", function () {
        var e = a.height(),
            o = a.scrollTop(),
            i = o + e;
        $.each(t, function () {
            var e = $(this).outerHeight(),
                t = $(this).offset().top;
            t + e >= o &&
                t <= i - 250 &&
                $(n).each(function () {
                    $(this)
                        .prop("Counter", 0)
                        .animate(
                            { Counter: $(this).data("count") },
                            {
                                duration: 2500,
                                easing: "easeInOutQuart",
                                step: function (e) {
                                    $(this).text(Math.ceil(e).toLocaleString("en"));
                                },
                            }
                        );
                });
        });
    }),
        a.trigger("scroll");
}
function fnFixedTitleTextBlocks(e, t) {
    t = $(t);
    var o = $("aside.heading", t),
        i = $("aside.blocks", t),
        n = $(window),
        a = new ScrollMagic.Controller(),
        s = $(".heading_inner", o).outerHeight(),
        r = $("ul", i).outerHeight();
    if (n.width() > 1230 && n.height() > s + 160) {
        i.css("padding-top", s / 2 + "px");
        new ScrollMagic.Scene({ triggerElement: "section.fixed-title-textblocks aside.blocks ul", duration: r - s / 2 }).setPin(".heading_inner").addTo(a);
    }
}
function fnHashLinks(e) {
    e.preventDefault();
    var t = $(this).attr("data-scroll-offset");
    $("html, body").animate({ scrollTop: $($(e.currentTarget).attr("href")).offset().top - (t || "0") }, 1200, "easeInOutQuart");
}
function fnHeaderPrimary(e, t) {
    t = $(t);
    var o = $(".-js_open-menu", t),
        i = $(".-js_close-menu", t),
        n = $(".-js_open-notices", t),
        a = $(".-js_close-notices", t);
    o.on("click", function () {
        t.addClass("-is_menu-visible").removeClass("-is_notices-visible");
    }),
        i.on("click", function () {
            t.removeClass("-is_menu-visible -is_notices-visible");
        }),
        n.on("click", function () {
            t.addClass("-is_notices-visible").removeClass("-is_menu-visible");
        }),
        a.on("click", function () {
            t.removeClass("-is_notices-visible -is_menu-visible");
        });
    var s = $(".notices-pane .listing_carousel", t).flickity({ cellAlign: "left", wrapAround: !1, freeScroll: !0, autoPlay: !1, adaptiveHeight: !0, contain: !0, accessibility: !1, prevNextButtons: !1, pageDots: !1 });
    s.data("flickity");
    $(".notices-pane nav.carousel-arrows i.prev", t).on("click", function () {
        s.flickity("previous");
    }),
        $(".notices-pane nav.carousel-arrows i.next", t).on("click", function () {
            s.flickity("next");
        });
    var r = 0,
        l = 128,
        c = t.outerHeight();
    $(window).scroll(function (e) {
        !0,
            (function () {
                var e = $(this).scrollTop(),
                    o = $(window).scrollTop();
                if (Math.abs(r - e) <= 0) return;
                e > l && (e > r && e > c ? t.removeClass("on-scroll--up").addClass("on-scroll--down") : e + $(window).height() < $(document).height() && t.removeClass("on-scroll--down").addClass("on-scroll--up"));
                o == l && t.removeClass("on-scroll--up");
                e > r && e > l && t.addClass("on-scroll");
                e <= l && t.removeClass("on-scroll");
                r = e;
            })();
    });
}
function fnHomeHero(e, t) {
    t = $(t);
    var o = $("figure.bg .video", t);
    new TimelineMax()
        .staggerFrom("figure.bg .video", 2, { delay: 2.75, opacity: 0, ease: Power4.easeOut }, 0.1)
        .staggerFrom(".header p", 1.5, { y: "180%", delay: 2.75, skewX: 0, skewY: -6, transformOrigin: "0% 50% -50", ease: Power4.easeOut }, 0.1, 0);
    if (o.length > 0) new Vimeo.Player("home-hero_video", { autoplay: !0, background: !0, controls: !1, loop: !0, responsive: !0 });
}
function fnImgMontageReveal(e, t) {
    t = $(t);
    var o = $("figure", t).outerWidth(),
        i = new TimelineMax(),
        n = new ScrollMagic.Controller(),
        a = t.outerHeight() / 2 - 40;
    if ($(window).width() >= 1024 && $(window).width() > $(window).height()) {
        i.to("section.img-montage-reveal figure", 0.5, { x: -2 * o, scale: 1, ease: Sine.easeInOut }, 0)
            .to("section.img-montage-reveal figure:not(:last-of-type)", 0.5, { opacity: 0, ease: Sine.easeInOut }, 0)
            .from("section.img-montage-reveal .content", 0.1, { x: "+=20", opacity: 0, ease: Linear.easeNone }, 0.45);
        new ScrollMagic.Scene({ triggerElement: "section.img-montage-reveal", offset: a, duration: 3 * o }).setPin("section.img-montage-reveal").setTween(i).addTo(n);
    }
}
function fnImgReveal(e, t) {
    t = $(t);
    var o = new TimelineMax(),
        i = new ScrollMagic.Controller(),
        n = $(".img-reveal_cover", t);
    t = $(".img-reveal_src", t);
    o.from(n, 0.6, { scaleX: 0, transformOrigin: "left", ease: "slow(0.7, 0.7, false)" }),
        o.to(n, 0.6, { scaleX: 0, transformOrigin: "right", ease: "slow(0.7, 0.7, false)" }, "reveal"),
        o.from(t, 0.1, { delay: 0, opacity: 0, ease: Power4.easeInOutQuart }, "reveal");
    new ScrollMagic.Scene({ triggerElement: this, triggerHook: 0.7, reverse: !1 }).setTween(o).addTo(i);
}
function fnInViewDetect() {
    function e() {
        $(".view-detect").removeClass("in-view"), $(".view-detect:in-viewport").addClass("in-view"), $(".view-detect:in-viewport").addClass("viewed");
    }
    e(),
        $(window).scroll(function () {
            e();
        });
}
function fnLazyLoading() {
    lozad(".lozad", {
        loaded: function (e) {
            e.classList.add("loaded");
        },
    }).observe();
}
function fnMagnetize(e, t) {
    $(window).width() > 1024 &&
        $(document).on("mousemove", function (e) {
            fnMagnetizeInit(".magnet", e);
        });
}
function fnMagnetizeInit(e, t) {
    var o = t.pageX,
        i = t.pageY;
    $(e).each(function (e, t) {
        var n = 20 * (t = $(t)).data("dist") || 120,
            a = t.offset().left + t.outerWidth() / 2,
            s = t.offset().top + t.outerHeight() / 2,
            r = -0.3 * Math.floor(a - o),
            l = -0.3 * Math.floor(s - i),
            c = fnMagnetizeDistance(t, o, i),
            d = t.data("scale"),
            f = 1;
        1 == d && (f = 1.075);
        c < n ? (TweenMax.to(t, 0.3, { y: l, x: r, scale: f }), t.addClass("attached")) : (TweenMax.to(t, 0.3, { y: 0, x: 0, scale: 1 }), t.removeClass("attached"));
    });
}
function fnMagnetizeDistance(e, t, o) {
    e = $(e);
    return Math.floor(Math.sqrt(Math.pow(t - (e.offset().left + e.outerWidth() / 2), 2) + Math.pow(o - (e.offset().top + e.outerHeight() / 2), 2)));
}
function fnMotionCircle(e, t) {
    (t = $(t)).data("total-stamps");
    var o,
        i,
        n = $(".main", t),
        a = ($(".textarea", t), new ScrollMagic.Controller());
    if ($(window).width() >= 960) {
        (o = $("path#circle-draw", n)), (i = o[0].getTotalLength()), o.css("stroke-dasharray", i), o.css("stroke-dashoffset", i);
        var s = new TimelineMax(),
            r = 0.03,
            l = 0;
        for (s.add(TweenMax.to($("path#circle-draw", n), 0.9, { strokeDashoffset: 0, ease: Linear.easeNone })), iCount = 1; iCount <= 12; iCount++) {
            $("ul.labels li:nth-of-type(" + iCount + ")");
            var c = $(".textarea:nth-of-type(" + iCount + ")");
            c.index();
            c.hasClass("-visible") &&
                (s.add(TweenMax.to("circle.-visible:nth-of-type(" + iCount + ")", r, { stroke: "#C22B2F", ease: Linear.easeNone }), l),
                s.add(TweenMax.to("ul.labels li.-visible:nth-of-type(" + iCount + "), .textarea.-visible:nth-of-type(" + iCount + ")", r, { className: "+=-current", opacity: 1, ease: Linear.easeNone }), l),
                s.add(TweenMax.to(".textarea.-visible:not(:nth-of-type(" + iCount + "))", r, { className: "-=-current", opacity: 0, ease: Linear.easeNone }), l)),
                (l += 0.9 / 11);
        }
        new ScrollMagic.Scene({ triggerElement: "section.motion-circle", offset: t.outerHeight() / 2 - 40, duration: 3.5 * t.outerHeight(), tweenChanges: !0 }).setPin("figure.main").setTween(s).addTo(a);
    }
}
function fnPageTransition(e, t) {
    (t = $(t)).css("transform", "scaleX(0)"),
        $("a")
            .not('[href^="#"]')
            .not('[href^="mailto:"]')
            .not('[href^="tel:"]')
            .not('[target="_blank"]')
            .not(".no-transition")
            .not('[data-transition="false"]')
            .click(function (e) {
                e.preventDefault(),
                    document.documentElement.classList.add("-transition-out"),
                    t.css({ transform: "scaleX(1)", "transform-origin": "left" }),
                    setTimeout(() => {
                        window.location = this.href;
                    }, 500);
            });
}
function fnParoller(e, t) {
    $(t).paroller();
}
function fnPostListing(e, t) {
    t = $(t);
    var o = $("header .sub_text", t),
        i = $("li[data-sf-field-name]");
    function n(e) {
        "portfolio-company-news" == e ? o.fadeIn() : o.fadeOut();
    }
    $("select", i).dropkick({
        mobile: !0,
        change: function () {
            n(this.value);
        },
    }),
        $(document).on("sf:ajaxfinish", ".searchandfilter", function () {
            $("select", i).dropkick({
                mobile: !0,
                change: function () {
                    n(this.value);
                },
            });
        });
}
function fnPreloaderHome(e, t) {
    (t = $(t)), $(window), $(".preloader_title", t);
    var o = $("span.letter"),
        i = new TimelineMax();
    o.css("visibility", "visible"),
        $.each(o, function (e, t) {
            i.to(this, 1.45, { autoAlpha: 1, ease: Power4.easeInOutQuart }, 0.035 * e);
        });
}
function fnTabbedProducts(e, t) {
    t = $(t);
    var o = $("li[data-sf-field-name]"),
        i = $("article.product-listed", t),
        n = i.length,
        a = $("nav.tabs", t),
        s = $(".load-more", t),
        r = 6,
        l = 6;
    function c() {
        l + 6 >= n && s.hide(), (l = l + 6 <= n ? l + 6 : n), i.hide(), $(window).width() > 1024 ? (i.slice(0, l).show(), i.slice(0, l).find("figure.arrow").followCursor()) : i.slice(0, l).show();
    }
    i.slice(0, r).show(),
        n > r ? $("span.button", s).click(c) : s.attr("style", "display: none !important"),
        $("select", o).dropkick({ mobile: !0 }),
        $(document).on("sf:ajaxfinish", ".searchandfilter", function () {
            (i = $("article.product-listed", t)),
                (n = i.length),
                (s = $(".load-more", t)),
                (r = 6),
                (l = 6),
                i.slice(0, r).show(),
                n > r ? $("span.button", s).click(c) : s.attr("style", "display: none !important"),
                $("select", o).dropkick({ mobile: !0 }),
                fnLazyLoading(),
                $(window).width() > 1024 && $("article.product-listed figure.arrow", t).followCursor();
        }),
        $(window).width() > 1024 && $("figure.arrow", i).followCursor(),
        $(window).width() >= 1024 &&
            $(window).on("load resize scroll", function () {
                var e = t.position().top,
                    o = $(window).scrollTop();
                o <= t.position().top - 69
                    ? t.removeClass("-fixed -top -bottom")
                    : o >= t.position().top - 69 && o < e + t.outerHeight() - 69 - a.outerHeight()
                    ? t.addClass("-fixed -top").removeClass("-bottom")
                    : o >= e + t.outerHeight() - 69 - a.outerHeight() && t.addClass("-bottom").removeClass("-top");
            });
}
function fnTeam(e, t) {
    t = $(t);
    var o = $("nav.tabs", t),
        i = $(".listing", t);
    $(window).width() >= 1024 &&
        ($(window).on("load resize scroll", function () {
            var e = t.position().top,
                i = $(window).scrollTop();
            i <= t.position().top - 69
                ? t.removeClass("-fixed -top -bottom")
                : i >= t.position().top - 69 && i < e + t.outerHeight() - 69 - o.outerHeight()
                ? t.addClass("-fixed -top").removeClass("-bottom")
                : i >= e + t.outerHeight() - 69 - o.outerHeight() && t.addClass("-bottom").removeClass("-top");
        }),
        (fnActiveMenuItems = function () {
            var e,
                t = $("a", o),
                i = t.map(function () {
                    var e = $($(this).attr("href"));
                    if (e.length) return e;
                }),
                n = "-active";
            $(window).scroll(function () {
                var a = $(this).scrollTop() + o.outerHeight(),
                    s = i.map(function () {
                        if ($(this).offset().top < a) return this;
                    }),
                    r = (s = s[s.length - 1]) && s.length ? s[0].id : "";
                e !== r &&
                    ((e = r),
                    t
                        .parent()
                        .removeClass(n)
                        .end()
                        .filter('[href="#' + r + '"]')
                        .parent()
                        .addClass(n));
            });
        }),
        fnActiveMenuItems()),
        $("header.department", i).on("click", function () {
            var e = $(this).parent(".group"),
                t = e.find(".employees");
            (oOtherDepartments = e.siblings(".group")),
                e.hasClass("open")
                    ? (e.removeClass("open"), t.slideUp("slow").animate({ opacity: 0 }, { queue: !1, duration: "slow" }))
                    : (e.addClass("open"),
                      t.css("opacity", 0).slideDown("slow").animate({ opacity: 1 }, { queue: !1, duration: "slow" }),
                      oOtherDepartments.removeClass("open").find(".employees").slideUp("slow").animate({ opacity: 0 }, { queue: !1, duration: "slow" }));
        });
}
function fnTextOverlayMedia(e, t) {
    t = $(t);
    var o = $("figure.media", t),
        i = $(".play-button", t),
        n = $("figure.media .media_video", t),
        a = $("figure.media .media_image.-cover", t);
    if (n.length > 0) var s = new Vimeo.Player("text-overlay_video", { autoplay: !1, controls: !1, loop: !1, responsive: !0 });
    i.on("click", function () {
        o.hasClass("-playing")
            ? s.unload().then(function () {
                  o.removeClass("-playing"), a.fadeIn();
              })
            : (s
                  .play()
                  .then(function () {
                      o.addClass("-playing"), a.fadeOut();
                  })
                  .catch(function (e) {
                      switch (e.name) {
                          case "PasswordError":
                              alert("The video is password-protected and the viewer needs to enter the password first");
                              break;
                          case "PrivacyError":
                              alert("The video is private");
                              break;
                          default:
                              alert("An error occurred");
                      }
                  }),
              s.on("ended", function () {
                  s.unload().then(function () {
                      o.removeClass("-playing"), a.fadeIn();
                  });
              }));
    });
}
!(function (e) {
    function t(e) {
        this.init(e);
    }
    (t.prototype = {
        middleX: 0,
        middleY: 0,
        constructor: t,
        el: null,
        init: function (t) {
            e.extend(this, t);
        },
        handleMove: function (e) {
            var t = 0,
                o = 0,
                i = this.middleX,
                n = this.middleY,
                a = 0;
            if (e.pageY < n && e.pageX < i) (t = n - e.pageY), (o = i - e.pageX), (a = 90 - (a = Math.atan2(t, o) * (180 / Math.PI))), (a *= -1);
            else if (e.pageY < n && e.pageX > i) {
                (t = n - e.pageY), (o = e.pageX - i), (add = 90), (a = 90 - (a = Math.atan2(t, o) * (180 / Math.PI)));
            } else if (e.pageY > n && e.pageX > i) {
                (t = e.pageY - n), (o = e.pageX - i), (add = 180), (a = Math.atan2(t, o) * (180 / Math.PI)), (a += 90);
            } else if (e.pageY > n && e.pageX < i) {
                (t = e.pageY - n), (o = i - e.pageX), (add = 270), (a = Math.atan2(t, o) * (180 / Math.PI)), (a += 90), (a *= -1);
            } else e.pageX < i && e.pageY == n ? (a = -90) : e.pageX == i && e.pageY > n ? (a = -180) : e.pageX > i && e.pageY == n && (a = 90);
            var s = this.el;
            s.css("-ms-transform", "rotate(" + a + "deg)"), s.css("-o-transform", "rotate(" + a + "deg)"), s.css("-webkit-transform", "rotate(" + a + "deg)"), s.css("-moz-transform", "rotate(" + a + "deg)");
        },
    }),
        (e.fn.followCursor = function () {
            return this.each(function () {
                var o = e(this),
                    i = e.extend({}, o.data());
                (config = e.extend(i, {})), (config.el = o);
                var n = new t(config),
                    a = o.offset(),
                    s = (o.outerWidth(), o.outerHeight(), a.left + o.width() / 2),
                    r = a.top + o.height() / 2;
                (n.middleX = s),
                    (n.middleY = r),
                    o.data("followCursor", n),
                    e(document).mousemove(function (e) {
                        n.handleMove(e);
                    });
            });
        });
})(jQuery),
    (function (e) {
        var t = (e.fn.lettering = function (t, a) {
                var s = e.extend({}, n, i[t] || t || i.letters, a);
                return this.each(function () {
                    s.prep && s.prep(this),
                        o.call(this, s),
                        s.num &&
                            e(this)
                                .find(s.tag + "." + s.cl.replace(/\s/g, "."))
                                .addClass(function (e) {
                                    return s.cl + (e + 1);
                                });
                });
            }),
            o = function (t) {
                for (var i, n = this, a = n.nodeType, s = t.split ? e(n).text().split(t.split) : 3 == a ? n.nodeValue.split("") : 1 == a ? n.childNodes : [], r = [], l = s.length; l--; ) {
                    var c = s[l];
                    c &&
                        ("string" == typeof c
                            ? ((i = ""), t.addAttr && (i = ' data-cont="' + ('"' == (c = t.matAttr ? t.mapAttr.call(c) : c) ? "&quot;" : c) + '"'), r.push('<span class="' + t.cl + '"' + i + ">" + c + "</span>" + (t.after || "")))
                            : o.call(c, t));
                }
                r.length && e(n)[t.split ? "html" : "replaceWith"](r.reverse().join(""));
            },
            i = (t.presets = {
                letters: {},
                kern: { addAttr: !0, num: !1 },
                words: { split: /\s+/, cl: "word", after: " " },
                lines: {
                    cl: "line",
                    prep: function (t) {
                        (this.split = "|" + new Date().getTime() + "|"), e(t).find("br").replaceWith(this.split);
                    },
                },
            }),
            n = (t.defaults = { tag: "span", cl: "char", num: !0 });
    })(jQuery),
    (function (e) {
        "use strict";
        document.documentElement.classList.add("-loaded"),
            document.documentElement.classList.remove("-no-js", "-unloaded"),
            setTimeout(() => {
                document.documentElement.classList.remove("-loading", "-loaded"), document.documentElement.classList.add("-ready");
            }, 2e3),
            e("section.preloader--home").each(fnPreloaderHome),
            e("section.home-hero").each(fnHomeHero),
            e("section.page-transition").each(fnPageTransition),
            fnCursor(),
            e("header.primary").each(fnHeaderPrimary),
            fnLazyLoading(),
            fnInViewDetect(),
            e("[data-reveal]").each(fnImgReveal),
            e("body").on("click", "a.hash-link", fnHashLinks),
            e("section.fixed-title-stats").each(fnFixedTitleStats),
            e("section.img-montage-reveal").each(fnImgMontageReveal),
            e("section.text-overlay-media").each(fnTextOverlayMedia),
            e("section.fixed-title-textblocks").each(fnFixedTitleTextBlocks),
            e("section.team").each(fnTeam),
            e("section.tabbed-products").each(fnTabbedProducts),
            e("section.motion-circle").each(fnMotionCircle),
            e(".paroller, [data-paroller-factor]").each(fnParoller),
            e("section.post-listing").each(fnPostListing),
            fnMagnetize(),
            e("body").on("click", "a.has-submenu", function (t) {
                e(this).toggleClass("is-active"), e(this).siblings(".submenu").slideToggle(), t.preventDefault();
            });
    })(jQuery);
//# sourceMappingURL=../maps/global.min.js.map
