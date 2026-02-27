export interface AudioTrack {
  id: string;
  title: string;
  composer: string;
  duration: string;
  src?: string;
}

export const audioTracks: AudioTrack[] = [
  {
    id: '1',
    title: 'Clair de Lune',
    composer: 'Claude Debussy',
    duration: '5:24',
    src: '/audio/clair-de-lune.mp3',
  },
  {
    id: '2',
    title: 'Canon in D',
    composer: 'Johann Pachelbel',
    duration: '4:32',
    src: '/audio/canon-in-d.mp3',
  },
  {
    id: '3',
    title: 'Ave Maria',
    composer: 'Franz Schubert',
    duration: '4:48',
    src: '/audio/ave-maria.mp3',
  },
  {
    id: '4',
    title: 'Wedding March',
    composer: 'Felix Mendelssohn',
    duration: '3:15',
    src: '/audio/wedding-march.mp3',
  },
  {
    id: '5',
    title: 'Nocturne Op. 9 No. 2',
    composer: 'Frédéric Chopin',
    duration: '4:35',
    src: '/audio/nocturne-op9-no2.mp3',
  },
  {
    id: '6',
    title: 'Amazing Grace',
    composer: 'Traditional Hymn',
    duration: '3:42',
    src: '/audio/amazing-grace.mp3',
  },
];
