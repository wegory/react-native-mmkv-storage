import { DATA_TYPES } from "../utils";
import { handleActionAsync, handleAction } from "react-native-mmkv-storage/src/handlers";
export default class mapsIndex {
  constructor(args) {
    this.MMKV = args.mmkv;
    this.instanceID = args.instanceID;
    this.options = args;
  }

  async getKeys() {
    return await handleActionAsync(
      this.options,
      this.MMKV.getTypeIndex,
      this.instanceID,
      DATA_TYPES.MAP
    )
  }

  async hasKey(key) {
    return await handleActionAsync(
      this.options,
      this.MMKV.typeIndexerHasKey,
      this.instanceID,
      key,
      DATA_TYPES.MAP
    )
  }

  async getAll() {
    return new Promise((resolve, reject) => {
      handleAction(
        this.options,
        this.MMKV.getItemsForType,
        (error, result) => {
          
          resolve(result);
        },
        this.instanceID,
        DATA_TYPES.MAP
      )
    });
  }
}
