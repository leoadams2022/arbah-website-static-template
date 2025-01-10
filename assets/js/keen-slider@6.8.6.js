/**
 * Bundled by jsDelivr using Rollup v2.79.2 and Terser v5.37.0.
 * Original file: /npm/keen-slider@6.8.6/keen-slider.es.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var n = function () {
  return (
    (n =
      Object.assign ||
      function (n) {
        for (var t, i = 1, e = arguments.length; i < e; i++)
          for (var r in (t = arguments[i]))
            Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        return n;
      }),
    n.apply(this, arguments)
  );
};
function t(n, t, i) {
  if (i || 2 === arguments.length)
    for (var e, r = 0, a = t.length; r < a; r++)
      (!e && r in t) ||
        (e || (e = Array.prototype.slice.call(t, 0, r)), (e[r] = t[r]));
  return n.concat(e || Array.prototype.slice.call(t));
}
function i(n) {
  return Array.prototype.slice.call(n);
}
function e(n, t) {
  var i = Math.floor(n);
  return i === t || i + 1 === t ? n : t;
}
function r() {
  return Date.now();
}
function a(n, t, i) {
  if (((t = 'data-keen-slider-' + t), null === i)) return n.removeAttribute(t);
  n.setAttribute(t, i || '');
}
function o(n, t) {
  return (
    (t = t || document),
    'function' == typeof n && (n = n(t)),
    Array.isArray(n)
      ? n
      : 'string' == typeof n
        ? i(t.querySelectorAll(n))
        : n instanceof HTMLElement
          ? [n]
          : n instanceof NodeList
            ? i(n)
            : []
  );
}
function u(n) {
  n.raw && (n = n.raw),
    n.cancelable && !n.defaultPrevented && n.preventDefault();
}
function s(n) {
  n.raw && (n = n.raw), n.stopPropagation && n.stopPropagation();
}
function c() {
  var n = [];
  return {
    add: function (t, i, e, r) {
      t.addListener ? t.addListener(e) : t.addEventListener(i, e, r),
        n.push([t, i, e, r]);
    },
    input: function (n, t, i, e) {
      this.add(
        n,
        t,
        (function (n) {
          return function (t) {
            t.nativeEvent && (t = t.nativeEvent);
            var i = t.changedTouches || [],
              e = t.targetTouches || [],
              r = t.detail && t.detail.x ? t.detail : null;
            return n({
              id: r
                ? r.identifier
                  ? r.identifier
                  : 'i'
                : e[0]
                  ? e[0]
                    ? e[0].identifier
                    : 'e'
                  : 'd',
              idChanged: r
                ? r.identifier
                  ? r.identifier
                  : 'i'
                : i[0]
                  ? i[0]
                    ? i[0].identifier
                    : 'e'
                  : 'd',
              raw: t,
              x: r && r.x ? r.x : e[0] ? e[0].screenX : r ? r.x : t.pageX,
              y: r && r.y ? r.y : e[0] ? e[0].screenY : r ? r.y : t.pageY,
            });
          };
        })(i),
        e
      );
    },
    purge: function () {
      n.forEach(function (n) {
        n[0].removeListener
          ? n[0].removeListener(n[2])
          : n[0].removeEventListener(n[1], n[2], n[3]);
      }),
        (n = []);
    },
  };
}
function d(n, t, i) {
  return Math.min(Math.max(n, t), i);
}
function l(n) {
  return (n > 0 ? 1 : 0) - (n < 0 ? 1 : 0) || +n;
}
function f(n) {
  var t = n.getBoundingClientRect();
  return {
    height: e(t.height, n.offsetHeight),
    width: e(t.width, n.offsetWidth),
  };
}
function p(n, t, i, e) {
  var r = n && n[t];
  return null == r ? i : e && 'function' == typeof r ? r() : r;
}
function v(n) {
  return Math.round(1e6 * n) / 1e6;
}
function h(n) {
  var t, i, e, r, a, o;
  function u(t) {
    o || (o = t), s(!0);
    var a = t - o;
    a > e && (a = e);
    var l = r[i];
    if (l[3] < a) return i++, u(t);
    var f = l[2],
      p = l[4],
      v = l[0],
      h = l[1] * (0, l[5])(0 === p ? 1 : (a - f) / p);
    if ((h && n.track.to(v + h), a < e)) return d();
    (o = null), s(!1), c(null), n.emit('animationEnded');
  }
  function s(n) {
    t.active = n;
  }
  function c(n) {
    t.targetIdx = n;
  }
  function d() {
    var n;
    (n = u), (a = window.requestAnimationFrame(n));
  }
  function l() {
    var t;
    (t = a),
      window.cancelAnimationFrame(t),
      s(!1),
      c(null),
      o && n.emit('animationStopped'),
      (o = null);
  }
  return (t = {
    active: !1,
    start: function (t) {
      if ((l(), n.track.details)) {
        var a = 0,
          o = n.track.details.position;
        (i = 0),
          (e = 0),
          (r = t.map(function (n) {
            var t,
              i = Number(o),
              r = null !== (t = n.earlyExit) && void 0 !== t ? t : n.duration,
              u = n.easing,
              s = n.distance * u(r / n.duration) || 0;
            o += s;
            var c = e;
            return (e += r), (a += s), [i, n.distance, c, e, n.duration, u];
          })),
          c(n.track.distToIdx(a)),
          d(),
          n.emit('animationStarted');
      }
    },
    stop: l,
    targetIdx: null,
  });
}
function m(n) {
  var i,
    e,
    a,
    o,
    u,
    s,
    c,
    f,
    h,
    m,
    g,
    b,
    x,
    k,
    y = 1 / 0,
    w = [],
    M = null,
    T = 0;
  function C(n) {
    _(T + n);
  }
  function E(n) {
    var t = z(T + n).abs;
    return D(t) ? t : null;
  }
  function z(n) {
    var i = Math.floor(Math.abs(v(n / e))),
      r = v(((n % e) + e) % e);
    r === e && (r = 0);
    var a = l(n),
      o = c.indexOf(
        t([], c, !0).reduce(function (n, t) {
          return Math.abs(t - r) < Math.abs(n - r) ? t : n;
        })
      ),
      u = o;
    return (
      a < 0 && i++,
      o === s && ((u = 0), (i += a > 0 ? 1 : -1)),
      { abs: u + i * s * a, origin: o, rel: u }
    );
  }
  function I(n, t, i) {
    var e;
    if (t || !S()) return A(n, i);
    if (!D(n)) return null;
    var r = z(null != i ? i : T),
      a = r.abs,
      o = n - r.rel,
      u = a + o;
    e = A(u);
    var c = A(u - s * l(o));
    return (
      ((null !== c && Math.abs(c) < Math.abs(e)) || null === e) && (e = c), v(e)
    );
  }
  function A(n, t) {
    if ((null == t && (t = v(T)), !D(n) || null === n)) return null;
    n = Math.round(n);
    var i = z(t),
      r = i.abs,
      a = i.rel,
      o = i.origin,
      u = O(n),
      d = ((t % e) + e) % e,
      l = c[o],
      f = Math.floor((n - (r - a)) / s) * e;
    return v(l - d - l + c[u] + f + (o === s ? e : 0));
  }
  function D(n) {
    return L(n) === n;
  }
  function L(n) {
    return d(n, h, m);
  }
  function S() {
    return o.loop;
  }
  function O(n) {
    return ((n % s) + s) % s;
  }
  function _(t) {
    var i;
    (i = t - T),
      w.push({ distance: i, timestamp: r() }),
      w.length > 6 && (w = w.slice(-6)),
      (T = v(t));
    var e = H().abs;
    if (e !== M) {
      var a = null !== M;
      (M = e), a && n.emit('slideChanged');
    }
  }
  function H(t) {
    var r = t
      ? null
      : (function () {
          if (s) {
            var n = S(),
              t = n ? ((T % e) + e) % e : T,
              i = (n ? T % e : T) - u[0][2],
              r = 0 - (i < 0 && n ? e - Math.abs(i) : i),
              c = 0,
              d = z(T),
              f = d.abs,
              p = d.rel,
              v = u[p][2],
              y = u.map(function (t, i) {
                var a = r + c;
                (a < 0 - t[0] || a > 1) &&
                  (a += (Math.abs(a) > e - 1 && n ? e : 0) * l(-a));
                var u = i - p,
                  d = l(u),
                  h = u + f;
                n &&
                  (-1 === d && a > v && (h += s),
                  1 === d && a < v && (h -= s),
                  null !== g && h < g && (a += e),
                  null !== b && h > b && (a -= e));
                var m = a + t[0] + t[1],
                  x = Math.max(
                    a >= 0 && m <= 1
                      ? 1
                      : m < 0 || a > 1
                        ? 0
                        : a < 0
                          ? Math.min(1, (t[0] + a) / t[0])
                          : (1 - a) / t[0],
                    0
                  );
                return (
                  (c += t[0] + t[1]),
                  {
                    abs: h,
                    distance: o.rtl ? -1 * a + 1 - t[0] : a,
                    portion: x,
                    size: t[0],
                  }
                );
              });
            return (
              (f = L(f)),
              (p = O(f)),
              {
                abs: L(f),
                length: a,
                max: k,
                maxIdx: m,
                min: x,
                minIdx: h,
                position: T,
                progress: n ? t / e : T / a,
                rel: p,
                slides: y,
                slidesLength: e,
              }
            );
          }
        })();
    return (i.details = r), n.emit('detailsChanged'), r;
  }
  return (i = {
    absToRel: O,
    add: C,
    details: null,
    distToIdx: E,
    idxToDist: I,
    init: function (t) {
      if (
        ((function () {
          if (
            ((o = n.options),
            (u = (o.trackConfig || []).map(function (n) {
              return [p(n, 'size', 1), p(n, 'spacing', 0), p(n, 'origin', 0)];
            })),
            (s = u.length))
          ) {
            e = v(
              u.reduce(function (n, t) {
                return n + t[0] + t[1];
              }, 0)
            );
            var t,
              i = s - 1;
            (a = v(e + u[0][2] - u[i][0] - u[i][2] - u[i][1])),
              (c = u.reduce(function (n, i) {
                if (!n) return [0];
                var e = u[n.length - 1],
                  r = n[n.length - 1] + (e[0] + e[2]) + e[1];
                return (
                  (r -= i[2]),
                  n[n.length - 1] > r && (r = n[n.length - 1]),
                  (r = v(r)),
                  n.push(r),
                  (!t || t < r) && (f = n.length - 1),
                  (t = r),
                  n
                );
              }, null)),
              0 === a && (f = 0),
              c.push(v(e));
          }
        })(),
        !s)
      )
        return H(!0);
      var i;
      !(function () {
        var t = n.options.range,
          i = n.options.loop;
        (g = h = i ? p(i, 'min', -1 / 0) : 0), (b = m = i ? p(i, 'max', y) : f);
        var e = p(t, 'min', null),
          r = p(t, 'max', null);
        null !== e && (h = e),
          null !== r && (m = r),
          (x = h === -1 / 0 ? h : n.track.idxToDist(h || 0, !0, 0)),
          (k = m === y ? m : I(m, !0, 0)),
          null === r && (b = m),
          p(t, 'align', !1) &&
            m !== y &&
            0 === u[O(m)][2] &&
            ((k -= 1 - u[O(m)][0]), (m = E(k - T))),
          (x = v(x)),
          (k = v(k));
      })(),
        (i = t),
        Number(i) === i ? C(A(L(t))) : H();
    },
    to: _,
    velocity: function () {
      var n = r(),
        t = w.reduce(
          function (t, i) {
            var e = i.distance,
              r = i.timestamp;
            return (
              n - r > 200 ||
                (l(e) !== l(t.distance) &&
                  t.distance &&
                  (t = { distance: 0, lastTimestamp: 0, time: 0 }),
                t.time && (t.distance += e),
                t.lastTimestamp && (t.time += r - t.lastTimestamp),
                (t.lastTimestamp = r)),
              t
            );
          },
          { distance: 0, lastTimestamp: 0, time: 0 }
        );
      return t.distance / t.time || 0;
    },
  });
}
function g(n) {
  var t, i, e, r, a, o, u, s;
  function c(n) {
    return 2 * n;
  }
  function f(n) {
    return d(n, u, s);
  }
  function p(n) {
    return 1 - Math.pow(1 - n, 3);
  }
  function v() {
    return e ? n.track.velocity() : 0;
  }
  function h() {
    b();
    var t = 'free-snap' === n.options.mode,
      i = n.track,
      e = v();
    r = l(e);
    var u = n.track.details,
      s = [];
    if (e || !t) {
      var d = m(e),
        h = d.dist,
        g = d.dur;
      if (((g = c(g)), (h *= r), t)) {
        var x = i.idxToDist(i.distToIdx(h), !0);
        x && (h = x);
      }
      s.push({ distance: h, duration: g, easing: p });
      var k = u.position,
        y = k + h;
      if (y < a || y > o) {
        var w = y < a ? a - k : o - k,
          M = 0,
          T = e;
        if (l(w) === r) {
          var C = Math.min(Math.abs(w) / Math.abs(h), 1),
            E =
              (function (n) {
                return 1 - Math.pow(1 - n, 1 / 3);
              })(C) * g;
          (s[0].earlyExit = E), (T = e * (1 - C));
        } else (s[0].earlyExit = 0), (M += w);
        var z = m(T, 100),
          I = z.dist * r;
        n.options.rubberband &&
          (s.push({ distance: I, duration: c(z.dur), easing: p }),
          s.push({ distance: -I + M, duration: 500, easing: p }));
      }
      n.animator.start(s);
    } else
      n.moveToIdx(f(u.abs), !0, {
        duration: 500,
        easing: function (n) {
          return 1 + --n * n * n * n * n;
        },
      });
  }
  function m(n, t) {
    void 0 === t && (t = 1e3);
    var i = 147e-9 + (n = Math.abs(n)) / t;
    return { dist: Math.pow(n, 2) / i, dur: n / i };
  }
  function g() {
    var t = n.track.details;
    t && ((a = t.min), (o = t.max), (u = t.minIdx), (s = t.maxIdx));
  }
  function b() {
    n.animator.stop();
  }
  n.on('updated', g),
    n.on('optionsChanged', g),
    n.on('created', g),
    n.on('dragStarted', function () {
      (e = !1), b(), (t = i = n.track.details.abs);
    }),
    n.on('dragChecked', function () {
      e = !0;
    }),
    n.on('dragEnded', function () {
      var e = n.options.mode;
      'snap' === e &&
        (function () {
          var e = n.track,
            r = n.track.details,
            u = r.position,
            s = l(v());
          (u > o || u < a) && (s = 0);
          var c = t + s;
          0 === r.slides[e.absToRel(c)].portion && (c -= s),
            t !== i && (c = i),
            l(e.idxToDist(c, !0)) !== s && (c += s),
            (c = f(c));
          var d = e.idxToDist(c, !0);
          n.animator.start([
            {
              distance: d,
              duration: 500,
              easing: function (n) {
                return 1 + --n * n * n * n * n;
              },
            },
          ]);
        })(),
        ('free' !== e && 'free-snap' !== e) || h();
    }),
    n.on('dragged', function () {
      i = n.track.details.abs;
    });
}
function b(n) {
  var t,
    i,
    e,
    r,
    a,
    f,
    p,
    v,
    h,
    m,
    g,
    b,
    x,
    k,
    y,
    w,
    M,
    T,
    C = c();
  function E(t) {
    if (f && v === t.id) {
      var o = D(t);
      if (h) {
        if (!A(t)) return I(t);
        (m = o), (h = !1), n.emit('dragChecked');
      }
      if (w) return (m = o);
      u(t);
      var c = (function (t) {
        if (M === -1 / 0 && T === 1 / 0) return t;
        var e = n.track.details,
          o = e.length,
          u = e.position,
          s = d(t, M - u, T - u);
        if (0 === o) return 0;
        if (!n.options.rubberband) return s;
        if (u <= T && u >= M) return t;
        if ((u < M && i > 0) || (u > T && i < 0)) return t;
        var c = (u < M ? u - M : u - T) / o,
          l = r * o,
          f = Math.abs(c * l),
          p = Math.max(0, 1 - (f / a) * 2);
        return p * p * t;
      })((p(m - o) / r) * e);
      i = l(c);
      var x = n.track.details.position;
      ((x > M && x < T) || (x === M && i > 0) || (x === T && i < 0)) && s(t),
        (g += c),
        !b && Math.abs(g * r) > 5 && (b = !0),
        n.track.add(c),
        (m = o),
        n.emit('dragged');
    }
  }
  function z(t) {
    !f &&
      n.track.details &&
      n.track.details.length &&
      ((g = 0),
      (f = !0),
      (b = !1),
      (h = !0),
      (v = t.id),
      A(t),
      (m = D(t)),
      n.emit('dragStarted'));
  }
  function I(t) {
    f && v === t.idChanged && ((f = !1), n.emit('dragEnded'));
  }
  function A(n) {
    var t = L(),
      i = t ? n.y : n.x,
      e = t ? n.x : n.y,
      r = void 0 !== x && void 0 !== k && Math.abs(k - e) <= Math.abs(x - i);
    return (x = i), (k = e), r;
  }
  function D(n) {
    return L() ? n.y : n.x;
  }
  function L() {
    return n.options.vertical;
  }
  function S() {
    (r = n.size), (a = L() ? window.innerHeight : window.innerWidth);
    var t = n.track.details;
    t && ((M = t.min), (T = t.max));
  }
  function O(n) {
    b && (s(n), u(n));
  }
  function _() {
    if ((C.purge(), n.options.drag && !n.options.disabled)) {
      var i;
      (i = n.options.dragSpeed || 1),
        (p =
          'function' == typeof i
            ? i
            : function (n) {
                return n * i;
              }),
        (e = n.options.rtl ? -1 : 1),
        S(),
        (t = n.container),
        (function () {
          var n = 'data-keen-slider-clickable';
          o('['.concat(n, ']:not([').concat(n, '=false])'), t).map(
            function (n) {
              C.add(n, 'dragstart', s),
                C.add(n, 'mousedown', s),
                C.add(n, 'touchstart', s);
            }
          );
        })(),
        C.add(t, 'dragstart', function (n) {
          u(n);
        }),
        C.add(t, 'click', O, { capture: !0 }),
        C.input(t, 'ksDragStart', z),
        C.input(t, 'ksDrag', E),
        C.input(t, 'ksDragEnd', I),
        C.input(t, 'mousedown', z),
        C.input(t, 'mousemove', E),
        C.input(t, 'mouseleave', I),
        C.input(t, 'mouseup', I),
        C.input(t, 'touchstart', z, { passive: !0 }),
        C.input(t, 'touchmove', E, { passive: !1 }),
        C.input(t, 'touchend', I),
        C.input(t, 'touchcancel', I),
        C.add(window, 'wheel', function (n) {
          f && u(n);
        });
      var r = 'data-keen-slider-scrollable';
      o('['.concat(r, ']:not([').concat(r, '=false])'), n.container).map(
        function (n) {
          return (function (n) {
            var t;
            C.input(
              n,
              'touchstart',
              function (n) {
                (t = D(n)), (w = !0), (y = !0);
              },
              { passive: !0 }
            ),
              C.input(n, 'touchmove', function (i) {
                var e = L(),
                  r = e
                    ? n.scrollHeight - n.clientHeight
                    : n.scrollWidth - n.clientWidth,
                  a = t - D(i),
                  o = e ? n.scrollTop : n.scrollLeft,
                  s =
                    (e && 'scroll' === n.style.overflowY) ||
                    (!e && 'scroll' === n.style.overflowX);
                if (
                  ((t = D(i)), ((a < 0 && o > 0) || (a > 0 && o < r)) && y && s)
                )
                  return (w = !0);
                (y = !1), u(i), (w = !1);
              }),
              C.input(n, 'touchend', function () {
                w = !1;
              });
          })(n);
        }
      );
    }
  }
  n.on('updated', S),
    n.on('optionsChanged', _),
    n.on('created', _),
    n.on('destroyed', C.purge);
}
function x(n) {
  var t,
    i,
    e = null;
  function r(t, i, e) {
    n.animator.active
      ? o(t, i, e)
      : requestAnimationFrame(function () {
          return o(t, i, e);
        });
  }
  function a() {
    r(!1, !1, i);
  }
  function o(i, r, a) {
    var o = 0,
      u = n.size,
      d = n.track.details;
    if (d && t) {
      var l = d.slides;
      t.forEach(function (n, t) {
        if (i) !e && r && s(n, null, a), c(n, null, a);
        else {
          if (!l[t]) return;
          var d = l[t].size * u;
          !e && r && s(n, d, a), c(n, l[t].distance * u - o, a), (o += d);
        }
      });
    }
  }
  function u(t) {
    return 'performance' === n.options.renderMode ? Math.round(t) : t;
  }
  function s(n, t, i) {
    var e = i ? 'height' : 'width';
    null !== t && (t = u(t) + 'px'),
      (n.style['min-' + e] = t),
      (n.style['max-' + e] = t);
  }
  function c(n, t, i) {
    if (null !== t) {
      t = u(t);
      var e = i ? t : 0;
      t = 'translate3d('.concat(i ? 0 : t, 'px, ').concat(e, 'px, 0)');
    }
    (n.style.transform = t), (n.style['-webkit-transform'] = t);
  }
  function d() {
    t && (o(!0, !0, i), (t = null)), n.on('detailsChanged', a, !0);
  }
  function l() {
    r(!1, !0, i);
  }
  function f() {
    d(),
      (i = n.options.vertical),
      n.options.disabled ||
        'custom' === n.options.renderMode ||
        ((e = 'auto' === p(n.options.slides, 'perView', null)),
        n.on('detailsChanged', a),
        (t = n.slides).length && l());
  }
  n.on('created', f),
    n.on('optionsChanged', f),
    n.on('beforeOptionsChanged', function () {
      d();
    }),
    n.on('updated', l),
    n.on('destroyed', d);
}
function k(t, i) {
  return function (e) {
    var r,
      u,
      s,
      d,
      l,
      v = c();
    function h(n) {
      var t;
      a(
        e.container,
        'reverse',
        'rtl' !==
          ((t = e.container),
          window.getComputedStyle(t, null).getPropertyValue('direction')) || n
          ? null
          : ''
      ),
        a(e.container, 'v', e.options.vertical && !n ? '' : null),
        a(e.container, 'disabled', e.options.disabled && !n ? '' : null);
    }
    function m() {
      g() && w();
    }
    function g() {
      var t = null;
      if (
        (d.forEach(function (n) {
          n.matches && (t = n.__media);
        }),
        t === r)
      )
        return !1;
      r || e.emit('beforeOptionsChanged'), (r = t);
      var i = t ? s.breakpoints[t] : s;
      return (e.options = n(n({}, s), i)), h(), z(), I(), T(), !0;
    }
    function b(n) {
      var t = f(n);
      return (e.options.vertical ? t.height : t.width) / e.size || 1;
    }
    function x() {
      return e.options.trackConfig.length;
    }
    function k(t) {
      for (var a in ((r = !1),
      (s = n(n({}, i), t)),
      v.purge(),
      (u = e.size),
      (d = []),
      s.breakpoints || [])) {
        var o = window.matchMedia(a);
        (o.__media = a), d.push(o), v.add(o, 'change', m);
      }
      v.add(window, 'orientationchange', E), v.add(window, 'resize', C), g();
    }
    function y(n) {
      e.animator.stop();
      var t = e.track.details;
      e.track.init(null != n ? n : t ? t.abs : 0);
    }
    function w(n) {
      y(n), e.emit('optionsChanged');
    }
    function M(n, t) {
      if (n) return k(n), void w(t);
      z(), I();
      var i = x();
      T(), x() !== i ? w(t) : y(t), e.emit('updated');
    }
    function T() {
      var n = e.options.slides;
      if ('function' == typeof n)
        return (e.options.trackConfig = n(e.size, e.slides));
      for (
        var t = e.slides,
          i = t.length,
          r = 'number' == typeof n ? n : p(n, 'number', i, !0),
          a = [],
          o = p(n, 'perView', 1, !0),
          u = p(n, 'spacing', 0, !0) / e.size || 0,
          s = 'auto' === o ? u : u / o,
          c = p(n, 'origin', 'auto'),
          d = 0,
          l = 0;
        l < r;
        l++
      ) {
        var f = 'auto' === o ? b(t[l]) : 1 / o - u + s,
          v = 'center' === c ? 0.5 - f / 2 : 'auto' === c ? 0 : c;
        a.push({ origin: v, size: f, spacing: u }), (d += f);
      }
      if (((d += u * (r - 1)), 'auto' === c && !e.options.loop && 1 !== o)) {
        var h = 0;
        a.map(function (n) {
          var t = d - h;
          return (
            (h += n.size + u),
            t >= 1 || (n.origin = 1 - t - (d > 1 ? 0 : 1 - d)),
            n
          );
        });
      }
      e.options.trackConfig = a;
    }
    function C() {
      z();
      var n = e.size;
      e.options.disabled || n === u || ((u = n), M());
    }
    function E() {
      C(), setTimeout(C, 500), setTimeout(C, 2e3);
    }
    function z() {
      var n = f(e.container);
      e.size = (e.options.vertical ? n.height : n.width) || 1;
    }
    function I() {
      e.slides = o(e.options.selector, e.container);
    }
    (e.container = (l = o(t, document)).length ? l[0] : null),
      (e.destroy = function () {
        v.purge(), e.emit('destroyed'), h(!0);
      }),
      (e.prev = function () {
        e.moveToIdx(e.track.details.abs - 1, !0);
      }),
      (e.next = function () {
        e.moveToIdx(e.track.details.abs + 1, !0);
      }),
      (e.update = M),
      k(e.options);
  };
}
var y = function (n, i, e) {
  try {
    return (function (n, t) {
      var i,
        e = {};
      return (
        (i = {
          emit: function (n) {
            e[n] &&
              e[n].forEach(function (n) {
                n(i);
              });
            var t = i.options && i.options[n];
            t && t(i);
          },
          moveToIdx: function (n, t, e) {
            var r = i.track.idxToDist(n, t);
            if (r) {
              var a = i.options.defaultAnimation;
              i.animator.start([
                {
                  distance: r,
                  duration: p(e || a, 'duration', 500),
                  easing: p(e || a, 'easing', function (n) {
                    return 1 + --n * n * n * n * n;
                  }),
                },
              ]);
            }
          },
          on: function (n, t, i) {
            void 0 === i && (i = !1), e[n] || (e[n] = []);
            var r = e[n].indexOf(t);
            r > -1 ? i && delete e[n][r] : i || e[n].push(t);
          },
          options: n,
        }),
        (function () {
          if (((i.track = m(i)), (i.animator = h(i)), t))
            for (var n = 0, e = t; n < e.length; n++) (0, e[n])(i);
          i.track.init(i.options.initial || 0), i.emit('created');
        })(),
        i
      );
    })(
      i,
      t(
        [
          k(n, {
            drag: !0,
            mode: 'snap',
            renderMode: 'precision',
            rubberband: !0,
            selector: '.keen-slider__slide',
          }),
          x,
          b,
          g,
        ],
        e || [],
        !0
      )
    );
  } catch (n) {
    console.error(n);
  }
};
export { y as default };
//# sourceMappingURL=/sm/6bbf4306d8ccee4dede05ba9a9a3be64e26ee20430e005b06f4de8a3978085ac.map
