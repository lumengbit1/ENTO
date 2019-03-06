import {configure} from 'mobx';

import FormStore from './FormStore/FormStore';

configure({ enforceActions: 'always' });

/*Roor Store  */
class RootStore {
  constructor() {
    this.formStore = new FormStore(this);
  }
}

  export default RootStore;