import * as migration_20260806_015513_initial from './20260806_015513_initial';

export const migrations = [
  {
    up: migration_20260806_015513_initial.up,
    down: migration_20260806_015513_initial.down,
    name: '20260806_015513_initial'
  },
];
