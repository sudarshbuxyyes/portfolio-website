!function (e) {
    var t = {};
    function o(n) {
        if (t[n])
            return t[n].exports;
        var r = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, o),
            r.l = !0,
            r.exports
    }
    o.m = e,
        o.c = t,
        o.d = function (e, t, n) {
            o.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }
        ,
        o.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
        ,
        o.t = function (e, t) {
            if (1 & t && (e = o(e)),
                8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var n = Object.create(null);
            if (o.r(n),
                Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }),
                2 & t && "string" != typeof e)
                for (var r in e)
                    o.d(n, r, function (t) {
                        return e[t]
                    }
                        .bind(null, r));
            return n
        }
        ,
        o.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            }
                : function () {
                    return e
                }
                ;
            return o.d(t, "a", t),
                t
        }
        ,
        o.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        o.p = "",
        o(o.s = 0)
}([function (e, t, o) {
    "use strict";
    o.r(t);
    const n = "./images/defalt-logo-black.png"
        , r = document.querySelector("header")
        , c = document.querySelector(".logo")
        , s = document.querySelector(".header-icon");
    const i = e => {
        const t = document.childNodes[1];
        e ? t.classList.contains("light-theme") ? (s.style.color = "white",
            c.src = "./images/defalt-logo.png") : (s.style.color = "black",
                c.src = n) : t.classList.contains("light-theme") ? (s.style.color = "black",
                    c.src = n) : (s.style.color = "white",
                        c.src = "./images/defalt-logo.png")
    }
        , l = document.getElementById("theme-toggle")
        , a = document.querySelector(".header")
        , d = e => {
            e.classList.contains("light-theme") ? (l.classList.remove("fa-sun"),
                l.classList.add("fa-moon")) : (l.classList.remove("fa-moon"),
                    l.classList.add("fa-sun"))
        }
        , u = e => {
            e.classList.contains("light-theme") ? localStorage.setItem("theme", "light") : localStorage.setItem("theme", "dark")
        }
        ;
    const g = () => {
        "light" === localStorage.getItem("theme") && document.childNodes[1].classList.add("light-theme")
    }
        , f = () => {
            document.querySelectorAll(".project-icon, .sidebar-btn").forEach(e => {
                e.classList.remove("fa-2x"),
                    e.classList.add("fa-4x")
            }
            )
        }
        , m = document.querySelectorAll("[data-src]")
        , h = new IntersectionObserver((e, t) => {
            e.forEach(e => {
                e.isIntersecting && (!function (e) {
                    const t = e.getAttribute("data-src");
                    if (!t)
                        return;
                    e.src = t
                }(e.target),
                    t.unobserve(e.target))
            }
            )
        }
            , {
                threshold: 0,
                rootMargin: "0px 0px 200px 0px"
            });
    const v = document.querySelector(".menu-btn")
        , p = document.querySelector(".nav-links")
        , y = document.querySelector(".resume-btn")
        , L = document.querySelectorAll(".nav-link")
        , b = () => {
            p.classList.remove("show-links")
        }
        , w = document.querySelectorAll(".nav-link")
        , S = document.querySelector(".logo-btn");
    function k() {
        dataLayer.push(arguments)
    }
    "serviceWorker" in navigator && window.addEventListener("load", () => {
        navigator.serviceWorker.register("./service-worker.js").then(e => {
            console.log("Service Worker Registered")
        }
        ).catch(e => {
            console.error("Service Worker NOT Registered, error: " + e)
        }
        )
    }
    ),
        window.dataLayer = window.dataLayer || [],
        k("js", new Date),
        k("config", "G-2GX591W4V3"),
        document.addEventListener("DOMContentLoaded", () => {
            null !== localStorage.getItem("theme") && g(),
                screen.width <= 800 && f(),
                d(document.childNodes[1]),
                i(0)
        }
        ),
        window.addEventListener("scroll", () => {
            const e = window.pageYOffset
                , t = r.getBoundingClientRect().height;
            e > t && !r.classList.contains("fixed-nav") ? (r.classList.add("fixed-nav"),
                c.src = n,
                i(1)) : e <= t && r.classList.contains("fixed-nav") && (r.classList.remove("fixed-nav"),
                    c.src = "./images/defalt-logo.png",
                    i(0))
        }
        ),
        m.forEach(e => {
            h.observe(e)
        }
        ),
        l.addEventListener("click", () => {
            const e = document.childNodes[1];
            e.classList.toggle("light-theme"),
                a.classList.contains("fixed-nav") ? i(1) : i(0),
                d(e),
                u(e)
        }
        ),
        v.addEventListener("click", () => {
            p.classList.toggle("show-links")
        }
        ),
        y.addEventListener("click", () => {
            b()
        }
        ),
        L.forEach(e => {
            e.addEventListener("click", () => {
                b()
            }
            )
        }
        ),
        w.forEach(e => {
            e.addEventListener("click", e => {
                e.preventDefault();
                const t = e.currentTarget.getAttribute("href").slice(1)
                    , o = document.getElementById(t);
                if ("contact-section" === t)
                    return void window.scrollTo({
                        left: 0,
                        top: o.offsetTop
                    });
                const n = r.getBoundingClientRect().height
                    , c = p.getBoundingClientRect().height
                    , s = r.classList.contains("fixed-nav");
                let i = o.offsetTop - n;
                s || (i -= n),
                    n > 100 && (i += c),
                    window.scrollTo({
                        left: 0,
                        top: i
                    })
            }
            )
        }
        ),
        S.addEventListener("click", () => {
            b(),
                window.scrollTo({
                    left: 0,
                    top: 0
                })
        }
        )
}
]);