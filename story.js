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
            description: 'Wheelhouse is a gym that is based around group indoor cycling class. As a response to the pandemic and provincial measures regarding the gyms and exercise class Wheelhouse had to continuously adapt its business model and locations. Prior to the pandemic Wheelhouse had a location on West Wellington and Bank street. Neither of these locations could adapt to the provincial requirements for gyms to open so they opened Wheelhouse at the Warehouse location and permanently closed their doors at the Wellington location.',
            location: {
                center: [-75.716660, 45.408750],
                zoom: 13.5,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []

          }
            {
            id: 'other-identifier',
            title: 'Plant and Curio',
            //image: './path/to/image/source.png',
            description: 'Plant and Curio though not permanently closed adapted its business model during the summer-fall months of the pandemic to have outdoors shopping on the patio/steps of their shop. During winter prior to the shutdown they switched models to primarily online to deal with reduced capacity allowed in store.',
            location: {
                center: [-75.712900, 45.406850,],
                zoom: 13.5,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []

          }
        
        ]
        };
