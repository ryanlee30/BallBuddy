(this.webpackJsonpballbuddy = this.webpackJsonpballbuddy || []).push([
  [0],
  {
    16: function (e, t, a) {},
    39: function (e, t, a) {
      e.exports = a.p + 'static/media/outdoorcourt.007806b0.jpg';
    },
    40: function (e, t, a) {
      e.exports = a.p + 'static/media/indoorcourt.bed39693.jpg';
    },
    47: function (e, t, a) {
      e.exports = a(76);
    },
    52: function (e, t, a) {},
    53: function (e, t, a) {},
    73: function (e, t) {},
    76: function (e, t, a) {
      'use strict';
      a.r(t);
      var n = a(0),
        o = a.n(n),
        r = a(19),
        l = a.n(r),
        i = (a(52), a(53), a(12)),
        s = a(1),
        c = a(3),
        u = a(4),
        d = a(6),
        p = a(5),
        m =
          (a(16),
          (function (e) {
            Object(d.a)(a, e);
            var t = Object(p.a)(a);
            function a(e) {
              var n;
              return (
                Object(c.a)(this, a),
                ((n = t.call(this, e)).state = { location: 'Loading...' }),
                n
              );
            }
            return (
              Object(u.a)(a, [
                {
                  key: 'componentDidMount',
                  value: function () {
                    var e = this,
                      t = document.createElement('script');
                    (t.src =
                      'https://maps.googleapis.com/maps/api/js?key=AIzaSyAy5wTTEXTXkSbGnWvQNwD_fb-VaZc1qYk&libraries=places'),
                      window.document.body.appendChild(t),
                      t.addEventListener('load', function () {
                        navigator.geolocation &&
                          navigator.geolocation.getCurrentPosition(function (
                            t,
                          ) {
                            new window.google.maps.Geocoder().geocode(
                              {
                                location: {
                                  lat: t.coords.latitude,
                                  lng: t.coords.longitude,
                                },
                              },
                              function (t, a) {
                                if ('OK' === a) {
                                  var n = t.filter(function (e) {
                                    return e.types.includes('locality');
                                  });
                                  e.setState({
                                    location: n[0].formatted_address,
                                  });
                                } else
                                  window.alert('Geocoder failed due to: ' + a);
                              },
                            );
                          });
                      });
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return o.a.createElement(
                      'header',
                      null,
                      o.a.createElement('h1', null, this.state.location),
                    );
                  },
                },
              ]),
              a
            );
          })(n.Component)),
        h = a(10),
        g = a.n(h),
        b = a(13),
        f = a(55);
      a(56);
      f.initializeApp({
        apiKey: 'AIzaSyAy5wTTEXTXkSbGnWvQNwD_fb-VaZc1qYk',
        authDomain: 'ballbuddy.firebaseapp.com',
        databaseURL: 'https://ballbuddy.firebaseio.com',
        projectId: 'ballbuddy',
        storageBucket: 'ballbuddy.appspot.com',
        messagingSenderId: '978963257379',
        appId: '1:978963257379:web:f0f171e6d1440e3927f996',
      });
      var E = f,
        v =
          (n.Component,
          (function (e) {
            Object(d.a)(a, e);
            var t = Object(p.a)(a);
            function a(e) {
              var n;
              return (
                Object(c.a)(this, a),
                ((n = t.call(this, e)).googleMapRef = o.a.createRef()),
                n
              );
            }
            return (
              Object(u.a)(a, [
                {
                  key: 'componentDidMount',
                  value: function () {
                    var e = this,
                      t = document.createElement('script');
                    (t.src =
                      'https://maps.googleapis.com/maps/api/js?key=AIzaSyAy5wTTEXTXkSbGnWvQNwD_fb-VaZc1qYk&libraries=places'),
                      window.document.body.appendChild(t),
                      t.addEventListener('load', function () {
                        var t = new window.google.maps.Map(
                          e.googleMapRef.current,
                          {
                            zoom: 15,
                            center: {
                              lat: parseFloat(e.props.location.split(',')[0]),
                              lng: parseFloat(e.props.location.split(',')[1]),
                            },
                            disableDefaultUI: !0,
                            mapTypeId: 'hybrid',
                          },
                        );
                        new window.google.maps.Marker({
                          position: {
                            lat: parseFloat(e.props.location.split(',')[0]),
                            lng: parseFloat(e.props.location.split(',')[1]),
                          },
                          map: t,
                        });
                      });
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return o.a.createElement(
                      'div',
                      null,
                      o.a.createElement('div', {
                        id: 'google-map',
                        ref: this.googleMapRef,
                        style: { width: '400px', height: '300px' },
                      }),
                      o.a.createElement(
                        'a',
                        {
                          id: 'getDirection',
                          href:
                            'https://www.google.com/maps/search/?api=1&query=' +
                            parseFloat(this.props.location.split(',')[0]) +
                            ',' +
                            parseFloat(this.props.location.split(',')[1]),
                          target: '_blank',
                        },
                        o.a.createElement('h3', null, 'Get Directions'),
                      ),
                    );
                  },
                },
              ]),
              a
            );
          })(n.Component)),
        y = a(39),
        w = a.n(y),
        j = a(40),
        k = a.n(j),
        O = (function (e) {
          Object(d.a)(a, e);
          var t = Object(p.a)(a);
          function a(e) {
            var n;
            return (
              Object(c.a)(this, a),
              ((n = t.call(this, e)).componentWillMount = (function () {
                var e = Object(b.a)(
                  g.a.mark(function e(t) {
                    var a, o, r;
                    return g.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = E.firestore()),
                              (o = a
                                .collection('courts')
                                .doc(n.props.id)
                                .collection('waitlist')),
                              (e.next = 4),
                              o.get()
                            );
                          case 4:
                            (r = e.sent),
                              console.log(r),
                              r.empty
                                ? n.setState({ busy: 'EMPTY' })
                                : r.size <= 5
                                ? n.setState({ busy: 'OKAY' })
                                : n.setState({ busy: 'BUSY' });
                          case 7:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.handleClick = function (e) {
                console.log(n.props.id),
                  n.props.history.push('/details/' + n.props.id);
              }),
              (n.state = { busy: 'EMPTY' }),
              n
            );
          }
          return (
            Object(u.a)(a, [
              {
                key: 'render',
                value: function () {
                  return o.a.createElement(
                    'div',
                    null,
                    o.a.createElement('div', { className: 'line' }),
                    o.a.createElement(
                      'div',
                      { className: 'court-object', onClick: this.handleClick },
                      o.a.createElement('img', {
                        src: this.props.data.outdoor ? w.a : k.a,
                        alt: 'placeholder',
                      }),
                      o.a.createElement(
                        'div',
                        { className: 'court-info' },
                        o.a.createElement(
                          'div',
                          { className: 'court-details' },
                          o.a.createElement(
                            'h3',
                            null,
                            this.props.data.outdoor ? 'Outdoor' : 'Indoor',
                          ),
                          o.a.createElement(
                            'h3',
                            null,
                            this.props.data.hoops + ' hoops',
                          ),
                        ),
                        o.a.createElement(
                          'div',
                          { className: 'court-name' },
                          o.a.createElement('h2', null, this.props.data.name),
                        ),
                      ),
                      o.a.createElement(
                        'div',
                        { className: 'court-populated' },
                        o.a.createElement(
                          'h3',
                          null,
                          o.a.createElement('mark', null, 'Details'),
                        ),
                        o.a.createElement('h3', null, this.state.busy),
                      ),
                    ),
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        S = Object(s.e)(O),
        C = (function (e) {
          Object(d.a)(a, e);
          var t = Object(p.a)(a);
          function a(e) {
            var n;
            return (
              Object(c.a)(this, a),
              ((n = t.call(this, e)).componentDidMount = (function () {
                var e = Object(b.a)(
                  g.a.mark(function e(t) {
                    var a, o, r, l;
                    return g.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = E.firestore()),
                              (o = a.collection('courts')),
                              (e.next = 4),
                              o.get()
                            );
                          case 4:
                            (r = e.sent),
                              (l = {}),
                              r.forEach(function (e) {
                                l[e.id] = e.data();
                              }),
                              n.setState({ data: l });
                          case 8:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.state = { data: null }),
              n
            );
          }
          return (
            Object(u.a)(a, [
              {
                key: 'render',
                value: function () {
                  var e = this;
                  return null == this.state.data
                    ? o.a.createElement('span', null)
                    : o.a.createElement(
                        'div',
                        { className: 'courts' },
                        o.a.createElement(
                          'div',
                          { className: 'court-container' },
                          Object.keys(this.state.data).map(function (t) {
                            return o.a.createElement(S, {
                              data: e.state.data[t],
                              id: t,
                              key: t,
                            });
                          }),
                        ),
                        o.a.createElement(
                          i.b,
                          { to: '/new-court' },
                          '+ \xa0\xa0  Add Court',
                        ),
                      );
                },
              },
            ]),
            a
          );
        })(n.Component),
        I = a(20),
        x = (function (e) {
          Object(d.a)(a, e);
          var t = Object(p.a)(a);
          function a() {
            var e;
            return (
              Object(c.a)(this, a),
              ((e = t.call(this)).updateInput = function (t) {
                e.setState(Object(I.a)({}, t.target.name, t.target.value));
              }),
              (e.lightsTrue = function () {
                e.setState({ lights: Boolean(1) });
              }),
              (e.lightsFalse = function () {
                e.setState({ lights: Boolean(0) });
              }),
              (e.outdoorTrue = function () {
                e.setState({ outdoor: Boolean(1) });
              }),
              (e.outdoorFalse = function () {
                e.setState({ outdoor: Boolean(0) });
              }),
              (e.addUser = function (t) {
                t.preventDefault();
                var a = E.firestore();
                a.settings({ timestampsInSnapshots: !0 }),
                  a.collection('courts').add({
                    name: e.state.name,
                    hoops: e.state.hoops,
                    location: e.state.location,
                    lights: e.state.lights,
                    outdoor: e.state.outdoor,
                  }),
                  e.setState({
                    name: '',
                    hoops: '',
                    location: '',
                    lights: !1,
                    outdoor: !0,
                  }),
                  e.props.history.push('/');
              }),
              (e.state = { name: '', hoops: '', location: '', lights: '' }),
              (e.googleMapRef = o.a.createRef()),
              e
            );
          }
          return (
            Object(u.a)(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = document.createElement('script');
                  (t.src =
                    'https://maps.googleapis.com/maps/api/js?key=AIzaSyAy5wTTEXTXkSbGnWvQNwD_fb-VaZc1qYk&libraries=places'),
                    window.document.body.appendChild(t),
                    t.addEventListener('load', function () {
                      navigator.geolocation
                        ? navigator.geolocation.getCurrentPosition(function (
                            t,
                          ) {
                            e.setState({
                              location:
                                parseFloat(t.coords.latitude) +
                                ',' +
                                parseFloat(t.coords.longitude),
                            });
                            var a = new window.google.maps.Map(
                                e.googleMapRef.current,
                                {
                                  zoom: 15,
                                  center: {
                                    lat: t.coords.latitude,
                                    lng: t.coords.longitude,
                                  },
                                  disableDefaultUI: !0,
                                  mapTypeId: 'hybrid',
                                },
                              ),
                              n = new window.google.maps.Marker({
                                position: {
                                  lat: t.coords.latitude,
                                  lng: t.coords.longitude,
                                },
                                map: a,
                                draggable: !0,
                              });
                            window.google.maps.event.addListener(
                              n,
                              'drag',
                              function () {
                                e.setState({
                                  location:
                                    parseFloat(n.getPosition().lat()) +
                                    ',' +
                                    parseFloat(n.getPosition().lng()),
                                });
                              },
                            );
                          })
                        : window.alert('Please enable location services.');
                    });
                },
              },
              {
                key: 'render',
                value: function () {
                  return o.a.createElement(
                    'form',
                    { onSubmit: this.addUser, className: 'new-court' },
                    o.a.createElement(
                      'label',
                      { for: 'hoops' },
                      "what's the name of this court?",
                    ),
                    o.a.createElement('input', {
                      type: 'text',
                      name: 'name',
                      value: this.state.name,
                      onChange: this.updateInput,
                      required: !0,
                    }),
                    o.a.createElement('br', null),
                    o.a.createElement(
                      'label',
                      { for: 'hoops' },
                      'how many hoops at this court?',
                    ),
                    o.a.createElement('input', {
                      type: 'number',
                      name: 'hoops',
                      onChange: this.updateInput,
                      value: this.state.hoops,
                      min: '1',
                      max: '12',
                      step: '1',
                      required: !0,
                    }),
                    o.a.createElement('br', null),
                    o.a.createElement('input', {
                      hidden: !0,
                      type: 'text',
                      name: 'location',
                      onChange: this.updateInput,
                      value: this.state.location,
                      required: !0,
                    }),
                    o.a.createElement(
                      'label',
                      { for: 'lights' },
                      'are there lights at this court?',
                    ),
                    o.a.createElement(
                      'label',
                      null,
                      o.a.createElement('input', {
                        type: 'radio',
                        name: 'lights',
                        checked: !0 === this.state.lights,
                        onChange: this.lightsTrue,
                        required: !0,
                      }),
                      'yes',
                    ),
                    o.a.createElement(
                      'label',
                      null,
                      o.a.createElement('input', {
                        type: 'radio',
                        name: 'lights',
                        required: !0,
                        onChange: this.lightsFalse,
                        checked: !1 === this.state.lights,
                      }),
                      'no',
                    ),
                    o.a.createElement('br', null),
                    o.a.createElement(
                      'label',
                      { for: 'outdoor' },
                      'is this court outdoors?',
                    ),
                    o.a.createElement(
                      'label',
                      null,
                      o.a.createElement('input', {
                        type: 'radio',
                        name: 'outdoor',
                        checked: !0 === this.state.outdoor,
                        onChange: this.outdoorTrue,
                        required: !0,
                      }),
                      'yes',
                    ),
                    o.a.createElement(
                      'label',
                      null,
                      o.a.createElement('input', {
                        type: 'radio',
                        name: 'outdoor',
                        required: !0,
                        onChange: this.outdoorFalse,
                        checked: !1 === this.state.outdoor,
                      }),
                      'no',
                    ),
                    o.a.createElement('br', null),
                    o.a.createElement(
                      'label',
                      { for: 'location' },
                      "where's the court? (drag the pin)",
                    ),
                    o.a.createElement('br', null),
                    o.a.createElement('div', {
                      id: 'google-map',
                      ref: this.googleMapRef,
                    }),
                    o.a.createElement('button', { type: 'submit' }, 'Submit'),
                  );
                },
              },
            ]),
            a
          );
        })(o.a.Component),
        M = Object(s.e)(x),
        T = a(46),
        N = (function (e) {
          Object(d.a)(a, e);
          var t = Object(p.a)(a);
          function a(e) {
            var n;
            return (
              Object(c.a)(this, a),
              ((n = t.call(this, e)).toggle = function () {
                var e = n.state.open;
                n.setState({ open: !e });
              }),
              (n.updateInput = function (e) {
                n.setState(Object(I.a)({}, e.target.name, e.target.value));
              }),
              (n.componentWillMount = (function () {
                var e = Object(b.a)(
                  g.a.mark(function e(t) {
                    var a, o, r, l, i, s;
                    return g.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = E.firestore()),
                              (o = a
                                .collection('courts')
                                .doc(n.props.match.params.id)),
                              (e.next = 4),
                              o.get()
                            );
                          case 4:
                            return (
                              (r = e.sent),
                              n.setState({ data: r.data() }),
                              (l = a
                                .collection('courts')
                                .doc(n.props.match.params.id)
                                .collection('waitlist')),
                              (e.next = 9),
                              l.get()
                            );
                          case 9:
                            (i = e.sent),
                              (s = {}),
                              i.forEach(function (e) {
                                s[e.id] = e.data();
                              }),
                              n.setState({ waitlist: s });
                          case 13:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.waitList = (function () {
                var e = Object(b.a)(
                  g.a.mark(function e(t) {
                    var a, o;
                    return g.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = new Date()),
                              t.preventDefault(),
                              (o = E.firestore()).settings({
                                timestampsInSnapshots: !0,
                              }),
                              (e.next = 6),
                              o
                                .collection('courts')
                                .doc(n.props.match.params.id)
                                .collection('waitlist')
                                .add({
                                  name: n.state.name,
                                  number: n.state.number,
                                  timeAdded:
                                    a.getHours() + ':' + a.getMinutes(),
                                })
                            );
                          case 6:
                            n.setState({
                              name: '',
                              hoops: '',
                              location: '',
                              lights: !1,
                              outdoor: !0,
                            }),
                              n.toggle(),
                              window.location.reload();
                          case 9:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.state = {
                data: null,
                open: !1,
                name: null,
                number: null,
                waitlist: [],
              }),
              n
            );
          }
          return (
            Object(u.a)(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.state.data;
                  return o.a.createElement(
                    'div',
                    null,
                    o.a.createElement(
                      T.a,
                      {
                        modalElementClass: 'modal',
                        open: this.state.open,
                        onRequestClose: this.toggle,
                      },
                      o.a.createElement(
                        'div',
                        null,
                        'Waitlist Form',
                        o.a.createElement(
                          'form',
                          { onSubmit: this.waitList, className: 'wait-list' },
                          o.a.createElement(
                            'label',
                            { for: 'name' },
                            "what's your name?",
                          ),
                          o.a.createElement('input', {
                            type: 'text',
                            name: 'name',
                            value: this.state.name,
                            onChange: this.updateInput,
                            required: !0,
                          }),
                          o.a.createElement(
                            'label',
                            { for: 'number' },
                            "what's your phone number?",
                          ),
                          o.a.createElement('input', {
                            type: 'text',
                            name: 'number',
                            value: this.state.number,
                            onChange: this.updateInput,
                            required: !0,
                          }),
                          o.a.createElement(
                            'button',
                            { type: 'submit' },
                            'Submit',
                          ),
                          o.a.createElement(
                            'button',
                            { onClick: this.toggle },
                            'Close',
                          ),
                        ),
                      ),
                    ),
                    e
                      ? o.a.createElement(
                          'div',
                          { className: 'details' },
                          o.a.createElement('h1', null, this.state.data.name),
                          o.a.createElement(
                            'h3',
                            null,
                            this.state.data.hoops,
                            ' hoops',
                          ),
                          o.a.createElement(
                            'h3',
                            null,
                            this.state.data.outdoor ? 'Outdoor' : 'Indoor',
                          ),
                          o.a.createElement(
                            'h3',
                            null,
                            this.state.data.lights ? 'Has' : 'No',
                            ' lights',
                          ),
                          o.a.createElement(v, {
                            location: this.state.data.location,
                          }),
                          o.a.createElement(
                            'button',
                            { onClick: this.toggle },
                            'Sign up for waitlist',
                          ),
                          o.a.createElement(
                            'div',
                            { className: 'waitlist' },
                            o.a.createElement('h2', null, 'Waiting List'),
                            o.a.createElement(
                              'ul',
                              null,
                              'name | number | time added ',
                            ),
                            Object.values(this.state.waitlist).map(function (
                              e,
                            ) {
                              return o.a.createElement(
                                'ul',
                                null,
                                e.name,
                                ' | ',
                                e.number,
                                ' | ',
                                e.timeAdded,
                              );
                            }),
                          ),
                        )
                      : o.a.createElement(
                          'h1',
                          null,
                          'No details found! Did you come to the wrong place?',
                        ),
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        D = Object(s.e)(N),
        q = (function (e) {
          Object(d.a)(a, e);
          var t = Object(p.a)(a);
          function a() {
            var e;
            Object(c.a)(this, a);
            for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++)
              o[r] = arguments[r];
            return (
              ((e = t.call.apply(t, [this].concat(o))).clickHandler = function (
                t,
              ) {
                e.props.history.push('/');
              }),
              e
            );
          }
          return (
            Object(u.a)(a, [
              {
                key: 'render',
                value: function () {
                  return o.a.createElement(
                    'footer',
                    { onClick: this.clickHandler },
                    o.a.createElement('span', { class: 'dot' }),
                    o.a.createElement('h3', null, 'BallBuddy'),
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        A = Object(s.e)(q);
      var F = function () {
        return o.a.createElement(
          i.a,
          { basename: '/' },
          o.a.createElement(
            'div',
            { className: 'App' },
            o.a.createElement(m, null),
            o.a.createElement(s.a, { path: '/', component: C, exact: !0 }),
            o.a.createElement(s.a, { path: '/new-court', component: M }),
            o.a.createElement(s.a, { path: '/details/:id', component: D }),
            o.a.createElement(A, null),
          ),
        );
      };
      l.a.render(
        o.a.createElement(o.a.StrictMode, null, o.a.createElement(F, null)),
        document.getElementById('root'),
      );
    },
  },
  [[47, 1, 2]],
]);
//# sourceMappingURL=main.f783afa0.chunk.js.map
