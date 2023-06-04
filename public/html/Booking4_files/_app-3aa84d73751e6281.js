(self.webpackJsonpManageBooking = self.webpackJsonpManageBooking || []).push([
  [888],
  {
    58509: function (e, t, n) {
      'use strict';
      n.d(t, {
        Qp: function () {
          return p;
        },
        tP: function () {
          return m;
        },
      });
      var r = !1;
      if ('undefined' !== typeof window) {
        var a = {
          get passive() {
            r = !0;
          },
        };
        window.addEventListener('testPassive', null, a),
          window.removeEventListener('testPassive', null, a);
      }
      var o =
          'undefined' !== typeof window &&
          window.navigator &&
          window.navigator.platform &&
          (/iP(ad|hone|od)/.test(window.navigator.platform) ||
            ('MacIntel' === window.navigator.platform &&
              window.navigator.maxTouchPoints > 1)),
        i = [],
        s = !1,
        l = -1,
        c = void 0,
        u = void 0,
        f = function (e) {
          return i.some(function (t) {
            return !(!t.options.allowTouchMove || !t.options.allowTouchMove(e));
          });
        },
        d = function (e) {
          var t = e || window.event;
          return (
            !!f(t.target) ||
            t.touches.length > 1 ||
            (t.preventDefault && t.preventDefault(), !1)
          );
        },
        _ = function () {
          void 0 !== u &&
            ((document.body.style.paddingRight = u), (u = void 0)),
            void 0 !== c && ((document.body.style.overflow = c), (c = void 0));
        },
        p = function (e, t) {
          if (e) {
            if (
              !i.some(function (t) {
                return t.targetElement === e;
              })
            ) {
              var n = { targetElement: e, options: t || {} };
              (i = [].concat(
                (function (e) {
                  if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++)
                      n[t] = e[t];
                    return n;
                  }
                  return Array.from(e);
                })(i),
                [n],
              )),
                o
                  ? ((e.ontouchstart = function (e) {
                      1 === e.targetTouches.length &&
                        (l = e.targetTouches[0].clientY);
                    }),
                    (e.ontouchmove = function (t) {
                      1 === t.targetTouches.length &&
                        (function (e, t) {
                          var n = e.targetTouches[0].clientY - l;
                          !f(e.target) &&
                            ((t && 0 === t.scrollTop && n > 0) ||
                            ((function (e) {
                              return (
                                !!e &&
                                e.scrollHeight - e.scrollTop <= e.clientHeight
                              );
                            })(t) &&
                              n < 0)
                              ? d(e)
                              : e.stopPropagation());
                        })(t, e);
                    }),
                    s ||
                      (document.addEventListener(
                        'touchmove',
                        d,
                        r ? { passive: !1 } : void 0,
                      ),
                      (s = !0)))
                  : (function (e) {
                      if (void 0 === u) {
                        var t = !!e && !0 === e.reserveScrollBarGap,
                          n =
                            window.innerWidth -
                            document.documentElement.clientWidth;
                        t &&
                          n > 0 &&
                          ((u = document.body.style.paddingRight),
                          (document.body.style.paddingRight = n + 'px'));
                      }
                      void 0 === c &&
                        ((c = document.body.style.overflow),
                        (document.body.style.overflow = 'hidden'));
                    })(t);
            }
          } else
            console.error(
              'disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.',
            );
        },
        m = function () {
          o
            ? (i.forEach(function (e) {
                (e.targetElement.ontouchstart = null),
                  (e.targetElement.ontouchmove = null);
              }),
              s &&
                (document.removeEventListener(
                  'touchmove',
                  d,
                  r ? { passive: !1 } : void 0,
                ),
                (s = !1)),
              (l = -1))
            : _(),
            (i = []);
        };
    },
    94184: function (e, t) {
      var n;
      !(function () {
        'use strict';
        var r = {}.hasOwnProperty;
        function a() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            if (n) {
              var o = typeof n;
              if ('string' === o || 'number' === o) e.push(n);
              else if (Array.isArray(n)) {
                if (n.length) {
                  var i = a.apply(null, n);
                  i && e.push(i);
                }
              } else if ('object' === o) {
                if (
                  n.toString !== Object.prototype.toString &&
                  !n.toString.toString().includes('[native code]')
                ) {
                  e.push(n.toString());
                  continue;
                }
                for (var s in n) r.call(n, s) && n[s] && e.push(s);
              }
            }
          }
          return e.join(' ');
        }
        e.exports
          ? ((a.default = a), (e.exports = a))
          : void 0 ===
              (n = function () {
                return a;
              }.apply(t, [])) || (e.exports = n);
      })();
    },
    76489: function (e, t) {
      'use strict';
      var n = decodeURIComponent,
        r = encodeURIComponent,
        a = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
      function o(e, t) {
        try {
          return t(e);
        } catch (n) {
          return e;
        }
      }
    },
    27484: function (e) {
      e.exports = (function () {
        'use strict';
        var e = 1e3,
          t = 6e4,
          n = 36e5,
          r = 'millisecond',
          a = 'second',
          o = 'minute',
          i = 'hour',
          s = 'day',
          l = 'week',
          c = 'month',
          u = 'quarter',
          f = 'year',
          d = 'date',
          _ = 'Invalid Date',
          p =
            /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
          m =
            /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
          h = {
            name: 'en',
            weekdays:
              'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
                '_',
              ),
            months:
              'January_February_March_April_May_June_July_August_September_October_November_December'.split(
                '_',
              ),
            ordinal: function (e) {
              var t = ['th', 'st', 'nd', 'rd'],
                n = e % 100;
              return '[' + e + (t[(n - 20) % 10] || t[n] || t[0]) + ']';
            },
          },
          g = function (e, t, n) {
            var r = String(e);
            return !r || r.length >= t
              ? e
              : '' + Array(t + 1 - r.length).join(n) + e;
          },
          v = {
            s: g,
            z: function (e) {
              var t = -e.utcOffset(),
                n = Math.abs(t),
                r = Math.floor(n / 60),
                a = n % 60;
              return (t <= 0 ? '+' : '-') + g(r, 2, '0') + ':' + g(a, 2, '0');
            },
            m: function e(t, n) {
              if (t.date() < n.date()) return -e(n, t);
              var r = 12 * (n.year() - t.year()) + (n.month() - t.month()),
                a = t.clone().add(r, c),
                o = n - a < 0,
                i = t.clone().add(r + (o ? -1 : 1), c);
              return +(-(r + (n - a) / (o ? a - i : i - a)) || 0);
            },
            a: function (e) {
              return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
            },
            p: function (e) {
              return (
                { M: c, y: f, w: l, d: s, D: d, h: i, m: o, s: a, ms: r, Q: u }[
                  e
                ] ||
                String(e || '')
                  .toLowerCase()
                  .replace(/s$/, '')
              );
            },
            u: function (e) {
              return void 0 === e;
            },
          },
          E = 'en',
          R = {};
        R[E] = h;
        var N = function (e) {
            return e instanceof y;
          },
          b = function e(t, n, r) {
            var a;
            if (!t) return E;
            if ('string' == typeof t) {
              var o = t.toLowerCase();
              R[o] && (a = o), n && ((R[o] = n), (a = o));
              var i = t.split('-');
              if (!a && i.length > 1) return e(i[0]);
            } else {
              var s = t.name;
              (R[s] = t), (a = s);
            }
            return !r && a && (E = a), a || (!r && E);
          },
          O = function (e, t) {
            if (N(e)) return e.clone();
            var n = 'object' == typeof t ? t : {};
            return (n.date = e), (n.args = arguments), new y(n);
          },
          x = v;
        (x.l = b),
          (x.i = N),
          (x.w = function (e, t) {
            return O(e, {
              locale: t.$L,
              utc: t.$u,
              x: t.$x,
              $offset: t.$offset,
            });
          });
        var y = (function () {
            function h(e) {
              (this.$L = b(e.locale, null, !0)), this.parse(e);
            }
            var g = h.prototype;
            return (
              (g.parse = function (e) {
                (this.$d = (function (e) {
                  var t = e.date,
                    n = e.utc;
                  if (null === t) return new Date(NaN);
                  if (x.u(t)) return new Date();
                  if (t instanceof Date) return new Date(t);
                  if ('string' == typeof t && !/Z$/i.test(t)) {
                    var r = t.match(p);
                    if (r) {
                      var a = r[2] - 1 || 0,
                        o = (r[7] || '0').substring(0, 3);
                      return n
                        ? new Date(
                            Date.UTC(
                              r[1],
                              a,
                              r[3] || 1,
                              r[4] || 0,
                              r[5] || 0,
                              r[6] || 0,
                              o,
                            ),
                          )
                        : new Date(
                            r[1],
                            a,
                            r[3] || 1,
                            r[4] || 0,
                            r[5] || 0,
                            r[6] || 0,
                            o,
                          );
                    }
                  }
                  return new Date(t);
                })(e)),
                  (this.$x = e.x || {}),
                  this.init();
              }),
              (g.init = function () {
                var e = this.$d;
                (this.$y = e.getFullYear()),
                  (this.$M = e.getMonth()),
                  (this.$D = e.getDate()),
                  (this.$W = e.getDay()),
                  (this.$H = e.getHours()),
                  (this.$m = e.getMinutes()),
                  (this.$s = e.getSeconds()),
                  (this.$ms = e.getMilliseconds());
              }),
              (g.$utils = function () {
                return x;
              }),
              (g.isValid = function () {
                return !(this.$d.toString() === _);
              }),
              (g.isSame = function (e, t) {
                var n = O(e);
                return this.startOf(t) <= n && n <= this.endOf(t);
              }),
              (g.isAfter = function (e, t) {
                return O(e) < this.startOf(t);
              }),
              (g.isBefore = function (e, t) {
                return this.endOf(t) < O(e);
              }),
              (g.$g = function (e, t, n) {
                return x.u(e) ? this[t] : this.set(n, e);
              }),
              (g.unix = function () {
                return Math.floor(this.valueOf() / 1e3);
              }),
              (g.valueOf = function () {
                return this.$d.getTime();
              }),
              (g.startOf = function (e, t) {
                var n = this,
                  r = !!x.u(t) || t,
                  u = x.p(e),
                  _ = function (e, t) {
                    var a = x.w(
                      n.$u ? Date.UTC(n.$y, t, e) : new Date(n.$y, t, e),
                      n,
                    );
                    return r ? a : a.endOf(s);
                  },
                  p = function (e, t) {
                    return x.w(
                      n
                        .toDate()
                        [e].apply(
                          n.toDate('s'),
                          (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t),
                        ),
                      n,
                    );
                  },
                  m = this.$W,
                  h = this.$M,
                  g = this.$D,
                  v = 'set' + (this.$u ? 'UTC' : '');
                switch (u) {
                  case f:
                    return r ? _(1, 0) : _(31, 11);
                  case c:
                    return r ? _(1, h) : _(0, h + 1);
                  case l:
                    var E = this.$locale().weekStart || 0,
                      R = (m < E ? m + 7 : m) - E;
                    return _(r ? g - R : g + (6 - R), h);
                  case s:
                  case d:
                    return p(v + 'Hours', 0);
                  case i:
                    return p(v + 'Minutes', 1);
                  case o:
                    return p(v + 'Seconds', 2);
                  case a:
                    return p(v + 'Milliseconds', 3);
                  default:
                    return this.clone();
                }
              }),
              (g.endOf = function (e) {
                return this.startOf(e, !1);
              }),
              (g.$set = function (e, t) {
                var n,
                  l = x.p(e),
                  u = 'set' + (this.$u ? 'UTC' : ''),
                  _ = ((n = {}),
                  (n[s] = u + 'Date'),
                  (n[d] = u + 'Date'),
                  (n[c] = u + 'Month'),
                  (n[f] = u + 'FullYear'),
                  (n[i] = u + 'Hours'),
                  (n[o] = u + 'Minutes'),
                  (n[a] = u + 'Seconds'),
                  (n[r] = u + 'Milliseconds'),
                  n)[l],
                  p = l === s ? this.$D + (t - this.$W) : t;
                if (l === c || l === f) {
                  var m = this.clone().set(d, 1);
                  m.$d[_](p),
                    m.init(),
                    (this.$d = m.set(d, Math.min(this.$D, m.daysInMonth())).$d);
                } else _ && this.$d[_](p);
                return this.init(), this;
              }),
              (g.set = function (e, t) {
                return this.clone().$set(e, t);
              }),
              (g.get = function (e) {
                return this[x.p(e)]();
              }),
              (g.add = function (r, u) {
                var d,
                  _ = this;
                r = Number(r);
                var p = x.p(u),
                  m = function (e) {
                    var t = O(_);
                    return x.w(t.date(t.date() + Math.round(e * r)), _);
                  };
                if (p === c) return this.set(c, this.$M + r);
                if (p === f) return this.set(f, this.$y + r);
                if (p === s) return m(1);
                if (p === l) return m(7);
                var h =
                    ((d = {}), (d[o] = t), (d[i] = n), (d[a] = e), d)[p] || 1,
                  g = this.$d.getTime() + r * h;
                return x.w(g, this);
              }),
              (g.subtract = function (e, t) {
                return this.add(-1 * e, t);
              }),
              (g.format = function (e) {
                var t = this,
                  n = this.$locale();
                if (!this.isValid()) return n.invalidDate || _;
                var r = e || 'YYYY-MM-DDTHH:mm:ssZ',
                  a = x.z(this),
                  o = this.$H,
                  i = this.$m,
                  s = this.$M,
                  l = n.weekdays,
                  c = n.months,
                  u = function (e, n, a, o) {
                    return (e && (e[n] || e(t, r))) || a[n].slice(0, o);
                  },
                  f = function (e) {
                    return x.s(o % 12 || 12, e, '0');
                  },
                  d =
                    n.meridiem ||
                    function (e, t, n) {
                      var r = e < 12 ? 'AM' : 'PM';
                      return n ? r.toLowerCase() : r;
                    },
                  p = {
                    YY: String(this.$y).slice(-2),
                    YYYY: this.$y,
                    M: s + 1,
                    MM: x.s(s + 1, 2, '0'),
                    MMM: u(n.monthsShort, s, c, 3),
                    MMMM: u(c, s),
                    D: this.$D,
                    DD: x.s(this.$D, 2, '0'),
                    d: String(this.$W),
                    dd: u(n.weekdaysMin, this.$W, l, 2),
                    ddd: u(n.weekdaysShort, this.$W, l, 3),
                    dddd: l[this.$W],
                    H: String(o),
                    HH: x.s(o, 2, '0'),
                    h: f(1),
                    hh: f(2),
                    a: d(o, i, !0),
                    A: d(o, i, !1),
                    m: String(i),
                    mm: x.s(i, 2, '0'),
                    s: String(this.$s),
                    ss: x.s(this.$s, 2, '0'),
                    SSS: x.s(this.$ms, 3, '0'),
                    Z: a,
                  };
                return r.replace(m, function (e, t) {
                  return t || p[e] || a.replace(':', '');
                });
              }),
              (g.utcOffset = function () {
                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
              }),
              (g.diff = function (r, d, _) {
                var p,
                  m = x.p(d),
                  h = O(r),
                  g = (h.utcOffset() - this.utcOffset()) * t,
                  v = this - h,
                  E = x.m(this, h);
                return (
                  (E =
                    ((p = {}),
                    (p[f] = E / 12),
                    (p[c] = E),
                    (p[u] = E / 3),
                    (p[l] = (v - g) / 6048e5),
                    (p[s] = (v - g) / 864e5),
                    (p[i] = v / n),
                    (p[o] = v / t),
                    (p[a] = v / e),
                    p)[m] || v),
                  _ ? E : x.a(E)
                );
              }),
              (g.daysInMonth = function () {
                return this.endOf(c).$D;
              }),
              (g.$locale = function () {
                return R[this.$L];
              }),
              (g.locale = function (e, t) {
                if (!e) return this.$L;
                var n = this.clone(),
                  r = b(e, t, !0);
                return r && (n.$L = r), n;
              }),
              (g.clone = function () {
                return x.w(this.$d, this);
              }),
              (g.toDate = function () {
                return new Date(this.valueOf());
              }),
              (g.toJSON = function () {
                return this.isValid() ? this.toISOString() : null;
              }),
              (g.toISOString = function () {
                return this.$d.toISOString();
              }),
              (g.toString = function () {
                return this.$d.toUTCString();
              }),
              h
            );
          })(),
          w = y.prototype;
        return (
          (O.prototype = w),
          [
            ['$ms', r],
            ['$s', a],
            ['$m', o],
            ['$H', i],
            ['$W', s],
            ['$M', c],
            ['$y', f],
            ['$D', d],
          ].forEach(function (e) {
            w[e[1]] = function (t) {
              return this.$g(t, e[0], e[1]);
            };
          }),
          (O.extend = function (e, t) {
            return e.$i || (e(t, y, O), (e.$i = !0)), O;
          }),
          (O.locale = b),
          (O.isDayjs = N),
          (O.unix = function (e) {
            return O(1e3 * e);
          }),
          (O.en = R[E]),
          (O.Ls = R),
          (O.p = {}),
          O
        );
      })();
    },
    80790: function (e, t, n) {
      e.exports = (function (e) {
        'use strict';
        function t(e) {
          return e && 'object' == typeof e && 'default' in e
            ? e
            : { default: e };
        }
        var n = t(e),
          r = {
            s: 'ein paar Sekunden',
            m: ['eine Minute', 'einer Minute'],
            mm: '%d Minuten',
            h: ['eine Stunde', 'einer Stunde'],
            hh: '%d Stunden',
            d: ['ein Tag', 'einem Tag'],
            dd: ['%d Tage', '%d Tagen'],
            M: ['ein Monat', 'einem Monat'],
            MM: ['%d Monate', '%d Monaten'],
            y: ['ein Jahr', 'einem Jahr'],
            yy: ['%d Jahre', '%d Jahren'],
          };
        function a(e, t, n) {
          var a = r[n];
          return Array.isArray(a) && (a = a[t ? 0 : 1]), a.replace('%d', e);
        }
        var o = {
          name: 'de',
          weekdays:
            'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split(
              '_',
            ),
          weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
          weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
          months:
            'Januar_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split(
              '_',
            ),
          monthsShort:
            'Jan._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.'.split(
              '_',
            ),
          ordinal: function (e) {
            return e + '.';
          },
          weekStart: 1,
          yearStart: 4,
          formats: {
            LTS: 'HH:mm:ss',
            LT: 'HH:mm',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY HH:mm',
            LLLL: 'dddd, D. MMMM YYYY HH:mm',
          },
          relativeTime: {
            future: 'in %s',
            past: 'vor %s',
            s: a,
            m: a,
            mm: a,
            h: a,
            hh: a,
            d: a,
            dd: a,
            M: a,
            MM: a,
            y: a,
            yy: a,
          },
        };
        return n.default.locale(o, null, !0), o;
      })(n(27484));
    },
    25054: function (e) {
      e.exports = (function () {
        'use strict';
        return {
          name: 'en',
          weekdays:
            'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
              '_',
            ),
          months:
            'January_February_March_April_May_June_July_August_September_October_November_December'.split(
              '_',
            ),
          ordinal: function (e) {
            var t = ['th', 'st', 'nd', 'rd'],
              n = e % 100;
            return '[' + e + (t[(n - 20) % 10] || t[n] || t[0]) + ']';
          },
        };
      })();
    },
    67763: function (e, t, n) {
      e.exports = (function (e) {
        'use strict';
        function t(e) {
          return e && 'object' == typeof e && 'default' in e
            ? e
            : { default: e };
        }
        var n = t(e),
          r = {
            name: 'es',
            monthsShort:
              'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
            weekdays:
              'domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado'.split(
                '_',
              ),
            weekdaysShort: 'dom._lun._mar._mi\xe9._jue._vie._s\xe1b.'.split(
              '_',
            ),
            weekdaysMin: 'do_lu_ma_mi_ju_vi_s\xe1'.split('_'),
            months:
              'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split(
                '_',
              ),
            weekStart: 1,
            formats: {
              LT: 'H:mm',
              LTS: 'H:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D [de] MMMM [de] YYYY',
              LLL: 'D [de] MMMM [de] YYYY H:mm',
              LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm',
            },
            relativeTime: {
              future: 'en %s',
              past: 'hace %s',
              s: 'unos segundos',
              m: 'un minuto',
              mm: '%d minutos',
              h: 'una hora',
              hh: '%d horas',
              d: 'un d\xeda',
              dd: '%d d\xedas',
              M: 'un mes',
              MM: '%d meses',
              y: 'un a\xf1o',
              yy: '%d a\xf1os',
            },
            ordinal: function (e) {
              return e + '\xba';
            },
          };
        return n.default.locale(r, null, !0), r;
      })(n(27484));
    },
    96023: function (e, t, n) {
      e.exports = (function (e) {
        'use strict';
        function t(e) {
          return e && 'object' == typeof e && 'default' in e
            ? e
            : { default: e };
        }
        var n = t(e),
          r = {
            name: 'fr',
            weekdays:
              'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
            weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
            weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
            months:
              'janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre'.split(
                '_',
              ),
            monthsShort:
              'janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.'.split(
                '_',
              ),
            weekStart: 1,
            yearStart: 4,
            formats: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd D MMMM YYYY HH:mm',
            },
            relativeTime: {
              future: 'dans %s',
              past: 'il y a %s',
              s: 'quelques secondes',
              m: 'une minute',
              mm: '%d minutes',
              h: 'une heure',
              hh: '%d heures',
              d: 'un jour',
              dd: '%d jours',
              M: 'un mois',
              MM: '%d mois',
              y: 'un an',
              yy: '%d ans',
            },
            ordinal: function (e) {
              return e + (1 === e ? 'er' : '');
            },
          };
        return n.default.locale(r, null, !0), r;
      })(n(27484));
    },
    83783: function (e, t, n) {
      e.exports = (function (e) {
        'use strict';
        function t(e) {
          return e && 'object' == typeof e && 'default' in e
            ? e
            : { default: e };
        }
        var n = t(e),
          r = {
            name: 'id',
            weekdays: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
            months:
              'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split(
                '_',
              ),
            weekdaysShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
            monthsShort:
              'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des'.split('_'),
            weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
            weekStart: 1,
            formats: {
              LT: 'HH.mm',
              LTS: 'HH.mm.ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY [pukul] HH.mm',
              LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm',
            },
            relativeTime: {
              future: 'dalam %s',
              past: '%s yang lalu',
              s: 'beberapa detik',
              m: 'semenit',
              mm: '%d menit',
              h: 'sejam',
              hh: '%d jam',
              d: 'sehari',
              dd: '%d hari',
              M: 'sebulan',
              MM: '%d bulan',
              y: 'setahun',
              yy: '%d tahun',
            },
            ordinal: function (e) {
              return e + '.';
            },
          };
        return n.default.locale(r, null, !0), r;
      })(n(27484));
    },
    15551: function (e, t, n) {
      e.exports = (function (e) {
        'use strict';
        function t(e) {
          return e && 'object' == typeof e && 'default' in e
            ? e
            : { default: e };
        }
        var n = t(e),
          r = {
            name: 'it',
            weekdays:
              'domenica_luned\xec_marted\xec_mercoled\xec_gioved\xec_venerd\xec_sabato'.split(
                '_',
              ),
            weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
            weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
            months:
              'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split(
                '_',
              ),
            weekStart: 1,
            monthsShort:
              'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
            formats: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd D MMMM YYYY HH:mm',
            },
            relativeTime: {
              future: 'tra %s',
              past: '%s fa',
              s: 'qualche secondo',
              m: 'un minuto',
              mm: '%d minuti',
              h: "un' ora",
              hh: '%d ore',
              d: 'un giorno',
              dd: '%d giorni',
              M: 'un mese',
              MM: '%d mesi',
              y: 'un anno',
              yy: '%d anni',
            },
            ordinal: function (e) {
              return e + '\xba';
            },
          };
        return n.default.locale(r, null, !0), r;
      })(n(27484));
    },
    76831: function (e, t, n) {
      e.exports = (function (e) {
        'use strict';
        function t(e) {
          return e && 'object' == typeof e && 'default' in e
            ? e
            : { default: e };
        }
        var n = t(e),
          r = {
            name: 'ja',
            weekdays:
              '\u65e5\u66dc\u65e5_\u6708\u66dc\u65e5_\u706b\u66dc\u65e5_\u6c34\u66dc\u65e5_\u6728\u66dc\u65e5_\u91d1\u66dc\u65e5_\u571f\u66dc\u65e5'.split(
                '_',
              ),
            weekdaysShort:
              '\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f'.split('_'),
            weekdaysMin:
              '\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f'.split('_'),
            months:
              '1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708'.split(
                '_',
              ),
            monthsShort:
              '1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708'.split(
                '_',
              ),
            ordinal: function (e) {
              return e + '\u65e5';
            },
            formats: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'YYYY/MM/DD',
              LL: 'YYYY\u5e74M\u6708D\u65e5',
              LLL: 'YYYY\u5e74M\u6708D\u65e5 HH:mm',
              LLLL: 'YYYY\u5e74M\u6708D\u65e5 dddd HH:mm',
              l: 'YYYY/MM/DD',
              ll: 'YYYY\u5e74M\u6708D\u65e5',
              lll: 'YYYY\u5e74M\u6708D\u65e5 HH:mm',
              llll: 'YYYY\u5e74M\u6708D\u65e5(ddd) HH:mm',
            },
            meridiem: function (e) {
              return e < 12 ? '\u5348\u524d' : '\u5348\u5f8c';
            },
            relativeTime: {
              future: '%s\u5f8c',
              past: '%s\u524d',
              s: '\u6570\u79d2',
              m: '1\u5206',
              mm: '%d\u5206',
              h: '1\u6642\u9593',
              hh: '%d\u6642\u9593',
              d: '1\u65e5',
              dd: '%d\u65e5',
              M: '1\u30f6\u6708',
              MM: '%d\u30f6\u6708',
              y: '1\u5e74',
              yy: '%d\u5e74',
            },
          };
        return n.default.locale(r, null, !0), r;
      })(n(27484));
    },
    19132: function (e, t, n) {
      e.exports = (function (e) {
        'use strict';
        function t(e) {
          return e && 'object' == typeof e && 'default' in e
            ? e
            : { default: e };
        }
        var n = t(e),
          r = {
            name: 'ko',
            weekdays:
              '\uc77c\uc694\uc77c_\uc6d4\uc694\uc77c_\ud654\uc694\uc77c_\uc218\uc694\uc77c_\ubaa9\uc694\uc77c_\uae08\uc694\uc77c_\ud1a0\uc694\uc77c'.split(
                '_',
              ),
            weekdaysShort:
              '\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0'.split('_'),
            weekdaysMin:
              '\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0'.split('_'),
            months:
              '1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4'.split(
                '_',
              ),
            monthsShort:
              '1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4'.split(
                '_',
              ),
            ordinal: function (e) {
              return e;
            },
            formats: {
              LT: 'A h:mm',
              LTS: 'A h:mm:ss',
              L: 'YYYY.MM.DD.',
              LL: 'YYYY\ub144 MMMM D\uc77c',
              LLL: 'YYYY\ub144 MMMM D\uc77c A h:mm',
              LLLL: 'YYYY\ub144 MMMM D\uc77c dddd A h:mm',
              l: 'YYYY.MM.DD.',
              ll: 'YYYY\ub144 MMMM D\uc77c',
              lll: 'YYYY\ub144 MMMM D\uc77c A h:mm',
              llll: 'YYYY\ub144 MMMM D\uc77c dddd A h:mm',
            },
            meridiem: function (e) {
              return e < 12 ? '\uc624\uc804' : '\uc624\ud6c4';
            },
            relativeTime: {
              future: '%s \ud6c4',
              past: '%s \uc804',
              s: '\uba87 \ucd08',
              m: '1\ubd84',
              mm: '%d\ubd84',
              h: '\ud55c \uc2dc\uac04',
              hh: '%d\uc2dc\uac04',
              d: '\ud558\ub8e8',
              dd: '%d\uc77c',
              M: '\ud55c \ub2ec',
              MM: '%d\ub2ec',
              y: '\uc77c \ub144',
              yy: '%d\ub144',
            },
          };
        return n.default.locale(r, null, !0), r;
      })(n(27484));
    },
    99182: function (e, t, n) {
      e.exports = (function (e) {
        'use strict';
        function t(e) {
          return e && 'object' == typeof e && 'default' in e
            ? e
            : { default: e };
        }
        var n = t(e),
          r = {
            name: 'nl',
            weekdays:
              'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split(
                '_',
              ),
            weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
            weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
            months:
              'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split(
                '_',
              ),
            monthsShort:
              'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_'),
            ordinal: function (e) {
              return (
                '[' + e + (1 === e || 8 === e || e >= 20 ? 'ste' : 'de') + ']'
              );
            },
            weekStart: 1,
            yearStart: 4,
            formats: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD-MM-YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd D MMMM YYYY HH:mm',
            },
            relativeTime: {
              future: 'over %s',
              past: '%s geleden',
              s: 'een paar seconden',
              m: 'een minuut',
              mm: '%d minuten',
              h: 'een uur',
              hh: '%d uur',
              d: 'een dag',
              dd: '%d dagen',
              M: 'een maand',
              MM: '%d maanden',
              y: 'een jaar',
              yy: '%d jaar',
            },
          };
        return n.default.locale(r, null, !0), r;
      })(n(27484));
    },
    15001: function (e, t, n) {
      e.exports = (function (e) {
        'use strict';
        function t(e) {
          return e && 'object' == typeof e && 'default' in e
            ? e
            : { default: e };
        }
        var n = t(e),
          r = {
            name: 'pt',
            weekdays:
              'domingo_segunda-feira_ter\xe7a-feira_quarta-feira_quinta-feira_sexta-feira_s\xe1bado'.split(
                '_',
              ),
            weekdaysShort: 'dom_seg_ter_qua_qui_sex_sab'.split('_'),
            weekdaysMin: 'Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_Sa'.split('_'),
            months:
              'janeiro_fevereiro_mar\xe7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split(
                '_',
              ),
            monthsShort:
              'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
            ordinal: function (e) {
              return e + '\xba';
            },
            weekStart: 1,
            yearStart: 4,
            formats: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D [de] MMMM [de] YYYY',
              LLL: 'D [de] MMMM [de] YYYY [\xe0s] HH:mm',
              LLLL: 'dddd, D [de] MMMM [de] YYYY [\xe0s] HH:mm',
            },
            relativeTime: {
              future: 'em %s',
              past: 'h\xe1 %s',
              s: 'alguns segundos',
              m: 'um minuto',
              mm: '%d minutos',
              h: 'uma hora',
              hh: '%d horas',
              d: 'um dia',
              dd: '%d dias',
              M: 'um m\xeas',
              MM: '%d meses',
              y: 'um ano',
              yy: '%d anos',
            },
          };
        return n.default.locale(r, null, !0), r;
      })(n(27484));
    },
    70600: function (e, t, n) {
      e.exports = (function (e) {
        'use strict';
        function t(e) {
          return e && 'object' == typeof e && 'default' in e
            ? e
            : { default: e };
        }
        var n = t(e),
          r =
            '\u044f\u043d\u0432\u0430\u0440\u044f_\u0444\u0435\u0432\u0440\u0430\u043b\u044f_\u043c\u0430\u0440\u0442\u0430_\u0430\u043f\u0440\u0435\u043b\u044f_\u043c\u0430\u044f_\u0438\u044e\u043d\u044f_\u0438\u044e\u043b\u044f_\u0430\u0432\u0433\u0443\u0441\u0442\u0430_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f_\u043e\u043a\u0442\u044f\u0431\u0440\u044f_\u043d\u043e\u044f\u0431\u0440\u044f_\u0434\u0435\u043a\u0430\u0431\u0440\u044f'.split(
              '_',
            ),
          a =
            '\u044f\u043d\u0432\u0430\u0440\u044c_\u0444\u0435\u0432\u0440\u0430\u043b\u044c_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b\u044c_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c_\u043e\u043a\u0442\u044f\u0431\u0440\u044c_\u043d\u043e\u044f\u0431\u0440\u044c_\u0434\u0435\u043a\u0430\u0431\u0440\u044c'.split(
              '_',
            ),
          o =
            '\u044f\u043d\u0432._\u0444\u0435\u0432\u0440._\u043c\u0430\u0440._\u0430\u043f\u0440._\u043c\u0430\u044f_\u0438\u044e\u043d\u044f_\u0438\u044e\u043b\u044f_\u0430\u0432\u0433._\u0441\u0435\u043d\u0442._\u043e\u043a\u0442._\u043d\u043e\u044f\u0431._\u0434\u0435\u043a.'.split(
              '_',
            ),
          i =
            '\u044f\u043d\u0432._\u0444\u0435\u0432\u0440._\u043c\u0430\u0440\u0442_\u0430\u043f\u0440._\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433._\u0441\u0435\u043d\u0442._\u043e\u043a\u0442._\u043d\u043e\u044f\u0431._\u0434\u0435\u043a.'.split(
              '_',
            ),
          s = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;
        function l(e, t, n) {
          var r, a;
          return 'm' === n
            ? t
              ? '\u043c\u0438\u043d\u0443\u0442\u0430'
              : '\u043c\u0438\u043d\u0443\u0442\u0443'
            : e +
                ' ' +
                ((r = +e),
                (a = {
                  mm: t
                    ? '\u043c\u0438\u043d\u0443\u0442\u0430_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442'
                    : '\u043c\u0438\u043d\u0443\u0442\u0443_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442',
                  hh: '\u0447\u0430\u0441_\u0447\u0430\u0441\u0430_\u0447\u0430\u0441\u043e\u0432',
                  dd: '\u0434\u0435\u043d\u044c_\u0434\u043d\u044f_\u0434\u043d\u0435\u0439',
                  MM: '\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u0430_\u043c\u0435\u0441\u044f\u0446\u0435\u0432',
                  yy: '\u0433\u043e\u0434_\u0433\u043e\u0434\u0430_\u043b\u0435\u0442',
                }[n].split('_')),
                r % 10 == 1 && r % 100 != 11
                  ? a[0]
                  : r % 10 >= 2 &&
                    r % 10 <= 4 &&
                    (r % 100 < 10 || r % 100 >= 20)
                  ? a[1]
                  : a[2]);
        }
        var c = function (e, t) {
          return s.test(t) ? r[e.month()] : a[e.month()];
        };
        (c.s = a), (c.f = r);
        var u = function (e, t) {
          return s.test(t) ? o[e.month()] : i[e.month()];
        };
        (u.s = i), (u.f = o);
        var f = {
          name: 'ru',
          weekdays:
            '\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043f\u044f\u0442\u043d\u0438\u0446\u0430_\u0441\u0443\u0431\u0431\u043e\u0442\u0430'.split(
              '_',
            ),
          weekdaysShort:
            '\u0432\u0441\u043a_\u043f\u043d\u0434_\u0432\u0442\u0440_\u0441\u0440\u0434_\u0447\u0442\u0432_\u043f\u0442\u043d_\u0441\u0431\u0442'.split(
              '_',
            ),
          weekdaysMin:
            '\u0432\u0441_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431'.split(
              '_',
            ),
          months: c,
          monthsShort: u,
          weekStart: 1,
          yearStart: 4,
          formats: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY \u0433.',
            LLL: 'D MMMM YYYY \u0433., H:mm',
            LLLL: 'dddd, D MMMM YYYY \u0433., H:mm',
          },
          relativeTime: {
            future: '\u0447\u0435\u0440\u0435\u0437 %s',
            past: '%s \u043d\u0430\u0437\u0430\u0434',
            s: '\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434',
            m: l,
            mm: l,
            h: '\u0447\u0430\u0441',
            hh: l,
            d: '\u0434\u0435\u043d\u044c',
            dd: l,
            M: '\u043c\u0435\u0441\u044f\u0446',
            MM: l,
            y: '\u0433\u043e\u0434',
            yy: l,
          },
          ordinal: function (e) {
            return e;
          },
          meridiem: function (e) {
            return e < 4
              ? '\u043d\u043e\u0447\u0438'
              : e < 12
              ? '\u0443\u0442\u0440\u0430'
              : e < 17
              ? '\u0434\u043d\u044f'
              : '\u0432\u0435\u0447\u0435\u0440\u0430';
          },
        };
        return n.default.locale(f, null, !0), f;
      })(n(27484));
    },
    62019: function (e, t, n) {
      e.exports = (function (e) {
        'use strict';
        function t(e) {
          return e && 'object' == typeof e && 'default' in e
            ? e
            : { default: e };
        }
        var n = t(e),
          r = {
            name: 'th',
            weekdays:
              '\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c_\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c_\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23_\u0e1e\u0e38\u0e18_\u0e1e\u0e24\u0e2b\u0e31\u0e2a\u0e1a\u0e14\u0e35_\u0e28\u0e38\u0e01\u0e23\u0e4c_\u0e40\u0e2a\u0e32\u0e23\u0e4c'.split(
                '_',
              ),
            weekdaysShort:
              '\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c_\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c_\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23_\u0e1e\u0e38\u0e18_\u0e1e\u0e24\u0e2b\u0e31\u0e2a_\u0e28\u0e38\u0e01\u0e23\u0e4c_\u0e40\u0e2a\u0e32\u0e23\u0e4c'.split(
                '_',
              ),
            weekdaysMin:
              '\u0e2d\u0e32._\u0e08._\u0e2d._\u0e1e._\u0e1e\u0e24._\u0e28._\u0e2a.'.split(
                '_',
              ),
            months:
              '\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21_\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c_\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21_\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19_\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21_\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19_\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21_\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21_\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19_\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21_\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19_\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21'.split(
                '_',
              ),
            monthsShort:
              '\u0e21.\u0e04._\u0e01.\u0e1e._\u0e21\u0e35.\u0e04._\u0e40\u0e21.\u0e22._\u0e1e.\u0e04._\u0e21\u0e34.\u0e22._\u0e01.\u0e04._\u0e2a.\u0e04._\u0e01.\u0e22._\u0e15.\u0e04._\u0e1e.\u0e22._\u0e18.\u0e04.'.split(
                '_',
              ),
            formats: {
              LT: 'H:mm',
              LTS: 'H:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY \u0e40\u0e27\u0e25\u0e32 H:mm',
              LLLL: '\u0e27\u0e31\u0e19dddd\u0e17\u0e35\u0e48 D MMMM YYYY \u0e40\u0e27\u0e25\u0e32 H:mm',
            },
            relativeTime: {
              future: '\u0e2d\u0e35\u0e01 %s',
              past: '%s\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27',
              s: '\u0e44\u0e21\u0e48\u0e01\u0e35\u0e48\u0e27\u0e34\u0e19\u0e32\u0e17\u0e35',
              m: '1 \u0e19\u0e32\u0e17\u0e35',
              mm: '%d \u0e19\u0e32\u0e17\u0e35',
              h: '1 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07',
              hh: '%d \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07',
              d: '1 \u0e27\u0e31\u0e19',
              dd: '%d \u0e27\u0e31\u0e19',
              M: '1 \u0e40\u0e14\u0e37\u0e2d\u0e19',
              MM: '%d \u0e40\u0e14\u0e37\u0e2d\u0e19',
              y: '1 \u0e1b\u0e35',
              yy: '%d \u0e1b\u0e35',
            },
            ordinal: function (e) {
              return e + '.';
            },
          };
        return n.default.locale(r, null, !0), r;
      })(n(27484));
    },
    37553: function (e, t, n) {
      e.exports = (function (e) {
        'use strict';
        function t(e) {
          return e && 'object' == typeof e && 'default' in e
            ? e
            : { default: e };
        }
        var n = t(e),
          r = {
            name: 'vi',
            weekdays:
              'ch\u1ee7 nh\u1eadt_th\u1ee9 hai_th\u1ee9 ba_th\u1ee9 t\u01b0_th\u1ee9 n\u0103m_th\u1ee9 s\xe1u_th\u1ee9 b\u1ea3y'.split(
                '_',
              ),
            months:
              'th\xe1ng 1_th\xe1ng 2_th\xe1ng 3_th\xe1ng 4_th\xe1ng 5_th\xe1ng 6_th\xe1ng 7_th\xe1ng 8_th\xe1ng 9_th\xe1ng 10_th\xe1ng 11_th\xe1ng 12'.split(
                '_',
              ),
            weekStart: 1,
            weekdaysShort: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
            monthsShort:
              'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split(
                '_',
              ),
            weekdaysMin: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
            ordinal: function (e) {
              return e;
            },
            formats: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM [n\u0103m] YYYY',
              LLL: 'D MMMM [n\u0103m] YYYY HH:mm',
              LLLL: 'dddd, D MMMM [n\u0103m] YYYY HH:mm',
              l: 'DD/M/YYYY',
              ll: 'D MMM YYYY',
              lll: 'D MMM YYYY HH:mm',
              llll: 'ddd, D MMM YYYY HH:mm',
            },
            relativeTime: {
              future: '%s t\u1edbi',
              past: '%s tr\u01b0\u1edbc',
              s: 'v\xe0i gi\xe2y',
              m: 'm\u1ed9t ph\xfat',
              mm: '%d ph\xfat',
              h: 'm\u1ed9t gi\u1edd',
              hh: '%d gi\u1edd',
              d: 'm\u1ed9t ng\xe0y',
              dd: '%d ng\xe0y',
              M: 'm\u1ed9t th\xe1ng',
              MM: '%d th\xe1ng',
              y: 'm\u1ed9t n\u0103m',
              yy: '%d n\u0103m',
            },
          };
        return n.default.locale(r, null, !0), r;
      })(n(27484));
    },
    32009: function (e, t, n) {
      e.exports = (function (e) {
        'use strict';
        function t(e) {
          return e && 'object' == typeof e && 'default' in e
            ? e
            : { default: e };
        }
        var n = t(e),
          r = {
            name: 'zh',
            weekdays:
              '\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d'.split(
                '_',
              ),
            weekdaysShort:
              '\u5468\u65e5_\u5468\u4e00_\u5468\u4e8c_\u5468\u4e09_\u5468\u56db_\u5468\u4e94_\u5468\u516d'.split(
                '_',
              ),
            weekdaysMin:
              '\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d'.split('_'),
            months:
              '\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708'.split(
                '_',
              ),
            monthsShort:
              '1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708'.split(
                '_',
              ),
            ordinal: function (e, t) {
              return 'W' === t ? e + '\u5468' : e + '\u65e5';
            },
            weekStart: 1,
            yearStart: 4,
            formats: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'YYYY/MM/DD',
              LL: 'YYYY\u5e74M\u6708D\u65e5',
              LLL: 'YYYY\u5e74M\u6708D\u65e5Ah\u70b9mm\u5206',
              LLLL: 'YYYY\u5e74M\u6708D\u65e5ddddAh\u70b9mm\u5206',
              l: 'YYYY/M/D',
              ll: 'YYYY\u5e74M\u6708D\u65e5',
              lll: 'YYYY\u5e74M\u6708D\u65e5 HH:mm',
              llll: 'YYYY\u5e74M\u6708D\u65e5dddd HH:mm',
            },
            relativeTime: {
              future: '%s\u540e',
              past: '%s\u524d',
              s: '\u51e0\u79d2',
              m: '1 \u5206\u949f',
              mm: '%d \u5206\u949f',
              h: '1 \u5c0f\u65f6',
              hh: '%d \u5c0f\u65f6',
              d: '1 \u5929',
              dd: '%d \u5929',
              M: '1 \u4e2a\u6708',
              MM: '%d \u4e2a\u6708',
              y: '1 \u5e74',
              yy: '%d \u5e74',
            },
            meridiem: function (e, t) {
              var n = 100 * e + t;
              return n < 600
                ? '\u51cc\u6668'
                : n < 900
                ? '\u65e9\u4e0a'
                : n < 1100
                ? '\u4e0a\u5348'
                : n < 1300
                ? '\u4e2d\u5348'
                : n < 1800
                ? '\u4e0b\u5348'
                : '\u665a\u4e0a';
            },
          };
        return n.default.locale(r, null, !0), r;
      })(n(27484));
    },
    36808: function (e, t, n) {
      var r, a;
      !(function (o) {
        if (
          (void 0 ===
            (a = 'function' === typeof (r = o) ? r.call(t, n, t, e) : r) ||
            (e.exports = a),
          !0,
          (e.exports = o()),
          !!0)
        ) {
          var i = window.Cookies,
            s = (window.Cookies = o());
          s.noConflict = function () {
            return (window.Cookies = i), s;
          };
        }
      })(function () {
        function e() {
          for (var e = 0, t = {}; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) t[r] = n[r];
          }
          return t;
        }
        function t(e) {
          return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
        }
        return (function n(r) {
          function a() {}
          function o(t, n, o) {
            if ('undefined' !== typeof document) {
              'number' ===
                typeof (o = e({ path: '/' }, a.defaults, o)).expires &&
                (o.expires = new Date(1 * new Date() + 864e5 * o.expires)),
                (o.expires = o.expires ? o.expires.toUTCString() : '');
              try {
                var i = JSON.stringify(n);
                /^[\{\[]/.test(i) && (n = i);
              } catch (c) {}
              (n = r.write
                ? r.write(n, t)
                : encodeURIComponent(String(n)).replace(
                    /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                    decodeURIComponent,
                  )),
                (t = encodeURIComponent(String(t))
                  .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                  .replace(/[\(\)]/g, escape));
              var s = '';
              for (var l in o)
                o[l] &&
                  ((s += '; ' + l),
                  !0 !== o[l] && (s += '=' + o[l].split(';')[0]));
              return (document.cookie = t + '=' + n + s);
            }
          }
          function i(e, n) {
            if ('undefined' !== typeof document) {
              for (
                var a = {},
                  o = document.cookie ? document.cookie.split('; ') : [],
                  i = 0;
                i < o.length;
                i++
              ) {
                var s = o[i].split('='),
                  l = s.slice(1).join('=');
                n || '"' !== l.charAt(0) || (l = l.slice(1, -1));
                try {
                  var c = t(s[0]);
                  if (((l = (r.read || r)(l, c) || t(l)), n))
                    try {
                      l = JSON.parse(l);
                    } catch (u) {}
                  if (((a[c] = l), e === c)) break;
                } catch (u) {}
              }
              return e ? a[e] : a;
            }
          }
          return (
            (a.set = o),
            (a.get = function (e) {
              return i(e, !1);
            }),
            (a.getJSON = function (e) {
              return i(e, !0);
            }),
            (a.remove = function (t, n) {
              o(t, '', e(n, { expires: -1 }));
            }),
            (a.defaults = {}),
            (a.withConverter = n),
            a
          );
        })(function () {});
      });
    },
    78e3: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.AmpStateContext = void 0);
      var r = (0, n(92648).Z)(n(67294)).default.createContext({});
      t.AmpStateContext = r;
    },
    9470: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.isInAmpMode = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.ampFirst,
            n = void 0 !== t && t,
            r = e.hybrid,
            a = void 0 !== r && r,
            o = e.hasQuery,
            i = void 0 !== o && o;
          return n || (a && i);
        });
    },
    72717: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.defaultHead = u),
        (t.default = void 0);
      var r = n(6495).Z,
        a = n(92648).Z,
        o = (0, n(91598).Z)(n(67294)),
        i = a(n(11585)),
        s = n(78e3),
        l = n(15850),
        c = n(9470);
      n(99475);
      function u() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [o.default.createElement('meta', { charSet: 'utf-8' })];
        return (
          e ||
            t.push(
              o.default.createElement('meta', {
                name: 'viewport',
                content: 'width=device-width',
              }),
            ),
          t
        );
      }
      function f(e, t) {
        return 'string' === typeof t || 'number' === typeof t
          ? e
          : t.type === o.default.Fragment
          ? e.concat(
              o.default.Children.toArray(t.props.children).reduce(function (
                e,
                t,
              ) {
                return 'string' === typeof t || 'number' === typeof t
                  ? e
                  : e.concat(t);
              },
              []),
            )
          : e.concat(t);
      }
      var d = ['name', 'httpEquiv', 'charSet', 'itemProp'];
      function _(e, t) {
        var n = t.inAmpMode;
        return e
          .reduce(f, [])
          .reverse()
          .concat(u(n).reverse())
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return function (a) {
                var o = !0,
                  i = !1;
                if (
                  a.key &&
                  'number' !== typeof a.key &&
                  a.key.indexOf('$') > 0
                ) {
                  i = !0;
                  var s = a.key.slice(a.key.indexOf('$') + 1);
                  e.has(s) ? (o = !1) : e.add(s);
                }
                switch (a.type) {
                  case 'title':
                  case 'base':
                    t.has(a.type) ? (o = !1) : t.add(a.type);
                    break;
                  case 'meta':
                    for (var l = 0, c = d.length; l < c; l++) {
                      var u = d[l];
                      if (a.props.hasOwnProperty(u))
                        if ('charSet' === u) n.has(u) ? (o = !1) : n.add(u);
                        else {
                          var f = a.props[u],
                            _ = r[u] || new Set();
                          ('name' === u && i) || !_.has(f)
                            ? (_.add(f), (r[u] = _))
                            : (o = !1);
                        }
                    }
                }
                return o;
              };
            })(),
          )
          .reverse()
          .map(function (e, t) {
            var a = e.key || t;
            if (
              !n &&
              'link' === e.type &&
              e.props.href &&
              [
                'https://fonts.googleapis.com/css',
                'https://use.typekit.net/',
              ].some(function (t) {
                return e.props.href.startsWith(t);
              })
            ) {
              var i = r({}, e.props || {});
              return (
                (i['data-href'] = i.href),
                (i.href = void 0),
                (i['data-optimized-fonts'] = !0),
                o.default.cloneElement(e, i)
              );
            }
            return o.default.cloneElement(e, { key: a });
          });
      }
      var p = function (e) {
        var t = e.children,
          n = o.useContext(s.AmpStateContext),
          r = o.useContext(l.HeadManagerContext);
        return o.default.createElement(
          i.default,
          {
            reduceComponentsToState: _,
            headManager: r,
            inAmpMode: c.isInAmpMode(n),
          },
          t,
        );
      };
      (t.default = p),
        ('function' === typeof t.default ||
          ('object' === typeof t.default && null !== t.default)) &&
          'undefined' === typeof t.default.__esModule &&
          (Object.defineProperty(t.default, '__esModule', { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    11585: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          var t = e.headManager,
            n = e.reduceComponentsToState;
          function s() {
            if (t && t.mountedInstances) {
              var a = r.Children.toArray(
                Array.from(t.mountedInstances).filter(Boolean),
              );
              t.updateHead(n(a, e));
            }
          }
          if (a) {
            var l;
            null == t || null == (l = t.mountedInstances) || l.add(e.children),
              s();
          }
          return (
            o(function () {
              var n;
              return (
                null == t ||
                  null == (n = t.mountedInstances) ||
                  n.add(e.children),
                function () {
                  var n;
                  null == t ||
                    null == (n = t.mountedInstances) ||
                    n.delete(e.children);
                }
              );
            }),
            o(function () {
              return (
                t && (t._pendingUpdate = s),
                function () {
                  t && (t._pendingUpdate = s);
                }
              );
            }),
            i(function () {
              return (
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null)),
                function () {
                  t &&
                    t._pendingUpdate &&
                    (t._pendingUpdate(), (t._pendingUpdate = null));
                }
              );
            }),
            null
          );
        });
      var r = (0, n(91598).Z)(n(67294));
      var a = !1,
        o = a ? function () {} : r.useLayoutEffect,
        i = a ? function () {} : r.useEffect;
    },
    12387: function (e, t, n) {
      'use strict';
      var r;
      n.d(t, {
        a: function () {
          return r;
        },
      }),
        (function (e) {
          (e.INVALID_INPUT = 'Invalid request input'),
            (e.INVALID_TICKET = 'Invalid ticket number'),
            (e.INVALID_PNR = 'Invalid pnr'),
            (e.FULLY_FLOWN = 'Fully flown'),
            (e.UNEXPECTED_ERROR = 'Unexpected Error'),
            (e.PURGED_PNR = 'Purged Pnr'),
            (e.SMF_SCHEDULE_CHANGE_ERROR = 'SMF_SCHEDULE_CHANGE_ERROR'),
            (e.NON_SMF_SCHEDULE_CHANGE_ERROR = 'NON_SMF_SCHEDULE_CHANGE_ERROR'),
            (e.SC_ERROR_CHECKED_IN_ARO_INTERNET_BOOKING_CHANNEL =
              'SC_ERROR_CHECKED_IN_ARO_INTERNET_BOOKING_CHANNEL'),
            (e.SC_ERROR_CHECKED_IN_OTHER_BOOKING_CHANNEL =
              'SC_ERROR_CHECKED_IN_OTHER_BOOKING_CHANNEL'),
            (e.SC_ERROR_CLASS_MISMATCH_ARO_INTERNET_BOOKING_CHANNEL =
              'SC_ERROR_CLASS_MISMATCH_ARO_INTERNET_BOOKING_CHANNEL'),
            (e.SC_ERROR_CLASS_MISMATCH_OTHER_BOOKING_CHANNEL =
              'SC_ERROR_CLASS_MISMATCH_OTHER_BOOKING_CHANNEL'),
            (e.OPEN_TICKET_ERROR = 'OPEN_TICKET_ERROR'),
            (e.GROUP_BOOKING_FIRST_NAME_REQUIRED =
              'GROUP_BOOKING_FIRST_NAME_REQUIRED'),
            (e.OFFLINE_BOOKING_ALL_PAX_LAST_NAME_REQUIRED =
              'OFFLINE_BOOKING_ALL_PAX_LAST_NAME_REQUIRED'),
            (e.OFFLINE_BOOKING_ALL_CORRECT_PAX_LAST_NAME_REQUIRED =
              'OFFLINE_BOOKING_ALL_CORRECT_PAX_LAST_NAME_REQUIRED'),
            (e.GROUPBOOKING_INVALID_FIRSTNAME =
              'GROUPBOOKING_INVALID_FIRSTNAME'),
            (e.GROUPBOOKING_MULTIPLE_NAMES = 'GROUPBOOKING_MULTIPLE_NAMES'),
            (e.GROUPBOOKING_MULTIPLE_LASTNAME =
              'GROUPBOOKING_MULTIPLE_LASTNAME'),
            (e.UNMAPPED_MIDDLEWARE_ERROR = 'UNMAPPED_MIDDLEWARE_ERROR'),
            (e.PNR_OFFLINE_HANDLING_ERROR = 'PNR_OFFLINE_HANDLING_ERROR'),
            (e.ERROR_SESSION_EXPIRED_MESSAGE = 'ERROR_SESSION_EXPIRED_MESSAGE'),
            (e.ERROR_SECURED_PNR = 'ERROR_SECURED_PNR'),
            (e.ERROR_LAST_NAME_NOT_FOUND = 'ERROR_LAST_NAME_NOT_FOUND'),
            (e.ASYNC_FAILURE = 'ASYNC_FAILURE'),
            (e.CAPTCHA_ERROR = 'CAPTCHA_ERROR'),
            (e.SESSION_EXPIRED = 'SESSION_EXPIRED'),
            (e.OTHER_BOOKING_CHANNEL_SCHEDULE_CHANGE_ERROR =
              'OTHER_BOOKING_CHANNEL_SCHEDULE_CHANGE_ERROR'),
            (e.NON_PHASE_2 = 'NON_PHASE_2'),
            (e.ALTEA_ERROR = 'ALTEA_ERROR'),
            (e.ERETAIL_ERROR = 'ERETAIL_ERROR'),
            (e.INVALID_BACKEND_RESPONSE = 'INVALID_BACKEND_RESPONSE'),
            (e.PURE_SCOOT_BOOKING = 'PURE_SCOOT_BOOKING'),
            (e.GB_PAXCOUNT_ABOVE_THRESHOLD = 'GB_PAXCOUNT_ABOVE_THRESHOLD'),
            (e.ERROR_BLOCKED_PNR = 'ERROR_BLOCKED_PNR'),
            (e.OPEN_TICKET_PNR_RETRIEVAL_ERROR =
              'OPEN_TICKET_PNR_RETRIEVAL_ERROR');
        })(r || (r = {}));
    },
    3985: function (e, t, n) {
      'use strict';
      n.d(t, {
        Fy: function () {
          return d;
        },
        Jj: function () {
          return _;
        },
        Qu: function () {
          return p;
        },
        ZX: function () {
          return u;
        },
        dd: function () {
          return f;
        },
        ko: function () {
          return c;
        },
      });
      var r = n(59499),
        a = n(67294),
        o = n(35749),
        i = n(85893);
      function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      var c = a.createContext({
          locale: 'en_UK',
          country: 'SG',
          setPageLoading: function () {},
        }),
        u = a.createContext({}),
        f = a.createContext({}),
        d = a.createContext({}),
        _ = a.createContext({}),
        p = function (e) {
          var t = e.type,
            n = e.translations,
            r = e.children,
            a = e.country,
            s = e.common,
            c = (0, o.xh)(n, function (e) {
              return 'string' === typeof e
                ? e.replace(
                    '{country}',
                    null === a || void 0 === a ? void 0 : a.toLowerCase(),
                  )
                : e;
            });
          switch (t) {
            case 'CreditCheck':
              return (0, i.jsx)(d.Provider, { value: c, children: r });
            case 'Overview':
              return (0, i.jsx)(f.Provider, {
                value: l(l({}, c), s),
                children: r,
              });
            case 'Secondary':
              return (0, i.jsx)(u.Provider, { value: c, children: r });
          }
        };
    },
    13456: function (e, t, n) {
      'use strict';
      n.d(t, {
        NI: function () {
          return ie;
        },
        kQ: function () {
          return le;
        },
        J9: function () {
          return se;
        },
        AW: function () {
          return Se;
        },
      });
      var r = n(50029),
        a = n(16835),
        o = n(87794),
        i = n.n(o),
        s = n(67294),
        l = n(61923),
        c = n.n(l),
        u = n(60219),
        f = n.n(u),
        d = n(85893),
        _ = function (e) {
          var t = e.selectedOption,
            n = e.value,
            r = e.label,
            a = e.handleOptionChange;
          return (0, d.jsxs)('label', {
            className: f().radioInputContainer,
            children: [
              (0, d.jsx)('input', {
                type: 'radio',
                name: r,
                value: n,
                checked: t === n,
                onChange: a,
              }),
              (0, d.jsx)('span', {}),
              r,
            ],
          });
        },
        p = n(76342),
        m = n.n(p),
        h = n(3985),
        g = function (e) {
          var t = e.selectedRadioInput,
            n = e.setRadioInput,
            r = function (e) {
              n(e);
            },
            a = (0, s.useContext)(h.ZX);
          return (0, d.jsxs)('div', {
            className: ''.concat(m().radio),
            children: [
              (0, d.jsx)(_, {
                selectedOption: t,
                value: 'bookingRef',
                label: a.sqBookingrRference,
                handleOptionChange: function (e) {
                  r(e.target.value);
                },
              }),
              (0, d.jsx)(_, {
                selectedOption: t,
                value: 'eTicketNum',
                label: a.sqEticketNumber,
                handleOptionChange: function (e) {
                  r(e.target.value);
                },
              }),
            ],
          });
        },
        v = n(80137),
        E = n.n(v),
        R = n(55504),
        N = n.n(R),
        b = function (e) {
          var t = e.label;
          return (0, d.jsx)('button', {
            type: 'submit',
            className: N().mbSubmitButton,
            id: 'mbSubmit',
            children: t,
          });
        },
        O = n(77884),
        x = n.n(O),
        y = new Map([
          ['bookingRefIcon', x().bookingRefIcon],
          ['eTicketNumIcon', x().eTicketNumIcon],
        ]),
        w = function (e) {
          var t = e.message,
            n = e.icon;
          return (0, d.jsx)('div', {
            className: x().tooltipContainer,
            children: (0, d.jsx)('div', {
              className: x().tooltip,
              children: (0, d.jsxs)('div', {
                className: x().tooltipInner,
                children: [
                  (0, d.jsx)('em', {
                    className: ''
                      .concat(x().tooltipUserIcon, ' ')
                      .concat(y.get(n)),
                  }),
                  (0, d.jsx)('p', { className: x().tooltipText, children: t }),
                  (0, d.jsx)('em', { className: x().arrowUp }),
                ],
              }),
            }),
          });
        },
        L = n(39809),
        I = function (e) {
          var t = (0, s.useState)(''),
            n = t[0],
            a = t[1],
            o = (0, s.useState)(''),
            l = o[0],
            c = o[1],
            u = (0, s.useState)(''),
            f = u[0],
            d = u[1],
            _ = (0, s.useState)(!1),
            p = _[0],
            m = _[1],
            h = (0, s.useState)(!1),
            g = h[0],
            v = h[1],
            E = (0, s.useState)(!1),
            R = E[0],
            N = E[1],
            b = (0, s.useState)(!1),
            O = b[0],
            x = b[1],
            y = (0, s.useState)(!1),
            w = y[0],
            I = y[1],
            S = (function () {
              var t = (0, r.Z)(
                i().mark(function t() {
                  return i().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if ('eTicketNum' !== e) {
                            t.next = 13;
                            break;
                          }
                          if ('' !== l || '' !== f) {
                            t.next = 5;
                            break;
                          }
                          return N(!0), I(!0), t.abrupt('return', !1);
                        case 5:
                          if ('' !== l) {
                            t.next = 8;
                            break;
                          }
                          return N(!0), t.abrupt('return', !1);
                        case 8:
                          if ('' !== f) {
                            t.next = 11;
                            break;
                          }
                          return I(!0), t.abrupt('return', !1);
                        case 11:
                          t.next = 23;
                          break;
                        case 13:
                          if ('' !== n || '' !== f) {
                            t.next = 17;
                            break;
                          }
                          return m(!0), I(!0), t.abrupt('return', !1);
                        case 17:
                          if ('' !== n) {
                            t.next = 20;
                            break;
                          }
                          return m(!0), t.abrupt('return', !1);
                        case 20:
                          if ('' !== f) {
                            t.next = 23;
                            break;
                          }
                          return I(!0), t.abrupt('return', !1);
                        case 23:
                          return t.abrupt('return', !0);
                        case 24:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                }),
              );
              return function () {
                return t.apply(this, arguments);
              };
            })();
          return {
            pnr: n,
            eTicketNum: l,
            lastName: f,
            pnrError: p,
            eTicketError: R,
            lastNameError: w,
            formValueChange: function (e, t, n) {
              switch (t) {
                case 'ticketNum':
                  var r = e.slice(0, n);
                  x('' === r), N(!/[0-9]{13}$/.test(r)), c(r);
                  break;
                case 'pnr':
                  var o = e.slice(0, n);
                  v('' === o),
                    m(
                      !(function (e) {
                        return /^[a-zA-Z0-9]{6}$/.test(e);
                      })(o),
                    ),
                    a(o);
                  break;
                case 'lastName':
                  var i = e.slice(0, n);
                  ((0, L.IR)(i) || '' === i) &&
                    (I(
                      !(function (e) {
                        return '' !== e.trim() && (0, L.IR)(e);
                      })(i),
                    ),
                    d(i));
              }
            },
            formNullCheck: S,
            pnrRequiredError: g,
            eTicketRequiredError: O,
          };
        },
        S = (n(10581), n(71798)),
        C = n.n(S),
        M = n(50030),
        A = n(10432),
        T = function (e) {
          var t = e.isChecked,
            n = e.label,
            r = e.handleChange,
            a = (0, s.useContext)(h.ZX);
          return (0, d.jsxs)('div', {
            className: C().creditCheckContainer,
            children: [
              (0, d.jsx)(M.X, {
                label: n,
                handleChange: r,
                isChecked: t,
                id: 'creditCheck',
                isDisabled: !1,
              }),
              (0, d.jsx)('div', {
                className: C().tooltipContainer,
                children: (0, d.jsx)(A.T, {
                  message: a['creditCheck.tooltipContent'],
                  position: 'Bottom',
                  classes: { tooltipMainWrapper: C().secondaryLandTooltip },
                  children: (0, d.jsx)('div', {
                    className: C().tooltipIcon,
                    'data-testid': 'tooltipIcon',
                  }),
                }),
              }),
            ],
          });
        },
        k = (n(11541), n(3516)),
        P = n.n(k),
        D = n(67396),
        H = n(345),
        j = n(55489),
        B = function (e) {
          var t = e.validateGroupBookingFirstName,
            n = e.onClickClose,
            a = e.onChange,
            o = e.setNoFirstname,
            l = e.noFirstName,
            c = e.lastName,
            u = e.pnr,
            f = (0, s.useState)(''),
            _ = f[0],
            p = f[1],
            m = (0, s.useContext)(h.ZX),
            g = (0, s.useState)(!1),
            v = g[0],
            E = g[1],
            R = (function () {
              var e = (0, r.Z)(
                i().mark(function e() {
                  return i().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (l || ('' !== _ && (0, L.IR)(_))) {
                            e.next = 3;
                            break;
                          }
                          return E(!0), e.abrupt('return', !1);
                        case 3:
                          return e.abrupt('return', !0);
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            N = (function () {
              var e = (0, r.Z)(
                i().mark(function e(n) {
                  return i().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return n.preventDefault(), (e.next = 3), R();
                        case 3:
                          e.sent &&
                            (t({
                              pnr: u,
                              firstName: _,
                              lastName: c,
                              noFirstName: l,
                            }),
                            p(''),
                            E(!1),
                            o(!1));
                        case 5:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return (
            (0, s.useEffect)(
              function () {
                l && (E(!1), p(''));
              },
              [l],
            ),
            (0, d.jsx)(D.H, {
              onClickClose: function (e) {
                E(!1), p(''), n(e);
              },
              children: (0, d.jsx)('form', {
                action: '/managebooking',
                method: 'post',
                onSubmit: N,
                'data-testid': 'groupBookingForm',
                noValidate: !0,
                children: (0, d.jsxs)('div', {
                  className: P().wrapper,
                  children: [
                    (0, d.jsx)('div', {
                      className: P().heading,
                      children: m['groupBooking.retrieveBookingHeading'],
                    }),
                    (0, d.jsx)('div', {
                      className: P().description,
                      children: m['groupBooking.retrieveBookingAddInfo'],
                    }),
                    (0, d.jsx)('div', {
                      className: P().firstNameInput,
                      children: (0, d.jsx)(j.W, {
                        label: m.firstName,
                        onChange: function (e) {
                          var t = e.target.value.slice(0, e.target.maxLength);
                          ((0, L.IR)(t) || '' === t) &&
                            (E(!Y(e.target.value)), p(e.target.value));
                        },
                        isValid: !v,
                        validityMessage:
                          m['groupBooking.retrieveBookingEnterFirstName'],
                        inputValue: _.charAt(0).toUpperCase() + _.slice(1),
                        isDisabled: l,
                        others: { maxLength: 25 },
                        background: 'grey',
                      }),
                    }),
                    (0, d.jsx)('div', {
                      className: P().firstNameCheck,
                      children: (0, d.jsx)(M.X, {
                        label: m.noFirstName,
                        isChecked: l,
                        handleChange: function () {
                          return a();
                        },
                        id: 'noFirstName',
                        isDisabled: !1,
                      }),
                    }),
                    (0, d.jsx)(H.P, {
                      disabled: !1,
                      classes: { root: P().submitButton },
                      children: m.submit,
                    }),
                  ],
                }),
              }),
            })
          );
        },
        Y = function (e) {
          return '' !== e.trim() && (0, L.IR)(e);
        },
        U = n(59499),
        G = n(27812),
        F = n(62259),
        K = n.n(F),
        z = n(26974),
        $ = n(3996),
        V = n.n($),
        W = function (e) {
          var t = e.message;
          return (0, d.jsx)('div', {
            className: V().error,
            children: (0, d.jsxs)('div', {
              className: V().inner,
              children: [
                (0, d.jsx)('div', { className: V().closeIcon }),
                (0, d.jsx)('div', {
                  className: V().errorMessage,
                  dangerouslySetInnerHTML: { __html: t },
                }),
              ],
            }),
          });
        };
      function X(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? X(Object(n), !0).forEach(function (t) {
                (0, U.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : X(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      var q,
        J,
        Q = function (e) {
          var t = e.validateOfflineBookingLastNames,
            n = e.onClickClose,
            a = e.lastName,
            o = e.pnr,
            l = e.showRetrieveLastNamesPopup,
            c = (0, G.Z)(Array(9).keys());
          c.shift();
          var u = {},
            f = {};
          c.forEach(function (e) {
            (u['lastName'.concat(e)] = ''),
              (f['lastName'.concat(e, 'Error')] = !1);
          });
          var _ = (0, s.useState)(u),
            p = _[0],
            m = _[1],
            g = (0, s.useState)(f),
            v = g[0],
            E = g[1],
            R = (0, s.useContext)(h.ZX),
            N = (function () {
              var e = (0, r.Z)(
                i().mark(function e(n) {
                  return i().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return n.preventDefault(), (e.next = 3), b();
                        case 3:
                          e.sent &&
                            (t({ pnr: o, lastName: a, lastNames: p }), m(u));
                        case 5:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            b = (function () {
              var e = (0, r.Z)(
                i().mark(function e() {
                  return i().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            'return',
                            !Object.values(v).includes(!0),
                          );
                        case 1:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (0, d.jsx)(z.q, {
            onClickClose: function (e) {
              m(u), E(f), n(e);
            },
            childrenWrapperWidth: 420,
            classes: { modalWrapper: K().childrenWrapper },
            children: (0, d.jsx)('form', {
              action: '/managebooking',
              method: 'post',
              onSubmit: N,
              'data-testid': 'offlineBookingForm',
              noValidate: !0,
              children: (0, d.jsxs)('div', {
                className: K().wrapper,
                children: [
                  (0, d.jsx)('div', {
                    className: K().heading,
                    children: R['offlineBooking.retrieveBookingHeading'],
                  }),
                  (0, d.jsx)('div', {
                    className: K().description,
                    children: R['offlineBooking.retrieveBookingAddInfo'],
                  }),
                  (0, d.jsxs)('div', {
                    className: K().userDetailsConatiner,
                    children: [
                      (0, d.jsxs)('div', {
                        className: K().userDetails,
                        children: [
                          (0, d.jsx)('div', {
                            className: K().label,
                            children: R.bookingReference,
                          }),
                          (0, d.jsx)('div', {
                            className: K().message,
                            children: o.toLocaleUpperCase(),
                          }),
                        ],
                      }),
                      (0, d.jsxs)('div', {
                        className: K().userDetails,
                        children: [
                          (0, d.jsx)('div', {
                            className: K().label,
                            children: R.lastName,
                          }),
                          (0, d.jsx)('div', {
                            className: K().message,
                            children: a.toUpperCase(),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, d.jsx)('div', {
                    className: K().description,
                    children: R['offlineBooking.retrieveBookingLastNames'],
                  }),
                  l &&
                    (0, d.jsx)(W, {
                      message: R['offlineBooking.errorMessage'],
                    }),
                  (0, d.jsx)('div', {
                    className: K().firstNameInput,
                    children: c.map(function (e) {
                      var t = 'lastName'.concat(e),
                        n = 'lastName'.concat(e, 'Error');
                      return (0, d.jsx)(
                        'div',
                        {
                          className: K().lastNameBox,
                          children: (0, d.jsx)(j.W, {
                            label: ''.concat(R.passenger, ' ').concat(e + 1),
                            onChange: function (t) {
                              return (function (e, t, n) {
                                var r = 'lastName'.concat(e),
                                  a = 'lastName'.concat(e, 'Error'),
                                  o = t.slice(0, n);
                                ((0, L.IR)(o) || '' === o) &&
                                  (E(Z(Z({}, v), {}, (0, U.Z)({}, a, !ee(o)))),
                                  m(Z(Z({}, p), {}, (0, U.Z)({}, r, o))));
                              })(e, t.target.value, t.target.maxLength);
                            },
                            isValid: !v[n],
                            validityMessage: R['offlineBooking.enterLastName'],
                            inputValue:
                              p[t].charAt(0).toUpperCase() + p[t].slice(1),
                            others: { maxLength: 30 },
                            background: 'grey',
                          }),
                        },
                        e,
                      );
                    }),
                  }),
                  (0, d.jsx)(H.P, {
                    disabled: !1,
                    classes: { root: K().submitButton },
                    children: R.findBooking,
                  }),
                ],
              }),
            }),
          });
        },
        ee = function (e) {
          return (0, L.IR)(e) || '' === e.trim();
        };
      !(function (e) {
        (e.GROUP_BOOKING = 'GROUP_BOOKING'),
          (e.OFFLINE_BOOKING = 'OFFLINE_BOOKING'),
          (e.GROUP_BOOKING_NO_FIRSTNAME = 'GROUP_BOOKING_NO_FIRSTNAME');
      })(q || (q = {})),
        (function (e) {
          (e.ReCaptcha = 'R'), (e.FunCaptcha = 'F');
        })(J || (J = {}));
      var te = n(73662),
        ne = n.n(te),
        re = s.forwardRef(function (e, t) {
          var n = e.reCaptchaSiteKey,
            a = e.funCaptchaKey,
            o = e.locale,
            l = (0, s.useState)(!1),
            c = l[0],
            u = l[1],
            f = oe.get(o) || 'en';
          (0, s.useImperativeHandle)(t, function () {
            return {
              challenge: function (e) {
                if (_()) {
                  (window.verifyReCaptchaCallback = function (t) {
                    e(t, J.ReCaptcha),
                      grecaptcha.reset(),
                      (window.verifyReCaptchaCallback = void 0);
                  }),
                    grecaptcha.execute();
                } else {
                  u(!0);
                  document.addEventListener('funcaptcha_event', function t(n) {
                    e(n.detail.token, J.FunCaptcha),
                      document.removeEventListener('funcaptcha_event', t);
                  });
                }
              },
            };
          }),
            (0, s.useEffect)(
              function () {
                function e() {
                  return (e = (0, r.Z)(
                    i().mark(function e() {
                      return i().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              window &&
                                (-1 !==
                                  window.location.hostname.indexOf(
                                    'singaporeair',
                                  ) &&
                                  ae(
                                    'https://www.google.com/recaptcha/api.js?render='
                                      .concat(n, '&hl=')
                                      .concat(f),
                                  ),
                                setTimeout(function () {
                                  if (!_()) {
                                    ae(
                                      'https://funcaptcha.com/fc/api/?onload=loadFunCaptcha',
                                    );
                                    window.loadFunCaptcha = function () {
                                      var e = new FunCaptcha({
                                        public_key: a,
                                        target_html: 'funcaptcha_container',
                                        language: f,
                                        callback: function (t) {
                                          document.dispatchEvent(
                                            new CustomEvent(
                                              'funcaptcha_event',
                                              { detail: { token: t } },
                                            ),
                                          ),
                                            e.refresh_session(),
                                            u(!1);
                                        },
                                      });
                                    };
                                  }
                                }, 500));
                            case 1:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    }),
                  )).apply(this, arguments);
                }
                (function () {
                  e.apply(this, arguments);
                })();
              },
              [a, f, n],
            ),
            (0, s.useEffect)(function () {
              return (
                (function () {
                  if ('function' === typeof window.CustomEvent) return !1;
                  window.CustomEvent = function (e, t) {
                    t = t || { bubbles: !1, cancelable: !1, detail: null };
                    var n = document.createEvent('CustomEvent');
                    return (
                      n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
                    );
                  };
                })(),
                function () {
                  _() ||
                    Array.from(
                      document.getElementsByClassName('grecaptcha-badge'),
                    ).forEach(function (e) {
                      var t;
                      null === (t = e.parentElement) ||
                        void 0 === t ||
                        t.removeChild(e);
                    });
                }
              );
            }, []);
          var _ = function () {
              return !(
                'undefined' === typeof grecaptcha ||
                'undefined' === typeof grecaptcha.execute ||
                'undefined' === typeof grecaptcha.reset
              );
            },
            p = c && !_() ? ne().funCaptcha : ne().funCaptcha + ' ' + ne().hide;
          return (0,
          d.jsxs)(d.Fragment, { children: [(0, d.jsx)('div', { className: 'g-recaptcha', 'data-callback': 'verifyReCaptchaCallback', 'data-size': 'invisible', 'data-sitekey': n, style: { visibility: 'hidden' } }), (0, d.jsx)('div', { id: 'funcaptcha_container', className: p })] });
        });
      function ae(e) {
        var t = document.createElement('script');
        (t.async = !0),
          (t.defer = !0),
          t.setAttribute('type', 'text/javascript'),
          t.setAttribute('src', e),
          (
            document.getElementsByTagName('head')[0] || document.documentElement
          ).appendChild(t);
      }
      var oe = new Map([
        ['de_DE', 'de'],
        ['en_UK', 'en'],
        ['es_ES', 'es'],
        ['fr_FR', 'fr'],
        ['in_ID', 'id'],
        ['it_IT', 'it'],
        ['ja_JP', 'ja'],
        ['ko_KR', 'ko'],
        ['nl_NL', 'nl'],
        ['pt_BR', 'pt-BR'],
        ['ru_RU', 'ru'],
        ['th_TH', 'th'],
        ['vi_VN', 'vi'],
        ['zh_CN', 'zh-CN'],
        ['zh_TW', 'zh-TW'],
      ]);
      re.displayName = 'CaptchaComponent';
      var ie,
        se,
        le,
        ce = function (e) {
          var t = (0, s.useRef)(null),
            n = (0, s.useState)(!1),
            a = n[0],
            o = n[1],
            l = e.radioInput,
            c = e.getOverviewPageData,
            u = e.getCreditCheckData,
            f = e.validateGroupBookingFirstName,
            _ = e.validateOfflineBookingLastNames,
            p = e.requireExtraInfoType,
            m = e.getInputData,
            g = I(l),
            v = g.pnr,
            R = g.eTicketNum,
            N = g.lastName,
            O = g.pnrError,
            x = g.eTicketError,
            y = g.lastNameError,
            L = g.formValueChange,
            S = g.formNullCheck,
            C = g.pnrRequiredError,
            M = g.eTicketRequiredError,
            A = (0, s.useContext)(h.ZX),
            k = (0, s.useContext)(h.ko),
            P = k.locale,
            D = k.country,
            H = s.createRef(),
            Y = s.createRef(),
            U = s.createRef();
          (0, s.useEffect)(
            function () {
              V(p === se.GROUP_BOOKING_FIRST_NAME_REQUIRED);
            },
            [p],
          ),
            (0, s.useEffect)(
              function () {
                Z(p === se.OFFLINE_BOOKING_ALL_PAX_LAST_NAME_REQUIRED);
              },
              [p],
            ),
            (0, s.useEffect)(
              function () {
                ee(p === se.OFFLINE_BOOKING_ALL_CORRECT_PAX_LAST_NAME_REQUIRED);
              },
              [p],
            );
          var G = function (e, t, n) {
              L(e, t, n);
            },
            F = (function () {
              var e = (0, r.Z)(
                i().mark(function e(n) {
                  var r, o, s, f;
                  return i().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return n.preventDefault(), (e.next = 3), S();
                        case 3:
                          (r = e.sent),
                            (o = N.trim()),
                            'eTicketNum' === l
                              ? !x &&
                                r &&
                                (m(R),
                                null === (s = t.current) ||
                                  void 0 === s ||
                                  s.challenge(function (e, t) {
                                    a
                                      ? u({
                                          auth: {
                                            pnr: R,
                                            lastName: o,
                                            captchaToken: e,
                                            captchaType: t,
                                          },
                                          locale: P,
                                        })
                                      : c({
                                          auth: {
                                            pnr: R,
                                            lastName: o,
                                            captchaToken: e,
                                            captchaType: t,
                                          },
                                          locale: P,
                                          country: D,
                                        });
                                  }))
                              : !O &&
                                r &&
                                (m(v),
                                null === (f = t.current) ||
                                  void 0 === f ||
                                  f.challenge(function (e, t) {
                                    a
                                      ? u({
                                          auth: {
                                            pnr: v,
                                            lastName: o,
                                            captchaToken: e,
                                            captchaType: t,
                                          },
                                          locale: P,
                                        })
                                      : c({
                                          auth: {
                                            pnr: v,
                                            lastName: o,
                                            captchaToken: e,
                                            captchaType: t,
                                          },
                                          locale: P,
                                          country: D,
                                        });
                                  }));
                        case 6:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            K = (0, s.useContext)(h.Jj)['feature.creditCheck'],
            z = (0, s.useState)(!1),
            $ = z[0],
            V = z[1],
            W = (0, s.useState)(!1),
            X = W[0],
            Z = W[1],
            q = (0, s.useState)(!1),
            J = q[0],
            ee = q[1],
            te = (0, s.useState)(!1),
            ne = te[0],
            ae = te[1];
          return (
            (0, s.useEffect)(
              function () {
                $ &&
                  window.history.pushState(
                    '',
                    '',
                    '?pnr='
                      .concat(v, '&lastname=')
                      .concat(N, '&isGroupBooking=true'),
                  );
              },
              [$, v, N],
            ),
            (0, s.useEffect)(
              function () {
                X &&
                  window.history.pushState(
                    '',
                    '',
                    '?pnr='
                      .concat(v, '&lastname=')
                      .concat(N, '&isOfflineBooking=true'),
                  );
              },
              [X, v, N],
            ),
            (0, s.useEffect)(function () {
              window.location.href.includes('isGroupBooking=true') &&
                window.history.pushState(
                  '',
                  '',
                  window.location.href.substring(
                    0,
                    window.location.href.lastIndexOf('?'),
                  ),
                );
            }, []),
            (0, d.jsxs)(d.Fragment, {
              children: [
                (0, d.jsxs)('form', {
                  action: '/managebooking',
                  method: 'post',
                  onSubmit: F,
                  'data-testid': 'form',
                  onKeyDown: function (e) {
                    return (function (e) {
                      var t, n, r;
                      13 === e.keyCode &&
                        (null === (t = H.current) || void 0 === t || t.blur(),
                        null === (n = Y.current) || void 0 === n || n.blur(),
                        null === (r = U.current) || void 0 === r || r.blur(),
                        F(e));
                    })(e);
                  },
                  noValidate: !0,
                  children: [
                    'eTicketNum' === l
                      ? (0, d.jsxs)(s.Fragment, {
                          children: [
                            (0, d.jsx)(w, {
                              message: A.mbEticketDescription,
                              icon: 'eTicketNumIcon',
                            }),
                            (0, d.jsx)('div', {
                              className: E().inputContainer,
                              children: (0, d.jsx)(j.W, {
                                label: A.eTicketNumber,
                                others: { maxLength: 13 },
                                onChange: function (e) {
                                  return G(
                                    e.target.value,
                                    'ticketNum',
                                    e.target.maxLength,
                                  );
                                },
                                isValid: !x,
                                validityMessage: M
                                  ? A['error.eTicketNumRequired']
                                  : A['error.validEticket'],
                                inputValue:
                                  R.charAt(0).toUpperCase() + R.slice(1),
                                background: 'white',
                                ref: U,
                              }),
                            }),
                          ],
                        })
                      : (0, d.jsxs)(s.Fragment, {
                          children: [
                            (0, d.jsx)(w, {
                              message: A.sqBookingReferenceDescription,
                              icon: 'bookingRefIcon',
                            }),
                            (0, d.jsx)('div', {
                              className: E().inputContainer,
                              children: (0, d.jsx)(j.W, {
                                label: A.sixCharacterBookingRef,
                                onChange: function (e) {
                                  return G(
                                    e.target.value,
                                    'pnr',
                                    e.target.maxLength,
                                  );
                                },
                                isValid: !O,
                                validityMessage: C
                                  ? A['error.bookingRefRequired']
                                  : A['error.validBookingRef'],
                                inputValue:
                                  v.charAt(0).toUpperCase() + v.slice(1),
                                others: { maxLength: 6 },
                                background: 'white',
                                ref: Y,
                              }),
                            }),
                          ],
                        }),
                    (0, d.jsx)('div', {
                      className: E().inputContainer,
                      children: (0, d.jsx)(j.W, {
                        label: A.lastFamilyNameAsInPassport,
                        onChange: function (e) {
                          return G(
                            e.target.value,
                            'lastName',
                            e.target.maxLength,
                          );
                        },
                        isValid: !y,
                        validityMessage: A['error.emptyLastName'],
                        inputValue: N.charAt(0).toUpperCase() + N.slice(1),
                        others: {
                          maxLength: 30,
                          id: 'lasFamilyNameInputField',
                        },
                        background: 'white',
                        ref: H,
                      }),
                    }),
                    'enable' === K &&
                      (0, d.jsx)(T, {
                        label: A['creditCheck.checkboxLabel'],
                        handleChange: function () {
                          o(!a);
                        },
                        isChecked: a,
                      }),
                    a
                      ? (0, d.jsx)('div', {
                          className: E().submitButtonContainer,
                          children: (0, d.jsx)(b, {
                            label: A['creditCheck.submit'],
                          }),
                        })
                      : (0, d.jsx)('div', {
                          className: E().submitButtonContainer,
                          children: (0, d.jsx)(b, { label: A.manageBooking }),
                        }),
                  ],
                }),
                $ &&
                  (0, d.jsx)(B, {
                    lastName: N,
                    pnr: 6 === v.length ? v : R,
                    noFirstName: ne,
                    onChange: function () {
                      ae(!ne);
                    },
                    validateGroupBookingFirstName: f,
                    onClickClose: function () {
                      V(!1), ae(!1);
                    },
                    setNoFirstname: ae,
                  }),
                (X || J) &&
                  (0, d.jsx)(Q, {
                    lastName: N,
                    pnr: 6 === v.length ? v : R,
                    validateOfflineBookingLastNames: _,
                    showRetrieveLastNamesPopup: J,
                    onClickClose: function () {
                      Z(!1), ee(!1);
                    },
                  }),
                (0, d.jsx)(re, {
                  reCaptchaSiteKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
                  funCaptchaKey: '4D297134-67EC-B943-E0E9-79E2E0D9F8DB',
                  ref: t,
                  locale: P,
                }),
              ],
            })
          );
        },
        ue = n(25561),
        fe = n.n(ue),
        de = function () {
          var e = (0, s.useContext)(h.ZX);
          return (0, d.jsxs)('div', {
            className: fe().login,
            children: [
              (0, d.jsx)('p', { children: e.loginAdditionalText }),
              (0, d.jsx)('a', {
                className: fe().loginButtonLink,
                href: e.kfLoginLink,
                children: e.login,
              }),
            ],
          });
        },
        _e = n(50670),
        pe = n.n(_e),
        me = function () {
          var e = (0, s.useContext)(h.ZX),
            t = (0, s.useContext)(h.ko),
            n = t.locale,
            r = t.country,
            a = r && r.toLowerCase(),
            o = '/'
              .concat(n, '/')
              .concat(a, '/')
              .concat(e['breadcrumb.planTravel.link']),
            i = '/'.concat(n, '/').concat(e['breadcrumb.yourBooking.link']);
          return (0, d.jsx)('div', {
            className: pe().wrapper,
            children: (0, d.jsx)('div', {
              className: pe().breadcrumb,
              children: (0, d.jsxs)('ul', {
                children: [
                  (0, d.jsxs)('li', {
                    className: pe().breadcrumbItem,
                    children: [
                      (0, d.jsx)('a', {
                        className: pe().breadcrumbItemLink,
                        href: e['breadcrumb.home.link'],
                        children: e['breadcrumb.home.text'],
                      }),
                      (0, d.jsx)('em', { className: pe().rightArrow }),
                    ],
                  }),
                  (0, d.jsxs)('li', {
                    className: pe().breadcrumbItem,
                    children: [
                      (0, d.jsx)('a', {
                        className: pe().breadcrumbItemLink,
                        href: o,
                        children: e['breadcrumb.planTravel.text'],
                      }),
                      (0, d.jsx)('em', { className: pe().rightArrow }),
                    ],
                  }),
                  (0, d.jsxs)('li', {
                    className: pe().breadcrumbItem,
                    children: [
                      (0, d.jsx)('a', {
                        className: pe().breadcrumbItemLink,
                        href: i,
                        children: e['breadcrumb.yourBooking.text'],
                      }),
                      (0, d.jsx)('em', { className: pe().rightArrow }),
                    ],
                  }),
                  (0, d.jsx)('li', {
                    className: pe().breadcrumbItem,
                    children: e['breadcrumb.manageBooking.text'],
                  }),
                ],
              }),
            }),
          });
        },
        he = n(48407),
        ge = n.n(he),
        ve = function (e) {
          var t = e.label;
          return (0, d.jsxs)('div', {
            className: ge().wrapper,
            'data-testid': 'creditCheckMessage',
            id: 'creditCheckMessage',
            children: [
              (0, d.jsx)('em', { className: ge().alertIcon }),
              (0, d.jsx)('div', {
                className: ge().label,
                dangerouslySetInnerHTML: { __html: t },
              }),
            ],
          });
        },
        Ee = n(13632),
        Re = n.n(Ee),
        Ne = function (e) {
          var t = e.label;
          return (0, d.jsxs)('div', {
            className: Re().wrapper,
            children: [
              (0, d.jsx)('em', { className: Re().alertIcon }),
              (0, d.jsx)('div', {
                className: Re().label,
                dangerouslySetInnerHTML: { __html: t },
              }),
            ],
          });
        },
        be = function (e) {
          var t = e.errorType,
            n = e.getOverviewPageData,
            r = e.getCreditCheckData,
            a = e.requireExtraInfoType,
            o = e.validateGroupBookingFirstName,
            i = e.validateOfflineBookingLastNames,
            l = (0, s.useState)(''),
            u = l[0],
            f = l[1],
            _ = (0, s.useState)(''),
            p = _[0],
            m = _[1],
            v = (0, s.useContext)(h.ZX);
          (0, s.useEffect)(
            function () {
              t === ie.NONE && f('bookingRef');
            },
            [t],
          );
          var E = (0, s.useContext)(h.Jj)['feature.creditCheck'];
          return (0, d.jsxs)('div', {
            children: [
              (0, d.jsx)(me, {}),
              (0, d.jsx)('div', {
                className: c().mainInner,
                children: (0, d.jsx)('div', {
                  className: c().staticContent,
                  children: (0, d.jsxs)('div', {
                    className: c().staticDetails,
                    children: [
                      (0, d.jsx)('div', {
                        className: c().blockHeading,
                        'test-id': 'mbHead',
                        children: (0, d.jsx)('h2', {
                          children: v.manageBooking,
                        }),
                      }),
                      'enable' === E &&
                        '' !== v['creditCheck.additionalMessage'] &&
                        (0, d.jsx)(ve, {
                          label: v['creditCheck.additionalMessage'],
                        }),
                      t === ie.ASYNC_FAILURE &&
                        (0, d.jsx)(Ne, {
                          label: v['error.asyncFailure'].replace('{0}', p),
                        }),
                      t === ie.NONE || t === ie.ASYNC_FAILURE
                        ? null
                        : Oe(t, v, p),
                      (0, d.jsxs)('div', {
                        className: c().formContent,
                        children: [
                          (0, d.jsx)(g, {
                            selectedRadioInput: u,
                            setRadioInput: function (e) {
                              f(e);
                            },
                          }),
                          (0, d.jsx)(ce, {
                            requireExtraInfoType: a,
                            validateGroupBookingFirstName: o,
                            validateOfflineBookingLastNames: i,
                            radioInput: u,
                            getOverviewPageData: n,
                            getCreditCheckData: r,
                            getInputData: function (e) {
                              m(e);
                            },
                          }),
                          (0, d.jsx)(de, {}),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        },
        Oe = function (e, t, n) {
          switch (e) {
            case ie.NON_SMF_SCHEDULE_CHANGE_ERROR:
              return (0, d.jsx)(W, {
                message: t['error.NONSMFScheduleChange'],
              });
            case ie.SMF_SCHEDULE_CHANGE_ERROR:
              return (0, d.jsx)(W, { message: t['error.SMFScheduleChange'] });
            case ie.SC_ERROR_CHECKED_IN_ARO_INTERNET_BOOKING_CHANNEL:
              return (0, d.jsx)(W, {
                message: t['error.SCCheckedinInternetAROBooking'],
              });
            case ie.SC_ERROR_CHECKED_IN_OTHER_BOOKING_CHANNEL:
              return (0, d.jsx)(W, {
                message: t['error.SCCheckedinOtherBooking'],
              });
            case ie.SC_ERROR_CLASS_MISMATCH_ARO_INTERNET_BOOKING_CHANNEL:
              return (0, d.jsx)(W, {
                message: t['error.SCClassMismatchInternetAROBooking'],
              });
            case ie.SC_ERROR_CLASS_MISMATCH_OTHER_BOOKING_CHANNEL:
              return (0, d.jsx)(W, {
                message: t['error.SCClassMismatchOtherBooking'],
              });
            case ie.INELIGIBLE_PNR:
              return (0, d.jsx)(W, { message: t['error.ineligiblePNR'] });
            case ie.FULLY_FLOWN:
              return (0, d.jsx)(W, { message: t['error.fullyFlown'] });
            case ie.INVALID_PNR:
              return (0, d.jsx)(W, { message: t['error.noBookingFound'] });
            case ie.PURGED_PNR:
              return (0, d.jsx)(W, { message: t['error.purgedPNR'] });
            case ie.OPEN_TICKET_ERROR:
              return (0, d.jsx)(W, { message: t['error.openTicketError'] });
            case ie.INPUTERROR:
              return (0, d.jsx)(W, { message: t['error.inputError'] });
            case ie.PNRANCILLARYELEMENTCHECK:
              return (0, d.jsx)(W, {
                message: t['error.ancillaryElementCheckPNR'],
              });
            case ie.PASSENGERNOTELIGIBLE:
              return (0, d.jsx)(W, {
                message: t['error.passengerNotEligible'],
              });
            case ie.TAX_PNR:
              return (0, d.jsx)(W, { message: t['error.invalidTax'] });
            case ie.NON_ADULT_PASSENGER:
              return (0, d.jsx)(W, { message: t['error.nonAdultPax'] });
            case ie.NON_SQ_OR_MI:
              return (0, d.jsx)(W, { message: t['error.nonSQMI'] });
            case ie.EMPTY_CURRENCY:
              return (0, d.jsx)(W, { message: t['error.emptyCurrency'] });
            case ie.GROUPBOOKING_INVALID_FIRSTNAME:
              return (0, d.jsx)(W, { message: t['error.invalid.firstName'] });
            case ie.GROUPBOOKING_MULTIPLE_NAMES:
              return (0, d.jsx)(W, { message: t['error.multipleFirstName'] });
            case ie.GROUPBOOKING_MULTIPLE_LASTNAME:
              return (0, d.jsx)(W, {
                message: t['error.multipleNamesWithSameLastName'],
              });
            case ie.UNMAPPED_MIDDLEWARE_ERROR:
              return (0, d.jsx)(W, {
                message: t['error.unmappedMiddlewareError'],
              });
            case ie.PNR_OFFLINE_HANDLING_ERROR:
              return (0, d.jsx)(W, {
                message: t['error.pnrOfflineHandlingError'],
              });
            case ie.ERROR_SECURED_PNR:
              return (0, d.jsx)(W, { message: t['error.securedPNR'] });
            case ie.ERROR_SESSION_EXPIRED_MESSAGE:
              return (0, d.jsx)(W, { message: t['error.sessionExipred'] });
            case ie.ERROR_LAST_NAME_NOT_FOUND:
              return (0, d.jsx)(W, { message: t['error.lastNameNotFound'] });
            case ie.ASYNC_FAILURE:
              return (0, d.jsx)(W, {
                message: t['error.asyncFailure'].replace('{0}', n),
              });
            case ie.OTHER_BOOKING_CHANNEL_SCHEDULE_CHANGE_ERROR:
              return (0, d.jsx)(W, {
                message: t['error.otherBookingChannelScheduleChange'],
              });
            case ie.PURE_SCOOT_BOOKING:
              return (0, d.jsx)(W, {
                message: t['error.pureScootBooking'].replace(
                  '{0}',
                  '<img\n        src="/assets/images/svg/icons/external-link.svg"\n        alt="external-link"/>',
                ),
              });
            case ie.GB_PAXCOUNT_ABOVE_THRESHOLD:
              return (0, d.jsx)(W, {
                message: t['error.gb.paxcount.above.threshold'],
              });
            default:
              return xe(e, t);
          }
        },
        xe = function (e, t) {
          return e === ie.OPEN_TICKET_PNR_RETRIEVAL_ERROR
            ? (0, d.jsx)(W, { message: t['error.ssra.open.pnr.segments'] })
            : e === ie.ERROR_BLOCKED_PNR
            ? (0, d.jsx)(W, { message: t['error.blk.pnr.message'] })
            : (0, d.jsx)(W, { message: t['error.unmappedMiddlewareError'] });
        },
        ye = n(12387),
        we = n(35749),
        Le = n(69898),
        Ie = n(68912);
      function Se(e) {
        var t = e.redirectToOverviewPage,
          n = e.setOverviewData,
          o = e.setCreditCheckData,
          l = e.isFormPost,
          c = (0, Le.useRouter)(),
          u = s.useState(ie.NONE),
          f = (0, a.Z)(u, 2),
          _ = f[0],
          p = f[1],
          m = s.useState(se.NONE),
          g = (0, a.Z)(m, 2),
          v = g[0],
          E = g[1],
          R = s.useContext(h.ko),
          N = R.setPageLoading,
          b = R.locale,
          O = R.country,
          x = s.useContext(h.Jj)['feature.GDSOverviewRedirect.switch'],
          y = (function () {
            var e = (0, r.Z)(
              i().mark(function e(t) {
                var n, r;
                return i().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (n = t.firstName),
                          (r = t.noFirstName),
                          L({
                            locale: b,
                            firstName: n,
                            type: r
                              ? q.GROUP_BOOKING_NO_FIRSTNAME
                              : q.GROUP_BOOKING,
                            country: O,
                          });
                      case 2:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          w = (function () {
            var e = (0, r.Z)(
              i().mark(function e(t) {
                var n, r;
                return i().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((n = t.lastName), (r = t.lastNames), N(!0), !x)) {
                          e.next = 6;
                          break;
                        }
                        L({
                          locale: b,
                          lastName: n,
                          type: q.OFFLINE_BOOKING,
                          country: O,
                          lastNames: r,
                        }),
                          (e.next = 10);
                        break;
                      case 6:
                        return (
                          (e.next = 8),
                          (0, we.we)(
                            t.lastName,
                            t.pnr,
                            le.OFFLINE_BOOKING_POPUP,
                            '',
                            t.lastNames,
                          )
                        );
                      case 8:
                        e.sent
                          ? (p(ie.INVALID_PNR), E(se.NONE), N(!1))
                          : (window.location.href = '/manage-booking.form');
                      case 10:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          L = (function () {
            var e = (0, r.Z)(
              i().mark(function e(t) {
                var o, s, l, u, f;
                return i().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          N(!0),
                          E(se.NONE),
                          p(ie.NONE),
                          (o = (function () {
                            var e = (0, r.Z)(
                              i().mark(function e(t) {
                                var n, r, a;
                                return i().wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            '/managebooking/api/overviewpagedata',
                                            (n = {
                                              method: 'POST',
                                              headers: {
                                                'Content-Type':
                                                  'application/json',
                                              },
                                              body: JSON.stringify(t),
                                            }),
                                            (e.prev = 2),
                                            (e.next = 5),
                                            fetch(
                                              '/managebooking/api/overviewpagedata',
                                              n,
                                            )
                                          );
                                        case 5:
                                          return (
                                            (r = e.sent), (e.next = 8), r.json()
                                          );
                                        case 8:
                                          return (
                                            (a = e.sent), e.abrupt('return', a)
                                          );
                                        case 12:
                                          return (
                                            (e.prev = 12),
                                            (e.t0 = e.catch(2)),
                                            e.abrupt('return', void 0)
                                          );
                                        case 15:
                                        case 'end':
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  null,
                                  [[2, 12]],
                                );
                              }),
                            );
                            return function (t) {
                              return e.apply(this, arguments);
                            };
                          })()),
                          (e.next = 6),
                          Promise.all([o(t)])
                        );
                      case 6:
                        (s = e.sent),
                          (l = (0, a.Z)(s, 1)),
                          (u = l[0]) && (0, we.Y5)(u)
                            ? (n(u),
                              (f =
                                null === u || void 0 === u
                                  ? void 0
                                  : u.sspsSpecialKey)
                                ? window.location.replace(
                                    ''
                                      .concat(
                                        'https://aws-saaturbouat.singaporeair.com/siapayment',
                                        '/',
                                      )
                                      .concat(f),
                                  )
                                : c.push('/#'))
                            : (null === u || void 0 === u
                                ? void 0
                                : u.error) ===
                              ye.a.GROUP_BOOKING_FIRST_NAME_REQUIRED
                            ? (E(se.GROUP_BOOKING_FIRST_NAME_REQUIRED), N(!1))
                            : (null === u || void 0 === u
                                ? void 0
                                : u.error) ===
                              ye.a
                                .OFFLINE_BOOKING_ALL_CORRECT_PAX_LAST_NAME_REQUIRED
                            ? (E(
                                se.OFFLINE_BOOKING_ALL_CORRECT_PAX_LAST_NAME_REQUIRED,
                              ),
                              N(!1))
                            : (null === u || void 0 === u
                                ? void 0
                                : u.error) ===
                              ye.a.OFFLINE_BOOKING_ALL_PAX_LAST_NAME_REQUIRED
                            ? (E(se.OFFLINE_BOOKING_ALL_PAX_LAST_NAME_REQUIRED),
                              N(!1))
                            : (null === u || void 0 === u
                                ? void 0
                                : u.error) ===
                              ye.a.GROUPBOOKING_INVALID_FIRSTNAME
                            ? (p(ie.GROUPBOOKING_INVALID_FIRSTNAME), N(!1))
                            : (null === u || void 0 === u
                                ? void 0
                                : u.error) === ye.a.GROUPBOOKING_MULTIPLE_NAMES
                            ? (p(ie.GROUPBOOKING_MULTIPLE_NAMES), N(!1))
                            : (null === u || void 0 === u
                                ? void 0
                                : u.error) ===
                              ye.a.GROUPBOOKING_MULTIPLE_LASTNAME
                            ? (p(ie.GROUPBOOKING_MULTIPLE_LASTNAME), N(!1))
                            : (null === u || void 0 === u
                                ? void 0
                                : u.error) === ye.a.ASYNC_FAILURE
                            ? (p(ie.ASYNC_FAILURE), N(!1))
                            : (null === u || void 0 === u
                                ? void 0
                                : u.error) ===
                              ye.a
                                .SC_ERROR_CHECKED_IN_ARO_INTERNET_BOOKING_CHANNEL
                            ? (p(
                                ie.SC_ERROR_CHECKED_IN_ARO_INTERNET_BOOKING_CHANNEL,
                              ),
                              N(!1))
                            : (null === u || void 0 === u
                                ? void 0
                                : u.error) ===
                              ye.a.SC_ERROR_CHECKED_IN_OTHER_BOOKING_CHANNEL
                            ? (p(ie.SC_ERROR_CHECKED_IN_OTHER_BOOKING_CHANNEL),
                              N(!1))
                            : (null === u || void 0 === u
                                ? void 0
                                : u.error) ===
                              ye.a
                                .SC_ERROR_CLASS_MISMATCH_ARO_INTERNET_BOOKING_CHANNEL
                            ? (p(
                                ie.SC_ERROR_CLASS_MISMATCH_ARO_INTERNET_BOOKING_CHANNEL,
                              ),
                              N(!1))
                            : (null === u || void 0 === u
                                ? void 0
                                : u.error) ===
                              ye.a.SC_ERROR_CLASS_MISMATCH_OTHER_BOOKING_CHANNEL
                            ? (p(
                                ie.SC_ERROR_CLASS_MISMATCH_OTHER_BOOKING_CHANNEL,
                              ),
                              N(!1))
                            : (null === u || void 0 === u
                                ? void 0
                                : u.error) === ye.a.SMF_SCHEDULE_CHANGE_ERROR
                            ? (p(ie.SMF_SCHEDULE_CHANGE_ERROR), N(!1))
                            : (null === u || void 0 === u
                                ? void 0
                                : u.error) ===
                              ye.a.NON_SMF_SCHEDULE_CHANGE_ERROR
                            ? (p(ie.NON_SMF_SCHEDULE_CHANGE_ERROR), N(!1))
                            : (null === u || void 0 === u
                                ? void 0
                                : u.error) ===
                              ye.a.OTHER_BOOKING_CHANNEL_SCHEDULE_CHANGE_ERROR
                            ? (p(
                                ie.OTHER_BOOKING_CHANNEL_SCHEDULE_CHANGE_ERROR,
                              ),
                              N(!1))
                            : (null === u || void 0 === u
                                ? void 0
                                : u.error) === ye.a.FULLY_FLOWN
                            ? (p(ie.FULLY_FLOWN), N(!1))
                            : (null === u || void 0 === u
                                ? void 0
                                : u.error) === ye.a.PURE_SCOOT_BOOKING
                            ? (p(ie.PURE_SCOOT_BOOKING), N(!1))
                            : (null === u || void 0 === u
                                ? void 0
                                : u.error) === ye.a.GB_PAXCOUNT_ABOVE_THRESHOLD
                            ? (p(ie.GB_PAXCOUNT_ABOVE_THRESHOLD), N(!1))
                            : (null === u || void 0 === u
                                ? void 0
                                : u.error) === ye.a.ERROR_BLOCKED_PNR
                            ? (p(ie.ERROR_BLOCKED_PNR), N(!1))
                            : (null === u || void 0 === u
                                ? void 0
                                : u.error) === ye.a.PURGED_PNR
                            ? (p(ie.PURGED_PNR), N(!1))
                            : (null === u || void 0 === u
                                ? void 0
                                : u.error) ===
                              ye.a.OPEN_TICKET_PNR_RETRIEVAL_ERROR
                            ? (p(ie.OPEN_TICKET_PNR_RETRIEVAL_ERROR), N(!1))
                            : (null === u || void 0 === u
                                ? void 0
                                : u.error) === ye.a.INVALID_PNR ||
                              (null === u || void 0 === u
                                ? void 0
                                : u.error) === ye.a.ALTEA_ERROR ||
                              (null === u || void 0 === u
                                ? void 0
                                : u.error) === ye.a.ERETAIL_ERROR ||
                              (null === u || void 0 === u
                                ? void 0
                                : u.error) === ye.a.INVALID_BACKEND_RESPONSE
                            ? (p(ie.INVALID_PNR), N(!1))
                            : (p(ie.UNMAPPED_MIDDLEWARE_ERROR), N(!1));
                      case 10:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          I = (function () {
            var e = (0, r.Z)(
              i().mark(function e(t) {
                var n, r, a;
                return i().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        N(!0),
                          '/managebooking/api/creditcheckdata',
                          (n = {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(t),
                          }),
                          (r = function (e) {
                            o(e), c.push('/managebooking/flightcreditcheck');
                          }),
                          (a = function (e) {
                            e && 'INELIGIBLE_PNR' === e.error
                              ? (p(ie.INELIGIBLE_PNR), N(!1))
                              : e && 'INELIGIBLE_NEW_PNR' === e.error
                              ? L(t)
                              : e && 'INPUTERROR' === e.error
                              ? (p(ie.INPUTERROR), N(!1))
                              : e && 'PNRANCILLARYELEMENTCHECK' === e.error
                              ? (p(ie.PNRANCILLARYELEMENTCHECK), N(!1))
                              : e && 'PASSENGERNOTELIGIBLE' === e.error
                              ? (p(ie.PASSENGERNOTELIGIBLE), N(!1))
                              : e && 'NON_ADULT_PASSENGER' === e.error
                              ? (p(ie.NON_ADULT_PASSENGER), N(!1))
                              : e && 'NON_SQ_OR_MI' === e.error
                              ? (p(ie.NON_SQ_OR_MI), N(!1))
                              : e && 'EMPTY_CURRENCY' === e.error
                              ? (p(ie.EMPTY_CURRENCY), N(!1))
                              : e && 'TAX_PNR' === e.error
                              ? (p(ie.TAX_PNR), N(!1))
                              : (p(ie.INVALID_PNR), N(!1));
                          }),
                          (0, we.rQ)(
                            '/managebooking/api/creditcheckdata',
                            n,
                            r,
                            a,
                          );
                      case 6:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        s.useEffect(
          function () {
            if (t) {
              var e = t.lastName,
                n = t.pnr,
                a = (function () {
                  var t = (0, r.Z)(
                    i().mark(function t() {
                      return i().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), (0, we.xv)(e, n, 'false');
                            case 2:
                              return t.abrupt('return', t.sent);
                            case 3:
                            case 'end':
                              return t.stop();
                          }
                      }, t);
                    }),
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })();
              a().then(function (e) {
                e
                  ? (e === ye.a.NON_SMF_SCHEDULE_CHANGE_ERROR
                      ? p(ie.NON_SMF_SCHEDULE_CHANGE_ERROR)
                      : e === ye.a.SMF_SCHEDULE_CHANGE_ERROR
                      ? p(ie.SMF_SCHEDULE_CHANGE_ERROR)
                      : e === ye.a.FULLY_FLOWN
                      ? p(ie.FULLY_FLOWN)
                      : e === ye.a.INVALID_PNR
                      ? p(ie.INVALID_PNR)
                      : e === ye.a.PURGED_PNR
                      ? p(ie.PURGED_PNR)
                      : e === ye.a.OPEN_TICKET_ERROR
                      ? p(ie.OPEN_TICKET_ERROR)
                      : e === ye.a.GROUP_BOOKING_FIRST_NAME_REQUIRED
                      ? E(se.GROUP_BOOKING_FIRST_NAME_REQUIRED)
                      : e === ye.a.GROUPBOOKING_MULTIPLE_LASTNAME
                      ? p(ie.GROUPBOOKING_MULTIPLE_LASTNAME)
                      : e === ye.a.OFFLINE_BOOKING_ALL_PAX_LAST_NAME_REQUIRED
                      ? E(se.OFFLINE_BOOKING_ALL_PAX_LAST_NAME_REQUIRED)
                      : e ===
                        ye.a.OFFLINE_BOOKING_ALL_CORRECT_PAX_LAST_NAME_REQUIRED
                      ? E(se.OFFLINE_BOOKING_ALL_CORRECT_PAX_LAST_NAME_REQUIRED)
                      : e === ye.a.GB_PAXCOUNT_ABOVE_THRESHOLD
                      ? p(ie.GB_PAXCOUNT_ABOVE_THRESHOLD)
                      : e === ye.a.ERROR_BLOCKED_PNR
                      ? p(ie.ERROR_BLOCKED_PNR)
                      : p(ie.INVALID_PNR),
                    N(!1))
                  : (p(ie.INVALID_PNR), N(!1));
              });
            }
          },
          [t, N],
        );
        var S = (0, Ie.i)().height;
        return l
          ? (0, d.jsx)('div', { style: { height: S } })
          : (0, d.jsx)(be, {
              requireExtraInfoType: v,
              errorType: _,
              validateGroupBookingFirstName: y,
              validateOfflineBookingLastNames: w,
              getOverviewPageData: L,
              getCreditCheckData: I,
            });
      }
      !(function (e) {
        (e[(e.NONE = 0)] = 'NONE'),
          (e[(e.INVALID_PNR = 1)] = 'INVALID_PNR'),
          (e[(e.SMF_SCHEDULE_CHANGE_ERROR = 2)] = 'SMF_SCHEDULE_CHANGE_ERROR'),
          (e[(e.NON_SMF_SCHEDULE_CHANGE_ERROR = 3)] =
            'NON_SMF_SCHEDULE_CHANGE_ERROR'),
          (e[(e.INELIGIBLE_PNR = 4)] = 'INELIGIBLE_PNR'),
          (e[(e.INELIGIBLE_NEW_PNR = 5)] = 'INELIGIBLE_NEW_PNR'),
          (e[(e.FULLY_FLOWN = 6)] = 'FULLY_FLOWN'),
          (e[(e.PURGED_PNR = 7)] = 'PURGED_PNR'),
          (e[(e.INPUTERROR = 8)] = 'INPUTERROR'),
          (e[(e.PNRANCILLARYELEMENTCHECK = 9)] = 'PNRANCILLARYELEMENTCHECK'),
          (e[(e.PASSENGERNOTELIGIBLE = 10)] = 'PASSENGERNOTELIGIBLE'),
          (e[(e.TAX_PNR = 11)] = 'TAX_PNR'),
          (e[(e.NON_ADULT_PASSENGER = 12)] = 'NON_ADULT_PASSENGER'),
          (e[(e.NON_SQ_OR_MI = 13)] = 'NON_SQ_OR_MI'),
          (e[(e.OPEN_TICKET_ERROR = 14)] = 'OPEN_TICKET_ERROR'),
          (e[(e.GROUPBOOKING_INVALID_FIRSTNAME = 15)] =
            'GROUPBOOKING_INVALID_FIRSTNAME'),
          (e[(e.GROUPBOOKING_MULTIPLE_NAMES = 16)] =
            'GROUPBOOKING_MULTIPLE_NAMES'),
          (e[(e.GROUPBOOKING_MULTIPLE_LASTNAME = 17)] =
            'GROUPBOOKING_MULTIPLE_LASTNAME'),
          (e[(e.UNMAPPED_MIDDLEWARE_ERROR = 18)] = 'UNMAPPED_MIDDLEWARE_ERROR'),
          (e[(e.PNR_OFFLINE_HANDLING_ERROR = 19)] =
            'PNR_OFFLINE_HANDLING_ERROR'),
          (e[(e.ERROR_SESSION_EXPIRED_MESSAGE = 20)] =
            'ERROR_SESSION_EXPIRED_MESSAGE'),
          (e[(e.ERROR_SECURED_PNR = 21)] = 'ERROR_SECURED_PNR'),
          (e[(e.ERROR_LAST_NAME_NOT_FOUND = 22)] = 'ERROR_LAST_NAME_NOT_FOUND'),
          (e[(e.ASYNC_FAILURE = 23)] = 'ASYNC_FAILURE'),
          (e[(e.SC_ERROR_CHECKED_IN_ARO_INTERNET_BOOKING_CHANNEL = 24)] =
            'SC_ERROR_CHECKED_IN_ARO_INTERNET_BOOKING_CHANNEL'),
          (e[(e.SC_ERROR_CHECKED_IN_OTHER_BOOKING_CHANNEL = 25)] =
            'SC_ERROR_CHECKED_IN_OTHER_BOOKING_CHANNEL'),
          (e[(e.SC_ERROR_CLASS_MISMATCH_ARO_INTERNET_BOOKING_CHANNEL = 26)] =
            'SC_ERROR_CLASS_MISMATCH_ARO_INTERNET_BOOKING_CHANNEL'),
          (e[(e.SC_ERROR_CLASS_MISMATCH_OTHER_BOOKING_CHANNEL = 27)] =
            'SC_ERROR_CLASS_MISMATCH_OTHER_BOOKING_CHANNEL'),
          (e[(e.OTHER_BOOKING_CHANNEL_SCHEDULE_CHANGE_ERROR = 28)] =
            'OTHER_BOOKING_CHANNEL_SCHEDULE_CHANGE_ERROR'),
          (e[(e.EMPTY_CURRENCY = 29)] = 'EMPTY_CURRENCY'),
          (e[(e.PURE_SCOOT_BOOKING = 30)] = 'PURE_SCOOT_BOOKING'),
          (e[(e.GB_PAXCOUNT_ABOVE_THRESHOLD = 31)] =
            'GB_PAXCOUNT_ABOVE_THRESHOLD'),
          (e[(e.ERROR_BLOCKED_PNR = 32)] = 'ERROR_BLOCKED_PNR'),
          (e[(e.OPEN_TICKET_PNR_RETRIEVAL_ERROR = 33)] =
            'OPEN_TICKET_PNR_RETRIEVAL_ERROR'),
          (e[(e.ALTEA_ERROR = 34)] = 'ALTEA_ERROR'),
          (e[(e.ERETAIL_ERROR = 35)] = 'ERETAIL_ERROR'),
          (e[(e.INVALID_BACKEND_RESPONSE = 36)] = 'INVALID_BACKEND_RESPONSE');
      })(ie || (ie = {})),
        (function (e) {
          (e[(e.NONE = 0)] = 'NONE'),
            (e[(e.GROUP_BOOKING_FIRST_NAME_REQUIRED = 1)] =
              'GROUP_BOOKING_FIRST_NAME_REQUIRED'),
            (e[(e.OFFLINE_BOOKING_ALL_PAX_LAST_NAME_REQUIRED = 2)] =
              'OFFLINE_BOOKING_ALL_PAX_LAST_NAME_REQUIRED'),
            (e[(e.OFFLINE_BOOKING_ALL_CORRECT_PAX_LAST_NAME_REQUIRED = 3)] =
              'OFFLINE_BOOKING_ALL_CORRECT_PAX_LAST_NAME_REQUIRED');
        })(se || (se = {})),
        (function (e) {
          (e[(e.GROUP_BOOKING_POPUP = 0)] = 'GROUP_BOOKING_POPUP'),
            (e[(e.OFFLINE_BOOKING_POPUP = 1)] = 'OFFLINE_BOOKING_POPUP');
        })(le || (le = {}));
    },
    55489: function (e, t, n) {
      'use strict';
      n.d(t, {
        W: function () {
          return d;
        },
      });
      var r = n(59499),
        a = n(67294),
        o = n(94184),
        i = n.n(o),
        s = n(74122),
        l = n.n(s),
        c = n(85893);
      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      var d = (0, a.forwardRef)(function (e, t) {
        var n = e.isValid,
          r = void 0 === n || n,
          o = e.label,
          s = e.inputValue,
          u = e.onFocus,
          d = e.onBlur,
          _ = e.onChange,
          p = e.isAutoFocus,
          m = void 0 !== p && p,
          h = e.others,
          g = e.validityMessage,
          v = e.background,
          E = e.classes,
          R = e.children,
          N = e.isDisabled,
          b = (0, a.useState)(!1),
          O = b[0],
          x = b[1],
          y = !(!s && !O) ? l().floatLabel : l().nonFloatLabel,
          w = !r && l().invalidLabel,
          L = r ? '' : l().invalidInput,
          I = O ? l().focus : '',
          S = N ? l().disabled : '',
          C = N && l().disabledLabel,
          M = N
            ? l().disabledBackground
            : 'white' === v
            ? l().whiteBackground
            : l().greyBackground;
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsx)('div', {
              className: i()(
                l().wrapper,
                L,
                I,
                M,
                S,
                null === E || void 0 === E ? void 0 : E.wrapper,
                'wrapper',
              ),
              children: (0, c.jsxs)('label', {
                className: i()(l().label, 'label'),
                children: [
                  (0, c.jsx)('span', {
                    className: i()(C, l().labelText, y, w, 'labelText'),
                    children: o,
                  }),
                  (0, c.jsx)(
                    'input',
                    f(
                      {
                        value: s,
                        onChange: function (e) {
                          _ && _(e);
                        },
                        onFocus: function (e) {
                          x(!0), u && u(e);
                        },
                        onBlur: function (e) {
                          x(!1), d && d(e);
                        },
                        ref: t,
                        disabled: N,
                        autoFocus: m,
                        className: i()(
                          null === E || void 0 === E ? void 0 : E.root,
                          'root',
                        ),
                        type: 'text',
                      },
                      h,
                    ),
                  ),
                ],
              }),
            }),
            r
              ? null
              : (0, c.jsx)('div', {
                  className: i()(l().errorMessage, 'errorMessage'),
                  children: g,
                }),
            R,
          ],
        });
      });
      d.displayName = 'InputBox';
    },
    26974: function (e, t, n) {
      'use strict';
      n.d(t, {
        q: function () {
          return d;
        },
      });
      var r = n(16835),
        a = n(67294),
        o = n(4937),
        i = n.n(o),
        s = n(94184),
        l = n.n(s),
        c = n(68912),
        u = n(58509),
        f = n(85893);
      function d(e) {
        var t,
          n,
          o,
          s,
          d = e.children,
          _ = e.onClickClose,
          p = e.childrenWrapperWidth,
          m = e.classes,
          h = e.marginStyle,
          g = e.hideCloselIcon,
          v = void 0 !== g && g,
          E = e.isfullScreenRequired,
          R = -(p + 80) / 2 + 'px',
          N = (0, c.i)(),
          b = a.useRef(null),
          O = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
        a.useEffect(function () {
          if (window && b.current)
            return (
              (0, u.Qp)(b.current),
              O && (document.body.style.overflow = 'hidden'),
              function () {
                (0, u.tP)(), O && (document.body.style.overflow = 'auto');
              }
            );
        }, []);
        var x = a.useState(0),
          y = (0, r.Z)(x, 2),
          w = y[0],
          L = y[1],
          I = w <= N.height ? -w / 2 + 'px' : -N.height / 2 + 'px';
        return (
          a.useEffect(
            function () {
              window && b.current && L(b.current.clientHeight);
            },
            [d],
          ),
          (0, f.jsx)('div', {
            onClick: e.closeOnClickOut ? _ : void 0,
            className: l()(i().modal, 'modal'),
            children: (0, f.jsxs)('section', {
              onClick: function (e) {
                e.stopPropagation();
              },
              className: l()(
                E ? i().modalFullScreen : i().modalMain,
                null === m || void 0 === m ? void 0 : m.modalWrapper,
                'modalMain',
              ),
              style: {
                marginLeft: E
                  ? 0
                  : null !==
                      (t = null === h || void 0 === h ? void 0 : h.left) &&
                    void 0 !== t
                  ? t
                  : R,
                marginRight: E
                  ? 0
                  : null !==
                      (n = null === h || void 0 === h ? void 0 : h.right) &&
                    void 0 !== n
                  ? n
                  : R,
                marginTop: E
                  ? 0
                  : null !==
                      (o = null === h || void 0 === h ? void 0 : h.top) &&
                    void 0 !== o
                  ? o
                  : I,
                marginBottom: E
                  ? 0
                  : null !==
                      (s = null === h || void 0 === h ? void 0 : h.bottom) &&
                    void 0 !== s
                  ? s
                  : I,
              },
              ref: b,
              children: [
                !v &&
                  (0, f.jsx)('em', {
                    onClick: _,
                    className: l()(i().cancelIcon, 'cancelIcon'),
                  }),
                (0, f.jsx)('div', {
                  className: l()(
                    i().popUpChildrenWrapper,
                    'popUpChildrenWrapper',
                  ),
                  style: { width: 0 === p ? 'auto' : p + 'px' },
                  children: d,
                }),
              ],
            }),
          })
        );
      }
    },
    67396: function (e, t, n) {
      'use strict';
      n.d(t, {
        H: function () {
          return u;
        },
      });
      var r = n(67294),
        a = n(12979),
        o = n.n(a),
        i = n(94184),
        s = n.n(i),
        l = n(58509),
        c = n(85893);
      function u(e) {
        var t = e.children,
          n = e.onClickClose,
          a = e.width,
          i = r.useRef(null);
        return (
          r.useEffect(function () {
            if (window && i.current)
              return (
                (0, l.Qp)(i.current),
                function () {
                  (0, l.tP)();
                }
              );
          }, []),
          r.useEffect(
            function () {
              window && i.current && (i.current.scrollTop = 0);
            },
            [t],
          ),
          (0, c.jsx)('div', {
            className: s()(o().modal, 'modal'),
            ref: i,
            children: (0, c.jsxs)('section', {
              className: s()(o().modalMain, 'modalMain'),
              style: { width: null !== a && void 0 !== a ? a : 'auto' },
              children: [
                (0, c.jsx)('em', {
                  onClick: n,
                  className: s()(o().cancelIcon, 'cancelIcon'),
                }),
                t,
              ],
            }),
          })
        );
      }
    },
    50030: function (e, t, n) {
      'use strict';
      n.d(t, {
        X: function () {
          return l;
        },
      });
      var r = n(93039),
        a = n.n(r),
        o = n(94184),
        i = n.n(o),
        s = n(85893),
        l = function (e) {
          var t = e.isChecked,
            n = e.label,
            r = e.handleChange,
            o = e.id,
            l = e.isDisabled,
            c = e.isHtmlContent;
          return (0, s.jsxs)('div', {
            className: i()(a().checkboxContainer, 'checkBoxContainer'),
            children: [
              (0, s.jsx)('input', {
                className: i()(a().styledCheckbox, 'styledCheckBox'),
                id: o,
                type: 'checkbox',
                'data-testid': o,
                checked: t,
                onChange: r,
                disabled: l,
                name: n,
              }),
              c
                ? (0, s.jsx)('label', {
                    htmlFor: o,
                    dangerouslySetInnerHTML: { __html: n },
                  })
                : (0, s.jsx)('label', { htmlFor: o, children: n }),
            ],
          });
        };
    },
    35749: function (e, t, n) {
      'use strict';
      n.d(t, {
        C3: function () {
          return f;
        },
        Ld: function () {
          return L;
        },
        MG: function () {
          return b;
        },
        Y5: function () {
          return p;
        },
        rQ: function () {
          return d;
        },
        s4: function () {
          return y;
        },
        wK: function () {
          return E;
        },
        we: function () {
          return m;
        },
        x4: function () {
          return O;
        },
        xh: function () {
          return x;
        },
        xv: function () {
          return g;
        },
        y_: function () {
          return R;
        },
      });
      var r = n(50029),
        a = n(87794),
        o = n.n(a),
        i = (n(76489), n(12387)),
        s = n(13456),
        l = n(27484),
        c = n.n(l),
        u = n.g;
      var f = function (e) {
        var t = 'mins',
          n = Math.floor(e / 3600),
          r = ('0' + (e % 3600) / 60).slice(-2);
        if (n) {
          var a = ('0' + n).slice(-2);
          return ''.concat(a).concat('hrs', ' ').concat(r).concat(t);
        }
        return ''.concat(r).concat(t);
      };
      function d(e, t, n, r) {
        return _.apply(this, arguments);
      }
      function _() {
        return (_ = (0, r.Z)(
          o().mark(function e(t, n, r, a) {
            var i, s;
            return o().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), fetch(t, n);
                    case 3:
                      return (i = e.sent), (e.next = 6), i.json();
                    case 6:
                      p((s = e.sent)) ? r(s) : a(s, void 0), (e.next = 13);
                      break;
                    case 10:
                      (e.prev = 10), (e.t0 = e.catch(0)), a(void 0, e.t0);
                    case 13:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 10]],
            );
          }),
        )).apply(this, arguments);
      }
      function p(e) {
        return 1 !== Object.keys(e).length || void 0 === e.error;
      }
      function m(e, t, n, r, a) {
        return h.apply(this, arguments);
      }
      function h() {
        return (h = (0, r.Z)(
          o().mark(function e(t, n, r, a, l) {
            var c, u, f, d, _, p, m, h;
            return o().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (-1 !== window.location.href.indexOf('singaporeair')) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt('return', void 0);
                    case 2:
                      if (
                        ((c = new Headers()).append(
                          'Content-Type',
                          'application/x-www-form-urlencoded',
                        ),
                        (u = new URLSearchParams()).append(
                          'isHomePageSearch',
                          'true',
                        ),
                        u.append('pnr', n),
                        u.append('lastName', t),
                        u.append('isManageBooking', 'true'),
                        u.append('isCheckIn', 'false'),
                        u.append('_eventId_validatePNR', ''),
                        u.append('ajaxError', 'ajaxError'),
                        u.append('ajaxian', 'true'),
                        u.append('isSkipPopup', 'true'),
                        r === s.kQ.GROUP_BOOKING_POPUP)
                      )
                        u.append(
                          'firstName',
                          null !== a && void 0 !== a ? a : '',
                        );
                      else if (r === s.kQ.OFFLINE_BOOKING_POPUP)
                        for (
                          u.append('_eventId_retrieveOffline', 'Find Booking'),
                            u.append('paxNames[0]', t),
                            f = 1;
                          f < 9;
                          f++
                        )
                          (d = 'lastName'.concat(f)),
                            u.append('paxNames['.concat(f, ']'), l ? l[d] : '');
                      return (
                        (_ = {
                          method: 'POST',
                          headers: c,
                          body: u,
                          redirect: 'follow',
                        }),
                        (e.prev = 16),
                        (e.next = 19),
                        fetch('/mp-manageBooking-flow.form', _)
                      );
                    case 19:
                      if (
                        ((p = e.sent),
                        (m = p.url),
                        -1 !== (h = m.toUpperCase()).indexOf('ERROR'))
                      ) {
                        e.next = 26;
                        break;
                      }
                      return e.abrupt('return', void 0);
                    case 26:
                      if (-1 === h.indexOf('GROUPBOOKING.INVALID.FIRSTNAME')) {
                        e.next = 30;
                        break;
                      }
                      return e.abrupt(
                        'return',
                        i.a.GROUPBOOKING_INVALID_FIRSTNAME,
                      );
                    case 30:
                      return e.abrupt('return', i.a.UNEXPECTED_ERROR);
                    case 31:
                      e.next = 36;
                      break;
                    case 33:
                      return (
                        (e.prev = 33),
                        (e.t0 = e.catch(16)),
                        e.abrupt('return', i.a.UNEXPECTED_ERROR)
                      );
                    case 36:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              null,
              [[16, 33]],
            );
          }),
        )).apply(this, arguments);
      }
      function g(e, t, n) {
        return v.apply(this, arguments);
      }
      function v() {
        return (v = (0, r.Z)(
          o().mark(function e(t, n, r) {
            var a, s, l, c, u, f, d;
            return o().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (-1 !== window.location.href.indexOf('singaporeair')) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt('return', void 0);
                    case 2:
                      return (
                        (a = new Headers()).append(
                          'Content-Type',
                          'application/x-www-form-urlencoded',
                        ),
                        (s = new URLSearchParams()).append(
                          'isHomePageSearch',
                          'false',
                        ),
                        s.append('pnr', n),
                        s.append('lastName', t),
                        s.append('isManageBooking', 'true'),
                        s.append('isCheckIn', 'false'),
                        s.append('_eventId_validatePNR', ''),
                        s.append('ajaxError', 'ajaxError'),
                        s.append('ajaxian', 'true'),
                        s.append('ismbSecondaryLandingPage', 'true'),
                        s.append('isCreditCheck', r),
                        (l = {
                          method: 'POST',
                          headers: a,
                          body: s,
                          redirect: 'follow',
                        }),
                        (e.prev = 16),
                        (e.next = 19),
                        fetch('/mbEntry.form', l)
                      );
                    case 19:
                      if (
                        ((c = e.sent),
                        (u = c.url),
                        (f = c.redirected),
                        -1 !== (d = u.toUpperCase()).indexOf('ERROR') || f)
                      ) {
                        e.next = 26;
                        break;
                      }
                      return e.abrupt('return', void 0);
                    case 26:
                      if (-1 === d.indexOf('ISGROUPBOOKING=TRUE')) {
                        e.next = 30;
                        break;
                      }
                      return e.abrupt(
                        'return',
                        i.a.GROUP_BOOKING_FIRST_NAME_REQUIRED,
                      );
                    case 30:
                      if (-1 === d.indexOf('ISOFFLINEBOOKING=TRUE')) {
                        e.next = 34;
                        break;
                      }
                      return e.abrupt(
                        'return',
                        i.a.OFFLINE_BOOKING_ALL_PAX_LAST_NAME_REQUIRED,
                      );
                    case 34:
                      if (
                        -1 === d.indexOf('SCHEDULECHANGE.ALERTMESSAGE.HOLDPNR')
                      ) {
                        e.next = 38;
                        break;
                      }
                      return e.abrupt('return', i.a.SMF_SCHEDULE_CHANGE_ERROR);
                    case 38:
                      if (-1 === d.indexOf('SCHEDULECHANGE.ALERTMESSAGE')) {
                        e.next = 42;
                        break;
                      }
                      return e.abrupt(
                        'return',
                        i.a.NON_SMF_SCHEDULE_CHANGE_ERROR,
                      );
                    case 42:
                      if (
                        -1 ===
                        d.indexOf('MANAGEBOOKING.BOOKEDFLIGHTS.FULLYFLOWN')
                      ) {
                        e.next = 46;
                        break;
                      }
                      return e.abrupt('return', i.a.FULLY_FLOWN);
                    case 46:
                      if (-1 === d.indexOf('BOOKING.INVALID.REFERENCE')) {
                        e.next = 50;
                        break;
                      }
                      return e.abrupt('return', i.a.INVALID_PNR);
                    case 50:
                      if (-1 === d.indexOf('ERROR.OPEN.PNR.SEGMENTS')) {
                        e.next = 54;
                        break;
                      }
                      return e.abrupt('return', i.a.OPEN_TICKET_ERROR);
                    case 54:
                      if (-1 === d.indexOf('NOMATCH.PURGEDPNR')) {
                        e.next = 58;
                        break;
                      }
                      return e.abrupt('return', i.a.PURGED_PNR);
                    case 58:
                      if (-1 === d.indexOf('UNMAPPED.MIDDLEWARE.ERROR')) {
                        e.next = 62;
                        break;
                      }
                      return e.abrupt('return', i.a.UNMAPPED_MIDDLEWARE_ERROR);
                    case 62:
                      if (-1 === d.indexOf('PNR.OFFLINE.HANDLING.ERROR')) {
                        e.next = 66;
                        break;
                      }
                      return e.abrupt('return', i.a.PNR_OFFLINE_HANDLING_ERROR);
                    case 66:
                      if (-1 === d.indexOf('ERROR.SESSION.EXPIRED.MESSAGE')) {
                        e.next = 70;
                        break;
                      }
                      return e.abrupt(
                        'return',
                        i.a.ERROR_SESSION_EXPIRED_MESSAGE,
                      );
                    case 70:
                      if (-1 === d.indexOf('ERROR.SECURED.PNR')) {
                        e.next = 74;
                        break;
                      }
                      return e.abrupt('return', i.a.ERROR_SECURED_PNR);
                    case 74:
                      if (-1 === d.indexOf('ERROR.LAST.NAME.NOT.FOUND')) {
                        e.next = 78;
                        break;
                      }
                      return e.abrupt('return', i.a.ERROR_LAST_NAME_NOT_FOUND);
                    case 78:
                      if (-1 === d.indexOf('ASYNC.FAILURE')) {
                        e.next = 82;
                        break;
                      }
                      return e.abrupt('return', i.a.ASYNC_FAILURE);
                    case 82:
                      if (-1 === d.indexOf('GROUPBOOKING.MULTIPLE.FIRSTNAME')) {
                        e.next = 86;
                        break;
                      }
                      return e.abrupt(
                        'return',
                        i.a.GROUPBOOKING_MULTIPLE_NAMES,
                      );
                    case 86:
                      if (
                        -1 === d.indexOf('ERROR.GB.PAXCOUNT.ABOVE.THRESHOLD')
                      ) {
                        e.next = 90;
                        break;
                      }
                      return e.abrupt(
                        'return',
                        i.a.GB_PAXCOUNT_ABOVE_THRESHOLD,
                      );
                    case 90:
                      if (-1 === d.indexOf('GROUPBOOKING.MULTIPLE.LASTNAME')) {
                        e.next = 94;
                        break;
                      }
                      return e.abrupt(
                        'return',
                        i.a.GROUPBOOKING_MULTIPLE_LASTNAME,
                      );
                    case 94:
                      if (-1 === d.indexOf('ERROR.BLK.PNR.MESSAGE')) {
                        e.next = 98;
                        break;
                      }
                      return e.abrupt('return', i.a.ERROR_BLOCKED_PNR);
                    case 98:
                      if (-1 === d.indexOf('ERROR.SSRA.OPEN.PNR.SEGMENTS')) {
                        e.next = 102;
                        break;
                      }
                      return e.abrupt(
                        'return',
                        i.a.OPEN_TICKET_PNR_RETRIEVAL_ERROR,
                      );
                    case 102:
                      return e.abrupt('return', i.a.UNEXPECTED_ERROR);
                    case 103:
                      e.next = 108;
                      break;
                    case 105:
                      return (
                        (e.prev = 105),
                        (e.t0 = e.catch(16)),
                        e.abrupt('return', i.a.UNEXPECTED_ERROR)
                      );
                    case 108:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              null,
              [[16, 105]],
            );
          }),
        )).apply(this, arguments);
      }
      function E(e, t) {
        return (
          void 0 !== e &&
          void 0 !== t &&
          e in N &&
          -1 !== N[e].indexOf(t.toUpperCase())
        );
      }
      var R = function (e) {
          return (
            (u.window.dataLayer = u.window.dataLayer || []),
            u.window.dataLayer.push(e)
          );
        },
        N = {
          en_UK: [
            'AU',
            'SG',
            'BD',
            'BN',
            'KH',
            'CN',
            'HK',
            'IN',
            'ID',
            'JP',
            'MY',
            'MV',
            'MM',
            'NP',
            'NZ',
            'PH',
            'KR',
            'LK',
            'TW',
            'TH',
            'VN',
            'AT',
            'BE',
            'HR',
            'DK',
            'FR',
            'DE',
            'IE',
            'IT',
            'NL',
            'NO',
            'PL',
            'PT',
            'RU',
            'ES',
            'SE',
            'CH',
            'TR',
            'GB',
            'SA',
            'AE',
            'ZA',
            'BR',
            'CA',
            'US',
            'GR',
          ],
          zh_CN: ['CN', 'SG'],
          zh_TW: ['HK', 'TW'],
          in_ID: ['ID'],
          ja_JP: ['JP'],
          ko_KR: ['KR'],
          th_TH: ['TH'],
          de_DE: ['AT', 'DE', 'CH'],
          fr_FR: ['FR', 'CH'],
          it_IT: ['IT'],
          nl_NL: ['NL'],
          ru_RU: ['RU'],
          es_ES: ['ES'],
          pt_BR: ['BR'],
          vi_VN: ['VN'],
        },
        b = function (e) {
          var t = Math.floor(e / 3600),
            n = (e % 3600) / 60;
          if (t) {
            var r = ('0' + t).slice(-2);
            return t <= 9
              ? ''.concat(t).concat('h', ' ').concat(n).concat('m')
              : ''.concat(r).concat('h', ' ').concat(n).concat('m');
          }
          return ''.concat(n).concat('m');
        },
        O = function (e) {
          var t = 'MINS',
            n = Math.floor(e / 3600),
            r = ('0' + (e % 3600) / 60).slice(-2);
          if (n) {
            if (1 == n)
              return ''
                .concat(n)
                .concat('HR', ' ')
                .concat('00' !== r ? r : '')
                .concat('00' !== r ? t : '');
            if (n <= 9)
              return ''
                .concat(n)
                .concat('HRS', ' ')
                .concat('00' !== r ? r : '')
                .concat('00' !== r ? t : '');
            var a = ('0' + n).slice(-2);
            return ''
              .concat(a)
              .concat('HRS', ' ')
              .concat('00' !== r ? r : '')
              .concat('00' !== r ? t : '');
          }
          return ''.concat('00' !== r ? r : '').concat('00' !== r ? t : '');
        };
      function x(e, t) {
        return Object.keys(e).reduce(function (n, r) {
          return (n[r] = t(e[r])), n;
        }, {});
      }
      function y(e, t) {
        var n,
          r,
          a,
          o,
          i,
          s,
          l,
          c = document.querySelector(e);
        if (null != c) {
          var u = c.getElementsByTagName('a'),
            f = Array.prototype.slice.call(u);
          for (var d in f)
            if (((i = !1), (s = ''), (n = (l = f[d]).href))) {
              if (l.childElementCount) {
                if (
                  !(r = l.querySelector('.link-text')) ||
                  l.querySelector('.external_icon') ||
                  l.querySelector('.external')
                )
                  continue;
                if (t)
                  for (var _ in t)
                    if (((s = '.' + t[_]), (o = l.querySelector(s)))) {
                      (i = !0), (s = t[_]);
                      break;
                    }
              } else {
                if (
                  ((r = l),
                  l.querySelector('.external_icon') ||
                    l.classList.contains('external'))
                )
                  continue;
                if (t)
                  for (var p in t)
                    if (((s = t[p]), (o = l).classList.contains(s))) {
                      i = !0;
                      break;
                    }
              }
              (a = w(n, r, i)) &&
                (i
                  ? (o.classList.remove(s),
                    o.classList.add(a),
                    o.classList.add('external'))
                  : (r.classList.add('link-info'), (r.innerHTML += a)));
            }
        }
      }
      function w(e, t, n) {
        var r,
          a,
          o,
          i = '',
          s = window.getComputedStyle(t, null).color,
          l = 'external_icon',
          c = e.split('/');
        return (-1 == e.indexOf('singaporeair.com') && '/' != e.charAt(0)) ||
          (c.length > 0 && 'activities.singaporeair.com' == c[2])
          ? ('rgb(0, 0, 255)' == s ||
            'rgb(0, 115, 250)' == s ||
            'rgb(2, 84, 236)' == s ||
            'rgb(0, 38, 107)' == s
              ? ((o = 'link_with_blue_icon'),
                (r = '/assets/images/svg/icons/external-link.svg'),
                (a = l))
              : ((i = (function (e) {
                  var t, n, r;
                  e.match(/^rgb/)
                    ? ((t = (e = e.match(
                        /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/,
                      ))[1]),
                      (n = e[2]),
                      (r = e[3]))
                    : ((t =
                        (e +=
                          '0x' +
                          e.slice(1).replace(e.length < 5 && /./g, '$&$&')) >>
                        16),
                      (n = (e >> 8) & 255),
                      (r = 255 & e));
                  if (
                    Math.sqrt(t * t * 0.299 + n * n * 0.587 + r * r * 0.114) >
                    127.5
                  )
                    return 'light';
                  return 'dark';
                })(s)),
                'light' == i
                  ? ((o = 'link_with_white_icon'),
                    (r =
                      '/saar5/assets/images/svg/icons/icon-external_link_white.svg'))
                  : ((o = 'link_with_black_icon'),
                    (r =
                      '/saar5/assets/images/svg/icons/ic_external-link-black.svg')),
                (a = l)),
            n
              ? o
              : '<img src="' +
                r +
                '" class="' +
                a +
                '" alt="external link icon"/>')
          : '';
      }
      function L(e, t) {
        var r = t.substring(0, t.lastIndexOf('_')).toLowerCase();
        switch (t.toLowerCase()) {
          case 'zh_cn':
          case 'zh_tw':
            n(32009);
            break;
          case 'de_de':
            n(80790);
            break;
          case 'es_es':
            n(67763);
            break;
          case 'fr_fr':
            n(96023);
            break;
          case 'in_id':
            n(83783);
            break;
          case 'ja_jp':
            n(76831);
            break;
          case 'ko_kr':
            n(19132);
            break;
          case 'nl_nl':
            n(99182);
            break;
          case 'pt_br':
            n(15001);
            break;
          case 'ru_ru':
            n(70600);
            break;
          case 'th_th':
            n(62019);
            break;
          case 'it_it':
            n(15551);
            break;
          case 'vi_vn':
            n(37553);
            break;
          default:
            n(25054);
        }
        return 'zh_TW' == t || 'zh_CN' == t || 'ja_JP' == t
          ? c()(e).locale(r).format('YYYY\u5e74MM\u6708DD\u65e5')
          : 'ko_KR' == t
          ? c()(e).locale(r).format('YYYY\ub144MM\uc6d4DD\uc77c')
          : c()(e).locale(r).format('DD MMM YYYY');
      }
    },
    68912: function (e, t, n) {
      'use strict';
      n.d(t, {
        i: function () {
          return a;
        },
      });
      var r = n(67294);
      function a() {
        var e = (0, r.useState)({ width: 0, height: 0 }),
          t = e[0],
          n = e[1];
        return (
          (0, r.useEffect)(function () {
            function e() {
              n({ width: window.innerWidth, height: window.innerHeight });
            }
            return (
              window.addEventListener('resize', e),
              e(),
              function () {
                return window.removeEventListener('resize', e);
              }
            );
          }, []),
          t
        );
      }
    },
    39809: function (e, t, n) {
      'use strict';
      n.d(t, {
        AW: function () {
          return _;
        },
        D: function () {
          return R;
        },
        DR: function () {
          return E;
        },
        HA: function () {
          return h;
        },
        IR: function () {
          return o;
        },
        L8: function () {
          return c;
        },
        M1: function () {
          return i;
        },
        NA: function () {
          return p;
        },
        Qr: function () {
          return a;
        },
        RG: function () {
          return m;
        },
        ao: function () {
          return v;
        },
      });
      var r = n(27812),
        a =
          (n(67294),
          function (e) {
            return 0 === Object.keys(e).length;
          }),
        o = function (e) {
          return /^[A-Za-z ]+$/.test(e);
        },
        i = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          setTimeout(function () {
            window &&
              document &&
              (s
                ? window.scrollTo({
                    top: e,
                    left: window.screenX,
                    behavior: 'smooth',
                  })
                : l(e, 600));
          }, t);
        },
        s =
          'undefined' !== typeof document &&
          'scrollBehavior' in document.documentElement.style,
        l = function (e, t) {
          var n = document.scrollingElement || document.documentElement,
            r = n.scrollTop,
            a = e - r,
            o = +new Date();
          !(function i() {
            var s,
              l,
              c,
              u = +new Date() - o;
            (n.scrollTop =
              ((s = u),
              (l = r),
              (c = a),
              (s /= t / 2) < 1
                ? (c / 2) * s * s + l
                : (-c / 2) * (--s * (s - 2) - 1) + l)),
              u < t ? requestAnimationFrame(i) : (n.scrollTop = e);
          })();
        },
        c = function (e) {
          var t = {
              type: 'KrisFlyerPPS',
              messageInHtml:
                e &&
                '<p style="color: #ff0000;font-size: 14px;">'.concat(e, '</p'),
            },
            n = new CustomEvent('_hfc.Popup_Login', { detail: t });
          window.dispatchEvent(n);
        },
        u = ['A/0B5', 'C/0ID', 'C/0IK', 'C/0IJ', 'C/0AA'],
        f = new Map([
          ['A/0B5', 'RQST'],
          ['C/0ID', 'BULK'],
          ['C/0IK', 'HEAV'],
          ['C/0IJ', 'PIEC'],
          ['C/0AA', 'XBAG'],
        ]),
        d = new Map([
          ['E/0BH', 'PDUM'],
          ['I/A03', 'CBSC'],
          ['I/A02', 'EXSC'],
          ['D/A24', 'ATAX'],
        ]),
        _ =
          ([].concat(u, ['E/0BH', 'I/A03', 'I/A02', 'D/A24']),
          new Map([].concat((0, r.Z)(f), (0, r.Z)(d))));
      function p(e) {
        return u.includes(e);
      }
      function m(e, t) {
        var n = new Map();
        return (
          t.forEach(function (t, a, o) {
            var i,
              s = e(t, a, o);
            n.set(
              s,
              [].concat(
                (0, r.Z)(null !== (i = n.get(s)) && void 0 !== i ? i : []),
                [t],
              ),
            );
          }),
          n
        );
      }
      function h(e) {
        return e.reduce(function (e, t) {
          return e + t;
        }, 0);
      }
      var g = function (e) {
          return 'string' === typeof e ? parseFloat(e) : e;
        },
        v = function (e) {
          return g(e).toLocaleString('en-UK', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          });
        },
        E = function (e) {
          return g(e).toLocaleString('en-UK');
        },
        R = function (e, t) {
          var n = t.formatAmount,
            r =
              void 0 === n
                ? function (e) {
                    return e.toString();
                  }
                : n,
            a = t.amountProp,
            o = t.currencyProp,
            i = [];
          return (
            m(o, e).forEach(function (e, t) {
              var n = r(
                h(
                  e.map(function (e) {
                    return parseFloat(a(e));
                  }),
                ),
              );
              i.push([t, n]);
            }),
            i
          );
        };
    },
    65365: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return w;
          },
        });
      var r = n(59499),
        a = (n(87794), n(48629), n(67294)),
        o = n(3985),
        i = n(81508),
        s = n(69898),
        l = n(9008),
        c = n.n(l),
        u = n(35749),
        f = n(36808),
        d = n.n(f),
        _ = n(16835),
        p = n(85893);
      function m(e, t) {
        var n =
          ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
          e['@@iterator'];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ('string' === typeof e) return h(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              'Object' === n && e.constructor && (n = e.constructor.name);
              if ('Map' === n || 'Set' === n) return Array.from(e);
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return h(e, t);
            })(e)) ||
            (t && e && 'number' === typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          );
        }
        var o,
          i = !0,
          s = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (i = e.done), e;
          },
          e: function (e) {
            (s = !0), (o = e);
          },
          f: function () {
            try {
              i || null == n.return || n.return();
            } finally {
              if (s) throw o;
            }
          },
        };
      }
      function h(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var g,
        v =
          '\narticle,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace, monospace;font-size:1em}textarea,button,input.text,input[type="text"],input[type="button"],input[type="number"],input[type="submit"],.input-checkbox{-webkit-appearance:none}input[type=\'number\']{-moz-appearance:textfield}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input::-ms-clear{display:none}fieldset{border:0}.heading{font-family:"proxima-nova", "Open Sans", "Arial", "Helvetica", sans-serif;font-weight:bold;font-style:normal}.heading h1,.heading-1{font-size:1.500em}.heading h2,.heading-2{font-size:1.250em}.heading h3,.heading-3{font-size:1.125em}.heading h4,.heading-4{font-size:1em}.subheader{font-family:"proxima-nova";font-weight:600;font-style:normal}.subheader-1{font-size:1em}.subheader-2{font-size:0.875em}.small{font-family:"proxima-nova", "Open Sans", "Arial", "Helvetica", sans-serif;font-weight:bold;font-style:normal;letter-spacing:1px}.small-1{font-size:0.75em}.small-2{font-size:0.625em}.page_header{font-family:\'sigvar\', serif;font-size:1.625em;color:#00266b;font-weight:400}.intro_copy{font-family:"proxima-nova", "Open Sans", "Arial", "Helvetica", sans-serif;font-size:1.375em;font-weight:300;font-style:normal;color:#222;line-height:1.375em}.page_subheader{font-family:"proxima-nova", "Open Sans", "Arial", "Helvetica", sans-serif;font-weight:bold;font-style:normal;font-size:1.125em;color:#222}.section_header--lv1{font-family:\'sigvar\', serif;font-size:1.25em;color:#00266b}.section_header--lv2{font-family:"proxima-nova", "Open Sans", "Arial", "Helvetica", sans-serif;font-weight:bold;font-style:normal;font-size:1em;color:#00266b}a,a.link,a .link{color:#0254EC;transition:color 0.40s ease 0s;text-decoration:none}a:hover{color:#00266b}span,.span,span.span{font-family:"proxima-nova", "Open Sans", "Arial", "Helvetica", sans-serif}strong,.strong,.text-bold{font-family:"proxima-nova", "Open Sans", "Arial", "Helvetica", sans-serif;font-weight:bold;font-style:normal}em,.emphasis,em.em{font-family:"proxima-nova", "Open Sans", "Arial", "Helvetica", sans-serif;font-size:0.875em}small,.fineprint{font-family:"proxima-nova", "Open Sans", "Arial", "Helvetica", sans-serif;font-size:0.750em;font-weight:400}h1,h2,h3,h4{line-height:1em;font-weight:700}p{font-size:1rem;line-height:1.5em}p a{text-decoration:none;text-shadow:0.05em 0 0 #fff, -0.05em 0 0 #fff, 0 0.05em 0 #fff, 0 -0.05em 0 #fff, 0.01em 0 0 #fff, -0.01em 0 0 #fff, 0 0.1em 0 #fff, 0 -0.01em #fff;background-image:linear-gradient(to right, currentColor 0%, currentColor 100%);background-repeat:repeat-x;background-position:bottom 0.05em center;background-size:100% 0.05em}p a:focus{outline:none;background-color:#0254EC;color:white}a.link__action{font-size:0.85rem}ul,ol{font-size:1em;line-height:1.5em}ol li{list-style:decimal}.container{display:flex;margin:0;padding:20px}.container_main--fixed-width{width:61.75rem;position:relative;padding:20px}.container_main--responsive{padding:20px;width:100%}.container_card{padding-top:30px;padding-left:40px;padding-right:40px;padding-bottom:15px}.container_card--no-pad{padding:0}html{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}*,*:before,*:after{-webkit-box-sizing:inherit;-moz-box-sizing:inherit;box-sizing:inherit}html{font-size:16px;font-size:100%;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale}body{font-family:"proxima-nova", "Open Sans", "Arial", "Helvetica", sans-serif;font-weight:400;margin:0;padding:0;background-color:#FAFAFA}li,dt,dd,br,th,td{margin-top:0}.container{padding:1.5rem}.containerp{margin-top:1.5rem}*+h2,*+h3{margin-top:1.5em}main:empty{display:none}[href^="http"]:not([href*="singaporeair.com"])::after{display:inline-block;widows:1em;height:1em}[href="#main"]:not([class="header-main_logo"]){position:absolute;top:0;right:100%;height:0;overflow:hidden}[v-cloak]{display:none}[href="#main"]:focus{right:auto;height:auto;z-index:1000}.custom-checkbox{position:relative}.custom-checkbox input{position:absolute;top:3px;opacity:0;cursor:pointer;width:14px;height:14px}.custom-checkbox input+label{display:inline-block;padding-left:23px;margin-right:10px;line-height:18px;font-size:14px;cursor:pointer;color:#666}.custom-checkbox input+label:before{content:"";width:15px;height:15px;border:1px solid #ccc;position:absolute;top:4px;left:0;background-color:#fff}.custom-checkbox input:checked+label.assign-access-checked,.custom-checkbox input:checked+label:after,.custom-checkbox input.checked+label.assign-access-checked,.custom-checkbox input.checked+label:after{display:block}.custom-checkbox input+label:after{content:"e610";font-family:"sia";font-weight:bold;color:#ef9a1a;position:absolute;top:3px;left:2px;display:none;font-size:14px}.custom-checkbox input:checked+label,.custom-checkbox input.checked+label{color:#000 !important}input[type="checkbox"],input[type="radio"]{outline:none;box-sizing:border-box;padding:0}.visually-hidden{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(1px, 1px, 1px, 1px)}.no-transition{transition:none !important}.all-transition{transition:all 400ms ease-in-out}.disable-scroll{overflow:hidden;position:fixed;top:0;left:0;right:0;bottom:0;z-index:9999}.spacer{height:1.6em;display:block;width:auto}.spacer--medium{height:2em}.spacer--large{height:2.1em}.separator{background-color:rgba(255,255,255,0.5);height:1px;width:100%;border:none}\n\n\t.fare-deal__item--pull-right {\n\t\tz-index: 1;\n\t\tposition: relative;\n\t\ttext-align: right;\n\t}\n\t.fare-deal__excluesive {\n\t\tcolor: #FFFFFF;\n\t\tfont-size: 9px;\n\t\tdisplay: inline-block;\n\t\ttext-align: right;\n\t\tline-height: 10px;\n\t\tletter-spacing: 0.56px;\n\t\twidth: 60%;\n\t}\n\t.overlay-loading.hidden {\n\t  display: none;\n\t}\n\t.overlay-loading {\n\t\tposition: fixed;\n\t\ttop: 0px;\n\t\tleft: 0px;\n\t\tbackground: rgba(255, 255, 255, 0.95);\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tz-index: 1000;\n\t}\n\t.overlay-loading .loading__heading span {\n\t\tfont-family: "Sigvar", sans-serif;\n\t\tfont-weight: 300;\n\t\tfont-size: 26px;\n\t}\n\t.overlay-loading .loading__heading {\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tright: 20px;\n\t\tleft: 20px;\n\t\tfont-family: "Sigvar", sans-serif;\n\t\tmargin-top: 25px;\n\t\ttext-align: center;\n\t\tfont-size: 28px;\n\t\tcolor: #02266b;\n\t\tfont-weight: 300;\n\t\tfont-size: 26px;\n\t\ttext-transform: none;\n\t\tline-height: 1.5;\n\t}\n\t.overlay-loading .loading__footer {\n\t\tposition: absolute;\n\t\tright: 0px;\n\t\tbottom: 20px;\n\t\tleft: 0px;\n\t\tmargin: 0;\n\t\ttext-align: center;\n\t\tfont-size: 16px;\n\t\tcolor: #000;\n\t}\n\t.overlay-loading .loading__text {\n\t\tmargin: 0 10px;\n\t\tdisplay: inline-block;\n\t\tvertical-align: baseline;\n\t}\n\t.overlay-loading .loading__logo {\n\t\twidth: 122px;\n\t\tmargin: 0 10px;\n\t\tvertical-align: baseline;\n\t\tdisplay: inline-block;\n\t}\n\t.overlay-loading .loading__logo img {\n\t\tdisplay: block;\n\t\tmax-width: 100%;\n\t\tvertical-align: baseline;\n\t}\n@-webkit-keyframes load8 {\n\t0% {\n\t\t-webkit-transform: rotate(0deg);\n\t\ttransform: rotate(0deg);\n\t}\n\t100% {\n\t\t-webkit-transform: rotate(360deg);\n\t\ttransform: rotate(360deg); }\n\t}\n@keyframes load8 {\n\t0% {\n\t\t-webkit-transform: rotate(0deg);\n\t\ttransform: rotate(0deg); }\n\t100% {\n\t\t-webkit-transform: rotate(360deg);\n\t\ttransform: rotate(360deg); }\n\t}\n\t.loading {\n\t\t/* Remove text of icon loading */\n\t\ttext-indent: 100%;\n\t\twhite-space: nowrap;\n\t\toverflow: hidden;\n\t\t/* End remove */\n\t\tdisplay: inline-block;\n\t\tborder-radius: 50%;\n\t\tborder-style: solid;\n\t\tborder-color: #00266b;\n\t\tborder-top-color: rgba(0, 38, 107, 0.1);\n\t\tborder-right-color: rgba(0, 38, 107, 0.1);\n\t\t-webkit-animation: load8 0.8s infinite linear;\n\t\t-moz-animation: load8 0.8s infinite linear;\n\t\tanimation: load8 0.8s infinite linear;\n\t}\n\t.loading--full {\n\t\tborder-width: 7px;\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\twidth: 90px;\n\t\theight: 90px;\n\t\tmargin-top: -95px;\n\t\tmargin-left: -45px;\n\t}\n\t.loading__logo img {\n\t\tzoom: 1.5;\n\t}\n\t.loading--medium {\n\t\tborder-width: 4px;\n\t\tposition: absolute;\n\t\ttop: 60px;\n\t\tleft: 50%;\n\t\tmargin-left: -30px;\n\t\twidth: 52px;\n\t\theight: 52px;\n\t}\n\t.krisflyer-list-page .loading--medium {\n\t\tmargin-left: -20px;\n\t}\n\t.loading--medium-2 {\n\t\tborder-width: 2px;\n\t\twidth: 28px;\n\t\theight: 28px;\n\t}\n  .loading--small {\n\tborder-width: 2px;\n\twidth: 12px;\n\t\theight: 12px;\n\t}\n\t.home-component {\n\t\tposition: relative;\n\t\tz-index: 1;\n\t}\n\t.placeholder-loadding {\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\ttop: 0;\n\t\twidth: 100%;\n\t\theight: auto;\n\t\tz-index: 0;\n\t}\n\t.placeholder-loadding.fadeout {\n\t\tanimation: fade-out 2s forwards;\n\t\tvisibility: hidden;\n\t\tdisplay: none;\n\t}\n\t@keyframes fade-out {\n\t\tto {\n\t\t\topacity: 0;\n\t\t}\n\t}\n\t.experience-baseline1__item {\n\t\theight: 610px;\n\t\tbackground-color: #dcdcdc;\n\t}\n\t.text-right {\n\t\ttext-align: right;\n\t}\n\t.promotions__image {\n\t\tbackground-color: #dcdcdc;\n\t}\n\t.pl-title {\n\t\twidth: 525px;\n\t\theight: 30px;\n\t\tbackground-color: #dcdcdc;\n\t}\n\t.pl-circle {\n\t\tdisplay: inline-block;\n\t\twidth: 14px;\n\t\theight: 14px;\n\t\tborder-radius: 50%;\n\t\tbackground-color: #dcdcdc;\n\t}\n\t.pl-item-small {\n\t\twidth: 100px;\n\t\theight: 14px;\n\t\tbackground-color: #dcdcdc;\n\t}\n\t.pl-item-medium {\n\t\twidth: 160px;\n\t\theight: 14px;\n\t\tbackground-color: #dcdcdc;\n\t}\n\t.pl-item-large {\n\t\theight: 14px;\n\t\tbackground-color: #dcdcdc;\n\t\twidth: 265px;\n\t}\n\t.pl-container {\n\t\tmax-width: 1100px;\n\t\twidth: 100%;\n\t\tpadding-right: 10px;\n\t\tpadding-left: 10px;\n\t\tmargin-right: auto;\n\t\tmargin-left: auto;\n\t}\n\t.placeholder-loadding {\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t}\n\theader {\n\t\tmin-height: 5rem;\n\t\theight: auto;\n\t\tpadding: 0;\n\t\twidth: 100%;\n\t\tbackground-color: #00266b;\n\t\tdisplay: table;\n\t\tposition: relative;\n\t}\n\t.container-center {\n\t\tmargin: 0 auto;\n\t}\n\t.header-main_wrap {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 170px auto;\n\t\tgrid-template-rows: auto;\n\t\theight: auto;\n\t\tpadding: 0;\n\t\tgrid-column-gap: 1.2rem;\n\t\talign-items: center;\n\t}\n\t.header-main_logo {\n\t\tdisplay: block;\n\t\tmin-width: 124px;\n\t\tposition: relative;\n\t\ttext-align: left;\n\t}\n\t.logo-tablet {\n\t\tdisplay: none;\n\t}\n\t.nav-main {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: auto auto;\n\t\tgrid-template-rows: auto;\n\t\tletter-spacing: 0.01em;\n\t}\n\t.nav-main_wrap {\n\t\tdisplay: flex;\n\t\tflex-flow: row wrap;\n\t\tjustify-content: flex-start;\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t\tlist-style:none;\n\t\tline-height: 1.5em;\n\t}\n\t.nav-main_item {\n\t\tdisplay: inline-block;\n\t\tmax-height: 5rem;\n\t\tmargin-right: 1.375rem;\n\t\tlist-style: none;\n\t\tpadding: 0;\n\t}\n\t.nav-main_grp {\n\t\tdisplay: inline-block;\n\t}\n\t.nav-main_grp_link {\n\t\tcolor: white;\n\t\tline-height: 5.625rem;\n\t\tfont-family: \'sigvar\', serif;\n\t\ttext-decoration: none;\n\t}\n\t.lang-profile {\n\t\tdisplay: inline-block;\n\t\ttext-align: right;\n\t\tposition: relative;\n\t\tjustify-self: end;\n\t}\n\t.lang-profile_wrap {\n\t\tmargin: 0.3rem 0 0.8rem;\n\t\tdisplay: block;\n\t\talign-self: center;\n\t\tposition: relative;\n\t}\n\t.lang-profile_wrap .separator {\n\t\theight: 0.75rem;\n\t\twidth: 1px;\n\t\tborder-right: 1px solid white;\n\t\tdisplay: inline-block;\n\t\tmargin: 0 0.3rem;\n\t}\n\t.lang-profile_country-selector {\n\t\tfont-family: \'proxima-nova\', \'Open Sans\', \'Arial\', \'Helvetica\', sans-serif;\n\t\tfont-size: 0.5rem;\n\t\ttext-transform: uppercase;\n\t\tletter-spacing: 1px;\n\t\tfont-weight: 300;\n\t\tcolor: white;\n\t\ttext-decoration: none;\n\t\tdisplay: block;\n\t\tmargin-top: 11px;\n\t\tmargin-bottom: 10px;\n\t}\n\t.lang-profile_country-selector span {\n\t\tfont-size: 0.625rem;\n\t\ttext-transform: uppercase;\n\t\tletter-spacing: 1px;\n\t\tfont-weight: 500;\n\t\tcolor: white;\n\t}\n\t.lang-profile_country-selector .separator {\n\t\twidth: 2px;\n\t\theight: 2px;\n\t\tmargin: 0 2px 2px;\n\t\tborder-radius: 50%;\n\t\tdisplay: inline-block;\n\t\tbackground-color: #fff;\n\t}\n\t.lang-profile_country-selector .ico {\n\t\tdisplay: inline-block;\n\t\tmargin-left: 0.3rem;\n\t\tmargin-bottom: -3px;\n\t\twidth: 14px;\n\t\theight: 14px;\n\t\tbackground: url(\'/assets/images/svg/icons/chevron.svg\') center center transparent no-repeat;\n\t}\n\t.lang-profile_wrap .v-popover {\n\t\tposition: relative;\n\t\twidth: 145px;\n\t}\n\t.lang-profile_wrap .v-popover .trigger {\n\t\tdisplay: inline-block;\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\tpadding-bottom: 1.875rem;\n\t}\n\t.lang-profile_ico-search {\n\t\tborder: 0;\n\t\twidth: 0.75rem;\n\t\theight: 0.75rem;\n\t\tbackground: url(\'/assets/images/svg/icons/search.svg\') no-repeat center center transparent;\n\t}\n\t.lang-profile_login {\n\t\tcolor: white;\n\t}\n.ico-search.ico-search {\n  top: 0px;\n}\n\n#__next {\n  min-height: 300px;\n  position: relative;\n}\n\n/* wir layout */\n@media (min-width: 1200px) {\n   .main-inner {\n     max-width: 1080px;\n     margin: 0 auto;\n   }\n}\n\n@media (max-width: 1199px) and (min-width: 992px) {\n   .main-inner {\n     margin: 0 auto;\n     max-width: 920px;\n   }\n}\n\n@media (max-width: 991px) and (min-width: 768px) {\n   .main-inner {\n     margin: 0 auto;\n     max-width: 100%;\n   }\n}\n\n@media (max-width: 767px) {\n   .main-inner {\n     max-width: none;\n     margin: 0 auto;\n     /* relative position is required for modal to be shown under header */\n     position: relative;\n   }\n}\n\n@media print {\n  #header, #hfooter {\n    display: none !important;\n  }\n\n  #main-inner {\n    width: 100%;\n  }\n\n  body {\n    -webkit-print-color-adjust: exact !important;\n  }\n}\n/* remove widgets */\n.lang-profile_wrap__grp {\n  display: none;\n}\n\n.v-popover {\n  display: none;\n}\n\n.lang-profile {\n  padding-top: 1.6em;\n}\n\n/* header language selection enhance */\n@media (min-width: 768px) {\n  .modal-container .modal-body {\n    width: 100%;\n    margin-top: 10%;\n  }\n  .modal-container .modal-body .country-group {\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: row;\n  }\n  .modal-container .modal-body .country-group ul {\n    display: inline-block;\n    list-style: none;\n    padding: 0;\n    font-size: 0.875em;\n    width: 33.33333%;\n  }\n}\n\n.menu-toggle {\n  outline: none;\n}\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  body{\n    font-size: 14px;\n  }\n}\n\n',
        E =
          '@font-face {\n    font-family: "proxima-nova";\n    src: url(/assets/fonts/proximanova-regular-webfont.eot);\n    src: url(/assets/fonts/proximanova-regular-webfont.eot?#iefix)\n        format("embedded-opentype"),\n      url("/assets/fonts/proximanova-regular-webfont.woff") format("woff"),\n      url("/assets/fonts/proximanova-regular-webfont.woff2") format("woff2"),\n      url("/assets/fonts/proximanova-regular-webfont.ttf") format("truetype"),\n      url("/assets/fonts/proximanova-regular-webfont.svg") format("svg");\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n  }\n  @font-face {\n    font-family: "proxima-nova";\n    src: url(/assets/fonts/proximanova-regular-webfont.eot);\n    src: url(/assets/fonts/proximanova-regular-webfont.eot?#iefix)\n        format("embedded-opentype"),\n      url("/assets/fonts/proximanova-regular-webfont.woff") format("woff"),\n      url("/assets/fonts/proximanova-regular-webfont.woff2") format("woff2"),\n      url("/assets/fonts/proximanova-regular-webfont.ttf") format("truetype"),\n      url("/assets/fonts/proximanova-regular-webfont.svg") format("svg");\n    font-weight: 400;\n    font-style: normal;\n    font-display: swap;\n  }\n  @font-face {\n    font-family: "proxima-nova";\n    src: url(/assets/fonts/proximanova-regularit-webfont.eot);\n    src: url(/assets/fonts/proximanova-regularit-webfont.eot?#iefix)\n        format("embedded-opentype"),\n      url("/assets/fonts/proximanova-regularit-webfont.woff") format("woff"),\n      url("/assets/fonts/proximanova-regularit-webfont.woff2") format("woff2"),\n      url("/assets/fonts/proximanova-regularit-webfont.ttf") format("truetype"),\n      url("/assets/fonts/proximanova-regularit-webfont.svg") format("svg");\n    font-weight: 400;\n    font-style: italic;\n    font-display: swap;\n  }\n  @font-face {\n    font-family: "proxima-nova";\n    src: url(/assets/fonts/proximanova-light-webfont.eot);\n    src: url(/assets/fonts/proximanova-light-webfont.eot?#iefix)\n        format("embedded-opentype"),\n      url("/assets/fonts/proximanova-light-webfont.woff") format("woff"),\n      url("/assets/fonts/proximanova-light-webfont.woff2") format("woff2"),\n      url("/assets/fonts/proximanova-light-webfont.ttf") format("truetype"),\n      url("/assets/fonts/proximanova-light-webfont.svg") format("svg");\n    font-weight: 300;\n    font-style: normal;\n    font-display: swap;\n  }\n  @font-face {\n    font-family: "proxima-nova";\n    src: url(/assets/fonts/proximanova-lightit-webfont.eot);\n    src: url(/assets/fonts/proximanova-lightit-webfont.eot?#iefix)\n        format("embedded-opentype"),\n      url("/assets/fonts/proximanova-lightit-webfont.woff") format("woff"),\n      url("/assets/fonts/proximanova-lightit-webfont.woff2") format("woff2"),\n      url("/assets/fonts/proximanova-lightit-webfont.ttf") format("truetype"),\n      url("/assets/fonts/proximanova-lightit-webfont.svg") format("svg");\n    font-weight: 300;\n    font-style: italic;\n    font-display: swap;\n  }\n  @font-face {\n    font-family: "proxima-nova";\n    src: url(/assets/fonts/proximanova-semibold-webfont.eot);\n    src: url(/assets/fonts/proximanova-semibold-webfont.eot?#iefix)\n        format("embedded-opentype"),\n      url("/assets/fonts/proximanova-semibold-webfont.woff") format("woff"),\n      url("/assets/fonts/proximanova-semibold-webfont.woff2") format("woff2"),\n      url("/assets/fonts/proximanova-semibold-webfont.ttf") format("truetype"),\n      url("/assets/fonts/proximanova-semibold-webfont.svg") format("svg");\n    font-weight: 600;\n    font-style: normal;\n    font-display: swap;\n  }\n  @font-face {\n    font-family: "proxima-nova";\n    src: url(/assets/fonts/proximanova-semiboldit-webfont.eot);\n    src: url(/assets/fonts/proximanova-semiboldit-webfont.eot?#iefix)\n        format("embedded-opentype"),\n      url("/assets/fonts/proximanova-semiboldit-webfont.woff") format("woff"),\n      url("/assets/fonts/proximanova-semiboldit-webfont.woff2") format("woff2"),\n      url("/assets/fonts/proximanova-semiboldit-webfont.ttf") format("truetype"),\n      url("/assets/fonts/proximanova-semiboldit-webfont.svg") format("svg");\n    font-weight: 600;\n    font-style: italic;\n    font-display: swap;\n  }\n  @font-face {\n    font-family: "proxima-nova";\n    src: url(/assets/fonts/proximanova-bold-webfont.eot);\n    src: url(/assets/fonts/proximanova-bold-webfont.eot?#iefix)\n        format("embedded-opentype"),\n      url("/assets/fonts/proximanova-bold-webfont.woff") format("woff"),\n      url("/assets/fonts/proximanova-bold-webfont.woff2") format("woff2"),\n      url("/assets/fonts/proximanova-bold-webfont.ttf") format("truetype"),\n      url("/assets/fonts/proximanova-bold-webfont.svg") format("svg");\n    font-weight: bold;\n    font-style: normal;\n    font-display: swap;\n  }\n  @font-face {\n    font-family: "proxima-nova";\n    src: url(/assets/fonts/proximanova-boldit-webfont.eot);\n    src: url(/assets/fonts/proximanova-boldit-webfont.eot?#iefix)\n        format("embedded-opentype"),\n      url("/assets/fonts/proximanova-boldit-webfont.woff") format("woff"),\n      url("/assets/fonts/proximanova-boldit-webfont.woff2") format("woff2"),\n      url("/assets/fonts/proximanova-boldit-webfont.ttf") format("truetype"),\n      url("/assets/fonts/proximanova-boldit-webfont.svg") format("svg");\n    font-weight: bold;\n    font-style: italic;\n    font-display: swap;\n  }\n  @font-face {\n    font-family: "proxima-nova";\n    src: url(/assets/fonts/proximanova-bold-webfont.eot);\n    src: url(/assets/fonts/proximanova-bold-webfont.eot?#iefix)\n        format("embedded-opentype"),\n      url("/assets/fonts/proximanova-bold-webfont.woff") format("woff"),\n      url("/assets/fonts/proximanova-bold-webfont.woff2") format("woff2"),\n      url("/assets/fonts/proximanova-bold-webfont.ttf") format("truetype"),\n      url("/assets/fonts/proximanova-bold-webfont.svg") format("svg");\n    font-weight: 700;\n    font-style: normal;\n    font-display: swap;\n  }\n  @font-face {\n    font-family: "proxima-nova";\n    src: url(/assets/fonts/proximanova-boldit-webfont.eot);\n    src: url(/assets/fonts/proximanova-boldit-webfont.eot?#iefix)\n        format("embedded-opentype"),\n      url("/assets/fonts/proximanova-boldit-webfont.woff") format("woff"),\n      url("/assets/fonts/proximanova-boldit-webfont.woff2") format("woff2"),\n      url("/assets/fonts/proximanova-boldit-webfont.ttf") format("truetype"),\n      url("/assets/fonts/proximanova-boldit-webfont.svg") format("svg");\n    font-weight: 700;\n    font-style: italic;\n    font-display: swap;\n  }\n  @font-face {\n    font-family: "sigvar";\n    src: url(/assets/fonts/sigvar_serial-regular-webfont.eot);\n    src: url(/assets/fonts/sigvar_serial-regular-webfont.eot?#iefix)\n        format("embedded-opentype"),\n      url("/assets/fonts/sigvar_serial-regular-webfont.woff2") format("woff2"),\n      url("/assets/fonts/sigvar_serial-regular-webfont.woff") format("woff"),\n      url("/assets/fonts/sigvar_serial-regular-webfont.ttf") format("truetype"),\n      url("/assets/fonts/sigvar_serial-regular-webfont.svg") format("svg");\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n  }\n  @font-face {\n    font-family: "sigvar";\n    src: url(/assets/fonts/sigvar_serial-italic-webfont.eot);\n    src: url(/assets/fonts/sigvar_serial-italic-webfont.eot?#iefix)\n        format("embedded-opentype"),\n      url("/assets/fonts/sigvar_serial-italic-webfont.woff") format("woff"),\n      url("/assets/fonts/sigvar_serial-italic-webfont.woff2") format("woff2"),\n      url("/assets/fonts/sigvar_serial-italic-webfont.ttf") format("truetype"),\n      url("/assets/fonts/sigvar_serial-italic-webfont.svg") format("svg");\n    font-weight: normal;\n    font-style: italic;\n    font-display: swap;\n  }\n  @font-face {\n    font-family: "sigvar";\n    src: url(/assets/fonts/sigvar_serial-light-webfont.eot);\n    src: url(/assets/fonts/sigvar_serial-light-webfont.eot?#iefix)\n        format("embedded-opentype"),\n      url("/assets/fonts/sigvar_serial-light-webfont.woff2") format("woff2"),\n      url("/assets/fonts/sigvar_serial-light-webfont.woff") format("woff"),\n      url("/assets/fonts/sigvar_serial-light-webfont.ttf") format("truetype"),\n      url("/assets/fonts/sigvar_serial-light-webfont.svg") format("svg");\n    font-weight: 300;\n    font-style: normal;\n    font-display: swap;\n  }\n  @font-face {\n    font-family: "sigvar";\n    src: url(/assets/fonts/sigvar_serial-lightitalic-webfont.eot);\n    src: url(/assets/fonts/sigvar_serial-lightitalic-webfont.eot?#iefix)\n        format("embedded-opentype"),\n      url("/assets/fonts/sigvar_serial-lightitalic-webfont.woff") format("woff"),\n      url("/assets/fonts/sigvar_serial-lightitalic-webfont.woff2") format("woff2"),\n      url("/assets/fonts/sigvar_serial-lightitalic-webfont.ttf")\n        format("truetype"),\n      url("/assets/fonts/sigvar_serial-lightitalic-webfont.svg") format("svg");\n    font-weight: 300;\n    font-style: italic;\n    font-display: swap;\n  }\n  @font-face {\n    font-family: "sigvar";\n    src: url(/assets/fonts/sigvar_serial-xbold-webfont.eot);\n    src: url(/assets/fonts/sigvar_serial-xbold-webfont.eot?#iefix)\n        format("embedded-opentype"),\n      url("/assets/fonts/sigvar_serial-xbold-webfont.woff") format("woff"),\n      url("/assets/fonts/sigvar_serial-xbold-webfont.woff2") format("woff2"),\n      url("/assets/fonts/sigvar_serial-xbold-webfont.ttf") format("truetype"),\n      url("/assets/fonts/sigvar_serial-xbold-webfont.svg") format("svg");\n    font-weight: 700;\n    font-style: normal;\n    font-display: swap;\n  }\n  @font-face {\n    font-family: "sia-ico2";\n    src: url(/assets/fonts/sia-ico2.eot?ola8n5);\n    src: url(/assets/fonts/sia-ico2.eot?ola8n5#iefix) format("embedded-opentype"),\n      url("/assets/fonts/sia-ico2.ttf?ola8n5") format("truetype"),\n      url("/assets/fonts/sia-ico2.woff?ola8n5") format("woff"),\n      url("/assets/fonts/sia-ico2.svg?ola8n5#sia-ico2") format("svg");\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n  }\n  @font-face {\n    font-family: "sia";\n    src: url(/assets/fonts/sia.eot);\n    src: url(/assets/fonts/sia.eot?#iefix) format("embedded-opentype"),\n      url("/assets/fonts/sia.woff") format("woff"),\n      url("/assets/fonts/sia.ttf") format("truetype"),\n      url("/assets/fonts/sia.svg") format("svg");\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n  }\n  @font-face {\n    font-family: "sia-1";\n    src: url(/assets/fonts/sia-1.eot);\n    src: url(/assets/fonts/sia-1.eot?#iefix) format("embedded-opentype"),\n      url("/assets/fonts/sia-1.woff") format("woff"),\n      url("/assets/fonts/sia-1.ttf") format("truetype"),\n      url("/assets/fonts/sia-1.svg") format("svg");\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n  }\n  @font-face {\n    font-family: "sia-2";\n    src: url(/assets/fonts/sia-2.eot);\n    src: url(/assets/fonts/sia-2.eot?#iefix) format("embedded-opentype"),\n      url("/assets/fonts/sia-2.woff") format("woff"),\n      url("/assets/fonts/sia-2.ttf") format("truetype"),\n      url("/assets/fonts/sia-2.svg") format("svg");\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n  }\n  @font-face {\n    font-family: "sia-3";\n    src: url(/assets/fonts/sia-3.eot);\n    src: url(/assets/fonts/sia-3.eot?#iefix) format("embedded-opentype"),\n      url("/assets/fonts/sia-3.woff") format("woff"),\n      url("/assets/fonts/sia-3.ttf") format("truetype"),\n      url("/assets/fonts/sia-3.svg") format("svg");\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n  }\n  @font-face {\n    font-family: "sia-amenities";\n    src: url(/assets/fonts/sia-amenities.eot);\n    src: url(/assets/fonts/sia-amenities.eot?#iefix) format("embedded-opentype"),\n      url("/assets/fonts/sia-amenities.woff") format("woff"),\n      url("/assets/fonts/sia-amenities.ttf") format("truetype"),\n      url("/assets/fonts/sia-amenities.svg") format("svg");\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n  }\n  @font-face {\n    font-family: "sia-map";\n    src: url(/assets/fonts/sia-map.eot?cbq5t9);\n    src: url(/assets/fonts/sia-map.eot?cbq5t9#iefix) format("embedded-opentype"),\n      url("/assets/fonts/sia-map.ttf?cbq5t9") format("truetype"),\n      url("/assets/fonts/sia-map.woff?cbq5t9") format("woff"),\n      url("/assets/fonts/sia-map.svg?cbq5t9#sia-3") format("svg");\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n  }\n  @font-face {\n    font-family: "sia-meals";\n    src: url(/assets/fonts/sia-meals.eot?egg8fi);\n    src: url(/assets/fonts/sia-meals.eot?egg8fi#iefix) format("embedded-opentype"),\n      url("/assets/fonts/sia-meals.ttf?egg8fi") format("truetype"),\n      url("/assets/fonts/sia-meals.woff?egg8fi") format("woff"),\n      url("/assets/fonts/sia-meals.svg?egg8fi#sia-meals") format("svg");\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n  }\n';
      function R(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? R(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : R(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      !(function (e) {
        (e.Full = 'Full'),
          (e.Transactional = 'Transactional'),
          (e.LogoOnly = 'LogoOnly');
      })(g || (g = {}));
      var b = new RegExp('^/([a-z][a-z]_[A-Z][A-Z])/([a-z][a-z])/(.*)');
      function O(e) {
        var t = e.Component,
          n = e.pageProps,
          r = e.locale,
          l = e.country,
          u = e.appConfig,
          f = e.deviceType,
          h = e.isSqMobileRequest,
          R = n || {},
          b = R.creditCheckData,
          O = R.overviewPageData,
          w = R.secondaryTranslations,
          L = R.redirectToOverviewPage,
          I = R.isFormPost,
          S = (0, a.useState)(void 0 !== L || I),
          C = S[0],
          M = S[1],
          A = (0, a.useState)(g.Full),
          T = A[0],
          k = A[1],
          P = (0, s.useRouter)(),
          D = {
            secondaryTranslationsState: (0, a.useState)(w),
            overviewDataState: (0, a.useState)(O),
            creditCheckDataState: (0, a.useState)(b),
          },
          H = (0, a.useState)({
            locale: r,
            country: l,
            appConfig: u,
            isSqMobileRequest: h,
            deviceType: f,
          }),
          j = 'GTM-53PXBX',
          B = (function () {
            var e,
              t = [],
              n = m(
                [
                  'https://www.googletagmanager.com',
                  'https://www.google-analytics.com',
                ].entries(),
              );
            try {
              for (n.s(); !(e = n.n()).done; ) {
                var r = (0, _.Z)(e.value, 2),
                  a = r[0],
                  o = r[1];
                t.push((0, p.jsx)('link', { rel: 'dns-prefetch', href: o }, a));
              }
            } catch (d) {
              n.e(d);
            } finally {
              n.f();
            }
            var i,
              s = [],
              l = m(
                [
                  'https://cdn.glassboxcdn.com',
                  'http://intljs.rmtag.com',
                  'https://intljs.rmtag.com',
                  'https://s.go-mpulse.net',
                  'http://singaporeairlines.api.useinsider.com',
                  'https://singaporeairlines.api.useinsider.com',
                  'http://api.useinsider.com',
                  'https://api.useinsider.com',
                ].entries(),
              );
            try {
              for (l.s(); !(i = l.n()).done; ) {
                var c = (0, _.Z)(i.value, 2),
                  u = c[0],
                  f = c[1];
                s.push((0, p.jsx)('link', { rel: 'preconnect', href: f }, u));
              }
            } catch (d) {
              l.e(d);
            } finally {
              l.f();
            }
            return { saaDnsPrefetch: t, saaPreconnect: s };
          })(),
          Y = B.saaDnsPrefetch,
          U = B.saaPreconnect,
          G = (function () {
            var e,
              t = [],
              n = m(
                [
                  '/assets/fonts/proximanova-bold-webfont.woff',
                  '/assets/fonts/sigvar_serial-regular-webfont.woff2',
                  '/assets/fonts/proximanova-regular-webfont.woff',
                  '/assets/fonts/proximanova-semibold-webfont.woff',
                ].entries(),
              );
            try {
              for (n.s(); !(e = n.n()).done; ) {
                var r = (0, _.Z)(e.value, 2),
                  a = r[0],
                  o = r[1];
                t.push(
                  (0, p.jsx)(
                    'link',
                    {
                      rel: 'preload',
                      as: 'font',
                      type: 'font/woff',
                      crossOrigin: 'anonymous',
                      href: o,
                    },
                    a,
                  ),
                );
              }
            } catch (i) {
              n.e(i);
            } finally {
              n.f();
            }
            return t;
          })(),
          F = (function () {
            var e = { __html: E + v };
            return (0, p.jsx)('style', {
              type: 'text/css',
              dangerouslySetInnerHTML: e,
            });
          })(),
          K = (0, p.jsx)('script', {
            dangerouslySetInnerHTML: {
              __html:
                "\n    function loadGTM(w, d, s, l, i) {w[l] = w[l] || [];w[l].push({'gtm.start': new Date().getTime(),event: 'gtm.js'});var f = d.getElementsByTagName(s)[0],j = d.createElement(s),dl = l != 'dataLayer' ? '&l=' + l : '';j.async = true;j.src = '//www.googletagmanager.com/gtm.js?id=' + i + dl;f.parentNode.insertBefore(j, f);}\n",
            },
          }),
          z = (function (e) {
            var t = {
              __html:
                "\n    var formattedPageName = \"MB_ManageBooking_Secondary\";\n\t  var newHP = true;\n\t  var loadGAGTM = (window.location.search.indexOf(\"ignoreGA=true\") == -1);\n\t  if (loadGAGTM){\n\t\tsetTimeout(function () {\n\t\t\tloadGTM(window, document, 'script', 'dataLayer', '".concat(
                  e,
                  "');\n\t\t}, 12000);\n  }\n  ",
                ),
            };
            return (0, p.jsx)('script', {
              type: 'text/javascript',
              dangerouslySetInnerHTML: t,
            });
          })(j),
          $ = (0, a.useState)((0, p.jsx)(p.Fragment, {})),
          V = $[0],
          W = $[1];
        return (
          (0, a.useEffect)(function () {
            var e = document.querySelector('sia-header');
            e && (e.changeLanguage = y);
          }, []),
          (0, a.useEffect)(function () {
            setTimeout(function () {
              var e;
              W(
                ((e = H[0].appConfig['config.insiderScriptName']),
                (0, p.jsx)('script', {
                  defer: !0,
                  type: 'text/javascript',
                  src: '/assets/scripts/'.concat(e, '.js'),
                })),
              );
            }, 12e3);
          }, []),
          (0, a.useEffect)(function () {
            var e = x(window.location.pathname);
            e &&
              (d().set('AKAMAI_SAA_COUNTRY_COOKIE', e.country.toUpperCase(), {
                path: '/',
                secure: !0,
                'Max-Age': '315360000',
              }),
              d().set('AKAMAI_SAA_LOCALE_COOKIE', e.locale, {
                path: '/',
                secure: !0,
                'Max-Age': '315360000',
              }));
          }, []),
          (0, a.useEffect)(
            function () {
              var e = function () {
                M(!1);
              };
              return (
                s.Router.events.on('routeChangeComplete', e),
                function () {
                  s.Router.events.off('routeChangeComplete', e);
                }
              );
            },
            [M],
          ),
          (0, a.useEffect)(
            function () {
              -1 !==
                P.pathname
                  .toLowerCase()
                  .indexOf('/managebooking/refund-review') ||
              -1 !==
                P.pathname
                  .toLowerCase()
                  .indexOf('/managebooking/refund-confirmation') ||
              -1 !==
                P.pathname
                  .toLowerCase()
                  .indexOf('/managebooking/open-ticket-review') ||
              -1 !==
                P.pathname
                  .toLowerCase()
                  .indexOf('/managebooking/open-ticket-confirmation')
                ? k(g.Transactional)
                : k(g.Full);
            },
            [P],
          ),
          (0, p.jsxs)(o.ko.Provider, {
            value: {
              locale: H[0].locale,
              country: H[0].country,
              setPageLoading: M,
            },
            children: [
              (0, p.jsxs)(c(), {
                children: [
                  !1,
                  (0, p.jsx)('meta', { charSet: 'UTF-8' }),
                  (0, p.jsx)('meta', {
                    httpEquiv: 'X-UA-Compatible',
                    content: 'ie=edge',
                  }),
                  (0, p.jsx)('meta', {
                    name: 'Description',
                    content: 'Singapore Airlines - Manage Booking',
                  }),
                  (0, p.jsx)('meta', {
                    name: 'theme-color',
                    content: '#00266b',
                  }),
                  (0, p.jsx)('link', {
                    rel: 'shortcut icon',
                    href: '/saar5/images/favicon.ico',
                    type: 'image/x-icon',
                  }),
                  (0, p.jsx)('link', {
                    rel: 'stylesheet',
                    href: '/assets/digitalweb/build/'.concat(
                      H[0].appConfig['config.headerFooterScriptName'],
                      '.css',
                    ),
                  }),
                  (0, p.jsx)('script', {
                    type: 'module',
                    src: '/assets/digitalweb/build/'.concat(
                      H[0].appConfig['config.headerFooterScriptName'],
                      '.esm.js',
                    ),
                  }),
                  (0, p.jsx)('script', {
                    noModule: !0,
                    src: '/assets/digitalweb/build/'.concat(
                      H[0].appConfig['config.headerFooterScriptName'],
                      '.js',
                    ),
                  }),
                  (0, p.jsx)('style', {
                    children:
                      '\n            #sia-header {\n              position: relative;\n              z-index: 100;\n              box-sizing: border-box;\n              min-height: 80px;\n              background: linear-gradient(315deg, #134297 0%, #0F3C8E 20%, #0B3785 40%, #07317C 60%, #032B74 80%, #00266B 100%);\n            }\n            @media screen and (max-width: 991px) {\n              #sia-header {\n                min-height: 60px;\n                background: linear-gradient(222.07deg, #003087 0%, #00266B 100%);\n              }\n            }\n        ',
                  }),
                  Y,
                  U,
                  G,
                  K,
                  (0, p.jsx)('script', {
                    async: !0,
                    type: 'text/javascript',
                    src: ''.concat(H[0].appConfig['glassbox.script.url']),
                    integrity: ''.concat(
                      H[0].appConfig['glassbox.script.integrity'],
                    ),
                    crossOrigin: 'anonymous',
                    id: '_cls_detector',
                    'data-clsconfig': ''.concat(
                      H[0].appConfig['glassbox.clsconfig.url'],
                    ),
                  }),
                  V,
                  F,
                ],
              }),
              (0, p.jsxs)(o.Jj.Provider, {
                value: N({}, H[0].appConfig),
                children: [
                  !H[0].isSqMobileRequest &&
                    (0, p.jsx)('div', {
                      id: 'sia-header',
                      children: (0, p.jsx)('sia-header', {
                        locale: r,
                        country: l,
                        'header-type': T,
                      }),
                    }),
                  (0, p.jsxs)('div', {
                    id: 'main-inner',
                    children: [
                      (0, p.jsx)(t, N(N({}, n), D)),
                      C &&
                        (0, p.jsx)(i.P, {
                          locale: r,
                          scrollToTop: !1,
                          shouldLockBody: !1,
                        }),
                      !H[0].isSqMobileRequest &&
                        (0, p.jsx)('sia-footer', { locale: r, country: l }),
                      z,
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      function x(e) {
        var t = b.exec(e);
        if (t && (0, u.wK)(t[1], t[2]) && t[3])
          return { locale: t[1], country: t[2], subPathName: t[3] };
      }
      function y(e, t) {
        var n,
          r,
          a,
          o = x(window.location.pathname);
        o
          ? (window.location.href = '/'
              .concat(e, '/')
              .concat(t.toLowerCase(), '/')
              .concat(o.subPathName))
          : (d().set('AKAMAI_SAA_LOCALE_COOKIE', e, {
              path: '/',
              secure:
                -1 !==
                (null === (n = window.location.protocol) || void 0 === n
                  ? void 0
                  : n.indexOf('https')),
              'Max-Age': '315360000',
            }),
            d().set('AKAMAI_SAA_COUNTRY_COOKIE', t, {
              path: '/',
              secure:
                -1 !==
                (null === (r = window.location.protocol) || void 0 === r
                  ? void 0
                  : r.indexOf('https')),
              'Max-Age': '315360000',
            }),
            null === (a = window) || void 0 === a || a.location.reload());
      }
      O.getInitialProps = function (e) {
        var t = e.ctx;
        e.Component, t.req, t.res;
        return {};
      };
      var w = O;
    },
    6840: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return n(65365);
        },
      ]);
    },
    62259: function (e) {
      e.exports = {
        wrapper: 'RetrieveLastNamePopup_wrapper__VnCcd',
        heading: 'RetrieveLastNamePopup_heading__Pg1Om',
        description: 'RetrieveLastNamePopup_description__688qJ',
        message: 'RetrieveLastNamePopup_message__kAMdp',
        firstNameInput: 'RetrieveLastNamePopup_firstNameInput__pFbiV',
        lastNameBox: 'RetrieveLastNamePopup_lastNameBox__LLahE',
        userDetailsConatiner:
          'RetrieveLastNamePopup_userDetailsConatiner__8BcLf',
        userDetails: 'RetrieveLastNamePopup_userDetails__xoArg',
        label: 'RetrieveLastNamePopup_label__aOxbp',
        submitButton: 'RetrieveLastNamePopup_submitButton__02TIP',
        childrenWrapper: 'RetrieveLastNamePopup_childrenWrapper__BbaSf',
      };
    },
    74122: function (e) {
      e.exports = {
        whiteBackground: 'InputBox_whiteBackground__inVBG',
        greyBackground: 'InputBox_greyBackground__IEhOT',
        disabledBackground: 'InputBox_disabledBackground__UR97G',
        wrapper: 'InputBox_wrapper__KAr5E',
        focus: 'InputBox_focus__D1WGH',
        invalidInput: 'InputBox_invalidInput__zlA6H',
        disabled: 'InputBox_disabled__GG0Kj',
        label: 'InputBox_label__0Cp3L',
        labelText: 'InputBox_labelText__xf9Uh',
        floatLabel: 'InputBox_floatLabel__DF8qR',
        invalidLabel: 'InputBox_invalidLabel__17mv4',
        disabledLabel: 'InputBox_disabledLabel__S8pBu',
        nonFloatLabel: 'InputBox_nonFloatLabel__SI4Ou',
        errorMessage: 'InputBox_errorMessage__dn4Ng',
      };
    },
    4937: function (e) {
      e.exports = {
        modal: 'LightBox_modal__U9HDm',
        modalMain: 'LightBox_modalMain__3p_Tm',
        modalFullScreen: 'LightBox_modalFullScreen__4UOEF',
        displayBlock: 'LightBox_displayBlock__VZzql',
        displayNone: 'LightBox_displayNone__iI1sx',
        cancelIcon: 'LightBox_cancelIcon__GX_OK',
        popUpChildrenWrapper: 'LightBox_popUpChildrenWrapper__lkpHU',
      };
    },
    12979: function (e) {
      e.exports = {
        modal: 'PopUpModal_modal__HRpY9',
        modalMain: 'PopUpModal_modalMain___5fev',
        displayBlock: 'PopUpModal_displayBlock__biCNS',
        displayNone: 'PopUpModal_displayNone___q3Cf',
        closeIcon: 'PopUpModal_closeIcon__pKs7y',
        cancelIcon: 'PopUpModal_cancelIcon__DOFRb',
      };
    },
    13632: function (e) {
      e.exports = {
        wrapper: 'WarningMessage_wrapper__nSkzb',
        alertIcon: 'WarningMessage_alertIcon__Qo04D',
        label: 'WarningMessage_label__CxuLM',
      };
    },
    3516: function (e) {
      e.exports = {
        wrapper: 'RetrieveFirstnamePopup_wrapper__EoxMH',
        heading: 'RetrieveFirstnamePopup_heading__LzNg7',
        description: 'RetrieveFirstnamePopup_description__K9xg9',
        firstNameInput: 'RetrieveFirstnamePopup_firstNameInput__o0RBd',
        firstNameCheck: 'RetrieveFirstnamePopup_firstNameCheck__sYOBC',
        submitButton: 'RetrieveFirstnamePopup_submitButton__uNUXF',
      };
    },
    73662: function (e) {
      e.exports = {
        funCaptcha: 'Captcha_funCaptcha___aYWH',
        hide: 'Captcha_hide__OEVHd',
      };
    },
    71798: function (e) {
      e.exports = {
        creditCheckContainer: 'CreditCheck_creditCheckContainer__muxrh',
        tooltipContainer: 'CreditCheck_tooltipContainer__m_myQ',
        tooltipIcon: 'CreditCheck_tooltipIcon__my_Tr',
        secondaryLandTooltip: 'CreditCheck_secondaryLandTooltip__bK_IC',
      };
    },
    48407: function (e) {
      e.exports = {
        wrapper: 'CreditCheckMessage_wrapper__MFmL_',
        alertIcon: 'CreditCheckMessage_alertIcon__U1Aib',
        label: 'CreditCheckMessage_label__P5RIH',
      };
    },
    25561: function (e) {
      e.exports = {
        login: 'LoginForm_login___FcKr',
        loginButtonLink: 'LoginForm_loginButtonLink__ZDRCJ',
      };
    },
    80137: function (e) {
      e.exports = {
        inputContainer: 'MBForm_inputContainer__fiIOh',
        submitButtonContainer: 'MBForm_submitButtonContainer__g3pNp',
      };
    },
    50670: function (e) {
      e.exports = {
        breadcrumb: 'Breadcrumb_breadcrumb__TGSRe',
        wrapper: 'Breadcrumb_wrapper__fmkeM',
        breadcrumbItem: 'Breadcrumb_breadcrumbItem__D2bqc',
        breadcrumbItemLink: 'Breadcrumb_breadcrumbItemLink__sb8__',
        rightArrow: 'Breadcrumb_rightArrow__5NGRl',
      };
    },
    93039: function (e) {
      e.exports = {
        checkboxContainer: 'Checkbox_checkboxContainer__XKRRB',
        styledCheckbox: 'Checkbox_styledCheckbox__KbsuA',
      };
    },
    3996: function (e) {
      e.exports = {
        error: 'ErrorMessage_error__INdfS',
        inner: 'ErrorMessage_inner__jxGSA',
        closeIcon: 'ErrorMessage_closeIcon__KE1Ih',
        errorMessage: 'ErrorMessage_errorMessage__dP1Kt',
      };
    },
    55504: function (e) {
      e.exports = { mbSubmitButton: 'MBSubmitButton_mbSubmitButton__2Dmm8' };
    },
    60219: function (e) {
      e.exports = {
        radioInputContainer: 'RadioInput_radioInputContainer__2f39h',
      };
    },
    77884: function (e) {
      e.exports = {
        tooltipContainer: 'RadioToolTip_tooltipContainer__vXbGP',
        tooltip: 'RadioToolTip_tooltip__o68Qi',
        tooltipInner: 'RadioToolTip_tooltipInner__KFSLl',
        tooltipUserIcon: 'RadioToolTip_tooltipUserIcon__ztvRm',
        tooltipText: 'RadioToolTip_tooltipText__09mM_',
        bookingRefIcon: 'RadioToolTip_bookingRefIcon__ap2_A',
        eTicketNumIcon: 'RadioToolTip_eTicketNumIcon__xIpmu',
        arrowUp: 'RadioToolTip_arrowUp__54RN4',
      };
    },
    76342: function (e) {
      e.exports = { radio: 'RadioGroup_radio__jeY7Y' };
    },
    61923: function (e) {
      e.exports = {
        blockHeading: 'SecondaryLand_blockHeading__66fAJ',
        mainInner: 'SecondaryLand_mainInner__NEsue',
        staticContent: 'SecondaryLand_staticContent__Xqc_4',
        staticDetails: 'SecondaryLand_staticDetails__tpbQf',
        formContent: 'SecondaryLand_formContent__yzc1_',
      };
    },
    48629: function () {},
    11541: function () {},
    10581: function () {},
    9008: function (e, t, n) {
      e.exports = n(72717);
    },
    26254: function (e, t, n) {
      'use strict';
      var r;
      n.d(t, {
        L: function () {
          return r;
        },
      }),
        (function (e) {
          (e.de_DE = 'de_DE'),
            (e.en_UK = 'en_UK'),
            (e.es_ES = 'es_ES'),
            (e.fr_FR = 'fr_FR'),
            (e.in_ID = 'in_ID'),
            (e.it_IT = 'it_IT'),
            (e.ja_JP = 'ja_JP'),
            (e.ko_KR = 'ko_KR'),
            (e.nl_NL = 'nl_NL'),
            (e.pt_BR = 'pt_BR'),
            (e.ru_RU = 'ru_RU'),
            (e.th_TH = 'th_TH'),
            (e.vi_VN = 'vi_VN'),
            (e.zh_CN = 'zh_CN'),
            (e.zh_TW = 'zh_TW');
        })(r || (r = {}));
    },
    81508: function (e, t, n) {
      'use strict';
      n.d(t, {
        P: function () {
          return i;
        },
      });
      var r = n(67294),
        a = n(58509),
        o = n(26254),
        i = function (e) {
          var t = e.locale,
            n = e.scrollToTop,
            o = e.shouldLockBody,
            i = void 0 === o || o,
            c = e.customLabel,
            u = (0, r.useRef)(null),
            f = c || s.get(t) || "Just a moment...we'll take you there soon.";
          return (
            (0, r.useEffect)(
              function () {
                if (window && i && u.current)
                  return (
                    n && window.scrollTo(0, 0),
                    (0, a.Qp)(u.current),
                    function () {
                      return (0, a.tP)();
                    }
                  );
              },
              [i],
            ),
            r.createElement(l, { reference: u, label: f })
          );
        },
        s = new Map([
          [o.L.de_DE, 'Einen Moment noch...Sie gelangen in K\xfcrze zum Ziel.'],
          [o.L.en_UK, "Just a moment...we'll take you there soon."],
          [
            o.L.es_ES,
            'Por favor, espera un momento...le llevaremos all\xed pronto.',
          ],
          [
            o.L.fr_FR,
            'Un moment...vous allez bient\xf4t pouvoir y acc\xe9der.',
          ],
          [
            o.L.in_ID,
            'Tunggu sebentar...kami akan segera membawa Anda ke sana.',
          ],
          [
            o.L.it_IT,
            'Attendi un attimo...La richiesta verr\xe0 elaborata a breve.',
          ],
          [
            o.L.ja_JP,
            '\u3057\u3070\u3089\u304f\u304a\u5f85\u3061\u304f\u3060\u3055\u3044...\u307e\u3082\u306a\u304f\u8868\u793a\u3055\u308c\u307e\u3059\u3002',
          ],
          [
            o.L.ko_KR,
            '\uc7a0\uc2dc\ub9cc \uae30\ub2e4\ub824 \uc8fc\uc138\uc694...\uace7 \uc774\ub3d9\ud569\ub2c8\ub2e4.',
          ],
          [o.L.nl_NL, 'Even geduld...we zijn er bijna.'],
          [
            o.L.pt_BR,
            'Aguarde um momento...direcionaremos voc\xea dentro de alguns instantes.',
          ],
          [
            o.L.ru_RU,
            '\u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435 \u043d\u0435\u043c\u043d\u043e\u0433\u043e\u2026\u0441\u043a\u043e\u0440\u043e \u0432\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u043d\u0430 \u043c\u0435\u0441\u0442\u0435.',
          ],
          [
            o.L.th_TH,
            '\u0e23\u0e2d\u0e2a\u0e31\u0e01\u0e04\u0e23\u0e39\u0e48...\u0e40\u0e23\u0e32\u0e08\u0e30\u0e1e\u0e32\u0e04\u0e38\u0e13\u0e44\u0e1b\u0e17\u0e35\u0e48\u0e19\u0e31\u0e48\u0e19\u0e40\u0e23\u0e47\u0e27\u0e46 \u0e19\u0e35\u0e49',
          ],
          [
            o.L.vi_VN,
            'Vui l\xf2ng ch\u1edd trong gi\xe2y l\xe1t... ch\xfang t\xf4i s\u1ebd s\u1edbm \u0111\u01b0a qu\xfd kh\xe1ch t\u1edbi \u0111\xf3.',
          ],
          [
            o.L.zh_CN,
            '\u8bf7\u7a0d\u7b49...\u6211\u4eec\u5f88\u5feb\u5c31\u5e26\u60a8\u8bbf\u95ee\u8be5\u9875\u9762\u3002',
          ],
          [
            o.L.zh_TW,
            '\u8acb\u7a0d\u5f85\u7247\u523b...\u7cfb\u7d71\u5f88\u5feb\u7684\u5c31\u6703\u9023\u7d50\u81f3\u60a8\u8981\u7684\u7db2\u9801\u3002',
          ],
        ]),
        l = function (e) {
          return r.createElement(
            'div',
            { ref: e.reference, className: 'ge_PageSpinner_Wrapper' },
            r.createElement(
              'div',
              { className: 'ge_PageSpinner_SpinContainer' },
              r.createElement('div', { className: 'ge_PageSpinner_Spinner' }),
              r.createElement('label', null, e.label),
              r.createElement('div', { className: 'ge_PageSpinner_SiaLogo' }),
            ),
          );
        };
    },
    345: function (e, t, n) {
      'use strict';
      n.d(t, {
        P: function () {
          return s;
        },
      });
      var r = n(70655),
        a = n(67294),
        o = n(94184),
        i = n.n(o),
        s = function (e) {
          var t = e.disabled,
            n = void 0 !== t && t,
            o = e.children,
            s = e.onClick,
            l = e.classes,
            c = e.others,
            u = (l || {}).root,
            f = n ? 'ge_PrimaryButton_Inactive' : 'ge_PrimaryButton_Active';
          return a.createElement(
            'button',
            (0, r.pi)(
              {
                onClick: s,
                disabled: n,
                className: i()(u, 'ge_PrimaryButton_Common', f),
              },
              c,
            ),
            o,
          );
        };
    },
    10432: function (e, t, n) {
      'use strict';
      n.d(t, {
        T: function () {
          return u;
        },
      });
      var r = n(67294),
        a = n(94184),
        o = n.n(a),
        i = 'ge_Tooltip_Bubble',
        s = 'ge_Tooltip_Top',
        l = 'ge_Tooltip_Bottom',
        c = 'ge_Tooltip_Message';
      function u(e) {
        var t = e.position,
          n = e.message,
          a = e.showOnHover,
          u = e.showOnRender,
          f = e.classes,
          d = e.closeButtonRequired,
          _ = void 0 === d || d,
          p = r.useState(!1),
          m = p[0],
          h = p[1],
          g = r.useState(!1),
          v = g[0],
          E = g[1],
          R = r.useState(!1),
          N = R[0],
          b = R[1],
          O = r.useState(!1),
          x = O[0],
          y = O[1],
          w = r.useState(null != u && u),
          L = w[0],
          I = w[1],
          S = r.useState(''),
          C = S[0],
          M = S[1];
        function A(e) {
          if (e) {
            var t = e.getBoundingClientRect() || {},
              n = window.innerWidth - t.left - 220;
            t.left < 5 ? h(!0) : n < 5 && b(!0);
          }
          m ? E(!0) : N && y(!0);
        }
        var T = (0, r.useRef)(null),
          k = (0, r.useRef)(null),
          P = function (e) {
            T.current && !T.current.contains(e.target) && I(!1);
          };
        (0, r.useEffect)(function () {
          return (
            document.addEventListener('click', P, !0),
            function () {
              document.removeEventListener('click', P, !0);
            }
          );
        }, []);
        var D = function () {
            I(!0);
          },
          H = function () {
            I(!1);
          };
        return (
          (0, r.useEffect)(
            function () {
              var e = k.current ? k.current.offsetWidth : 0;
              e && M(e + 'px');
            },
            [k.current, L],
          ),
          r.createElement(
            'span',
            {
              className: o()(
                'ge_Tooltip_Main',
                null == f ? void 0 : f.tooltipMainWrapper,
              ),
              onMouseLeave: function () {
                return a && H();
              },
            },
            L &&
              'Top' === t &&
              r.createElement(
                'div',
                {
                  id: 'toolTipWrapperId',
                  ref: T,
                  className: o()(
                    i,
                    v ? 'ge_Tooltip_TopleftAlignedStyles' : s,
                    x ? 'ge_Tooltip_TopRightAlignedStyles' : s,
                  ),
                },
                r.createElement(
                  'div',
                  { ref: A, className: c },
                  r.createElement('div', {
                    dangerouslySetInnerHTML: { __html: n },
                  }),
                  _ &&
                    r.createElement('div', {
                      onClick: H,
                      className: 'ge_Tooltip_CancelIcon',
                    }),
                ),
                r.createElement('div', {
                  className: 'ge_Tooltip_OverlayClassTop',
                  style: { width: C },
                  onClick: function () {
                    return I(!1);
                  },
                }),
              ),
            L &&
              'Bottom' === t &&
              r.createElement(
                'div',
                {
                  id: 'toolTipWrapperId',
                  ref: T,
                  className: o()(
                    i,
                    v ? 'ge_Tooltip_BottomleftAlignedStyles' : l,
                    x ? 'ge_Tooltip_BottomRightAlignedStyles' : l,
                  ),
                },
                r.createElement('div', {
                  className: 'ge_Tooltip_OverlayClassBottom',
                }),
                r.createElement(
                  'div',
                  { ref: A, className: c },
                  r.createElement('div', {
                    dangerouslySetInnerHTML: { __html: n },
                  }),
                  _ &&
                    r.createElement('div', {
                      onClick: function () {
                        return H();
                      },
                      className: 'ge_Tooltip_CancelIconBottom',
                    }),
                ),
              ),
            r.createElement(
              'span',
              {
                className: o()(
                  'ge_Tooltip_Trigger',
                  'tooltiptrigger',
                  null == f ? void 0 : f.tooltiptrigger,
                ),
                onClick: function () {
                  return D();
                },
                onMouseOver: function () {
                  return a && D();
                },
                ref: k,
              },
              e.children,
            ),
          )
        );
      }
    },
    70655: function (e, t, n) {
      'use strict';
      n.d(t, {
        pi: function () {
          return r;
        },
      });
      var r = function () {
        return (
          (r =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var a in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }),
          r.apply(this, arguments)
        );
      };
      Object.create;
      Object.create;
    },
    52587: function (e, t, n) {
      'use strict';
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    50029: function (e, t, n) {
      'use strict';
      function r(e, t, n, r, a, o, i) {
        try {
          var s = e[o](i),
            l = s.value;
        } catch (c) {
          return void n(c);
        }
        s.done ? t(l) : Promise.resolve(l).then(r, a);
      }
      function a(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (a, o) {
            var i = e.apply(t, n);
            function s(e) {
              r(i, a, o, s, l, 'next', e);
            }
            function l(e) {
              r(i, a, o, s, l, 'throw', e);
            }
            s(void 0);
          });
        };
      }
      n.d(t, {
        Z: function () {
          return a;
        },
      });
    },
    59499: function (e, t, n) {
      'use strict';
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    16835: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(2937);
      function a(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != n) {
              var r,
                a,
                o = [],
                i = !0,
                s = !1;
              try {
                for (
                  n = n.call(e);
                  !(i = (r = n.next()).done) &&
                  (o.push(r.value), !t || o.length !== t);
                  i = !0
                );
              } catch (l) {
                (s = !0), (a = l);
              } finally {
                try {
                  i || null == n.return || n.return();
                } finally {
                  if (s) throw a;
                }
              }
              return o;
            }
          })(e, t) ||
          (0, r.Z)(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
    },
    27812: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(52587);
      var a = n(2937);
      function o(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return (0, r.Z)(e);
          })(e) ||
          (function (e) {
            if (
              ('undefined' !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e['@@iterator']
            )
              return Array.from(e);
          })(e) ||
          (0, a.Z)(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
    },
    2937: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(52587);
      function a(e, t) {
        if (e) {
          if ('string' === typeof e) return (0, r.Z)(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? (0, r.Z)(e, t)
              : void 0
          );
        }
      }
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 179], function () {
      return t(6840), t(69898);
    });
    var n = e.O();
    _N_E = n;
  },
]);
