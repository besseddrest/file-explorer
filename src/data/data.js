const explorerData = {
  id: '1',
  name: 'root',
  isFolder: true,
  items: [
    {
      id: '2',
      name: 'foo',
      isFolder: true,
      items: [
        {
          id: '2a',
          name: 'hello',
          isFolder: true,
          items: [
            {
              id: '2aa',
              name: 'world',
              isFolder: false,
              items: []
            }
          ]
        }
      ],
    },
    {
      id: '3',
      name: 'bar',
      isFolder: true,
      items: [
        {
          id: '3a',
          name: 'lorem',
          isFolder: true,
          items: [
            {
              id: '3aa',
              name: 'ipsum',
              isFolder: true,
              items: [
                {
                  id: '3aaa',
                  name: 'danny.js',
                  isFolder: false,
                  items: []
                },
                {
                  id: '3aab',
                  name: 'coyles.js',
                  isFolder: false,
                  items: []
                }
              ]
            }
          ]
        }
      ],
    },
    {
      id: '4',
      name: 'foobar-sibling.js',
      isFolder: false,
      items: [],
    }
  ]
}

export default explorerData;