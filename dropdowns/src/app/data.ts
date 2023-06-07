export interface Category {
  title: string;
  children?: {[x: string]: Category};
}
export const data: {[x: string]: Category} = {
  moscowRegion: {
    title: 'Московская Область',
    children: {
      Moscow: {
        title: 'Москва',
        children: {
          district1:{
            title: 'Москва Район1',
          },
          district2:{
            title: 'Москва Район2',
          },
          district3:{
            title: 'Москва Район3',
          },
        }
      },
      Podolsk: {
        title: "Подольск",
        children: {
          district1:{
            title: 'Подольск Район1',
          },
          district2:{
            title: 'Подольск Район2',
          },
          district3:{
            title: 'Подольск Район3',
          },
        }
      },
      Himki: {
        title: "Химки",
        children: {
          district1:{
            title: 'Химки Район1',
          },
          district2:{
            title: 'Химки Район2',
          },
          district3:{
            title: 'Химки Район3',
          },
        }
      }
    }
  },
  leningradRegion: {
    title: "Ленинградская область",
    children: {
      StPetersburg: {
        title: "Санкт-Петербург",
        children: {
          district1:{
            title: 'Санкт-Петербург Район1',
          },
          district2:{
            title: 'Санкт-Петербург Район2',
          },
          district3:{
            title: 'Санкт-Петербург Район3',
          },
        }
      },
      Vuborg: {
        title: "Выборг",
        children: {
          district1:{
            title: 'Выборг Район1',
          },
          district2:{
            title: 'Выборг Район2',
          },
          district3:{
            title: 'Выборг Район3',
          },
        }
      },
      Tihvin: {
        title: "Тихвин",
        children: {
          district1:{
            title: 'Тихвин Район1',
          },
          district2:{
            title: 'Тихвин Район2',
          },
          district3:{
            title: 'Тихвин Район3',
          },
        }
      },
      Gatchina: {
        title: "Гатчина",
        children: {
          district1:{
            title: 'Гатчина Район1',
          },
          district2:{
            title: 'Гатчина Район2',
          },
          district3:{
            title: 'Гатчина Район3',
          },
        }
      },
    }
  }
}
