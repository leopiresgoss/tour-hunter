export const SET_TOUR_DETAIL = 'TourHunter/tour/SET_TOUR_DETAIL';
export const SET_TOUR_LOADING = 'TourHunter/tour/SET_TOUR_LOADING';

const defaultTour = {
  loading: true,
  tourDetail: {
    id: 1,
    name: 'Tour Title',
    price: 660.5,
    tour_dates: [{ id: 1, date: '2022-07-21' }, { id: 2, date: '2022-07-28' }],
    image_urls: [
      'https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80',
      'https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80',
    ],
    location: 'Rio de Janeiro',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis sapien pharetra molestie vulputate. Curabitur condimentum blandit dui, rhoncus semper sapien dictum vitae. Etiam in mi ultrices, commodo ligula quis, efficitur erat. Donec at est scelerisque mi pharetra placerat congue a orci. Morbi porttitor non augue elementum gravida. Vivamus tempor scelerisque dignissim. Vestibulum rutrum magna at pellentesque facilisis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam cursus venenatis odio in suscipit. Morbi vulputate sagittis consequat.
    
    Sed at blandit ex. Sed bibendum viverra erat vel venenatis. Maecenas euismod tempor sapien vitae pulvinar. Curabitur vitae porttitor ante, eu auctor dolor. Vestibulum at justo dui. Suspendisse quis velit venenatis, ornare odio et, maximus est. Nulla facilisi. Aenean viverra felis nec turpis consequat vestibulum.`,
  },
};

export default function tourReducer(state = defaultTour, action) {
  switch (action.type) {
    case SET_TOUR_DETAIL: {
      return { ...state, tourDetail: action.tourDetail };
    }
    case SET_TOUR_LOADING: {
      return { ...state, loading: action.loading };
    }
    default:
      return state;
  }
}

export function setTourDetail(tourDetail) {
  return { type: SET_TOUR_DETAIL, tourDetail };
}

export function setTourLoading(loading) {
  return { type: SET_TOUR_LOADING, loading };
}
