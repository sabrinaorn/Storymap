var config = {
    style: 'mapbox://styles/sabrina3183/ckkx4ifn317zk17o0xriw8uaa',
    accessToken: 'pk.eyJ1Ijoic2FicmluYTMxODMiLCJhIjoiY2traXB2MzJ4MGNuaDJubXF3d2tpOXB6ZyJ9._ByD3EwNjYZs9sERytHYoA',
    showMarkers: true,
    theme: 'light',
    alignment: 'left',
    title: 'Business Closures in Ottawa due to COVID-19',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'Highlander Pub',
            //image: './path/to/image/source.png',
            description: 'A well known pub on Rideau St.',
            location: {
                center: [-75.69134, 45.42669],
                zoom: 13.5,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
          },
        {
            id: 'other-identifier',
            title: 'Second Title',
            //image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 13.5,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier',
            title: 'Wheelhouse Warehouse',
            //image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-75.716660, 45.408750],
                zoom: 13.5,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []

          }
        ]
        };
