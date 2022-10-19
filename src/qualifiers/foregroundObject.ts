/**
 * @memberOf Qualifiers
 * @description This namespace contains all the foreground objects used in the SDK
 * @namespace ForegroundObject
 * @example
 * import {ForegroundObject} from '@cloudinary/url-gen/qualifiers/foregroundObject'
 */

const ForegroundObject = {
  AIRPLANE: 'airplane',
  BUS: 'bus',
  DINING_TABLE: 'dining_table',
  SHEEP: 'sheep',
  BICYCLE: 'bicycle',
  CAR: 'car',
  DOG: 'dog',
  SOFA: 'sofa',
  BIRD: 'bird',
  CAT: 'cat',
  HORSE: 'horse',
  TRAIN: 'train',
  BOAT: 'boat',
  CHAIR: 'chair',
  PERSON: 'person',
  TV: 'tv',
  BOTTLE: 'bottle',
  COW: 'cow',
  POTTED_PLANT: 'potted_plant',
  MOTORBIKE: 'motorbike',
} as const;

export {ForegroundObject};
export type ForegroundObjectValue = typeof ForegroundObject[keyof typeof ForegroundObject];
