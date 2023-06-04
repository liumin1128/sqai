(self.webpackJsonpManageBooking = self.webpackJsonpManageBooking || []).push([
  [567],
  {
    16858: function (e, n, a) {
      'use strict';
      a.d(n, {
        j: function () {
          return u;
        },
        q: function () {
          return s;
        },
      });
      a(67294);
      var s,
        i = a(95394),
        r = a.n(i),
        t = a(77484),
        o = a.n(t),
        l = a(94184),
        d = a.n(l),
        c = a(85893);
      function p(e) {
        var n = e.imagePath,
          a = n
            ? { backgroundImage: 'url('.concat('').concat(n, ')') }
            : void 0;
        return (0, c.jsx)('div', {
          className: d()(o().wrapper, 'wrapper'),
          style: a,
        });
      }
      function u(e) {
        var n = e.imagePath,
          a = e.pageName;
        return (0, c.jsx)('div', {
          className: d()(
            r().wrapper,
            a === s.Overview ? r().overView : r().creditCheck,
            'wrapper',
          ),
          children: (0, c.jsx)(p, { imagePath: n }),
        });
      }
      !(function (e) {
        (e.Overview = 'OVERVIEWPAGE'), (e.CreditCheck = 'CREDITCHECK');
      })(s || (s = {}));
    },
    82085: function (e, n, a) {
      'use strict';
      a.d(n, {
        y: function () {
          return l;
        },
      });
      var s = a(52862),
        i = a.n(s),
        r = a(94184),
        t = a.n(r),
        o = a(85893);
      function l(e) {
        var n = e.header,
          a = e.subHeader;
        return (0, o.jsx)('div', {
          className: t()(i().mastHeadTitle, 'mastHeadTitle'),
          children: (0, o.jsxs)('div', {
            className: t()(i().details, 'details'),
            children: [
              (0, o.jsx)('p', {
                className: t()(i().title, 'title'),
                children: n,
              }),
              (0, o.jsx)('p', {
                className: t()(i().subtitle, 'subtitle'),
                children: a,
              }),
            ],
          }),
        });
      }
    },
    74398: function (e, n, a) {
      'use strict';
      a.r(n),
        a.d(n, {
          default: function () {
            return ys;
          },
        });
      var s = a(87794),
        i = a.n(s),
        r = a(67294),
        t = a(50029),
        o = a(16835),
        l = a(16858),
        d = a(59499),
        c = a(27812),
        p = a(42274),
        u = a.n(p),
        g = a(18619),
        m = a.n(g),
        h = a(94184),
        v = a.n(h),
        _ = a(34634),
        f = a(82085),
        x = a(3985),
        C = a(85893);
      function b(e) {
        var n = e.bannerContent,
          a = e.fareConditionArray,
          s = e.getFareConditionData,
          i = e.fareConditionRequest,
          t = e.fareNotesConditionRequest,
          o = e.formattedFullFareConditionData,
          l = e.ticketsAndReceiptsData,
          d = e.lastName,
          c = e.isFlightCreditPnr,
          p = e.getDocumentResponseReady,
          u = n.header,
          g = n.subHeader,
          h = n.bookingReference,
          b = n.disableViewTicketAndReceiptReason,
          N = n.showBackToTripLink,
          j = n.disableFareConditionReason,
          I = (0, r.useContext)(x.dd),
          w = (0, r.useContext)(x.ko).locale,
          P = (0, r.useContext)(x.Jj)['feature.enableFareConditions.switch']
            ? I['banner.yourFareCondition']
            : '',
          S = '/'.concat(w, '/ppsclub-krisflyer/bookings/upcoming-flights/'),
          A =
            I['banner.ticketsAndReceipts'].charAt(0).toUpperCase() +
            I['banner.ticketsAndReceipts'].toLowerCase().slice(1);
        return (0, C.jsxs)('div', {
          className: v()(m().wrapper, 'wrapper'),
          children: [
            (0, C.jsxs)('div', {
              className: v()(m().headerWrap, 'headerWrap'),
              children: [
                N &&
                  (0, C.jsx)('a', {
                    href: S,
                    children: (0, C.jsx)('span', {
                      className: v()(m().backToTripLink, 'backToTripLink'),
                      children: I['banner.backToAllTrips'],
                    }),
                  }),
                (0, C.jsx)(f.y, { header: u, subHeader: g }),
              ],
            }),
            (0, C.jsx)(_.P, {
              bookingReference: h,
              bookingReferenceHeading:
                I['banner.bookingReference'].toUpperCase(),
              disableViewTicketAndReceiptReason: b,
              ctaHeading: A,
              hideViewTicketAndReceipt: !1,
              fareCondition: a,
              fareConditionRequest: i,
              getFareConditionData: s,
              fareConditionLink: P,
              fareNotesConditionRequest: t,
              formattedFullFareConditionData: o,
              disableFareConditionReason: j,
              ticketsAndReceiptsData: l,
              lastName: d,
              isFlightCreditPnr: c,
              getDocumentResponseReady: p,
            }),
          ],
        });
      }
      var N = a(59482),
        j = a(33235),
        I = a.n(j),
        w = a(922),
        P = a(26914),
        S = (a(48629), a(84753)),
        A = a.n(S),
        T = (a(10581), a(13473)),
        D = a.n(T),
        k = a(76457),
        y = (a(86389), a(53077)),
        R = a(62099),
        L = a(10432),
        O = a(81508),
        B = a(26254),
        F = a(26177),
        M = a(50260),
        H = a.n(M),
        E = a(67396),
        W = function (e) {
          var n = e.hidePopup,
            a = (0, r.useContext)(x.dd);
          return (0, C.jsx)(E.H, {
            onClickClose: function (e) {
              e.stopPropagation(), n();
            },
            width: '710px',
            children: (0, C.jsxs)('div', {
              className: v()(H().wrapper, 'wrapper'),
              children: [
                (0, C.jsx)('h2', {
                  className: v()(H().popupHeading, 'popupHeading'),
                  children: a['baggage.allowence'],
                }),
                ' ',
                (0, C.jsxs)('div', {
                  children: [
                    (0, C.jsx)('span', {
                      className: v()(H().ruleHeader, 'ruleHeader'),
                      children: a['baggage.weightConcept'],
                    }),
                    (0, C.jsx)('p', {
                      className: v()(H().ruleContent, 'ruleContent'),
                      children: a['baggage.applicable'],
                    }),
                  ],
                }),
                (0, C.jsx)('div', {
                  className: v()(H().tableOuter, 'tableOuter'),
                  children: (0, C.jsxs)('table', {
                    cellSpacing: 0,
                    cellPadding: 0,
                    className: v()(H().table, 'table'),
                    children: [
                      (0, C.jsxs)('tr', {
                        className: v()(H().rowHeading, 'rowHeading'),
                        children: [
                          (0, C.jsx)('th', {
                            children: a['baggage.CabinClass'],
                          }),
                          (0, C.jsx)('th', {
                            children: a['baggage.allowenceText'],
                          }),
                          (0, C.jsx)('th', { children: a['baggage.PPSclub'] }),
                          (0, C.jsx)('th', {
                            className: v()(H().thWithPadding, 'thWithPadding'),
                            dangerouslySetInnerHTML: {
                              __html: a['baggage.kfelitegold'],
                            },
                          }),
                          (0, C.jsx)('th', {
                            className: v()(H().thWithPadding, 'thWithPadding'),
                            dangerouslySetInnerHTML: {
                              __html: a['baggage.star'],
                            },
                          }),
                        ],
                      }),
                      (0, C.jsxs)('tbody', {
                        children: [
                          (0, C.jsxs)('tr', {
                            className: v()(H().rowGrey, 'rowGrey'),
                            children: [
                              (0, C.jsx)('td', {
                                children: (0, C.jsx)('strong', {
                                  children: a['baggage.suits'],
                                }),
                              }),
                              (0, C.jsx)('td', { children: '50 kg' }),
                              (0, C.jsxs)('td', {
                                children: ['50 kg ', a['baggage.extra']],
                              }),
                              (0, C.jsxs)('td', {
                                children: ['20 kg ', a['baggage.extra']],
                              }),
                              (0, C.jsxs)('td', {
                                children: ['20 kg ', a['baggage.extra']],
                              }),
                            ],
                          }),
                          (0, C.jsxs)('tr', {
                            className: v()(H().rowDarkGrey, 'rowDarkGrey'),
                            children: [
                              (0, C.jsx)('td', {
                                children: (0, C.jsx)('strong', {
                                  children: a['baggage.first'],
                                }),
                              }),
                              (0, C.jsx)('td', { children: '50 kg' }),
                              (0, C.jsxs)('td', {
                                children: ['50 kg\xa0', a['baggage.extra']],
                              }),
                              (0, C.jsxs)('td', {
                                children: ['20 kg ', a['baggage.extra']],
                              }),
                              (0, C.jsxs)('td', {
                                children: ['20 kg ', a['baggage.extra']],
                              }),
                            ],
                          }),
                          (0, C.jsxs)('tr', {
                            className: v()(H().rowGrey, 'rowGrey'),
                            children: [
                              (0, C.jsx)('td', {
                                children: (0, C.jsx)('strong', {
                                  children: a['baggage.Business'],
                                }),
                              }),
                              (0, C.jsx)('td', { children: '40 kg' }),
                              (0, C.jsxs)('td', {
                                children: ['40 kg\xa0', a['baggage.extra']],
                              }),
                              (0, C.jsxs)('td', {
                                children: ['20 kg ', a['baggage.extra']],
                              }),
                              (0, C.jsxs)('td', {
                                children: ['20 kg ', a['baggage.extra']],
                              }),
                            ],
                          }),
                          (0, C.jsxs)('tr', {
                            className: v()(H().rowDarkGrey, 'rowDarkGrey'),
                            children: [
                              (0, C.jsx)('td', {
                                children: (0, C.jsx)('strong', {
                                  children: a['baggage.PremiumEconomy'],
                                }),
                              }),
                              (0, C.jsx)('td', { children: '35 kg' }),
                              (0, C.jsxs)('td', {
                                children: ['35kg\xa0', a['baggage.extra']],
                              }),
                              (0, C.jsxs)('td', {
                                children: ['20 kg ', a['baggage.extra']],
                              }),
                              (0, C.jsxs)('td', {
                                children: ['20 kg ', a['baggage.extra']],
                              }),
                            ],
                          }),
                          (0, C.jsxs)('tr', {
                            className: v()(H().rowGrey, 'rowGrey'),
                            children: [
                              (0, C.jsx)('td', {
                                children: (0, C.jsx)('strong', {
                                  children: a['baggage.economyFlexy'],
                                }),
                              }),
                              (0, C.jsx)('td', { children: '30 kg' }),
                              (0, C.jsxs)('td', {
                                children: ['30 kg ', a['baggage.extra']],
                              }),
                              (0, C.jsxs)('td', {
                                children: ['20 kg ', a['baggage.extra']],
                              }),
                              (0, C.jsxs)('td', {
                                children: ['20 kg ', a['baggage.extra']],
                              }),
                            ],
                          }),
                          (0, C.jsxs)('tr', {
                            className: v()(H().rowDarkGrey, 'rowDarkGrey'),
                            children: [
                              (0, C.jsx)('td', {
                                children: (0, C.jsx)('strong', {
                                  children: a['baggage.EconomyStandard'],
                                }),
                              }),
                              (0, C.jsx)('td', { children: '30 kg' }),
                              (0, C.jsxs)('td', {
                                children: ['30 kg ', a['baggage.extra']],
                              }),
                              (0, C.jsxs)('td', {
                                children: ['20 kg ', a['baggage.extra']],
                              }),
                              (0, C.jsxs)('td', {
                                children: ['20 kg ', a['baggage.extra']],
                              }),
                            ],
                          }),
                          (0, C.jsxs)('tr', {
                            className: v()(H().rowGrey, 'rowGrey'),
                            children: [
                              (0, C.jsx)('td', {
                                children: (0, C.jsx)('strong', {
                                  children: a['baggage.EconomyValue'],
                                }),
                              }),
                              (0, C.jsx)('td', { children: '25 kg' }),
                              (0, C.jsxs)('td', {
                                children: ['25 kg ', a['baggage.extra']],
                              }),
                              (0, C.jsxs)('td', {
                                children: ['20 kg ', a['baggage.extra']],
                              }),
                              (0, C.jsxs)('td', {
                                children: ['20 kg ', a['baggage.extra']],
                              }),
                            ],
                          }),
                          (0, C.jsxs)('tr', {
                            className: v()(H().rowDarkGrey, 'rowDarkGrey'),
                            children: [
                              (0, C.jsx)('td', {
                                children: (0, C.jsx)('strong', {
                                  children: a['baggage.EconomyLite'],
                                }),
                              }),
                              (0, C.jsx)('td', { children: '25 kg' }),
                              (0, C.jsxs)('td', {
                                children: ['25 kg ', a['baggage.extra']],
                              }),
                              (0, C.jsxs)('td', {
                                children: ['20 kg ', a['baggage.extra']],
                              }),
                              (0, C.jsxs)('td', {
                                children: ['20 kg ', a['baggage.extra']],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, C.jsx)('p', {
                  className: v()(H().ruleContent, 'ruleContent'),
                  children: a['baggage.infantMsg'],
                }),
                (0, C.jsxs)('div', {
                  children: [
                    (0, C.jsx)('span', {
                      className: v()(H().ruleHeader, 'ruleHeader'),
                      children: a['baggage.Piececoncept'],
                    }),
                    (0, C.jsxs)('div', {
                      className: v()(H().ruleContent, 'ruleContent'),
                      children: [
                        (0, C.jsx)('p', {
                          className: v()(
                            H().baggageApplicable,
                            'baggageApplicable',
                          ),
                          children: a['baggage.Piececoncept.applicable'],
                        }),
                        (0, C.jsxs)('ol', {
                          className: v()(H().bottomList, 'bottomList'),
                          children: [
                            (0, C.jsx)('li', {
                              children: a['baggage.Piececoncept.1'],
                            }),
                            (0, C.jsx)('li', {
                              children: a['baggage.Piececoncept.2'],
                            }),
                            (0, C.jsx)('li', {
                              children: a['baggage.Piececoncept.3'],
                            }),
                            (0, C.jsx)('li', {
                              children: a['baggage.Piececoncept.4'],
                            }),
                            (0, C.jsx)('li', {
                              children: a['baggage.Piececoncept.5'],
                            }),
                            (0, C.jsx)('li', {
                              dangerouslySetInnerHTML: {
                                __html: a['baggage.Piececoncept.6'],
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      function K(e) {
        var n,
          a = e.rewards,
          s = e.rewardsResponse,
          i = e.isPrincipleKF,
          t = e.currentSegment,
          o = e.redirectToSubFlow,
          l = null === s || void 0 === s ? void 0 : s.isLoading,
          d = (0, r.useContext)(x.dd),
          c = function (e) {
            switch (e) {
              case '25BM KM VCHR':
                return d['rewards.25percentbonus'];
              case '50BM KM VCHR':
                return d['rewards.50percentbonus'];
              case 'DBL ELI VCHR':
              case 'DBL ACL VCHR':
                return d['rewards.DoubleKF'];
              case 'RWD00001R102':
                return d['rewards.ShortHaul'];
              case 'RWD00001R101':
                return d['rewards.Premium'];
              case 'RWD00001R100':
                return d['rewards.AdvanceUpgrade'];
              default:
                return '';
            }
          };
        return (0, C.jsx)(k.Z, {
          type: 'text',
          showLoadingAnimation: !0,
          ready: !l,
          children: (0, C.jsx)('div', {
            className: D().preferences,
            children: (0, C.jsxs)('div', {
              className: v()(
                D().preferencesMain,
                D().rewardsContainer,
                'preferencesMain',
              ),
              children: [
                (0, C.jsx)('img', {
                  src: '/assets/manage-booking/icons/rewards.svg',
                  className: v()(D().rewardsIcon, 'lightIcon'),
                }),
                (0, C.jsxs)('div', {
                  className: v()(
                    D().preferencesMainContent,
                    'preferencesMainContent',
                  ),
                  children: [
                    (0, C.jsx)('span', {
                      className: v()(D().heading, 'heading'),
                      children: d.rewards,
                    }),
                    (0, C.jsx)('div', {
                      className: v()(D().rewardsSubContent),
                      children:
                        null === a ||
                        void 0 === a ||
                        null === (n = a.promocodes) ||
                        void 0 === n
                          ? void 0
                          : n.map(function (e, n) {
                              var a,
                                r,
                                l =
                                  null === s ||
                                  void 0 === s ||
                                  null === (a = s.rewards) ||
                                  void 0 === a
                                    ? void 0
                                    : a.find(function (n) {
                                        return (
                                          n.id === e.code &&
                                          t.toString() === e.segmentId
                                        );
                                      });
                              return l
                                ? (0, C.jsxs)(
                                    'div',
                                    {
                                      children: [
                                        (0, C.jsx)('span', {
                                          className: v()(
                                            D().rewardsContent,
                                            'rewardsContent',
                                          ),
                                          children: c(
                                            null !==
                                              (r =
                                                null === l || void 0 === l
                                                  ? void 0
                                                  : l.rewardData) &&
                                              void 0 !== r
                                              ? r
                                              : '',
                                          ),
                                        }),
                                        i &&
                                          (0, C.jsx)('span', {
                                            onClick: function () {
                                              o(l.rewardNumber, l.rewardType);
                                            },
                                            className: v()(
                                              D().rewardsRemove,
                                              'rewardsRemove',
                                            ),
                                            children: d['rewards.remove'],
                                          }),
                                        !i &&
                                          (0, C.jsx)('div', {
                                            className:
                                              D().disabledRewardsContainer,
                                            children: (0, C.jsx)(L.T, {
                                              position: 'Top',
                                              message: d['rewards.disabled'],
                                              children: (0, C.jsx)('span', {
                                                className: v()(
                                                  D().disabled,
                                                  'rewardsRemove',
                                                ),
                                                children: d['rewards.remove'],
                                              }),
                                            }),
                                          }),
                                      ],
                                    },
                                    n,
                                  )
                                : '';
                            }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      var U = a(53320);
      function G(e) {
        var n,
          a,
          s,
          i,
          t,
          o,
          l,
          d,
          c = (0, r.useContext)(x.dd),
          p = e.seatData,
          u = e.isSelectionDisabled,
          g = e.complimentarySeat,
          m = e.redirectTosubflow,
          h = e.passengerID,
          _ = e.isNewSeatEnabled,
          f = e.scootPnr,
          b = e.segmentAirlineCode,
          N = e.airlineCodeArray,
          j = e.cabinClassCode,
          I = e.selectedFlightIndex,
          w = u || p.disabledReason,
          P = null === (n = p.seat) || void 0 === n ? void 0 : n.seatType,
          S = p.seatPendingStatus,
          A = p.packPendingStatus,
          T = p.additionalBaggage,
          k = 'url('.concat(
            '/assets/manage-booking/icons/icon-bundle.svg',
            ')',
          );
        !(function (e) {
          (e.SINGAPOREAIRLINE = 'SQ'),
            (e.SCOOTAIRLINE = 'TR'),
            (e.SCOOTPLUS = 'SP'),
            (e.OAL = 'OAL');
        })(d || (d = {}));
        var R = ['S', 'T', 'P', 'Z', 'C', 'J', 'U', 'D'],
          O =
            !w || (null !== (a = p.seat) && void 0 !== a && a.seatNumber)
              ? D().bold
              : '',
          B = function (e) {
            switch (e) {
              case d.SINGAPOREAIRLINE:
                return (0, C.jsx)('span', {
                  'data-testid': 'message',
                  className: v()(D().additionalInfo, 'additionalInfo'),
                  children:
                    g &&
                    c['passengersPreferances.complimentarySeatInfo'].replace(
                      '{0}',
                      g.tierName,
                    ),
                });
              case d.SCOOTAIRLINE:
                return (0, C.jsx)('span', {
                  'data-testid': 'else-statement-message',
                  className: v()(D().additionalInfo, 'additionalInfo'),
                  dangerouslySetInnerHTML: g && { __html: g.msg },
                });
              case d.SCOOTPLUS:
                return (0, C.jsx)('span', {
                  'data-testid': 'message-for-complementary-seat-guest',
                  className: v()(D().additionalInfo, 'additionalInfo'),
                  dangerouslySetInnerHTML: {
                    __html:
                      c[
                        'passengersPreferences.scoot.seat.premiumEconomy.guest'
                      ],
                  },
                });
              case d.OAL:
                return (0, C.jsx)('span', {
                  'data-testid': 'empty-message',
                  children: '',
                });
              default:
                return (0, C.jsx)('span', {
                  'data-testid': 'empty-message-for-complementary-seat-false',
                  children: '',
                });
            }
          };
        return (0, C.jsx)('div', {
          'data-testid': 'handle-seat-clicked',
          onClick: function (e) {
            f && b != d.SINGAPOREAIRLINE
              ? window.open(
                  c['passengersPreferences.scoot.seat.flyScootUrl'],
                  '_blank',
                )
              : w ||
                (_
                  ? m(e, y.y.CIB_SEAT_SELECTION, h)
                  : m(e, y.y.SEAT_SELECTION));
          },
          children: (0, C.jsxs)('div', {
            className: v()(
              D().preferences,
              w ? '' : D().preferencesWithHover,
              w ? '' : D().cursorPointer,
            ),
            children: [
              (0, C.jsxs)('div', {
                className: v()(D().preferencesMain, 'preferencesMain'),
                id: 'MBVS_Seat_selection',
                children: [
                  (0, C.jsx)('em', {
                    className: v()(D().seatIcon, 'seatIcon'),
                  }),
                  (0, C.jsxs)('div', {
                    className: v()(
                      D().preferencesMainContent,
                      'preferencesMainContent',
                    ),
                    children: [
                      (0, C.jsx)('span', {
                        className: v()(D().heading, 'heading'),
                        children: c.seat,
                      }),
                      (0, C.jsxs)('span', {
                        className: v()(D().standard, 'standard'),
                        children: [
                          null !== (s = p.seat) && void 0 !== s && s.seatNumber
                            ? (0, C.jsx)('span', {
                                className: v()(O, 'bold'),
                                children:
                                  null === (i = p.seat) || void 0 === i
                                    ? void 0
                                    : i.seatNumber,
                              })
                            : (0, C.jsx)('span', {
                                className: v()(
                                  D().noseatSelected,
                                  'noseatSelected',
                                ),
                                children: c.noSeatSelected,
                              }),
                          '\xa0',
                          P,
                          (null === (t = p.seat) || void 0 === t
                            ? void 0
                            : t.isBundle) &&
                            (0, C.jsx)('span', {
                              onClick: function (e) {
                                return e.stopPropagation();
                              },
                              className: v()(D().standard, 'standard'),
                              id: 'addonDeal',
                              children: (0, C.jsx)(L.T, {
                                position: 'Top',
                                message: c['passengersPreferances.addOnMsg'],
                                showOnHover: !1,
                                children: (0, C.jsx)('div', {
                                  className: v()(D().bundleImg, 'bundleImg'),
                                  style: { backgroundImage: k },
                                  children: ' ',
                                }),
                              }),
                            }),
                          (S || A) &&
                            (0, C.jsx)('span', {
                              className: v()(
                                D().pendingLabel,
                                D().mobile,
                                'pendingLabel',
                              ),
                              children: '('.concat(c.pending, ')'),
                            }),
                        ],
                      }),
                      (S || A) &&
                        (0, C.jsxs)(C.Fragment, {
                          children: [
                            (0, C.jsx)('span', {
                              className: v()(
                                D().pendingLabel,
                                D().desktop,
                                'pendingLabel',
                              ),
                              children: '('.concat(c.pending, ')'),
                            }),
                            (0, C.jsx)('span', {
                              className: v()(D().continueLink, 'continueLink'),
                              children: c.continueShopping,
                            }),
                          ],
                        }),
                    ],
                  }),
                  !(S || A) &&
                    !w &&
                    (0, C.jsx)('em', {
                      'data-testid': 'seatChevron',
                      className: v()(D().chevronIcon, 'chevronIcon'),
                    }),
                ],
              }),
              null !== g && void 0 !== g && g.eligible
                ? g && b == d.SINGAPOREAIRLINE && !w && '' !== g.tierName
                  ? B('SQ')
                  : g &&
                    f &&
                    b == d.SCOOTAIRLINE &&
                    b == N[I] &&
                    !w &&
                    '' !== g.tierName
                  ? B('TR')
                  : g &&
                    f &&
                    (function () {
                      var e =
                        null === g || void 0 === g ? void 0 : g.cabinClassCode;
                      return (
                        void 0 !== e && e.length > 0 && -1 !== R.indexOf(e)
                      );
                    })() &&
                    b == d.SCOOTAIRLINE &&
                    b == N[I] &&
                    '' === (null === g || void 0 === g ? void 0 : g.tierName) &&
                    !g.isOAL
                  ? B('SP')
                  : B('OAL')
                : B(''),
              S &&
                (0, C.jsx)('span', {
                  className: v()(D().additionalInfo, 'additionalInfo'),
                  children: c.seatPendingAlertMessage,
                }),
              f &&
                b == d.SCOOTAIRLINE &&
                b == N[I] &&
                '' == (null === g || void 0 === g ? void 0 : g.tierName) &&
                (0, C.jsx)('div', {
                  className: v()(D().additionalInfo, 'additionalInfo'),
                  children: (0, C.jsx)('span', {
                    dangerouslySetInnerHTML: {
                      __html: (function () {
                        var e;
                        return (
                          (function (e) {
                            e.ECONOMY = 'Y';
                          })(e || (e = {})),
                          j == e.ECONOMY
                            ? c['passengersPreferences.scoot.seat.economy']
                            : ''
                        );
                      })().replace(
                        '{0}',
                        '<img src="/assets/images/svg/icons/external-link.svg"\n                        alt="external-link"/>',
                      ),
                    },
                  }),
                }),
              A &&
                !!P &&
                (T
                  ? (0, C.jsx)('span', {
                      className: v()(D().additionalInfo, 'additionalInfo'),
                      children: c.packPendingAlertMessage
                        .replace(
                          '{seatType}',
                          null !==
                            (o =
                              null === P || void 0 === P
                                ? void 0
                                : P.toLocaleLowerCase()) && void 0 !== o
                            ? o
                            : 'seat',
                        )
                        .replace(
                          '{additionalBaggage}',
                          null !== T && void 0 !== T ? T : '',
                        ),
                    })
                  : (0, C.jsx)('span', {
                      className: v()(D().additionalInfo, 'additionalInfo'),
                      children: c.packPendingAlertMessageWithoutBaggage.replace(
                        '{seatType}',
                        null !==
                          (l =
                            null === P || void 0 === P
                              ? void 0
                              : P.toLocaleLowerCase()) && void 0 !== l
                          ? l
                          : 'seat',
                      ),
                    })),
              p.disabledReason &&
                (0, C.jsx)('span', {
                  className: v()(D().additionalInfo, 'additionalInfo'),
                  children: p.disabledReason,
                }),
            ],
          }),
        });
      }
      function V(e) {
        var n,
          a = e.meals,
          s = e.redirectTosubflow,
          i = e.scootPnr,
          t = e.segmentAirlineCode,
          o = a || {},
          l = o.isLoading,
          d = o.disabledReason,
          c = o.additionalMessage,
          p = o.meal,
          u = o.isSelectionEnabled,
          g = o.cabinClass,
          m = o.isDepartureLessThan24Hrs,
          h = o.isDepartureLessThan72Hrs,
          _ = (0, r.useContext)(x.dd),
          f = d || c;
        return (
          (function (e) {
            (e.SINGAPOREAIRLINE = 'SQ'), (e.SCOOTAIRLINE = 'TR');
          })(n || (n = {})),
          (0, C.jsx)('div', {
            onClick: function (e) {
              i && t != n.SINGAPOREAIRLINE
                ? window.open(
                    _['passengersPreferences.meal.flyscootUrl'],
                    '_blank',
                  )
                : !l && u && s(e, y.y.MEAL_SELECTION);
            },
            'data-testid': 'handle-meal-clicked',
            children: (0, C.jsxs)('div', {
              className: v()(
                D().preferences,
                u && !l ? D().preferencesWithHover : '',
                u && !l ? D().cursorPointer : '',
                'preferences',
                u && !l ? 'mealSpecial' : '',
              ),
              children: [
                (0, C.jsxs)('div', {
                  className: v()(D().preferencesMain, 'preferencesMain'),
                  id: 'MBVS_Meal_selection',
                  children: [
                    (0, C.jsx)('em', {
                      className: v()(D().mealIcon, 'mealIcon'),
                    }),
                    (0, C.jsxs)('div', {
                      className: v()(
                        D().preferencesMainContentMeal,
                        'preferencesMainContentMeal',
                      ),
                      children: [
                        (0, C.jsx)('span', {
                          className: v()(D().heading, 'heading'),
                          children: _.meals,
                        }),
                        !m &&
                          h &&
                          ('F' === g || 'J' === g || 'S' === g) &&
                          u &&
                          (0, C.jsx)('div', {
                            className: v()(D().orangeBox, 'orangeBox'),
                            children: (0, C.jsx)('div', {
                              className: v()(D().rectangle, 'rectangle'),
                              children: (0, C.jsx)('span', {
                                className: v()(
                                  D().selectionCloses,
                                  'selectionCloses',
                                ),
                                children: _.mealsClosingSoon,
                              }),
                            }),
                          }),
                      ],
                    }),
                    u &&
                      !l &&
                      (0, C.jsx)('em', {
                        'data-testid': 'mealChevron',
                        className: v()(D().chevronIcon, 'chevronIcon'),
                      }),
                  ],
                }),
                i &&
                  t != n.SINGAPOREAIRLINE &&
                  (0, C.jsxs)('div', {
                    className: v()(D().subheading, 'subheading'),
                    children: [
                      (0, C.jsx)('div', {
                        className: v()(D().hotmeal, 'hotmeal'),
                        dangerouslySetInnerHTML: {
                          __html: _['passengersAndPreferences.meal.hotmeal'],
                        },
                      }),
                      (0, C.jsx)('div', {
                        dangerouslySetInnerHTML: {
                          __html: _['passengersAndPreferences.meal.menu'],
                        },
                      }),
                    ],
                  }),
                (0, C.jsx)(k.Z, {
                  type: 'text',
                  showLoadingAnimation: !0,
                  ready: !l,
                  className: v()(
                    D().placeHolderSubContent,
                    'placeHolderSubContent',
                  ),
                  children:
                    p && 0 !== p.length
                      ? (0, C.jsxs)('div', {
                          className: v()(D().secondary, 'secondary'),
                          children: [
                            (0, C.jsx)('em', {
                              className: v()(D().dummyIcon, 'dummyIcon'),
                            }),
                            (0, C.jsx)('div', {
                              className: v()(D().mealList, 'mealList'),
                              children:
                                null === p || void 0 === p
                                  ? void 0
                                  : p.map(function (e) {
                                      var n = e.type,
                                        a = e.category,
                                        s = e.name;
                                      return (0,
                                      C.jsxs)('div', { className: v()(D().preferencesSubContent, D().mealListInner, 'preferencesSubContent'), children: [(0, C.jsx)('span', { className: v()(D().leftCol, D().standard, a || s ? '' : D().fullWidth, 'leftCol'), children: n }), (a || s) && (0, C.jsxs)('span', { className: v()(D().bold, 'bold'), children: [a, s && (0, C.jsx)('span', { className: v()(D().standard, D().mealName, 'mealName'), children: s })] })] }, n);
                                    }),
                            }),
                          ],
                        })
                      : null,
                }),
                !l &&
                  '' !== f &&
                  (0, C.jsx)('span', {
                    className: v()(D().additionalInfo, 'additionalInfo'),
                    dangerouslySetInnerHTML: { __html: f },
                  }),
              ],
            }),
          })
        );
      }
      function q(e) {
        var n,
          a,
          s,
          i,
          t,
          o,
          l,
          d = (0, r.useContext)(x.dd),
          c = e.baggageData,
          p = e.isSelectionDisabled,
          u = e.isInfant,
          g = e.onClick,
          m = e.kfDetails,
          h = e.XBVSEnabled,
          _ = c.hasBaggageData,
          f = c.hasAdditionalQuantity,
          b = c.isBundle,
          N = c.disabledReason,
          j = c.pendingStatus,
          I = c.hasplusGradeBaggage,
          w = c.plusGradeBaggageQty,
          P = c.isLoading,
          S = c.mySQUpgradeFlag,
          A = c.isPieceConcept,
          T = v()(
            D().preferences,
            (!p && !N) || j ? D().preferencesWithHover : '',
            (!p && !N) || j ? D().cursorPointer : '',
          ),
          R = (0, r.useState)(!1),
          O = R[0],
          B = R[1],
          F = h,
          M = 'url('.concat(
            '/assets/manage-booking/icons/icon-bundle.svg',
            ')',
          ),
          H =
            null === (n = c.additionalBaggages) || void 0 === n
              ? void 0
              : n.some(function (e) {
                  var n;
                  return (
                    (null !== (n = e.additionalQty) && void 0 !== n ? n : '')
                      .toLowerCase()
                      .indexOf('*') > -1
                  );
                });
        return (0, C.jsxs)('div', {
          'data-testid': 'handle-baggage-clicked',
          onClick: function (e) {
            ((p || N || O) && !j) || g(e, y.y.EXCESS_BAGGAGE);
          },
          children: [
            (0, C.jsxs)('div', {
              className: v()(T, 'preferences'),
              children: [
                (0, C.jsxs)('div', {
                  className: v()(D().baggageMain, 'baggageMain'),
                  id: 'MBVS_baggage_selection',
                  children: [
                    (0, C.jsx)('em', {
                      className: v()(D().baggageIcon, 'baggageIcon'),
                    }),
                    (0, C.jsxs)('div', {
                      className: v()(
                        D().preferencesMainContent,
                        'preferencesMainContent',
                      ),
                      children: [
                        (0, C.jsx)('span', {
                          className: v()(D().heading, 'heading'),
                          children: d.baggage,
                        }),
                        _ &&
                          (0, C.jsxs)('span', {
                            className: v()(
                              D().bold,
                              'bold',
                              F && A ? D().listItem : '',
                            ),
                            children: [
                              null === c || void 0 === c
                                ? void 0
                                : c.includedQuantity,
                              A &&
                                F &&
                                (0, C.jsx)('span', {
                                  className: D().aditonalText,
                                  children: d['addonList.hotel.added.included'],
                                }),
                            ],
                          }),
                        !_ &&
                          (0, C.jsx)('span', {
                            className: v()(
                              D().bold,
                              'bold',
                              F && A ? D().listItem : '',
                            ),
                            children: d.cabinBaggageOnly,
                          }),
                      ],
                    }),
                    !p &&
                      !N &&
                      (0, C.jsx)('em', {
                        'data-testid': 'baggageChevron',
                        className: v()(D().chevronIcon, 'chevronIcon'),
                      }),
                  ],
                }),
                I &&
                  (0, C.jsxs)('div', {
                    className: v()(D().secondary, 'secondary'),
                    children: [
                      (0, C.jsx)('em', {
                        className: v()(D().dummyIcon, 'dummyIcon'),
                      }),
                      (0, C.jsxs)('div', {
                        className: v()(
                          D().preferencesSubContent,
                          D().additionalBaggage,
                          'additionalBaggage',
                        ),
                        children: [
                          (0, C.jsx)('span', {
                            className: v()(D().leftCol, D().hide, 'leftCol'),
                          }),
                          (0, C.jsxs)('span', {
                            className: v()(D().bold, 'bold'),
                            children: [
                              '+\xa0',
                              null === w || void 0 === w
                                ? void 0
                                : w.toLowerCase(),
                              '\xa0',
                            ],
                          }),
                          ' ',
                          S &&
                            (0, C.jsx)('span', {
                              className: v()(D().standard, 'standard'),
                              children: d['baggage.increasedMessage'],
                            }),
                          !S &&
                            (0, C.jsx)('span', {
                              className: v()(D().mySqStandard, 'mySqStandard'),
                              children: d.additionalBaggage,
                            }),
                        ],
                      }),
                    ],
                  }),
                b &&
                  (0, C.jsxs)('div', {
                    className: v()(D().secondary, 'secondary'),
                    children: [
                      (0, C.jsx)('em', {
                        className: v()(D().dummyIcon, 'dummyIcon'),
                      }),
                      (0, C.jsxs)('div', {
                        className: v()(
                          D().preferencesSubContent,
                          D().additionalBaggage,
                          'additionalBaggage',
                        ),
                        children: [
                          (0, C.jsx)('span', {
                            className: v()(D().leftCol, D().hide, 'leftCol'),
                          }),
                          (0, C.jsxs)('span', {
                            className: v()(D().bold, 'bold'),
                            children: [
                              '+\xa0',
                              null === c || void 0 === c
                                ? void 0
                                : c.additionalBundleQuantity,
                              b &&
                                (0, C.jsx)('span', {
                                  onClick: function (e) {
                                    return e.stopPropagation();
                                  },
                                  className: v()(D().standard, 'standard'),
                                  children: (0, C.jsx)(L.T, {
                                    position: 'Top',
                                    message:
                                      d['passengersPreferances.addOnMsg'],
                                    showOnHover: !1,
                                    children: (0, C.jsx)('div', {
                                      className: v()(
                                        D().bundleImg,
                                        'bundleImg',
                                      ),
                                      style: { backgroundImage: M },
                                      children: ' ',
                                    }),
                                  }),
                                }),
                            ],
                          }),
                          j &&
                            (0, C.jsxs)(C.Fragment, {
                              children: [
                                (0, C.jsx)('span', {
                                  className: v()(
                                    D().pendingLabel,
                                    'pendingLabel',
                                  ),
                                  children: '('.concat(d.pending, ')'),
                                }),
                                (0, C.jsx)('span', {
                                  className: v()(
                                    D().continueLink,
                                    'continueLink',
                                  ),
                                  children: d.continueShopping,
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                c.additionalBaggages &&
                  (null === (a = c.additionalBaggages) || void 0 === a
                    ? void 0
                    : a.length) > 0 &&
                  (null === (s = c.additionalBaggages) || void 0 === s
                    ? void 0
                    : s.map(function (e, n) {
                        var a, s;
                        return (0, C.jsxs)(
                          'div',
                          {
                            className: v()(
                              D().secondary,
                              F && A ? D().xbagBaggae : '',
                              'secondary',
                            ),
                            children: [
                              (0, C.jsx)('em', {
                                className: v()(D().dummyIcon, 'dummyIcon'),
                              }),
                              (0, C.jsxs)('div', {
                                className: v()(
                                  D().preferencesSubContent,
                                  D().additionalBaggage,
                                  'additionalBaggage',
                                ),
                                children: [
                                  (0, C.jsx)('span', {
                                    className: v()(
                                      D().leftCol,
                                      D().hide,
                                      'leftCol',
                                    ),
                                  }),
                                  F &&
                                    A &&
                                    (0, C.jsx)(C.Fragment, {
                                      children: (0, C.jsxs)('span', {
                                        className:
                                          e.additionalQty &&
                                          ((null === (a = e.additionalQty) ||
                                          void 0 === a
                                            ? void 0
                                            : a
                                                .toLowerCase()
                                                .indexOf('piece')) > -1 ||
                                            (null === (s = e.additionalQty) ||
                                            void 0 === s
                                              ? void 0
                                              : s
                                                  .toLowerCase()
                                                  .indexOf('additional')) > -1)
                                            ? v()(D().bold, D().pieceMain)
                                            : D().pieceAdtnl,
                                        children: [
                                          '\xa0',
                                          null === e || void 0 === e
                                            ? void 0
                                            : e.additionalQty,
                                          (0, C.jsx)('span', {
                                            className: D().aditonalText,
                                            children:
                                              d[
                                                'passengersPreferences.baggage.additionalBaggage'
                                              ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  (!A || !F) &&
                                    (0, C.jsxs)('span', {
                                      className: v()(
                                        D().bold,
                                        D().nonXbag,
                                        'bold',
                                      ),
                                      children: [
                                        '+\xa0',
                                        null === e || void 0 === e
                                          ? void 0
                                          : e.additionalQty,
                                        b &&
                                          (0, C.jsx)('span', {
                                            onClick: function (e) {
                                              return e.stopPropagation();
                                            },
                                            className: v()(
                                              D().standard,
                                              'standard',
                                            ),
                                            children: (0, C.jsx)(L.T, {
                                              position: 'Top',
                                              message:
                                                d[
                                                  'passengersPreferances.addOnMsg'
                                                ],
                                              showOnHover: !1,
                                              children: (0, C.jsx)('div', {
                                                className: v()(
                                                  D().bundleImg,
                                                  'bundleImg',
                                                ),
                                                style: { backgroundImage: M },
                                                children: ' ',
                                              }),
                                            }),
                                          }),
                                      ],
                                    }),
                                  j &&
                                    (0, C.jsxs)(C.Fragment, {
                                      children: [
                                        (0, C.jsx)('span', {
                                          className: v()(
                                            D().pendingLabel,
                                            F && A ? D().pendingRed : '',
                                            'pendingLabel',
                                          ),
                                          children:
                                            F && A
                                              ? d.pending
                                              : '(' + d.pending + ')',
                                        }),
                                        (0, C.jsx)('span', {
                                          className: v()(
                                            D().continueLink,
                                            F && A ? D().continueLinkXbag : '',
                                            'continueLink',
                                          ),
                                          children: d.continueShopping,
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                            ],
                          },
                          n,
                        );
                      })),
                H &&
                  F &&
                  (0, C.jsxs)('div', {
                    className: D().secondary,
                    children: [
                      ' ',
                      (0, C.jsx)('span', {
                        className: D().maxWeight,
                        children: '*' + d.baggageMaximumAlertMessage,
                      }),
                    ],
                  }),
                m &&
                  'SQ' === m.frequentFlyerAirline &&
                  (0, C.jsx)('span', {
                    className: v()(
                      D().viewKfBaggageRules,
                      'viewKfBaggageRules',
                    ),
                    onClick: function (e) {
                      e.stopPropagation(), B(!0);
                    },
                    children: d['passengersPreferences.baggage.KFBaggageInfo'],
                  }),
                j &&
                  f &&
                  (0, C.jsx)('span', {
                    className: v()(D().additionalInfo, 'additionalInfo'),
                    children: d.baggagePendingAlertMessage,
                  }),
                j &&
                  b &&
                  !!c.additionalBundleQuantity &&
                  (c.seatType
                    ? (0, C.jsx)('span', {
                        className: v()(D().additionalInfo, 'additionalInfo'),
                        children: d.packPendingAlertMessage
                          .replace(
                            '{seatType}',
                            null !==
                              (i =
                                null === (t = c.seatType) || void 0 === t
                                  ? void 0
                                  : t.toLocaleLowerCase()) && void 0 !== i
                              ? i
                              : 'seat',
                          )
                          .replace(
                            '{additionalBaggage}',
                            null !== (o = c.additionalBundleQuantity) &&
                              void 0 !== o
                              ? o
                              : '',
                          ),
                      })
                    : (0, C.jsx)('span', {
                        className: v()(D().additionalInfo, 'additionalInfo'),
                        children: d.packPendingAlertMessageWithoutSeat.replace(
                          '{additionalBaggage}',
                          null !== (l = c.additionalBundleQuantity) &&
                            void 0 !== l
                            ? l
                            : '',
                        ),
                      })),
                (0, C.jsx)(k.Z, {
                  type: 'text',
                  showLoadingAnimation: !0,
                  ready: !P,
                  className: v()(
                    D().placeHolderSubContent,
                    'placeHolderSubContent',
                  ),
                  children:
                    N &&
                    !j &&
                    (0, C.jsx)('div', {
                      className: v()(D().additionalInfo, 'additionalInfo'),
                      dangerouslySetInnerHTML: { __html: N },
                    }),
                }),
                u &&
                  (0, C.jsx)('span', {
                    className: v()(D().additionalInfo, 'additionalInfo'),
                    children: d.infantBaggageNotAvailable,
                  }),
              ],
            }),
            O &&
              (0, C.jsx)(W, {
                hidePopup: function () {
                  B(!O);
                },
              }),
          ],
        });
      }
      function Y(e) {
        var n = e.kfDetails,
          a = e.seat,
          s = e.mealData,
          i = e.baggageData,
          t = e.isSelectionDisabled,
          l = e.isInfant,
          d = e.complimentarySeat,
          c = e.redirectToSubFlow,
          p = e.pnr,
          u = e.lastName,
          g = e.isScheduleChangeRefused,
          m = e.isGroupBookingPNR,
          h = e.passengerId,
          _ = e.allPassengers,
          f = e.airlineCode,
          b = e.passengerIndex,
          N = e.paxRewardsData,
          j = e.rewardsResponse,
          I = e.isPrincipleKF,
          w = e.currentSegment,
          P = e.eretailTattoo,
          S = e.salt,
          A = e.isNewSeatEnabled,
          T = e.cabinClassCode,
          k = e.scootPnr,
          L = e.segmentAirlineCode,
          M = e.kfEmail,
          H = e.emailFetched,
          E = e.isLoggedIn,
          W = e.airlineCodeArray,
          Y = e.selectedFlightIndex,
          Z = e.isNewBagaggeFlowEnabled,
          Q = r.useContext(x.ko).locale,
          z = (0, r.useContext)(x.dd),
          J = (0, r.useContext)(x.ko).setPageLoading,
          X = (0, r.useState)(!1),
          $ = X[0],
          ee = X[1],
          ne = (0, r.useState)(!1),
          ae = ne[0],
          se = ne[1],
          ie = r.useState(!1),
          re = (0, o.Z)(ie, 2),
          te = re[0],
          oe = re[1],
          le = r.useState(0),
          de = (0, o.Z)(le, 2),
          ce = de[0],
          pe = de[1],
          ue = (0, r.useState)(!1),
          ge = ue[0],
          me = ue[1],
          he = Z,
          ve = r.useState(null),
          _e = (0, o.Z)(ve, 2),
          fe = _e[0],
          xe = _e[1],
          Ce = (0, r.useState)(''),
          be = Ce[0],
          Ne = Ce[1],
          je = s.isLoading,
          Ie = s.isSelectionEnabled;
        g &&
          !m &&
          ((s.disabledReason =
            z['passengersPreferences.meal.disabled.unticketed']),
          (a.disabledReason =
            z['passengersPreferences.seat.disableMessage.scRefused']),
          (i.disabledReason =
            z['passengersPreferences.baggage.disabled.unticketed'])),
          r.useEffect(
            function () {
              var e,
                n =
                  null === _ || void 0 === _
                    ? void 0
                    : _.every(function (e, n) {
                        return (
                          pe(n),
                          !!e.isInfant ||
                            ((null === (a = e.contactDetails) ||
                            void 0 === a ||
                            null === (s = a[0]) ||
                            void 0 === s
                              ? void 0
                              : s.email) &&
                              '' !==
                                (null === (i = e.contactDetails) ||
                                void 0 === i ||
                                null === (r = i[0]) ||
                                void 0 === r
                                  ? void 0
                                  : r.email) &&
                              (0, U.H6)(
                                null === (t = e.contactDetails) ||
                                  void 0 === t ||
                                  null === (o = t[0]) ||
                                  void 0 === o
                                  ? void 0
                                  : o.email,
                              ) &&
                              !e.isInfant)
                        );
                        var a, s, i, r, t, o;
                      });
              n && pe(void 0),
                me(n),
                se(null !== (e = !n) && void 0 !== e && e);
            },
            [_],
          );
        var we = function (e) {
            var n = { pnr: p, lastName: u, salt: S };
            e &&
              0 === (null === e || void 0 === e ? void 0 : e.button) &&
              (J(!0), (0, R.E)(n, '/mb-addons/excess-baggage'));
          },
          Pe = function (e, n, a) {
            ae
              ? 0 === (null === e || void 0 === e ? void 0 : e.button) &&
                (xe(n), Ne(null !== a && void 0 !== a ? a : ''), oe(!0))
              : a && '' !== a
              ? Se(a)
              : n === y.y.MEAL_SELECTION
              ? c(n, e, b)
              : n === y.y.EXCESS_BAGGAGE && Z
              ? we(e)
              : c(n, e);
          },
          Se = function (e) {
            J(!0),
              (0, R.E)(
                {
                  pnr: p,
                  lastName: u,
                  flowType: y.y.CIB_SEAT_SELECTION,
                  passengerId: e,
                  flightId: a.flightID,
                  locale: Q,
                  salt: S,
                },
                z.seatUrl,
              );
          },
          Ae =
            null === N || void 0 === N
              ? void 0
              : N.promocodes.some(function (e) {
                  return parseInt(e.segmentId) === w;
                });
        return (0, C.jsxs)('div', {
          className: v()(D().preferencesContent, 'preferencesContent'),
          children: [
            (0, C.jsx)('div', {
              className: v()(
                D().borderBottom,
                D().mobileBorder,
                'borderBottom',
              ),
            }),
            $ && (0, C.jsx)(O.P, { locale: B.L.en_UK, scrollToTop: !0 }),
            (0, C.jsx)(G, {
              seatData: a,
              isSelectionDisabled: t,
              complimentarySeat: d,
              pnr: p,
              lastName: u,
              showSpinner: function () {
                return ee(!0);
              },
              redirectTosubflow: Pe,
              passengerID: h,
              isNewSeatEnabled: A,
              cabinClassCode: T,
              scootPnr: k,
              segmentAirlineCode: L,
              airlineCodeArray: W,
              selectedFlightIndex: Y,
            }),
            (0, C.jsx)('div', {
              className: v()(D().borderBottom, 'borderBottom'),
            }),
            (0, C.jsx)(V, {
              meals: s,
              isLoading: je,
              isSelectionEnabled: Ie,
              redirectTosubflow: Pe,
              scootPnr: k,
              segmentAirlineCode: L,
            }),
            (0, C.jsx)('div', {
              className: v()(D().borderBottom, 'borderBottom'),
            }),
            (0, C.jsx)(q, {
              baggageData: i,
              segmentAirlineCode: L,
              scootPnr: k,
              isSelectionDisabled: !!i.isLoading || t,
              kfDetails: n,
              isInfant: l,
              onClick: Pe,
              XBVSEnabled: he,
            }),
            Ae &&
              (0, C.jsx)('div', {
                className: v()(D().borderBottom, 'borderBottom'),
              }),
            Ae &&
              N &&
              (null === j || void 0 === j ? void 0 : j.rewards) &&
              (null === j || void 0 === j ? void 0 : j.rewards.length) > 0 &&
              (0, C.jsx)(K, {
                redirectToSubFlow: function (e, n) {
                  J(!0),
                    (0, R.E)(
                      {
                        pnr: p,
                        lastName: u,
                        subFlow: y.y.CANCEL_REWARDS,
                        rewardNumber: e,
                        paxId: P,
                        rewardType: n,
                        segmentNumber: w,
                      },
                      '/mbRedirectToSubFlow.form',
                    );
                },
                rewards: N,
                rewardsResponse: j,
                isPrincipleKF: I,
                currentSegment: w,
              }),
            te &&
              (0, C.jsx)(F.n, {
                passengers: null !== _ && void 0 !== _ ? _ : [],
                airlineCode: f,
                redirectSubflowName: fe,
                redirectToSubFlow: c,
                redirectToCIBSeatSelection: Se,
                pnr: p,
                flightId: a.flightID,
                hidePopup: function () {
                  oe(!1);
                },
                paxId: be,
                passengerIndex: b,
                locale: Q,
                updateOnly: !1,
                isEmailAvailable: ge,
                emailPopUpIndex: ce,
                showXBPopup: he
                  ? function () {
                      we();
                    }
                  : void 0,
                lastName: u,
                kfEmail: M,
                loading: H,
                isLoggedIn: E,
                preferencesContentProp: te,
              }),
          ],
        });
      }
      var Z = a(29820);
      function Q(e, n) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          n &&
            (s = s.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            a.push.apply(a, s);
        }
        return a;
      }
      function z(e) {
        for (var n = 1; n < arguments.length; n++) {
          var a = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? Q(Object(a), !0).forEach(function (n) {
                (0, d.Z)(e, n, a[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : Q(Object(a)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(a, n),
                );
              });
        }
        return e;
      }
      function J(e) {
        var n = e.showSpinner;
        return (0, C.jsxs)('div', {
          className: v()(A().card, 'card'),
          children: [
            n &&
              (0, C.jsx)(O.P, {
                locale: B.L.en_UK,
                scrollToTop: !0,
                shouldLockBody: !1,
              }),
            (0, C.jsx)(X, z({}, e)),
            (0, C.jsx)(Y, z({}, e)),
          ],
        });
      }
      function X(e) {
        var n = e.no,
          a = e.name,
          s = e.enableUpdatePax,
          i = e.enableRequirePaxDetails,
          t = e.enableAddFreqFlyerNum,
          o = e.kfDetails,
          l = e.isUpdateLinkDisabled,
          d = e.isInfant,
          c = e.accompanyAdultName,
          p = e.accruableMilesData,
          u = e.offpDetails,
          g = e.registeredCustomerId,
          m = e.redirectToSubFlow,
          h = e.passengerNumber,
          _ = e.isSecureFare,
          f = e.isGroupBookingPNR,
          b = e.countryList,
          N = e.airlineCode,
          j = e.showEarnMiles,
          I = e.setIsInitialRenderValue,
          w = e.isInitialRender,
          P = e.contactDetails,
          S = e.updateContactDetails,
          T = e.pnr,
          D = (0, r.useContext)(x.dd),
          k = (0, r.useContext)(x.ko).locale,
          R = o || {},
          L = R.frequentFlyerAirline,
          O = R.oneLetterTierCode,
          B = (u || {}).ssrCode,
          F = (0, r.useState)(null !== f && void 0 !== f && f),
          M = F[0],
          H = F[1];
        return (0, C.jsxs)('div', {
          className: v()(A().passengerContent, 'passengerContent'),
          children: [
            (0, C.jsxs)('div', {
              className: v()(A().passengerDetails, 'passengerDetails'),
              children: [
                (0, C.jsx)('span', {
                  className: v()(A().blueDot, 'blueDot'),
                  children: h,
                }),
                d
                  ? (0, C.jsxs)('div', {
                      className: v()(
                        A().passengerNameWithInfant,
                        'passengerNameWithInfant',
                      ),
                      children: [
                        a,
                        (0, C.jsxs)('span', {
                          className: v()(A().infantLabel, 'infantLabel'),
                          children: ['\xa0\u2014\xa0', D.infant],
                        }),
                      ],
                    })
                  : (0, C.jsx)('span', {
                      className: v()(A().passengerName, 'passengerName'),
                      children: a,
                    }),
              ],
            }),
            d &&
              (0, C.jsxs)('div', {
                className: v()(
                  A().accompanyAdultDetails,
                  'accompanyAdultDetails',
                ),
                children: [
                  (0, C.jsxs)('div', {
                    className: v()(
                      A().accompanyAdultLabel,
                      'accompanyAdultLabel',
                    ),
                    children: [D.accompanyingAdultPassenger, ':'],
                  }),
                  (0, C.jsx)('div', {
                    className: v()(A().infantName, 'infantName'),
                    children: c,
                  }),
                ],
              }),
            !o &&
              !u &&
              g &&
              (0, C.jsx)('span', {
                className: v()(A().registeredCustomer, 'registeredCustomer'),
                children: D['passengersPreferances.registeredCustomer'],
              }),
            'SQ' === L && (0, C.jsx)($, { kfDetails: o }),
            'SQ' === L || 'FQTV' !== B || ('G' !== O && 'S' !== O)
              ? (0, C.jsx)(ne, { offpDetails: u })
              : (0, C.jsx)(ae, { offpDetails: u, starAllianceTier: O }),
            j &&
              o &&
              'SQ' === L &&
              (0, C.jsx)(ee, {
                accruableMilesResponse: p,
                passengerID: null === n || void 0 === n ? void 0 : n.toString(),
                locale: k,
              }),
            t &&
              (0, C.jsx)('a', {
                'data-testid': 'Add-FF-Number',
                className: v()(A().addFreqentNumber, 'addFreqentNumber'),
                onClick: function (e) {
                  return m(y.y.UPDATE_PAX_DETAILS, e);
                },
                children: D['passengersPreferances.addFffNumber'],
              }),
            s &&
              (0, C.jsx)('a', {
                'data-testid': 'Update-passenger-details',
                className: v()(
                  A().updateDetails,
                  l || (_ && A().disabled),
                  'updateDetails',
                ),
                onClick: function (e) {
                  return (function (e) {
                    f ? (H(!0), I(!0)) : l || f || m(y.y.UPDATE_PAX_DETAILS, e);
                  })(e);
                },
                children: D.updatePassengerDetails,
              }),
            i &&
              (0, C.jsx)('a', {
                'data-testid': 'Passenger-details-required',
                className: v()(
                  A().updateDetails,
                  l && A().disabled,
                  'updateDetails',
                ),
                onClick: function (e) {
                  return (function (e) {
                    f ? (H(!0), I(!0)) : l || m(y.y.UPDATE_PAX_DETAILS, e);
                  })(e);
                },
                children: D.passengerDetailsRequired,
              }),
            M &&
              w &&
              (0, C.jsx)(Z.qZ, {
                contactDetails: P,
                hidePopup: function () {
                  H(!1), I(!1);
                },
                countryList: b,
                airlineCode: N,
                updateContactDetails: S,
                pnr: T,
              }),
          ],
        });
      }
      function $(e) {
        var n = e.kfDetails;
        if (n) {
          var a = n.frequentFlyerNumber,
            s = n.tierName,
            i = n.loyaltyCardImagePath;
          return (0, C.jsxs)('div', {
            className: v()(A().kfTierDetails, 'kfTierDetails'),
            children: [
              (0, C.jsx)('img', {
                width: '40px',
                height: '25px',
                src: i,
                className: v()(A().kfTierCard, 'kfTierCard'),
              }),
              (0, C.jsxs)('div', {
                className: v()(A().kfTier, 'kfTier'),
                children: [
                  (0, C.jsx)('span', {
                    className: v()(A().kfTierName, 'kfTierName'),
                    children: s,
                  }),
                  (0, C.jsx)('span', {
                    className: v()(
                      A().frequentFlyerNumber,
                      'frequentFlyerNumber',
                    ),
                    children: a,
                  }),
                ],
              }),
            ],
          });
        }
        return null;
      }
      function ee(e) {
        var n = e.accruableMilesResponse,
          a = e.passengerID,
          s = e.locale,
          i = (0, r.useContext)(x.dd),
          t = null === n || void 0 === n ? void 0 : n.accruableMilesData;
        if (a) {
          var o,
            l,
            d =
              t && t.length > 0
                ? t.find(function (e) {
                    return e.paxId === a;
                  })
                : void 0,
            c = s ? s.split('_').join('-') : 'en-UK',
            p = parseInt(
              null !==
                (o =
                  null === d || void 0 === d
                    ? void 0
                    : d.totalAccurableMiles) && void 0 !== o
                ? o
                : '0',
            ),
            u = p ? p.toLocaleString(c) : '',
            g = !(
              null !==
                (l = null === n || void 0 === n ? void 0 : n.isLoading) &&
              void 0 !== l &&
              l
            );
          return (0, C.jsx)(k.Z, {
            type: 'textRow',
            ready: g,
            children: (0, C.jsx)('div', {
              children:
                void 0 !== p &&
                p > 0 &&
                (0, C.jsxs)('div', {
                  className: v()(A().milesInfo, 'milesInfo'),
                  children: [
                    i['passengersPreferances.accruableMiles.1'],
                    (0, C.jsx)('b', { children: ' ' + u + ' ' }),
                    i['passengersPreferances.accruableMiles.2'],
                  ],
                }),
            }),
          });
        }
        return (0, C.jsx)('div', { children: null });
      }
      var ne = function (e) {
          var n = e.offpDetails;
          return n
            ? (0, C.jsxs)('div', {
                className: v()(A().offpDetails, 'offpDetails'),
                children: [
                  (0, C.jsx)('div', {
                    className: v()(A().offpName, 'offpName'),
                    children: n.offpName,
                  }),
                  (0, C.jsx)('div', {
                    className: v()(A().offpNumber, 'offpNumber'),
                    children: n.otherFrequentFlyerNumber,
                  }),
                ],
              })
            : null;
        },
        ae = function (e) {
          var n = e.offpDetails,
            a = e.starAllianceTier,
            s = (0, r.useContext)(x.dd);
          return n
            ? (0, C.jsxs)('div', {
                className: v()(A().offpDetails, 'offpDetails'),
                children: [
                  (0, C.jsxs)('div', {
                    className: v()(A().offpName, 'offpName'),
                    children: [
                      (0, C.jsx)('span', { children: n.offpName }),
                      (0, C.jsx)('span', {
                        className: v()(A().pipe, 'pipe'),
                        children: '|',
                      }),
                      'G' === a
                        ? (0, C.jsx)('span', {
                            children:
                              s[
                                'passengersPreferences.starAllianceGold'
                              ].toUpperCase(),
                          })
                        : (0, C.jsx)('span', {
                            children:
                              s[
                                'passengersPreferences.starAllianceSilver'
                              ].toUpperCase(),
                          }),
                    ],
                  }),
                  (0, C.jsx)('div', {
                    className: v()(A().offpNumber, 'offpNumber'),
                    children: n.otherFrequentFlyerNumber,
                  }),
                ],
              })
            : null;
        },
        se = a(21981),
        ie = a.n(se),
        re = a(35749),
        te = a(36808),
        oe = a.n(te),
        le = a(15938),
        de = a(65640);
      function ce(e, n) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          n &&
            (s = s.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            a.push.apply(a, s);
        }
        return a;
      }
      function pe(e) {
        for (var n = 1; n < arguments.length; n++) {
          var a = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? ce(Object(a), !0).forEach(function (n) {
                (0, d.Z)(e, n, a[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : ce(Object(a)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(a, n),
                );
              });
        }
        return e;
      }
      function ue(e) {
        var n = e.isGetDocumentCompleted,
          a = e.isActive,
          s = e.passengerAndPreferenceData,
          l = e.pnr,
          d = e.accruableMilesData,
          c = e.redirectToSubFlow,
          p = e.showSpinner,
          u = e.isSecureFare,
          g = e.lastName,
          m = e.isGroupBookingPNR,
          h = e.countryList,
          _ = e.airlineCode,
          f = e.isScheduleChangeRefused,
          b = e.setIsInitialRenderValue,
          N = e.isInitialRender,
          j = e.contactDetails,
          I = e.updateContactDetails,
          w = e.rewardsResponse,
          P = e.isPrincipleKF,
          S = e.baggageEligibilityData,
          A = e.currentSegment,
          T = e.salt,
          D = e.isNewSeatEnabled,
          k = e.getdocumentresponse,
          y = e.scootPnr,
          R = e.segmentAirlineCode,
          L = e.flights,
          O = e.selectedFlightIndex,
          B = e.kfEmail,
          F = e.airlineCodeArray,
          M = e.emailFetched,
          H = e.isLoggedIn,
          E = e.isNewBagaggeFlowEnabled,
          W = r.useState(
            (function (e) {
              return pe(
                pe({}, e),
                {},
                {
                  passengers: e.passengers.map(function (n) {
                    return pe(
                      pe({}, n),
                      {},
                      {
                        mealData: pe(
                          pe({}, n.mealData),
                          {},
                          { isLoading: !!e.mealAsyncReq.length },
                        ),
                        baggageData: pe(
                          pe({}, n.baggageData),
                          {},
                          { isLoading: !0 },
                        ),
                      },
                    );
                  }),
                },
              );
            })(s),
          ),
          K = (0, o.Z)(W, 2),
          U = K[0],
          G = K[1],
          V = r.useState(!1),
          q = (0, o.Z)(V, 2),
          Y = q[0],
          Z = q[1],
          Q = r.useContext(x.dd),
          z = Q['passengersPreferences.meal.disabled.technical'];
        return (
          r.useEffect(
            function () {
              (0, t.Z)(
                i().mark(function e() {
                  var s, r, t, o;
                  return i().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          !Y &&
                            a &&
                            (null === (s = U.mealAsyncReq) || void 0 === s
                              ? void 0
                              : s.length) > 0 &&
                            n &&
                            (Z(!0),
                            '/managebooking/api/getmealdata',
                            (r = {
                              method: 'POST',
                              headers: {
                                'Content-Type': 'application/json',
                                'csrf-token': oe().get('MBVS_CSRF') || '',
                              },
                              body: JSON.stringify({
                                mealAsyncReq: U.mealAsyncReq,
                                pnr: l,
                              }),
                            }),
                            (t = function (e) {
                              G(function (n) {
                                return ge(
                                  n,
                                  e,
                                  n.segmentOrigin,
                                  n.segmentDestination,
                                  Q[
                                    'passengersPreferences.meal.disabled.upgrade'
                                  ],
                                  k,
                                );
                              }),
                                Z(!1);
                            }),
                            (o = function (e) {
                              e &&
                                e.error &&
                                G(function (e) {
                                  return (
                                    (a = z),
                                    pe(
                                      pe({}, (n = e)),
                                      {},
                                      {
                                        mealAsyncReq: [],
                                        passengers: n.passengers.map(function (
                                          e,
                                        ) {
                                          var n;
                                          return pe(
                                            pe({}, e),
                                            {},
                                            {
                                              mealData: pe(
                                                pe({}, e.mealData),
                                                {},
                                                {
                                                  isLoading: !1,
                                                  disabledReason:
                                                    null !== (n = e.mealData) &&
                                                    void 0 !== n &&
                                                    n.disabledReason
                                                      ? e.mealData
                                                          .disabledReason
                                                      : a,
                                                  isSelectionEnabled: !1,
                                                },
                                              ),
                                            },
                                          );
                                        }),
                                      },
                                    )
                                  );
                                  var n, a;
                                }),
                                Z(!1);
                            }),
                            (0, re.rQ)(
                              '/managebooking/api/getmealdata',
                              r,
                              t,
                              o,
                            ));
                        case 1:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              )();
            },
            [U.mealAsyncReq, z, a, Y, n],
          ),
          (0, C.jsx)('div', {
            id: 'pax-container',
            className: v()(ie().cardWrapper, 'cardWrapper'),
            hidden: !a,
            children: U.passengers.map(function (e, n) {
              var a = e.passengerId,
                s = e.passengerName,
                i = e.enableUpdatePax,
                r = e.enableRequirePaxDetails,
                t = e.enableAddFreqFlyerNum,
                o = e.seat,
                v = e.baggageData,
                x = e.mealData,
                k = e.frequentFlyerData,
                W = e.otherFrequentFlyerData,
                K = e.isSelectionDisabled,
                G = e.isUpdateLinkDisabled,
                V = e.cabinClassCode,
                q = e.complimentarySeat,
                Y = e.registeredCustomerId,
                Z = e.isInfant,
                z = e.passengerNumber,
                X = e.accompanyingAdult,
                $ = e.eretailTattoo,
                ee = e.showEarnMiles,
                ne = e.rewardData,
                ae = e.ticketNumber,
                se = (function (e, n, a, s, i, r, t, o) {
                  var l;
                  !(function (e) {
                    e.SCOOTAIRLINE = 'TR';
                  })(l || (l = {}));
                  var d = '',
                    c = function () {
                      var e = [];
                      return (
                        a.forEach(function (n) {
                          return (
                            n.segments.forEach(function (n) {
                              e.push(n.operatingAirlineCode);
                            }),
                            e
                          );
                        }),
                        e
                      );
                    },
                    p =
                      null === e || void 0 === e ? void 0 : e.emdVoidOrRefunded;
                  d =
                    'FAILURE' === n.status
                      ? i[
                          'passengersPreferences.baggage.failure.genericMessage'
                        ]
                      : t && 0 !== t.indexOf('618') && 0 !== t.indexOf('629')
                      ? i[
                          'passengersPreferences.baggage.failure.NotSQTicketedPnr'
                        ]
                      : c()[s] == l.SCOOTAIRLINE
                      ? i[
                          'passengersPreferences.baggage.failure.scoot.genericMessage'
                        ]
                      : p
                      ? ''
                      : (0, le.G)(i, r, n.eligibilityPaxAssociations, o);
                  return pe(
                    pe({}, e),
                    {},
                    {
                      disabledReason: e.disabledReason ? e.disabledReason : d,
                      isLoading: 'INITIAL_LOADING' === n.status,
                    },
                  );
                })(v, S, L, O, Q, a ? a.toString() : '', ae, U.mainFlightID);
              return (0,
              C.jsx)(J, { no: a, name: s, enableUpdatePax: i, enableRequirePaxDetails: r, enableAddFreqFlyerNum: t, seat: o, baggageData: se, mealData: x, kfDetails: k, offpDetails: W, isSelectionDisabled: K, isUpdateLinkDisabled: G, cabinClassCode: V, isInfant: Z, complimentarySeat: q, accruableMilesData: d, registeredCustomerId: Y, redirectToSubFlow: c, showSpinner: p, passengerNumber: z, accompanyAdultName: X, isSecureFare: u, lastName: g, pnr: l, isGroupBookingPNR: m, countryList: h, airlineCode: _, passengerId: null === a || void 0 === a ? void 0 : a.toString(), eretailTattoo: $, isScheduleChangeRefused: f, showEarnMiles: null !== ee && void 0 !== ee && ee, setIsInitialRenderValue: b, isInitialRender: N, allPassengers: U.passengers, passengerIndex: n, contactDetails: j, updateContactDetails: I, rewardsResponse: w, paxRewardsData: ne, isPrincipleKF: P, baggageEligibilityData: S, currentSegment: A, salt: T, isNewSeatEnabled: D, scootPnr: y, segmentAirlineCode: R, kfEmail: B, emailFetched: M, isLoggedIn: H, airlineCodeArray: F, selectedFlightIndex: O, isNewBagaggeFlowEnabled: E }, z);
            }),
          })
        );
      }
      function ge(e, n, a, s, i, r) {
        return pe(
          pe({}, e),
          {},
          {
            mealAsyncReq: [],
            passengers: e.passengers.map(function (e) {
              var t;
              return pe(
                pe({}, e),
                {},
                {
                  mealData: pe(
                    pe({}, e.mealData),
                    {},
                    {
                      isLoading: !1,
                      meal: he(e, n),
                      disabledReason:
                        null !== (t = e.mealData) &&
                        void 0 !== t &&
                        t.disabledReason
                          ? e.mealData.disabledReason
                          : e.mealData.isPlusgradedSegement &&
                            r &&
                            (0, de.qb)(r, { origin: a, destination: s })
                          ? i
                          : n.disabledReason.length > 0
                          ? (0, c.Z)(new Set(n.disabledReason)).join('<br/>')
                          : '',
                      isSelectionEnabled: me(e, n),
                    },
                  ),
                },
              );
            }),
          },
        );
      }
      var me = function (e, n) {
        var a,
          s = n.lightRefreshmentText,
          i = n.availableMeals;
        return (
          (null === (a = e.mealData) || void 0 === a || !a.disabledReason) &&
          !(!s && 0 === i.length)
        );
      };
      function he(e, n) {
        var a = n.lightRefreshmentText,
          s = n.availableMeals,
          i = n.passengers;
        return a
          ? [{ type: a, category: '', name: '' }]
          : s.map(function (n) {
              var a,
                s =
                  null ===
                    (a = i.find(function (n) {
                      return (
                        e.eretailTattoo === n.paxID &&
                        ((e.isInfant && 'INF' === n.paxType) || !e.isInfant)
                      );
                    })) || void 0 === a
                    ? void 0
                    : a.meals.find(function (e) {
                        return e.mealType.toUpperCase() === n.toUpperCase();
                      });
              return s
                ? {
                    type: s.mealType,
                    category: s.mealCategory || e.mealData.defaultMealMessage,
                    name: s.mealName,
                  }
                : {
                    type: n,
                    category: e.mealData.defaultMealMessage,
                    name: '',
                  };
            });
      }
      function ve(e) {
        var n,
          a,
          s,
          i,
          t,
          o,
          l = e.passengerAndPreference,
          d = e.pnr,
          c = e.accruableMilesResponse,
          p = e.redirectToSubFlow,
          u = e.showSpinner,
          g = e.isSecureFare,
          m = e.lastName,
          h = e.getdocumentresponse,
          _ = e.isGetDocumentCompleted,
          f = e.isGroupBookingPNR,
          b = e.countryList,
          N = e.paxPrefSectionRef,
          j = e.airlineCode,
          S = e.isScheduleChangeRefused,
          A = e.setIsInitialRenderValue,
          T = e.isInitialRender,
          D = e.contactDetails,
          k = e.updateContactDetails,
          y = e.rewardsResponse,
          L = e.isPrincipleKF,
          O = e.baggageEligibilityResponse,
          B = e.scootPnr,
          F = e.salt,
          M = e.isNewSeatEnabled,
          H = e.flights,
          E = e.kfEmail,
          W = e.emailFetched,
          K = e.isLoggedIn,
          U = e.isNewBagaggeFlowEnabled,
          G = (0, r.useState)(0),
          V = G[0],
          q = G[1],
          Y = (0, r.useState)(l[0].segmentID),
          Z = Y[0],
          Q = Y[1],
          z = (0, r.useContext)(x.dd),
          J = (0, r.useRef)(null),
          X = function (e, n) {
            var a,
              s,
              i =
                (null === (a = J.current) || void 0 === a
                  ? void 0
                  : a.getBoundingClientRect()) || new DOMRect(),
              r = n.currentTarget.getBoundingClientRect(),
              t = n.currentTarget.offsetLeft;
            if (r.left < i.left)
              null === (s = J.current) ||
                void 0 === s ||
                s.scrollTo({
                  left: Math.max(t - r.width / 2, 0),
                  top: 0,
                  behavior: 'smooth',
                });
            else if (r.right > i.right) {
              var o,
                l,
                d,
                c =
                  (null !==
                    (o =
                      null === (l = J.current) || void 0 === l
                        ? void 0
                        : l.scrollWidth) && void 0 !== o
                    ? o
                    : Number.MAX_SAFE_INTEGER) - i.width;
              null === (d = J.current) ||
                void 0 === d ||
                d.scrollTo({
                  left: Math.min(c, t - i.width + (3 * r.width) / 2),
                  top: 0,
                  behavior: 'smooth',
                });
            }
            q(e);
          };
        function $() {
          for (var e = [], n = 0; n < H.length; n++) {
            if (!(H[n].segments.length > 0)) return [];
            for (var a = 0; a < H[n].segments.length; a++)
              e.push(H[n].segments[a].operatingAirlineCode);
          }
          return e;
        }
        !(function (e) {
          (e.SINGAPOREAIRLINE = 'SQ'), (e.SCOOTAIRLINE = 'TR');
        })(o || (o = {}));
        var ee =
            $()[V] == o.SINGAPOREAIRLINE
              ? o.SINGAPOREAIRLINE
              : $()[V] == o.SCOOTAIRLINE
              ? o.SCOOTAIRLINE
              : '',
          ne = !(!D || null === (n = D[0]) || void 0 === n || !n.email),
          ae = [];
        H.forEach(function (e) {
          e.segments.forEach(function (e) {
            return (
              e.operatingAirlineCode === o.SCOOTAIRLINE &&
                ae.push(e.originDestination),
              ''
            );
          });
        });
        var se = ae.length > 0 ? ae[0] : '',
          ie = se.split('to')[0],
          re = se.split('to')[1],
          te =
            (null === (a = l[0]) ||
            void 0 === a ||
            null === (s = a.passengers[0]) ||
            void 0 === s
              ? void 0
              : s.firstName) && l[0].passengers[0].firstName.split(' '),
          oe =
            null !== (i = l[0]) &&
            void 0 !== i &&
            null !== (t = i.passengers[0]) &&
            void 0 !== t &&
            t.firstName
              ? te[0]
              : '';
        return (0, C.jsxs)('div', {
          className: v()(I().wrapper, 'wrapper'),
          ref: N,
          children: [
            (0, C.jsx)('div', {
              className: v()(I().heading, 'heading'),
              children: (0, C.jsx)(w.X, {
                text: z['passengersAndPreferences.heading'],
                textType: 'Heading',
              }),
            }),
            (0, C.jsx)('div', {
              className: v()(
                I().flightsOdBorderWrapper,
                'flightsOdBorderWrapper',
              ),
              ref: J,
              children: (0, C.jsx)('div', {
                className: v()(I().flightsOdBorder, 'flightsOdBorder'),
                children: l.map(function (e, n) {
                  var a = e.segmentOrigin,
                    s = e.segmentDestination,
                    i = V == n;
                  return (0,
                  C.jsx)(P.A, { onClick: X, selected: i, flightIndex: n, origin: a, destination: s, setSegmentId: Q, segmentId: e.segmentID }, n);
                }),
              }),
            }),
            B &&
              ee !== o.SINGAPOREAIRLINE &&
              (0, C.jsxs)('div', {
                className: I().scootWrapper,
                children: [
                  (0, C.jsxs)('div', {
                    className: v()(I().messageWrapper, 'messageWrapper'),
                    children: [
                      (0, C.jsx)('img', {
                        src: '/assets/images/svg/scoot.svg',
                        alt: 'icons-scoot',
                        className: v()(I().scootIcon, 'scootIcon'),
                      }),
                      (0, C.jsxs)('div', {
                        className: v()(I().scootLabel, 'scootLabel'),
                        children: [
                          (0, C.jsx)('div', {
                            className: v()(I().scootHeading, 'scootHeading'),
                            children:
                              z['passengersPreferences.scoot.bannerHeading'],
                          }),
                          (0, C.jsxs)('div', {
                            className: v()(
                              I().scootDescription,
                              'scootDescription',
                            ),
                            children: [
                              (0, C.jsx)('span', {
                                children:
                                  z[
                                    'passengersPreferences.scoot.bannerDescription1'
                                  ] +
                                  ' ' +
                                  B +
                                  ' ' +
                                  z[
                                    'passengersPreferences.scoot.bannerDescription2'
                                  ],
                              }),
                              (0, C.jsxs)('a', {
                                onClick: function () {
                                  ne
                                    ? (0, R.E)(
                                        { pnr: B, email: D[0].email },
                                        z[
                                          'passengersPreferences.scoot.bannerFlyscootUrl'
                                        ],
                                      )
                                    : (0, R.E)(
                                        {
                                          pnr: B,
                                          origin: ie,
                                          destination: re,
                                          firstName: oe,
                                          lastName: m,
                                        },
                                        z[
                                          'passengersPreferences.scoot.bannerFlyscootUrl'
                                        ],
                                      );
                                },
                                children: [
                                  z['passengersPreferences.scoot.flyscoot'],
                                  ' ',
                                  (0, C.jsx)('img', {
                                    src: '/assets/images/svg/icons/external-link.svg',
                                    alt: 'external-link',
                                  }),
                                ],
                              }),
                              '.',
                            ],
                          }),
                          (0, C.jsx)('div', {
                            className: v()(I().scootDesc, 'scootDesc'),
                            children:
                              z[
                                'passengersPreferences.scoot.bannerDescription3'
                              ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, C.jsxs)('div', {
                    className: v()(I().scootReference, 'scootReference'),
                    children: [
                      (0, C.jsx)('div', {
                        className: I().scootReferenceNumber,
                        children: (0, C.jsx)('b', { children: B }),
                      }),
                      (0, C.jsx)('div', {
                        children:
                          z[
                            'passengersPreferences.scoot.scootbookingreference'
                          ],
                      }),
                    ],
                  }),
                ],
              }),
            l.map(function (e, n) {
              return (0,
              C.jsx)(ue, { passengerAndPreferenceData: e, isActive: V == n, accruableMilesData: _e(e, c), pnr: d, redirectToSubFlow: p, showSpinner: u, isSecureFare: g, lastName: m, isGroupBookingPNR: f, countryList: b, airlineCode: j, isScheduleChangeRefused: S && e.scheduleChangedFlight, setIsInitialRenderValue: A, isInitialRender: T, contactDetails: D, updateContactDetails: k, rewardsResponse: y, isPrincipleKF: L, baggageEligibilityData: O, currentSegment: Z, salt: F, isNewSeatEnabled: M, flights: H, selectedFlightIndex: V, isGetDocumentCompleted: _, getdocumentresponse: h, scootPnr: B, segmentAirlineCode: ee, kfEmail: E, emailFetched: W, isLoggedIn: K, airlineCodeArray: $(), isNewBagaggeFlowEnabled: U }, n);
            }),
          ],
        });
      }
      function _e(e, n) {
        return 'INITIAL_LOADING' === n.status
          ? { isLoading: !0 }
          : 'SUCCESS' === n.status &&
            null !== n &&
            void 0 !== n &&
            n.accruableMilesData
          ? n
          : { isLoading: !1 };
      }
      var fe = a(42905),
        xe = (a(11541), a(24866)),
        Ce = a.n(xe),
        be = a(345),
        Ne = function (e) {
          var n = e.secureFareData,
            a = e.redirectToSubFlow,
            s = (0, r.useContext)(x.dd);
          return (0, C.jsxs)('div', {
            className: v()(Ce().wrapper, 'wrapper'),
            children: [
              (0, C.jsxs)('div', {
                className: v()(Ce().messageWrapper, 'messageWrapper'),
                children: [
                  (0, C.jsx)('em', {
                    className: v()(Ce().clockIcon, 'clockIcon'),
                  }),
                  (0, C.jsx)('span', {
                    className: v()(Ce().label, 'secureFareLabel'),
                    dangerouslySetInnerHTML: { __html: n.message },
                  }),
                ],
              }),
              (0, C.jsx)(be.P, {
                classes: { root: Ce().secureFareButton },
                onClick: function (e) {
                  return a(y.y.CONFIRM_BOOKING, e);
                },
                children: s['secureMyFare.confirm'],
              }),
            ],
          });
        },
        je = a(48594),
        Ie = a.n(je),
        we = a(6146),
        Pe = a(39809),
        Se = function (e) {
          var n = (0, r.useContext)(x.dd),
            a = e.selectAltFlightBtnProperties,
            s = e.redirectToSubFlow;
          return (0, C.jsxs)('div', {
            className: v()(Ie().wrapper, 'wrapper'),
            children: [
              (0, C.jsxs)('div', {
                className: v()(Ie().messageWrapper, 'messageWrapper'),
                children: [
                  (0, C.jsx)('em', {
                    className: v()(Ie().alertIcon, 'alertIcon'),
                  }),
                  (0, C.jsx)('span', {
                    className: v()(Ie().label, 'alternateFlightLabel'),
                    children: n['banner.alternateFlight'],
                  }),
                ],
              }),
              (null === a || void 0 === a ? void 0 : a.status) ===
                we.Dv.DISABLED &&
                (0, C.jsx)(L.T, {
                  position: 'Top',
                  message:
                    null !== a && void 0 !== a && a.message
                      ? null === a || void 0 === a
                        ? void 0
                        : a.message
                      : '',
                  showOnHover: !1,
                  children: (0, C.jsx)(be.P, {
                    classes: { root: Ie().disableSelectFlightButton },
                    children: n['banner.alternateFlightBtn'],
                  }),
                }),
              ((null === a || void 0 === a ? void 0 : a.status) ===
                we.Dv.LOG_IN ||
                (null === a || void 0 === a ? void 0 : a.status) ===
                  we.Dv.DEFAULT) &&
                (0, C.jsx)(be.P, {
                  classes: { root: Ie().selectFlightButton },
                  onClick: function (e) {
                    return (function (e, i) {
                      (null === a || void 0 === a ? void 0 : a.status) ===
                      we.Dv.LOG_IN
                        ? (0, Pe.L8)(n['upgradeFlight.loginMessage'])
                        : (null === a || void 0 === a ? void 0 : a.status) ===
                            we.Dv.DEFAULT && s(e, i);
                    })(y.y.SELECT_ALTERNATE_FLIGHT, e);
                  },
                  children: n['banner.alternateFlightBtn'],
                }),
            ],
          });
        },
        Ae = a(86299),
        Te = a(49303),
        De = a.n(Te),
        ke = function (e) {
          var n = e.message,
            a = e.onClickReview,
            s = (0, r.useContext)(x.dd);
          return (0, C.jsxs)('div', {
            className: v()(De().wrapper, 'wrapper'),
            children: [
              (0, C.jsxs)('div', {
                className: v()(De().messageWrapper, 'messageWrapper'),
                children: [
                  (0, C.jsx)('em', {
                    className: v()(De().clockIcon, 'clockIcon'),
                  }),
                  (0, C.jsx)('span', {
                    className: v()(De().label, 'DisruptionLabel'),
                    dangerouslySetInnerHTML: { __html: n },
                  }),
                ],
              }),
              (0, C.jsx)(be.P, {
                classes: { root: De().mainButton },
                onClick: function () {
                  return a();
                },
                children: s['flightDisruption.review.button'],
              }),
            ],
          });
        },
        ye = a(20627),
        Re = a.n(ye),
        Le = function (e) {
          var n = e.message,
            a = e.onClickSCAccept,
            s = e.showAcceptButton,
            i = (0, r.useContext)(x.dd);
          return (0, C.jsxs)('div', {
            className: v()(Re().wrapper, 'wrapper'),
            children: [
              (0, C.jsxs)('div', {
                className: v()(Re().messageWrapper, 'messageWrapper'),
                children: [
                  (0, C.jsx)('em', {
                    className: v()(Re().clockIcon, 'clockIcon'),
                  }),
                  (0, C.jsx)('span', {
                    className: v()(Re().label, 'scMessage'),
                    dangerouslySetInnerHTML: { __html: n },
                  }),
                ],
              }),
              s &&
                (0, C.jsx)(be.P, {
                  classes: { root: Re().scButton },
                  onClick: a,
                  children: i['flightInfo.scheduleChange.acceptNewFlight'],
                }),
            ],
          });
        },
        Oe = function (e) {
          var n,
            a = e.secureFareData,
            s = e.redirectToSubFlow,
            i = e.scMessage,
            r = e.fdMessage,
            t = e.onClickReview,
            o = e.scUpdateErrorMessage,
            l = e.flightActionData,
            d = e.isMCTMET,
            c = e.onClickSCAccept;
          return (0, C.jsxs)(C.Fragment, {
            children: [
              !i &&
                a.isSecureFare &&
                (0, C.jsx)('div', {
                  children: (0, C.jsx)(Ne, {
                    secureFareData: a,
                    redirectToSubFlow: s,
                  }),
                }),
              r && (0, C.jsx)(ke, { message: r, onClickReview: t }),
              i &&
                (0, C.jsx)(Le, {
                  message: i,
                  onClickSCAccept: c,
                  showAcceptButton: d,
                }),
              (null === l ||
              void 0 === l ||
              null === (n = l.selectAlternateFlightButtonProperties) ||
              void 0 === n
                ? void 0
                : n.status) !== we.Dv.HIDDEN &&
                (0, C.jsx)(Se, {
                  selectAltFlightBtnProperties:
                    null === l || void 0 === l
                      ? void 0
                      : l.selectAlternateFlightButtonProperties,
                  redirectToSubFlow: s,
                }),
              o && (0, C.jsx)(Ae.v, { type: 'e', message: o }),
            ],
          });
        },
        Be = a(59365),
        Fe = a.n(Be),
        Me = function () {
          var e = (0, r.useContext)(x.dd);
          return (0, C.jsx)('div', {
            className: v()(Fe().wrapper, 'wrapper'),
            children: (0, C.jsxs)('div', {
              className: v()(Fe().usefulInfo, 'usefulInfo'),
              children: [
                (0, C.jsxs)('div', {
                  className: v()(Fe().usefulInfoItemFlex, 'usefulInfoItemFlex'),
                  children: [
                    (0, C.jsx)('img', {
                      src: '/saar5/assets/images/svg/useful-info.svg',
                      className: v()(Fe().lightIcon, 'lightIcon'),
                    }),
                    (0, C.jsx)('span', {
                      className: v()(Fe().heading, 'heading'),
                      children: e['usefulInfo.heading'],
                    }),
                  ],
                }),
                (0, C.jsxs)('div', {
                  className: v()(Fe().usefulInfoItem, 'usefulInfoItem'),
                  children: [
                    (0, C.jsxs)('span', {
                      className: v()(
                        Fe().usefulInfoItemText,
                        'usefulInfoItemText',
                      ),
                      children: [e['usefulInfo.visa'], ' '],
                    }),
                    (0, C.jsx)('a', {
                      rel: 'noopener noreferrer',
                      target: '_blank',
                      href: e['usefulInfo.checkRequirementURL'],
                      children: e['usefulInfo.checkRequirements'],
                    }),
                  ],
                }),
                (0, C.jsxs)('div', {
                  className: v()(Fe().usefulInfoItem, 'usefulInfoItem'),
                  children: [
                    (0, C.jsxs)('span', {
                      className: v()(
                        Fe().usefulInfoItemText,
                        'usefulInfoItemText',
                      ),
                      children: [e['usefulInfo.specialAssistance'], ' '],
                    }),
                    (0, C.jsx)('a', {
                      rel: 'noopener noreferrer',
                      target: '_blank',
                      href: e['usefulInfo.findOutMoreURL'],
                      children: e['usefulInfo.findOutMore'],
                    }),
                  ],
                }),
                (0, C.jsxs)('div', {
                  className: v()(Fe().usefulInfoItem, 'usefulInfoItem'),
                  children: [
                    (0, C.jsxs)('span', {
                      className: v()(
                        Fe().usefulInfoItemText,
                        'usefulInfoItemText',
                      ),
                      children: [e['usefulInfo.travelsafer'], ' '],
                    }),
                    (0, C.jsx)('a', {
                      rel: 'noopener noreferrer',
                      target: '_blank',
                      href: e['usefulInfo.learnmoreSIAURL'],
                      children: e['usefulInfo.learnmoreSIA'],
                    }),
                  ],
                }),
                (0, C.jsxs)('div', {
                  className: v()(Fe().usefulInfoItem, 'usefulInfoItem'),
                  children: [
                    (0, C.jsxs)('span', {
                      className: v()(
                        Fe().usefulInfoItemText,
                        'usefulInfoItemText',
                      ),
                      children: [e['usefulInfo.needAMeal'], ' '],
                    }),
                    (0, C.jsx)('span', {
                      className: v()(
                        Fe().usefulInfoMealLink,
                        'usefulInfoMealLink',
                      ),
                      onClick: function () {
                        var e = document.getElementById('pax-container');
                        null != e &&
                          e.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                          });
                      },
                      children: e['usefulInfo.needAMealTextLink'],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        He = a(37642),
        Ee = a.n(He),
        We = a(20471),
        Ke = a.n(We),
        Ue = a(66577),
        Ge = function (e) {
          return '/saar5/assets/manage-booking/images/' + e;
        },
        Ve = function (e) {
          return 'Allianz_Assistance_Logo_ES.png' == e
            ? Ke().allianzAssistanceLogo
            : '';
        },
        qe = function (e) {
          var n,
            a,
            s = (0, r.useContext)(x.dd),
            i = e.addon,
            t = e.redirectToSubFlow,
            o = e.redirectToInsuranceFlow,
            l = e.locale,
            d = e.currencyPrecision,
            c = i.image ? Ge(i.image) : '',
            p = i.logo ? Ge(i.logo) : '',
            u =
              i.insuranceCurrencyCode &&
              i.insuranceTotalPrice &&
              i.forAllPaxText &&
              i.addLinkText,
            g = u ? Ke().insuranceCard : '',
            m = u ? Ke().insuranceCardDesc : '',
            h =
              i.logo === s['addonList.travelInsurance.tataLogo']
                ? v()(Ke().tataCardLogo, 'addonTataCardLogo')
                : '',
            _ = i.heading === s['addonList.ssh.heading'],
            f = null !== (n = i.segmentNumber) && void 0 !== n ? n : '',
            b = i.isAllianzMarket ? Ke().allianzInsuranceLogo : '',
            N = i.logo
              ? 'Allianz_Global_Assistance.png' == i.logo
                ? Ke().allianzGlobalAssistanceLogo
                : ''
              : '',
            j = i.insuranceCurrencyCode ? i.insuranceCurrencyCode : '',
            I = i.insuranceTotalPrice ? i.insuranceTotalPrice : '';
          !(function (e) {
            (e.HOTELID_AGODA = 'agoda'),
              (e.PELAGOID = 'pelago'),
              (e.KRISSHOP = 'krisShop'),
              (e.PAIDLOUNGEPASS = 'loungePass');
          })(a || (a = {}));
          return (0, C.jsxs)('div', {
            className: v()(Ke().wrapper, 'addOnWrapper'),
            children: [
              (0, C.jsx)('div', {
                className: v()(
                  Ke().desktopBannerImage,
                  'addOnDesktopBannerIamge',
                ),
                style: { backgroundImage: 'url('.concat(c, ')') },
              }),
              (0, C.jsx)('img', {
                className: v()(
                  Ke().mobileBannerImage,
                  'addOnMobileBannerImage',
                ),
                src: c,
              }),
              (0, C.jsxs)('div', {
                className: v()(Ke().cardDetails, g, 'addOnInsuranceCard'),
                children: [
                  (0, C.jsxs)('div', {
                    children: [
                      i.heading
                        ? (0, C.jsx)('div', {
                            className: v()(
                              Ke().cardHeading,
                              'addOnCardHeading',
                            ),
                            dangerouslySetInnerHTML: { __html: i.heading },
                          })
                        : null,
                      1 !== e.rank && i.subHeading
                        ? (0, C.jsx)('div', {
                            className: v()(
                              Ke().cardSubHeading,
                              'addOnCardSubheading',
                            ),
                            dangerouslySetInnerHTML: { __html: i.subHeading },
                          })
                        : null,
                      i.description
                        ? (0, C.jsx)('div', {
                            className: v()(
                              Ke().cardDescription,
                              m,
                              'addOnInsuranceCardDesc',
                            ),
                            dangerouslySetInnerHTML: { __html: i.description },
                          })
                        : null,
                      i.tcText
                        ? (0, C.jsx)('div', {
                            className: v()(Ke().cardTc, 'addOnCardTC'),
                            dangerouslySetInnerHTML: { __html: i.tcText },
                          })
                        : null,
                    ],
                  }),
                  (0, C.jsxs)('div', {
                    className: v()(Ke().contentWrap, 'addOnContentWrap', N),
                    children: [
                      u
                        ? (0, C.jsxs)('div', {
                            className: v()(
                              Ke().cardInsuranceLink,
                              'addOnCardInsuranceLink',
                            ),
                            children: [
                              (0, C.jsx)('div', {
                                className: v()(
                                  Ke().cardInsurancePrice,
                                  'addonCardInsurancePrice',
                                ),
                                children: (0, Ue.hB)(j, I, l, d),
                              }),
                              (0, C.jsx)('div', {
                                className: v()(
                                  Ke().cardInsuranceText,
                                  'addOnCardInsuranceText',
                                ),
                                children: i.forAllPaxText,
                              }),
                              (0, C.jsx)('div', {
                                className: v()(
                                  Ke().cardInsuranceText,
                                  'addOnCardInsuranceText',
                                ),
                                children: i.taxIncludedText,
                              }),
                              (0, C.jsx)('a', {
                                className: v()(
                                  Ke().insuranceAddLink,
                                  'insuranceAddLink',
                                ),
                                onClick: function (e) {
                                  e.preventDefault(), o(e);
                                },
                                children: i.addLinkText,
                              }),
                            ],
                          })
                        : null,
                      (0, C.jsx)('div', {
                        children:
                          p &&
                          (0, C.jsx)('img', {
                            alt: e.id,
                            src: p,
                            className: v()(
                              Ke().cardLogo,
                              h,
                              'addOntataInsuranceLogo',
                              b,
                              Ve(i.logo),
                              e.id == a.PAIDLOUNGEPASS
                                ? [
                                    Ke().collinsonLevelOneImage,
                                    'collinsonImage',
                                  ]
                                : '',
                            ),
                          }),
                      }),
                      (0, C.jsx)('div', {
                        className: v()(Ke().insurancePriceDiv, 'price'),
                        children: (0, C.jsxs)('span', {
                          className: v()(Ke().insurancePrice, 'insurancePrice'),
                          children: [
                            (0, C.jsx)('img', {
                              src: '/assets/images/svg/icons/gift-icon.svg',
                              alt: 'gift-icon',
                            }),
                            e.id == a.HOTELID_AGODA
                              ? s['addonList.levelOne.earnMiles.staticHotel']
                              : e.id == a.KRISSHOP
                              ? s['addonList.levelOne.earnMiles.krisShop']
                              : e.id == a.PELAGOID
                              ? s['addonList.levelOne.earnMiles.Pelago']
                              : e.id == a.PAIDLOUNGEPASS
                              ? s['addonList.levelOne.earnMiles.loungePass']
                              : '',
                          ],
                        }),
                      }),
                      !i.addLinkText ||
                      i.insuranceCurrencyCode ||
                      i.insuranceTotalPrice ||
                      i.forAllPaxText
                        ? null
                        : (0, C.jsx)('div', {
                            className: v()(Ke().cardLink, 'addOnCardLink'),
                            children: _
                              ? (0, C.jsx)('a', {
                                  className: v()(Ke().sshLink, 'addOnSSHLink'),
                                  onClick: function (e) {
                                    e.preventDefault(),
                                      t(y.y.CHECK_SSH, e, void 0, void 0, f);
                                  },
                                  children: i.addLinkText,
                                })
                              : (0, C.jsx)('a', {
                                  href: i.addLinkUrl ? i.addLinkUrl : '',
                                  rel: 'noopener noreferrer',
                                  target: '_blank',
                                  className: v()(
                                    e.id == a.PAIDLOUNGEPASS
                                      ? Ke().collinsonMobileLink
                                      : '',
                                  ),
                                  children:
                                    e.id == a.HOTELID_AGODA ||
                                    e.id == a.PELAGOID
                                      ? (0, C.jsxs)('span', {
                                          children: [
                                            s['addonList.hotel.added.bookNow'],
                                            ' ',
                                            (0, C.jsx)('img', {
                                              src: '/assets/images/svg/icons/icon-external_link_white.svg',
                                              alt: 'external-link',
                                            }),
                                          ],
                                        })
                                      : e.id == a.PAIDLOUNGEPASS
                                      ? (0, C.jsxs)('span', {
                                          children: [
                                            i.addLinkText,
                                            ' ',
                                            (0, C.jsx)('img', {
                                              src: '/assets/images/svg/icons/icon-external_link_white.svg',
                                              alt: 'external-link',
                                            }),
                                          ],
                                        })
                                      : e.id == a.KRISSHOP
                                      ? (0, C.jsxs)('span', {
                                          children: [
                                            s['addonList.levelTwo.shopNow'],
                                            ' ',
                                            (0, C.jsx)('img', {
                                              src: '/assets/images/svg/icons/icon-external_link_white.svg',
                                              alt: 'external-link',
                                            }),
                                          ],
                                        })
                                      : (0, C.jsx)('span', {
                                          children: i.addLinkText,
                                        }),
                                }),
                          }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        Ye = a(83343),
        Ze = a(44366),
        Qe = a.n(Ze),
        ze = a(58402),
        Je = a.n(ze),
        Xe = a(35405),
        $e = a.n(Xe),
        en = function (e) {
          var n = +e,
            a = 5 - n;
          return (0, C.jsxs)('ul', {
            className: v()($e().addonStarRatingCard),
            children: [
              Array.from(Array(n), function (e, n) {
                return (0,
                C.jsx)('li', { className: v()($e().hotelStarRating, $e().activeStar) }, 'activeStar_' + n);
              }),
              Array.from(Array(a), function (e, n) {
                return (0,
                C.jsx)('li', { className: v()($e().hotelStarRating) }, 'remainingStar_' + n);
              }),
            ],
          });
        },
        nn = function (e, n) {
          return '' + n + e;
        },
        an = nn('location.svg', '/assets/manage-booking/icons/'),
        sn = nn('info-grey.svg', '/assets/images/svg/'),
        rn = function (e) {
          var n = (0, r.useContext)(x.dd),
            a = e.locale,
            s = e.currencyPrecision,
            i = e.hotelDetails,
            t = i.name,
            o = i.address,
            l = i.distance,
            d = i.isKrisflyerSpecial,
            c = i.currency,
            p = i.actualPrice,
            u = i.discountPrice,
            g = i.image,
            m = i.rating,
            h = i.miles,
            _ = i.complimentItems,
            f = i.isMOR,
            b = i.providerCode,
            N = (0, r.useContext)(x.Jj)['feature.enableKfLabel.switch'],
            j =
              'AS' === b
                ? nn(
                    'addon-agoda-logo-updated.png',
                    '/saar5/assets/manage-booking/images/',
                  )
                : 'TZ' === b
                ? nn(
                    'tradewinds_logo.png',
                    '/saar5/assets/manage-booking/images/',
                  )
                : '',
            I = function () {
              e.navigateToSelectedRoom(e.hotelDetails);
            },
            w = (0, r.useState)(!0),
            P = w[0],
            S = w[1];
          (0, r.useEffect)(function () {
            (0, Ue.Fd)(
              g,
              function () {
                S(!1);
              },
              function () {
                S(!0);
              },
            );
          });
          var A = P
              ? nn('hotel.jpg', '/saar5/assets/manage-booking/images/')
              : g,
            T = (0, C.jsx)('div', {
              className: v()(Je().milesDetails, 'addOnmilesDetails'),
              dangerouslySetInnerHTML: {
                __html: n.earnMilesPerNight.replace('{0}', h),
              },
            });
          return (0, C.jsxs)('div', {
            className: v()(Je().wrapper, 'addOnWrapper'),
            children: [
              (0, C.jsxs)('div', {
                className: v()(
                  Je().bannerImageContainer,
                  'addOnbannerImageContainer',
                ),
                children: [
                  (0, C.jsx)('div', {
                    className: v()(
                      Je().desktopBannerImage,
                      'addOndesktopBannerImage',
                    ),
                    'data-testid': 'bannerImage',
                    style: { backgroundImage: 'url('.concat(A, ')') },
                  }),
                  (0, C.jsx)('img', {
                    className: v()(
                      Je().mobileBannerImage,
                      'addOnmobileBannerImage',
                    ),
                    src: A,
                  }),
                  d &&
                    (0, C.jsx)('div', {
                      className: v()(
                        Je().krisflyerLabelMobile,
                        'addOnkrisflyerLabelMobile',
                      ),
                      children: n.krisFlyerSpecial,
                    }),
                  '' !== _ &&
                    (0, C.jsx)('div', {
                      className: v()(Je().greenBox, 'addOngreenBox'),
                      children: _,
                    }),
                ],
              }),
              (0, C.jsxs)('div', {
                className: v()(Je().hotelDetails, f ? '' : Je().hotelHeight),
                children: [
                  (0, C.jsxs)('div', {
                    className: v()(Je().basicDetails, 'addOnbasicDetails'),
                    children: [
                      (0, C.jsx)('span', {
                        className: v()(
                          Je().hotelName,
                          'addOnhotelName',
                          Je().addonHotelHeading,
                        ),
                        children: t,
                      }),
                      m &&
                        (0, C.jsx)('div', {
                          className: v()(Je().addonHotelHeading),
                          children: en(m),
                        }),
                      (0, C.jsxs)('div', {
                        className: v()(
                          Je().hotelAddressDesktopWrapper,
                          'addOnhotelAddressDesktopWrapper',
                        ),
                        children: [
                          (0, C.jsxs)('div', {
                            className: v()(
                              Je().hotelAddress,
                              'addOnhotelAddress',
                            ),
                            children: [
                              (0, C.jsx)('div', {
                                className: v()(
                                  Je().locationIcon,
                                  'addOnlocationIcon',
                                ),
                                style: {
                                  backgroundImage: 'url('.concat(an, ')'),
                                },
                              }),
                              (0, C.jsxs)('div', {
                                className: v()(
                                  Je().addressLink,
                                  'addOnaddressLink',
                                ),
                                children: [
                                  o,
                                  l &&
                                    (0, C.jsx)('div', {
                                      className: v()(
                                        Je().distance,
                                        'addOndistance',
                                      ),
                                      children: n.distanceFromCity.replace(
                                        '{0}',
                                        l,
                                      ),
                                    }),
                                ],
                              }),
                            ],
                          }),
                          !f && b
                            ? (0, C.jsx)('img', {
                                alt: 'merchant-logo',
                                className: v()(
                                  Je().merchantLogo,
                                  'addOnmerchantLogo',
                                ),
                                src: j,
                              })
                            : null,
                        ],
                      }),
                      (0, C.jsxs)('div', {
                        className: v()(
                          Je().hotelAddressMobileWrapper,
                          'addOnhotelAddressMobileWrapper',
                        ),
                        children: [
                          (0, C.jsx)('div', {
                            className: v()(
                              Je().locationIcon,
                              'addOnlocationIcon',
                            ),
                            style: { backgroundImage: 'url('.concat(an, ')') },
                          }),
                          (0, C.jsx)('div', {
                            className: v()(
                              Je().hotelAddress,
                              Je().addressLink,
                              'addonHotelAddress',
                            ),
                            children: o,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, C.jsxs)('div', {
                    className: v()(
                      Je().paymentDetailsDesktop,
                      'addOnpaymentDetailsDesktop',
                    ),
                    children: [
                      d &&
                        (0, C.jsx)('div', {
                          className: v()(
                            Je().krisflyerLabel,
                            'addOnkrisflyerLabel',
                          ),
                          children: n.krisFlyerSpecial,
                        }),
                      (0, C.jsx)('div', {
                        className: v()(
                          Je().avgPriceLabel,
                          'addOnavgPriceLabel',
                        ),
                        children: n.averagePricePerNight,
                      }),
                      (0, C.jsx)('div', {
                        className: v()(
                          Je().discountPrice,
                          'addOndiscountPrice',
                        ),
                        children: (0, Ue.hB)(c, u, a, s),
                      }),
                      p &&
                        (0, C.jsx)('div', {
                          className: v()(Je().actualPrice, 'addOnactualPrice'),
                          children: (0, Ue.hB)(c, p, a, s),
                        }),
                      (0, C.jsxs)('div', {
                        className: v()(Je().taxDetails, 'addOntaxDetails'),
                        children: [
                          (0, C.jsx)('div', {
                            className: v()(Je().taxLabel, 'addOntaxLabel'),
                            children: n.includesTaxes,
                          }),
                          (0, C.jsx)('div', {
                            children: (0, C.jsx)(L.T, {
                              position: 'Top',
                              message: n.taxTooltipContent,
                              children: (0, C.jsx)('div', {
                                className: v()(
                                  Je().tooltipIcon,
                                  'addOntooltipIcon',
                                ),
                                style: {
                                  backgroundImage: 'url('.concat(sn, ')'),
                                },
                              }),
                            }),
                          }),
                        ],
                      }),
                      h && f && N && T,
                      h && !f && T,
                      (0, C.jsx)('div', {
                        onClick: I,
                        className: v()(
                          v()(Je().selectRoomLink, 'addonSelectRoomLink'),
                          f ? '' : v()(Je().logoBottom, 'addonLogoBottom'),
                        ),
                        children: n.selectRoom,
                      }),
                    ],
                  }),
                  (0, C.jsxs)('div', {
                    className: v()(
                      Je().paymentDetailsMobile,
                      'addOnpaymentDetailsMobile',
                    ),
                    children: [
                      (0, C.jsxs)('div', {
                        className: v()(Je().leftSide, 'addOnleftSide'),
                        children: [
                          (0, C.jsx)('div', {
                            className: v()(
                              Je().avgPriceLabel,
                              'addOnAvgPriceLabel',
                            ),
                            children: n.averagePricePerNight,
                          }),
                          (0, C.jsxs)('div', {
                            className: v()(Je().taxDetails, 'addOntaxDetails'),
                            children: [
                              (0, C.jsx)('div', {
                                className: v()(Je().taxLabel, 'addOntaxLabel'),
                                children: n.includesTaxes,
                              }),
                              (0, C.jsx)('div', {
                                children: (0, C.jsx)(L.T, {
                                  position: 'Bottom',
                                  message: n.taxTooltipContent,
                                  children: (0, C.jsx)('div', {
                                    className: v()(
                                      Je().tooltipIcon,
                                      'addOntooltipIcon',
                                    ),
                                    style: {
                                      backgroundImage: 'url('.concat(sn, ')'),
                                    },
                                  }),
                                }),
                              }),
                            ],
                          }),
                          !f && b
                            ? (0, C.jsx)('img', {
                                alt: 'merchant-logo',
                                className: v()(
                                  Je().merchantLogo,
                                  'addonmerchantLogo',
                                ),
                                src: j,
                              })
                            : null,
                        ],
                      }),
                      (0, C.jsxs)('div', {
                        className: v()(Je().rightSide, 'addOnrightSide'),
                        children: [
                          (0, C.jsxs)('div', {
                            className: v()(
                              Je().discountPrice,
                              'addOndiscountPrice',
                            ),
                            children: [' ', (0, Ue.hB)(c, u, a, s)],
                          }),
                          p &&
                            (0, C.jsx)('div', {
                              className: v()(
                                Je().actualPrice,
                                'addOnactualPrice',
                              ),
                              children: (0, Ue.hB)(c, p, a, s),
                            }),
                          h && f && N && T,
                          h && !f && T,
                          (0, C.jsx)('div', {
                            onClick: I,
                            className: v()(
                              Je().selectRoomLink,
                              'addOnselectRoomLink',
                            ),
                            children: n.selectRoom,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        tn = function (e, n) {
          return '' + n + e;
        },
        on = tn('location.svg', '/assets/manage-booking/icons/'),
        ln = tn('info-grey.svg', '/assets/images/svg/'),
        dn = function (e) {
          var n = (0, r.useContext)(x.dd),
            a = e.locale,
            s = e.currencyPrecision,
            i = e.hotelDetails,
            t = i.name,
            o = i.address,
            l = i.distance,
            d = i.isKrisflyerSpecial,
            c = i.currency,
            p = i.actualPrice,
            u = i.discountPrice,
            g = i.image,
            m = i.rating,
            h = i.miles,
            _ = i.complimentItems,
            f = i.isMOR,
            b = i.providerCode,
            N = (0, r.useContext)(x.Jj)['feature.enableKfLabel.switch'],
            j =
              'AS' === b
                ? tn(
                    'addon-agoda-logo-updated.png',
                    '/saar5/assets/manage-booking/images/',
                  )
                : 'TZ' === b
                ? tn(
                    'tradewinds_logo.png',
                    '/saar5/assets/manage-booking/images/',
                  )
                : '',
            I = function () {
              e.navigateToSelectedRoom(e.hotelDetails);
            },
            w = (0, r.useState)(!1),
            P = w[0],
            S = w[1];
          (0, r.useEffect)(function () {
            (0, Ue.Fd)(
              g,
              function () {
                S(!1);
              },
              function () {
                S(!0);
              },
            );
          });
          var A = P
              ? tn('hotel.jpg', '/saar5/assets/manage-booking/images/')
              : g,
            T = (0, C.jsx)('div', {
              className: v()(
                Je().milesDetailsSingleTeaser,
                'addonmilesDetailsSingleTeaser',
              ),
              dangerouslySetInnerHTML: {
                __html: n.earnMilesPerNight.replace('{0}', h),
              },
            });
          return (0, C.jsxs)('div', {
            className: v()(
              Je().singleTeaserWrapper,
              'addonsingleTeaserWrapper',
            ),
            children: [
              (0, C.jsxs)('div', {
                className: v()(
                  Je().basicDetailsSingleTeaser,
                  'addonbasicDetailsSingleTeaser',
                ),
                children: [
                  (0, C.jsx)('div', {
                    className: v()(
                      Je().desktopBannerImageSingle,
                      'addondesktopBannerImageSingle',
                    ),
                    style: { backgroundImage: 'url('.concat(A, ')') },
                  }),
                  (0, C.jsxs)('div', {
                    className: v()(
                      Je().bannerImageContainer,
                      'addonbannerImageContainer',
                    ),
                    children: [
                      (0, C.jsx)('img', {
                        className: v()(
                          Je().mobileBannerImageSingle,
                          'addonmobileBannerImageSingle',
                        ),
                        src: A,
                      }),
                      (0, C.jsxs)('div', {
                        className: v()(
                          Je().mobileSpecialOffers,
                          'addonmobileSpecialOffers',
                        ),
                        children: [
                          d &&
                            (0, C.jsx)('div', {
                              className: v()(
                                Je().krisflyerLabel,
                                'addonkrisflyerLabel',
                              ),
                              children: n.krisFlyerSpecial,
                            }),
                          '' !== _ &&
                            (0, C.jsx)('div', {
                              className: v()(
                                Je().greenBoxSingleTeaser,
                                'addongreenBoxSingleTeaser',
                              ),
                              children: _,
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, C.jsxs)('div', {
                    className: v()(
                      Je().cardDetails,
                      f
                        ? v()(Je().mor, 'addOnMor')
                        : v()(Je().nonmor, 'addonNonMor'),
                    ),
                    children: [
                      (0, C.jsxs)('div', {
                        className: v()('addonHotelSection'),
                        children: [
                          t
                            ? (0, C.jsx)('span', {
                                className: v()(
                                  Je().cardHeading,
                                  Je().addonHotelHeading,
                                  'addoncardHeading',
                                ),
                                dangerouslySetInnerHTML: { __html: t },
                              })
                            : null,
                          m &&
                            (0, C.jsx)('span', {
                              className: v()(Je().addonHotelHeading),
                              children: en(m),
                            }),
                        ],
                      }),
                      (0, C.jsx)('div', {
                        className: v()(
                          Je().hotelAddressDesktopWrapper,
                          'addonhotelAddressDesktopWrapper',
                        ),
                        children: (0, C.jsxs)('div', {
                          className: v()(
                            Je().hotelAddress,
                            'addonhotelAddress',
                          ),
                          children: [
                            (0, C.jsx)('div', {
                              className: v()(
                                Je().locationIcon,
                                'addonlocationIcon',
                              ),
                              style: {
                                backgroundImage: 'url('.concat(on, ')'),
                              },
                            }),
                            (0, C.jsxs)('div', {
                              className: v()(
                                Je().addressLink,
                                'addonaddressLink',
                              ),
                              children: [
                                o,
                                l &&
                                  (0, C.jsx)('div', {
                                    className: v()(
                                      Je().distance,
                                      'addondistance',
                                    ),
                                    children: n.distanceFromCity.replace(
                                      '{0}',
                                      l,
                                    ),
                                  }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, C.jsxs)('div', {
                        className: v()(
                          Je().hotelAddressMobileWrapper,
                          'addonhotelAddressMobileWrapper',
                        ),
                        children: [
                          (0, C.jsx)('div', {
                            className: v()(
                              Je().locationIcon,
                              'addonlocationIcon',
                            ),
                            style: { backgroundImage: 'url('.concat(on, ')') },
                          }),
                          (0, C.jsx)('div', {
                            className: v()(Je().hotelAddress, Je().addressLink),
                            children: o,
                          }),
                        ],
                      }),
                      (0, C.jsx)('div', {
                        className: v()(Je().desktop, 'addondesktop'),
                        children:
                          '' !== _ &&
                          (0, C.jsx)('div', {
                            className: v()(
                              Je().greenBoxSingleTeaser,
                              Je().desktop,
                            ),
                            children: _,
                          }),
                      }),
                      !f &&
                        (0, C.jsx)('div', {
                          className: v()(Je().merchantLogo, Je().desktop),
                          style: { backgroundImage: 'url('.concat(j, ')') },
                        }),
                    ],
                  }),
                  (0, C.jsx)('div', { className: v()(Je().line, 'addonline') }),
                ],
              }),
              (0, C.jsxs)('div', {
                className: v()(Je().contentWrap, 'addoncontentWrap'),
                children: [
                  d &&
                    (0, C.jsx)('div', {
                      className: v()(
                        Je().krisflyerLabel,
                        'addonkrisflyerLabel',
                      ),
                      children: n.krisFlyerSpecial,
                    }),
                  (0, C.jsxs)('div', {
                    children: [
                      (0, C.jsx)('div', {
                        className: v()(
                          Je().avgPriceLabel,
                          'addonavgPriceLabel',
                        ),
                        children: n.averagePricePerNight,
                      }),
                      (0, C.jsxs)('div', {
                        className: v()(
                          Je().priceContainer,
                          'addonpriceContainer',
                        ),
                        children: [
                          (0, C.jsxs)('div', {
                            className: v()(
                              Je().discountPrice,
                              'addondiscountPrice',
                            ),
                            children: [' ', (0, Ue.hB)(c, u, a, s)],
                          }),
                          p &&
                            (0, C.jsxs)('div', {
                              className: v()(
                                Je().actualPrice,
                                'addonactualPrice',
                              ),
                              children: [' ', (0, Ue.hB)(c, p, a, s)],
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, C.jsxs)('div', {
                    className: v()(Je().taxDetails, 'addontaxDetails'),
                    children: [
                      (0, C.jsx)('div', {
                        className: v()(Je().taxLabel, 'addontaxLabel'),
                        children: n.includesTaxes,
                      }),
                      (0, C.jsx)('div', {
                        children: (0, C.jsx)(L.T, {
                          position: 'Bottom',
                          message: n.taxTooltipContent,
                          children: (0, C.jsx)('div', {
                            className: v()(
                              Je().tooltipIcon,
                              'addontooltipIcon',
                            ),
                            style: { backgroundImage: 'url('.concat(ln, ')') },
                          }),
                        }),
                      }),
                    ],
                  }),
                  f && N && T,
                  !f && T,
                  (0, C.jsx)('div', {
                    className: v()(
                      Je().hyperlinkCommon,
                      'addonhyperlinkCommon',
                    ),
                    onClick: I,
                    children: n.selectRoom,
                  }),
                ],
              }),
              (0, C.jsx)('div', {
                className: v()(
                  Je().priceDetailsMobile,
                  'addonpriceDetailsMobile',
                ),
                children: (0, C.jsxs)('div', {
                  className: v()(Je().priceOuter, 'addonpriceOuter'),
                  children: [
                    (0, C.jsxs)('div', {
                      children: [
                        (0, C.jsx)('div', {
                          className: v()(
                            Je().avgPriceLabel,
                            'addonavgPriceLabel',
                          ),
                          children: n.averagePricePerNight,
                        }),
                        (0, C.jsxs)('div', {
                          className: v()(Je().taxDetails, 'addontaxDetails'),
                          children: [
                            (0, C.jsx)('div', {
                              className: v()(Je().taxLabel, 'addontaxLabel'),
                              children: n.includesTaxes,
                            }),
                            (0, C.jsx)('div', {
                              children: (0, C.jsx)(L.T, {
                                position: 'Bottom',
                                message: n.taxTooltipContent,
                                children: (0, C.jsx)('div', {
                                  className: v()(
                                    Je().tooltipIcon,
                                    'addontooltipIcon',
                                  ),
                                  style: {
                                    backgroundImage: 'url('.concat(ln, ')'),
                                  },
                                }),
                              }),
                            }),
                          ],
                        }),
                        !f &&
                          (0, C.jsx)('div', {
                            className: v()(Je().merchantLogo, Je().mobile),
                            style: { backgroundImage: 'url('.concat(j, ')') },
                          }),
                      ],
                    }),
                    (0, C.jsxs)('div', {
                      className: v()(
                        Je().priceContainer,
                        'addonpriceContainer',
                      ),
                      children: [
                        (0, C.jsx)('div', {
                          className: v()(
                            Je().discountPrice,
                            'addondiscountPrice',
                          ),
                          children: (0, Ue.hB)(c, u, a, s),
                        }),
                        p &&
                          (0, C.jsx)('div', {
                            className: v()(
                              Je().actualPrice,
                              'addonactualPrice',
                            ),
                            children: (0, Ue.hB)(c, p, a, s),
                          }),
                        (0, C.jsx)('div', {
                          className: v()(
                            Je().milesDetailsSingleTeaser,
                            'addonmilesDetailsSingleTeaser',
                          ),
                          dangerouslySetInnerHTML: {
                            __html: n.earnMilesPerNight.replace('{0}', h),
                          },
                        }),
                        (0, C.jsx)('div', {
                          className: v()(
                            Je().hyperlinkCommon,
                            'addonhyperlinkCommon',
                          ),
                          onClick: I,
                          children: n.selectRoom,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        cn = function (e) {
          var n = e.addon,
            a = e.cityName,
            s = n.image ? '/saar5/assets/manage-booking/images/' + n.image : '',
            i = (0, r.useContext)(x.dd);
          return (0, C.jsxs)('div', {
            className: v()(Ke().wrapper, 'addOnWrapper'),
            children: [
              (0, C.jsx)('div', {
                className: v()(
                  Ke().desktopBannerImage,
                  'addondesktopBannerImage',
                ),
                style: { backgroundImage: 'url('.concat(s, ')') },
              }),
              (0, C.jsx)('img', {
                className: v()(
                  Ke().mobileBannerImage,
                  'addonmobileBannerImage',
                ),
                src: s,
              }),
              (0, C.jsxs)('div', {
                className: v()(Ke().cardDetails, 'addOnInsuranceCard'),
                children: [
                  (0, C.jsxs)('div', {
                    children: [
                      n.heading
                        ? (0, C.jsxs)('div', {
                            className: v()(
                              Ke().cardHeading,
                              'addoncardHeading',
                            ),
                            children: [n.heading, ' ', a || ''],
                          })
                        : null,
                      n.description
                        ? (0, C.jsx)('div', {
                            className: v()(
                              Ke().cardDescription,
                              'addOnCardDescrption',
                            ),
                            dangerouslySetInnerHTML: { __html: n.description },
                          })
                        : null,
                    ],
                  }),
                  (0, C.jsxs)('div', {
                    className: v()(Ke().contentWrap, 'addOnContentWrap'),
                    children: [
                      (0, C.jsx)('div', {
                        className: v()(Ke().insurancePriceDiv, 'price'),
                        children: (0, C.jsxs)('div', {
                          className: v()(Ke().insurancePrice, 'insurancePrice'),
                          children: [
                            (0, C.jsx)('img', {
                              src: '/assets/images/svg/icons/gift-icon.svg',
                              alt: 'gift-icon',
                            }),
                            i['addonList.levelOne.earnMiles.staticHotel'],
                          ],
                        }),
                      }),
                      (0, C.jsx)('div', {
                        className: v()(Ke().cardLink, 'addonCardLink'),
                        children: (0, C.jsx)('a', {
                          className: v()(Ke().sshLink, 'addonSSHLink'),
                          onClick: e.navigateToAddonStack,
                          children: (0, C.jsx)('span', {
                            children: i['addonList.hotel.added.bookNow'],
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        pn = function (e) {
          var n = (0, r.useContext)(x.dd),
            a = e.hotelDetailsList,
            s = e.addon,
            i = e.pnr,
            t = e.lastName,
            o = e.pos,
            l = e.cityName,
            d = e.locale,
            c = e.currencyPrecision,
            p = e.originCountryCode,
            u = '/addon/getMBDapiHotelOffer.form',
            g = function () {
              if (a.length > 0) {
                var e = a
                    .map(function (e) {
                      return e.hotelID;
                    })
                    .join(','),
                  n = {
                    pnr: i,
                    lastName: t,
                    teaserAvailable: !0,
                    pos: o,
                    teaserHotelOffersID: e,
                    checkInDate: a[0].startDate,
                    checkOutDate: a[0].endDate,
                    roomQuantity: '1',
                    adultCount: a[0].adultCount,
                    countryCode: a[0].countryCode,
                  };
                a[0].cityCode && (n.cityCode = a[0].cityCode), (0, R.E)(n, u);
              } else
                (0, R.E)(
                  { pnr: i, lastName: t, teaserAvailable: !1, pos: o },
                  u,
                );
            },
            m = function (e) {
              var n = {
                pnr: i,
                lastName: t,
                pos: o,
                selectedHotelOfferID: e.hotelID,
                checkInDate: e.startDate,
                checkOutDate: e.endDate,
                roomQuantity: '1',
                adultCount: e.adultCount,
                countryCode: e.countryCode,
              };
              e.cityCode && (n.cityCode = e.cityCode),
                (0, R.E)(n, '/addon/getMBDapiHotelDetails.form');
            };
          return a.length > 0
            ? (0, C.jsx)('div', {
                className: v()(Qe().levelOneWrapper, 'levelOneWrapper'),
                children: (0, C.jsx)('div', {
                  className: v()(Qe().wrapper, 'addOnWrapper'),
                  children: (0, C.jsxs)('div', {
                    children: [
                      (0, C.jsxs)('div', {
                        className: v()(
                          Qe().headingWrapper,
                          'addOnHeadingWrapper',
                        ),
                        children: [
                          (0, C.jsx)('div', {
                            className: Qe().heading,
                            dangerouslySetInnerHTML: {
                              __html: l
                                ? n['hotels.in'].replace('{0}', l)
                                : n.hotels,
                            },
                          }),
                          (0, C.jsx)('div', {
                            className: v()(
                              Qe().additionalInfo,
                              'addOnAddtnlInfo',
                            ),
                            children:
                              n['addonList.levelOne.earnMiles.MP35Hotel'],
                          }),
                        ],
                      }),
                      a.length > 1 &&
                        (0, C.jsx)('div', {
                          className: v()(Qe().hotelList, 'addOnHotelList'),
                          children: a.map(function (e) {
                            return (0,
                            C.jsx)('div', { className: v()(Qe().hotel, 'addOnHotel'), children: (0, C.jsx)(rn, { hotelDetails: e, navigateToSelectedRoom: m, locale: d, currencyPrecision: c }) }, e.name);
                          }),
                        }),
                      1 === a.length &&
                        (0, C.jsx)('div', {
                          className: v()(Qe().hotelList, 'addOnHotelList'),
                          children: (0, C.jsx)(dn, {
                            hotelDetails: a[0],
                            navigateToSelectedRoom: m,
                            locale: d,
                            currencyPrecision: c,
                          }),
                        }),
                      (0, C.jsx)('div', {
                        className: v()(
                          Qe().moreHotelButtonWrapper,
                          'addOnMoreHotelButtonWrapper',
                        ),
                        children: (0, C.jsx)('div', {
                          className: Qe().moreHotelButtonOuter,
                          children: (0, C.jsx)(be.P, {
                            classes: { root: Qe().moreHotelsButton },
                            disabled: !1,
                            onClick: g,
                            children: n.moreHotels,
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              })
            : (0, C.jsx)('div', {
                children:
                  s &&
                  (0, C.jsx)(cn, {
                    addon: s,
                    cityName: l,
                    originCountryCodeForMOR: p,
                    navigateToAddonStack: g,
                  }),
              });
        },
        un = a(47697),
        gn = a.n(un),
        mn = a(19177),
        hn = a.n(mn),
        vn = a(65837),
        _n = (0, C.jsxs)('div', {
          children: [
            (0, C.jsx)(vn.TextRow, { color: '#ccc', className: hn().size1 }),
            (0, C.jsx)(vn.TextRow, { color: '#ddd', className: hn().size2 }),
            (0, C.jsx)(vn.TextRow, { color: '#ddd', className: hn().size3 }),
            (0, C.jsx)(vn.TextRow, { color: '#ddd', className: hn().size4 }),
            (0, C.jsx)(vn.TextRow, { color: '#ddd', className: hn().size4 }),
          ],
        }),
        fn = (0, C.jsxs)('div', {
          className: hn().wrapper,
          children: [
            (0, C.jsx)('div', { className: hn().leftBlock }),
            (0, C.jsx)('div', { className: hn().rightBlock, children: _n }),
          ],
        }),
        xn = (0, C.jsxs)('div', { children: [fn, fn, fn, fn] }),
        Cn = (0, C.jsx)('div', { children: fn }),
        bn = (0, C.jsxs)('div', {
          children: [
            (0, C.jsx)('div', { className: hn().desktop, children: xn }),
            (0, C.jsx)('div', { className: hn().mobile, children: Cn }),
          ],
        }),
        Nn = a(46066);
      a(98322), a(98745);
      function jn(e, n) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          n &&
            (s = s.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            a.push.apply(a, s);
        }
        return a;
      }
      function In(e) {
        for (var n = 1; n < arguments.length; n++) {
          var a = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? jn(Object(a), !0).forEach(function (n) {
                (0, d.Z)(e, n, a[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : jn(Object(a)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(a, n),
                );
              });
        }
        return e;
      }
      var wn = a.g,
        Pn = function (e) {
          var n,
            a,
            s,
            i,
            t,
            o,
            l = (0, r.useContext)(x.dd),
            d = e.products,
            c = e.ready,
            p = e.desCountryCode,
            u = e.city,
            g = (0, r.useState)(!1),
            m = g[0],
            h = g[1],
            _ = (0, r.useState)(!1),
            f = _[0],
            b = _[1],
            N =
              null === d ||
              void 0 === d ||
              null === (n = d.expiryMiles) ||
              void 0 === n
                ? void 0
                : n.expiryDate,
            j =
              null === N || void 0 === N
                ? void 0
                : N.substr(N.indexOf(' ') + 1),
            I = function () {
              return m
                ? 1
                : null !== d && void 0 !== d && d.productDetails
                ? 4
                : 0;
            };
          !(function (e) {
            (e.PELAGOID = 'pelago'), (e.KRISHOPID = 'krisShop');
          })(t || (t = {})),
            (function (e) {
              (e.PELAGO = 'FIND MORE'), (e.KRISSHOP = 'SHOP MORE');
            })(o || (o = {}));
          var w =
              (null === d || void 0 === d ? void 0 : d.id) == t.PELAGOID
                ? l['addonList.pelago.shopMoreUrl'] + p
                : l['addonList.krisShop.shopMoreUrl'],
            P = {
              dots: !1,
              arrows: !m,
              infinite: !1,
              centerMode: m,
              centerPadding:
                m &&
                null !== d &&
                void 0 !== d &&
                d.productDetails &&
                (null === d || void 0 === d
                  ? void 0
                  : d.productDetails.length) > 1
                  ? '10%'
                  : '0%',
              customPaging: function () {
                return (0, C.jsx)('a', { children: (0, C.jsx)('p', {}) });
              },
              dotsClass: 'slick-dots '.concat(gn().slickStlye),
              slidesToShow: I(),
              slidesToScroll: I(),
              beforeChange: function (e, n) {
                ((f && n > e) || 0 === n) && b(!1), 11 === n && b(!0);
              },
            };
          (0, r.useEffect)(function () {
            window.outerWidth < 768 && h(!0);
          }, []);
          var S = [];
          (0, r.useEffect)(function () {
            (0, re.s4)('.KrisShopProductsWrapper', S);
          });
          var A,
            T =
              (null === d || void 0 === d ? void 0 : d.productDetails) &&
              (null === d ||
              void 0 === d ||
              null === (a = d.productDetails) ||
              void 0 === a
                ? void 0
                : a.length) < 4;
          return (0, C.jsx)(k.Z, {
            showLoadingAnimation: !0,
            ready: c,
            customPlaceholder: bn,
            children:
              null !== d &&
              void 0 !== d &&
              d.rank &&
              null !== d &&
              void 0 !== d &&
              d.productDetails
                ? (0, C.jsx)('div', {
                    className: v()(gn().levelOneWrapper, 'levelOneWrapper'),
                    children: (0, C.jsx)('div', {
                      className: v()(gn().wrapper, 'KrisShopProductsWrapper'),
                      'data-testid': 'krisShopSection',
                      children: (0, C.jsxs)('div', {
                        children: [
                          d.id === t.PELAGOID &&
                            (0, C.jsxs)('div', {
                              className: gn().bannerHeader,
                              children: [
                                (0, C.jsxs)('div', {
                                  className: gn().bannerLeftContent,
                                  children: [
                                    (0, C.jsxs)('div', {
                                      className: gn().bannerHeading,
                                      children: [
                                        l['addonList.pelago.bannerHeading'],
                                        ' ',
                                        u,
                                      ],
                                    }),
                                    (0, C.jsx)('div', {
                                      className: gn().bannerSubHeading,
                                      children:
                                        l[
                                          'addonList.levelOne.earnMiles.PelagoCarousel'
                                        ],
                                    }),
                                  ],
                                }),
                                (0, C.jsx)('div', {
                                  className: gn().bannerRightContent,
                                  children: (0, C.jsx)('img', {
                                    src: '/assets/manage-booking/images/pelagoLogo.png',
                                    alt: 'pelago-logo',
                                  }),
                                }),
                              ],
                            }),
                          d.id == t.KRISHOPID &&
                            (0, C.jsxs)('div', {
                              className: gn().headerContainer,
                              children: [
                                (0, C.jsxs)('div', {
                                  className: gn().headerLeftContainer,
                                  children: [
                                    (0, C.jsx)('div', {
                                      className: gn().heading,
                                      children:
                                        null === d || void 0 === d
                                          ? void 0
                                          : d.title,
                                    }),
                                    (0, C.jsx)('div', {
                                      className: gn().bannerSubHeading,
                                      children:
                                        l[
                                          'addonList.levelOne.earnMiles.krisShopCarousel'
                                        ],
                                    }),
                                    (0, C.jsx)('div', {
                                      className: gn().description,
                                      dangerouslySetInnerHTML: {
                                        __html:
                                          void 0 !=
                                          (null === d || void 0 === d
                                            ? void 0
                                            : d.description)
                                            ? null === d || void 0 === d
                                              ? void 0
                                              : d.description
                                            : '',
                                      },
                                    }),
                                  ],
                                }),
                                (0, C.jsx)('div', {
                                  className: gn().headerRightContainer,
                                  children: (0, C.jsx)('div', {
                                    className: gn().krisShopRightLogo,
                                    children: (0, C.jsx)('img', {
                                      src:
                                        ((A = 'KrisShoplogo.png'),
                                        '/saar5/assets/manage-booking/images/' +
                                          A),
                                      alt: 'krisShop-logo',
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          (null === d || void 0 === d
                            ? void 0
                            : d.isPrincipalKFUser) &&
                            (0, C.jsx)('div', {
                              className: gn().expiryMilesWrapper,
                              children: (0, C.jsxs)('div', {
                                className: gn().messageContainer,
                                children: [
                                  (0, C.jsx)('div', {
                                    className: gn().infoIcon,
                                  }),
                                  null !== d && void 0 !== d && d.expiryMiles
                                    ? (0, C.jsx)('div', {
                                        className: gn().message,
                                        children: (0, C.jsxs)('div', {
                                          children: [
                                            (0, C.jsxs)('b', {
                                              children: [
                                                null === d ||
                                                void 0 === d ||
                                                null === (s = d.expiryMiles) ||
                                                void 0 === s
                                                  ? void 0
                                                  : s.expiryMiles,
                                                ' ',
                                                l.miles,
                                              ],
                                            }),
                                            ' ',
                                            l.willExpire,
                                            ' ',
                                            j,
                                            '.',
                                            ' ',
                                            l['kf.spendMiles'],
                                          ],
                                        }),
                                      })
                                    : (0, C.jsx)('div', {
                                        className: gn().message,
                                        children: (0, C.jsx)('span', {
                                          className: gn().zeroMiles,
                                          children:
                                            l['kf.zeroExpiringMilesAlert'],
                                        }),
                                      }),
                                ],
                              }),
                            }),
                          (0, C.jsx)('div', {
                            className: ''
                              .concat(gn().container, ' ')
                              .concat(f ? gn().leftPadding : '', ' ')
                              .concat(m ? gn().mobile : '', ' ')
                              .concat(T ? gn().initialProduct : ''),
                            children: (0, C.jsx)(
                              Nn.Z,
                              In(
                                In({}, P),
                                {},
                                {
                                  children:
                                    null === d ||
                                    void 0 === d ||
                                    null === (i = d.productDetails) ||
                                    void 0 === i
                                      ? void 0
                                      : i.map(function (e, n) {
                                          var a;
                                          return (0, C.jsxs)(
                                            'div',
                                            {
                                              className: gn().productContainer,
                                              children: [
                                                (0, C.jsx)('div', {
                                                  className: gn().productImage,
                                                  children: (0, C.jsx)('img', {
                                                    className: gn().image,
                                                    src: e.imageLink,
                                                  }),
                                                }),
                                                d.id == t.KRISHOPID
                                                  ? (0, C.jsxs)('div', {
                                                      className:
                                                        gn().productInformation,
                                                      children: [
                                                        (0, C.jsx)('div', {
                                                          className: gn().brand,
                                                          children: e.brand,
                                                        }),
                                                        (0, C.jsxs)('a', {
                                                          href: e.productRedirectUrl,
                                                          target: '_blank',
                                                          rel: 'noreferrer',
                                                          children: [
                                                            ' ',
                                                            (0, C.jsx)('div', {
                                                              className: v()(
                                                                gn().title,
                                                                'link-text',
                                                              ),
                                                              onClick:
                                                                function () {
                                                                  return (function (
                                                                    e,
                                                                  ) {
                                                                    var n,
                                                                      a,
                                                                      s =
                                                                        null ===
                                                                          d ||
                                                                        void 0 ===
                                                                          d ||
                                                                        null ===
                                                                          (n =
                                                                            d.productDetails) ||
                                                                        void 0 ===
                                                                          n
                                                                          ? void 0
                                                                          : n.filter(
                                                                              function (
                                                                                n,
                                                                              ) {
                                                                                return (
                                                                                  n.id ===
                                                                                  e
                                                                                );
                                                                              },
                                                                            ),
                                                                      i = [];
                                                                    s &&
                                                                      (null ===
                                                                        s ||
                                                                      void 0 ===
                                                                        s
                                                                        ? void 0
                                                                        : s.length) >
                                                                        0 &&
                                                                      (i =
                                                                        null ===
                                                                          s ||
                                                                        void 0 ===
                                                                          s
                                                                          ? void 0
                                                                          : s.map(
                                                                              function (
                                                                                e,
                                                                              ) {
                                                                                return {
                                                                                  id: e.id,
                                                                                  brand:
                                                                                    e.brand,
                                                                                  title:
                                                                                    e.title
                                                                                      ? e.title
                                                                                      : '',
                                                                                  badges:
                                                                                    e.badges
                                                                                      ? e.badges.toString()
                                                                                      : '',
                                                                                  price:
                                                                                    e
                                                                                      .price
                                                                                      .currency +
                                                                                    ' ' +
                                                                                    e
                                                                                      .price
                                                                                      .value,
                                                                                  loyaltyPrice:
                                                                                    e
                                                                                      .loyaltyPrice
                                                                                      .value +
                                                                                    ' ' +
                                                                                    e
                                                                                      .loyaltyPrice
                                                                                      .currency,
                                                                                  clickCount:
                                                                                    e.clickCount,
                                                                                };
                                                                              },
                                                                            )),
                                                                      -1 ===
                                                                      wn.window.dataLayer.findIndex(
                                                                        function (
                                                                          e,
                                                                        ) {
                                                                          return (
                                                                            'KrisShopProductClick' ===
                                                                            e.event
                                                                          );
                                                                        },
                                                                      )
                                                                        ? ((0,
                                                                          re.y_)(
                                                                            {
                                                                              event:
                                                                                'KrisShopProductClick',
                                                                              'eventDetails.category':
                                                                                'KrisShop product data',
                                                                              'eventDetails.action':
                                                                                'KrisShop Product Click',
                                                                              products:
                                                                                [],
                                                                            },
                                                                          ),
                                                                          (a =
                                                                            wn.window.dataLayer.findIndex(
                                                                              function (
                                                                                e,
                                                                              ) {
                                                                                return (
                                                                                  'KrisShopProductClick' ===
                                                                                  e.event
                                                                                );
                                                                              },
                                                                            )),
                                                                          (i[0].clickCount = 1),
                                                                          wn.window.dataLayer[
                                                                            a
                                                                          ].products.push(
                                                                            i[0],
                                                                          ))
                                                                        : ((a =
                                                                            wn.window.dataLayer.findIndex(
                                                                              function (
                                                                                e,
                                                                              ) {
                                                                                return (
                                                                                  'KrisShopProductClick' ===
                                                                                  e.event
                                                                                );
                                                                              },
                                                                            )),
                                                                          wn.window.dataLayer[
                                                                            a
                                                                          ].products.find(
                                                                            function (
                                                                              n,
                                                                            ) {
                                                                              return (
                                                                                n.id ===
                                                                                e
                                                                              );
                                                                            },
                                                                          )
                                                                            ? (wn.window.dataLayer[
                                                                                a
                                                                              ].products.find(
                                                                                function (
                                                                                  n,
                                                                                ) {
                                                                                  return (
                                                                                    n.id ===
                                                                                    e
                                                                                  );
                                                                                },
                                                                              ).clickCount += 1)
                                                                            : ((i[0].clickCount = 1),
                                                                              wn.window.dataLayer[
                                                                                a
                                                                              ].products.push(
                                                                                i[0],
                                                                              )));
                                                                  })(e.id);
                                                                },
                                                              children: e.title,
                                                            }),
                                                          ],
                                                        }),
                                                        (0, C.jsx)('div', {
                                                          className:
                                                            gn().badgeContainer,
                                                          children:
                                                            null ===
                                                              (a = e.badges) ||
                                                            void 0 === a
                                                              ? void 0
                                                              : a.map(function (
                                                                  e,
                                                                  n,
                                                                ) {
                                                                  return (0,
                                                                  C.jsx)(
                                                                    'div',
                                                                    {
                                                                      className:
                                                                        gn()
                                                                          .badges,
                                                                      children:
                                                                        (0,
                                                                        C.jsx)(
                                                                          'div',
                                                                          {
                                                                            className:
                                                                              gn()
                                                                                .badgeText,
                                                                            children:
                                                                              e,
                                                                          },
                                                                        ),
                                                                    },
                                                                    n,
                                                                  );
                                                                }),
                                                        }),
                                                        0 !==
                                                          e.sellPrice.value &&
                                                          (0, C.jsx)('div', {
                                                            className:
                                                              gn()
                                                                .priceContainer,
                                                            children: (0,
                                                            C.jsxs)('div', {
                                                              children: [
                                                                (0, C.jsxs)(
                                                                  's',
                                                                  {
                                                                    className:
                                                                      gn()
                                                                        .discountPrice,
                                                                    children: [
                                                                      e.price
                                                                        .currency,
                                                                      ' ',
                                                                      e.price
                                                                        .value,
                                                                    ],
                                                                  },
                                                                ),
                                                                ' ',
                                                                (0, C.jsxs)(
                                                                  'span',
                                                                  {
                                                                    className:
                                                                      gn()
                                                                        .price,
                                                                    children: [
                                                                      e
                                                                        .sellPrice
                                                                        .currency,
                                                                      ' ',
                                                                      e
                                                                        .sellPrice
                                                                        .value,
                                                                    ],
                                                                  },
                                                                ),
                                                              ],
                                                            }),
                                                          }),
                                                        0 ===
                                                          e.sellPrice.value &&
                                                          (0, C.jsx)('div', {
                                                            className:
                                                              gn()
                                                                .priceContainer,
                                                            children: (0,
                                                            C.jsxs)('div', {
                                                              className:
                                                                gn().price,
                                                              children: [
                                                                e.price
                                                                  .currency,
                                                                ' ',
                                                                e.price.value,
                                                              ],
                                                            }),
                                                          }),
                                                        (0, C.jsx)('div', {
                                                          className:
                                                            gn()
                                                              .loyaltyPriceContainer,
                                                          children: (0, C.jsxs)(
                                                            'div',
                                                            {
                                                              className:
                                                                gn()
                                                                  .loyaltyPrice,
                                                              children: [
                                                                'or ',
                                                                e.loyaltyPrice
                                                                  .value,
                                                                ' ',
                                                                e.loyaltyPrice
                                                                  .currency,
                                                              ],
                                                            },
                                                          ),
                                                        }),
                                                      ],
                                                    })
                                                  : (0, C.jsxs)('div', {
                                                      className:
                                                        gn().productInformation,
                                                      children: [
                                                        (0, C.jsx)('a', {
                                                          href: e.productRedirectUrl,
                                                          target: '_blank',
                                                          rel: 'noreferrer',
                                                          children: (0, C.jsx)(
                                                            'div',
                                                            {
                                                              className:
                                                                gn()
                                                                  .pelagoHeading,
                                                              children: e.brand,
                                                            },
                                                          ),
                                                        }),
                                                        (0, C.jsxs)('div', {
                                                          className:
                                                            gn().bottomDetails,
                                                          children: [
                                                            (0, C.jsx)('div', {
                                                              className:
                                                                gn().from,
                                                              children:
                                                                l[
                                                                  'addonList.pelago.from'
                                                                ],
                                                            }),
                                                            (0, C.jsxs)('div', {
                                                              className:
                                                                gn().fare,
                                                              children: [
                                                                e.price
                                                                  .currency,
                                                                ' ',
                                                                e.price.value,
                                                              ],
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                              ],
                                            },
                                            n,
                                          );
                                        }),
                                },
                              ),
                            ),
                          }),
                          (0, C.jsx)('div', {
                            className: gn().primaryButton,
                            children: (0, C.jsx)('div', {
                              className: gn().buttonContent,
                              children: (0, C.jsxs)('a', {
                                href: w,
                                target: '_blank',
                                rel: 'noreferrer',
                                children: [
                                  (null === d || void 0 === d
                                    ? void 0
                                    : d.id) == t.KRISHOPID
                                    ? o.KRISSHOP
                                    : o.PELAGO,
                                  (0, C.jsx)('img', {
                                    src: '/saar5/assets/images/svg/icons/icon-external_link_white.svg',
                                    alt: 'external-link',
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  })
                : null,
          });
        },
        Sn = function (e) {
          var n,
            a,
            s,
            i,
            t,
            o,
            l,
            d,
            c,
            p,
            u,
            g,
            m,
            h,
            _,
            f,
            b,
            N,
            j,
            I,
            w,
            P,
            S,
            A,
            T,
            D,
            L,
            O = (0, r.useContext)(x.dd),
            B = e.addonList,
            M = e.ready,
            H = e.mp35,
            E = e.pnr,
            W = e.lastName,
            K = e.pos,
            G = e.adultCount,
            V = e.addonSectionRef,
            q = e.locale,
            Y = e.redirectToSubFlow,
            Z = e.products,
            Q = e.pelagoDetails,
            z = e.addedAddons,
            J = e.passangers,
            X = e.flights,
            $ = e.currencyPrecision,
            ee = (0, r.useContext)(x.Jj),
            ne = ee['feature.enableMP35.switch'],
            ae = ee['feature.enableKrisShopSection.switch'],
            se = ee['feature.enableKrisShopAddOnBanner.switch'],
            ie = (0, r.useState)(!1),
            te = ie[0],
            oe = ie[1],
            le = (0, r.useState)(!1),
            de = le[0],
            ce = le[1],
            pe = (0, r.useState)(0),
            ue = pe[0],
            ge = pe[1],
            me = (0, r.useState)(!1),
            he = me[0],
            ve = me[1],
            _e = O['addonList.levelTwo.agodaRedirectUrl'],
            fe = X.length ? X[0].destinationCountryCode : '',
            xe = X.length
              ? null === (n = X[0]) || void 0 === n
                ? void 0
                : n.originCountryCode
              : '',
            Ce = O['addonList.paidLoungePass.levelOneCardView'],
            be = O['addonList.paidLoungePass.levelTwoCardView'],
            Ne = O['addonList.paidLoungePass.levelThreeCardView'];
          !(function (e) {
            (e.HOTELID_AGODA = 'agoda'), (e.PELAGOID = 'pelago');
          })(L || (L = {})),
            (0, r.useEffect)(
              function () {
                var e,
                  n =
                    null === J || void 0 === J
                      ? void 0
                      : J.every(function (e, n) {
                          return (
                            ge(n),
                            !!e.isInfant ||
                              ((null === (a = e.contactDetails) ||
                              void 0 === a ||
                              null === (s = a[0]) ||
                              void 0 === s
                                ? void 0
                                : s.email) &&
                                '' !==
                                  (null === (i = e.contactDetails) ||
                                  void 0 === i ||
                                  null === (r = i[0]) ||
                                  void 0 === r
                                    ? void 0
                                    : r.email) &&
                                (0, U.H6)(
                                  null === (t = e.contactDetails) ||
                                    void 0 === t ||
                                    null === (o = t[0]) ||
                                    void 0 === o
                                    ? void 0
                                    : o.email,
                                ) &&
                                !e.isInfant)
                          );
                          var a, s, i, r, t, o;
                        });
                n && ge(void 0),
                  ve(n),
                  ce(null !== (e = !n) && void 0 !== e && e);
              },
              [J],
            );
          var je = [];
          (0, r.useEffect)(function () {
            (0, re.s4)('.AddonListWrapper', je);
          });
          var Ie,
            we,
            Pe = function (e, n) {
              de && !n
                ? oe(!0)
                : (0 === (null === e || void 0 === e ? void 0 : e.button) ||
                    n) &&
                  (0, R.E)(
                    { pnr: E, lastName: W, flowType: 'MB_INS', locale: q },
                    '/addon/loadMBInsurance.form',
                  );
            },
            Se = {
              image: O['krisShopTile.image'],
              heading:
                null !== (a = null === Z || void 0 === Z ? void 0 : Z.title) &&
                void 0 !== a
                  ? a
                  : '',
              subHeading: '',
              description:
                null !==
                  (s = null === Z || void 0 === Z ? void 0 : Z.description) &&
                void 0 !== s
                  ? s
                  : '',
              logo: O['krisShopTile.logo'],
              additionalText: '',
              addLinkText: O['krisShopTile.addLinkText'],
              addLinkUrl: O['krisShopTile.addLinkURL'],
              tcText: '',
            },
            Ae = function (e) {
              return '/saar5/assets/manage-booking/images/' + e;
            },
            Te = B.filter(function (e) {
              return 1 == e.rank || (Ce && 9 == e.rank);
            }),
            De = B.filter(function (e) {
              return (
                2 == e.rank ||
                3 == e.rank ||
                4 == e.rank ||
                5 == e.rank ||
                6 == e.rank ||
                (be && 9 == e.rank)
              );
            }),
            ke = B.filter(function (e) {
              return 7 == e.rank || 8 == e.rank || (Ne && 9 == e.rank);
            });
          !(function (e) {
            (e.TRAVELINSURANCE = 'travelInsurance'),
              (e.AGODA = 'agoda'),
              (e.KRISSHOP = 'krisShop'),
              (e.CARRENTAL = 'carRental'),
              (e.VIATOR = 'viator'),
              (e.PAIDLOUNGEPASS = 'loungePass'),
              (e.PELAGO = 'pelago');
          })(Ie || (Ie = {})),
            (function (e) {
              (e.AllianzGlobal = 'Allianz_Global_Assistance.png'),
                (e.AIGLogo = 'aig-logo.png');
            })(we || (we = {}));
          var ye = Te.length > 0 && Te[0].id == Ie.TRAVELINSURANCE,
            Re =
              ye &&
              (null === (i = Te[0].data) || void 0 === i
                ? void 0
                : i.insuranceCurrencyCode) &&
              (null === (t = Te[0].data) || void 0 === t
                ? void 0
                : t.insuranceTotalPrice) &&
              (null === (o = Te[0].data) || void 0 === o
                ? void 0
                : o.forAllPaxText) &&
              (null === (l = Te[0].data) || void 0 === l
                ? void 0
                : l.addLinkText),
            Le =
              ye &&
              null !== (d = Te[0].data) &&
              void 0 !== d &&
              d.insuranceCurrencyCode
                ? null === (c = Te[0].data) || void 0 === c
                  ? void 0
                  : c.insuranceCurrencyCode
                : '',
            Oe =
              ye &&
              null !== (p = Te[0].data) &&
              void 0 !== p &&
              p.insuranceTotalPrice
                ? null === (u = Te[0].data) || void 0 === u
                  ? void 0
                  : u.insuranceTotalPrice
                : '',
            Be =
              (null === Z || void 0 === Z ? void 0 : Z.rank) &&
              (null === Z || void 0 === Z ? void 0 : Z.productDetails),
            Fe = O['addonList.paidLoungePass.levelThreeIcon'],
            Me = function (e) {
              var n, a;
              return (null === e || void 0 === e ? void 0 : e.id) ==
                Ie.PAIDLOUNGEPASS
                ? (0, C.jsxs)('span', {
                    children: [
                      null === (a = e.data) || void 0 === a
                        ? void 0
                        : a.description,
                      ' ',
                      (0, C.jsx)('img', {
                        src: '/assets/images/svg/icons/icon-external-link-black.svg',
                        alt: 'external-link-icon',
                      }),
                    ],
                  })
                : (0, C.jsx)('span', {
                    children:
                      null === (n = e.data) || void 0 === n
                        ? void 0
                        : n.description,
                  });
            },
            He = function () {
              return (0, C.jsxs)('div', {
                className: Ee().retrieveError,
                children: [
                  (0, C.jsx)('em', { className: Ee().alertIcon }),
                  (0, C.jsx)('span', {
                    className: Ee().retrieveErrorMessage,
                    dangerouslySetInnerHTML: {
                      __html: O['addonList.hotel.retrieveFailureMsg'],
                    },
                  }),
                ],
              });
            };
          return (0, C.jsxs)('div', {
            className: v()(Ee().wrapper, 'addOnWrapper', 'AddonListWrapper'),
            ref: V,
            children: [
              (0, C.jsx)('div', {
                className: v()(Ee().heading, 'addOnHeading'),
                children: O.complementTrip,
              }),
              ae && (0, C.jsx)(Pn, { products: Z, ready: M }),
              Q &&
                1 == Q.rank &&
                (0, C.jsx)(Pn, {
                  products: Q,
                  ready: M,
                  locale: q,
                  desCountryCode: fe,
                  city: null === H || void 0 === H ? void 0 : H.cityName,
                }),
              (0, C.jsxs)(k.Z, {
                showLoadingAnimation: !0,
                ready: M,
                customPlaceholder: Ye.u,
                children: [
                  B.map(function (e) {
                    var n, a;
                    return (0,
                    C.jsx)('div', { children: e.id === L.HOTELID_AGODA && 1 === e.rank ? (ne ? (0, C.jsxs)('div', { children: [0 == (null === z || void 0 === z ? void 0 : z.hotelDetailsRetrieved) && He(), (0, C.jsx)(pn, { hotelDetailsList: (null === H || void 0 === H ? void 0 : H.hotelList) || [], addon: null !== H && void 0 !== H && H.hotelList && 0 === H.hotelList.length ? e.data : void 0, pnr: E, lastName: W, pos: K, adultCount: G, cityName: null === H || void 0 === H ? void 0 : H.cityName, locale: q, currencyPrecision: $, originCountryCode: xe })] }) : (0, C.jsxs)('div', { children: [0 == (null === z || void 0 === z ? void 0 : z.hotelDetailsRetrieved) && He(), (0, C.jsx)(qe, { id: e.id, rank: e.rank, addon: e.data, redirectToSubFlow: Y, redirectToInsuranceFlow: Pe }, e.id)] })) : e.id === Ie.KRISSHOP && 1 == e.rank ? (ae || se) && !Be && (0, C.jsx)(qe, { id: 'krisShop', rank: e.rank, addon: null === Z || void 0 === Z || !Z.title || (null !== (n = Z.productDetails) && void 0 !== n && n.length) || !ae ? e.data : Se, redirectToSubFlow: Y, redirectToInsuranceFlow: Pe }, e.id) : e.id == L.PELAGOID && 1 == e.rank ? !(null !== Q && void 0 !== Q && null !== (a = Q.productDetails) && void 0 !== a && a.length) && (0, C.jsx)(qe, { id: e.id, rank: e.rank, addon: e.data, redirectToSubFlow: Y, redirectToInsuranceFlow: Pe, locale: q, currencyPrecision: $ }, e.id) : e.id == Ie.PAIDLOUNGEPASS && 9 == e.rank && (0, C.jsx)(qe, { id: e.id, rank: e.rank, addon: e.data, redirectToSubFlow: Y, redirectToInsuranceFlow: Pe, locale: q, currencyPrecision: $ }, e.id) }, e.id);
                  }),
                  ye &&
                    (0, C.jsx)('div', {
                      className: v()(
                        Ee().levelOneAddonContainer,
                        'levelOneAddonContainer',
                      ),
                      children: (0, C.jsx)('div', {
                        className: v()(
                          Ee().levelOneAddonContainerList,
                          'levelOneAddonContainerList',
                        ),
                        children: (0, C.jsxs)('div', {
                          className: v()(
                            Ee().insurenceWrapper,
                            'insurenceWrapper',
                          ),
                          children: [
                            (0, C.jsx)('div', {
                              className: v()(
                                Ee().insurenceWrapperImg,
                                'insurenceWrapperImg',
                              ),
                              children: (0, C.jsx)('img', {
                                src: Ae(
                                  null === (g = Te[0].data) || void 0 === g
                                    ? void 0
                                    : g.image,
                                ),
                              }),
                            }),
                            (0, C.jsxs)('div', {
                              className: v()(
                                Ee().insurenceContent,
                                'insurenceContent',
                              ),
                              children: [
                                (0, C.jsx)('h2', {
                                  children:
                                    null !== (m = Te[0].data) &&
                                    void 0 !== m &&
                                    m.isAIGProvider
                                      ? O[
                                          'addonList.levelOne.InsurenceAIG.subHeading'
                                        ]
                                      : null === (h = Te[0].data) ||
                                        void 0 === h
                                      ? void 0
                                      : h.heading,
                                }),
                                (0, C.jsx)('p', {
                                  dangerouslySetInnerHTML: {
                                    __html:
                                      null === (_ = Te[0]) ||
                                      void 0 === _ ||
                                      null === (f = _.data) ||
                                      void 0 === f
                                        ? void 0
                                        : f.description,
                                  },
                                }),
                                (0, C.jsxs)('div', {
                                  className: v()(
                                    Ee().insurenceBottom,
                                    'insurenceBottom',
                                    (null === (b = Te[0]) ||
                                    void 0 === b ||
                                    null === (N = b.data) ||
                                    void 0 === N
                                      ? void 0
                                      : N.logo) == we.AllianzGlobal ||
                                      (null === (j = Te[0]) ||
                                      void 0 === j ||
                                      null === (I = j.data) ||
                                      void 0 === I
                                        ? void 0
                                        : I.logo) == we.AIGLogo
                                      ? [
                                          Ee().allianzGlobalLogo,
                                          'allianzGlobalLogo',
                                        ]
                                      : '',
                                  ),
                                  children: [
                                    (0, C.jsx)('div', {
                                      className: v()(
                                        Ee().insurenceBottomImg,
                                        'insurenceBottomImg',
                                      ),
                                      children: (0, C.jsx)('img', {
                                        src: Ae(
                                          null === (w = Te[0].data) ||
                                            void 0 === w
                                            ? void 0
                                            : w.logo,
                                        ),
                                      }),
                                    }),
                                    Re
                                      ? (0, C.jsxs)('div', {
                                          className: v()(
                                            Ee().insurenceBottomContent,
                                            'insurenceBottomContent',
                                          ),
                                          children: [
                                            (0, C.jsx)('label', {
                                              children: (0, Ue.hB)(
                                                Le,
                                                Oe,
                                                q,
                                                $,
                                              ),
                                            }),
                                            (0, C.jsx)('span', {
                                              children:
                                                null === (P = Te[0].data) ||
                                                void 0 === P
                                                  ? void 0
                                                  : P.forAllPaxText,
                                            }),
                                            (0, C.jsx)('a', {
                                              className: v()(
                                                Ee().insuranceAddLink,
                                                'insuranceAddLink',
                                              ),
                                              onClick: function (e) {
                                                e.preventDefault(), Pe(e);
                                              },
                                              children:
                                                null === (S = Te[0].data) ||
                                                void 0 === S
                                                  ? void 0
                                                  : S.addLinkText,
                                            }),
                                          ],
                                        })
                                      : (0, C.jsx)('div', {
                                          className: v()(
                                            Ee().insurenceBottomContent,
                                            'insurenceBottomContent',
                                          ),
                                          children: (0, C.jsx)('a', {
                                            className: v()(
                                              Ee().insuranceAddLink,
                                              'insuranceAddLink',
                                            ),
                                            href:
                                              null !== (A = Te[0].data) &&
                                              void 0 !== A &&
                                              A.addLinkUrl
                                                ? Te[0].data.addLinkUrl
                                                : '',
                                            rel: 'noopener noreferrer',
                                            target: '_blank',
                                            children:
                                              null === (T = Te[0].data) ||
                                              void 0 === T
                                                ? void 0
                                                : T.addLinkText,
                                          }),
                                        }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  (0, C.jsx)('div', {
                    className: v()(Ee().levelTwoContainer, 'levelTwoContainer'),
                    children:
                      De.length > 0 &&
                      De.map(function (e, n) {
                        var a, s, i, r, t, o, l, d, c, p, u, g, m;
                        return (0, C.jsx)(
                          'div',
                          {
                            className: v()(
                              Ee().levelTwoCardContainer,
                              'levelTwoCardContainer',
                            ),
                            children: (0, C.jsxs)('div', {
                              className: v()(
                                Ee().levelTwoElements,
                                'levelTwoElements',
                              ),
                              children: [
                                (0, C.jsx)('div', {
                                  className: v()(
                                    Ee().levelTwoImage,
                                    'levelTwoImage',
                                  ),
                                  children: (0, C.jsx)('img', {
                                    src: Ae(e.data.image),
                                  }),
                                }),
                                (0, C.jsxs)('div', {
                                  className: v()(
                                    Ee().levelTwoDescription,
                                    'levelTwoDescription',
                                  ),
                                  children: [
                                    (0, C.jsxs)('div', {
                                      className: v()(
                                        Ee().levelTwoHeader,
                                        'levelTwoHeader',
                                      ),
                                      children: [
                                        (0, C.jsx)('h2', {
                                          className: v()(
                                            Ee().levelTwoHeading,
                                            'levelTwoHeading',
                                          ),
                                          dangerouslySetInnerHTML: {
                                            __html:
                                              '' !=
                                              (null === (a = e.data) ||
                                              void 0 === a
                                                ? void 0
                                                : a.subHeading)
                                                ? null === (s = e.data) ||
                                                  void 0 === s
                                                  ? void 0
                                                  : s.subHeading
                                                : null === (i = e.data) ||
                                                  void 0 === i
                                                ? void 0
                                                : i.heading,
                                          },
                                        }),
                                        (0, C.jsx)('p', {
                                          className: v()(
                                            Ee().levelTwoSubHeading,
                                            'levelTwoSubHeading',
                                          ),
                                          dangerouslySetInnerHTML: {
                                            __html:
                                              null !== (r = e.data) &&
                                              void 0 !== r &&
                                              r.subDescription
                                                ? null === (t = e.data) ||
                                                  void 0 === t
                                                  ? void 0
                                                  : t.subDescription
                                                : null === (o = e.data) ||
                                                  void 0 === o
                                                ? void 0
                                                : o.description,
                                          },
                                        }),
                                      ],
                                    }),
                                    e.id != Ie.AGODA
                                      ? (0, C.jsx)('div', {
                                          className: v()(
                                            Ee().levelTwoLogo,
                                            'levelTwoLogo',
                                            e.id == Ie.PELAGO
                                              ? [
                                                  Ee().pelagoImage,
                                                  'pelagoImage',
                                                ]
                                              : '',
                                          ),
                                          children: (0, C.jsx)('img', {
                                            src: Ae(
                                              null === (l = e.data) ||
                                                void 0 === l
                                                ? void 0
                                                : l.logo,
                                            ),
                                            alt: 'logo',
                                          }),
                                        })
                                      : (0, C.jsx)('div', {
                                          className: v()(
                                            Ee().levelTwoLogo,
                                            'levelTwoLogo',
                                            [Ee().agodaImage, 'agodaImage'],
                                          ),
                                        }),
                                    (0, C.jsxs)('div', {
                                      className: v()(
                                        Ee().levelTwoFooterContainer,
                                        'levelTwoFooterContainer',
                                      ),
                                      children: [
                                        (0, C.jsx)('div', {
                                          className: v()(
                                            Ee().levelTwoFooterLeftContainer,
                                            'levelTwoFooterLeftContainer',
                                          ),
                                          children: (0, C.jsxs)('div', {
                                            className: v()(
                                              Ee().levelTwoFooterLeftDesc,
                                              'levelTwoFooterLeftDesc',
                                            ),
                                            children: [
                                              (0, C.jsx)('div', {
                                                className: v()(
                                                  Ee().levelTwoGift,
                                                  'levelTwoGift',
                                                ),
                                                children:
                                                  e.id != Ie.TRAVELINSURANCE &&
                                                  e.id != Ie.CARRENTAL &&
                                                  (0, C.jsx)('img', {
                                                    src: '/assets/images/svg/icons/gift-icon.svg',
                                                  }),
                                              }),
                                              (0, C.jsx)('p', {
                                                className: v()(
                                                  Ee().levelTwoMileDesc,
                                                  'levelTwoMileDesc',
                                                ),
                                                children:
                                                  e.id == Ie.AGODA
                                                    ? O[
                                                        'addonList.levelTwo.earnMiles.Hotel'
                                                      ]
                                                    : e.id == Ie.KRISSHOP
                                                    ? O[
                                                        'addonList.levelTwo.earnMiles.krisShop'
                                                      ]
                                                    : e.id == Ie.PELAGO
                                                    ? O[
                                                        'addonList.levelTwo.earnMiles.Pelago'
                                                      ]
                                                    : e.id == Ie.VIATOR
                                                    ? O[
                                                        'addonList.levelTwo.earnMiles.viator'
                                                      ]
                                                    : e.id == Ie.PAIDLOUNGEPASS
                                                    ? O[
                                                        'addonList.levelTwo.earnMiles.loungePass'
                                                      ]
                                                    : '',
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, C.jsx)('div', {
                                          className: v()(
                                            Ee().levelTwoFooterRightContainer,
                                            'levelTwoFooterRightContainer',
                                          ),
                                          children: (0, C.jsxs)('div', {
                                            className: v()(
                                              Ee().levelTwoFooterRightDesc,
                                              'levelTwoFooterRightDesc',
                                            ),
                                            children: [
                                              e.id == Ie.TRAVELINSURANCE &&
                                                (null === (d = e.data) ||
                                                void 0 === d
                                                  ? void 0
                                                  : d.insuranceTotalPrice) &&
                                                (0, C.jsx)('div', {
                                                  className: v()(
                                                    Ee().levelTwoFrom,
                                                    'levelTwoFrom',
                                                  ),
                                                  children:
                                                    O[
                                                      'addonList.levelTwo.priceFrom'
                                                    ],
                                                }),
                                              (0, C.jsx)('div', {
                                                className: v()(
                                                  Ee().levelTwoFareContainer,
                                                  'levelTwoFareContainer',
                                                ),
                                                children: (0, C.jsx)('span', {
                                                  className: v()(
                                                    Ee().levelTwoFare,
                                                    'levelTwoFare',
                                                  ),
                                                  children:
                                                    e.id == Ie.AGODA ||
                                                    e.id == Ie.TRAVELINSURANCE
                                                      ? (0, C.jsx)('a', {
                                                          className: v()(
                                                            Ee()
                                                              .levelTworedirection,
                                                            'levelTworedirection',
                                                          ),
                                                          onClick: function (
                                                            n,
                                                          ) {
                                                            n.preventDefault(),
                                                              (function (e, n) {
                                                                e ==
                                                                Ie.TRAVELINSURANCE
                                                                  ? Pe(n)
                                                                  : (0, R.E)(
                                                                      {
                                                                        pnr: E,
                                                                        lastName:
                                                                          W,
                                                                        teaserAvailable:
                                                                          !1,
                                                                        pos: K,
                                                                      },
                                                                      _e,
                                                                    );
                                                              })(e.id, n);
                                                          },
                                                          children:
                                                            e.id ==
                                                              Ie.TRAVELINSURANCE &&
                                                            null !==
                                                              (c = e.data) &&
                                                            void 0 !== c &&
                                                            c.insuranceTotalPrice &&
                                                            null !==
                                                              (p = e.data) &&
                                                            void 0 !== p &&
                                                            p.insuranceCurrencyCode
                                                              ? (0, Ue.hB)(
                                                                  null ===
                                                                    (u =
                                                                      e.data) ||
                                                                    void 0 === u
                                                                    ? void 0
                                                                    : u.insuranceCurrencyCode,
                                                                  null ===
                                                                    (g =
                                                                      e.data) ||
                                                                    void 0 === g
                                                                    ? void 0
                                                                    : g.insuranceTotalPrice,
                                                                  q,
                                                                  $,
                                                                )
                                                              : e.id == Ie.AGODA
                                                              ? O[
                                                                  'addonList.levelTwo.bookNow'
                                                                ]
                                                              : O[
                                                                  'addonList.levelTwo.shopNow'
                                                                ],
                                                        })
                                                      : (0, C.jsx)('a', {
                                                          className: v()(
                                                            Ee()
                                                              .levelTworedirection,
                                                            'levelTworedirection',
                                                          ),
                                                          href:
                                                            null !==
                                                              (m = e.data) &&
                                                            void 0 !== m &&
                                                            m.addLinkUrl
                                                              ? e.data
                                                                  .addLinkUrl
                                                              : '',
                                                          rel: 'noopener noreferrer',
                                                          target: '_blank',
                                                          children:
                                                            e.id == Ie.VIATOR ||
                                                            e.id ==
                                                              Ie.CARRENTAL ||
                                                            e.id == Ie.PELAGO
                                                              ? O[
                                                                  'addonList.levelTwo.bookNow'
                                                                ]
                                                              : e.id ==
                                                                Ie.PAIDLOUNGEPASS
                                                              ? e.data
                                                                  .addLinkText
                                                              : O[
                                                                  'addonList.levelTwo.shopNow'
                                                                ],
                                                        }),
                                                }),
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          n,
                        );
                      }),
                  }),
                  (0, C.jsx)('div', {
                    className: v()(
                      Ee().levelThreeAddonContainer,
                      'levelThreeAddonContainer',
                    ),
                    children:
                      ke.length > 0 &&
                      ke.map(function (e, n) {
                        var a, s;
                        return (0, C.jsxs)(
                          'div',
                          {
                            className: v()(
                              Ee().levelThreeAddonContainerList,
                              'levelThreeAddonContainerList',
                            ),
                            onClick: function () {
                              var n;
                              window.open(
                                null !== (n = e.data) &&
                                  void 0 !== n &&
                                  n.addLinkUrl
                                  ? e.data.addLinkUrl
                                  : '',
                                '_blank',
                              );
                            },
                            children: [
                              (0, C.jsx)('div', {
                                className: v()(
                                  Ee().levelThreeAddonContainerListImg,
                                  'levelThreeAddonContainerListImg',
                                ),
                                children:
                                  (null === e || void 0 === e
                                    ? void 0
                                    : e.id) == Ie.PAIDLOUNGEPASS
                                    ? (0, C.jsx)('img', { src: Ae(Fe) })
                                    : (0, C.jsx)('img', {
                                        src: Ae(
                                          null === (a = e.data) || void 0 === a
                                            ? void 0
                                            : a.logo,
                                        ),
                                      }),
                              }),
                              (0, C.jsxs)('div', {
                                children: [
                                  (0, C.jsx)('h6', {
                                    children:
                                      null === (s = e.data) || void 0 === s
                                        ? void 0
                                        : s.heading,
                                  }),
                                  (0, C.jsx)('p', { children: Me(e) }),
                                ],
                              }),
                            ],
                          },
                          n,
                        );
                      }),
                  }),
                ],
              }),
              te &&
                (0, C.jsx)(F.n, {
                  passengers:
                    null !==
                      (D =
                        null === J || void 0 === J ? void 0 : J.slice(0, 1)) &&
                    void 0 !== D
                      ? D
                      : [],
                  airlineCode: X[0].segments[0].operatingAirlineCode,
                  redirectSubflowName: y.y.INSURANCE,
                  redirectToInsuranceFlow: Pe,
                  pnr: E,
                  hidePopup: function () {
                    oe(!1);
                  },
                  locale: q,
                  updateOnly: !1,
                  emailPopUpIndex: ue,
                  isEmailAvailable: he,
                  lastName: W,
                }),
            ],
          });
        },
        An = a(8063),
        Tn = a(58032),
        Dn = a.n(Tn),
        kn = a(75313),
        yn = a.n(kn),
        Rn = a(26974),
        Ln = function (e) {
          var n = e.hidePopup,
            a = (0, r.useContext)(x.dd);
          return (0, C.jsx)(Rn.q, {
            onClickClose: n,
            childrenWrapperWidth: 360,
            children: (0, C.jsx)(C.Fragment, {
              children: (0, C.jsxs)('div', {
                className: 'popupWrapper',
                children: [
                  (0, C.jsx)('div', {
                    className: yn().popupHeading,
                    children: a['securityalert.popup.title'],
                  }),
                  (0, C.jsx)('div', {
                    className: yn().popupContent,
                    children: a['securityalert.popup.content1'],
                  }),
                  (0, C.jsx)('div', {
                    className: yn().popupContent,
                    dangerouslySetInnerHTML: {
                      __html: a['securityalert.popup.content2'],
                    },
                  }),
                  (0, C.jsx)('button', {
                    className: v()(yn().okButton, 'okButton'),
                    onClick: n,
                    children: a['audit.account.ok'],
                  }),
                ],
              }),
            }),
          });
        },
        On = a(65608),
        Bn = a.n(On),
        Fn = function (e) {
          var n = e.hidePopup,
            a = (0, r.useContext)(x.dd);
          return (0, C.jsx)(Rn.q, {
            onClickClose: n,
            childrenWrapperWidth: 360,
            children: (0, C.jsx)(C.Fragment, {
              children: (0, C.jsxs)('div', {
                className: 'popupWrapper',
                children: [
                  (0, C.jsx)('div', {
                    className: Bn().popupHeading,
                    children: a['pdpaalert.popup.title'],
                  }),
                  (0, C.jsx)('div', {
                    className: Bn().popupContent,
                    children: a['pdpaalert.popup.content1'],
                  }),
                  (0, C.jsx)('div', {
                    className: Bn().popupContent,
                    dangerouslySetInnerHTML: {
                      __html: a['pdpaalert.popup.content2'],
                    },
                  }),
                  (0, C.jsx)('button', {
                    className: v()(Bn().okButton, 'okButton'),
                    onClick: n,
                    children: a['audit.account.ok'],
                  }),
                ],
              }),
            }),
          });
        },
        Mn = a(27809),
        Hn = a.n(Mn),
        En = function (e) {
          var n = e.hidePopup,
            a = (0, r.useContext)(x.dd);
          return (0, C.jsx)(Rn.q, {
            onClickClose: n,
            childrenWrapperWidth: 380,
            children: (0, C.jsx)(C.Fragment, {
              children: (0, C.jsxs)('div', {
                className: 'popupWrapper',
                children: [
                  (0, C.jsx)('div', {
                    className: Hn().popupHeading,
                    children: a['ccloss.popup.title'],
                  }),
                  (0, C.jsx)('div', {
                    className: Hn().popupContent,
                    children: a['ccloss.popup.contentone'],
                  }),
                  (0, C.jsx)('div', {
                    className: Hn().popupContent,
                    children: a['ccloss.popup.contenttwo'],
                  }),
                  (0, C.jsx)('div', {
                    className: Hn().popupContent,
                    dangerouslySetInnerHTML: {
                      __html: a['ccloss.popup.contentthree'],
                    },
                  }),
                  (0, C.jsx)('button', {
                    className: v()(Hn().okButton, 'okButton'),
                    onClick: n,
                    children: a['audit.account.ok'],
                  }),
                ],
              }),
            }),
          });
        },
        Wn = a(60162),
        Kn = a.n(Wn),
        Un = function (e) {
          var n = e.hidePopup,
            a = (0, r.useContext)(x.dd);
          return (0, C.jsx)(Rn.q, {
            onClickClose: n,
            childrenWrapperWidth: 360,
            children: (0, C.jsx)(C.Fragment, {
              children: (0, C.jsxs)('div', {
                className: 'popupWrapper',
                children: [
                  (0, C.jsx)('div', {
                    className: Kn().popupHeading,
                    children: a['namemismatch.popup.title'],
                  }),
                  (0, C.jsx)('div', {
                    className: Kn().popupContent,
                    children: a['namemismatch.popup.contentone'],
                  }),
                  (0, C.jsx)('div', {
                    className: Kn().popupContent,
                    dangerouslySetInnerHTML: {
                      __html: a['namemismatch.popup.contenttwo'],
                    },
                  }),
                  (0, C.jsx)('div', {
                    className: v()(Kn().image, 'usefullInfoItemFlex'),
                    onClick: function () {
                      return (
                        (e = 'kf_contact@singaporeair.com.sg'),
                        void navigator.clipboard.writeText(e)
                      );
                      var e;
                    },
                    children: (0, C.jsx)('img', {
                      src: '/assets/manage-booking/icons/icon-copy-blue.svg',
                      className: v()(Kn().returnImage, 'lightIcons'),
                    }),
                  }),
                  (0, C.jsxs)('ul', {
                    className: v()(Kn().popupContent, 'popupContent'),
                    children: [
                      (0, C.jsxs)('li', {
                        children: [
                          (0, C.jsxs)('span', {
                            children: [a['doc.info.message1'], ' '],
                          }),
                          ' ',
                        ],
                      }),
                      (0, C.jsx)('li', {
                        children: (0, C.jsx)('span', {
                          children: a['doc.info.message2'],
                        }),
                      }),
                      (0, C.jsx)('li', {
                        children: (0, C.jsx)('span', {
                          children: a['doc.info.message3'],
                        }),
                      }),
                    ],
                  }),
                  (0, C.jsx)('div', {
                    className: Kn().popupContent,
                    dangerouslySetInnerHTML: {
                      __html: a['namemismatch.popup.contentthree'],
                    },
                  }),
                  (0, C.jsx)('button', {
                    className: v()(Kn().okButton, 'okButton'),
                    onClick: n,
                    children: a['audit.account.ok'],
                  }),
                ],
              }),
            }),
          });
        };
      function Gn(e) {
        var n = e.customerProfile,
          a = (0, An.al)(
            'icon-audit-account.svg',
            '/assets/manage-booking/icons/',
          ),
          s = (0, r.useContext)(x.dd),
          i = (0, r.useState)(!1),
          t = i[0],
          o = i[1],
          l = (0, r.useState)(!1),
          d = l[0],
          c = l[1],
          p = (0, r.useState)(!1),
          u = p[0],
          g = p[1],
          m = (0, r.useState)(!1),
          h = m[0],
          _ = m[1],
          f = s['audit.account.reasonPDPA'],
          b = s['audit.account.reasonNamemismatch'],
          N = s['audit.account.reasonCCLoss'];
        return (0, C.jsx)('div', {
          className: v()(Dn().wrapper, 'auditWrapper'),
          children: (0, C.jsxs)('div', {
            className: v()(Dn().borderClass, 'auditBorderClass'),
            children: [
              (0, C.jsxs)('div', {
                className: v()(Dn().subWrapper, 'auditSubWrapper'),
                children: [
                  (0, C.jsx)('div', {
                    className: v()(Dn().imageWrapper, 'auditImageWrapper'),
                    children: (0, C.jsx)('div', {
                      className: v()(Dn().alertIcon, 'auditIcon'),
                      style: { backgroundImage: 'url('.concat(a, ')') },
                    }),
                  }),
                  (0, C.jsxs)('div', {
                    className: v()(Dn().heading, 'auditHeading'),
                    children: [
                      (0, C.jsxs)('h2', {
                        children: [
                          s['timatic.auditHeading'],
                          (0, C.jsxs)('div', {
                            className: v()(
                              Dn().actionRequired,
                              'auditActionReq',
                            ),
                            children: [' ', s['timatic.accountAudit']],
                          }),
                        ],
                      }),
                      ' ',
                      (0, C.jsx)('p', { children: s['timatic.auditmsg'] }),
                    ],
                  }),
                ],
              }),
              (0, C.jsx)('div', {
                className: v()(Dn().moreInfoButtonwidth, 'moreInfoButtonWidth'),
                children: (0, C.jsx)('a', {
                  target: '_blank',
                  rel: 'noreferrer',
                  className: v()(Dn().moreInfoButton, 'moreInfoButton'),
                  onClick: function (e) {
                    e.stopPropagation(),
                      (null === n || void 0 === n
                        ? void 0
                        : n.KfReasonForChange) === f
                        ? c(!0)
                        : (null === n || void 0 === n
                            ? void 0
                            : n.KfReasonForChange) === b
                        ? _(!0)
                        : (null === n || void 0 === n
                            ? void 0
                            : n.KfReasonForChange) === N
                        ? o(!0)
                        : g(!0);
                  },
                  children: s['timatic.moreInfo'],
                }),
              }),
              h &&
                (0, C.jsx)(Un, {
                  hidePopup: function () {
                    _(!h);
                  },
                }),
              d &&
                (0, C.jsx)(Fn, {
                  hidePopup: function () {
                    c(!d);
                  },
                }),
              u &&
                (0, C.jsx)(Ln, {
                  hidePopup: function () {
                    g(!u);
                  },
                }),
              t &&
                (0, C.jsx)(En, {
                  hidePopup: function () {
                    o(!t);
                  },
                }),
            ],
          }),
        });
      }
      var Vn = a(36090),
        qn = a.n(Vn),
        Yn = a(92424),
        Zn = a(55489);
      function Qn(e) {
        var n = e.isSecureFare,
          a = e.totalAccruableMiles,
          s = e.kfSignUpBannerContent,
          i = e.redirectToSubFlow,
          t = (0, r.useContext)(x.dd),
          l = s.nonKFPassengers,
          d = s.redemptionBooking,
          c = s.groupBooking,
          p = r.useState({ label: '', value: '' }),
          u = (0, o.Z)(p, 2),
          g = u[0],
          m = u[1];
        if (l.length > 0 && !n) {
          var h,
            _,
            f =
              a && (null === a || void 0 === a ? void 0 : a.length) > 0
                ? (function () {
                    var e =
                      null === a || void 0 === a
                        ? void 0
                        : a.find(function (e) {
                            return e.paxId === g.value;
                          });
                    return e ? parseInt(e.totalAccurableMiles) : 0;
                  })()
                : 0;
          d || c
            ? ((h = t['kfWifiBanner.heading.orb']),
              (_ = t['kfWifiBanner.text.orb']))
            : f && f > 0
            ? ((h = t['kfWifiBanner.heading.cib']),
              (_ = t['kfWifiBanner.text.cib'].replace(
                '{miles}',
                f.toLocaleString(),
              )))
            : ((h = t['kfWifiBanner.heading.cib.noMiles']),
              (_ = t['kfWifiBanner.text.cib.noMiles']));
          var b =
            '/registerKFUser.form?join_KF=' +
            g.value +
            '&CONFIRMATION=confirmReqParam&MILE_ACCRUABLE=' +
            f.toString();
          return (0, C.jsx)('div', {
            className: v()(qn().wrapper, 'wrapper'),
            children: (0, C.jsxs)('div', {
              className: v()(qn().contentWrapper, 'contentWrapper'),
              children: [
                (0, C.jsxs)('div', {
                  className: v()(
                    qn().signupBannerContent,
                    'signupBannerContent',
                  ),
                  children: [
                    (0, C.jsx)('div', {
                      className: v()(
                        qn().signupBannerHeading,
                        'signupBannerHeading',
                      ),
                      children: h,
                    }),
                    (0, C.jsx)('div', {
                      className: v()(qn().signupBannerText, 'signupBannerText'),
                      children: _,
                    }),
                  ],
                }),
                (0, C.jsxs)('div', {
                  className: v()(qn().inlineForm, 'inlineForm'),
                  children: [
                    (0, C.jsx)(zn, {
                      nonKFPassengers: s.nonKFPassengers,
                      setSelectedPassenger: m,
                    }),
                    (0, C.jsx)('a', {
                      onClick: function (e) {
                        return i(y.y.KF_SIGNUP, e, void 0, void 0, void 0, b);
                      },
                      className: v()(qn().signupButton, 'signupButton'),
                      target: '_blank',
                      rel: 'noreferrer',
                      children: t['kfSignupBanner.button.label'],
                    }),
                  ],
                }),
                (0, C.jsx)('div', {
                  className: v()(qn().dummyHeight, 'dummyHeight'),
                }),
              ],
            }),
          });
        }
        return null;
      }
      function zn(e) {
        var n = e.nonKFPassengers,
          a = e.setSelectedPassenger,
          s = [],
          i = 'Passenger';
        n.forEach(function (e) {
          return s.push({ label: e.passengerName, value: e.passengerId });
        }),
          (0, r.useEffect)(function () {
            a(s[0]);
          }, []);
        var t = 'grey';
        return 1 == s.length
          ? (0, C.jsx)(Zn.W, {
              classes: { wrapper: qn().inputbox },
              label: i,
              inputValue: s[0].label,
              others: { readOnly: !0 },
              background: t,
            })
          : (0, C.jsx)(Yn.L, {
              label: i,
              classes: {
                mainOuterWrapper: qn().dropdown,
                innerWrapper: qn().inputbox,
              },
              options: s,
              background: t,
              maxLength: 30,
              menuTrucationRequired: !0,
              defaultSelectedOption: s[0],
              defaultPlaceHolderRequired: !1,
              setSelectedOption: a,
            });
      }
      var Jn = a(49043),
        Xn = a.n(Jn);
      function $n(e) {
        var n,
          a,
          s = e.kfInformationBannerData,
          i = null === s || void 0 === s ? void 0 : s.showBanner,
          t = null === s || void 0 === s ? void 0 : s.informationType,
          o = (0, r.useContext)(x.dd),
          l = (0, r.useContext)(x.ko),
          d = l.locale,
          c = l.country,
          p = '/'
            .concat(d, '/')
            .concat(
              c.toLowerCase(),
              '/flying-withus/entertainment/inflight-connectivity/',
            );
        return i
          ? (t === we.V_.PPS_AND_KRISFLYER_MEMBER
              ? ((n = o['kfWifiBanner.heading.mbKrisflyer.and.pps']),
                (a = o['kfWifiBanner.text.mbKrisFlyer.and.pps']))
              : t === we.V_.KRISFLYER_MEMBER &&
                ((n = o['kfWifiBanner.heading.mbKrisFlyer']),
                (a = o['kfWifiBanner.text.mbKrisflyer'])),
            (0, C.jsx)('div', {
              className: v()(Xn().wrapper, 'wrapper'),
              children: (0, C.jsxs)('div', {
                className: v()(Xn().kfInfoBannerContent, 'kfInfoBannerContent'),
                children: [
                  (0, C.jsx)('div', {
                    className: v()(
                      Xn().kfInfoBannerHeading,
                      'kfInfoBannerHeading',
                    ),
                    children: n,
                  }),
                  (0, C.jsx)('div', {
                    className: v()(Xn().kfInfoBannerText, 'kfInfoBannerText'),
                    children: a,
                  }),
                  (0, C.jsx)('a', {
                    className: v()(
                      Xn().kfInfoBannerButton,
                      'kfInfoBannerButton',
                    ),
                    onClick: function () {
                      return (window.location.href = p);
                    },
                    href: p,
                    children: o['kfInformationBanner.button.label'],
                  }),
                ],
              }),
            }))
          : null;
      }
      var ea,
        na = a(99027),
        aa = a.n(na),
        sa = a(1056),
        ia = a(41664),
        ra = a.n(ia),
        ta = a(45948);
      function oa(e) {
        var n,
          a,
          s,
          i,
          t = e.isDisruptedOnly,
          o = e.flightDisruptionData,
          l = e.handleClickRefuse,
          d = e.showContinuePopup,
          c = e.showAcceptRefusePopup,
          p = e.showCloseIconPopup,
          u = e.showPossibleDisruptionHeader,
          g = e.oldFlight,
          m = e.newFlight,
          h = e.handleAcceptClick,
          _ = e.pnr,
          f = e.lastName,
          b = e.legsArr,
          N = e.flightDataArr,
          j = e.countryNamesArr,
          I = e.unLegsArr,
          w = r.useContext(x.dd),
          P = r.useContext(x.ko),
          S =
            null !==
              (n =
                o &&
                o.SSRAPolicyResponse &&
                '912' ===
                  (null === (a = o.SSRAPolicyResponse.response) || void 0 === a
                    ? void 0
                    : a.errorCode)) &&
            void 0 !== n &&
            n,
          A = function (e) {
            var n, a, s, i, r, t;
            return (0, C.jsx)(C.Fragment, {
              children: (0, C.jsxs)('div', {
                className: v()(aa().scOriginalFlightDiv, 'scOriginalFlightDiv'),
                children: [
                  (0, C.jsxs)('div', {
                    className: v()(
                      aa().scDisplayFlightsDiv,
                      'scDisplayFlightsDiv',
                    ),
                    children: [
                      (0, C.jsxs)('span', {
                        className: v()(
                          aa().scOriginCodeSpacing,
                          'scOriginCodeSpacing',
                        ),
                        children: [
                          null === (n = e.oldFlightData) || void 0 === n
                            ? void 0
                            : n.originCode,
                          ' ',
                        ],
                      }),
                      (0, C.jsx)('span', {
                        className: v()(aa().scDash, 'scDash'),
                        children: ' - ',
                      }),
                      (0, C.jsx)('span', {
                        className: v()(
                          aa().scDestCodeSpacing,
                          'scDestCodeSpacing',
                        ),
                        children:
                          null === (a = e.oldFlightData) || void 0 === a
                            ? void 0
                            : a.destinationCode,
                      }),
                      (0, C.jsxs)('span', {
                        className: v()(aa().scFlightSpacing, 'scFlightSpacing'),
                        children: [
                          w['scheduleChange.popup.originalFlight'],
                          ' ',
                          null === (s = e.oldFlightData) || void 0 === s
                            ? void 0
                            : s.flight,
                        ],
                      }),
                    ],
                  }),
                  (0, C.jsx)('div', {
                    className: v()(aa().dateDiv, 'dateDiv'),
                    children:
                      null === (i = e.oldFlightData) || void 0 === i
                        ? void 0
                        : i.date,
                  }),
                  (0, C.jsx)('div', {
                    className: v()(aa().depatureDiv, 'depatureDiv'),
                    children:
                      null === (r = e.oldFlightData) || void 0 === r
                        ? void 0
                        : r.departureTime,
                  }),
                  (0, C.jsx)('div', {
                    children:
                      null === (t = e.oldFlightData) || void 0 === t
                        ? void 0
                        : t.arrivalTime,
                  }),
                ],
              }),
            });
          },
          T = function (e) {
            var n, a, s, i, r, t;
            return (0, C.jsxs)(C.Fragment, {
              children: [
                ' ',
                (0, C.jsxs)('div', {
                  className: v()(aa().scNewFlightDiv, 'scNewFlightDiv'),
                  children: [
                    (0, C.jsxs)('div', {
                      className: v()(
                        aa().scDisplayFlightsDiv,
                        'scDisplayFlightsDiv',
                      ),
                      children: [
                        (0, C.jsx)('span', {
                          className: v()(
                            aa().scOriginCodeSpacing,
                            'scOriginCodeSpacing',
                          ),
                          children:
                            null === (n = e.newFlightData) || void 0 === n
                              ? void 0
                              : n.originCode,
                        }),
                        ' ',
                        (0, C.jsx)('span', {
                          className: v()(aa().scDash, 'scDash'),
                          children: ' - ',
                        }),
                        (0, C.jsxs)('span', {
                          className: v()(
                            aa().scDestCodeSpacing,
                            'scDestCodeSpacing',
                          ),
                          children: [
                            ' ',
                            null === (a = e.newFlightData) || void 0 === a
                              ? void 0
                              : a.destinationCode,
                          ],
                        }),
                        (0, C.jsxs)('span', {
                          className: v()(
                            aa().scFlightSpacing,
                            'scFlightSpacing',
                          ),
                          children: [
                            w['scheduleChange.popup.newFlight'],
                            ' ',
                            null === (s = e.newFlightData) || void 0 === s
                              ? void 0
                              : s.flight,
                          ],
                        }),
                      ],
                    }),
                    (0, C.jsx)('div', {
                      className: v()(aa().dateDiv, 'dateDiv'),
                      children:
                        null === (i = e.newFlightData) || void 0 === i
                          ? void 0
                          : i.date,
                    }),
                    (0, C.jsx)('div', {
                      className: v()(aa().depatureDiv, 'depatureDiv'),
                      children:
                        null === (r = e.newFlightData) || void 0 === r
                          ? void 0
                          : r.departureTime,
                    }),
                    (0, C.jsx)('div', {
                      children:
                        null === (t = e.newFlightData) || void 0 === t
                          ? void 0
                          : t.arrivalTime,
                    }),
                  ],
                }),
              ],
            });
          };
        var D = function (e) {
          return e.isDateChange
            ? (0, C.jsxs)('a', {
                onClick: function () {
                  !(function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 'post';
                    P.setPageLoading(!0);
                    var n = document.createElement('form');
                    n.method = e;
                    var a = window.location.origin
                      ? window.location.origin
                      : '';
                    n.action = ''.concat(a, '/change-booking');
                    var s = document.createElement('input');
                    (s.type = 'hidden'),
                      (s.name = 'data'),
                      (s.value = JSON.stringify({ pnr: _, lastName: f })),
                      n.appendChild(s),
                      document.body.appendChild(n),
                      n.submit();
                  })();
                },
                children: [' ', e.children],
              })
            : (0, C.jsx)(ra(), { href: e.url, children: e.children });
        };
        return (0, C.jsx)(Rn.q, {
          onClickClose: l,
          childrenWrapperWidth: 620,
          hideCloselIcon: !(
            'UN' !=
              (null === o ||
              void 0 === o ||
              null === (s = o.policyDetails) ||
              void 0 === s ||
              null === (i = s.flightDetails) ||
              void 0 === i
                ? void 0
                : i.segmentStatus) &&
            (!(function (e, n, a) {
              if (
                (e && e.length > 1) ||
                (n && n.length > 0) ||
                (a &&
                  a.length > 0 &&
                  null !== o &&
                  void 0 !== o &&
                  o.isDisrupted)
              )
                return !0;
            })(b, j, I) ||
              p)
          ),
          classes: { modalWrapper: aa().scfdChildrenWrapper },
          children: (0, C.jsx)('div', {
            className: v()(
              aa().flightDisruptionWrapper,
              'flightDisruptionWrapper',
            ),
            children: (function () {
              var e, n, a, s, i, r, p, _, f, x, P, k, y, R, L, O, B, F;
              return (0, C.jsxs)('div', {
                children: [
                  b || j || N
                    ? (0, C.jsx)('p', {
                        className: v()(
                          aa().flightDisruptionHeading,
                          'flightDisruptionHeading',
                        ),
                        children: j
                          ? ''.concat(
                              j && u
                                ? w[
                                    'scheduleChange.popup.flightDisruption.isDisruptedOnly.multiTK.title'
                                  ]
                                : w[
                                    'scheduleChange.popup.flightDisruption.cancellation.multiTK.title'
                                  ],
                            )
                          : t
                          ? 'UN' ==
                            (null === (a = o.policyDetails) ||
                            void 0 === a ||
                            null === (s = a.flightDetails) ||
                            void 0 === s
                              ? void 0
                              : s.segmentStatus)
                            ? ''.concat(
                                w[
                                  'scheduleChange.popup.flightDisruption.cancellation.multiTK.title'
                                ],
                              )
                            : ''.concat(
                                w[
                                  'scheduleChange.popup.flightDisruption.isDisruptedOnly.multiTK.title'
                                ],
                              )
                          : ''.concat(
                              w[
                                'scheduleChange.popup.flightDisruption.multiTK.title'
                              ],
                            ),
                      })
                    : (0, C.jsx)('p', {
                        className: v()(
                          aa().flightDisruptionHeading,
                          'flightDisruptionHeading',
                        ),
                        children: t
                          ? 'UN' ==
                            (null === (e = o.policyDetails) ||
                            void 0 === e ||
                            null === (n = e.flightDetails) ||
                            void 0 === n
                              ? void 0
                              : n.segmentStatus)
                            ? ''
                                .concat(
                                  w[
                                    'scheduleChange.popup.flightDisruption.cancellation.title'
                                  ],
                                  ' ',
                                )
                                .concat(
                                  null === m || void 0 === m
                                    ? void 0
                                    : m.flight,
                                )
                            : ''.concat(
                                w[
                                  'scheduleChange.popup.flightDisruption.isDisruptedOnly.title'
                                ],
                              )
                          : ''
                              .concat(
                                w[
                                  'scheduleChange.popup.flightDisruption.title'
                                ],
                                ' ',
                              )
                              .concat(
                                null === m || void 0 === m ? void 0 : m.flight,
                              ),
                      }),
                  (0, C.jsxs)('div', {
                    className: v()(aa().fdMessageBox, 'fdMessageBox'),
                    children: [
                      b || j || N
                        ? (0, C.jsx)('p', {
                            className: v()(aa().scMessage, 'scMessage'),
                            children: j
                              ? j && u
                                ? w[
                                    'scheduleChange.popup.flightDisruption.subMessage.multiTK.isDisruptedOnly'
                                  ]
                                : w[
                                    'scheduleChange.popup.flightDisruption.subMessage.multiTK.cancellation'
                                  ]
                              : t
                              ? 'UN' ==
                                (null === (p = o.policyDetails) ||
                                void 0 === p ||
                                null === (_ = p.flightDetails) ||
                                void 0 === _
                                  ? void 0
                                  : _.segmentStatus)
                                ? w[
                                    'scheduleChange.popup.flightDisruption.subMessage.multiTK.cancellation'
                                  ]
                                : w[
                                    'scheduleChange.popup.flightDisruption.subMessage.multiTK.isDisruptedOnly'
                                  ]
                              : w[
                                  'scheduleChange.popup.flightDisruption.multiTK.subMessage'
                                ],
                          })
                        : (0, C.jsx)('p', {
                            className: v()(aa().scMessage, 'scMessage'),
                            children: t
                              ? 'UN' ==
                                (null === (i = o.policyDetails) ||
                                void 0 === i ||
                                null === (r = i.flightDetails) ||
                                void 0 === r
                                  ? void 0
                                  : r.segmentStatus)
                                ? w[
                                    'scheduleChange.popup.flightDisruption.subMessage.cancellation'
                                  ]
                                : w[
                                    'scheduleChange.popup.flightDisruption.subMessage.isDisruptedOnly'
                                  ]
                              : w[
                                  'scheduleChange.popup.flightDisruption.subMessage'
                                ],
                          }),
                      !b && j
                        ? (0, C.jsxs)('div', {
                            children: [
                              ((F = j),
                              (0, C.jsx)('div', {
                                children:
                                  F &&
                                  F.length > 0 &&
                                  F.map(function (e, n) {
                                    return (0,
                                    C.jsx)(C.Fragment, { children: (0, C.jsx)('div', { className: v()(aa().scDepToDestinationMultiTk, 'scDepToDestinationMultiTk'), children: n + 1 + '.  ' + w['scheduleChange.popup.flightDisruption.subTitle'].replace('{0}', null === e || void 0 === e ? void 0 : e.origin).replace('{1}', null === e || void 0 === e ? void 0 : e.destination) }, n) });
                                  }),
                              })),
                              (0, C.jsx)('p', {
                                className: v()(aa().scMessage, 'scMessage'),
                                children:
                                  t &&
                                  'UN' ==
                                    (null === (f = o.policyDetails) ||
                                    void 0 === f ||
                                    null === (x = f.flightDetails) ||
                                    void 0 === x
                                      ? void 0
                                      : x.segmentStatus) &&
                                  w[
                                    'scheduleChange.popup.flightDisruption.multiTK.manageFlight'
                                  ],
                              }),
                            ],
                          })
                        : '',
                    ],
                  }),
                  (t || (d && o.isDisrupted)) && false,
                  !t && c && false,
                  !t &&
                    (0, C.jsx)('p', {
                      className: v()(
                        aa().scDepToDestination,
                        'scDepToDestination',
                      ),
                      children:
                        m &&
                        w['scheduleChange.popup.flightDisruption.subTitle']
                          .replace(
                            '{0}',
                            null === m || void 0 === m ? void 0 : m.origin,
                          )
                          .replace(
                            '{1}',
                            null === m || void 0 === m ? void 0 : m.destination,
                          ),
                    }),
                  j || b || (!m && !g)
                    ? N
                      ? !t &&
                        (0, C.jsxs)('div', {
                          className: v()(
                            aa().scMainContentDiv,
                            'scMainContentDiv',
                          ),
                          children: [
                            (0, C.jsxs)('div', {
                              className: v()(
                                aa().scContent,
                                aa().showOnOnlyDesktop,
                                'scContent',
                              ),
                              children: [
                                (0, C.jsxs)('div', {
                                  className: v()(
                                    aa().scFlightTableHeadingRow,
                                    'scFlightTableHeadingRow',
                                  ),
                                  children: [
                                    (0, C.jsx)('div', {
                                      className: v()(
                                        aa().scDisplayFlightsDiv,
                                        'scDisplayFlightsDiv',
                                      ),
                                      children:
                                        w['scheduleChange.popup.flight'],
                                    }),
                                    (0, C.jsx)('div', {
                                      className: v()(aa().dateDiv, 'dateDiv'),
                                      children: w['scheduleChange.popup.date'],
                                    }),
                                    (0, C.jsx)('div', {
                                      className: v()(
                                        aa().depatureDiv,
                                        'depatureDiv',
                                      ),
                                      children:
                                        w['scheduleChange.popup.departure'],
                                    }),
                                    (0, C.jsx)('div', {
                                      children:
                                        w['scheduleChange.popup.arrival'],
                                    }),
                                  ],
                                }),
                                N &&
                                  N.map(function (e, n) {
                                    return (0, C.jsxs)(
                                      'div',
                                      {
                                        className: v()(
                                          aa().scContentDiv,
                                          'scContentDiv',
                                        ),
                                        children: [
                                          (0, C.jsx)('div', {
                                            className: v()(
                                              aa().scDepToDestinationMultiTk,
                                              'scDepToDestinationMultiTk',
                                            ),
                                            children:
                                              n + 1 + '. ' + Object.keys(e)[0],
                                          }),
                                          e[Object.keys(e)[0]] &&
                                            e[Object.keys(e)[0]].map(function (
                                              e,
                                            ) {
                                              var n, a;
                                              return e.oldFlightData &&
                                                e.newFlightData &&
                                                (null ===
                                                  (n = e.oldFlightData) ||
                                                void 0 === n
                                                  ? void 0
                                                  : n.origin) ===
                                                  (null ===
                                                    (a = e.newFlightData) ||
                                                  void 0 === a
                                                    ? void 0
                                                    : a.origin)
                                                ? (0, C.jsxs)(C.Fragment, {
                                                    children: [A(e), T(e)],
                                                  })
                                                : e &&
                                                  e.newFlightData &&
                                                  !e.oldFlightData
                                                ? (0, C.jsx)(C.Fragment, {
                                                    children: T(e),
                                                  })
                                                : null;
                                            }),
                                        ],
                                      },
                                      n,
                                    );
                                  }),
                              ],
                            }),
                            (0, C.jsx)('div', {
                              className: v()(
                                aa().scContentMobile,
                                'scContentMobile',
                              ),
                              children:
                                N &&
                                N.map(function (e, n) {
                                  return (0, C.jsxs)(
                                    'div',
                                    {
                                      className: v()(
                                        aa().mobScContetnWrapper,
                                        'mobScContetnWrapper',
                                      ),
                                      children: [
                                        (0, C.jsx)('div', {
                                          className: v()(
                                            aa().scDepToDestinationMultiTk,
                                            'scDepToDestinationMultiTk',
                                          ),
                                          children:
                                            n + 1 + '. ' + Object.keys(e)[0],
                                        }),
                                        e[Object.keys(e)[0]] &&
                                          e[Object.keys(e)[0]].map(function (
                                            e,
                                          ) {
                                            var n, a, s, i, r, t, o, l;
                                            return e.oldFlightData &&
                                              e.newFlightData &&
                                              e.oldFlightData.origin ===
                                                e.newFlightData.origin
                                              ? (0, C.jsxs)(C.Fragment, {
                                                  children: [
                                                    (0, C.jsxs)('div', {
                                                      className: v()(
                                                        aa()
                                                          .mobScOriginalFlightWrapper,
                                                        'mobScOriginalFlightWrapper',
                                                      ),
                                                      children: [
                                                        (0, C.jsxs)('div', {
                                                          children: [
                                                            w[
                                                              'scheduleChange.popup.originalFlight'
                                                            ],
                                                            ' ',
                                                            null ===
                                                              (n =
                                                                e.oldFlightData) ||
                                                            void 0 === n
                                                              ? void 0
                                                              : n.flight,
                                                          ],
                                                        }),
                                                        (0, C.jsxs)('div', {
                                                          className: v()(
                                                            aa()
                                                              .mobFlightScItemWrapper,
                                                            'mobFlightScItemWrapper',
                                                          ),
                                                          children: [
                                                            (0, C.jsx)('div', {
                                                              className: v()(
                                                                aa()
                                                                  .mobScItemHeading,
                                                                'mobScItemHeading',
                                                              ),
                                                              children:
                                                                w[
                                                                  'scheduleChange.popup.date'
                                                                ],
                                                            }),
                                                            (0, C.jsx)('div', {
                                                              className: v()(
                                                                aa()
                                                                  .mobScItemValue,
                                                                'mobScItemValue',
                                                              ),
                                                              children:
                                                                null ===
                                                                  (a =
                                                                    e.oldFlightData) ||
                                                                void 0 === a
                                                                  ? void 0
                                                                  : a.date,
                                                            }),
                                                          ],
                                                        }),
                                                        (0, C.jsxs)('div', {
                                                          className: v()(
                                                            aa()
                                                              .mobFlightScItemWrapper,
                                                            'mobFlightScItemWrapper',
                                                          ),
                                                          children: [
                                                            (0, C.jsx)('div', {
                                                              className: v()(
                                                                aa()
                                                                  .mobScItemHeading,
                                                                'mobScItemHeading',
                                                              ),
                                                              children:
                                                                w[
                                                                  'scheduleChange.popup.departure'
                                                                ],
                                                            }),
                                                            (0, C.jsx)('div', {
                                                              className: v()(
                                                                aa()
                                                                  .mobScItemValue,
                                                                'mobScItemValue',
                                                              ),
                                                              children:
                                                                null ===
                                                                  (s =
                                                                    e.oldFlightData) ||
                                                                void 0 === s
                                                                  ? void 0
                                                                  : s.departureTime,
                                                            }),
                                                          ],
                                                        }),
                                                        (0, C.jsxs)('div', {
                                                          className: v()(
                                                            aa()
                                                              .mobFlightScItemWrapper,
                                                            'mobFlightScItemWrapper',
                                                          ),
                                                          children: [
                                                            (0, C.jsx)('div', {
                                                              className: v()(
                                                                aa()
                                                                  .mobScItemHeading,
                                                                'mobScItemHeading',
                                                              ),
                                                              children:
                                                                w[
                                                                  'scheduleChange.popup.arrival'
                                                                ],
                                                            }),
                                                            (0, C.jsx)('div', {
                                                              className: v()(
                                                                aa()
                                                                  .mobScItemValue,
                                                                'mobScItemValue',
                                                              ),
                                                              children:
                                                                null ===
                                                                  (i =
                                                                    e.oldFlightData) ||
                                                                void 0 === i
                                                                  ? void 0
                                                                  : i.arrivalTime,
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    (0, C.jsxs)('div', {
                                                      className: v()(
                                                        aa()
                                                          .mobNewFlightWrapper,
                                                        'mobNewFlightWrapper',
                                                      ),
                                                      children: [
                                                        (0, C.jsxs)('div', {
                                                          className: v()(
                                                            aa().mobscNewFlight,
                                                            'mobscNewFlight',
                                                          ),
                                                          children: [
                                                            w[
                                                              'scheduleChange.popup.newFlight'
                                                            ],
                                                            ' ',
                                                            null ===
                                                              (r =
                                                                e.newFlightData) ||
                                                            void 0 === r
                                                              ? void 0
                                                              : r.flight,
                                                          ],
                                                        }),
                                                        (0, C.jsxs)('div', {
                                                          className: v()(
                                                            aa()
                                                              .mobFlightScItemWrapper,
                                                            'mobFlightScItemWrapper',
                                                          ),
                                                          children: [
                                                            (0, C.jsx)('div', {
                                                              className: v()(
                                                                aa()
                                                                  .mobScItemHeading,
                                                                'mobScItemHeading',
                                                              ),
                                                              children:
                                                                w[
                                                                  'scheduleChange.popup.date'
                                                                ],
                                                            }),
                                                            (0, C.jsx)('div', {
                                                              className: v()(
                                                                aa()
                                                                  .mobScItemValueNewFlight,
                                                                'mobScItemValueNewFlight',
                                                              ),
                                                              children:
                                                                null ===
                                                                  (t =
                                                                    e.newFlightData) ||
                                                                void 0 === t
                                                                  ? void 0
                                                                  : t.date,
                                                            }),
                                                          ],
                                                        }),
                                                        (0, C.jsxs)('div', {
                                                          className: v()(
                                                            aa()
                                                              .mobFlightScItemWrapper,
                                                            'mobFlightScItemWrapper',
                                                          ),
                                                          children: [
                                                            (0, C.jsx)('div', {
                                                              className: v()(
                                                                aa()
                                                                  .mobScItemHeading,
                                                                'mobScItemHeading',
                                                              ),
                                                              children:
                                                                w[
                                                                  'scheduleChange.popup.departure'
                                                                ],
                                                            }),
                                                            (0, C.jsx)('div', {
                                                              className: v()(
                                                                aa()
                                                                  .mobScItemValueNewFlight,
                                                                'mobScItemValueNewFlight',
                                                              ),
                                                              children:
                                                                null ===
                                                                  (o =
                                                                    e.newFlightData) ||
                                                                void 0 === o
                                                                  ? void 0
                                                                  : o.departureTime,
                                                            }),
                                                          ],
                                                        }),
                                                        (0, C.jsxs)('div', {
                                                          className: v()(
                                                            aa()
                                                              .mobFlightScItemWrapper,
                                                            'mobFlightScItemWrapper',
                                                          ),
                                                          children: [
                                                            (0, C.jsx)('div', {
                                                              className: v()(
                                                                aa()
                                                                  .mobScItemHeading,
                                                                'mobScItemHeading',
                                                              ),
                                                              children:
                                                                w[
                                                                  'scheduleChange.popup.arrival'
                                                                ],
                                                            }),
                                                            (0, C.jsx)('div', {
                                                              className: v()(
                                                                aa()
                                                                  .mobScItemValueNewFlight,
                                                                'mobScItemValueNewFlight',
                                                              ),
                                                              children:
                                                                null ===
                                                                  (l =
                                                                    e.newFlightData) ||
                                                                void 0 === l
                                                                  ? void 0
                                                                  : l.arrivalTime,
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                })
                                              : null;
                                          }),
                                      ],
                                    },
                                    n,
                                  );
                                }),
                            }),
                          ],
                        })
                      : ''
                    : !t &&
                      (0, C.jsxs)('div', {
                        children: [
                          (0, C.jsxs)('div', {
                            className: v()(
                              aa().scContent,
                              aa().showOnOnlyDesktop,
                              'scContent',
                            ),
                            children: [
                              (0, C.jsxs)('div', {
                                className: v()(
                                  aa().scFlightTableHeadingRow,
                                  'scFlightTableHeadingRow',
                                ),
                                children: [
                                  (0, C.jsx)('div', {
                                    className: v()(
                                      aa().flightsDiv,
                                      'flightsDiv',
                                    ),
                                    children: w['scheduleChange.popup.flight'],
                                  }),
                                  (0, C.jsx)('div', {
                                    className: v()(aa().dateDiv, 'dateDiv'),
                                    children: w['scheduleChange.popup.date'],
                                  }),
                                  (0, C.jsx)('div', {
                                    className: v()(
                                      aa().depatureDiv,
                                      'depatureDiv',
                                    ),
                                    children:
                                      w['scheduleChange.popup.departure'],
                                  }),
                                  (0, C.jsx)('div', {
                                    children: w['scheduleChange.popup.arrival'],
                                  }),
                                ],
                              }),
                              g &&
                                (0, C.jsxs)('div', {
                                  className: v()(
                                    aa().scOriginalFlightDiv,
                                    'scOriginalFlightDiv',
                                  ),
                                  children: [
                                    (0, C.jsxs)('div', {
                                      className: v()(
                                        aa().flightsDiv,
                                        'flightsDiv',
                                      ),
                                      children: [
                                        w[
                                          'scheduleChange.popup.originalFlight'
                                        ],
                                        ' ',
                                        null === g || void 0 === g
                                          ? void 0
                                          : g.flight,
                                      ],
                                    }),
                                    (0, C.jsx)('div', {
                                      className: v()(aa().dateDiv, 'dateDiv'),
                                      children:
                                        null === g || void 0 === g
                                          ? void 0
                                          : g.date,
                                    }),
                                    (0, C.jsx)('div', {
                                      className: v()(
                                        aa().depatureDiv,
                                        'depatureDiv',
                                      ),
                                      children:
                                        null === g || void 0 === g
                                          ? void 0
                                          : g.departureTime,
                                    }),
                                    (0, C.jsx)('div', {
                                      children:
                                        null === g || void 0 === g
                                          ? void 0
                                          : g.arrivalTime,
                                    }),
                                  ],
                                }),
                              m &&
                                (0, C.jsxs)('div', {
                                  className: v()(
                                    aa().scNewFlightDiv,
                                    'scNewFlightDiv',
                                  ),
                                  children: [
                                    (0, C.jsxs)('div', {
                                      className: v()(
                                        aa().flightsDiv,
                                        'flightsDiv',
                                      ),
                                      children: [
                                        w['scheduleChange.popup.newFlight'],
                                        ' ',
                                        null === m || void 0 === m
                                          ? void 0
                                          : m.flight,
                                      ],
                                    }),
                                    (0, C.jsx)('div', {
                                      className: v()(aa().dateDiv, 'dateDiv'),
                                      children:
                                        null === m || void 0 === m
                                          ? void 0
                                          : m.date,
                                    }),
                                    (0, C.jsx)('div', {
                                      className: v()(
                                        aa().depatureDiv,
                                        'depatureDiv',
                                      ),
                                      children:
                                        null === m || void 0 === m
                                          ? void 0
                                          : m.departureTime,
                                    }),
                                    (0, C.jsx)('div', {
                                      children:
                                        null === m || void 0 === m
                                          ? void 0
                                          : m.arrivalTime,
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          (0, C.jsx)('div', {
                            className: v()(
                              aa().scContentMobile,
                              'scContentMobile',
                            ),
                            children: (0, C.jsxs)('div', {
                              className: v()(
                                aa().mobScContetnWrapper,
                                'mobScContetnWrapper',
                              ),
                              children: [
                                g &&
                                  (0, C.jsxs)('div', {
                                    className: v()(
                                      aa().mobScOriginalFlightWrapper,
                                      'mobScOriginalFlightWrapper',
                                    ),
                                    children: [
                                      (0, C.jsxs)('div', {
                                        children: [
                                          w[
                                            'scheduleChange.popup.originalFlight'
                                          ],
                                          ' ',
                                          null === g || void 0 === g
                                            ? void 0
                                            : g.flight,
                                        ],
                                      }),
                                      (0, C.jsxs)('div', {
                                        className: v()(
                                          aa().mobFlightScItemWrapper,
                                          'mobFlightScItemWrapper',
                                        ),
                                        children: [
                                          (0, C.jsx)('div', {
                                            className: v()(
                                              aa().mobScItemHeading,
                                              'mobScItemHeading',
                                            ),
                                            children:
                                              w['scheduleChange.popup.date'],
                                          }),
                                          (0, C.jsx)('div', {
                                            className: v()(
                                              aa().mobScItemValue,
                                              'mobScItemValue',
                                            ),
                                            children:
                                              null === g || void 0 === g
                                                ? void 0
                                                : g.date,
                                          }),
                                        ],
                                      }),
                                      (0, C.jsxs)('div', {
                                        className: v()(
                                          aa().mobFlightScItemWrapper,
                                          'mobFlightScItemWrapper',
                                        ),
                                        children: [
                                          (0, C.jsx)('div', {
                                            className: v()(
                                              aa().mobScItemHeading,
                                              'mobScItemHeading',
                                            ),
                                            children:
                                              w[
                                                'scheduleChange.popup.departure'
                                              ],
                                          }),
                                          (0, C.jsx)('div', {
                                            className: v()(
                                              aa().mobScItemValue,
                                              'mobScItemValue',
                                            ),
                                            children:
                                              null === g || void 0 === g
                                                ? void 0
                                                : g.departureTime,
                                          }),
                                        ],
                                      }),
                                      (0, C.jsxs)('div', {
                                        className: v()(
                                          aa().mobFlightScItemWrapper,
                                          'mobFlightScItemWrapper',
                                        ),
                                        children: [
                                          (0, C.jsx)('div', {
                                            className: v()(
                                              aa().mobScItemHeading,
                                              'mobScItemHeading',
                                            ),
                                            children:
                                              w['scheduleChange.popup.arrival'],
                                          }),
                                          (0, C.jsx)('div', {
                                            className: v()(
                                              aa().mobScItemValue,
                                              'mobScItemValue',
                                            ),
                                            children:
                                              null === g || void 0 === g
                                                ? void 0
                                                : g.arrivalTime,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                (0, C.jsxs)('div', {
                                  className: v()(
                                    aa().mobNewFlightWrapper,
                                    'mobNewFlightWrapper',
                                  ),
                                  children: [
                                    (0, C.jsxs)('div', {
                                      className: v()(
                                        aa().mobscNewFlight,
                                        'mobscNewFlight',
                                      ),
                                      children: [
                                        w['scheduleChange.popup.newFlight'],
                                        ' ',
                                        null === m || void 0 === m
                                          ? void 0
                                          : m.flight,
                                      ],
                                    }),
                                    (0, C.jsxs)('div', {
                                      className: v()(
                                        aa().mobFlightScItemWrapper,
                                        'mobFlightScItemWrapper',
                                      ),
                                      children: [
                                        (0, C.jsx)('div', {
                                          className: v()(
                                            aa().mobScItemHeading,
                                            'mobScItemHeading',
                                          ),
                                          children:
                                            w['scheduleChange.popup.date'],
                                        }),
                                        (0, C.jsx)('div', {
                                          className: v()(
                                            aa().mobScItemValueNewFlight,
                                            'mobScItemValueNewFlight',
                                          ),
                                          children:
                                            null === m || void 0 === m
                                              ? void 0
                                              : m.date,
                                        }),
                                      ],
                                    }),
                                    (0, C.jsxs)('div', {
                                      className: v()(
                                        aa().mobFlightScItemWrapper,
                                        'mobFlightScItemWrapper',
                                      ),
                                      children: [
                                        (0, C.jsx)('div', {
                                          className: v()(
                                            aa().mobScItemHeading,
                                            'mobScItemHeading',
                                          ),
                                          children:
                                            w['scheduleChange.popup.departure'],
                                        }),
                                        (0, C.jsx)('div', {
                                          className: v()(
                                            aa().mobScItemValueNewFlight,
                                            'mobScItemValueNewFlight',
                                          ),
                                          children:
                                            null === m || void 0 === m
                                              ? void 0
                                              : m.departureTime,
                                        }),
                                      ],
                                    }),
                                    (0, C.jsxs)('div', {
                                      className: v()(
                                        aa().mobFlightScItemWrapper,
                                        'mobFlightScItemWrapper',
                                      ),
                                      children: [
                                        (0, C.jsx)('div', {
                                          className: v()(
                                            aa().mobScItemHeading,
                                            'mobScItemHeading',
                                          ),
                                          children:
                                            w['scheduleChange.popup.arrival'],
                                        }),
                                        (0, C.jsx)('div', {
                                          className: v()(
                                            aa().mobScItemValueNewFlight,
                                            'mobScItemValueNewFlight',
                                          ),
                                          children:
                                            null === m || void 0 === m
                                              ? void 0
                                              : m.arrivalTime,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                  !t &&
                    d &&
                    (0, C.jsx)('p', {
                      className: v()(aa().scMessage, 'scMessage'),
                      children: (0, C.jsx)('span', {
                        dangerouslySetInnerHTML: m && {
                          __html:
                            w[
                              'scheduleChange.popup.flightDisruption.subMessage1'
                            ],
                        },
                      }),
                    }),
                  !t &&
                    (0, C.jsxs)('div', {
                      children: [
                        c &&
                          (0, C.jsxs)('div', {
                            className: v()(
                              aa().scButtonDiv,
                              aa().fdButtonDiv,
                              'scButtonDiv',
                            ),
                            children: [
                              (0, C.jsx)('div', {
                                className: v()(aa().fdMessage, 'fdMessage'),
                                children:
                                  (!b && !j) ||
                                  (b &&
                                    1 == b.length &&
                                    I &&
                                    1 == I.length &&
                                    !j)
                                    ? w[
                                        'scheduleChange.popup.flightDisruption.subMessage3'
                                      ]
                                    : w[
                                        'scheduleChange.popup.flightDisruption.multiTK.subMessage3'
                                      ],
                              }),
                              (0, C.jsx)('div', {
                                children:
                                  (!b && !j && !N) ||
                                  (b &&
                                    1 == b.length &&
                                    I &&
                                    1 == I.length &&
                                    !j)
                                    ? (0, C.jsx)(be.P, {
                                        classes: { root: aa().acceptBtn },
                                        disabled: !1,
                                        onClick: h,
                                        children:
                                          w['scheduleChange.popup.accept'],
                                      })
                                    : (0, C.jsx)(be.P, {
                                        classes: { root: aa().acceptBtn },
                                        disabled: !1,
                                        onClick: h,
                                        children:
                                          w[
                                            'scheduleChange.popup.multiTK.accept'
                                          ],
                                      }),
                              }),
                            ],
                          }),
                        d &&
                          !(null !== o && void 0 !== o && o.isDisrupted) &&
                          (0, C.jsx)(be.P, {
                            classes: { root: aa().fdokBtn },
                            onClick: l,
                            disabled: !1,
                            children: w['scheduleChange.popup.ok'],
                          }),
                      ],
                    }),
                  !S &&
                    (0, C.jsxs)('div', {
                      children: [
                        !t &&
                          o.isDisrupted &&
                          !j &&
                          (0, C.jsx)('div', {
                            className: v()(
                              aa().fdSeperatorLine,
                              'fdSeperatorLine',
                            ),
                          }),
                        j || N
                          ? N
                            ? !t &&
                              o.isDisrupted &&
                              (0, C.jsx)('p', {
                                className: v()(aa().scMessage, 'scMessage'),
                                children: d
                                  ? w[
                                      'scheduleChange.popup.flightDisruption.multiTK.subMessage41'
                                    ]
                                  : w[
                                      'scheduleChange.popup.flightDisruption.multiTK.subMessage21'
                                    ],
                              })
                            : !t &&
                              o.isDisrupted &&
                              (0, C.jsx)('p', {
                                className: v()(aa().scMessage, 'scMessage'),
                                children: d
                                  ? w[
                                      'scheduleChange.popup.flightDisruption.multiTK.subMessage4'
                                    ]
                                  : w[
                                      'scheduleChange.popup.flightDisruption.multiTK.subMessage2'
                                    ],
                              })
                          : !t &&
                            o.isDisrupted &&
                            (0, C.jsx)('p', {
                              className: v()(aa().scMessage, 'scMessage'),
                              children: d
                                ? w[
                                    'scheduleChange.popup.flightDisruption.subMessage4'
                                  ]
                                : w[
                                    'scheduleChange.popup.flightDisruption.subMessage2'
                                  ],
                            }),
                        o.isDisrupted &&
                          'FAILURE' ==
                            (null === (P = o.SSRAPolicyResponse) || void 0 === P
                              ? void 0
                              : P.status) &&
                          (0, C.jsx)(ta.B, {
                            message:
                              null !==
                                (k =
                                  null === (y = o.SSRAPolicyResponse) ||
                                  void 0 === y
                                    ? void 0
                                    : y.customErrorDesc) && void 0 !== k
                                ? k
                                : w['flightDisruption.service.errorResponse'],
                          }),
                        (null === o || void 0 === o
                          ? void 0
                          : o.SSRAPolicyResponse) &&
                          'SUCCESS' ==
                            (null === (R = o.SSRAPolicyResponse) || void 0 === R
                              ? void 0
                              : R.status) &&
                          (0, C.jsx)('div', {
                            className: v()(aa().fdBlock, 'fdBlock'),
                            children:
                              (null === (L = o.SSRAPolicyResponse.response) ||
                              void 0 === L
                                ? void 0
                                : L.waiverOptions) &&
                              (null === (O = o.SSRAPolicyResponse) ||
                              void 0 === O ||
                              null === (B = O.response) ||
                              void 0 === B
                                ? void 0
                                : B.waiverOptions.map(function (e, n) {
                                    if (
                                      e.waiverType in ea &&
                                      'flightDisruption.waiverOption.heading.'.concat(
                                        e.waiverType,
                                      ) in w
                                    ) {
                                      var a,
                                        s,
                                        i,
                                        r,
                                        t,
                                        l,
                                        d,
                                        c,
                                        p =
                                          (null ===
                                            (a = o.SSRAPolicyResponse) ||
                                          void 0 === a ||
                                          null === (s = a.response) ||
                                          void 0 === s
                                            ? void 0
                                            : s.waiverOptions) &&
                                          (null ===
                                            (i = o.SSRAPolicyResponse) ||
                                          void 0 === i ||
                                          null === (r = i.response) ||
                                          void 0 === r ||
                                          null ===
                                            (t = r.waiverOptions.find(function (
                                              e,
                                            ) {
                                              return (
                                                'ConvertToOpenTicket' ==
                                                e.waiverType
                                              );
                                            })) ||
                                          void 0 === t
                                            ? void 0
                                            : t.travelEndDate),
                                        u = '',
                                        g = !1;
                                      switch (e.waiverType) {
                                        case 'ChangeOfDate':
                                          (d =
                                            w[
                                              'flightDisruption.waiverOption.heading.ChangeOfDate'
                                            ]),
                                            (c =
                                              w[
                                                'flightDisruption.waiverOption.description.ChangeOfDate'
                                              ]),
                                            (g = !0);
                                          break;
                                        case 'ConvertToOpenTicket':
                                          (d =
                                            w[
                                              'flightDisruption.waiverOption.heading.ConvertToOpenTicket'
                                            ]),
                                            (c =
                                              w[
                                                'flightDisruption.waiverOption.description.ConvertToOpenTicket'
                                              ]),
                                            (u =
                                              w[
                                                'flightDisruption.waiverOption.url.ConvertToOpenTicket'
                                              ]);
                                          break;
                                        case 'Refund':
                                          (d =
                                            w[
                                              'flightDisruption.waiverOption.heading.Refund'
                                            ]),
                                            (c =
                                              w[
                                                'flightDisruption.waiverOption.description.Refund'
                                              ]),
                                            (u =
                                              w[
                                                'flightDisruption.waiverOption.url.Refund'
                                              ]);
                                      }
                                      return (0, C.jsx)(C.Fragment, {
                                        children: (0, C.jsx)(
                                          'div',
                                          {
                                            className: v()(aa().fdBox, 'fdBox'),
                                            children: (0, C.jsx)(D, {
                                              url: u,
                                              isDateChange: g,
                                              children: (0, C.jsxs)('div', {
                                                className: v()(
                                                  aa().fdBoxContent,
                                                  'fdBoxContent',
                                                ),
                                                children: [
                                                  (0, C.jsxs)('div', {
                                                    className: v()(
                                                      aa().fdContent,
                                                      'fdContent',
                                                    ),
                                                    children: [
                                                      (0, C.jsx)('div', {
                                                        className: v()(
                                                          aa().fdBoxTitle,
                                                          'fdBoxTitle',
                                                        ),
                                                        children: d,
                                                      }),
                                                      (0, C.jsx)('div', {
                                                        className: v()(
                                                          aa().fdBoxDesc,
                                                          'fdBoxDesc',
                                                        ),
                                                        children:
                                                          c && p
                                                            ? c.replace(
                                                                '{0}',
                                                                (0, sa.d)(
                                                                  p,
                                                                  'YYYY-MM-DD',
                                                                ).format(
                                                                  'DD MMM YYYY',
                                                                ),
                                                              )
                                                            : null ===
                                                                (l = c) ||
                                                              void 0 === l
                                                            ? void 0
                                                            : l.replace(
                                                                '{0}',
                                                                '',
                                                              ),
                                                      }),
                                                    ],
                                                  }),
                                                  (0, C.jsx)('div', {
                                                    className: v()(
                                                      aa().fdchevronIcon,
                                                      'fdchevronIcon',
                                                    ),
                                                    children: (0, C.jsx)('em', {
                                                      className: v()(
                                                        aa().chevronIcon,
                                                        'chevronIcon',
                                                      ),
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            }),
                                          },
                                          n,
                                        ),
                                      });
                                    }
                                    return null;
                                  })),
                          }),
                      ],
                    }),
                  (c || t || (b && b.length > 1) || (j && j.length > 0)) &&
                    (0, C.jsx)('p', {
                      className: v()(aa().scMessage, 'scMessage'),
                      children: (0, C.jsx)('span', {
                        dangerouslySetInnerHTML: {
                          __html:
                            w[
                              'scheduleChange.popup.flightDisruption.subMessageLink1'
                            ],
                        },
                      }),
                    }),
                ],
              });
            })(),
          }),
        });
      }
      function la(e) {
        var n = e.handleClickRefuse,
          a = e.showContinuePopup,
          s = e.showAcceptRefusePopup,
          i = e.oldFlight,
          t = e.newFlight,
          o = e.handleAcceptClick,
          l = r.useContext(x.dd);
        return (0, C.jsx)(Rn.q, {
          onClickClose: n,
          childrenWrapperWidth: 420,
          classes: { modalWrapper: aa().childrenWrapper },
          children: (0, C.jsxs)('div', {
            className: v()(aa().scheduleChangeWrapper, 'scheduleChangeWrapper'),
            children: [
              (0, C.jsxs)('p', {
                className: v()(
                  aa().schedhuleChangeHeading,
                  'schedhuleChangeHeading',
                ),
                children: [
                  l['scheduleChange.popup.title'],
                  ' ',
                  null === t || void 0 === t ? void 0 : t.flight,
                ],
              }),
              (0, C.jsxs)('p', {
                className: v()(aa().scMessage, 'scMessage'),
                children: [
                  l['scheduleChange.popup.subMessage'],
                  '\xa0',
                  a &&
                    (0, C.jsx)('span', {
                      dangerouslySetInnerHTML: {
                        __html: l['scheduleChange.popup.subMessageLink'],
                      },
                    }),
                ],
              }),
              (0, C.jsx)('p', {
                className: v()(aa().scDepToDestination, 'scDepToDestination'),
                children:
                  t &&
                  l['scheduleChange.popup.subTitle']
                    .replace(
                      '{0}',
                      null === t || void 0 === t ? void 0 : t.origin,
                    )
                    .replace(
                      '{1}',
                      null === t || void 0 === t ? void 0 : t.destination,
                    ),
              }),
              (0, C.jsxs)('div', {
                children: [
                  (0, C.jsxs)('div', {
                    className: v()(
                      aa().scContent,
                      aa().showOnOnlyDesktop,
                      'scContent',
                    ),
                    children: [
                      (0, C.jsxs)('div', {
                        className: v()(
                          aa().scFlightTableHeadingRow,
                          'scFlightTableHeadingRow',
                        ),
                        children: [
                          (0, C.jsx)('div', {
                            className: v()(aa().flightsDiv, 'flightsDiv'),
                          }),
                          (0, C.jsx)('div', {
                            className: v()(aa().dateDiv, 'dateDiv'),
                            children: l['scheduleChange.popup.date'],
                          }),
                          (0, C.jsx)('div', {
                            className: v()(aa().depatureDiv, 'depatureDiv'),
                            children: l['scheduleChange.popup.departure'],
                          }),
                          (0, C.jsx)('div', {
                            children: l['scheduleChange.popup.arrival'],
                          }),
                        ],
                      }),
                      i &&
                        (0, C.jsxs)('div', {
                          className: v()(
                            aa().scOriginalFlightDiv,
                            'scOriginalFlightDiv',
                          ),
                          children: [
                            (0, C.jsxs)('div', {
                              className: v()(aa().flightsDiv, 'flightsDiv'),
                              children: [
                                l['scheduleChange.popup.originalFlight'],
                                ' ',
                                null === i || void 0 === i ? void 0 : i.flight,
                              ],
                            }),
                            (0, C.jsx)('div', {
                              className: v()(aa().dateDiv, 'dateDiv'),
                              children:
                                null === i || void 0 === i ? void 0 : i.date,
                            }),
                            (0, C.jsx)('div', {
                              className: v()(aa().depatureDiv, 'depatureDiv'),
                              children:
                                null === i || void 0 === i
                                  ? void 0
                                  : i.departureTime,
                            }),
                            (0, C.jsx)('div', {
                              children:
                                null === i || void 0 === i
                                  ? void 0
                                  : i.arrivalTime,
                            }),
                          ],
                        }),
                      (0, C.jsxs)('div', {
                        className: v()(aa().scNewFlightDiv, 'scNewFlightDiv'),
                        children: [
                          (0, C.jsxs)('div', {
                            className: v()(aa().flightsDiv, 'flightsDiv'),
                            children: [
                              l['scheduleChange.popup.newFlight'],
                              ' ',
                              null === t || void 0 === t ? void 0 : t.flight,
                            ],
                          }),
                          (0, C.jsx)('div', {
                            className: v()(aa().dateDiv, 'dateDiv'),
                            children:
                              null === t || void 0 === t ? void 0 : t.date,
                          }),
                          (0, C.jsx)('div', {
                            className: v()(aa().depatureDiv, 'depatureDiv'),
                            children:
                              null === t || void 0 === t
                                ? void 0
                                : t.departureTime,
                          }),
                          (0, C.jsx)('div', {
                            children:
                              null === t || void 0 === t
                                ? void 0
                                : t.arrivalTime,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, C.jsx)('div', {
                    className: v()(aa().scContentMobile, 'scContentMobile'),
                    children: (0, C.jsxs)('div', {
                      className: v()(
                        aa().mobScContetnWrapper,
                        'mobScContetnWrapper',
                      ),
                      children: [
                        i &&
                          (0, C.jsxs)('div', {
                            className: v()(
                              aa().mobScOriginalFlightWrapper,
                              'mobScOriginalFlightWrapper',
                            ),
                            children: [
                              (0, C.jsxs)('div', {
                                children: [
                                  l['scheduleChange.popup.originalFlight'],
                                  ' ',
                                  null === i || void 0 === i
                                    ? void 0
                                    : i.flight,
                                ],
                              }),
                              (0, C.jsxs)('div', {
                                className: v()(
                                  aa().mobFlightScItemWrapper,
                                  'mobFlightScItemWrapper',
                                ),
                                children: [
                                  (0, C.jsx)('div', {
                                    className: v()(
                                      aa().mobScItemHeading,
                                      'mobScItemHeading',
                                    ),
                                    children: l['scheduleChange.popup.date'],
                                  }),
                                  (0, C.jsx)('div', {
                                    className: v()(
                                      aa().mobScItemValue,
                                      'mobScItemValue',
                                    ),
                                    children:
                                      null === i || void 0 === i
                                        ? void 0
                                        : i.date,
                                  }),
                                ],
                              }),
                              (0, C.jsxs)('div', {
                                className: v()(
                                  aa().mobFlightScItemWrapper,
                                  'mobFlightScItemWrapper',
                                ),
                                children: [
                                  (0, C.jsx)('div', {
                                    className: v()(
                                      aa().mobScItemHeading,
                                      'mobScItemHeading',
                                    ),
                                    children:
                                      l['scheduleChange.popup.departure'],
                                  }),
                                  (0, C.jsx)('div', {
                                    className: v()(
                                      aa().mobScItemValue,
                                      'mobScItemValue',
                                    ),
                                    children:
                                      null === i || void 0 === i
                                        ? void 0
                                        : i.departureTime,
                                  }),
                                ],
                              }),
                              (0, C.jsxs)('div', {
                                className: v()(
                                  aa().mobFlightScItemWrapper,
                                  'mobFlightScItemWrapper',
                                ),
                                children: [
                                  (0, C.jsx)('div', {
                                    className: v()(
                                      aa().mobScItemHeading,
                                      'mobScItemHeading',
                                    ),
                                    children: l['scheduleChange.popup.arrival'],
                                  }),
                                  (0, C.jsx)('div', {
                                    className: v()(
                                      aa().mobScItemValue,
                                      'mobScItemValue',
                                    ),
                                    children:
                                      null === i || void 0 === i
                                        ? void 0
                                        : i.arrivalTime,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        (0, C.jsxs)('div', {
                          className: v()(
                            aa().mobNewFlightWrapper,
                            'mobNewFlightWrapper',
                          ),
                          children: [
                            (0, C.jsxs)('div', {
                              className: v()(
                                aa().mobscNewFlight,
                                'mobscNewFlight',
                              ),
                              children: [
                                l['scheduleChange.popup.newFlight'],
                                ' ',
                                null === t || void 0 === t ? void 0 : t.flight,
                              ],
                            }),
                            (0, C.jsxs)('div', {
                              className: v()(
                                aa().mobFlightScItemWrapper,
                                'mobFlightScItemWrapper',
                              ),
                              children: [
                                (0, C.jsx)('div', {
                                  className: v()(
                                    aa().mobScItemHeading,
                                    'mobScItemHeading',
                                  ),
                                  children: l['scheduleChange.popup.date'],
                                }),
                                (0, C.jsx)('div', {
                                  className: v()(
                                    aa().mobScItemValueNewFlight,
                                    'mobScItemValueNewFlight',
                                  ),
                                  children:
                                    null === t || void 0 === t
                                      ? void 0
                                      : t.date,
                                }),
                              ],
                            }),
                            (0, C.jsxs)('div', {
                              className: v()(
                                aa().mobFlightScItemWrapper,
                                'mobFlightScItemWrapper',
                              ),
                              children: [
                                (0, C.jsx)('div', {
                                  className: v()(
                                    aa().mobScItemHeading,
                                    'mobScItemHeading',
                                  ),
                                  children: l['scheduleChange.popup.departure'],
                                }),
                                (0, C.jsx)('div', {
                                  className: v()(
                                    aa().mobScItemValueNewFlight,
                                    'mobScItemValueNewFlight',
                                  ),
                                  children:
                                    null === t || void 0 === t
                                      ? void 0
                                      : t.departureTime,
                                }),
                              ],
                            }),
                            (0, C.jsxs)('div', {
                              className: v()(
                                aa().mobFlightScItemWrapper,
                                'mobFlightScItemWrapper',
                              ),
                              children: [
                                (0, C.jsx)('div', {
                                  className: v()(
                                    aa().mobScItemHeading,
                                    'mobScItemHeading',
                                  ),
                                  children: l['scheduleChange.popup.arrival'],
                                }),
                                (0, C.jsx)('div', {
                                  className: v()(
                                    aa().mobScItemValueNewFlight,
                                    'mobScItemValueNewFlight',
                                  ),
                                  children:
                                    null === t || void 0 === t
                                      ? void 0
                                      : t.arrivalTime,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  s &&
                    (0, C.jsxs)('div', {
                      className: v()(aa().scButtonDiv, 'scButtonDiv'),
                      children: [
                        (0, C.jsx)('div', {
                          className: v()(aa().scRefuse, 'scRefuse'),
                          onClick: n,
                          children: l['scheduleChange.popup.refuse'],
                        }),
                        (0, C.jsx)('div', {
                          children: (0, C.jsx)(be.P, {
                            classes: { root: aa().acceptBtn },
                            disabled: !1,
                            onClick: o,
                            children: l['scheduleChange.popup.accept'],
                          }),
                        }),
                      ],
                    }),
                  a &&
                    (0, C.jsx)('div', {
                      children: (0, C.jsx)(be.P, {
                        classes: { root: aa().okBtn },
                        onClick: n,
                        disabled: !1,
                        children: l['scheduleChange.popup.okay'],
                      }),
                    }),
                  s &&
                    (0, C.jsxs)('div', {
                      className: v()(aa().scContactMsg, 'scContactMsg'),
                      children: [
                        (0, C.jsx)('em', {
                          className: v()(aa().alertIcon, 'alertIcon'),
                        }),
                        (0, C.jsx)('div', {
                          className: v()(
                            aa().furtherAssistanceDiv,
                            'furtherAssistanceDiv',
                          ),
                          children: (0, C.jsx)('span', {
                            dangerouslySetInnerHTML: {
                              __html: l['scheduleChange.popup.subMessageLink2'],
                            },
                          }),
                        }),
                      ],
                    }),
                ],
              }),
            ],
          }),
        });
      }
      !(function (e) {
        (e[(e.ChangeOfDate = 0)] = 'ChangeOfDate'),
          (e[(e.ConvertToOpenTicket = 1)] = 'ConvertToOpenTicket'),
          (e[(e.Refund = 2)] = 'Refund');
      })(ea || (ea = {}));
      var da = a(90502),
        ca = a.n(da),
        pa = function (e) {
          var n = e.redirectToAciPax,
            a = e.showTurnOffPopup,
            s = e.isACIEligible,
            i = e.notDisplayACIOffBanner;
          var t,
            o = (0, r.useContext)(x.dd),
            l = (0, r.useState)(!1),
            d = l[0],
            c = l[1],
            p = (0, r.useRef)(null);
          (t = p),
            (0, r.useEffect)(
              function () {
                var e = function (e) {
                  t.current && !t.current.contains(e.target) && u();
                };
                return (
                  document.addEventListener('mousedown', e),
                  function () {
                    document.addEventListener('mousedown', e);
                  }
                );
              },
              [t],
            );
          var u = function () {
            c(!1);
          };
          return (0, C.jsx)('div', {
            className: v()(ca().aciItem2, ca().aciOnText, 'aciOnText'),
            onClick: function () {
              c(!0);
            },
            'data-testid': 'aciDropdown',
            ref: p,
            children: d
              ? (0, C.jsxs)('div', {
                  className: v()(
                    ca().aciThreeDotsIcon,
                    ca().aciThreeDotsActive,
                    'aciThreeDotsIcon',
                  ),
                  children: [
                    (0, C.jsx)('button', {
                      children: (0, C.jsx)('img', {
                        src: '/saar5/assets/images/svg/more-active.svg',
                        alt: 'autocheckin-three-dots-icon-blue',
                      }),
                    }),
                    (0, C.jsx)('div', {
                      className: v()(
                        ca().autoCheckInUpdate,
                        'autoCheckInUpdate',
                      ),
                      children: (0, C.jsxs)('div', {
                        className: v()(
                          ca().aciDropDownOptions,
                          'aciDropDownOptions',
                        ),
                        children: [
                          i
                            ? (0, C.jsx)('div', {
                                className: v()(
                                  ca().aciUpdatePaxDisabled,
                                  'aciUpdatePaxDisabled',
                                ),
                                children: (0, C.jsx)(L.T, {
                                  position: 'Top',
                                  message:
                                    o['aci.updatePaxDetails.disabled.message'],
                                  showOnHover: !1,
                                  children: (0, C.jsx)('button', {
                                    children: o['aci.updatePaxDetails'],
                                  }),
                                }),
                              })
                            : (0, C.jsx)('div', {
                                className: v()(
                                  ca().aciUpdatePaxDetails,
                                  'aciUpdatePaxDetails',
                                ),
                                children: (0, C.jsx)('button', {
                                  'data-testid': 'aciUpdatePaxButton',
                                  onClick: function (e) {
                                    return n(e, 'true');
                                  },
                                  children: o['aci.updatePaxDetails'],
                                }),
                              }),
                          s
                            ? i
                              ? (0, C.jsx)('div', {
                                  className: v()(
                                    ca().aciTurnOffDisabled,
                                    'aciTurnOffDisabled',
                                  ),
                                  children: (0, C.jsx)(L.T, {
                                    position: 'Bottom',
                                    message: o['aci.turnoff.disabled.message'],
                                    showOnHover: !1,
                                    children: (0, C.jsx)('button', {
                                      children: o['aci.turnOff'],
                                    }),
                                  }),
                                })
                              : (0, C.jsx)('div', {
                                  className: v()(ca().aciTurnOff, 'aciTurnOff'),
                                  children: (0, C.jsx)('button', {
                                    'data-testid': 'aciTurnOff',
                                    onClick: function () {
                                      return a(!0);
                                    },
                                    children: o['aci.turnOff'],
                                  }),
                                })
                            : (0, C.jsx)('div', {
                                className: v()(
                                  ca().aciTurnOffDisabled,
                                  'aciTurnOffDisabled',
                                ),
                                children: (0, C.jsx)(L.T, {
                                  position: 'Bottom',
                                  message: o['aci.turnoff.disabled.message'],
                                  showOnHover: !1,
                                  children: (0, C.jsx)('button', {
                                    children: o['aci.turnOff'],
                                  }),
                                }),
                              }),
                        ],
                      }),
                    }),
                  ],
                })
              : (0, C.jsx)('div', {
                  className: v()(ca().aciThreeDotsIcon, 'aciThreeDotsIcon'),
                  children: (0, C.jsx)('button', {
                    className: v()(
                      ca().aciThreeDotsNotActive,
                      'aciThreeDotsNotActive',
                    ),
                    children: (0, C.jsx)('img', {
                      src: '/saar5/assets/images/svg/more.svg',
                      alt: 'autocheckin-three-dots-icon-white',
                    }),
                  }),
                }),
          });
        },
        ua = a(41791),
        ga = a.n(ua);
      function ma(e, n, a) {
        return ha.apply(this, arguments);
      }
      function ha() {
        return (ha = (0, t.Z)(
          i().mark(function e(n, a, s) {
            var r, t, o;
            return i().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (-1 !== window.location.href.indexOf('singaporeair')) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt('return', 'ACI_ERROR');
                    case 2:
                      return (
                        'MB',
                        (r = new Headers()).append(
                          'Content-Type',
                          'application/x-www-form-urlencoded',
                        ),
                        (t = new URLSearchParams()).append('pnr', n),
                        t.append('lastName', a),
                        t.append('aciFlow', s),
                        t.append('flowType', 'MB'),
                        (o = {
                          method: 'POST',
                          headers: r,
                          body: t,
                          redirect: 'follow',
                        }),
                        (e.prev = 11),
                        (e.next = 14),
                        fetch(
                          '/icheckIN/submitAutoCheckinCompleteHome.form',
                          o,
                        ).then(function (e) {
                          if (
                            -1 !== e.url.toUpperCase().indexOf('ERROR') ||
                            !e.redirected
                          )
                            return 'ACI_ERROR';
                          window.location.href =
                            '/icheckIN/getAutoCheckinCompleteHome.form';
                        })
                      );
                    case 14:
                      e.next = 19;
                      break;
                    case 16:
                      return (
                        (e.prev = 16),
                        (e.t0 = e.catch(11)),
                        e.abrupt('return', 'ACI_ERROR')
                      );
                    case 19:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              null,
              [[11, 16]],
            );
          }),
        )).apply(this, arguments);
      }
      var va = function (e) {
          var n = e.passengers,
            a = e.hidePopup,
            s = e.aciEligibleFlights,
            i = e.pnr,
            t = e.lastName,
            o = (0, r.useContext)(x.dd),
            l = (0, r.useContext)(x.ko).setPageLoading,
            d = (0, r.useState)(!1),
            c = d[0],
            p = d[1];
          return (0, C.jsx)(Rn.q, {
            onClickClose: function () {
              return a(!1);
            },
            childrenWrapperWidth: 600,
            classes: { modalWrapper: ga().childrenWrapper },
            children: (0, C.jsxs)('div', {
              'data-testid': 'aciOffPopup',
              className: v()(ga().turnOffPopup, 'turnOffPopup'),
              children: [
                (0, C.jsx)('div', {
                  className: v()(ga().turnOffTitle, 'turnOffTitle'),
                  children: o['aci.turnOffPopupTitle'],
                }),
                c &&
                  (0, C.jsx)(_a, {
                    message: o['aci.cancellationFailureMessage'],
                  }),
                (0, C.jsx)('div', {
                  className: v()(ga().turnOffPreamble, 'turnOffPreamble'),
                  children: o['aci.turnOffPopupPreamble'],
                }),
                null === s || void 0 === s
                  ? void 0
                  : s.map(function (e) {
                      var n,
                        a =
                          e.scheduledDepartureDateTime &&
                          ((n = e.scheduledDepartureDateTime),
                          (0, sa.d)(n).format('DD MMM YYYY (ddd)')),
                        s =
                          e.scheduledDepartureDateTime &&
                          (function (e) {
                            return (0, sa.d)(e).format('HH:mm');
                          })(e.scheduledDepartureDateTime);
                      return (0,
                      C.jsxs)('div', { className: v()(ga().flightDetails, 'flightDetails'), children: [(0, C.jsxs)('div', { className: v()(ga().flightTitle, 'flightTitle'), children: [e.origin.airportCity + ' (' + e.origin.airportCode + ') ', o['aci.to'], ' ', e.destination.airportCity + ' (' + e.destination.airportCode + ')'] }), (0, C.jsx)('div', { className: v()(ga().flightSubTitle, 'flightSubTitle'), children: a + ' - ' + s + ' - ' + e.marketingAirline.airlineCode + ' ' + e.marketingAirline.flightNumber })] }, e.segmentNumber);
                    }),
                (0, C.jsx)('div', { children: o['aci.paxLabel'] }),
                n.map(function (e) {
                  var n = e.passengerNumber,
                    a = e.passengerId,
                    s = e.isInfant;
                  return (0,
                  C.jsxs)('div', { className: v()(ga().passengerOuter, 'passengerOuter'), children: [(0, C.jsx)('div', { className: v()(ga().passengerIndex, 'passengerIndex'), children: !s && ''.concat(a, '.') }), (0, C.jsx)('div', { className: v()(ga().passengerInner, 'passengerInner'), children: (0, C.jsxs)('div', { className: v()(ga().passengerName, 'passengerName'), children: [e.paxNameWithoutTitle, e.isInfant && (0, C.jsxs)('span', { className: v()(ga().infant, 'infant'), children: [' ', o['aci.infant']] })] }) })] }, n);
                }),
                (0, C.jsxs)('div', {
                  className: v()(ga().buttonOuter, 'buttonOuter'),
                  children: [
                    (0, C.jsx)('div', {
                      onClick: function () {
                        return a(!1);
                      },
                      className: v()(ga().backButton, 'backButton'),
                      children: o['aci.back'],
                    }),
                    (0, C.jsx)('button', {
                      onClick: function () {
                        !(function () {
                          l(!0);
                          var e = {
                            method: 'POST',
                            headers: {
                              'Content-Type': 'application/json',
                              'csrf-token': oe().get('MBVS_CSRF') || '',
                            },
                            body: JSON.stringify({ pnr: i }),
                          };
                          (0, re.rQ)(
                            '/managebooking/api/cancelaci',
                            e,
                            function (e) {
                              if ((l(!1), 'SUCCESS' === e.status)) {
                                var n = {
                                  method: 'POST',
                                  headers: {
                                    'Content-Type': 'application/json',
                                  },
                                  body: JSON.stringify({ pnr: i, lastName: t }),
                                };
                                fetch(
                                  '/icheckIN/sendACITurnedOFFEmail.form',
                                  n,
                                ),
                                  a(!1, !0);
                              } else p(!0);
                            },
                            function () {
                              l(!1), p(!0);
                            },
                          );
                        })();
                      },
                      className: v()(ga().confirmButton, 'confirmButton'),
                      children: o['aci.confirm'],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        _a = function (e) {
          var n = e.message;
          return (0, C.jsx)('div', {
            className: v()(ga().error, 'error'),
            children: (0, C.jsxs)('div', {
              className: v()(ga().errorInner, 'errorInner'),
              children: [
                (0, C.jsx)('div', {
                  className: v()(ga().closeIcon, 'closeIcon'),
                }),
                (0, C.jsx)('div', {
                  className: v()(ga().errorMessage, 'errorMessage'),
                  dangerouslySetInnerHTML: { __html: n },
                }),
              ],
            }),
          });
        },
        fa = function (e) {
          var n = e.redirectToAciPax,
            a = e.passengerAndPreference,
            s = e.isACIEligible,
            i = e.aciEligibleFlights,
            t = e.pnr,
            o = e.lastName,
            l = (0, r.useContext)(x.dd),
            d = (0, r.useContext)(x.ko).setPageLoading,
            c = (0, r.useState)(!1),
            p = c[0],
            u = c[1],
            g = (0, r.useState)(!1),
            m = g[0],
            h = g[1],
            _ = (0, r.useState)(!1),
            f = _[0],
            b = _[1],
            N = a[0].passengers,
            j = '',
            I = '',
            w = '';
          N.forEach(function (e, n) {
            if (
              ((j += e.paxNameWithoutTitle),
              e.isInfant && (j += ' '.concat(l['aci.infant'])),
              n + 1 !== N.length && (j += ', '),
              j.length > 55 && !p)
            ) {
              I = j.substring(0, 55) + '...';
              var a = j.slice(55, -1);
              w = (a.split(',').length - 1).toString();
            }
          });
          var P,
            S = function (e) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              h(e), n && b(!0);
            },
            A = function () {
              b(!1), d(!0), window.location.reload();
            };
          return (0, C.jsxs)('div', {
            className: v()(ca().aciContent, ca().aciOn, 'aciContent'),
            'data-testid': 'aciOn',
            children: [
              (0, C.jsx)('div', {
                className: v()(ca().aciItem1, 'aciItem1'),
                children: (0, C.jsxs)('div', {
                  className: v()(ca().aciDetails, 'aciDetails'),
                  children: [
                    (0, C.jsx)('div', {
                      className: v()(ca().aciIcon, 'aciIcon'),
                      children: (0, C.jsx)('img', {
                        src: '/saar5/assets/images/svg/autocheckin.svg',
                        alt: 'autocheckin-tick',
                        className: v()(ca().tickIcon, 'tickIcon'),
                      }),
                    }),
                    (0, C.jsxs)('div', {
                      className: v()(ca().aciOnContent, 'aciOnContent'),
                      children: [
                        (0, C.jsxs)('div', {
                          className: v()(ca().aciOnTitle, 'aciOnTitle'),
                          children: [
                            (0, C.jsx)('div', {
                              className: v()(ca().aciTitle, 'aciTitle'),
                              children: l['aci.title'],
                            }),
                            (0, C.jsx)('div', {
                              children: (0, C.jsx)('img', {
                                alt: 'aci-on-indicator',
                                src:
                                  ((P = 'on-btn.png'),
                                  '/saar5/assets/images/' + P),
                              }),
                            }),
                            (0, C.jsx)('span', {
                              className: v()(ca().aciPipe, 'aciPipe'),
                            }),
                            (0, C.jsxs)('div', {
                              className: v()(
                                ca().aciPaxDetails,
                                'aciPaxDetails',
                              ),
                              children: [
                                (0, C.jsx)('span', {
                                  className: v()(ca().paxLabel, 'paxLabel'),
                                  children: l['aci.paxLabel'],
                                }),
                                (0, C.jsxs)('span', {
                                  className: v()(ca().aciPaxName, 'aciPaxName'),
                                  children: [
                                    (0, C.jsx)('span', {
                                      children: !p && j.length > 55 ? I : j,
                                    }),
                                    !p && j.length > 55
                                      ? (0, C.jsxs)('span', {
                                          children: [
                                            '+ ',
                                            w,
                                            ' ',
                                            l['aci.more'],
                                          ],
                                        })
                                      : null,
                                    j.length > 55 &&
                                      (0, C.jsxs)('div', {
                                        className: v()(
                                          ca().aciPaxToggleLink,
                                          'aciPaxToggleLink',
                                        ),
                                        onClick: function () {
                                          return u(!p);
                                        },
                                        children: [
                                          p
                                            ? l['aci.showLess']
                                            : l['aci.viewAll'],
                                          (0, C.jsx)('em', {
                                            className: p
                                              ? v()(
                                                  ca().chevronIcon,
                                                  ca().chevronActive,
                                                  'chevronIcon',
                                                  'chevronActive',
                                                )
                                              : v()(
                                                  ca().chevronIcon,
                                                  'chevronIcon',
                                                ),
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, C.jsx)('div', {
                          children:
                            N.length > 1
                              ? l['aci.onDescriptionMultiPax']
                              : l['aci.onDescription'],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, C.jsx)(pa, {
                redirectToAciPax: n,
                showTurnOffPopup: S,
                isACIEligible: s,
                notDisplayACIOffBanner: e.notDisplayACIOffBanner,
              }),
              m &&
                (0, C.jsx)(va, {
                  show: m,
                  passengers: N,
                  hidePopup: S,
                  aciEligibleFlights: i,
                  pnr: t,
                  lastName: o,
                }),
              f &&
                (0, C.jsxs)(Rn.q, {
                  onClickClose: A,
                  childrenWrapperWidth: 600,
                  classes: { modalWrapper: ca().childrenWrapper },
                  children: [
                    (0, C.jsx)('div', {
                      className: v()(ca().turnOffTitle, 'turnOffTitle'),
                      children: l['aci.turnOffConfirmTitle'],
                    }),
                    (0, C.jsx)('div', {
                      className: v()(ca().turnOffPreamble, 'turnOffPreamble'),
                      children: l['aci.turnOffConfirmSubTitle'],
                    }),
                    (0, C.jsx)('div', {
                      className: v()(ca().buttonOuter, 'buttonOuter'),
                      children: (0, C.jsx)('button', {
                        onClick: A,
                        className: v()(ca().okButton, 'okButton'),
                        children: l['aci.ok'],
                      }),
                    }),
                  ],
                }),
            ],
          });
        },
        xa = function (e) {
          var n = e.redirectToAciPax,
            a = (0, r.useContext)(x.dd),
            s = (0, r.useContext)(x.ko),
            i = s.locale,
            t = s.country,
            o = t && t.toLowerCase(),
            l = '/'.concat(i, '/').concat(o, '/').concat(a['aci.learnmoreURL']);
          return (0, C.jsxs)('div', {
            className: v()(ca().aciContent, 'aciContent'),
            'data-testid': 'aciOff',
            children: [
              (0, C.jsx)('div', {
                className: v()(
                  ca().aciItem1,
                  ca().aciItemWidth,
                  'aciItemWidth',
                ),
                children: (0, C.jsxs)('div', {
                  className: v()(ca().aciDetails, 'aciDetails'),
                  children: [
                    (0, C.jsx)('div', {
                      className: v()(ca().aciIcon, 'aciIcon'),
                      children: (0, C.jsx)('img', {
                        src: '/saar5/assets/images/svg/autocheckin.svg',
                        alt: 'autocheckin-tick',
                        className: v()(ca().tickIcon, 'tickIcon'),
                      }),
                    }),
                    (0, C.jsxs)('div', {
                      className: v()(ca().aciDescription, 'aciDescription'),
                      children: [
                        (0, C.jsx)('div', {
                          className: v()(ca().aciTitle, 'aciTitle'),
                          children: a['aci.title'],
                        }),
                        (0, C.jsxs)('div', {
                          children: [
                            a['aci.description'],
                            (0, C.jsxs)('a', {
                              rel: 'noopener noreferrer',
                              target: '_blank',
                              href: l,
                              children: [' ', a['aci.learnmore']],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, C.jsx)('div', {
                className: v()(
                  ca().aciItem2,
                  ca().aciOffButton,
                  'aciOffButton',
                ),
                children: (0, C.jsx)('button', {
                  className: v()(ca().aciButton, 'aciButton'),
                  onClick: function (e) {
                    return n(e, 'false');
                  },
                  children: a['aci.turnOnButton'],
                }),
              }),
            ],
          });
        },
        Ca = function (e) {
          var n = e.pnr,
            a = e.lastName,
            s = e.passengerAndPreference,
            o = e.isACIEligible,
            l = e.aciSectionRef,
            d = e.aciEligibleFlights,
            c = (0, r.useState)(!1),
            p = c[0],
            u = c[1],
            g = (function () {
              var e = (0, t.Z)(
                i().mark(function e(s, r) {
                  var t;
                  return i().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            s.preventDefault(), u(!0), (e.next = 4), ma(n, a, r)
                          );
                        case 4:
                          (t = e.sent) && 'ACI_ERROR' === t && u(!1);
                        case 6:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (n, a) {
                return e.apply(this, arguments);
              };
            })();
          return (0, C.jsxs)('div', {
            className: v()(ca().wrapper, 'wrapper'),
            'data-testid': 'aciBanner',
            ref: l,
            children: [
              p &&
                (0, C.jsx)(O.P, {
                  locale: B.L.en_UK,
                  scrollToTop: !0,
                  shouldLockBody: !1,
                }),
              !o || e.displayTurnOffButton || e.notDisplayACIOffBanner
                ? e.displayTurnOffButton
                  ? (0, C.jsx)(fa, {
                      redirectToAciPax: g,
                      passengerAndPreference: s,
                      isACIEligible: o,
                      aciEligibleFlights: d,
                      pnr: n,
                      lastName: a,
                      notDisplayACIOffBanner: e.notDisplayACIOffBanner,
                    })
                  : null
                : (0, C.jsx)(xa, { redirectToAciPax: g }),
            ],
          });
        },
        ba = a(9318),
        Na = a(38608),
        ja = a(58967),
        Ia = a.n(ja),
        wa = function (e) {
          var n = (0, An.al)(
              'icon-travel-advisories.svg',
              '/assets/images/svg/',
            ),
            a = (0, r.useContext)(x.dd),
            s = e.passangers,
            i = e.flights,
            t = e.nationalityBasedTravelRestriction,
            o = e.taSectionRef,
            l = e.customerProfile,
            d = s[0].passengers.filter(function (e) {
              return e.nationality && '' !== e.nationality;
            }),
            c = (0, r.useContext)(x.ko),
            p = c.locale,
            u = c.country,
            g = function () {
              for (var e = '', n = 0; n < i.length; n++)
                i.length > 1 && n + 1 != i.length
                  ? (e +=
                      i[n].originAirportCode +
                      '-' +
                      i[n].destinationAirportCode +
                      '|')
                  : (e +=
                      i[n].originAirportCode +
                      '-' +
                      i[n].destinationAirportCode);
              return e;
            },
            m = function (e) {
              return e.substring(0, e.lastIndexOf('_')).toUpperCase();
            };
          return (0, C.jsx)('div', {
            className: v()(Ia().wrapper, 'taWrapper'),
            ref: o,
            children: (0, C.jsx)('div', {
              className: v()(Ia().borderClass, 'taBorderClass'),
              children: (0, C.jsxs)('div', {
                className: t.isEligible
                  ? v()(Ia().subWrapper, 'taSubWrapper')
                  : v()(
                      Ia().subWrapperWithoutBorder,
                      'taSubWrapperWithoutBorder',
                    ),
                children: [
                  (0, C.jsxs)('div', {
                    className: v()(Ia().taDescription, 'taDescription'),
                    children: [
                      (0, C.jsx)('div', {
                        className: v()(Ia().imageWrapper, 'taImageWrapper'),
                        children: (0, C.jsx)('div', {
                          className: v()(Ia().travelIcon, 'taTravelIcon'),
                          style: { backgroundImage: 'url('.concat(n, ')') },
                        }),
                      }),
                      (0, C.jsxs)('div', {
                        className: v()(Ia().heading, 'taHeading'),
                        children: [
                          (0, C.jsxs)('h2', {
                            children: [
                              a['timatic.TravelAdvisories'],
                              (0, C.jsxs)('div', {
                                className: v()(
                                  Ia().traveImportant,
                                  'taTravelImportant',
                                ),
                                children: [' ', a['timatic.important']],
                              }),
                            ],
                          }),
                          ' ',
                          (0, C.jsx)('p', {
                            children: a['timatic.importantMsg'],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, C.jsx)('div', {
                    className: v()(
                      Ia().taCheckNowBtnWidth,
                      'taCheckNowBtnWidth',
                    ),
                    children: (0, C.jsx)('a', {
                      href: (function () {
                        var e = u && u.toLowerCase(),
                          n = '/'
                            .concat(p, '/')
                            .concat(e, '/')
                            .concat(a['timatic.TAUrl'])
                            .concat(m(p), '&segment=')
                            .concat(g());
                        return (
                          1 == d.length &&
                            '' != d[0].nationality &&
                            (n = n + '&nationality=' + d[0].nationality),
                          'NA' !=
                            (null === l || void 0 === l
                              ? void 0
                              : l.countryofRes) &&
                            (n =
                              n +
                              '&residence=' +
                              (null === l || void 0 === l
                                ? void 0
                                : l.countryofRes)),
                          n
                        );
                      })(),
                      target: '_blank',
                      rel: 'noreferrer',
                      className: v()(Ia().taCheckNowBtn, 'taCheckNowBtn'),
                      children: a['timatic.checkNow'],
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        Pa = a(87111),
        Sa = a.n(Pa),
        Aa = function (e) {
          var n,
            a,
            s,
            i = e.data,
            t = e.pnr,
            o = e.currencyPrecision,
            l = i[0].passengers.find(function (e) {
              return '' !== e.availableCredit;
            }),
            d =
              null === l ||
              void 0 === l ||
              null === (n = l.availableCredit) ||
              void 0 === n
                ? void 0
                : n.split(' ')[0],
            c =
              null === l ||
              void 0 === l ||
              null === (a = l.availableCredit) ||
              void 0 === a
                ? void 0
                : a.split(' ')[1],
            p = (0, An.al)(
              'ico-info-round-fill--blue.svg',
              '/saar5/images/svg/',
            ),
            u = (0, r.useContext)(x.dd);
          return (0, C.jsx)('div', {
            className: v()(Sa().outerWrapper, 'outerWrapper'),
            children: (0, C.jsxs)('div', {
              className: v()(Sa().innerWrapper, 'innerWrapper'),
              children: [
                1 === i[0].passengers.length
                  ? (0, C.jsxs)('div', {
                      className: v()(Sa().title, 'yourFlightCreditTitle'),
                      children: [
                        u['flightcredit.your'] +
                          ' ' +
                          u['flightcredit.remaingCredits'].toLowerCase() +
                          ': ',
                        (0, C.jsx)('span', {
                          children: (0, C.jsx)('span', {
                            className: v()(Sa().bold, 'currency'),
                            children:
                              d +
                              ' ' +
                              Number(c).toLocaleString(void 0, {
                                minimumFractionDigits:
                                  null !== o && void 0 !== o ? o : 2,
                                maximumFractionDigits:
                                  null !== o && void 0 !== o ? o : 2,
                              }),
                          }),
                        }),
                      ],
                    })
                  : (0, C.jsx)('div', {
                      className: v()(Sa().title, 'yourFlightCreditTitle'),
                      children:
                        u['flightcredit.your'] +
                        ' ' +
                        u['flightcredit.remaingCredits'].toLowerCase(),
                    }),
                (0, C.jsxs)('div', {
                  className: v()(Sa().content, 'residualCreditContent'),
                  children: [
                    i[0].passengers.length > 1 &&
                      (0, C.jsx)('div', {
                        className: v()(Sa().multipaxTable, 'multipaxTable'),
                        children: (0, C.jsxs)('table', {
                          className: v()(Sa().tableData, 'tableData'),
                          children: [
                            (0, C.jsxs)('tr', {
                              children: [
                                (0, C.jsxs)('td', {
                                  className: v()(Sa().tableWidth, 'tableWidth'),
                                  children: [' ', u['flightcredit.passenger']],
                                }),
                                ' ',
                                (0, C.jsxs)('td', {
                                  className: v()(
                                    Sa().residualCredits,
                                    'residualCredits',
                                  ),
                                  children: [
                                    u['flightcredit.remaingCredits'],
                                    ' (',
                                    null === l ||
                                    void 0 === l ||
                                    null === (s = l.availableCredit) ||
                                    void 0 === s
                                      ? void 0
                                      : s.split(' ')[0],
                                    ')',
                                  ],
                                }),
                              ],
                            }),
                            i[0].passengers.map(function (e, n) {
                              var a,
                                s =
                                  null === (a = e.availableCredit) ||
                                  void 0 === a
                                    ? void 0
                                    : a.split(' ');
                              return (
                                (null === s || void 0 === s ? void 0 : s[1]) &&
                                '' !==
                                  (null === s || void 0 === s
                                    ? void 0
                                    : s[1]) &&
                                (0, C.jsxs)(
                                  'tr',
                                  {
                                    className: v()(Sa().tableRow, 'tableRow'),
                                    children: [
                                      (0, C.jsx)('td', {
                                        children: (0, C.jsx)('span', {
                                          children: e.passengerName,
                                        }),
                                      }),
                                      ' ',
                                      (0, C.jsx)('td', {
                                        children: (0, C.jsx)('span', {
                                          children: Number(s[1]).toLocaleString(
                                            void 0,
                                            {
                                              minimumFractionDigits:
                                                null !== o && void 0 !== o
                                                  ? o
                                                  : 2,
                                              maximumFractionDigits:
                                                null !== o && void 0 !== o
                                                  ? o
                                                  : 2,
                                            },
                                          ),
                                        }),
                                      }),
                                    ],
                                  },
                                  n,
                                )
                              );
                            }),
                          ],
                        }),
                      }),
                    (0, C.jsxs)('div', {
                      className: v()(Sa().singlePax, 'singlePax'),
                      children: [
                        (0, C.jsx)('span', {
                          dangerouslySetInnerHTML: {
                            __html: u['flightcredit.singlePax'],
                          },
                        }),
                        (0, C.jsxs)('span', {
                          className: v()(Sa().bold, 'flightcreditValidity'),
                          children: [' ', t],
                        }),
                        '.',
                        (0, C.jsxs)('span', {
                          children: [' ', u['flightcredit.validity']],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, C.jsxs)('div', {
                  className: v()(Sa().infoBanner, 'infoBanner'),
                  children: [
                    (0, C.jsx)('div', {
                      className: v()(Sa().blueInfoIcon, 'blueInfoIcon'),
                      style: { backgroundImage: 'url('.concat(p, ')') },
                    }),
                    (0, C.jsxs)('p', {
                      children: [' ', u['flightcredit.info']],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        Ta = a(84122),
        Da = a.n(Ta);
      function ka() {
        var e = (0, r.useContext)(x.dd),
          n = (0, r.useState)(!0),
          a = n[0],
          s = n[1];
        return (0, C.jsx)('div', {
          children:
            a &&
            (0, C.jsxs)('div', {
              className: Da().carbonOffsetWrapper,
              'data-testid': 'carbonOffsetBanner',
              children: [
                (0, C.jsxs)('picture', {
                  className: Da().carbonOffsetImageContainer,
                  children: [
                    (0, C.jsx)('source', {
                      srcSet: e['carbonOffset.banner.backgroundImage'],
                      media: '(min-width:1200px)',
                    }),
                    (0, C.jsx)('source', {
                      srcSet: e['carbonOffset.banner.backgroundImage'],
                      media: '(min-width:768px)',
                    }),
                    (0, C.jsx)('source', {
                      srcSet: e['carbonOffset.banner.backgroundImage.mobile'],
                      media: '(min-width:320px)',
                    }),
                    (0, C.jsx)('img', {
                      className: Da().carbonOffsetBackgroudImage,
                      onError: function () {
                        return s(!1);
                      },
                      src: e['carbonOffset.banner.backgroundImage'],
                    }),
                  ],
                }),
                (0, C.jsxs)('div', {
                  className: Da().carbonOffsetContentContainer,
                  children: [
                    (0, C.jsx)('div', {
                      className: Da().carbonOffsetHeader,
                      children: e['carbonOffset.banner.header'],
                    }),
                    (0, C.jsx)('div', {
                      className: Da().carbonOffsetBodyContent,
                      children: e['carbonOffset.banner.body'],
                    }),
                    (0, C.jsxs)('div', {
                      className: Da().carbonOffsetCtaContainer,
                      children: [
                        (0, C.jsx)('span', {
                          className: Da().carbonOffsetCtaText,
                          'data-testid': 'carbonRedirect',
                          dangerouslySetInnerHTML: {
                            __html: e['carbonOffset.banner.link'],
                          },
                        }),
                        (0, C.jsx)('span', {
                          children: (0, C.jsx)('img', {
                            className: Da().carbonOffsetIcon,
                            src: e['carbonOffset.banner.external.link.icon'],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
        });
      }
      var ya,
        Ra = a(67425),
        La = a.n(Ra),
        Oa = a(94741),
        Ba = a(84679),
        Fa = a.n(Ba),
        Ma = a(11025),
        Ha = a.n(Ma);
      !(function (e) {
        (e.content25KF = 'content25KF'),
          (e.content50KF = 'content50KF'),
          (e.DoubleKF = 'DoubleKF'),
          (e.ShortHaulKF = 'ShortHaulKF'),
          (e.PremKF = 'PremKF'),
          (e.AdvanceKF = 'AdvanceKF'),
          (e.None = 'None');
      })(ya || (ya = {}));
      var Ea,
        Wa = function (e) {
          var n = e.hidePopup,
            a = e.type,
            s = (0, r.useContext)(x.dd),
            i = (0, r.useState)(ya.None),
            t = i[0],
            o = i[1],
            l = (0, r.useState)(''),
            d = l[0],
            c = l[1];
          return (
            (0, r.useEffect)(
              function () {
                switch (a) {
                  case 'reward1':
                    o(ya.content25KF), c(s['rewards.popup25']);
                    break;
                  case 'reward2':
                    o(ya.content50KF), c(s['rewards.popup50']);
                    break;
                  case 'reward3':
                    o(ya.DoubleKF), c(s['rewards.popupDoubleKF']);
                    break;
                  case 'reward4':
                    o(ya.ShortHaulKF), c(s['rewards.popupShortHaul']);
                    break;
                  case 'reward5':
                    o(ya.PremKF), c(s['rewards.popupPremium']);
                    break;
                  case 'reward6':
                    o(ya.AdvanceKF), c(s['rewards.popupAdvance']);
                    break;
                  default:
                    o(ya.None), c('');
                }
              },
              [t, s, a],
            ),
            (0, C.jsx)(E.H, {
              onClickClose: n,
              width: '640',
              children: (0, C.jsxs)('div', {
                className: Ha().popupContainer,
                children: [
                  (t === ya.content25KF ||
                    t === ya.content50KF ||
                    t === ya.DoubleKF) &&
                    (0, C.jsx)('div', {
                      className: Ha().rectanglePopup,
                      dangerouslySetInnerHTML: { __html: d },
                    }),
                  t === ya.ShortHaulKF &&
                    (0, C.jsx)('div', {
                      className: Ha().rectanglePopupKf,
                      dangerouslySetInnerHTML: { __html: d },
                    }),
                  (t === ya.PremKF || t === ya.AdvanceKF) &&
                    (0, C.jsx)('div', {
                      className: Ha().rectanglePopupPremKf,
                      dangerouslySetInnerHTML: { __html: d },
                    }),
                ],
              }),
            })
          );
        },
        Ka = a(22468),
        Ua = a.n(Ka),
        Ga = function (e) {
          var n = e.hidePopup,
            a = e.type,
            s = (0, r.useContext)(x.dd),
            i = (0, r.useState)(''),
            t = i[0],
            o = i[1];
          return (
            (0, r.useEffect)(
              function () {
                switch (a) {
                  case 'reward1':
                    o(s['rewards.popup.tc.25percentbonus']);
                    break;
                  case 'reward2':
                    o(s['rewards.popup.tc.50percentbonus']);
                    break;
                  case 'reward3':
                    o(s['rewards.popup.tc.DoubleKF']);
                    break;
                  case 'reward4':
                    o(s['rewards.popup.tc.ShortHaul']);
                    break;
                  case 'reward5':
                    o(s['rewards.popup.tc.Premium']);
                    break;
                  case 'reward6':
                    o(s['rewards.popup.tc.AdvanceUpgrade']);
                    break;
                  default:
                    o('');
                }
              },
              [s, a],
            ),
            (0, C.jsx)(E.H, {
              onClickClose: n,
              width: '640',
              children: (0, C.jsx)('div', {
                className: Ua().termsContainer,
                children: (0, C.jsx)('div', {
                  className: Ua().rectanglePopupPremKf,
                  dangerouslySetInnerHTML: { __html: t },
                }),
              }),
            })
          );
        },
        Va = (function () {
          var e = (0, t.Z)(
            i().mark(function e(n) {
              var a, s;
              return i().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          fetch('/managebooking/api/getrewardsandpromocodes', {
                            method: 'POST',
                            headers: {
                              'Content-Type': 'application/json',
                              'csrf-token': oe().get('MBVS_CSRF') || '',
                            },
                            body: JSON.stringify(n),
                          })
                        );
                      case 3:
                        return (a = e.sent), (e.next = 6), a.json();
                      case 6:
                        if (
                          'SUCCESS' !==
                          (null === (s = e.sent) || void 0 === s
                            ? void 0
                            : s.status)
                        ) {
                          e.next = 11;
                          break;
                        }
                        return e.abrupt('return', !0);
                      case 11:
                        return e.abrupt('return', !1);
                      case 12:
                        e.next = 18;
                        break;
                      case 14:
                        return (
                          (e.prev = 14),
                          (e.t0 = e.catch(0)),
                          console.log(e.t0),
                          e.abrupt('return', !1)
                        );
                      case 18:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 14]],
              );
            }),
          );
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        qa = function (e) {
          var n = e.reward,
            a = e.rewardCategory,
            s = e.rewardType,
            o = e.redirectToSubFlow,
            l = e.isTicketed,
            d = e.RewardAvailRequest,
            p = (0, c.Z)(n);
          p.sort(function (e, n) {
            return (
              new Date(e.expiryDate).getTime() -
              new Date(n.expiryDate).getTime()
            );
          });
          var u = (0, r.useRef)(null),
            g = (0, r.useContext)(x.dd),
            m = (0, r.useContext)(x.ko).setPageLoading,
            h = (0, r.useState)(!1),
            _ = h[0],
            f = h[1],
            b = (0, r.useState)(!1),
            N = b[0],
            j = b[1],
            I = (0, r.useState)(!l),
            w = I[0],
            P = I[1],
            S = (0, r.useState)(g['rewards.useRewards.disabled']),
            A = S[0],
            T = S[1],
            D = (function () {
              var e = (0, t.Z)(
                i().mark(function e(n, a, s) {
                  var r;
                  return i().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!s.endsWith('101')) {
                            e.next = 10;
                            break;
                          }
                          if (!d) {
                            e.next = 8;
                            break;
                          }
                          return (
                            m(!0),
                            (r = {
                              customerId: 'xxx',
                              promocodes: [],
                              flights: d.flights,
                              isAvailabilityCheckCall: !0,
                              promocodeToCheckAvailability: s,
                              RewardAvailRequest: d.request,
                            }),
                            (e.next = 6),
                            Va(r)
                          );
                        case 6:
                          e.sent
                            ? (m(!1), o(n, a))
                            : (m(!1), P(!0), T(g['reward.noPEYavailability']));
                        case 8:
                          e.next = 11;
                          break;
                        case 10:
                          o(n, a);
                        case 11:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (n, a, s) {
                return e.apply(this, arguments);
              };
            })();
          return (0, C.jsxs)(C.Fragment, {
            children: [
              (0, C.jsx)('div', {
                className: v()(Fa().borderBottom, 'borderBottom'),
              }),
              (0, C.jsxs)('div', {
                className: Fa().wrapper,
                children: [
                  (0, C.jsxs)('div', {
                    className: Fa().leftContent,
                    children: [
                      (0, C.jsx)('span', {
                        className: Fa().rewardHeading,
                        children: a,
                      }),
                      ' ',
                      (0, C.jsxs)('div', {
                        className: Fa().mobileButton,
                        children: [
                          w
                            ? (0, C.jsx)('div', {
                                ref: u,
                                children: (0, C.jsx)(L.T, {
                                  position: 'Bottom',
                                  message: A,
                                  showOnHover: !1,
                                  children: (0, C.jsx)('button', {
                                    className: v()(
                                      Fa().disabledRewards,
                                      'rewardButton',
                                    ),
                                    children: g['rewards.useRewards'],
                                  }),
                                }),
                              })
                            : (0, C.jsx)('button', {
                                className: v()(Fa().useRewards, 'rewardButton'),
                                onClick: function () {
                                  D(
                                    p[0].rewardNumber,
                                    p[0].rewardType,
                                    p[0].rewardCode,
                                  );
                                },
                                children: g['rewards.useRewards'],
                              }),
                          (0, C.jsxs)('div', {
                            className: Fa().termsWrapper,
                            children: [
                              (0, C.jsxs)('span', {
                                className: Fa().howTo,
                                onClick: function () {
                                  f(!0);
                                },
                                children: [' ', g['rewards.howToUse']],
                              }),
                              (0, C.jsxs)('span', {
                                className: Fa().terms,
                                onClick: function () {
                                  j(!0);
                                },
                                children: [' ', g['rewards.terms']],
                              }),
                            ],
                          }),
                        ],
                      }),
                      p.map(function (e, n) {
                        return (0,
                        C.jsxs)('div', { className: Fa().voucher, children: [' ', (0, C.jsxs)('div', { className: Fa().firstColumn, children: [(0, C.jsxs)('span', { className: Fa().rewardAditionalLabel, children: [' ', g['rewards.rewardNumber']] }), (0, C.jsxs)('span', { className: Fa().rewardAditionalContent, children: [' ', e.rewardNumber, ' '] })] }), (0, C.jsxs)('div', { children: [(0, C.jsxs)('span', { className: Fa().rewardAditionalLabel, children: [' ', g['rewards.expiryDate']] }), (0, C.jsxs)('span', { className: Fa().rewardAditionalContent, children: [' ', e.expiryDate, ' '] })] })] }, n);
                      }),
                    ],
                  }),
                  (0, C.jsxs)('div', {
                    className: Fa().rightContent,
                    children: [
                      w
                        ? (0, C.jsx)('div', {
                            children: (0, C.jsx)(L.T, {
                              position: 'Bottom',
                              message: A,
                              showOnHover: !1,
                              showOnRender: !0,
                              children: (0, C.jsx)('button', {
                                className: v()(
                                  Fa().disabledRewards,
                                  'rewardButton',
                                ),
                                children: g['rewards.useRewards'],
                              }),
                            }),
                          })
                        : (0, C.jsx)('button', {
                            onClick: function () {
                              D(
                                p[0].rewardNumber,
                                p[0].rewardType,
                                p[0].rewardCode,
                              );
                            },
                            className: v()(Fa().useRewards, 'rewardButton'),
                            children: g['rewards.useRewards'],
                          }),
                      (0, C.jsxs)('div', {
                        className: Fa().termsWrapper,
                        children: [
                          (0, C.jsx)('span', {
                            className: Fa().howTo,
                            onClick: function () {
                              f(!0);
                            },
                            children: g['rewards.howToUse'],
                          }),
                          (0, C.jsx)('span', {
                            className: Fa().terms,
                            onClick: function () {
                              j(!0);
                            },
                            children: g['rewards.terms'],
                          }),
                        ],
                      }),
                    ],
                  }),
                  _ &&
                    (0, C.jsx)(Wa, {
                      hidePopup: function () {
                        return f(!1);
                      },
                      type: s,
                    }),
                  N &&
                    (0, C.jsx)(Ga, {
                      hidePopup: function () {
                        return j(!1);
                      },
                      type: s,
                    }),
                ],
              }),
            ],
          });
        },
        Ya = function (e) {
          var n = e.rewards,
            a = e.redirectToSubFlow,
            s = e.isTicketed,
            i = e.RewardAvailRequest,
            t = (0, r.useContext)(x.dd),
            o = new Map([
              [n.qrtrBonous, 'reward1'],
              [n.halfBonous, 'reward2'],
              [n.doubleKF, 'reward3'],
              [n.shrHaul, 'reward4'],
              [n.premiumEcnmy, 'reward5'],
              [n.advUpgrde, 'reward6'],
            ]);
          return n
            ? (0, C.jsxs)('div', {
                children: [
                  n.qrtrBonous &&
                    n.qrtrBonous.length > 0 &&
                    (0, C.jsx)(qa, {
                      reward: n.qrtrBonous,
                      rewardCategory: t['rewards.25percentbonus'],
                      redirectToSubFlow: a,
                      isTicketed: s,
                      rewardType: o.get(n.qrtrBonous),
                      RewardAvailRequest: i,
                    }),
                  n.halfBonous &&
                    n.halfBonous.length > 0 &&
                    (0, C.jsx)(qa, {
                      reward: n.halfBonous,
                      rewardCategory: t['rewards.50percentbonus'],
                      redirectToSubFlow: a,
                      isTicketed: s,
                      rewardType: o.get(n.halfBonous),
                      RewardAvailRequest: i,
                    }),
                  n.doubleKF &&
                    n.doubleKF.length > 0 &&
                    (0, C.jsx)(qa, {
                      reward: n.doubleKF,
                      rewardCategory: t['rewards.DoubleKF'],
                      redirectToSubFlow: a,
                      isTicketed: s,
                      rewardType: o.get(n.doubleKF),
                      RewardAvailRequest: i,
                    }),
                  n.shrHaul &&
                    n.shrHaul.length > 0 &&
                    (0, C.jsx)(qa, {
                      reward: n.shrHaul,
                      rewardCategory: t['rewards.ShortHaul'],
                      redirectToSubFlow: a,
                      isTicketed: s,
                      rewardType: o.get(n.shrHaul),
                      RewardAvailRequest: i,
                    }),
                  n.premiumEcnmy &&
                    n.premiumEcnmy.length > 0 &&
                    (0, C.jsx)(qa, {
                      reward: n.premiumEcnmy,
                      rewardCategory: t['rewards.Premium'],
                      redirectToSubFlow: a,
                      isTicketed: s,
                      rewardType: o.get(n.premiumEcnmy),
                      RewardAvailRequest: i,
                    }),
                  n.advUpgrde &&
                    n.advUpgrde.length > 0 &&
                    (0, C.jsx)(qa, {
                      reward: n.advUpgrde,
                      rewardCategory: t['rewards.AdvanceUpgrade'],
                      redirectToSubFlow: a,
                      isTicketed: s,
                      rewardType: o.get(n.advUpgrde),
                      RewardAvailRequest: i,
                    }),
                ],
              })
            : null;
        },
        Za = function (e) {
          var n = e.rewards,
            a = e.lastname,
            s = e.pnr,
            i = e.isLoading,
            t = e.isTicketed,
            o = e.RewardAvailRequest,
            l = (0, r.useContext)(x.ko).setPageLoading,
            d = n
              ? n.advUpgrde.length +
                n.doubleKF.length +
                n.halfBonous.length +
                n.premiumEcnmy.length +
                n.qrtrBonous.length +
                n.shrHaul.length
              : 0,
            c = (0, r.useState)(!1),
            p = c[0],
            u = c[1],
            g = (0, r.useContext)(x.dd);
          return d > 0 || i
            ? (0, C.jsx)('div', {
                className: La().container,
                children: (0, C.jsxs)('div', {
                  className: v()(La().wrapper, 'wrapper'),
                  children: [
                    (0, C.jsx)('div', {
                      className: v()(
                        La().rewardHead,
                        !p && La().wrapperCollapse,
                      ),
                      children: (0, C.jsxs)(k.Z, {
                        type: 'textRow',
                        showLoadingAnimation: !0,
                        ready: !i,
                        children: [
                          (0, C.jsx)('img', {
                            src: '/assets/manage-booking/icons/rewards.svg',
                            className: v()(La().rewardsIcon, 'rewardsIcon'),
                          }),
                          (0, C.jsxs)('span', {
                            className: v()(La().label, 'importantInfoLabel'),
                            children: [
                              g['rewards.heading'],
                              (0, C.jsx)('div', {
                                className:
                                  3 === d.toString().length
                                    ? La().circleLarge
                                    : La().circle,
                                children: (0, C.jsxs)('span', {
                                  className:
                                    1 === d.toString().length
                                      ? La().circleSpanSingleDigit
                                      : 3 === d.toString().length
                                      ? La().circleSpanLarge
                                      : La().circleSpan,
                                  children: [' ', d, ' '],
                                }),
                              }),
                            ],
                          }),
                          (0, C.jsx)(Oa.O, {
                            toggleVisibility: function () {
                              u(!p);
                            },
                            show: p,
                            hideTextOnMobile: !0,
                          }),
                        ],
                      }),
                    }),
                    p &&
                      n &&
                      (0, C.jsx)(Ya, {
                        rewards: n,
                        redirectToSubFlow: function (e, n) {
                          l(!0),
                            (0, R.E)(
                              {
                                pnr: s,
                                lastName: a,
                                subFlow: y.y.REDEEM_VOUCHER,
                                rewardNumber: e,
                                rewardType: n,
                              },
                              '/mbRedirectToSubFlow.form',
                            );
                        },
                        isTicketed: t,
                        RewardAvailRequest: o,
                      }),
                  ],
                }),
              })
            : null;
        },
        Qa = a(5463),
        za = a.n(Qa),
        Ja = a(51279),
        Xa = a.n(Ja);
      !(function (e) {
        e.AAM = 'ancillary';
      })(Ea || (Ea = {}));
      var $a,
        es = function (e) {
          var n = e.hidePopup,
            a = e.promoCodes,
            s = e.redirectToAncillaryflow,
            i = r.useContext(x.dd),
            t = (0, r.useContext)(x.ko).locale;
          return (0, C.jsx)(Rn.q, {
            onClickClose: n,
            childrenWrapperWidth: 650,
            children: (0, C.jsx)(C.Fragment, {
              children: (0, C.jsxs)('div', {
                className: 'popupWrapper',
                children: [
                  (0, C.jsx)('div', {
                    className: Xa().popupHeading,
                    children: i['promoCode.popup.title'],
                  }),
                  (0, C.jsxs)('div', {
                    className: Xa().promoWrapper,
                    children: [
                      (0, C.jsxs)('div', {
                        className: Xa().wrapperOne,
                        children: [
                          (0, C.jsxs)('div', {
                            className: Xa().promoIconHeadingWrapper,
                            children: [
                              (0, C.jsx)('div', {
                                className: Xa().promoIcon,
                                children: (0, C.jsx)('img', {
                                  src:
                                    (null === a || void 0 === a
                                      ? void 0
                                      : a.promocodeType) === Ea.AAM
                                      ? null === a || void 0 === a
                                        ? void 0
                                        : a.iconURL
                                      : null === a || void 0 === a
                                      ? void 0
                                      : a.promoImage,
                                }),
                              }),
                              (0, C.jsx)('div', {
                                className: Xa().promoHeading,
                                children:
                                  null === a || void 0 === a
                                    ? void 0
                                    : a.promocodeHeading,
                              }),
                            ],
                          }),
                          (0, C.jsx)('div', {
                            className: Xa().promoDescription,
                            dangerouslySetInnerHTML: {
                              __html:
                                null === a || void 0 === a
                                  ? void 0
                                  : a.promocodeDescription,
                            },
                          }),
                          (0, C.jsx)('div', {
                            className: Xa().expiryDate,
                            children:
                              i['promoCode.popup.expiryDate.text'] +
                              ' ' +
                              (0, re.Ld)(
                                null === a || void 0 === a
                                  ? void 0
                                  : a.expirydate,
                                t,
                              ),
                          }),
                        ],
                      }),
                      (0, C.jsxs)('div', {
                        className: Xa().wrapperTwo,
                        children: [
                          (0, C.jsx)('p', {
                            className: Xa().copyCodeText,
                            style:
                              (null === a || void 0 === a
                                ? void 0
                                : a.promocodeType) === Ea.AAM
                                ? { display: 'none' }
                                : {},
                            children:
                              null !== a &&
                              void 0 !== a &&
                              a.thirdPartyCopyCodeDescriptionLiner &&
                              ' ' !==
                                (null === a || void 0 === a
                                  ? void 0
                                  : a.thirdPartyCopyCodeDescriptionLiner)
                                ? null === a || void 0 === a
                                  ? void 0
                                  : a.thirdPartyCopyCodeDescriptionLiner
                                : '',
                          }),
                          (0, C.jsxs)('div', {
                            className:
                              (null === a || void 0 === a
                                ? void 0
                                : a.promocodeType) === Ea.AAM
                                ? Xa().promoCodeNameAam
                                : Xa().promoCodeNameThirdParty,
                            children: [
                              (0, C.jsx)('span', {
                                children:
                                  null === a || void 0 === a
                                    ? void 0
                                    : a.promocodename,
                              }),
                              (null === a || void 0 === a
                                ? void 0
                                : a.promocodeType) !== Ea.AAM &&
                                (0, C.jsx)(be.P, {
                                  classes: { root: Xa().copyButton },
                                  onClick: function () {
                                    return (
                                      (e =
                                        null === a || void 0 === a
                                          ? void 0
                                          : a.promocodename),
                                      void navigator.clipboard.writeText(e)
                                    );
                                    var e;
                                  },
                                  children: i['promoCode.popup.button.copy'],
                                }),
                            ],
                          }),
                          (0, C.jsx)('button', {
                            className:
                              (null === a || void 0 === a
                                ? void 0
                                : a.promocodeType) === Ea.AAM
                                ? Xa().applyButton
                                : Xa().bookTestButton,
                            onClick: function () {
                              var e;
                              (e = a).promocodeType === Ea.AAM
                                ? null === s ||
                                  void 0 === s ||
                                  s(
                                    null === e || void 0 === e
                                      ? void 0
                                      : e.promocodename,
                                    null === e || void 0 === e
                                      ? void 0
                                      : e.ancillaryType,
                                  )
                                : window.open(e.iconURL, '_blank');
                            },
                            children:
                              null === a || void 0 === a ? void 0 : a.ctaValue,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, C.jsx)('div', {
                    className: Xa().termsandconditions,
                    dangerouslySetInnerHTML: {
                      __html:
                        null !== a && void 0 !== a && a.termsandconditions
                          ? null === a || void 0 === a
                            ? void 0
                            : a.termsandconditions
                          : '',
                    },
                  }),
                ],
              }),
            }),
          });
        },
        ns = a(96486),
        as = {
          promocodeHeading: '',
          promocodeDescription: '',
          promocodeEligibilityDesc: '',
          iconURL: '',
          promocodename: '',
          expirydate: '',
          termsandconditions: '',
          ctaValue: '',
          promocodeType: '',
          userType: '',
          kfTier: '',
          popularTag: '',
          termsClicked: !1,
          ancillaryType: '',
          promoImage: '',
        };
      !(function (e) {
        e.AAM = 'ancillary';
      })($a || ($a = {}));
      var ss,
        is,
        rs,
        ts,
        os,
        ls = function (e) {
          var n,
            a,
            s,
            i,
            t,
            o,
            l = (0, r.useContext)(x.dd),
            d = (0, r.useContext)(x.ko).locale,
            p =
              null === (n = e.promoCodeDetails) || void 0 === n
                ? void 0
                : n.AAMPromocode.concat(
                    null === (a = e.promoCodeDetails) || void 0 === a
                      ? void 0
                      : a.thirdPartyPromocode,
                  ),
            u = function (e, n) {
              return null === e || void 0 === e
                ? void 0
                : e.filter(function (e) {
                    return e.popularTag === n;
                  });
            },
            g = function (e) {
              return null === e || void 0 === e
                ? void 0
                : e.sort(function (e, n) {
                    return (
                      new Date(e.expirydate).getTime() -
                      new Date(n.expirydate).getTime()
                    );
                  });
            },
            m = u(
              null === (s = e.promoCodeDetails) || void 0 === s
                ? void 0
                : s.AAMPromocode,
              'true',
            ),
            h = u(
              null === (i = e.promoCodeDetails) || void 0 === i
                ? void 0
                : i.AAMPromocode,
              'false',
            ),
            _ = g(m),
            f = g(h),
            b = u(
              null === (t = e.promoCodeDetails) || void 0 === t
                ? void 0
                : t.thirdPartyPromocode,
              'true',
            ),
            N = u(
              null === (o = e.promoCodeDetails) || void 0 === o
                ? void 0
                : o.thirdPartyPromocode,
              'false',
            ),
            j = g(b),
            I = g(N),
            w = [].concat(
              (0, c.Z)(_ || []),
              (0, c.Z)(j || []),
              (0, c.Z)(f || []),
              (0, c.Z)(I || []),
            ),
            P =
              !!/Mobile Safari|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(
                navigator.userAgent,
              ),
            S = P ? 3 : 6,
            A = (0, r.useState)(!1),
            T = A[0],
            D = A[1],
            k = (0, r.useState)(as),
            y = k[0],
            R = k[1],
            L = (0, r.useState)(!1),
            O = L[0],
            B = L[1],
            F = (0, r.useState)((0, ns.slice)(w, 0, S)),
            M = F[0],
            H = F[1],
            E = (0, r.useState)(S),
            W = E[0],
            K = E[1],
            U = (0, r.useState)(0),
            G = U[0],
            V = U[1],
            q = function (e) {
              D(!T), R(e), void 0 === e.termsClicked && (e.termsClicked = !0);
            },
            Y = function (n) {
              if (void 0 === n.termsClicked) return q(n), !1;
              (null === n || void 0 === n ? void 0 : n.promocodeType) === $a.AAM
                ? e.redirectToAncillaryflow(
                    null === n || void 0 === n ? void 0 : n.promocodename,
                    null === n || void 0 === n ? void 0 : n.ancillaryType,
                  )
                : window.open(
                    null === n || void 0 === n ? void 0 : n.iconURL,
                    '_blank',
                  );
            };
          return (
            (0, r.useEffect)(
              function () {
                ((P &&
                  Number(null === p || void 0 === p ? void 0 : p.length) > 3) ||
                  Number(null === p || void 0 === p ? void 0 : p.length) > 6) &&
                  B(!0);
              },
              [P, null === p || void 0 === p ? void 0 : p.length],
            ),
            (0, C.jsxs)(C.Fragment, {
              children: [
                null === M || void 0 === M
                  ? void 0
                  : M.map(function (e, n) {
                      return (0, C.jsx)(
                        'div',
                        {
                          className: v()(za().container, 'container'),
                          children: (0, C.jsxs)('div', {
                            className: za().promoContainer,
                            children: [
                              'true' ===
                                (null === e || void 0 === e
                                  ? void 0
                                  : e.popularTag) &&
                                (0, C.jsx)('div', {
                                  className: za().promoTag,
                                  children: l['promo.popularTag'],
                                }),
                              (0, C.jsx)('div', {
                                className: za().promoWrapper,
                                children: (0, C.jsxs)('div', {
                                  className: za().wrapperOne,
                                  children: [
                                    (0, C.jsxs)('div', {
                                      className: za().promoTitle,
                                      children: [
                                        (0, C.jsx)('img', {
                                          src:
                                            (null === e || void 0 === e
                                              ? void 0
                                              : e.promocodeType) === $a.AAM
                                              ? null === e || void 0 === e
                                                ? void 0
                                                : e.iconURL
                                              : null === e || void 0 === e
                                              ? void 0
                                              : e.promoImage,
                                          className: v()(
                                            za().promoIcon,
                                            'promoIcon',
                                          ),
                                          alt: l['promo.promoIcon.altText'],
                                        }),
                                        (0, C.jsx)('div', {
                                          className: za().promoHeading,
                                          children:
                                            null === e || void 0 === e
                                              ? void 0
                                              : e.promocodeHeading,
                                        }),
                                      ],
                                    }),
                                    (0, C.jsx)('div', {
                                      className: za().promoEligibility,
                                      dangerouslySetInnerHTML: {
                                        __html:
                                          null === e || void 0 === e
                                            ? void 0
                                            : e.promocodeEligibilityDesc,
                                      },
                                    }),
                                    (0, C.jsx)('div', {
                                      className: za().copyCodeText,
                                      style:
                                        (null === e || void 0 === e
                                          ? void 0
                                          : e.promocodeType) === $a.AAM
                                          ? { display: 'none' }
                                          : {},
                                      children:
                                        null !== e &&
                                        void 0 !== e &&
                                        e.thirdPartyCopyCodeDescriptionLiner &&
                                        ' ' !==
                                          (null === e || void 0 === e
                                            ? void 0
                                            : e.thirdPartyCopyCodeDescriptionLiner)
                                          ? null === e || void 0 === e
                                            ? void 0
                                            : e.thirdPartyCopyCodeDescriptionLiner
                                          : '',
                                    }),
                                    (0, C.jsxs)('div', {
                                      className:
                                        (null === e || void 0 === e
                                          ? void 0
                                          : e.promocodeType) !== $a.AAM
                                          ? za().promoNameThirdParty
                                          : za().promoNameAam,
                                      children: [
                                        (0, C.jsx)('div', {
                                          className: za().promoCodeName,
                                          children:
                                            null === e || void 0 === e
                                              ? void 0
                                              : e.promocodename,
                                        }),
                                        (null === e || void 0 === e
                                          ? void 0
                                          : e.promocodeType) !== $a.AAM &&
                                          (0, C.jsx)(be.P, {
                                            classes: { root: za().copyButton },
                                            onClick: function () {
                                              return (
                                                (n =
                                                  null === e || void 0 === e
                                                    ? void 0
                                                    : e.promocodename),
                                                void navigator.clipboard.writeText(
                                                  n,
                                                )
                                              );
                                              var n;
                                            },
                                            children:
                                              l['promoCode.popup.button.copy'],
                                          }),
                                      ],
                                    }),
                                    (0, C.jsxs)('div', {
                                      className: za().promoExpiry,
                                      children: [
                                        l['promoCode.popup.expiryDate.text'],
                                        ' ',
                                        (0, C.jsx)('span', {
                                          children: (0, re.Ld)(
                                            null === e || void 0 === e
                                              ? void 0
                                              : e.expirydate,
                                            d,
                                          ),
                                        }),
                                      ],
                                    }),
                                    (0, C.jsxs)('div', {
                                      className: za().promoTermsWrapper,
                                      children: [
                                        (0, C.jsx)('div', {
                                          className: za().promoTerms,
                                          children: (0, C.jsx)('a', {
                                            className: v()(
                                              za().promoTermsLink,
                                              'promoTermsLink',
                                            ),
                                            onClick: function () {
                                              return q(e);
                                            },
                                            children:
                                              l['promoCode.popup.title'],
                                          }),
                                        }),
                                        (0, C.jsx)(be.P, {
                                          classes:
                                            (null === e || void 0 === e
                                              ? void 0
                                              : e.promocodeType) === $a.AAM
                                              ? {
                                                  root: v()(
                                                    za().ctaButton,
                                                    za().pcHidden,
                                                  ),
                                                }
                                              : {
                                                  root: v()(
                                                    za().bookTestButton,
                                                    za().pcHidden,
                                                  ),
                                                },
                                          onClick: function () {
                                            return Y(e);
                                          },
                                          children:
                                            null === e || void 0 === e
                                              ? void 0
                                              : e.ctaValue,
                                        }),
                                      ],
                                    }),
                                    (0, C.jsx)('div', {
                                      className: v()(
                                        za().wrapperTwo,
                                        za().mobileHidden,
                                      ),
                                      children: (0, C.jsx)(be.P, {
                                        classes:
                                          (null === e || void 0 === e
                                            ? void 0
                                            : e.promocodeType) === $a.AAM
                                            ? { root: za().ctaButton }
                                            : { root: za().bookTestButton },
                                        onClick: function () {
                                          return Y(e);
                                        },
                                        children:
                                          null === e || void 0 === e
                                            ? void 0
                                            : e.ctaValue,
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        },
                        n,
                      );
                    }),
                T &&
                  (0, C.jsx)(es, {
                    hidePopup: function () {
                      return D(!T);
                    },
                    promoCodes: y,
                    redirectToAncillaryflow: e.redirectToAncillaryflow,
                  }),
                O &&
                  (0, C.jsx)(be.P, {
                    classes: { root: za().loadMoreButton },
                    onClick: function () {
                      V(G + 1);
                      var e = G >= 2 ? W : W + S,
                        n =
                          e <=
                          Number(
                            null === w || void 0 === w ? void 0 : w.length,
                          ) -
                            1,
                        a =
                          G >= 2
                            ? (0, ns.concat)(M, (0, ns.slice)(w, W))
                            : (0, ns.concat)(M, (0, ns.slice)(w, W, e));
                      K(e), H(a), B(n), G >= 2 && B(!1);
                    },
                    children:
                      2 === G ? l['promo.loadall'] : l['promo.loadmore'],
                  }),
              ],
            })
          );
        },
        ds = (function () {
          var e = (0, t.Z)(
            i().mark(function e(n) {
              var a, s;
              return i().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          fetch('/managebooking/api/getrewardsandpromocodes', {
                            method: 'POST',
                            headers: {
                              'Content-Type': 'application/json',
                              'csrf-token': oe().get('MBVS_CSRF') || '',
                            },
                            body: JSON.stringify(n),
                          })
                        );
                      case 3:
                        return (a = e.sent), (e.next = 6), a.json();
                      case 6:
                        return (s = e.sent), e.abrupt('return', s);
                      case 10:
                        return (
                          (e.prev = 10),
                          (e.t0 = e.catch(0)),
                          console.log(e.t0),
                          e.abrupt('return', void 0)
                        );
                      case 14:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 10]],
              );
            }),
          );
          return function (n) {
            return e.apply(this, arguments);
          };
        })();
      a(84691);
      !(function (e) {
        (e.SuccessCode = '200'),
          (e.Success = 'SUCCESS'),
          (e.Failure = 'FAILURE');
      })(ss || (ss = {})),
        (function (e) {
          (e.Seat = 'Seat'), (e.Baggage = 'Xbag'), (e.Upgrade = 'Upgrade');
        })(is || (is = {})),
        (function (e) {
          (e.Ancillary = 'ancillary'),
            (e.AirFare = 'air_fare'),
            (e.AncillaryAirFare = 'air_fare_and_ancillary');
        })(rs || (rs = {})),
        (function (e) {
          (e.AIR_FARE_ERROR = 'AIR_FARE_ERROR'),
            (e.NOT_AVAILABLE = 'NOT_AVAILABLE'),
            (e.PROMO_EXPIRED = 'PROMO_EXPIRED'),
            (e.INELIGIBLE_ITINERARY = 'INELIGIBLE_ITINERARY'),
            (e.INELIGIBLE_TRIPTYPE = 'INELIGIBLE_TRIPTYPE'),
            (e.INELIGIBLE_CABIN = 'INELIGIBLE_CABIN'),
            (e.INELIGIBLE_TRIPDATES = 'INELIGIBLE_TRIPDATES'),
            (e.INELIGIBLE_KF = 'INELIGIBLE_KF');
        })(ts || (ts = {})),
        (function (e) {
          (e.KF = 'KF'), (e.NRU = 'NRU');
        })(os || (os = {}));
      var cs,
        ps = function (e) {
          var n = e.promoCode,
            a = e.handleInputChange,
            s = e.totalPromos,
            o = e.total,
            l = e.rewardRequest,
            d = e.redirectToAncillaryflow,
            c = (0, r.useContext)(x.dd),
            p = {
              promocodeHeading: '',
              promocodeDescription: '',
              promocodeEligibilityDesc: '',
              iconURL: '',
              promocodename: '',
              expirydate: '',
              termsandconditions: '',
              ctaValue: '',
              promocodeType: '',
              userType: '',
              kfTier: '',
              popularTag: '',
              ancillaryType: '',
              promoImage: '',
            },
            u = (0, r.useState)(''),
            g = u[0],
            m = u[1],
            h = (0, r.useState)(!1),
            _ = h[0],
            f = h[1],
            b = (0, r.useState)(!1),
            N = b[0],
            j = b[1],
            I = (0, r.useState)(p),
            w = I[0],
            P = I[1],
            S = (function () {
              var e = (0, t.Z)(
                i().mark(function e(n) {
                  var a,
                    s,
                    r,
                    t,
                    o,
                    d,
                    c,
                    u,
                    g,
                    h,
                    v,
                    _,
                    x,
                    C,
                    b,
                    N,
                    I,
                    w,
                    S,
                    A,
                    T,
                    D,
                    k,
                    y,
                    R,
                    L,
                    O,
                    B,
                    F;
                  return i().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (void 0 == n) {
                            e.next = 9;
                            break;
                          }
                          return (
                            (D = {
                              locale:
                                null !==
                                  (a =
                                    null === l ||
                                    void 0 === l ||
                                    null === (s = l.promoCodeRequest) ||
                                    void 0 === s
                                      ? void 0
                                      : s.locale) && void 0 !== a
                                  ? a
                                  : ' ',
                              origin:
                                null !==
                                  (r =
                                    null === l ||
                                    void 0 === l ||
                                    null === (t = l.promoCodeRequest) ||
                                    void 0 === t
                                      ? void 0
                                      : t.origin) && void 0 !== r
                                  ? r
                                  : ' ',
                              destination:
                                null !==
                                  (o =
                                    null === l ||
                                    void 0 === l ||
                                    null === (d = l.promoCodeRequest) ||
                                    void 0 === d
                                      ? void 0
                                      : d.destination) && void 0 !== o
                                  ? o
                                  : ' ',
                              dateStart:
                                null !==
                                  (c =
                                    null === l ||
                                    void 0 === l ||
                                    null === (u = l.promoCodeRequest) ||
                                    void 0 === u
                                      ? void 0
                                      : u.dateStart) && void 0 !== c
                                  ? c
                                  : ' ',
                              dateEnd:
                                null !==
                                  (g =
                                    null === l ||
                                    void 0 === l ||
                                    null === (h = l.promoCodeRequest) ||
                                    void 0 === h
                                      ? void 0
                                      : h.dateEnd) && void 0 !== g
                                  ? g
                                  : ' ',
                              userType:
                                null !==
                                  (v =
                                    null === l ||
                                    void 0 === l ||
                                    null === (_ = l.promoCodeRequest) ||
                                    void 0 === _
                                      ? void 0
                                      : _.userType) && void 0 !== v
                                  ? v
                                  : ' ',
                              travelType:
                                null !==
                                  (x =
                                    null === l ||
                                    void 0 === l ||
                                    null === (C = l.promoCodeRequest) ||
                                    void 0 === C
                                      ? void 0
                                      : C.travelType) && void 0 !== x
                                  ? x
                                  : ' ',
                              cabinClass:
                                null !==
                                  (b =
                                    null === l ||
                                    void 0 === l ||
                                    null === (N = l.promoCodeRequest) ||
                                    void 0 === N
                                      ? void 0
                                      : N.cabinClass) && void 0 !== b
                                  ? b
                                  : ' ',
                              promoCode: n,
                              kfTierCode:
                                null !==
                                  (I =
                                    null === l ||
                                    void 0 === l ||
                                    null === (w = l.promoCodeRequest) ||
                                    void 0 === w
                                      ? void 0
                                      : w.kfTierCode) && void 0 !== I
                                  ? I
                                  : ' ',
                              principleKFnumber:
                                null !==
                                  (S =
                                    null === l ||
                                    void 0 === l ||
                                    null === (A = l.promoCodeRequest) ||
                                    void 0 === A
                                      ? void 0
                                      : A.principleKFnumber) && void 0 !== S
                                  ? S
                                  : '',
                              isPrincipleKF:
                                null === l ||
                                void 0 === l ||
                                null === (T = l.promoCodeRequest) ||
                                void 0 === T
                                  ? void 0
                                  : T.isPrincipleKF,
                            }),
                            (k = {
                              promoCodeRequest: D,
                              isDirectPromocodeCall: !0,
                            }),
                            (e.next = 5),
                            ds(k)
                          );
                        case 5:
                          if (
                            void 0 ==
                            (null === (y = e.sent) || void 0 === y
                              ? void 0
                              : y.directPromocodeResponse)
                          ) {
                            e.next = 9;
                            break;
                          }
                          return (
                            null !== (R = y.directPromocodeResponse) &&
                            void 0 !== R &&
                            R.isValidAncillaryPromo
                              ? (f(!1),
                                m(' '),
                                j(!0),
                                P(
                                  null !==
                                    (B =
                                      null ===
                                        (F = y.directPromocodeResponse) ||
                                      void 0 === F
                                        ? void 0
                                        : F.applicablePromoCodes) &&
                                    void 0 !== B
                                    ? B
                                    : p,
                                ))
                              : (f(!0),
                                m(
                                  null !== (L = y.directPromocodeResponse) &&
                                    void 0 !== L &&
                                    L.errorMsg
                                    ? null ===
                                        (O = y.directPromocodeResponse) ||
                                      void 0 === O
                                      ? void 0
                                      : O.errorMsg
                                    : ' ',
                                )),
                            e.abrupt('return', y)
                          );
                        case 9:
                          return e.abrupt('return', { status: ss.Failure });
                        case 10:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })();
          return (0, C.jsxs)(C.Fragment, {
            children: [
              (0, C.jsx)('div', {
                className: v()(
                  La().label,
                  0 === o && 0 === s ? La().popupHeading : La().promoDesc,
                ),
                children: c['promo.noRewardsNoPromo.popUp.description'],
              }),
              (0, C.jsxs)('div', {
                className: La().promoWrapper,
                children: [
                  (0, C.jsx)(Zn.W, {
                    isValid: !_,
                    label: c['promo.promoInput.label'],
                    inputValue: n,
                    background: 'grey',
                    onChange: a,
                    classes: { wrapper: La().inputBox },
                  }),
                  _
                    ? (0, C.jsx)('div', {
                        className: v()(La().errorMessage, La().pcHidden),
                        children: g,
                      })
                    : null,
                  (0, C.jsx)(be.P, {
                    onClick: function () {
                      return S(n);
                    },
                    classes: {
                      root:
                        0 === o && 0 === s ? La().applyButton : La().addButton,
                    },
                    children: c.add,
                  }),
                ],
              }),
              _
                ? (0, C.jsx)('div', {
                    className: v()(La().errorMessage, La().mobileHidden),
                    children: g,
                  })
                : null,
              N &&
                (0, C.jsx)(es, {
                  hidePopup: function () {
                    return j(!N);
                  },
                  promoCodes: w,
                  redirectToAncillaryflow: d,
                }),
            ],
          });
        };
      !(function (e) {
        (e.Seat = 'Seat'), (e.Baggage = 'Xbag'), (e.Upgrade = 'Upgrade');
      })(cs || (cs = {}));
      var us = function (e) {
          var n,
            a = e.rewards,
            s = e.lastname,
            i = e.pnr,
            t = e.isLoading,
            l = e.isTicketed,
            d = e.promoCodes,
            c = e.rewardRequest,
            p = e.rewardAvailRequest,
            u = e.salt;
          !(function (e) {
            (e.REWARDS = 'REWARDS'), (e.PROMOCODE = 'PROMOCODE');
          })(n || (n = {}));
          var g,
            m,
            h,
            _,
            f = (0, r.useContext)(x.ko),
            b = f.locale,
            N = f.setPageLoading,
            j = r.useState(n.REWARDS),
            I = (0, o.Z)(j, 2),
            w = I[0],
            P = I[1],
            S = function (e) {
              P(e);
            },
            A = a
              ? a.advUpgrde.length +
                a.doubleKF.length +
                a.halfBonous.length +
                a.premiumEcnmy.length +
                a.qrtrBonous.length +
                a.shrHaul.length
              : 0,
            T = 0;
          d &&
            (d.AAMPromocode || d.thirdPartyPromocode) &&
            (Number(
              null === (g = d.AAMPromocode) || void 0 === g ? void 0 : g.length,
            ) > 0 ||
              Number(
                null === (m = d.thirdPartyPromocode) || void 0 === m
                  ? void 0
                  : m.length,
              ) > 0) &&
            (T =
              Number(
                null === (h = d.AAMPromocode) || void 0 === h
                  ? void 0
                  : h.length,
              ) +
              Number(
                null === (_ = d.thirdPartyPromocode) || void 0 === _
                  ? void 0
                  : _.length,
              ));
          var D = (0, r.useState)(!1),
            L = D[0],
            O = D[1],
            B = (0, r.useState)(''),
            F = B[0],
            M = B[1],
            H = function (e) {
              M(e.target.value);
            },
            E = (0, r.useState)(!1),
            W = E[0],
            K = E[1],
            U = function () {
              K(!W), M('');
            },
            G = (0, r.useState)(!1),
            V = G[0],
            q = G[1],
            Y = (0, r.useContext)(x.dd),
            Z = function (e, n) {
              N(!0),
                n === cs.Seat
                  ? (0, R.E)(
                      {
                        pnr: i,
                        lastName: s,
                        flowType: y.y.CIB_SEAT_SELECTION,
                        promoCode: e,
                        applyPromoCode: !0,
                        salt: u,
                        locale: b,
                      },
                      Y.seatUrl,
                    )
                  : (0, R.E)(
                      {
                        pnr: i,
                        lastName: s,
                        flowType: y.y.CIB_SEAT_SELECTION,
                        promoCode: e,
                        applyPromoCode: !0,
                      },
                      Y.baggageUrl,
                    );
            };
          return A > 0 || t
            ? (0, C.jsx)('div', {
                className: La().container,
                children: (0, C.jsxs)('div', {
                  className: v()(La().wrapper, 'wrapper'),
                  children: [
                    (0, C.jsx)('div', {
                      className: v()(
                        La().rewardHead,
                        !L && La().wrapperCollapse,
                      ),
                      children: (0, C.jsxs)(k.Z, {
                        type: 'textRow',
                        showLoadingAnimation: !0,
                        ready: !t,
                        children: [
                          (0, C.jsx)('img', {
                            src: '/assets/manage-booking/icons/promocode.svg',
                            className: v()(La().rewardsIcon, 'rewardsIcon'),
                          }),
                          (0, C.jsxs)('span', {
                            className: v()(La().label, 'importantInfoLabel'),
                            children: [
                              A > 0 && 0 === T
                                ? Y['promo.haveRewardsNoPromo.description']
                                : Y['promo.haveRewardsHavePromo.description'],
                              (0, C.jsx)('div', {
                                className:
                                  A + T > 9
                                    ? La().doubleDigitCircle
                                    : La().singleDigitCircle,
                                children: (0, C.jsx)('span', {
                                  className: La().circleSpan,
                                  children: A + T,
                                }),
                              }),
                            ],
                          }),
                          (0, C.jsx)(Oa.O, {
                            toggleVisibility: function () {
                              O(!L);
                            },
                            show: L,
                            hideTextOnMobile: !0,
                          }),
                        ],
                      }),
                    }),
                    L &&
                      (0, C.jsxs)('div', {
                        className: v()(La().tabContainer, 'tabContainer'),
                        children: [
                          (0, C.jsx)('div', {
                            className:
                              w === n.REWARDS
                                ? v()(La().tabActive, 'taTabActive')
                                : v()(La().tab, 'taTab'),
                            onClick: function () {
                              return S(n.REWARDS);
                            },
                            children: (0, C.jsxs)('div', {
                              className: v()(La().tabInner, 'taTabInner'),
                              children: [Y['promo.rewards'], ' (', A, ')'],
                            }),
                          }),
                          (0, C.jsx)('div', {
                            className:
                              w === n.PROMOCODE
                                ? v()(La().tabActive, 'taTabActive')
                                : v()(La().tab, 'taTab'),
                            onClick: function () {
                              return S(n.PROMOCODE);
                            },
                            children: (0, C.jsxs)('div', {
                              className: v()(La().tabInner, 'taTabInner'),
                              children: [Y['promo.promocode'], ' (', T, ')'],
                            }),
                          }),
                        ],
                      }),
                    L &&
                      a &&
                      w === n.REWARDS &&
                      (0, C.jsx)(Ya, {
                        rewards: a,
                        redirectToSubFlow: function (e, n) {
                          N(!0),
                            (0, R.E)(
                              {
                                pnr: i,
                                lastName: s,
                                subFlow: y.y.REDEEM_VOUCHER,
                                rewardNumber: e,
                                rewardType: n,
                              },
                              '/mbRedirectToSubFlow.form',
                            );
                        },
                        isTicketed: l,
                        RewardAvailRequest: p,
                      }),
                    L &&
                      T > 0 &&
                      w === n.PROMOCODE &&
                      (0, C.jsx)('div', {
                        className: La().promoCodeContainer,
                        children: (0, C.jsx)(ls, {
                          promoCodeDetails: d,
                          redirectToAncillaryflow: Z,
                        }),
                      }),
                    L &&
                      w === n.PROMOCODE &&
                      (0, C.jsx)('div', {
                        className: v()(La().promoContainer, La().mobileHidden),
                        children: (0, C.jsx)(ps, {
                          promoCode: F,
                          handleInputChange: H,
                          rewardRequest: c,
                          redirectToAncillaryflow: Z,
                        }),
                      }),
                    L &&
                      w === n.PROMOCODE &&
                      (0, C.jsxs)(C.Fragment, {
                        children: [
                          (0, C.jsx)('div', {
                            className: v()(
                              La().promoHeadWrapper,
                              La().wrapperCollapse,
                              La().pcHidden,
                            ),
                            children: (0, C.jsx)(k.Z, {
                              type: 'textRow',
                              showLoadingAnimation: !0,
                              ready: !t,
                              children: (0, C.jsx)('div', {
                                className: T
                                  ? La().promoInformation
                                  : La().promoInfo,
                                children: (0, C.jsx)('span', {
                                  onClick: U,
                                  children: Y['promo.popUp.description'],
                                }),
                              }),
                            }),
                          }),
                          W &&
                            (0, C.jsx)(Rn.q, {
                              classes: { modalWrapper: La().popupWrapper },
                              onClickClose: U,
                              childrenWrapperWidth: 490,
                              children: (0, C.jsx)(ps, {
                                promoCode: F,
                                handleInputChange: H,
                                rewardRequest: c,
                                redirectToAncillaryflow: Z,
                              }),
                            }),
                        ],
                      }),
                  ],
                }),
              })
            : 0 === T && 0 === A
            ? (0, C.jsx)('div', {
                className: La().container,
                children: (0, C.jsxs)('div', {
                  className: v()(La().wrapper, 'wrapper'),
                  children: [
                    (0, C.jsx)('div', {
                      className: v()(La().promoHead, La().wrapperCollapse),
                      children: (0, C.jsxs)(k.Z, {
                        type: 'textRow',
                        showLoadingAnimation: !0,
                        ready: !t,
                        children: [
                          (0, C.jsx)('img', {
                            src: '/assets/manage-booking/icons/promocode.svg',
                            className: v()(La().promoIcon, 'promoIcon'),
                          }),
                          (0, C.jsxs)('span', {
                            className: v()(La().noRewardInfo, 'noRewardInfo'),
                            children: [
                              Y['promo.noRewardsNoPromo.description'],
                              ' ',
                              (0, C.jsx)('span', {
                                onClick: U,
                                children: Y['promo.here'],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    W &&
                      (0, C.jsx)(Rn.q, {
                        classes: { modalWrapper: La().popupWrapper },
                        onClickClose: U,
                        childrenWrapperWidth: 490,
                        children: (0, C.jsx)(ps, {
                          promoCode: F,
                          handleInputChange: H,
                          totalPromos: T,
                          total: A,
                          rewardRequest: c,
                          redirectToAncillaryflow: Z,
                        }),
                      }),
                  ],
                }),
              })
            : T > 0 && 0 === A
            ? (0, C.jsx)('div', {
                className: La().container,
                children: (0, C.jsxs)('div', {
                  className: v()(La().wrapper, 'wrapper'),
                  children: [
                    (0, C.jsx)('div', {
                      className: v()(
                        La().rewardHead,
                        !L && La().wrapperCollapse,
                      ),
                      children: (0, C.jsxs)(k.Z, {
                        type: 'textRow',
                        showLoadingAnimation: !0,
                        ready: !t,
                        children: [
                          (0, C.jsx)('img', {
                            src: '/assets/manage-booking/icons/promocode.svg',
                            className: v()(La().rewardsIcon, 'rewardsIcon'),
                          }),
                          (0, C.jsxs)('span', {
                            className: v()(La().label, 'importantInfoLabel'),
                            children: [
                              Y['promo.noRewardsHavePromo.description'],
                              (0, C.jsx)('div', {
                                className:
                                  A + T > 9
                                    ? La().doubleDigitCircle
                                    : La().singleDigitCircle,
                                children: (0, C.jsx)('span', {
                                  className: La().circleSpan,
                                  children: T,
                                }),
                              }),
                            ],
                          }),
                          (0, C.jsx)(Oa.O, {
                            toggleVisibility: function () {
                              q(!V);
                            },
                            show: V,
                            hideTextOnMobile: !0,
                          }),
                        ],
                      }),
                    }),
                    V &&
                      T > 0 &&
                      (0, C.jsx)('div', {
                        className: La().promoCodeContainer,
                        children: (0, C.jsx)(ls, {
                          promoCodeDetails: d,
                          redirectToAncillaryflow: Z,
                        }),
                      }),
                    V &&
                      (0, C.jsx)('div', {
                        className: v()(La().promoContainer, La().mobileHidden),
                        children: (0, C.jsx)(ps, {
                          promoCode: F,
                          handleInputChange: H,
                          rewardRequest: c,
                          redirectToAncillaryflow: Z,
                        }),
                      }),
                    V &&
                      (0, C.jsxs)(C.Fragment, {
                        children: [
                          (0, C.jsx)('div', {
                            className: v()(
                              La().promoHeadWrapper,
                              La().wrapperCollapse,
                              La().pcHidden,
                            ),
                            children: (0, C.jsx)(k.Z, {
                              type: 'textRow',
                              showLoadingAnimation: !0,
                              ready: !t,
                              children: (0, C.jsx)('div', {
                                className: T
                                  ? La().promoInformation
                                  : La().promoInfo,
                                children: (0, C.jsx)('span', {
                                  onClick: U,
                                  children: Y['promo.popUp.description'],
                                }),
                              }),
                            }),
                          }),
                          W &&
                            (0, C.jsx)(Rn.q, {
                              classes: { modalWrapper: La().popupWrapper },
                              onClickClose: U,
                              childrenWrapperWidth: 490,
                              children: (0, C.jsx)(ps, {
                                promoCode: F,
                                handleInputChange: H,
                                rewardRequest: c,
                                redirectToAncillaryflow: Z,
                              }),
                            }),
                        ],
                      }),
                  ],
                }),
              })
            : null;
        },
        gs = a(86447),
        ms = a.n(gs),
        hs = function (e) {
          var n,
            a,
            s = (0, r.useContext)(x.dd),
            i = e.redirectToSubFlow,
            t = e.baggageMessage,
            o =
              null !== (n = null === t || void 0 === t ? void 0 : t[0]) &&
              void 0 !== n
                ? n
                : '',
            l =
              null !== (a = null === t || void 0 === t ? void 0 : t[1]) &&
              void 0 !== a
                ? a
                : '',
            d = '/saar5/images/' + 'MB-banner-last-minute-baggage.jpg';
          return (0, C.jsx)('div', {
            className: v()(ms().wrapper, 'additionalBaggageBanner'),
            children: (0, C.jsxs)('div', {
              className: v()(ms().bannerContent),
              children: [
                (0, C.jsx)('div', {
                  className: v()(ms().bannerImage),
                  style: { backgroundImage: 'url('.concat(d, ')') },
                }),
                (0, C.jsxs)('div', {
                  className: v()(ms().cardDetails),
                  children: [
                    (0, C.jsx)('div', {
                      className: v()(ms().cardHeading),
                      dangerouslySetInnerHTML: { __html: o },
                    }),
                    (0, C.jsxs)('div', {
                      className: v()(ms().cardDescription),
                      children: [
                        (0, C.jsx)('span', { children: l }),
                        ' ',
                        (0, C.jsx)('a', {
                          className: v()(ms().cardLink),
                          onClick: function (e) {
                            return i(y.y.EXCESS_BAGGAGE, e);
                          },
                          children: s['additionalbagggage.message.here'],
                        }),
                        ' ',
                        (0, C.jsx)('span', {
                          children: s['additionalbagggage.message.scroll'],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        vs = a(38274);
      function _s(e, n) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          n &&
            (s = s.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            a.push.apply(a, s);
        }
        return a;
      }
      function fs(e) {
        for (var n = 1; n < arguments.length; n++) {
          var a = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? _s(Object(a), !0).forEach(function (n) {
                (0, d.Z)(e, n, a[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : _s(Object(a)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(a, n),
                );
              });
        }
        return e;
      }
      var xs;
      function Cs(e) {
        var n,
          a,
          s,
          o,
          l,
          d,
          p = e.officeId,
          g = e.getDocumentRequest,
          m = e.passengerList,
          h = e.flights,
          _ = e.bannerContent,
          f = e.passengerAndPreference,
          j = e.odMessages,
          I = e.secureFareData,
          w = e.flightActionData,
          P = e.pnr,
          S = e.lastName,
          A = e.kfSignUpBannerContent,
          T = e.scheduleChange,
          D = e.aciResponse,
          y = e.redirectToSubFlow,
          R = e.kfInformationBannerData,
          L = e.showSpinner,
          O = e.farecondition,
          B = e.getFareConditionData,
          F = e.fareConditionRequest,
          M = e.fareNotesConditionRequest,
          H = e.formattedFullFareConditionData,
          E = e.countryList,
          W = e.isFromSelectMeal,
          K = e.adultCount,
          U = e.asyncInProgress,
          G = e.rules,
          V = e.returnedFlowName,
          q = e.isFlightPassPNR,
          Y = e.plusGradeBid,
          Z = e.nationalityBasedtravelRestrictions,
          Q = e.ticketsAndReceiptsData,
          z = e.flightsFiltered,
          J = e.taSubscriptionDetails,
          X = e.bookingType,
          $ = e.currencyPrecision,
          ee = e.rewardsRequest,
          ne = e.isPrincipleKF,
          ae = e.checkBaggageEligibility,
          se = e.isSSRAEnabled,
          ie = e.flightDisruption,
          te = e.scootPnr,
          le = e.infantCount,
          ce = e.additionalBaggageBanner,
          pe = e.isTicketed,
          ue = e.bookingChannel,
          ge = e.RewardAvailRequest,
          me = e.isBagaggeSelectionAvailable,
          he = e.customerProfile,
          _e = e.salt,
          xe = e.isFlightCreditPnr,
          Ce = e.isNewSeatEnabled,
          be = e.updateScheduleAcceptStatus,
          Ne = e.kfEmail,
          je = e.emailFetched,
          Ie = e.isNewBagaggeFlowEnabled,
          Se = e.isGroupBookingPNR,
          Ae = e.isAddonEligible,
          Te = (0, r.useContext)(x.dd),
          De = (0, r.useContext)(x.Jj),
          ke = (0, r.useContext)(x.ko),
          ye = ke.locale,
          Re = ke.setPageLoading,
          Le = De['feature.enableACIBanner.switch'],
          Be = De['feature.travelAdvisoryBannerEnable.switch'],
          Fe = De['config.scheduleChangeAcceptDeeplink'],
          He = De['config.carbonOffset.banner.switch'],
          Ee = De['feature.enablePromocode.switch'],
          We = De['feature.enableMultipleUN.switch'],
          Ke = D.isACIEligible,
          Ue = D.displayTurnOffButton,
          Ge = D.aciEligibleFlights,
          Ve = (0, r.useState)(!1),
          qe = Ve[0],
          Ze = Ve[1],
          Qe = (0, r.useState)(bs(!0)),
          ze = Qe[0],
          Je = Qe[1],
          Xe = (0, r.useState)(
            (function (e) {
              return null !== e && void 0 !== e && e.eligibilityRequest
                ? { isLoading: !0 }
                : { isLoading: !1 };
            })(ee),
          ),
          $e = Xe[0],
          en = Xe[1],
          nn = (0, r.useState)(j),
          an = nn[0],
          sn = nn[1],
          rn = (0, r.useState)(!1),
          tn = rn[0],
          on = rn[1],
          ln = (0, r.useState)(void 0),
          dn = ln[0],
          cn = ln[1],
          pn = (0, r.useState)(!1),
          un = pn[0],
          gn = pn[1],
          mn = (0, r.useState)(Q),
          hn = mn[0],
          vn = mn[1],
          _n = (0, r.useState)(
            (function (e) {
              return e
                ? { status: 'INITIAL_LOADING' }
                : { status: 'NO_LOADING' };
            })(ae),
          ),
          fn = _n[0],
          xn = _n[1],
          Cn = (0, r.useState)([]),
          bn = Cn[0],
          Nn = Cn[1],
          jn = (0, r.useState)(),
          In = jn[0],
          wn = jn[1],
          Pn = (0, r.useState)(),
          An = Pn[0],
          Tn = Pn[1],
          Dn = (0, r.useState)({}),
          kn = Dn[0],
          yn = Dn[1],
          Rn = (0, r.useState)(),
          Ln = Rn[0],
          On = Rn[1],
          Bn = (0, r.useState)(''),
          Fn = Bn[0],
          Mn = Bn[1],
          Hn = (0, r.useState)(!1),
          En = Hn[0],
          Wn = Hn[1],
          Kn = (0, r.useState)(!1),
          Un = Kn[0],
          Vn = Kn[1],
          qn = (0, r.useState)(''),
          Yn = qn[0],
          Zn = qn[1],
          zn = (0, r.useState)(!1),
          Jn = zn[0],
          Xn = zn[1],
          ea = (0, r.useState)(''),
          na = ea[0],
          aa = ea[1],
          ia = (0, r.useState)(I),
          ra = ia[0],
          ta = ia[1],
          da = (0, r.useState)(!1),
          ca = da[0],
          pa = da[1],
          ua = (0, r.useState)(''),
          ga = ua[0],
          ma = ua[1],
          ha = (0, r.useState)(
            null !== (n = f[0].passengers[0].contactDetails) && void 0 !== n
              ? n
              : [],
          ),
          va = ha[0],
          _a = ha[1],
          fa = (0, r.useState)(!1),
          xa = fa[0],
          ja = fa[1],
          Ia = (0, r.useState)(f),
          Pa = Ia[0],
          Sa = Ia[1],
          Ta =
            null !==
              (a =
                ie &&
                ie.SSRAPolicyResponse &&
                '912' ===
                  (null === (s = ie.SSRAPolicyResponse.response) || void 0 === s
                    ? void 0
                    : s.errorCode)) &&
            void 0 !== a &&
            a;
        (0, r.useEffect)(
          function () {
            Ze(T.scheduleChange);
          },
          [T.scheduleChange],
        ),
          (0, r.useEffect)(
            function () {
              se &&
                !T.scheduleChange &&
                Ze(
                  !Ta &&
                    (null === ie || void 0 === ie ? void 0 : ie.isDisrupted),
                );
            },
            [ie, se, T.scheduleChange, Ta],
          );
        var Da,
          ya = (0, r.useState)(!1),
          Ra = ya[0],
          La = ya[1],
          Oa = function (e) {
            if (e) {
              var n = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'csrf-token': oe().get('MBVS_CSRF') || '',
                },
                body: JSON.stringify(fs({}, e)),
              };
              (0, re.rQ)(
                '/managebooking/api/getaccruablemiles',
                n,
                function (e) {
                  Je(e);
                },
                function () {
                  Je({ status: 'FAILURE' });
                },
              );
            }
          };
        (0, r.useEffect)(
          function () {
            (0, t.Z)(
              i().mark(function e() {
                var n, a, s;
                return i().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        g
                          ? ('/managebooking/api/getdocumentdata',
                            (n = {
                              method: 'POST',
                              headers: {
                                'Content-Type': 'application/json',
                                'csrf-token': oe().get('MBVS_CSRF') || '',
                              },
                              body: JSON.stringify(fs({}, g)),
                            }),
                            (a = function (e) {
                              if ((cn(e), Ba(), 'CIB' === X && m)) {
                                var n = (0, de.Vb)(m, e);
                                n ? Oa(n) : Je(bs(!1));
                              } else Je(bs(!1));
                              if ((0, de.gw)(e)) {
                                var a = (0, c.Z)(j);
                                a.push({
                                  id: 'cvvRequiredMessage',
                                  heading: '',
                                  message: Te.cvvRequiredMessage,
                                }),
                                  sn(a);
                              }
                              var s = (0, de.DV)(e);
                              gn(s);
                              var i = fs({}, Q);
                              if (s) {
                                var r;
                                null === (r = i.flights) ||
                                  void 0 === r ||
                                  r.forEach(function (n) {
                                    '' === n.receiptNo &&
                                      (n.receiptNo = (0, de.TS)(
                                        n.eTicketNum,
                                        e,
                                        !0,
                                      ));
                                  });
                                var t = fs({}, f);
                                t[0].passengers.forEach(function (n) {
                                  var a, s, i;
                                  n.isInfant
                                    ? (n.availableCredit = (0, de.TS)(
                                        null !==
                                          (a =
                                            null === (s = n.infant) ||
                                            void 0 === s ||
                                            null === (i = s.ticketNumbers) ||
                                            void 0 === i
                                              ? void 0
                                              : i[0]) && void 0 !== a
                                          ? a
                                          : '',
                                        e,
                                      ))
                                    : (n.availableCredit = (0, de.TS)(
                                        n.ticketNumber,
                                        e,
                                      ));
                                }),
                                  Sa(t),
                                  vn(i),
                                  on(!0);
                              } else (i.residualEMD = void 0), vn(i), on(!0);
                            }),
                            (s = function () {
                              Ba(), on(!0), Je(bs(!1));
                            }),
                            (0, re.rQ)(
                              '/managebooking/api/getdocumentdata',
                              n,
                              a,
                              s,
                            ))
                          : (Je(bs(!1)), on(!0), Ba());
                      case 1:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            )();
          },
          [g, X, m],
        ),
          (0, r.useEffect)(
            function () {
              (0, t.Z)(
                i().mark(function e() {
                  var n, a, s;
                  return i().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          ee &&
                            ('/managebooking/api/getrewardsandpromocodes',
                            (n = {
                              method: 'POST',
                              headers: {
                                'Content-Type': 'application/json',
                                'csrf-token': oe().get('MBVS_CSRF') || '',
                              },
                              body: JSON.stringify(fs({}, ee)),
                            }),
                            (a = function (e) {
                              var n;
                              0 !==
                              (null === (n = e.rewards) || void 0 === n
                                ? void 0
                                : n.length)
                                ? en({
                                    isLoading: !1,
                                    rewards: e.rewards,
                                    applicableRewards: e.applicableRewards,
                                    promocodes: e.promocodes,
                                  })
                                : en({
                                    isLoading: !1,
                                    applicableRewards: e.applicableRewards,
                                    promocodes: e.promocodes,
                                  });
                            }),
                            (s = function () {
                              en({
                                isLoading: !1,
                                rewards: [],
                                promocodes: {
                                  AAMPromocode: [],
                                  thirdPartyPromocode: [],
                                },
                              });
                            }),
                            (0, re.rQ)(
                              '/managebooking/api/getrewardsandpromocodes',
                              n,
                              a,
                              s,
                            ));
                        case 1:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              )();
            },
            [ee, P],
          ),
          (0, r.useEffect)(
            function () {
              ae &&
                (0, t.Z)(
                  i().mark(function e() {
                    var n, a, s;
                    return i().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            '/managebooking/api/getbaggageeligibility',
                              (n = {
                                method: 'POST',
                                headers: {
                                  'Content-Type': 'application/json',
                                  'csrf-token': oe().get('MBVS_CSRF') || '',
                                },
                                body: JSON.stringify({ pnr: P }),
                              }),
                              (a = function (e) {
                                xn(e), ja(e.isBaggageEligible);
                              }),
                              (s = function () {
                                xn({ status: 'FAILURE' });
                              }),
                              (0, re.rQ)(
                                '/managebooking/api/getbaggageeligibility',
                                n,
                                a,
                                s,
                              );
                          case 5:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )();
            },
            [ae, P],
          ),
          (function (e) {
            e.HOTEL = 'HOTEL';
          })(Da || (Da = {}));
        var Ba = function () {
            (0, t.Z)(
              i().mark(function e() {
                var n, a, s, r;
                return i().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        '/managebooking/api/getaddonlistdata',
                          (n = !1),
                          (null === V || void 0 === V
                            ? void 0
                            : V.toUpperCase()) == Da.HOTEL && (n = !0),
                          (a = {
                            method: 'POST',
                            headers: {
                              'Content-Type': 'application/json',
                              'csrf-token': oe().get('MBVS_CSRF') || '',
                            },
                            body: JSON.stringify({
                              pnr: P,
                              locale: ye,
                              prioritiseHotel: n,
                            }),
                          }),
                          (s = function (e) {
                            Nn(e.addonList),
                              yn(e.addedAddons),
                              On(e.mp35),
                              Mn(e.pos),
                              Wn(!0),
                              wn(e.krisShopProductList),
                              Tn(e.pelagoResponseData);
                          }),
                          (r = function () {
                            Wn(!0);
                          }),
                          (0, re.rQ)(
                            '/managebooking/api/getaddonlistdata',
                            a,
                            s,
                            r,
                          );
                      case 7:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            )();
          },
          Fa = (0, r.useRef)(null),
          Ma = (0, r.useRef)(null),
          Ha = (0, r.useRef)(null),
          Ea = (0, r.useRef)(null),
          Wa = (0, r.useRef)(null);
        (0, r.useEffect)(
          function () {
            var e;
            W &&
              Ma.current &&
              (0, Pe.M1)(
                null === (e = Ma.current) || void 0 === e
                  ? void 0
                  : e.offsetTop,
                2e3,
              );
            if (V)
              switch (V) {
                case we.VP.PAX_PREF:
                  Ka(Ma);
                  break;
                case we.VP.ADD_ON:
                  Ka(Ea);
                  break;
                case we.VP.FLIGHT_INFO:
                  Ka(Fa);
                  break;
                case we.VP.ACI:
                  Ka(Ha);
                  break;
                case we.VP.TRAVEL_ADVISORY:
                  Ka(Wa);
                  break;
                case we.VP.HOTEL:
                  Ka(Ea);
              }
          },
          [W, V],
        );
        var Ka = function (e) {
            var n;
            e.current &&
              (0, Pe.M1)(
                null === (n = e.current) || void 0 === n ? void 0 : n.offsetTop,
                2e3,
              );
          },
          Ua = function () {
            var e,
              n,
              a,
              s,
              i,
              r =
                (0, sa.d)(
                  null === (e = ie.policyDetails) ||
                    void 0 === e ||
                    null === (n = e.flightDetails) ||
                    void 0 === n
                    ? void 0
                    : n.date,
                  'DD MMM YYYY (ddd)',
                ).format('DD MMM YYYY (ddd)') ==
                (null === (a = ie.policyDetails) ||
                void 0 === a ||
                null === (s = a.flightDetails) ||
                void 0 === s
                  ? void 0
                  : s.date)
                  ? (0, sa.d)(
                      null === (i = ie.policyDetails.flightDetails) ||
                        void 0 === i
                        ? void 0
                        : i.date,
                      'DD MMM YYYY (ddd)',
                    ).format('DD MMM YYYY')
                  : '';
            if (
              (Ze(!1),
              Vn(!0),
              se &&
                !T.scheduleChange &&
                ie.isDisrupted &&
                ie.policyDetails &&
                !Ta)
            )
              aa(
                Te[
                  'scheduleChange.popup.flightDisruption.WarningMessage4'
                ].replace('{1}', r),
              );
            else
              switch (T.scheduleChangePNRTypes) {
                case we.nY.REACCOMODATION_MCT_MET:
                  Xn(!0),
                    ie.isDisrupted && ie.policyDetails && !Ta
                      ? aa(
                          Te['flightInfo.flightDisruption.MCT_MET'].replace(
                            '{1}',
                            r,
                          ),
                        )
                      : Zn(Te['flightInfo.scheduleChange.refuse.mctmet']);
                  break;
                case we.nY.RESCHEDULE_MCT_MET:
                  pa(!0),
                    Xn(!0),
                    ie.isDisrupted && ie.policyDetails && !Ta
                      ? aa(
                          Te['flightInfo.flightDisruption.MCT_MET'].replace(
                            '{1}',
                            r,
                          ),
                        )
                      : Zn(Te['flightInfo.scheduleChange.refuse.mctmet']);
                  break;
                case we.nY.REACCOMODATION_MCT_NOT_MET_SMF:
                case we.nY.REACCOMODATION_MCT_NOT_MET:
                case we.nY.RESCHEDULE_MCT_NOT_MET_SMF:
                case we.nY.RESCHEDULE_MCT_NOT_MET:
                  pa(!0),
                    Xn(!1),
                    ie.isDisrupted && ie.policyDetails && !Ta
                      ? aa(
                          Te['flightInfo.flightDisruption.MCT_Not_MET'].replace(
                            '{1}',
                            r,
                          ),
                        )
                      : Zn(Te['flightInfo.scheduleChange.refuse.mctnotmet']);
                  break;
                case we.nY.RESCHEDULE_MCT_MET_SMF:
                case we.nY.REACCOMODATION_MCT_MET_SMF:
                  var t = fs({}, ra);
                  (t.message = Te[
                    'scheduleChange.reaccomadationMCTMetSMFMessage'
                  ]
                    .replace('{0}', I.date)
                    .replace('{1}', ye)),
                    ta(t);
              }
          },
          Ga = (function () {
            var e = (0, t.Z)(
              i().mark(function e(n, a, s) {
                var r, t, o, l, d;
                return i().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((Ze(!1), !Fe)) {
                            e.next = 25;
                            break;
                          }
                          return (
                            Re(!0),
                            (r = new Headers()).append(
                              'Content-Type',
                              'application/x-www-form-urlencoded',
                            ),
                            (t = new URLSearchParams()).append('pnr', n),
                            t.append('lastName', a),
                            t.append('secureFareConfirmFlow', ''.concat(s)),
                            (o = {
                              method: 'POST',
                              headers: r,
                              body: t,
                              redirect: 'follow',
                            }),
                            (e.prev = 10),
                            (e.next = 13),
                            fetch('/acceptScheduleChange.form', o)
                          );
                        case 13:
                          return (l = e.sent), (e.next = 16), l.json();
                        case 16:
                          'SUCCESS' === (d = e.sent).status
                            ? (window.location.reload(),
                              be(vs.kp.yes, vs.Ah.success))
                            : (be(vs.kp.yes, vs.Ah.failure),
                              s && 'MBASC04' === d.errorCode
                                ? window.location.reload()
                                : (Re(!1),
                                  ma(Te['scheduleChange.updateError']))),
                            (e.next = 25);
                          break;
                        case 20:
                          (e.prev = 20),
                            (e.t0 = e.catch(10)),
                            be(vs.kp.yes, vs.Ah.failure),
                            Re(!1),
                            ma(Te['scheduleChange.updateError']);
                        case 25:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[10, 20]],
                );
              }),
            );
            return function (n, a, s) {
              return e.apply(this, arguments);
            };
          })();
        return (
          (0, r.useEffect)(function () {
            La(!0);
          }, []),
          (0, C.jsxs)('div', {
            className: v()(u().wrapper, 'wrapper'),
            children: [
              (0, C.jsx)(b, {
                bannerContent: _,
                fareConditionArray: O,
                fareConditionRequest: F,
                getFareConditionData: B,
                fareNotesConditionRequest: M,
                formattedFullFareConditionData: H,
                ticketsAndReceiptsData: hn,
                lastName: S,
                isFlightCreditPnr: xe,
                getDocumentResponseReady: tn,
              }),
              an.length > 0 && (0, C.jsx)(fe.s, { odMessages: an }),
              (0, C.jsx)(Oe, {
                fdMessage: na,
                onClickReview: function () {
                  Ze(!0);
                },
                secureFareData: ra,
                redirectToSubFlow: y,
                scMessage: Yn,
                scUpdateErrorMessage: ga,
                flightActionData: w,
                isMCTMET: Jn,
                onClickSCAccept: function () {
                  return Ga(P, S, I.isSecureFare);
                },
              }),
              'NA' !==
                (null === he || void 0 === he ? void 0 : he.KfSpecialCustype) &&
                'NA' !==
                  (null === he || void 0 === he
                    ? void 0
                    : he.KfReasonForChange) &&
                'Classified Account' ===
                  (null === he || void 0 === he
                    ? void 0
                    : he.KfSpecialCustype) &&
                (0, C.jsx)(Gn, { customerProfile: he }),
              xe
                ? (0, C.jsx)(k.Z, {
                    showLoadingAnimation: !0,
                    ready: null === tn || void 0 === tn || tn,
                    customPlaceholder: Ye.j,
                    children:
                      un &&
                      (0, C.jsx)(Aa, {
                        data: Pa,
                        pnr: P,
                        currencyPrecision: $,
                      }),
                  })
                : null,
              Ee
                ? (0, C.jsx)(us, {
                    rewards: $e.applicableRewards,
                    pnr: P,
                    lastname: S,
                    isLoading: $e.isLoading,
                    isTicketed: pe,
                    promoCodes: $e.promocodes,
                    rewardRequest: ee,
                    rewardAvailRequest: ge,
                    salt: _e,
                  })
                : ($e.isLoading || $e.applicableRewards) &&
                  ne &&
                  (0, C.jsx)(Za, {
                    rewards: $e.applicableRewards,
                    pnr: P,
                    lastname: S,
                    isLoading: $e.isLoading,
                    isTicketed: pe,
                    RewardAvailRequest: ge,
                  }),
              (0, C.jsx)(N.p, {
                flights: h,
                flightActionData: w,
                redirectToSubFlow: y,
                showSpinner: L,
                asyncInProgress: U,
                isScheduleChangeRefused: Un,
                scheduleChngeType: T.scheduleChangePNRTypes,
                isScheduleChangeOkay: ca,
                lastName: S,
                PNR: P,
                officeId: p,
                rules: G,
                flightInfoSectionRef: Fa,
                isFlightPassPNR: q,
                plusGradeBid: Y,
                bookingType: X,
                infantCount: le,
                passengers:
                  null === f ||
                  void 0 === f ||
                  null === (o = f[0]) ||
                  void 0 === o
                    ? void 0
                    : o.passengers,
                bookingChannel: ue,
                isGetDocumentCompleted: !g || tn,
                getdocumentresponse: dn,
              }),
              Le &&
                (0, C.jsx)(Ca, {
                  displayTurnOffButton: Ue,
                  pnr: P,
                  lastName: S,
                  passengerAndPreference: f,
                  isACIEligible: Ke,
                  aciSectionRef: Ha,
                  aciEligibleFlights: Ge,
                  notDisplayACIOffBanner: w.notDisplayACIOffBanner,
                }),
              Be &&
                (0, C.jsx)(wa, {
                  passangers: f,
                  flights: z,
                  nationalityBasedTravelRestriction: Z,
                  countryList: E,
                  taSubscriptionDetails: J,
                  isGroupBookingPNR: Se,
                  taSectionRef: Wa,
                  customerProfile: he,
                }),
              (null === ce || void 0 === ce ? void 0 : ce.length) > 0 &&
                xa &&
                me &&
                (0, C.jsx)(hs, { baggageMessage: ce, redirectToSubFlow: y }),
              (0, C.jsx)(ve, {
                passengerAndPreference: We
                  ? (function () {
                      var e = h.filter(function (e) {
                        return (
                          e.segments &&
                          e.segments.some(function (e) {
                            return (
                              e.segmentStatus ===
                              Te['scheduleChange.popup.originalFlight']
                            );
                          })
                        );
                      });
                      if (e && e.length > 1) {
                        var n = [];
                        return (
                          f &&
                            f.length > 0 &&
                            f.forEach(function (e) {
                              var a = f.filter(function (n) {
                                return (
                                  n.segmentOrigin === e.segmentOrigin &&
                                  n.segmentDestination == e.segmentDestination
                                );
                              });
                              a && a.length > 1
                                ? (0, c.Z)(a).sort(function (e, n) {
                                    return +e.segmentID > +n.segmentID ? 1 : -1;
                                  })[0].segmentID === e.segmentID && n.push(e)
                                : n.push(e);
                            }),
                          n
                        );
                      }
                      return f;
                    })()
                  : f,
                pnr: P,
                redirectToSubFlow: y,
                accruableMilesResponse: ze,
                showSpinner: L,
                isSecureFare: I.isSecureFare,
                lastName: S,
                countryList: E.countryList,
                paxPrefSectionRef: Ma,
                airlineCode: h[0].segments[0].operatingAirlineCode,
                isGroupBookingPNR: Se,
                isScheduleChangeRefused: Un,
                setIsInitialRenderValue: function (e) {
                  return La(e), Ra;
                },
                isInitialRender: Ra,
                contactDetails: va,
                updateContactDetails: function (e, n, a, s) {
                  var i = (0, c.Z)(va);
                  (i[0] = { areaCode: e, countryCode: n, mobile: a, email: s }),
                    _a(i);
                },
                rewardsResponse: $e,
                isPrincipleKF: ne,
                baggageEligibilityResponse: fn,
                scootPnr: te,
                salt: _e,
                isNewSeatEnabled: Ce,
                isGetDocumentCompleted: tn,
                getdocumentresponse: dn,
                flights: h,
                kfEmail: Ne,
                emailFetched: je,
                isLoggedIn: w.isLoggedIn,
                isNewBagaggeFlowEnabled: Ie,
              }),
              (0, C.jsx)(Me, {}),
              (0, C.jsx)(Qn, {
                isSecureFare: I.isSecureFare,
                totalAccruableMiles: ze.accruableMilesData,
                kfSignUpBannerContent: A,
                redirectToSubFlow: y,
              }),
              (0, C.jsx)($n, { kfInformationBannerData: R }),
              He && (0, C.jsx)(ka, {}),
              Object.keys(kn).length > 0 &&
                (0, C.jsx)(ba.S, {
                  children: (0, C.jsx)(Na.P, {
                    addedAddons: kn,
                    pnr: P,
                    lastName: S,
                    pos: Fn,
                    odMessages: an,
                    redirectToSubFlow: y,
                    locale: ye,
                    currencyPrecision: $,
                  }),
                }),
              V && V.toUpperCase() == we.VP.HOTEL
                ? (0, C.jsx)('input', {
                    type: 'hidden',
                    value: V,
                    id: 'returnedFlowName',
                  })
                : null,
              Ae && (!En || bn.length > 0)
                ? (0, C.jsx)(ba.S, {
                    children: (0, C.jsx)(Sn, {
                      addonList: bn,
                      ready: En,
                      mp35: Ln,
                      pnr: P,
                      lastName: S,
                      pos: Fn,
                      adultCount: K,
                      addonSectionRef: Ea,
                      locale: ye,
                      redirectToSubFlow: y,
                      products: In,
                      pelagoDetails: An,
                      addedAddons: kn,
                      passangers:
                        null === f ||
                        void 0 === f ||
                        null === (l = f[0]) ||
                        void 0 === l
                          ? void 0
                          : l.passengers,
                      flights: h,
                      currencyPrecision: $,
                    }),
                  })
                : null,
              qe &&
                se &&
                (0, C.jsx)(oa, {
                  isDisruptedOnly: !T.scheduleChange && ie.isDisrupted,
                  flightDisruptionData: ie,
                  newFlight:
                    !T.scheduleChange && ie.isDisrupted
                      ? null === (d = ie.policyDetails) || void 0 === d
                        ? void 0
                        : d.flightDetails
                      : T.newFlight,
                  oldFlight: T.oldFlight,
                  showContinuePopup: T.showContinueOnly,
                  showAcceptRefusePopup: T.showAcceptRefuse,
                  handleClickRefuse: Ua,
                  handleAcceptClick: function () {
                    return Ga(P, S, I.isSecureFare);
                  },
                  pnr: P,
                  lastName: S,
                  flightDataArr: We ? T.flightDataArr : void 0,
                  legsArr: We ? T.legsArr : void 0,
                  showCloseIconPopup: We ? T.showCloseIcon : void 0,
                  showPossibleDisruptionHeader: We
                    ? T.possibleDisruptionHeader
                    : void 0,
                  countryNamesArr: We ? T.countryNamesArr : void 0,
                  unLegsArr: We ? T.unLegsArr : void 0,
                }),
              qe &&
                !se &&
                (0, C.jsx)(la, {
                  newFlight: T.newFlight,
                  oldFlight: T.oldFlight,
                  showContinuePopup: T.showContinueOnly,
                  showAcceptRefusePopup: T.showAcceptRefuse,
                  handleClickRefuse: Ua,
                  handleAcceptClick: function () {
                    return Ga(P, S, I.isSecureFare);
                  },
                }),
            ],
          })
        );
      }
      function bs(e) {
        return e ? { status: 'INITIAL_LOADING' } : { status: 'NO_LOADING' };
      }
      function Ns(e) {
        return void 0 !== e;
      }
      !(function (e) {
        (e.ERROR = 'Something went wrong while fetching the fare conditions'),
          (e.EXCEPTION = 'Unknown exception while fetching fare condition');
      })(xs || (xs = {}));
      var js,
        Is = a(25934),
        ws = a(2224),
        Ps = a.n(ws),
        Ss = function (e) {
          var n = e.handleOnClose,
            a = r.useContext(x.dd);
          return (0, C.jsx)(Rn.q, {
            onClickClose: n,
            childrenWrapperWidth: 520,
            children: (0, C.jsxs)('div', {
              className: Ps().errorOuterContainer,
              children: [
                (0, C.jsx)('img', {
                  src: '/assets/manage-booking/images/icon-tech-error.svg',
                  className: Ps().erroIcon,
                }),
                (0, C.jsxs)('div', {
                  className: Ps().errorContent,
                  children: [
                    (0, C.jsx)('div', {
                      className: Ps().title,
                      children: a['errorPopup.popup.title'],
                    }),
                    (0, C.jsx)('div', {
                      children: a['errorPopup.popup.para1'],
                    }),
                    (0, C.jsx)('div', {
                      className: Ps().assistance,
                      children: a['errorPopup.popup.para2'],
                    }),
                    (0, C.jsx)('div', {
                      className: Ps().buttonOuter,
                      children: (0, C.jsx)(be.P, {
                        classes: { root: Ps().okayBtn },
                        onClick: n,
                        children: a['errorPopup.popup.ok'],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      function As(e) {
        var n = e.data,
          a = n.bannerContent,
          s = n.flights,
          d = n.passengersAndPreferenceData,
          c = n.odMessages,
          p = n.secureFare,
          u = n.flightActionData,
          g = n.lastName,
          m = n.pnr,
          h = n.passengerList,
          v = n.translations,
          _ = n.kfSignUpBannerContent,
          f = n.scheduleChange,
          b = n.getAciResponse,
          N = n.accruableMilesRequest,
          j = n.isWaitlisted,
          I = n.kfInformationBannerData,
          w = n.fareConditionReqest,
          P = n.fareNotesConditionRequest,
          S = n.CountryModel,
          A = n.isFromSelectMeal,
          T = n.adultCount,
          D = n.asyncInProgress,
          k = n.isConfirmFlight,
          L = n.lastDatetoConfirm,
          O = n.rules,
          B = n.returnedFlowName,
          F = n.isFlightPassPNR,
          M = n.plusGradeBid,
          H = n.nationalityBasedTravelRestriction,
          E = n.ticketsAndReceiptsData,
          W = n.flightsFiltered,
          K = n.isORBHKFlight,
          U = n.taSubscriptionDetails,
          G = n.bookingType,
          V = n.commonProperties,
          q = n.rewardsRequest,
          Y = n.isPrincipleKF,
          Z = n.checkBaggageEligibility,
          Q = n.isSSRAEnabled,
          z = n.flightDisruption,
          J = n.scootPnr,
          X = n.infantCount,
          $ = n.additionalBaggageBanner,
          ee = n.isTicketed,
          ne = n.bookingChannel,
          ae = n.customerProfile,
          se = n.RewardAvailRequest,
          ie = n.currencyPrecision,
          te = n.isBagaggeSelectionAvailable,
          le = n.getDocumentRequest,
          de = n.officeId,
          ce = n.isFlightCreditPnr,
          pe = n.isNewSeatEnabled,
          ue = n.isErrorRedirection,
          ge = n.isNewBagaggeFlowEnabled,
          me = n.isGroupBookingPNR,
          he = n.isAddonEligible,
          ve = r.useState(ue),
          _e = (0, o.Z)(ve, 2),
          fe = _e[0],
          xe = _e[1],
          Ce = r.useState(!1),
          be = (0, o.Z)(Ce, 2),
          Ne = be[0],
          je = be[1],
          Ie = r.useState([]),
          we = (0, o.Z)(Ie, 2),
          Pe = we[0],
          Se = we[1],
          Ae = r.useState(),
          Te = (0, o.Z)(Ae, 2),
          De = Te[0],
          ke = Te[1],
          ye = r.useContext(x.ko),
          Re = ye.country,
          Le = ye.setPageLoading,
          Oe = r.useState(!1),
          Be = (0, o.Z)(Oe, 2),
          Fe = Be[0],
          Me = Be[1],
          He = r.useState({
            accountSummary: {},
            tierCode: '',
            expiryKfMiles: 0,
            KfEmail: '',
          }),
          Ee = (0, o.Z)(He, 2),
          We = Ee[0],
          Ke = Ee[1],
          Ue = function (e, n, a, s, i) {
            return e === y.y.MEAL_SELECTION
              ? { pnr: m, lastName: g, subFlow: e, paxId: n }
              : a
              ? {
                  pnr: m,
                  lastName: g,
                  subFlow: e,
                  nextEvent: e,
                  upgradeAtcEntry: a,
                }
              : e === y.y.CHECK_SSH || e === y.y.CANCEL_SSH_BOOKING
              ? { pnr: m, lastName: g, subFlow: e, segmentNumber: s }
              : e === y.y.KF_SIGNUP
              ? { pnr: m, lastName: g, subFlow: e, nextEvent: e, signupUrl: i }
              : { pnr: m, lastName: g, subFlow: e, nextEvent: e };
          },
          Ge = (function () {
            var e = (0, t.Z)(
              i().mark(function e(n, a) {
                var s, r, t;
                return i().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            je(!0),
                            (e.prev = 1),
                            (e.next = 4),
                            fetch('/managebooking/api/fareconditiondata', {
                              method: 'POST',
                              headers: {
                                'Content-Type': 'application/json',
                                'csrf-token': oe().get('MBVS_CSRF') || '',
                              },
                              body: JSON.stringify({
                                requestBody: n,
                                fareNotesRequestBody: a,
                              }),
                            })
                          );
                        case 4:
                          return (s = e.sent), (e.next = 7), s.json();
                        case 7:
                          Ns((r = e.sent)) &&
                            r.fareCondition &&
                            ((t = r.formatedFareCondition),
                            Se(t),
                            ke(r.formattedFareNotesData)),
                            je(!1),
                            (e.next = 15);
                          break;
                        case 12:
                          (e.prev = 12), (e.t0 = e.catch(1)), je(!1);
                        case 15:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 12]],
                );
              }),
            );
            return function (n, a) {
              return e.apply(this, arguments);
            };
          })(),
          Ve =
            'Guest' !==
              (null === ae || void 0 === ae ? void 0 : ae.userStatus) &&
            'Registered User' !==
              (null === ae || void 0 === ae ? void 0 : ae.userStatus);
        r.useEffect(
          function () {
            Ve &&
              (0, t.Z)(
                i().mark(function e() {
                  var n, a, s;
                  return i().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          '/managebooking/api/getkfdetails',
                            (n = {
                              method: 'POST',
                              headers: {
                                'Content-Type': 'application/json',
                                'csrf-token': oe().get('MBVS_CSRF') || '',
                              },
                            }),
                            (a = function (e) {
                              Ke(e), Me(!0);
                            }),
                            (s = function () {
                              Me(!0);
                            }),
                            (0, re.rQ)(
                              '/managebooking/api/getkfdetails',
                              n,
                              a,
                              s,
                            );
                        case 5:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              )();
          },
          [Ve],
        );
        var qe = We && Fe ? We : void 0,
          Ye = (0, r.useCallback)(
            function (e, a) {
              (0, vs.tu)('MB_Overview', n, qe, ae, {
                ScheduleAccept: e,
                ScheduleAcceptanceCheck: a,
              });
            },
            [n, qe, ae],
          );
        r.useEffect(
          function () {
            Ye(vs.kp.na, vs.Ah.na);
          },
          [Ye],
        ),
          window.name || (window.name = (0, Is.Z)());
        var Ze = window.name;
        return (0, C.jsxs)(x.Qu, {
          type: 'Overview',
          translations: v,
          common: V,
          country: Re,
          children: [
            (0, C.jsx)(l.j, {
              imagePath: a.bannerImagePath,
              pageName: l.q.Overview,
            }),
            (0, C.jsx)(Cs, {
              flights: s,
              bannerContent: a,
              passengerAndPreference: d,
              odMessages: c,
              secureFareData: p,
              flightActionData: u,
              redirectToSubFlow: function (e, n, a, s, i, r) {
                var t = Ue(e, a, s, i, r);
                ((n &&
                  0 === (null === n || void 0 === n ? void 0 : n.button)) ||
                  !n) &&
                  (Le(!0), (0, R.E)(t, '/mbRedirectToSubFlow.form'));
              },
              showSpinner: Ne,
              pnr: m,
              lastName: g,
              kfSignUpBannerContent: _,
              scheduleChange: f,
              aciResponse: b,
              accruableMilesRequest: N,
              isWaitlisted: j,
              kfInformationBannerData: I,
              farecondition: Pe,
              getFareConditionData: Ge,
              fareConditionRequest: w,
              fareNotesConditionRequest: P,
              formattedFullFareConditionData: De,
              countryList: S,
              isFromSelectMeal: A,
              adultCount: T,
              asyncInProgress: D,
              isConfirmFlight: k,
              lastDatetoConfirm: L,
              rules: O,
              returnedFlowName: B,
              isFlightPassPNR: F,
              plusGradeBid: M,
              nationalityBasedtravelRestrictions: H,
              ticketsAndReceiptsData: E,
              flightsFiltered: W,
              isORBHKFlight: K,
              taSubscriptionDetails: U,
              bookingType: G,
              rewardsRequest: q,
              isPrincipleKF: Y,
              checkBaggageEligibility: Z,
              isSSRAEnabled: Q,
              flightDisruption: z,
              scootPnr: J,
              infantCount: X,
              additionalBaggageBanner: $,
              isTicketed: ee,
              bookingChannel: ne,
              RewardAvailRequest: se,
              currencyPrecision: ie,
              isBagaggeSelectionAvailable: te,
              customerProfile: ae,
              isNewSeatEnabled: pe,
              salt: Ze,
              getDocumentRequest: le,
              passengerList: h,
              officeId: de,
              isFlightCreditPnr: ce,
              updateScheduleAcceptStatus: Ye,
              kfEmail: We.KfEmail,
              emailFetched: Fe,
              isNewBagaggeFlowEnabled: ge,
              isGroupBookingPNR: me,
              isAddonEligible: he,
            }),
            fe &&
              (0, C.jsx)(Ss, {
                handleOnClose: function () {
                  window.history.pushState(
                    '',
                    '',
                    window.location.href.substring(
                      0,
                      window.location.href.lastIndexOf('?'),
                    ),
                  ),
                    xe(!1);
                },
              }),
          ],
        });
      }
      !(function (e) {
        (e[(e.LOADING = 0)] = 'LOADING'),
          (e[(e.FAILED = 1)] = 'FAILED'),
          (e[(e.SUCCESS = 2)] = 'SUCCESS');
      })(js || (js = {}));
      var Ts = a(69898),
        Ds = a(9008),
        ks = a.n(Ds);
      function ys(e) {
        var n = e.overviewDataState,
          a = (0, r.useContext)(x.ko),
          s = (0, Ts.useRouter)();
        return (
          (0, r.useEffect)(
            function () {
              if (!n[0]) {
                a.setPageLoading(!0);
                (0, re.rQ)(
                  '/managebooking/api/overviewpagedata',
                  {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                  },
                  function (e) {
                    n[1](e), a.setPageLoading(!1);
                  },
                  function () {
                    s.push('/managebooking');
                  },
                );
              }
            },
            [a, n, s],
          ),
          n[0]
            ? (0, C.jsxs)(C.Fragment, {
                children: [
                  (0, C.jsx)(ks(), {
                    children: (0, C.jsx)('title', {
                      children: n[0].translations['overview.title'],
                    }),
                  }),
                  (0, C.jsx)(As, { data: n[0] }),
                ],
              })
            : null
        );
      }
      ys.getInitialProps = function (e) {
        e.req, e.res, e.query;
        return {};
      };
    },
    66873: function (e, n, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/#',
        function () {
          return a(74398);
        },
      ]);
    },
    86447: function (e) {
      e.exports = {
        wrapper: 'AdditionalBaggageBanner_wrapper__rl1PF',
        bannerContent: 'AdditionalBaggageBanner_bannerContent__ZCXHt',
        bannerImage: 'AdditionalBaggageBanner_bannerImage__KX_h6',
        cardDetails: 'AdditionalBaggageBanner_cardDetails__IHHMH',
        cardHeading: 'AdditionalBaggageBanner_cardHeading__nRtcy',
        cardLink: 'AdditionalBaggageBanner_cardLink__v1_ug',
        cardDescription: 'AdditionalBaggageBanner_cardDescription__EQrjs',
      };
    },
    20471: function (e) {
      e.exports = {
        wrapper: 'AddonItem_wrapper__GGT56',
        desktopBannerImage: 'AddonItem_desktopBannerImage__UPh0T',
        mobileBannerImage: 'AddonItem_mobileBannerImage__MJQ_D',
        cardDetails: 'AddonItem_cardDetails__YqW_z',
        insuranceCard: 'AddonItem_insuranceCard__l9zYS',
        cardHeading: 'AddonItem_cardHeading__RYYrZ',
        cardSubHeading: 'AddonItem_cardSubHeading__YGSJq',
        cardDescription: 'AddonItem_cardDescription__tDDp8',
        insuranceCardDesc: 'AddonItem_insuranceCardDesc__ZLjaP',
        cardTc: 'AddonItem_cardTc__u4RYC',
        cardLink: 'AddonItem_cardLink__KPm8d',
        cardLogo: 'AddonItem_cardLogo__a0K_Y',
        contentWrap: 'AddonItem_contentWrap__8a6jU',
        cardInsuranceLink: 'AddonItem_cardInsuranceLink__Kkflc',
        cardInsurancePrice: 'AddonItem_cardInsurancePrice__rahcb',
        cardInsuranceText: 'AddonItem_cardInsuranceText__raEjB',
        tataCardLogo: 'AddonItem_tataCardLogo__P_uGn',
        link: 'AddonItem_link__wGj6c',
        sshLink: 'AddonItem_sshLink__2klea',
        insurancePriceDiv: 'AddonItem_insurancePriceDiv__OFJnW',
        insurancePrice: 'AddonItem_insurancePrice__BmrVz',
        insuranceAddLink: 'AddonItem_insuranceAddLink__fkhl3',
        allianzInsuranceLogo: 'AddonItem_allianzInsuranceLogo__sOc2_',
        allianzGlobalAssistanceLogo:
          'AddonItem_allianzGlobalAssistanceLogo__Wc9XR',
        allianzAssistanceLogo: 'AddonItem_allianzAssistanceLogo__5_1Gj',
        collinsonLevelOneImage: 'AddonItem_collinsonLevelOneImage__0RvxJ',
        collinsonMobileLink: 'AddonItem_collinsonMobileLink__A0Pcw',
      };
    },
    37642: function (e) {
      e.exports = {
        wrapper: 'AddonListContainer_wrapper__OWlBY',
        heading: 'AddonListContainer_heading__QqhFG',
        retrieveError: 'AddonListContainer_retrieveError__fRgsR',
        alertIcon: 'AddonListContainer_alertIcon___eL7a',
        retrieveErrorMessage: 'AddonListContainer_retrieveErrorMessage__F4Lrk',
        wrapperStatic: 'AddonListContainer_wrapperStatic__h6Gi9',
        levelThreeAddonContainer:
          'AddonListContainer_levelThreeAddonContainer__rjnr0',
        levelThreeAddonContainerList:
          'AddonListContainer_levelThreeAddonContainerList__EEPj0',
        levelThreeAddonContainerListImg:
          'AddonListContainer_levelThreeAddonContainerListImg__NPsGn',
        levelOneAddonContainer:
          'AddonListContainer_levelOneAddonContainer__KWz_2',
        levelOneAddonContainerList:
          'AddonListContainer_levelOneAddonContainerList__vdrfL',
        leveloneheading: 'AddonListContainer_leveloneheading__T6uPu',
        insurenceWrapper: 'AddonListContainer_insurenceWrapper__KETr6',
        insurenceWrapperImg: 'AddonListContainer_insurenceWrapperImg__R17ba',
        insurenceContent: 'AddonListContainer_insurenceContent__WNWPd',
        insurenceBottom: 'AddonListContainer_insurenceBottom__8Tq1w',
        insurenceBottomImg: 'AddonListContainer_insurenceBottomImg__CYIsI',
        allianzGlobalLogo: 'AddonListContainer_allianzGlobalLogo__EFCRJ',
        insurenceBottomContent:
          'AddonListContainer_insurenceBottomContent__wHNIV',
        insuranceAddLink: 'AddonListContainer_insuranceAddLink__t4L9w',
        levelOneAddonContainerListImg:
          'AddonListContainer_levelOneAddonContainerListImg__IKlMP',
        levelOneAddonContainerListDesc:
          'AddonListContainer_levelOneAddonContainerListDesc__O_Hdq',
        levelTwoContainer: 'AddonListContainer_levelTwoContainer__9v_cs',
        levelTwoCardContainer:
          'AddonListContainer_levelTwoCardContainer__MZ8_H',
        levelTwoElements: 'AddonListContainer_levelTwoElements__G9M42',
        levelTwoImage: 'AddonListContainer_levelTwoImage__aroHK',
        levelTwoDescription: 'AddonListContainer_levelTwoDescription___Ar9G',
        levelTwoHeader: 'AddonListContainer_levelTwoHeader__kvdNu',
        levelTwoHeading: 'AddonListContainer_levelTwoHeading__a2pnV',
        levelTwoSubHeading: 'AddonListContainer_levelTwoSubHeading__9aedD',
        levelTwoLogo: 'AddonListContainer_levelTwoLogo__w3zVE',
        pelagoImage: 'AddonListContainer_pelagoImage__vwLN6',
        agodaImage: 'AddonListContainer_agodaImage__2SzxC',
        collinsonImage: 'AddonListContainer_collinsonImage__wwFQm',
        levelTwoFooterContainer:
          'AddonListContainer_levelTwoFooterContainer__BdZ8K',
        levelTwoFooterLeftContainer:
          'AddonListContainer_levelTwoFooterLeftContainer__ixJI_',
        levelTwoFooterRightContainer:
          'AddonListContainer_levelTwoFooterRightContainer__Aa8QJ',
        levelTwoFooterLeftDesc:
          'AddonListContainer_levelTwoFooterLeftDesc__9_4ho',
        levelTwoGift: 'AddonListContainer_levelTwoGift__CR_60',
        levelTwoMileDesc: 'AddonListContainer_levelTwoMileDesc__dNmU_',
        levelTwoFooterRightDesc:
          'AddonListContainer_levelTwoFooterRightDesc__Sa8Jm',
        levelTwoFrom: 'AddonListContainer_levelTwoFrom__xY2V4',
        levelTwoFareContainer:
          'AddonListContainer_levelTwoFareContainer__XTel3',
        levelTwoFare: 'AddonListContainer_levelTwoFare__d8x1s',
        levelTworedirection: 'AddonListContainer_levelTworedirection__1S5Yg',
        levelTwoChevronIcon: 'AddonListContainer_levelTwoChevronIcon__rbiRK',
      };
    },
    58402: function (e) {
      e.exports = {
        wrapper: 'MP35Hotel_wrapper__fto7k',
        bannerImageContainer: 'MP35Hotel_bannerImageContainer__fJhN3',
        desktopBannerImage: 'MP35Hotel_desktopBannerImage__4b7mn',
        mobileBannerImage: 'MP35Hotel_mobileBannerImage__hiBGN',
        hotelName: 'MP35Hotel_hotelName__l9rzQ',
        rating: 'MP35Hotel_rating__tfP9d',
        singleTeaserWrapper: 'MP35Hotel_singleTeaserWrapper__ooFtJ',
        hotelAddress: 'MP35Hotel_hotelAddress__dsb_d',
        distance: 'MP35Hotel_distance__qG5mR',
        addressLink: 'MP35Hotel_addressLink__1nUcO',
        hotelAddressDesktopWrapper:
          'MP35Hotel_hotelAddressDesktopWrapper__uVcdz',
        hotelAddressMobileWrapper: 'MP35Hotel_hotelAddressMobileWrapper__AKmzn',
        locationIcon: 'MP35Hotel_locationIcon__vG419',
        hotelDetails: 'MP35Hotel_hotelDetails__TNemS',
        hotelHeight: 'MP35Hotel_hotelHeight__r7C8E',
        basicDetails: 'MP35Hotel_basicDetails__CsvvK',
        paymentDetailsDesktop: 'MP35Hotel_paymentDetailsDesktop__nDdSq',
        paymentDetailsMobile: 'MP35Hotel_paymentDetailsMobile__xzUOk',
        leftSide: 'MP35Hotel_leftSide__xoOQ4',
        rightSide: 'MP35Hotel_rightSide__DyjkZ',
        avgPriceLabel: 'MP35Hotel_avgPriceLabel__EB04_',
        discountPrice: 'MP35Hotel_discountPrice__cQErp',
        actualPrice: 'MP35Hotel_actualPrice__w7vZa',
        taxDetails: 'MP35Hotel_taxDetails__XJynm',
        taxLabel: 'MP35Hotel_taxLabel__SQgL2',
        milesDetails: 'MP35Hotel_milesDetails__BmiyD',
        selectRoomLink: 'MP35Hotel_selectRoomLink__Cs7ur',
        hyperlinkCommon: 'MP35Hotel_hyperlinkCommon__Fmsg2',
        logoBottom: 'MP35Hotel_logoBottom__Q9_pH',
        krisflyerLabel: 'MP35Hotel_krisflyerLabel__Nkdp8',
        krisflyerLabelMobile: 'MP35Hotel_krisflyerLabelMobile__w7qFT',
        tooltipIcon: 'MP35Hotel_tooltipIcon__DFSFO',
        greenBox: 'MP35Hotel_greenBox__hC5uZ',
        merchantLogo: 'MP35Hotel_merchantLogo__rtSeT',
        mobile: 'MP35Hotel_mobile__4jZ4S',
        desktop: 'MP35Hotel_desktop__dkobM',
        greenBoxSingleTeaser: 'MP35Hotel_greenBoxSingleTeaser__dUR4n',
        priceDetailsMobile: 'MP35Hotel_priceDetailsMobile__Eb5mK',
        priceOuter: 'MP35Hotel_priceOuter__CqQvA',
        mobileSpecialOffers: 'MP35Hotel_mobileSpecialOffers__pxIC_',
        priceContainer: 'MP35Hotel_priceContainer__MpZxb',
        contentWrap: 'MP35Hotel_contentWrap__uc_TJ',
        cardDetails: 'MP35Hotel_cardDetails__H2HAc',
        mor: 'MP35Hotel_mor__ov03Q',
        nonmor: 'MP35Hotel_nonmor__lr2Z5',
        mobileBannerImageSingle: 'MP35Hotel_mobileBannerImageSingle__GvchE',
        desktopBannerImageSingle: 'MP35Hotel_desktopBannerImageSingle__CcAGH',
        basicDetailsSingleTeaser: 'MP35Hotel_basicDetailsSingleTeaser__KnkHe',
        cardHeading: 'MP35Hotel_cardHeading__0VWYW',
        milesDetailsSingleTeaser: 'MP35Hotel_milesDetailsSingleTeaser__rGX_0',
        line: 'MP35Hotel_line__Pi3s9',
        addonHotelHeading: 'MP35Hotel_addonHotelHeading__8gkZf',
      };
    },
    44366: function (e) {
      e.exports = {
        levelOneWrapper: 'MP35HotelContainer_levelOneWrapper__g8Yyi',
        wrapper: 'MP35HotelContainer_wrapper__ADRDE',
        heading: 'MP35HotelContainer_heading__KWWfE',
        hotelList: 'MP35HotelContainer_hotelList__ryz_a',
        hotel: 'MP35HotelContainer_hotel__Pyczy',
        additionalInfo: 'MP35HotelContainer_additionalInfo__4sPDr',
        moreHotelButtonWrapper:
          'MP35HotelContainer_moreHotelButtonWrapper__jk7d1',
        moreHotelButtonOuter: 'MP35HotelContainer_moreHotelButtonOuter__J37SZ',
        moreHotelsButton: 'MP35HotelContainer_moreHotelsButton__rHKsY',
        headingWrapper: 'MP35HotelContainer_headingWrapper__LUHfk',
      };
    },
    35405: function (e) {
      e.exports = {
        addonStarRatingCard: 'SharedAddons_addonStarRatingCard__YqLxk',
        hotelStarRating: 'SharedAddons_hotelStarRating__AJUzu',
        activeStar: 'SharedAddons_activeStar__AYzyS',
      };
    },
    67425: function (e) {
      e.exports = {
        container: 'ApplicableRewards_container__b3YXH',
        wrapper: 'ApplicableRewards_wrapper__G_TxV',
        circle: 'ApplicableRewards_circle__IdKgT',
        circleLarge: 'ApplicableRewards_circleLarge__wP6VD',
        circleSpan: 'ApplicableRewards_circleSpan__01Up8',
        circleSpanLarge: 'ApplicableRewards_circleSpanLarge__5Bq7d',
        circleSpanSingleDigit: 'ApplicableRewards_circleSpanSingleDigit__VILMs',
        rewardHead: 'ApplicableRewards_rewardHead__zoRDV',
        wrapperCollapse: 'ApplicableRewards_wrapperCollapse__rzq19',
        rewardsIcon: 'ApplicableRewards_rewardsIcon__7yoDt',
        promoIcon: 'ApplicableRewards_promoIcon__jLfBw',
        label: 'ApplicableRewards_label__ACJj8',
        tabContainer: 'ApplicableRewards_tabContainer__k43n_',
        tab: 'ApplicableRewards_tab__BWKMp',
        tabActive: 'ApplicableRewards_tabActive__XCPrv',
        tabInner: 'ApplicableRewards_tabInner__QqdLC',
        promoHead: 'ApplicableRewards_promoHead__tVgDJ',
        noRewardInfo: 'ApplicableRewards_noRewardInfo__w9PzM',
        popupWrapper: 'ApplicableRewards_popupWrapper__kVRqK',
        popupHeading: 'ApplicableRewards_popupHeading__RHm8R',
        inputBox: 'ApplicableRewards_inputBox___TY5V',
        applyButton: 'ApplicableRewards_applyButton__09qS4',
        promoWrapper: 'ApplicableRewards_promoWrapper__WYVZY',
        promoContainer: 'ApplicableRewards_promoContainer__MkuPN',
        promoDescription: 'ApplicableRewards_promoDescription__jxgLI',
        promoInfo: 'ApplicableRewards_promoInfo__5Yr40',
        promoHeadWrapper: 'ApplicableRewards_promoHeadWrapper__aDtmJ',
        addButton: 'ApplicableRewards_addButton__gkg_D',
        promoCodeContainer: 'ApplicableRewards_promoCodeContainer__i8ufh',
        promoDesc: 'ApplicableRewards_promoDesc__zSheX',
        promoInformation: 'ApplicableRewards_promoInformation__5s8tD',
        pcHidden: 'ApplicableRewards_pcHidden__mkF6x',
        mobileHidden: 'ApplicableRewards_mobileHidden__Yg4SZ',
        errorMessage: 'ApplicableRewards_errorMessage__5xw9k',
        singleDigitCircle: 'ApplicableRewards_singleDigitCircle__R4HfS',
        doubleDigitCircle: 'ApplicableRewards_doubleDigitCircle__Axxza',
      };
    },
    5463: function (e) {
      e.exports = {
        container: 'Promo_container__pupcK',
        promoTitle: 'Promo_promoTitle__hXlPd',
        promoContainer: 'Promo_promoContainer__NPl5k',
        promoTag: 'Promo_promoTag__Ygc4y',
        promoWrapper: 'Promo_promoWrapper__c_xHx',
        promoIcon: 'Promo_promoIcon__lC3sv',
        promoHeading: 'Promo_promoHeading__jkvII',
        promoEligibility: 'Promo_promoEligibility__fHu7U',
        promoNameAam: 'Promo_promoNameAam__o0my7',
        promoNameThirdParty: 'Promo_promoNameThirdParty__GGTgx',
        promoCodeName: 'Promo_promoCodeName__wLrmx',
        copyButton: 'Promo_copyButton__3Wl_T',
        promoExpiry: 'Promo_promoExpiry__HuWc4',
        promoTerms: 'Promo_promoTerms__2spvb',
        promoTermsLink: 'Promo_promoTermsLink__saohA',
        ctaButton: 'Promo_ctaButton__dPxoW',
        bookTestButton: 'Promo_bookTestButton__XQKYa',
        loadMoreButton: 'Promo_loadMoreButton__TAu60',
        copyCodeText: 'Promo_copyCodeText__D0mXU',
        promoTermsWrapper: 'Promo_promoTermsWrapper__oX67o',
        wrapperOne: 'Promo_wrapperOne__Gb2K1',
        wrapperTwo: 'Promo_wrapperTwo__vxkND',
        pcHidden: 'Promo_pcHidden__Ej9sQ',
        mobileHidden: 'Promo_mobileHidden__Q_l_r',
      };
    },
    51279: function (e) {
      e.exports = {
        popupHeading: 'PromocodeTermsPopUp_popupHeading__rK1Ql',
        promoWrapper: 'PromocodeTermsPopUp_promoWrapper__eXZjh',
        wrapperOne: 'PromocodeTermsPopUp_wrapperOne__NDm7O',
        promoIconHeadingWrapper:
          'PromocodeTermsPopUp_promoIconHeadingWrapper__K_ZVc',
        promoIcon: 'PromocodeTermsPopUp_promoIcon__jnZrD',
        promoHeading: 'PromocodeTermsPopUp_promoHeading__TpFWt',
        promoDescription: 'PromocodeTermsPopUp_promoDescription__TyHKs',
        expiryDate: 'PromocodeTermsPopUp_expiryDate__TYsOK',
        wrapperTwo: 'PromocodeTermsPopUp_wrapperTwo__soi86',
        promoCodeNameAam: 'PromocodeTermsPopUp_promoCodeNameAam__ybyuC',
        promoCodeNameThirdParty:
          'PromocodeTermsPopUp_promoCodeNameThirdParty__2efl3',
        copyCodeText: 'PromocodeTermsPopUp_copyCodeText__ZKxCm',
        bookTestButton: 'PromocodeTermsPopUp_bookTestButton___7Kry',
        applyButton: 'PromocodeTermsPopUp_applyButton__hBFs3',
        copyButton: 'PromocodeTermsPopUp_copyButton__24u6Q',
        termsandconditions: 'PromocodeTermsPopUp_termsandconditions__0JzKQ',
      };
    },
    84679: function (e) {
      e.exports = {
        wrapper: 'Reward_wrapper__8e2EY',
        leftContent: 'Reward_leftContent__WEUS2',
        rightContent: 'Reward_rightContent__k23sM',
        firstColumn: 'Reward_firstColumn__iXlOg',
        voucher: 'Reward_voucher__5xS__',
        useRewards: 'Reward_useRewards__wa9jp',
        disabledRewards: 'Reward_disabledRewards__UB5mY',
        rewardHeading: 'Reward_rewardHeading__PgZdN',
        circle: 'Reward_circle__bP4dY',
        termsWrapper: 'Reward_termsWrapper__K8xeb',
        terms: 'Reward_terms__AQDsX',
        howTo: 'Reward_howTo__tm2ti',
        mobileButton: 'Reward_mobileButton__0dsD_',
        rewardAditionalLabel: 'Reward_rewardAditionalLabel__zZi0a',
        rewardAditionalContent: 'Reward_rewardAditionalContent__oORxG',
        borderBottom: 'Reward_borderBottom__QaxBm',
      };
    },
    11025: function (e) {
      e.exports = {
        popupContainer: 'RewardsPopup_popupContainer__zJwoS',
        rectanglePopup: 'RewardsPopup_rectanglePopup__r9wMY',
        rectanglePopupKf: 'RewardsPopup_rectanglePopupKf__t8E7_',
        rectanglePopupPremKf: 'RewardsPopup_rectanglePopupPremKf__1mDpm',
      };
    },
    22468: function (e) {
      e.exports = {
        termsContainer: 'TermsPopup_termsContainer__Qy9Qs',
        rectanglePopupPremKf: 'TermsPopup_rectanglePopupPremKf__BrMel',
      };
    },
    58032: function (e) {
      e.exports = {
        wrapper: 'AuditAccountContainer_wrapper__lu9UG',
        borderClass: 'AuditAccountContainer_borderClass__AmvRt',
        subWrapper: 'AuditAccountContainer_subWrapper__DJLXh',
        heading: 'AuditAccountContainer_heading__uBZJH',
        imageWrapper: 'AuditAccountContainer_imageWrapper__0vGn2',
        alertIcon: 'AuditAccountContainer_alertIcon__G_ZGm',
        actionRequired: 'AuditAccountContainer_actionRequired__ReCBd',
        moreInfoButtonwidth: 'AuditAccountContainer_moreInfoButtonwidth__nvhFX',
        moreInfoButton: 'AuditAccountContainer_moreInfoButton__Q8NhH',
      };
    },
    27809: function (e) {
      e.exports = {
        popupHeading: 'AuditCcLossAlertPopup_popupHeading__B5UDT',
        okButton: 'AuditCcLossAlertPopup_okButton__oNckx',
        popupContent: 'AuditCcLossAlertPopup_popupContent__3IVQ2',
      };
    },
    60162: function (e) {
      e.exports = {
        popupHeading: 'AuditNameMismatchPopup_popupHeading__AwjaE',
        image: 'AuditNameMismatchPopup_image__zFX5g',
        returnImage: 'AuditNameMismatchPopup_returnImage__8npzl',
        okButton: 'AuditNameMismatchPopup_okButton__DCXHv',
        promoIcon: 'AuditNameMismatchPopup_promoIcon__wdLiB',
        popupContent: 'AuditNameMismatchPopup_popupContent__hCN9g',
      };
    },
    65608: function (e) {
      e.exports = {
        popupHeading: 'AuditPdpaAlertPopup_popupHeading__irnQp',
        okButton: 'AuditPdpaAlertPopup_okButton__bW_Yk',
        popupContent: 'AuditPdpaAlertPopup_popupContent__q_aaU',
      };
    },
    75313: function (e) {
      e.exports = {
        popupHeading: 'AuditSecurityAlertPopUP_popupHeading__l4HFT',
        okButton: 'AuditSecurityAlertPopUP_okButton__7UlWU',
        popupContent: 'AuditSecurityAlertPopUP_popupContent__tA_Oq',
      };
    },
    84122: function (e) {
      e.exports = {
        carbonOffsetWrapper: 'CarbonOffsetBanner_carbonOffsetWrapper__9zYDm',
        carbonOffsetImageContainer:
          'CarbonOffsetBanner_carbonOffsetImageContainer__OrRl0',
        carbonOffsetBackgroudImage:
          'CarbonOffsetBanner_carbonOffsetBackgroudImage__9q7Ma',
        carbonOffsetContentContainer:
          'CarbonOffsetBanner_carbonOffsetContentContainer__Mps_Q',
        carbonOffsetHeader: 'CarbonOffsetBanner_carbonOffsetHeader__VVMYF',
        carbonOffsetBodyContent:
          'CarbonOffsetBanner_carbonOffsetBodyContent__ae7_D',
        carbonOffsetCtaContainer:
          'CarbonOffsetBanner_carbonOffsetCtaContainer__BWDLV',
        carbonOffsetCtaText: 'CarbonOffsetBanner_carbonOffsetCtaText__6J5OP',
        carbonOffsetIcon: 'CarbonOffsetBanner_carbonOffsetIcon__JpBrz',
      };
    },
    19177: function (e) {
      e.exports = {
        desktop: 'KrisShopPlaceHolder_desktop__JT9o7',
        mobile: 'KrisShopPlaceHolder_mobile__WP8XW',
        wrapper: 'KrisShopPlaceHolder_wrapper__dhHAn',
        leftBlock: 'KrisShopPlaceHolder_leftBlock__sGfQq',
        rightBlock: 'KrisShopPlaceHolder_rightBlock__ruohL',
        size1: 'KrisShopPlaceHolder_size1__QP_bs',
        size2: 'KrisShopPlaceHolder_size2__Wi2Lv',
        size3: 'KrisShopPlaceHolder_size3__ziZpA',
        size4: 'KrisShopPlaceHolder_size4__UByHI',
      };
    },
    47697: function (e) {
      e.exports = {
        levelOneWrapper: 'KrisShopProducts_levelOneWrapper__trjkN',
        wrapper: 'KrisShopProducts_wrapper__LYCiZ',
        heading: 'KrisShopProducts_heading__Ck_w_',
        description: 'KrisShopProducts_description__QLALW',
        expiryMilesWrapper: 'KrisShopProducts_expiryMilesWrapper__UE2MM',
        messageContainer: 'KrisShopProducts_messageContainer__zqXoT',
        infoIcon: 'KrisShopProducts_infoIcon___ZgMU',
        message: 'KrisShopProducts_message__ChGNd',
        zeroMiles: 'KrisShopProducts_zeroMiles__TbI1P',
        slickStlye: 'KrisShopProducts_slickStlye__CvkOj',
        mobile: 'KrisShopProducts_mobile__Y_n8x',
        leftPadding: 'KrisShopProducts_leftPadding__FZoeQ',
        initialProduct: 'KrisShopProducts_initialProduct__efmVg',
        container: 'KrisShopProducts_container__jf1GD',
        productContainer: 'KrisShopProducts_productContainer__D4leZ',
        productImage: 'KrisShopProducts_productImage__M9i69',
        image: 'KrisShopProducts_image__V5OJA',
        productInformation: 'KrisShopProducts_productInformation__0Imds',
        brand: 'KrisShopProducts_brand__Rc05v',
        title: 'KrisShopProducts_title__lc6eQ',
        badgeContainer: 'KrisShopProducts_badgeContainer__Bfgzb',
        badges: 'KrisShopProducts_badges__0ID6F',
        badgeText: 'KrisShopProducts_badgeText__wzGJP',
        priceContainer: 'KrisShopProducts_priceContainer__8Sm5S',
        discountPrice: 'KrisShopProducts_discountPrice__t5JKL',
        price: 'KrisShopProducts_price__s9XlA',
        loyaltyPriceContainer: 'KrisShopProducts_loyaltyPriceContainer__G5tWe',
        loyaltyPrice: 'KrisShopProducts_loyaltyPrice__6HoHC',
        bannerHeader: 'KrisShopProducts_bannerHeader__HQ5Zt',
        bannerLeftContent: 'KrisShopProducts_bannerLeftContent__d7r1N',
        bannerRightContent: 'KrisShopProducts_bannerRightContent__LpTlG',
        bannerHeading: 'KrisShopProducts_bannerHeading__BxD1I',
        bannerSubHeading: 'KrisShopProducts_bannerSubHeading__FAP7F',
        pelagoHeading: 'KrisShopProducts_pelagoHeading__1jKjN',
        bottomDetails: 'KrisShopProducts_bottomDetails__VHkTb',
        from: 'KrisShopProducts_from__W9UJM',
        fare: 'KrisShopProducts_fare__FzjU1',
        primaryButton: 'KrisShopProducts_primaryButton__x8JBL',
        buttonContent: 'KrisShopProducts_buttonContent__uEiST',
        headerContainer: 'KrisShopProducts_headerContainer__O7mts',
        headerLeftContainer: 'KrisShopProducts_headerLeftContainer__dEW2L',
        headerRightContainer: 'KrisShopProducts_headerRightContainer__n1leP',
        krisShopRightLogo: 'KrisShopProducts_krisShopRightLogo__g3O_F',
      };
    },
    21981: function (e) {
      e.exports = { cardWrapper: 'CardContainer_cardWrapper__g_bB0' };
    },
    50260: function (e) {
      e.exports = {
        popupHeading: 'KFBagaggePopup_popupHeading__k9mGg',
        wrapper: 'KFBagaggePopup_wrapper__a7_Xp',
        tableOuter: 'KFBagaggePopup_tableOuter__S_JV6',
        baggageApplicable: 'KFBagaggePopup_baggageApplicable__u7tK9',
        bottomList: 'KFBagaggePopup_bottomList__pavc5',
        ruleHeader: 'KFBagaggePopup_ruleHeader__Yea_U',
        ruleContent: 'KFBagaggePopup_ruleContent__bfYNZ',
        table: 'KFBagaggePopup_table__nabi4',
        thWithPadding: 'KFBagaggePopup_thWithPadding__sttE1',
        rowHeading: 'KFBagaggePopup_rowHeading__Q1Eqb',
        rowGrey: 'KFBagaggePopup_rowGrey__o10Nd',
        rowDarkGrey: 'KFBagaggePopup_rowDarkGrey__XBDuy',
        ruleAllowance: 'KFBagaggePopup_ruleAllowance__Y3lqM',
        ruleBaggae: 'KFBagaggePopup_ruleBaggae__QCvnw',
      };
    },
    33235: function (e) {
      e.exports = {
        wrapper: 'PassengersAndPreferences_wrapper__LnbTf',
        flightsOdBorderWrapper:
          'PassengersAndPreferences_flightsOdBorderWrapper__PP5Zd',
        flightsOdBorder: 'PassengersAndPreferences_flightsOdBorder__2geqZ',
        dropdown: 'PassengersAndPreferences_dropdown__Cl1_8',
        innerWrapper: 'PassengersAndPreferences_innerWrapper__EmsiG',
        dropdownMenu: 'PassengersAndPreferences_dropdownMenu__fU8Mw',
        flightsMobileDropdDown:
          'PassengersAndPreferences_flightsMobileDropdDown__O_vrC',
        heading: 'PassengersAndPreferences_heading__jO5P6',
        scootWrapper: 'PassengersAndPreferences_scootWrapper__Hm8F3',
        scootIcon: 'PassengersAndPreferences_scootIcon__9NnFg',
        messageWrapper: 'PassengersAndPreferences_messageWrapper__GzmAY',
        scootLabel: 'PassengersAndPreferences_scootLabel__isGhe',
        scootHeading: 'PassengersAndPreferences_scootHeading__9sDTI',
        scootDescription: 'PassengersAndPreferences_scootDescription__gvKK9',
        scootReference: 'PassengersAndPreferences_scootReference__6UqqR',
        scootReferenceNumber:
          'PassengersAndPreferences_scootReferenceNumber__hYKEg',
        scootDesc: 'PassengersAndPreferences_scootDesc__QKiIo',
      };
    },
    84753: function (e) {
      e.exports = {
        card: 'PassengersAndPreferencesCard_card__TunR6',
        passengerContent:
          'PassengersAndPreferencesCard_passengerContent__MZo7C',
        passengerDetails:
          'PassengersAndPreferencesCard_passengerDetails__U1lfi',
        blueDot: 'PassengersAndPreferencesCard_blueDot__1mqXI',
        passengerName: 'PassengersAndPreferencesCard_passengerName__JAC5C',
        infantName: 'PassengersAndPreferencesCard_infantName__OHYMx',
        infantLabel: 'PassengersAndPreferencesCard_infantLabel__TU5Cg',
        passengerNameWithInfant:
          'PassengersAndPreferencesCard_passengerNameWithInfant__KmNB8',
        accompanyAdultDetails:
          'PassengersAndPreferencesCard_accompanyAdultDetails__WtXQS',
        accompanyAdultLabel:
          'PassengersAndPreferencesCard_accompanyAdultLabel__OtzUn',
        kfTierDetails: 'PassengersAndPreferencesCard_kfTierDetails__ir6z4',
        kfTier: 'PassengersAndPreferencesCard_kfTier__9o_o1',
        kfTierCard: 'PassengersAndPreferencesCard_kfTierCard__Slq2B',
        kfTierName: 'PassengersAndPreferencesCard_kfTierName__p8nEi',
        frequentFlyerNumber:
          'PassengersAndPreferencesCard_frequentFlyerNumber__OU4jV',
        offpDetails: 'PassengersAndPreferencesCard_offpDetails__uaXh6',
        offpName: 'PassengersAndPreferencesCard_offpName__VWfEN',
        offpNumber: 'PassengersAndPreferencesCard_offpNumber__XgRQ8',
        pipe: 'PassengersAndPreferencesCard_pipe__sFdEi',
        milesInfo: 'PassengersAndPreferencesCard_milesInfo__XqZoy',
        updateDetails: 'PassengersAndPreferencesCard_updateDetails__bXUWN',
        disabled: 'PassengersAndPreferencesCard_disabled__qAi7T',
        addFreqentNumber:
          'PassengersAndPreferencesCard_addFreqentNumber__BrCxN',
        registeredCustomer:
          'PassengersAndPreferencesCard_registeredCustomer___mTJ4',
      };
    },
    13473: function (e) {
      e.exports = {
        heading: 'PreferencesContent_heading__v8Uu_',
        leftCol: 'PreferencesContent_leftCol__gMLi8',
        hide: 'PreferencesContent_hide__CmGEp',
        standard: 'PreferencesContent_standard__7AJKN',
        mySqStandard: 'PreferencesContent_mySqStandard__8HbwD',
        bold: 'PreferencesContent_bold___t0Xm',
        viewKfBaggageRules: 'PreferencesContent_viewKfBaggageRules__0IV14',
        mealName: 'PreferencesContent_mealName__65JqU',
        preferencesMainContent:
          'PreferencesContent_preferencesMainContent__KRrLt',
        preferencesMainContentMeal:
          'PreferencesContent_preferencesMainContentMeal__kDli_',
        subheading: 'PreferencesContent_subheading__NH8mC',
        hotmeal: 'PreferencesContent_hotmeal__R6O3N',
        rewardsIcon: 'PreferencesContent_rewardsIcon__MmPnX',
        rewardsMainContent: 'PreferencesContent_rewardsMainContent__yAzFN',
        rewardsRemove: 'PreferencesContent_rewardsRemove__tMAAk',
        rewardsSubContent: 'PreferencesContent_rewardsSubContent__O5bJ8',
        rewardsContent: 'PreferencesContent_rewardsContent__mOOpl',
        placeHolderSubContent:
          'PreferencesContent_placeHolderSubContent__Ex8YW',
        preferencesSubContent:
          'PreferencesContent_preferencesSubContent__EzTPz',
        nonXbag: 'PreferencesContent_nonXbag___66RM',
        mealListInner: 'PreferencesContent_mealListInner__Yetzd',
        borderBottom: 'PreferencesContent_borderBottom__Rah1i',
        disabled: 'PreferencesContent_disabled__QVbQd',
        disabledRewardsContainer:
          'PreferencesContent_disabledRewardsContainer__0_Do0',
        preferences: 'PreferencesContent_preferences__jovII',
        preferencesWithHover: 'PreferencesContent_preferencesWithHover__Vans4',
        bundleImg: 'PreferencesContent_bundleImg__RMzzI',
        rewardsContainer: 'PreferencesContent_rewardsContainer__JIDvI',
        preferencesMain: 'PreferencesContent_preferencesMain__ziRkA',
        baggageMain: 'PreferencesContent_baggageMain__Fx7IG',
        additionalInfo: 'PreferencesContent_additionalInfo__x_7jr',
        seatIcon: 'PreferencesContent_seatIcon___kAFD',
        mealIcon: 'PreferencesContent_mealIcon__Zw6oJ',
        baggageIcon: 'PreferencesContent_baggageIcon__QTppf',
        dummyIcon: 'PreferencesContent_dummyIcon____izo',
        chevronIcon: 'PreferencesContent_chevronIcon__n__hD',
        secondary: 'PreferencesContent_secondary__UZQFJ',
        pieceAdtnl: 'PreferencesContent_pieceAdtnl__1N1VE',
        pieceMain: 'PreferencesContent_pieceMain__M_UYt',
        listItem: 'PreferencesContent_listItem__y_NTO',
        anchor: 'PreferencesContent_anchor__uVWMy',
        preferencesContent: 'PreferencesContent_preferencesContent__uyIgh',
        cursorPointer: 'PreferencesContent_cursorPointer__JVmOG',
        mobileBorder: 'PreferencesContent_mobileBorder__kvnHh',
        mealList: 'PreferencesContent_mealList__zMFz6',
        fullWidth: 'PreferencesContent_fullWidth__mfYhd',
        noseatSelected: 'PreferencesContent_noseatSelected__igrdK',
        pendingLabel: 'PreferencesContent_pendingLabel__zEJ6M',
        pendingRed: 'PreferencesContent_pendingRed__zl3ah',
        continueLink: 'PreferencesContent_continueLink__LwesL',
        xbagBaggae: 'PreferencesContent_xbagBaggae__q_YxX',
        continueLinkXbag: 'PreferencesContent_continueLinkXbag__WzUVM',
        additionalBaggage: 'PreferencesContent_additionalBaggage__qupDM',
        desktop: 'PreferencesContent_desktop__SO_Vm',
        mobile: 'PreferencesContent_mobile__YIRkd',
        aditonalText: 'PreferencesContent_aditonalText__9Ti8q',
        maxWeight: 'PreferencesContent_maxWeight__Yt31e',
        orangeBox: 'PreferencesContent_orangeBox__bBWS8',
        rectangle: 'PreferencesContent_rectangle__0SC5p',
        selectionCloses: 'PreferencesContent_selectionCloses__yKi1W',
      };
    },
    99027: function (e) {
      e.exports = {
        test: 'ScAcceptRefuse_test__kQjRn',
        scheduleChangeWrapper: 'ScAcceptRefuse_scheduleChangeWrapper__V__55',
        flightDisruptionWrapper:
          'ScAcceptRefuse_flightDisruptionWrapper__yo0Lp',
        schedhuleChangeHeading: 'ScAcceptRefuse_schedhuleChangeHeading__daSdH',
        flightDisruptionHeading:
          'ScAcceptRefuse_flightDisruptionHeading__4iYpT',
        scDepToDestination: 'ScAcceptRefuse_scDepToDestination__gUCUJ',
        scContent: 'ScAcceptRefuse_scContent__aT2AC',
        scFlightTableHeadingRow:
          'ScAcceptRefuse_scFlightTableHeadingRow__Z4Luw',
        scNewFlightDiv: 'ScAcceptRefuse_scNewFlightDiv__sVWrh',
        scDisplayFlightsDiv: 'ScAcceptRefuse_scDisplayFlightsDiv__U7UWz',
        scOriginalFlightDiv: 'ScAcceptRefuse_scOriginalFlightDiv__1PeoK',
        scButtonDiv: 'ScAcceptRefuse_scButtonDiv__Xnh9v',
        fdButtonDiv: 'ScAcceptRefuse_fdButtonDiv__V5w4B',
        scRefuse: 'ScAcceptRefuse_scRefuse__FQRBF',
        scContactMsg: 'ScAcceptRefuse_scContactMsg__1aqYR',
        scContactMsgP: 'ScAcceptRefuse_scContactMsgP__YF15M',
        scContactAnchor: 'ScAcceptRefuse_scContactAnchor__sw6Cw',
        furtherAssistanceDiv: 'ScAcceptRefuse_furtherAssistanceDiv__j25fQ',
        alertIcon: 'ScAcceptRefuse_alertIcon__CkgnU',
        flightsDiv: 'ScAcceptRefuse_flightsDiv__s8srh',
        dateDiv: 'ScAcceptRefuse_dateDiv__msF38',
        depatureDiv: 'ScAcceptRefuse_depatureDiv__43G7Z',
        showOnOnlyDesktop: 'ScAcceptRefuse_showOnOnlyDesktop__g9UZB',
        acceptBtn: 'ScAcceptRefuse_acceptBtn__vjx6W',
        okBtn: 'ScAcceptRefuse_okBtn__41V5u',
        fdokBtn: 'ScAcceptRefuse_fdokBtn__D_gTe',
        scContentMobile: 'ScAcceptRefuse_scContentMobile__CA0o6',
        mobScContetnWrapper: 'ScAcceptRefuse_mobScContetnWrapper__7mVUA',
        mobFlightScItemWrapper: 'ScAcceptRefuse_mobFlightScItemWrapper__nykKQ',
        mobScItemHeading: 'ScAcceptRefuse_mobScItemHeading__RTqoO',
        mobScItemValue: 'ScAcceptRefuse_mobScItemValue__Jnsfn',
        mobScItemValueNewFlight:
          'ScAcceptRefuse_mobScItemValueNewFlight__cVYET',
        scMessage: 'ScAcceptRefuse_scMessage__X_0Cr',
        mobNewFlightWrapper: 'ScAcceptRefuse_mobNewFlightWrapper__nyoH0',
        mobScOriginalFlightWrapper:
          'ScAcceptRefuse_mobScOriginalFlightWrapper__HSxs7',
        mobscNewFlight: 'ScAcceptRefuse_mobscNewFlight__qX07u',
        childrenWrapper: 'ScAcceptRefuse_childrenWrapper__Q5vrb',
        fdSeperatorLine: 'ScAcceptRefuse_fdSeperatorLine__nUIuY',
        fdBlock: 'ScAcceptRefuse_fdBlock__vxQ0Y',
        fdBox: 'ScAcceptRefuse_fdBox__RD6Ki',
        fdBoxContent: 'ScAcceptRefuse_fdBoxContent__WXDwy',
        fdContent: 'ScAcceptRefuse_fdContent__fgK9D',
        fdBoxTitle: 'ScAcceptRefuse_fdBoxTitle__o746P',
        fdBoxDesc: 'ScAcceptRefuse_fdBoxDesc__UrXw1',
        fdMessage: 'ScAcceptRefuse_fdMessage__EEBpz',
        chevronIcon: 'ScAcceptRefuse_chevronIcon__qDq8Y',
        fdchevronIcon: 'ScAcceptRefuse_fdchevronIcon__Dx67n',
        scfdWarningBox: 'ScAcceptRefuse_scfdWarningBox__VHQ1q',
        fdMessageBox: 'ScAcceptRefuse_fdMessageBox__qbxQy',
        clockIcon: 'ScAcceptRefuse_clockIcon__ivIdX',
        scContentDiv: 'ScAcceptRefuse_scContentDiv__fv9VB',
        scDepToDestinationMultiTk:
          'ScAcceptRefuse_scDepToDestinationMultiTk__ye3gc',
        scFlightSpacing: 'ScAcceptRefuse_scFlightSpacing__ktr_e',
        scOriginCodeSpacing: 'ScAcceptRefuse_scOriginCodeSpacing__mqHua',
        scDestCodeSpacing: 'ScAcceptRefuse_scDestCodeSpacing__xVAME',
        scDash: 'ScAcceptRefuse_scDash__L9DSX',
        scMainContentDiv: 'ScAcceptRefuse_scMainContentDiv__xjV8b',
        scfdChildrenWrapper: 'ScAcceptRefuse_scfdChildrenWrapper__Ztfb2',
      };
    },
    58967: function (e) {
      e.exports = {
        wrapper: 'TravelAdvisoryContainer_wrapper__r8mLR',
        blueInfoIcon: 'TravelAdvisoryContainer_blueInfoIcon__Zxjz6',
        withoutNationalityBanner:
          'TravelAdvisoryContainer_withoutNationalityBanner__EXRec',
        borderClass: 'TravelAdvisoryContainer_borderClass__5RyFC',
        detailedRgltns: 'TravelAdvisoryContainer_detailedRgltns__vrWu4',
        showPassangerMsg: 'TravelAdvisoryContainer_showPassangerMsg__DgIq5',
        hidePassangerMsg: 'TravelAdvisoryContainer_hidePassangerMsg__EU2Cp',
        chevronIconDown: 'TravelAdvisoryContainer_chevronIconDown__tWkHm',
        chevronIconUp: 'TravelAdvisoryContainer_chevronIconUp__nUa5X',
        hidePassanger: 'TravelAdvisoryContainer_hidePassanger__7WvQG',
        showPassangers: 'TravelAdvisoryContainer_showPassangers__7Alxo',
        iconClass: 'TravelAdvisoryContainer_iconClass__yTfdD',
        upiconClass: 'TravelAdvisoryContainer_upiconClass__ZDUJ_',
        hidePassangers: 'TravelAdvisoryContainer_hidePassangers__ZRvjn',
        subWrapper: 'TravelAdvisoryContainer_subWrapper__TyKgY',
        subWrapperWithoutBorder:
          'TravelAdvisoryContainer_subWrapperWithoutBorder__jUnjB',
        heading: 'TravelAdvisoryContainer_heading__uVC1g',
        imageWrapper: 'TravelAdvisoryContainer_imageWrapper__mCa1S',
        travelIcon: 'TravelAdvisoryContainer_travelIcon__6R9nN',
        traveImportant: 'TravelAdvisoryContainer_traveImportant__DKdJN',
        caveatWrapper: 'TravelAdvisoryContainer_caveatWrapper__0a9Qg',
        alertIcon: 'TravelAdvisoryContainer_alertIcon__yQP9_',
        caveatLabel: 'TravelAdvisoryContainer_caveatLabel__9DK0p',
        caveatMessageWrapper:
          'TravelAdvisoryContainer_caveatMessageWrapper__ns_q4',
        translateLink: 'TravelAdvisoryContainer_translateLink__qZ3kk',
        taDescription: 'TravelAdvisoryContainer_taDescription__Vpw5J',
        taCheckNowBtnWidth: 'TravelAdvisoryContainer_taCheckNowBtnWidth__9tjmJ',
        taCheckNowBtn: 'TravelAdvisoryContainer_taCheckNowBtn__I7LLG',
      };
    },
    41791: function (e) {
      e.exports = {
        childrenWrapper: 'AciTurnOffPopup_childrenWrapper__63ajZ',
        turnOffPopup: 'AciTurnOffPopup_turnOffPopup__DFIvK',
        turnOffTitle: 'AciTurnOffPopup_turnOffTitle__ojffL',
        turnOffPreamble: 'AciTurnOffPopup_turnOffPreamble__uWOcR',
        passengerName: 'AciTurnOffPopup_passengerName__OcV_p',
        passengerInner: 'AciTurnOffPopup_passengerInner__sus3m',
        passengerOuter: 'AciTurnOffPopup_passengerOuter__YzKkh',
        infant: 'AciTurnOffPopup_infant__QuTv_',
        passengerIndex: 'AciTurnOffPopup_passengerIndex__F9B8q',
        flightTitle: 'AciTurnOffPopup_flightTitle__2Ilzn',
        flightSubTitle: 'AciTurnOffPopup_flightSubTitle__ea9wG',
        flightDetails: 'AciTurnOffPopup_flightDetails__vRhbn',
        buttonOuter: 'AciTurnOffPopup_buttonOuter__L9qkS',
        confirmButton: 'AciTurnOffPopup_confirmButton__sdnhX',
        backButton: 'AciTurnOffPopup_backButton__1yYS6',
        error: 'AciTurnOffPopup_error__Bo5XE',
        errorInner: 'AciTurnOffPopup_errorInner__g5MtZ',
        closeIcon: 'AciTurnOffPopup_closeIcon__S2ZoK',
        errorMessage: 'AciTurnOffPopup_errorMessage__J7vZK',
      };
    },
    90502: function (e) {
      e.exports = {
        wrapper: 'AutoCheckInBanner_wrapper__SaH4q',
        aciContent: 'AutoCheckInBanner_aciContent__sPQeb',
        aciOn: 'AutoCheckInBanner_aciOn___H1Ay',
        aciDetails: 'AutoCheckInBanner_aciDetails__LgnlC',
        aciIcon: 'AutoCheckInBanner_aciIcon__0pgi3',
        aciItem1: 'AutoCheckInBanner_aciItem1__hcfb2',
        aciItemWidth: 'AutoCheckInBanner_aciItemWidth__jL9kv',
        aciItem2: 'AutoCheckInBanner_aciItem2__0Bt_O',
        aciOffButton: 'AutoCheckInBanner_aciOffButton__FCbvN',
        aciOnText: 'AutoCheckInBanner_aciOnText__q0jQs',
        tickIcon: 'AutoCheckInBanner_tickIcon___qhef',
        aciTitle: 'AutoCheckInBanner_aciTitle__xkvYd',
        aciDescription: 'AutoCheckInBanner_aciDescription__s38CQ',
        aciButton: 'AutoCheckInBanner_aciButton__uBqDV',
        aciOnContent: 'AutoCheckInBanner_aciOnContent__B_JU4',
        aciOnTitle: 'AutoCheckInBanner_aciOnTitle__1Z6uf',
        aciPaxDetails: 'AutoCheckInBanner_aciPaxDetails__QV9n9',
        aciPaxName: 'AutoCheckInBanner_aciPaxName__iExdp',
        paxLabel: 'AutoCheckInBanner_paxLabel__xm3Xx',
        aciPipe: 'AutoCheckInBanner_aciPipe__LmBZF',
        aciPaxToggleLink: 'AutoCheckInBanner_aciPaxToggleLink__uYzNX',
        chevronIcon: 'AutoCheckInBanner_chevronIcon__tjvFg',
        chevronActive: 'AutoCheckInBanner_chevronActive__fGUeJ',
        aciThreeDotsIcon: 'AutoCheckInBanner_aciThreeDotsIcon__ORF85',
        aciThreeDotsActive: 'AutoCheckInBanner_aciThreeDotsActive__Fty22',
        aciThreeDotsNotActive: 'AutoCheckInBanner_aciThreeDotsNotActive__WbtdH',
        aciDropDownOptions: 'AutoCheckInBanner_aciDropDownOptions__stg0Z',
        aciUpdatePaxDetails: 'AutoCheckInBanner_aciUpdatePaxDetails__UkP7g',
        aciTurnOff: 'AutoCheckInBanner_aciTurnOff__igc8J',
        autoCheckInUpdate: 'AutoCheckInBanner_autoCheckInUpdate__1Lwqj',
        turnOffTitle: 'AutoCheckInBanner_turnOffTitle__8RIQW',
        buttonOuter: 'AutoCheckInBanner_buttonOuter__U5xr2',
        turnOffPreamble: 'AutoCheckInBanner_turnOffPreamble__23zQ5',
        okButton: 'AutoCheckInBanner_okButton__PuEI8',
        childrenWrapper: 'AutoCheckInBanner_childrenWrapper__SfZu7',
        aciTurnOffDisabled: 'AutoCheckInBanner_aciTurnOffDisabled__CjvAP',
        aciUpdatePaxDisabled: 'AutoCheckInBanner_aciUpdatePaxDisabled__hJ8Jz',
      };
    },
    95394: function (e) {
      e.exports = {
        wrapper: 'Banner_wrapper__or3T9',
        creditCheck: 'Banner_creditCheck__MTpW0',
        overView: 'Banner_overView__cEOrC',
      };
    },
    77484: function (e) {
      e.exports = { wrapper: 'BannerImage_wrapper__Nkbk_' };
    },
    18619: function (e) {
      e.exports = {
        wrapper: 'BookingReferenceWrapper_wrapper__5ZY4C',
        backToTripLink: 'BookingReferenceWrapper_backToTripLink___qWnt',
        headerWrap: 'BookingReferenceWrapper_headerWrap__Ib0Hd',
      };
    },
    42274: function (e) {
      e.exports = { wrapper: 'ContentWrapper_wrapper__DfHRU' };
    },
    2224: function (e) {
      e.exports = {
        errorOuterContainer: 'ErrorPopup_errorOuterContainer__RXPNl',
        erroIcon: 'ErrorPopup_erroIcon___sOIc',
        errorContent: 'ErrorPopup_errorContent__hb6oI',
        title: 'ErrorPopup_title__yjHMg',
        assistance: 'ErrorPopup_assistance__hkSHs',
        buttonOuter: 'ErrorPopup_buttonOuter__DW_2S',
        okayBtn: 'ErrorPopup_okayBtn__KXaxO',
      };
    },
    52862: function (e) {
      e.exports = {
        mastHeadTitle: 'MastHeadTitle_mastHeadTitle__19HnH',
        details: 'MastHeadTitle_details__mebNz',
        title: 'MastHeadTitle_title__kUbCm',
        subtitle: 'MastHeadTitle_subtitle__ElBdc',
      };
    },
    49043: function (e) {
      e.exports = {
        wrapper: 'KFInformationBanner_wrapper___ff5w',
        wrapperstrong: 'KFInformationBanner_wrapperstrong__xAYBh',
        kfInfoBannerContent: 'KFInformationBanner_kfInfoBannerContent__L13Yi',
        kfInfoBannerButton: 'KFInformationBanner_kfInfoBannerButton__zO3de',
        kfInfoBannerHeading: 'KFInformationBanner_kfInfoBannerHeading__C0ewx',
        kfInfoBannerText: 'KFInformationBanner_kfInfoBannerText__Ps2QN',
      };
    },
    36090: function (e) {
      e.exports = {
        wrapper: 'KFSignUpBanner_wrapper__YbdvJ',
        wrapperstrong: 'KFSignUpBanner_wrapperstrong__2qYa4',
        signupBannerContent: 'KFSignUpBanner_signupBannerContent__xZCoa',
        signupBannerHeading: 'KFSignUpBanner_signupBannerHeading__63F_v',
        signupBannerText: 'KFSignUpBanner_signupBannerText__8s8nE',
        inlineForm: 'KFSignUpBanner_inlineForm__Bx_DG',
        signupButton: 'KFSignUpBanner_signupButton__k6Lbc',
        dropdown: 'KFSignUpBanner_dropdown__M4Zxu',
        inputbox: 'KFSignUpBanner_inputbox__tzzVH',
        contentWrapper: 'KFSignUpBanner_contentWrapper__NEVYL',
        dummyHeight: 'KFSignUpBanner_dummyHeight__3n0El',
      };
    },
    48594: function (e) {
      e.exports = {
        wrapper: 'AlternateFlightsMessage_wrapper__tahlv',
        alertIcon: 'AlternateFlightsMessage_alertIcon__Ei30Y',
        label: 'AlternateFlightsMessage_label__9i9sC',
        selectFlightButton: 'AlternateFlightsMessage_selectFlightButton__GeHJe',
        disableSelectFlightButton:
          'AlternateFlightsMessage_disableSelectFlightButton__2FZF1',
        infoMessage: 'AlternateFlightsMessage_infoMessage__8YYNh',
        messageWrapper: 'AlternateFlightsMessage_messageWrapper__ePCrs',
      };
    },
    49303: function (e) {
      e.exports = {
        wrapper: 'DisruptionMessage_wrapper__vieum',
        label: 'DisruptionMessage_label__HwOvQ',
        messageWrapper: 'DisruptionMessage_messageWrapper__ufXVu',
        clockIcon: 'DisruptionMessage_clockIcon__qy3RA',
        mainButton: 'DisruptionMessage_mainButton__bCEDI',
      };
    },
    20627: function (e) {
      e.exports = {
        wrapper: 'SCMessage_wrapper__xWww9',
        clockIcon: 'SCMessage_clockIcon__6BbLs',
        label: 'SCMessage_label__dRZhT',
        scButton: 'SCMessage_scButton__VVzaR',
        infoMessage: 'SCMessage_infoMessage__G8DEQ',
        messageWrapper: 'SCMessage_messageWrapper__UQQ85',
      };
    },
    24866: function (e) {
      e.exports = {
        wrapper: 'SecureFareMessage_wrapper__r_D5K',
        clockIcon: 'SecureFareMessage_clockIcon__H8qzI',
        label: 'SecureFareMessage_label__C9k4W',
        secureFareButton: 'SecureFareMessage_secureFareButton__liPWc',
        infoMessage: 'SecureFareMessage_infoMessage__MfLsu',
        messageWrapper: 'SecureFareMessage_messageWrapper__uRlAT',
      };
    },
    87111: function (e) {
      e.exports = {
        outerWrapper: 'ResidualValueContainer_outerWrapper__rh_VH',
        innerWrapper: 'ResidualValueContainer_innerWrapper__lN6WW',
        title: 'ResidualValueContainer_title__vuCYF',
        content: 'ResidualValueContainer_content__Y0tgG',
        infoBanner: 'ResidualValueContainer_infoBanner__tnNKM',
        blueInfoIcon: 'ResidualValueContainer_blueInfoIcon__UJflt',
        multipaxTable: 'ResidualValueContainer_multipaxTable__2xSdH',
        singlePax: 'ResidualValueContainer_singlePax___OwEQ',
        bold: 'ResidualValueContainer_bold__HwNZ0',
        tableData: 'ResidualValueContainer_tableData__gTG2K',
        tableRow: 'ResidualValueContainer_tableRow__BeYnT',
        tableWidth: 'ResidualValueContainer_tableWidth__3lcWe',
        residualCredits: 'ResidualValueContainer_residualCredits__aPttR',
      };
    },
    59365: function (e) {
      e.exports = {
        wrapper: 'UsefulInformation_wrapper__yL94_',
        usefulInfo: 'UsefulInformation_usefulInfo__wTEuU',
        usefulInfoItem: 'UsefulInformation_usefulInfoItem__CTazX',
        usefulInfoMealLink: 'UsefulInformation_usefulInfoMealLink__LpYAE',
        usefulInfoItemFlex: 'UsefulInformation_usefulInfoItemFlex__eajf8',
        usefulInfoItemText: 'UsefulInformation_usefulInfoItemText__LpMMb',
        lightIcon: 'UsefulInformation_lightIcon__xWlGN',
        heading: 'UsefulInformation_heading__K97PP',
      };
    },
  },
  function (e) {
    e.O(0, [662, 56, 339, 950, 194, 274, 648, 774, 888, 179], function () {
      return (n = 66873), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
