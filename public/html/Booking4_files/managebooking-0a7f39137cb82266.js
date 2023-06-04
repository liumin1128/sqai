(self.webpackJsonpManageBooking = self.webpackJsonpManageBooking || []).push([
  [847],
  {
    55012: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          default: function () {
            return f;
          },
        });
      var n = a(16835),
        o = (a(87794), a(67294)),
        r = a(3985),
        i = a(13456),
        c = a(69898),
        s = a(9008),
        u = a.n(s),
        l = a(85893);
      function f(e) {
        var t,
          a = e.secondaryTranslationsState,
          s = e.overviewDataState,
          f = e.creditCheckDataState,
          d = e.redirectToOverviewPage,
          v = e.isFormPost,
          g = e.creditCheckData,
          w = e.overviewPageData,
          h = (0, c.useRouter)(),
          k = (0, o.useContext)(r.ko),
          p = k.locale,
          S = k.country,
          m = o.useState(''),
          _ = (0, n.Z)(m, 2),
          y = _[0],
          P = _[1];
        return (
          (0, o.useEffect)(
            function () {
              v &&
                (g
                  ? h.push('/managebooking/flightcreditcheck')
                  : w && h.push('/#'));
            },
            [g, w, h, v],
          ),
          (0, o.useEffect)(
            function () {
              if (!v) {
                var e = '_mbSecondaryData';
                if (a[0])
                  localStorage.setItem(
                    e,
                    JSON.stringify({ data: a[0], locale: p }),
                  );
                else {
                  var t = localStorage.getItem(e);
                  if (t) {
                    var n = JSON.parse(t);
                    if (n.locale === p) return void a[1](n.data);
                  }
                  window.location.replace(window.location.href);
                }
              }
              P(window.location.href);
            },
            [a, p, v],
          ),
          a[0]
            ? (0, l.jsxs)(r.Qu, {
                type: 'Secondary',
                translations: a[0],
                country: S,
                children: [
                  (0, l.jsxs)(u(), {
                    children: [
                      (0, l.jsx)('title', {
                        children:
                          null === (t = a[0]) || void 0 === t
                            ? void 0
                            : t.manageBooking,
                      }),
                      (0, l.jsx)('link', { rel: 'canonical', href: y }),
                    ],
                  }),
                  (0, l.jsx)(i.AW, {
                    redirectToOverviewPage: d,
                    setOverviewData: s[1],
                    setCreditCheckData: f[1],
                    isFormPost: v,
                  }),
                ],
              })
            : null
        );
      }
      f.getInitialProps = function (e) {
        e.req, e.res, e.query;
        return {};
      };
    },
    52450: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/managebooking',
        function () {
          return a(55012);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (t = 52450), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
