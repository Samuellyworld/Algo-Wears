const INITIAL_STATE = {

sections : [ 
         {
            title: 'hats',
            imageUrl : 'https://media.gq.com/photos/5a04f9a398002d2e253679f5/master/pass/fall-hats-gq-style-0816-01-1.jpg',
            id : 1,
            linkUrl : 'shop/hats'
        },
        {
        title : 'jackets',
        imageUrl : 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
               id : 2,
               linkUrl : 'shop/jackets'    
        },
        {
           title : 'sneakers',
           imageUrl : 'https://images.unsplash.com/photo-1612902376491-7a8a99b424e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
           id : 3,
           linkUrl : 'shop/sneakers'
        },
        {
           title: 'women',
           imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
           size: 'large',
            id: 4,
          linkUrl: 'shop/women'
        },
         {
            title: 'men',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
           size: 'large',
            men : 'last',
            id: 5,
            linkUrl: 'shop/men'
  
        }
        ]
     };

     const directoryReducer = (state = INITIAL_STATE, action) => {
        switch(action.type) {
           default :
            return state;
        }
     }

     export default directoryReducer;

