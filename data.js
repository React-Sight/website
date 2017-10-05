const allData =
  {
    name: 'Provider',
    state: null,
    id: 10,
    children: [
      {
        name: 'BrowserRouter',
        state: null,
        id: 20,
        children: [
          {
            name: 'Router',
            state: null,
            id: 30,
            children: [
              {
                name: 'Switch',
                state: null,
                id: 40,
                children: [
                  {
                    name: 'Route',
                    state: null,
                    id: 50,
                    children: [
                      {
                        name: 'App',
                        state: null,
                        id: 60,
                        children: [
                          {
                            name: 'div',
                            state: null,
                            id: 70,
                            children: [
                              {
                                name: 'Login',
                                id: 80,
                                state: {
                                  username: 'hello',
                                  password: '*********'
                                },
                                children: [
                                  {
                                    name: 'div',
                                    state: null,
                                    id: 90,
                                    children: [
                                      {
                                        name: 'form',
                                        state: null,
                                        id: 100,
                                        children: [
                                          {
                                            name: 'input',
                                            id: 110,
                                            state: null,
                                            children: [],
                                          },
                                          {
                                            name: 'input',
                                            id: 120,
                                            state: null,
                                            children: [],
                                          },
                                          {
                                            name: 'button',
                                            id: 130,
                                            state: null,
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

const noRedux =
  {
    name: 'BrowserRouter',
    state: null,
    id: 25,
    children: [
      {
        name: 'Router',
        state: null,
        id: 30,
        children: [
          {
            name: 'Switch',
            state: null,
            id: 40,
            children: [
              {
                name: 'Route',
                state: null,
                id: 50,
                children: [
                  {
                    name: 'App',
                    state: null,
                    id: 60,
                    children: [
                      {
                        name: 'div',
                        state: null,
                        id: 70,
                        children: [
                          {
                            name: 'Login',
                            id: 80,
                            state: {
                              username: 'hello',
                              password: '*********'
                            },
                            children: [
                              {
                                name: 'div',
                                state: null,
                                id: 90,
                                children: [
                                  {
                                    name: 'form',
                                    state: null,
                                    id: 100,
                                    children: [
                                      {
                                        name: 'input',
                                        id: 110,
                                        state: null,
                                        children: [],
                                      },
                                      {
                                        name: 'input',
                                        id: 120,
                                        state: null,
                                        children: [],
                                      },
                                      {
                                        name: 'button',
                                        id: 130,
                                        state: null,
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
      },
    ]
  }

const noRouter =
  {
    name: 'Provider',
    state: null,
    id: 11,
    children: [
      {
        name: 'App',
        state: null,
        id: 60,
        children: [
          {
            name: 'div',
            state: null,
            id: 70,
            children: [
              {
                name: 'Login',
                id: 80,
                state: {
                  username: 'hello',
                  password: '*********'
                },
                children: [
                  {
                    name: 'div',
                    state: null,
                    id: 90,
                    children: [
                      {
                        name: 'form',
                        state: null,
                        id: 100,
                        children: [
                          {
                            name: 'input',
                            id: 110,
                            state: null,
                            children: [],
                          },
                          {
                            name: 'input',
                            id: 120,
                            state: null,
                            children: [],
                          },
                          {
                            name: 'button',
                            id: 130,
                            state: null,
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

const noDOM =
  {
    name: 'Provider',
    state: null,
    id: 13,
    children: [
      {
        name: 'BrowserRouter',
        state: null,
        id: 20,
        children: [
          {
            name: 'Router',
            state: null,
            id: 30,
            children: [
              {
                name: 'Switch',
                state: null,
                id: 40,
                children: [
                  {
                    name: 'Route',
                    state: null,
                    id: 50,
                    children: [
                      {
                        name: 'App',
                        state: null,
                        id: 60,
                        children: [
                          {
                            name: 'Login',
                            id: 80,
                            state: {
                              username: 'hello',
                              password: '*********'
                            },
                            children: []
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

const noRouterRedux =
  {
    name: 'App',
    state: null,
    id: 60,
    children: [
      {
        name: 'div',
        state: null,
        id: 70,
        children: [
          {
            name: 'Login',
            id: 80,
            state: {
              username: 'hello',
              password: '*********'
            },
            children: [
              {
                name: 'div',
                state: null,
                id: 90,
                children: [
                  {
                    name: 'form',
                    state: null,
                    id: 100,
                    children: [
                      {
                        name: 'input',
                        id: 110,
                        state: null,
                        children: [],
                      },
                      {
                        name: 'input',
                        id: 120,
                        state: null,
                        children: [],
                      },
                      {
                        name: 'button',
                        id: 130,
                        state: null,
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

const noRouterDOM =
  {
    name: 'Provider',
    state: null,
    id: 16,
    children: [
      {
        name: 'App',
        state: null,
        id: 60,
        children: [
          {
            name: 'Login',
            id: 80,
            state: {
              username: 'hello',
              password: '*********'
            },
            children: [
            ]
          }
        ]
      }
    ]
  }

const noReduxDOM =
  {
    name: 'BrowserRouter',
    state: null,
    id: 20,
    children: [
      {
        name: 'Router',
        state: null,
        id: 30,
        children: [
          {
            name: 'Switch',
            state: null,
            id: 40,
            children: [
              {
                name: 'Route',
                state: null,
                id: 50,
                children: [
                  {
                    name: 'App',
                    state: null,
                    id: 60,
                    children: [
                      {
                        name: 'Login',
                        id: 80,
                        state: {
                          username: 'hello',
                          password: '*********'
                        },
                        children: [
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
const noRouterReduxDOM =
  {
    name: 'App',
    state: null,
    id: 60,
    children: [
      {
        name: 'Login',
        id: 80,
        state: {
          username: 'hello',
          password: '*********'
        },
        children: [
        ]
      }
    ]
  }



const datas = {
  allData,
  noRedux,
  noRouter,
  noDOM,
  noRouterRedux,
  noReduxDOM,
  noRouterDOM,
  noRouterReduxDOM
}

export default datas