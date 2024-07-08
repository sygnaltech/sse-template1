
/*
 * Page | Home
 */

import { IModule } from "@sygnal/sse";
 

export class HomePage implements IModule {

  constructor() {
  }

  setup() {
        
  }

  exec() {

    console.log("Test Homepage.");

    alert("foo.")

  }

}
