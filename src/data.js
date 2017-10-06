const allData =
  {
    name: 'Provider',
    state: null,
    props: {
      store: {
        liftedStore: {}
      },
      children: {
        name: 'BrowserRouter'
      }
    },
    id: 10,
    children: [
      {
        name: 'BrowserRouter',
        state: null,
        props: {
          history: {
            length: 5,
            action: "POP",
            location: {
              pathname: "/",
              search: "",
              hash: ""
            },
          },
          children: {
            name: 'Switch'
          }
        },
        id: 20,
        children: [
          {
            name: 'Router',
            state: {
              match: {
                path: '/',
                url: '/',
                params: {},
                isExact: true,
              },
            },
            props: {
              history: {
                length: 5,
                action: 'POP',
                location: {
                  pathname: '/',
                  search: '',
                  hash: '',
                }
              },
              children: {
                name: 'Switch'
              },
            },
            id: 30,
            children: [
              {
                name: 'Switch',
                state: null,
                props: {
                  children: [
                    'Route',
                    'Route',
                  ]
                },
                id: 40,
                children: [
                  {
                    name: 'Route',
                    state: {
                      match: {
                        path: '/',
                        url: '/',
                        isExact: true,
                        params: {}
                      }
                    },
                    props: {
                      exact: true,
                      path: '/',
                      component: 'fn()',
                      location: {
                        pathname: '/',
                        search: '',
                        hash: ''
                      },
                      computedMatch: {
                        path: '/',
                        url: '/'
                      }
                    },
                    id: 50,
                    children: [
                      {
                        name: 'App',
                        state: null,
                        props: {
                          match: {
                            path: '/',
                            url: '/',
                            isExact: true,
                            params: {}
                          },
                          location: {
                            pathname: '/',
                            search: '',
                            hash: ''
                          },
                          history: {
                            length: 5,
                            action: 'POP',
                            location: {
                              pathname: '/',
                              search: '',
                              hash: '',
                            }
                          },
                        },
                        id: 60,
                        children: [
                          {
                            name: 'div',
                            state: null,
                            props: {
                              children: [
                                "h1",
                                "Login",
                              ]
                            },
                            id: 70,
                            children: [
                              {
                                name: 'h1',
                                id: 400,
                                state: null,
                                props: {
                                  children: ''
                                }
                              },
                              {
                                name: 'Login',
                                id: 80,
                                state: {
                                  username: 'hello',
                                  password: '*********',
                                  isLoggedIn: false,
                                },
                                props: {},
                                children: [
                                  {
                                    name: 'div',
                                    state: null,
                                    props: {
                                      className: 'login',
                                      children: {}
                                    },
                                    id: 90,
                                    children: [
                                      {
                                        name: 'form',
                                        state: null,
                                        props: {
                                          children: [
                                            'input',
                                            'input',
                                            'button',
                                          ]
                                        },
                                        id: 100,
                                        children: [
                                          {
                                            name: 'input',
                                            id: 110,
                                            state: null,
                                            props: {
                                              type: 'text',
                                              placeholder: 'username',
                                              onChange: 'fn()',
                                            },
                                            children: [],
                                          },
                                          {
                                            name: 'input',
                                            id: 120,
                                            state: null,
                                            props: {
                                              type: 'text',
                                              placeholder: 'password',
                                              onChange: 'fn()',
                                            },
                                            children: [],
                                          },
                                          {
                                            name: 'button',
                                            id: 130,
                                            state: null,
                                            props: {
                                              type: 'submit',
                                              onClick: 'fn()',
                                              children: ''
                                            },

                                            children: [],
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }

  export default allData;